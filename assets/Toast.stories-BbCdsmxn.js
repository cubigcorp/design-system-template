import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CAd2sxX4.js";import"./IconButton-BE_G9b4W.js";import"./Badge-DfgXqUfJ.js";import"./Chip-DzBmF_5h.js";import"./Switch-t5GE3qTK.js";import"./Modal-BM_FYd5I.js";import{c as e}from"./Divider-Cx9XZ3Mz.js";import"./iframe-BzjFrS7f.js";import"./RadioButton-BGrXjNft.js";import"./Checkbox-CGTnvghj.js";import"./SegmentItem-Ux0hyNui.js";import"./Avatar-h89cGKPl.js";import"./TabItem-DjVLBqsA.js";import"./ChipTabs-CqbXXvKW.js";import"./Popover-DIEsijRc.js";import"./StepIndicator-BRzWF2Hu.js";import"./Breadcrumbs-DO9168kg.js";import"./BreadcrumbItem-By8v6BDS.js";import"./textColor-VG1q_E22.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-D27fzZze.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BQBSiVi4.js";import"./IconCheck-CKtc9n1_.js";import"./index-CfmQkq6j.js";import"./index-BNKHZTDG.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-BER81jGv.js";const wr={title:"Components/Toast",component:e,parameters:{layout:"fullscreen",docs:{description:{component:"Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary"]},placement:{control:{type:"select"},options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},offset:{control:{type:"number"}},showLeadingIcon:{control:{type:"boolean"}},showTrailingIcon:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}}}},o={render:r=>t.jsx(e,{...r}),args:{children:"기본 토스트 메시지입니다.",variant:"default",placement:"bottom-right"}},a={render:r=>t.jsx(e,{...r}),args:{children:`저장이 완료되었습니다.
변경한 내용이 정상적으로 반영되었어요.`,description:"1 저장 완료, 0 실패",variant:"positive",placement:"bottom-right",showDivider:!0}},n={render:r=>t.jsx(e,{...r}),args:{children:`저장에 실패했습니다.
네트워크 연결을 확인해주세요.`,description:"오류 코드: NET_001",variant:"negative",placement:"bottom-right",showDivider:!0}},s={render:r=>t.jsx(e,{...r}),args:{children:`주의가 필요합니다.
이 작업은 되돌릴 수 없습니다.`,description:"계속하시겠습니까?",variant:"cautionary",placement:"bottom-right",showDivider:!0}},i={render:r=>t.jsx(e,{...r}),args:{children:"아이콘 없는 토스트 메시지입니다.",variant:"default",placement:"bottom-right",showLeadingIcon:!1,showTrailingIcon:!1}},c={render:r=>t.jsx(e,{...r}),args:{children:`정보가 업데이트되었습니다.
새로운 기능을 확인해보세요.`,description:"더 자세한 내용은 설정에서 확인하세요.",variant:"default",placement:"bottom-right",showDivider:!0}},p={render:r=>t.jsx(e,{...r}),args:{children:"왼쪽 상단에 위치한 토스트입니다.",variant:"default",placement:"top-left"}},m={render:r=>t.jsx(e,{...r}),args:{children:"하단 중앙에 위치한 토스트입니다.",variant:"positive",placement:"bottom-center"}};var d,l,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,y,D;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "주의가 필요합니다.\\n이 작업은 되돌릴 수 없습니다.",
    description: "계속하시겠습니까?",
    variant: "cautionary",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var x,j,I;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "아이콘 없는 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-right",
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,C,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "정보가 업데이트되었습니다.\\n새로운 기능을 확인해보세요.",
    description: "더 자세한 내용은 설정에서 확인하세요.",
    variant: "default",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var E,N,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "왼쪽 상단에 위치한 토스트입니다.",
    variant: "default",
    placement: "top-left"
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,B,P;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "하단 중앙에 위치한 토스트입니다.",
    variant: "positive",
    placement: "bottom-center"
  }
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const yr=["Default","Positive","Negative","Cautionary","WithoutIcons","WithDivider","TopLeft","BottomCenter"];export{m as BottomCenter,s as Cautionary,o as Default,n as Negative,a as Positive,p as TopLeft,c as WithDivider,i as WithoutIcons,yr as __namedExportsOrder,wr as default};
