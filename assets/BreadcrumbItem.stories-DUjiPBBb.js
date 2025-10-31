import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as a}from"./BreadcrumbItem-XsqBj0rj.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./iframe-CvYJ0Cl9.js";import{S as m}from"./icon_chevron-right_outline_16-CJLPgbFD.js";import{S as u,a as E,b as _}from"./icon_setting_outline_16-Cn7ZeCOa.js";import"./textColor-DBXm__UB.js";import"./color-CiwAFuFb.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";const re={title:"Components/Breadcrumbs/BreadcrumbItem",component:a,parameters:{layout:"centered",docs:{description:{component:"브레드크럼 아이템(Breadcrumb Item)은 브레드크럼을 구성하는 개별 항목입니다. 텍스트와 아이콘을 포함할 수 있으며, 다양한 상태(default, hovered, pressed, focused, disabled)를 지원합니다."}}},tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"브레드크럼 아이템의 텍스트",table:{type:{summary:"React.ReactNode"}}},active:{control:{type:"boolean"},description:"활성화 상태 (현재 페이지)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:{type:"boolean"},description:"비활성화 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},leadingIcon:{control:{type:"boolean"},description:"앞쪽 아이콘 표시 여부",table:{type:{summary:"React.ReactNode"},defaultValue:{summary:"undefined"}}},trailingIcon:{control:{type:"boolean"},description:"뒤쪽 아이콘 표시 여부",table:{type:{summary:"React.ReactNode"},defaultValue:{summary:"undefined"}}},onClick:{action:"clicked",description:"클릭 시 실행될 함수",table:{type:{summary:"() => void"}}},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."}}},n={render:e=>r.jsx(a,{...e,leadingIcon:e.leadingIcon?r.jsx(u,{}):void 0,trailingIcon:e.trailingIcon?r.jsx(m,{}):void 0,children:e.children}),args:{children:"홈",active:!1,disabled:!1,leadingIcon:!0,trailingIcon:!1}},s={render:e=>r.jsx(a,{...e,leadingIcon:r.jsx(u,{}),children:"홈"}),args:{active:!1,disabled:!1}},t={render:e=>r.jsx(a,{...e,trailingIcon:r.jsx(m,{}),children:"설정"}),args:{active:!1,disabled:!1}},o={render:e=>r.jsx(a,{...e,leadingIcon:r.jsx(E,{}),trailingIcon:r.jsx(m,{}),children:"설정"}),args:{active:!1,disabled:!1}},c={render:e=>r.jsx(a,{...e,leadingIcon:r.jsx(_,{}),children:"개인정보 변경"}),args:{active:!0,disabled:!1}},i={render:e=>r.jsx(a,{...e,leadingIcon:r.jsx(u,{}),children:"홈"}),args:{active:!1,disabled:!0}},d={render:e=>r.jsx(a,{...e,children:"설정"}),args:{active:!1,disabled:!1}},l={render:e=>r.jsx(a,{...e,leadingIcon:r.jsx(E,{}),children:"개인정보 및 보안 설정"}),args:{active:!1,disabled:!1}};var g,p,I;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} leadingIcon={args.leadingIcon ? <Icons.IconHomeOutline16 /> : undefined} trailingIcon={args.trailingIcon ? <Icons.IconChevronRightOutline16 /> : undefined}>
      {args.children}
    </BreadcrumbItem>,
  args: {
    children: "홈",
    active: false,
    disabled: false,
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(I=(p=n.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var b,f,v;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} leadingIcon={<Icons.IconHomeOutline16 />}>
      홈
    </BreadcrumbItem>,
  args: {
    active: false,
    disabled: false
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} trailingIcon={<Icons.IconChevronRightOutline16 />}>
      설정
    </BreadcrumbItem>,
  args: {
    active: false,
    disabled: false
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,j,S;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} leadingIcon={<Icons.IconSettingOutline16 />} trailingIcon={<Icons.IconChevronRightOutline16 />}>
      설정
    </BreadcrumbItem>,
  args: {
    active: false,
    disabled: false
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var O,R,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} leadingIcon={<Icons.IconLockOutline16 />}>
      개인정보 변경
    </BreadcrumbItem>,
  args: {
    active: true,
    disabled: false
  }
}`,...(C=(R=c.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,L,W;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} leadingIcon={<Icons.IconHomeOutline16 />}>
      홈
    </BreadcrumbItem>,
  args: {
    active: false,
    disabled: true
  }
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var k,D,H;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args}>설정</BreadcrumbItem>,
  args: {
    active: false,
    disabled: false
  }
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var N,V,A;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <BreadcrumbItem {...args} leadingIcon={<Icons.IconSettingOutline16 />}>
      개인정보 및 보안 설정
    </BreadcrumbItem>,
  args: {
    active: false,
    disabled: false
  }
}`,...(A=(V=l.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};const ae=["Default","WithLeadingIcon","WithTrailingIcon","WithBothIcons","Active","Disabled","TextOnly","LongText"];export{c as Active,n as Default,i as Disabled,l as LongText,d as TextOnly,o as WithBothIcons,s as WithLeadingIcon,t as WithTrailingIcon,ae as __namedExportsOrder,re as default};
