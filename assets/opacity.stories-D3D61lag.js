import{j as e}from"./jsx-runtime-D_zvdyIk.js";const p={"opacity-0":"0","opacity-1":"0.1","opacity-2":"0.2","opacity-3":"0.3","opacity-4":"0.4","opacity-5":"0.5","opacity-6":"0.6","opacity-7":"0.7","opacity-8":"0.8","opacity-9":"0.9","opacity-10":"1"},d={title:"Foundation/Opacity",parameters:{layout:"fullscreen"}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5}},t={name:"Overview",render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Opacity"}),e.jsx("p",{style:n.desc,children:"요소의 투명도를 조정하여 정보의 중요도와 상태 변화를 전달합니다."})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(120px, 1fr))",gap:20},children:Object.entries(p).map(([o,i])=>{const a=Math.round(parseFloat(i)*100);return e.jsxs("div",{style:{textAlign:"center"},children:[e.jsxs("div",{style:{width:"100%",aspectRatio:"1",borderRadius:12,border:"1px solid #e6e7e9",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:10,position:"relative",overflow:"hidden",background:"repeating-conic-gradient(#e6e7e9 0% 25%, transparent 0% 50%) 50% / 12px 12px"},children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundColor:"#3182f6",opacity:parseFloat(i)}}),e.jsxs("span",{style:{position:"relative",fontSize:18,fontWeight:700,color:a>40?"#ffffff":"#171719"},children:[a,"%"]})]}),e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#171719"},children:o}),e.jsx("div",{style:{fontSize:12,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:i})]},o)})})]})};var r,s,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Overview',
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Opacity</h1>
        <p style={s.desc}>요소의 투명도를 조정하여 정보의 중요도와 상태 변화를 전달합니다.</p>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: 20
    }}>
        {Object.entries(opacity).map(([key, value]) => {
        const percent = Math.round(parseFloat(value) * 100);
        return <div key={key} style={{
          textAlign: 'center'
        }}>
              <div style={{
            width: '100%',
            aspectRatio: '1',
            borderRadius: 12,
            border: '1px solid #e6e7e9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            position: 'relative',
            overflow: 'hidden',
            background: \`repeating-conic-gradient(#e6e7e9 0% 25%, transparent 0% 50%) 50% / 12px 12px\`
          }}>
                <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#3182f6',
              opacity: parseFloat(value)
            }} />
                <span style={{
              position: 'relative',
              fontSize: 18,
              fontWeight: 700,
              color: percent > 40 ? '#ffffff' : '#171719'
            }}>
                  {percent}%
                </span>
              </div>
              <div style={{
            fontSize: 13,
            fontWeight: 500,
            color: '#171719'
          }}>{key}</div>
              <div style={{
            fontSize: 12,
            color: '#8f9298',
            fontFamily: "'SF Mono', monospace"
          }}>
                {value}
              </div>
            </div>;
      })}
      </div>
    </div>
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const y=["AllOpacities"];export{t as AllOpacities,y as __namedExportsOrder,d as default};
