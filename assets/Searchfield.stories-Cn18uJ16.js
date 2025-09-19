import{j as a}from"./jsx-runtime-BK5MheKj.js";import{r as d}from"./iframe-BwNeAgc5.js";import"./TextButton-CJLFc1RY.js";import"./IconButton-CTvY9Cui.js";import"./Badge-C1-HvRNR.js";import"./Chip-C2UJ0KWT.js";import"./Switch-CJFjmLDe.js";import{S as C}from"./Divider-pNjyNqfB.js";import"./RadioButton-CAPOB8hv.js";import"./Modal-C0QN64HI.js";import"./styled-components.browser.esm-Bhk2HcmV.js";import"./color-8lQV87gD.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-CxrOUVvi.js";import"./textColor-BwO3V5pH.js";import"./spacing-tE1IiUFl.js";import"./Spinner-ehWX3-R9.js";import"./brandColor-Ua45buRE.js";import"./negativeColor-DbIBussv.js";import"./cautioniaryColor-Dwoy29eC.js";import"./typography-rNEpvl8r.js";import"./IconSearch-BNXl3mAN.js";import"./shadow-DVq_1U2q.js";import"./layerColor-BXjGriCC.js";const s=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return a.jsx("div",{style:{width:360},children:a.jsx(C,{...e,value:E,focused:B,onChange:t=>{var r;k(t.target.value),(r=e.onChange)==null||r.call(e,t)},onFocus:t=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,t)},onBlur:t=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,t)}})})},se={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},o={render:e=>a.jsx(s,{...e})},i={args:{size:"small"},render:e=>a.jsx(s,{...e})},n={args:{size:"medium"},render:e=>a.jsx(s,{...e})},m={args:{size:"large"},render:e=>a.jsx(s,{...e})},c={args:{disabled:!0},render:e=>a.jsx(s,{...e})};var u,g,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SearchfieldWithState {...args} />
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(y=(j=n.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,z,W;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(W=(z=m.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var v,D,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const oe=["Default","Small","Medium","Large","Disabled"];export{o as Default,c as Disabled,m as Large,n as Medium,i as Small,oe as __namedExportsOrder,se as default};
