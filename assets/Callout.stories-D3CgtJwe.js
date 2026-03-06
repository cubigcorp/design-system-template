import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as se}from"./iframe-D0ynm1mK.js";import{c as o}from"./styled-components.browser.esm-o0t8qbnT.js";import{c as a}from"./color-CiwAFuFb.js";import{n as v,p as I}from"./negativeColor-DPOOrHeE.js";import{r as le}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{t as n}from"./textColor-DLZeZODc.js";import{t as Z}from"./typography-CHdGJV44.js";import{S as ce}from"./icon_chevron-right_outline_20-uPR32FtV.js";import{S as j,a as ue,b as pe,c as de}from"./icon_warning_fill_16-AeH4bSpk.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const t=se.forwardRef(({variant:r="primary",size:h="medium",title:ee,description:x,leadingIcon:C=!0,trailingIcon:re=!1,onTrailingIconClick:ae,className:ne,...te},ie)=>{const oe=()=>{if(!C)return null;switch(r){case"positive":return e.jsx(de,{});case"negative":return e.jsx(pe,{});case"cautionary":return e.jsx(ue,{});case"info":return e.jsx(j,{});default:return e.jsx(j,{})}};return e.jsxs(ge,{ref:ie,className:ne,$variant:r,$size:h,...te,children:[C&&e.jsx(me,{$variant:r,$size:h,children:oe()}),e.jsxs(ye,{children:[e.jsx(fe,{$variant:r,children:ee}),x&&e.jsx(ve,{$variant:r,children:x})]}),re&&e.jsx(Ie,{onClick:ae,$variant:r,children:e.jsx(ce,{})})]})});t.displayName="Callout";const ge=o.div`
  display: flex;
  align-items: flex-start;
  gap: ${i.gap["gap-2"]};
  padding: ${({$size:r})=>r==="small"?`${i.gap["gap-2.5"]} ${i.gap["gap-3"]}`:`${i.gap["gap-3.5"]} ${i.gap["gap-3"]}`};
  border-radius: ${le["rounded-2"]};
  min-width: 240px;
  width: 100%;
  background-color: ${({$variant:r})=>{switch(r){case"primary":return a.gray[50];case"secondary":return a.gray[50];case"positive":return a.green[50];case"negative":return a.red[50];case"cautionary":return a.orange[50];case"info":return a.blue[50];default:return a.gray[50]}}};
`,me=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: ${i.gap["gap-0.5"]};
  color: ${({$variant:r})=>{switch(r){case"primary":return n.light["fg-neutral-strong"];case"secondary":return n.light["fg-neutral-alternative"];case"positive":return I.light["fg-positive-primary"];case"negative":return v.light["fg-negative-primary"];case"cautionary":return a.orange[500];case"info":return a.blue[500];default:return n.light["fg-neutral-strong"]}}};

  svg {
    width: 16px;
    height: 16px;
  }
`,ye=o.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
  flex: 1;
`,fe=o.div`
  ${Z(void 0,"body2","medium")}
  color: ${({$variant:r})=>{switch(r){case"primary":return n.light["fg-neutral-strong"];case"secondary":return n.light["fg-neutral-alternative"];case"positive":return I.light["fg-positive-primary"];case"negative":return v.light["fg-negative-primary"];case"cautionary":return a.orange[500];case"info":return a.blue[500];default:return n.light["fg-neutral-strong"]}}};
`,ve=o.div`
  ${Z(void 0,"caption2","regular")}
  color: ${({$variant:r})=>{switch(r){case"primary":return n.light["fg-neutral-alternative"];case"secondary":return n.light["fg-neutral-alternative"];case"positive":return a.green[500];case"negative":return a.red[400];case"cautionary":return a.orange[400];case"info":return a.blue[500];default:return n.light["fg-neutral-alternative"]}}};
