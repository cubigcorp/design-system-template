import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./Callout-7ozObPvt.js";import"./iframe-UFqvfvuv.js";import"./styled-components.browser.esm-D8ZTpw4b.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./icon_chevron-right_outline_20-nhYubz-F.js";import"./icon_warning_fill_20-63BlOSuw.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./typography-RVdj8V17.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";import"./negativeColor-DPOOrHeE.js";const nt={title:"Components/Callout",component:e,parameters:{layout:"centered",docs:{description:{component:"콜아웃(Callout)은 사용자에게 특정 콘텐츠나 영역과 직접적으로 연결된 보조 메시지를 제공할 때 시각적으로 강조하여 제공하는 컴포넌트로, 사용자가 정보를 빠르게 인지하고 필요한 조치를 취할 수 있도록 돕습니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary","info"],description:"Callout 변형",table:{type:{summary:"default | positive | negative | cautionary | info"},defaultValue:{summary:"default"}}},title:{control:{type:"text"},description:"제목 텍스트",table:{type:{summary:"string"}}},description:{control:{type:"text"},description:"설명 텍스트",table:{type:{summary:"string"}}},leadingIcon:{control:{type:"boolean"},description:"Leading Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},trailingIcon:{control:{type:"boolean"},description:"Trailing Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onTrailingIconClick:{action:"trailing-icon-clicked",description:"Trailing Icon 클릭 이벤트",table:{type:{summary:"() => void"}}}}},n={args:{variant:"default",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},a={args:{variant:"positive",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},r={args:{variant:"negative",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},i={args:{variant:"cautionary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},o={args:{variant:"info",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},s={args:{variant:"default",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!0}},c={args:{variant:"default",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!1,trailingIcon:!1}},l={args:{variant:"default",title:"텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},d={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"500px"},children:[t.jsx(e,{variant:"default",title:"Notice",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"positive",title:"Success",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"negative",title:"Error",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"cautionary",title:"Warning",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"info",title:"Info",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0})]})};var p,u,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,I,f;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(f=(I=a.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var v,y,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var C,S,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "cautionary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(b=(S=i.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,T,h;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var W,V,D;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: true
  }
}`,...(D=(V=s.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var E,N,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: false,
    trailingIcon: false
  }
}`,...(L=(N=c.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var O,k,w;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var A,P,_;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "500px"
  }}>
      <Callout variant="default" title="Notice" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="positive" title="Success" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="negative" title="Error" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="cautionary" title="Warning" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="info" title="Info" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
    </div>
}`,...(_=(P=d.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const at=["Default","Positive","Negative","Cautionary","Info","WithTrailingIcon","WithoutLeadingIcon","TitleOnly","AllVariants"];export{d as AllVariants,i as Cautionary,n as Default,o as Info,r as Negative,a as Positive,l as TitleOnly,s as WithTrailingIcon,c as WithoutLeadingIcon,at as __namedExportsOrder,nt as default};
