import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-C8Me4DqF.js";import"./TextButton-BZlsZ3YC.js";import"./IconButton-D8rGCCed.js";import"./Badge-C5xfG2W3.js";import"./Chip-ZuZWVfmh.js";import"./Switch-BUDcEOzR.js";import"./Description-CgLGaLBF.js";import{S as C}from"./Divider-DbSzQIgh.js";import"./TokenField-Ci0OIrBA.js";import"./Modal-D3GYufqr.js";import"./MultiSelect-MlvCqOer.js";import"./TokenInput-BiiIuLNy.js";import"./RadioButton-BWMmEzuS.js";import"./Checkbox-CZ_tly0D.js";import"./SegmentItem-BPFjckOE.js";import"./Avatar-yNaO_PnA.js";import"./TabItem-BLkH2kqL.js";import"./ChipTabs-D2q5rw7v.js";import"./Popover-DOxD5S3X.js";import"./StepIndicator-C25jVkwc.js";import"./Breadcrumbs-BQFUUQwO.js";import"./BreadcrumbItem-DfrKs3_y.js";import"./Pagination-BPtjMRdC.js";import"./Callout-20wXjk6w.js";import"./TopBannerList-BUDouexe.js";import"./styled-components.browser.esm-DPhkORiP.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-XfIbsFrS.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-D3w0nx1t.js";import"./index-AWqxrulN.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-Dr5VV8ry.js";import"./icon_chevron-right_outline_20-Cl6nKsSS.js";import"./icon_more_outline_16-ChtUYWYD.js";import"./icon_chevron-right_outline_16-DKRecGT1.js";import"./icon_warning_fill_20-DSZsL-in.js";import"./icon_close_outline_24-CgGNfz0P.js";const a=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:o=>{var r;k(o.target.value),(r=e.onChange)==null||r.call(e,o)},onFocus:o=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,o)},onBlur:o=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,o)}})})},Be={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(a,{...e})},i={args:{size:"small"},render:e=>t.jsx(a,{...e})},m={args:{size:"medium"},render:e=>t.jsx(a,{...e})},n={args:{size:"large"},render:e=>t.jsx(a,{...e})},c={args:{disabled:!0},render:e=>t.jsx(a,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Le=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,Le as __namedExportsOrder,Be as default};
