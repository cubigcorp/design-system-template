import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as i,l as o}from"./styled-components.browser.esm-Bi-oSbV3.js";import{c as r}from"./color-CiwAFuFb.js";import{r as x}from"./radius-DaoU83SK.js";import{t as h}from"./textColor-DLZeZODc.js";import{s as a}from"./spacing-tE1IiUFl.js";import{f as l}from"./fontWeight-CRwBdwgF.js";import{f as d}from"./fontSize-BFAJJ5Eh.js";import{l as m,a as $}from"./lineHeight-aJXO3HIm.js";const t=12,e=6,b=i.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${a.gap["gap-1.5"]};
  padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
  background-color: ${r.gray[990]};
  border-radius: ${x["rounded-1.5"]};
  white-space: nowrap;
  width: fit-content;
  font-family: inherit;
`,u=i.span`
  color: ${r.common[100]};
  font-size: ${d.t4[0]};
  font-weight: ${l[500]};
  line-height: ${m.t4[0]};
  letter-spacing: ${$.md};
`,y=i.span`
  color: ${h.light["fg-neutral-assistive"]};
  font-size: ${d.t4[0]};
  font-weight: ${l[500]};
  line-height: ${m.t4[0]};
  letter-spacing: ${$.md};
`,T=i.div`
  position: absolute;
  width: 0;
  height: 0;

  ${({$direction:s})=>{switch(s){case"TopCenter":return o`
          top: -${e}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-bottom: ${e}px solid ${r.gray[990]};
        `;case"TopRight":return o`
          top: -${e}px;
          right: ${a.gap["gap-2"]};
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-bottom: ${e}px solid ${r.gray[990]};
        `;case"TopLeft":return o`
          top: -${e}px;
          left: ${a.gap["gap-2"]};
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-bottom: ${e}px solid ${r.gray[990]};
        `;case"BottomCenter":return o`
          bottom: -${e}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-top: ${e}px solid ${r.gray[990]};
        `;case"BottomRight":return o`
          bottom: -${e}px;
          right: ${a.gap["gap-2"]};
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-top: ${e}px solid ${r.gray[990]};
        `;case"BottomLeft":return o`
          bottom: -${e}px;
          left: ${a.gap["gap-2"]};
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-top: ${e}px solid ${r.gray[990]};
        `;case"Right":return o`
          right: -${e}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${t/2}px solid transparent;
          border-bottom: ${t/2}px solid transparent;
          border-left: ${e}px solid ${r.gray[990]};
        `;case"Left":return o`
          left: -${e}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${t/2}px solid transparent;
          border-bottom: ${t/2}px solid transparent;
          border-right: ${e}px solid ${r.gray[990]};
        `;default:return o`
          bottom: -${e}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${t/2}px solid transparent;
          border-right: ${t/2}px solid transparent;
          border-top: ${e}px solid ${r.gray[990]};
        `}}}
`,v=({direction:s="BottomCenter",text:g,hotkey:p,children:f,className:c})=>n.jsxs(b,{className:c,children:[n.jsx(u,{children:f||g}),p&&n.jsx(y,{children:p}),n.jsx(T,{$direction:s})]});v.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{direction:{required:!1,tsType:{name:"union",raw:`| "TopCenter"
| "TopRight"
| "TopLeft"
| "BottomCenter"
| "BottomRight"
| "BottomLeft"
| "Right"
| "Left"`,elements:[{name:"literal",value:'"TopCenter"'},{name:"literal",value:'"TopRight"'},{name:"literal",value:'"TopLeft"'},{name:"literal",value:'"BottomCenter"'},{name:"literal",value:'"BottomRight"'},{name:"literal",value:'"BottomLeft"'},{name:"literal",value:'"Right"'},{name:"literal",value:'"Left"'}]},description:"",defaultValue:{value:'"BottomCenter"',computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{v as P};
