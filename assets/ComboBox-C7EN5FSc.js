import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as Q}from"./iframe-pNyzd6po.js";import{r as Z}from"./index-CcPfz-H-.js";import{c as w}from"./styled-components.browser.esm-CdWSEUdl.js";import{I as z,a as ee}from"./IconArrowUp-Cts_pkXJ.js";import{M as te}from"./Menu-Dq77ntXa.js";import{C as re}from"./Cell-CEWcqocF.js";import{r as oe}from"./radius-DaoU83SK.js";import{c as h}from"./color-m2U5piog.js";import{b}from"./borderColor-CzkI5wcR.js";import{t as u}from"./textColor-G8dwupNW.js";import{s as l}from"./spacing-tE1IiUFl.js";import{t as V}from"./typography-CHdGJV44.js";const F=({size:t="medium",status:a="default",disabled:r=!1,active:s=!1,focused:c=!1,placeholder:H="입력하거나 선택해주세요.",value:d,options:m=[],onChange:C,onFocus:E,onBlur:I,className:A="",style:D,lang:L="ko",...N})=>{const[p,x]=o.useState(!1),[S,f]=o.useState(c),[T,g]=o.useState(d||""),[W,$]=o.useState(!0),[y,k]=o.useState(d||""),[R,Y]=o.useState({top:0,left:0,width:0}),v=o.useRef(null),j=o.useRef(null),q=o.useRef(null);o.useEffect(()=>{const e=n=>{const B=n.target;if(!(q.current&&q.current.contains(B))&&v.current&&!v.current.contains(B))if(x(!1),f(!1),$(!1),y){const O=m.find(K=>K.value===y);g(O?O.label:"")}else g("")};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[y,m]),o.useEffect(()=>{f(c)},[c]),o.useEffect(()=>{if(p&&v.current){const e=()=>{if(v.current){const n=v.current.getBoundingClientRect();Y({top:n.bottom+window.scrollY,left:n.left+window.scrollX,width:n.width})}};return e(),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[p]),o.useEffect(()=>{if(d){const e=m.find(n=>n.value===d);g(e?e.label:d),k(d)}else g(""),k("")},[d,m]);const _=()=>{var e;r||(x(!p),p?$(!1):(f(!0),$(!0),(e=j.current)==null||e.focus()))},G=e=>{const n=e.target.value;g(n),$(!1),p||x(!0)},U=e=>{f(!0),x(!0),$(!0),E==null||E(e)},X=e=>{f(!1),I==null||I(e)},J=e=>{g(e.label),k(e.value),C==null||C(e.value),x(!1),f(!1)},M=()=>r?u.light["fg-neutral-alternative"]:u.light["fg-neutral-primary"],P=W?m:m.filter(e=>e.label.toLowerCase().includes(T.toLowerCase()));return i.jsxs(ae,{ref:v,className:`combobox-container ${A}`,style:D,...N,children:[i.jsxs(ne,{$size:t,$status:a,$disabled:r,$active:s,$focused:S,lang:L,children:[i.jsx(le,{ref:j,$size:t,$disabled:r,$active:s,$focused:S,$hasValue:!!T,lang:L,value:T,placeholder:H,disabled:r,onChange:G,onFocus:U,onBlur:X}),i.jsx(ue,{size:t,onClick:_,children:p?i.jsx(z,{width:t==="small"?16:t==="large"?24:20,height:t==="small"?16:t==="large"?24:20,color:M()}):i.jsx(ee,{width:t==="small"?16:t==="large"?24:20,height:t==="small"?16:t==="large"?24:20,color:M()})})]}),p&&P.length>0&&Z.createPortal(i.jsx(se,{ref:q,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:R.top,$left:R.left,$width:R.width,children:i.jsx(te,{children:P.map(e=>i.jsx(re,{text:e.label,description:e.description,leadingContent:e.leadingContent,active:e.value===y,onClick:n=>{n.stopPropagation(),J(e)}},e.value))})}),document.body)]})},ae=w.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ne=w.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${oe["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$status:t,$disabled:a,$active:r,$focused:s})=>t==="negative"?`
        background-color: ${h.common[100]};
        border: 1.8px solid ${b.light["color-border-negative"]};
      `:a?`
        background-color: ${h.common[100]};
        border-color: ${b.light["color-border-primary"]};
        cursor: not-allowed;
      `:r&&s?`
        background-color: ${h.common[100]};
        border-color: ${b.light["color-border-focused"]};
      `:r?`
        background-color: ${h.common[100]};
        border-color: ${b.light["color-border-primary"]};
      `:s?`
        background-color: ${h.common[100]};
        border-color: ${b.light["color-border-focused"]};
      `:`
      background-color: ${h.common[100]};
      border-color: ${b.light["color-border-primary"]};
    `}
`,le=w.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:t,lang:a="ko"})=>{const r=t==="large"?l.gap["gap-2.5"]:l.gap["gap-2"],c=(t==="small"?16:t==="large"?24:20)+parseInt(r)*2;switch(t){case"small":return`
          height: 30px;
          ${V(a,"body2","regular")}
          padding: ${l.gap["gap-1"]} ${l.gap["gap-2"]};
          padding-right: ${c}px;
        `;case"large":return`
          height: 46px;
          ${V(a,"body3","regular")}
          padding: ${l.gap["gap-3"]} ${l.gap["gap-2.5"]};
          padding-right: ${c}px;
        `;default:return`
          height: 38px;
          ${V(a,"body3","regular")}
          padding: ${l.gap["gap-2"]} ${l.gap["gap-2"]};
          padding-right: ${c}px;
        `}}}

  ${({$disabled:t,$active:a,$focused:r,$hasValue:s})=>t?`
        color: ${u.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&r?`
        color: ${u.light["fg-neutral-primary"]};
      `:a||s?`
        color: ${u.light["fg-neutral-primary"]};
      `:r?`
        color: ${u.light["fg-neutral-alternative"]};
      `:`
      color: ${u.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${u.light["fg-neutral-alternative"]};
  }
`;w.div`
  position: absolute;
  top: calc(100% + ${l.gap["gap-1"]});
  left: 0;
  right: 0;
  z-index: 1000;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const ie=w.div`
  position: absolute;
  top: ${({$top:t})=>t}px;
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,se=Q.forwardRef((t,a)=>i.jsx(ie,{ref:a,...t})),ue=w.div`
  position: absolute;
  right: ${({size:t})=>t==="large"?l.gap["gap-2.5"]:l.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;F.displayName="ComboBox";F.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'입력하거나 선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};export{F as C};
