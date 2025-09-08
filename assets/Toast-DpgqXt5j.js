import{j as t}from"./jsx-runtime-Spnba8qJ.js";import{r as c}from"./iframe-DwQdGnDM.js";import{d as s,l as F,m as ae}from"./styled-components.browser.esm-Bo1ZEldf.js";import{c as d}from"./color-DlZ4f652.js";import{t as l}from"./textColor-DVi7834n.js";import{p as D,n as G}from"./negativeColor-DFTQtxpe.js";import{b as $}from"./borderColor-BrY1a26q.js";import{f as M}from"./fontFamily-CsG1KcIF.js";import{t as k}from"./typography-5QY5Grkh.js";import{r as N}from"./radius-DaoU83SK.js";import{s as n}from"./spacing-tE1IiUFl.js";import{a as X,b as U,c as he,d as ve,e as ye,f as be,I as xe,g as re,h as ne,i as $e,j as we,k as Te}from"./IconSearch-Dl0S2b7X.js";import{s as le}from"./shadow-DVq_1U2q.js";const P=({children:e,type:a="default",className:r="",lang:i,...o})=>{const u=i,p=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(qe,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(Ie,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ke,{$type:a,lang:u,className:r,...o,children:p()})},ke=s.label`
  ${k(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${l.light["fg-neutral-strong"]};
`,qe=s.span`
  ${k(void 0,"caption2","regular")}
  color: ${d.red[500]};
  margin-left: ${n.gap["gap-0.5"]};
`,Ie=s.span`
  ${k(void 0,"body2","regular")}
  color: ${l.light["fg-neutral-alternative"]};
  margin-left: ${n.gap["gap-0.5"]};
`;P.displayName="Label";P.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const A=({children:e,status:a="default",leadingIcon:r=!1,className:i="",lang:o,...u})=>{const p=o,m=()=>{if(!r)return null;switch(a){case"negative":return t.jsx(je,{children:t.jsx(U,{})});case"positive":return t.jsx(Re,{children:t.jsx(X,{})});default:return null}};return t.jsxs(Ee,{status:a,lang:p,className:i,...u,children:[m(),t.jsx("span",{children:e})]})},Ee=s.div`
  ${k(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return G.light["fg-negative-primary"];case"positive":return D.light["fg-positive-primary"];default:return l.light["fg-neutral-assistive"]}}};
`,ie=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${n.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,je=s(ie)`
  color: ${G.light["fg-negative-primary"]};
`,Re=s(ie)`
  color: ${D.light["fg-positive-primary"]};
`;A.displayName="Description";A.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const K=c.forwardRef(({size:e="medium",status:a="default",disabled:r=!1,active:i=!1,focused:o=!1,placeholder:u,value:p,type:m="text",onChange:w,onFocus:f,onBlur:q,className:V="",lang:E,...C},v)=>{const[y,S]=c.useState(!1),[T,I]=c.useState(o);c.useEffect(()=>{I(o)},[o]);const g=x=>{I(!0),f==null||f(x)},j=x=>{I(!1),q==null||q(x)},b=m==="password"&&p&&p.trim()!==""?{icon:y?"visibility-on":"visibility-off",color:l.light["fg-neutral-primary"]}:r?a==="positive"?{icon:"circlecheck",color:D.light["fg-positive-primary"]}:null:a==="negative"?i?null:{icon:"error",color:G.light["fg-negative-primary"]}:a==="positive"?i?null:{icon:"circlecheck",color:D.light["fg-positive-primary"]}:null,H=E;return t.jsxs(Ve,{children:[t.jsx(Se,{ref:v,type:m==="password"?y?"text":"password":m,value:p,onChange:w,onFocus:g,onBlur:j,placeholder:u,disabled:r,className:V,$size:e,$status:a,$disabled:r,$active:i,$focused:T,lang:H,...Object.fromEntries(Object.entries(C).filter(([x])=>!["active","focused","status","size"].includes(x)))}),b&&t.jsxs(Ce,{$size:e,$color:b.color,onMouseDown:x=>{x.preventDefault(),(b.icon==="visibility-on"||b.icon==="visibility-off")&&S(!y)},type:"button",children:[b.icon==="error"&&t.jsx(U,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:b.color}),b.icon==="circlecheck"&&t.jsx(X,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:b.color}),b.icon==="visibility-on"&&t.jsx(he,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:b.color}),b.icon==="visibility-off"&&t.jsx(ve,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:b.color})]})]})}),Ve=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Se=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${N["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }

  /* Size styles */
  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${k(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${k(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${k(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:a,$active:r,$focused:i})=>a?`
        background-color: ${d.gray[50]};
        color: ${l.light["fg-neutral-disable"]};
        border-color: ${$.light["color-border-primary"]};
      `:e==="default"?r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-focused"]};
        `:r&&!i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-primary"]};
        `:!r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-primary"]};
        `:e==="negative"?r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${d.red[500]};
        `:!r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${d.red[500]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-negative"]};
        `:e==="positive"?r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-focused"]};
        `:r&&!i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${$.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${l.light["fg-neutral-primary"]};
      border-color: ${$.light["color-border-primary"]};
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
`,Ce=s.button`
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
`;K.displayName="Input";K.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const oe=c.forwardRef(({label:e,labelType:a="default",description:r,descriptionLeadingIcon:i=!1,size:o="medium",status:u="default",disabled:p=!1,placeholder:m,value:w,type:f="text",onChange:q,onFocus:V,onBlur:E,className:C="",lang:v,...y},S)=>{const[T,I]=c.useState(!1),[g,j]=c.useState(!1),R=v,b=x=>{I(!0),j(!0),V==null||V(x)},H=x=>{I(!1),j(!1),E==null||E(x)};return t.jsxs(Le,{className:C,children:[e&&t.jsx(P,{type:a,lang:R,children:e}),t.jsx(K,{ref:S,size:o,status:u,disabled:p,active:g,focused:T,placeholder:m,value:w,type:f,onChange:q,onFocus:b,onBlur:H,lang:R,...y}),r&&t.jsx(A,{status:u,leadingIcon:i,lang:R,children:r})]})}),Le=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
`;oe.displayName="TextField";oe.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const se=c.forwardRef(({size:e="medium",disabled:a=!1,focused:r=!1,placeholder:i,value:o,onChange:u,onFocus:p,onBlur:m,className:w="",style:f,lang:q,...V},E)=>{const[C,v]=c.useState(r);c.useEffect(()=>{v(r)},[r]);const y=c.useMemo(()=>typeof o=="string"?o.trim().length>0:!1,[o]),S=q,T=g=>{v(!0),p==null||p(g)},I=g=>{v(!1),m==null||m(g)};return t.jsx(Me,{className:w,style:f,children:t.jsxs(He,{$size:e,$disabled:a,$focused:C,lang:S,children:[t.jsx(Ne,{$size:e,$disabled:a,children:t.jsx(ye,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:a?l.light["fg-neutral-disable"]:l.light["fg-neutral-alternative"]})}),t.jsx(Fe,{ref:E,disabled:a,placeholder:i,value:o,onChange:u,onFocus:T,onBlur:I,$size:e,$disabled:a,$filled:y,$focused:C,lang:S,...V}),!a&&y&&t.jsx(Oe,{$size:e,$color:l.light["fg-neutral-assistive"],type:"button",onMouseDown:g=>{g.preventDefault()},onClick:()=>{u==null||u({target:{value:""}})},children:t.jsx(be,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:l.light["fg-neutral-assistive"]})})]})})}),Me=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
`,He=s.div`
  position: relative;
  width: 100%;
  background-color: ${d.gray[50]};
  border-radius: ${N["rounded-2"]};
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-color: ${({$focused:e})=>e?$.light["color-border-focused"]:$.light["color-border-primary"]};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }

  ${({$size:e,lang:a="ko"})=>{switch(e){case"small":return`
          height: 32px;
          ${k(a,"body2","regular")}
        `;case"large":return`
          height: 48px;
          ${k(a,"body3","regular")}
        `;default:return`
          height: 40px;
          ${k(a,"body3","regular")}
        `}}}
`,Fe=s.input`
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

  ${({$size:e})=>{const a=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],i=e==="small"?n.gap["gap-1.5"]:e==="large"?n.gap["gap-3"]:n.gap["gap-2"],u=(e==="small"?16:e==="large"?24:20)+parseInt(a)*2;return`
      padding: ${i} ${r};
      padding-left: ${u}px;
    `}}
`,Ne=s.div`
  position: absolute;
  left: ${({$size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Oe=s.button`
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
`;se.displayName="Searchfield";se.__docgenInfo={description:"",methods:[],displayName:"Searchfield",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const B=({children:e,className:a,...r})=>t.jsx(_e,{className:a,...r,children:e}),_e=s.div`
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
    font-family: ${M.ko};
  }

  &[lang="en"] {
    font-family: ${M.en};
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
`;B.displayName="Menu";B.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Y=({disable:e=!1,active:a=!1,leadingIcon:r,text:i,description:o,trailingIcon:u,onClick:p,className:m,lang:w})=>{const f=()=>e?l.light["fg-neutral-disable"]:l.light["fg-neutral-primary"],q=()=>a&&!e;return t.jsxs(De,{disable:e,active:a,"data-disable":e,onClick:e?void 0:p,className:m,lang:w,children:[r&&t.jsx(Pe,{children:t.jsx(r,{width:16,height:16,color:f()})}),t.jsxs(Ae,{children:[i&&t.jsx(Be,{children:i}),o&&t.jsx(Ye,{children:o})]}),q()&&t.jsx(We,{children:u?t.jsx(u,{width:16,height:16,color:f()}):t.jsx(xe,{width:16,height:16,color:f()})})]})},De=s.div`
  display: flex;
  align-items: center;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1.5"]} ${n.gap["gap-2"]};
  border-radius: ${N["rounded-1"]};
  background-color: ${d.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${d.gray[50]};
  }
`,Pe=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ae=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,Be=s.div`
  ${k(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  color: inherit;
`,Ye=s.div`
  ${k(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  color: ${l.light["fg-neutral-alternative"]};
`,We=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;Y.displayName="Cell";Y.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const J=({size:e="medium",disabled:a=!1,active:r=!1,focused:i=!1,placeholder:o="선택해주세요.",value:u,options:p=[],onChange:m,onFocus:w,onBlur:f,className:q="",style:V,lang:E="ko",...C})=>{const[v,y]=c.useState(!1),[S,T]=c.useState(r),[I,g]=c.useState(i),j=c.useRef(null);c.useEffect(()=>{const L=W=>{j.current&&!j.current.contains(W.target)&&(y(!1),g(!1))};return document.addEventListener("mousedown",L),()=>{document.removeEventListener("mousedown",L)}},[]),c.useEffect(()=>{T(r)},[r]),c.useEffect(()=>{g(i)},[i]);const R=p.find(L=>L.value===u),b=()=>{a||(y(!v),v?(g(!1),T(!1),f==null||f({})):(g(!0),T(!0),w==null||w({})))},H=L=>{m==null||m(L.value),y(!1),g(!1),f==null||f({})},x=()=>a?l.light["fg-neutral-alternative"]:l.light["fg-neutral-primary"];return t.jsxs(Ge,{ref:j,className:`selector-container ${q}`,style:V,...C,children:[t.jsxs(Ue,{$size:e,$disabled:a,$active:S,$focused:I,lang:E,onClick:b,type:"button","data-active":S?"true":"false",children:[t.jsx(Ke,{children:R?R.label:o}),t.jsx(Je,{size:e,children:v?t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:x()}):t.jsx(ne,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:x()})})]}),v&&t.jsx(Xe,{children:t.jsx(B,{children:p.map(L=>t.jsx(Y,{text:L.label,active:L.value===u,onClick:()=>H(L)},L.value))})})]})},Ge=s.div`
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
  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${k(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${k(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${k(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${d.gray[50]};
        color: ${l.light["fg-neutral-disable"]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${d.gray[50]};
        color: ${l.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        color: ${l.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-primary"]};
      `:r?`
        background-color: ${d.gray[50]};
        color: ${l.light["fg-neutral-alternative"]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      color: ${l.light["fg-neutral-alternative"]};
      border-color: ${$.light["color-border-primary"]};
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
`;J.displayName="Selector";J.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const Q=({size:e="medium",disabled:a=!1,active:r=!1,focused:i=!1,placeholder:o="입력하거나 선택해주세요.",value:u,options:p=[],onChange:m,onFocus:w,onBlur:f,className:q="",style:V,lang:E="ko",...C})=>{const[v,y]=c.useState(!1),[S,T]=c.useState(i),[I,g]=c.useState(u||""),[j,R]=c.useState(!0),[b,H]=c.useState(u||""),x=c.useRef(null),L=c.useRef(null);c.useEffect(()=>{const h=O=>{if(x.current&&!x.current.contains(O.target))if(y(!1),T(!1),R(!1),b){const ee=p.find(fe=>fe.value===b);g(ee?ee.label:"")}else g("")};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[b,p]),c.useEffect(()=>{T(i)},[i]),c.useEffect(()=>{if(u){const h=p.find(O=>O.value===u);g(h?h.label:u),H(u)}else g(""),H("")},[u,p]);const W=()=>{var h;a||(y(!v),v?R(!1):(T(!0),R(!0),(h=L.current)==null||h.focus()))},ce=h=>{const O=h.target.value;g(O),R(!1),v||y(!0)},pe=h=>{T(!0),y(!0),R(!0),w==null||w(h)},me=h=>{T(!1),f==null||f(h)},ge=h=>{g(h.label),H(h.value),m==null||m(h.value),y(!1),T(!1)},Z=()=>a?l.light["fg-neutral-alternative"]:l.light["fg-neutral-primary"],z=j?p:p.filter(h=>h.label.toLowerCase().includes(I.toLowerCase()));return t.jsxs(Qe,{ref:x,className:`combobox-container ${q}`,style:V,...C,children:[t.jsxs(Ze,{$size:e,$disabled:a,$active:r,$focused:S,lang:E,children:[t.jsx(ze,{ref:L,$size:e,$disabled:a,$active:r,$focused:S,$hasValue:!!I,lang:E,value:I,placeholder:o,disabled:a,onChange:ce,onFocus:pe,onBlur:me}),t.jsx(tt,{size:e,onClick:W,children:v?t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()}):t.jsx(ne,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()})})]}),v&&z.length>0&&t.jsx(et,{children:t.jsx(B,{children:z.map(h=>t.jsx(Y,{text:h.label,active:h.value===b,onClick:()=>ge(h)},h.value))})})]})},Qe=s.div`
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
  border-radius: ${N["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-primary"]};
      `:r?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      border-color: ${$.light["color-border-primary"]};
    `}
`,ze=s.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 30px;
          ${k(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 46px;
          ${k(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 38px;
          ${k(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:r,$hasValue:i})=>e?`
        color: ${l.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&r?`
        color: ${l.light["fg-neutral-primary"]};
      `:a||i?`
        color: ${l.light["fg-neutral-primary"]};
      `:r?`
        color: ${l.light["fg-neutral-alternative"]};
      `:`
      color: ${l.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${l.light["fg-neutral-alternative"]};
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
`;Q.displayName="ComboBox";Q.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const ue=({type:e="selector",size:a="medium",disabled:r=!1,active:i=!1,focused:o=!1,placeholder:u="선택해주세요.",value:p,options:m=[],label:w,labelType:f="default",description:q,descriptionLeadingIcon:V=!1,status:E="default",onChange:C,onFocus:v,onBlur:y,className:S="",style:T,lang:I,...g})=>{const j=I;return t.jsxs(at,{className:`dropdown-container ${S}`,style:T,...Object.fromEntries(Object.entries(g).filter(([R])=>!["active","focused","size","disabled"].includes(R))),children:[w&&t.jsx(P,{type:f,lang:j,children:w}),e==="combobox"?t.jsx(Q,{size:a,disabled:r,active:i,focused:o,placeholder:u,value:p,options:m,onChange:C,onFocus:v,onBlur:y,lang:j}):t.jsx(J,{size:a,disabled:r,active:i,focused:o,placeholder:u,value:p,options:m,onChange:C,onFocus:v,onBlur:y,lang:j}),q&&t.jsx(A,{status:E,leadingIcon:V,lang:j,children:q})]})},at=s.div`
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
`,de=({children:e,description:a,variant:r="default",placement:i="bottom-right",offset:o=40,onClose:u,showLeadingIcon:p=!0,showTrailingIcon:m=!0,showDivider:w=!1,className:f="",autoClose:q=!1,autoCloseDelay:V=3e3,index:E=0,disablePositioning:C=!1,lang:v,...y})=>{const[S,T]=c.useState(!1),[I,g]=c.useState(!1),j=typeof E=="number"?E:_;c.useEffect(()=>(_+=1,()=>{_=Math.max(0,_-1)}),[]),c.useEffect(()=>{if(T(!0),q){const x=setTimeout(()=>{g(!0)},V);return()=>clearTimeout(x)}},[q,V]);const R=()=>{g(!0),setTimeout(()=>{u==null||u()},500)},b=()=>{if(!p)return null;switch(r){case"positive":return t.jsx(X,{width:20,height:20,color:"currentColor"});case"negative":return t.jsx(U,{width:20,height:20,color:"currentColor"});case"cautionary":return t.jsx(we,{width:20,height:20,color:"currentColor"});case"default":default:return t.jsx($e,{width:20,height:20,color:"currentColor"})}},H=()=>m?t.jsx(ct,{onClick:R,children:t.jsx(Te,{width:16,height:16,color:"currentColor"})}):null;return t.jsxs(ot,{$variant:r,$placement:i,$offset:o,$isVisible:S,$isExiting:I,$index:j,$disablePositioning:C,className:f,...Object.fromEntries(Object.entries(y).filter(([x])=>!["variant","placement","offset"].includes(x))),children:[p&&t.jsx(st,{$variant:r,children:t.jsx(te,{children:b()})}),t.jsxs(ut,{lang:v,children:[t.jsx("div",{children:e}),a&&t.jsx("div",{children:a})]}),w&&t.jsx(dt,{$variant:r}),m&&t.jsx(te,{children:H()})]})},lt=16,it=80;let _=0;const ot=s.div`
  display: flex;
  align-items: center;
  padding: ${n.gap["gap-3"]} ${n.gap["gap-2"]};
  background-color: ${d.gray[950]};
  border-radius: ${N["rounded-2"]};
  box-shadow: ${le.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:a=0,$placement:r,$offset:i})=>!e&&F`
      position: fixed;
      z-index: ${9999+a};

      /* placement에 따른 위치 설정 */
      ${()=>{const o=i+a*(it+lt);switch(r){case"top-left":return F`
              top: ${o}px;
              left: ${i}px;
            `;case"top-center":return F`
              top: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return F`
              top: ${o}px;
              right: ${i}px;
            `;case"bottom-left":return F`
              bottom: ${o}px;
              left: ${i}px;
            `;case"bottom-center":return F`
              bottom: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return F`
              bottom: ${o}px;
              right: ${i}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:a,$placement:r})=>a?F`
        animation: ${nt} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:e?F`
        animation: ${rt} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:F`
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
    ${k(void 0,"body2","medium")}
    color: ${d.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${k(void 0,"caption2","regular")}
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
  color: ${l.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${d.common[100]};
  }
`;de.displayName="Toast";de.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};export{Y as C,A as D,K as I,P as L,B as M,se as S,oe as T,Q as a,ue as b,J as c,de as d};
