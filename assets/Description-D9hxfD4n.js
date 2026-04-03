import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./styled-components.browser.esm-CdWSEUdl.js";import{t as f}from"./typography-CHdGJV44.js";import{t as g}from"./textColor-G8dwupNW.js";import{p as r,n}from"./negativeColor-fk0-w6JK.js";import{I as v,a as h}from"./IconCircleCheck-BBUUqRs3.js";import{s as y}from"./spacing-tE1IiUFl.js";const s=({children:i,status:a="default",leadingIcon:l=!1,className:c="",lang:p,...u})=>{const m=p,d=()=>{if(!l)return null;switch(a){case"negative":return e.jsx(j,{children:e.jsx(h,{})});case"positive":return e.jsx(I,{children:e.jsx(v,{})});default:return null}};return e.jsxs(x,{status:a,lang:m,className:c,...u,children:[d(),e.jsx("span",{children:i})]})},x=t.div`
  ${f(void 0,"caption2","regular")}
  font-family: inherit;
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:i})=>{switch(i){case"negative":return n.light["fg-negative-primary"];case"positive":return r.light["fg-positive-primary"];default:return g.light["fg-neutral-assistive"]}}};
`,o=t.div`
  width: 16px;
  height: 16px;
  margin-right: ${y.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,j=t(o)`
  color: ${n.light["fg-negative-primary"]};
`,I=t(o)`
  color: ${r.light["fg-positive-primary"]};
`;s.displayName="Description";s.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{s as D};
