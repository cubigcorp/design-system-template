import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-BQlxtUxC.js";import{c as m}from"./styled-components.browser.esm-BsJdvhJY.js";import{I as Be,T as Te,t as Se}from"./ToastSystem-CVyqnlve.js";import{c as o}from"./color-CZjzAmeO.js";import{b as ce}from"./borderColor-DnXd17KV.js";import{r as B}from"./radius-DaoU83SK.js";import{s as Ce}from"./shadow-DVq_1U2q.js";import{s}from"./spacing-tE1IiUFl.js";import{a as pe}from"./typography-CIxJpf_z.js";import{t as ue}from"./textColor-D-yqVS6r.js";import{O as v,S as d}from"./SolidButton-DQY_Qkek.js";import{T as X}from"./TextField-CUnXTxu8.js";import{D as Oe}from"./Dropdown-DpgWHeCD.js";import{T as we}from"./TextButton-d5WCY_H0.js";import"./preload-helper-eJNa_G2e.js";import"./IconCircleCheck-BBUUqRs3.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./brandColor-DIMtCTH6.js";import"./negativeColor-BkNdSW00.js";import"./types-I2UowK_C.js";import"./Label-D5xTlOE_.js";import"./Input-fjaZegMh.js";import"./Description-CEQ-2_hJ.js";import"./ComboBox-Duwnjo1M.js";import"./index-C7tWk-mQ.js";import"./index-fJVWb4je.js";import"./useMenuPlacement-BmjG0vEf.js";import"./Menu-CipjtV9l.js";import"./Cell-BId1KcO9.js";import"./IconCheck-Cgh-IEDk.js";import"./MultiSelect-B2yoNwxN.js";import"./Chip-pd_KpZD3.js";import"./icon_close_outline_16-CLFktyWH.js";import"./Selector-nRmM_yRL.js";const me={light:{"bg-layer-basement":o.gray[50],"bg-layer-fill":o.gray[25],"bg-layer-floating":o.common[100],"bg-overlay":o.common.dimmer},dark:{"bg-layer-basement":o.gray[990],"bg-layer-default":o.gray[975],"bg-layer-fill":o.gray[950],"bg-layer-floating":o.gray[975]}},$e='a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',f=({size:n="medium",position:r="center",open:c=!1,onClose:a,title:g="제목",description:h,showCloseButton:T=!0,closeOnOverlayClick:b=!0,closeOnEsc:D=b,onConfirm:A,contentPadding:ge="default",children:ye,actions:L,className:ve="",style:xe,...fe})=>{const[q,N]=p.useState(!1),[V,E]=p.useState(!1),S=p.useRef(a),F=p.useRef(A);S.current=a,F.current=A;const I=p.useRef(null);p.useEffect(()=>{if(c){E(!0);const l=setTimeout(()=>{N(!0)},10);return()=>clearTimeout(l)}else{N(!1);const l=setTimeout(()=>{E(!1)},200);return()=>clearTimeout(l)}},[c]),p.useEffect(()=>{if(!c||!V)return;const l=document.activeElement,u=I.current;u==null||u.focus();const je=()=>Array.from((u==null?void 0:u.querySelectorAll($e))??[]).filter(i=>i.offsetParent!==null),K=i=>{var _;if(i.key==="Escape"){D&&((_=S.current)==null||_.call(S));return}if(i.key==="Enter"){const U=F.current;if(!U||i.isComposing||i.keyCode===229)return;const y=i.target;if((y==null?void 0:y.tagName)==="TEXTAREA"||(y==null?void 0:y.tagName)==="BUTTON"||y!=null&&y.isContentEditable)return;i.preventDefault(),U();return}if(i.key!=="Tab"||!u)return;const C=je();if(C.length===0){i.preventDefault(),u.focus();return}const j=document.activeElement,z=C[0],W=C[C.length-1];j&&!u.contains(j)?(i.preventDefault(),(i.shiftKey?W:z).focus()):!i.shiftKey&&j===W?(i.preventDefault(),z.focus()):i.shiftKey&&(j===z||j===u)&&(i.preventDefault(),W.focus())};return document.addEventListener("keydown",K),()=>{var i;document.removeEventListener("keydown",K),(i=l==null?void 0:l.focus)==null||i.call(l)}},[c,V,D]);const R=p.useId(),P=`${R}-title`,H=`${R}-description`;if(!V)return null;const he=l=>{if(l.target.closest("[data-portal-menu]")){l.preventDefault(),l.stopPropagation();return}b&&l.target===l.currentTarget&&(a==null||a())},be=()=>{a==null||a()};return e.jsx(Me,{$isVisible:q,$position:r,onMouseDown:he,children:e.jsxs(ke,{ref:I,tabIndex:-1,$size:n,$isVisible:q,className:ve,style:xe,role:"dialog","aria-modal":"true","aria-labelledby":g?P:void 0,"aria-describedby":h?H:void 0,...fe,children:[e.jsxs(Ve,{children:[e.jsxs(ze,{children:[e.jsx(We,{id:P,children:g}),h&&e.jsx(De,{id:H,children:h})]}),T&&e.jsx(Ae,{onClick:be,children:e.jsx(Be,{width:24,height:24,color:"currentColor"})})]}),e.jsx(Le,{$padding:ge,children:ye}),L&&e.jsx(qe,{children:L})]})})},Me=m.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${me.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:n})=>n?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  @media (max-width: 480px) {
    padding: 16px;
  }

  ${({$position:n})=>{const r=n.startsWith("top-")?"flex-start":n.startsWith("bottom-")?"flex-end":"center",c=n.endsWith("-left")?"flex-start":n.endsWith("-right")?"flex-end":"center";return`
      align-items: ${r};
      justify-content: ${c};
    `}}
