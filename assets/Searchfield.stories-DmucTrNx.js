import{j as t}from"./jsx-runtime-CL3neUek.js";import{r as d}from"./iframe-BQesNdA-.js";import"./TextButton-DmJ1zR5h.js";import"./IconButton-D-HblUm9.js";import"./Badge-C7o85wvm.js";import"./Chip-vA8j25ZI.js";import"./Switch-3E-2H0eT.js";import"./Modal-BvgeVBWQ.js";import{S as C}from"./Divider-DUik-KUO.js";import"./RadioButton-vUgrq936.js";import"./SegmentItem-nANi9w1e.js";import"./Avatar-BRTAhngE.js";import"./TabItem-C3fx4REY.js";import"./styled-components.browser.esm-Dm9YJfy-.js";import"./color-DqDZjiGS.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-CQKT7y1f.js";import"./textColor-SSyLf7rE.js";import"./spacing-tE1IiUFl.js";import"./Spinner-alrxXol7.js";import"./brandColor-BLjLgDA0.js";import"./negativeColor-MzvdT1cG.js";import"./cautioniaryColor-yy6imxKa.js";import"./typography-BccJP5aO.js";import"./IconSearch-BtgbHis2.js";import"./index-D84kLKFl.js";import"./shadow-DVq_1U2q.js";import"./layerColor-D_HAcI5O.js";const s=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return t.jsx("div",{style:{width:360},children:t.jsx(C,{...e,value:E,focused:B,onChange:a=>{var r;k(a.target.value),(r=e.onChange)==null||r.call(e,a)},onFocus:a=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,a)},onBlur:a=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,a)}})})},me={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},o={render:e=>t.jsx(s,{...e})},i={args:{size:"small"},render:e=>t.jsx(s,{...e})},n={args:{size:"medium"},render:e=>t.jsx(s,{...e})},m={args:{size:"large"},render:e=>t.jsx(s,{...e})},c={args:{disabled:!0},render:e=>t.jsx(s,{...e})};var u,p,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SearchfieldWithState {...args} />
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var S,f,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const ce=["Default","Small","Medium","Large","Disabled"];export{o as Default,c as Disabled,m as Large,n as Medium,i as Small,ce as __namedExportsOrder,me as default};
