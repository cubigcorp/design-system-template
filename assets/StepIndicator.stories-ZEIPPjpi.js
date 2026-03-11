import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r,s as d}from"./styled-components.browser.esm-BW4106oE.js";import{b as L}from"./borderColor-CzkI5wcR.js";import{c}from"./color-m2U5piog.js";import{s as b}from"./spacing-tE1IiUFl.js";import{t as x}from"./textColor-G8dwupNW.js";import{t as z}from"./typography-CHdGJV44.js";import{I as P}from"./IconCheck-Cgh-IEDk.js";import"./iframe-C6VbNSAb.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const v=24,g=16,C=({status:n,step:a,label:s,showLabel:u=!1,orientation:o="vertical"})=>e.jsxs(W,{$orientation:o,children:[e.jsx(E,{$status:n,children:n==="Complete"?e.jsx(V,{children:e.jsx(P,{color:"white",width:16,height:16})}):a}),u&&s&&e.jsx(N,{$status:n,children:s})]}),W=r.div`
  display: flex;
  flex-direction: ${({$orientation:n})=>n==="vertical"?"column":"row"};
  align-items: center;
  gap: ${b.gap["gap-2"]};
  flex: 0 0 auto;
  width: ${({$orientation:n})=>n==="vertical"?`${v}px`:"auto"};
  margin-right: ${({$orientation:n})=>n==="horizontal"?b.gap["gap-2"]:"0"};
`,E=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${v}px;
  height: ${v}px;
  border-radius: 50%;
  flex-shrink: 0;
  ${z(void 0,"caption2","medium")}
  transition: all 0.2s ease-in-out;

  ${({$status:n})=>{switch(n){case"Complete":return d`
          background-color: ${c.gray[975]};
          color: ${c.common[100]};
          border: none;
        `;case"Active":return d`
          background-color: ${c.common[100]};
          color: ${x.light["fg-neutral-primary"]};
          border: 1px solid ${c.gray[975]};
        `;case"Inactive":default:return d`
          background-color: ${c.common[100]};
          color: ${x.light["fg-neutral-assistive"]};
          border: 1px solid ${L.light["color-border-primary"]};
        `}}}
`,N=r.span`
  ${z(void 0,"caption2","medium")}
  color: ${({$status:n})=>n==="Active"?x.light["fg-neutral-primary"]:x.light["fg-neutral-alternative"]};
  white-space: nowrap;
  width: 100%;
  text-align: center; // 컨테이너 폭 내에서 중앙 정렬
`,V=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${g}px;
  height: ${g}px;
`;C.__docgenInfo={description:"",methods:[],displayName:"ProgressTracker",props:{status:{required:!0,tsType:{name:"union",raw:"'Inactive' | 'Active' | 'Complete'",elements:[{name:"literal",value:"'Inactive'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Complete'"}]},description:""},step:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const D=({status:n,orientation:a="vertical"})=>e.jsx(F,{$status:n,$orientation:a}),F=r.div`
  flex: 1 1 auto;
  height: 1px;
  margin-top: 12px;
  margin-right: ${({$orientation:n})=>n==="horizontal"?b.gap["gap-2"]:"0"};
  transition: all 0.2s ease-in-out;

  ${({$status:n})=>{switch(n){case"Complete":return d`
          background-color: ${c.gray[975]};
        `;case"Active":case"Inactive":default:return d`
          background-color: ${L.light["color-border-primary"]};
        `}}}
