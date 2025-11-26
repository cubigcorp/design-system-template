import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as t}from"./styled-components.browser.esm-DPhkORiP.js";import{c as x}from"./color-CiwAFuFb.js";import{t as d}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import{p as m,n as f}from"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{f as i}from"./fontFamily-CsG1KcIF.js";import{t as r}from"./typography-BBThIZ7c.js";import{s as u}from"./spacing-tE1IiUFl.js";import{I as $,a as j}from"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./iframe-C8Me4DqF.js";const g=({children:a,type:n="default",className:l="",lang:o,...s})=>{const p=o,c=()=>{switch(n){case"required":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(k,{children:"*"})]});case"optional":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(I,{children:"(선택)"})]});default:return e.jsx("span",{children:a})}};return e.jsx(q,{$type:n,lang:p,className:l,...s,children:c()})},q=t.label`
  ${r(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${i.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${i.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${d.light["fg-neutral-strong"]};
`,k=t.span`
  ${r(void 0,"caption2","regular")}
  color: ${x.red[500]};
  margin-left: ${u.gap["gap-0.5"]};
`,I=t.span`
  ${r(void 0,"body2","regular")}
  color: ${d.light["fg-neutral-alternative"]};
  margin-left: ${u.gap["gap-0.5"]};
`;g.displayName="Label";g.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const v=({children:a,status:n="default",leadingIcon:l=!1,className:o="",lang:s,...p})=>{const c=s,h=()=>{if(!l)return null;switch(n){case"negative":return e.jsx(N,{children:e.jsx(j,{})});case"positive":return e.jsx(R,{children:e.jsx($,{})});default:return null}};return e.jsxs(w,{status:n,lang:c,className:o,...p,children:[h(),e.jsx("span",{children:a})]})},w=t.div`
  ${r(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${i.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${i.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:a})=>{switch(a){case"negative":return f.light["fg-negative-primary"];case"positive":return m.light["fg-positive-primary"];default:return d.light["fg-neutral-assistive"]}}};
`,y=t.div`
  width: 16px;
  height: 16px;
  margin-right: ${u.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,N=t(y)`
  color: ${f.light["fg-negative-primary"]};
`,R=t(y)`
  color: ${m.light["fg-positive-primary"]};
`;v.displayName="Description";v.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{v as D,g as L};
