import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as s}from"./Breadcrumbs-bUFPOcVf.js";import{B as r}from"./BreadcrumbItem-TlH3huuH.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./iframe-DXO2Jl0a.js";import{S as c,a as o}from"./icon_lock_outline_20-Sz42NNiV.js";import{S as q}from"./icon_person_outline_20-DVjV66jd.js";import{S as t}from"./icon_setting_outline_20-4S4Pqm8U.js";import{d as j}from"./textColor-CNZCqqg5.js";import"./spacing-tE1IiUFl.js";import"./icon_chevron-right_outline_20-B7oOcCnW.js";import"./brandColor-OQPP65_V.js";import"./color-CiwAFuFb.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./radius-DaoU83SK.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";const be={title:"Components/Breadcrumbs",component:s,parameters:{layout:"centered",docs:{description:{component:"브레드크럼(Breadcrumbs)은 아이템(Breadcrumb Item)으로 구성된 네비게이션 컴포넌트입니다. 크기, 여백, 아이콘 등 시각적 요소와 레이아웃 기준을 상세히 정의합니다."}}},tags:["autodocs"],argTypes:{children:{control:!1,description:"BreadcrumbItem 컴포넌트들입니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."}}},a={render:n=>e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{active:!0,children:[e.jsx(o,{}),"개인정보 변경"]})]}),args:{style:{},className:""}},m={render:n=>e.jsxs(s,{...n,children:[e.jsx(r,{children:"홈"}),e.jsx(r,{children:"설정"}),e.jsx(r,{active:!0,children:"개인정보 변경"})]}),args:{}},d={render:n=>e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{children:[e.jsx(o,{}),"개인정보 변경"]})]}),args:{}},i={render:n=>e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{active:!0,children:[e.jsx(t,{}),"설정"]})]}),args:{}},l={render:n=>e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{children:[e.jsx(q,{}),"사용자"]}),e.jsxs(r,{active:!0,children:[e.jsx(o,{}),"개인정보 변경"]})]}),args:{}},u={render:n=>e.jsxs(s,{...n,children:[e.jsxs(r,{disabled:!0,children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{active:!0,children:[e.jsx(o,{}),"개인정보 변경"]})]}),args:{}},I={render:n=>e.jsxs(G,{children:[e.jsxs(x,{children:[e.jsx(B,{children:"Default"}),e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{children:[e.jsx(o,{}),"개인정보 변경"]})]})]}),e.jsxs(x,{children:[e.jsx(B,{children:"Hovered (두 번째 아이템에 마우스 올리기)"}),e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{children:[e.jsx(o,{}),"개인정보 변경"]})]})]}),e.jsxs(x,{children:[e.jsx(B,{children:"Focused (탭 키로 포커스)"}),e.jsxs(s,{...n,children:[e.jsxs(r,{children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{children:[e.jsx(o,{}),"개인정보 변경"]})]})]}),e.jsxs(x,{children:[e.jsx(B,{children:"Disabled"}),e.jsxs(s,{...n,children:[e.jsxs(r,{disabled:!0,children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{disabled:!0,children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{disabled:!0,children:[e.jsx(o,{}),"개인정보 변경"]})]})]})]}),args:{}},b={render:n=>e.jsxs(s,{...n,children:[e.jsxs(r,{onClick:()=>console.log("Item 1 clicked"),children:[e.jsx(c,{}),"홈"]}),e.jsxs(r,{onClick:()=>console.log("Item 2 clicked"),children:[e.jsx(t,{}),"설정"]}),e.jsxs(r,{active:!0,onClick:()=>console.log("Item 3 clicked"),children:[e.jsx(o,{}),"개인정보 변경"]})]}),args:{style:{},className:""}},G=j.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,x=j.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,B=j.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;var p,g,h;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />
        홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {
    style: {},
    className: ""
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var S,O,k;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem>홈</BreadcrumbItem>
      <BreadcrumbItem>설정</BreadcrumbItem>
      <BreadcrumbItem active>개인정보 변경</BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var v,f,T;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />
        홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(T=(f=d.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var y,H,C;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />
        홈
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(C=(H=i.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var L,D,N;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />
        홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconPersonOutline20 />
        사용자
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(N=(D=l.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var F,W,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem disabled>
        <Icons.IconHomeOutline20 />
        홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {}
}`,...(w=(W=u.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var A,E,P;I.parameters={...I.parameters,docs:{...(A=I.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => <Container>
      <Section>
        <SectionTitle>Default</SectionTitle>
        <Breadcrumbs {...args}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section>
        <SectionTitle>Hovered (두 번째 아이템에 마우스 올리기)</SectionTitle>
        <Breadcrumbs {...args}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section>
        <SectionTitle>Focused (탭 키로 포커스)</SectionTitle>
        <Breadcrumbs {...args}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>

      <Section>
        <SectionTitle>Disabled</SectionTitle>
        <Breadcrumbs {...args}>
          <BreadcrumbItem disabled>
            <Icons.IconHomeOutline20 />
            홈
          </BreadcrumbItem>
          <BreadcrumbItem disabled>
            <Icons.IconSettingOutline20 />
            설정
          </BreadcrumbItem>
          <BreadcrumbItem disabled>
            <Icons.IconLockOutline20 />
            개인정보 변경
          </BreadcrumbItem>
        </Breadcrumbs>
      </Section>
    </Container>,
  args: {}
}`,...(P=(E=I.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var _,z,R;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbItem onClick={() => console.log("Item 1 clicked")}>
        <Icons.IconHomeOutline20 />
        홈
      </BreadcrumbItem>
      <BreadcrumbItem onClick={() => console.log("Item 2 clicked")}>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active onClick={() => console.log("Item 3 clicked")}>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {
    style: {},
    className: ""
  }
}`,...(R=(z=b.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const xe=["Default","TextOnly","WithIcons","TwoItems","FourItems","WithDisabled","AllStates","Interactive"];export{I as AllStates,a as Default,l as FourItems,b as Interactive,m as TextOnly,i as TwoItems,u as WithDisabled,d as WithIcons,xe as __namedExportsOrder,be as default};
