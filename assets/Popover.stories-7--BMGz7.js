import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as m,s}from"./styled-components.browser.esm-f0aNwSj6.js";import{c as i}from"./color-m2U5piog.js";import{f as v}from"./fontSize-BFAJJ5Eh.js";import{f as b}from"./fontWeight-CRwBdwgF.js";import{l as T,a as B}from"./lineHeight-aJXO3HIm.js";import{r as R}from"./radius-DaoU83SK.js";import{s as a}from"./spacing-tE1IiUFl.js";import{t as k}from"./textColor-G8dwupNW.js";import"./iframe-CCQJzrSR.js";import"./preload-helper-eJNa_G2e.js";const e=12,r=6,L=m.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${a.gap["gap-1.5"]};
  padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
  background-color: ${i.gray[990]};
  border-radius: ${R["rounded-1.5"]};
  white-space: nowrap;
  width: fit-content;
  font-family: inherit;
`,P=m.span`
  color: ${i.common[100]};
  font-size: ${v.t4[0]};
  font-weight: ${b[500]};
  line-height: ${T.t4[0]};
  letter-spacing: ${B.md};
`,S=m.span`
  color: ${k.light["fg-neutral-assistive"]};
  font-size: ${v.t4[0]};
  font-weight: ${b[500]};
  line-height: ${T.t4[0]};
  letter-spacing: ${B.md};
`,w=m.div`
  position: absolute;
  width: 0;
  height: 0;

  ${({$direction:o})=>{switch(o){case"TopCenter":return s`
          top: -${r}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-bottom: ${r}px solid ${i.gray[990]};
        `;case"TopRight":return s`
          top: -${r}px;
          right: ${a.gap["gap-2"]};
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-bottom: ${r}px solid ${i.gray[990]};
        `;case"TopLeft":return s`
          top: -${r}px;
          left: ${a.gap["gap-2"]};
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-bottom: ${r}px solid ${i.gray[990]};
        `;case"BottomCenter":return s`
          bottom: -${r}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-top: ${r}px solid ${i.gray[990]};
        `;case"BottomRight":return s`
          bottom: -${r}px;
          right: ${a.gap["gap-2"]};
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-top: ${r}px solid ${i.gray[990]};
        `;case"BottomLeft":return s`
          bottom: -${r}px;
          left: ${a.gap["gap-2"]};
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-top: ${r}px solid ${i.gray[990]};
        `;case"Right":return s`
          right: -${r}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${e/2}px solid transparent;
          border-bottom: ${e/2}px solid transparent;
          border-left: ${r}px solid ${i.gray[990]};
        `;case"Left":return s`
          left: -${r}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${e/2}px solid transparent;
          border-bottom: ${e/2}px solid transparent;
          border-right: ${r}px solid ${i.gray[990]};
        `;default:return s`
          bottom: -${r}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${e/2}px solid transparent;
          border-right: ${e/2}px solid transparent;
          border-top: ${r}px solid ${i.gray[990]};
        `}}}
