import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-D0ynm1mK.js";import{c as Ne}from"./styled-components.browser.esm-o0t8qbnT.js";import{L as ke}from"./Label-DLXz1w7W.js";import{I as ze}from"./Input-DBp9FlGg.js";import{D as Oe}from"./Description-RyeBF6Jl.js";import{s as _e}from"./spacing-tE1IiUFl.js";import"./preload-helper-eJNa_G2e.js";import"./textColor-DLZeZODc.js";import"./color-CiwAFuFb.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./IconCircleCheck-BBUUqRs3.js";import"./negativeColor-DPOOrHeE.js";import"./radius-DaoU83SK.js";import"./borderColor-C_RHITEf.js";const x=T.forwardRef(({label:e,labelType:S="default",description:t,descriptionLeadingIcon:F=!1,size:we="medium",status:j="default",disabled:Ee=!1,placeholder:qe,value:je,type:Le="text",onChange:Ie,onFocus:W,onBlur:w,className:Pe="",lang:De,...Ce},Re)=>{const[Ae,L]=T.useState(!1),[Ve,I]=T.useState(!1),E=De,He=q=>{L(!0),I(!0),W==null||W(q)},Me=q=>{L(!1),I(!1),w==null||w(q)};return a.jsxs($e,{className:Pe,children:[e&&a.jsx(ke,{type:S,lang:E,children:e}),a.jsx(ze,{ref:Re,size:we,status:j,disabled:Ee,active:Ve,focused:Ae,placeholder:qe,value:je,type:Le,onChange:Ie,onFocus:He,onBlur:Me,lang:E,...Ce}),t&&a.jsx(Oe,{status:j,leadingIcon:F,lang:E,children:t})]})}),$e=Ne.div`
  display: flex;
  flex-direction: column;
  gap: ${_e.gap["gap-1"]};
`;x.displayName="TextField";x.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'text' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const r=e=>{const[S,t]=T.useState(e.value||"");return a.jsx(x,{...e,value:S,onChange:F=>t(F.target.value)})},da={title:"Components/TextField",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["default","negative","positive"]},labelType:{control:{type:"select"},options:["default","required","optional"]},disabled:{control:{type:"boolean"}},descriptionLeadingIcon:{control:{type:"boolean"}},type:{control:{type:"select"},options:["text","password"]}}},s={render:e=>a.jsx(r,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},n={render:e=>a.jsx(r,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},i={render:e=>a.jsx(r,{...e}),args:{label:"주제",labelType:"optional",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},o={render:e=>a.jsx(r,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"올바르지 않은 입력입니다.",descriptionLeadingIcon:!0,status:"negative"}},l={render:e=>a.jsx(r,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"입력이 완료되었습니다.",descriptionLeadingIcon:!0,status:"positive"}},d={render:e=>a.jsx(r,{...e}),args:{label:"주제",size:"small",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},c={render:e=>a.jsx(r,{...e}),args:{label:"주제",size:"large",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},p={render:e=>a.jsx(r,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",disabled:!0}},u={render:e=>a.jsx(r,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},m={render:e=>a.jsx(r,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요."}},g={render:e=>a.jsx(r,{...e}),args:{label:"주제",value:"Negative 상태에서 !Active",description:"Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",status:"negative",active:!1,focused:!1}},v={render:e=>a.jsx(r,{...e}),args:{label:"주제",value:"Positive 상태에서 Active + Focus",description:"Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",status:"positive",active:!0,focused:!0}},f={render:e=>a.jsx(r,{...e}),args:{label:"주제",value:"Positive 상태에서 Disabled",description:"Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",status:"positive",disabled:!0}},h={render:e=>a.jsx(r,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"비밀번호를 입력하면 visibility 아이콘이 나타납니다."}},b={render:e=>a.jsx(r,{...e}),args:{label:"비밀번호",type:"password",value:"mypassword123",placeholder:"비밀번호를 입력해 주세요.",description:"값이 있을 때 visibility 아이콘이 표시됩니다."}},y={render:e=>a.jsx(r,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"값이 없을 때는 아이콘이 표시되지 않습니다."}};var P,D,C;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.'
  }
}`,...(C=(D=s.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var R,A,V;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'required',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.'
  }
}`,...(V=(A=n.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var H,M,N;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'optional',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.'
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var k,z,O;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'required',
    placeholder: '텍스트를 입력해 주세요.',
    description: '올바르지 않은 입력입니다.',
    descriptionLeadingIcon: true,
    status: 'negative'
  }
}`,...(O=(z=o.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var _,$,G;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    labelType: 'required',
    placeholder: '텍스트를 입력해 주세요.',
    description: '입력이 완료되었습니다.',
    descriptionLeadingIcon: true,
    status: 'positive'
  }
}`,...(G=($=l.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,K,Q;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    size: 'small',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.'
  }
}`,...(Q=(K=d.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    size: 'large',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.'
  }
}`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,B,ee;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
    disabled: true
  }
}`,...(ee=(B=p.parameters)==null?void 0:B.docs)==null?void 0:ee.source}}};var ae,re,te;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.'
  }
}`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ne,ie;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.'
  }
}`,...(ie=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,le,de;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    value: 'Negative 상태에서 !Active',
    description: 'Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.',
    status: 'negative',
    active: false,
    focused: false
  }
}`,...(de=(le=g.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    value: 'Positive 상태에서 Active + Focus',
    description: 'Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.',
    status: 'positive',
    active: true,
    focused: true
  }
}`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,ve;f.parameters={...f.parameters,docs:{...(me=f.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    value: 'Positive 상태에서 Disabled',
    description: 'Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.',
    status: 'positive',
    disabled: true
  }
}`,...(ve=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var fe,he,be;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    description: '비밀번호를 입력하면 visibility 아이콘이 나타납니다.'
  }
}`,...(be=(he=h.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,Te,xe;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '비밀번호',
    type: 'password',
    value: 'mypassword123',
    placeholder: '비밀번호를 입력해 주세요.',
    description: '값이 있을 때 visibility 아이콘이 표시됩니다.'
  }
}`,...(xe=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var Se,Fe,We;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해 주세요.',
    description: '값이 없을 때는 아이콘이 표시되지 않습니다.'
  }
}`,...(We=(Fe=y.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};const ca=["Default","Required","Optional","WithError","WithSuccess","Small","Large","Disabled","WithoutLabel","WithoutDescription","NegativeWithError","PositiveWithCheck","PositiveDisabled","Password","PasswordWithValue","PasswordEmpty"];export{s as Default,p as Disabled,c as Large,g as NegativeWithError,i as Optional,h as Password,y as PasswordEmpty,b as PasswordWithValue,f as PositiveDisabled,v as PositiveWithCheck,n as Required,d as Small,o as WithError,l as WithSuccess,m as WithoutDescription,u as WithoutLabel,ca as __namedExportsOrder,da as default};
