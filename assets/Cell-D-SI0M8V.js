import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./iframe-BWSb8WuG.js";import{d as o}from"./styled-components.browser.esm-C8ZrTVSh.js";import{s as n}from"./spacing-tE1IiUFl.js";import{s as k}from"./shadow-DVq_1U2q.js";import{c as a}from"./color-CiwAFuFb.js";import{b as q}from"./borderColor-C_RHITEf.js";import{r as T}from"./radius-DaoU83SK.js";import{t as m}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import{t as g}from"./typography-hbgufnaT.js";import"./IconSearch-D4pbJy3T.js";import{I as C}from"./IconCheck-CKtc9n1_.js";const f=({children:e,className:i,width:s,showCheckIcon:l=!0,...d})=>{const p=c.Children.map(e,t=>c.isValidElement(t)&&t.props.showCheckIcon===void 0?c.cloneElement(t,{showCheckIcon:l}):t);return r.jsx($,{className:i,$width:s,...d,children:p})},$=o.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1"]};
  box-shadow: ${k.light["shadow-md"]};
  background-color: white;
  border: 1px solid ${q.light["color-border-primary"]};
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e||"300px"};

  font-family: inherit;

  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${a.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${a.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${a.gray[200]} transparent;
`;f.displayName="Menu";f.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const h=({disable:e=!1,active:i=!1,leadingContent:s,text:l,description:d,trailingIcon:p,onClick:t,className:y,lang:b,showCheckIcon:x=!0})=>{const u=()=>e?m.light["fg-neutral-disable"]:m.light["fg-neutral-primary"],w=()=>i&&!e&&x;return r.jsxs(j,{disable:e,active:i,"data-disable":e,onClick:e?void 0:v=>t==null?void 0:t(v),className:y,lang:b,children:[s&&r.jsx(R,{children:r.jsx(s,{color:u()})}),r.jsxs(I,{children:[l&&r.jsx(M,{children:l}),d&&r.jsx(N,{children:d})]}),w()&&r.jsx(E,{children:p?r.jsx(p,{color:u()}):r.jsx(C,{width:16,height:16,color:u()})})]})},j=o.div`
  display: flex;
  align-items: center;
  gap: ${n.gap["gap-2"]};
  padding: ${n.gap["gap-1.5"]} ${n.gap["gap-2"]};
  border-radius: ${T["rounded-1"]};
  background-color: ${a.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${a.gray[50]};
  }
`,R=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,I=o.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,M=o.div`
  ${g(void 0,"body2","regular")}
  font-family: inherit;
  color: inherit;
`,N=o.div`
  ${g(void 0,"caption2","regular")}
  font-family: inherit;
  color: ${m.light["fg-neutral-alternative"]};
`,E=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;h.displayName="Cell";h.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingContent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{h as C,f as M};
