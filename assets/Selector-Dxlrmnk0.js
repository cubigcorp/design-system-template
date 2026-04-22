import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as W}from"./iframe-skmiukBS.js";import{r as Y}from"./index-h6YPilm6.js";import{c as v}from"./styled-components.browser.esm-1f8qeTbm.js";import{I as _,a as G}from"./IconArrowUp-Cts_pkXJ.js";import{M as U}from"./Menu--iCk_xeb.js";import{C as X}from"./Cell-Cwk0QSvL.js";import{r as B}from"./radius-DaoU83SK.js";import{c as r}from"./color-m2U5piog.js";import{s as a}from"./spacing-tE1IiUFl.js";import{t as T}from"./typography-CHdGJV44.js";import{t as s}from"./textColor-G8dwupNW.js";import{b as p}from"./borderColor-CzkI5wcR.js";const M=({size:e="medium",status:l="default",disabled:i=!1,active:d=!1,focused:u=!1,placeholder:P="선택해주세요.",value:S,options:k=[],onChange:b,onFocus:w,onBlur:m,className:L="",style:I,lang:V="ko",showCheckIcon:O=!0,...H})=>{const[f,y]=o.useState(!1),[R,$]=o.useState(d),[A,h]=o.useState(u),[x,F]=o.useState({top:0,left:0,width:0}),g=o.useRef(null),E=o.useRef(null);o.useEffect(()=>{const t=c=>{const j=c.target;E.current&&E.current.contains(j)||g.current&&!g.current.contains(j)&&(y(!1),h(!1))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]),o.useEffect(()=>{$(d)},[d]),o.useEffect(()=>{h(u)},[u]),o.useEffect(()=>{if(f&&g.current){const t=()=>{if(g.current){const c=g.current.getBoundingClientRect();F({top:c.bottom+window.scrollY,left:c.left+window.scrollX,width:c.width})}};return t(),window.addEventListener("scroll",t,!0),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}}},[f]);const C=k.find(t=>t.value===S),D=()=>{i||(y(!f),f?(h(!1),$(!1),m==null||m({})):(h(!0),$(!0),w==null||w({})))},N=t=>{t.disabled||(b==null||b(t.value),y(!1),h(!1),m==null||m({}))},q=()=>i?s.light["fg-neutral-alternative"]:s.light["fg-neutral-primary"];return n.jsxs(J,{ref:g,className:`selector-container ${L}`,style:I,...H,children:[n.jsxs(Z,{$size:e,$status:l,$disabled:i,$active:R,$focused:A,lang:V,onClick:D,type:"button","data-active":R?"true":"false",children:[n.jsx(z,{children:C?C.label:P}),n.jsx(ee,{size:e,children:f?n.jsx(_,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:q()}):n.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:q()})})]}),f&&Y.createPortal(n.jsx(Q,{ref:E,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:x.top,$left:x.left,$width:x.width,children:n.jsx(U,{showCheckIcon:O,children:k.map(t=>n.jsx(X,{text:t.label,description:t.description,leadingContent:t.leadingContent,active:t.value===S,disable:t.disabled,onClick:c=>{c.stopPropagation(),N(t)}},t.value))})}),document.body)]})},J=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;v.div`
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
`;const K=v.div`
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
`,Q=W.forwardRef((e,l)=>n.jsx(K,{ref:l,...e})),Z=v.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${B["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:l="ko"})=>{const i=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],u=(e==="small"?16:e==="large"?24:20)+parseInt(i)*2;switch(e){case"small":return`
          height: 32px;
          ${T(l,"body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${u}px;
        `;case"large":return`
          height: 48px;
          ${T(l,"body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${u}px;
        `;default:return`
          height: 40px;
          ${T(l,"body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${u}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:l,$active:i,$focused:d})=>e==="negative"?i?`
          background-color: ${r.common[100]};
          color: ${s.light["fg-neutral-primary"]};
          border: 1.8px solid ${p.light["color-border-negative"]};
        `:`
        background-color: ${r.common[100]};
        color: ${s.light["fg-neutral-alternative"]};
        border: 1.8px solid ${p.light["color-border-negative"]};
      `:l?`
        background-color: ${r.gray[50]};
        color: ${s.light["fg-neutral-disable"]};
        border-color: ${p.light["color-border-primary"]};
        cursor: not-allowed;
      `:i&&d?`
        background-color: ${r.gray[50]};
        color: ${s.light["fg-neutral-primary"]};
        border-color: ${p.light["color-border-focused"]};
      `:i?`
        background-color: ${r.common[100]};
        color: ${s.light["fg-neutral-primary"]};
        border-color: ${p.light["color-border-primary"]};
      `:d?`
        background-color: ${r.gray[50]};
        color: ${s.light["fg-neutral-alternative"]};
        border-color: ${p.light["color-border-focused"]};
      `:`
      background-color: ${r.common[100]};
      color: ${s.light["fg-neutral-alternative"]};
      border-color: ${p.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${r.gray[50]};
    border-color: ${r.gray[300]};
  }

  &:active:not(:disabled):not([data-active='true']) {
    background-color: ${r.gray[50]};
    border-color: ${r.gray[300]};
  }
`,z=v.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ee=v.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;M.displayName="Selector";M.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{M as S};
