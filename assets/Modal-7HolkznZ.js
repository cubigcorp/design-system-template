import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{d as c,l as P,m as z}from"./styled-components.browser.esm-C8ZrTVSh.js";import{L as ve,D as he}from"./Description-DGhVcbIc.js";import{r as s,R as G}from"./iframe-BWSb8WuG.js";import{r as re}from"./index-Bka6C5bA.js";import{f as ne,g as oe,h as ye,i as be,a as xe,I as we,j as le}from"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{M as ie,C as se}from"./Cell-D-SI0M8V.js";import{c as u}from"./color-CiwAFuFb.js";import{t as T}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import{b as V}from"./borderColor-C_RHITEf.js";import{l as ue}from"./layerColor-7aOJUZki.js";import{t as D,a as $e}from"./typography-hbgufnaT.js";import{r as N}from"./radius-DaoU83SK.js";import{s as o}from"./spacing-tE1IiUFl.js";import{M as Te}from"./MultiSelect-CfAYXC2V.js";import{s as de}from"./shadow-DVq_1U2q.js";const U=({size:e="medium",disabled:t=!1,active:r=!1,focused:n=!1,placeholder:d="선택해주세요.",value:f,options:g=[],onChange:y,onFocus:$,onBlur:b,className:C="",style:i,lang:x="ko",showCheckIcon:w=!0,...h})=>{const[m,S]=s.useState(!1),[v,k]=s.useState(r),[E,M]=s.useState(n),[j,q]=s.useState({top:0,left:0,width:0}),I=s.useRef(null),R=s.useRef(null);s.useEffect(()=>{const p=H=>{const F=H.target;R.current&&R.current.contains(F)||I.current&&!I.current.contains(F)&&(S(!1),M(!1))};return document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[]),s.useEffect(()=>{k(r)},[r]),s.useEffect(()=>{M(n)},[n]),s.useEffect(()=>{if(m&&I.current){const p=()=>{if(I.current){const H=I.current.getBoundingClientRect();q({top:H.bottom+window.scrollY,left:H.left+window.scrollX,width:H.width})}};return p(),window.addEventListener("scroll",p,!0),window.addEventListener("resize",p),()=>{window.removeEventListener("scroll",p,!0),window.removeEventListener("resize",p)}}},[m]);const A=g.find(p=>p.value===f),O=()=>{t||(S(!m),m?(M(!1),k(!1),b==null||b({})):(M(!0),k(!0),$==null||$({})))},_=p=>{y==null||y(p.value),S(!1),M(!1),b==null||b({})},B=()=>t?T.light["fg-neutral-alternative"]:T.light["fg-neutral-primary"];return a.jsxs(Ee,{ref:I,className:`selector-container ${C}`,style:i,...h,children:[a.jsxs(Ce,{$size:e,$disabled:t,$active:v,$focused:E,lang:x,onClick:O,type:"button","data-active":v?"true":"false",children:[a.jsx(je,{children:A?A.label:d}),a.jsx(Se,{size:e,children:m?a.jsx(ne,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):a.jsx(oe,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),m&&re.createPortal(a.jsx(Ie,{ref:R,onMouseDown:p=>p.stopPropagation(),onMouseDownCapture:p=>p.stopPropagation(),onClick:p=>p.stopPropagation(),"data-portal-menu":!0,$top:j.top,$left:j.left,$width:j.width,children:a.jsx(ie,{showCheckIcon:w,children:g.map(p=>a.jsx(se,{text:p.label,description:p.description,leadingContent:p.leadingContent,active:p.value===f,onClick:H=>{H.stopPropagation(),_(p)}},p.value))})}),document.body)]})},Ee=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;c.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${o.gap["gap-1"]};

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const qe=c.div`
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
`,Ie=G.forwardRef((e,t)=>a.jsx(qe,{ref:t,...e})),Ce=c.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${N["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:t="ko"})=>{const r=e==="large"?o.gap["gap-2.5"]:o.gap["gap-2"],d=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${D(t,"body2","regular")}
          padding: ${o.gap["gap-1"]} ${o.gap["gap-2"]};
          padding-right: ${d}px;
        `;case"large":return`
          height: 48px;
          ${D(t,"body3","regular")}
          padding: ${o.gap["gap-3"]} ${o.gap["gap-2.5"]};
          padding-right: ${d}px;
        `;default:return`
          height: 40px;
          ${D(t,"body3","regular")}
          padding: ${o.gap["gap-2"]} ${o.gap["gap-2"]};
          padding-right: ${d}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:t,$focused:r})=>e?`
        background-color: ${u.gray[50]};
        color: ${T.light["fg-neutral-disable"]};
        border-color: ${V.light["color-border-primary"]};
        cursor: not-allowed;
      `:t&&r?`
        background-color: ${u.gray[50]};
        color: ${T.light["fg-neutral-primary"]};
        border-color: ${V.light["color-border-focused"]};
      `:t?`
        background-color: ${u.common[100]};
        color: ${T.light["fg-neutral-primary"]};
        border-color: ${V.light["color-border-primary"]};
      `:r?`
        background-color: ${u.gray[50]};
        color: ${T.light["fg-neutral-alternative"]};
        border-color: ${V.light["color-border-focused"]};
      `:`
      background-color: ${u.common[100]};
      color: ${T.light["fg-neutral-alternative"]};
      border-color: ${V.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${u.gray[50]};
    border-color: ${u.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${u.gray[50]};
    border-color: ${u.gray[300]};
  }
`,je=c.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Se=c.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?o.gap["gap-2.5"]:o.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;U.displayName="Selector";U.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const K=({size:e="medium",disabled:t=!1,active:r=!1,focused:n=!1,placeholder:d="입력하거나 선택해주세요.",value:f,options:g=[],onChange:y,onFocus:$,onBlur:b,className:C="",style:i,lang:x="ko",...w})=>{const[h,m]=s.useState(!1),[S,v]=s.useState(n),[k,E]=s.useState(f||""),[M,j]=s.useState(!0),[q,I]=s.useState(f||""),[R,A]=s.useState({top:0,left:0,width:0}),O=s.useRef(null),_=s.useRef(null),B=s.useRef(null);s.useEffect(()=>{const l=L=>{const ee=L.target;if(!(B.current&&B.current.contains(ee))&&O.current&&!O.current.contains(ee))if(m(!1),v(!1),j(!1),q){const te=g.find(ge=>ge.value===q);E(te?te.label:"")}else E("")};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[q,g]),s.useEffect(()=>{v(n)},[n]),s.useEffect(()=>{if(h&&O.current){const l=()=>{if(O.current){const L=O.current.getBoundingClientRect();A({top:L.bottom+window.scrollY,left:L.left+window.scrollX,width:L.width})}};return l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l,!0),window.removeEventListener("resize",l)}}},[h]),s.useEffect(()=>{if(f){const l=g.find(L=>L.value===f);E(l?l.label:f),I(f)}else E(""),I("")},[f,g]);const p=()=>{var l;t||(m(!h),h?j(!1):(v(!0),j(!0),(l=_.current)==null||l.focus()))},H=l=>{const L=l.target.value;E(L),j(!1),h||m(!0)},F=l=>{v(!0),m(!0),j(!0),$==null||$(l)},me=l=>{v(!1),b==null||b(l)},fe=l=>{E(l.label),I(l.value),y==null||y(l.value),m(!1),v(!1)},Q=()=>t?T.light["fg-neutral-alternative"]:T.light["fg-neutral-primary"],Z=M?g:g.filter(l=>l.label.toLowerCase().includes(k.toLowerCase()));return a.jsxs(ke,{ref:O,className:`combobox-container ${C}`,style:i,...w,children:[a.jsxs(Ve,{$size:e,$disabled:t,$active:r,$focused:S,lang:x,children:[a.jsx(Me,{ref:_,$size:e,$disabled:t,$active:r,$focused:S,$hasValue:!!k,lang:x,value:k,placeholder:d,disabled:t,onChange:H,onFocus:F,onBlur:me}),a.jsx(Pe,{size:e,onClick:p,children:h?a.jsx(ne,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Q()}):a.jsx(oe,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Q()})})]}),h&&Z.length>0&&re.createPortal(a.jsx(Le,{ref:B,onMouseDown:l=>l.stopPropagation(),onMouseDownCapture:l=>l.stopPropagation(),onClick:l=>l.stopPropagation(),"data-portal-menu":!0,$top:R.top,$left:R.left,$width:R.width,children:a.jsx(ie,{children:Z.map(l=>a.jsx(se,{text:l.label,description:l.description,leadingContent:l.leadingContent,active:l.value===q,onClick:L=>{L.stopPropagation(),fe(l)}},l.value))})}),document.body)]})},ke=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ve=c.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${N["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:t,$focused:r})=>e?`
        background-color: ${u.common[100]};
        border-color: ${V.light["color-border-primary"]};
        cursor: not-allowed;
      `:t&&r?`
        background-color: ${u.common[100]};
        border-color: ${V.light["color-border-focused"]};
      `:t?`
        background-color: ${u.common[100]};
        border-color: ${V.light["color-border-primary"]};
      `:r?`
        background-color: ${u.common[100]};
        border-color: ${V.light["color-border-focused"]};
      `:`
      background-color: ${u.common[100]};
      border-color: ${V.light["color-border-primary"]};
    `}
`,Me=c.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:t="ko"})=>{const r=e==="large"?o.gap["gap-2.5"]:o.gap["gap-2"],d=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 30px;
          ${D(t,"body2","regular")}
          padding: ${o.gap["gap-1"]} ${o.gap["gap-2"]};
          padding-right: ${d}px;
        `;case"large":return`
          height: 46px;
          ${D(t,"body3","regular")}
          padding: ${o.gap["gap-3"]} ${o.gap["gap-2.5"]};
          padding-right: ${d}px;
        `;default:return`
          height: 38px;
          ${D(t,"body3","regular")}
          padding: ${o.gap["gap-2"]} ${o.gap["gap-2"]};
          padding-right: ${d}px;
        `}}}

  ${({$disabled:e,$active:t,$focused:r,$hasValue:n})=>e?`
        color: ${T.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:t&&r?`
        color: ${T.light["fg-neutral-primary"]};
      `:t||n?`
        color: ${T.light["fg-neutral-primary"]};
      `:r?`
        color: ${T.light["fg-neutral-alternative"]};
      `:`
      color: ${T.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${T.light["fg-neutral-alternative"]};
  }
`;c.div`
  position: absolute;
  top: calc(100% + ${o.gap["gap-1"]});
  left: 0;
  right: 0;
  z-index: 1000;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const Re=c.div`
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
`,Le=G.forwardRef((e,t)=>a.jsx(Re,{ref:t,...e})),Pe=c.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?o.gap["gap-2.5"]:o.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;K.displayName="ComboBox";K.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const ce=({type:e="selector",size:t="medium",disabled:r=!1,active:n=!1,focused:d=!1,placeholder:f="선택해주세요.",value:g,options:y=[],label:$,labelType:b="default",description:C,descriptionLeadingIcon:i=!1,status:x="default",onChange:w,onFocus:h,onBlur:m,className:S="",style:v,lang:k,showCheckIcon:E=!0,lineMode:M,...j})=>{const q=k;return a.jsxs(He,{className:`dropdown-container ${S}`,style:v,...Object.fromEntries(Object.entries(j).filter(([I])=>!["active","focused","size","disabled"].includes(I))),children:[$&&a.jsx(ve,{type:b,lang:q,children:$}),e==="combobox"?a.jsx(K,{size:t,disabled:r,active:n,focused:d,placeholder:f,value:typeof g=="string"?g:void 0,options:y,onChange:w,onFocus:h,onBlur:m,lang:q,showCheckIcon:E}):e==="multiselect"?a.jsx(Te,{size:t,disabled:r,placeholder:f,value:Array.isArray(g)?g:[],options:y,onChange:w,onFocus:h,onBlur:m,lang:q,lineMode:M}):a.jsx(U,{size:t,disabled:r,active:n,focused:d,placeholder:f,value:typeof g=="string"?g:void 0,options:y,onChange:w,onFocus:h,onBlur:m,lang:q,showCheckIcon:E}),C&&a.jsx(he,{status:x,leadingIcon:i,lang:q,children:C})]})},He=c.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
  width: 100%;
`;ce.displayName="Dropdown";ce.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox" | "multiselect"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'},{name:"literal",value:'"multiselect"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Oe=z`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,De=z`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,Ne=z`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Be=z`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
`,J=({children:e,description:t,variant:r="default",placement:n="bottom-right",offset:d=40,onClose:f,showLeadingIcon:g=!0,showTrailingIcon:y=!0,showDivider:$=!1,className:b="",autoClose:C=!1,autoCloseDelay:i=3e3,index:x=0,disablePositioning:w=!1,lang:h,...m})=>{const[S,v]=s.useState(!1),[k,E]=s.useState(!1),M=typeof x=="number"?x:Y;s.useEffect(()=>(Y+=1,()=>{Y=Math.max(0,Y-1)}),[]),s.useEffect(()=>{if(v(!0),C){const R=setTimeout(()=>{E(!0)},i);return()=>clearTimeout(R)}},[C,i]);const j=()=>{E(!0),setTimeout(()=>{f==null||f()},500)},q=()=>{if(!g)return null;switch(r){case"positive":return a.jsx(we,{width:20,height:20,color:"currentColor"});case"negative":return a.jsx(xe,{width:20,height:20,color:"currentColor"});case"cautionary":return a.jsx(be,{width:20,height:20,color:"currentColor"});case"default":default:return a.jsx(ye,{width:20,height:20,color:"currentColor"})}},I=()=>y?a.jsx(ze,{onClick:j,children:a.jsx(le,{width:16,height:16,color:"currentColor"})}):null;return a.jsxs(Fe,{$variant:r,$placement:n,$offset:d,$isVisible:S,$isExiting:k,$index:M,$disablePositioning:w,className:b,...Object.fromEntries(Object.entries(m).filter(([R])=>!["variant","placement","offset"].includes(R))),children:[g&&a.jsx(Ye,{$variant:r,children:a.jsx(ae,{children:q()})}),a.jsxs(We,{lang:h,children:[a.jsx("div",{children:e}),t&&a.jsx("div",{children:t})]}),$&&a.jsx(Xe,{$variant:r}),y&&a.jsx(ae,{children:I()})]})},Ae=16,_e=80;let Y=0;const Fe=c.div`
  display: flex;
  align-items: center;
  padding: ${o.gap["gap-3"]} ${o.gap["gap-2"]};
  background-color: ${u.gray[950]};
  border-radius: ${N["rounded-2"]};
  box-shadow: ${de.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:t=0,$placement:r,$offset:n})=>!e&&P`
      position: fixed;
      z-index: ${1e4+t};

      /* placement에 따른 위치 설정 */
      ${()=>{const d=n+t*(_e+Ae);switch(r){case"top-left":return P`
              top: ${d}px;
              left: ${n}px;
            `;case"top-center":return P`
              top: ${d}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return P`
              top: ${d}px;
              right: ${n}px;
            `;case"bottom-left":return P`
              bottom: ${d}px;
              left: ${n}px;
            `;case"bottom-center":return P`
              bottom: ${d}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return P`
              bottom: ${d}px;
              right: ${n}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:t,$placement:r})=>{const n=r==null?void 0:r.startsWith("top");if(t)return P`
        animation: ${n?Be:De}
          0.5s ease-in-out forwards;
      `;if(e)return P`
        animation: ${n?Ne:Oe}
          0.5s ease-in-out forwards;
      `;{const d=n?"translateY(-40px)":"translateY(40px)";return P`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?`translateX(-50%) ${d}`:d};
      `}}}
