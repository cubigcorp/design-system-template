import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as D}from"./iframe-pNyzd6po.js";import{S as t}from"./Selector-CUomF-ps.js";import"./preload-helper-eJNa_G2e.js";import"./index-CcPfz-H-.js";import"./index-iQUz0jmT.js";import"./styled-components.browser.esm-CdWSEUdl.js";import"./IconArrowUp-Cts_pkXJ.js";import"./Menu-Dq77ntXa.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./Cell-CEWcqocF.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const i=s=>{const[S,w]=D.useState(s.value||"");return e.jsx("div",{style:{width:240},children:e.jsx(t,{...s,value:S,onChange:z=>w(z)})})},l=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"}],N={title:"Components/Inputs/Selector",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"드롭다운 셀렉터 컴포넌트입니다. 3가지 크기와 다양한 상태를 지원합니다."}}},args:{size:"medium",disabled:!1,placeholder:"선택해주세요.",options:l}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:s=>e.jsx(i,{...s}),argTypes:{size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"}}},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Selector"}),e.jsxs("p",{style:n.desc,children:["드롭다운 셀렉터 컴포넌트입니다.",e.jsx("br",{}),"3가지 크기와 다양한 상태를 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"Sizes"}),e.jsx("div",{style:n.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:s}),e.jsx(i,{size:s,options:l})]},s))})}),e.jsx("p",{style:n.sectionTitle,children:"States"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:80},children:"default"}),e.jsx(i,{options:l})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:80},children:"with value"}),e.jsx("div",{style:{width:240},children:e.jsx(t,{value:"option2",options:l})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:80},children:"disabled"}),e.jsx("div",{style:{width:240},children:e.jsx(t,{disabled:!0,options:l})})]})]})})]})},o={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["small","medium","large"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:s}),e.jsx(i,{size:s,options:l})]},s))})},d={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:240},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx(i,{options:l})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with value"}),e.jsx(t,{value:"option3",options:l})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled"}),e.jsx(t,{disabled:!0,options:l})]})]})};var p,c,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SelectorWithState {...args} />,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,x,u;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Selector</h1>
        <p style={s.desc}>
          드롭다운 셀렉터 컴포넌트입니다.
          <br />
          3가지 크기와 다양한 상태를 지원합니다.
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
              <SelectorWithState size={size} options={sampleOptions} />
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
            width: 80
          }}>default</span>
            <SelectorWithState options={sampleOptions} />
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 80
          }}>with value</span>
            <div style={{
            width: 240
          }}>
              <Selector value='option2' options={sampleOptions} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 80
          }}>disabled</span>
            <div style={{
            width: 240
          }}>
              <Selector disabled options={sampleOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var v,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
          <SelectorWithState size={size} options={sampleOptions} />
        </div>)}
    </div>
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,j;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    width: 240
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>default</span>
        <SelectorWithState options={sampleOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>with value</span>
        <Selector value='option3' options={sampleOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>disabled</span>
        <Selector disabled options={sampleOptions} />
      </div>
    </div>
}`,...(j=(b=d.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const Q=["Playground","Overview","Sizes","States"];export{r as Overview,a as Playground,o as Sizes,d as States,Q as __namedExportsOrder,N as default};
