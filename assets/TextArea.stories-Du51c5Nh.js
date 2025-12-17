import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a}from"./TextArea-BDspXE9f.js";import{d as m}from"./styled-components.browser.esm-I1_av-H2.js";import"./iframe-CWj9sbMl.js";import"./Description-DRonXOGg.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./radius-DaoU83SK.js";const ce={title:"Components/TextArea",component:a,parameters:{layout:"centered"},argTypes:{labelType:{control:"select",options:["default","required","optional"]},status:{control:"select",options:["default","error","success"]},disabled:{control:"boolean"},showCharacterCounter:{control:"boolean"}}},s={args:{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},render:r=>{const{value:H,...F}=r;return e.jsx(t,{children:e.jsx(a,{...F})})}},n={args:{label:"Label",placeholder:"텍스트를 입력해 주세요."},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},o={args:{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},l={args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},c={args:{label:"Label",value:"텍스트 입력",showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},p={args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},d={args:{label:"Label",value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(t,{children:e.jsx(a,{...r})})},u={render:()=>e.jsxs(G,{children:[e.jsxs(i,{children:[e.jsx(h,{children:"Default"}),e.jsx(a,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})]}),e.jsxs(i,{children:[e.jsx(h,{children:"Active"}),e.jsx(a,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})]}),e.jsxs(i,{children:[e.jsx(h,{children:"Disabled (Empty)"}),e.jsx(a,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})]}),e.jsxs(i,{children:[e.jsx(h,{children:"Disabled (With Value)"}),e.jsx(a,{value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500})]})]})},t=m.div`
  width: 400px;
`,G=m.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
`,i=m.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h=m.span`
  font-size: 12px;
  color: #666;
`;var x,C,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: "텍스트를 입력해 주세요.",
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => {
    const {
      value,
      ...rest
    } = args;
    return <Wrapper>
        <TextArea {...rest} />
      </Wrapper>;
  }
}`,...(b=(C=s.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var g,S,w;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: "Label",
    placeholder: "텍스트를 입력해 주세요."
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var W,j,L;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "Label",
    description: "Description text",
    placeholder: "텍스트를 입력해 주세요."
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(L=(j=o.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var A,D,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var O,k,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const pe=["Default","WithLabel","WithDescription","WithCharacterCounter","WithValue","Disabled","DisabledWithValue","AllStates"];export{u as AllStates,s as Default,p as Disabled,d as DisabledWithValue,l as WithCharacterCounter,o as WithDescription,n as WithLabel,c as WithValue,pe as __namedExportsOrder,ce as default};
