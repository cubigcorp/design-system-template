import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as a,m as b}from"./styled-components.browser.esm-I1_av-H2.js";import{c as f}from"./color-CiwAFuFb.js";import"./iframe-CWj9sbMl.js";const w={small:16,medium:20,large:24,"x-large":32},r=({size:s="medium",color:j,className:h})=>{const C=w[s],L=j||f.gray[950];return e.jsx(R,{className:h,$size:C,$color:L})},y=b`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,R=a.div`
  width: ${({$size:s})=>s}px;
  height: ${({$size:s})=>s}px;
  border: ${({$size:s})=>Math.max(2,s/8)}px solid ${f.gray[200]};
  border-top-color: ${({$color:s})=>s};
  border-radius: 50%;
  animation: ${y} 0.8s linear infinite;
`;r.displayName="Spinner";r.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "x-large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"x-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/Spinner",component:r,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large","x-large"]},color:{control:"color"}}},i={args:{size:"medium"}},o={render:()=>e.jsxs(v,{children:[e.jsxs(l,{children:[e.jsx(t,{children:"Small (16px)"}),e.jsx(r,{size:"small"})]}),e.jsxs(l,{children:[e.jsx(t,{children:"Medium (20px)"}),e.jsx(r,{size:"medium"})]}),e.jsxs(l,{children:[e.jsx(t,{children:"Large (24px)"}),e.jsx(r,{size:"large"})]}),e.jsxs(l,{children:[e.jsx(t,{children:"X-Large (32px)"}),e.jsx(r,{size:"x-large"})]})]})},n={render:()=>e.jsxs($,{children:[e.jsx(r,{color:"#FF5722"}),e.jsx(r,{color:"#4CAF50"}),e.jsx(r,{color:"#9C27B0"})]})},v=a.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,l=a.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,t=a.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`,$=a.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;var p,m,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,x,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(x=o.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var S,z,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ColorWrapper>
      <Spinner color="#FF5722" />
      <Spinner color="#4CAF50" />
      <Spinner color="#9C27B0" />
    </ColorWrapper>
}`,...(g=(z=n.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};const q=["Default","Sizes","CustomColor"];export{n as CustomColor,i as Default,o as Sizes,q as __namedExportsOrder,_ as default};
