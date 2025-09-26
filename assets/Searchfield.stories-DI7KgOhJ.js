import{j as a}from"./jsx-runtime-DTznObQx.js";import{r as d}from"./iframe-CjirL-zO.js";import"./TextButton-D5Adrbv1.js";import"./IconButton-BdsP7Vsa.js";import"./Badge-Ctow1l-W.js";import"./Chip-Bj0HymeE.js";import"./Switch-Cria1NZb.js";import"./Modal-C0K_zPG7.js";import{S as C}from"./Divider-DPsXWRY6.js";import"./RadioButton-DSGlJG0x.js";import"./SegmentItem-CsM-u3nW.js";import"./styled-components.browser.esm-CbqwAcww.js";import"./color-BKBaEAUu.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C94_pvKu.js";import"./textColor-C1-D1tBN.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Csj-7xh3.js";import"./brandColor-B7_BrDA7.js";import"./negativeColor-CUiOZlpg.js";import"./cautioniaryColor-C8_Dgx5E.js";import"./typography-BoZiIk0D.js";import"./IconSearch-B_QqHMsf.js";import"./index-ClmC-Btd.js";import"./shadow-DVq_1U2q.js";import"./layerColor-B93vltC5.js";const s=e=>{const[E,k]=d.useState(e.value||""),[B,l]=d.useState(!1);return a.jsx("div",{style:{width:360},children:a.jsx(C,{...e,value:E,focused:B,onChange:t=>{var r;k(t.target.value),(r=e.onChange)==null||r.call(e,t)},onFocus:t=>{var r;l(!0),(r=e.onFocus)==null||r.call(e,t)},onBlur:t=>{var r;l(!1),(r=e.onBlur)==null||r.call(e,t)}})})},ie={title:"Components/Searchfield",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,focused:!1,placeholder:"값",lang:"ko"}},o={render:e=>a.jsx(s,{...e})},i={args:{size:"small"},render:e=>a.jsx(s,{...e})},n={args:{size:"medium"},render:e=>a.jsx(s,{...e})},m={args:{size:"large"},render:e=>a.jsx(s,{...e})},c={args:{disabled:!0},render:e=>a.jsx(s,{...e})};var u,g,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const ne=["Default","Small","Medium","Large","Disabled"];export{o as Default,c as Disabled,m as Large,n as Medium,i as Small,ne as __namedExportsOrder,ie as default};
