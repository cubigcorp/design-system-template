import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{R as g}from"./iframe-CLsoOqCU.js";import{s as d,c as C}from"./styled-components.browser.esm-Cjeww7bt.js";import{b as o}from"./borderColor-CzkI5wcR.js";import{c as r}from"./color-m2U5piog.js";import{f as s}from"./fontWeight-CRwBdwgF.js";import{r as j}from"./radius-DaoU83SK.js";import{t as n}from"./textColor-G8dwupNW.js";const M=C.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${({$radius:t})=>j[t]};
  font-weight: ${s[500]};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: inherit;

  ${({$size:t})=>{switch(t){case"x-small":return d`
          padding: 4px 6px;
          height: 24px;
          font-size: 14px;
          line-height: 20px;
          font-weight: ${s[500]};
        `;case"small":return d`
          padding: 6px 8px;
          height: 32px;
          font-size: 14px;
          line-height: 20px;
          font-weight: ${s[500]};
        `;case"large":return d`
          padding: 8px 12px;
          height: 40px;
          font-size: 16px;
          line-height: 24px;
          font-weight: ${s[500]};
        `;default:return d`
          padding: 8px 12px;
          height: 36px;
          font-size: 14px;
          line-height: 20px;
          font-weight: ${s[500]};
        `}}}

  ${({$type:t,$state:u,$active:e,$disabled:a})=>{const i=(()=>{if(a)return{background:t==="solid"?r.gray[50]:"transparent",text:n.light["fg-neutral-disable"],border:t==="outline"?o.light["color-border-primary"]:"transparent"};if(e)return t==="solid"?{background:r.gray[950],text:r.common[100],border:"transparent"}:{background:r.gray[950]+"1F",text:n.light["fg-neutral-alternative"],border:o.light["color-border-focused"]};if(t==="solid")switch(u){case"hovered":return{background:r.gray[200],text:n.light["fg-neutral-alternative"],border:"transparent"};case"pressed":return{background:r.gray[300],text:n.light["fg-neutral-alternative"],border:"transparent"};case"focused":return{background:r.gray[950],text:r.common[100],border:"transparent"};default:return{background:r.gray[100],text:n.light["fg-neutral-alternative"],border:"transparent"}}else switch(u){case"hovered":return{background:r.gray[950]+"0D",text:n.light["fg-neutral-alternative"],border:o.light["color-border-primary"]};case"pressed":return{background:r.gray[950]+"14",text:n.light["fg-neutral-alternative"],border:o.light["color-border-primary"]};case"focused":return{background:r.gray[950]+"1F",text:n.light["fg-neutral-alternative"],border:o.light["color-border-focused"]};default:return{background:"transparent",text:n.light["fg-neutral-alternative"],border:o.light["color-border-primary"]}}})();return d`
      background-color: ${i.background};
      color: ${i.text};
      border: 1px solid ${i.border};
    `}}

  &[data-disabled='true'] {
    cursor: not-allowed;
    pointer-events: none;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,z=({type:t="outline",size:u="medium",state:e="default",disabled:a=!1,active:p=!1,text:i,children:h,leadingIcon:f,trailingIcon:m,onClick:x,className:v,radius:b="rounded-full",lang:y})=>{const[w,l]=g.useState(e);g.useEffect(()=>{l(e)},[e]);const k=()=>{!a&&e==="default"&&l("hovered")},R=()=>{a||l(e)},q=()=>{!a&&e==="default"&&l("pressed")},T=()=>{!a&&e==="default"&&l("hovered")},$=()=>{!a&&e==="default"&&l("focused")},N=()=>{a||l(e)};return c.jsxs(M,{$type:t,$size:u,$state:e!=="default"?e:w,$disabled:a,$active:p,$radius:b,"data-disabled":a,className:v,onClick:x,onMouseEnter:k,onMouseLeave:R,onMouseDown:q,onMouseUp:T,onFocus:$,onBlur:N,tabIndex:a?-1:0,lang:y,children:[f&&c.jsx("span",{className:"icon",children:f}),c.jsx("span",{children:h||i}),m&&c.jsx("span",{className:"icon",children:m})]})};z.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:"'outline' | 'solid'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"union",raw:`| 'rounded-1'
| 'rounded-1.5'
| 'rounded-2'
| 'rounded-3'
| 'rounded-4'
| 'rounded-5'
| 'rounded-full'`,elements:[{name:"literal",value:"'rounded-1'"},{name:"literal",value:"'rounded-1.5'"},{name:"literal",value:"'rounded-2'"},{name:"literal",value:"'rounded-3'"},{name:"literal",value:"'rounded-4'"},{name:"literal",value:"'rounded-5'"},{name:"literal",value:"'rounded-full'"}]},description:"",defaultValue:{value:"'rounded-full'",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{z as C};
