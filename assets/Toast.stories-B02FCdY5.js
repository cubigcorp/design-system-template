import{j as r}from"./jsx-runtime-DORK9biX.js";import"./TextButton-CbtlQBR3.js";import"./IconButton-BAHIx95P.js";import"./Badge-DTgm8erc.js";import"./Chip-Bvz8ALPi.js";import{b as t}from"./Toast-58DM0VbY.js";import"./iframe-Drh7vK1U.js";import"./styled-components.browser.esm-Cr-any12.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CIFvj1Zx.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-BLDI0FEN.js";import"./IconClose-CNP3TcGH.js";import"./shadow-DVq_1U2q.js";const te={title:"Components/Toast",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary"]},placement:{control:{type:"select"},options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},offset:{control:{type:"number"}},showLeadingIcon:{control:{type:"boolean"}},showTrailingIcon:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}}}},n={render:e=>r.jsx("div",{style:{position:"relative",height:"200px",padding:"20px"},children:r.jsx(t,{...e})}),args:{children:"기본 토스트 메시지입니다.",variant:"default",placement:"bottom-center"}},o={render:e=>r.jsx("div",{style:{position:"relative",height:"200px",padding:"20px"},children:r.jsx(t,{...e})}),args:{children:`저장이 완료되었습니다.
변경한 내용이 정상적으로 반영되었어요.`,description:"1 저장 완료, 0 실패",variant:"positive",placement:"bottom-center",showDivider:!0}},a={render:e=>r.jsx(t,{...e}),args:{children:`저장에 실패했습니다.
네트워크 연결을 확인해주세요.`,description:"오류 코드: NET_001",variant:"negative",placement:"bottom-center",showDivider:!0}},s={render:e=>r.jsx(t,{...e}),args:{children:`주의가 필요합니다.
이 작업은 되돌릴 수 없습니다.`,description:"계속하시겠습니까?",variant:"cautionary",placement:"bottom-center",showDivider:!0}},i={render:e=>r.jsx(t,{...e}),args:{children:"아이콘 없는 토스트 메시지입니다.",variant:"default",placement:"bottom-center",showLeadingIcon:!1,showTrailingIcon:!1}},c={render:e=>r.jsx(t,{...e}),args:{children:`정보가 업데이트되었습니다.
새로운 기능을 확인해보세요.`,description:"더 자세한 내용은 설정에서 확인하세요.",variant:"default",placement:"bottom-center",showDivider:!0}},p={render:e=>r.jsx(t,{...e}),args:{children:"왼쪽 상단에 위치한 토스트입니다.",variant:"default",placement:"bottom-center"}},d={render:e=>r.jsx(t,{...e}),args:{children:"하단 중앙에 위치한 토스트입니다.",variant:"positive",placement:"bottom-center"}};var m,l,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    position: "relative",
    height: "200px",
    padding: "20px"
  }}>
            <Toast {...args} />
        </div>,
  args: {
    children: "기본 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-center"
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,v,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    position: "relative",
    height: "200px",
    padding: "20px"
  }}>
            <Toast {...args} />
        </div>,
  args: {
    children: "저장이 완료되었습니다.\\n변경한 내용이 정상적으로 반영되었어요.",
    description: "1 저장 완료, 0 실패",
    variant: "positive",
    placement: "bottom-center",
    showDivider: true
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,b,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "저장에 실패했습니다.\\n네트워크 연결을 확인해주세요.",
    description: "오류 코드: NET_001",
    variant: "negative",
    placement: "bottom-center",
    showDivider: true
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var T,y,w;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "주의가 필요합니다.\\n이 작업은 되돌릴 수 없습니다.",
    description: "계속하시겠습니까?",
    variant: "cautionary",
    placement: "bottom-center",
    showDivider: true
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var D,j,I;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "아이콘 없는 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-center",
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(I=(j=i.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,C,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "정보가 업데이트되었습니다.\\n새로운 기능을 확인해보세요.",
    description: "더 자세한 내용은 설정에서 확인하세요.",
    variant: "default",
    placement: "bottom-center",
    showDivider: true
  }
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var E,N,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "왼쪽 상단에 위치한 토스트입니다.",
    variant: "default",
    placement: "bottom-center"
  }
}`,...(W=(N=p.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var _,B,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "하단 중앙에 위치한 토스트입니다.",
    variant: "positive",
    placement: "bottom-center"
  }
}`,...(P=(B=d.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ne=["Default","Positive","Negative","Cautionary","WithoutIcons","WithDivider","TopLeft","BottomCenter"];export{d as BottomCenter,s as Cautionary,n as Default,a as Negative,o as Positive,p as TopLeft,c as WithDivider,i as WithoutIcons,ne as __namedExportsOrder,te as default};
