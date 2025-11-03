import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CvEAVhcI.js";import"./IconButton-CdgMVfE0.js";import"./Badge-Bn_fmRgc.js";import"./Chip-BUl9tJ44.js";import"./Switch-me2VvasM.js";import"./Modal-BKkbwdw2.js";import{d as t}from"./Divider-DvibnXYZ.js";import"./iframe-FnhkKGqq.js";import"./RadioButton-CI7cRgyl.js";import"./Checkbox-BvUv7G1_.js";import"./SegmentItem-BMmyZ7Ne.js";import"./Avatar-DHmTNtdl.js";import"./TabItem-Dyk-8-eA.js";import"./ChipTabs-DJGdF7kS.js";import"./Popover-CXR4qvwx.js";import"./StepIndicator-BMTK38RQ.js";import"./Breadcrumbs-lDHoMgTK.js";import"./BreadcrumbItem-C5lTh4_1.js";import"./Pagination-DnsTf0OA.js";import"./Callout-nuo2KaUI.js";import"./textColor-CKN8Eu8b.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-PpAqZlHY.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-DeZn0u6D.js";import"./index-BQ5TM5lW.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-B4T8FMv0.js";import"./icon_more_outline_16-CaFPg3xf.js";import"./icon_chevron-right_outline_16-tl0Vdyaa.js";import"./icon_warning_fill_20-DIOGsS5g.js";const Sr={title:"Components/Toast",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary"]},placement:{control:{type:"select"},options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},offset:{control:{type:"number"}},showLeadingIcon:{control:{type:"boolean"}},showTrailingIcon:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}}}},o={render:r=>e.jsx(t,{...r}),args:{children:"기본 토스트 메시지입니다.",variant:"default",placement:"bottom-right"}},a={render:r=>e.jsx(t,{...r}),args:{children:`저장이 완료되었습니다.
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
