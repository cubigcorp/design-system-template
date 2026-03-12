import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CvA0Eg-6.js";import{c as p}from"./styled-components.browser.esm-CjbLCBIw.js";import{C as W}from"./Chip-DdBZy_ci.js";import{S as _}from"./icon_close_outline_16-CoAenOwX.js";import{r as O}from"./radius-DaoU83SK.js";import{c}from"./color-m2U5piog.js";import{b as x}from"./borderColor-CzkI5wcR.js";import{s as l}from"./spacing-tE1IiUFl.js";import{t as $}from"./textColor-G8dwupNW.js";import{t as v}from"./typography-CHdGJV44.js";const C=({size:t="medium",disabled:n=!1,placeholder:R="입력 후 Enter를 눌러주세요.",value:g=[],onChange:a,onFocus:f,onBlur:h,className:q="",style:H,lang:y="ko",lineMode:b="multi",...j})=>{const[w,k]=u.useState(!1),[m,T]=u.useState(""),[s,d]=u.useState(g),[L,I]=u.useState(!1),E=u.useRef(null);u.useEffect(()=>{d(g)},[g]);const V=e=>{T(e.target.value)},M=e=>{k(!0),f==null||f(e)},z=e=>{k(!1),h==null||h(e)},F=()=>{I(!0)},N=()=>{I(!1)},D=e=>{if(e.key==="Enter"&&!L&&m.trim()){e.preventDefault();const r=m.trim();if(!s.includes(r)){const o=[...s,r];d(o),a==null||a(o)}T("")}else if(e.key==="Backspace"&&!m&&s.length>0){e.preventDefault();const r=s.slice(0,-1);d(r),a==null||a(r)}},P=e=>{const r=s.filter(o=>o!==e);d(r),a==null||a(r)},S=()=>{switch(t){case"small":return"x-small";case"large":return"small";default:return"x-small"}},A=()=>{switch(S()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},K=()=>{const e=A(),r=4,o=8;return b==="single"?e+o:e*3+r*2+o};return i.jsx(B,{className:`tokeninput-container ${q}`,style:H,...j,children:i.jsx(G,{$size:t,$disabled:n,$focused:w,$hasTokens:s.length>0,lang:y,onClick:()=>{var e;return(e=E.current)==null?void 0:e.focus()},children:i.jsxs(J,{$maxHeight:K(),$lineMode:b,$size:t,children:[s.map((e,r)=>i.jsx(Q,{onClick:o=>{n||(o.stopPropagation(),P(e))},children:i.jsx(W,{type:"solid",size:S(),disabled:n,trailingIcon:i.jsx(_,{color:"currentColor"}),children:e})},`${e}-${r}`)),i.jsx(U,{ref:E,$size:t,$disabled:n,$focused:w,$hasTokens:s.length>0,lang:y,value:m,placeholder:s.length===0?R:"",disabled:n,onChange:V,onFocus:M,onBlur:z,onKeyDown:D,onCompositionStart:F,onCompositionEnd:N})]})})})},B=p.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,G=p.div`
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

  ${({$disabled:t,$focused:n})=>t?`
        background-color: ${c.common[100]};
        border-color: ${x.light["color-border-primary"]};
        cursor: not-allowed;
      `:n?`
        background-color: ${c.common[100]};
        border-color: ${x.light["color-border-focused"]};
      `:`
      background-color: ${c.common[100]};
      border-color: ${x.light["color-border-primary"]};
    `}
`,J=p.div`
  display: flex;
  flex-wrap: ${({$lineMode:t})=>t==="single"?"nowrap":"wrap"};
  gap: ${l.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${({$size:t})=>{switch(t){case"small":return`${l.gap["gap-1"]} ${l.gap["gap-2"]}`;case"large":return`${l.gap["gap-3"]} ${l.gap["gap-2.5"]}`;default:return`${l.gap["gap-2"]} ${l.gap["gap-2"]}`}}};
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
    background: ${c.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${c.gray[400]};
  }
`,Q=p.div`
  display: inline-flex;
  cursor: pointer;
`,U=p.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:t,lang:n="ko"})=>{switch(t){case"small":return`
          height: 22px;
          ${v(n,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${v(n,"body3","regular")}
        `;default:return`
          height: 26px;
          ${v(n,"body3","regular")}
        `}}}

  ${({$disabled:t})=>t?`
        color: ${$.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${$.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${$.light["fg-neutral-assistive"]};
  }
`;C.displayName="TokenInput";C.__docgenInfo={description:"",methods:[],displayName:"TokenInput",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"컴포넌트 크기",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder 텍스트",defaultValue:{value:"'입력 후 Enter를 눌러주세요.'",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"토큰(칩) 값 배열",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트 핸들러"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트 핸들러"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 inline 스타일"},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"언어 설정 (타이포그래피 적용)",defaultValue:{value:"'ko'",computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:"'single' | 'multi'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"}]},description:`칩 표시 모드
- single: 한 줄로 표시, 넘치면 가로 스크롤
- multi: 여러 줄로 표시 (최대 3줄), 넘치면 세로 스크롤`,defaultValue:{value:"'multi'",computed:!1}}}};export{C as T};
