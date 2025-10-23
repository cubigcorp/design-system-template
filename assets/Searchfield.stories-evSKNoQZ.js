import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-B8YmHH7w.js";import"./TextButton-DBugHD5X.js";import"./IconButton-BEeupxaZ.js";import"./Badge-CzrOk9M-.js";import"./Chip-CmsCyVs7.js";import"./Switch-DGmR6jQI.js";import"./Modal-CEjbol9Y.js";import{S as C}from"./Divider-BPKeFW1I.js";import"./RadioButton-C6hXeq4q.js";import"./Checkbox-DVAASsMU.js";import"./SegmentItem-CLYFcL3S.js";import"./Avatar-B33Zx3SM.js";import"./TabItem-Aj7SGmuP.js";import"./ChipTabs-CRRQ5PeF.js";import"./Popover-DhxciXw1.js";import"./StepIndicator-ChM6WA3f.js";import"./textColor-BcwcM5V4.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-MnQ10Opf.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BztCI8_-.js";import"./IconCheck-CKtc9n1_.js";import"./index-Bl_ai6IK.js";import"./index-BJ9fOAcL.js";import"./shadow-DVq_1U2q.js";const s=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:a=>{var r;k(a.target.value),(r=e.onChange)==null||r.call(e,a)},onFocus:a=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,a)},onBlur:a=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,a)}})})},pe={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},o={render:e=>t.jsx(s,{...e})},i={args:{size:"small"},render:e=>t.jsx(s,{...e})},m={args:{size:"medium"},render:e=>t.jsx(s,{...e})},n={args:{size:"large"},render:e=>t.jsx(s,{...e})},c={args:{disabled:!0},render:e=>t.jsx(s,{...e})};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SearchfieldWithState {...args} />
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const ge=["Default","Small","Medium","Large","Disabled"];export{o as Default,c as Disabled,n as Large,m as Medium,i as Small,ge as __namedExportsOrder,pe as default};
