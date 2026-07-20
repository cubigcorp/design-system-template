import{j as p}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./iframe-Diu4OQ1h.js";import{s as u,c as $}from"./styled-components.browser.esm-DZloA45Z.js";import{b as s}from"./borderColor-Bua6bgaN.js";import{b as q}from"./brandColor-C6bU0fYs.js";import{c as e}from"./color-BUCiRq0z.js";import{n as k,p as B}from"./negativeColor-PFzGnuZM.js";import{r as G}from"./radius-DaoU83SK.js";import{s as f}from"./spacing-tE1IiUFl.js";import{t as c}from"./textColor-mWadn7SX.js";import{S as M,r as j}from"./types-JZURDx2G.js";const E=$.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({$radius:n})=>G[j[n]]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:n})=>{switch(n){case"small":return u`
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

  ${({$type:n,$variant:r,$state:a})=>{if(n==="solid"){const d=()=>{switch(r){case"primary":switch(a){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(a){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(a){case"hovered":return e.deeppurple[500];case"pressed":return e.deeppurple[400];default:return e.deeppurple[600]}case"negative":switch(a){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(a){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},t=()=>{switch(r){case"primary":return e.gray[800];case"secondary":return a==="focused"?s.light["color-border-focused"]:s.light["color-border-primary"];case"brand":return"transparent";case"negative":switch(a){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(a){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},o=()=>{switch(r){case"primary":return e.common[100];case"secondary":return c.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
        background-color: ${d()};
        color: ${o()};
        border: ${r==="brand"?"none":`1px solid ${t()}`};

        &:focus {
          outline: none;
          border-color: ${r==="secondary"?s.light["color-border-focused"]:t()};
        }
      `}else{const d=()=>{switch(r){case"secondary":switch(a){case"focused":return s.light["color-border-focused"];default:return s.light["color-border-primary"]}case"brand":switch(a){case"focused":return s.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(a){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(a){case"focused":return s.light["color-border-negative"];default:return e.red[200]}default:return s.light["color-border-primary"]}},t=()=>{switch(r){case"secondary":return c.light["fg-neutral-strong"];case"brand":return q.light["fg-brand-strong"];case"positive":return B.light["fg-positive-strong"];case"negative":return k.light["fg-negative-strong"];default:return c.light["fg-neutral-strong"]}},o=()=>{switch(r){case"secondary":switch(a){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(a){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(a){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(a){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return u`
        border: 1px solid ${d()};
        color: ${t()};
        background-color: ${o()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
  }

  ${({$type:n,$variant:r})=>u`
    &:disabled {
      ${n==="solid"?u`
            background-color: ${r==="primary"?e.gray[700]:r==="brand"?e.deeppurple[200]:e.gray[50]} !important;
            border: ${r==="brand"?"none":void 0} !important;
            border-color: ${r==="primary"?e.gray[600]:r==="brand"?"transparent":s.light["color-border-primary"]} !important;
            color: ${r==="primary"?e.gray[500]:r==="brand"?e.common[100]:c.light["fg-neutral-disable"]} !important;
          `:u`
            border-color: ${s.light["color-border-primary"]} !important;
            color: ${c.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
    }
  `}

  ${({$loading:n})=>n&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,I=({type:n="solid",variant:r="primary",size:a="medium",radius:d="small",state:t="default",disabled:o=!1,loading:l=!1,icon:g,onClick:h,className:y,lang:v})=>{const[b,i]=m.useState(t);m.useEffect(()=>{i(t)},[t]);const w=()=>{!o&&!l&&t==="default"&&i("hovered")},x=()=>{!o&&!l&&i(t)},V=()=>{!o&&!l&&t==="default"&&i("pressed")},C=()=>{!o&&!l&&t==="default"&&i("hovered")},S=()=>{!o&&!l&&t==="default"&&i("focused")},T=()=>{!o&&!l&&i(t)};return p.jsxs(E,{$type:n,$variant:r,$size:a,$state:t!=="default"?t:b,$loading:l,$radius:d,disabled:o,lang:v,onClick:h,className:y,onMouseEnter:w,onMouseLeave:x,onMouseDown:V,onMouseUp:C,onFocus:S,onBlur:T,children:[p.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:l?0:1,transition:"opacity 0.2s ease"},children:g&&m.createElement(g)}),p.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:l?1:0,transition:"opacity 0.2s ease"},children:p.jsx(M,{})})]})};I.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:"'solid' | 'outline'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'outline'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'brand' | 'positive' | 'negative'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{I};
