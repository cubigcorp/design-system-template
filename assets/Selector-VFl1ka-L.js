import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as N}from"./iframe-6QM99Qn2.js";import{r as W}from"./index-Dky0HZs1.js";import{c as m}from"./styled-components.browser.esm-CRgZ7Zfy.js";import{I as Y,a as _}from"./IconArrowUp-Cts_pkXJ.js";import{M as G}from"./Menu-CzPrUpeY.js";import{C as U}from"./Cell-XZsDJ3fS.js";import{r as X}from"./radius-DaoU83SK.js";import{c as l}from"./color-m2U5piog.js";import{s as a}from"./spacing-tE1IiUFl.js";import{t as T}from"./typography-CHdGJV44.js";import{t as d}from"./textColor-G8dwupNW.js";import{b as v}from"./borderColor-CzkI5wcR.js";const M=({size:e="medium",disabled:r=!1,active:i=!1,focused:h=!1,placeholder:f="선택해주세요.",value:S,options:k=[],onChange:w,onFocus:y,onBlur:c,className:P="",style:L,lang:I="ko",showCheckIcon:V=!0,...O})=>{const[u,b]=o.useState(!1),[R,x]=o.useState(i),[H,g]=o.useState(h),[$,A]=o.useState({top:0,left:0,width:0}),p=o.useRef(null),E=o.useRef(null);o.useEffect(()=>{const t=s=>{const q=s.target;E.current&&E.current.contains(q)||p.current&&!p.current.contains(q)&&(b(!1),g(!1))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]),o.useEffect(()=>{x(i)},[i]),o.useEffect(()=>{g(h)},[h]),o.useEffect(()=>{if(u&&p.current){const t=()=>{if(p.current){const s=p.current.getBoundingClientRect();A({top:s.bottom+window.scrollY,left:s.left+window.scrollX,width:s.width})}};return t(),window.addEventListener("scroll",t,!0),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}}},[u]);const C=k.find(t=>t.value===S),F=()=>{r||(b(!u),u?(g(!1),x(!1),c==null||c({})):(g(!0),x(!0),y==null||y({})))},D=t=>{w==null||w(t.value),b(!1),g(!1),c==null||c({})},j=()=>r?d.light["fg-neutral-alternative"]:d.light["fg-neutral-primary"];return n.jsxs(B,{ref:p,className:`selector-container ${P}`,style:L,...O,children:[n.jsxs(Q,{$size:e,$disabled:r,$active:R,$focused:H,lang:I,onClick:F,type:"button","data-active":R?"true":"false",children:[n.jsx(Z,{children:C?C.label:f}),n.jsx(z,{size:e,children:u?n.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:j()}):n.jsx(_,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:j()})})]}),u&&W.createPortal(n.jsx(K,{ref:E,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:$.top,$left:$.left,$width:$.width,children:n.jsx(G,{showCheckIcon:V,children:k.map(t=>n.jsx(U,{text:t.label,description:t.description,leadingContent:t.leadingContent,active:t.value===S,onClick:s=>{s.stopPropagation(),D(t)}},t.value))})}),document.body)]})},B=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;m.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${a.gap["gap-1"]};

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const J=m.div`
  position: absolute;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,K=N.forwardRef((e,r)=>n.jsx(J,{ref:r,...e})),Q=m.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${X["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:r="ko"})=>{const i=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],f=(e==="small"?16:e==="large"?24:20)+parseInt(i)*2;switch(e){case"small":return`
          height: 32px;
          ${T(r,"body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${f}px;
        `;case"large":return`
          height: 48px;
          ${T(r,"body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${f}px;
        `;default:return`
          height: 40px;
          ${T(r,"body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${f}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:r,$focused:i})=>e?`
        background-color: ${l.gray[50]};
        color: ${d.light["fg-neutral-disable"]};
        border-color: ${v.light["color-border-primary"]};
        cursor: not-allowed;
      `:r&&i?`
        background-color: ${l.gray[50]};
        color: ${d.light["fg-neutral-primary"]};
        border-color: ${v.light["color-border-focused"]};
      `:r?`
        background-color: ${l.common[100]};
        color: ${d.light["fg-neutral-primary"]};
        border-color: ${v.light["color-border-primary"]};
      `:i?`
        background-color: ${l.gray[50]};
        color: ${d.light["fg-neutral-alternative"]};
        border-color: ${v.light["color-border-focused"]};
      `:`
      background-color: ${l.common[100]};
      color: ${d.light["fg-neutral-alternative"]};
      border-color: ${v.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${l.gray[50]};
    border-color: ${l.gray[300]};
  }

  &:active:not(:disabled):not([data-active='true']) {
    background-color: ${l.gray[50]};
    border-color: ${l.gray[300]};
  }
`,Z=m.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,z=m.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;M.displayName="Selector";M.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{M as S};
