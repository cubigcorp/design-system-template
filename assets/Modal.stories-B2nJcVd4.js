import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as xn}from"./iframe-hPGLIIaH.js";import{c as gn,b as y}from"./Modal-C0yrpqCD.js";import{O as r,S as i}from"./TextButton-Cg57c9FZ.js";import"./IconButton-DagkOEqT.js";import"./textColor-CouRfQP6.js";import"./color-CiwAFuFb.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./fontFamily-CsG1KcIF.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./IconSearch-BztCI8_-.js";import"./IconCheck-CKtc9n1_.js";import"./index-Ck5mg8j-.js";import"./index-BFPsjcHc.js";import"./shadow-DVq_1U2q.js";import"./radius-DaoU83SK.js";import"./Spinner-C2pR8U-7.js";const t=({size:e="medium",position:b="center",open:j=!1,onClose:S,title:hn="제목",showCloseButton:fn=!0,children:mn,actions:vn,...yn})=>{const[bn,C]=xn.useState(j),jn=()=>{C(!1),S==null||S()},Sn=()=>{C(!0)};return n.jsxs("div",{children:[n.jsx("button",{onClick:Sn,style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"모달 열기"}),n.jsx(gn,{size:e,position:b,open:bn,onClose:jn,title:hn,showCloseButton:fn,actions:vn,...yn,children:mn})]})},Kn={title:"Components/Modal",component:gn,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"모달(Modal)은 사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 화면 위에 나타나는 레이어형 컴포넌트로, 사용자가 명확한 결정을 내리거나 메시지를 확인할 수 있도록 안내합니다."}}},argTypes:{size:{control:"select",options:["x-small","small","medium","large"],description:"모달의 크기를 선택합니다."},position:{control:"select",options:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"],description:"모달의 위치를 선택합니다."},open:{control:!1,description:"모달의 열림/닫힘 상태를 설정합니다."},title:{control:"text",description:"모달의 제목을 설정합니다."},showCloseButton:{control:"boolean",description:"닫기 버튼 표시 여부를 설정합니다."},onClose:{action:"closed",description:"모달이 닫힐 때 호출되는 콜백 함수입니다."}}},o={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"제목",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(r,{variant:"secondary",children:"취소"}),n.jsx(i,{variant:"primary",children:"확인"})]}),children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["모달 콘텐츠 영역입니다.",n.jsx("br",{}),"여기에 원하는 내용을 넣을 수 있습니다."]})}},l={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[n.jsx(t,{size:"x-small",title:"X-Small Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"X-Small 크기"})}),n.jsx(t,{size:"small",title:"Small Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Small 크기"})}),n.jsx(t,{size:"medium",title:"Medium Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Medium 크기"})}),n.jsx(t,{size:"large",title:"Large Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Large 크기"})})]})},a={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"액션 영역 없는 모달",showCloseButton:!0,children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["액션 영역이 없는 모달입니다.",n.jsx("br",{}),"닫기 버튼으로만 닫을 수 있습니다."]})}},s={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"액션 영역 있지만 버튼 없음",showCloseButton:!0,children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"actions가 없어서 액션 영역이 나타나지 않습니다."})}},d={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"닫기 버튼 없는 모달",showCloseButton:!1,children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["닫기 버튼이 없는 모달입니다.",n.jsx("br",{}),"배경 클릭으로 닫을 수 있습니다."]})}},p={render:e=>n.jsx(t,{...e}),args:{size:"large",open:!1,title:"커스텀 콘텐츠",showCloseButton:!0,children:n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"상세 정보"}),n.jsx("p",{style:{margin:"0 0 12px 0",color:"#666"},children:"이 모달은 다양한 콘텐츠를 포함할 수 있습니다."}),n.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px",color:"#666"},children:[n.jsx("li",{children:"텍스트"}),n.jsx("li",{children:"이미지"}),n.jsx("li",{children:"폼 요소"}),n.jsx("li",{children:"기타 컴포넌트"})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[n.jsx("strong",{children:"주의사항:"})," 모달은 중요한 정보를 전달할 때 사용하세요."]})]})}},c={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"왼쪽 정렬 액션",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-start",width:"100%"},children:[n.jsx(i,{variant:"negative",children:"삭제"}),n.jsx(r,{variant:"secondary",children:"취소"})]}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"왼쪽 정렬된 액션 버튼들입니다."})}},u={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"중앙 정렬 액션",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",width:"100%"},children:[n.jsx(r,{variant:"secondary",children:"취소"}),n.jsx(i,{variant:"primary",children:"확인"})]}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"중앙 정렬된 액션 버튼들입니다."})}},x={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"오른쪽 정렬 액션",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(r,{variant:"secondary",children:"취소"}),n.jsx(i,{variant:"primary",children:"확인"})]}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"오른쪽 정렬된 액션 버튼들입니다."})}},g={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"단일 액션 버튼",showCloseButton:!0,actions:n.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:n.jsx(i,{variant:"positive",children:"완료"})}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"단일 액션 버튼 예시입니다."})}},h={render:e=>n.jsx(t,{...e}),args:{size:"large",open:!1,title:"다중 액션 버튼",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(i,{variant:"negative",children:"삭제"}),n.jsx(r,{variant:"brand",children:"임시저장"}),n.jsx(r,{variant:"secondary",children:"취소"}),n.jsx(i,{variant:"primary",children:"저장"})]}),children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["여러 개의 액션 버튼 예시입니다.",n.jsx("br",{}),"삭제, 임시저장, 취소, 저장 버튼이 있습니다."]})}},f={render:e=>n.jsx(t,{...e}),args:{size:"large",open:!1,title:"드롭다운 테스트 모달",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(r,{variant:"secondary",children:"취소"}),n.jsx(i,{variant:"primary",children:"저장"})]}),children:n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"모달 안에서 드롭다운 테스트"}),n.jsx("p",{style:{margin:"0 0 20px 0",color:"#666"},children:"아래 드롭다운들이 모달 위에 정상적으로 표시되는지 확인해보세요."}),n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(y,{type:"selector",label:"일반 드롭다운",placeholder:"옵션을 선택하세요",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"},{label:"옵션 5",value:"option5"}]})}),n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(y,{type:"combobox",label:"검색 가능한 드롭다운",placeholder:"검색하거나 선택하세요",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}]})}),n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(y,{type:"selector",label:"비활성화된 드롭다운",placeholder:"비활성화됨",disabled:!0,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"}]})}),n.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[n.jsx("strong",{children:"테스트 포인트:"}),n.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[n.jsx("li",{children:"드롭다운 메뉴가 모달 위에 표시되는지"}),n.jsx("li",{children:"드롭다운 메뉴가 모달 경계를 벗어나지 않는지"}),n.jsx("li",{children:"검색 기능이 정상 작동하는지"}),n.jsx("li",{children:"스크롤이 필요한 경우 정상 작동하는지"})]})]})]})}},m={render:e=>{const[b,j]=xn.useState("");return n.jsx(t,{...e,children:n.jsx("div",{style:{padding:"20px"},children:n.jsx(y,{type:"selector",label:"옵션 선택",placeholder:"선택하세요",value:b,onChange:j,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"},{label:"옵션 5",value:"option5"}]})})})},args:{size:"medium",open:!1,title:"드롭다운 테스트",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(r,{variant:"secondary",children:"취소"}),n.jsx(i,{variant:"primary",children:"확인"})]})}},v={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",padding:"20px"},children:[n.jsx(t,{position:"top-left",title:"상단 좌",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 좌측"})}),n.jsx(t,{position:"top-center",title:"상단 중앙",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 중앙"})}),n.jsx(t,{position:"top-right",title:"상단 우",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 우측"})}),n.jsx(t,{position:"center-left",title:"중앙 좌",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"중앙 좌측"})}),n.jsx(t,{position:"center",title:"정중앙",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"정중앙"})}),n.jsx(t,{position:"center-right",title:"중앙 우",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"중앙 우측"})}),n.jsx(t,{position:"bottom-left",title:"하단 좌",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 좌측"})}),n.jsx(t,{position:"bottom-center",title:"하단 중앙",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 중앙"})}),n.jsx(t,{position:"bottom-right",title:"하단 우",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 우측"})})]})};var A,B,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "제목",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      width: "100%"
    }}>
        <OutlineButton variant="secondary">취소</OutlineButton>
        <SolidButton variant="primary">확인</SolidButton>
      </div>,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        모달 콘텐츠 영역입니다.
        <br />
        여기에 원하는 내용을 넣을 수 있습니다.
      </div>
  }
}`,...(w=(B=o.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var M,W,z;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    flexWrap: "wrap"
  }}>
      <ModalWithState size="x-small" title="X-Small Modal">
        <div style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "8px",
        textAlign: "center",
        color: "#666"
      }}>
          X-Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size="small" title="Small Modal">
        <div style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "8px",
        textAlign: "center",
        color: "#666"
      }}>
          Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size="medium" title="Medium Modal">
        <div style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "8px",
        textAlign: "center",
        color: "#666"
      }}>
          Medium 크기
        </div>
      </ModalWithState>
      <ModalWithState size="large" title="Large Modal">
        <div style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "8px",
        textAlign: "center",
        color: "#666"
      }}>
          Large 크기
        </div>
      </ModalWithState>
    </div>
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var R,k,O;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "액션 영역 없는 모달",
    showCloseButton: true,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        액션 영역이 없는 모달입니다.
        <br />
        닫기 버튼으로만 닫을 수 있습니다.
      </div>
  }
}`,...(O=(k=a.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var D,L,V;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "액션 영역 있지만 버튼 없음",
    showCloseButton: true,
    // actions 없음 - 액션 영역이 나타나지 않음
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        actions가 없어서 액션 영역이 나타나지 않습니다.
      </div>
  }
}`,...(V=(L=s.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var E,X,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "닫기 버튼 없는 모달",
    showCloseButton: false,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        닫기 버튼이 없는 모달입니다.
        <br />
        배경 클릭으로 닫을 수 있습니다.
      </div>
  }
}`,...(T=(X=d.parameters)==null?void 0:X.docs)==null?void 0:T.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "large",
    open: false,
    title: "커스텀 콘텐츠",
    showCloseButton: true,
    children: <div>
        <h3 style={{
        margin: "0 0 16px 0",
        color: "#333"
      }}>상세 정보</h3>
        <p style={{
        margin: "0 0 12px 0",
        color: "#666"
      }}>
          이 모달은 다양한 콘텐츠를 포함할 수 있습니다.
        </p>
        <ul style={{
        margin: "0 0 16px 0",
        paddingLeft: "20px",
        color: "#666"
      }}>
          <li>텍스트</li>
          <li>이미지</li>
          <li>폼 요소</li>
          <li>기타 컴포넌트</li>
        </ul>
        <div style={{
        padding: "16px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "1px solid #e9ecef"
      }}>
          <strong>주의사항:</strong> 모달은 중요한 정보를 전달할 때 사용하세요.
        </div>
      </div>
  }
}`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var P,_,I;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "왼쪽 정렬 액션",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-start",
      width: "100%"
    }}>
        <SolidButton variant="negative">삭제</SolidButton>
        <OutlineButton variant="secondary">취소</OutlineButton>
      </div>,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        왼쪽 정렬된 액션 버튼들입니다.
      </div>
  }
}`,...(I=(_=c.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var q,J,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "중앙 정렬 액션",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "center",
      width: "100%"
    }}>
        <OutlineButton variant="secondary">취소</OutlineButton>
        <SolidButton variant="primary">확인</SolidButton>
      </div>,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        중앙 정렬된 액션 버튼들입니다.
      </div>
  }
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "오른쪽 정렬 액션",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      width: "100%"
    }}>
        <OutlineButton variant="secondary">취소</OutlineButton>
        <SolidButton variant="primary">확인</SolidButton>
      </div>,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        오른쪽 정렬된 액션 버튼들입니다.
      </div>
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "단일 액션 버튼",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      width: "100%"
    }}>
        <SolidButton variant="positive">완료</SolidButton>
      </div>,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        단일 액션 버튼 예시입니다.
      </div>
  }
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,tn;h.parameters={...h.parameters,docs:{...(nn=h.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "large",
    open: false,
    title: "다중 액션 버튼",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      width: "100%"
    }}>
        <SolidButton variant="negative">삭제</SolidButton>
        <OutlineButton variant="brand">임시저장</OutlineButton>
        <OutlineButton variant="secondary">취소</OutlineButton>
        <SolidButton variant="primary">저장</SolidButton>
      </div>,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        여러 개의 액션 버튼 예시입니다.
        <br />
        삭제, 임시저장, 취소, 저장 버튼이 있습니다.
      </div>
  }
}`,...(tn=(en=h.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var rn,on,ln;f.parameters={...f.parameters,docs:{...(rn=f.parameters)==null?void 0:rn.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "large",
    open: false,
    title: "드롭다운 테스트 모달",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      width: "100%"
    }}>
        <OutlineButton variant="secondary">취소</OutlineButton>
        <SolidButton variant="primary">저장</SolidButton>
      </div>,
    children: <div style={{
      padding: "20px"
    }}>
        <h3 style={{
        margin: "0 0 16px 0",
        color: "#333"
      }}>
          모달 안에서 드롭다운 테스트
        </h3>
        <p style={{
        margin: "0 0 20px 0",
        color: "#666"
      }}>
          아래 드롭다운들이 모달 위에 정상적으로 표시되는지 확인해보세요.
        </p>

        <div style={{
        marginBottom: "20px"
      }}>
          <Dropdown type="selector" label="일반 드롭다운" placeholder="옵션을 선택하세요" options={[{
          label: "옵션 1",
          value: "option1"
        }, {
          label: "옵션 2",
          value: "option2"
        }, {
          label: "옵션 3",
          value: "option3"
        }, {
          label: "옵션 4",
          value: "option4"
        }, {
          label: "옵션 5",
          value: "option5"
        }]} />
        </div>

        <div style={{
        marginBottom: "20px"
      }}>
          <Dropdown type="combobox" label="검색 가능한 드롭다운" placeholder="검색하거나 선택하세요" options={[{
          label: "Apple",
          value: "apple"
        }, {
          label: "Banana",
          value: "banana"
        }, {
          label: "Cherry",
          value: "cherry"
        }, {
          label: "Date",
          value: "date"
        }, {
          label: "Elderberry",
          value: "elderberry"
        }, {
          label: "Fig",
          value: "fig"
        }, {
          label: "Grape",
          value: "grape"
        }, {
          label: "Honeydew",
          value: "honeydew"
        }]} />
        </div>

        <div style={{
        marginBottom: "20px"
      }}>
          <Dropdown type="selector" label="비활성화된 드롭다운" placeholder="비활성화됨" disabled={true} options={[{
          label: "옵션 1",
          value: "option1"
        }, {
          label: "옵션 2",
          value: "option2"
        }]} />
        </div>

        <div style={{
        padding: "16px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        border: "1px solid #e9ecef"
      }}>
          <strong>테스트 포인트:</strong>
          <ul style={{
          margin: "8px 0 0 0",
          paddingLeft: "20px"
        }}>
            <li>드롭다운 메뉴가 모달 위에 표시되는지</li>
            <li>드롭다운 메뉴가 모달 경계를 벗어나지 않는지</li>
            <li>검색 기능이 정상 작동하는지</li>
            <li>스크롤이 필요한 경우 정상 작동하는지</li>
          </ul>
        </div>
      </div>
  }
}`,...(ln=(on=f.parameters)==null?void 0:on.docs)==null?void 0:ln.source}}};var an,sn,dn;m.parameters={...m.parameters,docs:{...(an=m.parameters)==null?void 0:an.docs,source:{originalSource:`{
  render: args => {
    const [dropdownValue, setDropdownValue] = useState("");
    return <ModalWithState {...args}>
        <div style={{
        padding: "20px"
      }}>
          <Dropdown type="selector" label="옵션 선택" placeholder="선택하세요" value={dropdownValue} onChange={setDropdownValue} options={[{
          label: "옵션 1",
          value: "option1"
        }, {
          label: "옵션 2",
          value: "option2"
        }, {
          label: "옵션 3",
          value: "option3"
        }, {
          label: "옵션 4",
          value: "option4"
        }, {
          label: "옵션 5",
          value: "option5"
        }]} />
        </div>
      </ModalWithState>;
  },
  args: {
    size: "medium",
    open: false,
    title: "드롭다운 테스트",
    showCloseButton: true,
    actions: <div style={{
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      width: "100%"
    }}>
        <OutlineButton variant="secondary">취소</OutlineButton>
        <SolidButton variant="primary">확인</SolidButton>
      </div>
  }
}`,...(dn=(sn=m.parameters)==null?void 0:sn.docs)==null?void 0:dn.source}}};var pn,cn,un;v.parameters={...v.parameters,docs:{...(pn=v.parameters)==null?void 0:pn.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    padding: "20px"
  }}>
      <ModalWithState position="top-left" title="상단 좌">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>상단 좌측</div>
      </ModalWithState>
      <ModalWithState position="top-center" title="상단 중앙">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>상단 중앙</div>
      </ModalWithState>
      <ModalWithState position="top-right" title="상단 우">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>상단 우측</div>
      </ModalWithState>
      <ModalWithState position="center-left" title="중앙 좌">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>중앙 좌측</div>
      </ModalWithState>
      <ModalWithState position="center" title="정중앙">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>정중앙</div>
      </ModalWithState>
      <ModalWithState position="center-right" title="중앙 우">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>중앙 우측</div>
      </ModalWithState>
      <ModalWithState position="bottom-left" title="하단 좌">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>하단 좌측</div>
      </ModalWithState>
      <ModalWithState position="bottom-center" title="하단 중앙">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>하단 중앙</div>
      </ModalWithState>
      <ModalWithState position="bottom-right" title="하단 우">
        <div style={{
        padding: "20px",
        textAlign: "center"
      }}>하단 우측</div>
      </ModalWithState>
    </div>
}`,...(un=(cn=v.parameters)==null?void 0:cn.docs)==null?void 0:un.source}}};const Nn=["Default","AllSizes","WithoutActionArea","ActionAreaWithoutActions","WithoutCloseButton","CustomContent","LeftAlignedActions","CenterAlignedActions","RightAlignedActions","SingleActionButton","MultipleActionButtons","ModalWithDropdown","SimpleModalWithDropdown","AllPositions"];export{s as ActionAreaWithoutActions,v as AllPositions,l as AllSizes,u as CenterAlignedActions,p as CustomContent,o as Default,c as LeftAlignedActions,f as ModalWithDropdown,h as MultipleActionButtons,x as RightAlignedActions,m as SimpleModalWithDropdown,g as SingleActionButton,a as WithoutActionArea,d as WithoutCloseButton,Nn as __namedExportsOrder,Kn as default};
