import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-HpTwvWQk.js";import"./TextButton-XrPx0pw7.js";import"./IconButton-CyxIHy06.js";import"./Badge-DRHGqa4Z.js";import"./Chip-CEXq_-E5.js";import"./Switch-B4fCNq5p.js";import"./Description-Dyel34PL.js";import{a as t}from"./Divider-Dq8ytqWZ.js";import"./TokenField-B7_vGxJQ.js";import"./Modal-DYwizTEV.js";import"./MultiSelect-BkO7T0KA.js";import"./TokenInput-B8ht-Tl1.js";import"./RadioButton-DWta9Zm8.js";import"./Checkbox-DSOZFEdq.js";import"./SegmentItem-Cr76Bm5C.js";import"./AvatarGroup-BR7IYKRC.js";import"./TabItem-PsGXRM65.js";import"./ChipTabs-tpFIE3jL.js";import"./Popover-DV7lHTpu.js";import"./StepIndicator-_iH-KyOf.js";import"./Breadcrumbs-Ca8laPeu.js";import"./BreadcrumbItem-CCtw_3uf.js";import"./Pagination-DOD1MY71.js";import"./Callout-BmGHdrc5.js";import"./TopBannerList-CO4SjdHc.js";import"./iframe-a1GnT4YX.js";import{S as o}from"./icon_person_outline_20-CM9cJ7zV.js";import"./styled-components.browser.esm-D8ZmqkE2.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CP_HZA18.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-D0zUuoUb.js";import"./index-DD2r5x0Y.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-C1Rgh5Su.js";import"./icon_chevron-down_outline_16-BKYl0qe1.js";import"./icon_chevron-right_outline_20-yYlfPX17.js";import"./icon_more_outline_16-DRcevk2L.js";import"./icon_chevron-right_outline_16-BcwzNf6T.js";import"./icon_warning_fill_20-3rKIbhBD.js";import"./icon_close_outline_24-BjbV28Vx.js";const Be={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
