//@ts-check
import * as esbuild from 'esbuild'
import fs from 'fs'
// import htmlPlugin from '@chialab/esbuild-plugin-html'
import server from './server.js'
import { analyzeMetafile } from 'esbuild'
import { clients, plugins } from './scripts/esbuildPlugins.mjs'
import { generateSW } from 'workbox-build'
import { getSwAdditionalEntries } from './scripts/build.js'

/** @type {import('esbuild').BuildOptions} */
let baseConfig = {}

// // legacy html config
// baseConfig = {
//   entryPoints: ['index.html'],
//   assetNames: 'assets/[name]',
//   chunkNames: '[ext]/[name]',
//   outdir: 'dist',
//   outfile: undefined,
//   plugins: [
//     htmlPlugin({
//       scriptsTarget: 'esnext',
//     })
//   ],
// }

// // testing config
// baseConfig = {
//   entryPoints: ['files/index.js'],
//   outfile: 'out.js',
//   outdir: undefined,
// }

fs.copyFileSync('index.html', 'dist/index.html')
fs.writeFileSync('dist/index.html', fs.readFileSync('dist/index.html', 'utf8').replace('<!-- inject script -->', '<script src="index.js"></script>'), 'utf8')

const banner = [
  'window.global = globalThis;',
  // auto-reload
  '(() => new EventSource("/esbuild").onmessage = ({ data: _data }) => {const data = JSON.parse(_data);if (!data.update)return;sessionStorage.lastReload = JSON.stringify({buildTime:data.update.time, reloadStart:Date.now()});location.reload()})();'
]

const buildingVersion = new Date().toISOString().split(':')[0]

const ctx = await esbuild.context({
  bundle: true,
  entryPoints: ['src/index.js'],
  logLevel: 'info',
  platform: 'browser',
  sourcemap: true,
  outdir: 'dist',
  mainFields: [
    'browser', 'module', 'main'
  ],
  keepNames: true,
  ...baseConfig,
  banner: {
    js: banner.join('\n')
  },
  alias: {
    events: 'events', // make explicit
    buffer: 'buffer',
    'fs': 'browserfs/dist/shims/fs.js',
    http: 'http-browserify',
    perf_hooks: './src/perf_hooks_replacement.js',
    crypto: './src/crypto.js',
    stream: 'stream-browserify',
    net: 'net-browserify',
    dns: './src/dns.js'
  },
  inject: [
    './src/shims.js'
  ],
  metafile: true,
  plugins: [
    ...plugins,
    ...baseConfig.plugins ?? [],
  ],
  minify: process.argv.includes('--minify'),
  define: {
    'process.env.BUILD_VERSION': process.argv.includes('--watch') ? undefined : JSON.stringify(buildingVersion),
    'process.env.GITHUB_URL':
      JSON.stringify(`https://github.com/${process.env.GITHUB_REPOSITORY || `${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}`}`)
  },
  // chunkNames: '[name]',
})

if (process.argv.includes('--watch')) {
  await ctx.watch()
  server.app.get('/esbuild', (req, res, next) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    })

    // Send a comment to keep the connection alive
    res.write(': ping\n\n')

    // Add the client response to the clients array
    clients.push(res)

    // Handle any client disconnection logic
    res.on('close', () => {
      const index = clients.indexOf(res)
      if (index !== -1) {
        clients.splice(index, 1)
      }
    })
  })
} else {
  fs.writeFileSync('dist/version.txt', buildingVersion, 'utf-8')
  const result = await ctx.rebuild()
  // console.log(await analyzeMetafile(result.metafile))

  const { count, size, warnings } = await generateSW({
    // dontCacheBustURLsMatching: [new RegExp('...')],
    globDirectory: 'dist',
    additionalManifestEntries: getSwAdditionalEntries(),
    swDest: 'dist/service-worker.js',
  })

  await ctx.dispose()
}