import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as l,R as ee}from"./iframe-B_xlwamp.js";import{r as te}from"./index-C8xj-_2I.js";import{c as m}from"./styled-components.browser.esm-SETmF8Vw.js";import{C as re}from"./Chip-BaFVq05J.js";import{S as ne}from"./icon_close_outline_16-BDJSo69w.js";import{M as ae}from"./Menu-JAV-cM9V.js";import{C as le}from"./Cell-CpBoU9Yi.js";import{r as oe}from"./radius-DaoU83SK.js";import{c as p}from"./color-m2U5piog.js";import{b as h}from"./borderColor-CzkI5wcR.js";import{s as c}from"./spacing-tE1IiUFl.js";import{t as M}from"./textColor-G8dwupNW.js";import{t as k}from"./typography-CHdGJV44.js";const F=({size:t="medium",status:a="default",disabled:u=!1,placeholder:A="입력하거나 선택해주세요.",value:v=[],options:R=[],onChange:d,onFocus:w,onBlur:x,className:N="",style:U,lang:T="ko",lineMode:I="multi",...W})=>{const[f,$]=l.useState(!1),[L,b]=l.useState(!1),[y,S]=l.useState(""),[s,C]=l.useState(v),[g,_]=l.useState({top:0,left:0,width:0,openUpward:!1}),i=l.useRef(null),V=l.useRef(null),E=l.useRef(null);l.useEffect(()=>{const e=r=>{const n=r.target;E.current&&E.current.contains(n)||i.current&&!i.current.contains(n)&&($(!1),b(!1),S(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),l.useEffect(()=>{if(f&&i.current){const e=()=>{if(i.current){const n=i.current.getBoundingClientRect(),q=400,H=4,z=window.innerHeight-n.bottom,Z=n.top,O=z<q&&Z>z;_({top:O?n.top+window.scrollY-H:n.bottom+window.scrollY+H,left:n.left+window.scrollX,width:n.width,openUpward:O})}};e();const r=new ResizeObserver(()=>{e()});return i.current&&r.observe(i.current),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{r.disconnect(),window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[f,s.length]),l.useEffect(()=>{C(v)},[v]);const D=e=>{const r=e.target.value;S(r),f||$(!0)},B=e=>{b(!0),$(!0),w==null||w(e)},G=e=>{b(!1),x==null||x(e)},X=e=>{var r;if(!s.includes(e.value)){const n=[...s,e.value];C(n),d==null||d(n)}S(""),(r=V.current)==null||r.focus()},Y=e=>{const r=s.filter(n=>n!==e);C(r),d==null||d(r)},P=R.filter(e=>{const r=y?e.label.toLowerCase().includes(y.toLowerCase()):!0,n=!s.includes(e.value);return r&&n}),J=e=>R.find(r=>r.value===e),j=()=>{switch(t){case"small":return"x-small";case"large":return"small";default:return"x-small"}},K=()=>{switch(j()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},Q=()=>{const e=K(),r=4,n=8;return I==="single"?e+n:e*3+r*2+n};return o.jsxs(se,{ref:i,className:`multiselect-container ${N}`,style:U,...W,children:[o.jsx(ie,{$size:t,$status:a,$disabled:u,$focused:L,$hasChips:s.length>0,lang:T,children:o.jsxs(ue,{$maxHeight:Q(),$lineMode:I,$size:t,children:[s.map(e=>{const r=J(e);return r?o.jsx(ce,{onClick:n=>{u||(n.stopPropagation(),Y(e))},children:o.jsx(re,{type:"solid",size:j(),disabled:u,trailingIcon:o.jsx(ne,{color:"currentColor"}),children:r.label})},e):null}),o.jsx(de,{ref:V,$size:t,$disabled:u,$focused:L,$hasChips:s.length>0,lang:T,value:y,placeholder:s.length===0?A:"",disabled:u,onChange:D,onFocus:B,onBlur:G})]})}),f&&P.length>0&&te.createPortal(o.jsx(me,{ref:E,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:g.top,$left:g.left,$width:g.width,$openUpward:g.openUpward,children:o.jsx(ae,{children:P.map(e=>o.jsx(le,{text:e.label,description:e.description,leadingContent:e.leadingContent,onClick:r=>{r.stopPropagation(),X(e)}},e.value))})}),document.body)]})},se=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ie=m.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${oe["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$status:t,$disabled:a,$focused:u})=>t==="negative"?`
        background-color: ${p.common[100]};
        border: 1.8px solid ${h.light["color-border-negative"]};
      `:a?`
        background-color: ${p.common[100]};
        border-color: ${h.light["color-border-primary"]};
        cursor: not-allowed;
      `:u?`
        background-color: ${p.common[100]};
        border-color: ${h.light["color-border-focused"]};
      `:`
      background-color: ${p.common[100]};
      border-color: ${h.light["color-border-primary"]};
    `}
`,ue=m.div`
  display: flex;
  flex-wrap: ${({$lineMode:t})=>t==="single"?"nowrap":"wrap"};
  gap: ${c.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${({$size:t})=>{switch(t){case"small":return`${c.gap["gap-1"]} ${c.gap["gap-2"]}`;case"large":return`${c.gap["gap-3"]} ${c.gap["gap-2.5"]}`;default:return`${c.gap["gap-2"]} ${c.gap["gap-2"]}`}}};
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
`,ce=m.div`
  display: inline-flex;
  cursor: pointer;
`,de=m.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:t,lang:a="ko"})=>{switch(t){case"small":return`
          height: 22px;
          ${k(a,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${k(a,"body3","regular")}
        `;default:return`
          height: 26px;
          ${k(a,"body3","regular")}
        `}}}

  ${({$disabled:t})=>t?`
        color: ${M.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${M.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${M.light["fg-neutral-assistive"]};
  }
`,pe=m.div`
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
`,me=ee.forwardRef((t,a)=>o.jsx(pe,{ref:a,...t}));F.displayName="MultiSelect";F.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:"'medium'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:`상태
@default "default"`,defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:"'입력하거나 선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:`언어 설정
@default "ko"`,defaultValue:{value:"'ko'",computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:"'single' | 'multi'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"}]},description:`라인 표시 모드
- "single": 한 줄 고정, 가로 스크롤
- "multi": 최대 3줄까지 확장, 이후 세로 스크롤
@default "multi"`,defaultValue:{value:"'multi'",computed:!1}}}};export{F as M};
