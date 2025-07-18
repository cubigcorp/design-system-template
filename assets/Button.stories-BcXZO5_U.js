import{j as s}from"./jsx-runtime-DI6caXpZ.js";import{l as u,d as S}from"./styled-components.browser.esm-B5gIxz1z.js";import{c as r}from"./color-CMFzNX_O.js";import{r as A}from"./radius-DaoU83SK.js";import{f as d}from"./fontWeight-DlyBHknl.js";import{b as l,t as x}from"./borderColor-C1c8KEhD.js";import{s as w}from"./spacing-tE1IiUFl.js";import{S as H}from"./Spinner-BZsI1Yd3.js";import{R as c}from"./iframe-C3u_M5gA.js";import{b as Ce}from"./brandColor-OMV9mLOG.js";import{n as y,p as v}from"./negativeColor-vAhOVlFC.js";const g={t4:["14px",{"@media (max-width: 768px)":["14px"],"@media (max-width: 375px)":["14px"]}],t5:["16px",{"@media (max-width: 768px)":["16px"],"@media (max-width: 375px)":["14px"]}]},Re=S.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${w.gap["gap-1"]};
  border: none;
  border-radius: ${A["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:e="medium"})=>{switch(e){case"small":return u`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:n="default"})=>{const t=()=>{switch(e){case"primary":switch(n){case"hovered":return r.gray[925];case"pressed":return r.gray[900];case"focused":return r.gray[850];default:return r.gray[950]}case"secondary":switch(n){case"hovered":return r.gray[50];case"pressed":return r.gray[100];case"focused":return r.gray[200];default:return r.common[100]}case"brand":switch(n){case"hovered":case"focused":return r.deeppurple[600];case"pressed":return r.deeppurple[400];default:return r.deeppurple[800]}case"negative":switch(n){case"hovered":case"focused":return r.red[500];case"pressed":return r.red[400];default:return r.red[600]}case"positive":switch(n){case"hovered":case"focused":return r.green[500];case"pressed":return r.green[400];default:return r.green[600]}default:return r.gray[950]}},o=()=>{switch(e){case"primary":return r.gray[800];case"secondary":return n==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"brand":switch(n){case"hovered":case"focused":return r.deeppurple[400];case"pressed":return r.deeppurple[300];default:return l.light["color-border-brand"]}case"negative":switch(n){case"hovered":case"focused":return r.red[400];case"pressed":return r.red[300];default:return r.red[400]}case"positive":switch(n){case"hovered":case"focused":return r.green[400];case"pressed":return r.green[300];default:return r.green[500]}default:return r.gray[800]}},a=()=>{switch(e){case"primary":return r.common[100];case"secondary":return x.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return r.common[100];default:return r.common[100]}};return u`
      background-color: ${t()};
      color: ${a()};
      border: 1px solid ${o()};

      &:focus {
        outline: none;
        border-color: ${e==="secondary"?l.light["color-border-focused"]:o()};
      }
    `}}

  // 비활성화 상태
  ${({disabled:e,variant:n="primary"})=>e&&u`
      background-color: ${n==="primary"?r.gray[900]:r.gray[50]} !important;
      border-color: ${n==="primary"?r.gray[800]:l.light["color-border-primary"]} !important;
      color: ${n==="primary"?x.light["fg-neutral-alternative"]:x.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,Me=S.span`
  padding: 0 ${w.gap["gap-0.5"]};
`,b=({variant:e="primary",size:n="medium",state:t="default",disabled:o=!1,loading:a=!1,leadingIcon:f,trailingIcon:h,label:$,children:B,onClick:V,className:G})=>{const[j,i]=c.useState(t);c.useEffect(()=>{i(t)},[t]);const E=()=>{!o&&!a&&t==="default"&&i("hovered")},q=()=>{!o&&!a&&i(t)},C=()=>{!o&&!a&&t==="default"&&i("pressed")},R=()=>{!o&&!a&&t==="default"&&i("hovered")},M=()=>{!o&&!a&&t==="default"&&i("focused")},O=()=>{!o&&!a&&i(t)};return s.jsx(Re,{variant:e,size:n,state:t!=="default"?t:j,disabled:o,loading:a,onClick:V,className:G,onMouseEnter:E,onMouseLeave:q,onMouseDown:C,onMouseUp:R,onFocus:M,onBlur:O,children:a?s.jsx(H,{}):s.jsxs(s.Fragment,{children:[f&&c.createElement(f),s.jsx(Me,{children:B||$}),h&&c.createElement(h)]})})};b.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Oe=S.button`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${w.gap["gap-1"]};
  background: transparent;
  border-radius: ${A["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:e="medium"})=>{switch(e){case"small":return u`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:n="default"})=>{const t=()=>{switch(e){case"secondary":switch(n){case"focused":return l.light["color-border-focused"];default:return l.light["color-border-primary"]}case"brand":switch(n){case"focused":return l.light["color-border-brand"];default:return r.deeppurple[200]}case"positive":switch(n){case"hovered":return r.green[400];case"pressed":return r.green[300];case"focused":return r.green[400];default:return r.green[500]}case"negative":switch(n){case"focused":return l.light["color-border-negative"];default:return r.red[200]}default:return r.blue[500]}},o=()=>{switch(e){case"secondary":return x.light["fg-neutral-strong"];case"brand":return Ce.light["fg-brand-strong"];case"positive":return v.light["fg-positive-strong"];case"negative":return y.light["fg-negative-strong"];default:return r.blue[500]}},a=()=>{switch(e){case"secondary":switch(n){case"hovered":return`${r.gray[950]}0D`;case"pressed":return`${r.gray[950]}14`;case"focused":return`${r.gray[950]}1F`;default:return"transparent"}case"brand":switch(n){case"hovered":return`${r.deeppurple[800]}0D`;case"pressed":return`${r.deeppurple[800]}14`;case"focused":return`${r.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(n){case"hovered":return`${v.light["bg-positive-primary-default"]}0D`;case"pressed":return`${v.light["bg-positive-primary-default"]}14`;case"focused":return`${v.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(n){case"hovered":return`${y.light["bg-negative-primary-default"]}0D`;case"pressed":return`${y.light["bg-negative-primary-default"]}14`;case"focused":return`${y.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return u`
      border: 1px solid ${t()};
      color: ${o()};
      background-color: ${a()};

      &:focus {
        outline: 2px solid ${r.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:e})=>e&&u`
      border-color: ${l.light["color-border-primary"]} !important;
      color: ${x.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${r.gray[50]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,ke=S.span`
  padding: 0 ${w.gap["gap-0.5"]};
`,k=({variant:e="primary",size:n="medium",state:t="default",disabled:o=!1,loading:a=!1,leadingIcon:f,trailingIcon:h,label:$,children:B,onClick:V,className:G})=>{const[j,i]=c.useState(t);c.useEffect(()=>{i(t)},[t]);const E=()=>{!o&&!a&&t==="default"&&i("hovered")},q=()=>{!o&&!a&&i(t)},C=()=>{!o&&!a&&t==="default"&&i("pressed")},R=()=>{!o&&!a&&t==="default"&&i("hovered")},M=()=>{!o&&!a&&t==="default"&&i("focused")},O=()=>{!o&&!a&&i(t)};return s.jsx(Oe,{variant:e,size:n,state:t!=="default"?t:j,disabled:o,loading:a,onClick:V,className:G,onMouseEnter:E,onMouseLeave:q,onMouseDown:C,onMouseUp:R,onFocus:M,onBlur:O,children:a?s.jsx(H,{}):s.jsxs(s.Fragment,{children:[f&&c.createElement(f),s.jsx(ke,{children:B||$}),h&&c.createElement(h)]})})};k.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ie=S.button`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${w.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${A["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:e="medium"})=>{switch(e){case"small":return u`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:n="default"})=>{const t=()=>{switch(e){case"secondary":return x.light["fg-neutral-strong"];case"brand":return Ce.light["fg-brand-strong"];case"positive":return v.light["fg-positive-strong"];case"negative":return y.light["fg-negative-strong"];default:return x.light["fg-neutral-strong"]}},o=()=>{switch(e){case"secondary":switch(n){case"hovered":return`${r.gray[950]}0D`;case"pressed":return`${r.gray[950]}14`;case"focused":return`${r.gray[950]}1F`;default:return"transparent"}case"brand":switch(n){case"hovered":return`${r.deeppurple[800]}0D`;case"pressed":return`${r.deeppurple[800]}14`;case"focused":return`${r.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(n){case"hovered":return`${v.light["bg-positive-primary-default"]}0D`;case"pressed":return`${v.light["bg-positive-primary-default"]}14`;case"focused":return`${v.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(n){case"hovered":return`${y.light["bg-negative-primary-default"]}0D`;case"pressed":return`${y.light["bg-negative-primary-default"]}14`;case"focused":return`${y.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}},a=()=>{if(n==="focused")switch(e){case"secondary":return l.light["color-border-focused"];case"brand":return l.light["color-border-brand"];case"positive":return l.light["color-border-positive"];case"negative":return l.light["color-border-negative"];default:return"transparent"}return"transparent"};return u`
      color: ${t()};
      background-color: ${o()};
      border: 1px solid ${a()};

      &:focus {
        outline: 2px solid ${r.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:e})=>e&&u`
      color: ${x.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,ze=S.span`
  padding: 0 ${w.gap["gap-0.5"]};
`,I=({variant:e="primary",size:n="medium",state:t="default",disabled:o=!1,loading:a=!1,leadingIcon:f,trailingIcon:h,label:$,children:B,onClick:V,className:G})=>{const[j,i]=c.useState(t);c.useEffect(()=>{i(t)},[t]);const E=()=>{!o&&!a&&t==="default"&&i("hovered")},q=()=>{!o&&!a&&i(t)},C=()=>{!o&&!a&&t==="default"&&i("pressed")},R=()=>{!o&&!a&&t==="default"&&i("hovered")},M=()=>{!o&&!a&&t==="default"&&i("focused")},O=()=>{!o&&!a&&i(t)};return s.jsx(Ie,{variant:e,size:n,state:t!=="default"?t:j,disabled:o,loading:a,onClick:V,className:G,onMouseEnter:E,onMouseLeave:q,onMouseDown:C,onMouseUp:R,onFocus:M,onBlur:O,children:a?s.jsx(H,{}):s.jsxs(s.Fragment,{children:[f&&c.createElement(f),s.jsx(ze,{children:B||$}),h&&c.createElement(h)]})})};I.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const J=e=>s.jsxs("svg",{...e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-0.5 4.5-2c0.08-0.08 0.96-0.92 1.5-1.5"}),s.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),s.jsx("path",{d:"M9 12H4s0.55-3.03 2-4.5C6.62 6.96 9 7 9 7"}),s.jsx("path",{d:"M12 15v5s3.03-0.55 4.5-2c0.54-0.54 0.5-2.5 0.5-2.5"})]}),Ke={title:"Components/Button",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"state가 'default'일 때 마우스를 올리면(hover) 'hovered', 클릭하면(press) 'pressed', 포커스하면(focus) 'focused' 상태로 변경됩니다. state prop으로 특정 상태를 직접 지정할 수도 있습니다."}}}},T={render:e=>s.jsx(b,{...e,children:"Button"}),args:{variant:"primary",size:"medium",state:"default"}},z={render:e=>s.jsx(b,{...e,children:"Button"}),args:{...T.args,leadingIcon:J}},D={render:e=>s.jsx(b,{...e,children:"Button"}),args:{...T.args,disabled:!0}},P={render:e=>s.jsx(b,{...e,children:"Button"}),args:{...T.args,loading:!0}},p={render:e=>s.jsx(k,{...e,children:"Button"}),args:{variant:"secondary",size:"medium",state:"default"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},F={render:e=>s.jsx(k,{...e,children:"Button"}),args:{...p.args,leadingIcon:J},argTypes:{...p.argTypes}},L={render:e=>s.jsx(k,{...e,children:"Button"}),args:{...p.args,disabled:!0},argTypes:{...p.argTypes}},N={render:e=>s.jsx(k,{...e,children:"Button"}),args:{...p.args,loading:!0},argTypes:{...p.argTypes}},m={render:e=>s.jsx(I,{...e,children:"Button"}),args:{variant:"secondary",size:"medium",state:"default"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},W={render:e=>s.jsx(I,{...e,children:"Button"}),args:{...m.args,leadingIcon:J},argTypes:{...m.argTypes}},_={render:e=>s.jsx(I,{...e,children:"Button"}),args:{...m.args,disabled:!0},argTypes:{...m.argTypes}},U={render:e=>s.jsx(I,{...e,children:"Button"}),args:{...m.args,loading:!0},argTypes:{...m.argTypes}};var K,Q,X;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    variant: "primary",
    size: "medium",
    state: "default"
  }
}`,...(X=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;z.parameters={...z.parameters,docs:{...(Y=z.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    leadingIcon: RocketIcon
  }
}`,...(ee=(Z=z.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ne;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    disabled: true
  }
}`,...(ne=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,oe;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    loading: true
  }
}`,...(oe=(se=P.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ue,le;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(le=(ue=p.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var de,ce,pe;F.parameters={...F.parameters,docs:{...(de=F.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    leadingIcon: RocketIcon
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(pe=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,fe;L.parameters={...L.parameters,docs:{...(me=L.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    disabled: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(fe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var he,ye,ve;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    loading: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(ve=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var xe,Te,Se;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(Se=(Te=m.parameters)==null?void 0:Te.docs)==null?void 0:Se.source}}};var we,be,$e;W.parameters={...W.parameters,docs:{...(we=W.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    leadingIcon: RocketIcon
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...($e=(be=W.parameters)==null?void 0:be.docs)==null?void 0:$e.source}}};var Be,Ve,Ge;_.parameters={..._.parameters,docs:{...(Be=_.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    disabled: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(Ge=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var je,Ee,qe;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    loading: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(qe=(Ee=U.parameters)==null?void 0:Ee.docs)==null?void 0:qe.source}}};const Qe=["Solid","SolidWithIcon","SolidDisabled","SolidLoading","Outline","OutlineWithIcon","OutlineDisabled","OutlineLoading","Text","TextWithIcon","TextDisabled","TextLoading"];export{p as Outline,L as OutlineDisabled,N as OutlineLoading,F as OutlineWithIcon,T as Solid,D as SolidDisabled,P as SolidLoading,z as SolidWithIcon,m as Text,_ as TextDisabled,U as TextLoading,W as TextWithIcon,Qe as __namedExportsOrder,Ke as default};
