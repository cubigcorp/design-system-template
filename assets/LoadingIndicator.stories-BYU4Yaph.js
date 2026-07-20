import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as r,p as z}from"./styled-components.browser.esm-DZloA45Z.js";import{c as f}from"./color-BUCiRq0z.js";import"./iframe-Diu4OQ1h.js";import"./preload-helper-eJNa_G2e.js";const D={small:16,medium:20,large:24,"x-large":32},w={small:4,medium:6,large:8,"x-large":10},l=({type:n="spinner",size:t="medium",color:S,className:x})=>{const a=S||f.gray[950];if(n==="dots"){const o=w[t],$=Math.max(4,o/2);return e.jsxs(B,{className:x,$gap:$,children:[e.jsx(y,{$size:o,$color:a,$delay:"0s"}),e.jsx(y,{$size:o,$color:a,$delay:"0.15s"}),e.jsx(y,{$size:o,$color:a,$delay:"0.3s"})]})}const i=D[t],p=Math.max(2,i/8),m=(i-p)/2,g=2*Math.PI*m;return e.jsx(L,{className:x,$size:i,children:e.jsxs(F,{viewBox:`0 0 ${i} ${i}`,children:[e.jsx("circle",{cx:i/2,cy:i/2,r:m,fill:"none",stroke:f.gray[200],strokeWidth:p}),e.jsx(C,{cx:i/2,cy:i/2,r:m,fill:"none",stroke:a,strokeWidth:p,strokeLinecap:"round",strokeDasharray:`${g*.25} ${g*.75}`})]})})},T=z`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,k=z`
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`,L=r.div`
  width: ${({$size:n})=>n}px;
  height: ${({$size:n})=>n}px;
`,F=r.svg`
  width: 100%;
  height: 100%;
  animation: ${T} 0.8s linear infinite;
`,C=r.circle``,B=r.div`
  display: flex;
  align-items: center;
  gap: ${({$gap:n})=>n}px;
`,y=r.div`
  width: ${({$size:n})=>n}px;
  height: ${({$size:n})=>n}px;
  border-radius: 50%;
  background-color: ${({$color:n})=>n};
  animation: ${k} 1s ease-in-out infinite;
  animation-delay: ${({$delay:n})=>n};
