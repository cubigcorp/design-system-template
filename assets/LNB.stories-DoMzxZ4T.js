import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-FnhkKGqq.js";import"./TextButton-CvEAVhcI.js";import"./IconButton-CdgMVfE0.js";import"./Badge-Bn_fmRgc.js";import"./Chip-BUl9tJ44.js";import"./Switch-me2VvasM.js";import"./Modal-BKkbwdw2.js";import{L as i,a as n,D as j,b as c,c as o}from"./Divider-DvibnXYZ.js";import"./RadioButton-CI7cRgyl.js";import"./Checkbox-BvUv7G1_.js";import"./SegmentItem-BMmyZ7Ne.js";import"./Avatar-DHmTNtdl.js";import"./TabItem-Dyk-8-eA.js";import"./ChipTabs-DJGdF7kS.js";import"./Popover-CXR4qvwx.js";import"./StepIndicator-BMTK38RQ.js";import"./Breadcrumbs-lDHoMgTK.js";import"./BreadcrumbItem-C5lTh4_1.js";import"./Pagination-DnsTf0OA.js";import"./Callout-nuo2KaUI.js";import{S as N}from"./icon_chevron-right_outline_20-B4T8FMv0.js";import{S as L,a as H}from"./icon_logout_outline_20-DOYr7cDe.js";import{a as p,S}from"./icon_wallet_outline_20-CteLYJuN.js";import{S as r}from"./icon_person_outline_20-D4amOlwT.js";import{S as d}from"./icon_setting_outline_20-BKRwp5FW.js";import"./textColor-CKN8Eu8b.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-PpAqZlHY.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-DeZn0u6D.js";import"./index-BQ5TM5lW.js";import"./shadow-DVq_1U2q.js";import"./icon_more_outline_16-CaFPg3xf.js";import"./icon_chevron-right_outline_16-tl0Vdyaa.js";import"./icon_warning_fill_20-DIOGsS5g.js";const Ee={title:"Components/LNB",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]},iconOnly:{control:{type:"boolean"}}}},B=({selected:l,setSelected:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{title:"설정",children:[e.jsx(n,{value:"내 정보",leadingIcon:r,selected:l==="profile",onClick:()=>t("profile")}),e.jsx(n,{value:"플랜 관리",leadingIcon:p,selected:l==="plan",onClick:()=>t("plan")}),e.jsx(n,{value:"요금 계산기",leadingIcon:S,selected:l==="billing",onClick:()=>t("billing")})]}),e.jsx(o,{title:"리소스",children:e.jsx(n,{value:"앱 다운로드",leadingIcon:L,selected:l==="app",onClick:()=>t("app")})})]}),m={render:l=>{const[t,s]=a.useState("profile"),J=l.iconOnly?"100%":"280px";return e.jsx("div",{style:{width:J,height:640},children:e.jsx(i,{...l,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:d}),e.jsx(j,{thickness:1}),e.jsx(c,{name:"김규빅",avatarType:"initial",trailingIcon:N})]}),children:e.jsx(B,{selected:t,setSelected:s})})})}},u={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(i,{children:e.jsxs(o,{title:"Item Variants",children:[e.jsx(n,{value:"Default",leadingIcon:r}),e.jsx(n,{value:"Selected",leadingIcon:r,selected:!0}),e.jsx(n,{value:"Disabled",leadingIcon:r,disabled:!0})]})})})},g={args:{lang:"en"},render:l=>{const[t,s]=a.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(i,{...l,title:"Settings",children:[e.jsxs(o,{title:"Settings",children:[e.jsx(n,{value:"Profile",leadingIcon:r,selected:t==="profile",onClick:()=>s("profile")}),e.jsx(n,{value:"Plan",leadingIcon:p,selected:t==="plan",onClick:()=>s("plan")}),e.jsx(n,{value:"Billing",leadingIcon:S,selected:t==="billing",onClick:()=>s("billing")})]}),e.jsx(o,{title:"Resources",children:e.jsx(n,{value:"App Download",leadingIcon:L,selected:t==="app",onClick:()=>s("app")})})]})})}},I={render:l=>{const[t,s]=a.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(i,{...l,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:d}),e.jsx(j,{thickness:1}),e.jsx(n,{value:"로그아웃",leadingIcon:H})]}),children:e.jsx(B,{selected:t,setSelected:s})})})}},h={render:()=>{const[l,t]=a.useState("profile");return e.jsx("div",{style:{height:640},children:e.jsxs(i,{iconOnly:!0,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:d}),e.jsx(n,{value:"로그아웃",leadingIcon:H})]}),children:[e.jsxs(o,{title:"설정",children:[e.jsx(n,{value:"내 정보",leadingIcon:r,selected:l==="profile",onClick:()=>t("profile")}),e.jsx(n,{value:"플랜 관리",leadingIcon:p,selected:l==="plan",onClick:()=>t("plan")}),e.jsx(n,{value:"요금 계산기",leadingIcon:S,selected:l==="billing",onClick:()=>t("billing")})]}),e.jsx(o,{title:"리소스",children:e.jsx(n,{value:"앱 다운로드",leadingIcon:L,selected:l==="app",onClick:()=>t("app")})})]})})}},v={render:()=>{const[l,t]=a.useState("profile");return e.jsxs("div",{style:{height:640,display:"flex",gap:"16px"},children:[e.jsx(i,{iconOnly:!0,style:{height:"100%"},bottom:e.jsx(e.Fragment,{children:e.jsx(c,{name:"김규빅",avatarType:"initial"})}),children:e.jsxs(o,{title:"설정",children:[e.jsx(n,{value:"내 정보",leadingIcon:r,selected:l==="profile",onClick:()=>t("profile")}),e.jsx(n,{value:"플랜 관리",leadingIcon:p,selected:l==="plan",onClick:()=>t("plan")})]})}),e.jsx(i,{style:{height:"100%"},title:"설정",bottom:e.jsx(e.Fragment,{children:e.jsx(c,{name:"김규빅",avatarType:"initial",trailingIcon:N})}),children:e.jsx(B,{selected:l,setSelected:t})})]})}},x={render:()=>{const[l,t]=a.useState("profile");return e.jsxs("div",{style:{height:640,display:"flex",gap:"16px"},children:[e.jsxs(i,{iconOnly:!0,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:d}),e.jsx(j,{thickness:1}),e.jsx(c,{name:"김규빅",avatarType:"initial"})]}),children:[e.jsxs(o,{title:"설정",children:[e.jsx(n,{value:"내 정보",leadingIcon:r,selected:l==="profile",onClick:()=>t("profile")}),e.jsx(n,{value:"플랜 관리",leadingIcon:p,selected:l==="plan",onClick:()=>t("plan")}),e.jsx(n,{value:"요금 계산기",leadingIcon:S,selected:l==="billing",onClick:()=>t("billing")})]}),e.jsx(o,{title:"리소스",children:e.jsx(n,{value:"앱 다운로드",leadingIcon:L,selected:l==="app",onClick:()=>t("app")})})]}),e.jsx(i,{style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{value:"문의하기",leadingIcon:d}),e.jsx(j,{thickness:1}),e.jsx(c,{name:"김규빅",avatarType:"initial",trailingIcon:N})]}),children:e.jsx(B,{selected:l,setSelected:t})})]})}};var y,f,O;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("profile");
    const containerWidth = args.iconOnly ? "100%" : "280px";
    return <div style={{
      width: containerWidth,
      height: 640
    }}>
        <LNB {...args} style={{
        height: "100%"
      }} title="설정" bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name="김규빅" avatarType="initial" trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(O=(f=m.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var k,C,b;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      width: 320
    }}>
        <LNB>
          <LNBItemGroup title="Item Variants">
            <LNBItem value="Default" leadingIcon={IconPersonOutline20} />
            <LNBItem value="Selected" leadingIcon={IconPersonOutline20} selected />
            <LNBItem value="Disabled" leadingIcon={IconPersonOutline20} disabled />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(b=(C=u.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var P,D,G;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
            <LNBItem value="Profile" leadingIcon={IconPersonOutline20} selected={selected === "profile"} onClick={() => setSelected("profile")} />
            <LNBItem value="Plan" leadingIcon={IconWalletOutline20} selected={selected === "plan"} onClick={() => setSelected("plan")} />
            <LNBItem value="Billing" leadingIcon={IconMoneyOutline20} selected={selected === "billing"} onClick={() => setSelected("billing")} />
          </LNBItemGroup>
          <LNBItemGroup title="Resources">
            <LNBItem value="App Download" leadingIcon={IconDownloadOutline20} selected={selected === "app"} onClick={() => setSelected("app")} />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(G=(D=g.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var w,W,T;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      width: 280,
      height: 640
    }}>
        <LNB {...args} style={{
        height: "100%"
      }} title="설정" bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItem value="로그아웃" leadingIcon={IconLogoutOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(T=(W=I.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var F,R,A;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      height: 640
    }}>
        <LNB iconOnly={true} style={{
        height: "100%"
      }} bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <LNBItem value="로그아웃" leadingIcon={IconLogoutOutline20} />
            </>}>
          <LNBItemGroup title="설정">
            <LNBItem value="내 정보" leadingIcon={IconPersonOutline20} selected={selected === "profile"} onClick={() => setSelected("profile")} />
            <LNBItem value="플랜 관리" leadingIcon={IconWalletOutline20} selected={selected === "plan"} onClick={() => setSelected("plan")} />
            <LNBItem value="요금 계산기" leadingIcon={IconMoneyOutline20} selected={selected === "billing"} onClick={() => setSelected("billing")} />
          </LNBItemGroup>
          <LNBItemGroup title="리소스">
            <LNBItem value="앱 다운로드" leadingIcon={IconDownloadOutline20} selected={selected === "app"} onClick={() => setSelected("app")} />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(A=(R=h.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var M,V,_;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      height: 640,
      display: "flex",
      gap: "16px"
    }}>
        <LNB iconOnly={true} style={{
        height: "100%"
      }} bottom={<>
              <LNBItemProfile name="김규빅" avatarType="initial" />
            </>}>
          <LNBItemGroup title="설정">
            <LNBItem value="내 정보" leadingIcon={IconPersonOutline20} selected={selected === "profile"} onClick={() => setSelected("profile")} />
            <LNBItem value="플랜 관리" leadingIcon={IconWalletOutline20} selected={selected === "plan"} onClick={() => setSelected("plan")} />
          </LNBItemGroup>
        </LNB>

        <LNB style={{
        height: "100%"
      }} title="설정" bottom={<>
              <LNBItemProfile name="김규빅" avatarType="initial" trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(_=(V=v.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var E,q,z;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("profile");
    return <div style={{
      height: 640,
      display: "flex",
      gap: "16px"
    }}>
        <LNB iconOnly={true} style={{
        height: "100%"
      }} bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name="김규빅" avatarType="initial" />
            </>}>
          <LNBItemGroup title="설정">
            <LNBItem value="내 정보" leadingIcon={IconPersonOutline20} selected={selected === "profile"} onClick={() => setSelected("profile")} />
            <LNBItem value="플랜 관리" leadingIcon={IconWalletOutline20} selected={selected === "plan"} onClick={() => setSelected("plan")} />
            <LNBItem value="요금 계산기" leadingIcon={IconMoneyOutline20} selected={selected === "billing"} onClick={() => setSelected("billing")} />
          </LNBItemGroup>
          <LNBItemGroup title="리소스">
            <LNBItem value="앱 다운로드" leadingIcon={IconDownloadOutline20} selected={selected === "app"} onClick={() => setSelected("app")} />
          </LNBItemGroup>
        </LNB>

        <LNB style={{
        height: "100%"
      }} title="설정" bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name="김규빅" avatarType="initial" trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(z=(q=x.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const qe=["Overview","Item_Variants","WithCustomLang","WithBottomPinned","IconOnly","WithProfile","WithProfileAndItems"];export{h as IconOnly,u as Item_Variants,m as Overview,I as WithBottomPinned,g as WithCustomLang,v as WithProfile,x as WithProfileAndItems,qe as __namedExportsOrder,Ee as default};
