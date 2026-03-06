import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as $,s as i}from"./styled-components.browser.esm-o0t8qbnT.js";import{c as s}from"./color-CiwAFuFb.js";import{f as M}from"./fontSize-BFAJJ5Eh.js";import{f as Q}from"./fontWeight-CRwBdwgF.js";import{l as U,a as Z}from"./lineHeight-aJXO3HIm.js";import{r as oe}from"./radius-DaoU83SK.js";import{s as a}from"./spacing-tE1IiUFl.js";import{t as ne}from"./textColor-DLZeZODc.js";import"./iframe-D0ynm1mK.js";import"./preload-helper-eJNa_G2e.js";const r=12,o=6,se=$.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: ${a.gap["gap-1.5"]};
  padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
  background-color: ${s.gray[990]};
  border-radius: ${oe["rounded-1.5"]};
  white-space: nowrap;
  width: fit-content;
  font-family: inherit;
`,ie=$.span`
  color: ${s.common[100]};
  font-size: ${M.t4[0]};
  font-weight: ${Q[500]};
  line-height: ${U.t4[0]};
  letter-spacing: ${Z.md};
`,ae=$.span`
  color: ${ne.light["fg-neutral-assistive"]};
  font-size: ${M.t4[0]};
  font-weight: ${Q[500]};
  line-height: ${U.t4[0]};
  letter-spacing: ${Z.md};
`,de=$.div`
  position: absolute;
  width: 0;
  height: 0;

  ${({$direction:t})=>{switch(t){case"TopCenter":return i`
          top: -${o}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-bottom: ${o}px solid ${s.gray[990]};
        `;case"TopRight":return i`
          top: -${o}px;
          right: ${a.gap["gap-2"]};
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-bottom: ${o}px solid ${s.gray[990]};
        `;case"TopLeft":return i`
          top: -${o}px;
          left: ${a.gap["gap-2"]};
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-bottom: ${o}px solid ${s.gray[990]};
        `;case"BottomCenter":return i`
          bottom: -${o}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-top: ${o}px solid ${s.gray[990]};
        `;case"BottomRight":return i`
          bottom: -${o}px;
          right: ${a.gap["gap-2"]};
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-top: ${o}px solid ${s.gray[990]};
        `;case"BottomLeft":return i`
          bottom: -${o}px;
          left: ${a.gap["gap-2"]};
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-top: ${o}px solid ${s.gray[990]};
        `;case"Right":return i`
          right: -${o}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${r/2}px solid transparent;
          border-bottom: ${r/2}px solid transparent;
          border-left: ${o}px solid ${s.gray[990]};
        `;case"Left":return i`
          left: -${o}px;
          top: 50%;
          transform: translateY(-50%);
          border-top: ${r/2}px solid transparent;
          border-bottom: ${r/2}px solid transparent;
          border-right: ${o}px solid ${s.gray[990]};
        `;default:return i`
          bottom: -${o}px;
          left: 50%;
          transform: translateX(-50%);
          border-left: ${r/2}px solid transparent;
          border-right: ${r/2}px solid transparent;
          border-top: ${o}px solid ${s.gray[990]};
        `}}}
`,n=({direction:t="BottomCenter",text:ee,hotkey:v,children:te,className:re})=>e.jsxs(se,{className:re,children:[e.jsx(ie,{children:te||ee}),v&&e.jsx(ae,{children:v}),e.jsx(de,{$direction:t})]});n.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{direction:{required:!1,tsType:{name:"union",raw:`| 'TopCenter'
| 'TopRight'
| 'TopLeft'
| 'BottomCenter'
| 'BottomRight'
| 'BottomLeft'
| 'Right'
| 'Left'`,elements:[{name:"literal",value:"'TopCenter'"},{name:"literal",value:"'TopRight'"},{name:"literal",value:"'TopLeft'"},{name:"literal",value:"'BottomCenter'"},{name:"literal",value:"'BottomRight'"},{name:"literal",value:"'BottomLeft'"},{name:"literal",value:"'Right'"},{name:"literal",value:"'Left'"}]},description:"",defaultValue:{value:"'BottomCenter'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},hotkey:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ye={title:"Components/Popover",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"팝오버(Popover)는 버튼, 아이콘, 텍스트 등 특정 인터페이스 요소와 관련된 추가 정보나 액션을 보조적으로 제공하는 컴포넌트입니다. direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다."}}},argTypes:{direction:{control:{type:"select"},options:["TopCenter","TopRight","TopLeft","BottomCenter","BottomRight","BottomLeft","Right","Left"],description:"화살표의 위치 (Popover 자체의 위치가 아님)"},text:{control:{type:"text"}},hotkey:{control:{type:"text"}}}},d={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"BottomCenter",text:"Guide text"}},p={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"BottomCenter",text:"선택 항목 A",hotkey:"⌘A"}},l={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"TopCenter",text:"Guide text"}},c={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"TopRight",text:"Guide text"}},g={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"TopLeft",text:"Guide text"}},m={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"BottomRight",text:"Guide text"}},x={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"BottomLeft",text:"Guide text"}},u={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"Right",text:"Guide text"}},f={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(n,{...t})}),args:{direction:"Left",text:"Guide text"}},h={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"60px",padding:"40px"},children:["TopCenter","TopRight","TopLeft","BottomCenter","BottomRight","BottomLeft","Right","Left"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"600"},children:t}),e.jsx(n,{direction:t,text:"Guide text"})]},t))})};var y,T,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'BottomCenter',
    text: 'Guide text'
  }
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var R,B,L;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'BottomCenter',
    text: '선택 항목 A',
    hotkey: '⌘A'
  }
}`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var j,C,P;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'TopCenter',
    text: 'Guide text'
  }
}`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var G,S,w;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'TopRight',
    text: 'Guide text'
  }
}`,...(w=(S=c.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var k,D,H;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'TopLeft',
    text: 'Guide text'
  }
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var I,A,N;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'BottomRight',
    text: 'Guide text'
  }
}`,...(N=(A=m.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var W,_,q;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'BottomLeft',
    text: 'Guide text'
  }
}`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var z,E,O;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'Right',
    text: 'Guide text'
  }
}`,...(O=(E=u.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var X,Y,V;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: '100px'
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: 'Left',
    text: 'Guide text'
  }
}`,...(V=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};var F,J,K;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '60px',
    padding: '40px'
  }}>
      {['TopCenter', 'TopRight', 'TopLeft', 'BottomCenter', 'BottomRight', 'BottomLeft', 'Right', 'Left'].map(direction => <div key={direction} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px'
    }}>
          <h3 style={{
        fontSize: '14px',
        fontWeight: '600'
      }}>{direction}</h3>
          <Popover direction={direction as PopoverProps['direction']} text='Guide text' />
        </div>)}
    </div>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Te=["Default","WithHotkey","TopCenter","TopRight","TopLeft","BottomRight","BottomLeft","Right","Left","AllDirections"];export{h as AllDirections,x as BottomLeft,m as BottomRight,d as Default,f as Left,u as Right,l as TopCenter,g as TopLeft,c as TopRight,p as WithHotkey,Te as __namedExportsOrder,ye as default};
