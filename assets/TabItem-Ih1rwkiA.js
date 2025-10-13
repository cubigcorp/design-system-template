import{j as c}from"./jsx-runtime-Bf2WKY8k.js";import{d as u,l as n}from"./styled-components.browser.esm-DhrH3U2p.js";import{s as g}from"./spacing-tE1IiUFl.js";import{c as $}from"./color-DqDZjiGS.js";import{t as l}from"./textColor-SSyLf7rE.js";import{R as s}from"./iframe-BQ-UQriX.js";import{t as v}from"./typography-BccJP5aO.js";const T=u.div`
  display: flex;
  border-bottom: 1px solid ${$.gray[200]};
  gap: ${g.gap["gap-6"]};
  position: relative;
`,x=u.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${l.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({$activeIndex:e,$totalItems:t})=>`
      left: ${e*144}px;
      width: 120px;
    `}
`,I=({children:e,className:t,defaultValue:a=0,value:o,onChange:r,...d})=>{const[b,y]=s.useState(a),m=o!==void 0?o:b,h=i=>{o===void 0&&y(i),r==null||r(i)},f=s.Children.toArray(e);return c.jsxs(T,{className:t,...d,children:[c.jsx(x,{$activeIndex:m,$totalItems:f.length}),f.map((i,p)=>s.isValidElement(i)?s.cloneElement(i,{key:p,active:m===p,onClick:()=>h(p)}):i)]})};I.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const w=u.button.withConfig({shouldForwardProp:e=>!["$active","$disabled"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${g.gap["gap-2"]} 0; // gap-2 (Top/Bottom)
  width: 120px;
  height: 40px;
  white-space: nowrap;
  position: relative;

  ${v(void 0,"body3","medium")}

  ${({$active:e,$disabled:t})=>t?n`
        color: ${l.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:e?n`
        color: ${l.light["fg-neutral-strong"]};
      `:n`
      color: ${l.light["fg-neutral-assistive"]};
    `}

  &:focus {
    outline: none;
  }

  &:active {
    ${({$disabled:e,$active:t})=>!e&&!t&&n`
        transform: scale(0.98);
      `}
  }
`,V=({children:e,active:t=!1,disabled:a=!1,onClick:o,className:r,...d})=>c.jsx(w,{$active:t,$disabled:a,onClick:o,className:r,disabled:a,...d,children:e});V.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};export{I as T,V as a};
