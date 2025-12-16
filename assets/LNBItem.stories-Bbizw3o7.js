import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DwvN_TXb.js";import"./TextButton-CRptdRaB.js";import"./IconButton-BCNlrvL2.js";import"./Badge-nmeP92-9.js";import"./Chip-B5N5G07W.js";import"./Switch-CSotuUYW.js";import"./Description-Ds4hNMff.js";import{a as t}from"./Divider-2r6jQjOb.js";import"./TextArea-CLXbY6ZZ.js";import"./TokenField-C5RsBID8.js";import"./Modal-Dr8o01SI.js";import"./MultiSelect-BVzNU6cI.js";import"./TokenInput-BAsF9xth.js";import"./Cell-8MmQy4eh.js";import"./RadioButton-Ce_aQAYu.js";import"./Checkbox-a1ovuTmi.js";import"./SegmentItem-AjRoN-5b.js";import"./AvatarGroup-z4vPWkg7.js";import"./TabItem-CTvDpp8x.js";import"./ChipTabs-DiU8IepT.js";import"./Popover-DyNkxlAH.js";import"./StepIndicator-B_R-wluK.js";import"./Breadcrumbs-Bj7gAOLl.js";import"./BreadcrumbItem-BXoSglyz.js";import"./Pagination-CSu2ZYOB.js";import"./Callout-TPL6Unxx.js";import"./TopBannerList-DSbxA4q_.js";import"./iframe-CLq260Vv.js";import{S as o}from"./icon_person_outline_20-Dy6NSapP.js";import"./styled-components.browser.esm-NAFAd1pi.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CQk7typa.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-B3AN0JjZ.js";import"./index-B10INhRO.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-DCKO5HpX.js";import"./icon_chevron-down_outline_16-BCpvU5sq.js";import"./icon_chevron-right_outline_20-DbATkBuU.js";import"./icon_more_outline_16-Ci-oZiXB.js";import"./icon_chevron-right_outline_16-Bl_-1HYQ.js";import"./icon_warning_fill_16-_f__sB9b.js";import"./icon_close_outline_24-Qmrgn_fd.js";const Ne={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const Se=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{n as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,Se as __namedExportsOrder,Ne as default};
