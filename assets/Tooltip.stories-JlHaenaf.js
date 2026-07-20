import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as d,O as z}from"./SolidButton-BApmGIO5.js";import{r as p}from"./iframe-Diu4OQ1h.js";import{r as N}from"./index-BCNg7JgI.js";import{c as x,s as h,p as Z}from"./styled-components.browser.esm-DZloA45Z.js";import{b as A}from"./borderColor-Bua6bgaN.js";import{c as j}from"./color-BUCiRq0z.js";import{r as G}from"./radius-DaoU83SK.js";import{s as T}from"./spacing-tE1IiUFl.js";import{t as k}from"./textColor-mWadn7SX.js";import{t as q}from"./typography-CHdGJV44.js";import"./brandColor-C6bU0fYs.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./negativeColor-PFzGnuZM.js";import"./types-JZURDx2G.js";import"./preload-helper-eJNa_G2e.js";import"./index-Bpka59JO.js";import"./lineHeight-aJXO3HIm.js";const J=Z`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,s=({children:e,text:c,hotkey:S,variant:f="primary",placement:m="bottom-left",offset:a=4,className:E,maxWidth:D})=>{const[v,w]=p.useState(!1),[B,M]=p.useState({top:0,left:0}),[H,$]=p.useState(!1),y=p.useRef(null),b=p.useRef(null),F=()=>{if(!y.current||!b.current)return;const n=(y.current.firstElementChild??y.current).getBoundingClientRect(),o=b.current.getBoundingClientRect();let l=0,i=0;switch(m){case"top-left":l=n.top-o.height-a,i=n.left;break;case"top-center":l=n.top-o.height-a,i=n.left+(n.width-o.width)/2;break;case"top-right":l=n.top-o.height-a,i=n.right-o.width;break;case"bottom-left":l=n.bottom+a,i=n.left;break;case"bottom-center":l=n.bottom+a,i=n.left+(n.width-o.width)/2;break;case"bottom-right":l=n.bottom+a,i=n.right-o.width;break;case"left":l=n.top+(n.height-o.height)/2,i=n.left-o.width-a;break;case"right":l=n.top+(n.height-o.height)/2,i=n.right+a;break;default:l=n.bottom+a,i=n.left+(n.width-o.width)/2}if(m!=="left"&&m!=="right"){const P=window.innerWidth;i<8&&(i=8),i+o.width>P-8&&(i=Math.max(8,P-o.width-8))}M({top:l,left:i}),$(!0)};p.useLayoutEffect(()=>{v&&F()},[v,m,a]);const _=()=>{w(!0)},L=()=>{w(!1),$(!1)};return c?t.jsxs(K,{ref:y,onMouseEnter:_,onMouseLeave:L,className:E,children:[e,v&&N.createPortal(t.jsxs(Q,{ref:b,$variant:f,$maxWidth:D,style:{top:B.top,left:B.left,visibility:H?"visible":"hidden"},children:[t.jsx(U,{$variant:f,children:c}),S&&t.jsx(X,{$variant:f,children:S})]}),document.body)]}):e},K=x.div`
  position: relative;
  display: inline-flex;
  align-items: flex-start;
