import{j as e}from"./jsx-runtime-DTznObQx.js";import{r as m}from"./iframe-CjirL-zO.js";import"./TextButton-D5Adrbv1.js";import"./IconButton-BdsP7Vsa.js";import"./Badge-Ctow1l-W.js";import"./Chip-Bj0HymeE.js";import"./Switch-Cria1NZb.js";import"./Modal-C0K_zPG7.js";import{L as r,a as t,b as i,D as k}from"./Divider-DPsXWRY6.js";import"./RadioButton-DSGlJG0x.js";import"./SegmentItem-CsM-u3nW.js";import{a as n}from"./IconSearch-B_QqHMsf.js";import"./styled-components.browser.esm-CbqwAcww.js";import"./color-BKBaEAUu.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C94_pvKu.js";import"./textColor-C1-D1tBN.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Csj-7xh3.js";import"./brandColor-B7_BrDA7.js";import"./negativeColor-CUiOZlpg.js";import"./cautioniaryColor-C8_Dgx5E.js";import"./typography-BoZiIk0D.js";import"./index-ClmC-Btd.js";import"./shadow-DVq_1U2q.js";import"./layerColor-B93vltC5.js";const ne={title:"Components/LNB",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]}}},b=({selected:o,setSelected:l})=>e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"설정",children:[e.jsx(t,{value:"내 정보",leadingIcon:n,selected:o==="profile",onClick:()=>l("profile")}),e.jsx(t,{value:"플랜 관리",leadingIcon:n,selected:o==="plan",onClick:()=>l("plan")}),e.jsx(t,{value:"요금 계산기",leadingIcon:n,selected:o==="billing",onClick:()=>l("billing")})]}),e.jsx(i,{title:"리소스",children:e.jsx(t,{value:"앱 다운로드",leadingIcon:n,selected:o==="app",onClick:()=>l("app")})})]}),a={render:o=>{const[l,s]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsx(r,{...o,title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:l,setSelected:s})})})}},c={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(r,{children:e.jsxs(i,{title:"Item Variants",children:[e.jsx(t,{value:"Default",leadingIcon:n}),e.jsx(t,{value:"Selected",leadingIcon:n,selected:!0}),e.jsx(t,{value:"Disabled",leadingIcon:n,disabled:!0})]})})})},d={args:{lang:"en"},render:o=>{const[l,s]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(r,{...o,title:"Settings",children:[e.jsxs(i,{title:"Settings",children:[e.jsx(t,{value:"Profile",leadingIcon:n,selected:l==="profile",onClick:()=>s("profile")}),e.jsx(t,{value:"Plan",leadingIcon:n,selected:l==="plan",onClick:()=>s("plan")}),e.jsx(t,{value:"Billing",leadingIcon:n,selected:l==="billing",onClick:()=>s("billing")})]}),e.jsx(i,{title:"Resources",children:e.jsx(t,{value:"App Download",leadingIcon:n,selected:l==="app",onClick:()=>s("app")})})]})})}},p={render:o=>{const[l,s]=m.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(r,{...o,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(k,{thickness:1}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:l,setSelected:s})})})}};var I,u,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const le=["Overview","Item_Variants","WithCustomLang","WithBottomPinned"];export{c as Item_Variants,a as Overview,p as WithBottomPinned,d as WithCustomLang,le as __namedExportsOrder,ne as default};
