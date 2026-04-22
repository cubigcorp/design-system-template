import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-skmiukBS.js";import{c as t}from"./styled-components.browser.esm-1f8qeTbm.js";import{s as a}from"./spacing-tE1IiUFl.js";import{t as g}from"./textColor-G8dwupNW.js";import{t as c}from"./typography-CHdGJV44.js";const d=p.createContext({iconOnly:!1}),q=()=>p.useContext(d),u=({children:i,className:l,lang:s,style:m,bottom:n,title:o,iconOnly:r=!1})=>e.jsx(d.Provider,{value:{iconOnly:r},children:e.jsxs(f,{className:l,lang:s,style:m,$iconOnly:r,children:[o&&(typeof o=="string"?!r&&e.jsx(y,{lang:s,children:o}):e.jsx(R,{children:o})),e.jsx(N,{children:i}),n&&e.jsx(x,{$iconOnly:r,children:n})]})}),f=t.nav`
  ${c(void 0,"body3","medium")}

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${({$iconOnly:i})=>i?a.gap["gap-2"]:a.gap["gap-4"]};
  width: 100%;
  height: 100%;
`,x=t.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-2"]};
`,y=t.div`
  ${c(void 0,"body3","medium")}
  color: ${g.light["fg-neutral-strong"]};
  margin-bottom: ${a.gap["gap-5"]};
`,R=t.div`
  margin-bottom: ${a.gap["gap-5"]};
`,N=t.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-2"]};
`;u.__docgenInfo={description:"",methods:[],displayName:"LNB",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{u as L,q as u};
