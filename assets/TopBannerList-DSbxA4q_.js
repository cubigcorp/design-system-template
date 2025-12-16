import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-CLq260Vv.js";import{d}from"./styled-components.browser.esm-NAFAd1pi.js";import{c as k}from"./color-CiwAFuFb.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as C}from"./icon_close_outline_24-Qmrgn_fd.js";const w=({src:e,link:t,startDate:a,endDate:s,backgroundColor:u=k.gray[950],...f})=>{const[m,p]=o.useState(!1),[x,n]=o.useState(!0);o.useEffect(()=>{const h=new Date;if(a){const r=new Date(a);if(h<r){n(!1);return}}if(s){const r=new Date(s);if(h>r){n(!1);return}}n(!0)},[a,s]);const i=()=>{p(!1)},y=()=>{p(!0)},g=()=>{t&&window.open(t,"_blank","noopener,noreferrer")};return x?c.jsx(T,{$hasLink:!!t,$hasError:m,$backgroundColor:u,onClick:t?g:void 0,...f,children:m?c.jsx(v,{children:"배너 이미지를 불러올 수 없습니다"}):c.jsx(B,{src:e,alt:"배너",onLoad:i,onError:y})}):null},T=d.div`
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
`,B=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  cursor: pointer;
`,v=d.div`
  color: ${k.gray[700]};
  font-size: 14px;
`;w.displayName="TopBanner";w.__docgenInfo={description:"",methods:[],displayName:"TopBanner",props:{src:{required:!0,tsType:{name:"string"},description:"배너 이미지 URL"},link:{required:!1,tsType:{name:"string"},description:"배너 클릭 시 이동할 링크 URL"},startDate:{required:!1,tsType:{name:"string"},description:"노출 시작 날짜 (ISO 8601 형식)"},endDate:{required:!1,tsType:{name:"string"},description:"노출 종료 날짜 (ISO 8601 형식)"},backgroundColor:{required:!1,tsType:{name:"string"},description:"배경 색상",defaultValue:{value:'color.gray["950"]',computed:!0}}},composes:["Omit"]};const $=e=>{const t=e.replace("#",""),a=parseInt(t.substring(0,2),16),s=parseInt(t.substring(2,4),16),u=parseInt(t.substring(4,6),16);return(a*299+s*587+u*114)/1e3>=128?"#000000":"#FFFFFF"},I=({banners:e,interval:t=4e3})=>{const[a,s]=o.useState(0),[u,f]=o.useState(!1),[m,p]=o.useState(!1),x=r=>{r.stopPropagation(),f(!0)},n=o.useMemo(()=>{const r=new Date;return e.filter(l=>{if(l.startDate){const b=new Date(l.startDate);if(r<b)return!1}if(l.endDate){const b=new Date(l.endDate);if(r>b)return!1}return!0})},[e]);if(o.useEffect(()=>{s(0)},[n]),o.useEffect(()=>{if(n.length<=1)return;const r=setInterval(()=>{p(!0),setTimeout(()=>{s(l=>(l+1)%n.length),p(!1)},300)},t);return()=>clearInterval(r)},[n.length,t]),n.length===0||u)return null;const i=n[a],y=()=>{i.link&&window.open(i.link,"_blank","noopener,noreferrer")},g=i.backgroundColor||k.gray[950],h=$(g);return c.jsxs(j,{$hasLink:!!i.link,$backgroundColor:g,$isTransitioning:m,onClick:i.link?y:void 0,children:[c.jsx(E,{src:i.src,alt:"배너"}),c.jsx(q,{$color:h,onClick:x,"aria-label":"배너 닫기",children:c.jsx(C,{})})]})},j=d.div`
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
`,E=d.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`,q=d.button`
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
`;I.displayName="TopBannerList";I.__docgenInfo={description:"",methods:[],displayName:"TopBannerList",props:{banners:{required:!0,tsType:{name:"Array",elements:[{name:"BannerItem"}],raw:"BannerItem[]"},description:"배너 데이터 배열"},interval:{required:!1,tsType:{name:"number"},description:"배너 전환 간격 (밀리초, 기본값: 4000ms)",defaultValue:{value:"4000",computed:!1}}},composes:["Omit"]};export{w as T,I as a};
