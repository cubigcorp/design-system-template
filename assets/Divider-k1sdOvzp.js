import{j as a}from"./jsx-runtime-CEqiarui.js";import{r as g}from"./iframe-Bjy3hdRm.js";import{d as s,l as y,m as D}from"./styled-components.browser.esm-jSrrqBWI.js";import{L as W,D as X}from"./Modal-D7s5KWO9.js";import{c as d}from"./color-DqDZjiGS.js";import{t as n}from"./textColor-SSyLf7rE.js";import{p as H,n as U}from"./negativeColor-MzvdT1cG.js";import{b as v}from"./borderColor-CQKT7y1f.js";import{f as q}from"./fontFamily-CsG1KcIF.js";import{t as b}from"./typography-BBThIZ7c.js";import{r as _}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{a as O,b as G,c as K,d as J,e as Q,f as Z,I as z,g as ee,h as te}from"./IconSearch-Z7VLnyG0.js";import{s as ae}from"./shadow-DVq_1U2q.js";const F=g.forwardRef(({size:e="medium",status:t="default",disabled:r=!1,active:l=!1,focused:o=!1,placeholder:c,value:p,type:f="text",onChange:I,onFocus:j,onBlur:x,className:$="",lang:w,...R},E)=>{const[T,S]=g.useState(!1),[C,k]=g.useState(o);g.useEffect(()=>{k(o)},[o]);const h=m=>{k(!0),j==null||j(m)},V=m=>{k(!1),x==null||x(m)},u=f==="password"&&p&&p.trim()!==""?{icon:T?"visibility-on":"visibility-off",color:n.light["fg-neutral-primary"]}:r?t==="positive"?{icon:"circlecheck",color:H.light["fg-positive-primary"]}:null:t==="negative"?l?null:{icon:"error",color:U.light["fg-negative-primary"]}:t==="positive"?l?null:{icon:"circlecheck",color:H.light["fg-positive-primary"]}:null,N=w;return a.jsxs(re,{children:[a.jsx(ne,{ref:E,type:f==="password"?T?"text":"password":f,value:p,onChange:I,onFocus:h,onBlur:V,placeholder:c,disabled:r,className:$,$size:e,$status:t,$disabled:r,$active:l,$focused:C,lang:N,...Object.fromEntries(Object.entries(R).filter(([m])=>!["active","focused","status","size"].includes(m)))}),u&&a.jsxs(ie,{$size:e,$color:u.color,onMouseDown:m=>{m.preventDefault(),(u.icon==="visibility-on"||u.icon==="visibility-off")&&S(!T)},type:"button",children:[u.icon==="error"&&a.jsx(O,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color}),u.icon==="circlecheck"&&a.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color}),u.icon==="visibility-on"&&a.jsx(K,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color}),u.icon==="visibility-off"&&a.jsx(J,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color})]})]})}),re=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ne=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${_["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }

  /* Size styles */
  ${({$size:e,lang:t="ko"})=>{const r=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${b(t,"body2","regular")}
          padding: ${i.gap["gap-1"]} ${i.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${b(t,"body3","regular")}
          padding: ${i.gap["gap-3"]} ${i.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${b(t,"body3","regular")}
          padding: ${i.gap["gap-2"]} ${i.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:t,$active:r,$focused:l})=>t?`
        background-color: ${d.gray[50]};
        color: ${n.light["fg-neutral-disable"]};
        border-color: ${v.light["color-border-primary"]};
      `:e==="default"?r&&l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-focused"]};
        `:r&&!l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-primary"]};
        `:!r&&l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-primary"]};
        `:e==="negative"?r&&l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${d.red[500]};
        `:!r&&l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${d.red[500]};
        `:`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-negative"]};
        `:e==="positive"?r&&l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-focused"]};
        `:r&&!l?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${v.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${n.light["fg-neutral-primary"]};
      border-color: ${v.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-webkit-input-placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-moz-placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    opacity: 1;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-ms-input-placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-webkit-input-placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-moz-placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus:-ms-input-placeholder {
    color: ${n.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
`,ie=s.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:e})=>e};
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;F.displayName="Input";F.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const Y=g.forwardRef(({label:e,labelType:t="default",description:r,descriptionLeadingIcon:l=!1,size:o="medium",status:c="default",disabled:p=!1,placeholder:f,value:I,type:j="text",onChange:x,onFocus:$,onBlur:w,className:R="",lang:E,...T},S)=>{const[C,k]=g.useState(!1),[h,V]=g.useState(!1),L=E,u=m=>{k(!0),V(!0),$==null||$(m)},N=m=>{k(!1),V(!1),w==null||w(m)};return a.jsxs(le,{className:R,children:[e&&a.jsx(W,{type:t,lang:L,children:e}),a.jsx(F,{ref:S,size:o,status:c,disabled:p,active:h,focused:C,placeholder:f,value:I,type:j,onChange:x,onFocus:u,onBlur:N,lang:L,...T}),r&&a.jsx(X,{status:c,leadingIcon:l,lang:L,children:r})]})}),le=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;Y.displayName="TextField";Y.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const A=g.forwardRef(({size:e="medium",disabled:t=!1,focused:r=!1,placeholder:l,value:o,onChange:c,onFocus:p,onBlur:f,className:I="",style:j,lang:x,...$},w)=>{const[R,E]=g.useState(r);g.useEffect(()=>{E(r)},[r]);const T=g.useMemo(()=>typeof o=="string"?o.trim().length>0:!1,[o]),S=x,C=h=>{E(!0),p==null||p(h)},k=h=>{E(!1),f==null||f(h)};return a.jsx(oe,{className:I,style:j,children:a.jsxs(se,{$size:e,$disabled:t,$focused:R,lang:S,children:[a.jsx(de,{$size:e,$disabled:t,children:a.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:t?n.light["fg-neutral-disable"]:n.light["fg-neutral-alternative"]})}),a.jsx(ce,{ref:w,disabled:t,placeholder:l,value:o,onChange:c,onFocus:C,onBlur:k,$size:e,$disabled:t,$filled:T,$focused:R,lang:S,...$}),!t&&T&&a.jsx(ue,{$size:e,$color:n.light["fg-neutral-assistive"],type:"button",onMouseDown:h=>{h.preventDefault()},onClick:()=>{c==null||c({target:{value:""}})},children:a.jsx(Z,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:n.light["fg-neutral-assistive"]})})]})})}),oe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`,se=s.div`
  position: relative;
  width: 100%;
  background-color: ${d.gray[50]};
  border-radius: ${_["rounded-2"]};
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-color: ${({$focused:e})=>e?v.light["color-border-focused"]:v.light["color-border-primary"]};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }

  ${({$size:e,lang:t="ko"})=>{switch(e){case"small":return`
          height: 32px;
          ${b(t,"body2","regular")}
        `;case"large":return`
          height: 48px;
          ${b(t,"body3","regular")}
        `;default:return`
          height: 40px;
          ${b(t,"body3","regular")}
        `}}}
`,ce=s.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({$disabled:e,$filled:t})=>e?n.light["fg-neutral-disable"]:t?n.light["fg-neutral-primary"]:n.light["fg-neutral-assistive"]};

  &::placeholder {
    color: ${n.light["fg-neutral-assistive"]};
    opacity: 1;
  }

  ${({$size:e})=>{const t=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],r=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],l=e==="small"?i.gap["gap-1.5"]:e==="large"?i.gap["gap-3"]:i.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(t)*2;return`
      padding: ${l} ${r};
      padding-left: ${c}px;
    `}}
`,de=s.div`
  position: absolute;
  left: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ue=s.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$color:e})=>e};
  padding: 0;

  &:hover {
    opacity: 0.8;
  }
`;A.displayName="Searchfield";A.__docgenInfo={description:"",methods:[],displayName:"Searchfield",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const pe=D`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,me=D`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,B=({children:e,description:t,variant:r="default",placement:l="bottom-right",offset:o=40,onClose:c,showLeadingIcon:p=!0,showTrailingIcon:f=!0,showDivider:I=!1,className:j="",autoClose:x=!1,autoCloseDelay:$=3e3,index:w=0,disablePositioning:R=!1,lang:E,...T})=>{const[S,C]=g.useState(!1),[k,h]=g.useState(!1),V=typeof w=="number"?w:M;g.useEffect(()=>(M+=1,()=>{M=Math.max(0,M-1)}),[]),g.useEffect(()=>{if(C(!0),x){const m=setTimeout(()=>{h(!0)},$);return()=>clearTimeout(m)}},[x,$]);const L=()=>{h(!0),setTimeout(()=>{c==null||c()},500)},u=()=>{if(!p)return null;switch(r){case"positive":return a.jsx(G,{width:20,height:20,color:"currentColor"});case"negative":return a.jsx(O,{width:20,height:20,color:"currentColor"});case"cautionary":return a.jsx(ee,{width:20,height:20,color:"currentColor"});case"default":default:return a.jsx(z,{width:20,height:20,color:"currentColor"})}},N=()=>f?a.jsx(xe,{onClick:L,children:a.jsx(te,{width:16,height:16,color:"currentColor"})}):null;return a.jsxs(he,{$variant:r,$placement:l,$offset:o,$isVisible:S,$isExiting:k,$index:V,$disablePositioning:R,className:j,...Object.fromEntries(Object.entries(T).filter(([m])=>!["variant","placement","offset"].includes(m))),children:[p&&a.jsx(ye,{$variant:r,children:a.jsx(P,{children:u()})}),a.jsxs(ve,{lang:E,children:[a.jsx("div",{children:e}),t&&a.jsx("div",{children:t})]}),I&&a.jsx(be,{$variant:r}),f&&a.jsx(P,{children:N()})]})},ge=16,fe=80;let M=0;const he=s.div`
  display: flex;
  align-items: center;
  padding: ${i.gap["gap-3"]} ${i.gap["gap-2"]};
  background-color: ${d.gray[950]};
  border-radius: ${_["rounded-2"]};
  box-shadow: ${ae.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:t=0,$placement:r,$offset:l})=>!e&&y`
      position: fixed;
      z-index: ${9999+t};

      /* placement에 따른 위치 설정 */
      ${()=>{const o=l+t*(fe+ge);switch(r){case"top-left":return y`
              top: ${o}px;
              left: ${l}px;
            `;case"top-center":return y`
              top: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return y`
              top: ${o}px;
              right: ${l}px;
            `;case"bottom-left":return y`
              bottom: ${o}px;
              left: ${l}px;
            `;case"bottom-center":return y`
              bottom: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return y`
              bottom: ${o}px;
              right: ${l}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:t,$placement:r})=>t?y`
        animation: ${me} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:e?y`
        animation: ${pe} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:y`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?"translateX(-50%) translateY(40px)":"translateY(40px)"};
      `}
