import{j as a}from"./jsx-runtime-DU5MMG0J.js";import{r as E}from"./iframe-Bjjk8v-o.js";import"./TextButton-B5aSntoA.js";import"./IconButton-B7ErXn1m.js";import"./Badge-Ca1Bsdrj.js";import"./Chip-DwrLRqav.js";import{I as ua}from"./TextField-CClJkqQH.js";import"./styled-components.browser.esm-PYfggJBI.js";import"./color-CMFzNX_O.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C1c8KEhD.js";import"./spacing-tE1IiUFl.js";import"./Spinner-GNCkANnO.js";import"./brandColor-OMV9mLOG.js";import"./negativeColor-vAhOVlFC.js";import"./typography-BtvHU1C6.js";import"./IconCheck-BbzgY9Zj.js";const s=e=>{const[ia,la]=E.useState(e.value||""),[da,k]=E.useState(!1),[va,B]=E.useState(!1),ma=t=>{var r;k(!0),B(!0),(r=e.onFocus)==null||r.call(e,t)},ga=t=>{var r;k(!1),B(!1),(r=e.onBlur)==null||r.call(e,t)},pa=t=>{var r;la(t.target.value),(r=e.onChange)==null||r.call(e,t)};return a.jsx(ua,{...e,value:ia,onChange:pa,onFocus:ma,onBlur:ga,active:va,focused:da})},Va={title:"Components/Input",component:ua,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["normal","negative","positive"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},value:{control:{type:"text"}},placeholder:{control:{type:"text"}}}},o={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"medium",status:"normal"}},n={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"small"}},c={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",size:"large"}},u={render:e=>a.jsx(s,{...e}),args:{value:"값",size:"medium"}},i={render:e=>a.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",disabled:!0}},l={render:e=>a.jsx(s,{...e}),args:{value:"값",active:!0}},d={render:e=>a.jsx(s,{...e}),args:{value:"값",focused:!0}},v={render:e=>a.jsx(s,{...e}),args:{value:"값",status:"negative"}},m={render:e=>a.jsx(s,{...e}),args:{value:"값",status:"positive"}},g={render:e=>a.jsx(s,{...e}),args:{value:"Normal: !Active, !Focus",status:"normal",active:!1,focused:!1}},p={render:e=>a.jsx(s,{...e}),args:{value:"Normal: Active, !Focus",status:"normal",active:!0,focused:!1}},f={render:e=>a.jsx(s,{...e}),args:{value:"Normal: !Active, Focus",status:"normal",active:!1,focused:!0}},h={render:e=>a.jsx(s,{...e}),args:{value:"Normal: Active, Focus",status:"normal",active:!0,focused:!0}},S={render:e=>a.jsx(s,{...e}),args:{value:"Normal: Disabled",status:"normal",disabled:!0}},N={render:e=>a.jsx(s,{...e}),args:{value:"Negative: !Active, !Focus",status:"negative",active:!1,focused:!1}},F={render:e=>a.jsx(s,{...e}),args:{value:"Negative: !Active, Focus",status:"negative",active:!1,focused:!0}},A={render:e=>a.jsx(s,{...e}),args:{value:"Negative: Active, Focus",status:"negative",active:!0,focused:!0}},W={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Active, !Focus",status:"positive",active:!0,focused:!1}},x={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Active, Focus",status:"positive",active:!0,focused:!0}},I={render:e=>a.jsx(s,{...e}),args:{value:"Positive: Disabled",status:"positive",disabled:!0}},j={render:e=>a.jsx(s,{...e}),args:{value:"Normal 상태에서 Active + Focus",active:!0,focused:!0,status:"normal"}},P={render:e=>a.jsx(s,{...e}),args:{value:"Normal 상태에서 Active + !Focus",active:!0,focused:!1,status:"normal"}},b={render:e=>a.jsx(s,{...e}),args:{value:"Negative 상태에서 Active + Focus",status:"negative",active:!0,focused:!0}},C={render:e=>a.jsx(s,{...e}),args:{value:"Negative 상태에서 !Active",status:"negative",active:!1,focused:!1}},D={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 Active + Focus",status:"positive",active:!0,focused:!0}},y={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 !Active",status:"positive",active:!1,focused:!1}},z={render:e=>a.jsx(s,{...e}),args:{value:"Positive 상태에서 Active + Focus (Cancel)",status:"positive",active:!0,focused:!0}};var V,L,_;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "medium",
    status: "normal"
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var O,R,T;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "small"
  }
}`,...(T=(R=n.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,w,G;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    size: "large"
  }
}`,...(G=(w=c.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    active: true
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ae;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    focused: true
  }
}`,...(ae=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,te;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    status: "negative"
  }
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var oe,ne,ce;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "값",
    status: "positive"
  }
}`,...(ce=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ce.source}}};var ue,ie,le;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: !Active, !Focus",
    status: "normal",
    active: false,
    focused: false
  }
}`,...(le=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,ve,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: Active, !Focus",
    status: "normal",
    active: true,
    focused: false
  }
}`,...(me=(ve=p.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var ge,pe,fe;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: !Active, Focus",
    status: "normal",
    active: false,
    focused: true
  }
}`,...(fe=(pe=f.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var he,Se,Ne;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: Active, Focus",
    status: "normal",
    active: true,
    focused: true
  }
}`,...(Ne=(Se=h.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Fe,Ae,We;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal: Disabled",
    status: "normal",
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
    status: "normal"
  }
}`,...(Ge=(we=j.parameters)==null?void 0:we.docs)==null?void 0:Ge.source}}};var He,Je,Ke;P.parameters={...P.parameters,docs:{...(He=P.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Normal 상태에서 Active + !Focus",
    active: true,
    focused: false,
    status: "normal"
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
}`,...(ta=(ra=y.parameters)==null?void 0:ra.docs)==null?void 0:ta.source}}};var oa,na,ca;z.parameters={...z.parameters,docs:{...(oa=z.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  render: args => <InputWithState {...args} />,
  args: {
    value: "Positive 상태에서 Active + Focus (Cancel)",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(ca=(na=z.parameters)==null?void 0:na.docs)==null?void 0:ca.source}}};const La=["Default","Small","Large","WithValue","Disabled","Active","Focused","Negative","Positive","NormalDefault","NormalActive","NormalFocused","NormalActiveFocused","NormalDisabled","NegativeDefault","NegativeFocused","NegativeActiveFocused","PositiveActive","PositiveActiveFocused","PositiveDisabled","NormalWithCancel","NormalWithoutCancel","NegativeWithCancel","NegativeWithError","PositiveWithCheck","PositiveWithCheckNoFocus","PositiveWithCancel"];export{l as Active,o as Default,i as Disabled,d as Focused,c as Large,v as Negative,A as NegativeActiveFocused,N as NegativeDefault,F as NegativeFocused,b as NegativeWithCancel,C as NegativeWithError,p as NormalActive,h as NormalActiveFocused,g as NormalDefault,S as NormalDisabled,f as NormalFocused,j as NormalWithCancel,P as NormalWithoutCancel,m as Positive,W as PositiveActive,x as PositiveActiveFocused,I as PositiveDisabled,z as PositiveWithCancel,D as PositiveWithCheck,y as PositiveWithCheckNoFocus,n as Small,u as WithValue,La as __namedExportsOrder,Va as default};
