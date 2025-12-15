import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-B8ii7VF0.js";import"./TextButton-C2j2pduc.js";import"./IconButton-BZ52vZnD.js";import"./Badge-byPUrVAb.js";import"./Chip-Dixwg7pl.js";import"./Switch-BoCdc09X.js";import"./Description-DGhVcbIc.js";import{b as t}from"./Divider-9dLS3L-o.js";import"./TokenField-BFYVKFco.js";import"./Modal-7HolkznZ.js";import"./MultiSelect-CfAYXC2V.js";import"./TokenInput-iWPhX6ne.js";import"./Cell-D-SI0M8V.js";import"./RadioButton-SFRrqgDM.js";import"./Checkbox-BD9rGHG8.js";import"./SegmentItem-KXlXbmYI.js";import"./AvatarGroup-BPpMwOCM.js";import"./TabItem-DlPfV_2p.js";import"./ChipTabs-CMwRXU92.js";import"./Popover-DZ_qKFR_.js";import"./StepIndicator-D6Z_MCRR.js";import"./Breadcrumbs-C15ccovY.js";import"./BreadcrumbItem-jSAyKDDM.js";import"./Pagination-BVM6UNKF.js";import"./Callout-Dri5iXUz.js";import"./TopBannerList-DguNlKqv.js";import"./iframe-BWSb8WuG.js";import{S as e}from"./icon_chevron-right_outline_20-CYeqvIYJ.js";import"./styled-components.browser.esm-C8ZrTVSh.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-C89vGHlB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Bka6C5bA.js";import"./index-BiH-g9Om.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-hoculNBG.js";import"./icon_chevron-down_outline_16-pwDvTksF.js";import"./icon_more_outline_16-BgLl2r6c.js";import"./icon_chevron-right_outline_16-lKp3V03I.js";import"./icon_warning_fill_16-DrgncXxs.js";import"./icon_close_outline_24-BomUiEK8.js";const Br={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},a={render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i})})},o={render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i,trailingIcon:e})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i,trailingIcon:e})})},s={args:{avatarType:"initial",name:"김규빅"},render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i,trailingIcon:e})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:e}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:e}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} />
    </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,v,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const Cr=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{m as AllVariants,a as Default,s as InitialAvatar,n as WithCustomAvatar,o as WithTrailingIcon,Cr as __namedExportsOrder,Br as default};
