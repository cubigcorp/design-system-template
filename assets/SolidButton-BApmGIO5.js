import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as c}from"./iframe-Diu4OQ1h.js";import{s as i,c as x}from"./styled-components.browser.esm-DZloA45Z.js";import{b as o}from"./borderColor-Bua6bgaN.js";import{b as D}from"./brandColor-C6bU0fYs.js";import{c as e}from"./color-BUCiRq0z.js";import{f}from"./fontSize-BFAJJ5Eh.js";import{f as p}from"./fontWeight-CRwBdwgF.js";import{n as y,p as v}from"./negativeColor-PFzGnuZM.js";import{r as B}from"./radius-DaoU83SK.js";import{s as b}from"./spacing-tE1IiUFl.js";import{t as w}from"./textColor-mWadn7SX.js";import{S as k,r as P}from"./types-JZURDx2G.js";const F=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${b.gap["gap-1"]};
  background: transparent;
  border-radius: ${({$radius:a})=>B[P[a]]};
  font-weight: ${p[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:a})=>{switch(a){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${f.t4[0]};
          font-weight: ${p[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${f.t5[0]};
          font-weight: ${p[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
          padding: 8px 16px;
          height: 40px;
          font-size: ${f.t5[0]};
          font-weight: ${p[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:a,$state:t})=>{const m=()=>{switch(a){case"secondary":switch(t){case"focused":return o.light["color-border-focused"];default:return o.light["color-border-primary"]}case"brand":switch(t){case"focused":return o.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(t){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(t){case"focused":return o.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},r=()=>{switch(a){case"secondary":return w.light["fg-neutral-strong"];case"brand":return D.light["fg-brand-strong"];case"positive":return v.light["fg-positive-strong"];case"negative":return y.light["fg-negative-strong"];default:return e.blue[500]}},n=()=>{switch(a){case"secondary":switch(t){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(t){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(t){case"hovered":return`${v.light["bg-positive-primary-default"]}0D`;case"pressed":return`${v.light["bg-positive-primary-default"]}14`;case"focused":return`${v.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(t){case"hovered":return`${y.light["bg-negative-primary-default"]}0D`;case"pressed":return`${y.light["bg-negative-primary-default"]}14`;case"focused":return`${y.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return i`
      border: 1px solid ${m()};
      color: ${r()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  &:disabled {
    border-color: ${o.light["color-border-primary"]} !important;
    color: ${w.light["fg-neutral-disable"]} !important;
    cursor: not-allowed;
    background-color: ${e.gray[50]} !important;
    pointer-events: none;
  }

  ${({$loading:a})=>a&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,N=x.span`
  padding: 0 ${b.gap["gap-0.5"]};
`,I=({variant:a="primary",size:t="medium",radius:m="small",state:r="default",disabled:n=!1,loading:s=!1,leadingIcon:g,trailingIcon:h,label:S,children:V,onClick:$,className:G,lang:T})=>{const[q,u]=c.useState(r);c.useEffect(()=>{u(r)},[r]);const d=()=>{!n&&!s&&r==="default"&&u("hovered")},E=()=>{!n&&!s&&u(r)},C=()=>{!n&&!s&&r==="default"&&u("pressed")},R=()=>{!n&&!s&&r==="default"&&u("hovered")},M=()=>{!n&&!s&&r==="default"&&u("focused")},j=()=>{!n&&!s&&u(r)};return l.jsxs(F,{$variant:a,$size:t,$state:r!=="default"?r:q,$loading:s,$radius:m,disabled:n,onClick:$,className:G,lang:T,onMouseEnter:d,onMouseLeave:E,onMouseDown:C,onMouseUp:R,onFocus:M,onBlur:j,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%",opacity:s?0:1,transition:"opacity 0.2s ease"},children:[g&&c.createElement(g),l.jsx(N,{children:V||S}),h&&c.createElement(h)]}),l.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:s?1:0,transition:"opacity 0.2s ease"},children:l.jsx(k,{})})]})};I.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}},composes:["Omit"]};const O=x.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${b.gap["gap-1"]};
  border: none;
  border-radius: ${({$radius:a})=>B[P[a]]};
  font-weight: ${p[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;
  white-space: nowrap;

  ${({$size:a})=>{switch(a){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${f.t4[0]};
          font-weight: ${p[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${f.t5[0]};
          font-weight: ${p[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
          padding: 8px 16px;
          height: 40px;
          font-size: ${f.t5[0]};
          font-weight: ${p[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:a,$state:t})=>{const m=()=>{switch(a){case"primary":switch(t){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(t){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"tertiary":switch(t){case"hovered":return e.gray[100];case"pressed":return e.gray[200];case"focused":return e.gray[100];default:return e.gray[50]}case"brand":switch(t){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(t){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(t){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},r=()=>{switch(a){case"primary":return e.gray[800];case"secondary":return t==="focused"?o.light["color-border-focused"]:o.light["color-border-primary"];case"tertiary":return t==="focused"?o.light["color-border-focused"]:o.light["color-border-primary"];case"brand":switch(t){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return o.light["color-border-brand"]}case"negative":switch(t){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(t){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(a){case"primary":return e.common[100];case"secondary":case"tertiary":return w.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return i`
      background-color: ${m()};
      color: ${n()};
      border: 1px solid ${r()};

      &:focus {
        outline: none;
        border-color: ${a==="secondary"?o.light["color-border-focused"]:r()};
      }
    `}}

  &:disabled {
    ${({$variant:a})=>a==="primary"?`
      background-color: ${e.gray[700]} !important;
      border-color: ${e.gray[600]} !important;
      color: ${e.gray[500]} !important;
    `:`
      background-color: ${e.gray[50]} !important;
      border-color: ${o.light["color-border-primary"]} !important;
      color: ${w.light["fg-neutral-disable"]} !important;
    `}
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({$loading:a})=>a&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,L=x.span`
  padding: 0 ${b.gap["gap-0.5"]};
`,U=({variant:a="primary",size:t="medium",radius:m="small",state:r="default",disabled:n=!1,loading:s=!1,leadingIcon:g,trailingIcon:h,label:S,children:V,onClick:$,className:G,lang:T,...q})=>{const[u,d]=c.useState(r);c.useEffect(()=>{d(r)},[r]);const E=()=>{!n&&!s&&r==="default"&&d("hovered")},C=()=>{!n&&!s&&d(r)},R=()=>{!n&&!s&&r==="default"&&d("pressed")},M=()=>{!n&&!s&&r==="default"&&d("hovered")},j=()=>{!n&&!s&&r==="default"&&d("focused")},z=()=>{!n&&!s&&d(r)};return l.jsxs(O,{$variant:a,$size:t,$state:r!=="default"?r:u,$loading:s,$radius:m,disabled:n,lang:T,onClick:$,className:G,onMouseEnter:E,onMouseLeave:C,onMouseDown:R,onMouseUp:M,onFocus:j,onBlur:z,...q,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%",opacity:s?0:1,transition:"opacity 0.2s ease"},children:[g&&c.createElement(g),l.jsx(L,{children:V||S}),h&&c.createElement(h)]}),l.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:s?1:0,transition:"opacity 0.2s ease"},children:l.jsx(k,{})})]})};U.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}},composes:["Omit"]};export{I as O,U as S};
