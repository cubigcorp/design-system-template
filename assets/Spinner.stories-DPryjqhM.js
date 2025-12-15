import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as o,m as y}from"./styled-components.browser.esm-C8ZrTVSh.js";import{c as f}from"./color-CiwAFuFb.js";import"./iframe-BWSb8WuG.js";const w={small:16,medium:24,large:32},s=({size:r="medium",color:j,className:h})=>{const C=w[r],b=j||f.blue[500];return e.jsx(v,{className:h,$size:C,$color:b})},L=y`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,v=o.div`
  width: ${({$size:r})=>r}px;
  height: ${({$size:r})=>r}px;
  border: ${({$size:r})=>Math.max(2,r/8)}px solid ${f.gray[200]};
  border-top-color: ${({$color:r})=>r};
  border-radius: 50%;
  animation: ${L} 0.8s linear infinite;
`;s.displayName="Spinner";s.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Components/Spinner",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},color:{control:"color"}}},a={args:{size:"medium"}},i={render:()=>e.jsxs(R,{children:[e.jsxs(l,{children:[e.jsx(t,{children:"Small (16px)"}),e.jsx(s,{size:"small"})]}),e.jsxs(l,{children:[e.jsx(t,{children:"Medium (24px)"}),e.jsx(s,{size:"medium"})]}),e.jsxs(l,{children:[e.jsx(t,{children:"Large (32px)"}),e.jsx(s,{size:"large"})]})]})},n={render:()=>e.jsxs($,{children:[e.jsx(s,{color:"#FF5722"}),e.jsx(s,{color:"#4CAF50"}),e.jsx(s,{color:"#9C27B0"})]})},R=o.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,l=o.div`
  display: flex;
  align-items: center;
  gap: 24px;
`,t=o.span`
  width: 120px;
  font-size: 14px;
  color: #666;
`,$=o.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,x;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <SizesWrapper>
      <SizeRow>
        <SizeLabel>Small (16px)</SizeLabel>
        <Spinner size="small" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>Medium (24px)</SizeLabel>
        <Spinner size="medium" />
      </SizeRow>
      <SizeRow>
        <SizeLabel>Large (32px)</SizeLabel>
        <Spinner size="large" />
      </SizeRow>
    </SizesWrapper>
}`,...(x=(u=i.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var S,z,g;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ColorWrapper>
      <Spinner color="#FF5722" />
      <Spinner color="#4CAF50" />
      <Spinner color="#9C27B0" />
    </ColorWrapper>
}`,...(g=(z=n.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};const q=["Default","Sizes","CustomColor"];export{n as CustomColor,a as Default,i as Sizes,q as __namedExportsOrder,_ as default};
