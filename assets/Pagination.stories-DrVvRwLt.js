import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as w}from"./Pagination-BPtjMRdC.js";import{r as F}from"./iframe-C8Me4DqF.js";import"./styled-components.browser.esm-DPhkORiP.js";import"./TextButton-BZlsZ3YC.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-XfIbsFrS.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./IconButton-D8rGCCed.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./icon_more_outline_16-ChtUYWYD.js";import"./icon_chevron-right_outline_16-DKRecGT1.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";const ua={title:"Components/Pagination",component:w,parameters:{layout:"centered",docs:{description:{component:"페이지네이션(Pagination)은 콘텐츠를 여러 페이지로 분할하여 사용자가 페이지 간을 이동하거나 현재 위치를 인지할 수 있도록 돕는 내비게이션 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"현재 페이지 (1부터 시작)",table:{type:{summary:"number"}}},totalPages:{control:{type:"number",min:1},description:"전체 페이지 수",table:{type:{summary:"number"}}},variant:{control:{type:"select"},options:["compact","minimize"],description:"Pagination 변형",table:{type:{summary:"compact | minimize"},defaultValue:{summary:"compact"}}},maxVisiblePages:{control:{type:"number",min:3},description:"한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)",table:{type:{summary:"number"},defaultValue:{summary:"undefined (모든 페이지 표시)"}}},onPageChange:{action:"page-changed",description:"페이지 변경 시 호출되는 함수",table:{type:{summary:"(page: number) => void"}}}}},r=a=>{const[A,B]=F.useState(a.currentPage||1);return e.jsx(w,{...a,currentPage:A,onPageChange:g=>{var u;B(g),(u=a.onPageChange)==null||u.call(a,g)}})},t={render:a=>e.jsx(r,{...a}),args:{currentPage:1,totalPages:7,variant:"compact"}},n={render:a=>e.jsx(r,{...a}),args:{currentPage:1,totalPages:10,variant:"minimize"}},o={render:a=>e.jsx(r,{...a}),args:{currentPage:5,totalPages:20,variant:"compact"}},s={render:a=>e.jsx(r,{...a}),args:{currentPage:1,totalPages:100,variant:"compact",maxVisiblePages:5}},i={render:a=>e.jsx(r,{...a}),args:{currentPage:50,totalPages:100,variant:"compact",maxVisiblePages:5}},c={render:a=>e.jsx(r,{...a}),args:{currentPage:98,totalPages:100,variant:"compact",maxVisiblePages:5}},m={render:a=>e.jsx(r,{...a}),args:{currentPage:4,totalPages:7,variant:"compact"}},p={render:a=>e.jsx(r,{...a}),args:{currentPage:5,totalPages:10,variant:"minimize"}};var d,P,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 7,
    variant: "compact"
  }
}`,...(l=(P=t.parameters)==null?void 0:P.docs)==null?void 0:l.source}}};var x,b,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: "minimize"
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,v,M;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: "compact"
  }
}`,...(M=(v=o.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var S,C,V;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 100,
    variant: "compact",
    maxVisiblePages: 5
  }
}`,...(V=(C=s.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var W,f,j;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 50,
    totalPages: 100,
    variant: "compact",
    maxVisiblePages: 5
  }
}`,...(j=(f=i.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var z,E,D;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 98,
    totalPages: 100,
    variant: "compact",
    maxVisiblePages: 5
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var _,O,R;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 4,
    totalPages: 7,
    variant: "compact"
  }
}`,...(R=(O=m.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var T,k,q;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    variant: "minimize"
  }
}`,...(q=(k=p.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const da=["CompactDefault","MinimizeDefault","CompactManyPages","CompactWithMaxVisible","CompactWithMaxVisibleMiddle","CompactWithMaxVisibleEnd","CompactMiddlePage","MinimizeMiddlePage"];export{t as CompactDefault,o as CompactManyPages,m as CompactMiddlePage,s as CompactWithMaxVisible,c as CompactWithMaxVisibleEnd,i as CompactWithMaxVisibleMiddle,n as MinimizeDefault,p as MinimizeMiddlePage,da as __namedExportsOrder,ua as default};
