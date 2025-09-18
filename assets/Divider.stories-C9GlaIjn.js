import{j as e}from"./jsx-runtime-DzlwJRQ7.js";import"./TextButton-DtXa7NHd.js";import"./IconButton-DApFIBKP.js";import"./Badge-B8geaDGn.js";import"./Chip-C1HcK5zC.js";import"./Switch-CmN3gPTI.js";import{b as t}from"./Divider-BYVRl9dC.js";import"./iframe-Cqiu9sr4.js";import"./RadioButton-CGUOG5a_.js";import"./styled-components.browser.esm-DpwGGuR7.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-BrY1a26q.js";import"./textColor-DVi7834n.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CEljfMf3.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-5QY5Grkh.js";import"./IconSearch-TITLYLxa.js";import"./shadow-DVq_1U2q.js";const G={title:"Components/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},n={render:i=>{const a=i.orientation==="vertical",v=a?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return e.jsx("div",{style:v,children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(t,{...i,style:{margin:"0 12px"}}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),e.jsx(t,{...i}),e.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},r={args:{orientation:"vertical",thickness:4},render:i=>e.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(t,{...i,style:{margin:"0 12px"}}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>e.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(i=>e.jsx(t,{thickness:i},i))})};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const isVertical = args.orientation === "vertical";
    const wrapperStyle: React.CSSProperties = isVertical ? {
      height: 160,
      padding: 16,
      display: "flex",
      alignItems: "stretch"
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
          margin: "0 12px"
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
}`,...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    thickness: 4
  },
  render: args => <div style={{
    height: 160,
    padding: 16,
    display: "flex",
    alignItems: "stretch"
  }}>
      <div style={{
      flex: 1,
      paddingRight: 12
    }}>왼쪽</div>
      <Divider {...args} style={{
      margin: "0 12px"
    }} />
      <div style={{
      flex: 1,
      paddingLeft: 12
    }}>오른쪽</div>
    </div>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      {[1, 2, 4, 6, 8, 12].map(t => <Divider key={t} thickness={t as any} />)}
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const J=["Horizontal","Vertical","ThicknessVariants"];export{n as Horizontal,s as ThicknessVariants,r as Vertical,J as __namedExportsOrder,G as default};
