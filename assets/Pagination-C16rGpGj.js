import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./iframe-BNYJyn6Q.js";import{d}from"./styled-components.browser.esm-5GbLlbaO.js";import"./SolidButton-DLMDXEH0.js";import{T as S}from"./TextButton-CUYKb_j3.js";import{I as l}from"./IconButton-D3KaSVHJ.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as g,a as $}from"./icon_more_outline_16-BV8b68p7.js";import{S as j}from"./icon_chevron-right_outline_16-BSFMBMyL.js";import{s as h}from"./spacing-tE1IiUFl.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as E}from"./typography-hbgufnaT.js";const C=R.forwardRef(({currentPage:i,totalPages:n,onPageChange:c,variant:y="compact",maxVisiblePages:p,className:z,...b},w)=>{const v=()=>{i>1&&c(i-1)},x=()=>{i<n&&c(i+1)},T=s=>{c(s)},k=()=>{if(!p||n<=p)return Array.from({length:n},(m,N)=>N+1);const s=[],t=p-2,r=Math.floor(t/2);let f=!1,u=!1,o=1,a=n;i<=r+2?(o=1,a=p-1,u=a<n-1):i>=n-r-1?(o=n-p+2,a=n,f=o>2):(o=i-r,a=i+r,f=o>2,u=a<n-1),f&&(s.push(1),s.push("..."));for(let m=o;m<=a;m++)s.push(m);return u&&(s.push("..."),s.push(n)),s},q=()=>{const s=k();return e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"solid",variant:"secondary",size:"small",onClick:v,disabled:i===1,icon:g}),e.jsx(M,{children:s.map((t,r)=>t==="..."?e.jsx(_,{children:e.jsx($,{})},`ellipsis-${r}`):e.jsx(S,{variant:"secondary",size:"small",onClick:()=>T(t),children:t},t))}),e.jsx(l,{type:"solid",variant:"secondary",size:"small",onClick:x,disabled:i===n,icon:j})]})},I=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{type:"solid",variant:"secondary",size:"small",onClick:v,disabled:i===1,icon:g}),e.jsxs(O,{children:[i,"/",n]}),e.jsx(l,{type:"solid",variant:"secondary",size:"small",onClick:x,disabled:i===n,icon:j})]});return e.jsx(F,{ref:w,className:z,$variant:y,...b,children:y==="compact"?q():I()})});C.displayName="Pagination";const F=d.div.withConfig({shouldForwardProp:i=>!["$variant"].includes(i)})`
  display: inline-flex;
  align-items: center;
  gap: ${({$variant:i})=>i==="minimize"?h.gap["gap-3"]:h.gap["gap-5"]};
`,M=d.div`
  display: inline-flex;
  align-items: center;
  gap: ${h.gap["gap-0"]};
`,O=d.span`
  display: inline-flex;
  align-items: center;
  ${E(void 0,"body2","medium")}
`,_=d.span`
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
`;C.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"현재 페이지 (1부터 시작)"},totalPages:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 시 호출되는 함수"},variant:{required:!1,tsType:{name:"union",raw:'"compact" | "minimize"',elements:[{name:"literal",value:'"compact"'},{name:"literal",value:'"minimize"'}]},description:`Pagination 변형
- compact: 전체 페이지 번호를 표시
- minimize: 현재 페이지/전체 페이지 형태로 표시`,defaultValue:{value:'"compact"',computed:!1}},maxVisiblePages:{required:!1,tsType:{name:"number"},description:`한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)
예: maxVisiblePages={5}이고 현재 페이지가 50이면 "1 ... 48 49 50 51 52 ... 100"`},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{C as P};
