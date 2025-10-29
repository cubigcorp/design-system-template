import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-ByHYz6GU.js";import"./TextButton-DuTHP8sg.js";import"./IconButton-YAM0mRZy.js";import"./Badge-DlOS1IPu.js";import"./Chip-DAoiXrae.js";import"./Switch-ClpGoEAE.js";import"./Modal-WJ4jbVeL.js";import{L as s,a as t,b as r,D as k}from"./Divider-CT56YDaw.js";import"./RadioButton-BhWVFmL1.js";import"./Checkbox-2F9mwyjP.js";import"./SegmentItem-BoyT1nG0.js";import"./Avatar-Dlz2otOG.js";import"./TabItem-Dxsmmivm.js";import"./ChipTabs-DnE_YKeb.js";import"./Popover-Wpk6WsSq.js";import"./StepIndicator-BagOiLDv.js";import"./Breadcrumbs-Era--ZvF.js";import"./BreadcrumbItem-x9VPACc7.js";import"./Pagination-VTwluxyT.js";import{I as n}from"./IconSearch-BQBSiVi4.js";import"./IconCheck-CKtc9n1_.js";import"./textColor-BDFC2diz.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CdzIVEo2.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./index-D3uUm2kb.js";import"./index-D8wc5ccb.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-C-XfAsTF.js";import"./icon_more_outline_16-Dw8kUD8Z.js";import"./icon_chevron-right_outline_16-Dlh2Yozb.js";const ge={title:"Components/LNB",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]}}},b=({selected:i,setSelected:o})=>e.jsxs(e.Fragment,{children:[e.jsxs(r,{title:"설정",children:[e.jsx(t,{value:"내 정보",leadingIcon:n,selected:i==="profile",onClick:()=>o("profile")}),e.jsx(t,{value:"플랜 관리",leadingIcon:n,selected:i==="plan",onClick:()=>o("plan")}),e.jsx(t,{value:"요금 계산기",leadingIcon:n,selected:i==="billing",onClick:()=>o("billing")})]}),e.jsx(r,{title:"리소스",children:e.jsx(t,{value:"앱 다운로드",leadingIcon:n,selected:i==="app",onClick:()=>o("app")})})]}),a={render:i=>{const[o,l]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsx(s,{...i,title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:o,setSelected:l})})})}},c={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(s,{children:e.jsxs(r,{title:"Item Variants",children:[e.jsx(t,{value:"Default",leadingIcon:n}),e.jsx(t,{value:"Selected",leadingIcon:n,selected:!0}),e.jsx(t,{value:"Disabled",leadingIcon:n,disabled:!0})]})})})},d={args:{lang:"en"},render:i=>{const[o,l]=m.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(s,{...i,title:"Settings",children:[e.jsxs(r,{title:"Settings",children:[e.jsx(t,{value:"Profile",leadingIcon:n,selected:o==="profile",onClick:()=>l("profile")}),e.jsx(t,{value:"Plan",leadingIcon:n,selected:o==="plan",onClick:()=>l("plan")}),e.jsx(t,{value:"Billing",leadingIcon:n,selected:o==="billing",onClick:()=>l("billing")})]}),e.jsx(r,{title:"Resources",children:e.jsx(t,{value:"App Download",leadingIcon:n,selected:o==="app",onClick:()=>l("app")})})]})})}},p={render:i=>{const[o,l]=m.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(s,{...i,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{value:"문의하기",leadingIcon:n}),e.jsx(k,{thickness:1}),e.jsx(t,{value:"로그아웃",leadingIcon:n})]}),children:e.jsx(b,{selected:o,setSelected:l})})})}};var I,u,g;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const ve=["Overview","Item_Variants","WithCustomLang","WithBottomPinned"];export{c as Item_Variants,a as Overview,p as WithBottomPinned,d as WithCustomLang,ve as __namedExportsOrder,ge as default};
