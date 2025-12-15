import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-B8ii7VF0.js";import"./TextButton-C2j2pduc.js";import"./IconButton-BZ52vZnD.js";import"./Badge-byPUrVAb.js";import"./Chip-Dixwg7pl.js";import"./Switch-BoCdc09X.js";import"./Description-DGhVcbIc.js";import{a as t}from"./Divider-9dLS3L-o.js";import"./TokenField-BFYVKFco.js";import"./Modal-7HolkznZ.js";import"./MultiSelect-CfAYXC2V.js";import"./TokenInput-iWPhX6ne.js";import"./Cell-D-SI0M8V.js";import"./RadioButton-SFRrqgDM.js";import"./Checkbox-BD9rGHG8.js";import"./SegmentItem-KXlXbmYI.js";import"./AvatarGroup-BPpMwOCM.js";import"./TabItem-DlPfV_2p.js";import"./ChipTabs-CMwRXU92.js";import"./Popover-DZ_qKFR_.js";import"./StepIndicator-D6Z_MCRR.js";import"./Breadcrumbs-C15ccovY.js";import"./BreadcrumbItem-jSAyKDDM.js";import"./Pagination-BVM6UNKF.js";import"./Callout-Dri5iXUz.js";import"./TopBannerList-DguNlKqv.js";import"./iframe-BWSb8WuG.js";import{S as o}from"./icon_person_outline_20-D73XrrP1.js";import"./styled-components.browser.esm-C8ZrTVSh.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-C89vGHlB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Bka6C5bA.js";import"./index-BiH-g9Om.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-hoculNBG.js";import"./icon_chevron-down_outline_16-pwDvTksF.js";import"./icon_chevron-right_outline_20-CYeqvIYJ.js";import"./icon_more_outline_16-BgLl2r6c.js";import"./icon_chevron-right_outline_16-lKp3V03I.js";import"./icon_warning_fill_16-DrgncXxs.js";import"./icon_close_outline_24-BomUiEK8.js";const Le={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,m,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
