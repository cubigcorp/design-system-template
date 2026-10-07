import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as _}from"./iframe-BQlxtUxC.js";import{r as J}from"./index-C7tWk-mQ.js";import{c as d}from"./styled-components.browser.esm-BsJdvhJY.js";import{u as K,I as Q,a as X}from"./useMenuPlacement-BmjG0vEf.js";import{M as Z}from"./Menu-CipjtV9l.js";import{C as B}from"./Cell-BId1KcO9.js";import{r as z}from"./radius-DaoU83SK.js";import{c as o}from"./color-CZjzAmeO.js";import{s as r}from"./spacing-tE1IiUFl.js";import{t as E}from"./typography-CIxJpf_z.js";import{t as i}from"./textColor-D-yqVS6r.js";import{b as m}from"./borderColor-DnXd17KV.js";const L=({size:e="medium",status:n="default",disabled:l=!1,active:u=!1,focused:c=!1,placeholder:j="선택해주세요.",value:C,options:q=[],onChange:y,onFocus:x,onBlur:g,className:H="",style:A,lang:D="ko",showCheckIcon:F=!0,menuMaxHeight:O=400,showSelectedIcon:N=!1,...U})=>{const[f,$]=s.useState(!1),[M,w]=s.useState(u),[G,v]=s.useState(c),b=s.useRef(null),S=s.useRef(null),h=K(b,f,O);s.useEffect(()=>{const t=k=>{const V=k.target;S.current&&S.current.contains(V)||b.current&&!b.current.contains(V)&&($(!1),v(!1))};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[]),s.useEffect(()=>{w(u)},[u]),s.useEffect(()=>{v(c)},[c]);const p=q.find(t=>t.value===C),R=e==="small"?16:e==="large"?24:20,I=p==null?void 0:p.leadingContent,W=()=>{l||($(!f),f?(v(!1),w(!1),g==null||g({})):(v(!0),w(!0),x==null||x({})))},Y=t=>{t.disabled||(y==null||y(t.value),$(!1),v(!1),g==null||g({}))},T=()=>l?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"];return a.jsxs(ee,{ref:b,className:`selector-container ${H}`,style:A,...U,children:[a.jsxs(re,{$size:e,$status:n,$disabled:l,$active:M,$focused:G,lang:D,onClick:W,type:"button","data-active":M?"true":"false","aria-haspopup":"listbox","aria-expanded":f,children:[N&&I?a.jsxs(oe,{children:[a.jsx(ne,{children:a.jsx(I,{width:R,height:R,color:T()})}),a.jsx(P,{children:p?p.label:j})]}):a.jsx(P,{children:p?p.label:j}),a.jsx(le,{size:e,children:f?a.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:T()}):a.jsx(X,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:T()})})]}),f&&J.createPortal(a.jsx(ae,{ref:S,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:h.top,$left:h.left,$width:h.width,$menuMaxHeight:h.maxHeight,$openUpward:h.openUpward,children:a.jsx(Z,{showCheckIcon:F,children:q.map(t=>a.jsx(B,{text:t.label,description:t.description,leadingContent:t.leadingContent,active:t.value===C,disable:t.disabled,onClick:k=>{k.stopPropagation(),Y(t)}},t.value))})}),document.body)]})},ee=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;d.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${r.gap["gap-1"]};

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const te=d.div`
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
`,ae=_.forwardRef((e,n)=>a.jsx(te,{ref:n,...e})),re=d.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${z["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:n="ko"})=>{const l=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 32px;
          ${E(n,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `;case"large":return`
          height: 48px;
          ${E(n,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${c}px;
        `;default:return`
          height: 40px;
          ${E(n,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:n,$active:l,$focused:u})=>e==="negative"?l?`
          background-color: ${o.common[100]};
          color: ${i.light["fg-neutral-primary"]};
          border: 1.8px solid ${m.light["color-border-negative"]};
        `:`
        background-color: ${o.common[100]};
        color: ${i.light["fg-neutral-alternative"]};
        border: 1.8px solid ${m.light["color-border-negative"]};
      `:n?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${m.light["color-border-primary"]};
        cursor: not-allowed;
      `:l&&u?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${m.light["color-border-focused"]};
      `:l?`
        background-color: ${o.common[100]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${m.light["color-border-primary"]};
      `:u?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-alternative"]};
        border-color: ${m.light["color-border-focused"]};
      `:`
      background-color: ${o.common[100]};
      color: ${i.light["fg-neutral-alternative"]};
      border-color: ${m.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }

  &:active:not(:disabled):not([data-active='true']) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }
`,P=d.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oe=d.span`
  display: flex;
  align-items: center;
  gap: ${r.gap["gap-1"]}; /* 글자와 아이콘 간격 4px (CDS-146) */
  min-width: 0;
  overflow: hidden;
`,ne=d.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,le=d.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;L.displayName="Selector";L.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative' | 'positive'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'positive'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'선택해주세요.'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"",defaultValue:{value:"'ko'",computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},menuMaxHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"400",computed:!1}},showSelectedIcon:{required:!1,tsType:{name:"boolean"},description:"선택된 값 표기에 옵션의 leadingContent 아이콘을 함께 표시 (기본 false, 미지정 시 기존 동작과 동일)",defaultValue:{value:"false",computed:!1}}}};export{L as S};