`,ke=m.div`
  background-color: ${me.light["bg-layer-floating"]};
  border: 1px solid ${ce.light["color-border-primary"]};
  border-radius: ${B["rounded-3"]};
  box-shadow: ${Ce.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 100%;
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
`,Ve=m.div`
  padding: ${s.gap["gap-6"]} ${s.gap["gap-6"]} ${s.gap["gap-3"]}
    ${s.gap["gap-6"]};
  border-radius: ${B["rounded-3"]} ${B["rounded-3"]} 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,ze=m.div`
  display: flex;
  flex-direction: column;
  gap: ${s.gap["gap-1"]};
`,We=m.h2`
  ${pe.heading1}
  font-weight: 600;
  /* 시안(10020:2963)은 #171719 = fg-neutral-primary 다. raw 팔레트를 쓰면 다크 토큰도 안 따라간다. */
  color: ${ue.light["fg-neutral-primary"]};
  margin: 0;
`,De=m.p`
  ${pe.body3}
  font-weight: 400;
  color: ${ue.light["fg-neutral-alternative"]};
  margin: 0;
`,Ae=m.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${o.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,Le=m.div`
  padding: ${({$padding:n})=>n==="none"?"0":`${s.gap["gap-3"]} ${s.gap["gap-6"]}`};
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,qe=m.div`
  padding: ${s.gap["gap-3"]} ${s.gap["gap-6"]} ${s.gap["gap-6"]}
    ${s.gap["gap-6"]};
  display: flex;
  gap: ${s.gap["gap-2"]};
`;m.button`
  padding: ${s.gap["gap-2"]} ${s.gap["gap-4"]};
  background-color: ${o.common[100]};
  border: 1px solid ${ce.light["color-border-primary"]};
  border-radius: ${B["rounded-2"]};
  color: ${o.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${o.gray[50]};
  }
`;m.button`
  padding: ${s.gap["gap-2"]} ${s.gap["gap-4"]};
  background-color: ${o.gray[950]};
  border: none;
  border-radius: ${B["rounded-2"]};
  color: ${o.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${o.gray[925]};
  }
`;f.displayName="Modal";f.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'center-left'
| 'center'
| 'center-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'center-left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'center-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"ReactNode"},description:"",defaultValue:{value:"'제목'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeOnEsc:{required:!1,tsType:{name:"boolean"},description:`Escape 키로 닫기 + 닫힐 때 직전 포커스 요소로 복귀 (opt-in, 기본 false).
바깥 클릭으로 닫히는 일반 모달에 접근성 향상용으로 켠다. 반드시 버튼으로만
닫아야 하는 확인/진행 모달은 켜지 않는다.`,defaultValue:{value:"closeOnOverlayClick = true",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:`바깥(오버레이) 클릭으로 닫기 (기본 true — 기존 동작).

사용자가 값을 많이 써 넣는 모달은 false 로 둔다. 실수로 바깥을 눌렀을 때 입력이
통째로 사라지기 때문이다. 이때도 X 버튼과 취소 버튼으로는 닫을 수 있어야 한다.`,defaultValue:{value:"true",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`엔터를 눌렀을 때 할 일 (opt-in, 기본 없음).

값을 채운 뒤 엔터로 확인까지 끝낼 수 있게 한다. 넘기지 않으면 엔터는 지금처럼
아무 일도 하지 않으므로, 기존 모달의 동작은 바뀌지 않는다.

어느 버튼이 확인인지 화면 구조로 추측하지 않고 모달이 직접 알려 주는 방식이다.
확인 버튼이 왼쪽에 있든 오른쪽에 있든 상관없다.

아래 세 경우에는 엔터를 흘려보낸다.
- 한글 입력 중 글자를 확정하는 엔터 (\`isComposing\`)
- 여러 줄 입력칸 안에서의 줄바꿈 (\`textarea\`)
- 이미 버튼에 포커스가 있을 때 (브라우저가 그 버튼을 누른다)

확인이 불가능한 상태(필수값 미입력 등)라면 이 함수 안에서 걸러야 한다. 모달은
버튼의 disabled 를 알지 못한다.`},contentPadding:{required:!1,tsType:{name:"union",raw:"'default' | 'none'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'none'"}]},description:`본문 영역의 안쪽 여백 (opt-in, 기본 'default').

표처럼 모달 좌우 끝까지 닿아야 하는 내용은 'none' 으로 둔다. 넘기지
않으면 지금까지와 같은 여백이 유지되므로 기존 모달의 모양은 바뀜지 않는다.

'none' 을 쓰면 머리글·버튼 영역과의 간격도 함께 사라지므로, 필요하면
내용 쪽에서 직접 준다.`,defaultValue:{value:"'default'",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const x=({triggerLabel:n="모달 열기",triggerVariant:r="primary",children:c,actions:a,...g})=>{const[h,T]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:r,onClick:()=>T(!0),children:n}),e.jsx(f,{...g,open:h,onClose:()=>{var b;T(!1),(b=g.onClose)==null||b.call(g)},children:c})]})},jt={title:"Components/Feedback/Modal",component:f,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 사용하는 레이어형 컴포넌트입니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},cardLabel:{fontSize:13,fontWeight:500,color:"#525459",marginBottom:16},row:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},contentBox:{padding:"20px",backgroundColor:"#f7f7f8",borderRadius:8,textAlign:"center",color:"#525459",fontSize:14,lineHeight:1.6},actions:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"}},O={render:n=>e.jsx(x,{...n}),args:{size:"medium",position:"center",title:"제목",showCloseButton:!0,actions:e.jsxs("div",{style:t.actions,children:[e.jsx(v,{variant:"secondary",children:"취소"}),e.jsx(d,{variant:"primary",children:"확인"})]}),children:e.jsx("div",{style:t.contentBox,children:"모달 콘텐츠 영역입니다."})},argTypes:{size:{control:"select",options:["x-small","small","medium","large","x-large"]},position:{control:"select",options:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"]},title:{control:"text"},showCloseButton:{control:"boolean"},open:{control:!1}}},w={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Modal"}),e.jsxs("p",{style:t.desc,children:["5가지 사이즈와 9가지 포지션을 지원하는 모달 컴포넌트입니다.",e.jsx("br",{}),"Title, Content, Actions 3개 영역으로 구성되며, 배경 클릭 또는 닫기 버튼으로 닫을 수 있습니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Sizes"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"각 버튼을 클릭하여 사이즈별 모달을 확인하세요."}),e.jsx("div",{style:t.row,children:["x-small","small","medium","large","x-large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(x,{size:n,title:`${n} Modal`,triggerLabel:n,triggerVariant:"secondary",actions:e.jsx("div",{style:t.actions,children:e.jsx(d,{variant:"primary",children:"확인"})}),children:e.jsxs("div",{style:t.contentBox,children:[n," 사이즈 모달입니다.",e.jsx("br",{}),"width:"," ",n==="x-small"?"320px":n==="small"?"480px":n==="medium"?"640px":n==="large"?"960px":"1200px"]})}),e.jsx("span",{style:t.label,children:n==="x-small"?"320px":n==="small"?"480px":n==="medium"?"640px":n==="large"?"960px":"1200px"})]},n))})]}),e.jsx("p",{style:t.sectionTitle,children:"Positions"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"9가지 위치에 모달을 배치할 수 있습니다."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,maxWidth:360},children:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"].map(n=>e.jsx(x,{size:"small",position:n,title:n,triggerLabel:n.replace("-",`
`),triggerVariant:"secondary",children:e.jsxs("div",{style:t.contentBox,children:[n," 위치의 모달입니다."]})},n))})]}),e.jsx("p",{style:t.sectionTitle,children:"Variations"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[e.jsx(x,{title:"닫기 버튼 없음",showCloseButton:!1,triggerLabel:"No Close Button",triggerVariant:"secondary",actions:e.jsx("div",{style:t.actions,children:e.jsx(d,{variant:"primary",children:"확인"})}),children:e.jsx("div",{style:t.contentBox,children:"닫기 버튼이 없는 모달입니다. 배경 클릭으로 닫을 수 있습니다."})}),e.jsx(x,{title:"액션 없음",triggerLabel:"No Actions",triggerVariant:"secondary",children:e.jsx("div",{style:t.contentBox,children:"액션 영역이 없는 모달입니다."})}),e.jsx(x,{title:"설명 포함",description:"모달에 대한 부가 설명을 추가할 수 있습니다.",triggerLabel:"With Description",triggerVariant:"secondary",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(v,{variant:"secondary",children:"취소"}),e.jsx(d,{variant:"primary",children:"확인"})]}),children:e.jsx("div",{style:t.contentBox,children:"description prop으로 제목 아래 설명을 추가할 수 있습니다."})})]})})]})},$={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Action Patterns"}),e.jsx("p",{style:t.desc,children:"다양한 액션 버튼 조합 패턴입니다."})]}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:[{label:"Confirm / Cancel",title:"변경사항 저장",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(v,{variant:"secondary",children:"취소"}),e.jsx(d,{variant:"primary",children:"저장"})]}),content:"변경사항을 저장하시겠습니까?"},{label:"Destructive",title:"항목 삭제",triggerVariant:"negative",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(v,{variant:"secondary",children:"취소"}),e.jsx(d,{variant:"negative",children:"삭제"})]}),content:"이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."},{label:"Single Action",title:"알림",actions:e.jsx("div",{style:t.actions,children:e.jsx(d,{variant:"primary",children:"확인"})}),content:"작업이 완료되었습니다."},{label:"Multiple Actions",title:"문서 편집",actions:e.jsxs("div",{style:{...t.actions,justifyContent:"space-between"},children:[e.jsx(d,{variant:"negative",children:"삭제"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(v,{variant:"secondary",children:"취소"}),e.jsx(v,{variant:"brand",children:"임시저장"}),e.jsx(d,{variant:"primary",children:"저장"})]})]}),content:"여러 액션 버튼을 조합할 수 있습니다."}].map(({label:n,title:r,actions:c,content:a,triggerVariant:g})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:t.label,children:n}),e.jsx(x,{size:"small",title:r,triggerLabel:n,triggerVariant:g||"secondary",actions:c,children:e.jsx("div",{style:t.contentBox,children:a})})]},n))})})]})},M={parameters:{controls:{disable:!0}},render:()=>{const[n,r]=p.useState(!1),[c,a]=p.useState(!1);return e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Nested Modals"}),e.jsx("p",{style:t.desc,children:"모달 위에 또 다른 모달을 띄울 수 있습니다. Toast도 함께 사용 가능합니다."})]}),e.jsx(Te,{}),e.jsx("div",{style:t.card,children:e.jsx(d,{variant:"primary",onClick:()=>r(!0),children:"첫 번째 모달 열기"})}),e.jsx(f,{size:"large",open:n,onClose:()=>r(!1),title:"첫 번째 모달",description:"이 모달 위에 두 번째 모달을 띄울 수 있습니다.",actions:e.jsx("div",{style:t.actions,children:e.jsx(v,{variant:"secondary",onClick:()=>r(!1),children:"닫기"})}),children:e.jsx("div",{style:{padding:"8px 0"},children:e.jsx(d,{variant:"brand",onClick:()=>a(!0),children:"두 번째 모달 열기"})})}),e.jsx(f,{size:"small",open:c,onClose:()=>a(!1),title:"두 번째 모달",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(v,{variant:"secondary",onClick:()=>a(!1),children:"취소"}),e.jsx(d,{variant:"primary",onClick:()=>{Se.success("저장 완료","Toast는 모든 Modal 위에 표시됩니다."),a(!1)},children:"확인"})]}),children:e.jsxs("div",{style:t.contentBox,children:["두 번째 모달입니다.",e.jsx("br",{}),"확인 버튼을 누르면 Toast가 표시됩니다."]})})]})}},k={parameters:{controls:{disable:!0}},render:()=>{const[n,r]=p.useState(!1);return e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Form Modal"}),e.jsx("p",{style:t.desc,children:"모달 내부에 폼 요소를 배치한 예시입니다."})]}),e.jsx("div",{style:t.card,children:e.jsx(d,{variant:"primary",onClick:()=>r(!0),children:"새 프로젝트 생성"})}),e.jsx(f,{size:"medium",open:n,onClose:()=>r(!1),title:"새 프로젝트 생성",description:"프로젝트 정보를 입력해 주세요.",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(we,{variant:"secondary",onClick:()=>r(!1),children:"취소"}),e.jsx(d,{variant:"primary",onClick:()=>r(!1),children:"생성"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(X,{label:"프로젝트 이름",labelType:"required",placeholder:"프로젝트 이름을 입력해 주세요."}),e.jsx(Oe,{type:"selector",label:"카테고리",placeholder:"카테고리를 선택하세요",options:[{label:"디자인",value:"design"},{label:"개발",value:"dev"},{label:"마케팅",value:"marketing"}]}),e.jsx(X,{label:"설명",labelType:"optional",placeholder:"프로젝트에 대한 설명을 입력해 주세요."})]})})]})}};var G,J,Q;O.parameters={...O.parameters,docs:{...(G=O.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <ModalWithTrigger {...args} />,
  args: {
    size: 'medium',
    position: 'center',
    title: '제목',
    showCloseButton: true,
    actions: <div style={s.actions}>
        <OutlineButton variant='secondary'>취소</OutlineButton>
        <SolidButton variant='primary'>확인</SolidButton>
      </div>,
    children: <div style={s.contentBox}>모달 콘텐츠 영역입니다.</div>
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large', 'x-large']
    },
    position: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right']
    },
    title: {
      control: 'text'
    },
    showCloseButton: {
      control: 'boolean'
    },
    open: {
      control: false
    }
  }
}`,...(Q=(J=O.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Modal</h1>
        <p style={s.desc}>
          5가지 사이즈와 9가지 포지션을 지원하는 모달 컴포넌트입니다.
          <br />
          Title, Content, Actions 3개 영역으로 구성되며, 배경 클릭 또는 닫기 버튼으로 닫을 수
          있습니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={s.cardLabel}>각 버튼을 클릭하여 사이즈별 모달을 확인하세요.</div>
        <div style={s.row}>
          {(['x-small', 'small', 'medium', 'large', 'x-large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <ModalWithTrigger size={size} title={\`\${size} Modal\`} triggerLabel={size} triggerVariant='secondary' actions={<div style={s.actions}>
                    <SolidButton variant='primary'>확인</SolidButton>
                  </div>}>
                <div style={s.contentBox}>
                  {size} 사이즈 모달입니다.
                  <br />
                  width:{' '}
                  {size === 'x-small' ? '320px' : size === 'small' ? '480px' : size === 'medium' ? '640px' : size === 'large' ? '960px' : '1200px'}
                </div>
              </ModalWithTrigger>
              <span style={s.label}>
                {size === 'x-small' ? '320px' : size === 'small' ? '480px' : size === 'medium' ? '640px' : size === 'large' ? '960px' : '1200px'}
              </span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Positions</p>
      <div style={s.card}>
        <div style={s.cardLabel}>9가지 위치에 모달을 배치할 수 있습니다.</div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
        maxWidth: 360
      }}>
          {(['top-left', 'top-center', 'top-right', 'center-left', 'center', 'center-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const).map(position => <ModalWithTrigger key={position} size='small' position={position} title={position} triggerLabel={position.replace('-', '\\n')} triggerVariant='secondary'>
              <div style={s.contentBox}>{position} 위치의 모달입니다.</div>
            </ModalWithTrigger>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Variations</p>
      <div style={s.card}>
        <div style={s.row}>
          <ModalWithTrigger title='닫기 버튼 없음' showCloseButton={false} triggerLabel='No Close Button' triggerVariant='secondary' actions={<div style={s.actions}>
                <SolidButton variant='primary'>확인</SolidButton>
              </div>}>
            <div style={s.contentBox}>
              닫기 버튼이 없는 모달입니다. 배경 클릭으로 닫을 수 있습니다.
            </div>
          </ModalWithTrigger>

          <ModalWithTrigger title='액션 없음' triggerLabel='No Actions' triggerVariant='secondary'>
            <div style={s.contentBox}>액션 영역이 없는 모달입니다.</div>
          </ModalWithTrigger>

          <ModalWithTrigger title='설명 포함' description='모달에 대한 부가 설명을 추가할 수 있습니다.' triggerLabel='With Description' triggerVariant='secondary' actions={<div style={s.actions}>
                <OutlineButton variant='secondary'>취소</OutlineButton>
                <SolidButton variant='primary'>확인</SolidButton>
              </div>}>
            <div style={s.contentBox}>
              description prop으로 제목 아래 설명을 추가할 수 있습니다.
            </div>
          </ModalWithTrigger>
        </div>
      </div>
    </div>
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ie;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Action Patterns</h1>
        <p style={s.desc}>다양한 액션 버튼 조합 패턴입니다.</p>
      </div>

      <div style={s.card}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16
      }}>
          {[{
          label: 'Confirm / Cancel',
          title: '변경사항 저장',
          actions: <div style={s.actions}>
                  <OutlineButton variant='secondary'>취소</OutlineButton>
                  <SolidButton variant='primary'>저장</SolidButton>
                </div>,
          content: '변경사항을 저장하시겠습니까?'
        }, {
          label: 'Destructive',
          title: '항목 삭제',
          triggerVariant: 'negative' as const,
          actions: <div style={s.actions}>
                  <OutlineButton variant='secondary'>취소</OutlineButton>
                  <SolidButton variant='negative'>삭제</SolidButton>
                </div>,
          content: '이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.'
        }, {
          label: 'Single Action',
          title: '알림',
          actions: <div style={s.actions}>
                  <SolidButton variant='primary'>확인</SolidButton>
                </div>,
          content: '작업이 완료되었습니다.'
        }, {
          label: 'Multiple Actions',
          title: '문서 편집',
          actions: <div style={{
            ...s.actions,
            justifyContent: 'space-between'
          }}>
                  <SolidButton variant='negative'>삭제</SolidButton>
                  <div style={{
              display: 'flex',
              gap: 8
            }}>
                    <OutlineButton variant='secondary'>취소</OutlineButton>
                    <OutlineButton variant='brand'>임시저장</OutlineButton>
                    <SolidButton variant='primary'>저장</SolidButton>
                  </div>
                </div>,
          content: '여러 액션 버튼을 조합할 수 있습니다.'
        }].map(({
          label,
          title,
          actions,
          content,
          triggerVariant
        }) => <div key={label} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{label}</span>
              <ModalWithTrigger size='small' title={title} triggerLabel={label} triggerVariant={triggerVariant || 'secondary'} actions={actions}>
                <div style={s.contentBox}>{content}</div>
              </ModalWithTrigger>
            </div>)}
        </div>
      </div>
    </div>
}`,...(ie=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var re,ae,se;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [firstOpen, setFirstOpen] = useState(false);
    const [secondOpen, setSecondOpen] = useState(false);
    return <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Nested Modals</h1>
          <p style={s.desc}>
            모달 위에 또 다른 모달을 띄울 수 있습니다. Toast도 함께 사용 가능합니다.
          </p>
        </div>

        <ToastSystem />

        <div style={s.card}>
          <SolidButton variant='primary' onClick={() => setFirstOpen(true)}>
            첫 번째 모달 열기
          </SolidButton>
        </div>

        <Modal size='large' open={firstOpen} onClose={() => setFirstOpen(false)} title='첫 번째 모달' description='이 모달 위에 두 번째 모달을 띄울 수 있습니다.' actions={<div style={s.actions}>
              <OutlineButton variant='secondary' onClick={() => setFirstOpen(false)}>
                닫기
              </OutlineButton>
            </div>}>
          <div style={{
          padding: '8px 0'
        }}>
            <SolidButton variant='brand' onClick={() => setSecondOpen(true)}>
              두 번째 모달 열기
            </SolidButton>
          </div>
        </Modal>

        <Modal size='small' open={secondOpen} onClose={() => setSecondOpen(false)} title='두 번째 모달' actions={<div style={s.actions}>
              <OutlineButton variant='secondary' onClick={() => setSecondOpen(false)}>
                취소
              </OutlineButton>
              <SolidButton variant='primary' onClick={() => {
          toast.success('저장 완료', 'Toast는 모든 Modal 위에 표시됩니다.');
          setSecondOpen(false);
        }}>
                확인
              </SolidButton>
            </div>}>
          <div style={s.contentBox}>
            두 번째 모달입니다.
            <br />
            확인 버튼을 누르면 Toast가 표시됩니다.
          </div>
        </Modal>
      </div>;
  }
}`,...(se=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,oe,de;k.parameters={...k.parameters,docs:{...(le=k.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Form Modal</h1>
          <p style={s.desc}>모달 내부에 폼 요소를 배치한 예시입니다.</p>
        </div>

        <div style={s.card}>
          <SolidButton variant='primary' onClick={() => setOpen(true)}>
            새 프로젝트 생성
          </SolidButton>
        </div>

        <Modal size='medium' open={open} onClose={() => setOpen(false)} title='새 프로젝트 생성' description='프로젝트 정보를 입력해 주세요.' actions={<div style={s.actions}>
              <TextButton variant='secondary' onClick={() => setOpen(false)}>
                취소
              </TextButton>
              <SolidButton variant='primary' onClick={() => setOpen(false)}>
                생성
              </SolidButton>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <TextField label='프로젝트 이름' labelType='required' placeholder='프로젝트 이름을 입력해 주세요.' />
            <Dropdown type='selector' label='카테고리' placeholder='카테고리를 선택하세요' options={[{
            label: '디자인',
            value: 'design'
          }, {
            label: '개발',
            value: 'dev'
          }, {
            label: '마케팅',
            value: 'marketing'
          }]} />
            <TextField label='설명' labelType='optional' placeholder='프로젝트에 대한 설명을 입력해 주세요.' />
          </div>
        </Modal>
      </div>;
  }
}`,...(de=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};const Bt=["Playground","Overview","ActionPatterns","NestedModals","WithForm"];export{$ as ActionPatterns,M as NestedModals,w as Overview,O as Playground,k as WithForm,Bt as __namedExportsOrder,jt as default};
