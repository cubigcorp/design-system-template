import{j as i}from"./jsx-runtime-kVLaTG6n.js";import"./TextButton-CJC_fwGn.js";import"./IconButton-Dgl4chQk.js";import"./Badge-CQNw2vD5.js";import"./Chip-DvkzECXP.js";import"./Switch-lVFbAaZ5.js";import"./Modal-BbqOTise.js";import{D as t}from"./Divider-_RBQw8vR.js";import"./iframe-WoutpCs3.js";import"./RadioButton-D1Pjaxwf.js";import"./SegmentItem-CYGtKZtv.js";import"./Avatar-DuBvm0ej.js";import"./TabItem-C69zrZq3.js";import"./ChipTabs-CSpQ7WC0.js";import"./styled-components.browser.esm-B_MdCVuy.js";import"./color-DqDZjiGS.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-CQKT7y1f.js";import"./textColor-SSyLf7rE.js";import"./spacing-tE1IiUFl.js";import"./Spinner-C2VL9-uh.js";import"./brandColor-BLjLgDA0.js";import"./negativeColor-MzvdT1cG.js";import"./cautioniaryColor-yy6imxKa.js";import"./typography-BccJP5aO.js";import"./IconSearch-dwjt6etJ.js";import"./index-96cu1lYu.js";import"./shadow-DVq_1U2q.js";import"./layerColor-D_HAcI5O.js";const W={title:"Components/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},n={render:e=>{const a=e.orientation==="vertical",v=a?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:a?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(t,{...e,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(t,{...e}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},r={args:{orientation:"vertical",thickness:4},render:e=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(t,{...e,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(e=>i.jsx(t,{thickness:e},e))})};var o,d,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const X=["Horizontal","Vertical","ThicknessVariants"];export{n as Horizontal,s as ThicknessVariants,r as Vertical,X as __namedExportsOrder,W as default};
