import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as K}from"./iframe-CLsoOqCU.js";import{r as Q}from"./index-S7qlkCct.js";import{c as h}from"./styled-components.browser.esm-Cjeww7bt.js";import{I as Z,a as z}from"./IconArrowUp-Cts_pkXJ.js";import{M as ee}from"./Menu-CTzxsVMZ.js";import{C as te}from"./Cell-Dnv4eXea.js";import{r as re}from"./radius-DaoU83SK.js";import{c as x}from"./color-m2U5piog.js";import{b as $}from"./borderColor-CzkI5wcR.js";import{t as s}from"./textColor-G8dwupNW.js";import{s as n}from"./spacing-tE1IiUFl.js";import{t as L}from"./typography-CHdGJV44.js";const F=({size:t="medium",disabled:r=!1,active:l=!1,focused:d=!1,placeholder:v="입력하거나 선택해주세요.",value:u,options:p=[],onChange:C,onFocus:E,onBlur:I,className:H="",style:A,lang:S="ko",...D})=>{const[c,b]=o.useState(!1),[V,m]=o.useState(d),[T,f]=o.useState(u||""),[N,w]=o.useState(!0),[y,R]=o.useState(u||""),[k,W]=o.useState({top:0,left:0,width:0}),g=o.useRef(null),j=o.useRef(null),q=o.useRef(null);o.useEffect(()=>{const e=a=>{const B=a.target;if(!(q.current&&q.current.contains(B))&&g.current&&!g.current.contains(B))if(b(!1),m(!1),w(!1),y){const O=p.find(J=>J.value===y);f(O?O.label:"")}else f("")};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[y,p]),o.useEffect(()=>{m(d)},[d]),o.useEffect(()=>{if(c&&g.current){const e=()=>{if(g.current){const a=g.current.getBoundingClientRect();W({top:a.bottom+window.scrollY,left:a.left+window.scrollX,width:a.width})}};return e(),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[c]),o.useEffect(()=>{if(u){const e=p.find(a=>a.value===u);f(e?e.label:u),R(u)}else f(""),R("")},[u,p]);const Y=()=>{var e;r||(b(!c),c?w(!1):(m(!0),w(!0),(e=j.current)==null||e.focus()))},_=e=>{const a=e.target.value;f(a),w(!1),c||b(!0)},G=e=>{m(!0),b(!0),w(!0),E==null||E(e)},U=e=>{m(!1),I==null||I(e)},X=e=>{f(e.label),R(e.value),C==null||C(e.value),b(!1),m(!1)},M=()=>r?s.light["fg-neutral-alternative"]:s.light["fg-neutral-primary"],P=N?p:p.filter(e=>e.label.toLowerCase().includes(T.toLowerCase()));return i.jsxs(oe,{ref:g,className:`combobox-container ${H}`,style:A,...D,children:[i.jsxs(ae,{$size:t,$disabled:r,$active:l,$focused:V,lang:S,children:[i.jsx(ne,{ref:j,$size:t,$disabled:r,$active:l,$focused:V,$hasValue:!!T,lang:S,value:T,placeholder:v,disabled:r,onChange:_,onFocus:G,onBlur:U}),i.jsx(se,{size:t,onClick:Y,children:c?i.jsx(Z,{width:t==="small"?16:t==="large"?24:20,height:t==="small"?16:t==="large"?24:20,color:M()}):i.jsx(z,{width:t==="small"?16:t==="large"?24:20,height:t==="small"?16:t==="large"?24:20,color:M()})})]}),c&&P.length>0&&Q.createPortal(i.jsx(ie,{ref:q,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:k.top,$left:k.left,$width:k.width,children:i.jsx(ee,{children:P.map(e=>i.jsx(te,{text:e.label,description:e.description,leadingContent:e.leadingContent,active:e.value===y,onClick:a=>{a.stopPropagation(),X(e)}},e.value))})}),document.body)]})},oe=h.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ae=h.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${re["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:t,$active:r,$focused:l})=>t?`
        background-color: ${x.common[100]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:r&&l?`
        background-color: ${x.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:r?`
        background-color: ${x.common[100]};
        border-color: ${$.light["color-border-primary"]};
      `:l?`
        background-color: ${x.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${x.common[100]};
      border-color: ${$.light["color-border-primary"]};
    `}
`,ne=h.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:t,lang:r="ko"})=>{const l=t==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],v=(t==="small"?16:t==="large"?24:20)+parseInt(l)*2;switch(t){case"small":return`
          height: 30px;
          ${L(r,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${v}px;
        `;case"large":return`
          height: 46px;
          ${L(r,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${v}px;
        `;default:return`
          height: 38px;
          ${L(r,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${v}px;
        `}}}

  ${({$disabled:t,$active:r,$focused:l,$hasValue:d})=>t?`
        color: ${s.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:r&&l?`
        color: ${s.light["fg-neutral-primary"]};
      `:r||d?`
        color: ${s.light["fg-neutral-primary"]};
      `:l?`
        color: ${s.light["fg-neutral-alternative"]};
      `:`
      color: ${s.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${s.light["fg-neutral-alternative"]};
  }
`;h.div`
  position: absolute;
  top: calc(100% + ${n.gap["gap-1"]});
  left: 0;
  right: 0;
  z-index: 1000;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const le=h.div`
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
`,ie=K.forwardRef((t,r)=>i.jsx(le,{ref:r,...t})),se=h.div`
  position: absolute;
  right: ${({size:t})=>t==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;F.displayName="ComboBox";F.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'입력하거나 선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};export{F as C};
