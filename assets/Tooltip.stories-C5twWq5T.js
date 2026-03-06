import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./SolidButton-gIYCXWta.js";import{r as p}from"./iframe-D0ynm1mK.js";import{r as U}from"./index-CGNkv1wM.js";import{c as g,s as $,p as X}from"./styled-components.browser.esm-o0t8qbnT.js";import{b as Y}from"./borderColor-C_RHITEf.js";import{c as b}from"./color-CiwAFuFb.js";import{r as Z}from"./radius-DaoU83SK.js";import{s as T}from"./spacing-tE1IiUFl.js";import{t as S}from"./textColor-DLZeZODc.js";import{t as O}from"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./types-D8y_ICtu.js";import"./preload-helper-eJNa_G2e.js";import"./index-C3v1QmE8.js";import"./lineHeight-aJXO3HIm.js";const tt=X`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,o=({children:r,text:A,hotkey:B,variant:x="primary",placement:j="bottom-left",offset:a=4,className:F})=>{const[f,R]=p.useState(!1),[k,G]=p.useState({top:0,left:0}),y=p.useRef(null),v=p.useRef(null),J=()=>{if(!y.current||!v.current)return;const e=y.current.getBoundingClientRect(),i=v.current.getBoundingClientRect();let l=0,s=0;switch(j){case"top-left":l=e.top-i.height-a,s=e.left;break;case"top-center":l=e.top-i.height-a,s=e.left+(e.width-i.width)/2;break;case"top-right":l=e.top-i.height-a,s=e.right-i.width;break;case"bottom-left":l=e.bottom+a,s=e.left;break;case"bottom-center":l=e.bottom+a,s=e.left+(e.width-i.width)/2;break;case"bottom-right":l=e.bottom+a,s=e.right-i.width;break;case"left":l=e.top+(e.height-i.height)/2,s=e.left-i.width-a;break;case"right":l=e.top+(e.height-i.height)/2,s=e.right+a;break}G({top:l,left:s})};p.useEffect(()=>{f&&J()},[f,j,a]);const K=()=>{R(!0)},Q=()=>{R(!1)};return t.jsxs(et,{ref:y,onMouseEnter:K,onMouseLeave:Q,className:F,children:[r,f&&U.createPortal(t.jsxs(ot,{ref:v,$variant:x,style:{top:k.top,left:k.left},children:[t.jsx(rt,{$variant:x,children:A}),B&&t.jsx(nt,{$variant:x,children:B})]}),document.body)]})},et=g.div`
  position: relative;
  display: inline-flex;
