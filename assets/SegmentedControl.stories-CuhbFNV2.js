import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as p,r as h}from"./iframe-skmiukBS.js";import{c as S,s as x}from"./styled-components.browser.esm-1f8qeTbm.js";import{c as b}from"./color-m2U5piog.js";import{r as j}from"./radius-DaoU83SK.js";import{s as E}from"./shadow-DVq_1U2q.js";import{s as l}from"./spacing-tE1IiUFl.js";import{t as v}from"./textColor-G8dwupNW.js";import{t as W}from"./typography-CHdGJV44.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const _=S.div`
  display: inline-flex;
  background-color: ${b.gray[50]};
  border-radius: ${j["rounded-2"]};
  padding: ${l.gap["gap-1"]};
  gap: ${l.gap["gap-0.5"]};
  position: relative;
`,B=S.div`
  position: absolute;
  top: ${l.gap["gap-1"]};
  bottom: ${l.gap["gap-1"]};
  background-color: ${b.common[100]};
  border-radius: ${j["rounded-1"]};
  box-shadow: ${E.light["shadow-xs"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
`,d=({children:t,className:s,defaultValue:o=0,value:c,onChange:m})=>{const[q,D]=p.useState(o),f=c!==void 0?c:q,y=h.useRef(null),[I,N]=h.useState({left:0,width:0}),z=i=>{c===void 0&&D(i),m==null||m(i)},$=p.Children.toArray(t);return h.useEffect(()=>{if(!y.current)return;const a=y.current.querySelectorAll("[data-segment-item]")[f];a&&N({left:a.offsetLeft,width:a.offsetWidth})},[f,$.length]),e.jsxs(_,{className:s,ref:y,children:[e.jsx(B,{$left:I.left,$width:I.width}),$.map((i,a)=>p.isValidElement(i)?p.cloneElement(i,{key:a,active:f===a,onClick:()=>z(a)}):i)]})};d.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const F=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${j["rounded-1"]};
  ${W(void 0,"body3","medium")}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${l.gap["gap-1"]} ${l.gap["gap-6"]}; // gap-1 (Top/Bottom) gap-6 (Left/Right)
  white-space: nowrap;

  ${({$active:t,$disabled:s})=>s?x`
        background-color: ${b.gray[50]};
        color: ${v.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:t?x`
        background-color: transparent;
        color: ${v.light["fg-neutral-primary"]};
        position: relative;
        z-index: 1;
      `:x`
      background-color: transparent;
      color: ${v.light["fg-neutral-alternative"]};
      position: relative;
      z-index: 1;
    `}

  &:focus {
    outline: none;
  }
`,r=({children:t,active:s=!1,disabled:o=!1,onClick:c,className:m})=>e.jsx(F,{$active:s,$disabled:o,onClick:c,className:m,disabled:o,"data-segment-item":!0,children:t});r.__docgenInfo={description:"",methods:[],displayName:"SegmentItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Components/Navigation/SegmentedControl",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"여러 선택지를 수평으로 배열하여 하나를 선택하는 세그먼트 컨트롤 컴포넌트입니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},u={parameters:{layout:"centered"},render:({defaultValue:t})=>e.jsxs(d,{defaultValue:t,children:[e.jsx(r,{children:"옵션 1"}),e.jsx(r,{children:"옵션 2"}),e.jsx(r,{children:"옵션 3"})]}),args:{defaultValue:0,children:null}},g={args:{children:null},parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Segmented Control"}),e.jsxs("p",{style:n.desc,children:["2~6개의 선택지를 수평으로 배열하여 하나를 선택하는 컴포넌트입니다.",e.jsx("br",{}),"disabled 항목과 controlled 모드를 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"Item Count"}),e.jsx("div",{style:n.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{count:2,items:["옵션 1","옵션 2"]},{count:3,items:["옵션 1","옵션 2","옵션 3"]},{count:4,items:["1월","2월","3월","4월"]},{count:6,items:["1월","2월","3월","4월","5월","6월"]}].map(({count:t,items:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:n.label,children:[t," items"]}),e.jsx(d,{defaultValue:0,children:s.map(o=>e.jsx(r,{children:o},o))})]},t))})}),e.jsx("p",{style:n.sectionTitle,children:"With Disabled"}),e.jsx("div",{style:n.card,children:e.jsxs(d,{defaultValue:0,children:[e.jsx(r,{children:"활성"}),e.jsx(r,{disabled:!0,children:"비활성"}),e.jsx(r,{children:"활성"})]})}),e.jsx("p",{style:n.sectionTitle,children:"Controlled"}),e.jsx("div",{style:n.card,children:e.jsx(A,{})})]})},A=()=>{const[t,s]=p.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(d,{value:t,onChange:s,children:[e.jsx(r,{children:"선택 1"}),e.jsx(r,{children:"선택 2"}),e.jsx(r,{children:"선택 3"})]}),e.jsxs("div",{style:{padding:16,background:"#f7f7f8",borderRadius:8,fontSize:14,color:"#525459"},children:["현재 선택: ",t+1]})]})};var C,T,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(V=(T=u.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var w,R,k;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(k=(R=g.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};const te=["Playground","Overview"];export{g as Overview,u as Playground,te as __namedExportsOrder,ee as default};
