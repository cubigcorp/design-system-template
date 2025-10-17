import{j as o}from"./jsx-runtime-Bm_hQ5rp.js";import{l as i,d as x}from"./styled-components.browser.esm-C_r3Obn0.js";import{c as r}from"./color-DqDZjiGS.js";import{r as h}from"./radius-DaoU83SK.js";import{f as v}from"./fontWeight-CRwBdwgF.js";import{t as a}from"./textColor-SSyLf7rE.js";import{b as p}from"./brandColor-BLjLgDA0.js";import{n as m,p as g}from"./negativeColor-MzvdT1cG.js";import{c as l,i as b}from"./cautioniaryColor-yy6imxKa.js";import{b as n}from"./borderColor-CQKT7y1f.js";const k=x.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${h["rounded-2"]};
  font-weight: ${v[500]};
  white-space: nowrap;

  // 크기 변형
  ${({size:e="medium"})=>{switch(e){case"small":return i`
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
  ${({variant:e="primary",type:s="outline"})=>{const t=(()=>{switch(s){case"solid":switch(e){case"primary":return{background:r.gray[50],text:a.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:r.gray[100],text:a.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:r.deeppurple[100],text:p.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:r.green[50],text:g.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:r.red[50],text:m.light["fg-negative-primary"],border:"transparent"};case"info":return{background:r.blue[50],text:b.light["fg-info-primary"],border:"transparent"};case"cautionary":return{background:r.yellow[50],text:l.light["fg-cautionary-primary"],border:"transparent"};default:return{background:r.gray[50],text:a.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(e){case"primary":return{background:r.gray[950],text:r.common[100],border:"transparent"};case"secondary":return{background:r.gray[800],text:r.common[100],border:"transparent"};case"brand":return{background:r.deeppurple[800],text:r.common[100],border:"transparent"};case"positive":return{background:r.green[600],text:r.common[100],border:"transparent"};case"negative":return{background:r.red[600],text:r.common[100],border:"transparent"};case"info":return{background:r.blue[600],text:r.common[100],border:"transparent"};case"cautionary":return{background:l.light["bg-cautionary-primary-default"],text:r.common[100],border:"transparent"};default:return{background:r.gray[950],text:r.common[100],border:"transparent"}}default:switch(e){case"primary":return{background:"transparent",text:a.light["fg-neutral-primary"],border:n.light["color-border-primary"]};case"secondary":return{background:"transparent",text:a.light["fg-neutral-alternative"],border:n.light["color-border-primary"]};case"brand":return{background:"transparent",text:p.light["fg-brand-strong"],border:n.light["color-border-brand"]};case"positive":return{background:"transparent",text:g.light["fg-positive-primary"],border:n.light["color-border-positive"]};case"negative":return{background:"transparent",text:m.light["fg-negative-primary"],border:r.red[500]};case"info":return{background:"transparent",text:b.light["fg-info-primary"],border:r.blue[500]};case"cautionary":return{background:"transparent",text:l.light["fg-cautionary-primary"],border:r.yellow[400]};default:return{background:"transparent",text:a.light["fg-neutral-primary"],border:n.light["color-border-primary"]}}}})();return i`
      background-color: ${t.background};
      color: ${t.text};
      border: 1px solid ${t.border};
    `}}
`,w=({variant:e="primary",type:s="outline",size:d="medium",text:t,children:f,leadingIcon:u,trailingIcon:c,className:y})=>o.jsxs(k,{variant:e,type:s,size:d,className:y,children:[u&&o.jsx("span",{className:"icon",children:u}),o.jsx("span",{children:f||t}),c&&o.jsx("span",{className:"icon",children:c})]});w.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"
| "info"
| "cautionary"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"info"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid" | "strong"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{w as B};
