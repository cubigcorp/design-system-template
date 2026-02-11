import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as i,m as G}from"./styled-components.browser.esm-DPRVC5T4.js";import{c as f}from"./color-CiwAFuFb.js";import"./iframe-D0DrdOha.js";import"./preload-helper-eJNa_G2e.js";const K={small:16,medium:20,large:24,"x-large":32},Q={small:4,medium:6,large:8,"x-large":10},n=({type:r="spinner",size:j="medium",color:H,className:h})=>{const t=H||f.gray[950];if(r==="dots"){const l=Q[j],J=Math.max(4,l/2);return e.jsxs(ie,{className:h,$gap:J,children:[e.jsx(z,{$size:l,$color:t,$delay:"0s"}),e.jsx(z,{$size:l,$color:t,$delay:"0.15s"}),e.jsx(z,{$size:l,$color:t,$delay:"0.3s"})]})}const o=K[j],y=Math.max(2,o/8),u=(o-y)/2,L=2*Math.PI*u;return e.jsx(Z,{className:h,$size:o,children:e.jsxs(ee,{viewBox:`0 0 ${o} ${o}`,children:[e.jsx("circle",{cx:o/2,cy:o/2,r:u,fill:"none",stroke:f.gray[200],strokeWidth:y}),e.jsx(ne,{cx:o/2,cy:o/2,r:u,fill:"none",stroke:t,strokeWidth:y,strokeLinecap:"round",strokeDasharray:`${L*.25} ${L*.75}`})]})})},U=G`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,Y=G`
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`,Z=i.div`
  width: ${({$size:r})=>r}px;
  height: ${({$size:r})=>r}px;
`,ee=i.svg`
  width: 100%;
  height: 100%;
  animation: ${U} 0.8s linear infinite;
`,ne=i.circle``,ie=i.div`
  display: flex;
  align-items: center;
  gap: ${({$gap:r})=>r}px;
`,z=i.div`
  width: ${({$size:r})=>r}px;
  height: ${({$size:r})=>r}px;
  border-radius: 50%;
  background-color: ${({$color:r})=>r};
  animation: ${Y} 1s ease-in-out infinite;
  animation-delay: ${({$delay:r})=>r};
`;n.displayName="LoadingIndicator";n.__docgenInfo={description:"",methods:[],displayName:"LoadingIndicator",props:{type:{required:!1,tsType:{name:"union",raw:"'spinner' | 'dots'",elements:[{name:"literal",value:"'spinner'"},{name:"literal",value:"'dots'"}]},description:"",defaultValue:{value:"'spinner'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'x-large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'x-large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Components/LoadingIndicator",component:n,parameters:{layout:"centered"},argTypes:{type:{control:"select",options:["spinner","dots"]},size:{control:"select",options:["small","medium","large","x-large"]},color:{control:"color"}}},p={args:{type:"spinner",size:"medium"}},c={args:{type:"spinner",size:"medium"}},d={args:{type:"dots",size:"medium"}},m={render:()=>e.jsxs(re,{children:[e.jsxs(w,{children:[e.jsx(T,{children:"Spinner"}),e.jsx(n,{type:"spinner"})]}),e.jsxs(w,{children:[e.jsx(T,{children:"Dots"}),e.jsx(n,{type:"dots"})]})]})},x={render:()=>e.jsxs(oe,{children:[e.jsxs(C,{children:[e.jsx(S,{children:"Spinner"}),e.jsxs(s,{children:[e.jsx(a,{children:"Small (16px)"}),e.jsx(n,{type:"spinner",size:"small"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"Medium (20px)"}),e.jsx(n,{type:"spinner",size:"medium"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"Large (24px)"}),e.jsx(n,{type:"spinner",size:"large"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"X-Large (32px)"}),e.jsx(n,{type:"spinner",size:"x-large"})]})]}),e.jsxs(C,{children:[e.jsx(S,{children:"Dots"}),e.jsxs(s,{children:[e.jsx(a,{children:"Small"}),e.jsx(n,{type:"dots",size:"small"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"Medium"}),e.jsx(n,{type:"dots",size:"medium"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"Large"}),e.jsx(n,{type:"dots",size:"large"})]}),e.jsxs(s,{children:[e.jsx(a,{children:"X-Large"}),e.jsx(n,{type:"dots",size:"x-large"})]})]})]})},g={render:()=>e.jsxs(se,{children:[e.jsxs(R,{children:[e.jsx(S,{children:"Spinner"}),e.jsxs(b,{children:[e.jsx(n,{type:"spinner",color:"#FF5722"}),e.jsx(n,{type:"spinner",color:"#4CAF50"}),e.jsx(n,{type:"spinner",color:"#9C27B0"})]})]}),e.jsxs(R,{children:[e.jsx(S,{children:"Dots"}),e.jsxs(b,{children:[e.jsx(n,{type:"dots",color:"#FF5722"}),e.jsx(n,{type:"dots",color:"#4CAF50"}),e.jsx(n,{type:"dots",color:"#9C27B0"})]})]})]})},re=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,w=i.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,T=i.span`
  width: 80px;
  font-size: 14px;
  color: #666;
