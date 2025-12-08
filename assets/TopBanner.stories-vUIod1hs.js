import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as O,a as m}from"./TopBannerList-DDmPomg9.js";import{r as t}from"./iframe-Bb6Fyw9n.js";import"./styled-components.browser.esm-C7FfZWH0.js";import"./color-CiwAFuFb.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./icon_close_outline_24-BgAFwrIr.js";const A="/design-system-template/assets/llmcapsule_banner_dan25-6uxm_1gg.svg",U={title:"Components/TopBanner",component:O,parameters:{layout:"fullscreen",docs:{description:{component:"TopBanner는 페이지 상단에 표시되는 띠배너 컴포넌트입니다. API로 받은 이미지를 동적으로 표시하고, 날짜 범위에 따라 자동으로 노출/숨김 처리됩니다."}}},tags:["autodocs"],argTypes:{src:{control:"text",description:"배너 이미지 URL"},link:{control:"text",description:"배너 클릭 시 이동할 URL"},startDate:{control:"text",description:"노출 시작 날짜 (ISO 8601 형식)"},endDate:{control:"text",description:"노출 종료 날짜 (ISO 8601 형식)"}}},d={args:{src:A,link:"https://blog.naver.com/cubig_"}},l={args:{src:A,link:"https://blog.naver.com/cubig_",startDate:"2025-01-01",endDate:"2025-12-31"},parameters:{docs:{description:{story:"startDate와 endDate를 설정하여 특정 기간에만 배너를 표시할 수 있습니다. 현재 날짜가 범위를 벗어나면 배너가 렌더링되지 않습니다."}}}},g={render:()=>{const[a,o]=t.useState([]),[i,r]=t.useState(!0),s="kor";if(t.useEffect(()=>{fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(n=>n.json()).then(n=>{n&&n.length>0&&o(n),r(!1)}).catch(n=>{console.error("Failed to fetch banner data:",n),r(!1)})},[]),i)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터 로딩 중..."});if(a.length===0)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터를 불러올 수 없습니다"});const c=a.map(n=>({src:n[s].image_url,link:n[s].landing_url,startDate:n.start,endDate:n.end,backgroundColor:n.bg_color}));return e.jsx(m,{banners:c,interval:4e3})},parameters:{docs:{description:{story:"S3에서 배너 데이터를 불러와 TopBannerList로 여러 배너를 표시합니다. 자동으로 4초마다 전환됩니다."}}}},p={render:()=>{const[a,o]=t.useState([]),[i,r]=t.useState(!0),s="kor";if(t.useEffect(()=>{fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(n=>n.json()).then(n=>{n&&n.length>0&&o(n),r(!1)}).catch(n=>{console.error("Failed to fetch banner data:",n),r(!1)})},[]),i)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터 로딩 중..."});if(a.length===0)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터를 불러올 수 없습니다"});const c=a.map(n=>({src:n[s].image_url,link:n[s].landing_url,startDate:n.start,endDate:n.end,backgroundColor:n.bg_color}));return e.jsx(m,{banners:c,interval:4e3})},parameters:{docs:{description:{story:"S3에서 배너 데이터를 불러와 TopBannerList로 표시합니다. TopBannerList는 내부에서 날짜 필터링을 자동으로 처리하며, 현재 날짜가 범위를 벗어난 배너는 자동으로 제외되어 유효한 배너들만 순환합니다."}}}},u={render:()=>{const[a,o]=t.useState([]),[i,r]=t.useState(!0),s="kor";if(t.useEffect(()=>{fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(n=>n.json()).then(n=>{n&&n.length>0&&o(n),r(!1)}).catch(n=>{console.error("Failed to fetch banner data:",n),r(!1)})},[]),i)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터 로딩 중..."});if(a.length===0)return e.jsx("div",{style:{padding:"20px",textAlign:"center"},children:"배너 데이터를 불러올 수 없습니다"});const c=a.map(n=>({src:n[s].image_url,link:n[s].landing_url,startDate:n.start,endDate:n.end,backgroundColor:n.bg_color}));return e.jsx(m,{banners:c,interval:4e3})},parameters:{docs:{description:{story:`
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
        `}}}};var f,h,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: BannerImage,
    link: "https://blog.naver.com/cubig_"
  }
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var L,x,B;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    src: BannerImage,
    link: "https://blog.naver.com/cubig_",
    startDate: "2025-01-01",
    endDate: "2025-12-31"
  },
  parameters: {
    docs: {
      description: {
        story: "startDate와 endDate를 설정하여 특정 기간에만 배너를 표시할 수 있습니다. 현재 날짜가 범위를 벗어나면 배너가 렌더링되지 않습니다."
      }
    }
  }
}`,...(B=(x=l.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,v,D;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = "kor";
    useEffect(() => {
      fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(res => res.json()).then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsLoading(false);
      }).catch(error => {
        console.error("Failed to fetch banner data:", error);
        setIsLoading(false);
      });
    }, []);
    if (isLoading) {
      return <div style={{
        padding: "20px",
        textAlign: "center"
      }}>
          배너 데이터 로딩 중...
        </div>;
    }
    if (bannerList.length === 0) {
      return <div style={{
        padding: "20px",
        textAlign: "center"
      }}>
          배너 데이터를 불러올 수 없습니다
        </div>;
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
        story: "S3에서 배너 데이터를 불러와 TopBannerList로 여러 배너를 표시합니다. 자동으로 4초마다 전환됩니다."
      }
    }
  }
}`,...(D=(v=g.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var _,k,j;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = "kor";
    useEffect(() => {
      fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(res => res.json()).then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsLoading(false);
      }).catch(error => {
        console.error("Failed to fetch banner data:", error);
        setIsLoading(false);
      });
    }, []);
    if (isLoading) {
      return <div style={{
        padding: "20px",
        textAlign: "center"
      }}>
          배너 데이터 로딩 중...
        </div>;
    }
    if (bannerList.length === 0) {
      return <div style={{
        padding: "20px",
        textAlign: "center"
      }}>
          배너 데이터를 불러올 수 없습니다
        </div>;
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
        story: "S3에서 배너 데이터를 불러와 TopBannerList로 표시합니다. TopBannerList는 내부에서 날짜 필터링을 자동으로 처리하며, 현재 날짜가 범위를 벗어난 배너는 자동으로 제외되어 유효한 배너들만 순환합니다."
      }
    }
  }
}`,...(j=(k=p.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var y,I,T;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [bannerList, setBannerList] = useState<BannerData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const language = "kor";
    useEffect(() => {
      // S3 JSON 데이터 fetch
      fetch("https://cubig-banner.s3.ap-northeast-2.amazonaws.com/dev/banner_list.json").then(res => res.json()).then((data: BannerData[]) => {
        if (data && data.length > 0) {
          setBannerList(data);
        }
        setIsLoading(false);
      }).catch(error => {
        console.error("Failed to fetch banner data:", error);
        setIsLoading(false);
      });
    }, []);
    if (isLoading) {
      return <div style={{
        padding: "20px",
        textAlign: "center"
      }}>
          배너 데이터 로딩 중...
        </div>;
    }
    if (bannerList.length === 0) {
      return <div style={{
        padding: "20px",
        textAlign: "center"
      }}>
          배너 데이터를 불러올 수 없습니다
        </div>;
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
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const W=["Default","WithDateRange","ListMultiple","ListWithDateFilter","S3JsonExample"];export{d as Default,g as ListMultiple,p as ListWithDateFilter,u as S3JsonExample,l as WithDateRange,W as __namedExportsOrder,U as default};