`,ae=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,Ye=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${o.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return u.green[500];case"negative":return u.red[500];case"cautionary":return u.yellow[500];case"default":default:return u.common[100]}}};
`,We=c.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${u.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${D(void 0,"body2","medium")}
    color: ${u.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${D(void 0,"caption2","regular")}
    color: ${u.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Xe=c.div`
  width: 1px;
  background-color: ${u.gray[925]};
  margin: 0 ${o.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,ze=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${T.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${u.common[100]};
  }
`;J.displayName="Toast";J.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};let X=null;const Ge=({children:e,maxToasts:t=3,placement:r="bottom-right",offset:n=40})=>{const[d,f]=s.useState([]),[g,y]=s.useState({}),$=s.useCallback(i=>{const x=`toast-${Date.now()}-${Math.random()}`,w={...i,id:x,placement:i.placement||r};f(h=>{const m=[...h,w];return m.length>t?m.slice(-t):m})},[t,r]),b=s.useCallback(i=>{f(x=>x.filter(w=>w.id!==i))},[]);G.useEffect(()=>(X=$,()=>{X=null}),[$,b]);const C=()=>{const i={position:"fixed",zIndex:9999,display:"flex",flexDirection:"column",gap:"4px",pointerEvents:"none"};switch(r){case"top-left":return{...i,top:n,left:n,alignItems:"flex-start"};case"top-center":return{...i,top:n,left:"50%",transform:"translateX(-50%)",alignItems:"center"};case"top-right":return{...i,top:n,right:n,alignItems:"flex-end"};case"bottom-left":return{...i,bottom:n,left:n,alignItems:"flex-start"};case"bottom-center":return{...i,bottom:n,left:"50%",transform:"translateX(-50%)",alignItems:"center"};case"bottom-right":default:return{...i,bottom:n,right:n,alignItems:"flex-end"}}};return a.jsxs(a.Fragment,{children:[e,a.jsx("div",{style:C(),children:d.slice(-t).reverse().map(i=>a.jsx("div",{ref:x=>{if(x){const w=x.offsetHeight;w!==g[i.id]&&y(h=>({...h,[i.id]:w}))}},style:{pointerEvents:"auto"},children:a.jsx(J,{variant:i.variant,placement:i.placement||r,showDivider:i.showDivider,autoClose:i.autoClose!==!1,autoCloseDelay:i.autoCloseDelay||3e3,onClose:()=>b(i.id),disablePositioning:!0,description:i.description,children:i.message})},i.id))})]})},W={show:e=>{X?X(e):console.warn("ToastSystem이 초기화되지 않았습니다. 앱 루트에 ToastSystem을 추가해주세요.")},success:(e,t)=>{W.show({message:e,description:t,variant:"positive",showDivider:!1})},error:(e,t)=>{W.show({message:e,description:t,variant:"negative",showDivider:!1})},warning:(e,t)=>{W.show({message:e,description:t,variant:"cautionary",showDivider:!1})},info:(e,t)=>{W.show({message:e,description:t,variant:"default",showDivider:!1})}};Ge.__docgenInfo={description:"",methods:[],displayName:"ToastSystem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},maxToasts:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:"'bottom-right'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}}}};const pe=({size:e="medium",position:t="center",open:r=!1,onClose:n,title:d="제목",showCloseButton:f=!0,children:g,actions:y,className:$="",style:b,...C})=>{const[i,x]=s.useState(!1),[w,h]=s.useState(!1);if(s.useEffect(()=>{if(r){h(!0);const v=setTimeout(()=>{x(!0)},10);return()=>clearTimeout(v)}else{x(!1);const v=setTimeout(()=>{h(!1)},200);return()=>clearTimeout(v)}},[r]),!w)return null;const m=v=>{if(v.target.closest("[data-portal-menu]")){v.preventDefault(),v.stopPropagation();return}v.target===v.currentTarget&&(n==null||n())},S=()=>{n==null||n()};return a.jsx(Ue,{$isVisible:i,$position:t,onClick:m,children:a.jsxs(Ke,{$size:e,$isVisible:i,className:$,style:b,...C,children:[a.jsxs(Je,{children:[a.jsx(Qe,{children:d}),f&&a.jsx(Ze,{onClick:S,children:a.jsx(le,{width:24,height:24,color:"currentColor"})})]}),a.jsx(et,{children:g}),y&&a.jsx(tt,{children:y})]})})},Ue=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${ue.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({$position:e})=>{const t=e.startsWith("top-")?"flex-start":e.startsWith("bottom-")?"flex-end":"center",r=e.endsWith("-left")?"flex-start":e.endsWith("-right")?"flex-end":"center";return`
      align-items: ${t};
      justify-content: ${r};
    `}}
