import{j as k}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./iframe-IAoFGwwu.js";import{t as o,l as t,d as x}from"./textColor-BD3_vIL_.js";import{c as i}from"./color-CiwAFuFb.js";import{s}from"./spacing-tE1IiUFl.js";import{r as M}from"./radius-DaoU83SK.js";import{t as q}from"./typography-BBThIZ7c.js";const l=c.forwardRef(({children:a,onClick:n,active:d=!1,disabled:e=!1,leadingIcon:u,trailingIcon:p,className:f,...m},g)=>{const[h,r]=c.useState("default"),$=()=>{e||r("hovered")},y=()=>{e||r("default")},v=()=>{e||r("pressed")},R=()=>{e||r("hovered")},b=()=>{e||r("focused")},w=()=>{e||r("default")},N=()=>{!e&&n&&n()};return k.jsxs(B,{ref:g,className:f,$state:h,$active:d,$disabled:e,onMouseEnter:$,onMouseLeave:y,onMouseDown:v,onMouseUp:R,onFocus:b,onBlur:w,onClick:N,disabled:e,...m,children:[u,a,p]})});l.displayName="BreadcrumbItem";const B=x.button.withConfig({shouldForwardProp:a=>!["$state","$active","$disabled"].includes(a)})`
  display: inline-flex;
  align-items: center;
  gap: ${s.gap["gap-1"]};
  padding: ${s.gap["gap-1"]} ${s.gap["gap-2"]};
  height: 28px;
  border: none;
  border-radius: ${M["rounded-2"]};
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  ${q(void 0,"body2","medium")}

  ${({$state:a,$disabled:n})=>{if(n)return t`
        background-color: transparent;
        color: ${o.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `;switch(a){case"hovered":return t`
          background-color: ${i.gray[50]};
          color: ${o.light["fg-neutral-alternative"]};
        `;case"pressed":return t`
          background-color: ${i.gray[100]};
          color: ${o.light["fg-neutral-alternative"]};
        `;case"focused":return t`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
        `;default:return t`
          background-color: transparent;
          color: ${o.light["fg-neutral-alternative"]};
        `}}}

  &:focus {
    outline: none;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"브레드크럼 아이템의 텍스트"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"클릭 시 실행될 함수"},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태 (현재 페이지)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 상태",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"앞쪽 아이콘"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"뒤쪽 아이콘"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};export{l as B};
