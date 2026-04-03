import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-pNyzd6po.js";import{c as o}from"./styled-components.browser.esm-CdWSEUdl.js";import{I as ee,T as te,t as ne}from"./ToastSystem-DjsqXp2r.js";import{c as r}from"./color-m2U5piog.js";import{b as _}from"./borderColor-CzkI5wcR.js";import{r as x}from"./radius-DaoU83SK.js";import{s as ie}from"./shadow-DVq_1U2q.js";import{s as a}from"./spacing-tE1IiUFl.js";import{a as G}from"./typography-CHdGJV44.js";import{t as re}from"./textColor-G8dwupNW.js";import{O as m,S as s}from"./SolidButton-ChXs8ZEg.js";import{T as M}from"./TextField-BhO6-QZC.js";import{D as ae}from"./Dropdown-DeBr32EZ.js";import{T as se}from"./TextButton-CdfQfWYA.js";import"./preload-helper-eJNa_G2e.js";import"./IconCircleCheck-BBUUqRs3.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./brandColor-Bb8P60S1.js";import"./negativeColor-fk0-w6JK.js";import"./types-BPZcakya.js";import"./Label-DwCHqzlR.js";import"./Input-DUD8rG31.js";import"./Description-D9hxfD4n.js";import"./ComboBox-C7EN5FSc.js";import"./index-CcPfz-H-.js";import"./index-iQUz0jmT.js";import"./IconArrowUp-Cts_pkXJ.js";import"./Menu-Dq77ntXa.js";import"./Cell-CEWcqocF.js";import"./IconCheck-Cgh-IEDk.js";import"./MultiSelect-BVA4DP3B.js";import"./Chip-rPwwCS13.js";import"./icon_close_outline_16-B6-sOCTo.js";import"./Selector-CUomF-ps.js";const J={light:{"bg-layer-basement":r.gray[50],"bg-layer-fill":r.gray[25],"bg-layer-floating":r.common[100],"bg-overlay":r.common.dimmer},dark:{"bg-layer-basement":r.gray[990],"bg-layer-default":r.gray[975],"bg-layer-fill":r.gray[950],"bg-layer-floating":r.gray[975]}},y=({size:n="medium",position:i="center",open:d=!1,onClose:l,title:p="제목",description:v,showCloseButton:h=!0,children:f,actions:C,className:K="",style:Q,...U})=>{const[O,$]=u.useState(!1),[X,w]=u.useState(!1);if(u.useEffect(()=>{if(d){w(!0);const c=setTimeout(()=>{$(!0)},10);return()=>clearTimeout(c)}else{$(!1);const c=setTimeout(()=>{w(!1)},200);return()=>clearTimeout(c)}},[d]),!X)return null;const Y=c=>{if(c.target.closest("[data-portal-menu]")){c.preventDefault(),c.stopPropagation();return}c.target===c.currentTarget&&(l==null||l())},Z=()=>{l==null||l()};return e.jsx(le,{$isVisible:O,$position:i,onMouseDown:Y,children:e.jsxs(oe,{$size:n,$isVisible:O,className:K,style:Q,...U,children:[e.jsxs(de,{children:[e.jsxs(ce,{children:[e.jsx(pe,{children:p}),v&&e.jsx(me,{children:v})]}),h&&e.jsx(ge,{onClick:Z,children:e.jsx(ee,{width:24,height:24,color:"currentColor"})})]}),e.jsx(ue,{children:f}),C&&e.jsx(ye,{children:C})]})})},le=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${J.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:n})=>n?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({$position:n})=>{const i=n.startsWith("top-")?"flex-start":n.startsWith("bottom-")?"flex-end":"center",d=n.endsWith("-left")?"flex-start":n.endsWith("-right")?"flex-end":"center";return`
      align-items: ${i};
      justify-content: ${d};
    `}}
`,oe=o.div`
  background-color: ${J.light["bg-layer-floating"]};
  border: 1px solid ${_.light["color-border-primary"]};
  border-radius: ${x["rounded-3"]};
  box-shadow: ${ie.light["shadow-lg"]};
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
`,de=o.div`
  padding: ${a.gap["gap-6"]} ${a.gap["gap-6"]} ${a.gap["gap-3"]}
    ${a.gap["gap-6"]};
  border-radius: ${x["rounded-3"]} ${x["rounded-3"]} 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,ce=o.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
`,pe=o.h2`
  ${G.heading1}
  font-weight: 600;
  color: ${r.gray[950]};
  margin: 0;
`,me=o.p`
  ${G.body2}
  color: ${re.light["fg-neutral-alternative"]};
  margin: 0;
`,ge=o.button`
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
`,ue=o.div`
  padding: ${a.gap["gap-3"]} ${a.gap["gap-6"]};
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,ye=o.div`
  padding: ${a.gap["gap-3"]} ${a.gap["gap-6"]} ${a.gap["gap-6"]}
    ${a.gap["gap-6"]};
  display: flex;
  gap: ${a.gap["gap-2"]};
