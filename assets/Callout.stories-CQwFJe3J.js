import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./Callout-nuo2KaUI.js";import"./iframe-FnhkKGqq.js";import"./textColor-CKN8Eu8b.js";import"./color-CiwAFuFb.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./icon_chevron-right_outline_20-B4T8FMv0.js";import"./icon_warning_fill_20-DIOGsS5g.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";import"./negativeColor-DPOOrHeE.js";const Y={title:"Components/Callout",component:e,parameters:{layout:"centered",docs:{description:{component:"콜아웃(Callout)은 사용자에게 특정 콘텐츠나 영역과 직접적으로 연결된 보조 메시지를 제공할 때 시각적으로 강조하여 제공하는 컴포넌트로, 사용자가 정보를 빠르게 인지하고 필요한 조치를 취할 수 있도록 돕습니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary"],description:"Callout 변형",table:{type:{summary:"default | positive | negative | cautionary"},defaultValue:{summary:"default"}}},title:{control:{type:"text"},description:"제목 텍스트",table:{type:{summary:"string"}}},description:{control:{type:"text"},description:"설명 텍스트",table:{type:{summary:"string"}}},leadingIcon:{control:{type:"boolean"},description:"Leading Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},trailingIcon:{control:{type:"boolean"},description:"Trailing Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onTrailingIconClick:{action:"trailing-icon-clicked",description:"Trailing Icon 클릭 이벤트",table:{type:{summary:"() => void"}}}}},a={args:{variant:"default",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},n={args:{variant:"positive",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},r={args:{variant:"negative",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},i={args:{variant:"cautionary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},o={args:{variant:"default",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!0}},s={args:{variant:"default",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!1,trailingIcon:!1}},l={args:{variant:"default",title:"텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},c={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"500px"},children:[t.jsx(e,{variant:"default",title:"Notice",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"positive",title:"Success",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"negative",title:"Error",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),t.jsx(e,{variant:"cautionary",title:"Warning",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!0})]})};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(I=(m=n.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var v,f,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,C,b;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: "cautionary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(b=(C=i.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var S,T,h;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: true
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,W,V;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: false,
    trailingIcon: false
  }
}`,...(V=(W=s.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var D,E,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(N=(E=l.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var L,O,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "500px"
  }}>
      <Callout variant="default" title="Notice" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="positive" title="Success" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="negative" title="Error" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="cautionary" title="Warning" description="안내 텍스트를 입력해 주세요." leadingIcon={true} trailingIcon={true} />
    </div>
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};const Z=["Default","Positive","Negative","Cautionary","WithTrailingIcon","WithoutLeadingIcon","TitleOnly","AllVariants"];export{c as AllVariants,i as Cautionary,a as Default,r as Negative,n as Positive,l as TitleOnly,o as WithTrailingIcon,s as WithoutLeadingIcon,Z as __namedExportsOrder,Y as default};
