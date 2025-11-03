import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as x}from"./iframe-FnhkKGqq.js";import{d as a,t as i}from"./textColor-CKN8Eu8b.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{S as $}from"./icon_chevron-right_outline_20-B4T8FMv0.js";import{b as j,c as C,a as I,S as w}from"./icon_warning_fill_20-DIOGsS5g.js";import{s as n}from"./spacing-tE1IiUFl.js";import{r as T}from"./radius-DaoU83SK.js";import{c as t}from"./color-CiwAFuFb.js";import{t as u}from"./typography-BBThIZ7c.js";import{n as o,p as s}from"./negativeColor-DPOOrHeE.js";const p=x.forwardRef(({variant:e="default",title:g,description:l,leadingIcon:c=!0,trailingIcon:d=!1,onTrailingIconClick:f,className:m,...v},h)=>{const y=()=>{if(!c)return null;switch(e){case"positive":return r.jsx(w,{});case"negative":return r.jsx(I,{});case"cautionary":return r.jsx(C,{});default:return r.jsx(j,{})}};return r.jsxs(q,{ref:h,className:m,$variant:e,...v,children:[c&&r.jsx(S,{$variant:e,children:y()}),r.jsxs(b,{children:[r.jsx(k,{$variant:e,children:g}),l&&r.jsx(R,{$variant:e,children:l})]}),d&&r.jsx(F,{onClick:f,$variant:e,children:r.jsx($,{})})]})});p.displayName="Callout";const q=a.div`
  display: flex;
  align-items: flex-start;
  gap: ${n.gap["gap-2"]};
  padding: ${n.gap["gap-4"]};
  border-radius: ${T["rounded-3"]};
  min-width: 320px;
  width: 100%;
  background-color: ${({$variant:e})=>{switch(e){case"positive":return t.green[50];case"negative":return t.red[50];case"cautionary":return t.orange[50];default:return t.gray[50]}}};
`,S=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: 2px;
  color: ${({$variant:e})=>{switch(e){case"positive":return s.light["fg-positive-primary"];case"negative":return o.light["fg-negative-primary"];case"cautionary":return t.orange[500];default:return i.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`,b=a.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
`,k=a.div`
  ${u(void 0,"body2","medium")}
  color: ${({$variant:e})=>{switch(e){case"positive":return s.light["fg-positive-primary"];case"negative":return o.light["fg-negative-primary"];case"cautionary":return t.orange[500];default:return i.light["fg-neutral-strong"]}}};
`,R=a.div`
  ${u(void 0,"caption2","regular")}
  color: ${({$variant:e})=>{switch(e){case"positive":return t.green[500];case"negative":return t.red[400];case"cautionary":return t.orange[400];default:return i.light["fg-neutral-alternative"]}}};
`,F=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({$variant:e})=>{switch(e){case"positive":return s.light["fg-positive-primary"];case"negative":return o.light["fg-negative-primary"];case"cautionary":return t.orange[500];default:return i.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`;p.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"Callout 변형",defaultValue:{value:'"default"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},description:{required:!1,tsType:{name:"string"},description:"설명 텍스트"},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"Leading Icon 표시 여부",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"boolean"},description:"Trailing Icon 표시 여부",defaultValue:{value:"false",computed:!1}},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Trailing Icon 클릭 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{p as C};
