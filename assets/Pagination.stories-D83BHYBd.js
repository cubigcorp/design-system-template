import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as f}from"./Pagination-BMNo3POq.js";import{r as D}from"./iframe-DEeNHyDL.js";import"./textColor-hkqm2sl1.js";import"./color-CiwAFuFb.js";import"./TextButton-CWH94_cl.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-fLgTXyPq.js";import"./negativeColor-C6enJIYV.js";import"./IconButton-mGZV1yMK.js";import"./IconSearch-BQBSiVi4.js";import"./IconCheck-CKtc9n1_.js";import"./icon_chevron-left_outline_16-DAmeO2Cf.js";import"./icon_chevron-right_outline_16-CXI7p2By.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";const Z={title:"Components/Pagination",component:f,parameters:{layout:"centered",docs:{description:{component:"페이지네이션(Pagination)은 콘텐츠를 여러 페이지로 분할하여 사용자가 페이지 간을 이동하거나 현재 위치를 인지할 수 있도록 돕는 내비게이션 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"현재 페이지 (1부터 시작)",table:{type:{summary:"number"}}},totalPages:{control:{type:"number",min:1},description:"전체 페이지 수",table:{type:{summary:"number"}}},variant:{control:{type:"select"},options:["compact","minimize"],description:"Pagination 변형",table:{type:{summary:"compact | minimize"},defaultValue:{summary:"compact"}}},onPageChange:{action:"page-changed",description:"페이지 변경 시 호출되는 함수",table:{type:{summary:"(page: number) => void"}}}}},r=a=>{const[j,W]=D.useState(a.currentPage||1);return e.jsx(f,{...a,currentPage:j,onPageChange:m=>{var c;W(m),(c=a.onPageChange)==null||c.call(a,m)}})},t={render:a=>e.jsx(r,{...a}),args:{currentPage:1,totalPages:7,variant:"compact"}},n={render:a=>e.jsx(r,{...a}),args:{currentPage:1,totalPages:10,variant:"minimize"}},o={render:a=>e.jsx(r,{...a}),args:{currentPage:5,totalPages:20,variant:"compact"}},i={render:a=>e.jsx(r,{...a}),args:{currentPage:4,totalPages:7,variant:"compact"}},s={render:a=>e.jsx(r,{...a}),args:{currentPage:5,totalPages:10,variant:"minimize"}};var p,g,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 7,
    variant: "compact"
  }
}`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var d,P,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: "minimize"
  }
}`,...(l=(P=n.parameters)==null?void 0:P.docs)==null?void 0:l.source}}};var y,v,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: "compact"
  }
}`,...(S=(v=o.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,C,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 4,
    totalPages: 7,
    variant: "compact"
  }
}`,...(h=(C=i.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var z,M,b;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    variant: "minimize"
  }
}`,...(b=(M=s.parameters)==null?void 0:M.docs)==null?void 0:b.source}}};const $=["CompactDefault","MinimizeDefault","CompactManyPages","CompactMiddlePage","MinimizeMiddlePage"];export{t as CompactDefault,o as CompactManyPages,i as CompactMiddlePage,n as MinimizeDefault,s as MinimizeMiddlePage,$ as __namedExportsOrder,Z as default};
