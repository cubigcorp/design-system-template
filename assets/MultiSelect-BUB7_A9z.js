import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as u}from"./iframe-0zuFSAZt.js";import{r as ae}from"./index-Dj6QPiUi.js";import{d as i,t as v}from"./textColor-DfwQzZyK.js";import{S as oe}from"./icon_close_outline_16-WP7xOrib.js";import{s as p}from"./spacing-tE1IiUFl.js";import{s as ie}from"./shadow-DVq_1U2q.js";import{c}from"./color-CiwAFuFb.js";import{f as y}from"./fontFamily-CsG1KcIF.js";import{r as B}from"./radius-DaoU83SK.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as P}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as x}from"./typography-BBThIZ7c.js";import"./IconSearch-BmX69--2.js";import{I as le}from"./IconCheck-CKtc9n1_.js";import{C as se}from"./Chip-DMtgpq-1.js";const z=({children:t,className:n,width:h,showCheckIcon:m=!0,...g})=>{const s=C.Children.map(t,l=>C.isValidElement(l)&&l.props.showCheckIcon===void 0?C.cloneElement(l,{showCheckIcon:m}):l);return o.jsx(ue,{className:n,$width:h,...g,children:s})},ue=i.div`
  display: flex;
  flex-direction: column;
  gap: ${p.gap["gap-1"]};
  padding: ${p.gap["gap-1"]};
  box-shadow: ${ie.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:t})=>typeof t=="number"?`${t}px`:t||"300px"};

  &[lang="ko"] {
    font-family: ${y.ko};
  }

  &[lang="en"] {
    font-family: ${y.en};
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
`;z.displayName="Menu";z.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const N=({disable:t=!1,active:n=!1,leadingIcon:h,text:m,description:g,trailingIcon:s,onClick:l,className:b,lang:S,showCheckIcon:q=!0})=>{const w=()=>t?v.light["fg-neutral-disable"]:v.light["fg-neutral-primary"],$=()=>n&&!t&&q;return o.jsxs(ce,{disable:t,active:n,"data-disable":t,onClick:t?void 0:R=>l==null?void 0:l(R),className:b,lang:S,children:[h&&o.jsx(de,{children:o.jsx(h,{width:16,height:16,color:w()})}),o.jsxs(pe,{children:[m&&o.jsx(me,{children:m}),g&&o.jsx(fe,{children:g})]}),$()&&o.jsx(ge,{children:s?o.jsx(s,{width:16,height:16,color:w()}):o.jsx(le,{width:16,height:16,color:w()})})]})},ce=i.div`
  display: flex;
  align-items: center;
  gap: ${p.gap["gap-1"]};
  padding: ${p.gap["gap-1.5"]} ${p.gap["gap-2"]};
  border-radius: ${B["rounded-1"]};
  background-color: ${c.common[100]};
  cursor: ${({disable:t})=>t?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${c.gray[50]};
  }
`,de=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,pe=i.div`
  display: flex;
  flex-direction: column;
  gap: ${p.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,me=i.div`
  ${x(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${y.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${y.ko};
  }
  color: inherit;
`,fe=i.div`
  ${x(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${y.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${y.ko};
  }
  color: ${v.light["fg-neutral-alternative"]};
`,ge=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;N.displayName="Cell";N.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const G=({size:t="medium",disabled:n=!1,placeholder:h="입력하거나 선택해주세요.",value:m=[],options:g=[],onChange:s,onFocus:l,onBlur:b,className:S="",style:q,lang:w="ko",lineMode:$="multi",...R})=>{const[k,E]=u.useState(!1),[H,I]=u.useState(!1),[M,j]=u.useState(""),[d,V]=u.useState(m),[T,X]=u.useState({top:0,left:0,width:0,openUpward:!1}),f=u.useRef(null),O=u.useRef(null),L=u.useRef(null);u.useEffect(()=>{const e=r=>{const a=r.target;L.current&&L.current.contains(a)||f.current&&!f.current.contains(a)&&(E(!1),I(!1),j(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),u.useEffect(()=>{if(k&&f.current){const e=()=>{if(f.current){const a=f.current.getBoundingClientRect(),_=400,A=4,U=window.innerHeight-a.bottom,ne=a.top,D=U<_&&ne>U;X({top:D?a.top+window.scrollY-A:a.bottom+window.scrollY+A,left:a.left+window.scrollX,width:a.width,openUpward:D})}};e();const r=new ResizeObserver(()=>{e()});return f.current&&r.observe(f.current),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{r.disconnect(),window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[k,d.length]),u.useEffect(()=>{V(m)},[m]);const Y=e=>{const r=e.target.value;j(r),k||E(!0)},J=e=>{I(!0),E(!0),l==null||l(e)},K=e=>{I(!1),b==null||b(e)},Q=e=>{var r;if(!d.includes(e.value)){const a=[...d,e.value];V(a),s==null||s(a)}j(""),(r=O.current)==null||r.focus()},Z=e=>{const r=d.filter(a=>a!==e);V(r),s==null||s(r)},F=g.filter(e=>{const r=M?e.label.toLowerCase().includes(M.toLowerCase()):!0,a=!d.includes(e.value);return r&&a}),ee=e=>g.find(r=>r.value===e),W=()=>{switch(t){case"small":return"x-small";case"large":return"small";default:return"x-small"}},te=()=>{switch(W()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},re=()=>{const e=te(),r=4,a=8;return $==="single"?e+a:e*3+r*2+a};return o.jsxs(he,{ref:f,className:`multiselect-container ${S}`,style:q,...R,children:[o.jsx(we,{$size:t,$disabled:n,$focused:H,$hasChips:d.length>0,lang:w,children:o.jsxs(ve,{$maxHeight:re(),$lineMode:$,children:[d.map(e=>{const r=ee(e);return r?o.jsx(ye,{onClick:a=>{n||(a.stopPropagation(),Z(e))},children:o.jsx(se,{type:"outline",size:W(),disabled:n,trailingIcon:n?void 0:o.jsx(oe,{color:"currentColor"}),children:r.label})},e):null}),o.jsx(be,{ref:O,$size:t,$disabled:n,$focused:H,$hasChips:d.length>0,lang:w,value:M,placeholder:d.length===0?h:"",disabled:n,onChange:Y,onFocus:J,onBlur:K})]})}),k&&F.length>0&&ae.createPortal(o.jsx($e,{ref:L,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:T.top,$left:T.left,$width:T.width,$openUpward:T.openUpward,children:o.jsx(z,{children:F.map(e=>o.jsx(N,{text:e.label,onClick:r=>{r.stopPropagation(),Q(e)}},e.value))})}),document.body)]})},he=i.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,we=i.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${B["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:t,$focused:n})=>t?`
        background-color: ${c.common[100]};
        border-color: ${P.light["color-border-primary"]};
        cursor: not-allowed;
      `:n?`
        background-color: ${c.common[100]};
        border-color: ${P.light["color-border-focused"]};
      `:`
      background-color: ${c.common[100]};
      border-color: ${P.light["color-border-primary"]};
    `}
`,ve=i.div`
  display: flex;
  flex-wrap: ${({$lineMode:t})=>t==="single"?"nowrap":"wrap"};
  gap: ${p.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${p.gap["gap-1"]} ${p.gap["gap-2"]};
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
`,ye=i.div`
  display: inline-flex;
  cursor: pointer;
`,be=i.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:t,lang:n="ko"})=>{switch(t){case"small":return`
          height: 22px;
          ${x(n,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${x(n,"body3","regular")}
        `;default:return`
          height: 26px;
          ${x(n,"body3","regular")}
        `}}}

  ${({$disabled:t})=>t?`
        color: ${v.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${v.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${v.light["fg-neutral-alternative"]};
  }
`,xe=i.div`
  position: absolute;
  ${({$top:t,$openUpward:n})=>n?`bottom: calc(100vh - ${t}px);`:`top: ${t}px;`}
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,$e=C.forwardRef((t,n)=>o.jsx(xe,{ref:n,...t}));G.displayName="MultiSelect";G.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:`언어 설정
@default "ko"`,defaultValue:{value:'"ko"',computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:`라인 표시 모드
- "single": 한 줄 고정, 가로 스크롤
- "multi": 최대 3줄까지 확장, 이후 세로 스크롤
@default "multi"`,defaultValue:{value:'"multi"',computed:!1}}}};export{N as C,z as M,G as a};
