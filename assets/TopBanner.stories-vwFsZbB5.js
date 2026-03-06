import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-D0ynm1mK.js";import{c as u}from"./styled-components.browser.esm-o0t8qbnT.js";import{c as I}from"./color-CiwAFuFb.js";import{S as V}from"./icon_close_outline_24-PC64P80j.js";import"./preload-helper-eJNa_G2e.js";const _=({src:e,link:t,startDate:i,endDate:a,backgroundColor:o=I.gray[950],...c})=>{const[n,f]=r.useState(!1),[k,l]=r.useState(!0);r.useEffect(()=>{const b=new Date;if(i){const d=new Date(i);if(b<d){l(!1);return}}if(a){const d=new Date(a);if(b>d){l(!1);return}}l(!0)},[i,a]);const p=()=>{f(!1)},S=()=>{f(!0)},h=()=>{t&&window.open(t,"_blank","noopener,noreferrer")};return k?s.jsx(W,{$hasLink:!!t,$hasError:n,$backgroundColor:o,onClick:t?h:void 0,...c,children:n?s.jsx(P,{children:"배너 이미지를 불러올 수 없습니다"}):s.jsx(H,{src:e,alt:"배너",onLoad:p,onError:S})}):null},W=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  overflow: hidden;
  background-color: ${({$backgroundColor:e})=>e};
  cursor: ${({$hasLink:e,$hasError:t})=>e&&!t?"pointer":"default"};
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
`,H=u.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`,P=u.div`
  color: ${I.gray[700]};
  font-size: 14px;
`;_.displayName="TopBanner";_.__docgenInfo={description:"",methods:[],displayName:"TopBanner",props:{src:{required:!0,tsType:{name:"string"},description:"배너 이미지 URL"},link:{required:!1,tsType:{name:"string"},description:"배너 클릭 시 이동할 링크 URL"},startDate:{required:!1,tsType:{name:"string"},description:"노출 시작 날짜 (ISO 8601 형식)"},endDate:{required:!1,tsType:{name:"string"},description:"노출 종료 날짜 (ISO 8601 형식)"},backgroundColor:{required:!1,tsType:{name:"string"},description:"배경 색상",defaultValue:{value:"color.gray['950']",computed:!0}}},composes:["Omit"]};const Z=e=>{const t=e.replace("#",""),i=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),o=parseInt(t.substring(4,6),16);return(i*299+a*587+o*114)/1e3>=128?"#000000":"#FFFFFF"},m=({banners:e,interval:t=4e3})=>{const[i,a]=r.useState(0),[o,c]=r.useState(!1),[n,f]=r.useState(!1),k=d=>{d.stopPropagation(),c(!0)},l=r.useMemo(()=>{const d=new Date;return e.filter(g=>{if(g.startDate){const D=new Date(g.startDate);if(d<D)return!1}if(g.endDate){const D=new Date(g.endDate);if(d>D)return!1}return!0})},[e]);if(r.useEffect(()=>{a(0)},[l]),r.useEffect(()=>{if(l.length<=1)return;const d=setInterval(()=>{f(!0),setTimeout(()=>{a(g=>(g+1)%l.length),f(!1)},300)},t);return()=>clearInterval(d)},[l.length,t]),l.length===0||o)return null;const p=l[i],S=()=>{p.link&&window.open(p.link,"_blank","noopener,noreferrer")},h=p.backgroundColor||I.gray[950],b=Z(h);return s.jsxs(Y,{$hasLink:!!p.link,$backgroundColor:h,$isTransitioning:n,onClick:p.link?S:void 0,children:[s.jsx(G,{src:p.src,alt:"배너"}),s.jsx(K,{$color:b,onClick:k,"aria-label":"배너 닫기",children:s.jsx(V,{})})]})},Y=u.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: ${({$backgroundColor:e})=>e};
  cursor: ${({$hasLink:e})=>e?"pointer":"default"};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,G=u.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`,K=u.button`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:e})=>e};
  transition: opacity 0.2s;
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }
`;m.displayName="TopBannerList";m.__docgenInfo={description:"",methods:[],displayName:"TopBannerList",props:{banners:{required:!0,tsType:{name:"Array",elements:[{name:"BannerItem"}],raw:"BannerItem[]"},description:"배너 데이터 배열"},interval:{required:!1,tsType:{name:"number"},description:"배너 전환 간격 (밀리초, 기본값: 4000ms)",defaultValue:{value:"4000",computed:!1}}},composes:["Omit"]};const M="/design-system-template/assets/llmcapsule_banner_dan25-6uxm_1gg.svg",an={title:"Components/TopBanner",component:_,parameters:{layout:"fullscreen",docs:{description:{component:"TopBanner는 페이지 상단에 표시되는 띠배너 컴포넌트입니다. API로 받은 이미지를 동적으로 표시하고, 날짜 범위에 따라 자동으로 노출/숨김 처리됩니다."}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"배너 이미지 URL"},link:{control:"text",description:"배너 클릭 시 이동할 URL"},startDate:{control:"text",description:"노출 시작 날짜 (ISO 8601 형식)"},endDate:{control:"text",description:"노출 종료 날짜 (ISO 8601 형식)"}}},L={args:{src:M,link:"https://blog.naver.com/cubig_"}},x={args:{src:M,link:"https://blog.naver.com/cubig_",startDate:"2025-01-01",endDate:"2025-12-31"},parameters:{docs:{description:{story:"startDate와 endDate를 설정하여 특정 기간에만 배너를 표시할 수 있습니다. 현재 날짜가 범위를 벗어나면 배너가 렌더링되지 않습니다."}}}},B={render:()=>{const[e,t]=r.useState([]),[i,a]=r.useState(!0),o="kor";if(r.useEffect(()=>{fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(n=>n.json()).then(n=>{n&&n.length>0&&t(n),a(!1)}).catch(n=>{console.error("Failed to fetch banner data:",n),a(!1)})},[]),i)return s.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터 로딩 중..."});if(e.length===0)return s.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터를 불러올 수 없습니다"});const c=e.map(n=>({src:n[o].image_url,link:n[o].landing_url,startDate:n.start,endDate:n.end,backgroundColor:n.bg_color}));return s.jsx(m,{banners:c,interval:4e3})},parameters:{docs:{description:{story:"S3에서 배너 데이터를 불러와 TopBannerList로 여러 배너를 표시합니다. 자동으로 4초마다 전환됩니다."}}}},v={render:()=>{const[e,t]=r.useState([]),[i,a]=r.useState(!0),o="kor";if(r.useEffect(()=>{fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(n=>n.json()).then(n=>{n&&n.length>0&&t(n),a(!1)}).catch(n=>{console.error("Failed to fetch banner data:",n),a(!1)})},[]),i)return s.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터 로딩 중..."});if(e.length===0)return s.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터를 불러올 수 없습니다"});const c=e.map(n=>({src:n[o].image_url,link:n[o].landing_url,startDate:n.start,endDate:n.end,backgroundColor:n.bg_color}));return s.jsx(m,{banners:c,interval:4e3})},parameters:{docs:{description:{story:"S3에서 배너 데이터를 불러와 TopBannerList로 표시합니다. TopBannerList는 내부에서 날짜 필터링을 자동으로 처리하며, 현재 날짜가 범위를 벗어난 배너는 자동으로 제외되어 유효한 배너들만 순환합니다."}}}},y={render:()=>{const[e,t]=r.useState([]),[i,a]=r.useState(!0),o="kor";if(r.useEffect(()=>{fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(n=>n.json()).then(n=>{n&&n.length>0&&t(n),a(!1)}).catch(n=>{console.error("Failed to fetch banner data:",n),a(!1)})},[]),i)return s.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터 로딩 중..."});if(e.length===0)return s.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터를 불러올 수 없습니다"});const c=e.map(n=>({src:n[o].image_url,link:n[o].landing_url,startDate:n.start,endDate:n.end,backgroundColor:n.bg_color}));return s.jsx(m,{banners:c,interval:4e3})},parameters:{docs:{description:{story:`
S3 JSON 데이터를 실제로 fetch하여 표시하는 예시입니다.

