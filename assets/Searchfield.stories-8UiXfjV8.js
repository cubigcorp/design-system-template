import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-a1GnT4YX.js";import"./SolidButton-HpTwvWQk.js";import"./TextButton-XrPx0pw7.js";import"./IconButton-CyxIHy06.js";import"./Badge-DRHGqa4Z.js";import"./Chip-CEXq_-E5.js";import"./Switch-B4fCNq5p.js";import"./Description-Dyel34PL.js";import{S as C}from"./Divider-Dq8ytqWZ.js";import"./TokenField-B7_vGxJQ.js";import"./Modal-DYwizTEV.js";import"./MultiSelect-BkO7T0KA.js";import"./TokenInput-B8ht-Tl1.js";import"./RadioButton-DWta9Zm8.js";import"./Checkbox-DSOZFEdq.js";import"./SegmentItem-Cr76Bm5C.js";import"./AvatarGroup-BR7IYKRC.js";import"./TabItem-PsGXRM65.js";import"./ChipTabs-tpFIE3jL.js";import"./Popover-DV7lHTpu.js";import"./StepIndicator-_iH-KyOf.js";import"./Breadcrumbs-Ca8laPeu.js";import"./BreadcrumbItem-CCtw_3uf.js";import"./Pagination-DOD1MY71.js";import"./Callout-BmGHdrc5.js";import"./TopBannerList-CO4SjdHc.js";import"./styled-components.browser.esm-D8ZmqkE2.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CP_HZA18.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-D0zUuoUb.js";import"./index-DD2r5x0Y.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-C1Rgh5Su.js";import"./icon_chevron-down_outline_16-BKYl0qe1.js";import"./icon_chevron-right_outline_20-yYlfPX17.js";import"./icon_more_outline_16-DRcevk2L.js";import"./icon_chevron-right_outline_16-BcwzNf6T.js";import"./icon_warning_fill_20-3rKIbhBD.js";import"./icon_close_outline_24-BjbV28Vx.js";const a=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:o=>{var r;k(o.target.value),(r=e.onChange)==null||r.call(e,o)},onFocus:o=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,o)},onBlur:o=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,o)}})})},Le={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(a,{...e})},i={args:{size:"small"},render:e=>t.jsx(a,{...e})},m={args:{size:"medium"},render:e=>t.jsx(a,{...e})},n={args:{size:"large"},render:e=>t.jsx(a,{...e})},c={args:{disabled:!0},render:e=>t.jsx(a,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Me=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,Me as __namedExportsOrder,Le as default};
