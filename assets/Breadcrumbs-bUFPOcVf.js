import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as a}from"./iframe-DXO2Jl0a.js";import{d as i,t as l}from"./textColor-CNZCqqg5.js";import{s as d}from"./spacing-tE1IiUFl.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{S as g}from"./icon_chevron-right_outline_20-B7oOcCnW.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";const s=({children:o,className:n,style:p,...m})=>{const r=a.Children.toArray(o);return e.jsx(h,{className:n,style:p,...m,children:r.map((c,t)=>e.jsxs(a.Fragment,{children:[c,t<r.length-1&&e.jsx(u,{children:e.jsx(g,{})})]},t))})};s.displayName="Breadcrumbs";const h=i.nav`
  display: inline-flex;
  align-items: center;
  gap: ${d.gap["gap-0"]};
`,u=i.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
  color: ${l.light["fg-neutral-alternative"]};

  svg {
    width: 20px;
    height: 20px;
  }
`;s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"BreadcrumbItem 컴포넌트들"},className:{required:!1,tsType:{name:"string"},description:"추가 className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 스타일"}}};export{s as B};
