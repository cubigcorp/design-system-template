import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./styled-components.browser.esm-o0t8qbnT.js";import{B as n}from"./BreadcrumbItem-0WcCbkNx.js";import{R as g}from"./iframe-D0ynm1mK.js";import{s as U}from"./spacing-tE1IiUFl.js";import{t as V}from"./textColor-DLZeZODc.js";import{S as X}from"./icon_chevron-right_outline_20-uPR32FtV.js";import{S as t,a as m}from"./icon_lock_outline_20-BpJ4Tsl4.js";import{S as a}from"./icon_setting_outline_20-rwj6xki_.js";import{S as Y}from"./icon_person_outline_20-IfdtYGBn.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./preload-helper-eJNa_G2e.js";const c=({children:r,className:s,style:K,...M})=>{const h=g.Children.toArray(r);return e.jsx(Z,{className:s,style:K,...M,children:h.map((Q,S)=>e.jsxs(g.Fragment,{children:[Q,S<h.length-1&&e.jsx(ee,{children:e.jsx(X,{})})]},S))})};c.displayName="Breadcrumbs";const Z=o.nav`
  display: inline-flex;
  align-items: center;
  gap: ${U.gap["gap-0"]};
`,ee=o.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
  color: ${V.light["fg-neutral-alternative"]};

  svg {
    width: 20px;
    height: 20px;
  }
`;c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"BreadcrumbItem 컴포넌트들"},className:{required:!1,tsType:{name:"string"},description:"추가 className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 스타일"}}};const he={title:"Components/Breadcrumbs",component:c,parameters:{layout:"centered",docs:{description:{component:"브레드크럼(Breadcrumbs)은 아이템(Breadcrumb Item)으로 구성된 네비게이션 컴포넌트입니다. 크기, 여백, 아이콘 등 시각적 요소와 레이아웃 기준을 상세히 정의합니다."}}},tags:["autodocs"],argTypes:{children:{control:!1,description:"BreadcrumbItem 컴포넌트들입니다."},className:{control:{type:"text"},description:"CSS 클래스명을 적용합니다."},style:{control:{type:"object"},description:"인라인 스타일을 적용합니다."}}},i={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{active:!0,children:[e.jsx(m,{}),"개인정보 변경"]})]}),args:{style:{},className:""}},d={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{active:!0,children:"개인정보 변경"})]})},l={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{children:[e.jsx(m,{}),"개인정보 변경"]})]})},u={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{active:!0,children:[e.jsx(a,{}),"설정"]})]})},I={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{children:[e.jsx(Y,{}),"사용자"]}),e.jsxs(n,{active:!0,children:[e.jsx(m,{}),"개인정보 변경"]})]})},b={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{disabled:!0,children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{active:!0,children:[e.jsx(m,{}),"개인정보 변경"]})]})},x={render:({className:r,style:s})=>e.jsxs(ne,{children:[e.jsxs(p,{children:[e.jsx(j,{children:"Default"}),e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{children:[e.jsx(m,{}),"개인정보 변경"]})]})]}),e.jsxs(p,{children:[e.jsx(j,{children:"Hovered (두 번째 아이템에 마우스 올리기)"}),e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{children:[e.jsx(m,{}),"개인정보 변경"]})]})]}),e.jsxs(p,{children:[e.jsx(j,{children:"Focused (탭 키로 포커스)"}),e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{children:[e.jsx(m,{}),"개인정보 변경"]})]})]}),e.jsxs(p,{children:[e.jsx(j,{children:"Disabled"}),e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{disabled:!0,children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{disabled:!0,children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{disabled:!0,children:[e.jsx(m,{}),"개인정보 변경"]})]})]})]})},B={render:({className:r,style:s})=>e.jsxs(c,{className:r,style:s,children:[e.jsxs(n,{onClick:()=>console.log("Item 1 clicked"),children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{onClick:()=>console.log("Item 2 clicked"),children:[e.jsx(a,{}),"설정"]}),e.jsxs(n,{active:!0,onClick:()=>console.log("Item 3 clicked"),children:[e.jsx(m,{}),"개인정보 변경"]})]}),args:{style:{},className:""}},ne=o.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,p=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,j=o.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;var y,N,O;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
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
    className: ''
  }
}`,...(O=(N=i.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var f,v,k;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>홈</BreadcrumbItem>
      <BreadcrumbItem>설정</BreadcrumbItem>
      <BreadcrumbItem active>개인정보 변경</BreadcrumbItem>
    </Breadcrumbs>
}`,...(k=(v=d.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var T,C,H;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
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
}`,...(H=(C=l.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var L,R,D;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
    </Breadcrumbs>
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var w,F,A;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem>
        <Icons.IconHomeOutline20 />홈
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
    </Breadcrumbs>
}`,...(A=(F=I.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var P,W,_;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem disabled>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>
}`,...(_=(W=b.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,E,$;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Container>
      <Section>
        <SectionTitle>Default</SectionTitle>
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />홈
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
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />홈
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
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem>
            <Icons.IconHomeOutline20 />홈
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
        <Breadcrumbs className={className} style={style}>
          <BreadcrumbItem disabled>
            <Icons.IconHomeOutline20 />홈
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
    </Container>
}`,...($=(E=x.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var z,G,J;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: ({
    className,
    style
  }) => <Breadcrumbs className={className} style={style}>
      <BreadcrumbItem onClick={() => console.log('Item 1 clicked')}>
        <Icons.IconHomeOutline20 />홈
      </BreadcrumbItem>
      <BreadcrumbItem onClick={() => console.log('Item 2 clicked')}>
        <Icons.IconSettingOutline20 />
        설정
      </BreadcrumbItem>
      <BreadcrumbItem active onClick={() => console.log('Item 3 clicked')}>
        <Icons.IconLockOutline20 />
        개인정보 변경
      </BreadcrumbItem>
    </Breadcrumbs>,
  args: {
    style: {},
    className: ''
  }
}`,...(J=(G=B.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const Se=["Default","TextOnly","WithIcons","TwoItems","FourItems","WithDisabled","AllStates","Interactive"];export{x as AllStates,i as Default,I as FourItems,B as Interactive,d as TextOnly,u as TwoItems,b as WithDisabled,l as WithIcons,Se as __namedExportsOrder,he as default};
