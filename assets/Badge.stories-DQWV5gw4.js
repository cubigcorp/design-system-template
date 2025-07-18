import{j as e}from"./jsx-runtime-65VHXKlp.js";import{l as p,d as Z}from"./styled-components.browser.esm-BeIk-kho.js";import{c as n}from"./color-CMFzNX_O.js";import{r as ee}from"./radius-DaoU83SK.js";import{f as re}from"./fontWeight-DlyBHknl.js";import{b as s,t}from"./borderColor-C1c8KEhD.js";import{b as B}from"./brandColor-OMV9mLOG.js";import{n as j,p as N}from"./negativeColor-vAhOVlFC.js";import"./iframe-BAAfS70S.js";const ae=Z.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${ee["rounded-2"]};
  font-weight: ${re[500]};
  white-space: nowrap;

  // 크기 변형
  ${({size:a="medium"})=>{switch(a){case"small":return p`
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
  ${({variant:a="primary",type:x="outline"})=>{const i=(()=>{switch(x){case"solid":switch(a){case"primary":return{background:n.gray[50],text:t.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:n.gray[50],text:t.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:n.deeppurple[100],text:B.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:n.green[50],text:N.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:n.red[50],text:j.light["fg-negative-primary"],border:"transparent"};default:return{background:n.gray[50],text:t.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(a){case"primary":return{background:n.gray[950],text:n.common[100],border:"transparent"};case"secondary":return{background:n.gray[800],text:n.common[100],border:"transparent"};case"brand":return{background:n.deeppurple[800],text:n.common[100],border:"transparent"};case"positive":return{background:n.green[600],text:n.common[100],border:"transparent"};case"negative":return{background:n.red[600],text:n.common[100],border:"transparent"};default:return{background:n.gray[950],text:n.common[100],border:"transparent"}}default:switch(a){case"primary":return{background:"transparent",text:t.light["fg-neutral-primary"],border:s.light["color-border-primary"]};case"secondary":return{background:"transparent",text:t.light["fg-neutral-alternative"],border:s.light["color-border-primary"]};case"brand":return{background:"transparent",text:B.light["fg-brand-strong"],border:s.light["color-border-brand"]};case"positive":return{background:"transparent",text:N.light["fg-positive-primary"],border:s.light["color-border-positive"]};case"negative":return{background:"transparent",text:j.light["fg-negative-primary"],border:n.red[500]};default:return{background:"transparent",text:t.light["fg-neutral-primary"],border:s.light["color-border-primary"]}}}})();return p`
      background-color: ${i.background};
      color: ${i.text};
      border: 1px solid ${i.border};
    `}}
`,r=({variant:a="primary",type:x="outline",size:h="medium",text:i,children:X,leadingIcon:b,trailingIcon:f,className:Y})=>e.jsxs(ae,{variant:a,type:x,size:h,className:Y,children:[b&&e.jsx("span",{className:"icon",children:b}),e.jsx("span",{children:X||i}),f&&e.jsx("span",{className:"icon",children:f})]});r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid" | "strong"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'},{name:"literal",value:'"strong"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const me={title:"Components/Badge",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Badge는 상태, 카테고리, 라벨 등을 표시하는 작은 컴포넌트입니다. Outline, Solid, Strong 세 가지 타입을 지원합니다."}}},argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","brand","positive","negative"]},type:{control:{type:"radio"},options:["outline","solid","strong"]},size:{control:{type:"radio"},options:["small","medium","large"]}}},c={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{variant:"primary",type:"outline",size:"medium"}},d={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{variant:"primary",type:"outline",size:"medium"}},m={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{...d.args,leadingIcon:e.jsx("span",{children:"🚀"})}},o={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{variant:"primary",type:"solid",size:"medium"}},g={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{...o.args,leadingIcon:e.jsx("span",{children:"🚀"})}},l={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{variant:"primary",type:"strong",size:"medium"}},u={render:a=>e.jsx(r,{...a,children:"텍스트"}),args:{...l.args,leadingIcon:e.jsx("span",{children:"🚀"})}},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Outline Type"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",children:"Primary"}),e.jsx(r,{variant:"secondary",type:"outline",children:"Secondary"}),e.jsx(r,{variant:"brand",type:"outline",children:"Brand"}),e.jsx(r,{variant:"positive",type:"outline",children:"Positive"}),e.jsx(r,{variant:"negative",type:"outline",children:"Negative"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Solid Type"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",type:"solid",children:"Primary"}),e.jsx(r,{variant:"secondary",type:"solid",children:"Secondary"}),e.jsx(r,{variant:"brand",type:"solid",children:"Brand"}),e.jsx(r,{variant:"positive",type:"solid",children:"Positive"}),e.jsx(r,{variant:"negative",type:"solid",children:"Negative"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Strong Type"}),e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"primary",type:"strong",children:"Primary"}),e.jsx(r,{variant:"secondary",type:"strong",children:"Secondary"}),e.jsx(r,{variant:"brand",type:"strong",children:"Brand"}),e.jsx(r,{variant:"positive",type:"strong",children:"Positive"}),e.jsx(r,{variant:"negative",type:"strong",children:"Negative"})]})]})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Small (20px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",size:"small",children:"텍스트"}),e.jsx(r,{variant:"primary",type:"solid",size:"small",children:"텍스트"}),e.jsx(r,{variant:"primary",type:"strong",size:"small",children:"텍스트"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Medium (24px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",size:"medium",children:"텍스트"}),e.jsx(r,{variant:"primary",type:"solid",size:"medium",children:"텍스트"}),e.jsx(r,{variant:"primary",type:"strong",size:"medium",children:"텍스트"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Large (28px)"}),e.jsxs("div",{className:"flex gap-4 items-center flex-wrap",children:[e.jsx(r,{variant:"primary",type:"outline",size:"large",children:"텍스트"}),e.jsx(r,{variant:"primary",type:"solid",size:"large",children:"텍스트"}),e.jsx(r,{variant:"primary",type:"strong",size:"large",children:"텍스트"})]})]})]})};var S,z,w;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "outline",
    size: "medium"
  }
}`,...(w=(z=c.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var k,T,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "outline",
    size: "medium"
  }
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var R,P,C;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(C=(P=m.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var O,q,W;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "solid",
    size: "medium"
  }
}`,...(W=(q=o.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var $,V,A;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Solid.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(A=(V=g.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,D,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "strong",
    size: "medium"
  }
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var L,M,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Strong.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var G,H,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-8">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Outline Type</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Badge variant="primary" type="outline">\r
            Primary\r
          </Badge>\r
          <Badge variant="secondary" type="outline">\r
            Secondary\r
          </Badge>\r
          <Badge variant="brand" type="outline">\r
            Brand\r
          </Badge>\r
          <Badge variant="positive" type="outline">\r
            Positive\r
          </Badge>\r
          <Badge variant="negative" type="outline">\r
            Negative\r
          </Badge>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Solid Type</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Badge variant="primary" type="solid">\r
            Primary\r
          </Badge>\r
          <Badge variant="secondary" type="solid">\r
            Secondary\r
          </Badge>\r
          <Badge variant="brand" type="solid">\r
            Brand\r
          </Badge>\r
          <Badge variant="positive" type="solid">\r
            Positive\r
          </Badge>\r
          <Badge variant="negative" type="solid">\r
            Negative\r
          </Badge>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Strong Type</h3>\r
        <div className="flex gap-4 flex-wrap">\r
          <Badge variant="primary" type="strong">\r
            Primary\r
          </Badge>\r
          <Badge variant="secondary" type="strong">\r
            Secondary\r
          </Badge>\r
          <Badge variant="brand" type="strong">\r
            Brand\r
          </Badge>\r
          <Badge variant="positive" type="strong">\r
            Positive\r
          </Badge>\r
          <Badge variant="negative" type="strong">\r
            Negative\r
          </Badge>\r
        </div>\r
      </div>\r
    </div>
}`,...(J=(H=y.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Small (20px)</h3>\r
        <div className="flex gap-4 items-center flex-wrap">\r
          <Badge variant="primary" type="outline" size="small">\r
            텍스트\r
          </Badge>\r
          <Badge variant="primary" type="solid" size="small">\r
            텍스트\r
          </Badge>\r
          <Badge variant="primary" type="strong" size="small">\r
            텍스트\r
          </Badge>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Medium (24px)</h3>\r
        <div className="flex gap-4 items-center flex-wrap">\r
          <Badge variant="primary" type="outline" size="medium">\r
            텍스트\r
          </Badge>\r
          <Badge variant="primary" type="solid" size="medium">\r
            텍스트\r
          </Badge>\r
          <Badge variant="primary" type="strong" size="medium">\r
            텍스트\r
          </Badge>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h3 className="text-lg font-semibold mb-4">Large (28px)</h3>\r
        <div className="flex gap-4 items-center flex-wrap">\r
          <Badge variant="primary" type="outline" size="large">\r
            텍스트\r
          </Badge>\r
          <Badge variant="primary" type="solid" size="large">\r
            텍스트\r
          </Badge>\r
          <Badge variant="primary" type="strong" size="large">\r
            텍스트\r
          </Badge>\r
        </div>\r
      </div>\r
    </div>
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const ge=["Default","Outline","OutlineWithIcon","Solid","SolidWithIcon","Strong","StrongWithIcon","AllVariants","AllSizes"];export{v as AllSizes,y as AllVariants,c as Default,d as Outline,m as OutlineWithIcon,o as Solid,g as SolidWithIcon,l as Strong,u as StrongWithIcon,ge as __namedExportsOrder,me as default};