`,Ke=c.div`
  background-color: ${ue.light["bg-layer-floating"]};
  border: 1px solid ${V.light["color-border-primary"]};
  border-radius: ${N["rounded-3"]};
  box-shadow: ${de.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: visible;
  transform: ${({$isVisible:e})=>e?"scale(1)":"scale(0.95)"};
  transition: transform 0.2s ease-in-out;

  ${({$size:e})=>{switch(e){case"x-small":return`
          width: 320px;
        `;case"small":return`
          width: 480px;
        `;case"medium":return`
          width: 640px;
        `;case"large":return`
          width: 960px;
        `;case"x-large":return`
          width: 1200px;
        `;default:return`
          width: 500px;
          min-height: 300px;
        `}}}
`,Je=c.div`
  padding: ${o.gap["gap-6"]} ${o.gap["gap-6"]}
    ${o.gap["gap-3"]} ${o.gap["gap-6"]};
  border-radius: ${N["rounded-3"]} ${N["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Qe=c.h2`
  ${$e.heading1}
  font-weight: 600;
  color: ${u.gray[950]};
  margin: 0;
`,Ze=c.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${u.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,et=c.div`
  padding: ${o.gap["gap-3"]} ${o.gap["gap-6"]};
  flex: 1;
  overflow-y: auto;
  min-height: 0;
`,tt=c.div`
  padding: ${o.gap["gap-3"]} ${o.gap["gap-6"]}
    ${o.gap["gap-6"]} ${o.gap["gap-6"]};
  display: flex;
  gap: ${o.gap["gap-2"]};
`;c.button`
  padding: ${o.gap["gap-2"]} ${o.gap["gap-4"]};
  background-color: ${u.common[100]};
  border: 1px solid ${V.light["color-border-primary"]};
  border-radius: ${N["rounded-2"]};
  color: ${u.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${u.gray[50]};
  }
`;c.button`
  padding: ${o.gap["gap-2"]} ${o.gap["gap-4"]};
  background-color: ${u.gray[950]};
  border: none;
  border-radius: ${N["rounded-2"]};
  color: ${u.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${u.gray[925]};
  }
`;pe.displayName="Modal";pe.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large" | "x-large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"x-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "center-left"
| "center"
| "center-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"center-left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"center-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{K as C,ce as D,pe as M,U as S,Ge as T,J as a,W as t};
