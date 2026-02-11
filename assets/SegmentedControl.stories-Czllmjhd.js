import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as i}from"./iframe-D0DrdOha.js";import{d as V,l as x}from"./styled-components.browser.esm-DPRVC5T4.js";import{c as j}from"./color-CiwAFuFb.js";import{r as y}from"./radius-DaoU83SK.js";import{s as J}from"./shadow-DVq_1U2q.js";import{s as d}from"./spacing-tE1IiUFl.js";import{t as h}from"./textColor-DLZeZODc.js";import{t as K}from"./typography-CHdGJV44.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const M=V.div`
  display: inline-flex;
  background-color: ${j.gray[50]};
  border-radius: ${y["rounded-2"]};
  padding: ${d.gap["gap-1"]}; // gap-1 (Top/Bottom) gap-1 (Left/Right)
  gap: ${d.gap["gap-0.5"]};
  position: relative;
`,Q=V.div`
  position: absolute;
  top: ${d.gap["gap-1"]};
  bottom: ${d.gap["gap-1"]};
  background-color: ${j.common[100]};
  border-radius: ${y["rounded-1"]};
  box-shadow: ${J.light["shadow-xs"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({$activeIndex:n,$totalItems:r})=>{const a=`calc((100% - ${(r-1)*2}px - 8px) / ${r})`;return`
      left: ${`calc(4px + ${n} * (${a} + 2px))`};
      width: ${a};
    `}}
`,o=({children:n,className:r,defaultValue:m=0,value:s,onChange:a})=>{const[$,G]=i.useState(m),b=s!==void 0?s:$,H=l=>{s===void 0&&G(l),a==null||a(l)},v=i.Children.toArray(n);return e.jsxs(M,{className:r,children:[e.jsx(Q,{$activeIndex:b,$totalItems:v.length}),v.map((l,I)=>i.isValidElement(l)?i.cloneElement(l,{key:I,active:b===I,onClick:()=>H(I)}):l)]})};o.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const U=V.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${y["rounded-1"]};
  ${K(void 0,"body3","medium")}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${d.gap["gap-1"]} ${d.gap["gap-6"]}; // gap-1 (Top/Bottom) gap-6 (Left/Right)
  white-space: nowrap;

  ${({$active:n,$disabled:r})=>r?x`
        background-color: ${j.gray[50]};
        color: ${h.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:n?x`
        background-color: transparent;
        color: ${h.light["fg-neutral-primary"]};
        position: relative;
        z-index: 1;
      `:x`
      background-color: transparent;
      color: ${h.light["fg-neutral-alternative"]};
      position: relative;
      z-index: 1;
    `}

  &:focus {
    outline: none;
  }
`,t=({children:n,active:r=!1,disabled:m=!1,onClick:s,className:a})=>e.jsx(U,{$active:r,$disabled:m,onClick:s,className:a,disabled:m,children:n});t.__docgenInfo={description:"",methods:[],displayName:"SegmentItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ie={title:"Components/SegmentedControl",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"세그먼트 컨트롤(Segmented Control)은 여러 개의 선택지를 수평으로 배열된 세그먼트(버튼 형태)로 제공하는 컴포넌트입니다. 사용자는 이 중 하나를 선택하여 현재 상태를 전환하거나, 화면 내 표시되는 콘텐츠를 빠르게 전환할 수 있습니다."},canvas:{sourceState:"shown"}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}}},c={render:({defaultValue:n})=>e.jsxs(o,{defaultValue:n,children:[e.jsx(t,{children:"텍스트"}),e.jsx(t,{children:"텍스트"}),e.jsx(t,{children:"텍스트"})]}),args:{defaultValue:0}},u={render:({defaultValue:n})=>e.jsxs(o,{defaultValue:n,children:[e.jsx(t,{children:"옵션 1"}),e.jsx(t,{children:"옵션 2"})]}),args:{defaultValue:0}},p={render:({defaultValue:n})=>e.jsxs(o,{defaultValue:n,children:[e.jsx(t,{children:"첫 번째"}),e.jsx(t,{children:"두 번째"}),e.jsx(t,{children:"세 번째"}),e.jsx(t,{children:"네 번째"})]}),args:{defaultValue:0}},g={render:({defaultValue:n})=>e.jsxs(o,{defaultValue:n,children:[e.jsx(t,{children:"1월"}),e.jsx(t,{children:"2월"}),e.jsx(t,{children:"3월"}),e.jsx(t,{children:"4월"}),e.jsx(t,{children:"5월"}),e.jsx(t,{children:"6월"})]}),args:{defaultValue:0}},S={render:({defaultValue:n})=>e.jsxs(o,{defaultValue:n,children:[e.jsx(t,{children:"활성"}),e.jsx(t,{disabled:!0,children:"비활성"}),e.jsx(t,{children:"활성"})]}),args:{defaultValue:0}},f={render:()=>{const[n,r]=i.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(o,{value:n,onChange:r,children:[e.jsx(t,{children:"선택 1"}),e.jsx(t,{children:"선택 2"}),e.jsx(t,{children:"선택 3"})]}),e.jsxs("p",{children:["현재 선택된 인덱스: ",n]})]})}};var C,w,R;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>텍스트</SegmentItem>
      <SegmentItem>텍스트</SegmentItem>
      <SegmentItem>텍스트</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(R=(w=c.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var T,k,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>옵션 1</SegmentItem>
      <SegmentItem>옵션 2</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var z,N,D;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>첫 번째</SegmentItem>
      <SegmentItem>두 번째</SegmentItem>
      <SegmentItem>세 번째</SegmentItem>
      <SegmentItem>네 번째</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var _,E,W;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>1월</SegmentItem>
      <SegmentItem>2월</SegmentItem>
      <SegmentItem>3월</SegmentItem>
      <SegmentItem>4월</SegmentItem>
      <SegmentItem>5월</SegmentItem>
      <SegmentItem>6월</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(W=(E=g.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var A,B,F;S.parameters={...S.parameters,docs:{...(A=S.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: ({
    defaultValue
  }) => <SegmentedControl defaultValue={defaultValue}>
      <SegmentItem>활성</SegmentItem>
      <SegmentItem disabled>비활성</SegmentItem>
      <SegmentItem>활성</SegmentItem>
    </SegmentedControl>,
  args: {
    defaultValue: 0
  }
}`,...(F=(B=S.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var L,P,O;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <SegmentedControl value={value} onChange={setValue}>
          <SegmentItem>선택 1</SegmentItem>
          <SegmentItem>선택 2</SegmentItem>
          <SegmentItem>선택 3</SegmentItem>
        </SegmentedControl>
        <p>현재 선택된 인덱스: {value}</p>
      </div>;
  }
}`,...(O=(P=f.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const ce=["Default","TwoItems","FourItems","SixItems","WithDisabledItem","Controlled"];export{f as Controlled,c as Default,p as FourItems,g as SixItems,u as TwoItems,S as WithDisabledItem,ce as __namedExportsOrder,ie as default};
