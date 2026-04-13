import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-B_xlwamp.js";import{c as x}from"./styled-components.browser.esm-SETmF8Vw.js";import{c as T}from"./color-m2U5piog.js";import"./preload-helper-eJNa_G2e.js";const s=({src:r,link:t,startDate:l,endDate:c,backgroundColor:B=T.gray[950],...k})=>{const[g,f]=m.useState(!1),[w,d]=m.useState(!0);m.useEffect(()=>{const y=new Date;if(l){const p=new Date(l);if(y<p){d(!1);return}}if(c){const p=new Date(c);if(y>p){d(!1);return}}d(!0)},[l,c]);const I=()=>{f(!1)},S=()=>{f(!0)},E=()=>{t&&window.open(t,"_blank","noopener,noreferrer")};return w?e.jsx($,{$hasLink:!!t,$hasError:g,$backgroundColor:B,onClick:t?E:void 0,...k,children:g?e.jsx(C,{children:"배너 이미지를 불러올 수 없습니다"}):e.jsx(z,{src:r,alt:"배너",onLoad:I,onError:S})}):null},$=x.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  overflow: hidden;
  background-color: ${({$backgroundColor:r})=>r};
  cursor: ${({$hasLink:r,$hasError:t})=>r&&!t?"pointer":"default"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  will-change: transform;
  contain: paint;
  isolation: isolate;
`,z=x.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`,C=x.div`
  color: ${T.gray[700]};
  font-size: 14px;
`;s.displayName="TopBanner";s.__docgenInfo={description:"",methods:[],displayName:"TopBanner",props:{src:{required:!0,tsType:{name:"string"},description:"배너 이미지 URL"},link:{required:!1,tsType:{name:"string"},description:"배너 클릭 시 이동할 링크 URL"},startDate:{required:!1,tsType:{name:"string"},description:"노출 시작 날짜 (ISO 8601 형식)"},endDate:{required:!1,tsType:{name:"string"},description:"노출 종료 날짜 (ISO 8601 형식)"},backgroundColor:{required:!1,tsType:{name:"string"},description:"배경 색상",defaultValue:{value:"color.gray['950']",computed:!0}}},composes:["Omit"]};const a="/design-system-template/assets/banner_sample-VHBcDXxu.svg",W={title:"Components/Data Display/TopBanner",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"페이지 상단에 표시되는 띠배너 컴포넌트입니다. 날짜 범위에 따라 자동 노출/숨김 처리됩니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},i={args:{src:a,link:"https://example.com"},argTypes:{src:{control:"text"},link:{control:"text"},startDate:{control:"text"},endDate:{control:"text"}}},o={args:{src:a},parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Top Banner"}),e.jsxs("p",{style:n.desc,children:["페이지 상단에 표시되는 띠배너 컴포넌트입니다.",e.jsx("br",{}),"날짜 범위 설정으로 자동 노출/숨김 처리됩니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"Default"}),e.jsx("div",{style:n.card,children:e.jsx(s,{src:a,link:"https://example.com"})}),e.jsx("p",{style:n.sectionTitle,children:"With Date Range (active)"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"startDate: 2025-01-01 / endDate: 2030-12-31"}),e.jsx(s,{src:a,link:"https://example.com",startDate:"2025-01-01",endDate:"2030-12-31"})]})}),e.jsx("p",{style:n.sectionTitle,children:"Expired (not visible)"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"endDate: 2024-01-01 (expired - nothing renders below)"}),e.jsx(s,{src:a,link:"https://example.com",startDate:"2023-01-01",endDate:"2024-01-01"})]})})]})};var h,u,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    src: BannerImage,
    link: 'https://example.com'
  },
  argTypes: {
    src: {
      control: 'text'
    },
    link: {
      control: 'text'
    },
    startDate: {
      control: 'text'
    },
    endDate: {
      control: 'text'
    }
  }
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var b,D,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: BannerImage
  },
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Top Banner</h1>
        <p style={s.desc}>
          페이지 상단에 표시되는 띠배너 컴포넌트입니다.
          <br />
          날짜 범위 설정으로 자동 노출/숨김 처리됩니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Default</p>
      <div style={s.card}>
        <TopBanner src={BannerImage} link='https://example.com' />
      </div>

      <p style={s.sectionTitle}>With Date Range (active)</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <span style={s.label}>startDate: 2025-01-01 / endDate: 2030-12-31</span>
          <TopBanner src={BannerImage} link='https://example.com' startDate='2025-01-01' endDate='2030-12-31' />
        </div>
      </div>

      <p style={s.sectionTitle}>Expired (not visible)</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <span style={s.label}>endDate: 2024-01-01 (expired - nothing renders below)</span>
          <TopBanner src={BannerImage} link='https://example.com' startDate='2023-01-01' endDate='2024-01-01' />
        </div>
      </div>
    </div>
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const F=["Playground","Overview"];export{o as Overview,i as Playground,F as __namedExportsOrder,W as default};
