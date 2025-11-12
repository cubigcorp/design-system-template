import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-D9vhgvCg.js";import"./IconButton-CFd66S_a.js";import"./Badge-NCuk_XD2.js";import"./Chip-wVMU096n.js";import"./Switch-BBQihkXN.js";import"./Modal-ByYLA3qx.js";import{b as t}from"./Divider-Ud07jQJb.js";import"./Cell-Dff2EPQ2.js";import"./RadioButton-DNR-VLfJ.js";import"./Checkbox-C7jOusG4.js";import"./SegmentItem-BCJhUXBO.js";import"./Avatar-CaLTBNVW.js";import"./TabItem-Bw8KzxLe.js";import"./ChipTabs-k-HdBLKe.js";import"./Popover-DqOSX8LZ.js";import"./StepIndicator-D2EsyQPc.js";import"./Breadcrumbs-C73QIOlL.js";import"./BreadcrumbItem-C4EsRO2j.js";import"./Pagination-Bhc6C4_Y.js";import"./Callout-Bn36_4aF.js";import"./iframe-BmWS9Sei.js";import{S as a}from"./icon_chevron-right_outline_20-DK8uhy6v.js";import"./textColor-DMnf996G.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-6DHp7H22.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-Q9uUbnOr.js";import"./index-c0fiXNkb.js";import"./shadow-DVq_1U2q.js";import"./icon_more_outline_16-ehcG0kJM.js";import"./icon_chevron-right_outline_16-OEk3jo7Q.js";import"./icon_warning_fill_20-CYDmaotP.js";const ur={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},i={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})},o={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},s={args:{avatarType:"initial",name:"김규빅"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:a}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:a}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
