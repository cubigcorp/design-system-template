import{j as i}from"./jsx-runtime-DORK9biX.js";import{l,d as h}from"./styled-components.browser.esm-Cr-any12.js";import{c as e}from"./color-DlZ4f652.js";import{r as M}from"./radius-DaoU83SK.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{f as p}from"./fontSize-BFAJJ5Eh.js";import{b as u,t as g}from"./borderColor-7dRAAa5F.js";import{s as v}from"./spacing-tE1IiUFl.js";import{S as B}from"./Spinner-CIFvj1Zx.js";import{R as c}from"./iframe-Drh7vK1U.js";import{b as P}from"./brandColor-9nHZhGOS.js";import{n as C,p as R}from"./negativeColor-DFTQtxpe.js";const F=h.button.withConfig({shouldForwardProp:r=>!["loading","state"].includes(r)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  border: none;
  border-radius: ${M["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:r="medium"})=>{switch(r){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:r="primary",state:a="default"})=>{const t=()=>{switch(r){case"primary":switch(a){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(a){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(a){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(a){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(a){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},s=()=>{switch(r){case"primary":return e.gray[800];case"secondary":return a==="focused"?u.light["color-border-focused"]:u.light["color-border-primary"];case"brand":switch(a){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return u.light["color-border-brand"]}case"negative":switch(a){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(a){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(r){case"primary":return e.common[100];case"secondary":return g.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return l`
      background-color: ${t()};
      color: ${n()};
      border: 1px solid ${s()};

      &:focus {
        outline: none;
        border-color: ${r==="secondary"?u.light["color-border-focused"]:s()};
      }
    `}}

  // 비활성화 상태
  ${({disabled:r,variant:a="primary"})=>r&&l`
      background-color: ${a==="primary"?e.gray[900]:e.gray[50]} !important;
      border-color: ${a==="primary"?e.gray[800]:u.light["color-border-primary"]} !important;
      color: ${a==="primary"?g.light["fg-neutral-alternative"]:g.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,j=h.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,k=({variant:r="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:y,children:w,onClick:$,className:x})=>{const[S,o]=c.useState(t);c.useEffect(()=>{o(t)},[t]);const V=()=>{!s&&!n&&t==="default"&&o("hovered")},b=()=>{!s&&!n&&o(t)},G=()=>{!s&&!n&&t==="default"&&o("pressed")},T=()=>{!s&&!n&&t==="default"&&o("hovered")},E=()=>{!s&&!n&&t==="default"&&o("focused")},q=()=>{!s&&!n&&o(t)};return i.jsx(F,{variant:r,size:a,state:t!=="default"?t:S,disabled:s,loading:n,onClick:$,className:x,onMouseEnter:V,onMouseLeave:b,onMouseDown:G,onMouseUp:T,onFocus:E,onBlur:q,children:n?i.jsx(B,{}):i.jsxs(i.Fragment,{children:[m&&c.createElement(m),i.jsx(j,{children:w||y}),f&&c.createElement(f)]})})};k.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const D=h.button.withConfig({shouldForwardProp:r=>!["loading","state"].includes(r)})`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  background: transparent;
  border-radius: ${M["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:r="primary",state:a="default"})=>{const t=()=>{switch(r){case"secondary":switch(a){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(a){case"focused":return u.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(a){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(a){case"focused":return u.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},s=()=>{switch(r){case"secondary":return g.light["fg-neutral-strong"];case"brand":return P.light["fg-brand-strong"];case"positive":return R.light["fg-positive-strong"];case"negative":return C.light["fg-negative-strong"];default:return e.blue[500]}},n=()=>{switch(r){case"secondary":switch(a){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(a){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(a){case"hovered":return`${R.light["bg-positive-primary-default"]}0D`;case"pressed":return`${R.light["bg-positive-primary-default"]}14`;case"focused":return`${R.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(a){case"hovered":return`${C.light["bg-negative-primary-default"]}0D`;case"pressed":return`${C.light["bg-negative-primary-default"]}14`;case"focused":return`${C.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return l`
      border: 1px solid ${t()};
      color: ${s()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:r})=>r&&l`
      border-color: ${u.light["color-border-primary"]} !important;
      color: ${g.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${e.gray[50]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,z=h.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,N=({variant:r="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:y,children:w,onClick:$,className:x})=>{const[S,o]=c.useState(t);c.useEffect(()=>{o(t)},[t]);const V=()=>{!s&&!n&&t==="default"&&o("hovered")},b=()=>{!s&&!n&&o(t)},G=()=>{!s&&!n&&t==="default"&&o("pressed")},T=()=>{!s&&!n&&t==="default"&&o("hovered")},E=()=>{!s&&!n&&t==="default"&&o("focused")},q=()=>{!s&&!n&&o(t)};return i.jsx(D,{variant:r,size:a,state:t!=="default"?t:S,disabled:s,loading:n,onClick:$,className:x,onMouseEnter:V,onMouseLeave:b,onMouseDown:G,onMouseUp:T,onFocus:E,onBlur:q,children:n?i.jsx(B,{}):i.jsxs(i.Fragment,{children:[m&&c.createElement(m),i.jsx(z,{children:w||y}),f&&c.createElement(f)]})})};N.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const I=h.button.withConfig({shouldForwardProp:r=>!["loading","state"].includes(r)})`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${M["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:r="primary",state:a="default"})=>{const t=()=>{switch(r){case"secondary":return g.light["fg-neutral-strong"];case"brand":return P.light["fg-brand-strong"];case"positive":return R.light["fg-positive-strong"];case"negative":return C.light["fg-negative-strong"];default:return g.light["fg-neutral-strong"]}},s=()=>{switch(r){case"secondary":switch(a){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return`${e.gray[950]}00`}case"brand":switch(a){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return`${e.deeppurple[600]}00`}case"positive":switch(a){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return`${e.green[600]}00`}case"negative":switch(a){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return`${e.red[600]}00`}default:return"transparent"}},n=()=>{if(a==="focused")switch(r){case"secondary":return u.light["color-border-focused"];case"brand":return u.light["color-border-brand"];case"positive":return u.light["color-border-positive"];case"negative":return u.light["color-border-negative"];default:return"transparent"}return"transparent"};return l`
      color: ${t()};
      background-color: ${s()};
      border: 1px solid ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:r})=>r&&l`
      color: ${g.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,L=h.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,U=({variant:r="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:y,children:w,onClick:$,className:x})=>{const[S,o]=c.useState(t);c.useEffect(()=>{o(t)},[t]);const V=()=>{!s&&!n&&t==="default"&&o("hovered")},b=()=>{!s&&!n&&o(t)},G=()=>{!s&&!n&&t==="default"&&o("pressed")},T=()=>{!s&&!n&&t==="default"&&o("hovered")},E=()=>{!s&&!n&&t==="default"&&o("focused")},q=()=>{!s&&!n&&o(t)};return i.jsx(I,{variant:r,size:a,state:t!=="default"?t:S,disabled:s,loading:n,onClick:$,className:x,onMouseEnter:V,onMouseLeave:b,onMouseDown:G,onMouseUp:T,onFocus:E,onBlur:q,children:n?i.jsx(B,{}):i.jsxs(i.Fragment,{children:[m&&c.createElement(m),i.jsx(L,{children:w||y}),f&&c.createElement(f)]})})};U.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{N as O,k as S,U as T};
