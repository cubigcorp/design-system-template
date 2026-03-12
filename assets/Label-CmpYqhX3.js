import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./styled-components.browser.esm-CjbLCBIw.js";import{t as n}from"./textColor-G8dwupNW.js";import{t as r}from"./typography-CHdGJV44.js";import{s as o}from"./spacing-tE1IiUFl.js";import{c as m}from"./color-m2U5piog.js";const i=({children:a,type:l="default",className:s="",lang:p,...d})=>{const u=p,c=()=>{switch(l){case"required":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(g,{children:"*"})]});case"optional":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(x,{children:"(선택)"})]});default:return e.jsx("span",{children:a})}};return e.jsx(f,{$type:l,lang:u,className:s,...d,children:c()})},f=t.label`
  ${r(void 0,"body2","medium")}
  font-family: inherit;
  height: 20px;
  display: flex;
  align-items: center;
  color: ${n.light["fg-neutral-strong"]};
`,g=t.span`
  ${r(void 0,"caption2","regular")}
  color: ${m.red[500]};
  margin-left: ${o.gap["gap-0.5"]};
`,x=t.span`
  ${r(void 0,"body2","regular")}
  color: ${n.light["fg-neutral-alternative"]};
  margin-left: ${o.gap["gap-0.5"]};
`;i.displayName="Label";i.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{i as L};
