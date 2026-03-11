import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as c}from"./Label-Cb8OpYux.js";import"./styled-components.browser.esm-BW4106oE.js";import"./iframe-C6VbNSAb.js";import"./preload-helper-eJNa_G2e.js";import"./textColor-G8dwupNW.js";import"./color-m2U5piog.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";const q={title:"Components/Data Display/Label",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"폼 필드의 라벨 컴포넌트입니다. default, required, optional 3가지 타입을 지원합니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},n={parameters:{layout:"centered"},args:{children:"라벨",type:"default"},argTypes:{type:{control:"select",options:["default","required","optional"]}}},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Label"}),e.jsx("p",{style:t.desc,children:"폼 필드의 라벨 컴포넌트입니다. default, required, optional 타입을 지원합니다."})]}),e.jsx("p",{style:t.sectionTitle,children:"Types"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["default","required","optional"].map(s=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx("span",{style:{...t.label,width:60},children:s}),e.jsx(c,{type:s,children:"라벨 텍스트"})]},s))})})]})};var a,o,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    children: '라벨',
    type: 'default'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'required', 'optional']
    }
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Label</h1>
        <p style={s.desc}>
          폼 필드의 라벨 컴포넌트입니다. default, required, optional 타입을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          {(['default', 'required', 'optional'] as const).map(type => <div key={type} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{type}</span>
              <Label type={type}>라벨 텍스트</Label>
            </div>)}
        </div>
      </div>
    </div>
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const L=["Playground","Overview"];export{r as Overview,n as Playground,L as __namedExportsOrder,q as default};
