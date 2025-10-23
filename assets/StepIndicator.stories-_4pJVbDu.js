import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./StepIndicator-C6XdDlxv.js";import"./textColor-CpaBbm6p.js";import"./iframe-DjGnLD2c.js";import"./color-CiwAFuFb.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";import"./IconCheck-CKtc9n1_.js";const M={title:"Components/StepIndicator",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Step Indicator (스텝 인디케이터)는 사용자가 전체 중인 프로세스나 플로우의 단계를 시각적으로 보여주는 컴포넌트입니다. 여러 단계가 순서대로 배열되어 있으며, 현재 위치한 단계의 이후에 진행할 단계 한눈에 파악할 수 있습니다."}}},argTypes:{count:{control:{type:"select"},options:[3,4,5],description:"전체 스텝 개수"},currentStep:{control:{type:"number",min:1,max:5},description:"현재 스텝 (1부터 시작)"},showLabel:{control:{type:"boolean"},description:"라벨 표시 여부"}}},r={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!1}},s={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!0,steps:[{label:"완료"},{label:"단계"},{label:"단계"},{label:"단계"}]}},l={render:t=>e.jsx("div",{style:{width:"500px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:3,currentStep:1,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"}]}},a={render:t=>e.jsx("div",{style:{width:"600px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:4,currentStep:2,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]}},o={render:t=>e.jsx("div",{style:{width:"700px",padding:"40px"},children:e.jsx(n,{...t})}),args:{count:5,currentStep:3,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"},{label:"단계 5"}]}},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"60px",padding:"40px"},children:[e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 1 (Active)"}),e.jsx(n,{count:4,currentStep:1,showLabel:!0,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 2 (Active)"}),e.jsx(n,{count:4,currentStep:2,showLabel:!0,steps:[{label:"완료"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 3 (Active)"}),e.jsx(n,{count:4,currentStep:3,showLabel:!0,steps:[{label:"완료"},{label:"완료"},{label:"단계 3"},{label:"단계 4"}]})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"Step 4 (Complete)"}),e.jsx(n,{count:4,currentStep:4,showLabel:!0,steps:[{label:"완료"},{label:"완료"},{label:"완료"},{label:"완료"}]})]})]})},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"60px",padding:"40px"},children:[e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"3 Steps - Current: 2"}),e.jsx(n,{count:3,currentStep:2,showLabel:!1})]}),e.jsxs("div",{style:{width:"600px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"4 Steps - Current: 2"}),e.jsx(n,{count:4,currentStep:2,showLabel:!1})]}),e.jsxs("div",{style:{width:"700px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px"},children:"5 Steps - Current: 3"}),e.jsx(n,{count:5,currentStep:3,showLabel:!1})]})]})};var d,c,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "600px",
    padding: "40px"
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: false
  }
}`,...(x=(c=r.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var u,h,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "600px",
    padding: "40px"
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{
      label: "완료"
    }, {
      label: "단계"
    }, {
      label: "단계"
    }, {
      label: "단계"
    }]
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var m,S,g;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "500px",
    padding: "40px"
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 3,
    currentStep: 1,
    showLabel: true,
    steps: [{
      label: "단계 1"
    }, {
      label: "단계 2"
    }, {
      label: "단계 3"
    }]
  }
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var y,v,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "600px",
    padding: "40px"
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{
      label: "단계 1"
    }, {
      label: "단계 2"
    }, {
      label: "단계 3"
    }, {
      label: "단계 4"
    }]
  }
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var w,j,L;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "700px",
    padding: "40px"
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 5,
    currentStep: 3,
    showLabel: true,
    steps: [{
      label: "단계 1"
    }, {
      label: "단계 2"
    }, {
      label: "단계 3"
    }, {
      label: "단계 4"
    }, {
      label: "단계 5"
    }]
  }
}`,...(L=(j=o.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var W,I,z;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    padding: "40px"
  }}>
      <div style={{
      width: "600px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          Step 1 (Active)
        </h3>
        <StepIndicator count={4} currentStep={1} showLabel={true} steps={[{
        label: "단계 1"
      }, {
        label: "단계 2"
      }, {
        label: "단계 3"
      }, {
        label: "단계 4"
      }]} />
      </div>

      <div style={{
      width: "600px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          Step 2 (Active)
        </h3>
        <StepIndicator count={4} currentStep={2} showLabel={true} steps={[{
        label: "완료"
      }, {
        label: "단계 2"
      }, {
        label: "단계 3"
      }, {
        label: "단계 4"
      }]} />
      </div>

      <div style={{
      width: "600px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          Step 3 (Active)
        </h3>
        <StepIndicator count={4} currentStep={3} showLabel={true} steps={[{
        label: "완료"
      }, {
        label: "완료"
      }, {
        label: "단계 3"
      }, {
        label: "단계 4"
      }]} />
      </div>

      <div style={{
      width: "600px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          Step 4 (Complete)
        </h3>
        <StepIndicator count={4} currentStep={4} showLabel={true} steps={[{
        label: "완료"
      }, {
        label: "완료"
      }, {
        label: "완료"
      }, {
        label: "완료"
      }]} />
      </div>
    </div>
}`,...(z=(I=p.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var B,C,A;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "60px",
    padding: "40px"
  }}>
      <div style={{
      width: "600px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          3 Steps - Current: 2
        </h3>
        <StepIndicator count={3} currentStep={2} showLabel={false} />
      </div>

      <div style={{
      width: "600px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          4 Steps - Current: 2
        </h3>
        <StepIndicator count={4} currentStep={2} showLabel={false} />
      </div>

      <div style={{
      width: "700px"
    }}>
        <h3 style={{
        fontSize: "16px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
          5 Steps - Current: 3
        </h3>
        <StepIndicator count={5} currentStep={3} showLabel={false} />
      </div>
    </div>
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const N=["Default","WithLabels","ThreeSteps","FourSteps","FiveSteps","AllStates","WithoutLabels"];export{p as AllStates,r as Default,o as FiveSteps,a as FourSteps,l as ThreeSteps,s as WithLabels,i as WithoutLabels,N as __namedExportsOrder,M as default};
