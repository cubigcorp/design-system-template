import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-CRVziDRa.js";import"./TextButton-v0YZzPT_.js";import"./IconButton-CBxk1YIm.js";import"./Badge-rzhTiy5R.js";import"./Chip-BfYmreyK.js";import"./Switch-KlAocz_p.js";import"./Modal-BcBUs7Gr.js";import{S as C}from"./Divider-LvB1Mlgf.js";import"./RadioButton-BJ2yLcrU.js";import"./Checkbox-CkaKt53A.js";import"./SegmentItem-DpHNCS5z.js";import"./Avatar-BCCdS6OC.js";import"./TabItem-CVnW08PX.js";import"./ChipTabs-VywqhYjg.js";import"./Popover-PpgcIXzO.js";import"./StepIndicator-CrjZ8LGz.js";import"./Breadcrumbs-CQVX8JDr.js";import"./BreadcrumbItem-4ZrpjBy6.js";import"./Pagination-DbNGzRXd.js";import"./Callout-DhsccqvB.js";import"./textColor-C-GMzdPV.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-B2C-oQBQ.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-dhSMJF_F.js";import"./index-BD7lyUr1.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-DlaNTwb9.js";import"./icon_more_outline_16-Ca-orwAw.js";import"./icon_chevron-right_outline_16-PIhVB7xk.js";import"./icon_warning_fill_20-DrYZyvb1.js";const o=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:a=>{var r;k(a.target.value),(r=e.onChange)==null||r.call(e,a)},onFocus:a=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,a)},onBlur:a=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,a)}})})},ze={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(o,{...e})},i={args:{size:"small"},render:e=>t.jsx(o,{...e})},m={args:{size:"medium"},render:e=>t.jsx(o,{...e})},n={args:{size:"large"},render:e=>t.jsx(o,{...e})},c={args:{disabled:!0},render:e=>t.jsx(o,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const We=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,We as __namedExportsOrder,ze as default};
