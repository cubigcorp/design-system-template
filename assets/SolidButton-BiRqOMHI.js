import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as d}from"./iframe-skmiukBS.js";import{s as u,c as w}from"./styled-components.browser.esm-1f8qeTbm.js";import{b as l}from"./borderColor-CzkI5wcR.js";import{b as z}from"./brandColor-Bb8P60S1.js";import{c as e}from"./color-m2U5piog.js";import{f as m}from"./fontSize-BFAJJ5Eh.js";import{f as c}from"./fontWeight-CRwBdwgF.js";import{n as h,p as y}from"./negativeColor-fk0-w6JK.js";import{r as k}from"./radius-DaoU83SK.js";import{s as x}from"./spacing-tE1IiUFl.js";import{t as v}from"./textColor-G8dwupNW.js";import{S as B,r as P}from"./types-CWvy6brJ.js";const D=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${x.gap["gap-1"]};
  background: transparent;
  border-radius: ${({$radius:a})=>k[P[a]]};
  font-weight: ${c[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:a})=>{switch(a){case"small":return u`
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

  ${({$variant:a,$state:t})=>{const p=()=>{switch(a){case"secondary":switch(t){case"focused":return l.light["color-border-focused"];default:return l.light["color-border-primary"]}case"brand":switch(t){case"focused":return l.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(t){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(t){case"focused":return l.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},r=()=>{switch(a){case"secondary":return v.light["fg-neutral-strong"];case"brand":return z.light["fg-brand-strong"];case"positive":return y.light["fg-positive-strong"];case"negative":return h.light["fg-negative-strong"];default:return e.blue[500]}},n=()=>{switch(a){case"secondary":switch(t){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(t){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(t){case"hovered":return`${y.light["bg-positive-primary-default"]}0D`;case"pressed":return`${y.light["bg-positive-primary-default"]}14`;case"focused":return`${y.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(t){case"hovered":return`${h.light["bg-negative-primary-default"]}0D`;case"pressed":return`${h.light["bg-negative-primary-default"]}14`;case"focused":return`${h.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return u`
      border: 1px solid ${p()};
      color: ${r()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  &:disabled {
    border-color: ${l.light["color-border-primary"]} !important;
    color: ${v.light["fg-neutral-disable"]} !important;
    cursor: not-allowed;
    background-color: ${e.gray[50]} !important;
    pointer-events: none;
  }

  ${({$loading:a})=>a&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,F=w.span`
  padding: 0 ${x.gap["gap-0.5"]};
`,N=({variant:a="primary",size:t="medium",radius:p="small",state:r="default",disabled:n=!1,loading:s=!1,leadingIcon:f,trailingIcon:g,label:b,children:S,onClick:V,className:$,lang:T})=>{const[G,o]=d.useState(r);d.useEffect(()=>{o(r)},[r]);const q=()=>{!n&&!s&&r==="default"&&o("hovered")},C=()=>{!n&&!s&&o(r)},E=()=>{!n&&!s&&r==="default"&&o("pressed")},R=()=>{!n&&!s&&r==="default"&&o("hovered")},M=()=>{!n&&!s&&r==="default"&&o("focused")},j=()=>{!n&&!s&&o(r)};return i.jsxs(D,{$variant:a,$size:t,$state:r!=="default"?r:G,$loading:s,$radius:p,disabled:n,onClick:V,className:$,lang:T,onMouseEnter:q,onMouseLeave:C,onMouseDown:E,onMouseUp:R,onFocus:M,onBlur:j,children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%",opacity:s?0:1,transition:"opacity 0.2s ease"},children:[f&&d.createElement(f),i.jsx(F,{children:S||b}),g&&d.createElement(g)]}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:s?1:0,transition:"opacity 0.2s ease"},children:i.jsx(B,{})})]})};N.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};const I=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${x.gap["gap-1"]};
  border: none;
  border-radius: ${({$radius:a})=>k[P[a]]};
  font-weight: ${c[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;
  white-space: nowrap;

  ${({$size:a})=>{switch(a){case"small":return u`
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

  ${({$variant:a,$state:t})=>{const p=()=>{switch(a){case"primary":switch(t){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(t){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"tertiary":switch(t){case"hovered":return e.gray[100];case"pressed":return e.gray[200];case"focused":return e.gray[100];default:return e.gray[50]}case"brand":switch(t){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(t){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(t){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},r=()=>{switch(a){case"primary":return e.gray[800];case"secondary":return t==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"tertiary":return t==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"brand":switch(t){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return l.light["color-border-brand"]}case"negative":switch(t){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(t){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(a){case"primary":return e.common[100];case"secondary":case"tertiary":return v.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
      background-color: ${p()};
      color: ${n()};
      border: 1px solid ${r()};

      &:focus {
        outline: none;
        border-color: ${a==="secondary"?l.light["color-border-focused"]:r()};
      }
    `}}

  &:disabled {
    ${({$variant:a})=>a==="primary"?`
      background-color: ${e.gray[700]} !important;
      border-color: ${e.gray[600]} !important;
      color: ${e.gray[500]} !important;
    `:`
      background-color: ${e.gray[50]} !important;
      border-color: ${l.light["color-border-primary"]} !important;
      color: ${v.light["fg-neutral-disable"]} !important;
    `}
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({$loading:a})=>a&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,L=w.span`
  padding: 0 ${x.gap["gap-0.5"]};
`,U=({variant:a="primary",size:t="medium",radius:p="small",state:r="default",disabled:n=!1,loading:s=!1,leadingIcon:f,trailingIcon:g,label:b,children:S,onClick:V,className:$,lang:T})=>{const[G,o]=d.useState(r);d.useEffect(()=>{o(r)},[r]);const q=()=>{!n&&!s&&r==="default"&&o("hovered")},C=()=>{!n&&!s&&o(r)},E=()=>{!n&&!s&&r==="default"&&o("pressed")},R=()=>{!n&&!s&&r==="default"&&o("hovered")},M=()=>{!n&&!s&&r==="default"&&o("focused")},j=()=>{!n&&!s&&o(r)};return i.jsxs(I,{$variant:a,$size:t,$state:r!=="default"?r:G,$loading:s,$radius:p,disabled:n,lang:T,onClick:V,className:$,onMouseEnter:q,onMouseLeave:C,onMouseDown:E,onMouseUp:R,onFocus:M,onBlur:j,children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%",opacity:s?0:1,transition:"opacity 0.2s ease"},children:[f&&d.createElement(f),i.jsx(L,{children:S||b}),g&&d.createElement(g)]}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:s?1:0,transition:"opacity 0.2s ease"},children:i.jsx(B,{})})]})};U.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{N as O,U as S};
