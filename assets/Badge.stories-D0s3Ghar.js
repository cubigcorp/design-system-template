import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as m,c as s}from"./styled-components.browser.esm-o0t8qbnT.js";import{b as c}from"./borderColor-C_RHITEf.js";import{b as O}from"./brandColor-OQPP65_V.js";import{c as a}from"./color-CiwAFuFb.js";import{f as fe}from"./fontWeight-CRwBdwgF.js";import{n as N,p as P}from"./negativeColor-DPOOrHeE.js";import{r as V}from"./radius-DaoU83SK.js";import{t as d}from"./textColor-DLZeZODc.js";import{S as w}from"./icon_document_outline_16-BJOU3ivG.js";import"./iframe-D0ynm1mK.js";import"./preload-helper-eJNa_G2e.js";const z={light:{"fg-cautionary-primary":a.yellow[400],"fg-cautionary-strong":a.yellow[900],"bg-cautionary-primary-default":a.yellow[400],"bg-cautionary-primary-pressed":a.yellow[500]},dark:{"fg-cautionary-primary":a.yellow[400],"fg-cautionary-strong":a.yellow[50],"bg-cautionary-primary-default":a.yellow[400],"bg-cautionary-primary-pressed":a.yellow[300]}},q={light:{"fg-info-primary":a.blue[500],"fg-info-strong":a.blue[900],"bg-info-primary-assistive":a.blue[50],"bg-info-primary-default":a.blue[500],"bg-info-primary-pressed":a.blue[600]},dark:{"fg-info-primary":a.blue[500],"fg-info-strong":a.blue[50],"bg-info-primary-assistive":a.blue[900],"bg-info-primary-default":a.blue[500],"bg-info-primary-pressed":a.blue[400]}},he=s.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${({$radius:r})=>r==="large"?V["rounded-full"]:V["rounded-2"]};
  font-weight: ${fe[500]};
  white-space: nowrap;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;

      path {
        fill: currentColor;
      }
    }
  }

  // 크기 변형
  ${({size:r="medium"})=>{switch(r){case"small":return m`
          padding: 2px 6px;
          height: 20px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `;case"large":return m`
          padding: 4px 8px;
          height: 28px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
        `;default:return m`
          padding: 4px 6px;
          height: 24px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `}}}

  // 색상 변형
  ${({variant:r="primary",type:S="outline"})=>{const l=(()=>{switch(S){case"solid":switch(r){case"primary":return{background:a.gray[100],text:d.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:a.gray[100],text:d.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:a.deeppurple[100],text:O.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:a.green[50],text:P.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:a.red[50],text:N.light["fg-negative-primary"],border:"transparent"};case"info":return{background:a.blue[50],text:q.light["fg-info-primary"],border:"transparent"};case"cautionary":return{background:a.yellow[50],text:z.light["fg-cautionary-primary"],border:"transparent"};default:return{background:a.gray[50],text:d.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(r){case"primary":return{background:a.gray[950],text:a.common[100],border:"transparent"};case"secondary":return{background:a.gray[800],text:a.common[100],border:"transparent"};case"brand":return{background:a.deeppurple[800],text:a.common[100],border:"transparent"};case"positive":return{background:a.green[600],text:a.common[100],border:"transparent"};case"negative":return{background:a.red[600],text:a.common[100],border:"transparent"};case"info":return{background:a.blue[600],text:a.common[100],border:"transparent"};case"cautionary":return{background:z.light["bg-cautionary-primary-default"],text:a.common[100],border:"transparent"};default:return{background:a.gray[950],text:a.common[100],border:"transparent"}}default:switch(r){case"primary":return{background:"transparent",text:d.light["fg-neutral-primary"],border:c.light["color-border-primary"]};case"secondary":return{background:"transparent",text:d.light["fg-neutral-alternative"],border:c.light["color-border-primary"]};case"brand":return{background:"transparent",text:O.light["fg-brand-strong"],border:c.light["color-border-brand"]};case"positive":return{background:"transparent",text:P.light["fg-positive-primary"],border:c.light["color-border-positive"]};case"negative":return{background:"transparent",text:N.light["fg-negative-primary"],border:a.red[500]};case"info":return{background:"transparent",text:q.light["fg-info-primary"],border:a.blue[500]};case"cautionary":return{background:"transparent",text:z.light["fg-cautionary-primary"],border:a.yellow[400]};default:return{background:"transparent",text:d.light["fg-neutral-primary"],border:c.light["color-border-primary"]}}}})();return m`
      background-color: ${l.background};
      color: ${l.text};
      border: 1px solid ${l.border};
    `}}
`,n=({variant:r="primary",type:S="outline",size:T="medium",radius:l="small",text:ye,children:ve,leadingIcon:R,trailingIcon:k,className:xe})=>e.jsxs(he,{variant:r,type:S,size:T,$radius:l,className:xe,children:[R&&e.jsx("span",{className:"icon",children:R}),e.jsx("span",{children:ve||ye}),k&&e.jsx("span",{className:"icon",children:k})]});n.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'brand'
| 'positive'
| 'negative'
| 'info'
| 'cautionary'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'info'"},{name:"literal",value:"'cautionary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'outline' | 'solid' | 'strong'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'strong'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Pe={title:"Components/Badge",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Badge는 상태, 카테고리, 라벨 등을 표시하는 작은 컴포넌트입니다. Outline, Solid, Strong 세 가지 타입을 지원합니다."}}},argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","brand","positive","negative","info","cautionary"]},type:{control:{type:"radio"},options:["outline","solid","strong"]},size:{control:{type:"radio"},options:["small","medium","large"]}}},y={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{variant:"primary",type:"outline",size:"medium"}},g={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{variant:"primary",type:"outline",size:"medium"}},v={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{...g.args,leadingIcon:e.jsx(w,{})}},p={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{variant:"primary",type:"solid",size:"medium"}},x={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{...p.args,leadingIcon:e.jsx(w,{})}},u={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{variant:"primary",type:"strong",size:"medium"}},f={render:r=>e.jsx(n,{...r,children:"텍스트"}),args:{...u.args,leadingIcon:e.jsx(w,{})}},h={parameters:{controls:{disable:!0}},render:()=>e.jsxs(Be,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Outline Type"}),e.jsxs(o,{children:[e.jsx(n,{variant:"primary",type:"outline",children:"Primary"}),e.jsx(n,{variant:"secondary",type:"outline",children:"Secondary"}),e.jsx(n,{variant:"brand",type:"outline",children:"Brand"}),e.jsx(n,{variant:"positive",type:"outline",children:"Positive"}),e.jsx(n,{variant:"negative",type:"outline",children:"Negative"}),e.jsx(n,{variant:"info",type:"outline",children:"Info"}),e.jsx(n,{variant:"cautionary",type:"outline",children:"Cautionary"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Solid Type"}),e.jsxs(o,{children:[e.jsx(n,{variant:"primary",type:"solid",children:"Primary"}),e.jsx(n,{variant:"secondary",type:"solid",children:"Secondary"}),e.jsx(n,{variant:"brand",type:"solid",children:"Brand"}),e.jsx(n,{variant:"positive",type:"solid",children:"Positive"}),e.jsx(n,{variant:"negative",type:"solid",children:"Negative"}),e.jsx(n,{variant:"info",type:"solid",children:"Info"}),e.jsx(n,{variant:"cautionary",type:"solid",children:"Cautionary"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Strong Type"}),e.jsxs(o,{children:[e.jsx(n,{variant:"primary",type:"strong",children:"Primary"}),e.jsx(n,{variant:"secondary",type:"strong",children:"Secondary"}),e.jsx(n,{variant:"brand",type:"strong",children:"Brand"}),e.jsx(n,{variant:"positive",type:"strong",children:"Positive"}),e.jsx(n,{variant:"negative",type:"strong",children:"Negative"}),e.jsx(n,{variant:"info",type:"strong",children:"Info"}),e.jsx(n,{variant:"cautionary",type:"strong",children:"Cautionary"})]})]})]})},B={parameters:{controls:{disable:!0}},render:()=>e.jsxs(I,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Info - Outline"}),e.jsxs(o,{children:[e.jsx(n,{variant:"info",type:"outline",size:"small",children:"Info"}),e.jsx(n,{variant:"info",type:"outline",size:"medium",children:"Info"}),e.jsx(n,{variant:"info",type:"outline",size:"large",children:"Info"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Info - Solid"}),e.jsxs(o,{children:[e.jsx(n,{variant:"info",type:"solid",size:"small",children:"Info"}),e.jsx(n,{variant:"info",type:"solid",size:"medium",children:"Info"}),e.jsx(n,{variant:"info",type:"solid",size:"large",children:"Info"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Info - Strong"}),e.jsxs(o,{children:[e.jsx(n,{variant:"info",type:"strong",size:"small",children:"Info"}),e.jsx(n,{variant:"info",type:"strong",size:"medium",children:"Info"}),e.jsx(n,{variant:"info",type:"strong",size:"large",children:"Info"})]})]})]})},b={parameters:{controls:{disable:!0}},render:()=>e.jsxs(I,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Cautionary - Outline"}),e.jsxs(o,{children:[e.jsx(n,{variant:"cautionary",type:"outline",size:"small",children:"Cautionary"}),e.jsx(n,{variant:"cautionary",type:"outline",size:"medium",children:"Cautionary"}),e.jsx(n,{variant:"cautionary",type:"outline",size:"large",children:"Cautionary"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Cautionary - Solid"}),e.jsxs(o,{children:[e.jsx(n,{variant:"cautionary",type:"solid",size:"small",children:"Cautionary"}),e.jsx(n,{variant:"cautionary",type:"solid",size:"medium",children:"Cautionary"}),e.jsx(n,{variant:"cautionary",type:"solid",size:"large",children:"Cautionary"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Cautionary - Strong"}),e.jsxs(o,{children:[e.jsx(n,{variant:"cautionary",type:"strong",size:"small",children:"Cautionary"}),e.jsx(n,{variant:"cautionary",type:"strong",size:"medium",children:"Cautionary"}),e.jsx(n,{variant:"cautionary",type:"strong",size:"large",children:"Cautionary"})]})]})]})},j={parameters:{controls:{disable:!0}},render:()=>e.jsxs(I,{children:[e.jsxs(i,{children:[e.jsx(t,{children:"Small (20px)"}),e.jsxs(C,{children:[e.jsx(n,{variant:"primary",type:"outline",size:"small",children:"텍스트"}),e.jsx(n,{variant:"primary",type:"solid",size:"small",children:"텍스트"}),e.jsx(n,{variant:"primary",type:"strong",size:"small",children:"텍스트"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Medium (24px)"}),e.jsxs(C,{children:[e.jsx(n,{variant:"primary",type:"outline",size:"medium",children:"텍스트"}),e.jsx(n,{variant:"primary",type:"solid",size:"medium",children:"텍스트"}),e.jsx(n,{variant:"primary",type:"strong",size:"medium",children:"텍스트"})]})]}),e.jsxs(i,{children:[e.jsx(t,{children:"Large (28px)"}),e.jsxs(C,{children:[e.jsx(n,{variant:"primary",type:"outline",size:"large",children:"텍스트"}),e.jsx(n,{variant:"primary",type:"solid",size:"large",children:"텍스트"}),e.jsx(n,{variant:"primary",type:"strong",size:"large",children:"텍스트"})]})]})]})},Be=s.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,I=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,i=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,t=s.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`,o=s.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`,C=s.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;var $,W,D;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'outline',
    size: 'medium'
  }
}`,...(D=(W=y.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var A,_,E;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'outline',
    size: 'medium'
  }
}`,...(E=(_=g.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var L,M,F;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Outline.args,
    leadingIcon: <IconDocumentOutline16 />
  }
}`,...(F=(M=v.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var G,H,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'solid',
    size: 'medium'
  }
}`,...(J=(H=p.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Solid.args,
    leadingIcon: <IconDocumentOutline16 />
  }
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'strong',
    size: 'medium'
  }
}`,...(Z=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Strong.args,
    leadingIcon: <IconDocumentOutline16 />
  }
}`,...(ae=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var re,ie,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Container>
      <Section>
        <SectionTitle>Outline Type</SectionTitle>
        <BadgeRow>
          <Badge variant='primary' type='outline'>
            Primary
          </Badge>
          <Badge variant='secondary' type='outline'>
            Secondary
          </Badge>
          <Badge variant='brand' type='outline'>
            Brand
          </Badge>
          <Badge variant='positive' type='outline'>
            Positive
          </Badge>
          <Badge variant='negative' type='outline'>
            Negative
          </Badge>
          <Badge variant='info' type='outline'>
            Info
          </Badge>
          <Badge variant='cautionary' type='outline'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Solid Type</SectionTitle>
        <BadgeRow>
          <Badge variant='primary' type='solid'>
            Primary
          </Badge>
          <Badge variant='secondary' type='solid'>
            Secondary
          </Badge>
          <Badge variant='brand' type='solid'>
            Brand
          </Badge>
          <Badge variant='positive' type='solid'>
            Positive
          </Badge>
          <Badge variant='negative' type='solid'>
            Negative
          </Badge>
          <Badge variant='info' type='solid'>
            Info
          </Badge>
          <Badge variant='cautionary' type='solid'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Strong Type</SectionTitle>
        <BadgeRow>
          <Badge variant='primary' type='strong'>
            Primary
          </Badge>
          <Badge variant='secondary' type='strong'>
            Secondary
          </Badge>
          <Badge variant='brand' type='strong'>
            Brand
          </Badge>
          <Badge variant='positive' type='strong'>
            Positive
          </Badge>
          <Badge variant='negative' type='strong'>
            Negative
          </Badge>
          <Badge variant='info' type='strong'>
            Info
          </Badge>
          <Badge variant='cautionary' type='strong'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>
    </Container>
}`,...(te=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var oe,se,de;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SmallContainer>
      <Section>
        <SectionTitle>Info - Outline</SectionTitle>
        <BadgeRow>
          <Badge variant='info' type='outline' size='small'>
            Info
          </Badge>
          <Badge variant='info' type='outline' size='medium'>
            Info
          </Badge>
          <Badge variant='info' type='outline' size='large'>
            Info
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Info - Solid</SectionTitle>
        <BadgeRow>
          <Badge variant='info' type='solid' size='small'>
            Info
          </Badge>
          <Badge variant='info' type='solid' size='medium'>
            Info
          </Badge>
          <Badge variant='info' type='solid' size='large'>
            Info
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Info - Strong</SectionTitle>
        <BadgeRow>
          <Badge variant='info' type='strong' size='small'>
            Info
          </Badge>
          <Badge variant='info' type='strong' size='medium'>
            Info
          </Badge>
          <Badge variant='info' type='strong' size='large'>
            Info
          </Badge>
        </BadgeRow>
      </Section>
    </SmallContainer>
}`,...(de=(se=B.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var le,ce,ge;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SmallContainer>
      <Section>
        <SectionTitle>Cautionary - Outline</SectionTitle>
        <BadgeRow>
          <Badge variant='cautionary' type='outline' size='small'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='outline' size='medium'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='outline' size='large'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Cautionary - Solid</SectionTitle>
        <BadgeRow>
          <Badge variant='cautionary' type='solid' size='small'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='solid' size='medium'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='solid' size='large'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>

      <Section>
        <SectionTitle>Cautionary - Strong</SectionTitle>
        <BadgeRow>
          <Badge variant='cautionary' type='strong' size='small'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='strong' size='medium'>
            Cautionary
          </Badge>
          <Badge variant='cautionary' type='strong' size='large'>
            Cautionary
          </Badge>
        </BadgeRow>
      </Section>
    </SmallContainer>
}`,...(ge=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var pe,ue,me;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <SmallContainer>
      <Section>
        <SectionTitle>Small (20px)</SectionTitle>
        <BadgeRowCentered>
          <Badge variant='primary' type='outline' size='small'>
            텍스트
          </Badge>
          <Badge variant='primary' type='solid' size='small'>
            텍스트
          </Badge>
          <Badge variant='primary' type='strong' size='small'>
            텍스트
          </Badge>
        </BadgeRowCentered>
      </Section>

      <Section>
        <SectionTitle>Medium (24px)</SectionTitle>
        <BadgeRowCentered>
          <Badge variant='primary' type='outline' size='medium'>
            텍스트
          </Badge>
          <Badge variant='primary' type='solid' size='medium'>
            텍스트
          </Badge>
          <Badge variant='primary' type='strong' size='medium'>
            텍스트
          </Badge>
        </BadgeRowCentered>
      </Section>

      <Section>
        <SectionTitle>Large (28px)</SectionTitle>
        <BadgeRowCentered>
          <Badge variant='primary' type='outline' size='large'>
            텍스트
          </Badge>
          <Badge variant='primary' type='solid' size='large'>
            텍스트
          </Badge>
          <Badge variant='primary' type='strong' size='large'>
            텍스트
          </Badge>
        </BadgeRowCentered>
      </Section>
    </SmallContainer>
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};const Ve=["Default","Outline","OutlineWithIcon","Solid","SolidWithIcon","Strong","StrongWithIcon","AllVariants","InfoVariant","CautionaryVariant","AllSizes"];export{j as AllSizes,h as AllVariants,b as CautionaryVariant,y as Default,B as InfoVariant,g as Outline,v as OutlineWithIcon,p as Solid,x as SolidWithIcon,u as Strong,f as StrongWithIcon,Ve as __namedExportsOrder,Pe as default};
