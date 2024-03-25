import{a as c,j as r}from"./jsx-runtime-37f7df21.js";import{r as s}from"./index-f1f2c4b1.js";import{C as h,c as _,f as C,a as S}from"./MessageFormattedString-e3ac1020.js";import{B as d}from"./utils-69ebb831.js";import"./DiveTransition-4aefebca.js";import"./inheritsLoose-c82a83d4.js";import"./index-c74c9f7f.js";window.spamMessage=window.spamMessage??"";window.loadedData={language:{}};const B={component:h,render(n){const[m,i]=s.useState(n.messages),[p,x]=s.useState(!1),[u,l]=s.useState(n.opened);s.useEffect(()=>{const e=new AbortController;return addEventListener("keyup",t=>{t.code==="KeyY"&&(_.value="/",l(!0),t.stopImmediatePropagation()),t.code==="Escape"&&(l(!1),t.stopImmediatePropagation())},{signal:e.signal}),()=>e.abort()}),s.useEffect(()=>{i(n.messages)},[n.messages]),s.useEffect(()=>{if(!p)return;const e=()=>{const o=window.spamMessage?C(window.spamMessage):[{text:"tes"},{text:"t"}];i(a=>[...a,...Array.from({length:10}).map((g,k)=>{var w;return{id:(((w=a.at(-1))==null?void 0:w.id)??0)+k+1,parts:o}})])},t=setInterval(()=>e(),5e3);return e(),()=>clearInterval(t)},[p]);const E=()=>{for(const e of m)S(e,!1,()=>{i([...m])})};return c("div",{style:{marginTop:n.usingTouch?100:0},children:[c("div",{style:{fontSize:6,userSelect:"auto",color:"gray"},children:["Hint: you can capture needed message with ",r("code",{children:"bot.on('message', console.log)"}),", copy object, and assign it here to ",r("code",{children:"window.spamMessage"})," variable (but ensure the correct frame window is selected in devtools)"]}),r(h,{...n,opened:u,messages:m,onClose:()=>l(!1),fetchCompletionItems:async(e,t)=>{console.log("fetchCompletionItems"),await new Promise(a=>{setTimeout(a,0)});let o=["test",...Array.from({length:50}).map((a,g)=>`minecraft:hello${g}`)];return t==="/"&&(o=o.map(a=>`/${a}`)),o}}),c(d,{onClick:()=>l(e=>!e),children:["Open: ",u?"on":"off"]}),r(d,{onClick:()=>E(),children:"Fade"}),c(d,{onClick:()=>x(e=>!e),children:["Auto Spam: ",p?"on":"off"]}),r(d,{onClick:()=>i(n.messages),children:"Reset"})]})}},f={args:{usingTouch:!1,allowSelection:!1,messages:[{parts:[{bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1,json:{insertion:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}},text:"pviewer672"},text:"pviewer672",clickEvent:{action:"suggest_command",value:"/tell pviewer672 "},hoverEvent:{action:"show_entity",contents:{type:"minecraft:player",id:"ecd0eeb1-625e-3fea-b16e-cb449dcfa434",name:{text:"pviewer672"}}}},{text:" joined the game",color:"yellow",bold:!1,italic:!1,underlined:!1,strikethrough:!1,obfuscated:!1}],id:0}]}};var v,b,y;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    usingTouch: false,
    allowSelection: false,
    messages: [{
      parts: [{
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false,
        'json': {
          'insertion': 'pviewer672',
          'clickEvent': {
            'action': 'suggest_command',
            'value': '/tell pviewer672 '
          },
          'hoverEvent': {
            'action': 'show_entity',
            'contents': {
              'type': 'minecraft:player',
              'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
              'name': {
                'text': 'pviewer672'
              }
            }
          },
          'text': 'pviewer672'
        },
        'text': 'pviewer672',
        'clickEvent': {
          'action': 'suggest_command',
          'value': '/tell pviewer672 '
        },
        'hoverEvent': {
          'action': 'show_entity',
          //@ts-expect-error
          'contents': {
            'type': 'minecraft:player',
            'id': 'ecd0eeb1-625e-3fea-b16e-cb449dcfa434',
            'name': {
              'text': 'pviewer672'
            }
          }
        }
      }, {
        'text': ' joined the game',
        'color': 'yellow',
        'bold': false,
        'italic': false,
        'underlined': false,
        'strikethrough': false,
        'obfuscated': false
      }],
      id: 0
    }]
    // opened: false,
  }
}`,...(y=(b=f.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const $=["Primary"];export{f as Primary,$ as __namedExportsOrder,B as default};
//# sourceMappingURL=Chat.stories-efcbca0b.js.map
