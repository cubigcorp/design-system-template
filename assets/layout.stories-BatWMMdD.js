import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./radius-DaoU83SK.js";import{s as p}from"./shadow-DVq_1U2q.js";import{s as l}from"./spacing-tE1IiUFl.js";const R={title:"Foundation/Layout",parameters:{layout:"fullscreen"}},i={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},tokenRow:{display:"flex",alignItems:"center",padding:"12px 0",borderBottom:"1px solid #f0f0f2",gap:16},tokenName:{fontSize:13,fontWeight:500,color:"#171719",width:120,flexShrink:0,fontFamily:"'SF Mono', 'Fira Code', monospace"},tokenValue:{fontSize:12,color:"#8f9298",width:60,flexShrink:0,fontFamily:"'SF Mono', 'Fira Code', monospace"}},o={render:()=>{const t=["gap-1","gap-2","gap-3","gap-4","gap-6","gap-8","gap-10","gap-12","gap-16"],s=Object.entries(l.gap).filter(([n])=>t.includes(n));return e.jsxs("div",{style:i.page,children:[e.jsxs("div",{style:i.header,children:[e.jsx("h1",{style:i.title,children:"Spacing"}),e.jsx("p",{style:i.desc,children:"일관된 간격 시스템으로 레이아웃의 리듬감을 유지합니다."})]}),e.jsx("div",{children:s.map(([n,a])=>e.jsxs("div",{style:i.tokenRow,children:[e.jsx("span",{style:i.tokenName,children:n}),e.jsx("span",{style:i.tokenValue,children:a}),e.jsx("div",{style:{flex:1},children:e.jsx("div",{style:{height:24,width:a,backgroundColor:"#3182f6",borderRadius:4,transition:"width 0.2s ease"}})})]},n))}),e.jsxs("div",{style:{marginTop:32,padding:20,background:"#f7f7f8",borderRadius:12},children:[e.jsxs("div",{style:{fontSize:12,color:"#8f9298",marginBottom:8},children:["전체 ",Object.keys(l.gap).length,"개 토큰 중 주요 값만 표시"]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:Object.entries(l.gap).map(([n,a])=>e.jsxs("span",{style:{fontSize:11,padding:"3px 8px",borderRadius:4,background:t.includes(n)?"#e8f3ff":"#f2f3f5",color:t.includes(n)?"#3182f6":"#7b7e85",fontFamily:"'SF Mono', monospace"},children:[n,": ",a]},n))})]})]})}},r={name:"Radius",render:()=>e.jsxs("div",{style:i.page,children:[e.jsxs("div",{style:i.header,children:[e.jsx("h1",{style:i.title,children:"Radius"}),e.jsx("p",{style:i.desc,children:"모서리 둥글기로 컴포넌트의 성격을 구분합니다."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:16},children:Object.entries(k).map(([t,s])=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("div",{style:{width:"100%",aspectRatio:"1",backgroundColor:"#f2f3f5",border:"1px solid #e6e7e9",borderRadius:s,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10},children:e.jsx("span",{style:{fontSize:13,fontWeight:600,color:"#525459"},children:s})}),e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#171719"},children:t})]},t))})]})},d={name:"Shadow",render:()=>e.jsxs("div",{style:i.page,children:[e.jsxs("div",{style:i.header,children:[e.jsx("h1",{style:i.title,children:"Shadow"}),e.jsx("p",{style:i.desc,children:"그림자로 요소의 깊이감과 계층 구조를 표현합니다."})]}),e.jsx("p",{style:i.sectionTitle,children:"Light Mode"}),e.jsx("div",{style:{backgroundColor:"#ffffff",borderRadius:16,padding:24,marginBottom:48,border:"1px solid #e6e7e9"},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:24},children:Object.entries(p.light).map(([t,s])=>e.jsxs("div",{children:[e.jsx("div",{style:{height:120,borderRadius:16,backgroundColor:"#ffffff",boxShadow:s,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#525459"},children:t})}),e.jsx("div",{style:{marginTop:10,fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace",lineHeight:1.4,wordBreak:"break-all"},children:s})]},t))})}),e.jsx("p",{style:i.sectionTitle,children:"Dark Mode"}),e.jsx("div",{style:{backgroundColor:"#171719",padding:24,borderRadius:16},children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:24},children:Object.entries(p.dark).map(([t,s])=>e.jsxs("div",{children:[e.jsx("div",{style:{height:120,borderRadius:16,backgroundColor:"#303135",boxShadow:s,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx("span",{style:{fontSize:14,fontWeight:600,color:"#e6e7e9"},children:t})}),e.jsx("div",{style:{marginTop:10,fontSize:11,color:"#7b7e85",fontFamily:"'SF Mono', monospace",lineHeight:1.4,wordBreak:"break-all"},children:s})]},t))})})]})};var c,g,f;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const highlights = ['gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-6', 'gap-8', 'gap-10', 'gap-12', 'gap-16'];
    const filteredGaps = Object.entries(spacing.gap).filter(([key]) => highlights.includes(key));
    return <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Spacing</h1>
          <p style={s.desc}>일관된 간격 시스템으로 레이아웃의 리듬감을 유지합니다.</p>
        </div>

        <div>
          {filteredGaps.map(([key, value]) => <div key={key} style={s.tokenRow}>
              <span style={s.tokenName}>{key}</span>
              <span style={s.tokenValue}>{value}</span>
              <div style={{
            flex: 1
          }}>
                <div style={{
              height: 24,
              width: value,
              backgroundColor: '#3182f6',
              borderRadius: 4,
              transition: 'width 0.2s ease'
            }} />
              </div>
            </div>)}
        </div>

        <div style={{
        marginTop: 32,
        padding: 20,
        background: '#f7f7f8',
        borderRadius: 12
      }}>
          <div style={{
          fontSize: 12,
          color: '#8f9298',
          marginBottom: 8
        }}>
            전체 {Object.keys(spacing.gap).length}개 토큰 중 주요 값만 표시
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6
        }}>
            {Object.entries(spacing.gap).map(([key, value]) => <span key={key} style={{
            fontSize: 11,
            padding: '3px 8px',
            borderRadius: 4,
            background: highlights.includes(key) ? '#e8f3ff' : '#f2f3f5',
            color: highlights.includes(key) ? '#3182f6' : '#7b7e85',
            fontFamily: "'SF Mono', monospace"
          }}>
                {key}: {value}
              </span>)}
          </div>
        </div>
      </div>;
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,y,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Radius',
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Radius</h1>
        <p style={s.desc}>모서리 둥글기로 컴포넌트의 성격을 구분합니다.</p>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 16
    }}>
        {Object.entries(radius).map(([key, value]) => <div key={key} style={{
        textAlign: 'center'
      }}>
            <div style={{
          width: '100%',
          aspectRatio: '1',
          backgroundColor: '#f2f3f5',
          border: '1px solid #e6e7e9',
          borderRadius: value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10
        }}>
              <span style={{
            fontSize: 13,
            fontWeight: 600,
            color: '#525459'
          }}>
                {value}
              </span>
            </div>
            <div style={{
          fontSize: 13,
          fontWeight: 500,
          color: '#171719'
        }}>{key}</div>
          </div>)}
      </div>
    </div>
}`,...(m=(y=r.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,x,v;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Shadow',
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Shadow</h1>
        <p style={s.desc}>그림자로 요소의 깊이감과 계층 구조를 표현합니다.</p>
      </div>

      <p style={s.sectionTitle}>Light Mode</p>
      <div style={{
      backgroundColor: '#ffffff',
      borderRadius: 16,
      padding: 24,
      marginBottom: 48,
      border: '1px solid #e6e7e9'
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 24
      }}>
          {Object.entries(shadow.light).map(([key, value]) => <div key={key}>
              <div style={{
            height: 120,
            borderRadius: 16,
            backgroundColor: '#ffffff',
            boxShadow: value,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                <span style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#525459'
            }}>{key}</span>
              </div>
              <div style={{
            marginTop: 10,
            fontSize: 11,
            color: '#8f9298',
            fontFamily: "'SF Mono', monospace",
            lineHeight: 1.4,
            wordBreak: 'break-all'
          }}>
                {value}
              </div>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Dark Mode</p>
      <div style={{
      backgroundColor: '#171719',
      padding: 24,
      borderRadius: 16
    }}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 24
      }}>
          {Object.entries(shadow.dark).map(([key, value]) => <div key={key}>
              <div style={{
            height: 120,
            borderRadius: 16,
            backgroundColor: '#303135',
            boxShadow: value,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
                <span style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#e6e7e9'
            }}>{key}</span>
              </div>
              <div style={{
            marginTop: 10,
            fontSize: 11,
            color: '#7b7e85',
            fontFamily: "'SF Mono', monospace",
            lineHeight: 1.4,
            wordBreak: 'break-all'
          }}>
                {value}
              </div>
            </div>)}
        </div>
      </div>
    </div>
}`,...(v=(x=d.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const C=["Spacing","RadiusTokens","ShadowTokens"];export{r as RadiusTokens,d as ShadowTokens,o as Spacing,C as __namedExportsOrder,R as default};
