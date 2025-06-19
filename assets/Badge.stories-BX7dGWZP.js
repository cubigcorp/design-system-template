import{j as e}from"./jsx-runtime-C521NZrc.js";import{f as Y,l as p,d as Z}from"./fontWeight-DZ4xRVKn.js";import{c as a,b as j}from"./brandColor-CZkv5cbZ.js";import{r as ee}from"./radius-DaoU83SK.js";import{b as s,t as n,n as N,p as B}from"./borderColor-DgvP3RHu.js";import"./iframe-BOAPPjlS.js";const re=Z.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${ee["rounded-2"]};
  font-weight: ${Y[500]};
  white-space: nowrap;

  // 크기 변형
  ${({size:t="medium"})=>{switch(t){case"small":return p`
          padding: 2px 6px;
          height: 20px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `;case"large":return p`
          padding: 4px 8px;
          height: 28px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
        `;default:return p`
          padding: 4px 6px;
          height: 24px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `}}}

  // 색상 변형
  ${({variant:t="primary",type:v="outline"})=>{const i=(()=>{switch(v){case"solid":switch(t){case"primary":return{background:a.gray[50],text:n.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:a.gray[50],text:n.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:a.deeppurple[100],text:j.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:a.green[50],text:B.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:a.red[50],text:N.light["fg-negative-primary"],border:"transparent"};default:return{background:a.gray[50],text:n.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(t){case"primary":return{background:a.gray[950],text:a.common[100],border:"transparent"};case"secondary":return{background:a.gray[800],text:a.common[100],border:"transparent"};case"brand":return{background:a.deeppurple[800],text:a.common[100],border:"transparent"};case"positive":return{background:a.green[600],text:a.common[100],border:"transparent"};case"negative":return{background:a.red[600],text:a.common[100],border:"transparent"};default:return{background:a.gray[950],text:a.common[100],border:"transparent"}}default:switch(t){case"primary":return{background:"transparent",text:n.light["fg-neutral-primary"],border:s.light["color-border-primary"]};case"secondary":return{background:"transparent",text:n.light["fg-neutral-alternative"],border:s.light["color-border-primary"]};case"brand":return{background:"transparent",text:j.light["fg-brand-strong"],border:s.light["color-border-brand"]};case"positive":return{background:"transparent",text:B.light["fg-positive-primary"],border:s.light["color-border-positive"]};case"negative":return{background:"transparent",text:N.light["fg-negative-primary"],border:a.red[500]};default:return{background:"transparent",text:n.light["fg-neutral-primary"],border:s.light["color-border-primary"]}}}})();return p`
      background-color: ${i.background};
      color: ${i.text};
      border: 1px solid ${i.border};
    `}}
`,r=({variant:t="primary",type:v="outline",size:b="medium",text:i,leadingIcon:h,trailingIcon:f,className:X})=>e.jsxs(re,{variant:t,type:v,size:b,className:X,children:[h&&e.jsx("span",{className:"icon",children:h}),e.jsx("span",{children:i}),f&&e.jsx("span",{className:"icon",children:f})]});r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid" | "strong"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Badge는 상태, 카테고리, 라벨 등을 표시하는 작은 컴포넌트입니다. Outline, Solid, Strong 세 가지 타입을 지원합니다."}}},argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","brand","positive","negative"]},type:{control:{type:"radio"},options:["outline","solid","strong"]},size:{control:{type:"radio"},options:["small","medium","large"]}}},m={args:{variant:"primary",type:"outline",size:"medium",text:"텍스트"}},o={args:{variant:"primary",type:"outline",size:"medium",text:"텍스트"}},c={args:{...o.args,leadingIcon:e.jsx("span",{children:"🚀"})}},d={args:{variant:"primary",type:"solid",size:"medium",text:"텍스트"}},g={args:{...d.args,leadingIcon:e.jsx("span",{children:"🚀"})}},l={args:{variant:"primary",type:"strong",size:"medium",text:"텍스트"}},x={args:{...l.args,leadingIcon:e.jsx("span",{children:"🚀"})}},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Outline Type"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",text:"Primary"}),e.jsx(r,{variant:"secondary",type:"outline",text:"Secondary"}),e.jsx(r,{variant:"brand",type:"outline",text:"Brand"}),e.jsx(r,{variant:"positive",type:"outline",text:"Positive"}),e.jsx(r,{variant:"negative",type:"outline",text:"Negative"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Solid Type"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",type:"solid",text:"Primary"}),e.jsx(r,{variant:"secondary",type:"solid",text:"Secondary"}),e.jsx(r,{variant:"brand",type:"solid",text:"Brand"}),e.jsx(r,{variant:"positive",type:"solid",text:"Positive"}),e.jsx(r,{variant:"negative",type:"solid",text:"Negative"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Strong Type"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",type:"strong",text:"Primary"}),e.jsx(r,{variant:"secondary",type:"strong",text:"Secondary"}),e.jsx(r,{variant:"brand",type:"strong",text:"Brand"}),e.jsx(r,{variant:"positive",type:"strong",text:"Positive"}),e.jsx(r,{variant:"negative",type:"strong",text:"Negative"})]})]})]})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small (20px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",size:"small",text:"텍스트"}),e.jsx(r,{variant:"primary",type:"solid",size:"small",text:"텍스트"}),e.jsx(r,{variant:"primary",type:"strong",size:"small",text:"텍스트"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium (24px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",size:"medium",text:"텍스트"}),e.jsx(r,{variant:"primary",type:"solid",size:"medium",text:"텍스트"}),e.jsx(r,{variant:"primary",type:"strong",size:"medium",text:"텍스트"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large (28px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",size:"large",text:"텍스트"}),e.jsx(r,{variant:"primary",type:"solid",size:"large",text:"텍스트"}),e.jsx(r,{variant:"primary",type:"strong",size:"large",text:"텍스트"})]})]})]})};var S,z,w;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    type: "outline",
    size: "medium",
    text: "텍스트"
  }
}`,...(w=(z=m.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,T,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    type: "outline",
    size: "medium",
    text: "텍스트"
  }
}`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var P,C,O;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(O=(C=c.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var R,q,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    type: "solid",
    size: "medium",
    text: "텍스트"
  }
}`,...(W=(q=d.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var $,V,A;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Solid.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(A=(V=g.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,D,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    type: "strong",
    size: "medium",
    text: "텍스트"
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,M,F;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    ...Strong.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(F=(M=x.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var G,H,J;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-8">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Outline Type</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Badge variant="primary" type="outline" text="Primary" />\r
          <Badge variant="secondary" type="outline" text="Secondary" />\r
          <Badge variant="brand" type="outline" text="Brand" />\r
          <Badge variant="positive" type="outline" text="Positive" />\r
          <Badge variant="negative" type="outline" text="Negative" />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Solid Type</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Badge variant="primary" type="solid" text="Primary" />\r
          <Badge variant="secondary" type="solid" text="Secondary" />\r
          <Badge variant="brand" type="solid" text="Brand" />\r
          <Badge variant="positive" type="solid" text="Positive" />\r
          <Badge variant="negative" type="solid" text="Negative" />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Strong Type</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Badge variant="primary" type="strong" text="Primary" />\r
          <Badge variant="secondary" type="strong" text="Secondary" />\r
          <Badge variant="brand" type="strong" text="Brand" />\r
          <Badge variant="positive" type="strong" text="Positive" />\r
          <Badge variant="negative" type="strong" text="Negative" />\r
        </div>\r
      </div>\r
    </div>
}`,...(J=(H=u.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Small (20px)</h3>\r
        <div className="flex gap-4 items-center flex-wrap">\r
          <Badge variant="primary" type="outline" size="small" text="텍스트" />\r
          <Badge variant="primary" type="solid" size="small" text="텍스트" />\r
          <Badge variant="primary" type="strong" size="small" text="텍스트" />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Medium (24px)</h3>\r
        <div className="flex gap-4 items-center flex-wrap">\r
          <Badge variant="primary" type="outline" size="medium" text="텍스트" />\r
          <Badge variant="primary" type="solid" size="medium" text="텍스트" />\r
          <Badge variant="primary" type="strong" size="medium" text="텍스트" />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Large (28px)</h3>\r
        <div className="flex gap-4 items-center flex-wrap">\r
          <Badge variant="primary" type="outline" size="large" text="텍스트" />\r
          <Badge variant="primary" type="solid" size="large" text="텍스트" />\r
          <Badge variant="primary" type="strong" size="large" text="텍스트" />\r
        </div>\r
      </div>\r
    </div>
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const le=["Default","Outline","OutlineWithIcon","Solid","SolidWithIcon","Strong","StrongWithIcon","AllVariants","AllSizes"];export{y as AllSizes,u as AllVariants,m as Default,o as Outline,c as OutlineWithIcon,d as Solid,g as SolidWithIcon,l as Strong,x as StrongWithIcon,le as __namedExportsOrder,de as default};
