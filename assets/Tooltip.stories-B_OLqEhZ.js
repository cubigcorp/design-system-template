import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{T as e}from"./Tooltip-BE4ppvDj.js";import{S as o}from"./SolidButton-CTctQxeZ.js";import"./iframe-CWj9sbMl.js";import"./index-C-O7jx-P.js";import"./index-6wKIx6lK.js";import"./styled-components.browser.esm-I1_av-H2.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Co8_vjPW.js";const K={title:"Components/Tooltip",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip은 아이콘, 버튼, 텍스트 등 인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 보조적으로 제공하는 컴포넌트입니다."}}},argTypes:{variant:{control:"select",options:["primary","secondary"],description:"툴팁의 스타일 변형을 설정합니다."},placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left","right"],description:"툴팁이 표시되는 위치를 설정합니다."},text:{control:"text",description:"툴팁에 표시될 텍스트입니다."},hotkey:{control:"text",description:"단축키 텍스트입니다."},offset:{control:"number",description:"트리거 요소와 툴팁 사이의 간격(px)입니다."}}},r={render:n=>t.jsx(e,{...n,children:t.jsx(o,{children:"Hover me"})}),args:{text:"Tooltip text",variant:"primary",placement:"top-center"}},i={render:n=>t.jsx(e,{...n,children:t.jsx(o,{children:"Hover me"})}),args:{text:"Tooltip text",variant:"secondary",placement:"top-center"}},p={render:n=>t.jsx(e,{...n,children:t.jsx(o,{children:"Hover me"})}),args:{text:"Tooltip text",hotkey:"⌘V",variant:"primary",placement:"top-center"}},a={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"80px",padding:"100px"},children:[t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(e,{text:"Top Left",placement:"top-left",children:t.jsx(o,{children:"Top Left"})}),t.jsx(e,{text:"Top Center",placement:"top-center",children:t.jsx(o,{children:"Top Center"})}),t.jsx(e,{text:"Top Right",placement:"top-right",children:t.jsx(o,{children:"Top Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"200px"},children:[t.jsx(e,{text:"Left",placement:"left",children:t.jsx(o,{children:"Left"})}),t.jsx(e,{text:"Right",placement:"right",children:t.jsx(o,{children:"Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(e,{text:"Bottom Left",placement:"bottom-left",children:t.jsx(o,{children:"Bottom Left"})}),t.jsx(e,{text:"Bottom Center",placement:"bottom-center",children:t.jsx(o,{children:"Bottom Center"})}),t.jsx(e,{text:"Bottom Right",placement:"bottom-right",children:t.jsx(o,{children:"Bottom Right"})})]})]}),parameters:{docs:{description:{story:"툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right로 설정할 수 있습니다."}}}},l={render:()=>t.jsxs("div",{style:{display:"flex",gap:"40px",padding:"40px"},children:[t.jsx(e,{text:"Primary tooltip",hotkey:"⌘V",variant:"primary",children:t.jsx(o,{children:"Primary"})}),t.jsx(e,{text:"Secondary tooltip",hotkey:"⌘V",variant:"secondary",children:t.jsx(o,{variant:"secondary",children:"Secondary"})})]}),parameters:{docs:{description:{story:"Primary는 어두운 배경, Secondary는 밝은 배경과 테두리를 가집니다."}}}};var s,c,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: "Tooltip text",
    variant: "primary",
    placement: "top-center"
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,x,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: "Tooltip text",
    variant: "secondary",
    placement: "top-center"
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,g,u;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: "Tooltip text",
    hotkey: "⌘V",
    variant: "primary",
    placement: "top-center"
  }
}`,...(u=(g=p.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var T,f,S;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "80px",
    padding: "100px"
  }}>
      <div style={{
      display: "flex",
      gap: "40px"
    }}>
        <Tooltip text="Top Left" placement="top-left">
          <SolidButton>Top Left</SolidButton>
        </Tooltip>
        <Tooltip text="Top Center" placement="top-center">
          <SolidButton>Top Center</SolidButton>
        </Tooltip>
        <Tooltip text="Top Right" placement="top-right">
          <SolidButton>Top Right</SolidButton>
        </Tooltip>
      </div>
      <div style={{
      display: "flex",
      gap: "200px"
    }}>
        <Tooltip text="Left" placement="left">
          <SolidButton>Left</SolidButton>
        </Tooltip>
        <Tooltip text="Right" placement="right">
          <SolidButton>Right</SolidButton>
        </Tooltip>
      </div>
      <div style={{
      display: "flex",
      gap: "40px"
    }}>
        <Tooltip text="Bottom Left" placement="bottom-left">
          <SolidButton>Bottom Left</SolidButton>
        </Tooltip>
        <Tooltip text="Bottom Center" placement="bottom-center">
          <SolidButton>Bottom Center</SolidButton>
        </Tooltip>
        <Tooltip text="Bottom Right" placement="bottom-right">
          <SolidButton>Bottom Right</SolidButton>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right로 설정할 수 있습니다."
      }
    }
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var B,v,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "40px",
    padding: "40px"
  }}>
      <Tooltip text="Primary tooltip" hotkey="⌘V" variant="primary">
        <SolidButton>Primary</SolidButton>
      </Tooltip>
      <Tooltip text="Secondary tooltip" hotkey="⌘V" variant="secondary">
        <SolidButton variant="secondary">Secondary</SolidButton>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Primary는 어두운 배경, Secondary는 밝은 배경과 테두리를 가집니다."
      }
    }
  }
}`,...(j=(v=l.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const M=["Primary","Secondary","WithHotkey","Placements","Variants"];export{a as Placements,r as Primary,i as Secondary,l as Variants,p as WithHotkey,M as __namedExportsOrder,K as default};
