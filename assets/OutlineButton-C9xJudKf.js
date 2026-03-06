import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-D0ynm1mK.js";import{s as l,c as w}from"./styled-components.browser.esm-o0t8qbnT.js";import{b as u}from"./borderColor-C_RHITEf.js";import{b as k}from"./brandColor-OQPP65_V.js";import{c as e}from"./color-CiwAFuFb.js";import{f as g}from"./fontSize-BFAJJ5Eh.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{n as c,p as m}from"./negativeColor-DPOOrHeE.js";import{r as B}from"./radius-DaoU83SK.js";import{s as b}from"./spacing-tE1IiUFl.js";import{t as y}from"./textColor-DLZeZODc.js";import{S as z,r as D}from"./types-D8y_ICtu.js";const F=w.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${b.gap["gap-1"]};
  background: transparent;
  border-radius: ${({$radius:t})=>B[D[t]]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:t})=>{switch(t){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${d[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:t,$state:a})=>{const f=()=>{switch(t){case"secondary":switch(a){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(a){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(a){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(a){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},r=()=>{switch(t){case"secondary":return y.light["fg-neutral-strong"];case"brand":return k.light["fg-brand-strong"];case"positive":return m.light["fg-positive-strong"];case"negative":return c.light["fg-negative-strong"];default:return e.blue[500]}},n=()=>{switch(t){case"secondary":switch(a){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(a){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(a){case"hovered":return`${m.light["bg-positive-primary-default"]}0D`;case"pressed":return`${m.light["bg-positive-primary-default"]}14`;case"focused":return`${m.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(a){case"hovered":return`${c.light["bg-negative-primary-default"]}0D`;case"pressed":return`${c.light["bg-negative-primary-default"]}14`;case"focused":return`${c.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return l`
      border: 1px solid ${f()};
      color: ${r()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  &:disabled {
    border-color: ${u.light["color-border-primary"]} !important;
    color: ${y.light["fg-neutral-disable"]} !important;
    cursor: not-allowed;
    background-color: ${e.gray[50]} !important;
    pointer-events: none;
  }

  ${({$loading:t})=>t&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,P=w.span`
  padding: 0 ${b.gap["gap-0.5"]};
`,N=({variant:t="primary",size:a="medium",radius:f="small",state:r="default",disabled:n=!1,loading:s=!1,leadingIcon:h,trailingIcon:v,label:x,children:$,onClick:S,className:V,lang:T})=>{const[G,o]=p.useState(r);p.useEffect(()=>{o(r)},[r]);const C=()=>{!n&&!s&&r==="default"&&o("hovered")},q=()=>{!n&&!s&&o(r)},E=()=>{!n&&!s&&r==="default"&&o("pressed")},R=()=>{!n&&!s&&r==="default"&&o("hovered")},j=()=>{!n&&!s&&r==="default"&&o("focused")},M=()=>{!n&&!s&&o(r)};return i.jsxs(F,{$variant:t,$size:a,$state:r!=="default"?r:G,$loading:s,$radius:f,disabled:n,onClick:S,className:V,lang:T,onMouseEnter:C,onMouseLeave:q,onMouseDown:E,onMouseUp:R,onFocus:j,onBlur:M,children:[i.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%",opacity:s?0:1,transition:"opacity 0.2s ease"},children:[h&&p.createElement(h),i.jsx(P,{children:$||x}),v&&p.createElement(v)]}),i.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:s?1:0,transition:"opacity 0.2s ease"},children:i.jsx(z,{})})]})};N.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};export{N as O};
