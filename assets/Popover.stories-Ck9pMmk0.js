import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r}from"./Popover-BHXcheu3.js";import"./textColor-D82lXQsc.js";import"./iframe-IMsG1Fm-.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./fontSize-BFAJJ5Eh.js";import"./lineHeight-aJXO3HIm.js";const ee={title:"Components/Popover",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"팝오버(Popover)는 버튼, 아이콘, 텍스트 등 특정 인터페이스 요소와 관련된 추가 정보나 액션을 보조적으로 제공하는 컴포넌트입니다. direction은 화살표가 Popover의 어느 위치에 있는지를 나타냅니다."}}},argTypes:{direction:{control:{type:"select"},options:["TopCenter","TopRight","TopLeft","BottomCenter","BottomRight","BottomLeft","Right","Left"],description:"화살표의 위치 (Popover 자체의 위치가 아님)"},text:{control:{type:"text"}},hotkey:{control:{type:"text"}}}},n={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"BottomCenter",text:"Guide text"}},o={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"BottomCenter",text:"선택 항목 A",hotkey:"⌘A"}},s={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"TopCenter",text:"Guide text"}},i={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"TopRight",text:"Guide text"}},d={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"TopLeft",text:"Guide text"}},a={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"BottomRight",text:"Guide text"}},p={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"BottomLeft",text:"Guide text"}},c={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"Right",text:"Guide text"}},g={render:t=>e.jsx("div",{style:{padding:"100px"},children:e.jsx(r,{...t})}),args:{direction:"Left",text:"Guide text"}},x={parameters:{controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"60px",padding:"40px"},children:["TopCenter","TopRight","TopLeft","BottomCenter","BottomRight","BottomLeft","Right","Left"].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[e.jsx("h3",{style:{fontSize:"14px",fontWeight:"600"},children:t}),e.jsx(r,{direction:t,text:"Guide text"})]},t))})};var m,l,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "BottomCenter",
    text: "Guide text"
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var v,h,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "BottomCenter",
    text: "선택 항목 A",
    hotkey: "⌘A"
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,j,T;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "TopCenter",
    text: "Guide text"
  }
}`,...(T=(j=s.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var R,B,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "TopRight",
    text: "Guide text"
  }
}`,...(L=(B=i.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var G,P,C;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "TopLeft",
    text: "Guide text"
  }
}`,...(C=(P=d.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var S,k,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "BottomRight",
    text: "Guide text"
  }
}`,...(A=(k=a.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var D,W,b;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "BottomLeft",
    text: "Guide text"
  }
}`,...(b=(W=p.parameters)==null?void 0:W.docs)==null?void 0:b.source}}};var z,E,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "Right",
    text: "Guide text"
  }
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var I,_,O;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "100px"
  }}>
      <Popover {...args} />
    </div>,
  args: {
    direction: "Left",
    text: "Guide text"
  }
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var q,w,F;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "60px",
    padding: "40px"
  }}>
      {["TopCenter", "TopRight", "TopLeft", "BottomCenter", "BottomRight", "BottomLeft", "Right", "Left"].map(direction => <div key={direction} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px"
    }}>
          <h3 style={{
        fontSize: "14px",
        fontWeight: "600"
      }}>{direction}</h3>
          <Popover direction={direction as PopoverProps["direction"]} text="Guide text" />
        </div>)}
    </div>
}`,...(F=(w=x.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};const te=["Default","WithHotkey","TopCenter","TopRight","TopLeft","BottomRight","BottomLeft","Right","Left","AllDirections"];export{x as AllDirections,p as BottomLeft,a as BottomRight,n as Default,g as Left,c as Right,s as TopCenter,d as TopLeft,i as TopRight,o as WithHotkey,te as __namedExportsOrder,ee as default};
