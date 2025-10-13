import{j as e}from"./jsx-runtime-Bf2WKY8k.js";import{R as E}from"./iframe-BQ-UQriX.js";import{T as n,a}from"./TabItem-Ih1rwkiA.js";import"./styled-components.browser.esm-DhrH3U2p.js";import"./spacing-tE1IiUFl.js";import"./color-DqDZjiGS.js";import"./textColor-SSyLf7rE.js";import"./typography-BccJP5aO.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";const K={title:"Components/Tab",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"탭(Tab)은 여러 개의 탭 아이템(Tab Item)과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 탭 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 효율적으로 구분하고 탐색할 수 있습니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},argTypes:{defaultValue:{control:{type:"number",min:0,max:7},description:"초기 선택될 탭의 인덱스입니다."},value:{control:{type:"number",min:0,max:7},description:"현재 선택된 탭의 인덱스입니다 (controlled)."},onChange:{action:"changed",description:"탭이 변경될 때 호출되는 콜백 함수입니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},children:{control:!1,description:"TabItem 컴포넌트들입니다."}}},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{children:"탭 1"}),e.jsx(a,{children:"탭 2"}),e.jsx(a,{children:"탭 3"})]}),args:{defaultValue:0,style:{},className:""}},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"})]}),args:{defaultValue:0}},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{children:"전체"}),e.jsx(a,{children:"진행중"}),e.jsx(a,{children:"완료"}),e.jsx(a,{children:"보류"}),e.jsx(a,{children:"취소"}),e.jsx(a,{children:"대기"}),e.jsx(a,{children:"검토"}),e.jsx(a,{children:"승인"})]}),args:{defaultValue:0}},d={render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{children:"활성"}),e.jsx(a,{disabled:!0,children:"비활성"}),e.jsx(a,{children:"활성"})]}),args:{defaultValue:0}},l={render:r=>{const[m,B]=E.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(n,{...r,value:m,onChange:B,children:[e.jsx(a,{children:"첫 번째"}),e.jsx(a,{children:"두 번째"}),e.jsx(a,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:["현재 선택된 탭: ",m+1]})]})},args:{}},c={render:r=>e.jsxs(n,{...r,children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"}),e.jsx(a,{children:"프로필"})]}),args:{defaultValue:0,style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},className:""},parameters:{docs:{description:{story:"Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"기본 스타일링"}),e.jsxs(n,{style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"}),e.jsx(a,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"커스텀 색상"}),e.jsxs(n,{style:{borderBottom:"2px solid #007bff"},children:[e.jsx(a,{style:{color:"#007bff"},children:"홈"}),e.jsx(a,{style:{color:"#007bff"},children:"설정"}),e.jsx(a,{style:{color:"#007bff"},children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"마진과 패딩"}),e.jsxs(n,{style:{margin:"20px 0",padding:"0 20px"},children:[e.jsx(a,{children:"탭 1"}),e.jsx(a,{children:"탭 2"}),e.jsx(a,{children:"탭 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"반응형 스타일링"}),e.jsxs(n,{style:{width:"100%",maxWidth:"600px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[e.jsx(a,{children:"전체"}),e.jsx(a,{children:"진행중"}),e.jsx(a,{children:"완료"}),e.jsx(a,{children:"보류"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"클래스 기반 스타일링"}),e.jsx("style",{children:`
          .custom-tab {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
            border-bottom: none;
          }
          .custom-tab-item {
            color: white !important;
            font-weight: 600;
          }
        `}),e.jsxs(n,{className:"custom-tab",children:[e.jsx(a,{className:"custom-tab-item",children:"프리미엄"}),e.jsx(a,{className:"custom-tab-item",children:"기본"}),e.jsx(a,{className:"custom-tab-item",children:"무료"})]})]})]}),parameters:{controls:{disable:!0}}};var b,p,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>탭 1</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>,
  args: {
    defaultValue: 0,
    style: {},
    className: ""
  }
}`,...(x=(p=s.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var T,u,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var I,g,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>전체</TabItem>
      <TabItem>진행중</TabItem>
      <TabItem>완료</TabItem>
      <TabItem>보류</TabItem>
      <TabItem>취소</TabItem>
      <TabItem>대기</TabItem>
      <TabItem>검토</TabItem>
      <TabItem>승인</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var j,y,v;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>활성</TabItem>
      <TabItem disabled>비활성</TabItem>
      <TabItem>활성</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,S,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <Tab {...args} value={value} onChange={setValue}>
          <TabItem>첫 번째</TabItem>
          <TabItem>두 번째</TabItem>
          <TabItem>세 번째</TabItem>
        </Tab>
        <div style={{
        padding: "16px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px"
      }}>
          현재 선택된 탭: {value + 1}
        </div>
      </div>;
  },
  args: {}
}`,...(V=(S=l.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var N,k,w;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
      <TabItem>프로필</TabItem>
    </Tab>,
  args: {
    defaultValue: 0,
    style: {
      backgroundColor: "#f8f9fa",
      padding: "8px",
      borderRadius: "8px"
    },
    className: ""
  },
  parameters: {
    docs: {
      description: {
        story: "Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다."
      }
    }
  }
}`,...(w=(k=c.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var R,D,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>
      <div>
        <h4>기본 스타일링</h4>
        <Tab style={{
        backgroundColor: "#f8f9fa",
        padding: "8px",
        borderRadius: "8px"
      }}>
          <TabItem>홈</TabItem>
          <TabItem>설정</TabItem>
          <TabItem>프로필</TabItem>
        </Tab>
      </div>

      <div>
        <h4>커스텀 색상</h4>
        <Tab style={{
        borderBottom: "2px solid #007bff"
      }}>
          <TabItem style={{
          color: "#007bff"
        }}>홈</TabItem>
          <TabItem style={{
          color: "#007bff"
        }}>설정</TabItem>
          <TabItem style={{
          color: "#007bff"
        }}>프로필</TabItem>
        </Tab>
      </div>

      <div>
        <h4>마진과 패딩</h4>
        <Tab style={{
        margin: "20px 0",
        padding: "0 20px"
      }}>
          <TabItem>탭 1</TabItem>
          <TabItem>탭 2</TabItem>
          <TabItem>탭 3</TabItem>
        </Tab>
      </div>

      <div>
        <h4>반응형 스타일링</h4>
        <Tab style={{
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
      }}>
          <TabItem>전체</TabItem>
          <TabItem>진행중</TabItem>
          <TabItem>완료</TabItem>
          <TabItem>보류</TabItem>
        </Tab>
      </div>

      <div>
        <h4>클래스 기반 스타일링</h4>
        <style>{\`
          .custom-tab {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
            border-bottom: none;
          }
          .custom-tab-item {
            color: white !important;
            font-weight: 600;
          }
        \`}</style>
        <Tab className="custom-tab">
          <TabItem className="custom-tab-item">프리미엄</TabItem>
          <TabItem className="custom-tab-item">기본</TabItem>
          <TabItem className="custom-tab-item">무료</TabItem>
        </Tab>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};const L=["Default","TwoItems","ManyItems","WithDisabled","Controlled","Interactive","Styling"];export{l as Controlled,s as Default,c as Interactive,o as ManyItems,i as Styling,t as TwoItems,d as WithDisabled,L as __namedExportsOrder,K as default};
