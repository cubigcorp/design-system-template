import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as g}from"./styled-components.browser.esm-C8ZrTVSh.js";import{c as r}from"./color-CiwAFuFb.js";import{t as a}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import{b as i}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{r as f}from"./radius-DaoU83SK.js";import{s as h}from"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import{I as b}from"./IconCheck-CKtc9n1_.js";import"./iframe-BWSb8WuG.js";const c=({variant:t="secondary",state:o="unchecked",disabled:e=!1,onChange:l,className:d="",...s})=>{const u=()=>{if(e)return;const p=o!=="checked";l==null||l(p)},m=()=>o==="checked"?n.jsx(b,{width:16,height:16,color:"currentColor"}):null;return n.jsx(y,{$variant:t,$state:o,$disabled:e,onClick:u,className:d,...s,children:m()})},y=g.div`
  width: 16px;
  height: 16px;
  border-radius: ${f["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${h.gap["gap-0"]};

  ${({$variant:t,$state:o,$disabled:e})=>t==="primary"?o==="checked"?e?`
            background-color: ${r.gray[700]};
            border: 1px solid ${r.gray[600]};
            color: ${r.gray[500]};
          `:`
          background-color: ${r.gray[950]};
          border: 1px solid ${r.gray[925]};
          color: ${r.common[100]};
        `:e?`
            background-color: ${r.gray[50]};
            border: 1px solid ${i.light["color-border-alternative"]};
            color: ${a.light["fg-neutral-disable"]};
          `:`
          background-color: ${r.common[100]};
          border: 1px solid ${r.gray[400]};
          color: ${a.light["fg-neutral-strong"]};
        `:o==="checked"?e?`
          background-color: ${r.gray[50]};
          border: 1px solid ${i.light["color-border-primary"]};
          color: ${a.light["fg-neutral-disable"]};
        `:`
        background-color: ${r.common[100]};
        border: 1px solid ${r.gray[400]};
        color: ${a.light["fg-neutral-strong"]};
      `:e?`
          background-color: ${r.gray[50]};
          border: 1px solid ${i.light["color-border-alternative"]};
          color: ${a.light["fg-neutral-disable"]};
        `:`
        background-color: ${r.common[100]};
        border: 1px solid ${r.gray[400]};
        color: ${a.light["fg-neutral-strong"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`;c.displayName="Checkbox";c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"checked" | "unchecked"',elements:[{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'}]},description:"",defaultValue:{value:'"unchecked"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{c as C};
