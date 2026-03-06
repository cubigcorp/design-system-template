import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as me,r as pe}from"./iframe-D0ynm1mK.js";import{c as C}from"./styled-components.browser.esm-o0t8qbnT.js";import{s as z}from"./spacing-tE1IiUFl.js";import{t as le}from"./typography-CHdGJV44.js";import{I as g}from"./IconButton-By-Ee_uh.js";import{S as T,a as de}from"./icon_more_outline_16-IePQzwBA.js";import{T as ge}from"./TextButton-B9KrvZ6W.js";import{S as E}from"./icon_chevron-right_outline_16-yx28glSb.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./borderColor-C_RHITEf.js";import"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./radius-DaoU83SK.js";import"./textColor-DLZeZODc.js";import"./types-D8y_ICtu.js";const j=me.forwardRef(({currentPage:e,totalPages:r,onPageChange:p,variant:l="compact",maxVisiblePages:n,className:ae,...re},te)=>{const V=()=>{e>1&&p(e-1)},W=()=>{e<r&&p(e+1)},ne=t=>{p(t)},ie=()=>{if(!n||r<=n)return Array.from({length:r},(d,ce)=>ce+1);const t=[],s=n-2,o=Math.floor(s/2);let S=!1,M=!1,c=1,m=r;e<=o+2?(c=1,m=n-1,M=m<r-1):e>=r-o-1?(c=r-n+2,m=r,S=c>2):(c=e-o,m=e+o,S=c>2,M=m<r-1),S&&(t.push(1),t.push("..."));for(let d=c;d<=m;d++)t.push(d);return M&&(t.push("..."),t.push(r)),t},se=()=>{const t=ie();return a.jsxs(a.Fragment,{children:[a.jsx(g,{type:"solid",variant:"secondary",size:"small",onClick:V,disabled:e===1,icon:T}),a.jsx(Pe,{children:t.map((s,o)=>s==="..."?a.jsx(ye,{children:a.jsx(de,{})},`ellipsis-${o}`):a.jsx(ge,{variant:"secondary",size:"small",onClick:()=>ne(s),children:s},s))}),a.jsx(g,{type:"solid",variant:"secondary",size:"small",onClick:W,disabled:e===r,icon:E})]})},oe=()=>a.jsxs(a.Fragment,{children:[a.jsx(g,{type:"solid",variant:"secondary",size:"small",onClick:V,disabled:e===1,icon:T}),a.jsxs(he,{children:[e,"/",r]}),a.jsx(g,{type:"solid",variant:"secondary",size:"small",onClick:W,disabled:e===r,icon:E})]});return a.jsx(ue,{ref:te,className:ae,$variant:l,...re,children:l==="compact"?se():oe()})});j.displayName="Pagination";const ue=C.div`
  display: inline-flex;
  align-items: center;
  gap: ${({$variant:e})=>e==="minimize"?z.gap["gap-3"]:z.gap["gap-5"]};
`,Pe=C.div`
  display: inline-flex;
  align-items: center;
  gap: ${z.gap["gap-0"]};
`,he=C.span`
  display: inline-flex;
  align-items: center;
  ${le(void 0,"body2","medium")}
`,ye=C.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 32px;
  height: 32px;
  svg {
    width: 16px;
    height: 16px;
  }
`;j.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"현재 페이지 (1부터 시작)"},totalPages:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 시 호출되는 함수"},variant:{required:!1,tsType:{name:"union",raw:"'compact' | 'minimize'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'minimize'"}]},description:`Pagination 변형
- compact: 전체 페이지 번호를 표시
- minimize: 현재 페이지/전체 페이지 형태로 표시`,defaultValue:{value:"'compact'",computed:!1}},maxVisiblePages:{required:!1,tsType:{name:"number"},description:`한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)
예: maxVisiblePages={5}이고 현재 페이지가 50이면 "1 ... 48 49 50 51 52 ... 100"`},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};const $e={title:"Components/Pagination",component:j,parameters:{layout:"centered",docs:{description:{component:"페이지네이션(Pagination)은 콘텐츠를 여러 페이지로 분할하여 사용자가 페이지 간을 이동하거나 현재 위치를 인지할 수 있도록 돕는 내비게이션 컴포넌트입니다."}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"현재 페이지 (1부터 시작)",table:{type:{summary:"number"}}},totalPages:{control:{type:"number",min:1},description:"전체 페이지 수",table:{type:{summary:"number"}}},variant:{control:{type:"select"},options:["compact","minimize"],description:"Pagination 변형",table:{type:{summary:"compact | minimize"},defaultValue:{summary:"compact"}}},maxVisiblePages:{control:{type:"number",min:3},description:"한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)",table:{type:{summary:"number"},defaultValue:{summary:"undefined (모든 페이지 표시)"}}},onPageChange:{action:"page-changed",description:"페이지 변경 시 호출되는 함수",table:{type:{summary:"(page: number) => void"}}}}},i=e=>{const[r,p]=pe.useState(e.currentPage||1);return a.jsx(j,{...e,currentPage:r,onPageChange:l=>{var n;p(l),(n=e.onPageChange)==null||n.call(e,l)}})},u={render:e=>a.jsx(i,{...e}),args:{currentPage:1,totalPages:7,variant:"compact"}},P={render:e=>a.jsx(i,{...e}),args:{currentPage:1,totalPages:10,variant:"minimize"}},h={render:e=>a.jsx(i,{...e}),args:{currentPage:5,totalPages:20,variant:"compact"}},y={render:e=>a.jsx(i,{...e}),args:{currentPage:1,totalPages:100,variant:"compact",maxVisiblePages:5}},f={render:e=>a.jsx(i,{...e}),args:{currentPage:50,totalPages:100,variant:"compact",maxVisiblePages:5}},x={render:e=>a.jsx(i,{...e}),args:{currentPage:98,totalPages:100,variant:"compact",maxVisiblePages:5}},v={render:e=>a.jsx(i,{...e}),args:{currentPage:4,totalPages:7,variant:"compact"}},b={render:e=>a.jsx(i,{...e}),args:{currentPage:5,totalPages:10,variant:"minimize"}};var w,k,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 7,
    variant: 'compact'
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var I,N,R;P.parameters={...P.parameters,docs:{...(I=P.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    variant: 'minimize'
  }
}`,...(R=(N=P.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,$,D;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 20,
    variant: 'compact'
  }
}`,...(D=($=h.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var O,B,F;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 100,
    variant: 'compact',
    maxVisiblePages: 5
  }
}`,...(F=(B=y.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var L,A,G;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 50,
    totalPages: 100,
    variant: 'compact',
    maxVisiblePages: 5
  }
}`,...(G=(A=f.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var H,J,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 98,
    totalPages: 100,
    variant: 'compact',
    maxVisiblePages: 5
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 4,
    totalPages: 7,
    variant: 'compact'
  }
}`,...(X=(U=v.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    variant: 'minimize'
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const De=["CompactDefault","MinimizeDefault","CompactManyPages","CompactWithMaxVisible","CompactWithMaxVisibleMiddle","CompactWithMaxVisibleEnd","CompactMiddlePage","MinimizeMiddlePage"];export{u as CompactDefault,h as CompactManyPages,v as CompactMiddlePage,y as CompactWithMaxVisible,x as CompactWithMaxVisibleEnd,f as CompactWithMaxVisibleMiddle,P as MinimizeDefault,b as MinimizeMiddlePage,De as __namedExportsOrder,$e as default};
