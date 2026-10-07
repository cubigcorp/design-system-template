import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-BQlxtUxC.js";import{c as d}from"./styled-components.browser.esm-BsJdvhJY.js";import{C as _}from"./Chip-pd_KpZD3.js";import{S as O}from"./icon_close_outline_16-CLFktyWH.js";import{r as B}from"./radius-DaoU83SK.js";import{c as p}from"./color-CZjzAmeO.js";import{b as $}from"./borderColor-DnXd17KV.js";import{s as l}from"./spacing-tE1IiUFl.js";import{t as y}from"./textColor-D-yqVS6r.js";import{t as v}from"./typography-CIxJpf_z.js";const C=({inputId:t,size:n="medium",disabled:c=!1,placeholder:R="입력 후 Enter를 눌러주세요.",value:f=[],onChange:a,onFocus:h,onBlur:x,className:H="",style:j,lang:b="ko",lineMode:w="multi",...L})=>{const[k,T]=u.useState(!1),[m,I]=u.useState(""),[s,g]=u.useState(f),[V,E]=u.useState(!1),S=u.useRef(null);u.useEffect(()=>{g(f)},[f]);const M=e=>{I(e.target.value)},z=e=>{T(!0),h==null||h(e)},F=e=>{T(!1),x==null||x(e)},N=()=>{E(!0)},D=()=>{E(!1)},P=e=>{if(e.key==="Enter"&&!V&&m.trim()){e.preventDefault();const r=m.trim();if(!s.includes(r)){const i=[...s,r];g(i),a==null||a(i)}I("")}else if(e.key==="Backspace"&&!m&&s.length>0){e.preventDefault();const r=s.slice(0,-1);g(r),a==null||a(r)}},A=e=>{const r=s.filter(i=>i!==e);g(r),a==null||a(r)},q=()=>{switch(n){case"small":return"x-small";case"large":return"small";default:return"x-small"}},K=()=>{switch(q()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},W=()=>{const e=K(),r=4,i=8;return w==="single"?e+i:e*3+r*2+i};return o.jsx(G,{className:`tokeninput-container ${H}`,style:j,...L,children:o.jsx(J,{$size:n,$disabled:c,$focused:k,$hasTokens:s.length>0,lang:b,onClick:()=>{var e;return(e=S.current)==null?void 0:e.focus()},children:o.jsxs(Q,{$maxHeight:W(),$lineMode:w,$size:n,children:[s.map((e,r)=>o.jsx(U,{onClick:i=>{c||(i.stopPropagation(),A(e))},children:o.jsx(_,{type:"solid",size:q(),disabled:c,trailingIcon:o.jsx(O,{color:"currentColor"}),children:e})},`${e}-${r}`)),o.jsx(X,{id:t,ref:S,$size:n,$disabled:c,$focused:k,$hasTokens:s.length>0,lang:b,value:m,placeholder:s.length===0?R:"",disabled:c,onChange:M,onFocus:z,onBlur:F,onKeyDown:P,onCompositionStart:N,onCompositionEnd:D})]})})})},G=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,J=d.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${B["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  cursor: text;
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:t,$focused:n})=>t?`
        background-color: ${p.common[100]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:n?`
        background-color: ${p.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${p.common[100]};
      border-color: ${$.light["color-border-primary"]};
    `}
`,Q=d.div`
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
    background: ${p.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${p.gray[400]};
  }
`,U=d.div`
  display: inline-flex;
  cursor: pointer;
`,X=d.input`
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
        color: ${y.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${y.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${y.light["fg-neutral-assistive"]};
  }
`;C.displayName="TokenInput";C.__docgenInfo={description:"",methods:[],displayName:"TokenInput",props:{inputId:{required:!1,tsType:{name:"string"},description:"컴포넌트 크기"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder 텍스트",defaultValue:{value:"'입력 후 Enter를 눌러주세요.'",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"토큰(칩) 값 배열",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트 핸들러"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트 핸들러"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"추가 inline 스타일"},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"언어 설정 (타이포그래피 적용)",defaultValue:{value:"'ko'",computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:"'single' | 'multi'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multi'"}]},description:`칩 표시 모드
- single: 한 줄로 표시, 넘치면 가로 스크롤
- multi: 여러 줄로 표시 (최대 3줄), 넘치면 세로 스크롤`,defaultValue:{value:"'multi'",computed:!1}}}};export{C as T};