`;l.displayName="LoadingIndicator";l.__docgenInfo={description:"",methods:[],displayName:"LoadingIndicator",props:{type:{required:!1,tsType:{name:"union",raw:"'spinner' | 'dots'",elements:[{name:"literal",value:"'spinner'"},{name:"literal",value:"'dots'"}]},description:"",defaultValue:{value:"'spinner'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Feedback/LoadingIndicator",component:l,parameters:{layout:"fullscreen",docs:{description:{component:"로딩 상태를 시각적으로 표시하는 컴포넌트입니다. Spinner와 Dots 2가지 타입, 4가지 사이즈를 지원합니다."}}},tags:["autodocs"]},s={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},row:{display:"flex",alignItems:"center",gap:32,flexWrap:"wrap"},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},d={parameters:{layout:"centered"},args:{type:"spinner",size:"medium"},argTypes:{type:{control:"select",options:["spinner","dots"]},size:{control:"select",options:["small","medium","large","x-large"]},color:{control:"color"}}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:s.page,children:[e.jsxs("div",{style:s.header,children:[e.jsx("h1",{style:s.title,children:"Loading Indicator"}),e.jsxs("p",{style:s.desc,children:["Spinner와 Dots 2가지 타입을 지원하며, 4가지 사이즈로 사용할 수 있습니다.",e.jsx("br",{}),"color prop으로 커스텀 색상을 지정할 수 있습니다."]})]}),e.jsx("p",{style:s.sectionTitle,children:"Types"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:s.row,children:["spinner","dots"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{height:40,display:"flex",alignItems:"center"},children:e.jsx(l,{type:n,size:"medium"})}),e.jsx("span",{style:s.label,children:n})]},n))})}),e.jsx("p",{style:s.sectionTitle,children:"Sizes — Spinner"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:s.row,children:[{size:"small",px:"16px"},{size:"medium",px:"20px"},{size:"large",px:"24px"},{size:"x-large",px:"32px"}].map(({size:n,px:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{height:40,display:"flex",alignItems:"center"},children:e.jsx(l,{type:"spinner",size:n})}),e.jsxs("span",{style:s.label,children:[n," (",t,")"]})]},n))})}),e.jsx("p",{style:s.sectionTitle,children:"Sizes — Dots"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:s.row,children:["small","medium","large","x-large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{height:40,display:"flex",alignItems:"center"},children:e.jsx(l,{type:"dots",size:n})}),e.jsx("span",{style:s.label,children:n})]},n))})}),e.jsx("p",{style:s.sectionTitle,children:"Custom Colors"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:s.row,children:[{color:"#6366F1",label:"Indigo"},{color:"#10B981",label:"Emerald"},{color:"#F43F5E",label:"Rose"},{color:"#F59E0B",label:"Amber"}].map(({color:n,label:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsxs("div",{style:{display:"flex",gap:16,height:40,alignItems:"center"},children:[e.jsx(l,{type:"spinner",color:n}),e.jsx(l,{type:"dots",color:n})]}),e.jsx("span",{style:s.label,children:t})]},t))})}),e.jsx("p",{style:s.sectionTitle,children:"On Dark Background"}),e.jsx("div",{style:{...s.card,backgroundColor:"#171719",borderColor:"#303135"},children:e.jsxs("div",{style:s.row,children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{height:40,display:"flex",alignItems:"center"},children:e.jsx(l,{type:"spinner",color:"#ffffff"})}),e.jsx("span",{style:{...s.label,color:"#7b7e85"},children:"spinner"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[e.jsx("div",{style:{height:40,display:"flex",alignItems:"center"},children:e.jsx(l,{type:"dots",color:"#ffffff"})}),e.jsx("span",{style:{...s.label,color:"#7b7e85"},children:"dots"})]})]})})]})};var v,h,u;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    type: 'spinner',
    size: 'medium'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['spinner', 'dots']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'x-large']
    },
    color: {
      control: 'color'
    }
  }
}`,...(u=(h=d.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var j,b,I;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Loading Indicator</h1>
        <p style={s.desc}>
          Spinner와 Dots 2가지 타입을 지원하며, 4가지 사이즈로 사용할 수 있습니다.
          <br />
          color prop으로 커스텀 색상을 지정할 수 있습니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={s.row}>
          {(['spinner', 'dots'] as const).map(type => <div key={type} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <div style={{
            height: 40,
            display: 'flex',
            alignItems: 'center'
          }}>
                <LoadingIndicator type={type} size='medium' />
              </div>
              <span style={s.label}>{type}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes — Spinner</p>
      <div style={s.card}>
        <div style={s.row}>
          {[{
          size: 'small' as const,
          px: '16px'
        }, {
          size: 'medium' as const,
          px: '20px'
        }, {
          size: 'large' as const,
          px: '24px'
        }, {
          size: 'x-large' as const,
          px: '32px'
        }].map(({
          size,
          px
        }) => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <div style={{
            height: 40,
            display: 'flex',
            alignItems: 'center'
          }}>
                <LoadingIndicator type='spinner' size={size} />
              </div>
              <span style={s.label}>
                {size} ({px})
              </span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes — Dots</p>
      <div style={s.card}>
        <div style={s.row}>
          {(['small', 'medium', 'large', 'x-large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <div style={{
            height: 40,
            display: 'flex',
            alignItems: 'center'
          }}>
                <LoadingIndicator type='dots' size={size} />
              </div>
              <span style={s.label}>{size}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Custom Colors</p>
      <div style={s.card}>
        <div style={s.row}>
          {[{
          color: '#6366F1',
          label: 'Indigo'
        }, {
          color: '#10B981',
          label: 'Emerald'
        }, {
          color: '#F43F5E',
          label: 'Rose'
        }, {
          color: '#F59E0B',
          label: 'Amber'
        }].map(({
          color,
          label
        }) => <div key={label} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
              <div style={{
            display: 'flex',
            gap: 16,
            height: 40,
            alignItems: 'center'
          }}>
                <LoadingIndicator type='spinner' color={color} />
                <LoadingIndicator type='dots' color={color} />
              </div>
              <span style={s.label}>{label}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>On Dark Background</p>
      <div style={{
      ...s.card,
      backgroundColor: '#171719',
      borderColor: '#303135'
    }}>
        <div style={s.row}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <div style={{
            height: 40,
            display: 'flex',
            alignItems: 'center'
          }}>
              <LoadingIndicator type='spinner' color='#ffffff' />
            </div>
            <span style={{
            ...s.label,
            color: '#7b7e85'
          }}>spinner</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12
        }}>
            <div style={{
            height: 40,
            display: 'flex',
            alignItems: 'center'
          }}>
              <LoadingIndicator type='dots' color='#ffffff' />
            </div>
            <span style={{
            ...s.label,
            color: '#7b7e85'
          }}>dots</span>
          </div>
        </div>
      </div>
    </div>
}`,...(I=(b=c.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const _=["Playground","Overview"];export{c as Overview,d as Playground,_ as __namedExportsOrder,R as default};
