import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-FnhkKGqq.js";import{t as l,d as s,l as $,m as O}from"./textColor-CKN8Eu8b.js";import{L as U,D as K}from"./Modal-BKkbwdw2.js";import{c as u}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import{p as H,n as J}from"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as w}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{f as T}from"./fontFamily-CsG1KcIF.js";import{t as y}from"./typography-BBThIZ7c.js";import{r as P}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{a as Y,I as B,e as Q,f as Z,g as z,h as ee,i as te,j as ae,d as re}from"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{s as ne}from"./shadow-DVq_1U2q.js";import{A as ie}from"./Avatar-DHmTNtdl.js";const F=m.forwardRef(({size:e="medium",status:a="default",disabled:r=!1,active:n=!1,focused:o=!1,placeholder:c,value:d,type:p="text",onChange:v,onFocus:k,onBlur:h,className:b="",lang:q,...S},R)=>{const[I,C]=m.useState(!1),[E,j]=m.useState(o);m.useEffect(()=>{j(o)},[o]);const x=f=>{j(!0),k==null||k(f)},V=f=>{j(!1),h==null||h(f)},g=p==="password"&&d&&d.trim()!==""?{icon:I?"visibility-on":"visibility-off",color:l.light["fg-neutral-primary"]}:r?a==="positive"?{icon:"circlecheck",color:H.light["fg-positive-primary"]}:null:a==="negative"?n?null:{icon:"error",color:J.light["fg-negative-primary"]}:a==="positive"?n?null:{icon:"circlecheck",color:H.light["fg-positive-primary"]}:null,N=q;return t.jsxs(le,{children:[t.jsx(oe,{ref:R,type:p==="password"?I?"text":"password":p,value:d,onChange:v,onFocus:x,onBlur:V,placeholder:c,disabled:r,className:b,$size:e,$status:a,$disabled:r,$active:n,$focused:E,lang:N,...Object.fromEntries(Object.entries(S).filter(([f])=>!["active","focused","status","size"].includes(f)))}),g&&t.jsxs(se,{$size:e,$color:g.color,onMouseDown:f=>{f.preventDefault(),(g.icon==="visibility-on"||g.icon==="visibility-off")&&C(!I)},type:"button",children:[g.icon==="error"&&t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:g.color}),g.icon==="circlecheck"&&t.jsx(B,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:g.color}),g.icon==="visibility-on"&&t.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:g.color}),g.icon==="visibility-off"&&t.jsx(Z,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:g.color})]})]})}),le=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,oe=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${P["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${T.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${T.en};
  }

  /* Size styles */
  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${y(a,"body2","regular")}
          padding: ${i.gap["gap-1"]} ${i.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${y(a,"body3","regular")}
          padding: ${i.gap["gap-3"]} ${i.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${y(a,"body3","regular")}
          padding: ${i.gap["gap-2"]} ${i.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:a,$active:r,$focused:n})=>a?`
        background-color: ${u.gray[50]};
        color: ${l.light["fg-neutral-disable"]};
        border-color: ${w.light["color-border-primary"]};
      `:e==="default"?r&&n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-focused"]};
        `:r&&!n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-primary"]};
        `:!r&&n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-primary"]};
        `:e==="negative"?r&&n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${u.red[500]};
        `:!r&&n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${u.red[500]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-negative"]};
        `:e==="positive"?r&&n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-focused"]};
        `:r&&!n?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${w.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${l.light["fg-neutral-primary"]};
      border-color: ${w.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-webkit-input-placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-moz-placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    opacity: 1;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-ms-input-placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-webkit-input-placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-moz-placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus:-ms-input-placeholder {
    color: ${l.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
`,se=s.button`
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
`;F.displayName="Input";F.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const G=m.forwardRef(({label:e,labelType:a="default",description:r,descriptionLeadingIcon:n=!1,size:o="medium",status:c="default",disabled:d=!1,placeholder:p,value:v,type:k="text",onChange:h,onFocus:b,onBlur:q,className:S="",lang:R,...I},C)=>{const[E,j]=m.useState(!1),[x,V]=m.useState(!1),L=R,g=f=>{j(!0),V(!0),b==null||b(f)},N=f=>{j(!1),V(!1),q==null||q(f)};return t.jsxs(ce,{className:S,children:[e&&t.jsx(U,{type:a,lang:L,children:e}),t.jsx(F,{ref:C,size:o,status:c,disabled:d,active:x,focused:E,placeholder:p,value:v,type:k,onChange:h,onFocus:g,onBlur:N,lang:L,...I}),r&&t.jsx(K,{status:c,leadingIcon:n,lang:L,children:r})]})}),ce=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;G.displayName="TextField";G.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const A=m.forwardRef(({size:e="medium",disabled:a=!1,focused:r=!1,placeholder:n,value:o,onChange:c,onFocus:d,onBlur:p,className:v="",style:k,lang:h,...b},q)=>{const[S,R]=m.useState(r);m.useEffect(()=>{R(r)},[r]);const I=m.useMemo(()=>typeof o=="string"?o.trim().length>0:!1,[o]),C=h,E=x=>{R(!0),d==null||d(x)},j=x=>{R(!1),p==null||p(x)};return t.jsx(ue,{className:v,style:k,children:t.jsxs(de,{$size:e,$disabled:a,$focused:S,lang:C,children:[t.jsx(me,{$size:e,$disabled:a,children:t.jsx(z,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:a?l.light["fg-neutral-disable"]:l.light["fg-neutral-alternative"]})}),t.jsx(pe,{ref:q,disabled:a,placeholder:n,value:o,onChange:c,onFocus:E,onBlur:j,$size:e,$disabled:a,$filled:I,$focused:S,lang:C,...b}),!a&&I&&t.jsx(ge,{$size:e,$color:l.light["fg-neutral-assistive"],type:"button",onMouseDown:x=>{x.preventDefault()},onClick:()=>{c==null||c({target:{value:""}})},children:t.jsx(ee,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:l.light["fg-neutral-assistive"]})})]})})}),ue=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`,de=s.div`
  position: relative;
  width: 100%;
  background-color: ${u.gray[50]};
  border-radius: ${P["rounded-2"]};
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-color: ${({$focused:e})=>e?w.light["color-border-focused"]:w.light["color-border-primary"]};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${T.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${T.en};
  }

  ${({$size:e,lang:a="ko"})=>{switch(e){case"small":return`
          height: 32px;
          ${y(a,"body2","regular")}
        `;case"large":return`
          height: 48px;
          ${y(a,"body3","regular")}
        `;default:return`
          height: 40px;
          ${y(a,"body3","regular")}
        `}}}
`,pe=s.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({$disabled:e,$filled:a})=>e?l.light["fg-neutral-disable"]:a?l.light["fg-neutral-primary"]:l.light["fg-neutral-assistive"]};

  &::placeholder {
    color: ${l.light["fg-neutral-assistive"]};
    opacity: 1;
  }

  ${({$size:e})=>{const a=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],r=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],n=e==="small"?i.gap["gap-1.5"]:e==="large"?i.gap["gap-3"]:i.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(a)*2;return`
      padding: ${n} ${r};
      padding-left: ${c}px;
    `}}
`,me=s.div`
  position: absolute;
  left: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ge=s.button`
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
`;A.displayName="Searchfield";A.__docgenInfo={description:"",methods:[],displayName:"Searchfield",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const fe=O`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,he=O`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,ye=O`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,ve=O`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
`,W=({children:e,description:a,variant:r="default",placement:n="bottom-right",offset:o=40,onClose:c,showLeadingIcon:d=!0,showTrailingIcon:p=!0,showDivider:v=!1,className:k="",autoClose:h=!1,autoCloseDelay:b=3e3,index:q=0,disablePositioning:S=!1,lang:R,...I})=>{const[C,E]=m.useState(!1),[j,x]=m.useState(!1),V=typeof q=="number"?q:_;m.useEffect(()=>(_+=1,()=>{_=Math.max(0,_-1)}),[]),m.useEffect(()=>{if(E(!0),h){const f=setTimeout(()=>{x(!0)},b);return()=>clearTimeout(f)}},[h,b]);const L=()=>{x(!0),setTimeout(()=>{c==null||c()},500)},g=()=>{if(!d)return null;switch(r){case"positive":return t.jsx(B,{width:20,height:20,color:"currentColor"});case"negative":return t.jsx(Y,{width:20,height:20,color:"currentColor"});case"cautionary":return t.jsx(ae,{width:20,height:20,color:"currentColor"});case"default":default:return t.jsx(te,{width:20,height:20,color:"currentColor"})}},N=()=>p?t.jsx(qe,{onClick:L,children:t.jsx(re,{width:16,height:16,color:"currentColor"})}):null;return t.jsxs($e,{$variant:r,$placement:n,$offset:o,$isVisible:C,$isExiting:j,$index:V,$disablePositioning:S,className:k,...Object.fromEntries(Object.entries(I).filter(([f])=>!["variant","placement","offset"].includes(f))),children:[d&&t.jsx(we,{$variant:r,children:t.jsx(D,{children:g()})}),t.jsxs(Te,{lang:R,children:[t.jsx("div",{children:e}),a&&t.jsx("div",{children:a})]}),v&&t.jsx(ke,{$variant:r}),p&&t.jsx(D,{children:N()})]})},be=16,xe=80;let _=0;const $e=s.div`
  display: flex;
  align-items: center;
  padding: ${i.gap["gap-3"]} ${i.gap["gap-2"]};
  background-color: ${u.gray[950]};
  border-radius: ${P["rounded-2"]};
  box-shadow: ${ne.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:a=0,$placement:r,$offset:n})=>!e&&$`
      position: fixed;
      z-index: ${9999+a};

      /* placement에 따른 위치 설정 */
      ${()=>{const o=n+a*(xe+be);switch(r){case"top-left":return $`
              top: ${o}px;
              left: ${n}px;
            `;case"top-center":return $`
              top: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return $`
              top: ${o}px;
              right: ${n}px;
            `;case"bottom-left":return $`
              bottom: ${o}px;
              left: ${n}px;
            `;case"bottom-center":return $`
              bottom: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return $`
              bottom: ${o}px;
              right: ${n}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:a,$placement:r})=>{const n=r==null?void 0:r.startsWith("top");if(a)return $`
        animation: ${n?ve:he}
          0.5s ease-in-out forwards;
      `;if(e)return $`
        animation: ${n?ye:fe}
          0.5s ease-in-out forwards;
      `;{const o=n?"translateY(-40px)":"translateY(40px)";return $`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?`translateX(-50%) ${o}`:o};
      `}}}