`,P=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,ye=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${i.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return d.green[500];case"negative":return d.red[500];case"cautionary":return d.yellow[500];case"default":default:return d.common[100]}}};
`,ve=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${d.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${b(void 0,"body2","medium")}
    color: ${d.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${b(void 0,"caption2","regular")}
    color: ${d.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,be=s.div`
  width: 1px;
  background-color: ${d.gray[925]};
  margin: 0 ${i.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,xe=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${n.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${d.common[100]};
  }
`;B.displayName="Toast";B.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const $e=({children:e,className:t,lang:r,style:l,bottom:o,title:c})=>a.jsxs(we,{className:t,lang:r,style:l,children:[c&&a.jsx(ke,{lang:r,children:c}),a.jsx(qe,{children:e}),o&&a.jsx(Te,{children:o})]}),we=s.nav`
  ${b(void 0,"body3","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${i.gap["gap-4"]};
  height: 100%;
`,Te=s.div`
  margin-top: auto;
  min-height: 89px;
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`,ke=s.div`
  ${b(void 0,"body3","medium")}
  color: ${n.light["fg-neutral-strong"]};
  margin-bottom: ${i.gap["gap-5"]};
`,qe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`;$e.__docgenInfo={description:"",methods:[],displayName:"LNB",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const Ie=({value:e,selected:t=!1,disabled:r=!1,leadingIcon:l,onClick:o,className:c,lang:p="ko",style:f})=>{const I=r?n.light["fg-neutral-disable"]:n.light["fg-neutral-primary"];return a.jsxs(je,{type:"button",onClick:r?void 0:o,$selected:t,$disabled:r,className:c,lang:p,style:f,children:[l&&a.jsx(Ee,{children:a.jsx(l,{width:20,height:20,color:I})}),a.jsx(Re,{lang:p,children:e})]})},je=s.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${_["rounded-2"]};
  background-color: ${({$selected:e})=>e?d.gray[50]:d.common[100]};
  color: ${({$disabled:e})=>e?n.light["fg-neutral-disable"]:n.light["fg-neutral-primary"]};
  text-align: left;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${d.gray[50]};
  }

  &:active {
    background-color: ${d.gray[100]};
  }
`,Ee=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Re=s.span`
  ${b(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
`;Ie.__docgenInfo={description:"",methods:[],displayName:"LNBItem",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Se=({title:e,children:t,lang:r,className:l,style:o})=>a.jsxs(Ce,{className:l,style:o,children:[e&&a.jsx(Ve,{lang:r,children:e}),a.jsx(Le,{children:t})]}),Ce=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`,Ve=s.div`
  ${b(void 0,"body2","regular")}
  color: ${n.light["fg-neutral-alternative"]};
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
`,Le=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`;Se.__docgenInfo={description:"",methods:[],displayName:"LNBItemGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Ne=({orientation:e="horizontal",thickness:t=1,className:r,style:l})=>a.jsx(Me,{$orientation:e,$thickness:t,className:r,style:l}),Me=s.div`
  background-color: ${d.gray[200]};

  ${({$orientation:e,$thickness:t})=>e==="horizontal"?y`
          width: 100%;
          height: ${t}px;
        `:y`
          width: ${t}px;
          height: 100%;
        `}
`;Ne.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{Ne as D,F as I,$e as L,A as S,Y as T,Ie as a,Se as b,B as c};
