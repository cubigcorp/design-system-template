import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CVuMWXXB.js";import"./IconButton-U_-PInCk.js";import"./Badge-CaIYb6YH.js";import"./Chip-BmLaMErU.js";import"./Switch-BAlVZkMU.js";import"./Modal-DFmAljHm.js";import{b as t}from"./Divider-BHZK86kp.js";import"./Cell-BycZL3SJ.js";import"./RadioButton-CUXRQrUZ.js";import"./Checkbox-Dtk7-lXE.js";import"./SegmentItem-kzfWwpXB.js";import"./Avatar-u0SFwnPV.js";import"./TabItem-B3sEP1tY.js";import"./ChipTabs-CEIP0nES.js";import"./Popover-BtuFYUEa.js";import"./StepIndicator-hMfNxzm6.js";import"./Breadcrumbs-BG_-RrCO.js";import"./BreadcrumbItem-BQQAYwdB.js";import"./Pagination-D2_Qk9Ud.js";import"./Callout-CbEm4BGF.js";import"./iframe-B3AntG9Q.js";import{S as a}from"./icon_chevron-right_outline_20-C_jeyY0g.js";import"./textColor-Cq70r64R.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-DmrB70dt.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-DVlrMpXb.js";import"./index-HkvwHV1u.js";import"./shadow-DVq_1U2q.js";import"./icon_more_outline_16-CYgYBO5V.js";import"./icon_chevron-right_outline_16-BHjcXKL_.js";import"./icon_warning_fill_20-CJhzAbWC.js";const ur={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},i={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})},o={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},s={args:{avatarType:"initial",name:"김규빅"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:a}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:a}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const yr=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{m as AllVariants,i as Default,s as InitialAvatar,n as WithCustomAvatar,o as WithTrailingIcon,yr as __namedExportsOrder,ur as default};
