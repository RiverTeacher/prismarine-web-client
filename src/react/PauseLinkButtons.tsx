import { useSnapshot } from 'valtio'
import { openURL } from 'minecraft-renderer/src/lib/simpleUtils'
import { ErrorBoundary } from '@zardoy/react-util'
import { miscUiState } from '../globalState'
import Button from './Button'
import styles from './PauseScreen.module.css'

function PauseLinkButtonsInner () {
  const { appConfig } = useSnapshot(miscUiState)
  // GitHub / Discord links are intentionally hidden in this fork: drop them
  // even if a config file still lists them, and drop rows that become empty.
  const pauseLinksConfig = appConfig?.pauseLinks
    ?.map(row => row.filter(button => button.type !== 'github' && button.type !== 'discord'))
    .filter(row => row.length > 0)

  if (!pauseLinksConfig?.length) return null

  const renderButton = (button: Record<string, any>, style: React.CSSProperties, key: number) => {
    if (button.type === 'url' && button.text) {
      return <Button key={key} className="button" style={style} onClick={() => openURL(button.url)}>{button.text}</Button>
    }
    return null
  }

  return (
    <>
      {pauseLinksConfig.map((row, i) => {
        const style = { width: (204 / row.length - (row.length > 1 ? 4 : 0)) + 'px' }
        return (
          <div key={i} className={styles.row}>
            {row.map((button, k) => renderButton(button, style, k))}
          </div>
        )
      })}
    </>
  )
}

export default () => {
  return <ErrorBoundary renderError={(error) => {
    console.error(error)
    return null
  }}>
    <PauseLinkButtonsInner />
  </ErrorBoundary>
}
