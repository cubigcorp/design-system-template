import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./TextArea-CLXbY6ZZ.js";import{d as h}from"./styled-components.browser.esm-NAFAd1pi.js";import"./iframe-CLq260Vv.js";import"./Description-Ds4hNMff.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./radius-DaoU83SK.js";const ne={title:"Components/TextArea",component:a,parameters:{layout:"centered"},argTypes:{labelType:{control:"select",options:["default","required","optional"]},status:{control:"select",options:["default","error","success"]},disabled:{control:"boolean"},showCharacterCounter:{control:"boolean"}}},s={args:{placeholder:"텍스트를 입력해 주세요.",maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},o={args:{label:"Label",placeholder:"텍스트를 입력해 주세요."},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},n={args:{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},l={args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},c={args:{label:"Label",value:"텍스트 입력",showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},p={args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},d={args:{label:"Label",value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},i={render:()=>e.jsxs(F,{children:[e.jsxs(u,{children:[e.jsx(m,{children:"Default"}),e.jsx(a,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Active"}),e.jsx(a,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Disabled (Empty)"}),e.jsx(a,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})]}),e.jsxs(u,{children:[e.jsx(m,{children:"Disabled (With Value)"}),e.jsx(a,{value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500})]})]})},t=h.div`
  width: 400px;
`,F=h.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
`,u=h.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,m=h.span`
  font-size: 12px;
  color: #666;
`;var x,C,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,S,W;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "텍스트를 입력해 주세요."
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(W=(S=o.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var j,w,L;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Label",
    description: "Description text",
    placeholder: "텍스트를 입력해 주세요."
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(L=(w=n.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var A,D,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "텍스트를 입력해 주세요.",
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(T=(D=l.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var f,v,R;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "텍스트 입력",
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var y,V,E;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "텍스트를 입력해 주세요.",
    disabled: true,
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(E=(V=p.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var _,q,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "Label",
    value: "텍스트 입력",
    disabled: true,
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var O,k,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <StatesWrapper>
      <StateRow>
        <StateLabel>Default</StateLabel>
        <TextArea placeholder="텍스트를 입력해 주세요." showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Active</StateLabel>
        <TextArea value="텍스트 입력" showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Disabled (Empty)</StateLabel>
        <TextArea placeholder="텍스트를 입력해 주세요." disabled showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Disabled (With Value)</StateLabel>
        <TextArea value="텍스트 입력" disabled showCharacterCounter maxCount={500} />
      </StateRow>
    </StatesWrapper>
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const le=["Default","WithLabel","WithDescription","WithCharacterCounter","WithValue","Disabled","DisabledWithValue","AllStates"];export{i as AllStates,s as Default,p as Disabled,d as DisabledWithValue,l as WithCharacterCounter,n as WithDescription,o as WithLabel,c as WithValue,le as __namedExportsOrder,ne as default};
