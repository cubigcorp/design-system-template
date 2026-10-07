import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as o,R as Q}from"./iframe-BQlxtUxC.js";import{r as X}from"./index-C7tWk-mQ.js";import{c as b}from"./styled-components.browser.esm-BsJdvhJY.js";import{u as Z,I as z,a as ee}from"./useMenuPlacement-BmjG0vEf.js";import{M as te}from"./Menu-CipjtV9l.js";import{C as re}from"./Cell-BId1KcO9.js";import{r as ae}from"./radius-DaoU83SK.js";import{c as h}from"./color-CZjzAmeO.js";import{b as v}from"./borderColor-DnXd17KV.js";import{t as s}from"./textColor-D-yqVS6r.js";import{s as n}from"./spacing-tE1IiUFl.js";import{t as V}from"./typography-CIxJpf_z.js";const H=({size:e="medium",status:a="default",disabled:r=!1,active:i=!1,focused:u=!1,placeholder:F="입력하거나 선택해주세요.",value:c,options:p=[],onChange:I,onFocus:T,onBlur:E,className:A="",style:D,lang:M="ko",...N})=>{const[m,x]=o.useState(!1),[j,f]=o.useState(u),[k,g]=o.useState(c||""),[U,$]=o.useState(!0),[y,R]=o.useState(c||""),C=o.useRef(null),S=o.useRef(null),w=Z(C,m),q=o.useRef(null);o.useEffect(()=>{const t=d=>{const B=d.target;if(!(q.current&&q.current.contains(B))&&C.current&&!C.current.contains(B))if(x(!1),f(!1),$(!1),y){const L=p.find(K=>K.value===y);g(L?L.label:"")}else g("")};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[y,p]),o.useEffect(()=>{f(u)},[u]),o.useEffect(()=>{if(c){const t=p.find(d=>d.value===c);g(t?t.label:c),R(c)}else g(""),R("")},[c,p]);const W=()=>{var t;r||(x(!m),m?$(!1):(f(!0),$(!0),(t=S.current)==null||t.focus()))},Y=t=>{const d=t.target.value;g(d),$(!1),m||x(!0)},_=t=>{f(!0),x(!0),$(!0),T==null||T(t)},G=t=>{f(!1),E==null||E(t)},J=t=>{g(t.label),R(t.value),I==null||I(t.value),x(!1),f(!1)},P=()=>r?s.light["fg-neutral-alternative"]:s.light["fg-neutral-primary"],O=U?p:p.filter(t=>t.label.toLowerCase().includes(k.toLowerCase()));return l.jsxs(oe,{ref:C,className:`combobox-container ${A}`,style:D,...N,children:[l.jsxs(ne,{$size:e,$status:a,$disabled:r,$active:i,$focused:j,lang:M,children:[l.jsx(le,{ref:S,$size:e,$disabled:r,$active:i,$focused:j,$hasValue:!!k,lang:M,value:k,placeholder:F,disabled:r,onChange:Y,onFocus:_,onBlur:G}),l.jsx(ue,{size:e,onClick:W,children:m?l.jsx(z,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:P()}):l.jsx(ee,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:P()})})]}),m&&O.length>0&&X.createPortal(l.jsx(se,{ref:q,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:w.top,$left:w.left,$width:w.width,$menuMaxHeight:w.maxHeight,$openUpward:w.openUpward,children:l.jsx(te,{children:O.map(t=>l.jsx(re,{text:t.label,description:t.description,leadingContent:t.leadingContent,active:t.value===y,onClick:d=>{d.stopPropagation(),J(t)}},t.value))})}),document.body)]})},oe=b.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,ne=b.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${ae["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$status:e,$disabled:a,$active:r,$focused:i})=>e==="negative"?`
        background-color: ${h.common[100]};
        border: 1.8px solid ${v.light["color-border-negative"]};
      `:a?`
        background-color: ${h.common[100]};
        border-color: ${v.light["color-border-primary"]};
        cursor: not-allowed;
      `:r&&i?`
        background-color: ${h.common[100]};
        border-color: ${v.light["color-border-focused"]};
      `:r?`
        background-color: ${h.common[100]};
        border-color: ${v.light["color-border-primary"]};
      `:i?`
        background-color: ${h.common[100]};
        border-color: ${v.light["color-border-focused"]};
      `:`
      background-color: ${h.common[100]};
      border-color: ${v.light["color-border-primary"]};
    `}
`,le=b.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],u=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 30px;
          ${V(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${u}px;
        `;case"large":return`
          height: 46px;
          ${V(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${u}px;
        `;default:return`
          height: 38px;
          ${V(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${u}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:r,$hasValue:i})=>e?`
        color: ${s.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&r?`
        color: ${s.light["fg-neutral-primary"]};
      `:a||i?`
        color: ${s.light["fg-neutral-primary"]};
      `:r?`
        color: ${s.light["fg-neutral-alternative"]};
      `:`
      color: ${s.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${s.light["fg-neutral-alternative"]};
  }
`;b.div`
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
`;const ie=b.div`
  position: absolute;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
  /* 위로 펼칠 때만 자기 높이만큼 끌어올린다. 아래로 펼치면 기존과 동일하게 변형 없음. */
  transform: ${({$openUpward:e})=>e?"translateY(-100%)":"none"};
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: ${({$menuMaxHeight:e})=>e??400}px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,se=Q.forwardRef((e,a)=>l.jsx(ie,{ref:a,...e})),ue=b.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;H.displayName="ComboBox";H.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'입력하거나 선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};export{H as C};
