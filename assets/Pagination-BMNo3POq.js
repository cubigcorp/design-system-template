import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as z}from"./iframe-DEeNHyDL.js";import{d as m}from"./textColor-hkqm2sl1.js";import{T as b}from"./TextButton-CWH94_cl.js";import{I as t}from"./IconButton-mGZV1yMK.js";import"./IconSearch-BQBSiVi4.js";import"./IconCheck-CKtc9n1_.js";import{S as c}from"./icon_chevron-left_outline_16-DAmeO2Cf.js";import{S as u}from"./icon_chevron-right_outline_16-CXI7p2By.js";import{s}from"./spacing-tE1IiUFl.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as T}from"./typography-BBThIZ7c.js";const f=z.forwardRef(({currentPage:i,totalPages:n,onPageChange:o,variant:p="compact",className:y,...g},v)=>{const l=()=>{i>1&&o(i-1)},d=()=>{i<n&&o(i+1)},x=r=>{o(r)},h=()=>{const r=Array.from({length:n},(a,C)=>C+1);return e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"solid",variant:"secondary",size:"small",onClick:l,disabled:i===1,icon:c}),e.jsx(q,{children:r.map(a=>e.jsx(b,{variant:"secondary",size:"small",onClick:()=>x(a),children:a},a))}),e.jsx(t,{type:"solid",variant:"secondary",size:"small",onClick:d,disabled:i===n,icon:u})]})},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{type:"solid",variant:"secondary",size:"small",onClick:l,disabled:i===1,icon:c}),e.jsxs(w,{children:[i,"/",n]}),e.jsx(t,{type:"solid",variant:"secondary",size:"small",onClick:d,disabled:i===n,icon:u})]});return e.jsx(k,{ref:v,className:y,$variant:p,...g,children:p==="compact"?h():j()})});f.displayName="Pagination";const k=m.div.withConfig({shouldForwardProp:i=>!["$variant"].includes(i)})`
  display: inline-flex;
  align-items: center;
  gap: ${({$variant:i})=>i==="minimize"?s.gap["gap-3"]:s.gap["gap-5"]};
`,q=m.div`
  display: inline-flex;
  align-items: center;
  gap: ${s.gap["gap-0"]};
`,w=m.span`
  display: inline-flex;
  align-items: center;
  ${T(void 0,"body2","medium")}
`;f.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"현재 페이지 (1부터 시작)"},totalPages:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 시 호출되는 함수"},variant:{required:!1,tsType:{name:"union",raw:'"compact" | "minimize"',elements:[{name:"literal",value:'"compact"'},{name:"literal",value:'"minimize"'}]},description:`Pagination 변형
- compact: 전체 페이지 번호를 표시
- minimize: 현재 페이지/전체 페이지 형태로 표시`,defaultValue:{value:'"compact"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{f as P};
