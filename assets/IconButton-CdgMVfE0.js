import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{l,t as c,d as V}from"./textColor-CKN8Eu8b.js";import{c as e}from"./color-CiwAFuFb.js";import{r as q}from"./radius-DaoU83SK.js";import{f as g}from"./fontFamily-CsG1KcIF.js";import{s as f}from"./spacing-tE1IiUFl.js";import{b as u}from"./borderColor-C_RHITEf.js";import{b as B}from"./brandColor-OQPP65_V.js";import{n as G,p as j}from"./negativeColor-DPOOrHeE.js";import{S as E}from"./Spinner-PpAqZlHY.js";import{R as m}from"./iframe-FnhkKGqq.js";const F=V.button.withConfig({shouldForwardProp:n=>!["loading","state","radiusKey","type"].includes(n)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({radiusKey:n="rounded-2"})=>q[n]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${g.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${g.ko};
  }

  ${({size:n="medium"})=>{switch(n){case"small":return l`
          padding: ${f.gap["gap-2"]};
          width: 32px;
          height: 32px;

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: ${f.gap["gap-3"]};
          width: 48px;
          height: 48px;

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: ${f.gap["gap-2.5"]};
          width: 40px;
          height: 40px;

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({type:n="solid",variant:o="primary",state:r="default",disabled:a=!1})=>{if(n==="solid"){const s=()=>{if(a)switch(o){case"primary":return e.gray[700];case"secondary":case"brand":case"positive":case"negative":return e.gray[50];default:return e.gray[700]}switch(o){case"primary":switch(r){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(r){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(r){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(r){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},t=()=>{switch(o){case"primary":return e.gray[800];case"secondary":return r==="focused"?u.light["color-border-focused"]:u.light["color-border-primary"];case"brand":switch(r){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return u.light["color-border-brand"]}case"negative":switch(r){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(r){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},d=()=>{if(a)switch(o){case"primary":return e.gray[500];case"secondary":case"brand":case"positive":case"negative":return c.light["fg-neutral-disable"];default:return e.gray[500]}switch(o){case"primary":return e.common[100];case"secondary":return c.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return l`
        background-color: ${s()};
        color: ${d()};
        border: 1px solid ${t()};
        cursor: ${a?"not-allowed":"pointer"};
        pointer-events: ${a?"none":"auto"};

        &:focus {
          outline: none;
          border-color: ${o==="secondary"?u.light["color-border-focused"]:t()};
        }
      `}else{const s=()=>{switch(o){case"secondary":switch(r){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(r){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(r){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(r){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return u.light["color-border-primary"]}},t=()=>{switch(o){case"secondary":return c.light["fg-neutral-strong"];case"brand":return B.light["fg-brand-strong"];case"positive":return j.light["fg-positive-strong"];case"negative":return G.light["fg-negative-strong"];default:return c.light["fg-neutral-strong"]}},d=()=>{switch(o){case"secondary":switch(r){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(r){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(r){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(r){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return l`
        border: 1px solid ${s()};
        color: ${t()};
        background-color: ${d()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  // 비활성화 상태
  ${({disabled:n,type:o="solid",variant:r="primary"})=>n&&l`
      ${o==="solid"?l`
            background-color: ${r==="primary"?e.gray[700]:e.gray[50]} !important;
            border-color: ${r==="primary"?e.gray[600]:u.light["color-border-primary"]} !important;
            color: ${r==="primary"?e.gray[500]:c.light["fg-neutral-disable"]} !important;
          `:l`
            border-color: ${u.light["color-border-primary"]} !important;
            color: ${c.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:n})=>n&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,M=({type:n="solid",variant:o="primary",size:r="medium",state:a="default",disabled:s=!1,loading:t=!1,icon:d,onClick:h,className:y,radiusKey:v,lang:w})=>{const[$,i]=m.useState(a);m.useEffect(()=>{i(a)},[a]);const b=()=>{!s&&!t&&a==="default"&&i("hovered")},x=()=>{!s&&!t&&i(a)},C=()=>{!s&&!t&&a==="default"&&i("pressed")},k=()=>{!s&&!t&&a==="default"&&i("hovered")},S=()=>{!s&&!t&&a==="default"&&i("focused")},T=()=>{!s&&!t&&i(a)};return p.jsxs(F,{type:n,variant:o,size:r,state:a!=="default"?a:$,disabled:s,loading:t,radiusKey:v,lang:w,onClick:h,className:y,onMouseEnter:b,onMouseLeave:x,onMouseDown:C,onMouseUp:k,onFocus:S,onBlur:T,children:[p.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:t?0:1,transition:"opacity 0.2s ease"},children:d&&m.createElement(d)}),p.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:t?1:0,transition:"opacity 0.2s ease"},children:p.jsx(E,{})})]})};M.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:'radius token key such as "rounded-2", "rounded-3", "rounded-full"'},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{M as I};
