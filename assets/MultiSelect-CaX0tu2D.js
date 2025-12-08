import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as d}from"./iframe-BNYJyn6Q.js";import{r as ne}from"./index-C0J-5MmS.js";import{d as i}from"./styled-components.browser.esm-5GbLlbaO.js";import{S as ae}from"./icon_close_outline_16-BWBdWELy.js";import{s as l}from"./spacing-tE1IiUFl.js";import{s as oe}from"./shadow-DVq_1U2q.js";import{c}from"./color-CiwAFuFb.js";import{r as D}from"./radius-DaoU83SK.js";import{t as b}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as L}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as x}from"./typography-hbgufnaT.js";import"./IconSearch-D4pbJy3T.js";import{I as ie}from"./IconCheck-CKtc9n1_.js";import{C as se}from"./Chip-zmFavlvj.js";const P=({children:e,className:o,width:h,showCheckIcon:m=!0,...g})=>{const u=C.Children.map(e,s=>C.isValidElement(s)&&s.props.showCheckIcon===void 0?C.cloneElement(s,{showCheckIcon:m}):s);return a.jsx(le,{className:o,$width:h,...g,children:u})},le=i.div`
  display: flex;
  flex-direction: column;
  gap: ${l.gap["gap-1"]};
  padding: ${l.gap["gap-1"]};
  box-shadow: ${oe.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e||"300px"};

  font-family: inherit;

  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${c.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${c.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${c.gray[200]} transparent;
`;P.displayName="Menu";P.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const z=({disable:e=!1,active:o=!1,leadingContent:h,text:m,description:g,trailingIcon:u,onClick:s,className:v,lang:T,showCheckIcon:S=!0})=>{const w=()=>e?b.light["fg-neutral-disable"]:b.light["fg-neutral-primary"],y=()=>o&&!e&&S;return a.jsxs(ue,{disable:e,active:o,"data-disable":e,onClick:e?void 0:q=>s==null?void 0:s(q),className:v,lang:T,children:[h&&a.jsx(de,{children:a.jsx(h,{color:w()})}),a.jsxs(ce,{children:[m&&a.jsx(pe,{children:m}),g&&a.jsx(me,{children:g})]}),y()&&a.jsx(fe,{children:u?a.jsx(u,{color:w()}):a.jsx(ie,{width:16,height:16,color:w()})})]})},ue=i.div`
  display: flex;
  align-items: center;
  gap: ${l.gap["gap-2"]};
  padding: ${l.gap["gap-1.5"]} ${l.gap["gap-2"]};
  border-radius: ${D["rounded-1"]};
  background-color: ${c.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${c.gray[50]};
  }
`,de=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ce=i.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`,pe=i.div`
  ${x(void 0,"body2","regular")}
  font-family: inherit;
  color: inherit;
`,me=i.div`
  ${x(void 0,"caption2","regular")}
  font-family: inherit;
  color: ${b.light["fg-neutral-alternative"]};
