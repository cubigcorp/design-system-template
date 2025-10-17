import{j as e}from"./jsx-runtime-WsICpuy1.js";import{R as F}from"./iframe-_vL07Yt-.js";import{S as r,a as t}from"./SegmentItem-D-ph45fR.js";import"./styled-components.browser.esm-BDiU6mDK.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./color-DqDZjiGS.js";import"./shadow-DVq_1U2q.js";import"./textColor-SSyLf7rE.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";const L={title:"Components/SegmentedControl",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"세그먼트 컨트롤(Segmented Control)은 여러 개의 선택지를 수평으로 배열된 세그먼트(버튼 형태)로 제공하는 컴포넌트입니다. 사용자는 이 중 하나를 선택하여 현재 상태를 전환하거나, 화면 내 표시되는 콘텐츠를 빠르게 전환할 수 있습니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},s={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{children:"텍스트"}),e.jsx(t,{children:"텍스트"}),e.jsx(t,{children:"텍스트"})]}),args:{defaultValue:0}},m={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{children:"옵션 1"}),e.jsx(t,{children:"옵션 2"})]}),args:{defaultValue:0}},a={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{children:"첫 번째"}),e.jsx(t,{children:"두 번째"}),e.jsx(t,{children:"세 번째"}),e.jsx(t,{children:"네 번째"})]}),args:{defaultValue:0}},o={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{children:"1월"}),e.jsx(t,{children:"2월"}),e.jsx(t,{children:"3월"}),e.jsx(t,{children:"4월"}),e.jsx(t,{children:"5월"}),e.jsx(t,{children:"6월"})]}),args:{defaultValue:0}},d={render:n=>e.jsxs(r,{...n,children:[e.jsx(t,{children:"활성"}),e.jsx(t,{disabled:!0,children:"비활성"}),e.jsx(t,{children:"활성"})]}),args:{defaultValue:0}},l={render:n=>{const[c,E]=F.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(r,{...n,value:c,onChange:E,children:[e.jsx(t,{children:"선택 1"}),e.jsx(t,{children:"선택 2"}),e.jsx(t,{children:"선택 3"})]}),e.jsxs("p",{children:["현재 선택된 인덱스: ",c]})]})},args:{}};var g,i,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <SegmentedControl {...args}>
      <SegmentItem>텍스트</SegmentItem>
      <SegmentItem>텍스트</SegmentItem>
      <SegmentItem>텍스트</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(S=(i=s.parameters)==null?void 0:i.docs)==null?void 0:S.source}}};var u,p,I;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SegmentedControl {...args}>
      <SegmentItem>옵션 1</SegmentItem>
      <SegmentItem>옵션 2</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(I=(p=m.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};var x,h,j;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <SegmentedControl {...args}>
      <SegmentItem>첫 번째</SegmentItem>
      <SegmentItem>두 번째</SegmentItem>
      <SegmentItem>세 번째</SegmentItem>
      <SegmentItem>네 번째</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(j=(h=a.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,C,V;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <SegmentedControl {...args}>
      <SegmentItem>1월</SegmentItem>
      <SegmentItem>2월</SegmentItem>
      <SegmentItem>3월</SegmentItem>
      <SegmentItem>4월</SegmentItem>
      <SegmentItem>5월</SegmentItem>
      <SegmentItem>6월</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(V=(C=o.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var v,D,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SegmentedControl {...args}>
      <SegmentItem>활성</SegmentItem>
      <SegmentItem disabled>비활성</SegmentItem>
      <SegmentItem>활성</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(b=(D=d.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var y,R,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <SegmentedControl {...args} value={value} onChange={setValue}>
          <SegmentItem>선택 1</SegmentItem>
          <SegmentItem>선택 2</SegmentItem>
          <SegmentItem>선택 3</SegmentItem>
        </SegmentedControl>
        <p>현재 선택된 인덱스: {value}</p>
      </div>;
  },
  args: {}
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};const M=["Default","TwoItems","FourItems","SixItems","WithDisabledItem","Controlled"];export{l as Controlled,s as Default,a as FourItems,o as SixItems,m as TwoItems,d as WithDisabledItem,M as __namedExportsOrder,L as default};
