import{j as r}from"./jsx-runtime-BK5MheKj.js";import{r as n}from"./iframe-BwNeAgc5.js";import{d as a}from"./styled-components.browser.esm-Bhk2HcmV.js";import{c as t}from"./color-8lQV87gD.js";import{b as g}from"./borderColor-CxrOUVvi.js";import{l as f}from"./layerColor-BXjGriCC.js";import{a as C}from"./typography-rNEpvl8r.js";import{r as l}from"./radius-DaoU83SK.js";import{s as e}from"./spacing-tE1IiUFl.js";import{s as V}from"./shadow-DVq_1U2q.js";import{k as q}from"./IconSearch-BNXl3mAN.js";const h=({size:o="medium",open:d=!1,onClose:i,title:y="제목",showCloseButton:$=!0,showActionArea:x=!0,children:b,className:v="",style:w,...j})=>{const[c,u]=n.useState(!1),[T,p]=n.useState(!1);if(n.useEffect(()=>{if(d){p(!0);const s=setTimeout(()=>{u(!0)},10);return()=>clearTimeout(s)}else{u(!1);const s=setTimeout(()=>{p(!1)},200);return()=>clearTimeout(s)}},[d]),!T)return null;const k=s=>{s.target===s.currentTarget&&(i==null||i())},m=()=>{i==null||i()};return r.jsx(S,{$isVisible:c,onClick:k,children:r.jsxs(R,{$size:o,$isVisible:c,className:v,style:w,...j,children:[r.jsxs(z,{children:[r.jsx(M,{children:y}),$&&r.jsx(A,{onClick:m,children:r.jsx(q,{width:24,height:24,color:"currentColor"})})]}),r.jsx(B,{children:b}),x&&r.jsxs(N,{children:[r.jsx(E,{onClick:m,children:"취소"}),r.jsx(I,{children:"확인"})]})]})})},S=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${f.light["bg-overlay"]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({$isVisible:o})=>o?1:0};
  transition: opacity 0.2s ease-in-out;
`,R=a.div`
  background-color: ${f.light["bg-layer-floating"]};
  border: 1px solid ${g.light["color-border-primary"]};
  border-radius: ${l["rounded-3"]};
  box-shadow: ${V.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
  transform: ${({$isVisible:o})=>o?"scale(1)":"scale(0.95)"};
  transition: transform 0.2s ease-in-out;

  ${({$size:o})=>{switch(o){case"x-small":return`
          width: 320px;
        `;case"small":return`
          width: 480px;
        `;case"medium":return`
          width: 640px;
        `;case"large":return`
          width: 960px;
        `;default:return`
          width: 500px;
          min-height: 300px;
        `}}}
`,z=a.div`
  padding: ${e.gap["gap-6"]} ${e.gap["gap-6"]}
    ${e.gap["gap-3"]} ${e.gap["gap-6"]};
  border-radius: ${l["rounded-3"]} ${l["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,M=a.h2`
  ${C.heading1}
  font-weight: 600;
  color: ${t.gray[950]};
  margin: 0;
`,A=a.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${t.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,B=a.div`
  padding: ${e.gap["gap-3"]} ${e.gap["gap-6"]};
  flex: 1;
  overflow-y: auto;
`,N=a.div`
  padding: ${e.gap["gap-3"]} ${e.gap["gap-6"]}
    ${e.gap["gap-6"]} ${e.gap["gap-6"]};
  display: flex;
  justify-content: flex-end;
  gap: ${e.gap["gap-2"]};
`,E=a.button`
  padding: ${e.gap["gap-2"]} ${e.gap["gap-4"]};
  background-color: ${t.common[100]};
  border: 1px solid ${g.light["color-border-primary"]};
  border-radius: ${l["rounded-2"]};
  color: ${t.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${t.gray[50]};
  }
`,I=a.button`
  padding: ${e.gap["gap-2"]} ${e.gap["gap-4"]};
  background-color: ${t.gray[950]};
  border: none;
  border-radius: ${l["rounded-2"]};
  color: ${t.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${t.gray[925]};
  }
`;h.displayName="Modal";h.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showActionArea:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{h as M};
