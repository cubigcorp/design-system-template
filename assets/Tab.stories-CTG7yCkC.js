import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as o}from"./iframe-D4fn7yV1.js";import{d as $,l as m}from"./styled-components.browser.esm-kr1dGAPk.js";import{c as xe}from"./color-CiwAFuFb.js";import{s as N}from"./spacing-tE1IiUFl.js";import{t as v}from"./textColor-DLZeZODc.js";import{t as he}from"./typography-CHdGJV44.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const Ie=$.div`
  display: flex;
  border-bottom: ${({$showDivider:n})=>n?`1px solid ${xe.gray[200]}`:"none"};
  gap: ${N.gap["gap-6"]};
  position: relative;
`,ge=$.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${v.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({$left:n})=>n}px;
  width: ${({$width:n})=>n}px;
`,t=({children:n,className:r,defaultValue:l=0,value:d,onChange:i,showDivider:V=!0,...me})=>{const[ue,be]=o.useState(l),w=d!==void 0?d:ue,C=o.useRef([]),[D,pe]=o.useState({left:0,width:0}),Te=s=>{d===void 0&&be(s),i==null||i(s)},S=o.Children.toArray(n),k=S.slice(0,8);return S.length>8&&console.warn(`Tab: 최대 8개 이하의 탭만 허용됩니다. ${S.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`),o.useEffect(()=>{const s=C.current[w];s&&pe({left:s.offsetLeft,width:s.offsetWidth})},[w,k.length]),e.jsxs(Ie,{className:r,$showDivider:V,...me,children:[e.jsx(ge,{$left:D.left,$width:D.width}),k.map((s,c)=>o.isValidElement(s)?o.cloneElement(s,{key:c,active:w===c,onClick:()=>Te(c),ref:fe=>{C.current[c]=fe}}):s)]})};t.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const je=$.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${N.gap["gap-2"]} ${N.gap["gap-1"]}; // gap-2 (Top/Bottom), gap-1 (Left/Right)
  height: 40px;
  white-space: nowrap;
  position: relative;

  ${he(void 0,"body3","medium")}

  ${({$active:n,$disabled:r})=>r?m`
        color: ${v.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:n?m`
        color: ${v.light["fg-neutral-strong"]};
      `:m`
      color: ${v.light["fg-neutral-alternative"]};
    `}

  &:focus {
    outline: none;
  }

  &:active {
    ${({$disabled:n,$active:r})=>!n&&!r&&m`
        transform: scale(0.98);
      `}
  }
`,a=({children:n,active:r=!1,disabled:l=!1,onClick:d,className:i,...V})=>e.jsx(je,{$active:r,$disabled:l,onClick:d,className:i,disabled:l,...V,children:n});a.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const We={title:"Components/Tab",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"탭(Tab)은 여러 개의 탭 아이템(Tab Item)과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 탭 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 효율적으로 구분하고 탐색할 수 있습니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},argTypes:{defaultValue:{control:{type:"number",min:0,max:7},description:"초기 선택될 탭의 인덱스입니다."},value:{control:{type:"number",min:0,max:7},description:"현재 선택된 탭의 인덱스입니다 (controlled)."},onChange:{action:"changed",description:"탭이 변경될 때 호출되는 콜백 함수입니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},children:{control:!1,description:"TabItem 컴포넌트들입니다."},showDivider:{control:{type:"boolean"},description:"하단 구분선 표시 여부를 설정합니다."}}},u={render:({defaultValue:n,style:r,className:l})=>e.jsxs(t,{defaultValue:n,style:r,className:l,children:[e.jsx(a,{children:"탭 1"}),e.jsx(a,{children:"탭 2"}),e.jsx(a,{children:"탭 3"})]}),args:{defaultValue:0,style:{},className:""}},b={render:({defaultValue:n})=>e.jsxs(t,{defaultValue:n,children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"})]}),args:{defaultValue:0}},p={render:({defaultValue:n})=>e.jsxs(t,{defaultValue:n,children:[e.jsx(a,{children:"전체"}),e.jsx(a,{children:"진행중"}),e.jsx(a,{children:"완료"}),e.jsx(a,{children:"보류"}),e.jsx(a,{children:"취소"}),e.jsx(a,{children:"대기"}),e.jsx(a,{children:"검토"}),e.jsx(a,{children:"승인"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"최대 8개까지의 탭을 지원합니다. 이 예제는 정확히 8개의 탭을 보여줍니다."}}}},T={render:({defaultValue:n})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(t,{defaultValue:n,children:[e.jsx(a,{children:"전체"}),e.jsx(a,{children:"진행중"}),e.jsx(a,{children:"완료"}),e.jsx(a,{children:"보류"}),e.jsx(a,{children:"취소"}),e.jsx(a,{children:"대기"}),e.jsx(a,{children:"검토"}),e.jsx(a,{children:"승인"}),e.jsx(a,{children:"추가1"}),e.jsx(a,{children:"추가2"})]}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요."})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."}}}},f={render:({defaultValue:n})=>e.jsxs(t,{defaultValue:n,children:[e.jsx(a,{children:"활성"}),e.jsx(a,{disabled:!0,children:"비활성"}),e.jsx(a,{children:"활성"})]}),args:{defaultValue:0}},x={render:()=>{const[n,r]=o.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(t,{value:n,onChange:r,children:[e.jsx(a,{children:"첫 번째"}),e.jsx(a,{children:"두 번째"}),e.jsx(a,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:["현재 선택된 탭: ",n+1]})]})}},h={render:({defaultValue:n})=>e.jsxs(t,{defaultValue:n,children:[e.jsx(a,{children:"탭 1ㄹㄹㄹㄹㄹㄹㄹㄹㄹ"}),e.jsx(a,{children:"탭 2"}),e.jsx(a,{children:"탭 3"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"긴 텍스트를 가진 탭 아이템입니다. min-width: 120px로 최소 너비를 유지하되, 텍스트 길이에 따라 자동으로 확장됩니다."}}}},I={render:({defaultValue:n})=>e.jsxs(t,{defaultValue:n,children:[e.jsx(a,{children:"짧음"}),e.jsx(a,{children:"중간 길이의 탭 아이템"}),e.jsx(a,{children:"매우 긴 텍스트를 가진 탭 아이템입니다"}),e.jsx(a,{children:"탭"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"다양한 길이의 텍스트를 가진 탭들입니다. 각 탭은 최소 120px를 유지하며, 텍스트 길이에 따라 유동적으로 너비가 조정됩니다."}}}},g={render:({defaultValue:n,style:r,className:l})=>e.jsxs(t,{defaultValue:n,style:r,className:l,children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"}),e.jsx(a,{children:"프로필"})]}),args:{defaultValue:0,style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},className:""},parameters:{docs:{description:{story:"Controls 패널에서 각 탭의 텍스트, 스타일, 클래스를 실시간으로 조정할 수 있습니다. 긴 텍스트를 입력하여 유동적 너비를 테스트해보세요."}}}},j={render:({defaultValue:n})=>e.jsxs(t,{defaultValue:n,showDivider:!1,children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"}),e.jsx(a,{children:"프로필"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"하단 구분선이 없는 탭입니다."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"기본 스타일링"}),e.jsxs(t,{style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"}),e.jsx(a,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"구분선 없음"}),e.jsxs(t,{showDivider:!1,children:[e.jsx(a,{children:"홈"}),e.jsx(a,{children:"설정"}),e.jsx(a,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"커스텀 색상"}),e.jsxs(t,{style:{borderBottom:"2px solid #007bff"},children:[e.jsx(a,{style:{color:"#007bff"},children:"홈"}),e.jsx(a,{style:{color:"#007bff"},children:"설정"}),e.jsx(a,{style:{color:"#007bff"},children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"마진과 패딩"}),e.jsxs(t,{style:{margin:"20px 0",padding:"0 20px"},children:[e.jsx(a,{children:"탭 1"}),e.jsx(a,{children:"탭 2"}),e.jsx(a,{children:"탭 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"반응형 스타일링"}),e.jsxs(t,{style:{width:"100%",maxWidth:"600px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:[e.jsx(a,{children:"전체"}),e.jsx(a,{children:"진행중"}),e.jsx(a,{children:"완료"}),e.jsx(a,{children:"보류"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"클래스 기반 스타일링"}),e.jsx("style",{children:`
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
        `}),e.jsxs(t,{className:"custom-tab",children:[e.jsx(a,{className:"custom-tab-item",children:"프리미엄"}),e.jsx(a,{className:"custom-tab-item",children:"기본"}),e.jsx(a,{className:"custom-tab-item",children:"무료"})]})]})]}),parameters:{controls:{disable:!0}}};var R,W,q;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: ({
    defaultValue,
    style,
    className
  }) => <Tab defaultValue={defaultValue} style={style} className={className}>
      <TabItem>탭 1</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>,
  args: {
    defaultValue: 0,
    style: {},
    className: ''
  }
}`,...(q=(W=u.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,E,L;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(L=(E=b.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,z,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue}>
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
        story: '최대 8개까지의 탭을 지원합니다. 이 예제는 정확히 8개의 탭을 보여줍니다.'
      }
    }
  }
}`,...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var B,F,O;T.parameters={...T.parameters,docs:{...(B=T.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Tab defaultValue={defaultValue}>
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
      padding: '12px',
      backgroundColor: '#e7f3ff',
      border: '1px solid #b3d9ff',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#0066cc'
    }}>
        ✅ 10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요.
      </div>
    </div>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: '10개의 탭을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요.'
      }
    }
  }
}`,...(O=(F=T.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var H,G,J;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue}>
      <TabItem>활성</TabItem>
      <TabItem disabled>비활성</TabItem>
      <TabItem>활성</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  }
}`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,P,Q;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Tab value={value} onChange={setValue}>
          <TabItem>첫 번째</TabItem>
          <TabItem>두 번째</TabItem>
          <TabItem>세 번째</TabItem>
        </Tab>
        <div style={{
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
          현재 선택된 탭: {value + 1}
        </div>
      </div>;
  }
}`,...(Q=(P=x.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue}>
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
        story: '긴 텍스트를 가진 탭 아이템입니다. min-width: 120px로 최소 너비를 유지하되, 텍스트 길이에 따라 자동으로 확장됩니다.'
      }
    }
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue}>
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
        story: '다양한 길이의 텍스트를 가진 탭들입니다. 각 탭은 최소 120px를 유지하며, 텍스트 길이에 따라 유동적으로 너비가 조정됩니다.'
      }
    }
  }
}`,...(ae=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,re;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: ({
    defaultValue,
    style,
    className
  }) => <Tab defaultValue={defaultValue} style={style} className={className}>
      <TabItem>홈</TabItem>
      <TabItem>설정</TabItem>
      <TabItem>프로필</TabItem>
    </Tab>,
  args: {
    defaultValue: 0,
    style: {
      backgroundColor: '#f8f9fa',
      padding: '8px',
      borderRadius: '8px'
    },
    className: ''
  },
  parameters: {
    docs: {
      description: {
        story: 'Controls 패널에서 각 탭의 텍스트, 스타일, 클래스를 실시간으로 조정할 수 있습니다. 긴 텍스트를 입력하여 유동적 너비를 테스트해보세요.'
      }
    }
  }
}`,...(re=(te=g.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,le,oe;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue} showDivider={false}>
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
        story: '하단 구분선이 없는 탭입니다.'
      }
    }
  }
}`,...(oe=(le=j.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var de,ie,ce;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h4>기본 스타일링</h4>
        <Tab style={{
        backgroundColor: '#f8f9fa',
        padding: '8px',
        borderRadius: '8px'
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
        borderBottom: '2px solid #007bff'
      }}>
          <TabItem style={{
          color: '#007bff'
        }}>홈</TabItem>
          <TabItem style={{
          color: '#007bff'
        }}>설정</TabItem>
          <TabItem style={{
          color: '#007bff'
        }}>프로필</TabItem>
        </Tab>
      </div>

      <div>
        <h4>마진과 패딩</h4>
        <Tab style={{
        margin: '20px 0',
        padding: '0 20px'
      }}>
          <TabItem>탭 1</TabItem>
          <TabItem>탭 2</TabItem>
          <TabItem>탭 3</TabItem>
        </Tab>
      </div>

      <div>
        <h4>반응형 스타일링</h4>
        <Tab style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
        <Tab className='custom-tab'>
          <TabItem className='custom-tab-item'>프리미엄</TabItem>
          <TabItem className='custom-tab-item'>기본</TabItem>
          <TabItem className='custom-tab-item'>무료</TabItem>
        </Tab>
      </div>
    </div>,
  parameters: {
    controls: {
      disable: true
    }
  }
}`,...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};const qe=["Default","TwoItems","ManyItems","TooManyItems","WithDisabled","Controlled","LongText","FlexibleWidth","Interactive","WithoutDivider","Styling"];export{x as Controlled,u as Default,I as FlexibleWidth,g as Interactive,h as LongText,p as ManyItems,y as Styling,T as TooManyItems,b as TwoItems,f as WithDisabled,j as WithoutDivider,qe as __namedExportsOrder,We as default};