`;D.__docgenInfo={description:"",methods:[],displayName:"StepDivider",props:{status:{required:!0,tsType:{name:"union",raw:"'Inactive' | 'Active' | 'Complete'",elements:[{name:"literal",value:"'Inactive'"},{name:"literal",value:"'Active'"},{name:"literal",value:"'Complete'"}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}}}};const l=({count:n,currentStep:a,steps:s,showLabel:u=!1,orientation:o="vertical",className:k})=>{const q=p=>p<a?"Complete":p===a?"Active":"Inactive",A=()=>{const p=[];for(let i=1;i<=n;i++){const f=q(i),h=s==null?void 0:s[i-1],_=(h==null?void 0:h.label)||"단계";p.push(e.jsxs(B,{$orientation:o,children:[e.jsx(C,{status:f,step:i,label:_,showLabel:u,orientation:o}),i<n&&e.jsx(D,{status:f,orientation:o})]},i))}return p};return e.jsx(O,{className:k,$orientation:o,children:e.jsx(R,{showLabel:u,children:A()})})},O=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${({$orientation:n})=>n==="horizontal"?"400px":"auto"};
`,R=r.div`
  display: flex;
  align-items: ${({showLabel:n})=>n?"flex-start":"center"};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`,B=r.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
  flex: 1;

  &:last-child {
    flex: 0;
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{count:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!1,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const le={title:"Components/Navigation/StepIndicator",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"프로세스의 단계를 시각적으로 보여주는 컴포넌트입니다. 3~5개 스텝과 라벨 표시를 지원합니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},m={parameters:{layout:"centered"},render:n=>e.jsx("div",{style:{width:600},children:e.jsx(l,{...n})}),args:{count:4,currentStep:2,showLabel:!0,steps:[{label:"정보 입력"},{label:"본인 인증"},{label:"약관 동의"},{label:"가입 완료"}]},argTypes:{count:{control:"select",options:[3,4,5]},currentStep:{control:{type:"number",min:1,max:5}},showLabel:{control:"boolean"},orientation:{control:"select",options:["vertical","horizontal"]}}},y={args:{count:4,currentStep:2},parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Step Indicator"}),e.jsxs("p",{style:t.desc,children:["프로세스의 단계를 시각적으로 보여주는 컴포넌트입니다.",e.jsx("br",{}),"3~5개 스텝, 라벨 표시, horizontal 라벨 방향을 지원합니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Step Count"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[{count:3,step:2,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"}]},{count:4,step:2,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"}]},{count:5,step:3,steps:[{label:"단계 1"},{label:"단계 2"},{label:"단계 3"},{label:"단계 4"},{label:"단계 5"}]}].map(({count:n,step:a,steps:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:t.label,children:[n," steps"]}),e.jsx(l,{count:n,currentStep:a,showLabel:!0,steps:s})]},n))})}),e.jsx("p",{style:t.sectionTitle,children:"Progress States"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:[1,2,3,4].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:t.label,children:["step ",n," / 4"]}),e.jsx(l,{count:4,currentStep:n,showLabel:!0,steps:[{label:"정보 입력"},{label:"본인 인증"},{label:"약관 동의"},{label:"가입 완료"}]})]},n))})}),e.jsx("p",{style:t.sectionTitle,children:"Without Labels"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:t.label,children:"3 steps"}),e.jsx(l,{count:3,currentStep:2,showLabel:!1})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:t.label,children:"4 steps"}),e.jsx(l,{count:4,currentStep:2,showLabel:!1})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:t.label,children:"5 steps"}),e.jsx(l,{count:5,currentStep:3,showLabel:!1})]})]})}),e.jsx("p",{style:t.sectionTitle,children:"Horizontal Labels"}),e.jsx("div",{style:t.card,children:e.jsx(l,{count:4,currentStep:2,showLabel:!0,orientation:"horizontal",steps:[{label:"정보 입력"},{label:"본인 인증"},{label:"약관 동의"},{label:"가입 완료"}]})})]})};var S,j,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    width: 600
  }}>
      <StepIndicator {...args} />
    </div>,
  args: {
    count: 4,
    currentStep: 2,
    showLabel: true,
    steps: [{
      label: '정보 입력'
    }, {
      label: '본인 인증'
    }, {
      label: '약관 동의'
    }, {
      label: '가입 완료'
    }]
  },
  argTypes: {
    count: {
      control: 'select',
      options: [3, 4, 5]
    },
    currentStep: {
      control: {
        type: 'number',
        min: 1,
        max: 5
      }
    },
    showLabel: {
      control: 'boolean'
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal']
    }
  }
}`,...(w=(j=m.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var $,I,T;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    count: 4,
    currentStep: 2
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Step Indicator</h1>
        <p style={s.desc}>
          프로세스의 단계를 시각적으로 보여주는 컴포넌트입니다.
          <br />
          3~5개 스텝, 라벨 표시, horizontal 라벨 방향을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Step Count</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
          {[{
          count: 3 as const,
          step: 2,
          steps: [{
            label: '단계 1'
          }, {
            label: '단계 2'
          }, {
            label: '단계 3'
          }]
        }, {
          count: 4 as const,
          step: 2,
          steps: [{
            label: '단계 1'
          }, {
            label: '단계 2'
          }, {
            label: '단계 3'
          }, {
            label: '단계 4'
          }]
        }, {
          count: 5 as const,
          step: 3,
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
        }].map(({
          count,
          step,
          steps
        }) => <div key={count} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{count} steps</span>
              <StepIndicator count={count} currentStep={step} showLabel steps={steps} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Progress States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32
      }}>
          {[1, 2, 3, 4].map(step => <div key={step} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>step {step} / 4</span>
              <StepIndicator count={4} currentStep={step} showLabel steps={[{
            label: '정보 입력'
          }, {
            label: '본인 인증'
          }, {
            label: '약관 동의'
          }, {
            label: '가입 완료'
          }]} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Without Labels</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>3 steps</span>
            <StepIndicator count={3} currentStep={2} showLabel={false} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>4 steps</span>
            <StepIndicator count={4} currentStep={2} showLabel={false} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>5 steps</span>
            <StepIndicator count={5} currentStep={3} showLabel={false} />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Horizontal Labels</p>
      <div style={s.card}>
        <StepIndicator count={4} currentStep={2} showLabel orientation='horizontal' steps={[{
        label: '정보 입력'
      }, {
        label: '본인 인증'
      }, {
        label: '약관 동의'
      }, {
        label: '가입 완료'
      }]} />
      </div>
    </div>
}`,...(T=(I=y.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const ae=["Playground","Overview"];export{y as Overview,m as Playground,ae as __namedExportsOrder,le as default};
