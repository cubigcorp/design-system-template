import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as ve}from"./iframe-BDzNDkdP.js";import"./SolidButton-RgRedRGl.js";import"./TextButton-Dz2jOYpH.js";import"./IconButton-Dbs0qcHl.js";import"./Badge-DeiVi3d6.js";import"./Chip-CbbUn4FF.js";import"./Switch-BNc5GLkT.js";import"./Description-C3D7_qx9.js";import{T as ue}from"./Divider-CtBGHEVk.js";import"./TextArea-DjGGeoaW.js";import"./TokenField-Bt8ADwWL.js";import"./Modal-LIXde77j.js";import"./MultiSelect-BSG_OaU3.js";import"./TokenInput-Ru-sDX8Y.js";import"./Cell-CCyK221E.js";import"./RadioButton-Bd7qUcoG.js";import"./Checkbox-G6ru9igq.js";import"./SegmentItem-D6gFkg_-.js";import"./AvatarGroup-NYUdpXTM.js";import"./TabItem-BuCqXmo5.js";import"./ChipTabs-98wHHHCI.js";import"./Popover-2FTbtH-M.js";import"./StepIndicator-D1_TxqJT.js";import"./Breadcrumbs-BFoe3Pbo.js";import"./BreadcrumbItem-BC5sgzcI.js";import"./Pagination-DoptLf-D.js";import"./Callout-DBGZ9rjC.js";import"./TopBannerList-BrIM4OGs.js";import"./Tooltip-CBue0_b_.js";import"./styled-components.browser.esm-BfvoXbNe.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CYjOjfox.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-CkSReBge.js";import"./index-ToLnprrz.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-D0jNkJ0h.js";import"./icon_chevron-down_outline_16-FhDI9iPF.js";import"./icon_chevron-right_outline_20-BPOQs_sV.js";import"./icon_more_outline_16-rWTPrbUK.js";import"./icon_chevron-right_outline_16-C7i6r33l.js";import"./icon_warning_fill_16-B4kemQkw.js";import"./icon_close_outline_24-CczmjaNx.js";const s=e=>{const[ge,he]=ve.useState(e.value||"");return r.jsx(ue,{...e,value:ge,onChange:be=>he(be.target.value)})},Wr={title:"Components/TextField",component:ue,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["default","negative","positive"]},labelType:{control:{type:"select"},options:["default","required","optional"]},disabled:{control:{type:"boolean"}},descriptionLeadingIcon:{control:{type:"boolean"}},type:{control:{type:"select"},options:["text","password"]}}},t={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},a={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},o={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"optional",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},i={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"올바르지 않은 입력입니다.",descriptionLeadingIcon:!0,status:"negative"}},n={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"입력이 완료되었습니다.",descriptionLeadingIcon:!0,status:"positive"}},l={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"small",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},p={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"large",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},c={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",disabled:!0}},d={render:e=>r.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},m={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요."}},u={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Negative 상태에서 !Active",description:"Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",status:"negative",active:!1,focused:!1}},g={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Active + Focus",description:"Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",status:"positive",active:!0,focused:!0}},h={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Disabled",description:"Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",status:"positive",disabled:!0}},b={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"비밀번호를 입력하면 visibility 아이콘이 나타납니다."}},v={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",value:"mypassword123",placeholder:"비밀번호를 입력해 주세요.",description:"값이 있을 때 visibility 아이콘이 표시됩니다."}},x={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"값이 없을 때는 아이콘이 표시되지 않습니다."}};var S,y,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(W=(y=t.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var T,F,j;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    labelType: "required",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(j=(F=a.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var P,f,w;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(z=(N=l.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var I,O,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    size: "large",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var V,_,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요.",
    disabled: true
  }
}`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var G,H,J;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해주세요."
  }
}`,...(J=(H=d.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    placeholder: "텍스트를 입력해 주세요."
  }
}`,...(Q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Negative 상태에서 !Active",
    description: "Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",
    status: "negative",
    active: false,
    focused: false
  }
}`,...(Y=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Active + Focus",
    description: "Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",
    status: "positive",
    active: true,
    focused: true
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,se,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "주제",
    value: "Positive 상태에서 Disabled",
    description: "Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",
    status: "positive",
    disabled: true
  }
}`,...(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ae,oe,ie;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해 주세요.",
    description: "비밀번호를 입력하면 visibility 아이콘이 나타납니다."
  }
}`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ne,le,pe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "비밀번호",
    type: "password",
    value: "mypassword123",
    placeholder: "비밀번호를 입력해 주세요.",
    description: "값이 있을 때 visibility 아이콘이 표시됩니다."
  }
}`,...(pe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,de,me;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해 주세요.",
    description: "값이 없을 때는 아이콘이 표시되지 않습니다."
  }
}`,...(me=(de=x.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};const Tr=["Default","Required","Optional","WithError","WithSuccess","Small","Large","Disabled","WithoutLabel","WithoutDescription","NegativeWithError","PositiveWithCheck","PositiveDisabled","Password","PasswordWithValue","PasswordEmpty"];export{t as Default,c as Disabled,p as Large,u as NegativeWithError,o as Optional,b as Password,x as PasswordEmpty,v as PasswordWithValue,h as PositiveDisabled,g as PositiveWithCheck,a as Required,l as Small,i as WithError,n as WithSuccess,m as WithoutDescription,d as WithoutLabel,Tr as __namedExportsOrder,Wr as default};
