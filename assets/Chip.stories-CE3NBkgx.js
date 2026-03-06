import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as s}from"./Chip-ChO3Q8pF.js";import"./iframe-CLsoOqCU.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-Cjeww7bt.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./fontWeight-CRwBdwgF.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";const E={title:"Components/Data Display/Chip",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"태그, 필터, 상태 표시 등에 사용되는 칩 컴포넌트입니다. Outline, Solid 타입과 4가지 크기를 지원합니다."}}}},l={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},i={parameters:{layout:"centered"},render:n=>e.jsx(s,{...n,children:"텍스트"}),args:{type:"outline",size:"medium",active:!1,disabled:!1},argTypes:{type:{control:"select",options:["outline","solid"]},size:{control:"select",options:["x-small","small","medium","large"]},active:{control:"boolean"},disabled:{control:"boolean"}}},t={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Chip"}),e.jsxs("p",{style:l.desc,children:["태그, 필터, 상태 표시 등에 사용되는 칩 컴포넌트입니다.",e.jsx("br",{}),"Outline/Solid 타입, 4가지 크기, active/disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:l.sectionTitle,children:"Types × Sizes"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["outline","solid"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:l.label,children:n}),e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["x-small","small","medium","large"].map(o=>e.jsx(s,{type:n,size:o,children:o},o))})]},n))})}),e.jsx("p",{style:l.sectionTitle,children:"States"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["outline","solid"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:l.label,children:n}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(s,{type:n,children:"default"}),e.jsx(s,{type:n,state:"hovered",children:"hovered"}),e.jsx(s,{type:n,state:"pressed",children:"pressed"}),e.jsx(s,{type:n,state:"focused",children:"focused"}),e.jsx(s,{type:n,active:!0,children:"active"}),e.jsx(s,{type:n,disabled:!0,children:"disabled"})]})]},n))})}),e.jsx("p",{style:l.sectionTitle,children:"Radius"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:["rounded-1","rounded-2","rounded-3","rounded-4","rounded-full"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{radius:n,children:"텍스트"}),e.jsx("span",{style:l.label,children:n})]},n))})})]})},a={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["x-small","small","medium","large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{size:n,children:"텍스트"}),e.jsx("span",{style:l.label,children:n})]},n))})},r={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["outline","solid"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:l.label,children:n}),e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(s,{type:n,children:"default"}),e.jsx(s,{type:n,state:"hovered",children:"hovered"}),e.jsx(s,{type:n,state:"pressed",children:"pressed"}),e.jsx(s,{type:n,active:!0,children:"active"}),e.jsx(s,{type:n,disabled:!0,children:"disabled"})]})]},n))})},d={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:["rounded-1","rounded-2","rounded-3","rounded-4","rounded-full"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{radius:n,children:"텍스트"}),e.jsx("span",{style:l.label,children:n})]},n))})};var p,c,m;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <Chip {...args}>텍스트</Chip>,
  args: {
    type: 'outline',
    size: 'medium',
    active: false,
    disabled: false
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['outline', 'solid']
    },
    size: {
      control: 'select',
      options: ['x-small', 'small', 'medium', 'large']
    },
    active: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var y,u,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Chip</h1>
        <p style={s.desc}>
          태그, 필터, 상태 표시 등에 사용되는 칩 컴포넌트입니다.
          <br />
          Outline/Solid 타입, 4가지 크기, active/disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types × Sizes</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {(['outline', 'solid'] as const).map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{type}</span>
              <div style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center'
          }}>
                {(['x-small', 'small', 'medium', 'large'] as const).map(size => <Chip key={size} type={type} size={size}>
                    {size}
                  </Chip>)}
              </div>
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
          {(['outline', 'solid'] as const).map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{type}</span>
              <div style={{
            display: 'flex',
            gap: 12,
            alignItems: 'center'
          }}>
                <Chip type={type}>default</Chip>
                <Chip type={type} state='hovered'>
                  hovered
                </Chip>
                <Chip type={type} state='pressed'>
                  pressed
                </Chip>
                <Chip type={type} state='focused'>
                  focused
                </Chip>
                <Chip type={type} active>
                  active
                </Chip>
                <Chip type={type} disabled>
                  disabled
                </Chip>
              </div>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Radius</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {(['rounded-1', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-full'] as const).map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
                <Chip radius={r}>텍스트</Chip>
                <span style={s.label}>{r}</span>
              </div>)}
        </div>
      </div>
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,v,g;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['x-small', 'small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Chip size={size}>텍스트</Chip>
          <span style={s.label}>{size}</span>
        </div>)}
    </div>
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,j,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      {(['outline', 'solid'] as const).map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={s.label}>{type}</span>
          <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }}>
            <Chip type={type}>default</Chip>
            <Chip type={type} state='hovered'>
              hovered
            </Chip>
            <Chip type={type} state='pressed'>
              pressed
            </Chip>
            <Chip type={type} active>
              active
            </Chip>
            <Chip type={type} disabled>
              disabled
            </Chip>
          </div>
        </div>)}
    </div>
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var C,S,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      {(['rounded-1', 'rounded-2', 'rounded-3', 'rounded-4', 'rounded-full'] as const).map(r => <div key={r} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Chip radius={r}>텍스트</Chip>
          <span style={s.label}>{r}</span>
        </div>)}
    </div>
}`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const M=["Playground","Overview","Sizes","States","Radius"];export{t as Overview,i as Playground,d as Radius,a as Sizes,r as States,M as __namedExportsOrder,E as default};
