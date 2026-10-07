import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./styled-components.browser.esm-BsJdvhJY.js";import{c as o}from"./color-CZjzAmeO.js";import{r as T}from"./radius-DaoU83SK.js";import{s as l}from"./spacing-tE1IiUFl.js";import{t as u}from"./textColor-D-yqVS6r.js";import{I as q}from"./IconCheck-Cgh-IEDk.js";import{t as g}from"./typography-CIxJpf_z.js";const h=({disable:r=!1,active:d=!1,leadingContent:p,text:c,description:m,trailingIcon:f,onClick:a,className:y,lang:v,showCheckIcon:w=!0})=>{const s=()=>r?u.light["fg-neutral-disable"]:u.light["fg-neutral-primary"],b=()=>d&&!r&&w,x=e=>{if(!r){if((e.key==="Enter"||e.key===" ")&&(e.preventDefault(),a==null||a(e)),e.key==="ArrowDown"){e.preventDefault();const n=e.currentTarget.nextElementSibling;n==null||n.focus()}if(e.key==="ArrowUp"){e.preventDefault();const n=e.currentTarget.previousElementSibling;n==null||n.focus()}}};return t.jsxs(j,{$disable:r,$active:d,"data-disable":r,role:"menuitem",tabIndex:r?-1:0,"aria-disabled":r||void 0,onClick:r?void 0:e=>a==null?void 0:a(e),onKeyDown:x,className:y,lang:v,children:[p&&t.jsx($,{children:t.jsx(p,{color:s()})}),t.jsxs(k,{children:[c&&t.jsx(C,{children:c}),m&&t.jsx(I,{children:m})]}),b()&&t.jsx(R,{children:f?t.jsx(f,{color:s()}):t.jsx(q,{width:16,height:16,color:s()})})]})},j=i.div`
  display: flex;
  align-items: center;
  gap: ${l.gap["gap-2"]};
  padding: ${l.gap["gap-1.5"]} ${l.gap["gap-2"]};
  border-radius: ${T["rounded-1"]};
  background-color: ${o.common[100]};
  cursor: ${({$disable:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable='true']) {
    background-color: ${o.gray[50]};
  }

  &:focus-visible {
    outline: 2px solid ${o.blue[500]};
    outline-offset: -2px;
    background-color: ${o.gray[50]};
  }
`,$=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,k=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,C=i.div`
  ${g(void 0,"body2","regular")}
  font-family: inherit;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,I=i.div`
  ${g(void 0,"caption2","regular")}
  font-family: inherit;
  color: ${u.light["fg-neutral-alternative"]};
`,R=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;h.displayName="Cell";h.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingContent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{h as C};
