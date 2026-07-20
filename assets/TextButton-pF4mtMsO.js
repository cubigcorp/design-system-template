import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as u}from"./iframe-Diu4OQ1h.js";import{s as i,c as v}from"./styled-components.browser.esm-DZloA45Z.js";import{b as p}from"./borderColor-Bua6bgaN.js";import{b as j}from"./brandColor-C6bU0fYs.js";import{c as e}from"./color-BUCiRq0z.js";import{f as m}from"./fontSize-BFAJJ5Eh.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{n as M,p as B}from"./negativeColor-PFzGnuZM.js";import{r as k}from"./radius-DaoU83SK.js";import{s as y}from"./spacing-tE1IiUFl.js";import{t as f}from"./textColor-mWadn7SX.js";import{S as z,r as D}from"./types-JZURDx2G.js";const F=v.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${y.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${({$radius:t})=>k[D[t]]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  font-family: inherit;

  ${({$size:t})=>{switch(t){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${m.t4[0]};
          font-weight: ${d[500]};
          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
          padding: 8px 16px;
          height: 40px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};
          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({$variant:t,$state:s})=>{const c=()=>{switch(t){case"secondary":return f.light["fg-neutral-strong"];case"brand":return j.light["fg-brand-strong"];case"positive":return B.light["fg-positive-strong"];case"negative":return M.light["fg-negative-strong"];default:return f.light["fg-neutral-strong"]}},r=()=>{switch(t){case"secondary":switch(s){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return`${e.gray[950]}00`}case"brand":switch(s){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return`${e.deeppurple[600]}00`}case"positive":switch(s){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return`${e.green[600]}00`}case"negative":switch(s){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return`${e.red[600]}00`}default:return"transparent"}},a=()=>{if(s==="focused")switch(t){case"secondary":return p.light["color-border-focused"];case"brand":return p.light["color-border-brand"];case"positive":return p.light["color-border-positive"];case"negative":return p.light["color-border-negative"];default:return"transparent"}return"transparent"};return i`
      color: ${c()};
      background-color: ${r()};
      border: 1px solid ${a()};

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  &:disabled {
    color: ${f.light["fg-neutral-disable"]} !important;
    cursor: not-allowed;
    background-color: transparent !important;
    pointer-events: none;
  }

  ${({$loading:t})=>t&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,P=v.span`
  padding: 0 ${y.gap["gap-0.5"]};
`,N=({variant:t="primary",size:s="medium",radius:c="small",state:r="default",disabled:a=!1,loading:n=!1,leadingIcon:g,trailingIcon:h,label:x,children:$,onClick:w,className:b,lang:S})=>{const[V,o]=u.useState(r);u.useEffect(()=>{o(r)},[r]);const T=()=>{!a&&!n&&r==="default"&&o("hovered")},G=()=>{!a&&!n&&o(r)},C=()=>{!a&&!n&&r==="default"&&o("pressed")},q=()=>{!a&&!n&&r==="default"&&o("hovered")},E=()=>{!a&&!n&&r==="default"&&o("focused")},R=()=>{!a&&!n&&o(r)};return l.jsxs(F,{$variant:t,$size:s,$state:r!=="default"?r:V,$loading:n,$radius:c,disabled:a,onClick:w,className:b,lang:S,onMouseEnter:T,onMouseLeave:G,onMouseDown:C,onMouseUp:q,onFocus:E,onBlur:R,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"4px",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[g&&u.createElement(g),l.jsx(P,{children:$||x}),h&&u.createElement(h)]}),l.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:l.jsx(z,{})})]})};N.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'tertiary'
| 'brand'
| 'positive'
| 'negative'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'focused'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'focused'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}},composes:["Omit"]};export{N as T};
