import{j as N}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./iframe-BH3v6s4Q.js";import{t as a,l as o,d as x}from"./textColor-BrxwI9Xf.js";import{c as l}from"./color-CiwAFuFb.js";import{s as c}from"./spacing-tE1IiUFl.js";import{r as M}from"./radius-DaoU83SK.js";import{t as q}from"./typography-BBThIZ7c.js";const u=i.forwardRef(({children:t,onClick:n,active:s=!1,disabled:e=!1,leadingIcon:d,trailingIcon:p,className:f,...g},m)=>{const[h,r]=i.useState("default"),$=()=>{e||r("hovered")},y=()=>{e||r("default")},v=()=>{e||r("pressed")},R=()=>{e||r("hovered")},b=()=>{e||r("focused")},w=()=>{e||r("default")},k=()=>{!e&&n&&n()};return N.jsxs(B,{ref:m,className:f,$state:h,$active:s,$disabled:e,onMouseEnter:$,onMouseLeave:y,onMouseDown:v,onMouseUp:R,onFocus:b,onBlur:w,onClick:k,disabled:e,...g,children:[d,t,p]})});u.displayName="BreadcrumbItem";const B=x.button.withConfig({shouldForwardProp:t=>!["$state","$active","$disabled"].includes(t)})`
  display: inline-flex;
  align-items: center;
  gap: ${c.gap["gap-1"]};
  padding: ${c.gap["gap-1"]} ${c.gap["gap-2"]};
  height: 28px;
  border: none;
  border-radius: ${M["rounded-2"]};
  background: none;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  ${q(void 0,"body2","medium")}

  ${({$state:t,$disabled:n,$active:s})=>{if(n)return o`
        background-color: transparent;
        color: ${a.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `;if(s)return o`
        background-color: transparent;
        color: ${a.light["fg-neutral-primary"]};
        cursor: default;
        pointer-events: none;
      `;switch(t){case"hovered":return o`
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
