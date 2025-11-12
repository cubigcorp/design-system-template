import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as u}from"./iframe-DZAM4DrV.js";import{r as ne}from"./index-ChusoG7V.js";import{d as i,t as y}from"./textColor-mVK3GUDS.js";import{S as ae}from"./icon_close_outline_16-CZSVxaXM.js";import{s as c}from"./spacing-tE1IiUFl.js";import{s as oe}from"./shadow-DVq_1U2q.js";import{c as d}from"./color-CiwAFuFb.js";import{f as v}from"./fontFamily-CsG1KcIF.js";import{r as D}from"./radius-DaoU83SK.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as N}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as x}from"./typography-BBThIZ7c.js";import"./IconSearch-BmX69--2.js";import{I as ie}from"./IconCheck-CKtc9n1_.js";import{C as le}from"./Chip-DtOnXOlk.js";const H=({children:e,className:n,width:g,showCheckIcon:p=!0,...f})=>{const s=C.Children.map(e,l=>C.isValidElement(l)&&l.props.showCheckIcon===void 0?C.cloneElement(l,{showCheckIcon:p}):l);return a.jsx(se,{className:n,$width:g,...f,children:s})},se=i.div`
  display: flex;
  flex-direction: column;
  gap: ${c.gap["gap-1"]};
  padding: ${c.gap["gap-1"]};
  box-shadow: ${oe.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:e})=>typeof e=="number"?`${e}px`:e||"300px"};

  &[lang="ko"] {
    font-family: ${v.ko};
  }

  &[lang="en"] {
    font-family: ${v.en};
  }

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
    background: ${d.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${d.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${d.gray[200]} transparent;
`;H.displayName="Menu";H.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const z=({disable:e=!1,active:n=!1,leadingIcon:g,text:p,description:f,trailingIcon:s,onClick:l,className:b,lang:S,showCheckIcon:q=!0})=>{const h=()=>e?y.light["fg-neutral-disable"]:y.light["fg-neutral-primary"],$=()=>n&&!e&&q;return a.jsxs(ue,{disable:e,active:n,"data-disable":e,onClick:e?void 0:E=>l==null?void 0:l(E),className:b,lang:S,children:[g&&a.jsx(de,{children:a.jsx(g,{width:16,height:16,color:h()})}),a.jsxs(ce,{children:[p&&a.jsx(pe,{children:p}),f&&a.jsx(me,{children:f})]}),$()&&a.jsx(fe,{children:s?a.jsx(s,{width:16,height:16,color:h()}):a.jsx(ie,{width:16,height:16,color:h()})})]})},ue=i.div`
  display: flex;
  align-items: center;
  gap: ${c.gap["gap-1"]};
  padding: ${c.gap["gap-1.5"]} ${c.gap["gap-2"]};
  border-radius: ${D["rounded-1"]};
  background-color: ${d.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${d.gray[50]};
  }
`,de=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ce=i.div`
  display: flex;
  flex-direction: column;
  gap: ${c.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,pe=i.div`
  ${x(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${v.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${v.ko};
  }
  color: inherit;
`,me=i.div`
  ${x(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${v.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${v.ko};
  }
  color: ${y.light["fg-neutral-alternative"]};
`,fe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;z.displayName="Cell";z.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const B=({size:e="medium",disabled:n=!1,placeholder:g="입력하거나 선택해주세요.",value:p=[],options:f=[],onChange:s,onFocus:l,onBlur:b,className:S="",style:q,lang:h="ko",lineMode:$="multi",...E})=>{const[k,I]=u.useState(!1),[F,M]=u.useState(!1),[R,j]=u.useState(""),[m,V]=u.useState(p),[T,G]=u.useState({top:0,left:0,width:0,openUpward:!1}),w=u.useRef(null),O=u.useRef(null),L=u.useRef(null);u.useEffect(()=>{const t=r=>{const o=r.target;L.current&&L.current.contains(o)||w.current&&!w.current.contains(o)&&(I(!1),M(!1),j(""))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]),u.useEffect(()=>{if(k&&w.current){const t=()=>{if(w.current){const r=w.current.getBoundingClientRect(),o=400,P=4,A=window.innerHeight-r.bottom,re=r.top,U=A<o&&re>A;G({top:U?r.top+window.scrollY-P:r.bottom+window.scrollY+P,left:r.left+window.scrollX,width:r.width,openUpward:U})}};return t(),window.addEventListener("scroll",t,!0),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}}},[k]),u.useEffect(()=>{V(p)},[p]);const X=t=>{const r=t.target.value;j(r),k||I(!0)},Y=t=>{M(!0),I(!0),l==null||l(t)},J=t=>{M(!1),b==null||b(t)},K=t=>{var r;if(!m.includes(t.value)){const o=[...m,t.value];V(o),s==null||s(o)}j(""),(r=O.current)==null||r.focus()},Q=t=>{const r=m.filter(o=>o!==t);V(r),s==null||s(r)},W=f.filter(t=>{const r=R?t.label.toLowerCase().includes(R.toLowerCase()):!0,o=!m.includes(t.value);return r&&o}),Z=t=>f.find(r=>r.value===t),_=()=>{switch(e){case"small":return"x-small";case"large":return"small";default:return"x-small"}},ee=()=>{switch(_()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},te=()=>{const t=ee(),r=4,o=8;return $==="single"?t+o:t*3+r*2+o};return a.jsxs(ge,{ref:w,className:`multiselect-container ${S}`,style:q,...E,children:[a.jsx(he,{$size:e,$disabled:n,$focused:F,$hasChips:m.length>0,lang:h,children:a.jsxs(we,{$maxHeight:te(),$lineMode:$,children:[m.map(t=>{const r=Z(t);return r?a.jsx(ye,{onClick:o=>{n||(o.stopPropagation(),Q(t))},children:a.jsx(le,{type:"outline",size:_(),disabled:n,trailingIcon:n?void 0:a.jsx(ae,{color:"currentColor"}),children:r.label})},t):null}),a.jsx(ve,{ref:O,$size:e,$disabled:n,$focused:F,$hasChips:m.length>0,lang:h,value:R,placeholder:m.length===0?g:"",disabled:n,onChange:X,onFocus:Y,onBlur:J})]})}),k&&W.length>0&&ne.createPortal(a.jsx(xe,{ref:L,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:T.top,$left:T.left,$width:T.width,$openUpward:T.openUpward,children:a.jsx(H,{children:W.map(t=>a.jsx(z,{text:t.label,onClick:r=>{r.stopPropagation(),K(t)}},t.value))})}),document.body)]})},ge=i.div`
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

  ${({$disabled:e,$focused:n})=>e?`
        background-color: ${d.common[100]};
        border-color: ${N.light["color-border-primary"]};
        cursor: not-allowed;
      `:n?`
        background-color: ${d.common[100]};
        border-color: ${N.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      border-color: ${N.light["color-border-primary"]};
    `}
`,we=i.div`
  display: flex;
  flex-wrap: ${({$lineMode:e})=>e==="single"?"nowrap":"wrap"};
  gap: ${c.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${c.gap["gap-1"]} ${c.gap["gap-2"]};
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
    background: ${d.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${d.gray[400]};
  }
`,ye=i.div`
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

  ${({$size:e,lang:n="ko"})=>{switch(e){case"small":return`
          height: 22px;
          ${x(n,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${x(n,"body3","regular")}
        `;default:return`
          height: 26px;
          ${x(n,"body3","regular")}
        `}}}

  ${({$disabled:e})=>e?`
        color: ${y.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${y.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${y.light["fg-neutral-alternative"]};
  }
`,be=i.div`
  position: absolute;
  ${({$top:e,$openUpward:n})=>n?`bottom: calc(100vh - ${e}px);`:`top: ${e}px;`}
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,xe=C.forwardRef((e,n)=>a.jsx(be,{ref:n,...e}));B.displayName="MultiSelect";B.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:`언어 설정
@default "ko"`,defaultValue:{value:'"ko"',computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:`라인 표시 모드
- "single": 한 줄 고정, 가로 스크롤
- "multi": 최대 3줄까지 확장, 이후 세로 스크롤
@default "multi"`,defaultValue:{value:'"multi"',computed:!1}}}};export{z as C,H as M,B as a};
