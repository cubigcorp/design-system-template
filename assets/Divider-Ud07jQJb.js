import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as J}from"./iframe-BmWS9Sei.js";import{t as o,d as u,l as I,m as M}from"./textColor-DMnf996G.js";import{L as Q,D as Z}from"./Modal-ByYLA3qx.js";import{c as p}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import{p as B,n as z}from"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as j}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{f as R}from"./fontFamily-CsG1KcIF.js";import{t as k}from"./typography-BBThIZ7c.js";import{r as _}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{a as A,I as W,e as ee,f as te,g as ae,h as re,i as ne,j as ie,d as le}from"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{s as oe}from"./shadow-DVq_1U2q.js";import{A as se}from"./Avatar-CaLTBNVW.js";const O=m.forwardRef(({size:e="medium",status:t="default",disabled:r=!1,active:n=!1,focused:l=!1,placeholder:c,value:d,type:g="text",onChange:y,onFocus:w,onBlur:v,className:s="",lang:f,...b},T)=>{const[$,C]=m.useState(!1),[E,S]=m.useState(l);m.useEffect(()=>{S(l)},[l]);const q=x=>{S(!0),w==null||w(x)},N=x=>{S(!1),v==null||v(x)},h=g==="password"&&d&&d.trim()!==""?{icon:$?"visibility-on":"visibility-off",color:o.light["fg-neutral-primary"]}:r?t==="positive"?{icon:"circlecheck",color:B.light["fg-positive-primary"]}:null:t==="negative"?n?null:{icon:"error",color:z.light["fg-negative-primary"]}:t==="positive"?n?null:{icon:"circlecheck",color:B.light["fg-positive-primary"]}:null,L=f;return a.jsxs(ce,{children:[a.jsx(ue,{ref:T,type:g==="password"?$?"text":"password":g,value:d,onChange:y,onFocus:q,onBlur:N,placeholder:c,disabled:r,className:s,$size:e,$status:t,$disabled:r,$active:n,$focused:E,lang:L,...Object.fromEntries(Object.entries(b).filter(([x])=>!["active","focused","status","size"].includes(x)))}),h&&a.jsxs(de,{$size:e,$color:h.color,onMouseDown:x=>{x.preventDefault(),(h.icon==="visibility-on"||h.icon==="visibility-off")&&C(!$)},type:"button",children:[h.icon==="error"&&a.jsx(A,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color}),h.icon==="circlecheck"&&a.jsx(W,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color}),h.icon==="visibility-on"&&a.jsx(ee,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color}),h.icon==="visibility-off"&&a.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color})]})]})}),ce=u.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ue=u.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${_["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${R.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${R.en};
  }

  /* Size styles */
  ${({$size:e,lang:t="ko"})=>{const r=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],l=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${k(t,"body2","regular")}
          padding: ${i.gap["gap-1"]} ${i.gap["gap-2"]};
          padding-right: ${l}px;
        `;case"large":return`
          height: 48px;
          ${k(t,"body3","regular")}
          padding: ${i.gap["gap-3"]} ${i.gap["gap-2.5"]};
          padding-right: ${l}px;
        `;default:return`
          height: 40px;
          ${k(t,"body3","regular")}
          padding: ${i.gap["gap-2"]} ${i.gap["gap-2"]};
          padding-right: ${l}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:t,$active:r,$focused:n})=>t?`
        background-color: ${p.gray[50]};
        color: ${o.light["fg-neutral-disable"]};
        border-color: ${j.light["color-border-primary"]};
      `:e==="default"?r&&n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-focused"]};
        `:r&&!n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-primary"]};
        `:!r&&n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-primary"]};
        `:e==="negative"?r&&n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${p.red[500]};
        `:!r&&n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${p.red[500]};
        `:`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-negative"]};
        `:e==="positive"?r&&n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-focused"]};
        `:r&&!n?`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${o.light["fg-neutral-primary"]};
          border-color: ${j.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${o.light["fg-neutral-primary"]};
      border-color: ${j.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-webkit-input-placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-moz-placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    opacity: 1;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-ms-input-placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-webkit-input-placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-moz-placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus:-ms-input-placeholder {
    color: ${o.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
`,de=u.button`
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
`;O.displayName="Input";O.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const X=m.forwardRef(({label:e,labelType:t="default",description:r,descriptionLeadingIcon:n=!1,size:l="medium",status:c="default",disabled:d=!1,placeholder:g,value:y,type:w="text",onChange:v,onFocus:s,onBlur:f,className:b="",lang:T,...$},C)=>{const[E,S]=m.useState(!1),[q,N]=m.useState(!1),V=T,h=x=>{S(!0),N(!0),s==null||s(x)},L=x=>{S(!1),N(!1),f==null||f(x)};return a.jsxs(pe,{className:b,children:[e&&a.jsx(Q,{type:t,lang:V,children:e}),a.jsx(O,{ref:C,size:l,status:c,disabled:d,active:q,focused:E,placeholder:g,value:y,type:w,onChange:v,onFocus:h,onBlur:L,lang:V,...$}),r&&a.jsx(Z,{status:c,leadingIcon:n,lang:V,children:r})]})}),pe=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;X.displayName="TextField";X.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const U=m.forwardRef(({size:e="medium",disabled:t=!1,focused:r=!1,placeholder:n,value:l,onChange:c,onFocus:d,onBlur:g,className:y="",style:w,lang:v,...s},f)=>{const[b,T]=m.useState(r);m.useEffect(()=>{T(r)},[r]);const $=m.useMemo(()=>typeof l=="string"?l.trim().length>0:!1,[l]),C=v,E=q=>{T(!0),d==null||d(q)},S=q=>{T(!1),g==null||g(q)};return a.jsx(me,{className:y,style:w,children:a.jsxs(ge,{$size:e,$disabled:t,$focused:b,lang:C,children:[a.jsx(he,{$size:e,$disabled:t,children:a.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:t?o.light["fg-neutral-disable"]:o.light["fg-neutral-alternative"]})}),a.jsx(fe,{ref:f,disabled:t,placeholder:n,value:l,onChange:c,onFocus:E,onBlur:S,$size:e,$disabled:t,$filled:$,$focused:b,lang:C,...s}),!t&&$&&a.jsx(ye,{$size:e,$color:o.light["fg-neutral-assistive"],type:"button",onMouseDown:q=>{q.preventDefault()},onClick:()=>{c==null||c({target:{value:""}})},children:a.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.light["fg-neutral-assistive"]})})]})})}),me=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`,ge=u.div`
  position: relative;
  width: 100%;
  background-color: ${p.gray[50]};
  border-radius: ${_["rounded-2"]};
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-color: ${({$focused:e})=>e?j.light["color-border-focused"]:j.light["color-border-primary"]};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${R.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${R.en};
  }

  ${({$size:e,lang:t="ko"})=>{switch(e){case"small":return`
          height: 32px;
          ${k(t,"body2","regular")}
        `;case"large":return`
          height: 48px;
          ${k(t,"body3","regular")}
        `;default:return`
          height: 40px;
          ${k(t,"body3","regular")}
        `}}}
