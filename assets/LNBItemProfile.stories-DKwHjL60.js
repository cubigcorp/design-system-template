import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DwvN_TXb.js";import"./TextButton-CRptdRaB.js";import"./IconButton-BCNlrvL2.js";import"./Badge-nmeP92-9.js";import"./Chip-B5N5G07W.js";import"./Switch-CSotuUYW.js";import"./Description-Ds4hNMff.js";import{b as t}from"./Divider-2r6jQjOb.js";import"./TextArea-CLXbY6ZZ.js";import"./TokenField-C5RsBID8.js";import"./Modal-Dr8o01SI.js";import"./MultiSelect-BVzNU6cI.js";import"./TokenInput-BAsF9xth.js";import"./Cell-8MmQy4eh.js";import"./RadioButton-Ce_aQAYu.js";import"./Checkbox-a1ovuTmi.js";import"./SegmentItem-AjRoN-5b.js";import"./AvatarGroup-z4vPWkg7.js";import"./TabItem-CTvDpp8x.js";import"./ChipTabs-DiU8IepT.js";import"./Popover-DyNkxlAH.js";import"./StepIndicator-B_R-wluK.js";import"./Breadcrumbs-Bj7gAOLl.js";import"./BreadcrumbItem-BXoSglyz.js";import"./Pagination-CSu2ZYOB.js";import"./Callout-TPL6Unxx.js";import"./TopBannerList-DSbxA4q_.js";import"./iframe-CLq260Vv.js";import{S as e}from"./icon_chevron-right_outline_20-DbATkBuU.js";import"./styled-components.browser.esm-NAFAd1pi.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CQk7typa.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-B3AN0JjZ.js";import"./index-B10INhRO.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-DCKO5HpX.js";import"./icon_chevron-down_outline_16-BCpvU5sq.js";import"./icon_more_outline_16-Ci-oZiXB.js";import"./icon_chevron-right_outline_16-Bl_-1HYQ.js";import"./icon_warning_fill_16-_f__sB9b.js";import"./icon_close_outline_24-Qmrgn_fd.js";const Cr={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},a={render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i})})},o={render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i,trailingIcon:e})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i,trailingIcon:e})})},s={args:{avatarType:"initial",name:"김규빅"},render:i=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...i,trailingIcon:e})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:e}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:e}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const Lr=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{m as AllVariants,a as Default,s as InitialAvatar,n as WithCustomAvatar,o as WithTrailingIcon,Lr as __namedExportsOrder,Cr as default};
