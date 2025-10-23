import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-B8YmHH7w.js";import"./TextButton-DBugHD5X.js";import"./IconButton-BEeupxaZ.js";import"./Badge-CzrOk9M-.js";import"./Chip-CmsCyVs7.js";import"./Switch-DGmR6jQI.js";import"./Modal-CEjbol9Y.js";import{L as r,a as t,b as s,D as k}from"./Divider-BPKeFW1I.js";import"./RadioButton-C6hXeq4q.js";import"./Checkbox-DVAASsMU.js";import"./SegmentItem-CLYFcL3S.js";import"./Avatar-B33Zx3SM.js";import"./TabItem-Aj7SGmuP.js";import"./ChipTabs-CRRQ5PeF.js";import"./Popover-DhxciXw1.js";import"./StepIndicator-ChM6WA3f.js";import{I as n}from"./IconSearch-BztCI8_-.js";import"./IconCheck-CKtc9n1_.js";import"./textColor-BcwcM5V4.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-MnQ10Opf.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./index-Bl_ai6IK.js";import"./index-BJ9fOAcL.js";import"./shadow-DVq_1U2q.js";const ce={title:"Components/LNB",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]}}},b=({selected:l,setSelected:o})=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{title:"설정",children:[e.jsx(t,{value:"내 정보",leadingIcon:n,selected:l==="profile",onClick:()=>o("profile")}),e.jsx(t,{value:"플랜 관리",leadingIcon:n,selected:l==="plan",onClick:()=>o("plan")}),e.jsx(t,{value:"요금 계산기",leadingIcon:n,selected:l==="billing",onClick:()=>o("billing")})]}),e.jsx(s,{title:"리소스",children:e.jsx(t,{value:"앱 다운로드",leadingIcon:n,selected:l==="app",onClick:()=>o("app")})})]}),a={render:l=>{const[o,i]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsx(r,{...l,title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:o,setSelected:i})})})}},c={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(r,{children:e.jsxs(s,{title:"Item Variants",children:[e.jsx(t,{value:"Default",leadingIcon:n}),e.jsx(t,{value:"Selected",leadingIcon:n,selected:!0}),e.jsx(t,{value:"Disabled",leadingIcon:n,disabled:!0})]})})})},d={args:{lang:"en"},render:l=>{const[o,i]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(r,{...l,title:"Settings",children:[e.jsxs(s,{title:"Settings",children:[e.jsx(t,{value:"Profile",leadingIcon:n,selected:o==="profile",onClick:()=>i("profile")}),e.jsx(t,{value:"Plan",leadingIcon:n,selected:o==="plan",onClick:()=>i("plan")}),e.jsx(t,{value:"Billing",leadingIcon:n,selected:o==="billing",onClick:()=>i("billing")})]}),e.jsx(s,{title:"Resources",children:e.jsx(t,{value:"App Download",leadingIcon:n,selected:o==="app",onClick:()=>i("app")})})]})})}},p={render:l=>{const[o,i]=m.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(r,{...l,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(k,{thickness:1}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:o,setSelected:i})})})}};var I,u,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const de=["Overview","Item_Variants","WithCustomLang","WithBottomPinned"];export{c as Item_Variants,a as Overview,p as WithBottomPinned,d as WithCustomLang,de as __namedExportsOrder,ce as default};
