import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as p,O as $}from"./SolidButton-Dkd1ZORW.js";import{r as c}from"./iframe-CLsoOqCU.js";import{r as F}from"./index-S7qlkCct.js";import{c as y,s as z,p as W}from"./styled-components.browser.esm-Cjeww7bt.js";import{b as _}from"./borderColor-CzkI5wcR.js";import{c as b}from"./color-m2U5piog.js";import{r as N}from"./radius-DaoU83SK.js";import{s as v}from"./spacing-tE1IiUFl.js";import{t as j}from"./textColor-G8dwupNW.js";import{t as O}from"./typography-CHdGJV44.js";import"./brandColor-Bb8P60S1.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./negativeColor-fk0-w6JK.js";import"./types-CbdWBR_P.js";import"./preload-helper-eJNa_G2e.js";import"./index-le3PQTT6.js";import"./lineHeight-aJXO3HIm.js";const L=W`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,i=({children:e,text:h,hotkey:T,variant:g="primary",placement:k="bottom-left",offset:a=4,className:q})=>{const[u,S]=c.useState(!1),[B,D]=c.useState({top:0,left:0}),x=c.useRef(null),f=c.useRef(null),E=()=>{if(!x.current||!f.current)return;const n=x.current.getBoundingClientRect(),r=f.current.getBoundingClientRect();let l=0,s=0;switch(k){case"top-left":l=n.top-r.height-a,s=n.left;break;case"top-center":l=n.top-r.height-a,s=n.left+(n.width-r.width)/2;break;case"top-right":l=n.top-r.height-a,s=n.right-r.width;break;case"bottom-left":l=n.bottom+a,s=n.left;break;case"bottom-center":l=n.bottom+a,s=n.left+(n.width-r.width)/2;break;case"bottom-right":l=n.bottom+a,s=n.right-r.width;break;case"left":l=n.top+(n.height-r.height)/2,s=n.left-r.width-a;break;case"right":l=n.top+(n.height-r.height)/2,s=n.right+a;break}D({top:l,left:s})};c.useEffect(()=>{u&&E()},[u,k,a]);const H=()=>{S(!0)},M=()=>{S(!1)};return t.jsxs(Z,{ref:x,onMouseEnter:H,onMouseLeave:M,className:q,children:[e,u&&F.createPortal(t.jsxs(A,{ref:f,$variant:g,style:{top:B.top,left:B.left},children:[t.jsx(G,{$variant:g,children:h}),T&&t.jsx(J,{$variant:g,children:T})]}),document.body)]})},Z=y.div`
  position: relative;
  display: inline-flex;
