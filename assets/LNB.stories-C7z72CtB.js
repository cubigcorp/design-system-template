import{j as e}from"./jsx-runtime-CpEw07D7.js";import{r as m}from"./iframe-_QIr2-1u.js";import"./TextButton-NZ7TWBqT.js";import"./IconButton-BQVU7N3Y.js";import"./Badge-Bw6Z4jYG.js";import"./Chip-DzBkeRHZ.js";import"./Switch-Bag0n9Rw.js";import{L as i,d as n,e as r}from"./Divider-CB-smyHe.js";import{a as t}from"./IconSearch-BpPNvS-z.js";import"./styled-components.browser.esm-oRgFu6Fw.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-BrY1a26q.js";import"./textColor-DVi7834n.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CQPvADOi.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-5QY5Grkh.js";import"./shadow-DVq_1U2q.js";const X={title:"Components/LNB",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]}}},C=({selected:o,setSelected:l})=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{title:"설정",children:[e.jsx(n,{value:"내 정보",leadingIcon:t,selected:o==="profile",onClick:()=>l("profile")}),e.jsx(n,{value:"플랜 관리",leadingIcon:t,selected:o==="plan",onClick:()=>l("plan")}),e.jsx(n,{value:"요금 계산기",leadingIcon:t,selected:o==="billing",onClick:()=>l("billing")})]}),e.jsx(r,{title:"리소스",children:e.jsx(n,{value:"앱 다운로드",leadingIcon:t,selected:o==="app",onClick:()=>l("app")})})]}),a={render:o=>{const[l,s]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsx(i,{...o,bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:t}),e.jsx(n,{value:"로그아웃",leadingIcon:t})]}),children:e.jsx(C,{selected:l,setSelected:s})})})}},c={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(i,{children:e.jsxs(r,{title:"Item Variants",children:[e.jsx(n,{value:"Default",leadingIcon:t}),e.jsx(n,{value:"Selected",leadingIcon:t,selected:!0}),e.jsx(n,{value:"Disabled",leadingIcon:t,disabled:!0})]})})})},d={args:{lang:"en"},render:o=>{const[l,s]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(i,{...o,children:[e.jsxs(r,{title:"Settings",children:[e.jsx(n,{value:"Profile",leadingIcon:t,selected:l==="profile",onClick:()=>s("profile")}),e.jsx(n,{value:"Plan",leadingIcon:t,selected:l==="plan",onClick:()=>s("plan")}),e.jsx(n,{value:"Billing",leadingIcon:t,selected:l==="billing",onClick:()=>s("billing")})]}),e.jsx(r,{title:"Resources",children:e.jsx(n,{value:"App Download",leadingIcon:t,selected:l==="app",onClick:()=>s("app")})})]})})}},p={render:o=>{const[l,s]=m.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(i,{...o,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:t}),e.jsx(n,{value:"로그아웃",leadingIcon:t})]}),children:e.jsx(C,{selected:l,setSelected:s})})})}};var I,u,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      width: 280
    }}>
        <LNB {...args} bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconInfo} />
              <LNBItem value="로그아웃" leadingIcon={IconInfo} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,x,h;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: 320
    }}>
        <LNB>
          <LNBItemGroup title="Item Variants">
            <LNBItem value="Default" leadingIcon={IconInfo} />
            <LNBItem value="Selected" leadingIcon={IconInfo} selected />
            <LNBItem value="Disabled" leadingIcon={IconInfo} disabled />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(h=(x=c.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,B;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    lang: "en"
  },
  render: args => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      width: 280
    }}>
        <LNB {...args}>
          <LNBItemGroup title="Settings">
            <LNBItem value="Profile" leadingIcon={IconInfo} selected={selected === "profile"} onClick={() => setSelected("profile")} />
            <LNBItem value="Plan" leadingIcon={IconInfo} selected={selected === "plan"} onClick={() => setSelected("plan")} />
            <LNBItem value="Billing" leadingIcon={IconInfo} selected={selected === "billing"} onClick={() => setSelected("billing")} />
          </LNBItemGroup>
          <LNBItemGroup title="Resources">
            <LNBItem value="App Download" leadingIcon={IconInfo} selected={selected === "app"} onClick={() => setSelected("app")} />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(B=(f=d.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var L,N,S;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      width: 280,
      height: 640
    }}>
        <LNB {...args} style={{
        height: "100%"
      }} bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconInfo} />
              <LNBItem value="로그아웃" leadingIcon={IconInfo} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const Y=["Overview","Item_Variants","WithCustomLang","WithBottomPinned"];export{c as Item_Variants,a as Overview,p as WithBottomPinned,d as WithCustomLang,Y as __namedExportsOrder,X as default};
