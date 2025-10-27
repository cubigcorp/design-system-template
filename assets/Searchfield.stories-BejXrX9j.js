import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-IAoFGwwu.js";import"./TextButton-C460blPJ.js";import"./IconButton-BsUrN0u2.js";import"./Badge-C65KWOv0.js";import"./Chip-DtNvS6u-.js";import"./Switch-D1utjl2C.js";import"./Modal-DUOiFp7l.js";import{S as C}from"./Divider-EOLW6C2r.js";import"./RadioButton-sgtrmSqI.js";import"./Checkbox-DvUgzF9p.js";import"./SegmentItem-mNw8--qb.js";import"./Avatar-mNvqWFjn.js";import"./TabItem-DNJShuCp.js";import"./ChipTabs-BcbXnCQk.js";import"./Popover-CghWrX9-.js";import"./StepIndicator-bHI8zOPU.js";import"./Breadcrumbs-CCgJzWxP.js";import"./BreadcrumbItem-yejSrOxx.js";import"./textColor-BD3_vIL_.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner--LfUO9gr.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BQBSiVi4.js";import"./IconCheck-CKtc9n1_.js";import"./index-BecQEXYS.js";import"./index-FSdTwamK.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-etQS999V.js";const o=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:a=>{var r;k(a.target.value),(r=e.onChange)==null||r.call(e,a)},onFocus:a=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,a)},onBlur:a=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,a)}})})},fe={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},s={render:e=>t.jsx(o,{...e})},i={args:{size:"small"},render:e=>t.jsx(o,{...e})},m={args:{size:"medium"},render:e=>t.jsx(o,{...e})},n={args:{size:"large"},render:e=>t.jsx(o,{...e})},c={args:{disabled:!0},render:e=>t.jsx(o,{...e})};var u,p,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SearchfieldWithState {...args} />
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const he=["Default","Small","Medium","Large","Disabled"];export{s as Default,c as Disabled,n as Large,m as Medium,i as Small,he as __namedExportsOrder,fe as default};
