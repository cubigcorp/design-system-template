import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as Z}from"./iframe-BWSb8WuG.js";import{r as ee}from"./index-Bka6C5bA.js";import{d}from"./styled-components.browser.esm-C8ZrTVSh.js";import{S as te}from"./icon_close_outline_16-hoculNBG.js";import{M as re,C as ne}from"./Cell-D-SI0M8V.js";import{C as ae}from"./Chip-Dixwg7pl.js";import{c as p}from"./color-CiwAFuFb.js";import{t as C}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import{b as E}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as M}from"./typography-hbgufnaT.js";import{r as oe}from"./radius-DaoU83SK.js";import{s as u}from"./spacing-tE1IiUFl.js";const O=({size:t="medium",disabled:a=!1,placeholder:F="입력하거나 선택해주세요.",value:g=[],options:k=[],onChange:c,onFocus:h,onBlur:w,className:A="",style:N,lang:R="ko",lineMode:I="multi",...U})=>{const[m,v]=o.useState(!1),[T,x]=o.useState(!1),[$,b]=o.useState(""),[s,y]=o.useState(g),[f,W]=o.useState({top:0,left:0,width:0,openUpward:!1}),i=o.useRef(null),L=o.useRef(null),S=o.useRef(null);o.useEffect(()=>{const e=r=>{const n=r.target;S.current&&S.current.contains(n)||i.current&&!i.current.contains(n)&&(v(!1),x(!1),b(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),o.useEffect(()=>{if(m&&i.current){const e=()=>{if(i.current){const n=i.current.getBoundingClientRect(),j=400,H=4,q=window.innerHeight-n.bottom,Q=n.top,z=q<j&&Q>q;W({top:z?n.top+window.scrollY-H:n.bottom+window.scrollY+H,left:n.left+window.scrollX,width:n.width,openUpward:z})}};e();const r=new ResizeObserver(()=>{e()});return i.current&&r.observe(i.current),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{r.disconnect(),window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[m,s.length]),o.useEffect(()=>{y(g)},[g]);const _=e=>{const r=e.target.value;b(r),m||v(!0)},D=e=>{x(!0),v(!0),h==null||h(e)},B=e=>{x(!1),w==null||w(e)},G=e=>{var r;if(!s.includes(e.value)){const n=[...s,e.value];y(n),c==null||c(n)}b(""),(r=L.current)==null||r.focus()},X=e=>{const r=s.filter(n=>n!==e);y(r),c==null||c(r)},V=k.filter(e=>{const r=$?e.label.toLowerCase().includes($.toLowerCase()):!0,n=!s.includes(e.value);return r&&n}),Y=e=>k.find(r=>r.value===e),P=()=>{switch(t){case"small":return"x-small";case"large":return"small";default:return"x-small"}},J=()=>{switch(P()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},K=()=>{const e=J(),r=4,n=8;return I==="single"?e+n:e*3+r*2+n};return l.jsxs(le,{ref:i,className:`multiselect-container ${A}`,style:N,...U,children:[l.jsx(se,{$size:t,$disabled:a,$focused:T,$hasChips:s.length>0,lang:R,children:l.jsxs(ie,{$maxHeight:K(),$lineMode:I,$size:t,children:[s.map(e=>{const r=Y(e);return r?l.jsx(ue,{onClick:n=>{a||(n.stopPropagation(),X(e))},children:l.jsx(ae,{type:"solid",size:P(),disabled:a,trailingIcon:l.jsx(te,{color:"currentColor"}),children:r.label})},e):null}),l.jsx(ce,{ref:L,$size:t,$disabled:a,$focused:T,$hasChips:s.length>0,lang:R,value:$,placeholder:s.length===0?F:"",disabled:a,onChange:_,onFocus:D,onBlur:B})]})}),m&&V.length>0&&ee.createPortal(l.jsx(pe,{ref:S,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:f.top,$left:f.left,$width:f.width,$openUpward:f.openUpward,children:l.jsx(re,{children:V.map(e=>l.jsx(ne,{text:e.label,description:e.description,leadingContent:e.leadingContent,onClick:r=>{r.stopPropagation(),G(e)}},e.value))})}),document.body)]})},le=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,se=d.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${oe["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:t,$focused:a})=>t?`
        background-color: ${p.common[100]};
        border-color: ${E.light["color-border-primary"]};
        cursor: not-allowed;
      `:a?`
        background-color: ${p.common[100]};
        border-color: ${E.light["color-border-focused"]};
      `:`
      background-color: ${p.common[100]};
      border-color: ${E.light["color-border-primary"]};
    `}
`,ie=d.div`
  display: flex;
  flex-wrap: ${({$lineMode:t})=>t==="single"?"nowrap":"wrap"};
  gap: ${u.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${({$size:t})=>{switch(t){case"small":return`${u.gap["gap-1"]} ${u.gap["gap-2"]}`;case"large":return`${u.gap["gap-3"]} ${u.gap["gap-2.5"]}`;default:return`${u.gap["gap-2"]} ${u.gap["gap-2"]}`}}};
  min-height: inherit;
  max-height: ${({$maxHeight:t})=>`${t}px`};
  overflow-x: ${({$lineMode:t})=>t==="single"?"auto":"hidden"};
  overflow-y: ${({$lineMode:t})=>t==="single"?"hidden":"auto"};

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${p.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${p.gray[400]};
  }
`,ue=d.div`
  display: inline-flex;
  cursor: pointer;
`,ce=d.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:t,lang:a="ko"})=>{switch(t){case"small":return`
          height: 22px;
          ${M(a,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${M(a,"body3","regular")}
        `;default:return`
          height: 26px;
          ${M(a,"body3","regular")}
        `}}}

  ${({$disabled:t})=>t?`
        color: ${C.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${C.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${C.light["fg-neutral-assistive"]};
  }
`,de=d.div`
  position: absolute;
  ${({$top:t,$openUpward:a})=>a?`bottom: calc(100vh - ${t}px);`:`top: ${t}px;`}
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,pe=Z.forwardRef((t,a)=>l.jsx(de,{ref:a,...t}));O.displayName="MultiSelect";O.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:`언어 설정
@default "ko"`,defaultValue:{value:'"ko"',computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:`라인 표시 모드
- "single": 한 줄 고정, 가로 스크롤
- "multi": 최대 3줄까지 확장, 이후 세로 스크롤
@default "multi"`,defaultValue:{value:'"multi"',computed:!1}}}};export{O as M};
