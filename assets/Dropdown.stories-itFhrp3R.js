import{j as r}from"./jsx-runtime-D158dNIK.js";import{r as oe}from"./iframe-B1jJcrkB.js";import"./TextButton-CETk2Tbv.js";import"./IconButton-QigbuwRL.js";import"./Badge-fJ6HNUFI.js";import"./Chip-DMr-MxzT.js";import{a as Z}from"./Dropdown-BWTSePS_.js";import"./styled-components.browser.esm-C_f6s_QL.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-qGS65SkI.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-he8MZv4l.js";import"./IconArrowUp-Bi4kN8Gg.js";const o=e=>{const[$,ee]=oe.useState(e.value||"");return r.jsx(Z,{...e,value:$,onChange:re=>ee(re)})},a=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"}],je={title:"Components/Dropdown",component:Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},label:{control:{type:"text"}},labelType:{control:{type:"select"},options:["default","required","optional"]},description:{control:{type:"text"}},descriptionLeadingIcon:{control:{type:"boolean"}}}},s={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",options:a}},n={render:e=>r.jsx(o,{...e}),args:{placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",options:a}},t={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",options:a}},p={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",value:"option2",options:a}},i={render:e=>r.jsx(o,{...e}),args:{size:"small",label:"선택 항목",placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",options:a}},l={render:e=>r.jsx(o,{...e}),args:{size:"large",label:"선택 항목",placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",options:a}},c={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",options:a,disabled:!0}},d={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",description:"원하는 옵션을 선택해주세요.",value:"option3",options:a,disabled:!0}},m={render:e=>r.jsx(o,{...e}),args:{label:"필수 선택 항목",labelType:"required",placeholder:"선택해주세요.",description:"반드시 선택해야 하는 항목입니다.",options:a}},u={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",labelType:"optional",placeholder:"선택해주세요.",description:"선택사항입니다.",options:a}},g={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",description:"옵션을 선택해주세요.",status:"negative",options:a}},b={render:e=>r.jsx(o,{...e}),args:{label:"선택 항목",placeholder:"선택해주세요.",value:"option2",description:"옵션이 성공적으로 선택되었습니다.",status:"positive",options:a}};var h,S,D;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    options: sampleOptions
  }
}`,...(D=(S=s.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var W,x,v;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    options: sampleOptions
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var O,j,w;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    options: sampleOptions
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,L,f;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    value: "option2",
    options: sampleOptions
  }
}`,...(f=(L=p.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var T,q,z;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    size: "small",
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    options: sampleOptions
  }
}`,...(z=(q=i.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var E,V,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    size: "large",
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    options: sampleOptions
  }
}`,...(R=(V=l.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var C,_,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    options: sampleOptions,
    disabled: true
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var k,A,B;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "원하는 옵션을 선택해주세요.",
    value: "option3",
    options: sampleOptions,
    disabled: true
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var F,G,H;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "필수 선택 항목",
    labelType: "required",
    placeholder: "선택해주세요.",
    description: "반드시 선택해야 하는 항목입니다.",
    options: sampleOptions
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    labelType: "optional",
    placeholder: "선택해주세요.",
    description: "선택사항입니다.",
    options: sampleOptions
  }
}`,...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,P,Q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    description: "옵션을 선택해주세요.",
    status: "negative",
    options: sampleOptions
  }
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />,
  args: {
    label: "선택 항목",
    placeholder: "선택해주세요.",
    value: "option2",
    description: "옵션이 성공적으로 선택되었습니다.",
    status: "positive",
    options: sampleOptions
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const we=["Default","WithoutLabel","WithoutDescription","WithValue","Small","Large","Disabled","DisabledWithValue","RequiredLabel","OptionalLabel","ErrorDescription","SuccessDescription"];export{s as Default,c as Disabled,d as DisabledWithValue,g as ErrorDescription,l as Large,u as OptionalLabel,m as RequiredLabel,i as Small,b as SuccessDescription,p as WithValue,t as WithoutDescription,n as WithoutLabel,we as __namedExportsOrder,je as default};
