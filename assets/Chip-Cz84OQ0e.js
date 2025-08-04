import{j as c}from"./jsx-runtime-fZq2-uhx.js";import{R as g}from"./iframe-BW0glh9U.js";import{l as o,d as N}from"./styled-components.browser.esm-Bc0YbZHY.js";import{c as a}from"./color-DlZ4f652.js";import{r as C}from"./radius-DaoU83SK.js";import{f as u}from"./fontWeight-CRwBdwgF.js";import{b as i,t as n}from"./borderColor-7dRAAa5F.js";const j=N.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${({radius:r})=>C[r]};
  font-weight: ${u[500]};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:r="medium"})=>{switch(r){case"x-small":return o`
          padding: 4px 6px;
          height: 24px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${u[500]};
        `;case"small":return o`
          padding: 6px 8px;
          height: 32px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${u[500]};
        `;case"large":return o`
          padding: 8px 12px;
          height: 40px;
          font-size: 16px; // Body3-medium
          line-height: 24px;
          font-weight: ${u[500]};
        `;default:return o`
          padding: 8px 12px;
          height: 36px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${u[500]};
        `}}}

  ${({type:r="outline",state:s="default",active:e=!1,disabled:t=!1})=>{const d=(()=>{if(t)return{background:r==="solid"?a.gray[50]:"transparent",text:n.light["fg-neutral-disable"],border:r==="outline"?i.light["color-border-primary"]:"transparent"};if(e)return r==="solid"?{background:a.gray[950],text:a.common[100],border:"transparent"}:{background:a.gray[950]+"1F",text:n.light["fg-neutral-alternative"],border:i.light["color-border-focused"]};if(r==="solid")switch(s){case"hovered":return{background:a.gray[200],text:n.light["fg-neutral-alternative"],border:"transparent"};case"pressed":return{background:a.gray[300],text:n.light["fg-neutral-alternative"],border:"transparent"};case"focused":return{background:a.gray[950],text:a.common[100],border:"transparent"};default:return{background:a.gray[100],text:n.light["fg-neutral-alternative"],border:"transparent"}}else switch(s){case"hovered":return{background:a.gray[950]+"0D",text:n.light["fg-neutral-alternative"],border:i.light["color-border-primary"]};case"pressed":return{background:a.gray[950]+"14",text:n.light["fg-neutral-alternative"],border:i.light["color-border-primary"]};case"focused":return{background:a.gray[950]+"1F",text:n.light["fg-neutral-alternative"],border:i.light["color-border-focused"]};default:return{background:"transparent",text:n.light["fg-neutral-alternative"],border:i.light["color-border-primary"]}}})();return o`
      background-color: ${d.background};
      color: ${d.text};
      border: 1px solid ${d.border};
    `}}

  ${({disabled:r})=>r&&o`
      cursor: not-allowed;
      pointer-events: none;
    `}

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,M=({type:r="outline",size:s="medium",state:e="default",disabled:t=!1,active:p=!1,text:d,children:h,leadingIcon:f,trailingIcon:m,onClick:x,className:v,radius:y="rounded-full"})=>{const[b,l]=g.useState(e);g.useEffect(()=>{l(e)},[e]);const w=()=>{!t&&e==="default"&&l("hovered")},R=()=>{t||l(e)},k=()=>{!t&&e==="default"&&l("pressed")},q=()=>{!t&&e==="default"&&l("hovered")},T=()=>{!t&&e==="default"&&l("focused")},$=()=>{t||l(e)};return c.jsxs(j,{type:r,size:s,state:e!=="default"?e:b,disabled:t,active:p,radius:y,className:v,onClick:x,onMouseEnter:w,onMouseLeave:R,onMouseDown:k,onMouseUp:q,onFocus:T,onBlur:$,tabIndex:t?-1:0,children:[f&&c.jsx("span",{className:"icon",children:f}),c.jsx("span",{children:h||d}),m&&c.jsx("span",{className:"icon",children:m})]})};M.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"union",raw:`| "rounded-1"
| "rounded-1.5"
| "rounded-2"
| "rounded-3"
| "rounded-4"
| "rounded-5"
| "rounded-full"`,elements:[{name:"literal",value:'"rounded-1"'},{name:"literal",value:'"rounded-1.5"'},{name:"literal",value:'"rounded-2"'},{name:"literal",value:'"rounded-3"'},{name:"literal",value:'"rounded-4"'},{name:"literal",value:'"rounded-5"'},{name:"literal",value:'"rounded-full"'}]},description:"",defaultValue:{value:'"rounded-full"',computed:!1}}}};export{M as C};
