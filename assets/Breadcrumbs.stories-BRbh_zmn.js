import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as n}from"./BreadcrumbItem-CqGY8X0_.js";import{R as m}from"./iframe-C6VbNSAb.js";import{c as h}from"./styled-components.browser.esm-BW4106oE.js";import{s as S}from"./spacing-tE1IiUFl.js";import{t as O}from"./textColor-G8dwupNW.js";import{S as D}from"./icon_chevron-right_outline_20-C8iezoEd.js";import{S as t}from"./icon_home_outline_20-DHfs1IBr.js";import{S as i}from"./icon_setting_outline_20-Ba-3J2bE.js";import{S as c}from"./icon_lock_outline_20-BXkbh6ME.js";import{S as T}from"./icon_person_outline_20-u_aZohmL.js";import"./color-m2U5piog.js";import"./radius-DaoU83SK.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./preload-helper-eJNa_G2e.js";const s=({children:j,className:B,style:v,...g})=>{const d=m.Children.toArray(j);return e.jsx(R,{className:B,style:v,...g,children:d.map((f,o)=>e.jsxs(m.Fragment,{children:[f,o<d.length-1&&e.jsx(H,{children:e.jsx(D,{})})]},o))})};s.displayName="Breadcrumbs";const R=h.nav`
  display: inline-flex;
  align-items: center;
  gap: ${S.gap["gap-0"]};
`,H=h.span`
  display: inline-flex;
  align-items: center;
  color: inherit;
  color: ${O.light["fg-neutral-alternative"]};

  svg {
    width: 20px;
    height: 20px;
  }
`;s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"BreadcrumbItem 컴포넌트들"},className:{required:!1,tsType:{name:"string"},description:"추가 className"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 스타일"}}};const Q={title:"Components/Navigation/Breadcrumbs",component:s,parameters:{layout:"fullscreen",docs:{description:{component:"현재 페이지의 경로를 계층적으로 표시하는 네비게이션 컴포넌트입니다. 아이콘과 텍스트를 조합하여 사용합니다."}}},tags:["autodocs"]},r={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},l={parameters:{layout:"centered"},render:()=>e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(i,{}),"설정"]}),e.jsxs(n,{active:!0,children:[e.jsx(c,{}),"개인정보 변경"]})]})},a={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:r.page,children:[e.jsxs("div",{style:r.header,children:[e.jsx("h1",{style:r.title,children:"Breadcrumbs"}),e.jsxs("p",{style:r.desc,children:["현재 페이지의 경로를 계층적으로 표시합니다.",e.jsx("br",{}),"아이콘 포함/미포함, active, disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:r.sectionTitle,children:"With Icons"}),e.jsx("div",{style:r.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:"2 items"}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{active:!0,children:[e.jsx(i,{}),"설정"]})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:"3 items"}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(i,{}),"설정"]}),e.jsxs(n,{active:!0,children:[e.jsx(c,{}),"개인정보 변경"]})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:"4 items"}),e.jsxs(s,{children:[e.jsxs(n,{children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(i,{}),"설정"]}),e.jsxs(n,{children:[e.jsx(T,{}),"사용자"]}),e.jsxs(n,{active:!0,children:[e.jsx(c,{}),"개인정보 변경"]})]})]})]})}),e.jsx("p",{style:r.sectionTitle,children:"Text Only"}),e.jsx("div",{style:r.card,children:e.jsxs(s,{children:[e.jsx(n,{children:"홈"}),e.jsx(n,{children:"설정"}),e.jsx(n,{active:!0,children:"개인정보 변경"})]})}),e.jsx("p",{style:r.sectionTitle,children:"States"}),e.jsx("div",{style:r.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:"with disabled item"}),e.jsxs(s,{children:[e.jsxs(n,{disabled:!0,children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{children:[e.jsx(i,{}),"설정"]}),e.jsxs(n,{active:!0,children:[e.jsx(c,{}),"개인정보 변경"]})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:"all disabled"}),e.jsxs(s,{children:[e.jsxs(n,{disabled:!0,children:[e.jsx(t,{}),"홈"]}),e.jsxs(n,{disabled:!0,children:[e.jsx(i,{}),"설정"]}),e.jsxs(n,{disabled:!0,children:[e.jsx(c,{}),"개인정보 변경"]})]})]})]})})]})};var u,p,x;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => <Breadcrumbs>
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
    </Breadcrumbs>
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var b,I,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Breadcrumbs</h1>
        <p style={s.desc}>
          현재 페이지의 경로를 계층적으로 표시합니다.
          <br />
          아이콘 포함/미포함, active, disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>With Icons</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>2 items</span>
            <Breadcrumbs>
              <BreadcrumbItem>
                <Icons.IconHomeOutline20 />홈
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Icons.IconSettingOutline20 />
                설정
              </BreadcrumbItem>
            </Breadcrumbs>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>3 items</span>
            <Breadcrumbs>
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
            </Breadcrumbs>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>4 items</span>
            <Breadcrumbs>
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
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Text Only</p>
      <div style={s.card}>
        <Breadcrumbs>
          <BreadcrumbItem>홈</BreadcrumbItem>
          <BreadcrumbItem>설정</BreadcrumbItem>
          <BreadcrumbItem active>개인정보 변경</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>with disabled item</span>
            <Breadcrumbs>
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
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>all disabled</span>
            <Breadcrumbs>
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
          </div>
        </div>
      </div>
    </div>
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const U=["Playground","Overview"];export{a as Overview,l as Playground,U as __namedExportsOrder,Q as default};
