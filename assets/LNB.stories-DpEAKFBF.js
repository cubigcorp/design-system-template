import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-D0ynm1mK.js";import{L as s}from"./LNB-DKRBc0rd.js";import{L as o}from"./ItemGroup-BJB_8qT7.js";import{L as l}from"./Item-CJovrEv7.js";import{S as c}from"./icon_person_outline_20-IfdtYGBn.js";import{a as u,S as L}from"./icon_wallet_outline_20-DyE8LAhm.js";import{a as B,b as X,S as Y}from"./icon_logout_outline_20-0uVcXiMo.js";import{S as a}from"./icon_setting_outline_20-rwj6xki_.js";import{D as p}from"./Divider-BABuJ7ma.js";import{L as d}from"./ItemProfile-NU7F-1gE.js";import{S as f}from"./icon_chevron-right_outline_20-uPR32FtV.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-o0t8qbnT.js";import"./spacing-tE1IiUFl.js";import"./textColor-DLZeZODc.js";import"./color-CiwAFuFb.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./radius-DaoU83SK.js";import"./Avatar-BEnKGvzG.js";import"./borderColor-C_RHITEf.js";const Ne={title:"Components/LNB",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{lang:{control:{type:"select"},options:["ko","en"]},iconOnly:{control:{type:"boolean"}}}},m=({selected:n,setSelected:t})=>e.jsxs(e.Fragment,{children:[e.jsxs(o,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:c,selected:n==="profile",onClick:()=>t("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:u,selected:n==="plan",onClick:()=>t("plan")}),e.jsx(l,{value:"요금 계산기",leadingIcon:L,selected:n==="billing",onClick:()=>t("billing")})]}),e.jsx(o,{title:"리소스",children:e.jsx(l,{value:"앱 다운로드",leadingIcon:B,selected:n==="app",onClick:()=>t("app")})})]}),g={render:n=>{const[t,i]=r.useState("profile"),N=n.iconOnly?"100%":"280px";return e.jsx("div",{style:{width:N,height:640},children:e.jsx(s,{...n,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:a}),e.jsx(p,{thickness:1}),e.jsx(d,{name:"김규빅",avatarType:"initial",trailingIcon:f})]}),children:e.jsx(m,{selected:t,setSelected:i})})})}},I={render:()=>e.jsx("div",{style:{width:320},children:e.jsx(s,{children:e.jsxs(o,{title:"Item Variants",children:[e.jsx(l,{value:"Default",leadingIcon:c}),e.jsx(l,{value:"Selected",leadingIcon:c,selected:!0}),e.jsx(l,{value:"Disabled",leadingIcon:c,disabled:!0})]})})})},h={args:{lang:"en"},render:n=>{const[t,i]=r.useState("profile");return e.jsx("div",{style:{width:280},children:e.jsxs(s,{...n,title:"Settings",children:[e.jsxs(o,{title:"Settings",children:[e.jsx(l,{value:"Profile",leadingIcon:c,selected:t==="profile",onClick:()=>i("profile")}),e.jsx(l,{value:"Plan",leadingIcon:u,selected:t==="plan",onClick:()=>i("plan")}),e.jsx(l,{value:"Billing",leadingIcon:L,selected:t==="billing",onClick:()=>i("billing")})]}),e.jsx(o,{title:"Resources",children:e.jsx(l,{value:"App Download",leadingIcon:B,selected:t==="app",onClick:()=>i("app")})})]})})}},x={render:n=>{const[t,i]=r.useState("profile");return e.jsx("div",{style:{width:280,height:640},children:e.jsx(s,{...n,style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:a}),e.jsx(p,{thickness:1}),e.jsx(l,{value:"로그아웃",leadingIcon:X})]}),children:e.jsx(m,{selected:t,setSelected:i})})})}},v={render:()=>{const[n,t]=r.useState("profile");return e.jsx("div",{style:{height:640},children:e.jsxs(s,{iconOnly:!0,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:a}),e.jsx(l,{value:"로그아웃",leadingIcon:X})]}),children:[e.jsxs(o,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:c,selected:n==="profile",onClick:()=>t("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:u,selected:n==="plan",onClick:()=>t("plan")}),e.jsx(l,{value:"요금 계산기",leadingIcon:L,selected:n==="billing",onClick:()=>t("billing")})]}),e.jsx(o,{title:"리소스",children:e.jsx(l,{value:"앱 다운로드",leadingIcon:B,selected:n==="app",onClick:()=>t("app")})})]})})}},j={render:()=>{const[n,t]=r.useState("profile");return e.jsxs("div",{style:{height:640,display:"flex",gap:"16px"},children:[e.jsx(s,{iconOnly:!0,style:{height:"100%"},bottom:e.jsx(e.Fragment,{children:e.jsx(d,{name:"김규빅",avatarType:"initial"})}),children:e.jsxs(o,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:c,selected:n==="profile",onClick:()=>t("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:u,selected:n==="plan",onClick:()=>t("plan")})]})}),e.jsx(s,{style:{height:"100%"},title:"설정",bottom:e.jsx(e.Fragment,{children:e.jsx(d,{name:"김규빅",avatarType:"initial",trailingIcon:f})}),children:e.jsx(m,{selected:n,setSelected:t})})]})}},S={render:()=>{const[n,t]=r.useState("profile");return e.jsxs("div",{style:{height:640,display:"flex",gap:"16px"},children:[e.jsxs(s,{iconOnly:!0,style:{height:"100%"},bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:a}),e.jsx(p,{thickness:1}),e.jsx(d,{name:"김규빅",avatarType:"initial"})]}),children:[e.jsxs(o,{title:"설정",children:[e.jsx(l,{value:"내 정보",leadingIcon:c,selected:n==="profile",onClick:()=>t("profile")}),e.jsx(l,{value:"플랜 관리",leadingIcon:u,selected:n==="plan",onClick:()=>t("plan")}),e.jsx(l,{value:"요금 계산기",leadingIcon:L,selected:n==="billing",onClick:()=>t("billing")})]}),e.jsx(o,{title:"리소스",children:e.jsx(l,{value:"앱 다운로드",leadingIcon:B,selected:n==="app",onClick:()=>t("app")})})]}),e.jsx(s,{style:{height:"100%"},title:"설정",bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:a}),e.jsx(p,{thickness:1}),e.jsx(d,{name:"김규빅",avatarType:"initial",trailingIcon:f})]}),children:e.jsx(m,{selected:n,setSelected:t})})]})}},Z=()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[e.jsx("rect",{width:"24",height:"24",rx:"4",fill:"#6366F1"}),e.jsx("path",{d:"M8 8h8v8H8z",fill:"white"})]}),e.jsx("span",{style:{fontWeight:600,fontSize:"16px"},children:"Logo"})]}),$=({onClick:n})=>e.jsx("button",{onClick:n,style:{background:"none",border:"none",cursor:"pointer",padding:"4px",display:"flex",alignItems:"center"},children:e.jsx(Y,{style:{width:"20px",height:"20px",flexShrink:0}})}),ee=({iconOnly:n,onToggle:t})=>e.jsxs("div",{style:{display:"flex",justifyContent:n?"center":"space-between",alignItems:"center",padding:"8px 0"},children:[!n&&e.jsx(Z,{}),e.jsx($,{onClick:t})]}),y={render:()=>{const[n,t]=r.useState("profile"),[i,N]=r.useState(!1);return e.jsx("div",{style:{width:i?"60px":"280px",height:640},children:e.jsx(s,{iconOnly:i,style:{height:"100%"},title:e.jsx(ee,{iconOnly:i,onToggle:()=>N(!i)}),bottom:e.jsxs(e.Fragment,{children:[e.jsx(l,{value:"문의하기",leadingIcon:a}),e.jsx(p,{thickness:1}),e.jsx(d,{name:"김규빅",avatarType:"initial",trailingIcon:f})]}),children:e.jsx(m,{selected:n,setSelected:t})})})}};var O,k,C;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('profile');
    const containerWidth = args.iconOnly ? '100%' : '280px';
    return <div style={{
      width: containerWidth,
      height: 640
    }}>
        <LNB {...args} style={{
        height: '100%'
      }} title='설정' bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='김규빅' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
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
          <LNBItemGroup title='Item Variants'>
            <LNBItem value='Default' leadingIcon={IconPersonOutline20} />
            <LNBItem value='Selected' leadingIcon={IconPersonOutline20} selected />
            <LNBItem value='Disabled' leadingIcon={IconPersonOutline20} disabled />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(w=(P=I.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var D,W,G;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    lang: 'en'
  },
  render: args => {
    const [selected, setSelected] = useState('profile');
    return <div style={{
      width: 280
    }}>
        <LNB {...args} title='Settings'>
          <LNBItemGroup title='Settings'>
            <LNBItem value='Profile' leadingIcon={IconPersonOutline20} selected={selected === 'profile'} onClick={() => setSelected('profile')} />
            <LNBItem value='Plan' leadingIcon={IconWalletOutline20} selected={selected === 'plan'} onClick={() => setSelected('plan')} />
            <LNBItem value='Billing' leadingIcon={IconMoneyOutline20} selected={selected === 'billing'} onClick={() => setSelected('billing')} />
          </LNBItemGroup>
          <LNBItemGroup title='Resources'>
            <LNBItem value='App Download' leadingIcon={IconDownloadOutline20} selected={selected === 'app'} onClick={() => setSelected('app')} />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(G=(W=h.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var T,F,R;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [selected, setSelected] = useState('profile');
    return <div style={{
      width: 280,
      height: 640
    }}>
        <LNB {...args} style={{
        height: '100%'
      }} title='설정' bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItem value='로그아웃' leadingIcon={IconLogoutOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(R=(F=x.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var H,M,A;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('profile');
    return <div style={{
      height: 640
    }}>
        <LNB iconOnly={true} style={{
        height: '100%'
      }} bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <LNBItem value='로그아웃' leadingIcon={IconLogoutOutline20} />
            </>}>
          <LNBItemGroup title='설정'>
            <LNBItem value='내 정보' leadingIcon={IconPersonOutline20} selected={selected === 'profile'} onClick={() => setSelected('profile')} />
            <LNBItem value='플랜 관리' leadingIcon={IconWalletOutline20} selected={selected === 'plan'} onClick={() => setSelected('plan')} />
            <LNBItem value='요금 계산기' leadingIcon={IconMoneyOutline20} selected={selected === 'billing'} onClick={() => setSelected('billing')} />
          </LNBItemGroup>
          <LNBItemGroup title='리소스'>
            <LNBItem value='앱 다운로드' leadingIcon={IconDownloadOutline20} selected={selected === 'app'} onClick={() => setSelected('app')} />
          </LNBItemGroup>
        </LNB>
      </div>;
  }
}`,...(A=(M=v.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var V,_,E;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('profile');
    return <div style={{
      height: 640,
      display: 'flex',
      gap: '16px'
    }}>
        <LNB iconOnly={true} style={{
        height: '100%'
      }} bottom={<>
              <LNBItemProfile name='김규빅' avatarType='initial' />
            </>}>
          <LNBItemGroup title='설정'>
            <LNBItem value='내 정보' leadingIcon={IconPersonOutline20} selected={selected === 'profile'} onClick={() => setSelected('profile')} />
            <LNBItem value='플랜 관리' leadingIcon={IconWalletOutline20} selected={selected === 'plan'} onClick={() => setSelected('plan')} />
          </LNBItemGroup>
        </LNB>

        <LNB style={{
        height: '100%'
      }} title='설정' bottom={<>
              <LNBItemProfile name='김규빅' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(E=(_=j.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var z,q,J;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('profile');
    return <div style={{
      height: 640,
      display: 'flex',
      gap: '16px'
    }}>
        <LNB iconOnly={true} style={{
        height: '100%'
      }} bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='김규빅' avatarType='initial' />
            </>}>
          <LNBItemGroup title='설정'>
            <LNBItem value='내 정보' leadingIcon={IconPersonOutline20} selected={selected === 'profile'} onClick={() => setSelected('profile')} />
            <LNBItem value='플랜 관리' leadingIcon={IconWalletOutline20} selected={selected === 'plan'} onClick={() => setSelected('plan')} />
            <LNBItem value='요금 계산기' leadingIcon={IconMoneyOutline20} selected={selected === 'billing'} onClick={() => setSelected('billing')} />
          </LNBItemGroup>
          <LNBItemGroup title='리소스'>
            <LNBItem value='앱 다운로드' leadingIcon={IconDownloadOutline20} selected={selected === 'app'} onClick={() => setSelected('app')} />
          </LNBItemGroup>
        </LNB>

        <LNB style={{
        height: '100%'
      }} title='설정' bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='김규빅' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(J=(q=S.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('profile');
    const [iconOnly, setIconOnly] = useState(false);
    return <div style={{
      width: iconOnly ? '60px' : '280px',
      height: 640
    }}>
        <LNB iconOnly={iconOnly} style={{
        height: '100%'
      }} title={<CustomHeader iconOnly={iconOnly} onToggle={() => setIconOnly(!iconOnly)} />} bottom={<>
              <LNBItem value='문의하기' leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name='김규빅' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
            </>}>
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>;
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Oe=["Overview","Item_Variants","WithCustomLang","WithBottomPinned","IconOnly","WithProfile","WithProfileAndItems","WithCustomHeader"];export{v as IconOnly,I as Item_Variants,g as Overview,x as WithBottomPinned,y as WithCustomHeader,h as WithCustomLang,j as WithProfile,S as WithProfileAndItems,Oe as __namedExportsOrder,Ne as default};
