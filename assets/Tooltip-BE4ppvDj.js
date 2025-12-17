import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-CWj9sbMl.js";import{r as C}from"./index-C-O7jx-P.js";import{d as s,l as x,m as E}from"./styled-components.browser.esm-I1_av-H2.js";import{c as g}from"./color-CiwAFuFb.js";import{t as f}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import{b as V}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as $}from"./typography-hbgufnaT.js";import{r as M}from"./radius-DaoU83SK.js";import{s as u}from"./spacing-tE1IiUFl.js";const I=E`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,N=({children:a,text:w,hotkey:h,variant:p="primary",placement:b="bottom-left",offset:r=4,className:T})=>{const[m,y]=n.useState(!1),[v,k]=n.useState({top:0,left:0}),c=n.useRef(null),d=n.useRef(null),R=()=>{if(!c.current||!d.current)return;const e=c.current.getBoundingClientRect(),t=d.current.getBoundingClientRect();let o=0,i=0;switch(b){case"top-left":o=e.top-t.height-r,i=e.left;break;case"top-center":o=e.top-t.height-r,i=e.left+(e.width-t.width)/2;break;case"top-right":o=e.top-t.height-r,i=e.right-t.width;break;case"bottom-left":o=e.bottom+r,i=e.left;break;case"bottom-center":o=e.bottom+r,i=e.left+(e.width-t.width)/2;break;case"bottom-right":o=e.bottom+r,i=e.right-t.width;break;case"left":o=e.top+(e.height-t.height)/2,i=e.left-t.width-r;break;case"right":o=e.top+(e.height-t.height)/2,i=e.right+r;break}k({top:o,left:i})};n.useEffect(()=>{m&&R()},[m,b,r]);const q=()=>{y(!0)},j=()=>{y(!1)};return l.jsxs(P,{ref:c,onMouseEnter:q,onMouseLeave:j,className:T,children:[a,m&&C.createPortal(l.jsxs(B,{ref:d,$variant:p,style:{top:v.top,left:v.left},children:[l.jsx(L,{$variant:p,children:w}),h&&l.jsx(S,{$variant:p,children:h})]}),document.body)]})},P=s.div`
  position: relative;
  display: inline-flex;
`,B=s.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: ${u.gap["gap-1.5"]};
  padding: ${u.gap["gap-1"]} ${u.gap["gap-2"]};
  border-radius: ${M["rounded-1.5"]};
  white-space: nowrap;
  z-index: 9999;
  animation: ${I} 0.15s ease-in-out;
  pointer-events: none;

  ${({$variant:a})=>a==="primary"?x`
          background-color: ${g.gray[990]};
          border: none;
        `:x`
          background-color: ${g.common[100]};
          border: 1px solid ${V.light["color-border-primary"]};
        `}
`,L=s.span`
  ${$(void 0,"body2","medium")}
  color: ${({$variant:a})=>a==="primary"?g.common[100]:f.light["fg-neutral-primary"]};
`,S=s.span`
  ${$(void 0,"body2","medium")}
  color: ${({$variant:a})=>a==="primary"?f.light["fg-neutral-assistive"]:f.light["fg-neutral-assistive"]};
`;N.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"
| "left"
| "right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom-left"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{N as T};
