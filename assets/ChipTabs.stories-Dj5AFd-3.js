import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R as F}from"./iframe-CLq260Vv.js";import{C as i}from"./ChipTabs-DiU8IepT.js";import{C as e}from"./Chip-B5N5G07W.js";import"./styled-components.browser.esm-NAFAd1pi.js";import"./spacing-tE1IiUFl.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./textColor-DLZeZODc.js";import"./borderColor-C_RHITEf.js";const nn={title:"Components/ChipTabs",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Chip Tabs는 여러 개의 칩 아이템과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 칩 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 간결하고 직관적으로 구분하고 탐색할 수 있습니다. 기존 Chip 컴포넌트를 조합하여 구성되며, 항상 Solid 타입으로 고정됩니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},argTypes:{defaultValue:{control:{type:"number",min:0,max:7},description:"초기 선택될 칩의 인덱스입니다."},value:{control:{type:"number",min:0,max:7},description:"현재 선택된 칩의 인덱스입니다 (controlled)."},onChange:{action:"changed",description:"칩이 변경될 때 호출되는 콜백 함수입니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},children:{control:!1,description:"Chip 컴포넌트들입니다."}}},s={render:r=>n.jsxs(i,{...r,children:[n.jsx(e,{children:"텍스트"}),n.jsx(e,{children:"텍스트"}),n.jsx(e,{children:"텍스트"})]}),args:{defaultValue:0,style:{},className:""}},a={render:r=>n.jsxs(i,{...r,children:[n.jsx(e,{children:"홈"}),n.jsx(e,{children:"설정"})]}),args:{defaultValue:0}},d={render:r=>n.jsxs(i,{...r,children:[n.jsx(e,{children:"전체"}),n.jsx(e,{children:"진행중"}),n.jsx(e,{children:"완료"}),n.jsx(e,{children:"보류"}),n.jsx(e,{children:"취소"}),n.jsx(e,{children:"대기"}),n.jsx(e,{children:"검토"}),n.jsx(e,{children:"승인"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"최대 8개까지의 칩을 지원합니다. 이 예제는 정확히 8개의 칩을 보여줍니다."}}}},p={render:r=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs(i,{...r,children:[n.jsx(e,{children:"전체"}),n.jsx(e,{children:"진행중"}),n.jsx(e,{children:"완료"}),n.jsx(e,{children:"보류"}),n.jsx(e,{children:"취소"}),n.jsx(e,{children:"대기"}),n.jsx(e,{children:"검토"}),n.jsx(e,{children:"승인"}),n.jsx(e,{children:"추가1"}),n.jsx(e,{children:"추가2"})]}),n.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요."})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."}}}},o={render:r=>n.jsxs(i,{...r,children:[n.jsx(e,{children:"활성"}),n.jsx(e,{disabled:!0,children:"비활성"}),n.jsx(e,{children:"활성"})]}),args:{defaultValue:0}},l={render:r=>{const[x,B]=F.useState(1);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs(i,{...r,value:x,onChange:B,children:[n.jsx(e,{children:"첫 번째"}),n.jsx(e,{children:"두 번째"}),n.jsx(e,{children:"세 번째"})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:["현재 선택된 칩: ",x+1]})]})},args:{}},c={render:r=>n.jsxs(i,{...r,children:[n.jsx(e,{children:"홈"}),n.jsx(e,{children:"설정"}),n.jsx(e,{children:"프로필"})]}),args:{defaultValue:0,style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},className:""},parameters:{docs:{description:{story:"Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다."}}}},h={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsxs("div",{style:{width:"400px",padding:"20px",backgroundColor:"#fff",border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[n.jsx("h4",{style:{marginTop:0},children:"모달 내부 (좁은 컨테이너)"}),n.jsxs(i,{defaultValue:0,children:[n.jsx(e,{children:"전체"}),n.jsx(e,{children:"진행중"}),n.jsx(e,{children:"완료"}),n.jsx(e,{children:"보류"}),n.jsx(e,{children:"취소"}),n.jsx(e,{children:"대기"}),n.jsx(e,{children:"대기"}),n.jsx(e,{children:"대기"}),n.jsx(e,{children:"대기"}),n.jsx(e,{children:"대기"})]})]}),n.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 칩이 컨테이너를 넘어가면 자동으로 다음 줄로 wrap됩니다."})]}),parameters:{controls:{disable:!0},docs:{description:{story:"모달이나 좁은 컨테이너 안에서 ChipTabs가 공간을 넘어가면 자동으로 여러 줄로 wrap됩니다."}}}},t={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx("h4",{children:"기본 스타일링"}),n.jsxs(i,{style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},children:[n.jsx(e,{children:"홈"}),n.jsx(e,{children:"설정"}),n.jsx(e,{children:"프로필"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{children:"마진과 패딩"}),n.jsxs(i,{style:{margin:"20px 0",padding:"0 20px"},children:[n.jsx(e,{children:"칩 1"}),n.jsx(e,{children:"칩 2"}),n.jsx(e,{children:"칩 3"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{children:"반응형 스타일링"}),n.jsxs(i,{style:{width:"100%",maxWidth:"600px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",justifyContent:"center"},children:[n.jsx(e,{children:"전체"}),n.jsx(e,{children:"진행중"}),n.jsx(e,{children:"완료"}),n.jsx(e,{children:"보류"})]})]}),n.jsxs("div",{children:[n.jsx("h4",{children:"클래스 기반 스타일링"}),n.jsx("style",{children:`
          .custom-chiptabs {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
          }
        `}),n.jsxs(i,{className:"custom-chiptabs",children:[n.jsx(e,{children:"프리미엄"}),n.jsx(e,{children:"기본"}),n.jsx(e,{children:"무료"})]})]})]}),parameters:{controls:{disable:!0}}};var C,u,m;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <ChipTabs {...args}>
      <Chip>텍스트</Chip>
      <Chip>텍스트</Chip>
      <Chip>텍스트</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0,
    style: {},
    className: ""
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <ChipTabs {...args}>
      <Chip>홈</Chip>
      <Chip>설정</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,y,v;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <ChipTabs {...args}>
      <Chip>전체</Chip>
      <Chip>진행중</Chip>
      <Chip>완료</Chip>
      <Chip>보류</Chip>
      <Chip>취소</Chip>
      <Chip>대기</Chip>
      <Chip>검토</Chip>
      <Chip>승인</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: "최대 8개까지의 칩을 지원합니다. 이 예제는 정확히 8개의 칩을 보여줍니다."
      }
    }
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var T,S,V;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <ChipTabs {...args}>
        <Chip>전체</Chip>
        <Chip>진행중</Chip>
        <Chip>완료</Chip>
        <Chip>보류</Chip>
        <Chip>취소</Chip>
        <Chip>대기</Chip>
        <Chip>검토</Chip>
        <Chip>승인</Chip>
        <Chip>추가1</Chip>
        <Chip>추가2</Chip>
      </ChipTabs>
      <div style={{
      padding: "12px",
      backgroundColor: "#e7f3ff",
      border: "1px solid #b3d9ff",
      borderRadius: "4px",
      fontSize: "14px",
      color: "#0066cc"
    }}>
        ✅ 10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고
        메시지를 확인하세요.
      </div>
    </div>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: "10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."
      }
    }
  }
}`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var k,R,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <ChipTabs {...args}>
      <Chip>활성</Chip>
      <Chip disabled>비활성</Chip>
      <Chip>활성</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0
  }
}`,...(w=(R=o.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var D,I,N;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(1);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px"
    }}>
        <ChipTabs {...args} value={value} onChange={setValue}>
          <Chip>첫 번째</Chip>
          <Chip>두 번째</Chip>
          <Chip>세 번째</Chip>
        </ChipTabs>
        <div style={{
        padding: "16px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px"
      }}>
          현재 선택된 칩: {value + 1}
        </div>
      </div>;
  },
  args: {}
}`,...(N=(I=l.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var M,W,z;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <ChipTabs {...args}>
      <Chip>홈</Chip>
      <Chip>설정</Chip>
      <Chip>프로필</Chip>
    </ChipTabs>,
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
}`,...(z=(W=c.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var E,_,$;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      width: "400px",
      padding: "20px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
        <h4 style={{
        marginTop: 0
      }}>모달 내부 (좁은 컨테이너)</h4>
        <ChipTabs defaultValue={0}>
          <Chip>전체</Chip>
          <Chip>진행중</Chip>
          <Chip>완료</Chip>
          <Chip>보류</Chip>
          <Chip>취소</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
          <Chip>대기</Chip>
        </ChipTabs>
      </div>
      <div style={{
      padding: "12px",
      backgroundColor: "#e7f3ff",
      border: "1px solid #b3d9ff",
      borderRadius: "4px",
      fontSize: "14px",
      color: "#0066cc"
    }}>
        ✅ 칩이 컨테이너를 넘어가면 자동으로 다음 줄로 wrap됩니다.
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: "모달이나 좁은 컨테이너 안에서 ChipTabs가 공간을 넘어가면 자동으로 여러 줄로 wrap됩니다."
      }
    }
  }
}`,...($=(_=h.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,q,A;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>
      <div>
        <h4>기본 스타일링</h4>
        <ChipTabs style={{
        backgroundColor: "#f8f9fa",
        padding: "8px",
        borderRadius: "8px"
      }}>
          <Chip>홈</Chip>
          <Chip>설정</Chip>
          <Chip>프로필</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>마진과 패딩</h4>
        <ChipTabs style={{
        margin: "20px 0",
        padding: "0 20px"
      }}>
          <Chip>칩 1</Chip>
          <Chip>칩 2</Chip>
          <Chip>칩 3</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>반응형 스타일링</h4>
        <ChipTabs style={{
        width: "100%",
        maxWidth: "600px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        justifyContent: "center"
      }}>
          <Chip>전체</Chip>
          <Chip>진행중</Chip>
          <Chip>완료</Chip>
          <Chip>보류</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>클래스 기반 스타일링</h4>
        <style>{\`
          .custom-chiptabs {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
          }
        \`}</style>
        <ChipTabs className="custom-chiptabs">
          <Chip>프리미엄</Chip>
          <Chip>기본</Chip>
          <Chip>무료</Chip>
        </ChipTabs>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(A=(q=t.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};const en=["Default","TwoItems","ManyItems","TooManyItems","WithDisabled","Controlled","Interactive","WrappedInModal","Styling"];export{l as Controlled,s as Default,c as Interactive,d as ManyItems,t as Styling,p as TooManyItems,a as TwoItems,o as WithDisabled,h as WrappedInModal,en as __namedExportsOrder,nn as default};
