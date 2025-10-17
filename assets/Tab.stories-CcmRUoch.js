import{j as e}from"./jsx-runtime-WsICpuy1.js";import{R as $}from"./iframe-_vL07Yt-.js";import{T as r,a as n}from"./TabItem-DqjnAEJp.js";import"./styled-components.browser.esm-BDiU6mDK.js";import"./spacing-tE1IiUFl.js";import"./color-DqDZjiGS.js";import"./textColor-SSyLf7rE.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";const X={title:"Components/Tab",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"탭(Tab)은 여러 개의 탭 아이템(Tab Item)과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 탭 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 효율적으로 구분하고 탐색할 수 있습니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},argTypes:{defaultValue:{control:{type:"number",min:0,max:7},description:"초기 선택될 탭의 인덱스입니다."},value:{control:{type:"number",min:0,max:7},description:"현재 선택된 탭의 인덱스입니다 (controlled)."},onChange:{action:"changed",description:"탭이 변경될 때 호출되는 콜백 함수입니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},children:{control:!1,description:"TabItem 컴포넌트들입니다."}}},s={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"탭 1"}),e.jsx(n,{children:"탭 2"}),e.jsx(n,{children:"탭 3"})]}),args:{defaultValue:0,style:{},className:""}},t={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"})]}),args:{defaultValue:0}},d={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"검토"}),e.jsx(n,{children:"승인"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"최대 8개까지의 탭을 지원합니다. 이 예제는 정확히 8개의 탭을 보여줍니다."}}}},o={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(r,{...a,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"검토"}),e.jsx(n,{children:"승인"}),e.jsx(n,{children:"추가1"}),e.jsx(n,{children:"추가2"})]}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요."})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."}}}},i={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"활성"}),e.jsx(n,{disabled:!0,children:"비활성"}),e.jsx(n,{children:"활성"})]}),args:{defaultValue:0}},l={render:a=>{const[b,_]=$.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(r,{...a,value:b,onChange:_,children:[e.jsx(n,{children:"첫 번째"}),e.jsx(n,{children:"두 번째"}),e.jsx(n,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:["현재 선택된 탭: ",b+1]})]})},args:{}},c={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]}),args:{defaultValue:0,style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},className:""},parameters:{docs:{description:{story:"Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"기본 스타일링"}),e.jsxs(r,{style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"커스텀 색상"}),e.jsxs(r,{style:{borderBottom:"2px solid #007bff"},children:[e.jsx(n,{style:{color:"#007bff"},children:"홈"}),e.jsx(n,{style:{color:"#007bff"},children:"설정"}),e.jsx(n,{style:{color:"#007bff"},children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"마진과 패딩"}),e.jsxs(r,{style:{margin:"20px 0",padding:"0 20px"},children:[e.jsx(n,{children:"탭 1"}),e.jsx(n,{children:"탭 2"}),e.jsx(n,{children:"탭 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"반응형 스타일링"}),e.jsxs(r,{style:{width:"100%",maxWidth:"600px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"클래스 기반 스타일링"}),e.jsx("style",{children:`
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
        `}),e.jsxs(r,{className:"custom-tab",children:[e.jsx(n,{className:"custom-tab-item",children:"프리미엄"}),e.jsx(n,{className:"custom-tab-item",children:"기본"}),e.jsx(n,{className:"custom-tab-item",children:"무료"})]})]})]}),parameters:{controls:{disable:!0}}};var p,x,T;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var u,h,I;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var f,g,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: "최대 8개까지의 탭을 지원합니다. 이 예제는 정확히 8개의 탭을 보여줍니다."
      }
    }
  }
}`,...(j=(g=d.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var y,v,C;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Tab {...args}>
        <TabItem>전체</TabItem>
        <TabItem>진행중</TabItem>
        <TabItem>완료</TabItem>
        <TabItem>보류</TabItem>
        <TabItem>취소</TabItem>
        <TabItem>대기</TabItem>
        <TabItem>검토</TabItem>
        <TabItem>승인</TabItem>
        <TabItem>추가1</TabItem>
        <TabItem>추가2</TabItem>
      </Tab>
      <div style={{
      padding: "12px",
      backgroundColor: "#e7f3ff",
      border: "1px solid #b3d9ff",
      borderRadius: "4px",
      fontSize: "14px",
      color: "#0066cc"
    }}>
        ✅ 10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고
        메시지를 확인하세요.
      </div>
    </div>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: "10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."
      }
    }
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var S,V,k;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>활성</TabItem>
      <TabItem disabled>비활성</TabItem>
      <TabItem>활성</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(k=(V=i.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var N,R,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var D,M,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(W=(M=c.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var z,B,E;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const Y=["Default","TwoItems","ManyItems","TooManyItems","WithDisabled","Controlled","Interactive","Styling"];export{l as Controlled,s as Default,c as Interactive,d as ManyItems,m as Styling,o as TooManyItems,t as TwoItems,i as WithDisabled,Y as __namedExportsOrder,X as default};
