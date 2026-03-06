import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./iframe-D0ynm1mK.js";import{s as u,c as T}from"./styled-components.browser.esm-o0t8qbnT.js";import{b as o}from"./borderColor-C_RHITEf.js";import{b as q}from"./brandColor-OQPP65_V.js";import{c as e}from"./color-CiwAFuFb.js";import{n as k,p as B}from"./negativeColor-DPOOrHeE.js";import{r as G}from"./radius-DaoU83SK.js";import{s as f}from"./spacing-tE1IiUFl.js";import{t as c}from"./textColor-DLZeZODc.js";import{S as M,r as j}from"./types-D8y_ICtu.js";const E=T.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({$radius:s})=>G[j[s]]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:s})=>{switch(s){case"small":return u`
          padding: ${f.gap["gap-2"]};
          width: 32px;
          height: 32px;
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: ${f.gap["gap-3"]};
          width: 48px;
          height: 48px;
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: ${f.gap["gap-2.5"]};
          width: 40px;
          height: 40px;
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$type:s,$variant:t,$state:r})=>{if(s==="solid"){const d=()=>{switch(t){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},a=()=>{switch(t){case"primary":return e.gray[800];case"secondary":return r==="focused"?o.light["color-border-focused"]:o.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return o.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(t){case"primary":return e.common[100];case"secondary":return c.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
        background-color: ${d()};
        color: ${n()};
        border: 1px solid ${a()};

        &:focus {
          outline: none;
          border-color: ${t==="secondary"?o.light["color-border-focused"]:a()};
        }
      `}else{const d=()=>{switch(t){case"secondary":switch(r){case"focused":return o.light["color-border-focused"];default:return o.light["color-border-primary"]}case"brand":switch(r){case"focused":return o.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(r){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(r){case"focused":return o.light["color-border-negative"];default:return e.red[200]}default:return o.light["color-border-primary"]}},a=()=>{switch(t){case"secondary":return c.light["fg-neutral-strong"];case"brand":return q.light["fg-brand-strong"];case"positive":return B.light["fg-positive-strong"];case"negative":return k.light["fg-negative-strong"];default:return c.light["fg-neutral-strong"]}},n=()=>{switch(t){case"secondary":switch(r){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(r){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(r){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(r){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return u`
        border: 1px solid ${d()};
        color: ${a()};
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
            border-color: ${t==="primary"?e.gray[600]:o.light["color-border-primary"]} !important;
            color: ${t==="primary"?e.gray[500]:c.light["fg-neutral-disable"]} !important;
          `:u`
            border-color: ${o.light["color-border-primary"]} !important;
            color: ${c.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
    }
  `}

  ${({$loading:s})=>s&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,I=({type:s="solid",variant:t="primary",size:r="medium",radius:d="small",state:a="default",disabled:n=!1,loading:l=!1,icon:g,onClick:h,className:y,lang:v})=>{const[w,i]=m.useState(a);m.useEffect(()=>{i(a)},[a]);const b=()=>{!n&&!l&&a==="default"&&i("hovered")},x=()=>{!n&&!l&&i(a)},$=()=>{!n&&!l&&a==="default"&&i("pressed")},V=()=>{!n&&!l&&a==="default"&&i("hovered")},C=()=>{!n&&!l&&a==="default"&&i("focused")},S=()=>{!n&&!l&&i(a)};return p.jsxs(E,{$type:s,$variant:t,$size:r,$state:a!=="default"?a:w,$loading:l,$radius:d,disabled:n,lang:v,onClick:h,className:y,onMouseEnter:b,onMouseLeave:x,onMouseDown:$,onMouseUp:V,onFocus:C,onBlur:S,children:[p.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:l?0:1,transition:"opacity 0.2s ease"},children:g&&m.createElement(g)}),p.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:l?1:0,transition:"opacity 0.2s ease"},children:p.jsx(M,{})})]})};I.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'brand' | 'positive' | 'negative'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{I};
