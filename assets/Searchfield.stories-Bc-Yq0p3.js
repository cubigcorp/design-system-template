import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BWSb8WuG.js";import"./SolidButton-B8ii7VF0.js";import"./TextButton-C2j2pduc.js";import"./IconButton-BZ52vZnD.js";import"./Badge-byPUrVAb.js";import"./Chip-Dixwg7pl.js";import"./Switch-BoCdc09X.js";import"./Description-DGhVcbIc.js";import{S as C}from"./Divider-9dLS3L-o.js";import"./TokenField-BFYVKFco.js";import"./Modal-7HolkznZ.js";import"./MultiSelect-CfAYXC2V.js";import"./TokenInput-iWPhX6ne.js";import"./Cell-D-SI0M8V.js";import"./RadioButton-SFRrqgDM.js";import"./Checkbox-BD9rGHG8.js";import"./SegmentItem-KXlXbmYI.js";import"./AvatarGroup-BPpMwOCM.js";import"./TabItem-DlPfV_2p.js";import"./ChipTabs-CMwRXU92.js";import"./Popover-DZ_qKFR_.js";import"./StepIndicator-D6Z_MCRR.js";import"./Breadcrumbs-C15ccovY.js";import"./BreadcrumbItem-jSAyKDDM.js";import"./Pagination-BVM6UNKF.js";import"./Callout-Dri5iXUz.js";import"./TopBannerList-DguNlKqv.js";import"./styled-components.browser.esm-C8ZrTVSh.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-C89vGHlB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Bka6C5bA.js";import"./index-BiH-g9Om.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-hoculNBG.js";import"./icon_chevron-down_outline_16-pwDvTksF.js";import"./icon_chevron-right_outline_20-CYeqvIYJ.js";import"./icon_more_outline_16-BgLl2r6c.js";import"./icon_chevron-right_outline_16-lKp3V03I.js";import"./icon_warning_fill_16-DrgncXxs.js";import"./icon_close_outline_24-BomUiEK8.js";const a=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:o=>{var r;k(o.target.value),(r=e.onChange)==null||r.call(e,o)},onFocus:o=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,o)},onBlur:o=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,o)}})})},Me={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(a,{...e})},i={args:{size:"small"},render:e=>t.jsx(a,{...e})},m={args:{size:"medium"},render:e=>t.jsx(a,{...e})},n={args:{size:"large"},render:e=>t.jsx(a,{...e})},c={args:{disabled:!0},render:e=>t.jsx(a,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <SearchfieldWithState {...args} />
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,y;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(y=(j=m.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,z,W;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(W=(z=n.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var v,D,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const _e=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,_e as __namedExportsOrder,Me as default};
