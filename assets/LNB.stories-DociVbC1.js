import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-B_xlwamp.js";import{L as o}from"./LNB-BmQJct0e.js";import{L as g}from"./ItemGroup-CnobZOzm.js";import{L as i}from"./Item-DUA2Jk_H.js";import{S as d}from"./icon_person_outline_20-BZOeWZ4P.js";import{S as p}from"./icon_setting_outline_20-DyJ1-Y1D.js";import{D as x}from"./Divider-p_0KHECr.js";import{L as m}from"./ItemProfile-C1zERQA4.js";import{S as y}from"./icon_chevron-right_outline_20-UBuQjhPC.js";import{S as L,a as O}from"./icon_download_outline_20-DrK5-eXx.js";import{a as b,S as N}from"./icon_wallet_outline_20-DLr0q--k.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-SETmF8Vw.js";import"./spacing-tE1IiUFl.js";import"./textColor-G8dwupNW.js";import"./color-m2U5piog.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./radius-DaoU83SK.js";import"./Avatar-D3zDDXDy.js";import"./borderColor-CzkI5wcR.js";const ne={title:"Components/Navigation/LNB",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"Left Navigation Bar. 좌측 사이드바 네비게이션으로, ItemGroup, Item, ItemProfile 등으로 구성됩니다. iconOnly 모드를 지원합니다."}}},tags:["autodocs"]},s={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16}},h=({selected:t,setSelected:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(g,{title:"설정",children:[e.jsx(i,{value:"내 정보",leadingIcon:d,selected:t==="profile",onClick:()=>n("profile")}),e.jsx(i,{value:"플랜 관리",leadingIcon:b,selected:t==="plan",onClick:()=>n("plan")}),e.jsx(i,{value:"요금 계산기",leadingIcon:N,selected:t==="billing",onClick:()=>n("billing")})]}),e.jsx(g,{title:"리소스",children:e.jsx(i,{value:"앱 다운로드",leadingIcon:O,selected:t==="app",onClick:()=>n("app")})})]}),a={parameters:{layout:"centered"},render:t=>{const[n,l]=r.useState("profile");return e.jsx("div",{style:{width:t.iconOnly?"auto":280,height:640},children:e.jsx(o,{...t,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"문의하기",leadingIcon:p}),e.jsx(x,{thickness:1}),e.jsx(m,{name:"사용자",avatarType:"initial",trailingIcon:y})]}),children:e.jsx(h,{selected:n,setSelected:l})})})},argTypes:{iconOnly:{control:"boolean"},lang:{control:"select",options:["ko","en"]}}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:s.page,children:[e.jsxs("div",{style:s.header,children:[e.jsx("h1",{style:s.title,children:"LNB (Left Navigation Bar)"}),e.jsx("p",{style:s.desc,children:"좌측 사이드바 네비게이션입니다. ItemGroup, Item, ItemProfile로 구성되며, iconOnly 모드와 접기 기능을 지원합니다."})]}),e.jsx("p",{style:s.sectionTitle,children:"Default vs Icon Only"}),e.jsx("div",{style:s.card,children:e.jsxs("div",{style:{display:"flex",gap:24,height:480},children:[e.jsx(D,{}),e.jsx(k,{})]})}),e.jsx("p",{style:s.sectionTitle,children:"Item States"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:{width:280},children:e.jsx(o,{children:e.jsxs(g,{title:"Item States",children:[e.jsx(i,{value:"Default",leadingIcon:d}),e.jsx(i,{value:"Selected",leadingIcon:d,selected:!0}),e.jsx(i,{value:"Disabled",leadingIcon:d,disabled:!0})]})})})}),e.jsx("p",{style:s.sectionTitle,children:"Collapsible"}),e.jsx("div",{style:s.card,children:e.jsx(T,{})})]})},D=()=>{const[t,n]=r.useState("profile");return e.jsxs("div",{style:{width:280,flexShrink:0},children:[e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace",display:"block",marginBottom:8},children:"default"}),e.jsx(o,{style:{height:440},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"문의하기",leadingIcon:p}),e.jsx(x,{thickness:1}),e.jsx(m,{name:"사용자",avatarType:"initial",trailingIcon:y})]}),children:e.jsx(h,{selected:t,setSelected:n})})]})},k=()=>{const[t,n]=r.useState("profile");return e.jsxs("div",{children:[e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace",display:"block",marginBottom:8},children:"iconOnly"}),e.jsx(o,{iconOnly:!0,style:{height:440},bottom:e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"문의하기",leadingIcon:p}),e.jsx(m,{name:"사용자",avatarType:"initial"})]}),children:e.jsx(h,{selected:t,setSelected:n})})]})},w=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{width:"24",height:"24",rx:"4",fill:"#6366F1"}),e.jsx("path",{d:"M8 8h8v8H8z",fill:"white"})]}),e.jsx("span",{style:{fontWeight:600,fontSize:16},children:"Logo"})]}),T=()=>{const[t,n]=r.useState("profile"),[l,B]=r.useState(!1);return e.jsx("div",{style:{width:l?60:280,height:480,transition:"width 0.2s"},children:e.jsx(o,{iconOnly:l,style:{height:"100%"},title:e.jsxs("div",{style:{display:"flex",justifyContent:l?"center":"space-between",alignItems:"center",padding:"8px 0"},children:[!l&&e.jsx(w,{}),e.jsx("button",{onClick:()=>B(!l),style:{background:"none",border:"none",cursor:"pointer",padding:4,display:"flex"},children:e.jsx(L,{style:{width:20,height:20,flexShrink:0}})})]}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(i,{value:"문의하기",leadingIcon:p}),e.jsx(x,{thickness:1}),e.jsx(m,{name:"사용자",avatarType:"initial",trailingIcon:y})]}),children:e.jsx(h,{selected:t,setSelected:n})})})};var u,v,j;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => {
    const [selected, setSelected] = useState('profile');
    return <div style={{
      width: args.iconOnly ? 'auto' : 280,
      height: 640
    }}>
        <LNB {...args} style={{
        height: '100%'
      }} title='설정' bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='사용자' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
            </>}>
          <NavItems selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  },
  argTypes: {
    iconOnly: {
      control: 'boolean'
    },
    lang: {
      control: 'select',
      options: ['ko', 'en']
    }
  }
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var f,I,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>LNB (Left Navigation Bar)</h1>
        <p style={s.desc}>
          좌측 사이드바 네비게이션입니다. ItemGroup, Item, ItemProfile로 구성되며, iconOnly 모드와
          접기 기능을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Default vs Icon Only</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        height: 480
      }}>
          <DefaultLNBDemo />
          <IconOnlyLNBDemo />
        </div>
      </div>

      <p style={s.sectionTitle}>Item States</p>
      <div style={s.card}>
        <div style={{
        width: 280
      }}>
          <LNB>
            <LNBItemGroup title='Item States'>
              <LNBItem value='Default' leadingIcon={IconPersonOutline20} />
              <LNBItem value='Selected' leadingIcon={IconPersonOutline20} selected />
              <LNBItem value='Disabled' leadingIcon={IconPersonOutline20} disabled />
            </LNBItemGroup>
          </LNB>
        </div>
      </div>

      <p style={s.sectionTitle}>Collapsible</p>
      <div style={s.card}>
        <CollapsibleDemo />
      </div>
    </div>
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const ie=["Playground","Overview"];export{c as Overview,a as Playground,ie as __namedExportsOrder,ne as default};
