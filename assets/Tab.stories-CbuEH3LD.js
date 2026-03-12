import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as r}from"./iframe-CvA0Eg-6.js";import{c as T,s as p}from"./styled-components.browser.esm-CjbLCBIw.js";import{c as E}from"./color-m2U5piog.js";import{s as g}from"./spacing-tE1IiUFl.js";import{t as b}from"./textColor-G8dwupNW.js";import{t as N}from"./typography-CHdGJV44.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const B=T.div`
  display: flex;
  border-bottom: ${({$showDivider:t})=>t?`1px solid ${E.gray[200]}`:"none"};
  gap: ${g.gap["gap-6"]};
  position: relative;
`,F=T.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${b.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
`,o=({children:t,className:a,defaultValue:l=0,value:d,onChange:c,showDivider:h=!0,...R})=>{const[k,q]=r.useState(l),y=d!==void 0?d:k,v=r.useRef([]),[j,W]=r.useState({left:0,width:0}),z=i=>{d===void 0&&q(i),c==null||c(i)},x=r.Children.toArray(t),I=x.slice(0,8);return x.length>8&&console.warn(`Tab: 최대 8개 이하의 탭만 허용됩니다. ${x.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`),r.useEffect(()=>{const i=v.current[y];i&&W({left:i.offsetLeft,width:i.offsetWidth})},[y,I.length]),e.jsxs(B,{className:a,$showDivider:h,...R,children:[e.jsx(F,{$left:j.left,$width:j.width}),I.map((i,m)=>r.isValidElement(i)?r.cloneElement(i,{key:m,active:y===m,onClick:()=>z(m),ref:_=>{v.current[m]=_}}):i)]})};o.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const O=T.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${g.gap["gap-2"]} ${g.gap["gap-1"]}; // gap-2 (Top/Bottom), gap-1 (Left/Right)
  height: 40px;
  white-space: nowrap;
  position: relative;

  ${N(void 0,"body3","medium")}

  ${({$active:t,$disabled:a})=>a?p`
        color: ${b.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:t?p`
        color: ${b.light["fg-neutral-strong"]};
      `:p`
      color: ${b.light["fg-neutral-alternative"]};
    `}

  &:focus {
    outline: none;
  }

  &:active {
    ${({$disabled:t,$active:a})=>!t&&!a&&p`
        transform: scale(0.98);
      `}
  }
`,n=({children:t,active:a=!1,disabled:l=!1,onClick:d,className:c,...h})=>e.jsx(O,{$active:a,$disabled:l,onClick:d,className:c,disabled:l,...h,children:t});n.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const Z={title:"Components/Navigation/Tab",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"여러 탭 아이템을 선택하여 콘텐츠를 전환할 수 있는 네비게이션 컴포넌트입니다. 최대 8개 탭을 지원합니다."}}}},s={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},u={parameters:{layout:"centered"},render:({defaultValue:t})=>e.jsxs(o,{defaultValue:t,children:[e.jsx(n,{children:"탭 1"}),e.jsx(n,{children:"탭 2"}),e.jsx(n,{children:"탭 3"})]}),args:{defaultValue:0},argTypes:{defaultValue:{control:{type:"number",min:0,max:7}},showDivider:{control:"boolean"}}},f={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:s.page,children:[e.jsxs("div",{style:s.header,children:[e.jsx("h1",{style:s.title,children:"Tab"}),e.jsxs("p",{style:s.desc,children:["탭 아이템을 선택하여 콘텐츠를 전환하는 네비게이션 컴포넌트입니다.",e.jsx("br",{}),"최대 8개 탭을 지원하며, disabled 상태와 divider 옵션을 제공합니다."]})]}),e.jsx("p",{style:s.sectionTitle,children:"Item Count"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{count:2,items:["홈","설정"]},{count:3,items:["전체","진행중","완료"]},{count:5,items:["전체","진행중","완료","보류","취소"]},{count:8,items:["전체","진행중","완료","보류","취소","대기","검토","승인"]}].map(({count:t,items:a})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:s.label,children:[t," items"]}),e.jsx(o,{defaultValue:0,children:a.map(l=>e.jsx(n,{children:l},l))})]},t))})}),e.jsx("p",{style:s.sectionTitle,children:"With Disabled"}),e.jsx("div",{style:s.card,children:e.jsxs(o,{defaultValue:0,children:[e.jsx(n,{children:"활성"}),e.jsx(n,{disabled:!0,children:"비활성"}),e.jsx(n,{children:"활성"})]})}),e.jsx("p",{style:s.sectionTitle,children:"Without Divider"}),e.jsx("div",{style:s.card,children:e.jsxs(o,{defaultValue:0,showDivider:!1,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{children:"프로필"})]})}),e.jsx("p",{style:s.sectionTitle,children:"Controlled"}),e.jsx("div",{style:s.card,children:e.jsx(A,{})})]})},A=()=>{const[t,a]=r.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(o,{value:t,onChange:a,children:[e.jsx(n,{children:"첫 번째"}),e.jsx(n,{children:"두 번째"}),e.jsx(n,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:16,background:"#f7f7f8",borderRadius:8,fontSize:14,color:"#525459"},children:["현재 선택된 탭: ",t+1]})]})};var V,S,$;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: ({
    defaultValue
  }) => <Tab defaultValue={defaultValue}>
      <TabItem>탭 1</TabItem>
      <TabItem>탭 2</TabItem>
      <TabItem>탭 3</TabItem>
    </Tab>,
  args: {
    defaultValue: 0
  },
  argTypes: {
    defaultValue: {
      control: {
        type: 'number',
        min: 0,
        max: 7
      }
    },
    showDivider: {
      control: 'boolean'
    }
  }
}`,...($=(S=u.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};var w,D,C;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Tab</h1>
        <p style={s.desc}>
          탭 아이템을 선택하여 콘텐츠를 전환하는 네비게이션 컴포넌트입니다.
          <br />
          최대 8개 탭을 지원하며, disabled 상태와 divider 옵션을 제공합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Item Count</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          {[{
          count: 2,
          items: ['홈', '설정']
        }, {
          count: 3,
          items: ['전체', '진행중', '완료']
        }, {
          count: 5,
          items: ['전체', '진행중', '완료', '보류', '취소']
        }, {
          count: 8,
          items: ['전체', '진행중', '완료', '보류', '취소', '대기', '검토', '승인']
        }].map(({
          count,
          items
        }) => <div key={count} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{count} items</span>
              <Tab defaultValue={0}>
                {items.map(item => <TabItem key={item}>{item}</TabItem>)}
              </Tab>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>With Disabled</p>
      <div style={s.card}>
        <Tab defaultValue={0}>
          <TabItem>활성</TabItem>
          <TabItem disabled>비활성</TabItem>
          <TabItem>활성</TabItem>
        </Tab>
      </div>

      <p style={s.sectionTitle}>Without Divider</p>
      <div style={s.card}>
        <Tab defaultValue={0} showDivider={false}>
          <TabItem>홈</TabItem>
          <TabItem>설정</TabItem>
          <TabItem>프로필</TabItem>
        </Tab>
      </div>

      <p style={s.sectionTitle}>Controlled</p>
      <div style={s.card}>
        <ControlledTabDemo />
      </div>
    </div>
}`,...(C=(D=f.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const ee=["Playground","Overview"];export{f as Overview,u as Playground,ee as __namedExportsOrder,Z as default};
