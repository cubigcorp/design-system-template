import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-D4fn7yV1.js";import{l as u,d as V}from"./styled-components.browser.esm-kr1dGAPk.js";import{b as l}from"./borderColor-C_RHITEf.js";import{b as k}from"./brandColor-OQPP65_V.js";import{c as e}from"./color-CiwAFuFb.js";import{n as q,p as B}from"./negativeColor-DPOOrHeE.js";import{r as G}from"./radius-DaoU83SK.js";import{s as m}from"./spacing-tE1IiUFl.js";import{t as d}from"./textColor-DLZeZODc.js";import{S as j}from"./Spinner-DQZNpWi0.js";const E=V.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({$radiusKey:s="rounded-2"})=>G[s]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:s})=>{switch(s){case"small":return u`
          padding: ${m.gap["gap-2"]};
          width: 32px;
          height: 32px;
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: ${m.gap["gap-3"]};
          width: 48px;
          height: 48px;
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: ${m.gap["gap-2.5"]};
          width: 40px;
          height: 40px;
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$type:s,$variant:t,$state:r})=>{if(s==="solid"){const a=()=>{switch(t){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},o=()=>{switch(t){case"primary":return e.gray[800];case"secondary":return r==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return l.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(t){case"primary":return e.common[100];case"secondary":return d.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
        background-color: ${a()};
        color: ${n()};
        border: 1px solid ${o()};

        &:focus {
          outline: none;
          border-color: ${t==="secondary"?l.light["color-border-focused"]:o()};
        }
      `}else{const a=()=>{switch(t){case"secondary":switch(r){case"focused":return l.light["color-border-focused"];default:return l.light["color-border-primary"]}case"brand":switch(r){case"focused":return l.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(r){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(r){case"focused":return l.light["color-border-negative"];default:return e.red[200]}default:return l.light["color-border-primary"]}},o=()=>{switch(t){case"secondary":return d.light["fg-neutral-strong"];case"brand":return k.light["fg-brand-strong"];case"positive":return B.light["fg-positive-strong"];case"negative":return q.light["fg-negative-strong"];default:return d.light["fg-neutral-strong"]}},n=()=>{switch(t){case"secondary":switch(r){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(r){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(r){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(r){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return u`
        border: 1px solid ${a()};
        color: ${o()};
        background-color: ${n()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({$type:s,$variant:t})=>u`
    &:disabled {
      ${s==="solid"?u`
            background-color: ${t==="primary"?e.gray[700]:e.gray[50]} !important;
            border-color: ${t==="primary"?e.gray[600]:l.light["color-border-primary"]} !important;
            color: ${t==="primary"?e.gray[500]:d.light["fg-neutral-disable"]} !important;
          `:u`
            border-color: ${l.light["color-border-primary"]} !important;
            color: ${d.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
    }
  `}

  ${({$loading:s})=>s&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,M=({type:s="solid",variant:t="primary",size:r="medium",state:a="default",disabled:o=!1,loading:n=!1,icon:f,onClick:g,className:h,radiusKey:y,lang:v})=>{const[w,i]=p.useState(a);p.useEffect(()=>{i(a)},[a]);const b=()=>{!o&&!n&&a==="default"&&i("hovered")},x=()=>{!o&&!n&&i(a)},$=()=>{!o&&!n&&a==="default"&&i("pressed")},C=()=>{!o&&!n&&a==="default"&&i("hovered")},S=()=>{!o&&!n&&a==="default"&&i("focused")},T=()=>{!o&&!n&&i(a)};return c.jsxs(E,{$type:s,$variant:t,$size:r,$state:a!=="default"?a:w,$loading:n,$radiusKey:y,disabled:o,lang:v,onClick:g,className:h,onMouseEnter:b,onMouseLeave:x,onMouseDown:$,onMouseUp:C,onFocus:S,onBlur:T,children:[c.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:f&&p.createElement(f)}),c.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:c.jsx(j,{})})]})};M.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'brand' | 'positive' | 'negative'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"union",raw:"keyof typeof radius",elements:[{name:"literal",value:"'rounded-1'"},{name:"literal",value:"'rounded-1.5'"},{name:"literal",value:"'rounded-2'"},{name:"literal",value:"'rounded-3'"},{name:"literal",value:"'rounded-4'"},{name:"literal",value:"'rounded-5'"},{name:"literal",value:"'rounded-full'"}]},description:'radius token key such as "rounded-2", "rounded-3", "rounded-full"'},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{M as I};
