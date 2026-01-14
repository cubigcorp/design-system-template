import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as j}from"./iframe-Be3fNCx8.js";import{d as n}from"./styled-components.browser.esm-Bi-oSbV3.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as C}from"./icon_chevron-right_outline_20-HuiV8UKM.js";import{b as g,c as I,a as w,S as T}from"./icon_warning_fill_16-B3IwdrL6.js";import{s as i}from"./spacing-tE1IiUFl.js";import{r as b}from"./radius-DaoU83SK.js";import{c as r}from"./color-CiwAFuFb.js";import{t}from"./textColor-DLZeZODc.js";import{t as p}from"./typography-hbgufnaT.js";import{n as l,p as s}from"./negativeColor-DPOOrHeE.js";const d=j.forwardRef(({variant:e="primary",size:o="medium",title:m,description:u,leadingIcon:c=!0,trailingIcon:f=!1,onTrailingIconClick:v,className:y,...h},x)=>{const $=()=>{if(!c)return null;switch(e){case"positive":return a.jsx(T,{});case"negative":return a.jsx(w,{});case"cautionary":return a.jsx(I,{});case"info":return a.jsx(g,{});default:return a.jsx(g,{})}};return a.jsxs(q,{ref:x,className:y,$variant:e,$size:o,...h,children:[c&&a.jsx(S,{$variant:e,$size:o,children:$()}),a.jsxs(k,{children:[a.jsx(R,{$variant:e,children:m}),u&&a.jsx(F,{$variant:e,children:u})]}),f&&a.jsx(N,{onClick:v,$variant:e,children:a.jsx(C,{})})]})});d.displayName="Callout";const q=n.div`
  display: flex;
  align-items: flex-start;
  gap: ${i.gap["gap-2"]};
  padding: ${({$size:e})=>e==="small"?`${i.gap["gap-2.5"]} ${i.gap["gap-3"]}`:`${i.gap["gap-3.5"]} ${i.gap["gap-3"]}`};
  border-radius: ${b["rounded-2"]};
  min-width: 240px;
  width: 100%;
  background-color: ${({$variant:e})=>{switch(e){case"primary":return r.gray[50];case"secondary":return r.gray[50];case"positive":return r.green[50];case"negative":return r.red[50];case"cautionary":return r.orange[50];case"info":return r.blue[50];default:return r.gray[50]}}};
`,S=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: ${i.gap["gap-0.5"]};
  color: ${({$variant:e})=>{switch(e){case"primary":return t.light["fg-neutral-strong"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return s.light["fg-positive-primary"];case"negative":return l.light["fg-negative-primary"];case"cautionary":return r.orange[500];case"info":return r.blue[500];default:return t.light["fg-neutral-strong"]}}};

  svg {
    width: 16px;
    height: 16px;
  }
`,k=n.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
  flex: 1;
`,R=n.div`
  ${p(void 0,"body2","medium")}
  color: ${({$variant:e})=>{switch(e){case"primary":return t.light["fg-neutral-strong"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return s.light["fg-positive-primary"];case"negative":return l.light["fg-negative-primary"];case"cautionary":return r.orange[500];case"info":return r.blue[500];default:return t.light["fg-neutral-strong"]}}};
`,F=n.div`
  ${p(void 0,"caption2","regular")}
  color: ${({$variant:e})=>{switch(e){case"primary":return t.light["fg-neutral-alternative"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return r.green[500];case"negative":return r.red[400];case"cautionary":return r.orange[400];case"info":return r.blue[500];default:return t.light["fg-neutral-alternative"]}}};
`,N=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({$variant:e})=>{switch(e){case"primary":return t.light["fg-neutral-strong"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return s.light["fg-positive-primary"];case"negative":return l.light["fg-negative-primary"];case"cautionary":return r.orange[500];case"info":return r.blue[500];default:return t.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`;d.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "positive"
| "negative"
| "cautionary"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"info"'}]},description:"Callout 변형",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'}]},description:"Callout 크기",defaultValue:{value:'"medium"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},description:{required:!1,tsType:{name:"string"},description:"설명 텍스트"},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"Leading Icon 표시 여부",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"boolean"},description:"Trailing Icon 표시 여부",defaultValue:{value:"false",computed:!1}},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Trailing Icon 클릭 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{d as C};
