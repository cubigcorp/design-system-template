import{j as r}from"./jsx-runtime-DlIY-_KO.js";import{d as a}from"./styled-components.browser.esm-BaVA2u1f.js";import{c as o}from"./color-DlZ4f652.js";import{b as s}from"./borderColor-BrY1a26q.js";import{l as p}from"./layerColor-B7HyEE0X.js";import{a as v}from"./typography-rNEpvl8r.js";import{r as i}from"./radius-DaoU83SK.js";import{s as e}from"./spacing-tE1IiUFl.js";import{s as w}from"./shadow-DVq_1U2q.js";import{k as j}from"./IconSearch-NfGnTMzT.js";const c=({size:l="medium",open:u=!1,onClose:t,title:g="제목",showCloseButton:m=!0,showActionArea:f=!0,children:h,className:x="",style:y,...$})=>{if(!u)return null;const b=d=>{d.target===d.currentTarget&&(t==null||t())},n=()=>{t==null||t()};return r.jsx(k,{onClick:b,children:r.jsxs(C,{$size:l,className:x,style:y,...$,children:[r.jsxs(T,{children:[r.jsx(q,{children:g}),m&&r.jsx(S,{onClick:n,children:r.jsx(j,{width:24,height:24,color:"currentColor"})})]}),r.jsx(V,{children:h}),f&&r.jsxs(z,{children:[r.jsx(M,{onClick:n,children:"취소"}),r.jsx(A,{children:"확인"})]})]})})},k=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${p.light["bg-overlay"]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,C=a.div`
  background-color: ${p.light["bg-layer-floating"]};
  border: 1px solid ${s.light["color-border-primary"]};
  border-radius: ${i["rounded-3"]};
  box-shadow: ${w.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;

  ${({$size:l})=>{switch(l){case"x-small":return`
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
`,T=a.div`
  padding: ${e.gap["gap-6"]} ${e.gap["gap-6"]}
    ${e.gap["gap-3"]} ${e.gap["gap-6"]};
  border-radius: ${i["rounded-3"]} ${i["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,q=a.h2`
  ${v.heading1}
  font-weight: 600;
  color: ${o.gray[950]};
  margin: 0;
`,S=a.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${o.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,V=a.div`
  padding: ${e.gap["gap-3"]} ${e.gap["gap-6"]};
  flex: 1;
  overflow-y: auto;
`,z=a.div`
  padding: ${e.gap["gap-3"]} ${e.gap["gap-6"]}
    ${e.gap["gap-6"]} ${e.gap["gap-6"]};
  display: flex;
  justify-content: flex-end;
  gap: ${e.gap["gap-2"]};
`,M=a.button`
  padding: ${e.gap["gap-2"]} ${e.gap["gap-4"]};
  background-color: ${o.common[100]};
  border: 1px solid ${s.light["color-border-primary"]};
  border-radius: ${i["rounded-2"]};
  color: ${o.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${o.gray[50]};
  }
`,A=a.button`
  padding: ${e.gap["gap-2"]} ${e.gap["gap-4"]};
  background-color: ${o.gray[950]};
  border: none;
  border-radius: ${i["rounded-2"]};
  color: ${o.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${o.gray[925]};
  }
`;c.displayName="Modal";c.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showActionArea:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{c as M};
