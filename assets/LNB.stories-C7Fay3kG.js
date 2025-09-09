import{j as e}from"./jsx-runtime-DoWS3ZpK.js";import{r as m}from"./iframe-Dl3k5ZL5.js";import"./TextButton-C1P5-U5s.js";import"./IconButton-CKgY1Ly2.js";import"./Badge-DAmxJ7an.js";import"./Chip-BHbOC1pW.js";import"./Switch-CwixZULY.js";import{L as r,d as t,e as i,b as k}from"./Divider-BncgetSe.js";import{a as n}from"./IconSearch-CIWN5eZZ.js";import"./styled-components.browser.esm-Bl6iNF_h.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-BrY1a26q.js";import"./textColor-DVi7834n.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CIECUyRm.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";import"./cautioniaryColor-BGrlH-fu.js";import"./typography-5QY5Grkh.js";import"./shadow-DVq_1U2q.js";const Y={title:"Components/LNB",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]}}},b=({selected:s,setSelected:l})=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"설정",children:[e.jsx(t,{value:"내 정보",leadingIcon:n,selected:s==="profile",onClick:()=>l("profile")}),e.jsx(t,{value:"플랜 관리",leadingIcon:n,selected:s==="plan",onClick:()=>l("plan")}),e.jsx(t,{value:"요금 계산기",leadingIcon:n,selected:s==="billing",onClick:()=>l("billing")})]}),e.jsx(i,{title:"리소스",children:e.jsx(t,{value:"앱 다운로드",leadingIcon:n,selected:s==="app",onClick:()=>l("app")})})]}),a={render:s=>{const[l,o]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsx(r,{...s,title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:l,setSelected:o})})})}},c={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(r,{children:e.jsxs(i,{title:"Item Variants",children:[e.jsx(t,{value:"Default",leadingIcon:n}),e.jsx(t,{value:"Selected",leadingIcon:n,selected:!0}),e.jsx(t,{value:"Disabled",leadingIcon:n,disabled:!0})]})})})},d={args:{lang:"en"},render:s=>{const[l,o]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(r,{...s,title:"Settings",children:[e.jsxs(i,{title:"Settings",children:[e.jsx(t,{value:"Profile",leadingIcon:n,selected:l==="profile",onClick:()=>o("profile")}),e.jsx(t,{value:"Plan",leadingIcon:n,selected:l==="plan",onClick:()=>o("plan")}),e.jsx(t,{value:"Billing",leadingIcon:n,selected:l==="billing",onClick:()=>o("billing")})]}),e.jsx(i,{title:"Resources",children:e.jsx(t,{value:"App Download",leadingIcon:n,selected:l==="app",onClick:()=>o("app")})})]})})}},p={render:s=>{const[l,o]=m.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(r,{...s,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(k,{thickness:1}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:l,setSelected:o})})})}};var I,u,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      width: 280
    }}>
        <LNB {...args} title="설정" bottom={<>
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
        <LNB {...args} title="Settings">
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
      }} title="설정" bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconInfo} />
              <Divider thickness={1} />
              <LNBItem value="로그아웃" leadingIcon={IconInfo} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const Z=["Overview","Item_Variants","WithCustomLang","WithBottomPinned"];export{c as Item_Variants,a as Overview,p as WithBottomPinned,d as WithCustomLang,Z as __namedExportsOrder,Y as default};
