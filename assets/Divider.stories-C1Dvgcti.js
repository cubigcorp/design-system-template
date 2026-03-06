import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as i}from"./Divider-BABuJ7ma.js";import"./styled-components.browser.esm-o0t8qbnT.js";import"./iframe-D0ynm1mK.js";import"./preload-helper-eJNa_G2e.js";import"./color-CiwAFuFb.js";const S={title:"Components/Divider",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},t={render:n=>{const a=n.orientation==="vertical",v=a?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return e.jsx("div",{style:v,children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(i,{...n,style:{margin:"0 12px"}}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),e.jsx(i,{...n}),e.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},r={args:{orientation:"vertical",thickness:4},render:n=>e.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(i,{...n,style:{margin:"0 12px"}}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>e.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(n=>e.jsx(i,{thickness:n},n))})};var d,l,o;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const isVertical = args.orientation === 'vertical';
    const wrapperStyle: React.CSSProperties = isVertical ? {
      height: 160,
      padding: 16,
      display: 'flex',
      alignItems: 'stretch'
    } : {
      width: 360,
      padding: 16
    };
    return <div style={wrapperStyle}>
        {isVertical ? <>
            <div style={{
          flex: 1,
          paddingRight: 12
        }}>왼쪽</div>
            <Divider {...args} style={{
          margin: '0 12px'
        }} />
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
  }
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var c,p,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    thickness: 4
  },
  render: args => <div style={{
    height: 160,
    padding: 16,
    display: 'flex',
    alignItems: 'stretch'
  }}>
      <div style={{
      flex: 1,
      paddingRight: 12
    }}>왼쪽</div>
      <Divider {...args} style={{
      margin: '0 12px'
    }} />
      <div style={{
      flex: 1,
      paddingLeft: 12
    }}>오른쪽</div>
    </div>
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,h,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {[1, 2, 4, 6, 8, 12].map(t => <Divider key={t} thickness={t as any} />)}
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const V=["Horizontal","Vertical","ThicknessVariants"];export{t as Horizontal,s as ThicknessVariants,r as Vertical,V as __namedExportsOrder,S as default};
