import{j as a}from"./jsx-runtime-BTbXV3wk.js";import{r as E}from"./iframe-D5_AN2oD.js";import"./TextButton-BEH_5wAR.js";import"./IconButton-CzA1mKGv.js";import"./Badge-kdHC1GG_.js";import"./Chip-CzzEi3gM.js";import{I as ua}from"./Dropdown-RBd_WKFh.js";import"./styled-components.browser.esm-DOMakniN.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BN6ngqTz.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-he8MZv4l.js";import"./IconArrowUp-BVxd77xX.js";const s=e=>{const[ia,da]=E.useState(e.value||""),[la,k]=E.useState(!1),[va,B]=E.useState(!1),ga=t=>{var r;k(!0),B(!0),(r=e.onFocus)==null||r.call(e,t)},ma=t=>{var r;k(!1),B(!1),(r=e.onBlur)==null||r.call(e,t)},pa=t=>{var r;da(t.target.value),(r=e.onChange)==null||r.call(e,t)};return a.jsx(ua,{...e,value:ia,onChange:pa,onFocus:ga,onBlur:ma,active:va,focused:la})},La={title:"Components/Input",component:ua,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["default","negative","positive"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}}}},o={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"medium",status:"default"}},c={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"small"}},n={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"large"}},u={render:e=>a.jsx(s,{...e}),args:{value:"값",size:"medium"}},i={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",disabled:!0}},d={render:e=>a.jsx(s,{...e}),args:{value:"값",active:!0}},l={render:e=>a.jsx(s,{...e}),args:{value:"값",focused:!0}},v={render:e=>a.jsx(s,{...e}),args:{value:"값",status:"negative"}},g={render:e=>a.jsx(s,{...e}),args:{value:"값",status:"positive"}},m={render:e=>a.jsx(s,{...e}),args:{value:"Normal: !Active, !Focus",status:"default",active:!1,focused:!1}},p={render:e=>a.jsx(s,{...e}),args:{value:"Normal: Active, !Focus",status:"default",active:!0,focused:!1}},f={render:e=>a.jsx(s,{...e}),args:{value:"Normal: !Active, Focus",status:"default",active:!1,focused:!0}},h={render:e=>a.jsx(s,{...e}),args:{value:"Normal: Active, Focus",status:"default",active:!0,focused:!0}},S={render:e=>a.jsx(s,{...e}),args:{value:"Normal: Disabled",status:"default",disabled:!0}},N={render:e=>a.jsx(s,{...e}),args:{value:"Negative: !Active, !Focus",status:"negative",active:!1,focused:!1}},F={render:e=>a.jsx(s,{...e}),args:{value:"Negative: !Active, Focus",status:"negative",active:!1,focused:!0}},A={render:e=>a.jsx(s,{...e}),args:{value:"Negative: Active, Focus",status:"negative",active:!0,focused:!0}},W={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Active, !Focus",status:"positive",active:!0,focused:!1}},x={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Active, Focus",status:"positive",active:!0,focused:!0}},I={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Disabled",status:"positive",disabled:!0}},j={render:e=>a.jsx(s,{...e}),args:{value:"Normal 상태에서 Active + Focus",active:!0,focused:!0,status:"default"}},P={render:e=>a.jsx(s,{...e}),args:{value:"Normal 상태에서 Active + !Focus",active:!0,focused:!1,status:"default"}},b={render:e=>a.jsx(s,{...e}),args:{value:"Negative 상태에서 Active + Focus",status:"negative",active:!0,focused:!0}},C={render:e=>a.jsx(s,{...e}),args:{value:"Negative 상태에서 !Active",status:"negative",active:!1,focused:!1}},D={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 Active + Focus",status:"positive",active:!0,focused:!0}},y={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 !Active",status:"positive",active:!1,focused:!1}},z={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 Active + Focus (Cancel)",status:"positive",active:!0,focused:!0}};var V,L,_;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "medium",
    status: "default"
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,R,T;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "small"
  }
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,w,G;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "large"
  }
}`,...(G=(w=n.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    size: "medium"
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(ae=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,te;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    status: "negative"
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ce,ne;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    status: "positive"
  }
}`,...(ne=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ne.source}}};var ue,ie,de;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: !Active, !Focus",
    status: "default",
    active: false,
    focused: false
  }
}`,...(de=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ve,ge;p.parameters={...p.parameters,docs:{...(le=p.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: Active, !Focus",
    status: "default",
    active: true,
    focused: false
  }
}`,...(ge=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var me,pe,fe;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: !Active, Focus",
    status: "default",
    active: false,
    focused: true
  }
}`,...(fe=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var he,Se,Ne;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: Active, Focus",
    status: "default",
    active: true,
    focused: true
  }
}`,...(Ne=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Fe,Ae,We;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: Disabled",
    status: "default",
    disabled: true
  }
}`,...(We=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var xe,Ie,je;N.parameters={...N.parameters,docs:{...(xe=N.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative: !Active, !Focus",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(je=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Pe,be,Ce;F.parameters={...F.parameters,docs:{...(Pe=F.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative: !Active, Focus",
    status: "negative",
    active: false,
    focused: true
  }
}`,...(Ce=(be=F.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var De,ye,ze;A.parameters={...A.parameters,docs:{...(De=A.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative: Active, Focus",
    status: "negative",
    active: true,
    focused: true
  }
}`,...(ze=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ze.source}}};var Ee,ke,Be;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
    value: "Normal 상태에서 Active + Focus",
    active: true,
    focused: true,
    status: "default"
  }
}`,...(Ge=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Ge.source}}};var He,Je,Ke;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal 상태에서 Active + !Focus",
    active: true,
    focused: false,
    status: "default"
  }
}`,...(Ke=(Je=P.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Me,Qe,Ue;b.parameters={...b.parameters,docs:{...(Me=b.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative 상태에서 Active + Focus",
    status: "negative",
    active: true,
    focused: true
  }
}`,...(Ue=(Qe=b.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;C.parameters={...C.parameters,docs:{...(Xe=C.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Negative 상태에서 !Active",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(Ze=(Ye=C.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,ea,aa;D.parameters={...D.parameters,docs:{...($e=D.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 Active + Focus",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(aa=(ea=D.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var sa,ra,ta;y.parameters={...y.parameters,docs:{...(sa=y.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 !Active",
    status: "positive",
    active: false,
    focused: false
  }
}`,...(ta=(ra=y.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var oa,ca,na;z.parameters={...z.parameters,docs:{...(oa=z.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 Active + Focus (Cancel)",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(na=(ca=z.parameters)==null?void 0:ca.docs)==null?void 0:na.source}}};const _a=["Default","Small","Large","WithValue","Disabled","Active","Focused","Negative","Positive","NormalDefault","NormalActive","NormalFocused","NormalActiveFocused","NormalDisabled","NegativeDefault","NegativeFocused","NegativeActiveFocused","PositiveActive","PositiveActiveFocused","PositiveDisabled","NormalWithCancel","NormalWithoutCancel","NegativeWithCancel","NegativeWithError","PositiveWithCheck","PositiveWithCheckNoFocus","PositiveWithCancel"];export{d as Active,o as Default,i as Disabled,l as Focused,n as Large,v as Negative,A as NegativeActiveFocused,N as NegativeDefault,F as NegativeFocused,b as NegativeWithCancel,C as NegativeWithError,p as NormalActive,h as NormalActiveFocused,m as NormalDefault,S as NormalDisabled,f as NormalFocused,j as NormalWithCancel,P as NormalWithoutCancel,g as Positive,W as PositiveActive,x as PositiveActiveFocused,I as PositiveDisabled,z as PositiveWithCancel,D as PositiveWithCheck,y as PositiveWithCheckNoFocus,c as Small,u as WithValue,_a as __namedExportsOrder,La as default};
