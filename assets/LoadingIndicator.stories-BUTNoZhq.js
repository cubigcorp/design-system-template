import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as n}from"./LoadingIndicator-EODCaYwk.js";import{d as o}from"./styled-components.browser.esm-DACqo_di.js";import"./color-CiwAFuFb.js";import"./iframe-DsZmfmOb.js";const H={title:"Components/LoadingIndicator",component:n,parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["spinner","dots"]},size:{control:"select",options:["small","medium","large","x-large"]},color:{control:"color"}}},s={args:{type:"spinner",size:"medium"}},t={args:{type:"spinner",size:"medium"}},a={args:{type:"dots",size:"medium"}},p={render:()=>e.jsxs(M,{children:[e.jsxs(x,{children:[e.jsx(m,{children:"Spinner"}),e.jsx(n,{type:"spinner"})]}),e.jsxs(x,{children:[e.jsx(m,{children:"Dots"}),e.jsx(n,{type:"dots"})]})]})},l={render:()=>e.jsxs(X,{children:[e.jsxs(S,{children:[e.jsx(d,{children:"Spinner"}),e.jsxs(i,{children:[e.jsx(r,{children:"Small (16px)"}),e.jsx(n,{type:"spinner",size:"small"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Medium (20px)"}),e.jsx(n,{type:"spinner",size:"medium"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Large (24px)"}),e.jsx(n,{type:"spinner",size:"large"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"X-Large (32px)"}),e.jsx(n,{type:"spinner",size:"x-large"})]})]}),e.jsxs(S,{children:[e.jsx(d,{children:"Dots"}),e.jsxs(i,{children:[e.jsx(r,{children:"Small"}),e.jsx(n,{type:"dots",size:"small"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Medium"}),e.jsx(n,{type:"dots",size:"medium"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"Large"}),e.jsx(n,{type:"dots",size:"large"})]}),e.jsxs(i,{children:[e.jsx(r,{children:"X-Large"}),e.jsx(n,{type:"dots",size:"x-large"})]})]})]})},c={render:()=>e.jsxs(E,{children:[e.jsxs(z,{children:[e.jsx(d,{children:"Spinner"}),e.jsxs(y,{children:[e.jsx(n,{type:"spinner",color:"#FF5722"}),e.jsx(n,{type:"spinner",color:"#4CAF50"}),e.jsx(n,{type:"spinner",color:"#9C27B0"})]})]}),e.jsxs(z,{children:[e.jsx(d,{children:"Dots"}),e.jsxs(y,{children:[e.jsx(n,{type:"dots",color:"#FF5722"}),e.jsx(n,{type:"dots",color:"#4CAF50"}),e.jsx(n,{type:"dots",color:"#9C27B0"})]})]})]})},M=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,x=o.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,m=o.span`
  width: 80px;
  font-size: 14px;
  color: #666;
`,X=o.div`
  display: flex;
  gap: 48px;
`,S=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,d=o.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,i=o.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,r=o.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`,E=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,z=o.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,y=o.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;var g,j,L;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "spinner",
    size: "medium"
  }
}`,...(L=(j=s.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var u,h,w;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: "spinner",
    size: "medium"
  }
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var R,C,T;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "dots",
    size: "medium"
  }
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var b,f,I;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <TypesWrapper>
      <TypeRow>
        <TypeLabel>Spinner</TypeLabel>
        <LoadingIndicator type="spinner" />
      </TypeRow>
      <TypeRow>
        <TypeLabel>Dots</TypeLabel>
        <LoadingIndicator type="dots" />
      </TypeRow>
    </TypesWrapper>
}`,...(I=(f=p.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var F,D,W;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <SizesWrapper>
      <SizeSection>
        <SectionTitle>Spinner</SectionTitle>
        <SizeRow>
          <SizeLabel>Small (16px)</SizeLabel>
          <LoadingIndicator type="spinner" size="small" />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Medium (20px)</SizeLabel>
          <LoadingIndicator type="spinner" size="medium" />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Large (24px)</SizeLabel>
          <LoadingIndicator type="spinner" size="large" />
        </SizeRow>
        <SizeRow>
          <SizeLabel>X-Large (32px)</SizeLabel>
          <LoadingIndicator type="spinner" size="x-large" />
        </SizeRow>
      </SizeSection>
      <SizeSection>
        <SectionTitle>Dots</SectionTitle>
        <SizeRow>
          <SizeLabel>Small</SizeLabel>
          <LoadingIndicator type="dots" size="small" />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Medium</SizeLabel>
          <LoadingIndicator type="dots" size="medium" />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Large</SizeLabel>
          <LoadingIndicator type="dots" size="large" />
        </SizeRow>
        <SizeRow>
          <SizeLabel>X-Large</SizeLabel>
          <LoadingIndicator type="dots" size="x-large" />
        </SizeRow>
      </SizeSection>
    </SizesWrapper>
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var v,A,B;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <ColorWrapper>
      <ColorSection>
        <SectionTitle>Spinner</SectionTitle>
        <ColorRow>
          <LoadingIndicator type="spinner" color="#FF5722" />
          <LoadingIndicator type="spinner" color="#4CAF50" />
          <LoadingIndicator type="spinner" color="#9C27B0" />
        </ColorRow>
      </ColorSection>
      <ColorSection>
        <SectionTitle>Dots</SectionTitle>
        <ColorRow>
          <LoadingIndicator type="dots" color="#FF5722" />
          <LoadingIndicator type="dots" color="#4CAF50" />
          <LoadingIndicator type="dots" color="#9C27B0" />
        </ColorRow>
      </ColorSection>
    </ColorWrapper>
}`,...(B=(A=c.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const J=["Default","Spinner","Dots","Types","Sizes","CustomColor"];export{c as CustomColor,s as Default,a as Dots,l as Sizes,t as Spinner,p as Types,J as __namedExportsOrder,H as default};
