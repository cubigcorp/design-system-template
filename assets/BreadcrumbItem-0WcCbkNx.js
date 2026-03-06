import{j as N}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./iframe-D0ynm1mK.js";import{s as o,c as x}from"./styled-components.browser.esm-o0t8qbnT.js";import{c as l}from"./color-CiwAFuFb.js";import{r as M}from"./radius-DaoU83SK.js";import{s as c}from"./spacing-tE1IiUFl.js";import{t as a}from"./textColor-DLZeZODc.js";import{t as q}from"./typography-CHdGJV44.js";const u=i.forwardRef(({children:n,onClick:t,active:s=!1,disabled:e=!1,leadingIcon:d,trailingIcon:p,className:f,...m},g)=>{const[h,r]=i.useState("default"),y=()=>{e||r("hovered")},v=()=>{e||r("default")},$=()=>{e||r("pressed")},R=()=>{e||r("hovered")},b=()=>{e||r("focused")},k=()=>{e||r("default")},w=()=>{!e&&t&&t()};return N.jsxs(B,{ref:g,className:f,$state:h,$active:s,$disabled:e,onMouseEnter:y,onMouseLeave:v,onMouseDown:$,onMouseUp:R,onFocus:b,onBlur:k,onClick:w,disabled:e,...m,children:[d,n,p]})});u.displayName="BreadcrumbItem";const B=x.button`
  display: inline-flex;
  align-items: center;
  gap: ${c.gap["gap-1"]};
  padding: ${c.gap["gap-1"]} ${c.gap["gap-2"]};
  height: 28px;
  border: none;
  border-radius: ${M["rounded-2"]};
  background: none;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;

  ${q(void 0,"body2","medium")}

  ${({$state:n,$disabled:t,$active:s})=>{if(t)return o`
        background-color: transparent;
        color: ${a.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `;if(s)return o`
        background-color: transparent;
        color: ${a.light["fg-neutral-primary"]};
        cursor: default;
        pointer-events: none;
      `;switch(n){case"hovered":return o`
          background-color: ${l.gray[50]};
          color: ${a.light["fg-neutral-alternative"]};
        `;case"pressed":return o`
          background-color: ${l.gray[100]};
          color: ${a.light["fg-neutral-alternative"]};
        `;case"focused":return o`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
        `;default:return o`
          background-color: transparent;
          color: ${a.light["fg-neutral-alternative"]};
        `}}}

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"브레드크럼 아이템의 텍스트"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 시 실행될 함수"},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태 (현재 페이지)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 상태",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"앞쪽 아이콘"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"뒤쪽 아이콘"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{u as B};
