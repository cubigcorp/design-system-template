import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{l as i,d as $}from"./styled-components.browser.esm-BYbGDw5M.js";import{c as e}from"./color-CiwAFuFb.js";import{r as F}from"./radius-DaoU83SK.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{f as c}from"./fontSize-BFAJJ5Eh.js";import{S as B}from"./Spinner-DHoirSy7.js";import{R as p}from"./iframe-DqVVvM-u.js";import{b as u}from"./borderColor-C_RHITEf.js";import{s as w}from"./spacing-tE1IiUFl.js";import{t as v}from"./textColor-DLZeZODc.js";import{b as P}from"./brandColor-OQPP65_V.js";import{n as g,p as h}from"./negativeColor-DPOOrHeE.js";import{f as y}from"./fontFamily-CsG1KcIF.js";const D=$.button.withConfig({shouldForwardProp:r=>!["loading","state","radiusKey"].includes(r)})`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${w.gap["gap-1"]};
  background: transparent;
  border-radius: ${({radiusKey:r="rounded-2"})=>F[r]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${y.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${y.ko};
  }

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${c.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${c.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
          padding: 8px 16px;
          height: 40px;
          font-size: ${c.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:r="primary",state:s="default"})=>{const t=()=>{switch(r){case"secondary":switch(s){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(s){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(s){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(s){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},a=()=>{switch(r){case"secondary":return v.light["fg-neutral-strong"];case"brand":return P.light["fg-brand-strong"];case"positive":return h.light["fg-positive-strong"];case"negative":return g.light["fg-negative-strong"];default:return e.blue[500]}},n=()=>{switch(r){case"secondary":switch(s){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(s){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(s){case"hovered":return`${h.light["bg-positive-primary-default"]}0D`;case"pressed":return`${h.light["bg-positive-primary-default"]}14`;case"focused":return`${h.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(s){case"hovered":return`${g.light["bg-negative-primary-default"]}0D`;case"pressed":return`${g.light["bg-negative-primary-default"]}14`;case"focused":return`${g.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return i`
      border: 1px solid ${t()};
      color: ${a()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:r})=>r&&i`
      border-color: ${u.light["color-border-primary"]} !important;
      color: ${v.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${e.gray[50]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,z=$.span`
  padding: 0 ${w.gap["gap-0.5"]};
`,N=({variant:r="primary",size:s="medium",state:t="default",disabled:a=!1,loading:n=!1,leadingIcon:f,trailingIcon:m,label:x,children:b,onClick:S,className:V,radiusKey:T,lang:G})=>{const[q,o]=p.useState(t);p.useEffect(()=>{o(t)},[t]);const C=()=>{!a&&!n&&t==="default"&&o("hovered")},E=()=>{!a&&!n&&o(t)},k=()=>{!a&&!n&&t==="default"&&o("pressed")},R=()=>{!a&&!n&&t==="default"&&o("hovered")},j=()=>{!a&&!n&&t==="default"&&o("focused")},M=()=>{!a&&!n&&o(t)};return l.jsxs(D,{variant:r,size:s,state:t!=="default"?t:q,disabled:a,loading:n,radiusKey:T,onClick:S,className:V,lang:G,onMouseEnter:C,onMouseLeave:E,onMouseDown:k,onMouseUp:R,onFocus:j,onBlur:M,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[f&&p.createElement(f),l.jsx(z,{children:b||x}),m&&p.createElement(m)]}),l.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:l.jsx(B,{})})]})};N.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const I=$.button.withConfig({shouldForwardProp:r=>!["loading","state","radiusKey"].includes(r)})`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${w.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${({radiusKey:r="rounded-2"})=>F[r]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${y.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${y.ko};
  }

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${c.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${c.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
          padding: 8px 16px;
          height: 40px;
          font-size: ${c.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:r="primary",state:s="default"})=>{const t=()=>{switch(r){case"secondary":return v.light["fg-neutral-strong"];case"brand":return P.light["fg-brand-strong"];case"positive":return h.light["fg-positive-strong"];case"negative":return g.light["fg-negative-strong"];default:return v.light["fg-neutral-strong"]}},a=()=>{switch(r){case"secondary":switch(s){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return`${e.gray[950]}00`}case"brand":switch(s){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return`${e.deeppurple[600]}00`}case"positive":switch(s){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return`${e.green[600]}00`}case"negative":switch(s){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return`${e.red[600]}00`}default:return"transparent"}},n=()=>{if(s==="focused")switch(r){case"secondary":return u.light["color-border-focused"];case"brand":return u.light["color-border-brand"];case"positive":return u.light["color-border-positive"];case"negative":return u.light["color-border-negative"];default:return"transparent"}return"transparent"};return i`
      color: ${t()};
      background-color: ${a()};
      border: 1px solid ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:r})=>r&&i`
      color: ${v.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,K=$.span`
  padding: 0 ${w.gap["gap-0.5"]};
`,L=({variant:r="primary",size:s="medium",state:t="default",disabled:a=!1,loading:n=!1,leadingIcon:f,trailingIcon:m,label:x,children:b,onClick:S,className:V,radiusKey:T,lang:G})=>{const[q,o]=p.useState(t);p.useEffect(()=>{o(t)},[t]);const C=()=>{!a&&!n&&t==="default"&&o("hovered")},E=()=>{!a&&!n&&o(t)},k=()=>{!a&&!n&&t==="default"&&o("pressed")},R=()=>{!a&&!n&&t==="default"&&o("hovered")},j=()=>{!a&&!n&&t==="default"&&o("focused")},M=()=>{!a&&!n&&o(t)};return l.jsxs(I,{variant:r,size:s,state:t!=="default"?t:q,disabled:a,loading:n,radiusKey:T,onClick:S,className:V,lang:G,onMouseEnter:C,onMouseLeave:E,onMouseDown:k,onMouseUp:R,onFocus:j,onBlur:M,children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[f&&p.createElement(f),l.jsx(K,{children:b||x}),m&&p.createElement(m)]}),l.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:l.jsx(B,{})})]})};L.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{N as O,L as T};
