import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-DKzKKgJe.js";import"./IconButton-DUWI3L8U.js";import"./Badge-BA77Uaia.js";import"./Chip-DtOnXOlk.js";import"./Switch-CHtD0Zg9.js";import"./Modal-mui9Nalf.js";import{b as t}from"./Divider-amPfPX3C.js";import"./MultiSelect-BSVJc2TI.js";import"./RadioButton-3XarPk4D.js";import"./Checkbox-DJi0Ao7V.js";import"./SegmentItem-BtD0HnOO.js";import"./Avatar-DYtUty3x.js";import"./TabItem-D6RUblIa.js";import"./ChipTabs-BxdPrMgi.js";import"./Popover-EpW5ar2L.js";import"./StepIndicator-CL_Rzg5k.js";import"./Breadcrumbs-BckW0Rh_.js";import"./BreadcrumbItem-CjmC1udJ.js";import"./Pagination-D6ipj0fL.js";import"./Callout-CTtFryld.js";import"./iframe-DZAM4DrV.js";import{S as a}from"./icon_chevron-right_outline_20-y6lJCMBl.js";import"./textColor-mVK3GUDS.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-vH51abfD.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-ChusoG7V.js";import"./index-B-UmYoEE.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-CZSVxaXM.js";import"./icon_more_outline_16-sQH_6JiS.js";import"./icon_chevron-right_outline_16-r4KP0Fs1.js";import"./icon_warning_fill_20-BU11HBOE.js";const yr={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},i={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})},o={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},s={args:{avatarType:"initial",name:"김규빅"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:a})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:a}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:a}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const Ir=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{m as AllVariants,i as Default,s as InitialAvatar,n as WithCustomAvatar,o as WithTrailingIcon,Ir as __namedExportsOrder,yr as default};
