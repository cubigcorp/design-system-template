import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as $}from"./iframe-Bb6Fyw9n.js";import{d as i}from"./styled-components.browser.esm-C7FfZWH0.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as j}from"./icon_chevron-right_outline_20-GPGMjTpy.js";import{b as u,c as C,a as I,S as w}from"./icon_warning_fill_20-HSmz--Ah.js";import{s as n}from"./spacing-tE1IiUFl.js";import{r as T}from"./radius-DaoU83SK.js";import{c as e}from"./color-CiwAFuFb.js";import{t}from"./textColor-DLZeZODc.js";import{t as g}from"./typography-hbgufnaT.js";import{n as s,p as o}from"./negativeColor-DPOOrHeE.js";const p=$.forwardRef(({variant:r="primary",title:d,description:l,leadingIcon:c=!0,trailingIcon:f=!1,onTrailingIconClick:m,className:v,...y},h)=>{const x=()=>{if(!c)return null;switch(r){case"positive":return a.jsx(w,{});case"negative":return a.jsx(I,{});case"cautionary":return a.jsx(C,{});case"info":return a.jsx(u,{});default:return a.jsx(u,{})}};return a.jsxs(b,{ref:h,className:v,$variant:r,...y,children:[c&&a.jsx(q,{$variant:r,children:x()}),a.jsxs(S,{children:[a.jsx(k,{$variant:r,children:d}),l&&a.jsx(R,{$variant:r,children:l})]}),f&&a.jsx(F,{onClick:m,$variant:r,children:a.jsx(j,{})})]})});p.displayName="Callout";const b=i.div`
  display: flex;
  align-items: flex-start;
  gap: ${n.gap["gap-2"]};
  padding: ${n.gap["gap-4"]};
  border-radius: ${T["rounded-3"]};
  min-width: 240px;
  width: 100%;
  background-color: ${({$variant:r})=>{switch(r){case"primary":return e.gray[50];case"secondary":return e.gray[50];case"positive":return e.green[50];case"negative":return e.red[50];case"cautionary":return e.orange[50];case"info":return e.blue[50];default:return e.gray[50]}}};
`,q=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: ${n.gap["gap-0.5"]};
  color: ${({$variant:r})=>{switch(r){case"primary":return t.light["fg-neutral-strong"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return o.light["fg-positive-primary"];case"negative":return s.light["fg-negative-primary"];case"cautionary":return e.orange[500];case"info":return e.blue[500];default:return t.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
`,k=i.div`
  ${g(void 0,"body2","medium")}
  color: ${({$variant:r})=>{switch(r){case"primary":return t.light["fg-neutral-strong"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return o.light["fg-positive-primary"];case"negative":return s.light["fg-negative-primary"];case"cautionary":return e.orange[500];case"info":return e.blue[500];default:return t.light["fg-neutral-strong"]}}};
`,R=i.div`
  ${g(void 0,"caption2","regular")}
  color: ${({$variant:r})=>{switch(r){case"primary":return t.light["fg-neutral-alternative"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return e.green[500];case"negative":return e.red[400];case"cautionary":return e.orange[400];case"info":return e.blue[500];default:return t.light["fg-neutral-alternative"]}}};
`,F=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({$variant:r})=>{switch(r){case"primary":return t.light["fg-neutral-strong"];case"secondary":return t.light["fg-neutral-alternative"];case"positive":return o.light["fg-positive-primary"];case"negative":return s.light["fg-negative-primary"];case"cautionary":return e.orange[500];case"info":return e.blue[500];default:return t.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "positive"
| "negative"
| "cautionary"
| "info"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"info"'}]},description:"Callout 변형",defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},description:{required:!1,tsType:{name:"string"},description:"설명 텍스트"},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"Leading Icon 표시 여부",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"boolean"},description:"Trailing Icon 표시 여부",defaultValue:{value:"false",computed:!1}},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Trailing Icon 클릭 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{p as C};
