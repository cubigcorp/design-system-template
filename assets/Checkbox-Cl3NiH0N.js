import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{t as l,d as p}from"./textColor-BrxwI9Xf.js";import{c as e}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as f}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{r as g}from"./radius-DaoU83SK.js";import{s as h}from"./spacing-tE1IiUFl.js";import"./IconSearch-CFCJ4kQt.js";import{I as y}from"./IconCheck-CKtc9n1_.js";import"./iframe-BH3v6s4Q.js";const n=({variant:r="secondary",state:o="unchecked",disabled:a=!1,onChange:t,className:c="",...s})=>{const d=()=>{if(a)return;const m=o!=="checked";t==null||t(m)},u=()=>o==="checked"?i.jsx(y,{width:16,height:16,color:"currentColor"}):null;return i.jsx(b,{$variant:r,$state:o,$disabled:a,onClick:d,className:c,...s,children:u()})},b=p.div`
  width: 16px;
  height: 16px;
  border-radius: ${g["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${h.gap["gap-0"]};

  ${({$variant:r,$state:o,$disabled:a})=>a?`
        background-color: ${e.gray[50]};
        border: 1px solid ${f.light["color-border-primary"]};
        color: ${l.light["fg-neutral-disable"]};
      `:r==="primary"?o==="checked"?`
          background-color: ${e.gray[950]};
          border: 1px solid ${e.gray[925]};
          color: ${e.common[100]};
        `:`
          background-color: ${e.common[100]};
          border: 1px solid ${e.gray[400]};
          color: ${l.light["fg-neutral-strong"]};
        `:`
      background-color: ${e.common[100]};
      border: 1px solid ${e.gray[400]};
      color: ${l.light["fg-neutral-strong"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;n.displayName="Checkbox";n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"checked" | "unchecked"',elements:[{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'}]},description:"",defaultValue:{value:'"unchecked"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{n as C};
