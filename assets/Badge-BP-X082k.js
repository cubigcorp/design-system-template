import{j as o}from"./jsx-runtime-CkxAiKt7.js";import{l as i,d as f}from"./styled-components.browser.esm-FqZODMTr.js";import{c as e}from"./color-CMFzNX_O.js";import{r as x}from"./radius-DaoU83SK.js";import{f as y}from"./fontWeight-CRwBdwgF.js";import{b as n,t}from"./borderColor-C1c8KEhD.js";import{b as c}from"./brandColor-OMV9mLOG.js";import{n as u,p as m}from"./negativeColor-vAhOVlFC.js";const h=f.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${x["rounded-2"]};
  font-weight: ${y[500]};
  white-space: nowrap;

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return i`
          padding: 2px 6px;
          height: 20px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `;case"large":return i`
          padding: 4px 8px;
          height: 28px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
        `;default:return i`
          padding: 4px 6px;
          height: 24px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `}}}

  // 색상 변형
  ${({variant:r="primary",type:s="outline"})=>{const a=(()=>{switch(s){case"solid":switch(r){case"primary":return{background:e.gray[50],text:t.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:e.gray[50],text:t.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:e.deeppurple[100],text:c.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:e.green[50],text:m.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:e.red[50],text:u.light["fg-negative-primary"],border:"transparent"};default:return{background:e.gray[50],text:t.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(r){case"primary":return{background:e.gray[950],text:e.common[100],border:"transparent"};case"secondary":return{background:e.gray[800],text:e.common[100],border:"transparent"};case"brand":return{background:e.deeppurple[800],text:e.common[100],border:"transparent"};case"positive":return{background:e.green[600],text:e.common[100],border:"transparent"};case"negative":return{background:e.red[600],text:e.common[100],border:"transparent"};default:return{background:e.gray[950],text:e.common[100],border:"transparent"}}default:switch(r){case"primary":return{background:"transparent",text:t.light["fg-neutral-primary"],border:n.light["color-border-primary"]};case"secondary":return{background:"transparent",text:t.light["fg-neutral-alternative"],border:n.light["color-border-primary"]};case"brand":return{background:"transparent",text:c.light["fg-brand-strong"],border:n.light["color-border-brand"]};case"positive":return{background:"transparent",text:m.light["fg-positive-primary"],border:n.light["color-border-positive"]};case"negative":return{background:"transparent",text:u.light["fg-negative-primary"],border:e.red[500]};default:return{background:"transparent",text:t.light["fg-neutral-primary"],border:n.light["color-border-primary"]}}}})();return i`
      background-color: ${a.background};
      color: ${a.text};
      border: 1px solid ${a.border};
    `}}
`,v=({variant:r="primary",type:s="outline",size:l="medium",text:a,children:g,leadingIcon:d,trailingIcon:p,className:b})=>o.jsxs(h,{variant:r,type:s,size:l,className:b,children:[d&&o.jsx("span",{className:"icon",children:d}),o.jsx("span",{children:g||a}),p&&o.jsx("span",{className:"icon",children:p})]});v.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid" | "strong"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{v as B};
