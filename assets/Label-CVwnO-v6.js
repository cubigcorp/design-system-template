import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./styled-components.browser.esm-SETmF8Vw.js";import{t as n}from"./textColor-G8dwupNW.js";import{t as r}from"./typography-CHdGJV44.js";import{s as i}from"./spacing-tE1IiUFl.js";import{c as f}from"./color-m2U5piog.js";const o=({children:a,type:l="default",optionalText:s="(선택)",className:p="",lang:d,...u})=>{const c=d,m=()=>{switch(l){case"required":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(x,{children:"*"})]});case"optional":return e.jsxs(e.Fragment,{children:[e.jsx("span",{children:a}),e.jsx(y,{children:s})]});default:return e.jsx("span",{children:a})}};return e.jsx(g,{$type:l,lang:c,className:p,...u,children:m()})},g=t.label`
  ${r(void 0,"body2","medium")}
  font-family: inherit;
  height: 20px;
  display: flex;
  align-items: center;
  color: ${n.light["fg-neutral-strong"]};
`,x=t.span`
  ${r(void 0,"caption2","regular")}
  color: ${f.red[500]};
  margin-left: ${i.gap["gap-0.5"]};
`,y=t.span`
  ${r(void 0,"body2","regular")}
  color: ${n.light["fg-neutral-alternative"]};
  margin-left: ${i.gap["gap-0.5"]};
`;o.displayName="Label";o.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},optionalText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'(선택)'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{o as L};
