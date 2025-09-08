import{j as a}from"./jsx-runtime-Spnba8qJ.js";import{r as d}from"./iframe-DwQdGnDM.js";import"./TextButton-1vZVYGNa.js";import"./IconButton-BYmth8am.js";import"./Badge-h9zOqeGu.js";import"./Chip-CxPjN5Xw.js";import"./Switch-AzNRqEE9.js";import{S as C}from"./Toast-DpgqXt5j.js";import"./styled-components.browser.esm-Bo1ZEldf.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-BrY1a26q.js";import"./textColor-DVi7834n.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CnNkYP7H.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-5QY5Grkh.js";import"./IconSearch-Dl0S2b7X.js";import"./shadow-DVq_1U2q.js";const s=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return a.jsx("div",{style:{width:360},children:a.jsx(C,{...e,value:E,focused:B,onChange:t=>{var r;k(t.target.value),(r=e.onChange)==null||r.call(e,t)},onFocus:t=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,t)},onBlur:t=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,t)}})})},re={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},o={render:e=>a.jsx(s,{...e})},n={args:{size:"small"},render:e=>a.jsx(s,{...e})},i={args:{size:"medium"},render:e=>a.jsx(s,{...e})},c={args:{size:"large"},render:e=>a.jsx(s,{...e})},m={args:{disabled:!0},render:e=>a.jsx(s,{...e})};var u,g,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SearchfieldWithState {...args} />
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var S,f,h;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(h=(f=n.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,j,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var b,z,W;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(W=(z=c.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var v,D,F;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SearchfieldWithState {...args} />
}`,...(F=(D=m.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const ae=["Default","Small","Medium","Large","Disabled"];export{o as Default,m as Disabled,c as Large,i as Medium,n as Small,ae as __namedExportsOrder,re as default};
