import{j as i}from"./jsx-runtime-DTznObQx.js";import"./TextButton-D5Adrbv1.js";import"./IconButton-BdsP7Vsa.js";import"./Badge-Ctow1l-W.js";import"./Chip-Bj0HymeE.js";import"./Switch-Cria1NZb.js";import"./Modal-C0K_zPG7.js";import{D as t}from"./Divider-DPsXWRY6.js";import"./iframe-CjirL-zO.js";import"./RadioButton-DSGlJG0x.js";import"./SegmentItem-CsM-u3nW.js";import"./styled-components.browser.esm-CbqwAcww.js";import"./color-BKBaEAUu.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C94_pvKu.js";import"./textColor-C1-D1tBN.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Csj-7xh3.js";import"./brandColor-B7_BrDA7.js";import"./negativeColor-CUiOZlpg.js";import"./cautioniaryColor-C8_Dgx5E.js";import"./typography-BoZiIk0D.js";import"./IconSearch-B_QqHMsf.js";import"./index-ClmC-Btd.js";import"./shadow-DVq_1U2q.js";import"./layerColor-B93vltC5.js";const N={title:"Components/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},n={render:e=>{const a=e.orientation==="vertical",v=a?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:a?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(t,{...e,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(t,{...e}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},r={args:{orientation:"vertical",thickness:4},render:e=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(t,{...e,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(e=>i.jsx(t,{thickness:e},e))})};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Q=["Horizontal","Vertical","ThicknessVariants"];export{n as Horizontal,s as ThicknessVariants,r as Vertical,Q as __namedExportsOrder,N as default};
