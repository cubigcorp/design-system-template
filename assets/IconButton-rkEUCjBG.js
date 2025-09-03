import{j as p}from"./jsx-runtime-BrZx8JRA.js";import{l as u,d as T}from"./styled-components.browser.esm-CvV3oZgk.js";import{c as e}from"./color-DlZ4f652.js";import{r as V}from"./radius-DaoU83SK.js";import{f as m}from"./fontFamily-CsG1KcIF.js";import{s as f}from"./spacing-tE1IiUFl.js";import{b as s,t as l}from"./borderColor-7dRAAa5F.js";import{b as q}from"./brandColor-9nHZhGOS.js";import{n as B,p as G}from"./negativeColor-DFTQtxpe.js";import{S as j}from"./Spinner-B7h3l8MI.js";import{R as g}from"./iframe-By_Y751w.js";const E=T.button.withConfig({shouldForwardProp:t=>!["loading","state","radiusKey"].includes(t)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({radiusKey:t="rounded-2"})=>V[t]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${m.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${m.ko};
  }

  ${({size:t="medium"})=>{switch(t){case"small":return u`
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

  ${({type:t="solid",variant:a="primary",state:r="default",disabled:o=!1})=>{if(t==="solid"){const n=()=>{if(o)switch(a){case"primary":return e.gray[900];case"secondary":case"brand":case"positive":case"negative":return e.gray[50];default:return e.gray[900]}switch(a){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},i=()=>{switch(a){case"primary":return e.gray[800];case"secondary":return r==="focused"?s.light["color-border-focused"]:s.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return s.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},d=()=>{if(o)switch(a){case"primary":return l.light["fg-neutral-alternative"];case"secondary":case"brand":case"positive":case"negative":return l.light["fg-neutral-disable"];default:return l.light["fg-neutral-alternative"]}switch(a){case"primary":return e.common[100];case"secondary":return l.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
        background-color: ${n()};
        color: ${d()};
        border: 1px solid ${i()};
        cursor: ${o?"not-allowed":"pointer"};
        pointer-events: ${o?"none":"auto"};

        &:focus {
          outline: none;
          border-color: ${a==="secondary"?s.light["color-border-focused"]:i()};
        }
      `}else{const n=()=>{switch(a){case"secondary":switch(r){case"focused":return s.light["color-border-focused"];default:return s.light["color-border-primary"]}case"brand":switch(r){case"focused":return s.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(r){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(r){case"focused":return s.light["color-border-negative"];default:return e.red[200]}default:return s.light["color-border-primary"]}},i=()=>{switch(a){case"secondary":return l.light["fg-neutral-strong"];case"brand":return q.light["fg-brand-strong"];case"positive":return G.light["fg-positive-strong"];case"negative":return B.light["fg-negative-strong"];default:return l.light["fg-neutral-strong"]}},d=()=>{switch(a){case"secondary":switch(r){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(r){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(r){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(r){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return u`
        border: 1px solid ${n()};
        color: ${i()};
        background-color: ${d()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  // 비활성화 상태
  ${({disabled:t,type:a="solid",variant:r="primary"})=>t&&u`
      ${a==="solid"?u`
            background-color: ${r==="primary"?e.gray[900]:e.gray[50]} !important;
            border-color: ${r==="primary"?e.gray[800]:s.light["color-border-primary"]} !important;
            color: ${r==="primary"?l.light["fg-neutral-alternative"]:l.light["fg-neutral-disable"]} !important;
          `:u`
            border-color: ${s.light["color-border-primary"]} !important;
            color: ${l.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:t})=>t&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,F=({variant:t="primary",size:a="medium",state:r="default",disabled:o=!1,loading:n=!1,icon:i,onClick:d,className:h,radiusKey:y,lang:v})=>{const[w,c]=g.useState(r);g.useEffect(()=>{c(r)},[r]);const $=()=>{!o&&!n&&r==="default"&&c("hovered")},b=()=>{!o&&!n&&c(r)},x=()=>{!o&&!n&&r==="default"&&c("pressed")},C=()=>{!o&&!n&&r==="default"&&c("hovered")},k=()=>{!o&&!n&&r==="default"&&c("focused")},S=()=>{!o&&!n&&c(r)};return p.jsxs(E,{variant:t,size:a,state:r!=="default"?r:w,disabled:o,loading:n,radiusKey:y,lang:v,onClick:d,className:h,onMouseEnter:$,onMouseLeave:b,onMouseDown:x,onMouseUp:C,onFocus:k,onBlur:S,children:[p.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:i&&g.createElement(i)}),p.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:p.jsx(j,{})})]})};F.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:""},variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:'radius token key such as "rounded-2", "rounded-3", "rounded-full"'},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{F as I};
