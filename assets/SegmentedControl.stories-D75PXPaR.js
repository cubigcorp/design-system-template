import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as u,r as S}from"./iframe-BQlxtUxC.js";import{c as j,s as p}from"./styled-components.browser.esm-BsJdvhJY.js";import{c as I}from"./color-CZjzAmeO.js";import{r as g}from"./radius-DaoU83SK.js";import{s as _}from"./shadow-DVq_1U2q.js";import{s}from"./spacing-tE1IiUFl.js";import{t as b}from"./textColor-D-yqVS6r.js";import{t as z}from"./typography-CIxJpf_z.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const F={large:g["rounded-1"],medium:g["rounded-1.5"]},A=j.div`
  display: inline-flex;
  /* 시안(6833-29527) 기준 배경은 gray-100 이다 (CDS-148). */
  background-color: ${I.gray[100]};
  border-radius: ${g["rounded-2"]};
  padding: ${s.gap["gap-1"]};
  gap: ${s.gap["gap-0.5"]};
  position: relative;
`,B=j.div`
  position: absolute;
  top: ${s.gap["gap-1"]};
  bottom: ${s.gap["gap-1"]};
  background-color: ${I.common[100]};
  border-radius: ${({$size:n})=>F[n]};
  box-shadow: ${_.light["shadow-xs"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({$left:n})=>n}px;
  width: ${({$width:n})=>n}px;
`,d=({children:n,className:i,defaultValue:l=0,value:c,onChange:m,size:f="large"})=>{const[q,N]=u.useState(l),h=c!==void 0?c:q,v=S.useRef(null),[$,E]=S.useState({left:0,width:0}),W=a=>{c===void 0&&N(a),m==null||m(a)},C=u.Children.toArray(n);return S.useEffect(()=>{if(!v.current)return;const o=v.current.querySelectorAll("[data-segment-item]")[h];o&&E({left:o.offsetLeft,width:o.offsetWidth})},[h,C.length]),e.jsxs(A,{className:i,ref:v,children:[e.jsx(B,{$left:$.left,$width:$.width,$size:f}),C.map((a,o)=>u.isValidElement(a)?u.cloneElement(a,{key:o,active:h===o,size:f,onClick:()=>W(o)}):a)]})};d.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'large'",computed:!1}}}};const O={large:p`
    border-radius: ${g["rounded-1"]};
    ${z(void 0,"body3","medium")}
    padding: ${s.gap["gap-1"]} ${s.gap["gap-6"]};
  `,medium:p`
    border-radius: ${g["rounded-1.5"]};
    ${z(void 0,"body2","medium")}
    padding: ${s.gap["gap-0.5"]} ${s.gap["gap-3.5"]};
  `},M=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  ${({$size:n})=>O[n]}

  ${({$active:n,$disabled:i})=>i?p`
        /* 비활성(disable=true, active=false)도 같은 gray-100 이다 (CDS-148). */
        background-color: ${I.gray[100]};
        color: ${b.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:n?p`
        background-color: transparent;
        color: ${b.light["fg-neutral-primary"]};
        position: relative;
        z-index: 1;
      `:p`
      background-color: transparent;
      color: ${b.light["fg-neutral-alternative"]};
      position: relative;
      z-index: 1;
    `}

  &:focus {
    outline: none;
  }
`,r=({children:n,active:i=!1,disabled:l=!1,onClick:c,className:m,size:f="large"})=>e.jsx(M,{$active:i,$disabled:l,$size:f,onClick:c,className:m,disabled:l,"data-segment-item":!0,children:n});r.__docgenInfo={description:"",methods:[],displayName:"SegmentItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'large'",computed:!1}}}};const re={title:"Components/Navigation/SegmentedControl",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"여러 선택지를 수평으로 배열하여 하나를 선택하는 세그먼트 컨트롤 컴포넌트입니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},y={parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio",options:["large","medium"]}},render:({defaultValue:n,size:i})=>e.jsxs(d,{defaultValue:n,size:i,children:[e.jsx(r,{children:"옵션 1"}),e.jsx(r,{children:"옵션 2"}),e.jsx(r,{children:"옵션 3"})]}),args:{defaultValue:0,size:"large",children:null}},x={args:{children:null},parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Segmented Control"}),e.jsxs("p",{style:t.desc,children:["2~6개의 선택지를 수평으로 배열하여 하나를 선택하는 컴포넌트입니다.",e.jsx("br",{}),"disabled 항목과 controlled 모드를 지원합니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Size"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["large","medium"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:t.label,children:n}),e.jsxs(d,{defaultValue:0,size:n,children:[e.jsx(r,{children:"옵션 1"}),e.jsx(r,{children:"옵션 2"}),e.jsx(r,{children:"옵션 3"})]})]},n))})}),e.jsx("p",{style:t.sectionTitle,children:"Item Count"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{count:2,items:["옵션 1","옵션 2"]},{count:3,items:["옵션 1","옵션 2","옵션 3"]},{count:4,items:["1월","2월","3월","4월"]},{count:6,items:["1월","2월","3월","4월","5월","6월"]}].map(({count:n,items:i})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:t.label,children:[n," items"]}),e.jsx(d,{defaultValue:0,children:i.map(l=>e.jsx(r,{children:l},l))})]},n))})}),e.jsx("p",{style:t.sectionTitle,children:"With Disabled"}),e.jsx("div",{style:t.card,children:e.jsxs(d,{defaultValue:0,children:[e.jsx(r,{children:"활성"}),e.jsx(r,{disabled:!0,children:"비활성"}),e.jsx(r,{children:"활성"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Controlled"}),e.jsx("div",{style:t.card,children:e.jsx(P,{})})]})},P=()=>{const[n,i]=u.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs(d,{value:n,onChange:i,children:[e.jsx(r,{children:"선택 1"}),e.jsx(r,{children:"선택 2"}),e.jsx(r,{children:"선택 3"})]}),e.jsxs("div",{style:{padding:16,background:"#f7f7f8",borderRadius:8,fontSize:14,color:"#525459"},children:["현재 선택: ",n+1]})]})};var T,V,w;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['large', 'medium']
    }
  },
  render: ({
    defaultValue,
    size
  }) => <SegmentedControl defaultValue={defaultValue} size={size}>
      <SegmentItem>옵션 1</SegmentItem>
      <SegmentItem>옵션 2</SegmentItem>
      <SegmentItem>옵션 3</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0,
    size: 'large',
    children: null
  }
}`,...(w=(V=y.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var R,D,k;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
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

      <p style={s.sectionTitle}>Size</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {(['large', 'medium'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{size}</span>
              <SegmentedControl defaultValue={0} size={size}>
                <SegmentItem>옵션 1</SegmentItem>
                <SegmentItem>옵션 2</SegmentItem>
                <SegmentItem>옵션 3</SegmentItem>
              </SegmentedControl>
            </div>)}
        </div>
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
}`,...(k=(D=x.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const ie=["Playground","Overview"];export{x as Overview,y as Playground,ie as __namedExportsOrder,re as default};