`,Q=x.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: ${T.gap["gap-1.5"]};
  padding: ${T.gap["gap-1"]} ${T.gap["gap-2"]};
  border-radius: ${G["rounded-1.5"]};
  /* maxWidth 지정 시 다중행 — '\n' 으로 명시 줄바꿈 + 자동 wrap. 한글 word-break 보호. */
  ${({$maxWidth:e})=>e?h`
          white-space: pre-line;
          max-width: ${e}px;
          word-break: break-word;
        `:h`
          white-space: nowrap;
        `}
  z-index: 9999;
  animation: ${J} 0.15s ease-in-out;
  pointer-events: none;

  ${({$variant:e})=>e==="primary"?h`
          background-color: ${j.gray[990]};
          border: none;
        `:h`
          background-color: ${j.common[100]};
          border: 1px solid ${A.light["color-border-primary"]};
        `}
`,U=x.span`
  ${q(void 0,"body2","medium")}
  color: ${({$variant:e})=>e==="primary"?j.common[100]:k.light["fg-neutral-primary"]};
`,X=x.span`
  ${q(void 0,"body2","medium")}
  color: ${({$variant:e})=>e==="primary"?k.light["fg-neutral-assistive"]:k.light["fg-neutral-assistive"]};
`;s.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-left'
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
| 'right-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"}]},description:"",defaultValue:{value:"'bottom-left'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},maxWidth:{required:!1,tsType:{name:"number"},description:"다중행 텍스트 지원. 지정 시 white-space 가 `pre-line` 으로 바뀌어 텍스트 내 `\\n`\n으로 줄바꿈, max-width 로 자동 wrap 됨. 미지정 시 기존 동작(nowrap) 유지."}}};const bt={title:"Components/Feedback/Tooltip",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"인터페이스 요소에 마우스를 오버하거나 포커스했을 때 간결한 정보를 제공하는 컴포넌트입니다. Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant를 지원합니다."}}}},r={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},g={parameters:{layout:"centered"},render:e=>t.jsx("div",{style:{padding:100},children:t.jsx(s,{...e,children:t.jsx(d,{children:"Hover me"})})}),args:{text:"Tooltip text",variant:"primary",placement:"top-center"},argTypes:{variant:{control:"select",options:["primary","secondary"]},placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left","right"]},text:{control:"text"},hotkey:{control:"text"},offset:{control:"number"}}},u={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:r.page,children:[t.jsxs("div",{style:r.header,children:[t.jsx("h1",{style:r.title,children:"Tooltip"}),t.jsxs("p",{style:r.desc,children:["Primary(어두운 배경)와 Secondary(밝은 배경) 2가지 variant, 8가지 placement를 지원합니다.",t.jsx("br",{}),"버튼에 마우스를 올려 각 방향의 Tooltip을 확인하세요."]})]}),t.jsx("p",{style:r.sectionTitle,children:"Variants"}),t.jsx("div",{style:r.card,children:t.jsxs("div",{style:{display:"flex",gap:24,padding:"40px 0"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(s,{text:"Primary tooltip",hotkey:"⌘V",variant:"primary",placement:"top-center",children:t.jsx(d,{children:"Primary"})}),t.jsx("span",{style:r.label,children:"primary (dark bg)"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(s,{text:"Secondary tooltip",hotkey:"⌘V",variant:"secondary",placement:"top-center",children:t.jsx(z,{variant:"secondary",children:"Secondary"})}),t.jsx("span",{style:r.label,children:"secondary (light bg)"})]})]})}),t.jsx("p",{style:r.sectionTitle,children:"Placements"}),t.jsx("div",{style:r.card,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:60,padding:"60px 0"},children:[t.jsx("div",{style:{display:"flex",gap:24},children:["top-left","top-center","top-right"].map(e=>t.jsx(s,{text:e,placement:e,children:t.jsx(d,{variant:"secondary",size:"small",children:e})},e))}),t.jsxs("div",{style:{display:"flex",gap:160},children:[t.jsx(s,{text:"left",placement:"left",children:t.jsx(d,{variant:"secondary",size:"small",children:"left"})}),t.jsx(s,{text:"right",placement:"right",children:t.jsx(d,{variant:"secondary",size:"small",children:"right"})})]}),t.jsx("div",{style:{display:"flex",gap:24},children:["bottom-left","bottom-center","bottom-right"].map(e=>t.jsx(s,{text:e,placement:e,children:t.jsx(d,{variant:"secondary",size:"small",children:e})},e))})]})}),t.jsx("p",{style:r.sectionTitle,children:"With Hotkey"}),t.jsx("div",{style:r.card,children:t.jsx("div",{style:{display:"flex",gap:16,padding:"40px 0"},children:[{text:"복사",hotkey:"⌘C"},{text:"붙여넣기",hotkey:"⌘V"},{text:"실행 취소",hotkey:"⌘Z"},{text:"저장",hotkey:"⌘S"}].map(({text:e,hotkey:c})=>t.jsx(s,{text:e,hotkey:c,placement:"top-center",children:t.jsx(z,{variant:"secondary",size:"small",children:e})},e))})})]})};var V,I,R;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var C,O,W;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(W=(O=u.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const Tt=["Playground","Overview"];export{u as Overview,g as Playground,Tt as __namedExportsOrder,bt as default};
