import{j as n}from"./jsx-runtime-BPheccFF.js";import{l as u,d as Re}from"./styled-components.browser.esm-DyOgE_0i.js";import{c as e}from"./color-CMFzNX_O.js";import{r as We}from"./radius-DaoU83SK.js";import{s as O}from"./spacing-tE1IiUFl.js";import{b as l,t as p}from"./borderColor-C1c8KEhD.js";import{b as _e}from"./brandColor-OMV9mLOG.js";import{n as Xe,p as Ue}from"./negativeColor-vAhOVlFC.js";import{S as Je}from"./Spinner-uLvDe8Ii.js";import{R as M}from"./iframe-BbKmDY3J.js";const Ke=Re.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${We["rounded-2"]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:r="medium"})=>{switch(r){case"small":return u`
          padding: ${O.gap["gap-2"]};
          width: 32px;
          height: 32px;

          svg {
            width: 16px;
            height: 16px;
          }
        `;case"large":return u`
          padding: ${O.gap["gap-3"]};
          width: 48px;
          height: 48px;

          svg {
            width: 24px;
            height: 24px;
          }
        `;default:return u`
          padding: ${O.gap["gap-2.5"]};
          width: 40px;
          height: 40px;

          svg {
            width: 20px;
            height: 20px;
          }
        `}}}

  ${({type:r="solid",variant:i="primary",state:t="default",disabled:s=!1})=>{if(r==="solid"){const d=()=>{if(s)switch(i){case"primary":return e.gray[900];case"secondary":case"brand":case"positive":case"negative":return e.gray[50];default:return e.gray[900]}switch(i){case"primary":switch(t){case"hovered":return e.gray[925];case"pressed":return e.gray[900];case"focused":return e.gray[850];default:return e.gray[950]}case"secondary":switch(t){case"hovered":return e.gray[50];case"pressed":return e.gray[100];case"focused":return e.gray[200];default:return e.common[100]}case"brand":switch(t){case"hovered":case"focused":return e.deeppurple[600];case"pressed":return e.deeppurple[400];default:return e.deeppurple[800]}case"negative":switch(t){case"hovered":case"focused":return e.red[500];case"pressed":return e.red[400];default:return e.red[600]}case"positive":switch(t){case"hovered":case"focused":return e.green[500];case"pressed":return e.green[400];default:return e.green[600]}default:return e.gray[950]}},c=()=>{switch(i){case"primary":return e.gray[800];case"secondary":return t==="focused"?l.light["color-border-focused"]:l.light["color-border-primary"];case"brand":switch(t){case"hovered":case"focused":return e.deeppurple[400];case"pressed":return e.deeppurple[300];default:return l.light["color-border-brand"]}case"negative":switch(t){case"hovered":case"focused":return e.red[400];case"pressed":return e.red[300];default:return e.red[400]}case"positive":switch(t){case"hovered":case"focused":return e.green[400];case"pressed":return e.green[300];default:return e.green[500]}default:return e.gray[800]}},g=()=>{if(s)switch(i){case"primary":return p.light["fg-neutral-alternative"];case"secondary":case"brand":case"positive":case"negative":return p.light["fg-neutral-disable"];default:return p.light["fg-neutral-alternative"]}switch(i){case"primary":return e.common[100];case"secondary":return p.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return e.common[100];default:return e.common[100]}};return u`
        background-color: ${d()};
        color: ${g()};
        border: 1px solid ${c()};
        cursor: ${s?"not-allowed":"pointer"};
        pointer-events: ${s?"none":"auto"};

        &:focus {
          outline: none;
          border-color: ${i==="secondary"?l.light["color-border-focused"]:c()};
        }
      `}else{const d=()=>{switch(i){case"secondary":switch(t){case"focused":return l.light["color-border-focused"];default:return l.light["color-border-primary"]}case"brand":switch(t){case"focused":return l.light["color-border-brand"];default:return e.deeppurple[200]}case"positive":switch(t){case"hovered":return e.green[400];case"pressed":return e.green[300];case"focused":return e.green[400];default:return e.green[500]}case"negative":switch(t){case"focused":return l.light["color-border-negative"];default:return e.red[200]}default:return l.light["color-border-primary"]}},c=()=>{switch(i){case"secondary":return p.light["fg-neutral-strong"];case"brand":return _e.light["fg-brand-strong"];case"positive":return Ue.light["fg-positive-strong"];case"negative":return Xe.light["fg-negative-strong"];default:return p.light["fg-neutral-strong"]}},g=()=>{switch(i){case"secondary":switch(t){case"hovered":return`${e.gray[950]}0D`;case"pressed":return`${e.gray[900]}14`;case"focused":return`${e.gray[850]}1F`;default:return"transparent"}case"brand":switch(t){case"hovered":return`${e.deeppurple[600]}0D`;case"pressed":return`${e.deeppurple[600]}14`;case"focused":return`${e.deeppurple[600]}1F`;default:return"transparent"}case"positive":switch(t){case"hovered":return`${e.green[600]}0D`;case"pressed":return`${e.green[600]}14`;case"focused":return`${e.green[600]}1F`;default:return"transparent"}case"negative":switch(t){case"hovered":return`${e.red[600]}0D`;case"pressed":return`${e.red[600]}14`;case"focused":return`${e.red[600]}1F`;default:return"transparent"}default:return"transparent"}};return u`
        border: 1px solid ${d()};
        color: ${c()};
        background-color: ${g()};

        &:focus {
          outline: 2px solid ${e.blue[300]};
          outline-offset: 2px;
        }
      `}}}

  // 비활성화 상태
  ${({disabled:r,type:i="solid",variant:t="primary"})=>r&&u`
      ${i==="solid"?u`
            background-color: ${t==="primary"?e.gray[900]:e.gray[50]} !important;
            border-color: ${t==="primary"?e.gray[800]:l.light["color-border-primary"]} !important;
            color: ${t==="primary"?p.light["fg-neutral-alternative"]:p.light["fg-neutral-disable"]} !important;
          `:u`
            border-color: ${l.light["color-border-primary"]} !important;
            color: ${p.light["fg-neutral-disable"]} !important;
            background-color: ${e.gray[50]} !important;
          `}
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:r})=>r&&u`
      cursor: wait;
      pointer-events: none;
    `}
`,a=({type:r="solid",variant:i="primary",size:t="medium",state:s="default",disabled:d=!1,loading:c=!1,icon:g,onClick:Me,className:qe})=>{const[Ee,m]=M.useState(s);M.useEffect(()=>{m(s)},[s]);const Ge=()=>{!d&&!c&&s==="default"&&m("hovered")},De=()=>{!d&&!c&&m(s)},Ae=()=>{!d&&!c&&s==="default"&&m("pressed")},Fe=()=>{!d&&!c&&s==="default"&&m("hovered")},He=()=>{!d&&!c&&s==="default"&&m("focused")},Ne=()=>{!d&&!c&&m(s)};return n.jsx(Ke,{type:r,variant:i,size:t,state:s!=="default"?s:Ee,disabled:d,loading:c,onClick:Me,className:qe,onMouseEnter:Ge,onMouseLeave:De,onMouseDown:Ae,onMouseUp:Fe,onFocus:He,onBlur:Ne,children:c?n.jsx(Je,{}):M.createElement(g)})};a.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{type:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!0,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const o=r=>n.jsx("svg",{...r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("polyline",{points:"20,6 9,17 4,12"})}),Pe=r=>n.jsxs("svg",{...r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("polyline",{points:"3,6 5,6 21,6"}),n.jsx("path",{d:"m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"}),n.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),n.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),T=r=>n.jsx("svg",{...r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),P=r=>n.jsxs("svg",{...r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),Oe=r=>n.jsxs("svg",{...r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),n.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ir={title:"Components/IconButton",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"아이콘 전용 버튼 컴포넌트입니다. Solid와 Outline 두 가지 타입으로 제공되며, 다양한 variant와 크기를 지원합니다."}}},argTypes:{type:{control:{type:"radio"},options:["solid","outline"]},variant:{control:{type:"radio"},options:["primary","secondary","brand","positive","negative"]},size:{control:{type:"radio"},options:["small","medium","large"]},state:{control:{type:"radio"},options:["default","hovered","pressed","focused"]},disabled:{control:{type:"boolean"}},loading:{control:{type:"boolean"}}}},y={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"primary",size:"medium",state:"default",icon:o}},v={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"secondary",size:"medium",state:"default",icon:P}},f={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"brand",size:"medium",state:"default",icon:T}},h={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"positive",size:"medium",state:"default",icon:o}},x={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"negative",size:"medium",state:"default",icon:Pe}},I={render:r=>n.jsx(a,{...r}),args:{type:"outline",variant:"secondary",size:"medium",state:"default",icon:P}},z={render:r=>n.jsx(a,{...r}),args:{type:"outline",variant:"brand",size:"medium",state:"default",icon:T}},S={render:r=>n.jsx(a,{...r}),args:{type:"outline",variant:"positive",size:"medium",state:"default",icon:o}},j={render:r=>n.jsx(a,{...r}),args:{type:"outline",variant:"negative",size:"medium",state:"default",icon:Oe}},b={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"primary",size:"small",state:"default",icon:o}},w={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"primary",size:"medium",state:"default",icon:o}},B={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"primary",size:"large",state:"default",icon:o}},k={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"primary",size:"medium",disabled:!0,icon:o}},$={render:r=>n.jsx(a,{...r}),args:{type:"solid",variant:"primary",size:"medium",loading:!0,icon:o}},C={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsx(a,{type:"solid",variant:"primary",size:"small",icon:o}),n.jsx(a,{type:"solid",variant:"primary",size:"medium",icon:o}),n.jsx(a,{type:"solid",variant:"primary",size:"large",icon:o})]})},V={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsx(a,{type:"solid",variant:"primary",size:"medium",icon:o}),n.jsx(a,{type:"solid",variant:"secondary",size:"medium",icon:P}),n.jsx(a,{type:"solid",variant:"brand",size:"medium",icon:T}),n.jsx(a,{type:"solid",variant:"positive",size:"medium",icon:o}),n.jsx(a,{type:"solid",variant:"negative",size:"medium",icon:Pe})]})},L={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsx(a,{type:"outline",variant:"secondary",size:"medium",icon:P}),n.jsx(a,{type:"outline",variant:"brand",size:"medium",icon:T}),n.jsx(a,{type:"outline",variant:"positive",size:"medium",icon:o}),n.jsx(a,{type:"outline",variant:"negative",size:"medium",icon:Oe})]})};var q,E,G;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "primary",
    size: "medium",
    state: "default",
    icon: CheckIcon
  }
}`,...(G=(E=y.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var D,A,F;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "secondary",
    size: "medium",
    state: "default",
    icon: PlusIcon
  }
}`,...(F=(A=v.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var H,N,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "brand",
    size: "medium",
    state: "default",
    icon: HeartIcon
  }
}`,...(R=(N=f.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var W,_,X;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "positive",
    size: "medium",
    state: "default",
    icon: CheckIcon
  }
}`,...(X=(_=h.parameters)==null?void 0:_.docs)==null?void 0:X.source}}};var U,J,K;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "negative",
    size: "medium",
    state: "default",
    icon: TrashIcon
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "outline",
    variant: "secondary",
    size: "medium",
    state: "default",
    icon: PlusIcon
  }
}`,...(Z=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "outline",
    variant: "brand",
    size: "medium",
    state: "default",
    icon: HeartIcon
  }
}`,...(ne=(re=z.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,te,se;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "outline",
    variant: "positive",
    size: "medium",
    state: "default",
    icon: CheckIcon
  }
}`,...(se=(te=S.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ie,ce;j.parameters={...j.parameters,docs:{...(oe=j.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "outline",
    variant: "negative",
    size: "medium",
    state: "default",
    icon: XIcon
  }
}`,...(ce=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,le,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "primary",
    size: "small",
    state: "default",
    icon: CheckIcon
  }
}`,...(ue=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var pe,me,ge;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "primary",
    size: "medium",
    state: "default",
    icon: CheckIcon
  }
}`,...(ge=(me=w.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ye,ve,fe;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "primary",
    size: "large",
    state: "default",
    icon: CheckIcon
  }
}`,...(fe=(ve=B.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var he,xe,Ie;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "primary",
    size: "medium",
    disabled: true,
    icon: CheckIcon
  }
}`,...(Ie=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var ze,Se,je;$.parameters={...$.parameters,docs:{...(ze=$.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: args => <IconButton {...args} />,
  args: {
    type: "solid",
    variant: "primary",
    size: "medium",
    loading: true,
    icon: CheckIcon
  }
}`,...(je=(Se=$.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var be,we,Be;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <IconButton type="solid" variant="primary" size="small" icon={CheckIcon} />\r
      <IconButton type="solid" variant="primary" size="medium" icon={CheckIcon} />\r
      <IconButton type="solid" variant="primary" size="large" icon={CheckIcon} />\r
    </div>
}`,...(Be=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Be.source}}};var ke,$e,Ce;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <IconButton type="solid" variant="primary" size="medium" icon={CheckIcon} />\r
      <IconButton type="solid" variant="secondary" size="medium" icon={PlusIcon} />\r
      <IconButton type="solid" variant="brand" size="medium" icon={HeartIcon} />\r
      <IconButton type="solid" variant="positive" size="medium" icon={CheckIcon} />\r
      <IconButton type="solid" variant="negative" size="medium" icon={TrashIcon} />\r
    </div>
}`,...(Ce=($e=V.parameters)==null?void 0:$e.docs)==null?void 0:Ce.source}}};var Ve,Le,Te;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <IconButton type="outline" variant="secondary" size="medium" icon={PlusIcon} />\r
      <IconButton type="outline" variant="brand" size="medium" icon={HeartIcon} />\r
      <IconButton type="outline" variant="positive" size="medium" icon={CheckIcon} />\r
      <IconButton type="outline" variant="negative" size="medium" icon={XIcon} />\r
    </div>
}`,...(Te=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};const cr=["SolidPrimary","SolidSecondary","SolidBrand","SolidPositive","SolidNegative","OutlineSecondary","OutlineBrand","OutlinePositive","OutlineNegative","SizeSmall","SizeMedium","SizeLarge","StateDisabled","StateLoading","AllSizes","AllSolidVariants","AllOutlineVariants"];export{L as AllOutlineVariants,C as AllSizes,V as AllSolidVariants,z as OutlineBrand,j as OutlineNegative,S as OutlinePositive,I as OutlineSecondary,B as SizeLarge,w as SizeMedium,b as SizeSmall,f as SolidBrand,x as SolidNegative,h as SolidPositive,y as SolidPrimary,v as SolidSecondary,k as StateDisabled,$ as StateLoading,cr as __namedExportsOrder,ir as default};