`,fe=u.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({$disabled:e,$filled:t})=>e?o.light["fg-neutral-disable"]:t?o.light["fg-neutral-primary"]:o.light["fg-neutral-assistive"]};

  &::placeholder {
    color: ${o.light["fg-neutral-assistive"]};
    opacity: 1;
  }

  ${({$size:e})=>{const t=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],r=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],n=e==="small"?i.gap["gap-1.5"]:e==="large"?i.gap["gap-3"]:i.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(t)*2;return`
      padding: ${n} ${r};
      padding-left: ${c}px;
    `}}
`,he=u.div`
  position: absolute;
  left: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ye=u.button`
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
`;U.displayName="Searchfield";U.__docgenInfo={description:"",methods:[],displayName:"Searchfield",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const ve=M`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,be=M`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,xe=M`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,we=M`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
`,H=({children:e,description:t,variant:r="default",placement:n="bottom-right",offset:l=40,onClose:c,showLeadingIcon:d=!0,showTrailingIcon:g=!0,showDivider:y=!1,className:w="",autoClose:v=!1,autoCloseDelay:s=3e3,index:f=0,disablePositioning:b=!1,lang:T,...$})=>{const[C,E]=m.useState(!1),[S,q]=m.useState(!1),N=typeof f=="number"?f:P;m.useEffect(()=>(P+=1,()=>{P=Math.max(0,P-1)}),[]),m.useEffect(()=>{if(E(!0),v){const x=setTimeout(()=>{q(!0)},s);return()=>clearTimeout(x)}},[v,s]);const V=()=>{q(!0),setTimeout(()=>{c==null||c()},500)},h=()=>{if(!d)return null;switch(r){case"positive":return a.jsx(W,{width:20,height:20,color:"currentColor"});case"negative":return a.jsx(A,{width:20,height:20,color:"currentColor"});case"cautionary":return a.jsx(ie,{width:20,height:20,color:"currentColor"});case"default":default:return a.jsx(ne,{width:20,height:20,color:"currentColor"})}},L=()=>g?a.jsx(Re,{onClick:V,children:a.jsx(le,{width:16,height:16,color:"currentColor"})}):null;return a.jsxs(ke,{$variant:r,$placement:n,$offset:l,$isVisible:C,$isExiting:S,$index:N,$disablePositioning:b,className:w,...Object.fromEntries(Object.entries($).filter(([x])=>!["variant","placement","offset"].includes(x))),children:[d&&a.jsx(qe,{$variant:r,children:a.jsx(G,{children:h()})}),a.jsxs(Ie,{lang:T,children:[a.jsx("div",{children:e}),t&&a.jsx("div",{children:t})]}),y&&a.jsx(je,{$variant:r}),g&&a.jsx(G,{children:L()})]})},$e=16,Te=80;let P=0;const ke=u.div`
  display: flex;
  align-items: center;
  padding: ${i.gap["gap-3"]} ${i.gap["gap-2"]};
  background-color: ${p.gray[950]};
  border-radius: ${_["rounded-2"]};
  box-shadow: ${oe.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:t=0,$placement:r,$offset:n})=>!e&&I`
      position: fixed;
      z-index: ${9999+t};

      /* placement에 따른 위치 설정 */
      ${()=>{const l=n+t*(Te+$e);switch(r){case"top-left":return I`
              top: ${l}px;
              left: ${n}px;
            `;case"top-center":return I`
              top: ${l}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return I`
              top: ${l}px;
              right: ${n}px;
            `;case"bottom-left":return I`
              bottom: ${l}px;
              left: ${n}px;
            `;case"bottom-center":return I`
              bottom: ${l}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return I`
              bottom: ${l}px;
              right: ${n}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:t,$placement:r})=>{const n=r==null?void 0:r.startsWith("top");if(t)return I`
        animation: ${n?we:be}
          0.5s ease-in-out forwards;
      `;if(e)return I`
        animation: ${n?xe:ve}
          0.5s ease-in-out forwards;
      `;{const l=n?"translateY(-40px)":"translateY(40px)";return I`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?`translateX(-50%) ${l}`:l};
      `}}}
`,G=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,qe=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${i.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return p.green[500];case"negative":return p.red[500];case"cautionary":return p.yellow[500];case"default":default:return p.common[100]}}};
`,Ie=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${p.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${k(void 0,"body2","medium")}
    color: ${p.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${k(void 0,"caption2","regular")}
    color: ${p.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,je=u.div`
  width: 1px;
  background-color: ${p.gray[925]};
  margin: 0 ${i.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,Re=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${o.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${p.common[100]};
  }
`;H.displayName="Toast";H.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};let F=null;const Se=({children:e,maxToasts:t=3,placement:r="bottom-right",offset:n=40})=>{const[l,c]=m.useState([]),[d,g]=m.useState({}),y=m.useCallback(s=>{const f=`toast-${Date.now()}-${Math.random()}`,b={...s,id:f,placement:s.placement||r};c(T=>{const $=[...T,b];return $.length>t?$.slice(-t):$})},[t,r]),w=m.useCallback(s=>{c(f=>f.filter(b=>b.id!==s))},[]);J.useEffect(()=>(F=y,()=>{F=null}),[y,w]);const v=()=>{const s={position:"fixed",zIndex:9999,display:"flex",flexDirection:"column",gap:"4px",pointerEvents:"none"};switch(r){case"top-left":return{...s,top:n,left:n,alignItems:"flex-start"};case"top-center":return{...s,top:n,left:"50%",transform:"translateX(-50%)",alignItems:"center"};case"top-right":return{...s,top:n,right:n,alignItems:"flex-end"};case"bottom-left":return{...s,bottom:n,left:n,alignItems:"flex-start"};case"bottom-center":return{...s,bottom:n,left:"50%",transform:"translateX(-50%)",alignItems:"center"};case"bottom-right":default:return{...s,bottom:n,right:n,alignItems:"flex-end"}}};return a.jsxs(a.Fragment,{children:[e,a.jsx("div",{style:v(),children:l.slice(-t).reverse().map(s=>a.jsx("div",{ref:f=>{if(f){const b=f.offsetHeight;b!==d[s.id]&&g(T=>({...T,[s.id]:b}))}},style:{pointerEvents:"auto"},children:a.jsx(H,{variant:s.variant,placement:s.placement||r,showDivider:s.showDivider,autoClose:s.autoClose!==!1,autoCloseDelay:s.autoCloseDelay||3e3,onClose:()=>w(s.id),disablePositioning:!0,description:s.description,children:s.message})},s.id))})]})},D={show:e=>{F?F(e):console.warn("ToastSystem이 초기화되지 않았습니다. 앱 루트에 ToastSystem을 추가해주세요.")},success:(e,t)=>{D.show({message:e,description:t,variant:"positive",showDivider:!0})},error:(e,t)=>{D.show({message:e,description:t,variant:"negative",showDivider:!0})},warning:(e,t)=>{D.show({message:e,description:t,variant:"cautionary",showDivider:!0})},info:(e,t)=>{D.show({message:e,description:t,variant:"default",showDivider:!0})}};Se.__docgenInfo={description:"",methods:[],displayName:"ToastSystem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},maxToasts:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:"'bottom-right'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}}}};const K=m.createContext({iconOnly:!1}),Y=()=>m.useContext(K),Ce=({children:e,className:t,lang:r,style:n,bottom:l,title:c,iconOnly:d=!1})=>a.jsx(K.Provider,{value:{iconOnly:d},children:a.jsxs(Ee,{className:t,lang:r,style:n,$iconOnly:d,children:[c&&(typeof c=="string"?!d&&a.jsx(Ve,{lang:r,children:c}):a.jsx(Le,{children:c})),a.jsx(_e,{children:e}),l&&a.jsx(Ne,{$iconOnly:d,children:l})]})}),Ee=u.nav`
  ${k(void 0,"body3","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${R.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${R.ko};
  }

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${({$iconOnly:e})=>e?i.gap["gap-2"]:i.gap["gap-4"]};
  width: 100%;
  height: 100%;
`,Ne=u.div`
  margin-top: auto;
  min-height: ${({$iconOnly:e})=>e?"auto":"89px"};
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`,Ve=u.div`
  ${k(void 0,"body3","medium")}
  color: ${o.light["fg-neutral-strong"]};
  margin-bottom: ${i.gap["gap-5"]};
`,Le=u.div`
  margin-bottom: ${i.gap["gap-5"]};
`,_e=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`;Ce.__docgenInfo={description:"",methods:[],displayName:"LNB",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Pe=({value:e,selected:t=!1,disabled:r=!1,leadingIcon:n,iconOnly:l,onClick:c,className:d,lang:g="ko",style:y})=>{const{iconOnly:w}=Y(),v=l??w,s=r?o.light["fg-neutral-disable"]:o.light["fg-neutral-primary"];return a.jsxs(De,{type:"button",onClick:r?void 0:c,$selected:t,$disabled:r,$iconOnly:v,className:d,lang:g,style:y,children:[n&&a.jsx(Fe,{children:a.jsx(n,{width:20,height:20,color:s})}),!v&&a.jsx(Me,{lang:g,children:e})]})},De=u.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${_["rounded-2"]};
  background-color: ${({$selected:e})=>e?p.gray[50]:p.common[100]};
  color: ${({$disabled:e})=>e?o.light["fg-neutral-disable"]:o.light["fg-neutral-primary"]};
  text-align: left;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${p.gray[50]};
  }

  &:active {
    background-color: ${p.gray[100]};
  }
`,Fe=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Me=u.span`
  ${k(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${R.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${R.ko};
  }
`;Pe.__docgenInfo={description:"",methods:[],displayName:"LNBItem",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Oe=({title:e,children:t,lang:r,className:n,style:l})=>{const{iconOnly:c}=Y();return a.jsxs(He,{className:n,style:l,children:[!c&&e&&a.jsx(Ye,{lang:r,children:e}),a.jsx(Be,{children:t})]})},He=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`,Ye=u.div`
  ${k(void 0,"body2","regular")}
  color: ${o.light["fg-neutral-alternative"]};
  &:lang(en),
  &[lang="en"] {
    font-family: ${R.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${R.ko};
  }
`,Be=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`;Oe.__docgenInfo={description:"",methods:[],displayName:"LNBItemGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Ge=({name:e,avatarSrc:t,avatarType:r="custom",onClick:n,className:l,lang:c="ko",style:d,trailingIcon:g})=>{const{iconOnly:y}=Y();return a.jsxs(Ae,{type:"button",onClick:n,className:l,lang:c,style:d,$iconOnly:y,children:[a.jsx(se,{type:r,size:"x-small",src:t,value:e}),!y&&a.jsxs(a.Fragment,{children:[a.jsx(We,{lang:c,children:e}),g&&a.jsx(Xe,{children:a.jsx(g,{width:20,height:20,color:o.light["fg-neutral-primary"]})})]})]})},Ae=u.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${_["rounded-2"]};
  background-color: ${p.common[100]};
  color: ${o.light["fg-neutral-primary"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${p.gray[50]};
  }

  &:active {
    background-color: ${p.gray[100]};
  }
`,We=u.span`
  ${k(void 0,"body2","medium")}
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:lang(en),
  &[lang="en"] {
    font-family: ${R.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${R.ko};
  }
`,Xe=u.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;Ge.__docgenInfo={description:"",methods:[],displayName:"LNBItemProfile",props:{name:{required:!0,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarType:{required:!1,tsType:{name:"union",raw:'"default" | "custom" | "initial"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"initial"'}]},description:"",defaultValue:{value:'"custom"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""}}};const Ue=({orientation:e="horizontal",thickness:t=1,className:r,style:n})=>a.jsx(Ke,{$orientation:e,$thickness:t,className:r,style:n}),Ke=u.div`
  background-color: ${p.gray[200]};

  ${({$orientation:e,$thickness:t})=>e==="horizontal"?I`
          width: 100%;
          height: ${t}px;
        `:I`
          width: ${t}px;
          height: 100%;
        `}
`;Ue.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{Ue as D,O as I,Ce as L,U as S,X as T,Pe as a,Ge as b,Oe as c,H as d,Se as e,D as t};
