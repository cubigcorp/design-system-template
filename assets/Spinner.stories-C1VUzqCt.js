import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as n,m as R}from"./styled-components.browser.esm-CPJhxV7n.js";import{c as x}from"./color-CiwAFuFb.js";import"./iframe-L1CEGzuW.js";const b={small:16,medium:20,large:24,"x-large":32},r=({size:i="medium",color:C,className:L})=>{const s=b[i],v=C||x.gray[950],p=Math.max(2,s/8),m=(s-p)/2,d=2*Math.PI*m;return e.jsx($,{className:L,$size:s,children:e.jsxs(F,{viewBox:`0 0 ${s} ${s}`,children:[e.jsx("circle",{cx:s/2,cy:s/2,r:m,fill:"none",stroke:x.gray[200],strokeWidth:p}),e.jsx(k,{cx:s/2,cy:s/2,r:m,fill:"none",stroke:v,strokeWidth:p,strokeLinecap:"round",strokeDasharray:`${d*.25} ${d*.75}`})]})})},W=R`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,$=n.div`
  width: ${({$size:i})=>i}px;
  height: ${({$size:i})=>i}px;
`,F=n.svg`
  width: 100%;
  height: 100%;
  animation: ${W} 0.8s linear infinite;
`,k=n.circle``;r.displayName="Spinner";r.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "x-large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"x-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Spinner",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large","x-large"]},color:{control:"color"}}},a={args:{size:"medium"}},o={render:()=>e.jsxs(M,{children:[e.jsxs(t,{children:[e.jsx(c,{children:"Small (16px)"}),e.jsx(r,{size:"small"})]}),e.jsxs(t,{children:[e.jsx(c,{children:"Medium (20px)"}),e.jsx(r,{size:"medium"})]}),e.jsxs(t,{children:[e.jsx(c,{children:"Large (24px)"}),e.jsx(r,{size:"large"})]}),e.jsxs(t,{children:[e.jsx(c,{children:"X-Large (32px)"}),e.jsx(r,{size:"x-large"})]})]})},l={render:()=>e.jsxs(T,{children:[e.jsx(r,{color:"#FF5722"}),e.jsx(r,{color:"#4CAF50"}),e.jsx(r,{color:"#9C27B0"})]})},M=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,t=n.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,c=n.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`,T=n.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;var u,S,z;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(z=(S=a.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var g,f,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <SizesWrapper>
      <SizeRow>
        <SizeLabel>Small (16px)</SizeLabel>
        <Spinner size="small" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>Medium (20px)</SizeLabel>
        <Spinner size="medium" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>Large (24px)</SizeLabel>
        <Spinner size="large" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>X-Large (32px)</SizeLabel>
        <Spinner size="x-large" />
      </SizeRow>
    </SizesWrapper>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,y,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ColorWrapper>
      <Spinner color="#FF5722" />
      <Spinner color="#4CAF50" />
      <Spinner color="#9C27B0" />
    </ColorWrapper>
}`,...(w=(y=l.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const A=["Default","Sizes","CustomColor"];export{l as CustomColor,a as Default,o as Sizes,A as __namedExportsOrder,N as default};
