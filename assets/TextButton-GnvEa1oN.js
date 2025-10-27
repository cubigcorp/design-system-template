import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{l as i,t as g,d as y}from"./textColor-Bu4n0d9i.js";import{c as e}from"./color-CiwAFuFb.js";import{r as B}from"./radius-DaoU83SK.js";import{f as d}from"./fontWeight-CRwBdwgF.js";import{f as p}from"./fontSize-BFAJJ5Eh.js";import{f as h}from"./fontFamily-CsG1KcIF.js";import{b as l}from"./borderColor-C_RHITEf.js";import{s as v}from"./spacing-tE1IiUFl.js";import{S as P}from"./Spinner-BEyfEYhK.js";import{R as c}from"./iframe-BTdZdBan.js";import{n as M,p as j,b as F}from"./negativeColor-C6enJIYV.js";const D=y.button.withConfig({shouldForwardProp:r=>!["loading","state","radiusKey"].includes(r)})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  border: none;
  border-radius: ${({radiusKey:r="rounded-2"})=>B[r]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${h.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${h.ko};
  }

  ${({size:r="medium"})=>{switch(r){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
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
  ${({variant:r="primary",state:a="default"})=>{const t=()=>{switch(r){case"primary":switch(a){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(a){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"tertiary":switch(a){case"hovered":return e.gray[200];case"pressed":return e.gray[300];case"focused":return e.gray[200];default:return e.gray[100]}case"brand":switch(a){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(a){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(a){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},s=()=>{switch(r){case"primary":return e.gray[800];case"secondary":return a==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"tertiary":return a==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"brand":switch(a){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return l.light["color-border-brand"]}case"negative":switch(a){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(a){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},n=()=>{switch(r){case"primary":return e.common[100];case"secondary":case"tertiary":return g.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return i`
      background-color: ${t()};
      color: ${n()};
      border: 1px solid ${s()};

      &:focus {
        outline: none;
        border-color: ${r==="secondary"?l.light["color-border-focused"]:s()};
      }
    `}}

  // 비활성화 상태
  ${({disabled:r,variant:a="primary"})=>r&&i`
      background-color: ${a==="primary"?e.gray[700]:e.gray[50]} !important;
      border-color: ${a==="primary"?e.gray[600]:l.light["color-border-primary"]} !important;
      color: ${a==="primary"?e.gray[500]:g.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,z=y.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,N=({variant:r="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:w,children:$,onClick:x,className:b,radiusKey:S,lang:V})=>{const[T,o]=c.useState(t);c.useEffect(()=>{o(t)},[t]);const G=()=>{!s&&!n&&t==="default"&&o("hovered")},q=()=>{!s&&!n&&o(t)},C=()=>{!s&&!n&&t==="default"&&o("pressed")},E=()=>{!s&&!n&&t==="default"&&o("hovered")},k=()=>{!s&&!n&&t==="default"&&o("focused")},R=()=>{!s&&!n&&o(t)};return u.jsxs(D,{variant:r,size:a,state:t!=="default"?t:T,disabled:s,loading:n,radiusKey:S,lang:V,onClick:x,className:b,onMouseEnter:G,onMouseLeave:q,onMouseDown:C,onMouseUp:E,onFocus:k,onBlur:R,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[m&&c.createElement(m),u.jsx(z,{children:$||w}),f&&c.createElement(f)]}),u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:u.jsx(P,{})})]})};N.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const I=y.button.withConfig({shouldForwardProp:r=>!["loading","state","radiusKey"].includes(r)})`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  background: transparent;
  border-radius: ${({radiusKey:r="rounded-2"})=>B[r]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${h.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${h.ko};
  }

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
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
  ${({variant:r="primary",state:a="default"})=>{const t=()=>{switch(r){case"secondary":switch(a){case"focused":return l.light["color-border-focused"];default:return l.light["color-border-primary"]}case"brand":switch(a){case"focused":return l.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(a){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(a){case"focused":return l.light["color-border-negative"];default:return e.red[200]}default:return e.blue[500]}},s=()=>{switch(r){case"secondary":return g.light["fg-neutral-strong"];case"brand":return F.light["fg-brand-strong"];case"positive":return j.light["fg-positive-strong"];case"negative":return M.light["fg-negative-strong"];default:return e.blue[500]}},n=()=>{switch(r){case"secondary":switch(a){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return"transparent"}case"brand":switch(a){case"hovered":return`${e.deeppurple[800]}0D`;case"pressed":return`${e.deeppurple[800]}14`;case"focused":return`${e.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(a){case"hovered":return`${j.light["bg-positive-primary-default"]}0D`;case"pressed":return`${j.light["bg-positive-primary-default"]}14`;case"focused":return`${j.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(a){case"hovered":return`${M.light["bg-negative-primary-default"]}0D`;case"pressed":return`${M.light["bg-negative-primary-default"]}14`;case"focused":return`${M.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return i`
      border: 1px solid ${t()};
      color: ${s()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:r})=>r&&i`
      border-color: ${l.light["color-border-primary"]} !important;
      color: ${g.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${e.gray[50]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,K=y.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,L=({variant:r="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:w,children:$,onClick:x,className:b,radiusKey:S,lang:V})=>{const[T,o]=c.useState(t);c.useEffect(()=>{o(t)},[t]);const G=()=>{!s&&!n&&t==="default"&&o("hovered")},q=()=>{!s&&!n&&o(t)},C=()=>{!s&&!n&&t==="default"&&o("pressed")},E=()=>{!s&&!n&&t==="default"&&o("hovered")},k=()=>{!s&&!n&&t==="default"&&o("focused")},R=()=>{!s&&!n&&o(t)};return u.jsxs(I,{variant:r,size:a,state:t!=="default"?t:T,disabled:s,loading:n,radiusKey:S,onClick:x,className:b,lang:V,onMouseEnter:G,onMouseLeave:q,onMouseDown:C,onMouseUp:E,onFocus:k,onBlur:R,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[m&&c.createElement(m),u.jsx(K,{children:$||w}),f&&c.createElement(f)]}),u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:u.jsx(P,{})})]})};L.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const U=y.button.withConfig({shouldForwardProp:r=>!["loading","state","radiusKey"].includes(r)})`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${v.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${({radiusKey:r="rounded-2"})=>B[r]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:lang(en),
  &[lang="en"] {
    font-family: ${h.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${h.ko};
  }

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return i`
          padding: 6px 12px;
          height: 32px;
          font-size: ${p.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return i`
          padding: 12px 16px;
          height: 48px;
          font-size: ${p.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return i`
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
  ${({variant:r="primary",state:a="default"})=>{const t=()=>{switch(r){case"secondary":return g.light["fg-neutral-strong"];case"brand":return F.light["fg-brand-strong"];case"positive":return j.light["fg-positive-strong"];case"negative":return M.light["fg-negative-strong"];default:return g.light["fg-neutral-strong"]}},s=()=>{switch(r){case"secondary":switch(a){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[950]}14`;case"focused":return`${e.gray[950]}1F`;default:return`${e.gray[950]}00`}case"brand":switch(a){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return`${e.deeppurple[600]}00`}case"positive":switch(a){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return`${e.green[600]}00`}case"negative":switch(a){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return`${e.red[600]}00`}default:return"transparent"}},n=()=>{if(a==="focused")switch(r){case"secondary":return l.light["color-border-focused"];case"brand":return l.light["color-border-brand"];case"positive":return l.light["color-border-positive"];case"negative":return l.light["color-border-negative"];default:return"transparent"}return"transparent"};return i`
      color: ${t()};
      background-color: ${s()};
      border: 1px solid ${n()};

      &:focus {
        outline: 2px solid ${e.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:r})=>r&&i`
      color: ${g.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&i`
      cursor: wait;
      pointer-events: none;
    `}
`,_=y.span`
  padding: 0 ${v.gap["gap-0.5"]};
`,W=({variant:r="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,leadingIcon:m,trailingIcon:f,label:w,children:$,onClick:x,className:b,radiusKey:S,lang:V})=>{const[T,o]=c.useState(t);c.useEffect(()=>{o(t)},[t]);const G=()=>{!s&&!n&&t==="default"&&o("hovered")},q=()=>{!s&&!n&&o(t)},C=()=>{!s&&!n&&t==="default"&&o("pressed")},E=()=>{!s&&!n&&t==="default"&&o("hovered")},k=()=>{!s&&!n&&t==="default"&&o("focused")},R=()=>{!s&&!n&&o(t)};return u.jsxs(U,{variant:r,size:a,state:t!=="default"?t:T,disabled:s,loading:n,radiusKey:S,onClick:x,className:b,lang:V,onMouseEnter:G,onMouseLeave:q,onMouseDown:C,onMouseUp:E,onFocus:k,onBlur:R,children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",opacity:n?0:1,transition:"opacity 0.2s ease"},children:[m&&c.createElement(m),u.jsx(_,{children:$||w}),f&&c.createElement(f)]}),u.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:n?1:0,transition:"opacity 0.2s ease"},children:u.jsx(P,{})})]})};W.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "tertiary"
| "brand"
| "positive"
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},radiusKey:{required:!1,tsType:{name:"unknown"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{L as O,N as S,W as T};
