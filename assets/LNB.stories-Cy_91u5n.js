import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BDzNDkdP.js";import"./SolidButton-RgRedRGl.js";import"./TextButton-Dz2jOYpH.js";import"./IconButton-Dbs0qcHl.js";import"./Badge-DeiVi3d6.js";import"./Chip-CbbUn4FF.js";import"./Switch-BNc5GLkT.js";import"./Description-C3D7_qx9.js";import{L as o,a as l,D as p,b as a,c as s}from"./Divider-CtBGHEVk.js";import"./TextArea-DjGGeoaW.js";import"./TokenField-Bt8ADwWL.js";import"./Modal-LIXde77j.js";import"./MultiSelect-BSG_OaU3.js";import"./TokenInput-Ru-sDX8Y.js";import"./Cell-CCyK221E.js";import"./RadioButton-Bd7qUcoG.js";import"./Checkbox-G6ru9igq.js";import"./SegmentItem-D6gFkg_-.js";import"./AvatarGroup-NYUdpXTM.js";import"./TabItem-BuCqXmo5.js";import"./ChipTabs-98wHHHCI.js";import"./Popover-2FTbtH-M.js";import"./StepIndicator-D1_TxqJT.js";import"./Breadcrumbs-BFoe3Pbo.js";import"./BreadcrumbItem-BC5sgzcI.js";import"./Pagination-DoptLf-D.js";import"./Callout-DBGZ9rjC.js";import"./TopBannerList-BrIM4OGs.js";import"./Tooltip-CBue0_b_.js";import{S as L}from"./icon_chevron-right_outline_20-BPOQs_sV.js";import{a as B,b as X,S as Y}from"./icon_logout_outline_20-DgejkXFI.js";import{a as m,S as f}from"./icon_wallet_outline_20-BQPPYLbx.js";import{S as r}from"./icon_person_outline_20-BJFT6NAK.js";import{S as d}from"./icon_setting_outline_20-Vy0-heTF.js";import"./styled-components.browser.esm-BfvoXbNe.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CYjOjfox.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-CkSReBge.js";import"./index-ToLnprrz.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-D0jNkJ0h.js";import"./icon_chevron-down_outline_16-FhDI9iPF.js";import"./icon_more_outline_16-rWTPrbUK.js";import"./icon_chevron-right_outline_16-C7i6r33l.js";import"./icon_warning_fill_16-B4kemQkw.js";import"./icon_close_outline_24-CczmjaNx.js";const ct={title:"Components/LNB",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]},iconOnly:{control:{type:"boolean"}}}},u=({selected:t,setSelected:n})=>e.jsxs(e.Fragment,{children:[e.jsxs(s,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:r,selected:t==="profile",onClick:()=>n("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:m,selected:t==="plan",onClick:()=>n("plan")}),e.jsx(l,{value:"요금 계산기",leadingIcon:f,selected:t==="billing",onClick:()=>n("billing")})]}),e.jsx(s,{title:"리소스",children:e.jsx(l,{value:"앱 다운로드",leadingIcon:B,selected:t==="app",onClick:()=>n("app")})})]}),g={render:t=>{const[n,i]=c.useState("profile"),N=t.iconOnly?"100%":"280px";return e.jsx("div",{style:{width:N,height:640},children:e.jsx(o,{...t,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:d}),e.jsx(p,{thickness:1}),e.jsx(a,{name:"김규빅",avatarType:"initial",trailingIcon:L})]}),children:e.jsx(u,{selected:n,setSelected:i})})})}},I={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(o,{children:e.jsxs(s,{title:"Item Variants",children:[e.jsx(l,{value:"Default",leadingIcon:r}),e.jsx(l,{value:"Selected",leadingIcon:r,selected:!0}),e.jsx(l,{value:"Disabled",leadingIcon:r,disabled:!0})]})})})},h={args:{lang:"en"},render:t=>{const[n,i]=c.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(o,{...t,title:"Settings",children:[e.jsxs(s,{title:"Settings",children:[e.jsx(l,{value:"Profile",leadingIcon:r,selected:n==="profile",onClick:()=>i("profile")}),e.jsx(l,{value:"Plan",leadingIcon:m,selected:n==="plan",onClick:()=>i("plan")}),e.jsx(l,{value:"Billing",leadingIcon:f,selected:n==="billing",onClick:()=>i("billing")})]}),e.jsx(s,{title:"Resources",children:e.jsx(l,{value:"App Download",leadingIcon:B,selected:n==="app",onClick:()=>i("app")})})]})})}},x={render:t=>{const[n,i]=c.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(o,{...t,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:d}),e.jsx(p,{thickness:1}),e.jsx(l,{value:"로그아웃",leadingIcon:X})]}),children:e.jsx(u,{selected:n,setSelected:i})})})}},v={render:()=>{const[t,n]=c.useState("profile");return e.jsx("div",{style:{height:640},children:e.jsxs(o,{iconOnly:!0,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:d}),e.jsx(l,{value:"로그아웃",leadingIcon:X})]}),children:[e.jsxs(s,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:r,selected:t==="profile",onClick:()=>n("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:m,selected:t==="plan",onClick:()=>n("plan")}),e.jsx(l,{value:"요금 계산기",leadingIcon:f,selected:t==="billing",onClick:()=>n("billing")})]}),e.jsx(s,{title:"리소스",children:e.jsx(l,{value:"앱 다운로드",leadingIcon:B,selected:t==="app",onClick:()=>n("app")})})]})})}},j={render:()=>{const[t,n]=c.useState("profile");return e.jsxs("div",{style:{height:640,display:"flex",gap:"16px"},children:[e.jsx(o,{iconOnly:!0,style:{height:"100%"},bottom:e.jsx(e.Fragment,{children:e.jsx(a,{name:"김규빅",avatarType:"initial"})}),children:e.jsxs(s,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:r,selected:t==="profile",onClick:()=>n("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:m,selected:t==="plan",onClick:()=>n("plan")})]})}),e.jsx(o,{style:{height:"100%"},title:"설정",bottom:e.jsx(e.Fragment,{children:e.jsx(a,{name:"김규빅",avatarType:"initial",trailingIcon:L})}),children:e.jsx(u,{selected:t,setSelected:n})})]})}},S={render:()=>{const[t,n]=c.useState("profile");return e.jsxs("div",{style:{height:640,display:"flex",gap:"16px"},children:[e.jsxs(o,{iconOnly:!0,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:d}),e.jsx(p,{thickness:1}),e.jsx(a,{name:"김규빅",avatarType:"initial"})]}),children:[e.jsxs(s,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:r,selected:t==="profile",onClick:()=>n("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:m,selected:t==="plan",onClick:()=>n("plan")}),e.jsx(l,{value:"요금 계산기",leadingIcon:f,selected:t==="billing",onClick:()=>n("billing")})]}),e.jsx(s,{title:"리소스",children:e.jsx(l,{value:"앱 다운로드",leadingIcon:B,selected:t==="app",onClick:()=>n("app")})})]}),e.jsx(o,{style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:d}),e.jsx(p,{thickness:1}),e.jsx(a,{name:"김규빅",avatarType:"initial",trailingIcon:L})]}),children:e.jsx(u,{selected:t,setSelected:n})})]})}},Z=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{width:"24",height:"24",rx:"4",fill:"#6366F1"}),e.jsx("path",{d:"M8 8h8v8H8z",fill:"white"})]}),e.jsx("span",{style:{fontWeight:600,fontSize:"16px"},children:"Logo"})]}),$=({onClick:t})=>e.jsx("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:e.jsx(Y,{style:{width:"20px",height:"20px",flexShrink:0}})}),ee=({iconOnly:t,onToggle:n})=>e.jsxs("div",{style:{display:"flex",justifyContent:t?"center":"space-between",alignItems:"center",padding:"8px 0"},children:[!t&&e.jsx(Z,{}),e.jsx($,{onClick:n})]}),y={render:()=>{const[t,n]=c.useState("profile"),[i,N]=c.useState(!1);return e.jsx("div",{style:{width:i?"60px":"280px",height:640},children:e.jsx(o,{iconOnly:i,style:{height:"100%"},title:e.jsx(ee,{iconOnly:i,onToggle:()=>N(!i)}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:d}),e.jsx(p,{thickness:1}),e.jsx(a,{name:"김규빅",avatarType:"initial",trailingIcon:L})]}),children:e.jsx(u,{selected:t,setSelected:n})})})}};var O,k,C;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(C=(k=g.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var b,P,w;I.parameters={...I.parameters,docs:{...(b=I.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(w=(P=I.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,W,G;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var T,F,R;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var H,M,A;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(A=(M=v.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var V,_,E;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(E=(_=j.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var z,q,J;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(q=S.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState("profile");
    const [iconOnly, setIconOnly] = useState(false);
    return <div style={{
      width: iconOnly ? "60px" : "280px",
      height: 640
    }}>
        <LNB iconOnly={iconOnly} style={{
        height: "100%"
      }} title={<CustomHeader iconOnly={iconOnly} onToggle={() => setIconOnly(!iconOnly)} />} bottom={<>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name="김규빅" avatarType="initial" trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const at=["Overview","Item_Variants","WithCustomLang","WithBottomPinned","IconOnly","WithProfile","WithProfileAndItems","WithCustomHeader"];export{v as IconOnly,I as Item_Variants,g as Overview,x as WithBottomPinned,y as WithCustomHeader,h as WithCustomLang,j as WithProfile,S as WithProfileAndItems,at as __namedExportsOrder,ct as default};
