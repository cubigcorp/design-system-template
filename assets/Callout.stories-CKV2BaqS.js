import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{C as n}from"./Callout-B3GHQxSt.js";import"./iframe-DsZmfmOb.js";import"./styled-components.browser.esm-DACqo_di.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./icon_chevron-right_outline_20-BIhyK1Br.js";import"./icon_warning_fill_16-fQJKWKPC.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./negativeColor-DPOOrHeE.js";const ir={title:"Components/Callout",component:n,parameters:{layout:"centered",docs:{description:{component:"콜아웃(Callout)은 사용자에게 특정 콘텐츠나 영역과 직접적으로 연결된 보조 메시지를 제공할 때 시각적으로 강조하여 제공하는 컴포넌트로, 사용자가 정보를 빠르게 인지하고 필요한 조치를 취할 수 있도록 돕습니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","positive","negative","cautionary","info"],description:"Callout 변형",table:{type:{summary:"primary | secondary | positive | negative | cautionary | info"},defaultValue:{summary:"primary"}}},title:{control:{type:"text"},description:"제목 텍스트",table:{type:{summary:"string"}}},description:{control:{type:"text"},description:"설명 텍스트",table:{type:{summary:"string"}}},leadingIcon:{control:{type:"boolean"},description:"Leading Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},trailingIcon:{control:{type:"boolean"},description:"Trailing Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onTrailingIconClick:{action:"trailing-icon-clicked",description:"Trailing Icon 클릭 이벤트",table:{type:{summary:"() => void"}}}}},e={args:{variant:"primary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},a={args:{variant:"secondary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},t={args:{variant:"positive",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},i={args:{variant:"negative",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},o={args:{variant:"cautionary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},s={args:{variant:"info",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},c={args:{variant:"primary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!0}},l={args:{variant:"primary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!1,trailingIcon:!1}},p={args:{variant:"primary",title:"텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},d={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"500px"},children:[r.jsx(n,{variant:"primary",title:"Primary",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),r.jsx(n,{variant:"secondary",title:"Secondary",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),r.jsx(n,{variant:"positive",title:"Success",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),r.jsx(n,{variant:"negative",title:"Error",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),r.jsx(n,{variant:"cautionary",title:"Warning",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),r.jsx(n,{variant:"info",title:"Info",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0})]})};var u,g,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(m=(g=e.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var y,I,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var f,x,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "positive",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var C,b,j;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: "negative",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var T,h,P;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: "cautionary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(P=(h=o.parameters)==null?void 0:h.docs)==null?void 0:P.source}}};var W,V,E;s.parameters={...s.parameters,docs:{...(W=s.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(E=(V=s.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var L,O,k;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: true
  }
}`,...(k=(O=c.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var w,A,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: false,
    trailingIcon: false
  }
}`,...(D=(A=l.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var N,_,R;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,z,B;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "500px"
  }}>
      <Callout variant="primary" title="Primary" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="secondary" title="Secondary" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="positive" title="Success" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="negative" title="Error" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="cautionary" title="Warning" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
      <Callout variant="info" title="Info" description="안내 텍스트를 입력해 주세요." leadingIcon={true} />
    </div>
}`,...(B=(z=d.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const or=["Primary","Secondary","Positive","Negative","Cautionary","Info","WithTrailingIcon","WithoutLeadingIcon","TitleOnly","AllVariants"];export{d as AllVariants,o as Cautionary,s as Info,i as Negative,t as Positive,e as Primary,a as Secondary,p as TitleOnly,c as WithTrailingIcon,l as WithoutLeadingIcon,or as __namedExportsOrder,ir as default};
