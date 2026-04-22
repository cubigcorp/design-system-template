import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./styled-components.browser.esm-1f8qeTbm.js";import{c as p}from"./color-m2U5piog.js";import{r as x}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{t as o}from"./textColor-G8dwupNW.js";import{I as w}from"./IconCheck-Cgh-IEDk.js";import{t as m}from"./typography-CHdGJV44.js";const g=({disable:r=!1,active:s=!1,leadingContent:l,text:d,description:u,trailingIcon:c,onClick:n,className:f,lang:h,showCheckIcon:y=!0})=>{const a=()=>r?o.light["fg-neutral-disable"]:o.light["fg-neutral-primary"],v=()=>s&&!r&&y;return e.jsxs(q,{$disable:r,$active:s,"data-disable":r,onClick:r?void 0:b=>n==null?void 0:n(b),className:f,lang:h,children:[l&&e.jsx(T,{children:e.jsx(l,{color:a()})}),e.jsxs(j,{children:[d&&e.jsx(C,{children:d}),u&&e.jsx(k,{children:u})]}),v()&&e.jsx($,{children:c?e.jsx(c,{color:a()}):e.jsx(w,{width:16,height:16,color:a()})})]})},q=t.div`
  display: flex;
  align-items: center;
  gap: ${i.gap["gap-2"]};
  padding: ${i.gap["gap-1.5"]} ${i.gap["gap-2"]};
  border-radius: ${x["rounded-1"]};
  background-color: ${p.common[100]};
  cursor: ${({$disable:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable='true']) {
    background-color: ${p.gray[50]};
  }
`,T=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,j=t.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,C=t.div`
  ${m(void 0,"body2","regular")}
  font-family: inherit;
  color: inherit;
`,k=t.div`
  ${m(void 0,"caption2","regular")}
  font-family: inherit;
  color: ${o.light["fg-neutral-alternative"]};
`,$=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;g.displayName="Cell";g.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingContent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{g as C};
