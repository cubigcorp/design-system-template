import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-pNyzd6po.js";import{C as t}from"./ComboBox-C7EN5FSc.js";import"./preload-helper-eJNa_G2e.js";import"./index-CcPfz-H-.js";import"./index-iQUz0jmT.js";import"./styled-components.browser.esm-CdWSEUdl.js";import"./IconArrowUp-Cts_pkXJ.js";import"./Menu-Dq77ntXa.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./Cell-CEWcqocF.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const i=s=>{const[S,z]=C.useState(s.value||"");return e.jsx("div",{style:{width:300},children:e.jsx(t,{...s,value:S,onChange:B=>z(B)})})},l=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],N={title:"Components/Inputs/ComboBox",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"입력과 드롭다운 선택을 결합한 콤보박스 컴포넌트입니다. 3가지 크기와 검색, 직접 입력을 지원합니다."}}},args:{size:"medium",disabled:!1,placeholder:"입력하거나 선택해주세요.",options:l}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:s=>e.jsx(i,{...s}),argTypes:{size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},placeholder:{control:"text"}}},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"ComboBox"}),e.jsxs("p",{style:n.desc,children:["입력과 드롭다운 선택을 결합한 콤보박스 컴포넌트입니다.",e.jsx("br",{}),"3가지 크기, 검색 필터링, 직접 입력을 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"Sizes"}),e.jsx("div",{style:n.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:s}),e.jsx(i,{size:s,options:l})]},s))})}),e.jsx("p",{style:n.sectionTitle,children:"States"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:"default"}),e.jsx(i,{options:l})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:"disabled"}),e.jsx("div",{style:{width:300},children:e.jsx(t,{disabled:!0,value:"비활성화 상태",options:l})})]})]})})]})},r={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["small","medium","large"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:s}),e.jsx(i,{size:s,options:l})]},s))})},d={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:300},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx(i,{options:l})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"active"}),e.jsx(t,{active:!0,options:l})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled"}),e.jsx(t,{disabled:!0,value:"비활성화 상태",options:l})]})]})};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <ComboBoxWithState {...args} />,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    },
    placeholder: {
      control: 'text'
    }
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,y,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>ComboBox</h1>
        <p style={s.desc}>
          입력과 드롭다운 선택을 결합한 콤보박스 컴포넌트입니다.
          <br />
          3가지 크기, 검색 필터링, 직접 입력을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{size}</span>
              <ComboBoxWithState size={size} options={sampleOptions} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 60
          }}>default</span>
            <ComboBoxWithState options={sampleOptions} />
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 60
          }}>disabled</span>
            <div style={{
            width: 300
          }}>
              <ComboBox disabled value='비활성화 상태' options={sampleOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var v,g,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        ...s.label,
        width: 60
      }}>{size}</span>
          <ComboBoxWithState size={size} options={sampleOptions} />
        </div>)}
    </div>
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,f,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 300
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>default</span>
        <ComboBoxWithState options={sampleOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>active</span>
        <ComboBox active options={sampleOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>disabled</span>
        <ComboBox disabled value='비활성화 상태' options={sampleOptions} />
      </div>
    </div>
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const Q=["Playground","Overview","Sizes","States"];export{o as Overview,a as Playground,r as Sizes,d as States,Q as __namedExportsOrder,N as default};
