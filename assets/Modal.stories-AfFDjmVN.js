import{j as e}from"./jsx-runtime-BK5MheKj.js";import{r as X}from"./iframe-BwNeAgc5.js";import{M as S}from"./Modal-C0QN64HI.js";import"./styled-components.browser.esm-Bhk2HcmV.js";import"./color-8lQV87gD.js";import"./borderColor-CxrOUVvi.js";import"./layerColor-BXjGriCC.js";import"./typography-rNEpvl8r.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./shadow-DVq_1U2q.js";import"./IconSearch-BNXl3mAN.js";const r=({size:n="medium",open:E=!1,onClose:d,title:w="제목",showCloseButton:z=!0,showActionArea:k=!0,children:R,...W})=>{const[B,a]=X.useState(!1),L=()=>{a(!1),d==null||d()},O=()=>{a(!0)};return e.jsxs("div",{children:[e.jsx("button",{onClick:O,style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"모달 열기"}),e.jsx(S,{size:n,open:B,onClose:L,title:w,showCloseButton:z,showActionArea:k,...W,children:R})]})},Y={title:"Components/Modal",component:S,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"모달(Modal)은 사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 화면 위에 나타나는 레이어형 컴포넌트로, 사용자가 명확한 결정을 내리거나 메시지를 확인할 수 있도록 안내합니다."}}},argTypes:{size:{control:"select",options:["x-small","small","medium","large"],description:"모달의 크기를 선택합니다."},open:{control:"boolean",description:"모달의 열림/닫힘 상태를 설정합니다."},title:{control:"text",description:"모달의 제목을 설정합니다."},showCloseButton:{control:"boolean",description:"닫기 버튼 표시 여부를 설정합니다."},showActionArea:{control:"boolean",description:"액션 영역(취소/확인 버튼) 표시 여부를 설정합니다."},onClose:{action:"closed",description:"모달이 닫힐 때 호출되는 콜백 함수입니다."}}},o={render:n=>e.jsx(r,{...n}),args:{size:"medium",open:!1,title:"제목",showCloseButton:!0,showActionArea:!0,children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["모달 콘텐츠 영역입니다.",e.jsx("br",{}),"여기에 원하는 내용을 넣을 수 있습니다."]})}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(r,{size:"x-small",title:"X-Small Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"X-Small 크기"})}),e.jsx(r,{size:"small",title:"Small Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Small 크기"})}),e.jsx(r,{size:"medium",title:"Medium Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Medium 크기"})}),e.jsx(r,{size:"large",title:"Large Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Large 크기"})})]})},s={render:n=>e.jsx(r,{...n}),args:{size:"medium",open:!1,title:"액션 영역 없는 모달",showCloseButton:!0,showActionArea:!1,children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["액션 영역이 없는 모달입니다.",e.jsx("br",{}),"닫기 버튼으로만 닫을 수 있습니다."]})}},l={render:n=>e.jsx(r,{...n}),args:{size:"medium",open:!1,title:"닫기 버튼 없는 모달",showCloseButton:!1,showActionArea:!0,children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["닫기 버튼이 없는 모달입니다.",e.jsx("br",{}),"취소 버튼이나 배경 클릭으로 닫을 수 있습니다."]})}},i={render:n=>e.jsx(r,{...n}),args:{size:"large",open:!1,title:"커스텀 콘텐츠",showCloseButton:!0,showActionArea:!0,children:e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"상세 정보"}),e.jsx("p",{style:{margin:"0 0 12px 0",color:"#666"},children:"이 모달은 다양한 콘텐츠를 포함할 수 있습니다."}),e.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px",color:"#666"},children:[e.jsx("li",{children:"텍스트"}),e.jsx("li",{children:"이미지"}),e.jsx("li",{children:"폼 요소"}),e.jsx("li",{children:"기타 컴포넌트"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("strong",{children:"주의사항:"})," 모달은 중요한 정보를 전달할 때 사용하세요."]})]})}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "제목",
    showCloseButton: true,
    showActionArea: true,
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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var x,f,g;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
      <ModalWithState size="x-small" title="X-Small Modal" children={<div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
            X-Small 크기
          </div>} />
      <ModalWithState size="small" title="Small Modal" children={<div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
            Small 크기
          </div>} />
      <ModalWithState size="medium" title="Medium Modal" children={<div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
            Medium 크기
          </div>} />
      <ModalWithState size="large" title="Large Modal" children={<div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
            Large 크기
          </div>} />
    </div>
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var m,h,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "액션 영역 없는 모달",
    showCloseButton: true,
    showActionArea: false,
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
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var A,j,C;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "닫기 버튼 없는 모달",
    showCloseButton: false,
    showActionArea: true,
    children: <div style={{
      padding: "20px",
      backgroundColor: "#f0f8ff",
      borderRadius: "8px",
      textAlign: "center",
      color: "#666"
    }}>
        닫기 버튼이 없는 모달입니다.
        <br />
        취소 버튼이나 배경 클릭으로 닫을 수 있습니다.
      </div>
  }
}`,...(C=(j=l.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var v,y,M;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: "large",
    open: false,
    title: "커스텀 콘텐츠",
    showCloseButton: true,
    showActionArea: true,
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
}`,...(M=(y=i.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const Z=["Default","AllSizes","WithoutActionArea","WithoutCloseButton","CustomContent"];export{t as AllSizes,i as CustomContent,o as Default,s as WithoutActionArea,l as WithoutCloseButton,Z as __namedExportsOrder,Y as default};
