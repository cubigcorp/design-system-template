import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DLMDXEH0.js";import"./TextButton-CUYKb_j3.js";import"./IconButton-D3KaSVHJ.js";import"./Badge-DbInwIDy.js";import"./Chip-zmFavlvj.js";import"./Switch-DUTUtJbR.js";import"./Description-Cj0GsyMS.js";import{b as t}from"./Divider-BV2OAWTs.js";import"./TokenField-_Cks1448.js";import"./Modal-6OGFklf5.js";import"./MultiSelect-CaX0tu2D.js";import"./TokenInput-G7VQ3kaR.js";import"./RadioButton-DWvdJYvv.js";import"./Checkbox-57Yw2wUc.js";import"./SegmentItem-CR8GFZfD.js";import"./AvatarGroup-BcQmqXKI.js";import"./TabItem-Cb7qXt_A.js";import"./ChipTabs-DfaQr-Eg.js";import"./Popover-CkyYWx1w.js";import"./StepIndicator-Dy_ZGd4v.js";import"./Breadcrumbs-C4g3mzte.js";import"./BreadcrumbItem-BLtsITmT.js";import"./Pagination-C16rGpGj.js";import"./Callout-B6B9q4dt.js";import"./TopBannerList-CH4_cA95.js";import"./iframe-BNYJyn6Q.js";import{S as i}from"./icon_chevron-right_outline_20-BsnVMo6J.js";import"./styled-components.browser.esm-5GbLlbaO.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-uNhSIGhB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-C0J-5MmS.js";import"./index-Dln8NCzm.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BWBdWELy.js";import"./icon_chevron-down_outline_16-c06AZntw.js";import"./icon_more_outline_16-BV8b68p7.js";import"./icon_chevron-right_outline_16-BSFMBMyL.js";import"./icon_warning_fill_20-DFw4JDOb.js";import"./icon_close_outline_24-CONN7zfH.js";const wr={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},a={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})},o={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:i})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:i})})},s={args:{avatarType:"initial",name:"김규빅"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:i})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:i}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:i}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const Br=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{m as AllVariants,a as Default,s as InitialAvatar,n as WithCustomAvatar,o as WithTrailingIcon,Br as __namedExportsOrder,wr as default};
