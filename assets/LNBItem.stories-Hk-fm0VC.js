import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-4qaOOd7j.js";import"./TextButton-DCcg2og8.js";import"./IconButton-Ci0Zhy_G.js";import"./Badge-CaYmgKFX.js";import"./Chip-BnnrWdf2.js";import"./Switch-B6F7q1MC.js";import"./Description-Bji_8IHl.js";import{a as t}from"./Divider-5IJeqaXR.js";import"./TokenField-CyrgyQpr.js";import"./Modal-5KCYJjaI.js";import"./MultiSelect-PcGadtXB.js";import"./TokenInput-BQ90fSqK.js";import"./Cell-BVQ4eCuN.js";import"./RadioButton-D1duEql7.js";import"./Checkbox-CYA0FJc9.js";import"./SegmentItem-BfAQlwoo.js";import"./AvatarGroup-CdDU76A7.js";import"./TabItem-D5g89E0r.js";import"./ChipTabs-D61IuzS_.js";import"./Popover-CbTEE-Em.js";import"./StepIndicator-kp-47C6t.js";import"./Breadcrumbs-DTg4Yo39.js";import"./BreadcrumbItem-BSvSqcba.js";import"./Pagination-B9YWb9iu.js";import"./Callout-nzkIBSau.js";import"./TopBannerList-HVwrkELg.js";import"./iframe-BeKDGNjv.js";import{S as o}from"./icon_person_outline_20-DzNL3xO-.js";import"./styled-components.browser.esm-BV0yrM6x.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-GDVnMvhM.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-DoU2inzl.js";import"./index-DqbL_rK2.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-Cw2q9QIv.js";import"./icon_chevron-down_outline_16-zZK_mpdj.js";import"./icon_chevron-right_outline_20-BH6Lqxi5.js";import"./icon_more_outline_16-Cr8aO1oI.js";import"./icon_chevron-right_outline_16-BQDArlQm.js";import"./icon_warning_fill_16-CoZT0VT9.js";import"./icon_close_outline_24-BYIX_XZT.js";const Le={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const Ne=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{n as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,Ne as __namedExportsOrder,Le as default};
