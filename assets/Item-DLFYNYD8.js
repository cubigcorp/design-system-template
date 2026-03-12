import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as a}from"./styled-components.browser.esm-CjbLCBIw.js";import{c as r}from"./color-m2U5piog.js";import{r as h}from"./radius-DaoU83SK.js";import{s as c}from"./spacing-tE1IiUFl.js";import{t as n}from"./textColor-G8dwupNW.js";import{u as b}from"./LNB-CiyYCwd_.js";import{t as v}from"./typography-CHdGJV44.js";const x=({value:e,selected:u=!1,disabled:o=!1,leadingIcon:i,iconOnly:d,onClick:p,className:m,lang:s="ko",style:g})=>{const{iconOnly:f}=b(),l=d??f,y=o?n.light["fg-neutral-disable"]:n.light["fg-neutral-primary"];return t.jsxs(k,{type:"button",onClick:o?void 0:p,$selected:u,$disabled:o,$iconOnly:l,className:m,lang:s,style:g,children:[i&&t.jsx($,{children:t.jsx(i,{width:20,height:20,color:y})}),!l&&t.jsx(q,{lang:s,children:e})]})},k=a.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${c.gap["gap-1.5"]};
  padding: ${c.gap["gap-2"]};
  border: 0;
  border-radius: ${h["rounded-2"]};
  background-color: ${({$selected:e})=>e?r.gray[50]:r.common[100]};
  color: ${({$disabled:e})=>e?n.light["fg-neutral-disable"]:n.light["fg-neutral-primary"]};
  text-align: left;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${r.gray[50]};
  }

  &:active {
    background-color: ${r.gray[100]};
  }
`,$=a.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,q=a.span`
  ${v(void 0,"body2","medium")}
  font-family: inherit;
`;x.__docgenInfo={description:"",methods:[],displayName:"LNBItem",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{x as L};
