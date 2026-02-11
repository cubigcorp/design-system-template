import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{L as e}from"./ItemProfile-BxKe7gbj.js";import{S as t}from"./icon_chevron-right_outline_20-D63ME8KW.js";import"./styled-components.browser.esm-kr1dGAPk.js";import"./iframe-D4fn7yV1.js";import"./preload-helper-eJNa_G2e.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./textColor-DLZeZODc.js";import"./Avatar-BS50BBU7.js";import"./borderColor-C_RHITEf.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./LNB-Cwp352qU.js";const q={title:"Components/LNB/ItemProfile",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:{type:"text"}},avatarType:{control:{type:"select"},options:["default","custom","initial"]},avatarSrc:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{name:"김규빅",avatarType:"initial",lang:"ko"}},n={render:a=>r.jsx("div",{style:{width:280},children:r.jsx(e,{...a})})},i={render:a=>r.jsx("div",{style:{width:280},children:r.jsx(e,{...a,trailingIcon:t})})},o={args:{avatarType:"custom",avatarSrc:"https://via.placeholder.com/24"},render:a=>r.jsx("div",{style:{width:280},children:r.jsx(e,{...a,trailingIcon:t})})},s={args:{avatarType:"initial",name:"김규빅"},render:a=>r.jsx("div",{style:{width:280},children:r.jsx(e,{...a,trailingIcon:t})})},c={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:280},children:[r.jsx(e,{name:"김규빅",avatarType:"initial",trailingIcon:t}),r.jsx(e,{name:"John Doe",avatarType:"custom",avatarSrc:"https://via.placeholder.com/24",trailingIcon:t}),r.jsx(e,{name:"이지은",avatarType:"initial"})]})};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} />
    </div>
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,v,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,u,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    avatarType: 'custom',
    avatarSrc: 'https://via.placeholder.com/24'
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
}`,...(y=(u=o.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var I,x,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    avatarType: 'initial',
    name: '김규빅'
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItemProfile {...args} trailingIcon={IconChevronRightOutline20} />
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var T,j,S;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: 280
  }}>
      <LNBItemProfile name='김규빅' avatarType='initial' trailingIcon={IconChevronRightOutline20} />
      <LNBItemProfile name='John Doe' avatarType='custom' avatarSrc='https://via.placeholder.com/24' trailingIcon={IconChevronRightOutline20} />
      <LNBItemProfile name='이지은' avatarType='initial' />
    </div>
}`,...(S=(j=c.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const z=["Default","WithTrailingIcon","WithCustomAvatar","InitialAvatar","AllVariants"];export{c as AllVariants,n as Default,s as InitialAvatar,o as WithCustomAvatar,i as WithTrailingIcon,z as __namedExportsOrder,q as default};
