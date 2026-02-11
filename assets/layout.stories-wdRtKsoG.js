import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./color-CiwAFuFb.js";import{r as u}from"./radius-DaoU83SK.js";import{s as p}from"./shadow-DVq_1U2q.js";import{s as v}from"./spacing-tE1IiUFl.js";const C={title:"Foundation/Layout",parameters:{layout:"padded",docs:{description:{component:"디자인 시스템의 레이아웃 관련 토큰들을 보여줍니다."}}}},o={render:()=>n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"8px"},children:"Radius Tokens"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"24px"},children:"일반적으로 사용되는 Radius 토큰 예시입니다."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:Object.entries(u).map(([e,i])=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[n.jsx("div",{style:{fontWeight:500},children:e}),n.jsx("div",{style:{fontSize:"14px",color:"#6b7280"},children:i})]}),n.jsx("div",{style:{width:"200px",height:"100px",backgroundColor:t.deeppurple[100],border:`2px solid ${t.deeppurple[200]}`,borderRadius:i,display:"flex",alignItems:"center",justifyContent:"center",color:t.deeppurple[700],fontWeight:500},children:e})]},e))})]})},d={render:()=>n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"8px"},children:"Gap Tokens"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"24px"},children:"요소들 사이의 간격을 일관되게 유지하기 위한 gap 토큰입니다."}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:Object.entries(v.gap).map(([e,i])=>n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"12px"},children:[n.jsx("div",{style:{width:"100px",fontWeight:500},children:e}),n.jsx("div",{style:{fontSize:"14px",color:"#6b7280"},children:i})]}),n.jsx("div",{style:{backgroundColor:"#f9fafb",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px"},children:n.jsx("div",{style:{display:"flex",gap:i},children:[1,2,3].map(l=>n.jsx("div",{style:{width:"48px",height:"48px",backgroundColor:t.deeppurple[100],border:`1px solid ${t.deeppurple[200]}`,borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",color:t.deeppurple[700],fontWeight:500},children:l},l))})})]},e))})]})},r={render:()=>n.jsxs("div",{style:{padding:"24px"},children:[n.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"8px"},children:"Shadow Tokens"}),n.jsx("p",{style:{color:"#6b7280",marginBottom:"32px"},children:"요소의 깊이감과 계층 구조를 표현하기 위한 그림자 토큰입니다."}),n.jsxs("div",{style:{marginBottom:"48px"},children:[n.jsxs("h3",{style:{fontSize:"18px",fontWeight:600,marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{width:"12px",height:"12px",backgroundColor:"#ffffff",border:"2px solid #d1d5db",borderRadius:"50%"}}),"Light Mode"]}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"24px"},children:Object.entries(p.light).map(([e,i])=>n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:500,marginBottom:"8px"},children:e}),n.jsx("div",{style:{fontSize:"12px",color:"#6b7280",marginBottom:"12px"},children:i}),n.jsx("div",{style:{height:"100px",borderRadius:"12px",backgroundColor:t.deeppurple[600],boxShadow:i,display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",fontWeight:500},children:e})]},e))})]}),n.jsxs("div",{children:[n.jsxs("h3",{style:{fontSize:"18px",fontWeight:600,marginBottom:"16px",display:"flex",alignItems:"center",gap:"8px"},children:[n.jsx("span",{style:{width:"12px",height:"12px",backgroundColor:"#171719",borderRadius:"50%"}}),"Dark Mode"]}),n.jsx("div",{style:{backgroundColor:"#171719",padding:"24px",borderRadius:"12px"},children:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"24px"},children:Object.entries(p.dark).map(([e,i])=>n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:500,marginBottom:"8px",color:"#ffffff"},children:e}),n.jsx("div",{style:{fontSize:"12px",color:"#9ca3af",marginBottom:"12px"},children:i}),n.jsx("div",{style:{height:"100px",borderRadius:"12px",backgroundColor:t.deeppurple[700],boxShadow:i,display:"flex",alignItems:"center",justifyContent:"center",color:"#ffffff",fontWeight:500},children:e})]},e))})})]})]})};var s,a,x;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px'
    }}>Radius Tokens</h2>
      <p style={{
      color: '#6b7280',
      marginBottom: '24px'
    }}>
        일반적으로 사용되는 Radius 토큰 예시입니다.
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        {Object.entries(radius).map(([key, value]) => <div key={key}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px'
        }}>
              <div style={{
            fontWeight: 500
          }}>{key}</div>
              <div style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>{value}</div>
            </div>
            <div style={{
          width: '200px',
          height: '100px',
          backgroundColor: color.deeppurple['100'],
          border: \`2px solid \${color.deeppurple['200']}\`,
          borderRadius: value,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color.deeppurple['700'],
          fontWeight: 500
        }}>
              {key}
            </div>
          </div>)}
      </div>
    </div>
}`,...(x=(a=o.parameters)==null?void 0:a.docs)==null?void 0:x.source}}};var c,f,g;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px'
    }}>Gap Tokens</h2>
      <p style={{
      color: '#6b7280',
      marginBottom: '24px'
    }}>
        요소들 사이의 간격을 일관되게 유지하기 위한 gap 토큰입니다.
      </p>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        {Object.entries(spacing.gap).map(([key, value]) => <div key={key}>
            <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '12px'
        }}>
              <div style={{
            width: '100px',
            fontWeight: 500
          }}>{key}</div>
              <div style={{
            fontSize: '14px',
            color: '#6b7280'
          }}>{value}</div>
            </div>
            <div style={{
          backgroundColor: '#f9fafb',
          padding: '16px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
              <div style={{
            display: 'flex',
            gap: value
          }}>
                {[1, 2, 3].map(num => <div key={num} style={{
              width: '48px',
              height: '48px',
              backgroundColor: color.deeppurple['100'],
              border: \`1px solid \${color.deeppurple['200']}\`,
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: color.deeppurple['700'],
              fontWeight: 500
            }}>
                    {num}
                  </div>)}
              </div>
            </div>
          </div>)}
      </div>
    </div>
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var m,h,y;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px'
  }}>
      <h2 style={{
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px'
    }}>Shadow Tokens</h2>
      <p style={{
      color: '#6b7280',
      marginBottom: '32px'
    }}>
        요소의 깊이감과 계층 구조를 표현하기 위한 그림자 토큰입니다.
      </p>

      {/* Light Mode */}
      <div style={{
      marginBottom: '48px'
    }}>
        <h3 style={{
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          <span style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#ffffff',
          border: '2px solid #d1d5db',
          borderRadius: '50%'
        }}></span>
          Light Mode
        </h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px'
      }}>
          {Object.entries(shadow.light).map(([key, value]) => <div key={key}>
              <div style={{
            fontWeight: 500,
            marginBottom: '8px'
          }}>{key}</div>
              <div style={{
            fontSize: '12px',
            color: '#6b7280',
            marginBottom: '12px'
          }}>
                {value}
              </div>
              <div style={{
            height: '100px',
            borderRadius: '12px',
            backgroundColor: color.deeppurple['600'],
            boxShadow: value,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 500
          }}>
                {key}
              </div>
            </div>)}
        </div>
      </div>

      {/* Dark Mode */}
      <div>
        <h3 style={{
        fontSize: '18px',
        fontWeight: 600,
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
          <span style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#171719',
          borderRadius: '50%'
        }}></span>
          Dark Mode
        </h3>
        <div style={{
        backgroundColor: '#171719',
        padding: '24px',
        borderRadius: '12px'
      }}>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '24px'
        }}>
            {Object.entries(shadow.dark).map(([key, value]) => <div key={key}>
                <div style={{
              fontWeight: 500,
              marginBottom: '8px',
              color: '#ffffff'
            }}>{key}</div>
                <div style={{
              fontSize: '12px',
              color: '#9ca3af',
              marginBottom: '12px'
            }}>
                  {value}
                </div>
                <div style={{
              height: '100px',
              borderRadius: '12px',
              backgroundColor: color.deeppurple['700'],
              boxShadow: value,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 500
            }}>
                  {key}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const W=["Radius","Gap","Shadow"];export{d as Gap,o as Radius,r as Shadow,W as __namedExportsOrder,C as default};
