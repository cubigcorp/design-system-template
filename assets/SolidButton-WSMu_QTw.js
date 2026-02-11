import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./iframe-D0DrdOha.js";import{l as u,d as y}from"./styled-components.browser.esm-DPRVC5T4.js";import{b as l}from"./borderColor-C_RHITEf.js";import{c as e}from"./color-CiwAFuFb.js";import{f as m}from"./fontSize-BFAJJ5Eh.js";import{f as c}from"./fontWeight-CRwBdwgF.js";import{r as j}from"./radius-DaoU83SK.js";import{s as v}from"./spacing-tE1IiUFl.js";import{t as h}from"./textColor-DLZeZODc.js";import{S as M}from"./Spinner-CC0rcVUH.js";const B={small:"rounded-2",medium:"rounded-3",large:"rounded-full"},k=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  border: none;
  border-radius: ${({$radius:t})=>j[B[t]]};
  font-weight: ${c[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:t})=>{switch(t){case"small":return u`
          padding: 6px 12px;
          height: 32px;
          font-size: ${m.t4[0]};
          font-weight: ${c[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: 12px 16px;
          height: 48px;
          font-size: ${m.t5[0]};
          font-weight: ${c[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: 8px 16px;
          height: 40px;
          font-size: ${m.t5[0]};
          font-weight: ${c[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:t,$state:a})=>{const p=()=>{switch(t){case"primary":switch(a){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(a){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"tertiary":switch(a){case"hovered":return e.gray[100];case"pressed":return e.gray[200];case"focused":return e.gray[100];default:return e.gray[50]}case"brand":switch(a){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(a){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(a){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},r=()=>{switch(t){case"primary":return e.gray[800];case"secondary":return a==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"tertiary":return a==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"brand":switch(a){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return l.light["color-border-brand"]}case"negative":switch(a){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(a){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(t){case"primary":return e.common[100];case"secondary":case"tertiary":return h.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
      background-color: ${p()};
      color: ${n()};
      border: 1px solid ${r()};

      &:focus {
        outline: none;
        border-color: ${t==="secondary"?l.light["color-border-focused"]:r()};
      }
    `}}

  &:disabled {
    background-color: ${e.gray[50]} !important;
    border-color: ${l.light["color-border-primary"]} !important;
    color: ${h.light["fg-neutral-disable"]} !important;
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({$loading:t})=>t&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,z=y.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,P=({variant:t="primary",size:a="medium",radius:p="small",state:r="default",disabled:n=!1,loading:s=!1,leadingIcon:f,trailingIcon:g,label:w,children:x,onClick:S,className:b,lang:V})=>{const[T,o]=d.useState(r);d.useEffect(()=>{o(r)},[r]);const G=()=>{!n&&!s&&r==="default"&&o("hovered")},q=()=>{!n&&!s&&o(r)},E=()=>{!n&&!s&&r==="default"&&o("pressed")},$=()=>{!n&&!s&&r==="default"&&o("hovered")},C=()=>{!n&&!s&&r==="default"&&o("focused")},R=()=>{!n&&!s&&o(r)};return i.jsxs(k,{$variant:t,$size:a,$state:r!=="default"?r:T,$loading:s,$radius:p,disabled:n,lang:V,onClick:S,className:b,onMouseEnter:G,onMouseLeave:q,onMouseDown:E,onMouseUp:$,onFocus:C,onBlur:R,children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:s?0:1,transition:"opacity 0.2s ease"},children:[f&&d.createElement(f),i.jsx(z,{children:x||w}),g&&d.createElement(g)]}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:s?1:0,transition:"opacity 0.2s ease"},children:i.jsx(M,{})})]})};P.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{P as S};
