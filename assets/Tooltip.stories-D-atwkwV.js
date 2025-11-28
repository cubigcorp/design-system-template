import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-DqVVvM-u.js";import{d as m,l as i,m as W}from"./styled-components.browser.esm-BYbGDw5M.js";import{c as u}from"./color-CiwAFuFb.js";import{t as g}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as X}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as q}from"./typography-RVdj8V17.js";import{r as Y}from"./radius-DaoU83SK.js";import{s as x}from"./spacing-tE1IiUFl.js";import{S as r}from"./SolidButton-NlEjgh2w.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";import"./Spinner-DHoirSy7.js";const z=W`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,o=({children:e,text:n,hotkey:h,variant:d="primary",placement:w="bottom-left",offset:E=4,className:I})=>{const[M,y]=D.useState(!1),_=()=>{y(!0)},N=()=>{y(!1)};return t.jsxs(O,{onMouseEnter:_,onMouseLeave:N,className:I,children:[e,M&&t.jsxs(F,{$variant:d,$placement:w,$offset:E,children:[t.jsx(G,{$variant:d,children:n}),h&&t.jsx(J,{$variant:d,children:h})]})]})},O=m.div`
  position: relative;
  display: inline-flex;
`,A=(e,n)=>{switch(e){case"top-left":return i`
        bottom: 100%;
        left: 0;
        margin-bottom: ${n}px;
      `;case"top-center":return i`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: ${n}px;
      `;case"top-right":return i`
        bottom: 100%;
        right: 0;
        margin-bottom: ${n}px;
      `;case"bottom-left":return i`
        top: 100%;
        left: 0;
        margin-top: ${n}px;
      `;case"bottom-center":return i`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: ${n}px;
      `;case"bottom-right":return i`
        top: 100%;
        right: 0;
        margin-top: ${n}px;
      `;case"left":return i`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-right: ${n}px;
      `;case"right":return i`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: ${n}px;
      `}},F=m.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${x.gap["gap-1.5"]};
  padding: ${x.gap["gap-1"]} ${x.gap["gap-2"]};
  border-radius: ${Y["rounded-1.5"]};
  white-space: nowrap;
  z-index: 1000;
  animation: ${z} 0.15s ease-in-out;

  ${({$placement:e,$offset:n})=>A(e,n)}

  ${({$variant:e})=>e==="primary"?i`
          background-color: ${u.gray[990]};
          border: none;
        `:i`
          background-color: ${u.common[100]};
          border: 1px solid ${X.light["color-border-primary"]};
        `}
`,G=m.span`
  ${q(void 0,"body2","medium")}
  color: ${({$variant:e})=>e==="primary"?u.common[100]:g.light["fg-neutral-primary"]};
`,J=m.span`
  ${q(void 0,"body2","medium")}
  color: ${({$variant:e})=>e==="primary"?g.light["fg-neutral-assistive"]:g.light["fg-neutral-assistive"]};
`;o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"
| "left"
| "right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom-left"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const gt={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip은 아이콘, 버튼, 텍스트 등 인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 보조적으로 제공하는 컴포넌트입니다."}}},argTypes:{variant:{control:"select",options:["primary","secondary"],description:"툴팁의 스타일 변형을 설정합니다."},placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left","right"],description:"툴팁이 표시되는 위치를 설정합니다."},text:{control:"text",description:"툴팁에 표시될 텍스트입니다."},hotkey:{control:"text",description:"단축키 텍스트입니다."},offset:{control:"number",description:"트리거 요소와 툴팁 사이의 간격(px)입니다."}}},a={render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"Hover me"})}),args:{text:"Tooltip text",variant:"primary",placement:"top-center"}},l={render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"Hover me"})}),args:{text:"Tooltip text",variant:"secondary",placement:"top-center"}},p={render:e=>t.jsx(o,{...e,children:t.jsx(r,{children:"Hover me"})}),args:{text:"Tooltip text",hotkey:"⌘V",variant:"primary",placement:"top-center"}},s={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"80px",padding:"100px"},children:[t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(o,{text:"Top Left",placement:"top-left",children:t.jsx(r,{children:"Top Left"})}),t.jsx(o,{text:"Top Center",placement:"top-center",children:t.jsx(r,{children:"Top Center"})}),t.jsx(o,{text:"Top Right",placement:"top-right",children:t.jsx(r,{children:"Top Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"200px"},children:[t.jsx(o,{text:"Left",placement:"left",children:t.jsx(r,{children:"Left"})}),t.jsx(o,{text:"Right",placement:"right",children:t.jsx(r,{children:"Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(o,{text:"Bottom Left",placement:"bottom-left",children:t.jsx(r,{children:"Bottom Left"})}),t.jsx(o,{text:"Bottom Center",placement:"bottom-center",children:t.jsx(r,{children:"Bottom Center"})}),t.jsx(o,{text:"Bottom Right",placement:"bottom-right",children:t.jsx(r,{children:"Bottom Right"})})]})]}),parameters:{docs:{description:{story:"툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right로 설정할 수 있습니다."}}}},c={render:()=>t.jsxs("div",{style:{display:"flex",gap:"40px",padding:"40px"},children:[t.jsx(o,{text:"Primary tooltip",hotkey:"⌘V",variant:"primary",children:t.jsx(r,{children:"Primary"})}),t.jsx(o,{text:"Secondary tooltip",hotkey:"⌘V",variant:"secondary",children:t.jsx(r,{variant:"secondary",children:"Secondary"})})]}),parameters:{docs:{description:{story:"Primary는 어두운 배경, Secondary는 밝은 배경과 테두리를 가집니다."}}}};var f,v,T;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: "Tooltip text",
    variant: "primary",
    placement: "top-center"
  }
}`,...(T=(v=a.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var b,S,B;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: "Tooltip text",
    variant: "secondary",
    placement: "top-center"
  }
}`,...(B=(S=l.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,$,L;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: "Tooltip text",
    hotkey: "⌘V",
    variant: "primary",
    placement: "top-center"
  }
}`,...(L=($=p.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var R,C,V;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(V=(C=s.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var k,P,H;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(H=(P=c.parameters)==null?void 0:P.docs)==null?void 0:H.source}}};const ht=["Primary","Secondary","WithHotkey","Placements","Variants"];export{s as Placements,a as Primary,l as Secondary,c as Variants,p as WithHotkey,ht as __namedExportsOrder,gt as default};
