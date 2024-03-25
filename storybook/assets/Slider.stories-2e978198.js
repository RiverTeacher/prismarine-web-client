import{a as h,j as m}from"./jsx-runtime-37f7df21.js";import{r as d}from"./index-f1f2c4b1.js";const U="_slider_17p1y_1",C="_disabled_17p1y_76",M="_label_17p1y_107",r={"slider-container":"_slider-container_17p1y_1","slider-thumb":"_slider-thumb_17p1y_13",slider:U,disabled:C,label:M},f=({label:s,unit:x="%",width:R,value:o,valueDisplay:S,min:t=0,max:p=100,disabledReason:y,updateOnDragEnd:O=!1,updateValue:c,...j})=>{const[e,b]=d.useState(o),_=(a=e)=>Math.max(Math.min((a-t)/(p-t),1),0),[g,w]=d.useState(_());d.useEffect(()=>{b(o)},[o]),d.useEffect(()=>{w(_())},[e,t,p]);const l=(a,n=e)=>{O===a&&(c==null||c(n))};return h("div",{className:r["slider-container"],style:{width:R},...j,children:[m("input",{type:"range",className:r.slider,min:t,max:p,value:e,disabled:!!y,onChange:a=>{const n=Number(a.target.value);b(n),l(!1,n)},onLostPointerCapture:()=>{l(!0)},onPointerUp:()=>{l(!0)},onKeyUp:()=>{l(!0)}}),m("div",{className:r.disabled,title:y}),m("div",{className:r["slider-thumb"],style:{left:`calc((100% * ${g}) - (8px * ${g}))`}}),h("label",{className:r.label,children:[s,": ",S??e," ",x]})]})};try{f.displayName="Slider",f.__docgenInfo={description:"",displayName:"Slider",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},unit:{defaultValue:{value:"%"},description:"",name:"unit",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}},valueDisplay:{defaultValue:null,description:"",name:"valueDisplay",required:!1,type:{name:"string | number"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},disabledReason:{defaultValue:null,description:"",name:"disabledReason",required:!1,type:{name:"string"}},updateValue:{defaultValue:null,description:"",name:"updateValue",required:!1,type:{name:"((value: number) => void)"}},updateOnDragEnd:{defaultValue:{value:"false"},description:"",name:"updateOnDragEnd",required:!1,type:{name:"boolean"}}}}}catch{}const I={component:f,args:{label:"happiness",value:0,updateValue(s){console.log("updateValue",s)}}},i={args:{updateOnDragEnd:!0,disabledReason:void 0}},u={args:{disabledReason:"you are not happy enough"}};var v,V,q;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    updateOnDragEnd: true,
    disabledReason: undefined
  }
}`,...(q=(V=i.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var D,E,N;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabledReason: 'you are not happy enough'
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};const K=["Primary","Disabled"];export{u as Disabled,i as Primary,K as __namedExportsOrder,I as default};
//# sourceMappingURL=Slider.stories-2e978198.js.map
