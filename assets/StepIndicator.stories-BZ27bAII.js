import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as r,l as c}from"./styled-components.browser.esm-kr1dGAPk.js";import{b as Q}from"./borderColor-C_RHITEf.js";import{c as o}from"./color-CiwAFuFb.js";import{s as w}from"./spacing-tE1IiUFl.js";import{t as f}from"./textColor-DLZeZODc.js";import{t as U}from"./typography-CHdGJV44.js";import{I as ae}from"./IconCheck-Cgh-IEDk.js";import"./iframe-D4fn7yV1.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const j=24,$=16,X=({status:t,step:l,label:s,showLabel:d=!1,orientation:i="vertical"})=>e.jsxs(le,{$orientation:i,children:[e.jsx(se,{$status:t,children:t==="Complete"?e.jsx(oe,{children:e.jsx(ae,{color:"white",width:16,height:16})}):l}),d&&s&&e.jsx(ie,{$status:t,children:s})]}),le=r.div`
  display: flex;
  flex-direction: ${({$orientation:t})=>t==="vertical"?"column":"row"};
  align-items: center;
  gap: ${w.gap["gap-2"]};
  flex: 0 0 auto;
  width: ${({$orientation:t})=>t==="vertical"?`${j}px`:"auto"};
  margin-right: ${({$orientation:t})=>t==="horizontal"?w.gap["gap-2"]:"0"};
`,se=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${j}px;
  height: ${j}px;
  border-radius: 50%;
  flex-shrink: 0;
  ${U(void 0,"caption2","medium")}
  transition: all 0.2s ease-in-out;

  ${({$status:t})=>{switch(t){case"Complete":return c`
          background-color: ${o.gray[975]};
          color: ${o.common[100]};
          border: none;
        `;case"Active":return c`
          background-color: ${o.common[100]};
          color: ${f.light["fg-neutral-primary"]};
          border: 1px solid ${o.gray[975]};
        `;case"Inactive":default:return c`
          background-color: ${o.common[100]};
          color: ${f.light["fg-neutral-assistive"]};
          border: 1px solid ${Q.light["color-border-primary"]};
        `}}}
`,ie=r.span`
  ${U(void 0,"caption2","medium")}
  color: ${({$status:t})=>t==="Active"?f.light["fg-neutral-primary"]:f.light["fg-neutral-alternative"]};
  white-space: nowrap;
  width: 100%;
  text-align: center; // 컨테이너 폭 내에서 중앙 정렬
`,oe=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${$}px;
  height: ${$}px;
`;X.__docgenInfo={description:"",methods:[],displayName:"ProgressTracker",props:{status:{required:!0,tsType:{name:"union",raw:"'Inactive' | 'Active' | 'Complete'",elements:[{name:"literal",value:"'Inactive'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Complete'"}]},description:""},step:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const Y=({status:t,orientation:l="vertical"})=>e.jsx(pe,{$status:t,$orientation:l}),pe=r.div`
  flex: 1 1 auto;
  height: 1px;
  margin-top: 12px;
  margin-right: ${({$orientation:t})=>t==="horizontal"?w.gap["gap-2"]:"0"};
  transition: all 0.2s ease-in-out;

  ${({$status:t})=>{switch(t){case"Complete":return c`
          background-color: ${o.gray[975]};
        `;case"Active":case"Inactive":default:return c`
          background-color: ${Q.light["color-border-primary"]};
        `}}}
`;Y.__docgenInfo={description:"",methods:[],displayName:"StepDivider",props:{status:{required:!0,tsType:{name:"union",raw:"'Inactive' | 'Active' | 'Complete'",elements:[{name:"literal",value:"'Inactive'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Complete'"}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const n=({count:t,currentStep:l,steps:s,showLabel:d=!1,orientation:i="vertical",className:ee})=>{const te=p=>p<l?"Complete":p===l?"Active":"Inactive",ne=()=>{const p=[];for(let a=1;a<=t;a++){const I=te(a),y=s==null?void 0:s[a-1],re=(y==null?void 0:y.label)||"단계";p.push(e.jsxs(ue,{$orientation:i,children:[e.jsx(X,{status:I,step:a,label:re,showLabel:d,orientation:i}),a<t&&e.jsx(Y,{status:I,orientation:i})]},a))}return p};return e.jsx(ce,{className:ee,$orientation:i,children:e.jsx(de,{showLabel:d,children:ne()})})},ce=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${({$orientation:t})=>t==="horizontal"?"400px":"auto"};
`,de=r.div`
  display: flex;
  align-items: ${({showLabel:t})=>t?"flex-start":"center"};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`,ue=r.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
  flex: 1;

  &:last-child {
    flex: 0;
  }
