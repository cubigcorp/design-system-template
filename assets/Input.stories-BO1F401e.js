import{j as a}from"./jsx-runtime-DORK9biX.js";import{r as E}from"./iframe-Drh7vK1U.js";import"./TextButton-CbtlQBR3.js";import"./IconButton-BAHIx95P.js";import"./Badge-DTgm8erc.js";import"./Chip-Bvz8ALPi.js";import{I as na}from"./Toast-58DM0VbY.js";import"./styled-components.browser.esm-Cr-any12.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CIFvj1Zx.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-BLDI0FEN.js";import"./IconClose-CNP3TcGH.js";import"./shadow-DVq_1U2q.js";const s=e=>{const[ia,da]=E.useState(e.value||""),[la,k]=E.useState(!1),[va,B]=E.useState(!1),ga=r=>{var t;k(!0),B(!0),(t=e.onFocus)==null||t.call(e,r)},pa=r=>{var t;k(!1),B(!1),(t=e.onBlur)==null||t.call(e,r)},ma=r=>{var t;da(r.target.value),(t=e.onChange)==null||t.call(e,r)};return a.jsx(na,{...e,value:ia,onChange:ma,onFocus:ga,onBlur:pa,active:va,focused:la})},_a={title:"Components/Input",component:na,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["default","negative","positive"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}}}},o={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"medium",status:"default"}},u={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"small"}},c={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"large"}},n={render:e=>a.jsx(s,{...e}),args:{value:"값",size:"medium"}},i={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",disabled:!0}},d={render:e=>a.jsx(s,{...e}),args:{value:"값",active:!0}},l={render:e=>a.jsx(s,{...e}),args:{value:"값",focused:!0}},v={render:e=>a.jsx(s,{...e}),args:{value:"값",status:"negative"}},g={render:e=>a.jsx(s,{...e}),args:{value:"값",status:"positive"}},p={render:e=>a.jsx(s,{...e}),args:{value:"Default: !Active, !Focus",status:"default",active:!1,focused:!1}},m={render:e=>a.jsx(s,{...e}),args:{value:"Default: Active, !Focus",status:"default",active:!0,focused:!1}},f={render:e=>a.jsx(s,{...e}),args:{value:"Default: !Active, Focus",status:"default",active:!1,focused:!0}},h={render:e=>a.jsx(s,{...e}),args:{value:"Default: Active, Focus",status:"default",active:!0,focused:!0}},S={render:e=>a.jsx(s,{...e}),args:{value:"Default: Disabled",status:"default",disabled:!0}},F={render:e=>a.jsx(s,{...e}),args:{value:"Negative: !Active, !Focus",status:"negative",active:!1,focused:!1}},A={render:e=>a.jsx(s,{...e}),args:{value:"Negative: !Active, Focus",status:"negative",active:!1,focused:!0}},D={render:e=>a.jsx(s,{...e}),args:{value:"Negative: Active, Focus",status:"negative",active:!0,focused:!0}},W={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Active, !Focus",status:"positive",active:!0,focused:!1}},x={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Active, Focus",status:"positive",active:!0,focused:!0}},I={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Disabled",status:"positive",disabled:!0}},j={render:e=>a.jsx(s,{...e}),args:{value:"Default 상태에서 Active + Focus",active:!0,focused:!0,status:"default"}},P={render:e=>a.jsx(s,{...e}),args:{value:"Default 상태에서 Active + !Focus",active:!0,focused:!1,status:"default"}},N={render:e=>a.jsx(s,{...e}),args:{value:"Negative 상태에서 Active + Focus",status:"negative",active:!0,focused:!0}},b={render:e=>a.jsx(s,{...e}),args:{value:"Negative 상태에서 !Active",status:"negative",active:!1,focused:!1}},C={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 Active + Focus",status:"positive",active:!0,focused:!0}},y={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 !Active",status:"positive",active:!1,focused:!1}},z={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 Active + Focus (Cancel)",status:"positive",active:!0,focused:!0}};var V,L,_;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "medium",
    status: "default"
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,R,T;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "small"
  }
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,w,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "large"
  }
}`,...(G=(w=c.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var H,J,K;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    size: "medium"
  }
}`,...(K=(J=n.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    disabled: true
  }
}`,...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    active: true
  }
}`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    focused: true
  }
}`,...(ae=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,te,re;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    status: "negative"
  }
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,ue,ce;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    status: "positive"
  }
}`,...(ce=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var ne,ie,de;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default: !Active, !Focus",
    status: "default",
    active: false,
    focused: false
  }
}`,...(de=(ie=p.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ve,ge;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default: Active, !Focus",
    status: "default",
    active: true,
    focused: false
  }
}`,...(ge=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var pe,me,fe;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default: !Active, Focus",
    status: "default",
    active: false,
    focused: true
  }
}`,...(fe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var he,Se,Fe;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default: Active, Focus",
    status: "default",
    active: true,
    focused: true
  }
}`,...(Fe=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:Fe.source}}};var Ae,De,We;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default: Disabled",
    status: "default",
    disabled: true
  }
}`,...(We=(De=S.parameters)==null?void 0:De.docs)==null?void 0:We.source}}};var xe,Ie,je;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative: !Active, !Focus",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(je=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Pe,Ne,be;A.parameters={...A.parameters,docs:{...(Pe=A.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative: !Active, Focus",
    status: "negative",
    active: false,
    focused: true
  }
}`,...(be=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:be.source}}};var Ce,ye,ze;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative: Active, Focus",
    status: "negative",
    active: true,
    focused: true
  }
}`,...(ze=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:ze.source}}};var Ee,ke,Be;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive: Active, !Focus",
    status: "positive",
    active: true,
    focused: false
  }
}`,...(Be=(ke=W.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};var Ve,Le,_e;x.parameters={...x.parameters,docs:{...(Ve=x.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive: Active, Focus",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(_e=(Le=x.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var Oe,Re,Te;I.parameters={...I.parameters,docs:{...(Oe=I.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive: Disabled",
    status: "positive",
    disabled: true
  }
}`,...(Te=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var qe,we,Ge;j.parameters={...j.parameters,docs:{...(qe=j.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default 상태에서 Active + Focus",
    active: true,
    focused: true,
    status: "default"
  }
}`,...(Ge=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Ge.source}}};var He,Je,Ke;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Default 상태에서 Active + !Focus",
    active: true,
    focused: false,
    status: "default"
  }
}`,...(Ke=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Me,Qe,Ue;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative 상태에서 Active + Focus",
    status: "negative",
    active: true,
    focused: true
  }
}`,...(Ue=(Qe=N.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;b.parameters={...b.parameters,docs:{...(Xe=b.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative 상태에서 !Active",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(Ze=(Ye=b.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,ea,aa;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 Active + Focus",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(aa=(ea=C.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var sa,ta,ra;y.parameters={...y.parameters,docs:{...(sa=y.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 !Active",
    status: "positive",
    active: false,
    focused: false
  }
}`,...(ra=(ta=y.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var oa,ua,ca;z.parameters={...z.parameters,docs:{...(oa=z.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 Active + Focus (Cancel)",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(ca=(ua=z.parameters)==null?void 0:ua.docs)==null?void 0:ca.source}}};const Oa=["Default","Small","Large","WithValue","Disabled","Active","Focused","Negative","Positive","DefaultDefault","DefaultActive","DefaultFocused","DefaultActiveFocused","DefaultDisabled","NegativeDefault","NegativeFocused","NegativeActiveFocused","PositiveActive","PositiveActiveFocused","PositiveDisabled","DefaultWithCancel","DefaultWithoutCancel","NegativeWithCancel","NegativeWithError","PositiveWithCheck","PositiveWithCheckNoFocus","PositiveWithCancel"];export{d as Active,o as Default,m as DefaultActive,h as DefaultActiveFocused,p as DefaultDefault,S as DefaultDisabled,f as DefaultFocused,j as DefaultWithCancel,P as DefaultWithoutCancel,i as Disabled,l as Focused,c as Large,v as Negative,D as NegativeActiveFocused,F as NegativeDefault,A as NegativeFocused,N as NegativeWithCancel,b as NegativeWithError,g as Positive,W as PositiveActive,x as PositiveActiveFocused,I as PositiveDisabled,z as PositiveWithCancel,C as PositiveWithCheck,y as PositiveWithCheckNoFocus,u as Small,n as WithValue,Oa as __namedExportsOrder,_a as default};
