import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{D as o}from"./Description-BthjVKT1.js";import"./styled-components.browser.esm-Cjeww7bt.js";import"./iframe-CLsoOqCU.js";import"./preload-helper-eJNa_G2e.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./textColor-G8dwupNW.js";import"./color-m2U5piog.js";import"./negativeColor-fk0-w6JK.js";import"./IconCircleCheck-BBUUqRs3.js";import"./spacing-tE1IiUFl.js";const W={title:"Components/Data Display/Description",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"폼 필드의 설명/안내 텍스트 컴포넌트입니다. default, negative, positive 3가지 상태를 지원합니다."}}}},e={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},s={parameters:{layout:"centered"},args:{children:"안내 텍스트를 입력해주세요.",status:"default",leadingIcon:!1},argTypes:{status:{control:"select",options:["default","negative","positive"]},leadingIcon:{control:"boolean"}}},i={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:e.page,children:[t.jsxs("div",{style:e.header,children:[t.jsx("h1",{style:e.title,children:"Description"}),t.jsx("p",{style:e.desc,children:"폼 필드의 설명/안내 텍스트 컴포넌트입니다. default, negative, positive 상태를 지원합니다."})]}),t.jsx("p",{style:e.sectionTitle,children:"Status"}),t.jsx("div",{style:e.card,children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{status:"default",text:"안내 텍스트를 입력해주세요."},{status:"negative",text:"올바르지 않은 입력입니다."},{status:"positive",text:"입력이 완료되었습니다."}].map(({status:n,text:a})=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[t.jsx("span",{style:{...e.label,width:60},children:n}),t.jsx(o,{status:n,leadingIcon:!0,children:a})]},n))})}),t.jsx("p",{style:e.sectionTitle,children:"Without Icon"}),t.jsx("div",{style:e.card,children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{status:"default",text:"안내 텍스트를 입력해주세요."},{status:"negative",text:"올바르지 않은 입력입니다."},{status:"positive",text:"입력이 완료되었습니다."}].map(({status:n,text:a})=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[t.jsx("span",{style:{...e.label,width:60},children:n}),t.jsx(o,{status:n,children:a})]},n))})})]})};var l,r,d;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    children: '안내 텍스트를 입력해주세요.',
    status: 'default',
    leadingIcon: false
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'negative', 'positive']
    },
    leadingIcon: {
      control: 'boolean'
    }
  }
}`,...(d=(r=s.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Description</h1>
        <p style={s.desc}>
          폼 필드의 설명/안내 텍스트 컴포넌트입니다. default, negative, positive 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {[{
          status: 'default' as const,
          text: '안내 텍스트를 입력해주세요.'
        }, {
          status: 'negative' as const,
          text: '올바르지 않은 입력입니다.'
        }, {
          status: 'positive' as const,
          text: '입력이 완료되었습니다.'
        }].map(({
          status,
          text
        }) => <div key={status} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{status}</span>
              <Description status={status} leadingIcon>
                {text}
              </Description>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Without Icon</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {[{
          status: 'default' as const,
          text: '안내 텍스트를 입력해주세요.'
        }, {
          status: 'negative' as const,
          text: '올바르지 않은 입력입니다.'
        }, {
          status: 'positive' as const,
          text: '입력이 완료되었습니다.'
        }].map(({
          status,
          text
        }) => <div key={status} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{status}</span>
              <Description status={status}>{text}</Description>
            </div>)}
        </div>
      </div>
    </div>
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const z=["Playground","Overview"];export{i as Overview,s as Playground,z as __namedExportsOrder,W as default};
