import{j as s}from"./jsx-runtime-BPheccFF.js";import{l,d as T}from"./styled-components.browser.esm-DyOgE_0i.js";import{c as r}from"./color-CMFzNX_O.js";import{r as U}from"./radius-DaoU83SK.js";import{f as d}from"./fontWeight-DlyBHknl.js";import{b as u,t as x}from"./borderColor-C1c8KEhD.js";import{s as b}from"./spacing-tE1IiUFl.js";import{S as A}from"./Spinner-uLvDe8Ii.js";import{R as c}from"./iframe-BbKmDY3J.js";import{b as Ce}from"./brandColor-OMV9mLOG.js";import{n as v,p as y}from"./negativeColor-vAhOVlFC.js";const m={t4:["14px",{"@media (max-width: 768px)":["14px"],"@media (max-width: 375px)":["14px"]}],t5:["16px",{"@media (max-width: 768px)":["16px"],"@media (max-width: 375px)":["14px"]}]},qe=T.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${b.gap["gap-1"]};
  border: none;
  border-radius: ${U["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:e="medium"})=>{switch(e){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${m.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:t="default"})=>{const a=()=>{switch(e){case"primary":switch(t){case"hovered":return r.gray[925];case"pressed":return r.gray[900];case"focused":return r.gray[850];default:return r.gray[950]}case"secondary":switch(t){case"hovered":return r.gray[50];case"pressed":return r.gray[100];case"focused":return r.gray[200];default:return r.common[100]}case"brand":switch(t){case"hovered":case"focused":return r.deeppurple[600];case"pressed":return r.deeppurple[400];default:return r.deeppurple[800]}case"negative":switch(t){case"hovered":case"focused":return r.red[500];case"pressed":return r.red[400];default:return r.red[600]}case"positive":switch(t){case"hovered":case"focused":return r.green[500];case"pressed":return r.green[400];default:return r.green[600]}default:return r.gray[950]}},o=()=>{switch(e){case"primary":return r.gray[800];case"secondary":return t==="focused"?u.light["color-border-focused"]:u.light["color-border-primary"];case"brand":switch(t){case"hovered":case"focused":return r.deeppurple[400];case"pressed":return r.deeppurple[300];default:return u.light["color-border-brand"]}case"negative":switch(t){case"hovered":case"focused":return r.red[400];case"pressed":return r.red[300];default:return r.red[400]}case"positive":switch(t){case"hovered":case"focused":return r.green[400];case"pressed":return r.green[300];default:return r.green[500]}default:return r.gray[800]}},n=()=>{switch(e){case"primary":return r.common[100];case"secondary":return x.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return r.common[100];default:return r.common[100]}};return l`
      background-color: ${a()};
      color: ${n()};
      border: 1px solid ${o()};

      &:focus {
        outline: none;
        border-color: ${e==="secondary"?u.light["color-border-focused"]:o()};
      }
    `}}

  // 비활성화 상태
  ${({disabled:e,variant:t="primary"})=>e&&l`
      background-color: ${t==="primary"?r.gray[900]:r.gray[50]} !important;
      border-color: ${t==="primary"?r.gray[800]:u.light["color-border-primary"]} !important;
      color: ${t==="primary"?x.light["fg-neutral-alternative"]:x.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,Me=T.span`
  padding: 0 ${b.gap["gap-0.5"]};
`,w=({variant:e="primary",size:t="medium",state:a="default",disabled:o=!1,loading:n=!1,leadingIcon:f,trailingIcon:h,label:$,onClick:V,className:G})=>{const[B,i]=c.useState(a);c.useEffect(()=>{i(a)},[a]);const j=()=>{!o&&!n&&a==="default"&&i("hovered")},E=()=>{!o&&!n&&i(a)},C=()=>{!o&&!n&&a==="default"&&i("pressed")},q=()=>{!o&&!n&&a==="default"&&i("hovered")},M=()=>{!o&&!n&&a==="default"&&i("focused")},k=()=>{!o&&!n&&i(a)};return s.jsx(qe,{variant:e,size:t,state:a!=="default"?a:B,disabled:o,loading:n,onClick:V,className:G,onMouseEnter:j,onMouseLeave:E,onMouseDown:C,onMouseUp:q,onFocus:M,onBlur:k,children:n?s.jsx(A,{}):s.jsxs(s.Fragment,{children:[f&&c.createElement(f),s.jsx(Me,{children:$}),h&&c.createElement(h)]})})};w.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke=T.button`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${b.gap["gap-1"]};
  background: transparent;
  border-radius: ${U["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:e="medium"})=>{switch(e){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${m.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:t="default"})=>{const a=()=>{switch(e){case"secondary":switch(t){case"focused":return u.light["color-border-focused"];default:return u.light["color-border-primary"]}case"brand":switch(t){case"focused":return u.light["color-border-brand"];default:return r.deeppurple[200]}case"positive":switch(t){case"hovered":return r.green[400];case"pressed":return r.green[300];case"focused":return r.green[400];default:return r.green[500]}case"negative":switch(t){case"focused":return u.light["color-border-negative"];default:return r.red[200]}default:return r.blue[500]}},o=()=>{switch(e){case"secondary":return x.light["fg-neutral-strong"];case"brand":return Ce.light["fg-brand-strong"];case"positive":return y.light["fg-positive-strong"];case"negative":return v.light["fg-negative-strong"];default:return r.blue[500]}},n=()=>{switch(e){case"secondary":switch(t){case"hovered":return`${r.gray[950]}0D`;case"pressed":return`${r.gray[950]}14`;case"focused":return`${r.gray[950]}1F`;default:return"transparent"}case"brand":switch(t){case"hovered":return`${r.deeppurple[800]}0D`;case"pressed":return`${r.deeppurple[800]}14`;case"focused":return`${r.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(t){case"hovered":return`${y.light["bg-positive-primary-default"]}0D`;case"pressed":return`${y.light["bg-positive-primary-default"]}14`;case"focused":return`${y.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(t){case"hovered":return`${v.light["bg-negative-primary-default"]}0D`;case"pressed":return`${v.light["bg-negative-primary-default"]}14`;case"focused":return`${v.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return l`
      border: 1px solid ${a()};
      color: ${o()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${r.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:e})=>e&&l`
      border-color: ${u.light["color-border-primary"]} !important;
      color: ${x.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${r.gray[50]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,Ie=T.span`
  padding: 0 ${b.gap["gap-0.5"]};
`,I=({variant:e="primary",size:t="medium",state:a="default",disabled:o=!1,loading:n=!1,leadingIcon:f,trailingIcon:h,label:$,onClick:V,className:G})=>{const[B,i]=c.useState(a);c.useEffect(()=>{i(a)},[a]);const j=()=>{!o&&!n&&a==="default"&&i("hovered")},E=()=>{!o&&!n&&i(a)},C=()=>{!o&&!n&&a==="default"&&i("pressed")},q=()=>{!o&&!n&&a==="default"&&i("hovered")},M=()=>{!o&&!n&&a==="default"&&i("focused")},k=()=>{!o&&!n&&i(a)};return s.jsx(ke,{variant:e,size:t,state:a!=="default"?a:B,disabled:o,loading:n,onClick:V,className:G,onMouseEnter:j,onMouseLeave:E,onMouseDown:C,onMouseUp:q,onFocus:M,onBlur:k,children:n?s.jsx(A,{}):s.jsxs(s.Fragment,{children:[f&&c.createElement(f),s.jsx(Ie,{children:$}),h&&c.createElement(h)]})})};I.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Oe=T.button`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${b.gap["gap-1"]};
  background: transparent;
  border: none;
  border-radius: ${U["rounded-2"]};
  font-weight: ${d[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:e="medium"})=>{switch(e){case"small":return l`
          padding: 6px 12px;
          height: 32px;
          font-size: ${m.t4[0]};
          font-weight: ${d[500]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return l`
          padding: 12px 16px;
          height: 48px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return l`
          padding: 8px 16px;
          height: 40px;
          font-size: ${m.t5[0]};
          font-weight: ${d[500]};

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:t="default"})=>{const a=()=>{switch(e){case"secondary":return x.light["fg-neutral-strong"];case"brand":return Ce.light["fg-brand-strong"];case"positive":return y.light["fg-positive-strong"];case"negative":return v.light["fg-negative-strong"];default:return x.light["fg-neutral-strong"]}},o=()=>{switch(e){case"secondary":switch(t){case"hovered":return`${r.gray[950]}0D`;case"pressed":return`${r.gray[950]}14`;case"focused":return`${r.gray[950]}1F`;default:return"transparent"}case"brand":switch(t){case"hovered":return`${r.deeppurple[800]}0D`;case"pressed":return`${r.deeppurple[800]}14`;case"focused":return`${r.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(t){case"hovered":return`${y.light["bg-positive-primary-default"]}0D`;case"pressed":return`${y.light["bg-positive-primary-default"]}14`;case"focused":return`${y.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(t){case"hovered":return`${v.light["bg-negative-primary-default"]}0D`;case"pressed":return`${v.light["bg-negative-primary-default"]}14`;case"focused":return`${v.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}},n=()=>{if(t==="focused")switch(e){case"secondary":return u.light["color-border-focused"];case"brand":return u.light["color-border-brand"];case"positive":return u.light["color-border-positive"];case"negative":return u.light["color-border-negative"];default:return"transparent"}return"transparent"};return l`
      color: ${a()};
      background-color: ${o()};
      border: 1px solid ${n()};

      &:focus {
        outline: 2px solid ${r.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:e})=>e&&l`
      color: ${x.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&l`
      cursor: wait;
      pointer-events: none;
    `}
`,ze=T.span`
  padding: 0 ${b.gap["gap-0.5"]};
`,O=({variant:e="secondary",size:t="medium",state:a="default",disabled:o=!1,loading:n=!1,leadingIcon:f,trailingIcon:h,label:$,onClick:V,className:G})=>{const[B,i]=c.useState(a);c.useEffect(()=>{i(a)},[a]);const j=()=>{!o&&!n&&a==="default"&&i("hovered")},E=()=>{!o&&!n&&i(a)},C=()=>{!o&&!n&&a==="default"&&i("pressed")},q=()=>{!o&&!n&&a==="default"&&i("hovered")},M=()=>{!o&&!n&&a==="default"&&i("focused")},k=()=>{!o&&!n&&i(a)};return s.jsx(Oe,{variant:e,size:t,state:a!=="default"?a:B,disabled:o,loading:n,onClick:V,className:G,onMouseEnter:j,onMouseLeave:E,onMouseDown:C,onMouseUp:q,onFocus:M,onBlur:k,children:n?s.jsx(A,{}):s.jsxs(s.Fragment,{children:[f&&c.createElement(f),s.jsx(ze,{children:$}),h&&c.createElement(h)]})})};O.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const H=e=>s.jsxs("svg",{...e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[s.jsx("path",{d:"M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-0.5 4.5-2c0.08-0.08 0.96-0.92 1.5-1.5"}),s.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),s.jsx("path",{d:"M9 12H4s0.55-3.03 2-4.5C6.62 6.96 9 7 9 7"}),s.jsx("path",{d:"M12 15v5s3.03-0.55 4.5-2c0.54-0.54 0.5-2.5 0.5-2.5"})]}),Je={title:"Components/Button",component:w,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"state가 'default'일 때 마우스를 올리면(hover) 'hovered', 클릭하면(press) 'pressed', 포커스하면(focus) 'focused' 상태로 변경됩니다. state prop으로 특정 상태를 직접 지정할 수도 있습니다."}}}},S={render:e=>s.jsx(w,{...e}),args:{variant:"primary",size:"medium",state:"default",label:"Button"}},z={render:e=>s.jsx(w,{...e}),args:{...S.args,leadingIcon:H}},D={render:e=>s.jsx(w,{...e}),args:{...S.args,disabled:!0}},R={render:e=>s.jsx(w,{...e}),args:{...S.args,loading:!0}},p={render:e=>s.jsx(I,{...e}),args:{variant:"secondary",size:"medium",state:"default",label:"Button"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},P={render:e=>s.jsx(I,{...e}),args:{...p.args,leadingIcon:H},argTypes:{...p.argTypes}},F={render:e=>s.jsx(I,{...e}),args:{...p.args,disabled:!0},argTypes:{...p.argTypes}},L={render:e=>s.jsx(I,{...e}),args:{...p.args,loading:!0},argTypes:{...p.argTypes}},g={render:e=>s.jsx(O,{...e}),args:{variant:"secondary",size:"medium",state:"default",label:"Button"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},W={render:e=>s.jsx(O,{...e}),args:{...g.args,leadingIcon:H},argTypes:{...g.argTypes}},_={render:e=>s.jsx(O,{...e}),args:{...g.args,disabled:!0},argTypes:{...g.argTypes}},N={render:e=>s.jsx(O,{...e}),args:{...g.args,loading:!0},argTypes:{...g.argTypes}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    variant: "primary",
    size: "medium",
    state: "default",
    label: "Button"
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    leadingIcon: RocketIcon
  }
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    disabled: true
  }
}`,...(ae=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    loading: true
  }
}`,...(se=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,le;p.parameters={...p.parameters,docs:{...(oe=p.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default",
    label: "Button"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(le=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ue,de,ce;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    leadingIcon: RocketIcon
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(ce=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,ge,me;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    disabled: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(me=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var fe,he,ve;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    loading: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(ve=(he=L.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var ye,xe,Se;g.parameters={...g.parameters,docs:{...(ye=g.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default",
    label: "Button"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(Se=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};var Te,be,we;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    ...Text.args,
    leadingIcon: RocketIcon
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(we=(be=W.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var $e,Ve,Ge;_.parameters={..._.parameters,docs:{...($e=_.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    ...Text.args,
    disabled: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(Ge=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var Be,je,Ee;N.parameters={...N.parameters,docs:{...(Be=N.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    ...Text.args,
    loading: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(Ee=(je=N.parameters)==null?void 0:je.docs)==null?void 0:Ee.source}}};const Ke=["Solid","SolidWithIcon","SolidDisabled","SolidLoading","Outline","OutlineWithIcon","OutlineDisabled","OutlineLoading","Text","TextWithIcon","TextDisabled","TextLoading"];export{p as Outline,F as OutlineDisabled,L as OutlineLoading,P as OutlineWithIcon,S as Solid,D as SolidDisabled,R as SolidLoading,z as SolidWithIcon,g as Text,_ as TextDisabled,N as TextLoading,W as TextWithIcon,Ke as __namedExportsOrder,Je as default};
