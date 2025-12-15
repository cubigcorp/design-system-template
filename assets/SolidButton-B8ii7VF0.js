import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{l,d as y}from"./styled-components.browser.esm-C8ZrTVSh.js";import{c as e}from"./color-CiwAFuFb.js";import{r as j}from"./radius-DaoU83SK.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{f as p}from"./fontSize-BFAJJ5Eh.js";import{b as i}from"./borderColor-C_RHITEf.js";import{t as g}from"./textColor-DLZeZODc.js";import{s as h}from"./spacing-tE1IiUFl.js";import{S as M}from"./Spinner-C89vGHlB.js";import{R as c}from"./iframe-BWSb8WuG.js";const k=y.button.withConfig({shouldForwardProp:t=>!["loading","state","radiusKey"].includes(t)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${h.gap["gap-1"]};
  border: none;
  border-radius: ${({radiusKey:t="rounded-2"})=>j[t]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  font-family: inherit;

  ${({size:t="medium"})=>{switch(t){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:t="primary",state:r="default"})=>{const a=()=>{switch(t){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"tertiary":switch(r){case"hovered":return e.gray[100];case"pressed":return e.gray[200];case"focused":return e.gray[100];default:return e.gray[50]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},o=()=>{switch(t){case"primary":return e.gray[800];case"secondary":return r==="focused"?i.light["color-border-focused"]:i.light["color-border-primary"];case"tertiary":return r==="focused"?i.light["color-border-focused"]:i.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return i.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(t){case"primary":return e.common[100];case"secondary":case"tertiary":return g.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return l`
      background-color: ${a()};
      color: ${n()};
      border: 1px solid ${o()};

      &:focus {
        outline: none;
        border-color: ${t==="secondary"?i.light["color-border-focused"]:o()};
      }
    `}}

  // 비활성화 상태
  ${({disabled:t,variant:r="primary"})=>t&&l`
      background-color: ${r==="primary"?e.gray[700]:e.gray[50]} !important;
      border-color: ${r==="primary"?e.gray[600]:i.light["color-border-primary"]} !important;
      color: ${r==="primary"?e.gray[500]:g.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:t})=>t&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,B=y.span`
  padding: 0 ${h.gap["gap-0.5"]};
`,P=({variant:t="primary",size:r="medium",state:a="default",disabled:o=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:v,children:w,onClick:x,className:S,radiusKey:b,lang:V})=>{const[$,s]=c.useState(a);c.useEffect(()=>{s(a)},[a]);const T=()=>{!o&&!n&&a==="default"&&s("hovered")},G=()=>{!o&&!n&&s(a)},q=()=>{!o&&!n&&a==="default"&&s("pressed")},C=()=>{!o&&!n&&a==="default"&&s("hovered")},E=()=>{!o&&!n&&a==="default"&&s("focused")},R=()=>{!o&&!n&&s(a)};return u.jsxs(k,{variant:t,size:r,state:a!=="default"?a:$,disabled:o,loading:n,radiusKey:b,lang:V,onClick:x,className:S,onMouseEnter:T,onMouseLeave:G,onMouseDown:q,onMouseUp:C,onFocus:E,onBlur:R,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[m&&c.createElement(m),u.jsx(B,{children:w||v}),f&&c.createElement(f)]}),u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:u.jsx(M,{})})]})};P.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{P as S};
