import{j as r}from"./jsx-runtime-BftZwRmn.js";import{S as s,O as B,T}from"./TextButton-BUTqS835.js";import"./iframe-C9p661aJ.js";import"./styled-components.browser.esm-C-Z7IGPz.js";import"./color-DlZ4f652.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-7dRAAa5F.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BuGXujwY.js";import"./brandColor-9nHZhGOS.js";import"./negativeColor-DFTQtxpe.js";const x=e=>r.jsxs("svg",{...e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[r.jsx("path",{d:"M4.5 16.5c-1.5 1.5-2 4.5-2 4.5s3-0.5 4.5-2c0.08-0.08 0.96-0.92 1.5-1.5"}),r.jsx("path",{d:"M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}),r.jsx("path",{d:"M9 12H4s0.55-3.03 2-4.5C6.62 6.96 9 7 9 7"}),r.jsx("path",{d:"M12 15v5s3.03-0.55 4.5-2c0.54-0.54 0.5-2.5 0.5-2.5"})]}),me={title:"Components/Button",component:s,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"state가 'default'일 때 마우스를 올리면(hover) 'hovered', 클릭하면(press) 'pressed', 포커스하면(focus) 'focused' 상태로 변경됩니다. state prop으로 특정 상태를 직접 지정할 수도 있습니다."}}}},a={render:e=>r.jsx(s,{...e,children:"Button"}),args:{variant:"primary",size:"medium",state:"default"}},o={render:e=>r.jsx(s,{...e,children:"Button"}),args:{...a.args,leadingIcon:x}},i={render:e=>r.jsx(s,{...e,children:"Button"}),args:{...a.args,disabled:!0}},d={render:e=>r.jsx(s,{...e,children:"Button"}),args:{...a.args,loading:!0}},n={render:e=>r.jsx(B,{...e,children:"Button"}),args:{variant:"secondary",size:"medium",state:"default"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},c={render:e=>r.jsx(B,{...e,children:"Button"}),args:{...n.args,leadingIcon:x},argTypes:{...n.argTypes}},u={render:e=>r.jsx(B,{...e,children:"Button"}),args:{...n.args,disabled:!0},argTypes:{...n.argTypes}},g={render:e=>r.jsx(B,{...e,children:"Button"}),args:{...n.args,loading:!0},argTypes:{...n.argTypes}},t={render:e=>r.jsx(T,{...e,children:"Button"}),args:{variant:"secondary",size:"medium",state:"default"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},p={render:e=>r.jsx(T,{...e,children:"Button"}),args:{...t.args,leadingIcon:x},argTypes:{...t.argTypes}},l={render:e=>r.jsx(T,{...e,children:"Button"}),args:{...t.args,disabled:!0},argTypes:{...t.argTypes}},m={render:e=>r.jsx(T,{...e,children:"Button"}),args:{...t.args,loading:!0},argTypes:{...t.argTypes}};var y,S,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    variant: "primary",
    size: "medium",
    state: "default"
  }
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var O,v,j;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    leadingIcon: RocketIcon
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var b,I,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    disabled: true
  }
}`,...(f=(I=i.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var k,L,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <SolidButton {...args}>Button</SolidButton>,
  args: {
    ...Solid.args,
    loading: true
  }
}`,...(z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var W,D,R;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var M,C,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    leadingIcon: RocketIcon
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var _,w,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    disabled: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(A=(w=u.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var H,q,F;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args}>Button</OutlineButton>,
  args: {
    ...Outline.args,
    loading: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(F=(q=g.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,J,K;t.parameters={...t.parameters,docs:{...(G=t.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(K=(J=t.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,P,Q;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    leadingIcon: RocketIcon
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,V,X;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    disabled: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(X=(V=l.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => <TextButton {...args}>Button</TextButton>,
  args: {
    ...Text.args,
    loading: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Be=["Solid","SolidWithIcon","SolidDisabled","SolidLoading","Outline","OutlineWithIcon","OutlineDisabled","OutlineLoading","Text","TextWithIcon","TextDisabled","TextLoading"];export{n as Outline,u as OutlineDisabled,g as OutlineLoading,c as OutlineWithIcon,a as Solid,i as SolidDisabled,d as SolidLoading,o as SolidWithIcon,t as Text,l as TextDisabled,m as TextLoading,p as TextWithIcon,Be as __namedExportsOrder,me as default};
