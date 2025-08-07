import{j as g}from"./jsx-runtime-DORK9biX.js";import{l,d as S}from"./styled-components.browser.esm-Cr-any12.js";import{c as e}from"./color-DlZ4f652.js";import{r as V}from"./radius-DaoU83SK.js";import{s as p}from"./spacing-tE1IiUFl.js";import{b as u,t as c}from"./borderColor-7dRAAa5F.js";import{b as T}from"./brandColor-9nHZhGOS.js";import{n as q,p as B}from"./negativeColor-DFTQtxpe.js";import{S as G}from"./Spinner-CIFvj1Zx.js";import{R as f}from"./iframe-Drh7vK1U.js";const E=S.button.withConfig({shouldForwardProp:o=>!["loading","state"].includes(o)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${V["rounded-2"]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:o="medium"})=>{switch(o){case"small":return l`
          padding: ${p.gap["gap-2"]};
          width: 32px;
          height: 32px;

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: ${p.gap["gap-3"]};
          width: 48px;
          height: 48px;

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: ${p.gap["gap-2.5"]};
          width: 40px;
          height: 40px;

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({type:o="solid",variant:a="primary",state:r="default",disabled:t=!1})=>{if(o==="solid"){const s=()=>{if(t)switch(a){case"primary":return e.gray[900];case"secondary":case"brand":case"positive":case"negative":return e.gray[50];default:return e.gray[900]}switch(a){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},n=()=>{switch(a){case"primary":return e.gray[800];case"secondary":return r==="focused"?u.light["color-border-focused"]:u.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return u.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},d=()=>{if(t)switch(a){case"primary":return c.light["fg-neutral-alternative"];case"secondary":case"brand":case"positive":case"negative":return c.light["fg-neutral-disable"];default:return c.light["fg-neutral-alternative"]}switch(a){case"primary":return e.common[100];case"secondary":return c.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return l`
        background-color: ${s()};
        color: ${d()};
        border: 1px solid ${n()};
        cursor: ${t?"not-allowed":"pointer"};
        pointer-events: ${t?"none":"auto"};

        &:focus {
          outline: none;
          border-color: ${a==="secondary"?u.light["color-border-focused"]:n()};
        }
      `}else{const s=()=>{switch(a){case"secondary":switch(r){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(r){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(r){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(r){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return u.light["color-border-primary"]}},n=()=>{switch(a){case"secondary":return c.light["fg-neutral-strong"];case"brand":return T.light["fg-brand-strong"];case"positive":return B.light["fg-positive-strong"];case"negative":return q.light["fg-negative-strong"];default:return c.light["fg-neutral-strong"]}},d=()=>{switch(a){case"secondary":switch(r){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(r){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(r){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(r){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return l`
        border: 1px solid ${s()};
        color: ${n()};
        background-color: ${d()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  // 비활성화 상태
  ${({disabled:o,type:a="solid",variant:r="primary"})=>o&&l`
      ${a==="solid"?l`
            background-color: ${r==="primary"?e.gray[900]:e.gray[50]} !important;
            border-color: ${r==="primary"?e.gray[800]:u.light["color-border-primary"]} !important;
            color: ${r==="primary"?c.light["fg-neutral-alternative"]:c.light["fg-neutral-disable"]} !important;
          `:l`
            border-color: ${u.light["color-border-primary"]} !important;
            color: ${c.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:o})=>o&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,M=({type:o="solid",variant:a="primary",size:r="medium",state:t="default",disabled:s=!1,loading:n=!1,icon:d,onClick:m,className:h})=>{const[y,i]=f.useState(t);f.useEffect(()=>{i(t)},[t]);const v=()=>{!s&&!n&&t==="default"&&i("hovered")},w=()=>{!s&&!n&&i(t)},b=()=>{!s&&!n&&t==="default"&&i("pressed")},$=()=>{!s&&!n&&t==="default"&&i("hovered")},x=()=>{!s&&!n&&t==="default"&&i("focused")},C=()=>{!s&&!n&&i(t)};return g.jsx(E,{type:o,variant:a,size:r,state:t!=="default"?t:y,disabled:s,loading:n,onClick:m,className:h,onMouseEnter:v,onMouseLeave:w,onMouseDown:b,onMouseUp:$,onFocus:x,onBlur:C,children:n?g.jsx(G,{}):f.createElement(d)})};M.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{M as I};
