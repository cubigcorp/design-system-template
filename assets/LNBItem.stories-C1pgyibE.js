import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-ClqGo__P.js";import"./TextButton-CU9dtWpM.js";import"./IconButton-DcxrIQUp.js";import"./Badge-DJd1TKNL.js";import"./Chip-CmkyWET1.js";import"./Switch-DPt_iTe8.js";import"./Description-DfY6EdOt.js";import{a as t}from"./Divider-DKqga6-a.js";import"./TokenField-BfjHs3G5.js";import"./Modal-B2qz7-HB.js";import"./MultiSelect-GMl1JLv5.js";import"./TokenInput-BSnrASvY.js";import"./Cell-DMBuOwEr.js";import"./RadioButton-BYhp-qh3.js";import"./Checkbox-Dac64xm3.js";import"./SegmentItem-BSbR34Tj.js";import"./AvatarGroup-61vzdXZH.js";import"./TabItem-DIO9XxJ6.js";import"./ChipTabs-D4c1Zw-r.js";import"./Popover-olZBqRr0.js";import"./StepIndicator-Buf__Eyx.js";import"./Breadcrumbs-BJ3FWn53.js";import"./BreadcrumbItem-CTBZcOFv.js";import"./Pagination-BHjUrARn.js";import"./Callout-cyaAHCMy.js";import"./TopBannerList-DDmPomg9.js";import"./iframe-Bb6Fyw9n.js";import{S as o}from"./icon_person_outline_20-B9IvA63s.js";import"./styled-components.browser.esm-C7FfZWH0.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-gm2r-xsb.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-yUeeD7wX.js";import"./index-C00sfr74.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-DuTyF_6k.js";import"./icon_chevron-down_outline_16-DjWAGbvi.js";import"./icon_chevron-right_outline_20-GPGMjTpy.js";import"./icon_more_outline_16-Au6e8uGO.js";import"./icon_chevron-right_outline_16-Cxs5GNTa.js";import"./icon_warning_fill_20-HSmz--Ah.js";import"./icon_close_outline_24-BgAFwrIr.js";const Le={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
