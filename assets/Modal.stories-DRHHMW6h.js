import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-D0ynm1mK.js";import{c as a}from"./styled-components.browser.esm-o0t8qbnT.js";import{I as Fe,T as Xe,t as Ne}from"./ToastSystem-Dkx4VzMv.js";import{c as r}from"./color-CiwAFuFb.js";import{b as $e}from"./borderColor-C_RHITEf.js";import{r as x}from"./radius-DaoU83SK.js";import{s as Ee}from"./shadow-DVq_1U2q.js";import{s as o}from"./spacing-tE1IiUFl.js";import{a as Te}from"./typography-CHdGJV44.js";import{t as Ie}from"./textColor-DLZeZODc.js";import{O as d}from"./OutlineButton-C9xJudKf.js";import{S as p}from"./SolidButton-gIYCXWta.js";import{D as T}from"./Dropdown-c2THJZGN.js";import"./preload-helper-eJNa_G2e.js";import"./IconCircleCheck-BBUUqRs3.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./types-D8y_ICtu.js";import"./Label-DLXz1w7W.js";import"./ComboBox-CNQ3tXaH.js";import"./index-CGNkv1wM.js";import"./index-C3v1QmE8.js";import"./IconArrowUp-Cts_pkXJ.js";import"./Menu-C2cyYB0M.js";import"./Cell-CGl_2yBH.js";import"./IconCheck-Cgh-IEDk.js";import"./MultiSelect-wYqPcqAb.js";import"./Chip-DFvqueQm.js";import"./icon_close_outline_16-Badxvc54.js";import"./Selector-CzUkHgVC.js";import"./Description-RyeBF6Jl.js";const De={light:{"bg-layer-basement":r.gray[50],"bg-layer-fill":r.gray[25],"bg-layer-floating":r.common[100],"bg-overlay":r.common.dimmer},dark:{"bg-layer-basement":r.gray[990],"bg-layer-default":r.gray[975],"bg-layer-fill":r.gray[950],"bg-layer-floating":r.gray[975]}},g=({size:n="medium",position:l="center",open:s=!1,onClose:i,title:D="제목",description:f,showCloseButton:L=!0,children:V,actions:m,className:q="",style:h,...F})=>{const[y,X]=u.useState(!1),[Le,N]=u.useState(!1);if(u.useEffect(()=>{if(s){N(!0);const c=setTimeout(()=>{X(!0)},10);return()=>clearTimeout(c)}else{X(!1);const c=setTimeout(()=>{N(!1)},200);return()=>clearTimeout(c)}},[s]),!Le)return null;const Ve=c=>{if(c.target.closest("[data-portal-menu]")){c.preventDefault(),c.stopPropagation();return}c.target===c.currentTarget&&(i==null||i())},qe=()=>{i==null||i()};return e.jsx(Pe,{$isVisible:y,$position:l,onMouseDown:Ve,children:e.jsxs(He,{$size:n,$isVisible:y,className:q,style:h,...F,children:[e.jsxs(_e,{children:[e.jsxs(Ge,{children:[e.jsx(Je,{children:D}),f&&e.jsx(Ke,{children:f})]}),L&&e.jsx(Qe,{onClick:qe,children:e.jsx(Fe,{width:24,height:24,color:"currentColor"})})]}),e.jsx(Ue,{children:V}),m&&e.jsx(Ye,{children:m})]})})},Pe=a.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${De.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:n})=>n?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({$position:n})=>{const l=n.startsWith("top-")?"flex-start":n.startsWith("bottom-")?"flex-end":"center",s=n.endsWith("-left")?"flex-start":n.endsWith("-right")?"flex-end":"center";return`
      align-items: ${l};
      justify-content: ${s};
    `}}
`,He=a.div`
  background-color: ${De.light["bg-layer-floating"]};
  border: 1px solid ${$e.light["color-border-primary"]};
  border-radius: ${x["rounded-3"]};
  box-shadow: ${Ee.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: visible;
  transform: ${({$isVisible:n})=>n?"scale(1)":"scale(0.95)"};
  transition: transform 0.2s ease-in-out;

  ${({$size:n})=>{switch(n){case"x-small":return`
          width: 320px;
        `;case"small":return`
          width: 480px;
        `;case"medium":return`
          width: 640px;
        `;case"large":return`
          width: 960px;
        `;case"x-large":return`
          width: 1200px;
        `;default:return`
          width: 500px;
          min-height: 300px;
        `}}}
`,_e=a.div`
  padding: ${o.gap["gap-6"]} ${o.gap["gap-6"]} ${o.gap["gap-3"]}
    ${o.gap["gap-6"]};
  border-radius: ${x["rounded-3"]} ${x["rounded-3"]} 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,Ge=a.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
`,Je=a.h2`
  ${Te.heading1}
  font-weight: 600;
  color: ${r.gray[950]};
  margin: 0;
`,Ke=a.p`
  ${Te.body2}
  color: ${Ie.light["fg-neutral-alternative"]};
  margin: 0;
`,Qe=a.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${r.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,Ue=a.div`
  padding: ${o.gap["gap-3"]} ${o.gap["gap-6"]};
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,Ye=a.div`
  padding: ${o.gap["gap-3"]} ${o.gap["gap-6"]} ${o.gap["gap-6"]}
    ${o.gap["gap-6"]};
  display: flex;
  gap: ${o.gap["gap-2"]};
`;a.button`
  padding: ${o.gap["gap-2"]} ${o.gap["gap-4"]};
  background-color: ${r.common[100]};
  border: 1px solid ${$e.light["color-border-primary"]};
  border-radius: ${x["rounded-2"]};
  color: ${r.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${r.gray[50]};
  }
`;a.button`
  padding: ${o.gap["gap-2"]} ${o.gap["gap-4"]};
  background-color: ${r.gray[950]};
  border: none;
  border-radius: ${x["rounded-2"]};
  color: ${r.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${r.gray[925]};
  }
`;g.displayName="Modal";g.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'center-left'
| 'center'
| 'center-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'center-left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'center-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'제목'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const t=({size:n="medium",position:l="center",open:s=!1,onClose:i,title:D="제목",showCloseButton:f=!0,children:L,actions:V,...m})=>{const[q,h]=u.useState(s),F=()=>{h(!1),i==null||i()},y=()=>{h(!0)};return e.jsxs("div",{children:[e.jsx("button",{onClick:y,style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"모달 열기"}),e.jsx(g,{size:n,position:l,open:q,onClose:F,title:D,showCloseButton:f,actions:V,...m,children:L})]})},Ln={title:"Components/Modal",component:g,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"모달(Modal)은 사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 화면 위에 나타나는 레이어형 컴포넌트로, 사용자가 명확한 결정을 내리거나 메시지를 확인할 수 있도록 안내합니다."}}},argTypes:{size:{control:"select",options:["x-small","small","medium","large","x-large"],description:"모달의 크기를 선택합니다."},position:{control:"select",options:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"],description:"모달의 위치를 선택합니다."},open:{control:!1,description:"모달의 열림/닫힘 상태를 설정합니다."},title:{control:"text",description:"모달의 제목을 설정합니다."},showCloseButton:{control:"boolean",description:"닫기 버튼 표시 여부를 설정합니다."},onClose:{action:"closed",description:"모달이 닫힐 때 호출되는 콜백 함수입니다."}}},v={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"제목",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[e.jsx(d,{variant:"secondary",children:"취소"}),e.jsx(p,{variant:"primary",children:"확인"})]}),children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["모달 콘텐츠 영역입니다.",e.jsx("br",{}),"여기에 원하는 내용을 넣을 수 있습니다."]})}},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[e.jsx(t,{size:"x-small",title:"X-Small Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"X-Small 크기"})}),e.jsx(t,{size:"small",title:"Small Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Small 크기"})}),e.jsx(t,{size:"medium",title:"Medium Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Medium 크기"})}),e.jsx(t,{size:"large",title:"Large Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"Large 크기"})}),e.jsx(t,{size:"x-large",title:"X-Large Modal",children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"X-Large 크기 (1200px)"})})]})},j={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"액션 영역 없는 모달",showCloseButton:!0,children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["액션 영역이 없는 모달입니다.",e.jsx("br",{}),"닫기 버튼으로만 닫을 수 있습니다."]})}},C={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"액션 영역 있지만 버튼 없음",showCloseButton:!0,children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"actions가 없어서 액션 영역이 나타나지 않습니다."})}},S={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"닫기 버튼 없는 모달",showCloseButton:!1,children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["닫기 버튼이 없는 모달입니다.",e.jsx("br",{}),"배경 클릭으로 닫을 수 있습니다."]})}},w={render:n=>e.jsx(t,{...n}),args:{size:"large",open:!1,title:"커스텀 콘텐츠",showCloseButton:!0,children:e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"상세 정보"}),e.jsx("p",{style:{margin:"0 0 12px 0",color:"#666"},children:"이 모달은 다양한 콘텐츠를 포함할 수 있습니다."}),e.jsxs("ul",{style:{margin:"0 0 16px 0",paddingLeft:"20px",color:"#666"},children:[e.jsx("li",{children:"텍스트"}),e.jsx("li",{children:"이미지"}),e.jsx("li",{children:"폼 요소"}),e.jsx("li",{children:"기타 컴포넌트"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("strong",{children:"주의사항:"})," 모달은 중요한 정보를 전달할 때 사용하세요."]})]})}},M={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"왼쪽 정렬 액션",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-start",width:"100%"},children:[e.jsx(p,{variant:"negative",children:"삭제"}),e.jsx(d,{variant:"secondary",children:"취소"})]}),children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"왼쪽 정렬된 액션 버튼들입니다."})}},B={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"중앙 정렬 액션",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"center",width:"100%"},children:[e.jsx(d,{variant:"secondary",children:"취소"}),e.jsx(p,{variant:"primary",children:"확인"})]}),children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"중앙 정렬된 액션 버튼들입니다."})}},A={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"오른쪽 정렬 액션",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[e.jsx(d,{variant:"secondary",children:"취소"}),e.jsx(p,{variant:"primary",children:"확인"})]}),children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"오른쪽 정렬된 액션 버튼들입니다."})}},k={render:n=>e.jsx(t,{...n}),args:{size:"medium",open:!1,title:"단일 액션 버튼",showCloseButton:!0,actions:e.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:e.jsx(p,{variant:"positive",children:"완료"})}),children:e.jsx("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:"단일 액션 버튼 예시입니다."})}},W={render:n=>e.jsx(t,{...n}),args:{size:"large",open:!1,title:"다중 액션 버튼",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[e.jsx(p,{variant:"negative",children:"삭제"}),e.jsx(d,{variant:"brand",children:"임시저장"}),e.jsx(d,{variant:"secondary",children:"취소"}),e.jsx(p,{variant:"primary",children:"저장"})]}),children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px",textAlign:"center",color:"#666"},children:["여러 개의 액션 버튼 예시입니다.",e.jsx("br",{}),"삭제, 임시저장, 취소, 저장 버튼이 있습니다."]})}},R={render:n=>e.jsx(t,{...n}),args:{size:"large",open:!1,title:"드롭다운 테스트 모달",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[e.jsx(d,{variant:"secondary",children:"취소"}),e.jsx(p,{variant:"primary",children:"저장"})]}),children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"모달 안에서 드롭다운 테스트"}),e.jsx("p",{style:{margin:"0 0 20px 0",color:"#666"},children:"아래 드롭다운들이 모달 위에 정상적으로 표시되는지 확인해보세요."}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsx(T,{type:"selector",label:"일반 드롭다운",placeholder:"옵션을 선택하세요",options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"},{label:"옵션 5",value:"option5"}]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsx(T,{type:"combobox",label:"검색 가능한 드롭다운",placeholder:"검색하거나 선택하세요",options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}]})}),e.jsx("div",{style:{marginBottom:"20px"},children:e.jsx(T,{type:"selector",label:"비활성화된 드롭다운",placeholder:"비활성화됨",disabled:!0,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"}]})}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("strong",{children:"테스트 포인트:"}),e.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[e.jsx("li",{children:"드롭다운 메뉴가 모달 위에 표시되는지"}),e.jsx("li",{children:"드롭다운 메뉴가 모달 경계를 벗어나지 않는지"}),e.jsx("li",{children:"검색 기능이 정상 작동하는지"}),e.jsx("li",{children:"스크롤이 필요한 경우 정상 작동하는지"})]})]})]})}},z={render:n=>{const[l,s]=u.useState("");return e.jsx(t,{...n,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(T,{type:"selector",label:"옵션 선택",placeholder:"선택하세요",value:l,onChange:s,options:[{label:"옵션 1",value:"option1"},{label:"옵션 2",value:"option2"},{label:"옵션 3",value:"option3"},{label:"옵션 4",value:"option4"},{label:"옵션 5",value:"option5"}]})})})},args:{size:"medium",open:!1,title:"드롭다운 테스트",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[e.jsx(d,{variant:"secondary",children:"취소"}),e.jsx(p,{variant:"primary",children:"확인"})]})}},O={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",padding:"20px"},children:[e.jsx(t,{position:"top-left",title:"상단 좌",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 좌측"})}),e.jsx(t,{position:"top-center",title:"상단 중앙",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 중앙"})}),e.jsx(t,{position:"top-right",title:"상단 우",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"상단 우측"})}),e.jsx(t,{position:"center-left",title:"중앙 좌",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"중앙 좌측"})}),e.jsx(t,{position:"center",title:"정중앙",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"정중앙"})}),e.jsx(t,{position:"center-right",title:"중앙 우",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"중앙 우측"})}),e.jsx(t,{position:"bottom-left",title:"하단 좌",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 좌측"})}),e.jsx(t,{position:"bottom-center",title:"하단 중앙",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 중앙"})}),e.jsx(t,{position:"bottom-right",title:"하단 우",children:e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"하단 우측"})})]})},$={parameters:{controls:{disable:!0}},render:()=>{const[n,l]=u.useState(!1),[s,i]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(Xe,{}),e.jsxs("div",{children:[e.jsx("button",{onClick:()=>l(!0),style:{padding:"8px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"첫 번째 모달 열기"}),e.jsx(g,{size:"large",open:n,onClose:()=>l(!1),title:"첫 번째 모달",showCloseButton:!0,actions:e.jsx("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:e.jsx(d,{variant:"secondary",onClick:()=>l(!1),children:"닫기"})}),children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{style:{margin:"0 0 16px 0",color:"#333"},children:"첫 번째 모달 콘텐츠"}),e.jsxs("p",{style:{margin:"0 0 20px 0",color:"#666"},children:["이 모달 위에 또 다른 모달을 띄울 수 있습니다.",e.jsx("br",{}),"아래 버튼을 클릭하면 두 번째 모달이 열립니다."]}),e.jsx("button",{onClick:()=>i(!0),style:{padding:"8px 16px",backgroundColor:"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"두 번째 모달 열기"}),e.jsxs("div",{style:{marginTop:"20px",padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #e9ecef"},children:[e.jsx("strong",{children:"참고:"}),e.jsxs("ul",{style:{margin:"8px 0 0 0",paddingLeft:"20px"},children:[e.jsx("li",{children:"두 번째 모달이 첫 번째 모달 위에 표시됩니다"}),e.jsx("li",{children:"각 모달의 배경 클릭으로 닫을 수 있습니다"}),e.jsx("li",{children:"두 번째 모달에서 확인 버튼을 누르면 Toast가 표시됩니다"}),e.jsx("li",{children:"Toast는 모든 Modal 위에 표시됩니다 (z-index: 10000)"})]})]})]})}),e.jsx(g,{size:"medium",open:s,onClose:()=>i(!1),title:"두 번째 모달",showCloseButton:!0,actions:e.jsxs("div",{style:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"},children:[e.jsx(d,{variant:"secondary",onClick:()=>i(!1),children:"닫기"}),e.jsx(p,{variant:"primary",onClick:()=>{Ne.success("저장되었습니다","Toast가 모든 Modal 위에 표시됩니다"),i(!1)},children:"확인"})]}),children:e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fff3cd",borderRadius:"8px",textAlign:"center"},children:[e.jsx("p",{style:{margin:"0 0 12px 0",color:"#856404"},children:e.jsx("strong",{children:"두 번째 모달입니다!"})}),e.jsxs("p",{style:{margin:"0",color:"#856404"},children:["첫 번째 모달 위에 표시됩니다.",e.jsx("br",{}),"이 모달을 닫으면 첫 번째 모달이 다시 보입니다."]})]})})]})]})}};var E,I,P;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '제목',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        모달 콘텐츠 영역입니다.
        <br />
        여기에 원하는 내용을 넣을 수 있습니다.
      </div>
  }
}`,...(P=(I=v.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var H,_,G;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <ModalWithState size='x-small' title='X-Small Modal'>
        <div style={{
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666'
      }}>
          X-Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size='small' title='Small Modal'>
        <div style={{
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666'
      }}>
          Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size='medium' title='Medium Modal'>
        <div style={{
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666'
      }}>
          Medium 크기
        </div>
      </ModalWithState>
      <ModalWithState size='large' title='Large Modal'>
        <div style={{
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666'
      }}>
          Large 크기
        </div>
      </ModalWithState>
      <ModalWithState size='x-large' title='X-Large Modal'>
        <div style={{
        padding: '20px',
        backgroundColor: '#f0f8ff',
        borderRadius: '8px',
        textAlign: 'center',
        color: '#666'
      }}>
          X-Large 크기 (1200px)
        </div>
      </ModalWithState>
    </div>
}`,...(G=(_=b.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,K,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '액션 영역 없는 모달',
    showCloseButton: true,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        액션 영역이 없는 모달입니다.
        <br />
        닫기 버튼으로만 닫을 수 있습니다.
      </div>
  }
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '액션 영역 있지만 버튼 없음',
    showCloseButton: true,
    // actions 없음 - 액션 영역이 나타나지 않음
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        actions가 없어서 액션 영역이 나타나지 않습니다.
      </div>
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '닫기 버튼 없는 모달',
    showCloseButton: false,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        닫기 버튼이 없는 모달입니다.
        <br />
        배경 클릭으로 닫을 수 있습니다.
      </div>
  }
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,oe,ie;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'large',
    open: false,
    title: '커스텀 콘텐츠',
    showCloseButton: true,
    children: <div>
        <h3 style={{
        margin: '0 0 16px 0',
        color: '#333'
      }}>상세 정보</h3>
        <p style={{
        margin: '0 0 12px 0',
        color: '#666'
      }}>
          이 모달은 다양한 콘텐츠를 포함할 수 있습니다.
        </p>
        <ul style={{
        margin: '0 0 16px 0',
        paddingLeft: '20px',
        color: '#666'
      }}>
          <li>텍스트</li>
          <li>이미지</li>
          <li>폼 요소</li>
          <li>기타 컴포넌트</li>
        </ul>
        <div style={{
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
          <strong>주의사항:</strong> 모달은 중요한 정보를 전달할 때 사용하세요.
        </div>
      </div>
  }
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ae,se;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '왼쪽 정렬 액션',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-start',
      width: '100%'
    }}>
        <SolidButton variant='negative'>삭제</SolidButton>
        <OutlineButton variant='secondary'>취소</OutlineButton>
      </div>,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        왼쪽 정렬된 액션 버튼들입니다.
      </div>
  }
}`,...(se=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var de,pe,ce;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '중앙 정렬 액션',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'center',
      width: '100%'
    }}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        중앙 정렬된 액션 버튼들입니다.
      </div>
  }
}`,...(ce=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var ue,ge,xe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '오른쪽 정렬 액션',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        오른쪽 정렬된 액션 버튼들입니다.
      </div>
  }
}`,...(xe=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var fe,me,he;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'medium',
    open: false,
    title: '단일 액션 버튼',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
        <SolidButton variant='positive'>완료</SolidButton>
      </div>,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        단일 액션 버튼 예시입니다.
      </div>
  }
}`,...(he=(me=k.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ye,ve,be;W.parameters={...W.parameters,docs:{...(ye=W.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'large',
    open: false,
    title: '다중 액션 버튼',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
        <SolidButton variant='negative'>삭제</SolidButton>
        <OutlineButton variant='brand'>임시저장</OutlineButton>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>저장</SolidButton>
      </div>,
    children: <div style={{
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '8px',
      textAlign: 'center',
      color: '#666'
    }}>
        여러 개의 액션 버튼 예시입니다.
        <br />
        삭제, 임시저장, 취소, 저장 버튼이 있습니다.
      </div>
  }
}`,...(be=(ve=W.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var je,Ce,Se;R.parameters={...R.parameters,docs:{...(je=R.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <ModalWithState {...args} />,
  args: {
    size: 'large',
    open: false,
    title: '드롭다운 테스트 모달',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>저장</SolidButton>
      </div>,
    children: <div style={{
      padding: '20px'
    }}>
        <h3 style={{
        margin: '0 0 16px 0',
        color: '#333'
      }}>모달 안에서 드롭다운 테스트</h3>
        <p style={{
        margin: '0 0 20px 0',
        color: '#666'
      }}>
          아래 드롭다운들이 모달 위에 정상적으로 표시되는지 확인해보세요.
        </p>

        <div style={{
        marginBottom: '20px'
      }}>
          <Dropdown type='selector' label='일반 드롭다운' placeholder='옵션을 선택하세요' options={[{
          label: '옵션 1',
          value: 'option1'
        }, {
          label: '옵션 2',
          value: 'option2'
        }, {
          label: '옵션 3',
          value: 'option3'
        }, {
          label: '옵션 4',
          value: 'option4'
        }, {
          label: '옵션 5',
          value: 'option5'
        }]} />
        </div>

        <div style={{
        marginBottom: '20px'
      }}>
          <Dropdown type='combobox' label='검색 가능한 드롭다운' placeholder='검색하거나 선택하세요' options={[{
          label: 'Apple',
          value: 'apple'
        }, {
          label: 'Banana',
          value: 'banana'
        }, {
          label: 'Cherry',
          value: 'cherry'
        }, {
          label: 'Date',
          value: 'date'
        }, {
          label: 'Elderberry',
          value: 'elderberry'
        }, {
          label: 'Fig',
          value: 'fig'
        }, {
          label: 'Grape',
          value: 'grape'
        }, {
          label: 'Honeydew',
          value: 'honeydew'
        }]} />
        </div>

        <div style={{
        marginBottom: '20px'
      }}>
          <Dropdown type='selector' label='비활성화된 드롭다운' placeholder='비활성화됨' disabled={true} options={[{
          label: '옵션 1',
          value: 'option1'
        }, {
          label: '옵션 2',
          value: 'option2'
        }]} />
        </div>

        <div style={{
        padding: '16px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e9ecef'
      }}>
          <strong>테스트 포인트:</strong>
          <ul style={{
          margin: '8px 0 0 0',
          paddingLeft: '20px'
        }}>
            <li>드롭다운 메뉴가 모달 위에 표시되는지</li>
            <li>드롭다운 메뉴가 모달 경계를 벗어나지 않는지</li>
            <li>검색 기능이 정상 작동하는지</li>
            <li>스크롤이 필요한 경우 정상 작동하는지</li>
          </ul>
        </div>
      </div>
  }
}`,...(Se=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var we,Me,Be;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => {
    const [dropdownValue, setDropdownValue] = useState('');
    return <ModalWithState {...args}>
        <div style={{
        padding: '20px'
      }}>
          <Dropdown type='selector' label='옵션 선택' placeholder='선택하세요' value={dropdownValue} onChange={setDropdownValue} options={[{
          label: '옵션 1',
          value: 'option1'
        }, {
          label: '옵션 2',
          value: 'option2'
        }, {
          label: '옵션 3',
          value: 'option3'
        }, {
          label: '옵션 4',
          value: 'option4'
        }, {
          label: '옵션 5',
          value: 'option5'
        }]} />
        </div>
      </ModalWithState>;
  },
  args: {
    size: 'medium',
    open: false,
    title: '드롭다운 테스트',
    showCloseButton: true,
    actions: <div style={{
      display: 'flex',
      gap: '8px',
      justifyContent: 'flex-end',
      width: '100%'
    }}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>
  }
}`,...(Be=(Me=z.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Ae,ke,We;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    padding: '20px'
  }}>
      <ModalWithState position='top-left' title='상단 좌'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>상단 좌측</div>
      </ModalWithState>
      <ModalWithState position='top-center' title='상단 중앙'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>상단 중앙</div>
      </ModalWithState>
      <ModalWithState position='top-right' title='상단 우'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>상단 우측</div>
      </ModalWithState>
      <ModalWithState position='center-left' title='중앙 좌'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>중앙 좌측</div>
      </ModalWithState>
      <ModalWithState position='center' title='정중앙'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>정중앙</div>
      </ModalWithState>
      <ModalWithState position='center-right' title='중앙 우'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>중앙 우측</div>
      </ModalWithState>
      <ModalWithState position='bottom-left' title='하단 좌'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>하단 좌측</div>
      </ModalWithState>
      <ModalWithState position='bottom-center' title='하단 중앙'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>하단 중앙</div>
      </ModalWithState>
      <ModalWithState position='bottom-right' title='하단 우'>
        <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>하단 우측</div>
      </ModalWithState>
    </div>
}`,...(We=(ke=O.parameters)==null?void 0:ke.docs)==null?void 0:We.source}}};var Re,ze,Oe;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            첫 번째 모달 열기
          </button>

          <Modal size='large' open={firstModalOpen} onClose={() => setFirstModalOpen(false)} title='첫 번째 모달' showCloseButton={true} actions={<div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%'
        }}>
                <OutlineButton variant='secondary' onClick={() => setFirstModalOpen(false)}>
                  닫기
                </OutlineButton>
              </div>}>
            <div style={{
            padding: '20px'
          }}>
              <h3 style={{
              margin: '0 0 16px 0',
              color: '#333'
            }}>첫 번째 모달 콘텐츠</h3>
              <p style={{
              margin: '0 0 20px 0',
              color: '#666'
            }}>
                이 모달 위에 또 다른 모달을 띄울 수 있습니다.
                <br />
                아래 버튼을 클릭하면 두 번째 모달이 열립니다.
              </p>

              <button onClick={() => setSecondModalOpen(true)} style={{
              padding: '8px 16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
                두 번째 모달 열기
              </button>

              <div style={{
              marginTop: '20px',
              padding: '16px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
                <strong>참고:</strong>
                <ul style={{
                margin: '8px 0 0 0',
                paddingLeft: '20px'
              }}>
                  <li>두 번째 모달이 첫 번째 모달 위에 표시됩니다</li>
                  <li>각 모달의 배경 클릭으로 닫을 수 있습니다</li>
                  <li>두 번째 모달에서 확인 버튼을 누르면 Toast가 표시됩니다</li>
                  <li>Toast는 모든 Modal 위에 표시됩니다 (z-index: 10000)</li>
                </ul>
              </div>
            </div>
          </Modal>

          <Modal size='medium' open={secondModalOpen} onClose={() => setSecondModalOpen(false)} title='두 번째 모달' showCloseButton={true} actions={<div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'flex-end',
          width: '100%'
        }}>
                <OutlineButton variant='secondary' onClick={() => setSecondModalOpen(false)}>
                  닫기
                </OutlineButton>
                <SolidButton variant='primary' onClick={() => {
            toast.success('저장되었습니다', 'Toast가 모든 Modal 위에 표시됩니다');
            setSecondModalOpen(false);
          }}>
                  확인
                </SolidButton>
              </div>}>
            <div style={{
            padding: '20px',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
              <p style={{
              margin: '0 0 12px 0',
              color: '#856404'
            }}>
                <strong>두 번째 모달입니다!</strong>
              </p>
              <p style={{
              margin: '0',
              color: '#856404'
            }}>
                첫 번째 모달 위에 표시됩니다.
                <br />이 모달을 닫으면 첫 번째 모달이 다시 보입니다.
              </p>
            </div>
          </Modal>
        </div>
      </>;
  }
}`,...(Oe=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};const Vn=["Default","AllSizes","WithoutActionArea","ActionAreaWithoutActions","WithoutCloseButton","CustomContent","LeftAlignedActions","CenterAlignedActions","RightAlignedActions","SingleActionButton","MultipleActionButtons","ModalWithDropdown","SimpleModalWithDropdown","AllPositions","NestedModals"];export{C as ActionAreaWithoutActions,O as AllPositions,b as AllSizes,B as CenterAlignedActions,w as CustomContent,v as Default,M as LeftAlignedActions,R as ModalWithDropdown,W as MultipleActionButtons,$ as NestedModals,A as RightAlignedActions,z as SimpleModalWithDropdown,k as SingleActionButton,j as WithoutActionArea,S as WithoutCloseButton,Vn as __namedExportsOrder,Ln as default};
