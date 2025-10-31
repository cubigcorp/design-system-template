import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-v0YZzPT_.js";import"./IconButton-CBxk1YIm.js";import"./Badge-rzhTiy5R.js";import"./Chip-BfYmreyK.js";import"./Switch-KlAocz_p.js";import"./Modal-BcBUs7Gr.js";import{d as t}from"./Divider-LvB1Mlgf.js";import"./iframe-CRVziDRa.js";import"./RadioButton-BJ2yLcrU.js";import"./Checkbox-CkaKt53A.js";import"./SegmentItem-DpHNCS5z.js";import"./Avatar-BCCdS6OC.js";import"./TabItem-CVnW08PX.js";import"./ChipTabs-VywqhYjg.js";import"./Popover-PpgcIXzO.js";import"./StepIndicator-CrjZ8LGz.js";import"./Breadcrumbs-CQVX8JDr.js";import"./BreadcrumbItem-4ZrpjBy6.js";import"./Pagination-DbNGzRXd.js";import"./Callout-DhsccqvB.js";import"./textColor-C-GMzdPV.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-B2C-oQBQ.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-dhSMJF_F.js";import"./index-BD7lyUr1.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-DlaNTwb9.js";import"./icon_more_outline_16-Ca-orwAw.js";import"./icon_chevron-right_outline_16-PIhVB7xk.js";import"./icon_warning_fill_20-DrYZyvb1.js";const Sr={title:"Components/Toast",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary"]},placement:{control:{type:"select"},options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},offset:{control:{type:"number"}},showLeadingIcon:{control:{type:"boolean"}},showTrailingIcon:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}}}},o={render:r=>e.jsx(t,{...r}),args:{children:"기본 토스트 메시지입니다.",variant:"default",placement:"bottom-right"}},a={render:r=>e.jsx(t,{...r}),args:{children:`저장이 완료되었습니다.
변경한 내용이 정상적으로 반영되었어요.`,description:"1 저장 완료, 0 실패",variant:"positive",placement:"bottom-right",showDivider:!0}},n={render:r=>e.jsx(t,{...r}),args:{children:`저장에 실패했습니다.
네트워크 연결을 확인해주세요.`,description:"오류 코드: NET_001",variant:"negative",placement:"bottom-right",showDivider:!0}},i={render:r=>e.jsx(t,{...r}),args:{children:`주의가 필요합니다.
이 작업은 되돌릴 수 없습니다.`,description:"계속하시겠습니까?",variant:"cautionary",placement:"bottom-right",showDivider:!0}},s={render:r=>e.jsx(t,{...r}),args:{children:"아이콘 없는 토스트 메시지입니다.",variant:"default",placement:"bottom-right",showLeadingIcon:!1,showTrailingIcon:!1}},p={render:r=>e.jsx(t,{...r}),args:{children:`정보가 업데이트되었습니다.
새로운 기능을 확인해보세요.`,description:"더 자세한 내용은 설정에서 확인하세요.",variant:"default",placement:"bottom-right",showDivider:!0}},c={render:r=>e.jsx(t,{...r}),args:{children:"왼쪽 상단에 위치한 토스트입니다.",variant:"default",placement:"top-left"}},m={render:r=>e.jsx(t,{...r}),args:{children:"하단 중앙에 위치한 토스트입니다.",variant:"positive",placement:"bottom-center"}};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "기본 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-right"
  }
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,v;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "저장이 완료되었습니다.\\n변경한 내용이 정상적으로 반영되었어요.",
    description: "1 저장 완료, 0 실패",
    variant: "positive",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,b,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "저장에 실패했습니다.\\n네트워크 연결을 확인해주세요.",
    description: "오류 코드: NET_001",
    variant: "negative",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,y,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "주의가 필요합니다.\\n이 작업은 되돌릴 수 없습니다.",
    description: "계속하시겠습니까?",
    variant: "cautionary",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(D=(y=i.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var x,j,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "아이콘 없는 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-right",
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,C,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "정보가 업데이트되었습니다.\\n새로운 기능을 확인해보세요.",
    description: "더 자세한 내용은 설정에서 확인하세요.",
    variant: "default",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var E,N,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "왼쪽 상단에 위치한 토스트입니다.",
    variant: "default",
    placement: "top-left"
  }
}`,...(W=(N=c.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,B,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "하단 중앙에 위치한 토스트입니다.",
    variant: "positive",
    placement: "bottom-center"
  }
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const Cr=["Default","Positive","Negative","Cautionary","WithoutIcons","WithDivider","TopLeft","BottomCenter"];export{m as BottomCenter,i as Cautionary,o as Default,n as Negative,a as Positive,c as TopLeft,p as WithDivider,s as WithoutIcons,Cr as __namedExportsOrder,Sr as default};