`,oe=i.div`
  display: flex;
  gap: 48px;
`,C=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,S=i.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
`,s=i.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,a=i.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`,se=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,R=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,b=i.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;var $,v,I;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'spinner',
    size: 'medium'
  }
}`,...(I=(v=p.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var D,F,W;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'spinner',
    size: 'medium'
  }
}`,...(W=(F=c.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var M,k,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'dots',
    size: 'medium'
  }
}`,...(B=(k=d.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var q,A,X;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <TypesWrapper>
      <TypeRow>
        <TypeLabel>Spinner</TypeLabel>
        <LoadingIndicator type='spinner' />
      </TypeRow>
      <TypeRow>
        <TypeLabel>Dots</TypeLabel>
        <LoadingIndicator type='dots' />
      </TypeRow>
    </TypesWrapper>
}`,...(X=(A=m.parameters)==null?void 0:A.docs)==null?void 0:X.source}}};var _,E,N;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <SizesWrapper>
      <SizeSection>
        <SectionTitle>Spinner</SectionTitle>
        <SizeRow>
          <SizeLabel>Small (16px)</SizeLabel>
          <LoadingIndicator type='spinner' size='small' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Medium (20px)</SizeLabel>
          <LoadingIndicator type='spinner' size='medium' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Large (24px)</SizeLabel>
          <LoadingIndicator type='spinner' size='large' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>X-Large (32px)</SizeLabel>
          <LoadingIndicator type='spinner' size='x-large' />
        </SizeRow>
      </SizeSection>
      <SizeSection>
        <SectionTitle>Dots</SectionTitle>
        <SizeRow>
          <SizeLabel>Small</SizeLabel>
          <LoadingIndicator type='dots' size='small' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Medium</SizeLabel>
          <LoadingIndicator type='dots' size='medium' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>Large</SizeLabel>
          <LoadingIndicator type='dots' size='large' />
        </SizeRow>
        <SizeRow>
          <SizeLabel>X-Large</SizeLabel>
          <LoadingIndicator type='dots' size='x-large' />
        </SizeRow>
      </SizeSection>
    </SizesWrapper>
}`,...(N=(E=x.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var V,O,P;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <ColorWrapper>
      <ColorSection>
        <SectionTitle>Spinner</SectionTitle>
        <ColorRow>
          <LoadingIndicator type='spinner' color='#FF5722' />
          <LoadingIndicator type='spinner' color='#4CAF50' />
          <LoadingIndicator type='spinner' color='#9C27B0' />
        </ColorRow>
      </ColorSection>
      <ColorSection>
        <SectionTitle>Dots</SectionTitle>
        <ColorRow>
          <LoadingIndicator type='dots' color='#FF5722' />
          <LoadingIndicator type='dots' color='#4CAF50' />
          <LoadingIndicator type='dots' color='#9C27B0' />
        </ColorRow>
      </ColorSection>
    </ColorWrapper>
}`,...(P=(O=g.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const me=["Default","Spinner","Dots","Types","Sizes","CustomColor"];export{g as CustomColor,p as Default,d as Dots,x as Sizes,c as Spinner,m as Types,me as __namedExportsOrder,de as default};
