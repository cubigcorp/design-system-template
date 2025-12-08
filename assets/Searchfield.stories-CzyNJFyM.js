import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BNYJyn6Q.js";import"./SolidButton-DLMDXEH0.js";import"./TextButton-CUYKb_j3.js";import"./IconButton-D3KaSVHJ.js";import"./Badge-DbInwIDy.js";import"./Chip-zmFavlvj.js";import"./Switch-DUTUtJbR.js";import"./Description-Cj0GsyMS.js";import{S as C}from"./Divider-BV2OAWTs.js";import"./TokenField-_Cks1448.js";import"./Modal-6OGFklf5.js";import"./MultiSelect-CaX0tu2D.js";import"./TokenInput-G7VQ3kaR.js";import"./RadioButton-DWvdJYvv.js";import"./Checkbox-57Yw2wUc.js";import"./SegmentItem-CR8GFZfD.js";import"./AvatarGroup-BcQmqXKI.js";import"./TabItem-Cb7qXt_A.js";import"./ChipTabs-DfaQr-Eg.js";import"./Popover-CkyYWx1w.js";import"./StepIndicator-Dy_ZGd4v.js";import"./Breadcrumbs-C4g3mzte.js";import"./BreadcrumbItem-BLtsITmT.js";import"./Pagination-C16rGpGj.js";import"./Callout-B6B9q4dt.js";import"./TopBannerList-CH4_cA95.js";import"./styled-components.browser.esm-5GbLlbaO.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-uNhSIGhB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-C0J-5MmS.js";import"./index-Dln8NCzm.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BWBdWELy.js";import"./icon_chevron-down_outline_16-c06AZntw.js";import"./icon_chevron-right_outline_20-BsnVMo6J.js";import"./icon_more_outline_16-BV8b68p7.js";import"./icon_chevron-right_outline_16-BSFMBMyL.js";import"./icon_warning_fill_20-DFw4JDOb.js";import"./icon_close_outline_24-CONN7zfH.js";const a=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:o=>{var r;k(o.target.value),(r=e.onChange)==null||r.call(e,o)},onFocus:o=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,o)},onBlur:o=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,o)}})})},Le={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(a,{...e})},i={args:{size:"small"},render:e=>t.jsx(a,{...e})},m={args:{size:"medium"},render:e=>t.jsx(a,{...e})},n={args:{size:"large"},render:e=>t.jsx(a,{...e})},c={args:{disabled:!0},render:e=>t.jsx(a,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
