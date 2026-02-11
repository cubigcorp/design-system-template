import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as p}from"./iframe-D4fn7yV1.js";import{d as ee}from"./styled-components.browser.esm-kr1dGAPk.js";import{s as ne}from"./spacing-tE1IiUFl.js";import{C as n}from"./Chip-Bp8naTDX.js";import"./preload-helper-eJNa_G2e.js";import"./borderColor-C_RHITEf.js";import"./color-CiwAFuFb.js";import"./fontWeight-CRwBdwgF.js";import"./radius-DaoU83SK.js";import"./textColor-DLZeZODc.js";const re=ee.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${ne.gap["gap-2"]}; // gap-2 (8px)
`,i=({children:r,className:s,defaultValue:d=0,value:f,onChange:b,...P})=>{const[Q,U]=p.useState(d),X=f!==void 0?f:Q,Y=a=>{f===void 0&&U(a),b==null||b(a)},j=p.Children.toArray(r),Z=j.slice(0,8);return j.length>8&&console.warn(`ChipTabs: 최대 8개 이하의 칩만 허용됩니다. ${j.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`),e.jsx(re,{className:s,...P,children:Z.map((a,g)=>p.isValidElement(a)?p.cloneElement(a,{key:g,type:"solid",active:X===g,onClick:()=>Y(g)}):a)})};i.__docgenInfo={description:"",methods:[],displayName:"ChipTabs",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const xe={title:"Components/ChipTabs",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Chip Tabs는 여러 개의 칩 아이템과 연결된 콘텐츠 영역으로 구성된 컴포넌트입니다. 사용자는 칩 아이템을 선택하여 해당하는 콘텐츠로 빠르게 전환할 수 있으며, 화면 내 다양한 정보나 기능을 간결하고 직관적으로 구분하고 탐색할 수 있습니다. 기존 Chip 컴포넌트를 조합하여 구성되며, 항상 Solid 타입으로 고정됩니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},argTypes:{defaultValue:{control:{type:"number",min:0,max:7},description:"초기 선택될 칩의 인덱스입니다."},value:{control:{type:"number",min:0,max:7},description:"현재 선택된 칩의 인덱스입니다 (controlled)."},onChange:{action:"changed",description:"칩이 변경될 때 호출되는 콜백 함수입니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},children:{control:!1,description:"Chip 컴포넌트들입니다."}}},l={render:({defaultValue:r,style:s,className:d})=>e.jsxs(i,{defaultValue:r,style:s,className:d,children:[e.jsx(n,{children:"텍스트"}),e.jsx(n,{children:"텍스트"}),e.jsx(n,{children:"텍스트"})]}),args:{defaultValue:0,style:{},className:""}},o={render:({defaultValue:r})=>e.jsxs(i,{defaultValue:r,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"})]}),args:{defaultValue:0}},t={render:({defaultValue:r})=>e.jsxs(i,{defaultValue:r,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"검토"}),e.jsx(n,{children:"승인"})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"최대 8개까지의 칩을 지원합니다. 이 예제는 정확히 8개의 칩을 보여줍니다."}}}},c={render:({defaultValue:r})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(i,{defaultValue:r,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"검토"}),e.jsx(n,{children:"승인"}),e.jsx(n,{children:"추가1"}),e.jsx(n,{children:"추가2"})]}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요."})]}),args:{defaultValue:0},parameters:{docs:{description:{story:"10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요."}}}},h={render:({defaultValue:r})=>e.jsxs(i,{defaultValue:r,children:[e.jsx(n,{children:"활성"}),e.jsx(n,{disabled:!0,children:"비활성"}),e.jsx(n,{children:"활성"})]}),args:{defaultValue:0}},u={render:()=>{const[r,s]=p.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(i,{value:r,onChange:s,children:[e.jsx(n,{children:"첫 번째"}),e.jsx(n,{children:"두 번째"}),e.jsx(n,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#f5f5f5",borderRadius:"8px"},children:["현재 선택된 칩: ",r+1]})]})}},x={render:({defaultValue:r,style:s,className:d})=>e.jsxs(i,{defaultValue:r,style:s,className:d,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]}),args:{defaultValue:0,style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},className:""},parameters:{docs:{description:{story:"Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다."}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{width:"400px",padding:"20px",backgroundColor:"#fff",border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[e.jsx("h4",{style:{marginTop:0},children:"모달 내부 (좁은 컨테이너)"}),e.jsxs(i,{defaultValue:0,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"대기"}),e.jsx(n,{children:"대기"})]})]}),e.jsx("div",{style:{padding:"12px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px",fontSize:"14px",color:"#0066cc"},children:"✅ 칩이 컨테이너를 넘어가면 자동으로 다음 줄로 wrap됩니다."})]}),parameters:{controls:{disable:!0},docs:{description:{story:"모달이나 좁은 컨테이너 안에서 ChipTabs가 공간을 넘어가면 자동으로 여러 줄로 wrap됩니다."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"기본 스타일링"}),e.jsxs(i,{style:{backgroundColor:"#f8f9fa",padding:"8px",borderRadius:"8px"},children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"마진과 패딩"}),e.jsxs(i,{style:{margin:"20px 0",padding:"0 20px"},children:[e.jsx(n,{children:"칩 1"}),e.jsx(n,{children:"칩 2"}),e.jsx(n,{children:"칩 3"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"반응형 스타일링"}),e.jsxs(i,{style:{width:"100%",maxWidth:"600px",backgroundColor:"#fff",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",justifyContent:"center"},children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"클래스 기반 스타일링"}),e.jsx("style",{children:`
          .custom-chiptabs {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            border-radius: 12px;
            padding: 8px;
          }
        `}),e.jsxs(i,{className:"custom-chiptabs",children:[e.jsx(n,{children:"프리미엄"}),e.jsx(n,{children:"기본"}),e.jsx(n,{children:"무료"})]})]})]}),parameters:{controls:{disable:!0}}};var y,v,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    defaultValue,
    style,
    className
  }) => <ChipTabs defaultValue={defaultValue} style={style} className={className}>
      <Chip>텍스트</Chip>
      <Chip>텍스트</Chip>
      <Chip>텍스트</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0,
    style: {},
    className: ''
  }
}`,...(T=(v=l.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var V,S,k;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <ChipTabs defaultValue={defaultValue}>
      <Chip>홈</Chip>
      <Chip>설정</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,R,N;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <ChipTabs defaultValue={defaultValue}>
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
        story: '최대 8개까지의 칩을 지원합니다. 이 예제는 정확히 8개의 칩을 보여줍니다.'
      }
    }
  }
}`,...(N=(R=t.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var D,I,M;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <ChipTabs defaultValue={defaultValue}>
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
      padding: '12px',
      backgroundColor: '#e7f3ff',
      border: '1px solid #b3d9ff',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#0066cc'
    }}>
        ✅ 10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 콘솔에서 경고 메시지를 확인하세요.
      </div>
    </div>,
  args: {
    defaultValue: 0
  },
  parameters: {
    docs: {
      description: {
        story: '10개의 칩을 제공했지만 스펙에 따라 8개만 표시됩니다. 개발자 콘솔에서 경고 메시지를 확인하세요.'
      }
    }
  }
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var W,q,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <ChipTabs defaultValue={defaultValue}>
      <Chip>활성</Chip>
      <Chip disabled>비활성</Chip>
      <Chip>활성</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0
  }
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var E,_,$;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ChipTabs value={value} onChange={setValue}>
          <Chip>첫 번째</Chip>
          <Chip>두 번째</Chip>
          <Chip>세 번째</Chip>
        </ChipTabs>
        <div style={{
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
      }}>
          현재 선택된 칩: {value + 1}
        </div>
      </div>;
  }
}`,...($=(_=u.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var A,O,B;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ({
    defaultValue,
    style,
    className
  }) => <ChipTabs defaultValue={defaultValue} style={style} className={className}>
      <Chip>홈</Chip>
      <Chip>설정</Chip>
      <Chip>프로필</Chip>
    </ChipTabs>,
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
        story: 'Controls 패널에서 스타일과 클래스를 실시간으로 조정할 수 있습니다.'
      }
    }
  }
}`,...(B=(O=x.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,G,H;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      width: '400px',
      padding: '20px',
      backgroundColor: '#fff',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
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
      padding: '12px',
      backgroundColor: '#e7f3ff',
      border: '1px solid #b3d9ff',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#0066cc'
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
        story: '모달이나 좁은 컨테이너 안에서 ChipTabs가 공간을 넘어가면 자동으로 여러 줄로 wrap됩니다.'
      }
    }
  }
}`,...(H=(G=C.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,L;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h4>기본 스타일링</h4>
        <ChipTabs style={{
        backgroundColor: '#f8f9fa',
        padding: '8px',
        borderRadius: '8px'
      }}>
          <Chip>홈</Chip>
          <Chip>설정</Chip>
          <Chip>프로필</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>마진과 패딩</h4>
        <ChipTabs style={{
        margin: '20px 0',
        padding: '0 20px'
      }}>
          <Chip>칩 1</Chip>
          <Chip>칩 2</Chip>
          <Chip>칩 3</Chip>
        </ChipTabs>
      </div>

      <div>
        <h4>반응형 스타일링</h4>
        <ChipTabs style={{
        width: '100%',
        maxWidth: '600px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        justifyContent: 'center'
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
        <ChipTabs className='custom-chiptabs'>
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
}`,...(L=(K=m.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Ce=["Default","TwoItems","ManyItems","TooManyItems","WithDisabled","Controlled","Interactive","WrappedInModal","Styling"];export{u as Controlled,l as Default,x as Interactive,t as ManyItems,m as Styling,c as TooManyItems,o as TwoItems,h as WithDisabled,C as WrappedInModal,Ce as __namedExportsOrder,xe as default};
