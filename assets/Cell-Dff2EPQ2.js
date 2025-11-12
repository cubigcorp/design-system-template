import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./iframe-BmWS9Sei.js";import{d as n,t as g}from"./textColor-DMnf996G.js";import{s as o}from"./spacing-tE1IiUFl.js";import{s as $}from"./shadow-DVq_1U2q.js";import{c as s}from"./color-CiwAFuFb.js";import{f as i}from"./fontFamily-CsG1KcIF.js";import{r as R}from"./radius-DaoU83SK.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as f}from"./typography-BBThIZ7c.js";import"./IconSearch-BmX69--2.js";import{I as T}from"./IconCheck-CKtc9n1_.js";const h=({children:e,className:l,width:a,showCheckIcon:d=!0,...p})=>{const c=m.Children.map(e,t=>m.isValidElement(t)&&t.props.showCheckIcon===void 0?m.cloneElement(t,{showCheckIcon:d}):t);return r.jsx(q,{className:l,$width:a,...p,children:c})},q=n.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
  padding: ${o.gap["gap-1"]};
  box-shadow: ${$.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e||"300px"};

  &[lang="ko"] {
    font-family: ${i.ko};
  }

  &[lang="en"] {
    font-family: ${i.en};
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
    background: ${s.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${s.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${s.gray[200]} transparent;
`;h.displayName="Menu";h.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const y=({disable:e=!1,active:l=!1,leadingContent:a,text:d,description:p,trailingIcon:c,onClick:t,className:b,lang:w,showCheckIcon:x=!0})=>{const u=()=>e?g.light["fg-neutral-disable"]:g.light["fg-neutral-primary"],v=()=>l&&!e&&x;return r.jsxs(j,{disable:e,active:l,"data-disable":e,onClick:e?void 0:k=>t==null?void 0:t(k),className:b,lang:w,children:[a&&r.jsx(C,{children:typeof a=="function"?m.createElement(a,{width:16,height:16,color:u()}):a}),r.jsxs(I,{children:[d&&r.jsx(N,{children:d}),p&&r.jsx(M,{children:p})]}),v()&&r.jsx(E,{children:c?r.jsx(c,{width:16,height:16,color:u()}):r.jsx(T,{width:16,height:16,color:u()})})]})},j=n.div`
  display: flex;
  align-items: center;
  gap: ${o.gap["gap-1"]};
  padding: ${o.gap["gap-1.5"]} ${o.gap["gap-2"]};
  border-radius: ${R["rounded-1"]};
  background-color: ${s.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  ${f(void 0,"body2","regular")}

  &[lang="ko"] {
    font-family: ${i.ko};
  }

  &[lang="en"] {
    font-family: ${i.en};
  }

  &:hover:not([data-disable="true"]) {
    background-color: ${s.gray[50]};
  }
`,C=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,I=n.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,N=n.div`
  font-family: inherit;
  color: inherit;
`,M=n.div`
  ${f(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${i.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${i.ko};
  }
  color: ${g.light["fg-neutral-alternative"]};
`,E=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;y.displayName="Cell";y.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingContent:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{y as C,h as M};