`;o.button`
  padding: ${a.gap["gap-2"]} ${a.gap["gap-4"]};
  background-color: ${r.common[100]};
  border: 1px solid ${_.light["color-border-primary"]};
  border-radius: ${x["rounded-2"]};
  color: ${r.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${r.gray[50]};
  }
`;o.button`
  padding: ${a.gap["gap-2"]} ${a.gap["gap-4"]};
  background-color: ${r.gray[950]};
  border: none;
  border-radius: ${x["rounded-2"]};
  color: ${r.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${r.gray[925]};
  }
`;y.displayName="Modal";y.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:"'x-small' | 'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'x-small'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'center-left'
| 'center'
| 'center-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'center-left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'center-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'제목'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const g=({triggerLabel:n="모달 열기",triggerVariant:i="primary",children:d,actions:l,...p})=>{const[v,h]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:i,onClick:()=>h(!0),children:n}),e.jsx(y,{...p,open:v,onClose:()=>{var f;h(!1),(f=p.onClose)==null||f.call(p)},children:d})]})},et={title:"Components/Feedback/Modal",component:y,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 사용하는 레이어형 컴포넌트입니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},cardLabel:{fontSize:13,fontWeight:500,color:"#525459",marginBottom:16},row:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},contentBox:{padding:"20px",backgroundColor:"#f7f7f8",borderRadius:8,textAlign:"center",color:"#525459",fontSize:14,lineHeight:1.6},actions:{display:"flex",gap:"8px",justifyContent:"flex-end",width:"100%"}},b={render:n=>e.jsx(g,{...n}),args:{size:"medium",position:"center",title:"제목",showCloseButton:!0,actions:e.jsxs("div",{style:t.actions,children:[e.jsx(m,{variant:"secondary",children:"취소"}),e.jsx(s,{variant:"primary",children:"확인"})]}),children:e.jsx("div",{style:t.contentBox,children:"모달 콘텐츠 영역입니다."})},argTypes:{size:{control:"select",options:["x-small","small","medium","large","x-large"]},position:{control:"select",options:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"]},title:{control:"text"},showCloseButton:{control:"boolean"},open:{control:!1}}},j={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Modal"}),e.jsxs("p",{style:t.desc,children:["5가지 사이즈와 9가지 포지션을 지원하는 모달 컴포넌트입니다.",e.jsx("br",{}),"Title, Content, Actions 3개 영역으로 구성되며, 배경 클릭 또는 닫기 버튼으로 닫을 수 있습니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Sizes"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"각 버튼을 클릭하여 사이즈별 모달을 확인하세요."}),e.jsx("div",{style:t.row,children:["x-small","small","medium","large","x-large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(g,{size:n,title:`${n} Modal`,triggerLabel:n,triggerVariant:"secondary",actions:e.jsx("div",{style:t.actions,children:e.jsx(s,{variant:"primary",children:"확인"})}),children:e.jsxs("div",{style:t.contentBox,children:[n," 사이즈 모달입니다.",e.jsx("br",{}),"width:"," ",n==="x-small"?"320px":n==="small"?"480px":n==="medium"?"640px":n==="large"?"960px":"1200px"]})}),e.jsx("span",{style:t.label,children:n==="x-small"?"320px":n==="small"?"480px":n==="medium"?"640px":n==="large"?"960px":"1200px"})]},n))})]}),e.jsx("p",{style:t.sectionTitle,children:"Positions"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"9가지 위치에 모달을 배치할 수 있습니다."}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,maxWidth:360},children:["top-left","top-center","top-right","center-left","center","center-right","bottom-left","bottom-center","bottom-right"].map(n=>e.jsx(g,{size:"small",position:n,title:n,triggerLabel:n.replace("-",`
`),triggerVariant:"secondary",children:e.jsxs("div",{style:t.contentBox,children:[n," 위치의 모달입니다."]})},n))})]}),e.jsx("p",{style:t.sectionTitle,children:"Variations"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[e.jsx(g,{title:"닫기 버튼 없음",showCloseButton:!1,triggerLabel:"No Close Button",triggerVariant:"secondary",actions:e.jsx("div",{style:t.actions,children:e.jsx(s,{variant:"primary",children:"확인"})}),children:e.jsx("div",{style:t.contentBox,children:"닫기 버튼이 없는 모달입니다. 배경 클릭으로 닫을 수 있습니다."})}),e.jsx(g,{title:"액션 없음",triggerLabel:"No Actions",triggerVariant:"secondary",children:e.jsx("div",{style:t.contentBox,children:"액션 영역이 없는 모달입니다."})}),e.jsx(g,{title:"설명 포함",description:"모달에 대한 부가 설명을 추가할 수 있습니다.",triggerLabel:"With Description",triggerVariant:"secondary",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(m,{variant:"secondary",children:"취소"}),e.jsx(s,{variant:"primary",children:"확인"})]}),children:e.jsx("div",{style:t.contentBox,children:"description prop으로 제목 아래 설명을 추가할 수 있습니다."})})]})})]})},B={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Action Patterns"}),e.jsx("p",{style:t.desc,children:"다양한 액션 버튼 조합 패턴입니다."})]}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:[{label:"Confirm / Cancel",title:"변경사항 저장",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(m,{variant:"secondary",children:"취소"}),e.jsx(s,{variant:"primary",children:"저장"})]}),content:"변경사항을 저장하시겠습니까?"},{label:"Destructive",title:"항목 삭제",triggerVariant:"negative",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(m,{variant:"secondary",children:"취소"}),e.jsx(s,{variant:"negative",children:"삭제"})]}),content:"이 항목을 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."},{label:"Single Action",title:"알림",actions:e.jsx("div",{style:t.actions,children:e.jsx(s,{variant:"primary",children:"확인"})}),content:"작업이 완료되었습니다."},{label:"Multiple Actions",title:"문서 편집",actions:e.jsxs("div",{style:{...t.actions,justifyContent:"space-between"},children:[e.jsx(s,{variant:"negative",children:"삭제"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(m,{variant:"secondary",children:"취소"}),e.jsx(m,{variant:"brand",children:"임시저장"}),e.jsx(s,{variant:"primary",children:"저장"})]})]}),content:"여러 액션 버튼을 조합할 수 있습니다."}].map(({label:n,title:i,actions:d,content:l,triggerVariant:p})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:t.label,children:n}),e.jsx(g,{size:"small",title:i,triggerLabel:n,triggerVariant:p||"secondary",actions:d,children:e.jsx("div",{style:t.contentBox,children:l})})]},n))})})]})},S={parameters:{controls:{disable:!0}},render:()=>{const[n,i]=u.useState(!1),[d,l]=u.useState(!1);return e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Nested Modals"}),e.jsx("p",{style:t.desc,children:"모달 위에 또 다른 모달을 띄울 수 있습니다. Toast도 함께 사용 가능합니다."})]}),e.jsx(te,{}),e.jsx("div",{style:t.card,children:e.jsx(s,{variant:"primary",onClick:()=>i(!0),children:"첫 번째 모달 열기"})}),e.jsx(y,{size:"large",open:n,onClose:()=>i(!1),title:"첫 번째 모달",description:"이 모달 위에 두 번째 모달을 띄울 수 있습니다.",actions:e.jsx("div",{style:t.actions,children:e.jsx(m,{variant:"secondary",onClick:()=>i(!1),children:"닫기"})}),children:e.jsx("div",{style:{padding:"8px 0"},children:e.jsx(s,{variant:"brand",onClick:()=>l(!0),children:"두 번째 모달 열기"})})}),e.jsx(y,{size:"small",open:d,onClose:()=>l(!1),title:"두 번째 모달",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(m,{variant:"secondary",onClick:()=>l(!1),children:"취소"}),e.jsx(s,{variant:"primary",onClick:()=>{ne.success("저장 완료","Toast는 모든 Modal 위에 표시됩니다."),l(!1)},children:"확인"})]}),children:e.jsxs("div",{style:t.contentBox,children:["두 번째 모달입니다.",e.jsx("br",{}),"확인 버튼을 누르면 Toast가 표시됩니다."]})})]})}},T={parameters:{controls:{disable:!0}},render:()=>{const[n,i]=u.useState(!1);return e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Form Modal"}),e.jsx("p",{style:t.desc,children:"모달 내부에 폼 요소를 배치한 예시입니다."})]}),e.jsx("div",{style:t.card,children:e.jsx(s,{variant:"primary",onClick:()=>i(!0),children:"새 프로젝트 생성"})}),e.jsx(y,{size:"medium",open:n,onClose:()=>i(!1),title:"새 프로젝트 생성",description:"프로젝트 정보를 입력해 주세요.",actions:e.jsxs("div",{style:t.actions,children:[e.jsx(se,{variant:"secondary",onClick:()=>i(!1),children:"취소"}),e.jsx(s,{variant:"primary",onClick:()=>i(!1),children:"생성"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(M,{label:"프로젝트 이름",labelType:"required",placeholder:"프로젝트 이름을 입력해 주세요."}),e.jsx(ae,{type:"selector",label:"카테고리",placeholder:"카테고리를 선택하세요",options:[{label:"디자인",value:"design"},{label:"개발",value:"dev"},{label:"마케팅",value:"marketing"}]}),e.jsx(M,{label:"설명",labelType:"optional",placeholder:"프로젝트에 대한 설명을 입력해 주세요."})]})})]})}};var k,z,W;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(z=b.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var V,F,D;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(D=(F=j.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var L,A,q;B.parameters={...B.parameters,docs:{...(L=B.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(q=(A=B.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var N,P,I;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(I=(P=S.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var R,E,H;T.parameters={...T.parameters,docs:{...(R=T.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(E=T.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const tt=["Playground","Overview","ActionPatterns","NestedModals","WithForm"];export{B as ActionPatterns,S as NestedModals,j as Overview,b as Playground,T as WithForm,tt as __namedExportsOrder,et as default};
