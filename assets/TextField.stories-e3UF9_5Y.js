import{j as r}from"./jsx-runtime-7lGhGRbk.js";import{r as Ce}from"./iframe-2sBC8B_u.js";import"./TextButton-C6oaWZav.js";import"./IconButton-ZO44nf98.js";import"./Badge-kU-hPaAX.js";import"./Chip-DR2phIFv.js";import{T as We}from"./TextField-C45VhFF_.js";import"./styled-components.browser.esm-DBUfwey-.js";import"./color-CMFzNX_O.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C1c8KEhD.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BqYgPW0F.js";import"./brandColor-OMV9mLOG.js";import"./negativeColor-vAhOVlFC.js";import"./typography-D2BGv-2q.js";const s=e=>{const[fe,Te]=Ce.useState(e.value||"");return r.jsx(We,{...e,value:fe,onChange:Ae=>Te(Ae.target.value)})},He={title:"Components/TextField",component:We,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["normal","negative","positive"]},labelType:{control:{type:"select"},options:["default","required","optional"]},descriptionStatus:{control:{type:"select"},options:["default","error","success"]},disabled:{control:{type:"boolean"}},descriptionLeadingIcon:{control:{type:"boolean"}}}},a={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},t={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},o={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"optional",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},i={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"올바르지 않은 입력입니다.",descriptionStatus:"error",descriptionLeadingIcon:!0,status:"negative"}},n={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"입력이 완료되었습니다.",descriptionStatus:"success",descriptionLeadingIcon:!0,status:"positive"}},c={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"small",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},l={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"large",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},d={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",disabled:!0}},p={render:e=>r.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},u={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요."}},g={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Normal 상태에서 Active + Focus",description:"Normal 상태에서 Active + Focus일 때 Cancel 아이콘이 표시됩니다.",active:!0,focused:!0,status:"normal"}},m={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Normal 상태에서 Active + !Focus",description:"Normal 상태에서 Active + !Focus일 때는 아이콘이 표시되지 않습니다.",active:!0,focused:!1,status:"normal"}},v={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Negative 상태에서 Active + Focus",description:"Negative 상태에서 Active + Focus일 때 Cancel 아이콘이 표시됩니다.",status:"negative",active:!0,focused:!0}},h={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Negative 상태에서 !Active",description:"Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",status:"negative",active:!1,focused:!1}},b={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Active + Focus",description:"Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",status:"positive",active:!0,focused:!0}},S={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 !Active",description:"Positive 상태에서 !Active일 때 Check 아이콘이 표시됩니다.",status:"positive",active:!1,focused:!1}},x={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Active + Focus (Cancel)",description:"Positive 상태에서 Active + Focus일 때 Cancel 아이콘이 표시됩니다.",status:"positive",active:!0,focused:!0}},F={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Disabled",description:"Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",status:"positive",disabled:!0}};var W,f,T;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var A,C,N;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,j,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "optional",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,k,q;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "올바르지 않은 입력입니다.",
    descriptionStatus: "error",
    descriptionLeadingIcon: true,
    status: "negative"
  }
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var E,L,z;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "입력이 완료되었습니다.",
    descriptionStatus: "success",
    descriptionLeadingIcon: true,
    status: "positive"
  }
}`,...(z=(L=n.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var I,O,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    size: "small",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,V,w;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    size: "large",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(w=(V=l.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var B,G,H;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요.",
    disabled: true
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(M=(K=p.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,U,X;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요."
  }
}`,...(X=(U=u.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Normal 상태에서 Active + Focus",
    description: "Normal 상태에서 Active + Focus일 때 Cancel 아이콘이 표시됩니다.",
    active: true,
    focused: true,
    status: "normal"
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Normal 상태에서 Active + !Focus",
    description: "Normal 상태에서 Active + !Focus일 때는 아이콘이 표시되지 않습니다.",
    active: true,
    focused: false,
    status: "normal"
  }
}`,...(se=(re=m.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,te,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Negative 상태에서 Active + Focus",
    description: "Negative 상태에서 Active + Focus일 때 Cancel 아이콘이 표시됩니다.",
    status: "negative",
    active: true,
    focused: true
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,ne,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Negative 상태에서 !Active",
    description: "Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(ce=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var le,de,pe;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Active + Focus",
    description: "Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ue,ge,me;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 !Active",
    description: "Positive 상태에서 !Active일 때 Check 아이콘이 표시됩니다.",
    status: "positive",
    active: false,
    focused: false
  }
}`,...(me=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ve,he,be;x.parameters={...x.parameters,docs:{...(ve=x.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Active + Focus (Cancel)",
    description: "Positive 상태에서 Active + Focus일 때 Cancel 아이콘이 표시됩니다.",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(be=(he=x.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Se,xe,Fe;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Disabled",
    description: "Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",
    status: "positive",
    disabled: true
  }
}`,...(Fe=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:Fe.source}}};const Je=["Default","Required","Optional","WithError","WithSuccess","Small","Large","Disabled","WithoutLabel","WithoutDescription","NormalWithCancel","NormalWithoutCancel","NegativeWithCancel","NegativeWithError","PositiveWithCheck","PositiveWithCheckNoFocus","PositiveWithCancel","PositiveDisabled"];export{a as Default,d as Disabled,l as Large,v as NegativeWithCancel,h as NegativeWithError,g as NormalWithCancel,m as NormalWithoutCancel,o as Optional,F as PositiveDisabled,x as PositiveWithCancel,b as PositiveWithCheck,S as PositiveWithCheckNoFocus,t as Required,c as Small,i as WithError,n as WithSuccess,u as WithoutDescription,p as WithoutLabel,Je as __namedExportsOrder,He as default};