`,ot=g.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: ${T.gap["gap-1.5"]};
  padding: ${T.gap["gap-1"]} ${T.gap["gap-2"]};
  border-radius: ${Z["rounded-1.5"]};
  white-space: nowrap;
  z-index: 9999;
  animation: ${tt} 0.15s ease-in-out;
  pointer-events: none;

  ${({$variant:r})=>r==="primary"?$`
          background-color: ${b.gray[990]};
          border: none;
        `:$`
          background-color: ${b.common[100]};
          border: 1px solid ${Y.light["color-border-primary"]};
        `}
`,rt=g.span`
  ${O(void 0,"body2","medium")}
  color: ${({$variant:r})=>r==="primary"?b.common[100]:S.light["fg-neutral-primary"]};
`,nt=g.span`
  ${O(void 0,"body2","medium")}
  color: ${({$variant:r})=>r==="primary"?S.light["fg-neutral-assistive"]:S.light["fg-neutral-assistive"]};
`;o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'
| 'left'
| 'left-top'
| 'left-center'
| 'left-bottom'
| 'right'
| 'right-top'
| 'right-center'
| 'right-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"}]},description:"",defaultValue:{value:"'bottom-left'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const St={title:"Components/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Tooltip은 아이콘, 버튼, 텍스트 등 인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 보조적으로 제공하는 컴포넌트입니다."}}},argTypes:{variant:{control:"select",options:["primary","secondary"],description:"툴팁의 스타일 변형을 설정합니다."},placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left","right"],description:"툴팁이 표시되는 위치를 설정합니다."},text:{control:"text",description:"툴팁에 표시될 텍스트입니다."},hotkey:{control:"text",description:"단축키 텍스트입니다."},offset:{control:"number",description:"트리거 요소와 툴팁 사이의 간격(px)입니다."}}},c={render:r=>t.jsx(o,{...r,children:t.jsx(n,{children:"Hover me"})}),args:{text:"Tooltip text",variant:"primary",placement:"top-center"}},d={render:r=>t.jsx(o,{...r,children:t.jsx(n,{children:"Hover me"})}),args:{text:"Tooltip text",variant:"secondary",placement:"top-center"}},m={render:r=>t.jsx(o,{...r,children:t.jsx(n,{children:"Hover me"})}),args:{text:"Tooltip text",hotkey:"⌘V",variant:"primary",placement:"top-center"}},u={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"80px",padding:"100px"},children:[t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(o,{text:"Top Left",placement:"top-left",children:t.jsx(n,{children:"Top Left"})}),t.jsx(o,{text:"Top Center",placement:"top-center",children:t.jsx(n,{children:"Top Center"})}),t.jsx(o,{text:"Top Right",placement:"top-right",children:t.jsx(n,{children:"Top Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"200px"},children:[t.jsx(o,{text:"Left",placement:"left",children:t.jsx(n,{children:"Left"})}),t.jsx(o,{text:"Right",placement:"right",children:t.jsx(n,{children:"Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(o,{text:"Bottom Left",placement:"bottom-left",children:t.jsx(n,{children:"Bottom Left"})}),t.jsx(o,{text:"Bottom Center",placement:"bottom-center",children:t.jsx(n,{children:"Bottom Center"})}),t.jsx(o,{text:"Bottom Right",placement:"bottom-right",children:t.jsx(n,{children:"Bottom Right"})})]})]}),parameters:{docs:{description:{story:"툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right로 설정할 수 있습니다."}}}},h={render:()=>t.jsxs("div",{style:{display:"flex",gap:"40px",padding:"40px"},children:[t.jsx(o,{text:"Primary tooltip",hotkey:"⌘V",variant:"primary",children:t.jsx(n,{children:"Primary"})}),t.jsx(o,{text:"Secondary tooltip",hotkey:"⌘V",variant:"secondary",children:t.jsx(n,{variant:"secondary",children:"Secondary"})})]}),parameters:{docs:{description:{story:"Primary는 어두운 배경, Secondary는 밝은 배경과 테두리를 가집니다."}}}};var C,L,P;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: 'Tooltip text',
    variant: 'primary',
    placement: 'top-center'
  }
}`,...(P=(L=c.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var V,w,H;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: 'Tooltip text',
    variant: 'secondary',
    placement: 'top-center'
  }
}`,...(H=(w=d.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var q,E,I;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </Tooltip>,
  args: {
    text: 'Tooltip text',
    hotkey: '⌘V',
    variant: 'primary',
    placement: 'top-center'
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var M,_,D;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '80px',
    padding: '100px'
  }}>
      <div style={{
      display: 'flex',
      gap: '40px'
    }}>
        <Tooltip text='Top Left' placement='top-left'>
          <SolidButton>Top Left</SolidButton>
        </Tooltip>
        <Tooltip text='Top Center' placement='top-center'>
          <SolidButton>Top Center</SolidButton>
        </Tooltip>
        <Tooltip text='Top Right' placement='top-right'>
          <SolidButton>Top Right</SolidButton>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: '200px'
    }}>
        <Tooltip text='Left' placement='left'>
          <SolidButton>Left</SolidButton>
        </Tooltip>
        <Tooltip text='Right' placement='right'>
          <SolidButton>Right</SolidButton>
        </Tooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: '40px'
    }}>
        <Tooltip text='Bottom Left' placement='bottom-left'>
          <SolidButton>Bottom Left</SolidButton>
        </Tooltip>
        <Tooltip text='Bottom Center' placement='bottom-center'>
          <SolidButton>Bottom Center</SolidButton>
        </Tooltip>
        <Tooltip text='Bottom Right' placement='bottom-right'>
          <SolidButton>Bottom Right</SolidButton>
        </Tooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left, right로 설정할 수 있습니다.'
      }
    }
  }
}`,...(D=(_=u.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var N,W,z;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '40px',
    padding: '40px'
  }}>
      <Tooltip text='Primary tooltip' hotkey='⌘V' variant='primary'>
        <SolidButton>Primary</SolidButton>
      </Tooltip>
      <Tooltip text='Secondary tooltip' hotkey='⌘V' variant='secondary'>
        <SolidButton variant='secondary'>Secondary</SolidButton>
      </Tooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Primary는 어두운 배경, Secondary는 밝은 배경과 테두리를 가집니다.'
      }
    }
  }
}`,...(z=(W=h.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};const Bt=["Primary","Secondary","WithHotkey","Placements","Variants"];export{u as Placements,c as Primary,d as Secondary,h as Variants,m as WithHotkey,Bt as __namedExportsOrder,St as default};
