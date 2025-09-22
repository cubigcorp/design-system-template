import{j as e}from"./jsx-runtime-B64-dx4A.js";import"./TextButton-Bm2Slhay.js";import"./IconButton-B6DSsw_R.js";import"./Badge-5BX2PlCA.js";import"./Chip-As5wfgdB.js";import"./Switch-DFdbfrTE.js";import"./Modal-CXONjrKH.js";import{D as t}from"./Divider-Lq-dlaJ7.js";import"./iframe-pEbTektC.js";import"./RadioButton-U9cJZAIq.js";import"./styled-components.browser.esm-Kz3DrLzz.js";import"./color-BKBaEAUu.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C94_pvKu.js";import"./textColor-C1-D1tBN.js";import"./spacing-tE1IiUFl.js";import"./Spinner-C_ayjHcw.js";import"./brandColor-B7_BrDA7.js";import"./negativeColor-CUiOZlpg.js";import"./cautioniaryColor-C8_Dgx5E.js";import"./typography-rNEpvl8r.js";import"./IconSearch-BIBy-8zL.js";import"./index-DCudbOlb.js";import"./shadow-DVq_1U2q.js";import"./layerColor-B93vltC5.js";const M={title:"Components/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},n={render:i=>{const a=i.orientation==="vertical",v=a?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return e.jsx("div",{style:v,children:a?e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(t,{...i,style:{margin:"0 12px"}}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),e.jsx(t,{...i}),e.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},r={args:{orientation:"vertical",thickness:4},render:i=>e.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[e.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),e.jsx(t,{...i,style:{margin:"0 12px"}}),e.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>e.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(i=>e.jsx(t,{thickness:i},i))})};var o,d,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const N=["Horizontal","Vertical","ThicknessVariants"];export{n as Horizontal,s as ThicknessVariants,r as Vertical,N as __namedExportsOrder,M as default};
