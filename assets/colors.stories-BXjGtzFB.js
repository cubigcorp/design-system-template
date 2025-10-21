import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as e}from"./color-CiwAFuFb.js";const m=({name:n,value:a,textColor:l="#ffffff"})=>o.jsxs("div",{style:{backgroundColor:a,color:l,padding:"16px",borderRadius:"8px",border:"1px solid #e5e7eb",minHeight:"80px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[o.jsx("div",{style:{fontWeight:600,fontSize:"14px"},children:n}),o.jsx("div",{style:{fontSize:"12px",opacity:.9},children:a})]}),r=({colorName:n,colors:a})=>o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px"},children:n}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"12px"},children:Object.entries(a).map(([l,j])=>{const S=!["50","100","200","25"].includes(l);return o.jsx(m,{name:`${n}-${l}`,value:j,textColor:S?"#ffffff":"#000000"},l)})})]}),v={title:"Foundation/Colors",parameters:{layout:"padded",docs:{description:{component:"디자인 시스템의 컬러 팔레트입니다. 모든 컬러는 color 토큰에서 관리됩니다."}}}},c={render:()=>o.jsxs("div",{style:{padding:"24px",backgroundColor:"#f9fafb"},children:[o.jsx("h2",{style:{fontSize:"24px",fontWeight:"bold",marginBottom:"24px"},children:"Color Palette"}),o.jsxs("div",{style:{marginBottom:"32px"},children:[o.jsx("h3",{style:{fontSize:"18px",fontWeight:"bold",marginBottom:"16px"},children:"Common"}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(140px, 1fr))",gap:"12px"},children:[o.jsx(m,{name:"common-0",value:e.common[0],textColor:"#ffffff"}),o.jsx(m,{name:"common-100",value:e.common[100],textColor:"#000000"}),o.jsx(m,{name:"common-dimmer",value:e.common.dimmer,textColor:"#000000"})]})]}),o.jsx(r,{colorName:"gray",colors:e.gray}),o.jsx(r,{colorName:"neutral",colors:e.neutral}),o.jsx(r,{colorName:"red",colors:e.red}),o.jsx(r,{colorName:"orange",colors:e.orange}),o.jsx(r,{colorName:"yellow",colors:e.yellow}),o.jsx(r,{colorName:"lime",colors:e.lime}),o.jsx(r,{colorName:"green",colors:e.green}),o.jsx(r,{colorName:"emerald",colors:e.emerald}),o.jsx(r,{colorName:"teal",colors:e.teal}),o.jsx(r,{colorName:"cyan",colors:e.cyan}),o.jsx(r,{colorName:"blue",colors:e.blue}),o.jsx(r,{colorName:"purple",colors:e.purple}),o.jsx(r,{colorName:"deeppurple",colors:e.deeppurple}),o.jsx(r,{colorName:"pink",colors:e.pink})]})},s={render:()=>o.jsx("div",{style:{padding:"24px"},children:o.jsx(r,{colorName:"gray",colors:e.gray})})},t={render:()=>o.jsx("div",{style:{padding:"24px"},children:o.jsx(r,{colorName:"deeppurple",colors:e.deeppurple})})};var d,i,p;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "24px",
    backgroundColor: "#f9fafb"
  }}>
      <h2 style={{
      fontSize: "24px",
      fontWeight: "bold",
      marginBottom: "24px"
    }}>
        Color Palette
      </h2>

      {/* Common */}
      <div style={{
      marginBottom: "32px"
    }}>
        <h3 style={{
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "16px"
      }}>
          Common
        </h3>
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: "12px"
      }}>
          <ColorSwatch name="common-0" value={color.common["0"]} textColor="#ffffff" />
          <ColorSwatch name="common-100" value={color.common["100"]} textColor="#000000" />
          <ColorSwatch name="common-dimmer" value={color.common.dimmer} textColor="#000000" />
        </div>
      </div>

      {/* Gray */}
      <ColorScale colorName="gray" colors={color.gray} />

      {/* Neutral */}
      <ColorScale colorName="neutral" colors={color.neutral} />

      {/* Red */}
      <ColorScale colorName="red" colors={color.red} />

      {/* Orange */}
      <ColorScale colorName="orange" colors={color.orange} />

      {/* Yellow */}
      <ColorScale colorName="yellow" colors={color.yellow} />

      {/* Lime */}
      <ColorScale colorName="lime" colors={color.lime} />

      {/* Green */}
      <ColorScale colorName="green" colors={color.green} />

      {/* Emerald */}
      <ColorScale colorName="emerald" colors={color.emerald} />

      {/* Teal */}
      <ColorScale colorName="teal" colors={color.teal} />

      {/* Cyan */}
      <ColorScale colorName="cyan" colors={color.cyan} />

      {/* Blue */}
      <ColorScale colorName="blue" colors={color.blue} />

      {/* Purple */}
      <ColorScale colorName="purple" colors={color.purple} />

      {/* Deep Purple */}
      <ColorScale colorName="deeppurple" colors={color.deeppurple} />

      {/* Pink */}
      <ColorScale colorName="pink" colors={color.pink} />
    </div>
}`,...(p=(i=c.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var x,u,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "24px"
  }}>
      <ColorScale colorName="gray" colors={color.gray} />
    </div>
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,C,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "24px"
  }}>
      <ColorScale colorName="deeppurple" colors={color.deeppurple} />
    </div>
}`,...(y=(C=t.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const b=["AllColors","GrayScale","BrandColors"];export{c as AllColors,t as BrandColors,s as GrayScale,b as __namedExportsOrder,v as default};
