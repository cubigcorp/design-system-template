import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./iframe-L1CEGzuW.js";import{d as a}from"./styled-components.browser.esm-CPJhxV7n.js";import{s as l}from"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as d}from"./icon_chevron-right_outline_20-CAThzgjg.js";import{t as g}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";const s=({children:o,className:n,style:p,...m})=>{const r=i.Children.toArray(o);return e.jsx(h,{className:n,style:p,...m,children:r.map((c,t)=>e.jsxs(i.Fragment,{children:[c,t<r.length-1&&e.jsx(u,{children:e.jsx(d,{})})]},t))})};s.displayName="Breadcrumbs";const h=a.nav`
  display: inline-flex;
  align-items: center;
  gap: ${l.gap["gap-0"]};
`,u=a.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
  color: ${g.light["fg-neutral-alternative"]};

  svg {
    width: 20px;
    height: 20px;
  }
`;s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"BreadcrumbItem 컴포넌트들"},className:{required:!1,tsType:{name:"string"},description:"추가 className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 스타일"}}};export{s as B};