`,D=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,we=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${i.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return u.green[500];case"negative":return u.red[500];case"cautionary":return u.yellow[500];case"default":default:return u.common[100]}}};
`,Te=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${u.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${y(void 0,"body2","medium")}
    color: ${u.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${y(void 0,"caption2","regular")}
    color: ${u.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,ke=s.div`
  width: 1px;
  background-color: ${u.gray[925]};
  margin: 0 ${i.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,qe=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${l.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${u.common[100]};
  }
`;W.displayName="Toast";W.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const X=m.createContext({iconOnly:!1}),M=()=>m.useContext(X),Ie=({children:e,className:a,lang:r,style:n,bottom:o,title:c,iconOnly:d=!1})=>t.jsx(X.Provider,{value:{iconOnly:d},children:t.jsxs(je,{className:a,lang:r,style:n,$iconOnly:d,children:[!d&&c&&t.jsx(Se,{lang:r,children:c}),t.jsx(Ce,{children:e}),o&&t.jsx(Re,{$iconOnly:d,children:o})]})}),je=s.nav`
  ${y(void 0,"body3","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${T.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${T.ko};
  }

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${({$iconOnly:e})=>e?i.gap["gap-2"]:i.gap["gap-4"]};
  width: 100%;
  height: 100%;
`,Re=s.div`
  margin-top: auto;
  min-height: ${({$iconOnly:e})=>e?"auto":"89px"};
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`,Se=s.div`
  ${y(void 0,"body3","medium")}
  color: ${l.light["fg-neutral-strong"]};
  margin-bottom: ${i.gap["gap-5"]};
`,Ce=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`;Ie.__docgenInfo={description:"",methods:[],displayName:"LNB",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ee=({value:e,selected:a=!1,disabled:r=!1,leadingIcon:n,iconOnly:o,onClick:c,className:d,lang:p="ko",style:v})=>{const{iconOnly:k}=M(),h=o??k,b=r?l.light["fg-neutral-disable"]:l.light["fg-neutral-primary"];return t.jsxs(Ve,{type:"button",onClick:r?void 0:c,$selected:a,$disabled:r,$iconOnly:h,className:d,lang:p,style:v,children:[n&&t.jsx(Le,{children:t.jsx(n,{width:20,height:20,color:b})}),!h&&t.jsx(Ne,{lang:p,children:e})]})},Ve=s.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${P["rounded-2"]};
  background-color: ${({$selected:e})=>e?u.gray[50]:u.common[100]};
  color: ${({$disabled:e})=>e?l.light["fg-neutral-disable"]:l.light["fg-neutral-primary"]};
  text-align: left;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${u.gray[50]};
  }

  &:active {
    background-color: ${u.gray[100]};
  }
`,Le=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Ne=s.span`
  ${y(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${T.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${T.ko};
  }
`;Ee.__docgenInfo={description:"",methods:[],displayName:"LNBItem",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Pe=({title:e,children:a,lang:r,className:n,style:o})=>{const{iconOnly:c}=M();return t.jsxs(_e,{className:n,style:o,children:[!c&&e&&t.jsx(Oe,{lang:r,children:e}),t.jsx(Fe,{children:a})]})},_e=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`,Oe=s.div`
  ${y(void 0,"body2","regular")}
  color: ${l.light["fg-neutral-alternative"]};
  &:lang(en),
  &[lang="en"] {
    font-family: ${T.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${T.ko};
  }
`,Fe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`;Pe.__docgenInfo={description:"",methods:[],displayName:"LNBItemGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const Me=({name:e,avatarSrc:a,avatarType:r="custom",onClick:n,className:o,lang:c="ko",style:d,trailingIcon:p})=>{const{iconOnly:v}=M();return t.jsxs(He,{type:"button",onClick:n,className:o,lang:c,style:d,$iconOnly:v,children:[t.jsx(ie,{type:r,size:"x-small",src:a,value:e}),!v&&t.jsxs(t.Fragment,{children:[t.jsx(De,{lang:c,children:e}),p&&t.jsx(Ye,{children:t.jsx(p,{width:20,height:20,color:l.light["fg-neutral-primary"]})})]})]})},He=s.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${P["rounded-2"]};
  background-color: ${u.common[100]};
  color: ${l.light["fg-neutral-primary"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${u.gray[50]};
  }

  &:active {
    background-color: ${u.gray[100]};
  }
`,De=s.span`
  ${y(void 0,"body2","medium")}
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:lang(en),
  &[lang="en"] {
    font-family: ${T.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${T.ko};
  }
`,Ye=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;Me.__docgenInfo={description:"",methods:[],displayName:"LNBItemProfile",props:{name:{required:!0,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarType:{required:!1,tsType:{name:"union",raw:'"default" | "custom" | "initial"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"initial"'}]},description:"",defaultValue:{value:'"custom"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""}}};const Be=({orientation:e="horizontal",thickness:a=1,className:r,style:n})=>t.jsx(Ge,{$orientation:e,$thickness:a,className:r,style:n}),Ge=s.div`
  background-color: ${u.gray[200]};

  ${({$orientation:e,$thickness:a})=>e==="horizontal"?$`
          width: 100%;
          height: ${a}px;
        `:$`
          width: ${a}px;
          height: 100%;
        `}
`;Be.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{Be as D,F as I,Ie as L,A as S,G as T,Ee as a,Me as b,Pe as c,W as d};
