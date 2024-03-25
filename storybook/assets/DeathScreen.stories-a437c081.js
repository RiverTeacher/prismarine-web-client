import{j as e,a as n}from"./jsx-runtime-37f7df21.js";import{b as d}from"./MessageFormattedString-e3ac1020.js";import{B as t}from"./utils-69ebb831.js";import"./index-f1f2c4b1.js";import"./DiveTransition-4aefebca.js";import"./inheritsLoose-c82a83d4.js";import"./index-c74c9f7f.js";const m=({dieReasonMessage:r,respawnCallback:l,disconnectCallback:i})=>e("div",{className:"deathScreen-container",children:n("div",{className:"deathScreen",children:[e("h1",{className:"deathScreen-title",children:"You Died!"}),e("h5",{className:"deathScreen-reason",children:e(d,{parts:r})}),n("div",{className:"deathScreen-buttons-grouped",children:[e(t,{label:"Respawn",onClick:()=>{l()}}),e(t,{label:"Disconnnect",onClick:()=>{i()}})]})]})});try{DeathScreen.displayName="DeathScreen",DeathScreen.__docgenInfo={description:"",displayName:"DeathScreen",props:{dieReasonMessage:{defaultValue:null,description:"",name:"dieReasonMessage",required:!0,type:{name:"MessageFormatPart[]"}},respawnCallback:{defaultValue:null,description:"",name:"respawnCallback",required:!0,type:{name:"() => void"}},disconnectCallback:{defaultValue:null,description:"",name:"disconnectCallback",required:!0,type:{name:"() => void"}}}}}catch{}const C={component:m},a={args:{dieReasonMessage:[{text:"test"}],respawnCallback(){},disconnectCallback(){}}};var s,c,o;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    dieReasonMessage: [{
      text: 'test'
    }],
    respawnCallback() {},
    disconnectCallback() {}
  }
}`,...(o=(c=a.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};const _=["Primary"];export{a as Primary,_ as __namedExportsOrder,C as default};
//# sourceMappingURL=DeathScreen.stories-a437c081.js.map
