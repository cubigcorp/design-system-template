import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as ve}from"./iframe-L1CEGzuW.js";import"./SolidButton-DiUg7Oe2.js";import"./TextButton-Bhy_pj9h.js";import"./IconButton-Ckd5Kzg7.js";import"./Badge-DqfpFiiJ.js";import"./Chip-BEbScxvp.js";import"./Switch-DMuFMUx3.js";import"./Description-CgJdkAhF.js";import{T as ue}from"./Divider-uGoGs9iF.js";import"./TextArea-CqMn28y0.js";import"./TokenField-CHJLyzMo.js";import"./Modal-CZnLwamM.js";import"./MultiSelect-DRDRFDCv.js";import"./TokenInput-QnJLx-9q.js";import"./Cell-bkDkwhmH.js";import"./RadioButton-BphB9Xf9.js";import"./Checkbox-DD8aZVQT.js";import"./SegmentItem-DXX5fZiH.js";import"./AvatarGroup-CX5JjXbm.js";import"./TabItem-CY416s89.js";import"./ChipTabs-5LfA4djK.js";import"./Popover-BDGQaLdQ.js";import"./StepIndicator-D_4EX1l3.js";import"./Breadcrumbs-D_wxAlwr.js";import"./BreadcrumbItem-Dv3U5xk5.js";import"./Pagination-MKr8N35P.js";import"./Callout-CrzalG_1.js";import"./TopBannerList-B3kvZrWF.js";import"./Tooltip-8N6yqZki.js";import"./styled-components.browser.esm-CPJhxV7n.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-IPgNsnGg.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-jhqWgfOc.js";import"./index-DmyLRZ_Y.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-1ahVzeUX.js";import"./icon_chevron-down_outline_16-B3vMYtLH.js";import"./icon_chevron-right_outline_20-CAThzgjg.js";import"./icon_more_outline_16-BhWNgq1Z.js";import"./icon_chevron-right_outline_16-e7vq1GRS.js";import"./icon_warning_fill_16-CeuyuPad.js";import"./icon_close_outline_24-4CpKikC8.js";const s=e=>{const[ge,he]=ve.useState(e.value||"");return r.jsx(ue,{...e,value:ge,onChange:be=>he(be.target.value)})},Wr={title:"Components/TextField",component:ue,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},status:{control:{type:"select"},options:["default","negative","positive"]},labelType:{control:{type:"select"},options:["default","required","optional"]},disabled:{control:{type:"boolean"}},descriptionLeadingIcon:{control:{type:"boolean"}},type:{control:{type:"select"},options:["text","password"]}}},t={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},a={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},o={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"optional",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},i={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"올바르지 않은 입력입니다.",descriptionLeadingIcon:!0,status:"negative"}},n={render:e=>r.jsx(s,{...e}),args:{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"입력이 완료되었습니다.",descriptionLeadingIcon:!0,status:"positive"}},l={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"small",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},p={render:e=>r.jsx(s,{...e}),args:{label:"주제",size:"large",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},c={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",disabled:!0}},d={render:e=>r.jsx(s,{...e}),args:{placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."}},m={render:e=>r.jsx(s,{...e}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요."}},u={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Negative 상태에서 !Active",description:"Negative 상태에서 !Active일 때 Error 아이콘이 표시됩니다.",status:"negative",active:!1,focused:!1}},g={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Active + Focus",description:"Positive 상태에서 Active + Focus일 때 Check 아이콘이 표시됩니다.",status:"positive",active:!0,focused:!0}},h={render:e=>r.jsx(s,{...e}),args:{label:"주제",value:"Positive 상태에서 Disabled",description:"Positive 상태에서 Disabled일 때도 Check 아이콘이 표시됩니다.",status:"positive",disabled:!0}},b={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"비밀번호를 입력하면 visibility 아이콘이 나타납니다."}},v={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",value:"mypassword123",placeholder:"비밀번호를 입력해 주세요.",description:"값이 있을 때 visibility 아이콘이 표시됩니다."}},x={render:e=>r.jsx(s,{...e}),args:{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"값이 없을 때는 아이콘이 표시되지 않습니다."}};var S,y,W;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
