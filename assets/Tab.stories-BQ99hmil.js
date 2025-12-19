import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as X}from"./iframe-L1CEGzuW.js";import{T as r,a as n}from"./TabItem-CY416s89.js";import"./styled-components.browser.esm-CPJhxV7n.js";import"./spacing-tE1IiUFl.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const ce={title:"Components/Tab",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"탭(Tab)은 여러 개의 탭 아이템(Tab Item)과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 탭 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 효율적으로 구분하고 탐색할 수 있습니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},argTypes:{defaultValue:{control:{type:"number",min:0,max:7},description:"초기 선택될 탭의 인덱스입니다."},value:{control:{type:"number",min:0,max:7},description:"현재 선택된 탭의 인덱스입니다 (controlled)."},onChange:{action:"changed",description:"탭이 변경될 때 호출되는 콜백 함수입니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},children:{control:!1,description:"TabItem 컴포넌트들입니다."},showDivider:{control:{type:"boolean"},description:"하단 구분선 표시 여부를 설정합니다."}}},s={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"탭 1"}),e.jsx(n,{children:"탭 2"}),e.jsx(n,{children:"탭 3"})]}),args:{defaultValue:0,style:{},className:""}},d={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"})]}),args:{defaultValue:0}},o={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"검토"}),e.jsx(n,{children:"승인"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"최대 8개까지의 탭을 지원합니다. 이 예제는 정확히 8개의 탭을 보여줍니다."}}}},i={render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(r,{...a,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"검토"}),e.jsx(n,{children:"승인"}),e.jsx(n,{children:"추가1"}),e.jsx(n,{children:"추가2"})]}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요."})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."}}}},c={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"활성"}),e.jsx(n,{disabled:!0,children:"비활성"}),e.jsx(n,{children:"활성"})]}),args:{defaultValue:0}},l={render:a=>{const[t,u]=X.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(r,{...a,value:t,onChange:u,children:[e.jsx(n,{children:"첫 번째"}),e.jsx(n,{children:"두 번째"}),e.jsx(n,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:["현재 선택된 탭: ",t+1]})]})},args:{}},m={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"탭 1ㄹㄹㄹㄹㄹㄹㄹㄹㄹ"}),e.jsx(n,{children:"탭 2"}),e.jsx(n,{children:"탭 3"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"긴 텍스트를 가진 탭 아이템입니다. min-width: 120px로 최소 너비를 유지하되, 텍스트 길이에 따라 자동으로 확장됩니다."}}}},b={render:a=>e.jsxs(r,{...a,children:[e.jsx(n,{children:"짧음"}),e.jsx(n,{children:"중간 길이의 탭 아이템"}),e.jsx(n,{children:"매우 긴 텍스트를 가진 탭 아이템입니다"}),e.jsx(n,{children:"탭"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"다양한 길이의 텍스트를 가진 탭들입니다. 각 탭은 최소 120px를 유지하며, 텍스트 길이에 따라 유동적으로 너비가 조정됩니다."}}}},p={render:a=>{const t=a.tab1||"홈",u=a.tab2||"설정",U=a.tab3||"프로필";return e.jsxs(r,{defaultValue:a.defaultValue,style:a.style,className:a.className,children:[e.jsx(n,{children:t}),e.jsx(n,{children:u}),e.jsx(n,{children:U})]})},args:{defaultValue:0,tab1:"홈",tab2:"설정",tab3:"프로필",style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},className:""},argTypes:{tab1:{control:{type:"text"},description:"첫 번째 탭 아이템의 텍스트"},tab2:{control:{type:"text"},description:"두 번째 탭 아이템의 텍스트"},tab3:{control:{type:"text"},description:"세 번째 탭 아이템의 텍스트"}},parameters:{docs:{description:{story:"Controls 패널에서 각 탭의 텍스트, 스타일, 클래스를 실시간으로 조정할 수 있습니다. 긴 텍스트를 입력하여 유동적 너비를 테스트해보세요."}}}},x={render:a=>e.jsxs(r,{...a,showDivider:!1,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"하단 구분선이 없는 탭입니다."}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"기본 스타일링"}),e.jsxs(r,{style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"구분선 없음"}),e.jsxs(r,{showDivider:!1,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"커스텀 색상"}),e.jsxs(r,{style:{borderBottom:"2px solid #007bff"},children:[e.jsx(n,{style:{color:"#007bff"},children:"홈"}),e.jsx(n,{style:{color:"#007bff"},children:"설정"}),e.jsx(n,{style:{color:"#007bff"},children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"마진과 패딩"}),e.jsxs(r,{style:{margin:"20px 0",padding:"0 20px"},children:[e.jsx(n,{children:"탭 1"}),e.jsx(n,{children:"탭 2"}),e.jsx(n,{children:"탭 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"반응형 스타일링"}),e.jsxs(r,{style:{width:"100%",maxWidth:"600px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"클래스 기반 스타일링"}),e.jsx("style",{children:`
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
        `}),e.jsxs(r,{className:"custom-tab",children:[e.jsx(n,{className:"custom-tab-item",children:"프리미엄"}),e.jsx(n,{className:"custom-tab-item",children:"기본"}),e.jsx(n,{className:"custom-tab-item",children:"무료"})]})]})]}),parameters:{controls:{disable:!0}}};var h,I,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(I=s.parameters)==null?void 0:I.docs)==null?void 0:g.source}}};var f,j,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(y=(j=d.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var v,V,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(V=o.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var C,w,D;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,k,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>활성</TabItem>
      <TabItem disabled>비활성</TabItem>
      <TabItem>활성</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var W,M,z;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(z=(M=l.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var B,E,F;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>탭 1ㄹㄹㄹㄹㄹㄹㄹㄹㄹ</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: "긴 텍스트를 가진 탭 아이템입니다. min-width: 120px로 최소 너비를 유지하되, 텍스트 길이에 따라 자동으로 확장됩니다."
      }
    }
  }
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var L,_,$;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Tab {...args}>
      <TabItem>짧음</TabItem>
      <TabItem>중간 길이의 탭 아이템</TabItem>
      <TabItem>매우 긴 텍스트를 가진 탭 아이템입니다</TabItem>
      <TabItem>탭</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: "다양한 길이의 텍스트를 가진 탭들입니다. 각 탭은 최소 120px를 유지하며, 텍스트 길이에 따라 유동적으로 너비가 조정됩니다."
      }
    }
  }
}`,...($=(_=b.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var O,q,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const tab1 = args.tab1 || "홈";
    const tab2 = args.tab2 || "설정";
    const tab3 = args.tab3 || "프로필";
    return <Tab defaultValue={args.defaultValue} style={args.style} className={args.className}>
        <TabItem>{tab1}</TabItem>
        <TabItem>{tab2}</TabItem>
        <TabItem>{tab3}</TabItem>
      </Tab>;
  },
  args: {
    defaultValue: 0,
    tab1: "홈",
    tab2: "설정",
    tab3: "프로필",
    style: {
      backgroundColor: "#f8f9fa",
      padding: "8px",
      borderRadius: "8px"
    },
    className: ""
  },
  argTypes: {
    tab1: {
      control: {
        type: "text"
      },
      description: "첫 번째 탭 아이템의 텍스트"
    },
    tab2: {
      control: {
        type: "text"
      },
      description: "두 번째 탭 아이템의 텍스트"
    },
    tab3: {
      control: {
        type: "text"
      },
      description: "세 번째 탭 아이템의 텍스트"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Controls 패널에서 각 탭의 텍스트, 스타일, 클래스를 실시간으로 조정할 수 있습니다. 긴 텍스트를 입력하여 유동적 너비를 테스트해보세요."
      }
    }
  }
}`,...(A=(q=p.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Tab {...args} showDivider={false}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
      <TabItem>프로필</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: "하단 구분선이 없는 탭입니다."
      }
    }
  }
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,P,Q;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
        <h4>구분선 없음</h4>
        <Tab showDivider={false}>
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
}`,...(Q=(P=T.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const le=["Default","TwoItems","ManyItems","TooManyItems","WithDisabled","Controlled","LongText","FlexibleWidth","Interactive","WithoutDivider","Styling"];export{l as Controlled,s as Default,b as FlexibleWidth,p as Interactive,m as LongText,o as ManyItems,T as Styling,i as TooManyItems,d as TwoItems,c as WithDisabled,x as WithoutDivider,le as __namedExportsOrder,ce as default};
