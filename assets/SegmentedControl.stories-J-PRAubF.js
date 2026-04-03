import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as m}from"./iframe-pNyzd6po.js";import{c as x,s as f}from"./styled-components.browser.esm-CdWSEUdl.js";import{c as h}from"./color-m2U5piog.js";import{r as S}from"./radius-DaoU83SK.js";import{s as w}from"./shadow-DVq_1U2q.js";import{s as d}from"./spacing-tE1IiUFl.js";import{t as y}from"./textColor-G8dwupNW.js";import{t as q}from"./typography-CHdGJV44.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const D=x.div`
  display: inline-flex;
  background-color: ${h.gray[50]};
  border-radius: ${S["rounded-2"]};
  padding: ${d.gap["gap-1"]}; // gap-1 (Top/Bottom) gap-1 (Left/Right)
  gap: ${d.gap["gap-0.5"]};
  position: relative;
`,N=x.div`
  position: absolute;
  top: ${d.gap["gap-1"]};
  bottom: ${d.gap["gap-1"]};
  background-color: ${h.common[100]};
  border-radius: ${S["rounded-1"]};
  box-shadow: ${w.light["shadow-xs"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({$activeIndex:t,$totalItems:n})=>{const i=`calc((100% - ${(n-1)*2}px - 8px) / ${n})`;return`
      left: ${`calc(4px + ${t} * (${i} + 2px))`};
      width: ${i};
    `}}
`,c=({children:t,className:n,defaultValue:s=0,value:a,onChange:i})=>{const[v,z]=m.useState(s),b=a!==void 0?a:v,k=l=>{a===void 0&&z(l),i==null||i(l)},j=m.Children.toArray(t);return e.jsxs(D,{className:n,children:[e.jsx(N,{$activeIndex:b,$totalItems:j.length}),j.map((l,g)=>m.isValidElement(l)?m.cloneElement(l,{key:g,active:b===g,onClick:()=>k(g)}):l)]})};c.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const W=x.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${S["rounded-1"]};
  ${q(void 0,"body3","medium")}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${d.gap["gap-1"]} ${d.gap["gap-6"]}; // gap-1 (Top/Bottom) gap-6 (Left/Right)
  white-space: nowrap;

  ${({$active:t,$disabled:n})=>n?f`
        background-color: ${h.gray[50]};
        color: ${y.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:t?f`
        background-color: transparent;
        color: ${y.light["fg-neutral-primary"]};
        position: relative;
        z-index: 1;
      `:f`
      background-color: transparent;
      color: ${y.light["fg-neutral-alternative"]};
      position: relative;
      z-index: 1;
    `}

  &:focus {
    outline: none;
  }
`,o=({children:t,active:n=!1,disabled:s=!1,onClick:a,className:i})=>e.jsx(W,{$active:n,$disabled:s,onClick:a,className:i,disabled:s,children:t});o.__docgenInfo={description:"",methods:[],displayName:"SegmentItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const U={title:"Components/Navigation/SegmentedControl",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"여러 선택지를 수평으로 배열하여 하나를 선택하는 세그먼트 컨트롤 컴포넌트입니다."}}}},r={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},p={parameters:{layout:"centered"},render:({defaultValue:t})=>e.jsxs(c,{defaultValue:t,children:[e.jsx(o,{children:"옵션 1"}),e.jsx(o,{children:"옵션 2"}),e.jsx(o,{children:"옵션 3"})]}),args:{defaultValue:0,children:null}},u={args:{children:null},parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:r.page,children:[e.jsxs("div",{style:r.header,children:[e.jsx("h1",{style:r.title,children:"Segmented Control"}),e.jsxs("p",{style:r.desc,children:["2~6개의 선택지를 수평으로 배열하여 하나를 선택하는 컴포넌트입니다.",e.jsx("br",{}),"disabled 항목과 controlled 모드를 지원합니다."]})]}),e.jsx("p",{style:r.sectionTitle,children:"Item Count"}),e.jsx("div",{style:r.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{count:2,items:["옵션 1","옵션 2"]},{count:3,items:["옵션 1","옵션 2","옵션 3"]},{count:4,items:["1월","2월","3월","4월"]},{count:6,items:["1월","2월","3월","4월","5월","6월"]}].map(({count:t,items:n})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:r.label,children:[t," items"]}),e.jsx(c,{defaultValue:0,children:n.map(s=>e.jsx(o,{children:s},s))})]},t))})}),e.jsx("p",{style:r.sectionTitle,children:"With Disabled"}),e.jsx("div",{style:r.card,children:e.jsxs(c,{defaultValue:0,children:[e.jsx(o,{children:"활성"}),e.jsx(o,{disabled:!0,children:"비활성"}),e.jsx(o,{children:"활성"})]})}),e.jsx("p",{style:r.sectionTitle,children:"Controlled"}),e.jsx("div",{style:r.card,children:e.jsx(_,{})})]})},_=()=>{const[t,n]=m.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(c,{value:t,onChange:n,children:[e.jsx(o,{children:"선택 1"}),e.jsx(o,{children:"선택 2"}),e.jsx(o,{children:"선택 3"})]}),e.jsxs("div",{style:{padding:16,background:"#f7f7f8",borderRadius:8,fontSize:14,color:"#525459"},children:["현재 선택: ",t+1]})]})};var $,I,C;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: ({
    defaultValue
  }) => <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>옵션 1</SegmentItem>
      <SegmentItem>옵션 2</SegmentItem>
      <SegmentItem>옵션 3</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0,
    children: null
  }
}`,...(C=(I=p.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var T,V,R;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: null
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Segmented Control</h1>
        <p style={s.desc}>
          2~6개의 선택지를 수평으로 배열하여 하나를 선택하는 컴포넌트입니다.
          <br />
          disabled 항목과 controlled 모드를 지원합니다.
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
          items: ['옵션 1', '옵션 2']
        }, {
          count: 3,
          items: ['옵션 1', '옵션 2', '옵션 3']
        }, {
          count: 4,
          items: ['1월', '2월', '3월', '4월']
        }, {
          count: 6,
          items: ['1월', '2월', '3월', '4월', '5월', '6월']
        }].map(({
          count,
          items
        }) => <div key={count} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{count} items</span>
              <SegmentedControl defaultValue={0}>
                {items.map(item => <SegmentItem key={item}>{item}</SegmentItem>)}
              </SegmentedControl>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>With Disabled</p>
      <div style={s.card}>
        <SegmentedControl defaultValue={0}>
          <SegmentItem>활성</SegmentItem>
          <SegmentItem disabled>비활성</SegmentItem>
          <SegmentItem>활성</SegmentItem>
        </SegmentedControl>
      </div>

      <p style={s.sectionTitle}>Controlled</p>
      <div style={s.card}>
        <ControlledDemo />
      </div>
    </div>
}`,...(R=(V=u.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};const X=["Playground","Overview"];export{u as Overview,p as Playground,X as __namedExportsOrder,U as default};
