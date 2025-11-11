import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./iframe-B3AntG9Q.js";import{d as t,t as g}from"./textColor-Cq70r64R.js";import{s as a}from"./spacing-tE1IiUFl.js";import{s as $}from"./shadow-DVq_1U2q.js";import{c as i}from"./color-CiwAFuFb.js";import{f as o}from"./fontFamily-CsG1KcIF.js";import{r as q}from"./radius-DaoU83SK.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as f}from"./typography-BBThIZ7c.js";import"./IconSearch-BmX69--2.js";import{I as T}from"./IconCheck-CKtc9n1_.js";const h=({children:e,className:s,width:l,showCheckIcon:d=!0,...p})=>{const u=c.Children.map(e,n=>c.isValidElement(n)&&n.props.showCheckIcon===void 0?c.cloneElement(n,{showCheckIcon:d}):n);return r.jsx(j,{className:s,$width:l,...p,children:u})},j=t.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1"]};
  box-shadow: ${$.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e||"300px"};

  &[lang="ko"] {
    font-family: ${o.ko};
  }

  &[lang="en"] {
    font-family: ${o.en};
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
    background: ${i.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${i.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${i.gray[200]} transparent;
`;h.displayName="Menu";h.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const y=({disable:e=!1,active:s=!1,leadingIcon:l,text:d,description:p,trailingIcon:u,onClick:n,className:b,lang:w,showCheckIcon:x=!0})=>{const m=()=>e?g.light["fg-neutral-disable"]:g.light["fg-neutral-primary"],v=()=>s&&!e&&x;return r.jsxs(C,{disable:e,active:s,"data-disable":e,onClick:e?void 0:k=>n==null?void 0:n(k),className:b,lang:w,children:[l&&r.jsx(R,{children:r.jsx(l,{width:16,height:16,color:m()})}),r.jsxs(I,{children:[d&&r.jsx(M,{children:d}),p&&r.jsx(N,{children:p})]}),v()&&r.jsx(E,{children:u?r.jsx(u,{width:16,height:16,color:m()}):r.jsx(T,{width:16,height:16,color:m()})})]})},C=t.div`
  display: flex;
  align-items: center;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1.5"]} ${a.gap["gap-2"]};
  border-radius: ${q["rounded-1"]};
  background-color: ${i.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${i.gray[50]};
  }
`,R=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,I=t.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,M=t.div`
  ${f(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${o.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${o.ko};
  }
  color: inherit;
`,N=t.div`
  ${f(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${o.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${o.ko};
  }
  color: ${g.light["fg-neutral-alternative"]};
`,E=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;y.displayName="Cell";y.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{y as C,h as M};
