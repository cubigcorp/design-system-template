import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as r}from"./Item-CJovrEv7.js";import{S as t}from"./icon_person_outline_20-IfdtYGBn.js";import"./styled-components.browser.esm-o0t8qbnT.js";import"./iframe-D0ynm1mK.js";import"./preload-helper-eJNa_G2e.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./textColor-DLZeZODc.js";import"./LNB-DKRBc0rd.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const z={title:"Components/LNB/Item",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},s={render:n=>e.jsx("div",{style:{width:280},children:e.jsx(r,{...n,leadingIcon:t})})},o={args:{selected:!0},render:n=>e.jsx("div",{style:{width:280},children:e.jsx(r,{...n,leadingIcon:t})})},d={args:{disabled:!0},render:n=>e.jsx("div",{style:{width:280},children:e.jsx(r,{...n,leadingIcon:t})})},i={render:n=>e.jsx("div",{style:{width:280},children:e.jsx(r,{...n})})},a={args:{iconOnly:!0},render:n=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(r,{...n,leadingIcon:t})}),e.jsx("div",{style:{width:60},children:e.jsx(r,{...n,leadingIcon:t,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(r,{...n,leadingIcon:t,disabled:!0})})]})};var l,c,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selected: true
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var I,y,v;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,j;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} />
    </div>
}`,...(j=(x=i.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var w,O,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    iconOnly: true
  },
  render: args => <div style={{
    display: 'flex',
    gap: '8px',
    width: 'fit-content'
  }}>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} />
      </div>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} selected={true} />
      </div>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} disabled={true} />
      </div>
    </div>
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const A=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{s as Default,d as Disabled,a as IconOnly,o as Selected,i as WithoutIcon,A as __namedExportsOrder,z as default};
