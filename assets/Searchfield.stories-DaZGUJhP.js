import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-DXO2Jl0a.js";import"./TextButton-C5umyN-e.js";import"./IconButton-cgcdzzmh.js";import"./Badge-DrYD_RYI.js";import"./Chip-C7kqNOxO.js";import"./Switch-DPBr4-jY.js";import"./Modal-BdY8pxHU.js";import{S as C}from"./Divider-BUXNmmMR.js";import"./MultiSelect-BGsyggx5.js";import"./RadioButton-s-rSgsyI.js";import"./Checkbox-CJPGUeFb.js";import"./SegmentItem-DQmVyDdO.js";import"./Avatar-CuJ5U1_-.js";import"./TabItem-Cmt9LhSx.js";import"./ChipTabs-DPDLxggO.js";import"./Popover-CHHDxdex.js";import"./StepIndicator-K6_HjI-c.js";import"./Breadcrumbs-bUFPOcVf.js";import"./BreadcrumbItem-TlH3huuH.js";import"./Pagination-PJtHikfp.js";import"./Callout-C04NfASz.js";import"./textColor-CNZCqqg5.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Chd3iI2V.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-7rRmEYki.js";import"./index-DYapGieK.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-CIR56TAn.js";import"./icon_chevron-right_outline_20-B7oOcCnW.js";import"./icon_more_outline_16-Cmb3Llzw.js";import"./icon_chevron-right_outline_16-crCqhhJA.js";import"./icon_warning_fill_20-GwW38p1r.js";const o=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:a=>{var r;k(a.target.value),(r=e.onChange)==null||r.call(e,a)},onFocus:a=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,a)},onBlur:a=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,a)}})})},ve={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(o,{...e})},i={args:{size:"small"},render:e=>t.jsx(o,{...e})},m={args:{size:"medium"},render:e=>t.jsx(o,{...e})},n={args:{size:"large"},render:e=>t.jsx(o,{...e})},c={args:{disabled:!0},render:e=>t.jsx(o,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const De=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,De as __namedExportsOrder,ve as default};
