import{j as t}from"./jsx-runtime-DoWS3ZpK.js";import{r as p}from"./iframe-Dl3k5ZL5.js";import{d as s,l as M,m as ae}from"./styled-components.browser.esm-Bl6iNF_h.js";import{c as d}from"./color-DlZ4f652.js";import{t as i}from"./textColor-DVi7834n.js";import{p as P,n as Y}from"./negativeColor-DFTQtxpe.js";import{b as T}from"./borderColor-BrY1a26q.js";import{f as q}from"./fontFamily-CsG1KcIF.js";import{t as v}from"./typography-5QY5Grkh.js";import{r as F}from"./radius-DaoU83SK.js";import{s as n}from"./spacing-tE1IiUFl.js";import{b as X,c as U,d as he,e as ve,f as ye,g as be,I as xe,h as re,i as ne,a as $e,j as we,k as Te}from"./IconSearch-CIWN5eZZ.js";import{s as le}from"./shadow-DVq_1U2q.js";const B=({children:e,type:a="default",className:r="",lang:l,...o})=>{const u=l,c=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(qe,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(Ie,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ke,{$type:a,lang:u,className:r,...o,children:c()})},ke=s.label`
  ${v(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${i.light["fg-neutral-strong"]};
`,qe=s.span`
  ${v(void 0,"caption2","regular")}
  color: ${d.red[500]};
  margin-left: ${n.gap["gap-0.5"]};
`,Ie=s.span`
  ${v(void 0,"body2","regular")}
  color: ${i.light["fg-neutral-alternative"]};
  margin-left: ${n.gap["gap-0.5"]};
`;B.displayName="Label";B.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const D=({children:e,status:a="default",leadingIcon:r=!1,className:l="",lang:o,...u})=>{const c=o,m=()=>{if(!r)return null;switch(a){case"negative":return t.jsx(Ee,{children:t.jsx(U,{})});case"positive":return t.jsx(Re,{children:t.jsx(X,{})});default:return null}};return t.jsxs(je,{status:a,lang:c,className:l,...u,children:[m(),t.jsx("span",{children:e})]})},je=s.div`
  ${v(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return Y.light["fg-negative-primary"];case"positive":return P.light["fg-positive-primary"];default:return i.light["fg-neutral-assistive"]}}};
`,ie=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${n.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ee=s(ie)`
  color: ${Y.light["fg-negative-primary"]};
`,Re=s(ie)`
  color: ${P.light["fg-positive-primary"]};
`;D.displayName="Description";D.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const K=p.forwardRef(({size:e="medium",status:a="default",disabled:r=!1,active:l=!1,focused:o=!1,placeholder:u,value:c,type:m="text",onChange:$,onFocus:f,onBlur:I,className:C="",lang:E,...L},y)=>{const[b,V]=p.useState(!1),[k,j]=p.useState(o);p.useEffect(()=>{j(o)},[o]);const g=w=>{j(!0),f==null||f(w)},R=w=>{j(!1),I==null||I(w)},x=m==="password"&&c&&c.trim()!==""?{icon:b?"visibility-on":"visibility-off",color:i.light["fg-neutral-primary"]}:r?a==="positive"?{icon:"circlecheck",color:P.light["fg-positive-primary"]}:null:a==="negative"?l?null:{icon:"error",color:Y.light["fg-negative-primary"]}:a==="positive"?l?null:{icon:"circlecheck",color:P.light["fg-positive-primary"]}:null,H=E;return t.jsxs(Se,{children:[t.jsx(Ce,{ref:y,type:m==="password"?b?"text":"password":m,value:c,onChange:$,onFocus:g,onBlur:R,placeholder:u,disabled:r,className:C,$size:e,$status:a,$disabled:r,$active:l,$focused:k,lang:H,...Object.fromEntries(Object.entries(L).filter(([w])=>!["active","focused","status","size"].includes(w)))}),x&&t.jsxs(Ve,{$size:e,$color:x.color,onMouseDown:w=>{w.preventDefault(),(x.icon==="visibility-on"||x.icon==="visibility-off")&&V(!b)},type:"button",children:[x.icon==="error"&&t.jsx(U,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:x.color}),x.icon==="circlecheck"&&t.jsx(X,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:x.color}),x.icon==="visibility-on"&&t.jsx(he,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:x.color}),x.icon==="visibility-off"&&t.jsx(ve,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:x.color})]})]})}),Se=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Ce=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${F["rounded-2"]};
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
  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${v(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${v(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${v(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:a,$active:r,$focused:l})=>a?`
        background-color: ${d.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${T.light["color-border-primary"]};
      `:e==="default"?r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-focused"]};
        `:r&&!l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-primary"]};
        `:!r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-primary"]};
        `:e==="negative"?r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${d.red[500]};
        `:!r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${d.red[500]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-negative"]};
        `:e==="positive"?r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-focused"]};
        `:r&&!l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${T.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${i.light["fg-neutral-primary"]};
      border-color: ${T.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-webkit-input-placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-moz-placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    opacity: 1;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-ms-input-placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-webkit-input-placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-moz-placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus:-ms-input-placeholder {
    color: ${i.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
`,Ve=s.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
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
`;K.displayName="Input";K.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const oe=p.forwardRef(({label:e,labelType:a="default",description:r,descriptionLeadingIcon:l=!1,size:o="medium",status:u="default",disabled:c=!1,placeholder:m,value:$,type:f="text",onChange:I,onFocus:C,onBlur:E,className:L="",lang:y,...b},V)=>{const[k,j]=p.useState(!1),[g,R]=p.useState(!1),S=y,x=w=>{j(!0),R(!0),C==null||C(w)},H=w=>{j(!1),R(!1),E==null||E(w)};return t.jsxs(Le,{className:L,children:[e&&t.jsx(B,{type:a,lang:S,children:e}),t.jsx(K,{ref:V,size:o,status:u,disabled:c,active:g,focused:k,placeholder:m,value:$,type:f,onChange:I,onFocus:x,onBlur:H,lang:S,...b}),r&&t.jsx(D,{status:u,leadingIcon:l,lang:S,children:r})]})}),Le=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
`;oe.displayName="TextField";oe.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const se=p.forwardRef(({size:e="medium",disabled:a=!1,focused:r=!1,placeholder:l,value:o,onChange:u,onFocus:c,onBlur:m,className:$="",style:f,lang:I,...C},E)=>{const[L,y]=p.useState(r);p.useEffect(()=>{y(r)},[r]);const b=p.useMemo(()=>typeof o=="string"?o.trim().length>0:!1,[o]),V=I,k=g=>{y(!0),c==null||c(g)},j=g=>{y(!1),m==null||m(g)};return t.jsx(Ne,{className:$,style:f,children:t.jsxs(Me,{$size:e,$disabled:a,$focused:L,lang:V,children:[t.jsx(Fe,{$size:e,$disabled:a,children:t.jsx(ye,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:a?i.light["fg-neutral-disable"]:i.light["fg-neutral-alternative"]})}),t.jsx(He,{ref:E,disabled:a,placeholder:l,value:o,onChange:u,onFocus:k,onBlur:j,$size:e,$disabled:a,$filled:b,$focused:L,lang:V,...C}),!a&&b&&t.jsx(_e,{$size:e,$color:i.light["fg-neutral-assistive"],type:"button",onMouseDown:g=>{g.preventDefault()},onClick:()=>{u==null||u({target:{value:""}})},children:t.jsx(be,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:i.light["fg-neutral-assistive"]})})]})})}),Ne=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
`,Me=s.div`
  position: relative;
  width: 100%;
  background-color: ${d.gray[50]};
  border-radius: ${F["rounded-2"]};
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-color: ${({$focused:e})=>e?T.light["color-border-focused"]:T.light["color-border-primary"]};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }

  ${({$size:e,lang:a="ko"})=>{switch(e){case"small":return`
          height: 32px;
          ${v(a,"body2","regular")}
        `;case"large":return`
          height: 48px;
          ${v(a,"body3","regular")}
        `;default:return`
          height: 40px;
          ${v(a,"body3","regular")}
        `}}}
`,He=s.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({$disabled:e,$filled:a})=>e?i.light["fg-neutral-disable"]:a?i.light["fg-neutral-primary"]:i.light["fg-neutral-assistive"]};

  &::placeholder {
    color: ${i.light["fg-neutral-assistive"]};
    opacity: 1;
  }

  ${({$size:e})=>{const a=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],l=e==="small"?n.gap["gap-1.5"]:e==="large"?n.gap["gap-3"]:n.gap["gap-2"],u=(e==="small"?16:e==="large"?24:20)+parseInt(a)*2;return`
      padding: ${l} ${r};
      padding-left: ${u}px;
    `}}
`,Fe=s.div`
  position: absolute;
  left: ${({$size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  display: flex;
  align-items: center;
  justify-content: center;
`,_e=s.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
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
`;se.displayName="Searchfield";se.__docgenInfo={description:"",methods:[],displayName:"Searchfield",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const A=({children:e,className:a,...r})=>t.jsx(Oe,{className:a,...r,children:e}),Oe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1"]};
  box-shadow: ${le.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: 300px;

  &[lang="ko"] {
    font-family: ${q.ko};
  }

  &[lang="en"] {
    font-family: ${q.en};
  }

  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${d.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${d.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${d.gray[200]} transparent;
`;A.displayName="Menu";A.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const G=({disable:e=!1,active:a=!1,leadingIcon:r,text:l,description:o,trailingIcon:u,onClick:c,className:m,lang:$})=>{const f=()=>e?i.light["fg-neutral-disable"]:i.light["fg-neutral-primary"],I=()=>a&&!e;return t.jsxs(Pe,{disable:e,active:a,"data-disable":e,onClick:e?void 0:c,className:m,lang:$,children:[r&&t.jsx(Be,{children:t.jsx(r,{width:16,height:16,color:f()})}),t.jsxs(De,{children:[l&&t.jsx(Ae,{children:l}),o&&t.jsx(Ge,{children:o})]}),I()&&t.jsx(We,{children:u?t.jsx(u,{width:16,height:16,color:f()}):t.jsx(xe,{width:16,height:16,color:f()})})]})},Pe=s.div`
  display: flex;
  align-items: center;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1.5"]} ${n.gap["gap-2"]};
  border-radius: ${F["rounded-1"]};
  background-color: ${d.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${d.gray[50]};
  }
`,Be=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,De=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,Ae=s.div`
  ${v(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  color: inherit;
`,Ge=s.div`
  ${v(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
  color: ${i.light["fg-neutral-alternative"]};
`,We=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;G.displayName="Cell";G.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const J=({size:e="medium",disabled:a=!1,active:r=!1,focused:l=!1,placeholder:o="선택해주세요.",value:u,options:c=[],onChange:m,onFocus:$,onBlur:f,className:I="",style:C,lang:E="ko",...L})=>{const[y,b]=p.useState(!1),[V,k]=p.useState(r),[j,g]=p.useState(l),R=p.useRef(null);p.useEffect(()=>{const N=W=>{R.current&&!R.current.contains(W.target)&&(b(!1),g(!1))};return document.addEventListener("mousedown",N),()=>{document.removeEventListener("mousedown",N)}},[]),p.useEffect(()=>{k(r)},[r]),p.useEffect(()=>{g(l)},[l]);const S=c.find(N=>N.value===u),x=()=>{a||(b(!y),y?(g(!1),k(!1),f==null||f({})):(g(!0),k(!0),$==null||$({})))},H=N=>{m==null||m(N.value),b(!1),g(!1),f==null||f({})},w=()=>a?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"];return t.jsxs(Ye,{ref:R,className:`selector-container ${I}`,style:C,...L,children:[t.jsxs(Ue,{$size:e,$disabled:a,$active:V,$focused:j,lang:E,onClick:x,type:"button","data-active":V?"true":"false",children:[t.jsx(Ke,{children:S?S.label:o}),t.jsx(Je,{size:e,children:y?t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:w()}):t.jsx(ne,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:w()})})]}),y&&t.jsx(Xe,{children:t.jsx(A,{children:c.map(N=>t.jsx(G,{text:N.label,active:N.value===u,onClick:()=>H(N)},N.value))})})]})},Ye=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Xe=s.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${n.gap["gap-1"]};

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,Ue=s.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${F["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${v(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${v(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${v(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${d.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${d.gray[50]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-primary"]};
      `:r?`
        background-color: ${d.gray[50]};
        color: ${i.light["fg-neutral-alternative"]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      color: ${i.light["fg-neutral-alternative"]};
      border-color: ${T.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${d.gray[50]};
    border-color: ${d.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${d.gray[50]};
    border-color: ${d.gray[300]};
  }
`,Ke=s.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Je=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;J.displayName="Selector";J.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const Q=({size:e="medium",disabled:a=!1,active:r=!1,focused:l=!1,placeholder:o="입력하거나 선택해주세요.",value:u,options:c=[],onChange:m,onFocus:$,onBlur:f,className:I="",style:C,lang:E="ko",...L})=>{const[y,b]=p.useState(!1),[V,k]=p.useState(l),[j,g]=p.useState(u||""),[R,S]=p.useState(!0),[x,H]=p.useState(u||""),w=p.useRef(null),N=p.useRef(null);p.useEffect(()=>{const h=_=>{if(w.current&&!w.current.contains(_.target))if(b(!1),k(!1),S(!1),x){const ee=c.find(fe=>fe.value===x);g(ee?ee.label:"")}else g("")};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[x,c]),p.useEffect(()=>{k(l)},[l]),p.useEffect(()=>{if(u){const h=c.find(_=>_.value===u);g(h?h.label:u),H(u)}else g(""),H("")},[u,c]);const W=()=>{var h;a||(b(!y),y?S(!1):(k(!0),S(!0),(h=N.current)==null||h.focus()))},ce=h=>{const _=h.target.value;g(_),S(!1),y||b(!0)},pe=h=>{k(!0),b(!0),S(!0),$==null||$(h)},me=h=>{k(!1),f==null||f(h)},ge=h=>{g(h.label),H(h.value),m==null||m(h.value),b(!1),k(!1)},Z=()=>a?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"],z=R?c:c.filter(h=>h.label.toLowerCase().includes(j.toLowerCase()));return t.jsxs(Qe,{ref:w,className:`combobox-container ${I}`,style:C,...L,children:[t.jsxs(Ze,{$size:e,$disabled:a,$active:r,$focused:V,lang:E,children:[t.jsx(ze,{ref:N,$size:e,$disabled:a,$active:r,$focused:V,$hasValue:!!j,lang:E,value:j,placeholder:o,disabled:a,onChange:ce,onFocus:pe,onBlur:me}),t.jsx(tt,{size:e,onClick:W,children:y?t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()}):t.jsx(ne,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()})})]}),y&&z.length>0&&t.jsx(et,{children:t.jsx(A,{children:z.map(h=>t.jsx(G,{text:h.label,active:h.value===x,onClick:()=>ge(h)},h.value))})})]})},Qe=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Ze=s.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${F["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-primary"]};
      `:r?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      border-color: ${T.light["color-border-primary"]};
    `}
`,ze=s.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 30px;
          ${v(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 46px;
          ${v(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 38px;
          ${v(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:r,$hasValue:l})=>e?`
        color: ${i.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&r?`
        color: ${i.light["fg-neutral-primary"]};
      `:a||l?`
        color: ${i.light["fg-neutral-primary"]};
      `:r?`
        color: ${i.light["fg-neutral-alternative"]};
      `:`
      color: ${i.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${i.light["fg-neutral-alternative"]};
  }
`,et=s.div`
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
`,tt=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;Q.displayName="ComboBox";Q.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const ue=({type:e="selector",size:a="medium",disabled:r=!1,active:l=!1,focused:o=!1,placeholder:u="선택해주세요.",value:c,options:m=[],label:$,labelType:f="default",description:I,descriptionLeadingIcon:C=!1,status:E="default",onChange:L,onFocus:y,onBlur:b,className:V="",style:k,lang:j,...g})=>{const R=j;return t.jsxs(at,{className:`dropdown-container ${V}`,style:k,...Object.fromEntries(Object.entries(g).filter(([S])=>!["active","focused","size","disabled"].includes(S))),children:[$&&t.jsx(B,{type:f,lang:R,children:$}),e==="combobox"?t.jsx(Q,{size:a,disabled:r,active:l,focused:o,placeholder:u,value:c,options:m,onChange:L,onFocus:y,onBlur:b,lang:R}):t.jsx(J,{size:a,disabled:r,active:l,focused:o,placeholder:u,value:c,options:m,onChange:L,onFocus:y,onBlur:b,lang:R}),I&&t.jsx(D,{status:E,leadingIcon:C,lang:R,children:I})]})},at=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  width: 100%;
`;ue.displayName="Dropdown";ue.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const rt=ae`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,nt=ae`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,de=({children:e,description:a,variant:r="default",placement:l="bottom-right",offset:o=40,onClose:u,showLeadingIcon:c=!0,showTrailingIcon:m=!0,showDivider:$=!1,className:f="",autoClose:I=!1,autoCloseDelay:C=3e3,index:E=0,disablePositioning:L=!1,lang:y,...b})=>{const[V,k]=p.useState(!1),[j,g]=p.useState(!1),R=typeof E=="number"?E:O;p.useEffect(()=>(O+=1,()=>{O=Math.max(0,O-1)}),[]),p.useEffect(()=>{if(k(!0),I){const w=setTimeout(()=>{g(!0)},C);return()=>clearTimeout(w)}},[I,C]);const S=()=>{g(!0),setTimeout(()=>{u==null||u()},500)},x=()=>{if(!c)return null;switch(r){case"positive":return t.jsx(X,{width:20,height:20,color:"currentColor"});case"negative":return t.jsx(U,{width:20,height:20,color:"currentColor"});case"cautionary":return t.jsx(we,{width:20,height:20,color:"currentColor"});case"default":default:return t.jsx($e,{width:20,height:20,color:"currentColor"})}},H=()=>m?t.jsx(ct,{onClick:S,children:t.jsx(Te,{width:16,height:16,color:"currentColor"})}):null;return t.jsxs(ot,{$variant:r,$placement:l,$offset:o,$isVisible:V,$isExiting:j,$index:R,$disablePositioning:L,className:f,...Object.fromEntries(Object.entries(b).filter(([w])=>!["variant","placement","offset"].includes(w))),children:[c&&t.jsx(st,{$variant:r,children:t.jsx(te,{children:x()})}),t.jsxs(ut,{lang:y,children:[t.jsx("div",{children:e}),a&&t.jsx("div",{children:a})]}),$&&t.jsx(dt,{$variant:r}),m&&t.jsx(te,{children:H()})]})},lt=16,it=80;let O=0;const ot=s.div`
  display: flex;
  align-items: center;
  padding: ${n.gap["gap-3"]} ${n.gap["gap-2"]};
  background-color: ${d.gray[950]};
  border-radius: ${F["rounded-2"]};
  box-shadow: ${le.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:a=0,$placement:r,$offset:l})=>!e&&M`
      position: fixed;
      z-index: ${9999+a};

      /* placement에 따른 위치 설정 */
      ${()=>{const o=l+a*(it+lt);switch(r){case"top-left":return M`
              top: ${o}px;
              left: ${l}px;
            `;case"top-center":return M`
              top: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return M`
              top: ${o}px;
              right: ${l}px;
            `;case"bottom-left":return M`
              bottom: ${o}px;
              left: ${l}px;
            `;case"bottom-center":return M`
              bottom: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return M`
              bottom: ${o}px;
              right: ${l}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:a,$placement:r})=>a?M`
        animation: ${nt} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:e?M`
        animation: ${rt} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:M`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?"translateX(-50%) translateY(40px)":"translateY(40px)"};
      `}
`,te=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,st=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${n.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return d.green[500];case"negative":return d.red[500];case"cautionary":return d.yellow[500];case"default":default:return d.common[100]}}};
`,ut=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${d.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${v(void 0,"body2","medium")}
    color: ${d.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${v(void 0,"caption2","regular")}
    color: ${d.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,dt=s.div`
  width: 1px;
  background-color: ${d.gray[925]};
  margin: 0 ${n.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,ct=s.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${i.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${d.common[100]};
  }
`;de.displayName="Toast";de.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const pt=({children:e,className:a,lang:r,style:l,bottom:o,title:u})=>t.jsxs(mt,{className:a,lang:r,style:l,children:[u&&t.jsx(ft,{lang:r,children:u}),t.jsx(ht,{children:e}),o&&t.jsx(gt,{children:o})]}),mt=s.nav`
  ${v(void 0,"body3","medium")}
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
  padding: ${n.gap["gap-4"]};
`,gt=s.div`
  margin-top: auto;
  min-height: 89px;
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-2"]};
`,ft=s.div`
  ${v(void 0,"body3","medium")}
  color: ${i.light["fg-neutral-strong"]};
  margin-bottom: ${n.gap["gap-5"]};
`,ht=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-2"]};
`;pt.__docgenInfo={description:"",methods:[],displayName:"LNB",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};const vt=({value:e,selected:a=!1,disabled:r=!1,leadingIcon:l,onClick:o,className:u,lang:c="ko",style:m})=>{const $=r?i.light["fg-neutral-disable"]:i.light["fg-neutral-primary"];return t.jsxs(yt,{type:"button",onClick:r?void 0:o,$selected:a,$disabled:r,className:u,lang:c,style:m,children:[l&&t.jsx(bt,{children:t.jsx(l,{width:20,height:20,color:$})}),t.jsx(xt,{lang:c,children:e})]})},yt=s.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  gap: ${n.gap["gap-1.5"]};
  padding: ${n.gap["gap-2"]};
  border: 0;
  border-radius: ${F["rounded-2"]};
  background-color: ${({$selected:e})=>e?d.gray[50]:d.common[100]};
  color: ${({$disabled:e})=>e?i.light["fg-neutral-disable"]:i.light["fg-neutral-primary"]};
  text-align: left;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${d.gray[50]};
  }

  &:active {
    background-color: ${d.gray[100]};
  }
`,bt=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,xt=s.span`
  ${v(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
`;vt.__docgenInfo={description:"",methods:[],displayName:"LNBItem",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const $t=({title:e,children:a,lang:r,className:l,style:o})=>t.jsxs(wt,{className:l,style:o,children:[e&&t.jsx(Tt,{lang:r,children:e}),t.jsx(kt,{children:a})]}),wt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1.5"]};
`,Tt=s.div`
  ${v(void 0,"body2","regular")}
  color: ${i.light["fg-neutral-assistive"]};
  &:lang(en),
  &[lang="en"] {
    font-family: ${q.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${q.ko};
  }
`,kt=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1.5"]};
`;$t.__docgenInfo={description:"",methods:[],displayName:"LNBItemGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const qt=({orientation:e="horizontal",thickness:a=1,className:r,style:l})=>t.jsx(It,{$orientation:e,$thickness:a,className:r,style:l}),It=s.div`
  background-color: ${d.gray[200]};

  ${({$orientation:e,$thickness:a})=>e==="horizontal"?M`
          width: 100%;
          height: ${a}px;
        `:M`
          width: ${a}px;
          height: 100%;
        `}
`;qt.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{G as C,D,K as I,pt as L,A as M,se as S,oe as T,Q as a,qt as b,ue as c,vt as d,$t as e,B as f,J as g,de as h};
