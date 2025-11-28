import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as M}from"./iframe-UFqvfvuv.js";import{M as B,D as S,T as wn,t as Wn}from"./Modal-CId3f2RI.js";import{O as o,S as r}from"./TextButton-DGNsOX3c.js";import"./IconButton-Wgziwz2Q.js";import"./styled-components.browser.esm-D8ZTpw4b.js";import"./Description-CV9ucGbP.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./fontFamily-CsG1KcIF.js";import"./typography-RVdj8V17.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-CvhBd15j.js";import"./index-CmO7crw5.js";import"./MultiSelect-BEh7y8hN.js";import"./icon_close_outline_16-CCuQhiVB.js";import"./shadow-DVq_1U2q.js";import"./radius-DaoU83SK.js";import"./Chip-D93urvU5.js";import"./Spinner-DqGFLM7A.js";const t=({size:e="medium",position:l="center",open:a=!1,onClose:i,title:yn="제목",showCloseButton:bn=!0,children:jn,actions:Cn,...Sn})=>{const[Mn,A]=M.useState(a),Bn=()=>{A(!1),i==null||i()},An=()=>{A(!0)};return n.jsxs("div",{children:[n.jsx("button",{onClick:An,style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"모달 열기"}),n.jsx(B,{size:e,position:l,open:Mn,onClose:Bn,title:yn,showCloseButton:bn,actions:Cn,...Sn,children:jn})]})},ie={title:"Components/Modal",component:B,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"모달(Modal)은 사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 화면 위에 나타나는 레이어형 컴포넌트로, 사용자가 명확한 결정을 내리거나 메시지를 확인할 수 있도록 안내합니다."}}},argTypes:{size:{control:"select",options:["x-small","small","medium","large","x-large"],description:"모달의 크기를 선택합니다."},position:{control:"select",options:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"],description:"모달의 위치를 선택합니다."},open:{control:!1,description:"모달의 열림/닫힘 상태를 설정합니다."},title:{control:"text",description:"모달의 제목을 설정합니다."},showCloseButton:{control:"boolean",description:"닫기 버튼 표시 여부를 설정합니다."},onClose:{action:"closed",description:"모달이 닫힐 때 호출되는 콜백 함수입니다."}}},s={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"제목",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(o,{variant:"secondary",children:"취소"}),n.jsx(r,{variant:"primary",children:"확인"})]}),children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["모달 콘텐츠 영역입니다.",n.jsx("br",{}),"여기에 원하는 내용을 넣을 수 있습니다."]})}},d={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[n.jsx(t,{size:"x-small",title:"X-Small Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"X-Small 크기"})}),n.jsx(t,{size:"small",title:"Small Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Small 크기"})}),n.jsx(t,{size:"medium",title:"Medium Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Medium 크기"})}),n.jsx(t,{size:"large",title:"Large Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Large 크기"})}),n.jsx(t,{size:"x-large",title:"X-Large Modal",children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"X-Large 크기 (1200px)"})})]})},p={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"액션 영역 없는 모달",showCloseButton:!0,children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["액션 영역이 없는 모달입니다.",n.jsx("br",{}),"닫기 버튼으로만 닫을 수 있습니다."]})}},c={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"액션 영역 있지만 버튼 없음",showCloseButton:!0,children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"actions가 없어서 액션 영역이 나타나지 않습니다."})}},x={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"닫기 버튼 없는 모달",showCloseButton:!1,children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["닫기 버튼이 없는 모달입니다.",n.jsx("br",{}),"배경 클릭으로 닫을 수 있습니다."]})}},u={render:e=>n.jsx(t,{...e}),args:{size:"large",open:!1,title:"커스텀 콘텐츠",showCloseButton:!0,children:n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"상세 정보"}),n.jsx("p",{style:{margin:"0 0 12px 0",color:"#666"},children:"이 모달은 다양한 콘텐츠를 포함할 수 있습니다."}),n.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px",color:"#666"},children:[n.jsx("li",{children:"텍스트"}),n.jsx("li",{children:"이미지"}),n.jsx("li",{children:"폼 요소"}),n.jsx("li",{children:"기타 컴포넌트"})]}),n.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[n.jsx("strong",{children:"주의사항:"})," 모달은 중요한 정보를 전달할 때 사용하세요."]})]})}},g={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"왼쪽 정렬 액션",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-start",width:"100%"},children:[n.jsx(r,{variant:"negative",children:"삭제"}),n.jsx(o,{variant:"secondary",children:"취소"})]}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"왼쪽 정렬된 액션 버튼들입니다."})}},f={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"중앙 정렬 액션",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",width:"100%"},children:[n.jsx(o,{variant:"secondary",children:"취소"}),n.jsx(r,{variant:"primary",children:"확인"})]}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"중앙 정렬된 액션 버튼들입니다."})}},h={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"오른쪽 정렬 액션",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(o,{variant:"secondary",children:"취소"}),n.jsx(r,{variant:"primary",children:"확인"})]}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"오른쪽 정렬된 액션 버튼들입니다."})}},m={render:e=>n.jsx(t,{...e}),args:{size:"medium",open:!1,title:"단일 액션 버튼",showCloseButton:!0,actions:n.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:n.jsx(r,{variant:"positive",children:"완료"})}),children:n.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"단일 액션 버튼 예시입니다."})}},v={render:e=>n.jsx(t,{...e}),args:{size:"large",open:!1,title:"다중 액션 버튼",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(r,{variant:"negative",children:"삭제"}),n.jsx(o,{variant:"brand",children:"임시저장"}),n.jsx(o,{variant:"secondary",children:"취소"}),n.jsx(r,{variant:"primary",children:"저장"})]}),children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["여러 개의 액션 버튼 예시입니다.",n.jsx("br",{}),"삭제, 임시저장, 취소, 저장 버튼이 있습니다."]})}},y={render:e=>n.jsx(t,{...e}),args:{size:"large",open:!1,title:"드롭다운 테스트 모달",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(o,{variant:"secondary",children:"취소"}),n.jsx(r,{variant:"primary",children:"저장"})]}),children:n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"모달 안에서 드롭다운 테스트"}),n.jsx("p",{style:{margin:"0 0 20px 0",color:"#666"},children:"아래 드롭다운들이 모달 위에 정상적으로 표시되는지 확인해보세요."}),n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(S,{type:"selector",label:"일반 드롭다운",placeholder:"옵션을 선택하세요",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"},{label:"옵션 5",value:"option5"}]})}),n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(S,{type:"combobox",label:"검색 가능한 드롭다운",placeholder:"검색하거나 선택하세요",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}]})}),n.jsx("div",{style:{marginBottom:"20px"},children:n.jsx(S,{type:"selector",label:"비활성화된 드롭다운",placeholder:"비활성화됨",disabled:!0,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"}]})}),n.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[n.jsx("strong",{children:"테스트 포인트:"}),n.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[n.jsx("li",{children:"드롭다운 메뉴가 모달 위에 표시되는지"}),n.jsx("li",{children:"드롭다운 메뉴가 모달 경계를 벗어나지 않는지"}),n.jsx("li",{children:"검색 기능이 정상 작동하는지"}),n.jsx("li",{children:"스크롤이 필요한 경우 정상 작동하는지"})]})]})]})}},b={render:e=>{const[l,a]=M.useState("");return n.jsx(t,{...e,children:n.jsx("div",{style:{padding:"20px"},children:n.jsx(S,{type:"selector",label:"옵션 선택",placeholder:"선택하세요",value:l,onChange:a,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"},{label:"옵션 5",value:"option5"}]})})})},args:{size:"medium",open:!1,title:"드롭다운 테스트",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(o,{variant:"secondary",children:"취소"}),n.jsx(r,{variant:"primary",children:"확인"})]})}},j={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",padding:"20px"},children:[n.jsx(t,{position:"top-left",title:"상단 좌",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 좌측"})}),n.jsx(t,{position:"top-center",title:"상단 중앙",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 중앙"})}),n.jsx(t,{position:"top-right",title:"상단 우",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 우측"})}),n.jsx(t,{position:"center-left",title:"중앙 좌",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"중앙 좌측"})}),n.jsx(t,{position:"center",title:"정중앙",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"정중앙"})}),n.jsx(t,{position:"center-right",title:"중앙 우",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"중앙 우측"})}),n.jsx(t,{position:"bottom-left",title:"하단 좌",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 좌측"})}),n.jsx(t,{position:"bottom-center",title:"하단 중앙",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 중앙"})}),n.jsx(t,{position:"bottom-right",title:"하단 우",children:n.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 우측"})})]})},C={parameters:{controls:{disable:!0}},render:()=>{const[e,l]=M.useState(!1),[a,i]=M.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(wn,{}),n.jsxs("div",{children:[n.jsx("button",{onClick:()=>l(!0),style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"첫 번째 모달 열기"}),n.jsx(B,{size:"large",open:e,onClose:()=>l(!1),title:"첫 번째 모달",showCloseButton:!0,actions:n.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:n.jsx(o,{variant:"secondary",onClick:()=>l(!1),children:"닫기"})}),children:n.jsxs("div",{style:{padding:"20px"},children:[n.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"첫 번째 모달 콘텐츠"}),n.jsxs("p",{style:{margin:"0 0 20px 0",color:"#666"},children:["이 모달 위에 또 다른 모달을 띄울 수 있습니다.",n.jsx("br",{}),"아래 버튼을 클릭하면 두 번째 모달이 열립니다."]}),n.jsx("button",{onClick:()=>i(!0),style:{padding:"8px 16px",backgroundColor:"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"두 번째 모달 열기"}),n.jsxs("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[n.jsx("strong",{children:"참고:"}),n.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[n.jsx("li",{children:"두 번째 모달이 첫 번째 모달 위에 표시됩니다"}),n.jsx("li",{children:"각 모달의 배경 클릭으로 닫을 수 있습니다"}),n.jsx("li",{children:"두 번째 모달에서 확인 버튼을 누르면 Toast가 표시됩니다"}),n.jsx("li",{children:"Toast는 모든 Modal 위에 표시됩니다 (z-index: 10000)"})]})]})]})}),n.jsx(B,{size:"medium",open:a,onClose:()=>i(!1),title:"두 번째 모달",showCloseButton:!0,actions:n.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[n.jsx(o,{variant:"secondary",onClick:()=>i(!1),children:"닫기"}),n.jsx(r,{variant:"primary",onClick:()=>{Wn.success("저장되었습니다","Toast가 모든 Modal 위에 표시됩니다"),i(!1)},children:"확인"})]}),children:n.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"8px",textAlign:"center"},children:[n.jsx("p",{style:{margin:"0 0 12px 0",color:"#856404"},children:n.jsx("strong",{children:"두 번째 모달입니다!"})}),n.jsxs("p",{style:{margin:"0",color:"#856404"},children:["첫 번째 모달 위에 표시됩니다.",n.jsx("br",{}),"이 모달을 닫으면 첫 번째 모달이 다시 보입니다."]})]})})]})]})}};var w,W,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(W=s.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var R,z,O;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
      <ModalWithState size="x-large" title="X-Large Modal">
        <div style={{
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "8px",
        textAlign: "center",
        color: "#666"
      }}>
          X-Large 크기 (1200px)
        </div>
      </ModalWithState>
    </div>
}`,...(O=(z=d.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var D,L,T;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(T=(L=p.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var F,X,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(V=(X=c.parameters)==null?void 0:X.docs)==null?void 0:V.source}}};var E,G,H;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,P,_;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(P=u.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var I,q,J;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var nn,en,tn;m.parameters={...m.parameters,docs:{...(nn=m.parameters)==null?void 0:nn.docs,source:{originalSource:`{
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
}`,...(tn=(en=m.parameters)==null?void 0:en.docs)==null?void 0:tn.source}}};var on,rn,ln;v.parameters={...v.parameters,docs:{...(on=v.parameters)==null?void 0:on.docs,source:{originalSource:`{
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
}`,...(ln=(rn=v.parameters)==null?void 0:rn.docs)==null?void 0:ln.source}}};var an,sn,dn;y.parameters={...y.parameters,docs:{...(an=y.parameters)==null?void 0:an.docs,source:{originalSource:`{
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
}`,...(dn=(sn=y.parameters)==null?void 0:sn.docs)==null?void 0:dn.source}}};var pn,cn,xn;b.parameters={...b.parameters,docs:{...(pn=b.parameters)==null?void 0:pn.docs,source:{originalSource:`{
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
}`,...(xn=(cn=b.parameters)==null?void 0:cn.docs)==null?void 0:xn.source}}};var un,gn,fn;j.parameters={...j.parameters,docs:{...(un=j.parameters)==null?void 0:un.docs,source:{originalSource:`{
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
}`,...(fn=(gn=j.parameters)==null?void 0:gn.docs)==null?void 0:fn.source}}};var hn,mn,vn;C.parameters={...C.parameters,docs:{...(hn=C.parameters)==null?void 0:hn.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [firstModalOpen, setFirstModalOpen] = useState(false);
    const [secondModalOpen, setSecondModalOpen] = useState(false);
    return <>
        <ToastSystem />
        <div>
        <button onClick={() => setFirstModalOpen(true)} style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
          첫 번째 모달 열기
        </button>

        <Modal size="large" open={firstModalOpen} onClose={() => setFirstModalOpen(false)} title="첫 번째 모달" showCloseButton={true} actions={<div style={{
          display: "flex",
          gap: "8px",
          justifyContent: "flex-end",
          width: "100%"
        }}>
              <OutlineButton variant="secondary" onClick={() => setFirstModalOpen(false)}>
                닫기
              </OutlineButton>
            </div>}>
          <div style={{
            padding: "20px"
          }}>
            <h3 style={{
              margin: "0 0 16px 0",
              color: "#333"
            }}>
              첫 번째 모달 콘텐츠
            </h3>
            <p style={{
              margin: "0 0 20px 0",
              color: "#666"
            }}>
              이 모달 위에 또 다른 모달을 띄울 수 있습니다.
              <br />
              아래 버튼을 클릭하면 두 번째 모달이 열립니다.
            </p>

            <button onClick={() => setSecondModalOpen(true)} style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}>
              두 번째 모달 열기
            </button>

            <div style={{
              marginTop: "20px",
              padding: "16px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
              border: "1px solid #e9ecef"
            }}>
              <strong>참고:</strong>
              <ul style={{
                margin: "8px 0 0 0",
                paddingLeft: "20px"
              }}>
                <li>두 번째 모달이 첫 번째 모달 위에 표시됩니다</li>
                <li>각 모달의 배경 클릭으로 닫을 수 있습니다</li>
                <li>두 번째 모달에서 확인 버튼을 누르면 Toast가 표시됩니다</li>
                <li>Toast는 모든 Modal 위에 표시됩니다 (z-index: 10000)</li>
              </ul>
            </div>
          </div>
        </Modal>

        <Modal size="medium" open={secondModalOpen} onClose={() => setSecondModalOpen(false)} title="두 번째 모달" showCloseButton={true} actions={<div style={{
          display: "flex",
          gap: "8px",
          justifyContent: "flex-end",
          width: "100%"
        }}>
              <OutlineButton variant="secondary" onClick={() => setSecondModalOpen(false)}>
                닫기
              </OutlineButton>
              <SolidButton variant="primary" onClick={() => {
            toast.success("저장되었습니다", "Toast가 모든 Modal 위에 표시됩니다");
            setSecondModalOpen(false);
          }}>
                확인
              </SolidButton>
            </div>}>
          <div style={{
            padding: "20px",
            backgroundColor: "#fff3cd",
            borderRadius: "8px",
            textAlign: "center"
          }}>
            <p style={{
              margin: "0 0 12px 0",
              color: "#856404"
            }}>
              <strong>두 번째 모달입니다!</strong>
            </p>
            <p style={{
              margin: "0",
              color: "#856404"
            }}>
              첫 번째 모달 위에 표시됩니다.
              <br />
              이 모달을 닫으면 첫 번째 모달이 다시 보입니다.
            </p>
          </div>
        </Modal>
        </div>
      </>;
  }
}`,...(vn=(mn=C.parameters)==null?void 0:mn.docs)==null?void 0:vn.source}}};const le=["Default","AllSizes","WithoutActionArea","ActionAreaWithoutActions","WithoutCloseButton","CustomContent","LeftAlignedActions","CenterAlignedActions","RightAlignedActions","SingleActionButton","MultipleActionButtons","ModalWithDropdown","SimpleModalWithDropdown","AllPositions","NestedModals"];export{c as ActionAreaWithoutActions,j as AllPositions,d as AllSizes,f as CenterAlignedActions,u as CustomContent,s as Default,g as LeftAlignedActions,y as ModalWithDropdown,v as MultipleActionButtons,C as NestedModals,h as RightAlignedActions,b as SimpleModalWithDropdown,m as SingleActionButton,p as WithoutActionArea,x as WithoutCloseButton,le as __namedExportsOrder,ie as default};
