import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{l as i,d as x,t}from"./textColor-CNZCqqg5.js";import{c as e}from"./color-CiwAFuFb.js";import{r as h}from"./radius-DaoU83SK.js";import{f as v}from"./fontWeight-CRwBdwgF.js";import{b as p}from"./brandColor-OQPP65_V.js";import{n as g,p as m}from"./negativeColor-DPOOrHeE.js";import{c as s,i as b}from"./cautioniaryColor-DrCmYiBi.js";import{b as n}from"./borderColor-C_RHITEf.js";const k=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${h["rounded-2"]};
  font-weight: ${v[500]};
  white-space: nowrap;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;

      path {
        fill: currentColor;
      }
    }
  }

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
  ${({variant:r="primary",type:l="outline"})=>{const a=(()=>{switch(l){case"solid":switch(r){case"primary":return{background:e.gray[50],text:t.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:e.gray[100],text:t.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:e.deeppurple[100],text:p.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:e.green[50],text:m.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:e.red[50],text:g.light["fg-negative-primary"],border:"transparent"};case"info":return{background:e.blue[50],text:b.light["fg-info-primary"],border:"transparent"};case"cautionary":return{background:e.yellow[50],text:s.light["fg-cautionary-primary"],border:"transparent"};default:return{background:e.gray[50],text:t.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(r){case"primary":return{background:e.gray[950],text:e.common[100],border:"transparent"};case"secondary":return{background:e.gray[800],text:e.common[100],border:"transparent"};case"brand":return{background:e.deeppurple[800],text:e.common[100],border:"transparent"};case"positive":return{background:e.green[600],text:e.common[100],border:"transparent"};case"negative":return{background:e.red[600],text:e.common[100],border:"transparent"};case"info":return{background:e.blue[600],text:e.common[100],border:"transparent"};case"cautionary":return{background:s.light["bg-cautionary-primary-default"],text:e.common[100],border:"transparent"};default:return{background:e.gray[950],text:e.common[100],border:"transparent"}}default:switch(r){case"primary":return{background:"transparent",text:t.light["fg-neutral-primary"],border:n.light["color-border-primary"]};case"secondary":return{background:"transparent",text:t.light["fg-neutral-alternative"],border:n.light["color-border-primary"]};case"brand":return{background:"transparent",text:p.light["fg-brand-strong"],border:n.light["color-border-brand"]};case"positive":return{background:"transparent",text:m.light["fg-positive-primary"],border:n.light["color-border-positive"]};case"negative":return{background:"transparent",text:g.light["fg-negative-primary"],border:e.red[500]};case"info":return{background:"transparent",text:b.light["fg-info-primary"],border:e.blue[500]};case"cautionary":return{background:"transparent",text:s.light["fg-cautionary-primary"],border:e.yellow[400]};default:return{background:"transparent",text:t.light["fg-neutral-primary"],border:n.light["color-border-primary"]}}}})();return i`
      background-color: ${a.background};
      color: ${a.text};
      border: 1px solid ${a.border};
    `}}
`,w=({variant:r="primary",type:l="outline",size:d="medium",text:a,children:f,leadingIcon:c,trailingIcon:u,className:y})=>o.jsxs(k,{variant:r,type:l,size:d,className:y,children:[c&&o.jsx("span",{className:"icon",children:c}),o.jsx("span",{children:f||a}),u&&o.jsx("span",{className:"icon",children:u})]});w.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"
| "info"
| "cautionary"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"info"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid" | "strong"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{w as B};
