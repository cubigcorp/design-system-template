import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as s}from"./Avatar-CHPi4kEX.js";import"./iframe-Diu4OQ1h.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-DZloA45Z.js";import"./borderColor-Bua6bgaN.js";import"./color-BUCiRq0z.js";import"./radius-DaoU83SK.js";import"./textColor-mWadn7SX.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const E={title:"Components/Data Display/Avatar",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"사용자 프로필을 표시하는 아바타 컴포넌트입니다. default(아이콘), initial(텍스트), custom(이미지) 3가지 타입과 4가지 크기를 지원합니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:l=>e.jsx(s,{...l}),args:{type:"initial",size:"medium",value:"A"},argTypes:{type:{control:"select",options:["default","initial","custom"]},size:{control:"select",options:["x-small","small","medium","large"]}}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Avatar"}),e.jsxs("p",{style:n.desc,children:["사용자 프로필을 표시하는 아바타 컴포넌트입니다.",e.jsx("br",{}),"default(아이콘), initial(텍스트), custom(이미지) 3가지 타입과 4가지 크기를 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"Types"}),e.jsx("div",{style:n.card,children:e.jsx("div",{style:{display:"flex",gap:32,alignItems:"center"},children:[{type:"default",label:"default"},{type:"initial",label:"initial",value:"J"},{type:"custom",label:"custom"}].map(({type:l,label:t,value:b})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{type:l,size:"medium",value:b}),e.jsx("span",{style:n.label,children:t})]},l))})}),e.jsx("p",{style:n.sectionTitle,children:"Sizes by Type"}),e.jsx("div",{style:n.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["default","initial","custom"].map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:l}),e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["x-small","small","medium","large"].map(t=>e.jsx(s,{type:l,size:t,value:l==="initial"?"A":void 0},t))})]},l))})})]})},r={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"flex-end"},children:["x-small","small","medium","large"].map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{type:"initial",size:l,value:"A"}),e.jsx("span",{style:n.label,children:l})]},l))})},o={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{type:"default",size:"large"}),e.jsx("span",{style:n.label,children:"default"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{type:"initial",size:"large",value:"J"}),e.jsx("span",{style:n.label,children:"initial"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{type:"custom",size:"large"}),e.jsx("span",{style:n.label,children:"custom"})]})]})};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <Avatar {...args} />,
  args: {
    type: 'initial',
    size: 'medium',
    value: 'A'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'initial', 'custom']
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large']
    }
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,y,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Avatar</h1>
        <p style={s.desc}>
          사용자 프로필을 표시하는 아바타 컴포넌트입니다.
          <br />
          default(아이콘), initial(텍스트), custom(이미지) 3가지 타입과 4가지 크기를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 32,
        alignItems: 'center'
      }}>
          {[{
          type: 'default' as const,
          label: 'default'
        }, {
          type: 'initial' as const,
          label: 'initial',
          value: 'J'
        }, {
          type: 'custom' as const,
          label: 'custom'
        }].map(({
          type,
          label,
          value
        }) => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <Avatar type={type} size='medium' value={value} />
              <span style={s.label}>{label}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes by Type</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          {(['default', 'initial', 'custom'] as const).map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{type}</span>
              <div style={{
            display: 'flex',
            gap: 16,
            alignItems: 'center'
          }}>
                {(['x-small', 'small', 'medium', 'large'] as const).map(size => <Avatar key={size} type={type} size={size} value={type === 'initial' ? 'A' : undefined} />)}
              </div>
            </div>)}
        </div>
      </div>
    </div>
}`,...(u=(y=i.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var x,g,v;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'flex-end'
  }}>
      {(['x-small', 'small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Avatar type='initial' size={size} value='A' />
          <span style={s.label}>{size}</span>
        </div>)}
    </div>
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,h,j;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar type='default' size='large' />
        <span style={s.label}>default</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar type='initial' size='large' value='J' />
        <span style={s.label}>initial</span>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
        <Avatar type='custom' size='large' />
        <span style={s.label}>custom</span>
      </div>
    </div>
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const M=["Playground","Overview","Sizes","Types"];export{i as Overview,a as Playground,r as Sizes,o as Types,M as __namedExportsOrder,E as default};
