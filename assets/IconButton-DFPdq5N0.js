import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{l as i,d as V}from"./styled-components.browser.esm-Bi-oSbV3.js";import{c as e}from"./color-CiwAFuFb.js";import{r as k}from"./radius-DaoU83SK.js";import{s as f}from"./spacing-tE1IiUFl.js";import{b as u}from"./borderColor-C_RHITEf.js";import{t as c}from"./textColor-DLZeZODc.js";import{b as q}from"./brandColor-OQPP65_V.js";import{n as B,p as G}from"./negativeColor-DPOOrHeE.js";import{S as j}from"./Spinner-BgKwhzy0.js";import{R as m}from"./iframe-Be3fNCx8.js";const E=V.button.withConfig({shouldForwardProp:n=>!["loading","state","radiusKey","type"].includes(n)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({radiusKey:n="rounded-2"})=>k[n]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  font-family: inherit;

  ${({size:n="medium"})=>{switch(n){case"small":return i`
          padding: ${f.gap["gap-2"]};
          width: 32px;
          height: 32px;

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: ${f.gap["gap-3"]};
          width: 48px;
          height: 48px;

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
          padding: ${f.gap["gap-2.5"]};
          width: 40px;
          height: 40px;

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({type:n="solid",variant:o="primary",state:r="default",disabled:t=!1})=>{if(n==="solid"){const s=()=>{if(t)switch(o){case"primary":return e.gray[700];case"secondary":case"brand":case"positive":case"negative":return e.gray[50];default:return e.gray[700]}switch(o){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},a=()=>{switch(o){case"primary":return e.gray[800];case"secondary":return r==="focused"?u.light["color-border-focused"]:u.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return u.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},d=()=>{if(t)switch(o){case"primary":return e.gray[500];case"secondary":case"brand":case"positive":case"negative":return c.light["fg-neutral-disable"];default:return e.gray[500]}switch(o){case"primary":return e.common[100];case"secondary":return c.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return i`
        background-color: ${s()};
        color: ${d()};
        border: 1px solid ${a()};
        cursor: ${t?"not-allowed":"pointer"};
        pointer-events: ${t?"none":"auto"};

        &:focus {
          outline: none;
          border-color: ${o==="secondary"?u.light["color-border-focused"]:a()};
        }
      `}else{const s=()=>{switch(o){case"secondary":switch(r){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(r){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(r){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(r){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return u.light["color-border-primary"]}},a=()=>{switch(o){case"secondary":return c.light["fg-neutral-strong"];case"brand":return q.light["fg-brand-strong"];case"positive":return G.light["fg-positive-strong"];case"negative":return B.light["fg-negative-strong"];default:return c.light["fg-neutral-strong"]}},d=()=>{switch(o){case"secondary":switch(r){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(r){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(r){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(r){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return i`
        border: 1px solid ${s()};
        color: ${a()};
        background-color: ${d()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  // 비활성화 상태
  ${({disabled:n,type:o="solid",variant:r="primary"})=>n&&i`
      ${o==="solid"?i`
            background-color: ${r==="primary"?e.gray[700]:e.gray[50]} !important;
            border-color: ${r==="primary"?e.gray[600]:u.light["color-border-primary"]} !important;
            color: ${r==="primary"?e.gray[500]:c.light["fg-neutral-disable"]} !important;
          `:i`
            border-color: ${u.light["color-border-primary"]} !important;
            color: ${c.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:n})=>n&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,M=({type:n="solid",variant:o="primary",size:r="medium",state:t="default",disabled:s=!1,loading:a=!1,icon:d,onClick:g,className:h,radiusKey:y,lang:v})=>{const[w,l]=m.useState(t);m.useEffect(()=>{l(t)},[t]);const b=()=>{!s&&!a&&t==="default"&&l("hovered")},$=()=>{!s&&!a&&l(t)},x=()=>{!s&&!a&&t==="default"&&l("pressed")},C=()=>{!s&&!a&&t==="default"&&l("hovered")},S=()=>{!s&&!a&&t==="default"&&l("focused")},T=()=>{!s&&!a&&l(t)};return p.jsxs(E,{type:n,variant:o,size:r,state:t!=="default"?t:w,disabled:s,loading:a,radiusKey:y,lang:v,onClick:g,className:h,onMouseEnter:b,onMouseLeave:$,onMouseDown:x,onMouseUp:C,onFocus:S,onBlur:T,children:[p.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:a?0:1,transition:"opacity 0.2s ease"},children:d&&m.createElement(d)}),p.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:a?1:0,transition:"opacity 0.2s ease"},children:p.jsx(j,{})})]})};M.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:'radius token key such as "rounded-2", "rounded-3", "rounded-full"'},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{M as I};
