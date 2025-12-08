import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DLMDXEH0.js";import"./TextButton-CUYKb_j3.js";import"./IconButton-D3KaSVHJ.js";import"./Badge-DbInwIDy.js";import"./Chip-zmFavlvj.js";import"./Switch-DUTUtJbR.js";import"./Description-Cj0GsyMS.js";import{a as t}from"./Divider-BV2OAWTs.js";import"./TokenField-_Cks1448.js";import"./Modal-6OGFklf5.js";import"./MultiSelect-CaX0tu2D.js";import"./TokenInput-G7VQ3kaR.js";import"./RadioButton-DWvdJYvv.js";import"./Checkbox-57Yw2wUc.js";import"./SegmentItem-CR8GFZfD.js";import"./AvatarGroup-BcQmqXKI.js";import"./TabItem-Cb7qXt_A.js";import"./ChipTabs-DfaQr-Eg.js";import"./Popover-CkyYWx1w.js";import"./StepIndicator-Dy_ZGd4v.js";import"./Breadcrumbs-C4g3mzte.js";import"./BreadcrumbItem-BLtsITmT.js";import"./Pagination-C16rGpGj.js";import"./Callout-B6B9q4dt.js";import"./TopBannerList-CH4_cA95.js";import"./iframe-BNYJyn6Q.js";import{S as o}from"./icon_person_outline_20-DrHHznGC.js";import"./styled-components.browser.esm-5GbLlbaO.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-uNhSIGhB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-C0J-5MmS.js";import"./index-Dln8NCzm.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BWBdWELy.js";import"./icon_chevron-down_outline_16-c06AZntw.js";import"./icon_chevron-right_outline_20-BsnVMo6J.js";import"./icon_more_outline_16-BV8b68p7.js";import"./icon_chevron-right_outline_16-BSFMBMyL.js";import"./icon_warning_fill_20-DFw4JDOb.js";import"./icon_close_outline_24-CONN7zfH.js";const Be={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,u,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    selected: true
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var I,y,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} />
    </div>
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var w,O,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    iconOnly: true
  },
  render: args => <div style={{
    display: "flex",
    gap: "8px",
    width: "fit-content"
  }}>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} />
      </div>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} selected={true} />
      </div>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} disabled={true} />
      </div>
    </div>
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const Le=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{n as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,Le as __namedExportsOrder,Be as default};
