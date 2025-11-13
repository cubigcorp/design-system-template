import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-BH3v6s4Q.js";import"./TextButton-CT0sU2us.js";import"./IconButton-B1viIBgX.js";import"./Badge-DnuvXE-I.js";import"./Chip-7lQlXP7t.js";import"./Switch-oGwzXK7s.js";import"./Description-BrqfV2t4.js";import{S as C}from"./Divider-cLDPWCZi.js";import"./TokenField-D46kdFZW.js";import"./Modal-C7un2_Hp.js";import"./MultiSelect-C84vdkLJ.js";import"./TokenInput-bYdnfzT7.js";import"./RadioButton-CZK5yYTO.js";import"./Checkbox-Cl3NiH0N.js";import"./SegmentItem-CnPAOgaq.js";import"./Avatar-CsqBxUdG.js";import"./TabItem-CJw_Lpw5.js";import"./ChipTabs-B7qFMIjp.js";import"./Popover-DSwbE_-Q.js";import"./StepIndicator-DbbPhw_c.js";import"./Breadcrumbs-rGMlDQ-q.js";import"./BreadcrumbItem-eQRTunxd.js";import"./Pagination-Del-2tfe.js";import"./Callout--Hih9Wcb.js";import"./textColor-BrxwI9Xf.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-DNB212_i.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-CFCJ4kQt.js";import"./IconCheck-CKtc9n1_.js";import"./shadow-DVq_1U2q.js";import"./index-Bviftfbb.js";import"./index-C7Wzy728.js";import"./icon_close_outline_16-kaKvgsT7.js";import"./icon_chevron-right_outline_20-O4ZPH0Wy.js";import"./icon_more_outline_16-BEmBMvQl.js";import"./icon_chevron-right_outline_16-DtwgIgW9.js";import"./icon_warning_fill_20-BcZPXDaF.js";const o=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:a=>{var r;k(a.target.value),(r=e.onChange)==null||r.call(e,a)},onFocus:a=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,a)},onBlur:a=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,a)}})})},Ce={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(o,{...e})},i={args:{size:"small"},render:e=>t.jsx(o,{...e})},m={args:{size:"medium"},render:e=>t.jsx(o,{...e})},n={args:{size:"large"},render:e=>t.jsx(o,{...e})},c={args:{disabled:!0},render:e=>t.jsx(o,{...e})};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Ee=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,Ee as __namedExportsOrder,Ce as default};
