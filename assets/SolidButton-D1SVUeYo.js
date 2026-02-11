import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./iframe-D4fn7yV1.js";import{l as u,d as h}from"./styled-components.browser.esm-kr1dGAPk.js";import{b as i}from"./borderColor-C_RHITEf.js";import{c as e}from"./color-CiwAFuFb.js";import{f as p}from"./fontSize-BFAJJ5Eh.js";import{f as c}from"./fontWeight-CRwBdwgF.js";import{r as j}from"./radius-DaoU83SK.js";import{s as y}from"./spacing-tE1IiUFl.js";import{t as g}from"./textColor-DLZeZODc.js";import{S as M}from"./Spinner-DQZNpWi0.js";const k=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${y.gap["gap-1"]};
  border: none;
  border-radius: ${({$radiusKey:a="rounded-2"})=>j[a]};
  font-weight: ${c[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:a})=>{switch(a){case"small":return u`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${c[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${c[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: 8px 16px;
          height: 40px;
          font-size: ${p.t5[0]};
          font-weight: ${c[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:a,$state:r})=>{const t=()=>{switch(a){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"tertiary":switch(r){case"hovered":return e.gray[100];case"pressed":return e.gray[200];case"focused":return e.gray[100];default:return e.gray[50]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},o=()=>{switch(a){case"primary":return e.gray[800];case"secondary":return r==="focused"?i.light["color-border-focused"]:i.light["color-border-primary"];case"tertiary":return r==="focused"?i.light["color-border-focused"]:i.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return i.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(a){case"primary":return e.common[100];case"secondary":case"tertiary":return g.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
      background-color: ${t()};
      color: ${n()};
      border: 1px solid ${o()};

      &:focus {
        outline: none;
        border-color: ${a==="secondary"?i.light["color-border-focused"]:o()};
      }
    `}}

  &:disabled {
    background-color: ${e.gray[50]} !important;
    border-color: ${i.light["color-border-primary"]} !important;
    color: ${g.light["fg-neutral-disable"]} !important;
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({$loading:a})=>a&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,B=h.span`
  padding: 0 ${y.gap["gap-0.5"]};
`,z=({variant:a="primary",size:r="medium",state:t="default",disabled:o=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:v,children:w,onClick:x,className:S,radiusKey:b,lang:V})=>{const[T,s]=d.useState(t);d.useEffect(()=>{s(t)},[t]);const G=()=>{!o&&!n&&t==="default"&&s("hovered")},q=()=>{!o&&!n&&s(t)},E=()=>{!o&&!n&&t==="default"&&s("pressed")},$=()=>{!o&&!n&&t==="default"&&s("hovered")},C=()=>{!o&&!n&&t==="default"&&s("focused")},R=()=>{!o&&!n&&s(t)};return l.jsxs(k,{$variant:a,$size:r,$state:t!=="default"?t:T,$loading:n,$radiusKey:b,disabled:o,lang:V,onClick:x,className:S,onMouseEnter:G,onMouseLeave:q,onMouseDown:E,onMouseUp:$,onFocus:C,onBlur:R,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[m&&d.createElement(m),l.jsx(B,{children:w||v}),f&&d.createElement(f)]}),l.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:l.jsx(M,{})})]})};z.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{z as S};
