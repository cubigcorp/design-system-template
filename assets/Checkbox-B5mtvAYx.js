import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{t as l,d as f}from"./textColor-D82lXQsc.js";import{c as e}from"./color-CiwAFuFb.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as i}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{r as h}from"./radius-DaoU83SK.js";import{s as g}from"./spacing-tE1IiUFl.js";import"./IconSearch-BztCI8_-.js";import{I as b}from"./IconCheck-CKtc9n1_.js";import"./iframe-IMsG1Fm-.js";const c=({variant:r="secondary",state:o="unchecked",disabled:a=!1,onChange:t,className:d="",...s})=>{const u=()=>{if(a)return;const p=o!=="checked";t==null||t(p)},m=()=>o==="checked"?n.jsx(b,{width:16,height:16,color:"currentColor"}):null;return n.jsx(y,{$variant:r,$state:o,$disabled:a,onClick:u,className:d,...s,children:m()})},y=f.div`
  width: 16px;
  height: 16px;
  border-radius: ${h["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${g.gap["gap-0"]};

  ${({$variant:r,$state:o,$disabled:a})=>a?`
        background-color: ${e.gray[50]};
        border: 1px solid ${i.light["color-border-primary"]};
        color: ${l.light["fg-neutral-disable"]};
      `:r==="primary"?o==="checked"?`
          background-color: ${e.gray[950]};
          border: 1px solid ${e.gray[925]};
          color: ${e.common[100]};
        `:`
          background-color: ${e.common[100]};
          border: 1px solid ${i.light["color-border-primary"]};
          color: ${l.light["fg-neutral-strong"]};
        `:`
      background-color: ${e.common[100]};
      border: 1px solid ${i.light["color-border-primary"]};
      color: ${l.light["fg-neutral-strong"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }
`;c.displayName="Checkbox";c.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"checked" | "unchecked"',elements:[{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'}]},description:"",defaultValue:{value:'"unchecked"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{c as C};
