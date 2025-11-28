import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-DqVVvM-u.js";import{d as c}from"./styled-components.browser.esm-BYbGDw5M.js";import{S as W}from"./icon_close_outline_16-BDP9CWMs.js";import{C as _}from"./Chip-DqQD5216.js";import{c as u}from"./color-CiwAFuFb.js";import{t as h}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as x}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as v}from"./typography-RVdj8V17.js";import{r as O}from"./radius-DaoU83SK.js";import{s as y}from"./spacing-tE1IiUFl.js";const C=({size:t="medium",disabled:r=!1,placeholder:R="입력 후 Enter를 눌러주세요.",value:d=[],onChange:a,onFocus:f,onBlur:g,className:q="",style:H,lang:$="ko",lineMode:b="multi",...j})=>{const[w,k]=l.useState(!1),[p,T]=l.useState(""),[o,m]=l.useState(d),[L,I]=l.useState(!1),E=l.useRef(null);l.useEffect(()=>{m(d)},[d]);const V=e=>{T(e.target.value)},M=e=>{k(!0),f==null||f(e)},z=e=>{k(!1),g==null||g(e)},F=()=>{I(!0)},N=()=>{I(!1)},D=e=>{if(e.key==="Enter"&&!L&&p.trim()){e.preventDefault();const n=p.trim();if(!o.includes(n)){const i=[...o,n];m(i),a==null||a(i)}T("")}else if(e.key==="Backspace"&&!p&&o.length>0){e.preventDefault();const n=o.slice(0,-1);m(n),a==null||a(n)}},P=e=>{const n=o.filter(i=>i!==e);m(n),a==null||a(n)},S=()=>{switch(t){case"small":return"x-small";case"large":return"small";default:return"x-small"}},A=()=>{switch(S()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},K=()=>{const e=A(),n=4,i=8;return b==="single"?e+i:e*3+n*2+i};return s.jsx(B,{className:`tokeninput-container ${q}`,style:H,...j,children:s.jsx(G,{$size:t,$disabled:r,$focused:w,$hasTokens:o.length>0,lang:$,onClick:()=>{var e;return(e=E.current)==null?void 0:e.focus()},children:s.jsxs(J,{$maxHeight:K(),$lineMode:b,children:[o.map((e,n)=>s.jsx(Q,{onClick:i=>{r||(i.stopPropagation(),P(e))},children:s.jsx(_,{type:"solid",size:S(),disabled:r,trailingIcon:r?void 0:s.jsx(W,{color:"currentColor"}),children:e})},`${e}-${n}`)),s.jsx(U,{ref:E,$size:t,$disabled:r,$focused:w,$hasTokens:o.length>0,lang:$,value:p,placeholder:o.length===0?R:"",disabled:r,onChange:V,onFocus:M,onBlur:z,onKeyDown:D,onCompositionStart:F,onCompositionEnd:N})]})})})},B=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,G=c.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  cursor: text;
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:t,$focused:r})=>t?`
        background-color: ${u.common[100]};
        border-color: ${x.light["color-border-primary"]};
        cursor: not-allowed;
      `:r?`
        background-color: ${u.common[100]};
        border-color: ${x.light["color-border-focused"]};
      `:`
      background-color: ${u.common[100]};
      border-color: ${x.light["color-border-primary"]};
    `}
`,J=c.div`
  display: flex;
  flex-wrap: ${({$lineMode:t})=>t==="single"?"nowrap":"wrap"};
  gap: ${y.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${y.gap["gap-1"]} ${y.gap["gap-2"]};
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
    background: ${u.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${u.gray[400]};
  }
`,Q=c.div`
  display: inline-flex;
  cursor: pointer;
`,U=c.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:t,lang:r="ko"})=>{switch(t){case"small":return`
          height: 22px;
          ${v(r,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${v(r,"body3","regular")}
        `;default:return`
          height: 26px;
          ${v(r,"body3","regular")}
        `}}}

  ${({$disabled:t})=>t?`
        color: ${h.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${h.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${h.light["fg-neutral-alternative"]};
  }
`;C.displayName="TokenInput";C.__docgenInfo={description:"",methods:[],displayName:"TokenInput",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"컴포넌트 크기",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder 텍스트",defaultValue:{value:'"입력 후 Enter를 눌러주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"토큰(칩) 값 배열",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트 핸들러"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트 핸들러"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 inline 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"언어 설정 (타이포그래피 적용)",defaultValue:{value:'"ko"',computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:`칩 표시 모드
- single: 한 줄로 표시, 넘치면 가로 스크롤
- multi: 여러 줄로 표시 (최대 3줄), 넘치면 세로 스크롤`,defaultValue:{value:'"multi"',computed:!1}}}};export{C as T};
