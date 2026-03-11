import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as y}from"./iframe-C6VbNSAb.js";import{D as i}from"./Divider-BnYLQkW6.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-BW4106oE.js";import"./color-m2U5piog.js";const u={title:"Components/Data Display/Divider",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"콘텐츠를 구분하는 구분선 컴포넌트입니다. 수평/수직 방향과 다양한 두께를 지원합니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},s={parameters:{layout:"centered"},render:n=>{const l=n.orientation==="vertical";return e.jsx("div",{style:l?{height:120,display:"flex",alignItems:"stretch"}:{width:360},children:l?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(i,{...n}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),e.jsx(i,{...n}),e.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})},args:{orientation:"horizontal",thickness:2},argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},thickness:{control:"select",options:[1,2,4,6,8,12]}}},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Divider"}),e.jsxs("p",{style:t.desc,children:["콘텐츠를 구분하는 구분선 컴포넌트입니다.",e.jsx("br",{}),"수평/수직 방향과 6가지 두께를 지원합니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Thickness"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[1,2,4,6,8,12].map(n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsxs("span",{style:{...t.label,width:40},children:[n,"px"]}),e.jsx("div",{style:{flex:1},children:e.jsx(i,{thickness:n})})]},n))})}),e.jsx("p",{style:t.sectionTitle,children:"Vertical"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",gap:24,height:100,alignItems:"stretch"},children:[1,2,4,8].map(n=>e.jsxs(y.Fragment,{children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8},children:e.jsxs("span",{style:t.label,children:[n,"px"]})}),e.jsx(i,{orientation:"vertical",thickness:n})]},n))})})]})};var a,o,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => {
    const isVertical = args.orientation === 'vertical';
    return <div style={isVertical ? {
      height: 120,
      display: 'flex',
      alignItems: 'stretch'
    } : {
      width: 360
    }}>
        {isVertical ? <>
            <div style={{
          flex: 1,
          paddingRight: 12
        }}>왼쪽</div>
            <Divider {...args} />
            <div style={{
          flex: 1,
          paddingLeft: 12
        }}>오른쪽</div>
          </> : <>
            <div style={{
          marginBottom: 12
        }}>상단 콘텐츠</div>
            <Divider {...args} />
            <div style={{
          marginTop: 12
        }}>하단 콘텐츠</div>
          </>}
      </div>;
  },
  args: {
    orientation: 'horizontal',
    thickness: 2
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical']
    },
    thickness: {
      control: 'select',
      options: [1, 2, 4, 6, 8, 12]
    }
  }
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Divider</h1>
        <p style={s.desc}>
          콘텐츠를 구분하는 구분선 컴포넌트입니다.
          <br />
          수평/수직 방향과 6가지 두께를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Thickness</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          {([1, 2, 4, 6, 8, 12] as const).map(t => <div key={t} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
              <span style={{
            ...s.label,
            width: 40
          }}>{t}px</span>
              <div style={{
            flex: 1
          }}>
                <Divider thickness={t} />
              </div>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Vertical</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        height: 100,
        alignItems: 'stretch'
      }}>
          {([1, 2, 4, 8] as const).map(t => <React.Fragment key={t}>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8
          }}>
                <span style={s.label}>{t}px</span>
              </div>
              <Divider orientation='vertical' thickness={t} />
            </React.Fragment>)}
        </div>
      </div>
    </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const D=["Playground","Overview"];export{r as Overview,s as Playground,D as __namedExportsOrder,u as default};