`,fe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;z.displayName="Cell";z.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingContent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const B=({size:e="medium",disabled:o=!1,placeholder:h="입력하거나 선택해주세요.",value:m=[],options:g=[],onChange:u,onFocus:s,onBlur:v,className:T="",style:S,lang:w="ko",lineMode:y="multi",...q})=>{const[$,R]=d.useState(!1),[N,E]=d.useState(!1),[M,I]=d.useState(""),[p,j]=d.useState(m),[k,G]=d.useState({top:0,left:0,width:0,openUpward:!1}),f=d.useRef(null),H=d.useRef(null),V=d.useRef(null);d.useEffect(()=>{const t=r=>{const n=r.target;V.current&&V.current.contains(n)||f.current&&!f.current.contains(n)&&(R(!1),E(!1),I(""))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]),d.useEffect(()=>{if($&&f.current){const t=()=>{if(f.current){const n=f.current.getBoundingClientRect(),W=400,_=4,A=window.innerHeight-n.bottom,re=n.top,U=A<W&&re>A;G({top:U?n.top+window.scrollY-_:n.bottom+window.scrollY+_,left:n.left+window.scrollX,width:n.width,openUpward:U})}};t();const r=new ResizeObserver(()=>{t()});return f.current&&r.observe(f.current),window.addEventListener("scroll",t,!0),window.addEventListener("resize",t),()=>{r.disconnect(),window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}}},[$,p.length]),d.useEffect(()=>{j(m)},[m]);const X=t=>{const r=t.target.value;I(r),$||R(!0)},Y=t=>{E(!0),R(!0),s==null||s(t)},J=t=>{E(!1),v==null||v(t)},K=t=>{var r;if(!p.includes(t.value)){const n=[...p,t.value];j(n),u==null||u(n)}I(""),(r=H.current)==null||r.focus()},Q=t=>{const r=p.filter(n=>n!==t);j(r),u==null||u(r)},O=g.filter(t=>{const r=M?t.label.toLowerCase().includes(M.toLowerCase()):!0,n=!p.includes(t.value);return r&&n}),Z=t=>g.find(r=>r.value===t),F=()=>{switch(e){case"small":return"x-small";case"large":return"small";default:return"x-small"}},ee=()=>{switch(F()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},te=()=>{const t=ee(),r=4,n=8;return y==="single"?t+n:t*3+r*2+n};return a.jsxs(ge,{ref:f,className:`multiselect-container ${T}`,style:S,...q,children:[a.jsx(he,{$size:e,$disabled:o,$focused:N,$hasChips:p.length>0,lang:w,children:a.jsxs(we,{$maxHeight:te(),$lineMode:y,$size:e,children:[p.map(t=>{const r=Z(t);return r?a.jsx(be,{onClick:n=>{o||(n.stopPropagation(),Q(t))},children:a.jsx(se,{type:"solid",size:F(),disabled:o,trailingIcon:a.jsx(ae,{color:"currentColor"}),children:r.label})},t):null}),a.jsx(ve,{ref:H,$size:e,$disabled:o,$focused:N,$hasChips:p.length>0,lang:w,value:M,placeholder:p.length===0?h:"",disabled:o,onChange:X,onFocus:Y,onBlur:J})]})}),$&&O.length>0&&ne.createPortal(a.jsx(ye,{ref:V,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:k.top,$left:k.left,$width:k.width,$openUpward:k.openUpward,children:a.jsx(P,{children:O.map(t=>a.jsx(z,{text:t.label,description:t.description,leadingContent:t.leadingContent,onClick:r=>{r.stopPropagation(),K(t)}},t.value))})}),document.body)]})},ge=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,he=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${D["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  min-height: ${({$size:e})=>{switch(e){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:e,$focused:o})=>e?`
        background-color: ${c.common[100]};
        border-color: ${L.light["color-border-primary"]};
        cursor: not-allowed;
      `:o?`
        background-color: ${c.common[100]};
        border-color: ${L.light["color-border-focused"]};
      `:`
      background-color: ${c.common[100]};
      border-color: ${L.light["color-border-primary"]};
    `}
`,we=i.div`
  display: flex;
  flex-wrap: ${({$lineMode:e})=>e==="single"?"nowrap":"wrap"};
  gap: ${l.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${({$size:e})=>{switch(e){case"small":return`${l.gap["gap-1"]} ${l.gap["gap-2"]}`;case"large":return`${l.gap["gap-3"]} ${l.gap["gap-2.5"]}`;default:return`${l.gap["gap-2"]} ${l.gap["gap-2"]}`}}};
  min-height: inherit;
  max-height: ${({$maxHeight:e})=>`${e}px`};
  overflow-x: ${({$lineMode:e})=>e==="single"?"auto":"hidden"};
  overflow-y: ${({$lineMode:e})=>e==="single"?"hidden":"auto"};

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
`,be=i.div`
  display: inline-flex;
  cursor: pointer;
`,ve=i.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:e,lang:o="ko"})=>{switch(e){case"small":return`
          height: 22px;
          ${x(o,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${x(o,"body3","regular")}
        `;default:return`
          height: 26px;
          ${x(o,"body3","regular")}
        `}}}

  ${({$disabled:e})=>e?`
        color: ${b.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${b.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${b.light["fg-neutral-assistive"]};
  }
`,xe=i.div`
  position: absolute;
  ${({$top:e,$openUpward:o})=>o?`bottom: calc(100vh - ${e}px);`:`top: ${e}px;`}
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,ye=C.forwardRef((e,o)=>a.jsx(xe,{ref:o,...e}));B.displayName="MultiSelect";B.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:`언어 설정
@default "ko"`,defaultValue:{value:'"ko"',computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:`라인 표시 모드
- "single": 한 줄 고정, 가로 스크롤
- "multi": 최대 3줄까지 확장, 이후 세로 스크롤
@default "multi"`,defaultValue:{value:'"multi"',computed:!1}}}};export{z as C,P as M,B as a};