`,A=y.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: ${v.gap["gap-1.5"]};
  padding: ${v.gap["gap-1"]} ${v.gap["gap-2"]};
  border-radius: ${N["rounded-1.5"]};
  white-space: nowrap;
  z-index: 9999;
  animation: ${L} 0.15s ease-in-out;
  pointer-events: none;

  ${({$variant:e})=>e==="primary"?z`
          background-color: ${b.gray[990]};
          border: none;
        `:z`
          background-color: ${b.common[100]};
          border: 1px solid ${_.light["color-border-primary"]};
        `}
`,G=y.span`
  ${O(void 0,"body2","medium")}
  color: ${({$variant:e})=>e==="primary"?b.common[100]:j.light["fg-neutral-primary"]};
`,J=y.span`
  ${O(void 0,"body2","medium")}
  color: ${({$variant:e})=>e==="primary"?j.light["fg-neutral-assistive"]:j.light["fg-neutral-assistive"]};
`;i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-left'
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
| 'right-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"}]},description:"",defaultValue:{value:"'bottom-left'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const ht={title:"Components/Feedback/Tooltip",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 제공하는 컴포넌트입니다. Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant를 지원합니다."}}}},o={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},d={parameters:{layout:"centered"},render:e=>t.jsx("div",{style:{padding:100},children:t.jsx(i,{...e,children:t.jsx(p,{children:"Hover me"})})}),args:{text:"Tooltip text",variant:"primary",placement:"top-center"},argTypes:{variant:{control:"select",options:["primary","secondary"]},placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left","right"]},text:{control:"text"},hotkey:{control:"text"},offset:{control:"number"}}},m={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:o.page,children:[t.jsxs("div",{style:o.header,children:[t.jsx("h1",{style:o.title,children:"Tooltip"}),t.jsxs("p",{style:o.desc,children:["Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant, 8가지 placement를 지원합니다.",t.jsx("br",{}),"버튼에 마우스를 올려 각 방향의 Tooltip을 확인하세요."]})]}),t.jsx("p",{style:o.sectionTitle,children:"Variants"}),t.jsx("div",{style:o.card,children:t.jsxs("div",{style:{display:"flex",gap:24,padding:"40px 0"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(i,{text:"Primary tooltip",hotkey:"⌘V",variant:"primary",placement:"top-center",children:t.jsx(p,{children:"Primary"})}),t.jsx("span",{style:o.label,children:"primary (dark bg)"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(i,{text:"Secondary tooltip",hotkey:"⌘V",variant:"secondary",placement:"top-center",children:t.jsx($,{variant:"secondary",children:"Secondary"})}),t.jsx("span",{style:o.label,children:"secondary (light bg)"})]})]})}),t.jsx("p",{style:o.sectionTitle,children:"Placements"}),t.jsx("div",{style:o.card,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:60,padding:"60px 0"},children:[t.jsx("div",{style:{display:"flex",gap:24},children:["top-left","top-center","top-right"].map(e=>t.jsx(i,{text:e,placement:e,children:t.jsx(p,{variant:"secondary",size:"small",children:e})},e))}),t.jsxs("div",{style:{display:"flex",gap:160},children:[t.jsx(i,{text:"left",placement:"left",children:t.jsx(p,{variant:"secondary",size:"small",children:"left"})}),t.jsx(i,{text:"right",placement:"right",children:t.jsx(p,{variant:"secondary",size:"small",children:"right"})})]}),t.jsx("div",{style:{display:"flex",gap:24},children:["bottom-left","bottom-center","bottom-right"].map(e=>t.jsx(i,{text:e,placement:e,children:t.jsx(p,{variant:"secondary",size:"small",children:e})},e))})]})}),t.jsx("p",{style:o.sectionTitle,children:"With Hotkey"}),t.jsx("div",{style:o.card,children:t.jsx("div",{style:{display:"flex",gap:16,padding:"40px 0"},children:[{text:"복사",hotkey:"⌘C"},{text:"붙여넣기",hotkey:"⌘V"},{text:"실행 취소",hotkey:"⌘Z"},{text:"저장",hotkey:"⌘S"}].map(({text:e,hotkey:h})=>t.jsx(i,{text:e,hotkey:h,placement:"top-center",children:t.jsx($,{variant:"secondary",size:"small",children:e})},e))})})]})};var w,P,V;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    padding: 100
  }}>
      <Tooltip {...args}>
        <SolidButton>Hover me</SolidButton>
      </Tooltip>
    </div>,
  args: {
    text: 'Tooltip text',
    variant: 'primary',
    placement: 'top-center'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary']
    },
    placement: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'left', 'right']
    },
    text: {
      control: 'text'
    },
    hotkey: {
      control: 'text'
    },
    offset: {
      control: 'number'
    }
  }
}`,...(V=(P=d.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var R,I,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Tooltip</h1>
        <p style={s.desc}>
          Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant, 8가지 placement를 지원합니다.
          <br />
          버튼에 마우스를 올려 각 방향의 Tooltip을 확인하세요.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        padding: '40px 0'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <Tooltip text='Primary tooltip' hotkey='⌘V' variant='primary' placement='top-center'>
              <SolidButton>Primary</SolidButton>
            </Tooltip>
            <span style={s.label}>primary (dark bg)</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <Tooltip text='Secondary tooltip' hotkey='⌘V' variant='secondary' placement='top-center'>
              <OutlineButton variant='secondary'>Secondary</OutlineButton>
            </Tooltip>
            <span style={s.label}>secondary (light bg)</span>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Placements</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 60,
        padding: '60px 0'
      }}>
          <div style={{
          display: 'flex',
          gap: 24
        }}>
            {(['top-left', 'top-center', 'top-right'] as const).map(placement => <Tooltip key={placement} text={placement} placement={placement}>
                <SolidButton variant='secondary' size='small'>
                  {placement}
                </SolidButton>
              </Tooltip>)}
          </div>
          <div style={{
          display: 'flex',
          gap: 160
        }}>
            <Tooltip text='left' placement='left'>
              <SolidButton variant='secondary' size='small'>
                left
              </SolidButton>
            </Tooltip>
            <Tooltip text='right' placement='right'>
              <SolidButton variant='secondary' size='small'>
                right
              </SolidButton>
            </Tooltip>
          </div>
          <div style={{
          display: 'flex',
          gap: 24
        }}>
            {(['bottom-left', 'bottom-center', 'bottom-right'] as const).map(placement => <Tooltip key={placement} text={placement} placement={placement}>
                <SolidButton variant='secondary' size='small'>
                  {placement}
                </SolidButton>
              </Tooltip>)}
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>With Hotkey</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 16,
        padding: '40px 0'
      }}>
          {[{
          text: '복사',
          hotkey: '⌘C'
        }, {
          text: '붙여넣기',
          hotkey: '⌘V'
        }, {
          text: '실행 취소',
          hotkey: '⌘Z'
        }, {
          text: '저장',
          hotkey: '⌘S'
        }].map(({
          text,
          hotkey
        }) => <Tooltip key={text} text={text} hotkey={hotkey} placement='top-center'>
              <OutlineButton variant='secondary' size='small'>
                {text}
              </OutlineButton>
            </Tooltip>)}
        </div>
      </div>
    </div>
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const gt=["Playground","Overview"];export{m as Overview,d as Playground,gt as __namedExportsOrder,ht as default};
