import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-v0YZzPT_.js";import"./IconButton-CBxk1YIm.js";import"./Badge-rzhTiy5R.js";import"./Chip-BfYmreyK.js";import"./Switch-KlAocz_p.js";import"./Modal-BcBUs7Gr.js";import{b as t}from"./Divider-LvB1Mlgf.js";import"./iframe-CRVziDRa.js";import"./RadioButton-BJ2yLcrU.js";import"./Checkbox-CkaKt53A.js";import"./SegmentItem-DpHNCS5z.js";import"./Avatar-BCCdS6OC.js";import"./TabItem-CVnW08PX.js";import"./ChipTabs-VywqhYjg.js";import"./Popover-PpgcIXzO.js";import"./StepIndicator-CrjZ8LGz.js";import"./Breadcrumbs-CQVX8JDr.js";import"./BreadcrumbItem-4ZrpjBy6.js";import"./Pagination-DbNGzRXd.js";import"./Callout-DhsccqvB.js";import{S as a}from"./icon_chevron-right_outline_20-DlaNTwb9.js";import"./textColor-C-GMzdPV.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-B2C-oQBQ.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-dhSMJF_F.js";import"./index-BD7lyUr1.js";import"./shadow-DVq_1U2q.js";import"./icon_more_outline_16-Ca-orwAw.js";import"./icon_chevron-right_outline_16-PIhVB7xk.js";import"./icon_warning_fill_20-DrYZyvb1.js";const hr={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},i={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})},o={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},s={args:{avatarType:"initial",name:"김규빅"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:a}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:a}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} />
    </div>
}`,...(l=(c=i.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,v,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,u,y;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    avatarType: "custom",
    avatarSrc: "https://via.placeholder.com/24"
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var I,x,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    avatarType: "initial",
    name: "김규빅"
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,j,S;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: 280
  }}>
      <LNBItemProfile name="김규빅" avatarType="initial" trailingIcon={IconChevronRightOutline20} />
      <LNBItemProfile name="John Doe" avatarType="custom" avatarSrc="https://via.placeholder.com/24" trailingIcon={IconChevronRightOutline20} />
      <LNBItemProfile name="이지은" avatarType="initial" />
    </div>
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const ur=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{m as AllVariants,i as Default,s as InitialAvatar,n as WithCustomAvatar,o as WithTrailingIcon,ur as __namedExportsOrder,hr as default};
