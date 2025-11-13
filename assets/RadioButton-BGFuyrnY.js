import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{d}from"./textColor-VSYzZJ7c.js";import{c as r}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as a}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{r as l}from"./radius-DaoU83SK.js";const n=({state:e="unchecked",disabled:o=!1,onChange:t,className:s="",style:c,...u})=>{const p=()=>{if(o)return;const m=e!=="checked";t==null||t(m)};return i.jsx(f,{$state:e,$disabled:o,onClick:p,className:s,style:c,...u,children:e==="checked"&&i.jsx(b,{})})},f=d.div`
  width: 16px;
  height: 16px;
  border-radius: ${l["rounded-full"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  position: relative;

  ${({$state:e,$disabled:o})=>o?e==="checked"?`
          background-color: ${r.gray[200]};
          border: 1px solid ${a.light["color-border-alternative"]};
        `:`
          background-color: ${r.gray[50]};
          border: 1px solid ${a.light["color-border-alternative"]};
        `:e==="checked"?`
        background-color: ${r.gray[950]};
        border: none;
      `:`
        background-color: ${r.common[100]};
        border: 1px solid ${a.light["color-border-primary"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`,b=d.div`
  width: 8px;
  height: 8px;
  border-radius: ${l["rounded-full"]};
  background-color: ${r.common[100]};
  position: absolute;
`;n.displayName="RadioButton";n.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{state:{required:!1,tsType:{name:"union",raw:'"checked" | "unchecked"',elements:[{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'}]},description:"",defaultValue:{value:'"unchecked"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{n as R};
