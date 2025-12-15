import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./styled-components.browser.esm-C8ZrTVSh.js";import{c as y}from"./color-CiwAFuFb.js";import{t as c}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import{p as u,n as m}from"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as r}from"./typography-hbgufnaT.js";import{s as d}from"./spacing-tE1IiUFl.js";import{I as x,a as j}from"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./iframe-BWSb8WuG.js";const f=({children:a,type:i="default",className:n="",lang:l,...s})=>{const o=l,p=()=>{switch(i){case"required":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(q,{children:"*"})]});case"optional":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(I,{children:"(선택)"})]});default:return e.jsx("span",{children:a})}};return e.jsx($,{$type:i,lang:o,className:n,...s,children:p()})},$=t.label`
  ${r(void 0,"body2","medium")}
  font-family: inherit;
  height: 20px;
  display: flex;
  align-items: center;
  color: ${c.light["fg-neutral-strong"]};
`,q=t.span`
  ${r(void 0,"caption2","regular")}
  color: ${y.red[500]};
  margin-left: ${d.gap["gap-0.5"]};
`,I=t.span`
  ${r(void 0,"body2","regular")}
  color: ${c.light["fg-neutral-alternative"]};
  margin-left: ${d.gap["gap-0.5"]};
`;f.displayName="Label";f.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const g=({children:a,status:i="default",leadingIcon:n=!1,className:l="",lang:s,...o})=>{const p=s,h=()=>{if(!n)return null;switch(i){case"negative":return e.jsx(N,{children:e.jsx(j,{})});case"positive":return e.jsx(R,{children:e.jsx(x,{})});default:return null}};return e.jsxs(w,{status:i,lang:p,className:l,...o,children:[h(),e.jsx("span",{children:a})]})},w=t.div`
  ${r(void 0,"caption2","regular")}
  font-family: inherit;
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:a})=>{switch(a){case"negative":return m.light["fg-negative-primary"];case"positive":return u.light["fg-positive-primary"];default:return c.light["fg-neutral-assistive"]}}};
`,v=t.div`
  width: 16px;
  height: 16px;
  margin-right: ${d.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,N=t(v)`
  color: ${m.light["fg-negative-primary"]};
`,R=t(v)`
  color: ${u.light["fg-positive-primary"]};
`;g.displayName="Description";g.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{g as D,f as L};
