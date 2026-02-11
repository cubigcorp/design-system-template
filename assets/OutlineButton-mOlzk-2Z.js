import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-D4fn7yV1.js";import{l,d as y}from"./styled-components.browser.esm-kr1dGAPk.js";import{b as u}from"./borderColor-C_RHITEf.js";import{b as M}from"./brandColor-OQPP65_V.js";import{c as e}from"./color-CiwAFuFb.js";import{f}from"./fontSize-BFAJJ5Eh.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{n as c,p as m}from"./negativeColor-DPOOrHeE.js";import{r as B}from"./radius-DaoU83SK.js";import{s as w}from"./spacing-tE1IiUFl.js";import{t as v}from"./textColor-DLZeZODc.js";import{S as z}from"./Spinner-DQZNpWi0.js";const D=y.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${w.gap["gap-1"]};
  background: transparent;
  border-radius: ${({$radiusKey:t="rounded-2"})=>B[t]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:t})=>{switch(t){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${f.t4[0]};
          font-weight: ${d[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${f.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${f.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:t,$state:n})=>{const r=()=>{switch(t){case"secondary":switch(n){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(n){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(n){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(n){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},o=()=>{switch(t){case"secondary":return v.light["fg-neutral-strong"];case"brand":return M.light["fg-brand-strong"];case"positive":return m.light["fg-positive-strong"];case"negative":return c.light["fg-negative-strong"];default:return e.blue[500]}},a=()=>{switch(t){case"secondary":switch(n){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(n){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(n){case"hovered":return`${m.light["bg-positive-primary-default"]}0D`;case"pressed":return`${m.light["bg-positive-primary-default"]}14`;case"focused":return`${m.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(n){case"hovered":return`${c.light["bg-negative-primary-default"]}0D`;case"pressed":return`${c.light["bg-negative-primary-default"]}14`;case"focused":return`${c.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return l`
      border: 1px solid ${r()};
      color: ${o()};
      background-color: ${a()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  &:disabled {
    border-color: ${u.light["color-border-primary"]} !important;
    color: ${v.light["fg-neutral-disable"]} !important;
    cursor: not-allowed;
    background-color: ${e.gray[50]} !important;
    pointer-events: none;
  }

  ${({$loading:t})=>t&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,F=y.span`
  padding: 0 ${w.gap["gap-0.5"]};
`,P=({variant:t="primary",size:n="medium",state:r="default",disabled:o=!1,loading:a=!1,leadingIcon:g,trailingIcon:h,label:b,children:x,onClick:$,className:S,radiusKey:V,lang:T})=>{const[G,s]=p.useState(r);p.useEffect(()=>{s(r)},[r]);const C=()=>{!o&&!a&&r==="default"&&s("hovered")},q=()=>{!o&&!a&&s(r)},E=()=>{!o&&!a&&r==="default"&&s("pressed")},R=()=>{!o&&!a&&r==="default"&&s("hovered")},j=()=>{!o&&!a&&r==="default"&&s("focused")},k=()=>{!o&&!a&&s(r)};return i.jsxs(D,{$variant:t,$size:n,$state:r!=="default"?r:G,$loading:a,$radiusKey:V,disabled:o,onClick:$,className:S,lang:T,onMouseEnter:C,onMouseLeave:q,onMouseDown:E,onMouseUp:R,onFocus:j,onBlur:k,children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:a?0:1,transition:"opacity 0.2s ease"},children:[g&&p.createElement(g),i.jsx(F,{children:x||b}),h&&p.createElement(h)]}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:a?1:0,transition:"opacity 0.2s ease"},children:i.jsx(z,{})})]})};P.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{P as O};