`;n.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{count:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!1,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Le={title:"Components/StepIndicator",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Step Indicator (스텝 인디케이터)는 사용자가 전체 중인 프로세스나 플로우의 단계를 시각적으로 보여주는 컴포넌트입니다. 여러 단계가 순서대로 배열되어 있으며, 현재 위치한 단계의 이후에 진행할 단계 한눈에 파악할 수 있습니다."}}},argTypes:{count:{control:{type:"select"},options:[3,4,5],description:"전체 스텝 개수"},currentStep:{control:{type:"number",min:1,max:5},description:"현재 스텝 (1부터 시작)"},showLabel:{control:{type:"boolean"},description:"라벨 표시 여부"},orientation:{control:{type:"select"},options:["vertical","horizontal"],description:"라벨 위치 (vertical: 아래, horizontal: 옆)"}}},u={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!1}},m={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!0,steps:[{label:"완료"},{label:"단계"},{label:"단계"},{label:"단계"}]}},h={render:t=>e.jsx("div",{style:{width:"500px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:3,currentStep:1,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"}]}},x={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]}},g={render:t=>e.jsx("div",{style:{width:"700px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:5,currentStep:3,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"},{label:"단계 5"}]}},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"60px",padding:"40px"},children:[e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 1 (Active)"}),e.jsx(n,{count:4,currentStep:1,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 2 (Active)"}),e.jsx(n,{count:4,currentStep:2,showLabel:!0,steps:[{label:"완료"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 3 (Active)"}),e.jsx(n,{count:4,currentStep:3,showLabel:!0,steps:[{label:"완료"},{label:"완료"},{label:"단계 3"},{label:"단계 4"}]})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 4 (Complete)"}),e.jsx(n,{count:4,currentStep:4,showLabel:!0,steps:[{label:"완료"},{label:"완료"},{label:"완료"},{label:"완료"}]})]})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"60px",padding:"40px"},children:[e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"3 Steps - Current: 2"}),e.jsx(n,{count:3,currentStep:2,showLabel:!1})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"4 Steps - Current: 2"}),e.jsx(n,{count:4,currentStep:2,showLabel:!1})]}),e.jsxs("div",{style:{width:"700px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"5 Steps - Current: 3"}),e.jsx(n,{count:5,currentStep:3,showLabel:!1})]})]})},S={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!0,orientation:"horizontal",steps:[{label:"완료"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]}};var L,z,C;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    padding: '40px'
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: false
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var T,W,A;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    padding: '40px'
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{
      label: '완료'
    }, {
      label: '단계'
    }, {
      label: '단계'
    }, {
      label: '단계'
    }]
  }
}`,...(A=(W=m.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var B,q,k;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '500px',
    padding: '40px'
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 3,
    currentStep: 1,
    showLabel: true,
    steps: [{
      label: '단계 1'
    }, {
      label: '단계 2'
    }, {
      label: '단계 3'
    }]
  }
}`,...(k=(q=h.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var _,D,E;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    padding: '40px'
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{
      label: '단계 1'
    }, {
      label: '단계 2'
    }, {
      label: '단계 3'
    }, {
      label: '단계 4'
    }]
  }
}`,...(E=(D=x.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var N,V,F;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '700px',
    padding: '40px'
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 5,
    currentStep: 3,
    showLabel: true,
    steps: [{
      label: '단계 1'
    }, {
      label: '단계 2'
    }, {
      label: '단계 3'
    }, {
      label: '단계 4'
    }, {
      label: '단계 5'
    }]
  }
}`,...(F=(V=g.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var P,R,H;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    padding: '40px'
  }}>
      <div style={{
      width: '600px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          Step 1 (Active)
        </h3>
        <StepIndicator count={4} currentStep={1} showLabel={true} steps={[{
        label: '단계 1'
      }, {
        label: '단계 2'
      }, {
        label: '단계 3'
      }, {
        label: '단계 4'
      }]} />
      </div>

      <div style={{
      width: '600px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          Step 2 (Active)
        </h3>
        <StepIndicator count={4} currentStep={2} showLabel={true} steps={[{
        label: '완료'
      }, {
        label: '단계 2'
      }, {
        label: '단계 3'
      }, {
        label: '단계 4'
      }]} />
      </div>

      <div style={{
      width: '600px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          Step 3 (Active)
        </h3>
        <StepIndicator count={4} currentStep={3} showLabel={true} steps={[{
        label: '완료'
      }, {
        label: '완료'
      }, {
        label: '단계 3'
      }, {
        label: '단계 4'
      }]} />
      </div>

      <div style={{
      width: '600px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          Step 4 (Complete)
        </h3>
        <StepIndicator count={4} currentStep={4} showLabel={true} steps={[{
        label: '완료'
      }, {
        label: '완료'
      }, {
        label: '완료'
      }, {
        label: '완료'
      }]} />
      </div>
    </div>
}`,...(H=(R=b.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var O,Z,K;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
    padding: '40px'
  }}>
      <div style={{
      width: '600px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          3 Steps - Current: 2
        </h3>
        <StepIndicator count={3} currentStep={2} showLabel={false} />
      </div>

      <div style={{
      width: '600px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          4 Steps - Current: 2
        </h3>
        <StepIndicator count={4} currentStep={2} showLabel={false} />
      </div>

      <div style={{
      width: '700px'
    }}>
        <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        marginBottom: '20px'
      }}>
          5 Steps - Current: 3
        </h3>
        <StepIndicator count={5} currentStep={3} showLabel={false} />
      </div>
    </div>
}`,...(K=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var G,J,M;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <div style={{
    width: '600px',
    padding: '40px'
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    orientation: 'horizontal',
    steps: [{
      label: '완료'
    }, {
      label: '단계 2'
    }, {
      label: '단계 3'
    }, {
      label: '단계 4'
    }]
  }
}`,...(M=(J=S.parameters)==null?void 0:J.docs)==null?void 0:M.source}}};const ze=["Default","WithLabels","ThreeSteps","FourSteps","FiveSteps","AllStates","WithoutLabels","Horizontal"];export{b as AllStates,u as Default,g as FiveSteps,x as FourSteps,S as Horizontal,h as ThreeSteps,m as WithLabels,v as WithoutLabels,ze as __namedExportsOrder,Le as default};