`,Ie=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({$variant:r})=>{switch(r){case"primary":return n.light["fg-neutral-strong"];case"secondary":return n.light["fg-neutral-alternative"];case"positive":return I.light["fg-positive-primary"];case"negative":return v.light["fg-negative-primary"];case"cautionary":return a.orange[500];case"info":return a.blue[500];default:return n.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`;t.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'positive'
| 'negative'
| 'cautionary'
| 'info'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'cautionary'"},{name:"literal",value:"'info'"}]},description:"Callout 변형",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Callout 크기",defaultValue:{value:"'medium'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},description:{required:!1,tsType:{name:"string"},description:"설명 텍스트"},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"Leading Icon 표시 여부",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"boolean"},description:"Trailing Icon 표시 여부",defaultValue:{value:"false",computed:!1}},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Trailing Icon 클릭 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};const Pe={title:"Components/Callout",component:t,parameters:{layout:"centered",docs:{description:{component:"콜아웃(Callout)은 사용자에게 특정 콘텐츠나 영역과 직접적으로 연결된 보조 메시지를 제공할 때 시각적으로 강조하여 제공하는 컴포넌트로, 사용자가 정보를 빠르게 인지하고 필요한 조치를 취할 수 있도록 돕습니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","positive","negative","cautionary","info"],description:"Callout 변형",table:{type:{summary:"primary | secondary | positive | negative | cautionary | info"},defaultValue:{summary:"primary"}}},title:{control:{type:"text"},description:"제목 텍스트",table:{type:{summary:"string"}}},description:{control:{type:"text"},description:"설명 텍스트",table:{type:{summary:"string"}}},leadingIcon:{control:{type:"boolean"},description:"Leading Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},trailingIcon:{control:{type:"boolean"},description:"Trailing Icon 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},onTrailingIconClick:{action:"trailing-icon-clicked",description:"Trailing Icon 클릭 이벤트",table:{type:{summary:"() => void"}}}}},s={args:{variant:"primary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},l={args:{variant:"secondary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},c={args:{variant:"positive",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},u={args:{variant:"negative",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},p={args:{variant:"cautionary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},d={args:{variant:"info",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},g={args:{variant:"primary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!0}},m={args:{variant:"primary",title:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!1,trailingIcon:!1}},y={args:{variant:"primary",title:"텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"500px"},children:[e.jsx(t,{variant:"primary",title:"Primary",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),e.jsx(t,{variant:"secondary",title:"Secondary",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),e.jsx(t,{variant:"positive",title:"Success",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),e.jsx(t,{variant:"negative",title:"Error",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),e.jsx(t,{variant:"cautionary",title:"Warning",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0}),e.jsx(t,{variant:"info",title:"Info",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0})]})};var S,$,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(b=($=s.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var T,w,W;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(W=(w=l.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var V,k,q;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'positive',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var L,N,P;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: 'negative',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(P=(N=u.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var E,R,F;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'cautionary',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(F=(R=p.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var O,_,D;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var z,A,B;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: true
  }
}`,...(B=(A=g.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    title: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: false,
    trailingIcon: false
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,M,Q;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    title: '텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  }
}`,...(Q=(M=y.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '500px'
  }}>
      <Callout variant='primary' title='Primary' description='안내 텍스트를 입력해 주세요.' leadingIcon={true} />
      <Callout variant='secondary' title='Secondary' description='안내 텍스트를 입력해 주세요.' leadingIcon={true} />
      <Callout variant='positive' title='Success' description='안내 텍스트를 입력해 주세요.' leadingIcon={true} />
      <Callout variant='negative' title='Error' description='안내 텍스트를 입력해 주세요.' leadingIcon={true} />
      <Callout variant='cautionary' title='Warning' description='안내 텍스트를 입력해 주세요.' leadingIcon={true} />
      <Callout variant='info' title='Info' description='안내 텍스트를 입력해 주세요.' leadingIcon={true} />
    </div>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Ee=["Primary","Secondary","Positive","Negative","Cautionary","Info","WithTrailingIcon","WithoutLeadingIcon","TitleOnly","AllVariants"];export{f as AllVariants,p as Cautionary,d as Info,u as Negative,c as Positive,s as Primary,l as Secondary,y as TitleOnly,g as WithTrailingIcon,m as WithoutLeadingIcon,Ee as __namedExportsOrder,Pe as default};
