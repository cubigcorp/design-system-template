import{j as t}from"./jsx-runtime-BrZx8JRA.js";import{r as p}from"./iframe-By_Y751w.js";import{d as u,l as H,m as te}from"./styled-components.browser.esm-CvV3oZgk.js";import{c as s}from"./color-DlZ4f652.js";import{t as l,b}from"./borderColor-7dRAAa5F.js";import{p as D,n as G}from"./negativeColor-DFTQtxpe.js";import{f as M}from"./fontFamily-CsG1KcIF.js";import{t as I}from"./typography-5QY5Grkh.js";import{r as O}from"./radius-DaoU83SK.js";import{s as n}from"./spacing-tE1IiUFl.js";import{a as X,b as U,c as ue,d as de,I as ce,e as ae,f as re,g as pe,h as me,i as fe}from"./IconClose-CotdmiDg.js";import{s as ne}from"./shadow-DVq_1U2q.js";const B=({children:e,type:a="default",className:r="",lang:i,...o})=>{const d=i,f=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(he,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(ve,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ge,{$type:a,lang:d,className:r,...o,children:f()})},ge=u.label`
  ${I(void 0,"body2","medium")}
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
`,he=u.span`
  ${I(void 0,"caption2","regular")}
  color: ${s.red[500]};
  margin-left: ${n.gap["gap-0.5"]};
`,ve=u.span`
  ${I(void 0,"body2","regular")}
  color: ${l.light["fg-neutral-alternative"]};
  margin-left: ${n.gap["gap-0.5"]};
`;B.displayName="Label";B.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const P=({children:e,status:a="default",leadingIcon:r=!1,className:i="",lang:o,...d})=>{const f=o,c=()=>{if(!r)return null;switch(a){case"negative":return t.jsx(be,{children:t.jsx(U,{})});case"positive":return t.jsx(xe,{children:t.jsx(X,{})});default:return null}};return t.jsxs(ye,{status:a,lang:f,className:i,...d,children:[c(),t.jsx("span",{children:e})]})},ye=u.div`
  ${I(void 0,"caption2","regular")}
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
`,le=u.div`
  width: 16px;
  height: 16px;
  margin-right: ${n.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,be=u(le)`
  color: ${G.light["fg-negative-primary"]};
`,xe=u(le)`
  color: ${D.light["fg-positive-primary"]};
`;P.displayName="Description";P.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const K=p.forwardRef(({size:e="medium",status:a="default",disabled:r=!1,active:i=!1,focused:o=!1,placeholder:d,value:f,type:c="text",onChange:$,onFocus:m,onBlur:k,className:V="",lang:j,...S},x)=>{const[h,L]=p.useState(!1),[T,E]=p.useState(o);p.useEffect(()=>{E(o)},[o]);const q=y=>{E(!0),m==null||m(y)},w=y=>{E(!1),k==null||k(y)},v=c==="password"&&f&&f.trim()!==""?{icon:h?"visibility-on":"visibility-off",color:l.light["fg-neutral-primary"]}:r?a==="positive"?{icon:"circlecheck",color:D.light["fg-positive-primary"]}:null:a==="negative"?i?null:{icon:"error",color:G.light["fg-negative-primary"]}:a==="positive"?i?null:{icon:"circlecheck",color:D.light["fg-positive-primary"]}:null,F=j;return t.jsxs(we,{children:[t.jsx($e,{ref:x,type:c==="password"?h?"text":"password":c,value:f,onChange:$,onFocus:q,onBlur:w,placeholder:d,disabled:r,className:V,$size:e,$status:a,$disabled:r,$active:i,$focused:T,lang:F,...Object.fromEntries(Object.entries(S).filter(([y])=>!["active","focused","status","size"].includes(y)))}),v&&t.jsxs(Te,{$size:e,$color:v.color,onMouseDown:y=>{y.preventDefault(),(v.icon==="visibility-on"||v.icon==="visibility-off")&&L(!h)},type:"button",children:[v.icon==="error"&&t.jsx(U,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:v.color}),v.icon==="circlecheck"&&t.jsx(X,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:v.color}),v.icon==="visibility-on"&&t.jsx(ue,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:v.color}),v.icon==="visibility-off"&&t.jsx(de,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:v.color})]})]})}),we=u.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,$e=u.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${O["rounded-2"]};
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
          ${I(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${I(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${I(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:a,$active:r,$focused:i})=>a?`
        background-color: ${s.gray[50]};
        color: ${l.light["fg-neutral-disable"]};
        border-color: ${b.light["color-border-primary"]};
      `:e==="default"?r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-focused"]};
        `:r&&!i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:!r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:e==="negative"?r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${s.red[500]};
        `:!r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${s.red[500]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-negative"]};
        `:e==="positive"?r&&i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-focused"]};
        `:r&&!i?`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${l.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${l.light["fg-neutral-primary"]};
      border-color: ${b.light["color-border-primary"]};
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
`,Te=u.button`
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
`;K.displayName="Input";K.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const ie=p.forwardRef(({label:e,labelType:a="default",description:r,descriptionLeadingIcon:i=!1,size:o="medium",status:d="default",disabled:f=!1,placeholder:c,value:$,type:m="text",onChange:k,onFocus:V,onBlur:j,className:S="",lang:x,...h},L)=>{const[T,E]=p.useState(!1),[q,w]=p.useState(!1),R=x,v=y=>{E(!0),w(!0),V==null||V(y)},F=y=>{E(!1),w(!1),j==null||j(y)};return t.jsxs(qe,{className:S,children:[e&&t.jsx(B,{type:a,lang:R,children:e}),t.jsx(K,{ref:L,size:o,status:d,disabled:f,active:q,focused:T,placeholder:c,value:$,type:m,onChange:k,onFocus:v,onBlur:F,lang:R,...h}),r&&t.jsx(P,{status:d,leadingIcon:i,lang:R,children:r})]})}),qe=u.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
`;ie.displayName="TextField";ie.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const A=({children:e,className:a,...r})=>t.jsx(ke,{className:a,...r,children:e}),ke=u.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1"]};
  box-shadow: ${ne.light["shadow-md"]};
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

  /* Dropdown 스타일 - Dropdown 컴포넌트 내부에서 사용될 때 */
  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 4px;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${s.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${s.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${s.gray[200]} transparent;
`;A.displayName="Menu";A.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W=({disable:e=!1,active:a=!1,leadingIcon:r,text:i,description:o,trailingIcon:d,onClick:f,className:c,lang:$})=>{const m=()=>e?l.light["fg-neutral-disable"]:l.light["fg-neutral-primary"],k=()=>a&&!e;return t.jsxs(Ie,{disable:e,active:a,"data-disable":e,onClick:e?void 0:f,className:c,lang:$,children:[r&&t.jsx(Ee,{children:t.jsx(r,{width:16,height:16,color:m()})}),t.jsxs(je,{children:[i&&t.jsx(Re,{children:i}),o&&t.jsx(Ve,{children:o})]}),k()&&t.jsx(Le,{children:d?t.jsx(d,{width:16,height:16,color:m()}):t.jsx(ce,{width:16,height:16,color:m()})})]})},Ie=u.div`
  display: flex;
  align-items: center;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1.5"]} ${n.gap["gap-2"]};
  border-radius: ${O["rounded-1"]};
  background-color: ${s.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${s.gray[50]};
  }
`,Ee=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,je=u.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,Re=u.div`
  ${I(void 0,"body2","regular")}
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
`,Ve=u.div`
  ${I(void 0,"caption2","regular")}
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
`,Le=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;W.displayName="Cell";W.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const J=({size:e="medium",disabled:a=!1,active:r=!1,focused:i=!1,placeholder:o="선택해주세요.",value:d,options:f=[],onChange:c,onFocus:$,onBlur:m,className:k="",style:V,lang:j="ko",...S})=>{const[x,h]=p.useState(!1),[L,T]=p.useState(r),[E,q]=p.useState(i),w=p.useRef(null);p.useEffect(()=>{const C=Y=>{w.current&&!w.current.contains(Y.target)&&(h(!1),q(!1))};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),p.useEffect(()=>{T(r)},[r]),p.useEffect(()=>{q(i)},[i]);const R=f.find(C=>C.value===d),v=()=>{a||(h(!x),x?(q(!1),T(!1),m==null||m({})):(q(!0),T(!0),$==null||$({})))},F=C=>{c==null||c(C.value),h(!1),q(!1),m==null||m({})},y=()=>a?l.light["fg-neutral-alternative"]:l.light["fg-neutral-primary"];return t.jsxs(Ce,{ref:w,className:`selector-container ${k}`,style:V,...S,children:[t.jsxs(Me,{$size:e,$disabled:a,$active:L,$focused:E,lang:j,onClick:v,type:"button","data-active":L?"true":"false",children:[t.jsx(He,{children:R?R.label:o}),t.jsx(Fe,{size:e,children:x?t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:y()}):t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:y()})})]}),x&&t.jsx(Se,{children:t.jsx(A,{children:f.map(C=>t.jsx(W,{text:C.label,active:C.value===d,onClick:()=>F(C)},C.value))})})]})},Ce=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Se=u.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,Me=u.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
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
          ${I(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${I(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${I(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${s.gray[50]};
        color: ${l.light["fg-neutral-disable"]};
        border-color: ${b.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${s.gray[50]};
        color: ${l.light["fg-neutral-primary"]};
        border-color: ${b.light["color-border-focused"]};
      `:a?`
        background-color: ${s.common[100]};
        color: ${l.light["fg-neutral-primary"]};
        border-color: ${b.light["color-border-primary"]};
      `:r?`
        background-color: ${s.gray[50]};
        color: ${l.light["fg-neutral-alternative"]};
        border-color: ${b.light["color-border-focused"]};
      `:`
      background-color: ${s.common[100]};
      color: ${l.light["fg-neutral-alternative"]};
      border-color: ${b.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }
`,He=u.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Fe=u.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;J.displayName="Selector";J.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const Q=({size:e="medium",disabled:a=!1,active:r=!1,focused:i=!1,placeholder:o="입력하거나 선택해주세요.",value:d,options:f=[],onChange:c,onFocus:$,onBlur:m,className:k="",style:V,lang:j="ko",...S})=>{const[x,h]=p.useState(!1),[L,T]=p.useState(i),[E,q]=p.useState(d||""),w=p.useRef(null),R=p.useRef(null);p.useEffect(()=>{const g=N=>{w.current&&!w.current.contains(N.target)&&(h(!1),T(!1))};return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[]),p.useEffect(()=>{T(i)},[i]),p.useEffect(()=>{q(d||"")},[d]);const v=()=>{var g;a||(h(!x),x||(T(!0),(g=R.current)==null||g.focus()))},F=g=>{const N=g.target.value;q(N),c==null||c(N),x||h(!0)},y=g=>{T(!0),h(!0),$==null||$(g)},C=g=>{T(!1),m==null||m(g)},Y=g=>{var N;q(g.label),c==null||c(g.value),h(!1),T(!1),(N=R.current)==null||N.blur()},Z=()=>a?l.light["fg-neutral-alternative"]:l.light["fg-neutral-primary"],z=f.filter(g=>g.label.toLowerCase().includes(E.toLowerCase()));return t.jsxs(Ne,{ref:w,className:`combobox-container ${k}`,style:V,...S,children:[t.jsxs(Oe,{$size:e,$disabled:a,$active:r,$focused:L,lang:j,children:[t.jsx(_e,{ref:R,$size:e,$disabled:a,$active:r,$focused:L,lang:j,value:E,placeholder:o,disabled:a,onChange:F,onFocus:y,onBlur:C}),t.jsx(Be,{size:e,onClick:v,children:x?t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()}):t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()})})]}),x&&(z.length>0||E==="")&&t.jsx(De,{children:t.jsx(A,{children:z.map(g=>t.jsx(W,{text:g.label,active:g.value===d,onClick:()=>Y(g)},g.value))})})]})},Ne=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Oe=u.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${s.gray[50]};
        border-color: ${b.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${s.gray[50]};
        border-color: ${b.light["color-border-focused"]};
      `:a?`
        background-color: ${s.common[100]};
        border-color: ${b.light["color-border-primary"]};
      `:r?`
        background-color: ${s.gray[50]};
        border-color: ${b.light["color-border-focused"]};
      `:`
      background-color: ${s.common[100]};
      border-color: ${b.light["color-border-primary"]};
    `}

  &:hover:not([data-disabled="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }
`,_e=u.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 30px;
          ${I(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 46px;
          ${I(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 38px;
          ${I(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:r})=>e?`
        color: ${l.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&r?`
        color: ${l.light["fg-neutral-primary"]};
      `:a?`
        color: ${l.light["fg-neutral-primary"]};
      `:r?`
        color: ${l.light["fg-neutral-alternative"]};
      `:`
      color: ${l.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${l.light["fg-neutral-alternative"]};
  }
`,De=u.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,Be=u.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;Q.displayName="ComboBox";Q.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const oe=({type:e="selector",size:a="medium",disabled:r=!1,active:i=!1,focused:o=!1,placeholder:d="선택해주세요.",value:f,options:c=[],label:$,labelType:m="default",description:k,descriptionLeadingIcon:V=!1,status:j="default",onChange:S,onFocus:x,onBlur:h,className:L="",style:T,lang:E,...q})=>{const w=E;return t.jsxs(Pe,{className:`dropdown-container ${L}`,style:T,...Object.fromEntries(Object.entries(q).filter(([R])=>!["active","focused","size","disabled"].includes(R))),children:[$&&t.jsx(B,{type:m,lang:w,children:$}),e==="combobox"?t.jsx(Q,{size:a,disabled:r,active:i,focused:o,placeholder:d,value:f,options:c,onChange:S,onFocus:x,onBlur:h,lang:w}):t.jsx(J,{size:a,disabled:r,active:i,focused:o,placeholder:d,value:f,options:c,onChange:S,onFocus:x,onBlur:h,lang:w}),k&&t.jsx(P,{status:j,leadingIcon:V,lang:w,children:k})]})},Pe=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  width: 100%;
`;oe.displayName="Dropdown";oe.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Ae=te`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,We=te`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,se=({children:e,description:a,variant:r="default",placement:i="bottom-right",offset:o=40,onClose:d,showLeadingIcon:f=!0,showTrailingIcon:c=!0,showDivider:$=!1,className:m="",autoClose:k=!1,autoCloseDelay:V=3e3,index:j=0,disablePositioning:S=!1,lang:x,...h})=>{const[L,T]=p.useState(!1),[E,q]=p.useState(!1),w=typeof j=="number"?j:_;p.useEffect(()=>(_+=1,()=>{_=Math.max(0,_-1)}),[]),p.useEffect(()=>{if(T(!0),k){const y=setTimeout(()=>{q(!0)},V);return()=>clearTimeout(y)}},[k,V]);const R=()=>{q(!0),setTimeout(()=>{d==null||d()},500)},v=()=>{if(!f)return null;switch(r){case"positive":return t.jsx(X,{width:20,height:20,color:"currentColor"});case"negative":return t.jsx(U,{width:20,height:20,color:"currentColor"});case"cautionary":return t.jsx(me,{width:20,height:20,color:"currentColor"});case"default":default:return t.jsx(pe,{width:20,height:20,color:"currentColor"})}},F=()=>c?t.jsx(Qe,{onClick:R,children:t.jsx(fe,{width:16,height:16,color:"currentColor"})}):null;return t.jsxs(Xe,{$variant:r,$placement:i,$offset:o,$isVisible:L,$isExiting:E,$index:w,$disablePositioning:S,className:m,...Object.fromEntries(Object.entries(h).filter(([y])=>!["variant","placement","offset"].includes(y))),children:[f&&t.jsx(Ue,{$variant:r,children:t.jsx(ee,{children:v()})}),t.jsxs(Ke,{lang:x,children:[t.jsx("div",{children:e}),a&&t.jsx("div",{children:a})]}),$&&t.jsx(Je,{$variant:r}),c&&t.jsx(ee,{children:F()})]})},Ye=16,Ge=80;let _=0;const Xe=u.div`
  display: flex;
  align-items: center;
  padding: ${n.gap["gap-3"]} ${n.gap["gap-2"]};
  background-color: ${s.gray[950]};
  border-radius: ${O["rounded-2"]};
  box-shadow: ${ne.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:a=0,$placement:r,$offset:i})=>!e&&H`
      position: fixed;
      z-index: ${9999+a};

      /* placement에 따른 위치 설정 */
      ${()=>{const o=i+a*(Ge+Ye);switch(r){case"top-left":return H`
              top: ${o}px;
              left: ${i}px;
            `;case"top-center":return H`
              top: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return H`
              top: ${o}px;
              right: ${i}px;
            `;case"bottom-left":return H`
              bottom: ${o}px;
              left: ${i}px;
            `;case"bottom-center":return H`
              bottom: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return H`
              bottom: ${o}px;
              right: ${i}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:a,$placement:r})=>a?H`
        animation: ${We} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:e?H`
        animation: ${Ae} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:H`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?"translateX(-50%) translateY(40px)":"translateY(40px)"};
      `}
`,ee=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,Ue=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${n.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return s.green[500];case"negative":return s.red[500];case"cautionary":return s.yellow[500];case"default":default:return s.common[100]}}};
`,Ke=u.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${s.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${I(void 0,"body2","medium")}
    color: ${s.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${I(void 0,"caption2","regular")}
    color: ${s.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Je=u.div`
  width: 1px;
  background-color: ${s.gray[925]};
  margin: 0 ${n.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,Qe=u.button`
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
    color: ${s.common[100]};
  }
`;se.displayName="Toast";se.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};export{W as C,P as D,K as I,B as L,A as M,J as S,ie as T,Q as a,oe as b,se as c};