**JSON 구조:**
- \`start\`, \`end\`: 노출 기간 (ISO 8601 형식)
- \`channels\`: 노출할 채널 목록 (azoo, capsule, titan)
- \`env\`: 환경 (prod, dev, staging)
- \`kor\`, \`eng\`: 언어별 이미지 URL과 랜딩 URL

**사용 방법:**
1. S3에서 JSON 데이터 fetch
2. 채널/환경 필터링 (각 프로젝트에서 처리)
3. 언어 선택 후 \`{ src, link, startDate, endDate }\` 형태로 변환
4. TopBannerList에 전달하면 자동으로 날짜 필터링 + 4초마다 전환

**특징:**
- TopBannerList가 날짜 필터링과 자동 전환을 모두 처리
- 프로젝트는 데이터 fetch와 변환만 하면 됨
        `}}}};var j,T,w;L.parameters={...L.parameters,docs:{...(j=L.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: BannerImage,
    link: 'https://blog.naver.com/cubig_'
  }
}`,...(w=(T=L.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var C,E,O;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    src: BannerImage,
    link: 'https://blog.naver.com/cubig_',
    startDate: '2025-01-01',
    endDate: '2025-12-31'
  },
  parameters: {
    docs: {
      description: {
        story: 'startDate와 endDate를 설정하여 특정 기간에만 배너를 표시할 수 있습니다. 현재 날짜가 범위를 벗어나면 배너가 렌더링되지 않습니다.'
      }
    }
  }
}`,...(O=(E=x.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var $,A,F;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = 'kor';
    useEffect(() => {
      fetch('https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json').then(res => res.json()).then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsLoading(false);
      }).catch(error => {
        console.error('Failed to fetch banner data:', error);
        setIsLoading(false);
      });
    }, []);
    if (isLoading) {
      return <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>배너 데이터 로딩 중...</div>;
    }
    if (bannerList.length === 0) {
      return <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>배너 데이터를 불러올 수 없습니다</div>;
    }
    const transformedBanners = bannerList.map(banner => ({
      src: banner[language].image_url,
      link: banner[language].landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color
    }));
    return <TopBannerList banners={transformedBanners} interval={4000} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'S3에서 배너 데이터를 불러와 TopBannerList로 여러 배너를 표시합니다. 자동으로 4초마다 전환됩니다.'
      }
    }
  }
}`,...(F=(A=B.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var z,N,R;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = 'kor';
    useEffect(() => {
      fetch('https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json').then(res => res.json()).then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsLoading(false);
      }).catch(error => {
        console.error('Failed to fetch banner data:', error);
        setIsLoading(false);
      });
    }, []);
    if (isLoading) {
      return <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>배너 데이터 로딩 중...</div>;
    }
    if (bannerList.length === 0) {
      return <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>배너 데이터를 불러올 수 없습니다</div>;
    }
    const transformedBanners = bannerList.map(banner => ({
      src: banner[language].image_url,
      link: banner[language].landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color
    }));
    return <TopBannerList banners={transformedBanners} interval={4000} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'S3에서 배너 데이터를 불러와 TopBannerList로 표시합니다. TopBannerList는 내부에서 날짜 필터링을 자동으로 처리하며, 현재 날짜가 범위를 벗어난 배너는 자동으로 제외되어 유효한 배너들만 순환합니다.'
      }
    }
  }
}`,...(R=(N=v.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var J,q,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = 'kor';
    useEffect(() => {
      // S3 JSON 데이터 fetch
      fetch('https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json').then(res => res.json()).then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsLoading(false);
      }).catch(error => {
        console.error('Failed to fetch banner data:', error);
        setIsLoading(false);
      });
    }, []);
    if (isLoading) {
      return <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>배너 데이터 로딩 중...</div>;
    }
    if (bannerList.length === 0) {
      return <div style={{
        padding: '20px',
        textAlign: 'center'
      }}>배너 데이터를 불러올 수 없습니다</div>;
    }

    // JSON 데이터를 TopBannerList가 받을 수 있는 형태로 변환
    const transformedBanners = bannerList.map(banner => ({
      src: banner[language].image_url,
      link: banner[language].landing_url,
      startDate: banner.start,
      endDate: banner.end,
      backgroundColor: banner.bg_color
    }));
    return <TopBannerList banners={transformedBanners} interval={4000} />;
  },
  parameters: {
    docs: {
      description: {
        story: \`
S3 JSON 데이터를 실제로 fetch하여 표시하는 예시입니다.

**JSON 구조:**
- \\\`start\\\`, \\\`end\\\`: 노출 기간 (ISO 8601 형식)
- \\\`channels\\\`: 노출할 채널 목록 (azoo, capsule, titan)
- \\\`env\\\`: 환경 (prod, dev, staging)
- \\\`kor\\\`, \\\`eng\\\`: 언어별 이미지 URL과 랜딩 URL

**사용 방법:**
1. S3에서 JSON 데이터 fetch
2. 채널/환경 필터링 (각 프로젝트에서 처리)
3. 언어 선택 후 \\\`{ src, link, startDate, endDate }\\\` 형태로 변환
4. TopBannerList에 전달하면 자동으로 날짜 필터링 + 4초마다 전환

**특징:**
- TopBannerList가 날짜 필터링과 자동 전환을 모두 처리
- 프로젝트는 데이터 fetch와 변환만 하면 됨
        \`
      }
    }
  }
}`,...(U=(q=y.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};const sn=["Default","WithDateRange","ListMultiple","ListWithDateFilter","S3JsonExample"];export{L as Default,B as ListMultiple,v as ListWithDateFilter,y as S3JsonExample,x as WithDateRange,sn as __namedExportsOrder,an as default};
