import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as t,t as p}from"./textColor-Dt7bNVQe.js";import{s as a}from"./spacing-tE1IiUFl.js";import{s as v}from"./shadow-DVq_1U2q.js";import{c as o}from"./color-CiwAFuFb.js";import{f as n}from"./fontFamily-CsG1KcIF.js";import{r as k}from"./radius-DaoU83SK.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as g}from"./typography-BBThIZ7c.js";import"./IconSearch-BmX69--2.js";import{I as $}from"./IconCheck-CKtc9n1_.js";import"./iframe-7NLoKurR.js";const f=({children:r,className:i,...s})=>e.jsx(q,{className:i,...s,children:r}),q=t.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1"]};
  box-shadow: ${v.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: 300px;

  &[lang="ko"] {
    font-family: ${n.ko};
  }

  &[lang="en"] {
    font-family: ${n.en};
  }

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
    background: ${o.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${o.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${o.gray[200]} transparent;
`;f.displayName="Menu";f.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const h=({disable:r=!1,active:i=!1,leadingIcon:s,text:c,description:m,trailingIcon:u,onClick:l,className:y,lang:b})=>{const d=()=>r?p.light["fg-neutral-disable"]:p.light["fg-neutral-primary"],x=()=>i&&!r;return e.jsxs(T,{disable:r,active:i,"data-disable":r,onClick:r?void 0:w=>l==null?void 0:l(w),className:y,lang:b,children:[s&&e.jsx(j,{children:e.jsx(s,{width:16,height:16,color:d()})}),e.jsxs(R,{children:[c&&e.jsx(C,{children:c}),m&&e.jsx(I,{children:m})]}),x()&&e.jsx(M,{children:u?e.jsx(u,{width:16,height:16,color:d()}):e.jsx($,{width:16,height:16,color:d()})})]})},T=t.div`
  display: flex;
  align-items: center;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1.5"]} ${a.gap["gap-2"]};
  border-radius: ${k["rounded-1"]};
  background-color: ${o.common[100]};
  cursor: ${({disable:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${o.gray[50]};
  }
`,j=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,R=t.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,C=t.div`
  ${g(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${n.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${n.ko};
  }
  color: inherit;
`,I=t.div`
  ${g(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${n.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${n.ko};
  }
  color: ${p.light["fg-neutral-alternative"]};
`,M=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;h.displayName="Cell";h.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{h as C,f as M};
