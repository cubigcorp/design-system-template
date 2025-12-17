import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-RgRedRGl.js";import"./TextButton-Dz2jOYpH.js";import"./IconButton-Dbs0qcHl.js";import"./Badge-DeiVi3d6.js";import"./Chip-CbbUn4FF.js";import"./Switch-BNc5GLkT.js";import"./Description-C3D7_qx9.js";import{a as t}from"./Divider-CtBGHEVk.js";import"./TextArea-DjGGeoaW.js";import"./TokenField-Bt8ADwWL.js";import"./Modal-LIXde77j.js";import"./MultiSelect-BSG_OaU3.js";import"./TokenInput-Ru-sDX8Y.js";import"./Cell-CCyK221E.js";import"./RadioButton-Bd7qUcoG.js";import"./Checkbox-G6ru9igq.js";import"./SegmentItem-D6gFkg_-.js";import"./AvatarGroup-NYUdpXTM.js";import"./TabItem-BuCqXmo5.js";import"./ChipTabs-98wHHHCI.js";import"./Popover-2FTbtH-M.js";import"./StepIndicator-D1_TxqJT.js";import"./Breadcrumbs-BFoe3Pbo.js";import"./BreadcrumbItem-BC5sgzcI.js";import"./Pagination-DoptLf-D.js";import"./Callout-DBGZ9rjC.js";import"./TopBannerList-BrIM4OGs.js";import"./Tooltip-CBue0_b_.js";import"./iframe-BDzNDkdP.js";import{S as o}from"./icon_person_outline_20-BJFT6NAK.js";import"./styled-components.browser.esm-BfvoXbNe.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CYjOjfox.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-CkSReBge.js";import"./index-ToLnprrz.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-D0jNkJ0h.js";import"./icon_chevron-down_outline_16-FhDI9iPF.js";import"./icon_chevron-right_outline_20-BPOQs_sV.js";import"./icon_more_outline_16-rWTPrbUK.js";import"./icon_chevron-right_outline_16-C7i6r33l.js";import"./icon_warning_fill_16-B4kemQkw.js";import"./icon_close_outline_24-CczmjaNx.js";const Se={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(l=(m=n.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var c,u,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const Pe=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{n as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,Pe as __namedExportsOrder,Se as default};
