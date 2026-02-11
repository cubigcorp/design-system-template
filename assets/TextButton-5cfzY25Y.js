import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as u}from"./iframe-D4fn7yV1.js";import{l,d as h}from"./styled-components.browser.esm-kr1dGAPk.js";import{b as p}from"./borderColor-C_RHITEf.js";import{b as j}from"./brandColor-OQPP65_V.js";import{c as e}from"./color-CiwAFuFb.js";import{f as c}from"./fontSize-BFAJJ5Eh.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{n as k,p as M}from"./negativeColor-DPOOrHeE.js";import{r as B}from"./radius-DaoU83SK.js";import{s as v}from"./spacing-tE1IiUFl.js";import{t as m}from"./textColor-DLZeZODc.js";import{S as z}from"./Spinner-DQZNpWi0.js";const D=h.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${({$radiusKey:t="rounded-2"})=>B[t]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:t})=>{switch(t){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${c.t4[0]};
          font-weight: ${d[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${c.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${c.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:t,$state:o})=>{const r=()=>{switch(t){case"secondary":return m.light["fg-neutral-strong"];case"brand":return j.light["fg-brand-strong"];case"positive":return M.light["fg-positive-strong"];case"negative":return k.light["fg-negative-strong"];default:return m.light["fg-neutral-strong"]}},a=()=>{switch(t){case"secondary":switch(o){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return`${e.gray[950]}00`}case"brand":switch(o){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return`${e.deeppurple[600]}00`}case"positive":switch(o){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return`${e.green[600]}00`}case"negative":switch(o){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return`${e.red[600]}00`}default:return"transparent"}},n=()=>{if(o==="focused")switch(t){case"secondary":return p.light["color-border-focused"];case"brand":return p.light["color-border-brand"];case"positive":return p.light["color-border-positive"];case"negative":return p.light["color-border-negative"];default:return"transparent"}return"transparent"};return l`
      color: ${r()};
      background-color: ${a()};
      border: 1px solid ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  &:disabled {
    color: ${m.light["fg-neutral-disable"]} !important;
    cursor: not-allowed;
    background-color: transparent !important;
    pointer-events: none;
  }

  ${({$loading:t})=>t&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,F=h.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,P=({variant:t="primary",size:o="medium",state:r="default",disabled:a=!1,loading:n=!1,leadingIcon:f,trailingIcon:g,label:y,children:x,onClick:$,className:w,radiusKey:S,lang:b})=>{const[V,s]=u.useState(r);u.useEffect(()=>{s(r)},[r]);const T=()=>{!a&&!n&&r==="default"&&s("hovered")},G=()=>{!a&&!n&&s(r)},C=()=>{!a&&!n&&r==="default"&&s("pressed")},q=()=>{!a&&!n&&r==="default"&&s("hovered")},E=()=>{!a&&!n&&r==="default"&&s("focused")},R=()=>{!a&&!n&&s(r)};return i.jsxs(D,{$variant:t,$size:o,$state:r!=="default"?r:V,$loading:n,$radiusKey:S,disabled:a,onClick:$,className:w,lang:b,onMouseEnter:T,onMouseLeave:G,onMouseDown:C,onMouseUp:q,onFocus:E,onBlur:R,children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[f&&u.createElement(f),i.jsx(F,{children:x||y}),g&&u.createElement(g)]}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:i.jsx(z,{})})]})};P.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{P as T};
