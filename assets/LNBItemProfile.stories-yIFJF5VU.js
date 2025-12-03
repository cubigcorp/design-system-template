import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-BcUMzX_A.js";import"./TextButton-NDJ5oWzE.js";import"./IconButton-Cb91DsQD.js";import"./Badge-vM4GooXy.js";import"./Chip-HIssDOCO.js";import"./Switch-C1TRoKRf.js";import"./Description-BhBHcy_n.js";import{b as t}from"./Divider-BSL2sHoA.js";import"./TokenField-CRd9oYzu.js";import"./Modal-BzfX_Nge.js";import"./MultiSelect-BZ6_1V1S.js";import"./TokenInput-BoEy11KB.js";import"./RadioButton-CLLF1cfK.js";import"./Checkbox-BRz07VQT.js";import"./SegmentItem-cfVFyr6f.js";import"./Avatar-B2XXRFZR.js";import"./TabItem-GDFiVMWh.js";import"./ChipTabs-mwXHxNJv.js";import"./Popover-h0ZdYXXn.js";import"./StepIndicator-DOFhlqMJ.js";import"./Breadcrumbs-DERSzfp0.js";import"./BreadcrumbItem-XrAPfeCN.js";import"./Pagination-CMmHaBnB.js";import"./Callout-b3fcYtRL.js";import"./TopBannerList-DcxFWTlk.js";import"./iframe-CFH4n1Bp.js";import{S as i}from"./icon_chevron-right_outline_20-MXuI3Edx.js";import"./styled-components.browser.esm-3frt-ZcS.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner--PI8--bU.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-RVdj8V17.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Ct1INyvY.js";import"./index-B2X5vA45.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-C1PFpe7I.js";import"./icon_more_outline_16-DZ4M33YM.js";import"./icon_chevron-right_outline_16-Bo2Uc8Le.js";import"./icon_warning_fill_20-Cwzo1r-E.js";import"./icon_close_outline_24-O86MQuS9.js";const wr={title:"Components/LNB/ItemProfile",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},a={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e})})},o={render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:i})})},n={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:i})})},s={args:{avatarType:"initial",name:"김규빅"},render:e=>r.jsx("div",{style:{width:280},children:r.jsx(t,{...e,trailingIcon:i})})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(t,{name:"김규빅",avatarType:"initial",trailingIcon:i}),r.jsx(t,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:i}),r.jsx(t,{name:"이지은",avatarType:"initial"})]})};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
