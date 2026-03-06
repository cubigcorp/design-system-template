import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./styled-components.browser.esm-o0t8qbnT.js";import{c as t}from"./color-CiwAFuFb.js";import{r as f}from"./radius-DaoU83SK.js";import{s}from"./spacing-tE1IiUFl.js";import{t as l}from"./textColor-DLZeZODc.js";import{A as g}from"./Avatar-BEnKGvzG.js";import{u as y}from"./LNB-DKRBc0rd.js";import{t as h}from"./typography-CHdGJV44.js";const v=({name:r,avatarSrc:m,avatarType:u="custom",onClick:c,className:p,lang:a="ko",style:d,trailingIcon:i})=>{const{iconOnly:o}=y();return e.jsxs(x,{type:"button",onClick:c,className:p,lang:a,style:d,$iconOnly:o,children:[e.jsx(g,{type:u,size:"x-small",src:m,value:r}),!o&&e.jsxs(e.Fragment,{children:[e.jsx(b,{lang:a,children:r}),i&&e.jsx(w,{children:e.jsx(i,{width:20,height:20,color:l.light["fg-neutral-primary"]})})]})]})},x=n.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:r})=>r?"center":"flex-start"};
  gap: ${s.gap["gap-1.5"]};
  padding: ${s.gap["gap-2"]};
  border: 0;
  border-radius: ${f["rounded-2"]};
  background-color: ${t.common[100]};
  color: ${l.light["fg-neutral-primary"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${t.gray[50]};
  }

  &:active {
    background-color: ${t.gray[100]};
  }
`,b=n.span`
  ${h(void 0,"body2","medium")}
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit;
`,w=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;v.__docgenInfo={description:"",methods:[],displayName:"LNBItemProfile",props:{name:{required:!0,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarType:{required:!1,tsType:{name:"union",raw:"'default' | 'custom' | 'initial'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'custom'"},{name:"literal",value:"'initial'"}]},description:"",defaultValue:{value:"'custom'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""}}};export{v as L};
