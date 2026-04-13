import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-B_xlwamp.js";import{b as x}from"./brandColor-Bb8P60S1.js";import{c as r}from"./color-m2U5piog.js";import{t as y}from"./textColor-G8dwupNW.js";import"./preload-helper-eJNa_G2e.js";const O={title:"Foundation/Colors",parameters:{layout:"fullscreen"}},l={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},section:{marginBottom:40},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},paletteRow:{display:"flex",borderRadius:12,overflow:"hidden",marginBottom:12},paletteName:{fontSize:14,fontWeight:600,color:"#171719",marginBottom:8,textTransform:"capitalize"}},s=({name:o,colors:t,showAll:n})=>{const[k,c]=S.useState(null),w=Object.entries(t);return e.jsxs("div",{style:l.section,children:[e.jsx("div",{style:l.paletteName,children:o}),e.jsx("div",{style:l.paletteRow,children:w.map(([i,p])=>{const h=["25","50","100","200"].includes(i),m=n||k===i;return e.jsx("div",{onMouseEnter:()=>c(i),onMouseLeave:()=>c(null),style:{flex:1,height:m?72:56,backgroundColor:p,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:2,transition:"height 0.15s ease",cursor:"default",position:"relative"},children:m&&e.jsxs(e.Fragment,{children:[e.jsx("span",{style:{fontSize:11,fontWeight:600,color:h?"#171719":"#ffffff"},children:i}),e.jsx("span",{style:{fontSize:10,color:h?"#525459":"rgba(255,255,255,0.75)",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:p})]})},i)})})]})},g=({label:o,tokenName:t,value:n})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:"1px solid #f0f0f2"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:8,backgroundColor:n,border:"1px solid rgba(0,0,0,0.06)",flexShrink:0}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#171719"},children:o}),e.jsx("div",{style:{fontSize:12,color:"#8f9298",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:t})]}),e.jsx("div",{style:{fontSize:12,color:"#8f9298",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:n})]}),a={render:()=>{const[o,t]=S.useState(!1);return e.jsxs("div",{style:l.page,children:[e.jsx("div",{style:l.header,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsxs("div",{children:[e.jsx("h1",{style:l.title,children:"Color Palette"}),e.jsxs("p",{style:l.desc,children:["14개의 컬러 팔레트와 시맨틱 컬러로 구성된 색상 시스템입니다.",e.jsx("br",{}),"각 팔레트는 50~950 단계로 세분화되어 있으며, hover로 상세 값을 확인할 수 있습니다."]})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:8,cursor:"pointer",fontSize:13,color:"#525459",userSelect:"none",flexShrink:0},children:[e.jsx("input",{type:"checkbox",checked:o,onChange:n=>t(n.target.checked),style:{width:16,height:16,cursor:"pointer",accentColor:"#3182f6"}}),"값 모두 보기"]})]})}),e.jsx("p",{style:l.sectionTitle,children:"Neutral"}),e.jsx(s,{name:"Gray",colors:r.gray,showAll:o}),e.jsx(s,{name:"Neutral",colors:r.neutral,showAll:o}),e.jsx("div",{style:{height:24}}),e.jsx("p",{style:l.sectionTitle,children:"Primary Colors"}),e.jsx(s,{name:"Blue",colors:r.blue,showAll:o}),e.jsx(s,{name:"Purple",colors:r.purple,showAll:o}),e.jsx(s,{name:"Deep Purple",colors:r.deeppurple,showAll:o}),e.jsx("div",{style:{height:24}}),e.jsx("p",{style:l.sectionTitle,children:"Status Colors"}),e.jsx(s,{name:"Red",colors:r.red,showAll:o}),e.jsx(s,{name:"Orange",colors:r.orange,showAll:o}),e.jsx(s,{name:"Yellow",colors:r.yellow,showAll:o}),e.jsx(s,{name:"Green",colors:r.green,showAll:o}),e.jsx("div",{style:{height:24}}),e.jsx("p",{style:l.sectionTitle,children:"Extended"}),e.jsx(s,{name:"Lime",colors:r.lime,showAll:o}),e.jsx(s,{name:"Emerald",colors:r.emerald,showAll:o}),e.jsx(s,{name:"Teal",colors:r.teal,showAll:o}),e.jsx(s,{name:"Cyan",colors:r.cyan,showAll:o}),e.jsx(s,{name:"Pink",colors:r.pink,showAll:o})]})}},d={render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Semantic Colors"}),e.jsxs("p",{style:l.desc,children:["용도에 따라 의미가 부여된 시맨틱 컬러입니다.",e.jsx("br",{}),"컴포넌트에서 직접 팔레트 값 대신 시맨틱 컬러를 사용하는 것을 권장합니다."]})]}),e.jsx("p",{style:l.sectionTitle,children:"Text Colors (Light)"}),e.jsx("div",{style:{marginBottom:32},children:Object.entries(y.light).map(([o,t])=>e.jsx(g,{label:o.replace("fg-neutral-",""),tokenName:`textColor.light['${o}']`,value:t},o))}),e.jsx("p",{style:l.sectionTitle,children:"Text Colors (Dark)"}),e.jsx("div",{style:{backgroundColor:"#171719",borderRadius:12,padding:"4px 20px",marginBottom:32},children:Object.entries(y.dark).map(([o,t])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:"1px solid #303135"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:8,backgroundColor:t,border:"1px solid rgba(255,255,255,0.1)",flexShrink:0}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#e6e7e9"},children:o.replace("fg-neutral-","")}),e.jsxs("div",{style:{fontSize:12,color:"#7b7e85",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:["textColor.dark['",o,"']"]})]}),e.jsx("div",{style:{fontSize:12,color:"#7b7e85",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:t})]},o))}),e.jsx("p",{style:l.sectionTitle,children:"Brand Color (Light)"}),e.jsx("div",{style:{marginBottom:32},children:Object.entries(x.light).map(([o,t])=>e.jsx(g,{label:o,tokenName:`brandColor.light['${o}']`,value:t},o))}),e.jsx("p",{style:l.sectionTitle,children:"Brand Color (Dark)"}),e.jsx("div",{style:{backgroundColor:"#171719",borderRadius:12,padding:"4px 20px",marginBottom:32},children:Object.entries(x.dark).map(([o,t])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,padding:"10px 0",borderBottom:"1px solid #303135"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:8,backgroundColor:t,border:"1px solid rgba(255,255,255,0.1)",flexShrink:0}}),e.jsxs("div",{style:{flex:1},children:[e.jsx("div",{style:{fontSize:13,fontWeight:500,color:"#e6e7e9"},children:o}),e.jsxs("div",{style:{fontSize:12,color:"#7b7e85",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:["brandColor.dark['",o,"']"]})]}),e.jsx("div",{style:{fontSize:12,color:"#7b7e85",fontFamily:"'SF Mono', 'Fira Code', monospace"},children:t})]},o))})]})};var f,v,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [showAll, setShowAll] = useState(false);
    return <div style={s.page}>
        <div style={s.header}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
            <div>
              <h1 style={s.title}>Color Palette</h1>
              <p style={s.desc}>
                14개의 컬러 팔레트와 시맨틱 컬러로 구성된 색상 시스템입니다.
                <br />각 팔레트는 50~950 단계로 세분화되어 있으며, hover로 상세 값을 확인할 수
                있습니다.
              </p>
            </div>
            <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer',
            fontSize: 13,
            color: '#525459',
            userSelect: 'none',
            flexShrink: 0
          }}>
              <input type='checkbox' checked={showAll} onChange={e => setShowAll(e.target.checked)} style={{
              width: 16,
              height: 16,
              cursor: 'pointer',
              accentColor: '#3182f6'
            }} />
              값 모두 보기
            </label>
          </div>
        </div>

        <p style={s.sectionTitle}>Neutral</p>
        <ColorStrip name='Gray' colors={color.gray} showAll={showAll} />
        <ColorStrip name='Neutral' colors={color.neutral} showAll={showAll} />

        <div style={{
        height: 24
      }} />
        <p style={s.sectionTitle}>Primary Colors</p>
        <ColorStrip name='Blue' colors={color.blue} showAll={showAll} />
        <ColorStrip name='Purple' colors={color.purple} showAll={showAll} />
        <ColorStrip name='Deep Purple' colors={color.deeppurple} showAll={showAll} />

        <div style={{
        height: 24
      }} />
        <p style={s.sectionTitle}>Status Colors</p>
        <ColorStrip name='Red' colors={color.red} showAll={showAll} />
        <ColorStrip name='Orange' colors={color.orange} showAll={showAll} />
        <ColorStrip name='Yellow' colors={color.yellow} showAll={showAll} />
        <ColorStrip name='Green' colors={color.green} showAll={showAll} />

        <div style={{
        height: 24
      }} />
        <p style={s.sectionTitle}>Extended</p>
        <ColorStrip name='Lime' colors={color.lime} showAll={showAll} />
        <ColorStrip name='Emerald' colors={color.emerald} showAll={showAll} />
        <ColorStrip name='Teal' colors={color.teal} showAll={showAll} />
        <ColorStrip name='Cyan' colors={color.cyan} showAll={showAll} />
        <ColorStrip name='Pink' colors={color.pink} showAll={showAll} />
      </div>;
  }
}`,...(u=(v=a.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var j,C,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Semantic Colors</h1>
        <p style={s.desc}>
          용도에 따라 의미가 부여된 시맨틱 컬러입니다.
          <br />
          컴포넌트에서 직접 팔레트 값 대신 시맨틱 컬러를 사용하는 것을 권장합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Text Colors (Light)</p>
      <div style={{
      marginBottom: 32
    }}>
        {Object.entries(textColor.light).map(([key, value]) => <SemanticColorCard key={key} label={key.replace('fg-neutral-', '')} tokenName={\`textColor.light['\${key}']\`} value={value} />)}
      </div>

      <p style={s.sectionTitle}>Text Colors (Dark)</p>
      <div style={{
      backgroundColor: '#171719',
      borderRadius: 12,
      padding: '4px 20px',
      marginBottom: 32
    }}>
        {Object.entries(textColor.dark).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid #303135'
      }}>
            <div style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: value,
          border: '1px solid rgba(255,255,255,0.1)',
          flexShrink: 0
        }} />
            <div style={{
          flex: 1
        }}>
              <div style={{
            fontSize: 13,
            fontWeight: 500,
            color: '#e6e7e9'
          }}>
                {key.replace('fg-neutral-', '')}
              </div>
              <div style={{
            fontSize: 12,
            color: '#7b7e85',
            fontFamily: "'SF Mono', 'Fira Code', monospace"
          }}>
                textColor.dark['{key}']
              </div>
            </div>
            <div style={{
          fontSize: 12,
          color: '#7b7e85',
          fontFamily: "'SF Mono', 'Fira Code', monospace"
        }}>
              {value}
            </div>
          </div>)}
      </div>

      <p style={s.sectionTitle}>Brand Color (Light)</p>
      <div style={{
      marginBottom: 32
    }}>
        {Object.entries(brandColor.light).map(([key, value]) => <SemanticColorCard key={key} label={key} tokenName={\`brandColor.light['\${key}']\`} value={value} />)}
      </div>

      <p style={s.sectionTitle}>Brand Color (Dark)</p>
      <div style={{
      backgroundColor: '#171719',
      borderRadius: 12,
      padding: '4px 20px',
      marginBottom: 32
    }}>
        {Object.entries(brandColor.dark).map(([key, value]) => <div key={key} style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid #303135'
      }}>
            <div style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          backgroundColor: value,
          border: '1px solid rgba(255,255,255,0.1)',
          flexShrink: 0
        }} />
            <div style={{
          flex: 1
        }}>
              <div style={{
            fontSize: 13,
            fontWeight: 500,
            color: '#e6e7e9'
          }}>{key}</div>
              <div style={{
            fontSize: 12,
            color: '#7b7e85',
            fontFamily: "'SF Mono', 'Fira Code', monospace"
          }}>
                brandColor.dark['{key}']
              </div>
            </div>
            <div style={{
          fontSize: 12,
          color: '#7b7e85',
          fontFamily: "'SF Mono', 'Fira Code', monospace"
        }}>
              {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(b=(C=d.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};const P=["Palette","SemanticColors"];export{a as Palette,d as SemanticColors,P as __namedExportsOrder,O as default};
