import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R as C,r as u}from"./iframe-a1GnT4YX.js";import{r as ne}from"./index-D0zUuoUb.js";import{d as i}from"./styled-components.browser.esm-D8ZmqkE2.js";import{S as ae}from"./icon_close_outline_16-C1Rgh5Su.js";import{s as f}from"./spacing-tE1IiUFl.js";import{s as oe}from"./shadow-DVq_1U2q.js";import{c as d}from"./color-CiwAFuFb.js";import{r as D}from"./radius-DaoU83SK.js";import{t as v}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as L}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as x}from"./typography-hbgufnaT.js";import"./IconSearch-D4pbJy3T.js";import{I as ie}from"./IconCheck-CKtc9n1_.js";import{C as se}from"./Chip-CEXq_-E5.js";const P=({children:t,className:n,width:h,showCheckIcon:p=!0,...g})=>{const l=C.Children.map(t,s=>C.isValidElement(s)&&s.props.showCheckIcon===void 0?C.cloneElement(s,{showCheckIcon:p}):s);return o.jsx(le,{className:n,$width:h,...g,children:l})},le=i.div`
  display: flex;
  flex-direction: column;
  gap: ${f.gap["gap-1"]};
  padding: ${f.gap["gap-1"]};
  box-shadow: ${oe.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:t})=>typeof t=="number"?`${t}px`:t||"300px"};

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
`;P.displayName="Menu";P.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const z=({disable:t=!1,active:n=!1,leadingContent:h,text:p,description:g,trailingIcon:l,onClick:s,className:b,lang:T,showCheckIcon:S=!0})=>{const w=()=>t?v.light["fg-neutral-disable"]:v.light["fg-neutral-primary"],y=()=>n&&!t&&S;return o.jsxs(ue,{disable:t,active:n,"data-disable":t,onClick:t?void 0:q=>s==null?void 0:s(q),className:b,lang:T,children:[h&&o.jsx(de,{children:o.jsx(h,{color:w()})}),o.jsxs(ce,{children:[p&&o.jsx(pe,{children:p}),g&&o.jsx(me,{children:g})]}),y()&&o.jsx(fe,{children:l?o.jsx(l,{color:w()}):o.jsx(ie,{width:16,height:16,color:w()})})]})},ue=i.div`
  display: flex;
  align-items: center;
  gap: ${f.gap["gap-2"]};
  padding: ${f.gap["gap-1.5"]} ${f.gap["gap-2"]};
  border-radius: ${D["rounded-1"]};
  background-color: ${d.common[100]};
  cursor: ${({disable:t})=>t?"not-allowed":"pointer"};
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
  flex: 1;
  min-width: 0;
`,pe=i.div`
  ${x(void 0,"body2","regular")}
  font-family: inherit;
  color: inherit;
`,me=i.div`
  ${x(void 0,"caption2","regular")}
  font-family: inherit;
  color: ${v.light["fg-neutral-alternative"]};
`,fe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;z.displayName="Cell";z.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingContent:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const B=({size:t="medium",disabled:n=!1,placeholder:h="입력하거나 선택해주세요.",value:p=[],options:g=[],onChange:l,onFocus:s,onBlur:b,className:T="",style:S,lang:w="ko",lineMode:y="multi",...q})=>{const[$,R]=u.useState(!1),[N,E]=u.useState(!1),[M,I]=u.useState(""),[c,j]=u.useState(p),[k,G]=u.useState({top:0,left:0,width:0,openUpward:!1}),m=u.useRef(null),H=u.useRef(null),V=u.useRef(null);u.useEffect(()=>{const e=r=>{const a=r.target;V.current&&V.current.contains(a)||m.current&&!m.current.contains(a)&&(R(!1),E(!1),I(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),u.useEffect(()=>{if($&&m.current){const e=()=>{if(m.current){const a=m.current.getBoundingClientRect(),W=400,_=4,A=window.innerHeight-a.bottom,re=a.top,U=A<W&&re>A;G({top:U?a.top+window.scrollY-_:a.bottom+window.scrollY+_,left:a.left+window.scrollX,width:a.width,openUpward:U})}};e();const r=new ResizeObserver(()=>{e()});return m.current&&r.observe(m.current),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{r.disconnect(),window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[$,c.length]),u.useEffect(()=>{j(p)},[p]);const X=e=>{const r=e.target.value;I(r),$||R(!0)},Y=e=>{E(!0),R(!0),s==null||s(e)},J=e=>{E(!1),b==null||b(e)},K=e=>{var r;if(!c.includes(e.value)){const a=[...c,e.value];j(a),l==null||l(a)}I(""),(r=H.current)==null||r.focus()},Q=e=>{const r=c.filter(a=>a!==e);j(r),l==null||l(r)},O=g.filter(e=>{const r=M?e.label.toLowerCase().includes(M.toLowerCase()):!0,a=!c.includes(e.value);return r&&a}),Z=e=>g.find(r=>r.value===e),F=()=>{switch(t){case"small":return"x-small";case"large":return"small";default:return"x-small"}},ee=()=>{switch(F()){case"x-small":return 24;case"small":return 32;case"medium":return 36;default:return 24}},te=()=>{const e=ee(),r=4,a=8;return y==="single"?e+a:e*3+r*2+a};return o.jsxs(ge,{ref:m,className:`multiselect-container ${T}`,style:S,...q,children:[o.jsx(he,{$size:t,$disabled:n,$focused:N,$hasChips:c.length>0,lang:w,children:o.jsxs(we,{$maxHeight:te(),$lineMode:y,children:[c.map(e=>{const r=Z(e);return r?o.jsx(ve,{onClick:a=>{n||(a.stopPropagation(),Q(e))},children:o.jsx(se,{type:"solid",size:F(),disabled:n,trailingIcon:n?void 0:o.jsx(ae,{color:"currentColor"}),children:r.label})},e):null}),o.jsx(be,{ref:H,$size:t,$disabled:n,$focused:N,$hasChips:c.length>0,lang:w,value:M,placeholder:c.length===0?h:"",disabled:n,onChange:X,onFocus:Y,onBlur:J})]})}),$&&O.length>0&&ne.createPortal(o.jsx(ye,{ref:V,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:k.top,$left:k.left,$width:k.width,$openUpward:k.openUpward,children:o.jsx(P,{children:O.map(e=>o.jsx(z,{text:e.label,description:e.description,leadingContent:e.leadingContent,onClick:r=>{r.stopPropagation(),K(e)}},e.value))})}),document.body)]})},ge=i.div`
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
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:t,$focused:n})=>t?`
        background-color: ${d.common[100]};
        border-color: ${L.light["color-border-primary"]};
        cursor: not-allowed;
      `:n?`
        background-color: ${d.common[100]};
        border-color: ${L.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      border-color: ${L.light["color-border-primary"]};
    `}
`,we=i.div`
  display: flex;
  flex-wrap: ${({$lineMode:t})=>t==="single"?"nowrap":"wrap"};
  gap: ${f.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${f.gap["gap-1"]} ${f.gap["gap-2"]};
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
    background: ${d.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${d.gray[400]};
  }
`,ve=i.div`
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
`,ye=C.forwardRef((t,n)=>o.jsx(xe,{ref:n,...t}));B.displayName="MultiSelect";B.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:`언어 설정
@default "ko"`,defaultValue:{value:'"ko"',computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:`라인 표시 모드
- "single": 한 줄 고정, 가로 스크롤
- "multi": 최대 3줄까지 확장, 이후 세로 스크롤
@default "multi"`,defaultValue:{value:'"multi"',computed:!1}}}};export{z as C,P as M,B as a};
