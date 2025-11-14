import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{R as j}from"./iframe-BHft69wN.js";import{d as a,t as i}from"./textColor-D0IOlZFP.js";import"./IconSearch-CFCJ4kQt.js";import"./IconCheck-CKtc9n1_.js";import{S as $}from"./icon_chevron-right_outline_20-imTU_PIC.js";import{b as c,c as C,a as I,S as w}from"./icon_warning_fill_20-Y-OSlo9j.js";import{s as n}from"./spacing-tE1IiUFl.js";import{r as T}from"./radius-DaoU83SK.js";import{c as r}from"./color-CiwAFuFb.js";import{t as p}from"./typography-BBThIZ7c.js";import{n as o,p as s}from"./negativeColor-DPOOrHeE.js";const g=j.forwardRef(({variant:e="default",title:d,description:l,leadingIcon:u=!0,trailingIcon:f=!1,onTrailingIconClick:m,className:v,...h},y)=>{const x=()=>{if(!u)return null;switch(e){case"positive":return t.jsx(w,{});case"negative":return t.jsx(I,{});case"cautionary":return t.jsx(C,{});case"info":return t.jsx(c,{});default:return t.jsx(c,{})}};return t.jsxs(b,{ref:y,className:v,$variant:e,...h,children:[u&&t.jsx(q,{$variant:e,children:x()}),t.jsxs(S,{children:[t.jsx(k,{$variant:e,children:d}),l&&t.jsx(R,{$variant:e,children:l})]}),f&&t.jsx(F,{onClick:m,$variant:e,children:t.jsx($,{})})]})});g.displayName="Callout";const b=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${n.gap["gap-2"]};
  padding: ${n.gap["gap-4"]};
  border-radius: ${T["rounded-3"]};
  min-width: 320px;
  width: 100%;
  background-color: ${({$variant:e})=>{switch(e){case"positive":return r.green[50];case"negative":return r.red[50];case"cautionary":return r.orange[50];case"info":return r.blue[50];default:return r.gray[50]}}};
`,q=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: 2px;
  color: ${({$variant:e})=>{switch(e){case"positive":return s.light["fg-positive-primary"];case"negative":return o.light["fg-negative-primary"];case"cautionary":return r.orange[500];case"info":return r.blue[500];default:return i.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`,S=a.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
`,k=a.div`
  ${p(void 0,"body2","medium")}
  color: ${({$variant:e})=>{switch(e){case"positive":return s.light["fg-positive-primary"];case"negative":return o.light["fg-negative-primary"];case"cautionary":return r.orange[500];case"info":return r.blue[500];default:return i.light["fg-neutral-strong"]}}};
`,R=a.div`
  ${p(void 0,"caption2","regular")}
  color: ${({$variant:e})=>{switch(e){case"positive":return r.green[500];case"negative":return r.red[400];case"cautionary":return r.orange[400];case"info":return r.blue[500];default:return i.light["fg-neutral-alternative"]}}};
`,F=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({$variant:e})=>{switch(e){case"positive":return s.light["fg-positive-primary"];case"negative":return o.light["fg-negative-primary"];case"cautionary":return r.orange[500];case"info":return r.blue[500];default:return i.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`;g.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| "default"
| "positive"
| "negative"
| "cautionary"
| "info"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'},{name:"literal",value:'"info"'}]},description:"Callout 변형",defaultValue:{value:'"default"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},description:{required:!1,tsType:{name:"string"},description:"설명 텍스트"},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"Leading Icon 표시 여부",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"boolean"},description:"Trailing Icon 표시 여부",defaultValue:{value:"false",computed:!1}},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Trailing Icon 클릭 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{g as C};
