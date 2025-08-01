import{j as r}from"./jsx-runtime-D158dNIK.js";import{r as K}from"./iframe-B1jJcrkB.js";import"./TextButton-CETk2Tbv.js";import"./IconButton-QigbuwRL.js";import"./Badge-fJ6HNUFI.js";import"./Chip-DMr-MxzT.js";import{S as G}from"./Dropdown-BWTSePS_.js";import"./styled-components.browser.esm-C_f6s_QL.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-qGS65SkI.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-he8MZv4l.js";import"./IconArrowUp-Bi4kN8Gg.js";const a=e=>{const[H,I]=K.useState(e.value||"");return r.jsx(G,{...e,value:H,onChange:J=>I(J)})},s=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"}],de={title:"Components/Select",component:G,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}}}},o={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",options:s}},t={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",value:"option2",options:s}},n={render:e=>r.jsx(a,{...e}),args:{size:"small",placeholder:"선택해주세요.",options:s}},p={render:e=>r.jsx(a,{...e}),args:{size:"large",placeholder:"선택해주세요.",options:s}},l={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",options:s,disabled:!0}},c={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",options:s,active:!0}},i={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",options:s,focused:!0}},d={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",options:s,active:!0,focused:!0}},m={render:e=>r.jsx(a,{...e}),args:{placeholder:"선택해주세요.",value:"option3",options:s,disabled:!0}};var u,g,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    options: sampleOptions
  }
}`,...(S=(g=o.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var h,v,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    value: "option2",
    options: sampleOptions
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,W,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    size: "small",
    placeholder: "선택해주세요.",
    options: sampleOptions
  }
}`,...(j=(W=n.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var f,O,y;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    size: "large",
    placeholder: "선택해주세요.",
    options: sampleOptions
  }
}`,...(y=(O=p.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var A,D,z;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    options: sampleOptions,
    disabled: true
  }
}`,...(z=(D=l.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var V,F,E;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    options: sampleOptions,
    active: true
  }
}`,...(E=(F=c.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var C,L,_;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    options: sampleOptions,
    focused: true
  }
}`,...(_=(L=i.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var R,T,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    options: sampleOptions,
    active: true,
    focused: true
  }
}`,...(k=(T=d.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var q,w,B;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <SelectWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    value: "option3",
    options: sampleOptions,
    disabled: true
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const me=["Default","WithValue","Small","Large","Disabled","Active","Focused","ActiveAndFocused","DisabledWithValue"];export{c as Active,d as ActiveAndFocused,o as Default,l as Disabled,m as DisabledWithValue,i as Focused,p as Large,n as Small,t as WithValue,me as __namedExportsOrder,de as default};
