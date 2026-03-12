import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as a}from"./iframe-CvA0Eg-6.js";import{c as D}from"./styled-components.browser.esm-CjbLCBIw.js";import{s as R}from"./spacing-tE1IiUFl.js";import{C as n}from"./Chip-DdBZy_ci.js";import"./preload-helper-eJNa_G2e.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./fontWeight-CRwBdwgF.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";const k=D.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${R.gap["gap-2"]}; // gap-2 (8px)
`,t=({children:s,className:l,defaultValue:d=0,value:c,onChange:h,...g})=>{const[v,T]=a.useState(d),V=c!==void 0?c:v,S=r=>{c===void 0&&T(r),h==null||h(r)},m=a.Children.toArray(s),w=m.slice(0,8);return m.length>8&&console.warn(`ChipTabs: 최대 8개 이하의 칩만 허용됩니다. ${m.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`),e.jsx(k,{className:l,...g,children:w.map((r,u)=>a.isValidElement(r)?a.cloneElement(r,{key:u,type:"solid",active:V===u,onClick:()=>S(u)}):r)})};t.__docgenInfo={description:"",methods:[],displayName:"ChipTabs",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const P={title:"Components/Navigation/ChipTabs",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Chip 컴포넌트를 조합한 탭 네비게이션입니다. 최대 8개의 칩을 지원하며, disabled와 controlled 모드를 제공합니다."}}}},i={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},o={parameters:{layout:"centered"},render:({defaultValue:s})=>e.jsxs(t,{defaultValue:s,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"})]}),args:{defaultValue:0}},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:i.page,children:[e.jsxs("div",{style:i.header,children:[e.jsx("h1",{style:i.title,children:"ChipTabs"}),e.jsxs("p",{style:i.desc,children:["Chip 컴포넌트를 조합한 탭 네비게이션입니다.",e.jsx("br",{}),"최대 8개까지 지원하며, disabled와 controlled 모드를 제공합니다."]})]}),e.jsx("p",{style:i.sectionTitle,children:"Item Count"}),e.jsx("div",{style:i.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{count:2,items:["홈","설정"]},{count:3,items:["전체","진행중","완료"]},{count:5,items:["전체","진행중","완료","보류","취소"]},{count:8,items:["전체","진행중","완료","보류","취소","대기","검토","승인"]}].map(({count:s,items:l})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:i.label,children:[s," items"]}),e.jsx(t,{defaultValue:0,children:l.map(d=>e.jsx(n,{children:d},d))})]},s))})}),e.jsx("p",{style:i.sectionTitle,children:"With Disabled"}),e.jsx("div",{style:i.card,children:e.jsxs(t,{defaultValue:0,children:[e.jsx(n,{children:"활성"}),e.jsx(n,{disabled:!0,children:"비활성"}),e.jsx(n,{children:"활성"})]})}),e.jsx("p",{style:i.sectionTitle,children:"Narrow Container (auto wrap)"}),e.jsx("div",{style:i.card,children:e.jsx("div",{style:{width:320,border:"1px dashed #e6e7e9",borderRadius:8,padding:16},children:e.jsxs(t,{defaultValue:0,children:[e.jsx(n,{children:"전체"}),e.jsx(n,{children:"진행중"}),e.jsx(n,{children:"완료"}),e.jsx(n,{children:"보류"}),e.jsx(n,{children:"취소"}),e.jsx(n,{children:"대기"})]})})}),e.jsx("p",{style:i.sectionTitle,children:"Controlled"}),e.jsx("div",{style:i.card,children:e.jsx(I,{})})]})},I=()=>{const[s,l]=a.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(t,{value:s,onChange:l,children:[e.jsx(n,{children:"첫 번째"}),e.jsx(n,{children:"두 번째"}),e.jsx(n,{children:"세 번째"})]}),e.jsxs("div",{style:{padding:16,background:"#f7f7f8",borderRadius:8,fontSize:14,color:"#525459"},children:["현재 선택: ",s+1]})]})};var x,y,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: ({
    defaultValue
  }) => <ChipTabs defaultValue={defaultValue}>
      <Chip>전체</Chip>
      <Chip>진행중</Chip>
      <Chip>완료</Chip>
    </ChipTabs>,
  args: {
    defaultValue: 0
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var C,j,b;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>ChipTabs</h1>
        <p style={s.desc}>
          Chip 컴포넌트를 조합한 탭 네비게이션입니다.
          <br />
          최대 8개까지 지원하며, disabled와 controlled 모드를 제공합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Item Count</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
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
              <ChipTabs defaultValue={0}>
                {items.map(item => <Chip key={item}>{item}</Chip>)}
              </ChipTabs>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>With Disabled</p>
      <div style={s.card}>
        <ChipTabs defaultValue={0}>
          <Chip>활성</Chip>
          <Chip disabled>비활성</Chip>
          <Chip>활성</Chip>
        </ChipTabs>
      </div>

      <p style={s.sectionTitle}>Narrow Container (auto wrap)</p>
      <div style={s.card}>
        <div style={{
        width: 320,
        border: '1px dashed #e6e7e9',
        borderRadius: 8,
        padding: 16
      }}>
          <ChipTabs defaultValue={0}>
            <Chip>전체</Chip>
            <Chip>진행중</Chip>
            <Chip>완료</Chip>
            <Chip>보류</Chip>
            <Chip>취소</Chip>
            <Chip>대기</Chip>
          </ChipTabs>
        </div>
      </div>

      <p style={s.sectionTitle}>Controlled</p>
      <div style={s.card}>
        <ControlledDemo />
      </div>
    </div>
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const $=["Playground","Overview"];export{p as Overview,o as Playground,$ as __namedExportsOrder,P as default};