`,l=({direction:o="BottomCenter",text:p,hotkey:x,children:j,className:C})=>t.jsxs(L,{className:C,children:[t.jsx(P,{children:j||p}),x&&t.jsx(S,{children:x}),t.jsx(w,{$direction:o})]});l.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{direction:{required:!1,tsType:{name:"union",raw:`| 'TopCenter'
| 'TopRight'
| 'TopLeft'
| 'BottomCenter'
| 'BottomRight'
| 'BottomLeft'
| 'Right'
| 'Left'`,elements:[{name:"literal",value:"'TopCenter'"},{name:"literal",value:"'TopRight'"},{name:"literal",value:"'TopLeft'"},{name:"literal",value:"'BottomCenter'"},{name:"literal",value:"'BottomRight'"},{name:"literal",value:"'BottomLeft'"},{name:"literal",value:"'Right'"},{name:"literal",value:"'Left'"}]},description:"",defaultValue:{value:"'BottomCenter'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Components/Feedback/Popover",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"특정 인터페이스 요소와 관련된 추가 정보나 액션을 보조적으로 제공하는 컴포넌트입니다. direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},d={parameters:{layout:"centered"},render:o=>t.jsx("div",{style:{padding:100},children:t.jsx(l,{...o})}),args:{direction:"BottomCenter",text:"Guide text"},argTypes:{direction:{control:"select",options:["TopCenter","TopRight","TopLeft","BottomCenter","BottomRight","BottomLeft","Right","Left"]},text:{control:"text"},hotkey:{control:"text"}}},c={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:n.page,children:[t.jsxs("div",{style:n.header,children:[t.jsx("h1",{style:n.title,children:"Popover"}),t.jsxs("p",{style:n.desc,children:["8가지 direction으로 화살표 위치를 지정할 수 있으며, hotkey 텍스트도 함께 표시할 수 있습니다.",t.jsx("br",{}),"direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다."]})]}),t.jsx("p",{style:n.sectionTitle,children:"All Directions"}),t.jsx("div",{style:n.card,children:t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"48px 24px",padding:"40px 0"},children:["TopLeft","TopCenter","TopRight","Left","BottomLeft","BottomCenter","BottomRight","Right"].map(o=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16},children:[t.jsx("span",{style:n.label,children:o}),t.jsx(l,{direction:o,text:"Guide text"})]},o))})}),t.jsx("p",{style:n.sectionTitle,children:"With Hotkey"}),t.jsx("div",{style:n.card,children:t.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:[{text:"복사",hotkey:"⌘C"},{text:"붙여넣기",hotkey:"⌘V"},{text:"실행 취소",hotkey:"⌘Z"},{text:"저장",hotkey:"⌘S"}].map(({text:o,hotkey:p})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(l,{direction:"BottomCenter",text:o,hotkey:p}),t.jsx("span",{style:n.label,children:p})]},o))})}),t.jsx("p",{style:n.sectionTitle,children:"Long Text"}),t.jsx("div",{style:n.card,children:t.jsxs("div",{style:{display:"flex",gap:24},children:[t.jsx(l,{direction:"BottomCenter",text:"짧은 텍스트"}),t.jsx(l,{direction:"BottomCenter",text:"여러 줄로 이루어진 긴 안내 텍스트가 들어가는 경우의 팝오버입니다"})]})})]})};var g,f,y;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    padding: 100
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'BottomCenter',
    text: 'Guide text'
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['TopCenter', 'TopRight', 'TopLeft', 'BottomCenter', 'BottomRight', 'BottomLeft', 'Right', 'Left']
    },
    text: {
      control: 'text'
    },
    hotkey: {
      control: 'text'
    }
  }
}`,...(y=(f=d.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,u,$;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Popover</h1>
        <p style={s.desc}>
          8가지 direction으로 화살표 위치를 지정할 수 있으며, hotkey 텍스트도 함께 표시할 수
          있습니다.
          <br />
          direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다.
        </p>
      </div>

      <p style={s.sectionTitle}>All Directions</p>
      <div style={s.card}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '48px 24px',
        padding: '40px 0'
      }}>
          {(['TopLeft', 'TopCenter', 'TopRight', 'Left', 'BottomLeft', 'BottomCenter', 'BottomRight', 'Right'] as const).map(direction => <div key={direction} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={s.label}>{direction}</span>
              <Popover direction={direction as PopoverProps['direction']} text='Guide text' />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>With Hotkey</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
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
        }) => <div key={text} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <Popover direction='BottomCenter' text={text} hotkey={hotkey} />
              <span style={s.label}>{hotkey}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Long Text</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24
      }}>
          <Popover direction='BottomCenter' text='짧은 텍스트' />
          <Popover direction='BottomCenter' text='여러 줄로 이루어진 긴 안내 텍스트가 들어가는 경우의 팝오버입니다' />
        </div>
      </div>
    </div>
}`,...($=(u=c.parameters)==null?void 0:u.docs)==null?void 0:$.source}}};const V=["Playground","Overview"];export{c as Overview,d as Playground,V as __namedExportsOrder,O as default};
