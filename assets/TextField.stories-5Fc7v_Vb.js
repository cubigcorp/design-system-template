import{j as r}from"./jsx-runtime-B1KhKolS.js";import{r as ve}from"./iframe-lPxbl11V.js";import"./TextButton-ewRW67si.js";import"./IconButton-DmZG2_ym.js";import"./Badge-DwkN6peR.js";import"./Chip-C14JV4Qh.js";import{T as ge}from"./Toast-3zuuxilq.js";import"./styled-components.browser.esm-BCmShAaO.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BAQCzWIP.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-BLDI0FEN.js";import"./IconClose-ChNP3VSq.js";import"./shadow-DVq_1U2q.js";const s=e=>{const[me,he]=ve.useState(e.value||"");return r.jsx(ge,{...e,value:me,onChange:be=>he(be.target.value)})},Re={title:"Components/TextField",component:ge,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["default","negative","positive"]},labelType:{control:{type:"select"},options:["default","required","optional"]},disabled:{control:{type:"boolean"}},descriptionLeadingIcon:{control:{type:"boolean"}},type:{control:{type:"select"},options:["text","password"]}}},a={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},t={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},o={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"optional",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},i={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"올바르지 않은 입력입니다.",descriptionLeadingIcon:!0,status:"negative"}},n={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"입력이 완료되었습니다.",descriptionLeadingIcon:!0,status:"positive"}},l={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"small",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},c={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"large",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},d={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",disabled:!0}},p={render:e=>r.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},u={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요."}},g={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Negative 상태에서 !Active",description:"Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",status:"negative",active:!1,focused:!1}},m={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Active + Focus",description:"Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",status:"positive",active:!0,focused:!0}},h={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Disabled",description:"Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",status:"positive",disabled:!0}},b={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"비밀번호를 입력하면 visibility 아이콘이 나타납니다."}},v={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",value:"mypassword123",placeholder:"비밀번호를 입력해 주세요.",description:"값이 있을 때 visibility 아이콘이 표시됩니다."}},x={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"값이 없을 때는 아이콘이 표시되지 않습니다."}};var S,y,W;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(W=(y=a.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var T,F,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(j=(F=t.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var P,f,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "optional",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var D,E,q;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "올바르지 않은 입력입니다.",
    descriptionLeadingIcon: true,
    status: "negative"
  }
}`,...(q=(E=i.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var L,A,C;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "입력이 완료되었습니다.",
    descriptionLeadingIcon: true,
    status: "positive"
  }
}`,...(C=(A=n.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var k,N,z;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    size: "small",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var I,O,R;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    size: "large",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(R=(O=c.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var V,_,B;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요.",
    disabled: true
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요."
  }
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Negative 상태에서 !Active",
    description: "Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Active + Focus",
    description: "Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(ee=($=m.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,se,ae;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Disabled",
    description: "Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",
    status: "positive",
    disabled: true
  }
}`,...(ae=(se=h.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var te,oe,ie;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해 주세요.",
    description: "비밀번호를 입력하면 visibility 아이콘이 나타납니다."
  }
}`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,le,ce;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "비밀번호",
    type: "password",
    value: "mypassword123",
    placeholder: "비밀번호를 입력해 주세요.",
    description: "값이 있을 때 visibility 아이콘이 표시됩니다."
  }
}`,...(ce=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,pe,ue;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해 주세요.",
    description: "값이 없을 때는 아이콘이 표시되지 않습니다."
  }
}`,...(ue=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Ve=["Default","Required","Optional","WithError","WithSuccess","Small","Large","Disabled","WithoutLabel","WithoutDescription","NegativeWithError","PositiveWithCheck","PositiveDisabled","Password","PasswordWithValue","PasswordEmpty"];export{a as Default,d as Disabled,c as Large,g as NegativeWithError,o as Optional,b as Password,x as PasswordEmpty,v as PasswordWithValue,h as PositiveDisabled,m as PositiveWithCheck,t as Required,l as Small,i as WithError,n as WithSuccess,u as WithoutDescription,p as WithoutLabel,Ve as __namedExportsOrder,Re as default};
