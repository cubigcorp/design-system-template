import{j as t}from"./jsx-runtime-z_tjodE8.js";import{r as c}from"./iframe-BsS2wsPx.js";import{d as s,l as F,m as te}from"./styled-components.browser.esm-D3iYIJoL.js";import{c as u}from"./color-DlZ4f652.js";import{t as i,b}from"./borderColor-7dRAAa5F.js";import{p as D,n as G}from"./negativeColor-DFTQtxpe.js";import{f as M}from"./fontFamily-CsG1KcIF.js";import{t as E}from"./typography-5QY5Grkh.js";import{r as O}from"./radius-DaoU83SK.js";import{s as n}from"./spacing-tE1IiUFl.js";import{a as X,b as U,c as ce,d as pe,I as me,e as ae,f as re,g as fe,h as ge,i as he}from"./IconClose-BtjXGoBY.js";import{s as ne}from"./shadow-DVq_1U2q.js";const B=({children:e,type:a="default",className:r="",lang:l,...o})=>{const d=l,m=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(ye,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(be,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ve,{$type:a,lang:d,className:r,...o,children:m()})},ve=s.label`
  ${E(void 0,"body2","medium")}
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
  color: ${i.light["fg-neutral-strong"]};
`,ye=s.span`
  ${E(void 0,"caption2","regular")}
  color: ${u.red[500]};
  margin-left: ${n.gap["gap-0.5"]};
`,be=s.span`
  ${E(void 0,"body2","regular")}
  color: ${i.light["fg-neutral-alternative"]};
  margin-left: ${n.gap["gap-0.5"]};
`;B.displayName="Label";B.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const P=({children:e,status:a="default",leadingIcon:r=!1,className:l="",lang:o,...d})=>{const m=o,p=()=>{if(!r)return null;switch(a){case"negative":return t.jsx(we,{children:t.jsx(U,{})});case"positive":return t.jsx($e,{children:t.jsx(X,{})});default:return null}};return t.jsxs(xe,{status:a,lang:m,className:l,...d,children:[p(),t.jsx("span",{children:e})]})},xe=s.div`
  ${E(void 0,"caption2","regular")}
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

  color: ${({status:e})=>{switch(e){case"negative":return G.light["fg-negative-primary"];case"positive":return D.light["fg-positive-primary"];default:return i.light["fg-neutral-assistive"]}}};
`,le=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${n.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,we=s(le)`
  color: ${G.light["fg-negative-primary"]};
`,$e=s(le)`
  color: ${D.light["fg-positive-primary"]};
`;P.displayName="Description";P.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const K=c.forwardRef(({size:e="medium",status:a="default",disabled:r=!1,active:l=!1,focused:o=!1,placeholder:d,value:m,type:p="text",onChange:$,onFocus:f,onBlur:q,className:V="",lang:R,...S},x)=>{const[v,L]=c.useState(!1),[T,j]=c.useState(o);c.useEffect(()=>{j(o)},[o]);const w=y=>{j(!0),f==null||f(y)},k=y=>{j(!1),q==null||q(y)},h=p==="password"&&m&&m.trim()!==""?{icon:v?"visibility-on":"visibility-off",color:i.light["fg-neutral-primary"]}:r?a==="positive"?{icon:"circlecheck",color:D.light["fg-positive-primary"]}:null:a==="negative"?l?null:{icon:"error",color:G.light["fg-negative-primary"]}:a==="positive"?l?null:{icon:"circlecheck",color:D.light["fg-positive-primary"]}:null,H=R;return t.jsxs(Te,{children:[t.jsx(qe,{ref:x,type:p==="password"?v?"text":"password":p,value:m,onChange:$,onFocus:w,onBlur:k,placeholder:d,disabled:r,className:V,$size:e,$status:a,$disabled:r,$active:l,$focused:T,lang:H,...Object.fromEntries(Object.entries(S).filter(([y])=>!["active","focused","status","size"].includes(y)))}),h&&t.jsxs(ke,{$size:e,$color:h.color,onMouseDown:y=>{y.preventDefault(),(h.icon==="visibility-on"||h.icon==="visibility-off")&&L(!v)},type:"button",children:[h.icon==="error"&&t.jsx(U,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color}),h.icon==="circlecheck"&&t.jsx(X,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color}),h.icon==="visibility-on"&&t.jsx(ce,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color}),h.icon==="visibility-off"&&t.jsx(pe,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:h.color})]})]})}),Te=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,qe=s.input`
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
          ${E(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${E(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${E(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:a,$active:r,$focused:l})=>a?`
        background-color: ${u.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${b.light["color-border-primary"]};
      `:e==="default"?r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-focused"]};
        `:r&&!l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:!r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:e==="negative"?r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.red[500]};
        `:!r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.red[500]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-negative"]};
        `:e==="positive"?r&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-focused"]};
        `:r&&!l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${b.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${i.light["fg-neutral-primary"]};
      border-color: ${b.light["color-border-primary"]};
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
`,ke=s.button`
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
`;K.displayName="Input";K.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const ie=c.forwardRef(({label:e,labelType:a="default",description:r,descriptionLeadingIcon:l=!1,size:o="medium",status:d="default",disabled:m=!1,placeholder:p,value:$,type:f="text",onChange:q,onFocus:V,onBlur:R,className:S="",lang:x,...v},L)=>{const[T,j]=c.useState(!1),[w,k]=c.useState(!1),I=x,h=y=>{j(!0),k(!0),V==null||V(y)},H=y=>{j(!1),k(!1),R==null||R(y)};return t.jsxs(Ie,{className:S,children:[e&&t.jsx(B,{type:a,lang:I,children:e}),t.jsx(K,{ref:L,size:o,status:d,disabled:m,active:w,focused:T,placeholder:p,value:$,type:f,onChange:q,onFocus:h,onBlur:H,lang:I,...v}),r&&t.jsx(P,{status:d,leadingIcon:l,lang:I,children:r})]})}),Ie=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
`;ie.displayName="TextField";ie.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const A=({children:e,className:a,...r})=>t.jsx(Ee,{className:a,...r,children:e}),Ee=s.div`
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
    background: ${u.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${u.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${u.gray[200]} transparent;
`;A.displayName="Menu";A.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W=({disable:e=!1,active:a=!1,leadingIcon:r,text:l,description:o,trailingIcon:d,onClick:m,className:p,lang:$})=>{const f=()=>e?i.light["fg-neutral-disable"]:i.light["fg-neutral-primary"],q=()=>a&&!e;return t.jsxs(je,{disable:e,active:a,"data-disable":e,onClick:e?void 0:m,className:p,lang:$,children:[r&&t.jsx(Re,{children:t.jsx(r,{width:16,height:16,color:f()})}),t.jsxs(Ve,{children:[l&&t.jsx(Le,{children:l}),o&&t.jsx(Ce,{children:o})]}),q()&&t.jsx(Se,{children:d?t.jsx(d,{width:16,height:16,color:f()}):t.jsx(me,{width:16,height:16,color:f()})})]})},je=s.div`
  display: flex;
  align-items: center;
  gap: ${n.gap["gap-1"]};
  padding: ${n.gap["gap-1.5"]} ${n.gap["gap-2"]};
  border-radius: ${O["rounded-1"]};
  background-color: ${u.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${u.gray[50]};
  }
`,Re=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ve=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,Le=s.div`
  ${E(void 0,"body2","regular")}
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
`,Ce=s.div`
  ${E(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${M.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${M.ko};
  }
  color: ${i.light["fg-neutral-alternative"]};
`,Se=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;W.displayName="Cell";W.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const J=({size:e="medium",disabled:a=!1,active:r=!1,focused:l=!1,placeholder:o="선택해주세요.",value:d,options:m=[],onChange:p,onFocus:$,onBlur:f,className:q="",style:V,lang:R="ko",...S})=>{const[x,v]=c.useState(!1),[L,T]=c.useState(r),[j,w]=c.useState(l),k=c.useRef(null);c.useEffect(()=>{const C=Y=>{k.current&&!k.current.contains(Y.target)&&(v(!1),w(!1))};return document.addEventListener("mousedown",C),()=>{document.removeEventListener("mousedown",C)}},[]),c.useEffect(()=>{T(r)},[r]),c.useEffect(()=>{w(l)},[l]);const I=m.find(C=>C.value===d),h=()=>{a||(v(!x),x?(w(!1),T(!1),f==null||f({})):(w(!0),T(!0),$==null||$({})))},H=C=>{p==null||p(C.value),v(!1),w(!1),f==null||f({})},y=()=>a?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"];return t.jsxs(Me,{ref:k,className:`selector-container ${q}`,style:V,...S,children:[t.jsxs(Fe,{$size:e,$disabled:a,$active:L,$focused:j,lang:R,onClick:h,type:"button","data-active":L?"true":"false",children:[t.jsx(Ne,{children:I?I.label:o}),t.jsx(Oe,{size:e,children:x?t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:y()}):t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:y()})})]}),x&&t.jsx(He,{children:t.jsx(A,{children:m.map(C=>t.jsx(W,{text:C.label,active:C.value===d,onClick:()=>H(C)},C.value))})})]})},Me=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,He=s.div`
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
`,Fe=s.button`
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
          ${E(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${E(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${E(a,"body3","regular")}
          padding: ${n.gap["gap-2"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${u.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${b.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${u.gray[50]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${b.light["color-border-focused"]};
      `:a?`
        background-color: ${u.common[100]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${b.light["color-border-primary"]};
      `:r?`
        background-color: ${u.gray[50]};
        color: ${i.light["fg-neutral-alternative"]};
        border-color: ${b.light["color-border-focused"]};
      `:`
      background-color: ${u.common[100]};
      color: ${i.light["fg-neutral-alternative"]};
      border-color: ${b.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${u.gray[50]};
    border-color: ${u.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${u.gray[50]};
    border-color: ${u.gray[300]};
  }
`,Ne=s.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Oe=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;J.displayName="Selector";J.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const Q=({size:e="medium",disabled:a=!1,active:r=!1,focused:l=!1,placeholder:o="입력하거나 선택해주세요.",value:d,options:m=[],onChange:p,onFocus:$,onBlur:f,className:q="",style:V,lang:R="ko",...S})=>{const[x,v]=c.useState(!1),[L,T]=c.useState(l),[j,w]=c.useState(d||""),[k,I]=c.useState(!1),h=c.useRef(null),H=c.useRef(null);c.useEffect(()=>{const g=N=>{h.current&&!h.current.contains(N.target)&&(v(!1),T(!1))};return document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}},[]),c.useEffect(()=>{T(l)},[l]),c.useEffect(()=>{if(d){const g=m.find(N=>N.value===d);w(g?g.label:d)}else w("")},[d,m]);const y=()=>{var g;a||(v(!x),x?I(!1):(T(!0),I(!0),(g=H.current)==null||g.focus()))},C=g=>{const N=g.target.value;w(N),p==null||p(N),I(!1),x||v(!0)},Y=g=>{T(!0),v(!0),I(!0),$==null||$(g)},ue=g=>{T(!1),f==null||f(g)},de=g=>{w(g.label),p==null||p(g.value),v(!1),T(!1),I(!1)},Z=()=>a?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"],z=k?m:m.filter(g=>g.label.toLowerCase().includes(j.toLowerCase()));return t.jsxs(_e,{ref:h,className:`combobox-container ${q}`,style:V,...S,children:[t.jsxs(De,{$size:e,$disabled:a,$active:r,$focused:L,lang:R,children:[t.jsx(Be,{ref:H,$size:e,$disabled:a,$active:r,$focused:L,$hasValue:!!j,lang:R,value:j,placeholder:o,disabled:a,onChange:C,onFocus:Y,onBlur:ue}),t.jsx(Ae,{size:e,onClick:y,children:x?t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()}):t.jsx(re,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Z()})})]}),x&&z.length>0&&t.jsx(Pe,{children:t.jsx(A,{children:z.map(g=>t.jsx(W,{text:g.label,active:g.value===d,onClick:()=>de(g)},g.value))})})]})},_e=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,De=s.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:r})=>e?`
        background-color: ${u.common[100]};
        border-color: ${b.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&r?`
        background-color: ${u.common[100]};
        border-color: ${b.light["color-border-focused"]};
      `:a?`
        background-color: ${u.common[100]};
        border-color: ${b.light["color-border-primary"]};
      `:r?`
        background-color: ${u.common[100]};
        border-color: ${b.light["color-border-focused"]};
      `:`
      background-color: ${u.common[100]};
      border-color: ${b.light["color-border-primary"]};
    `}
`,Be=s.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const r=e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 30px;
          ${E(a,"body2","regular")}
          padding: ${n.gap["gap-1"]} ${n.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 46px;
          ${E(a,"body3","regular")}
          padding: ${n.gap["gap-3"]} ${n.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 38px;
          ${E(a,"body3","regular")}
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
`,Pe=s.div`
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
`,Ae=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?n.gap["gap-2.5"]:n.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;Q.displayName="ComboBox";Q.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const oe=({type:e="selector",size:a="medium",disabled:r=!1,active:l=!1,focused:o=!1,placeholder:d="선택해주세요.",value:m,options:p=[],label:$,labelType:f="default",description:q,descriptionLeadingIcon:V=!1,status:R="default",onChange:S,onFocus:x,onBlur:v,className:L="",style:T,lang:j,...w})=>{const k=j;return t.jsxs(We,{className:`dropdown-container ${L}`,style:T,...Object.fromEntries(Object.entries(w).filter(([I])=>!["active","focused","size","disabled"].includes(I))),children:[$&&t.jsx(B,{type:f,lang:k,children:$}),e==="combobox"?t.jsx(Q,{size:a,disabled:r,active:l,focused:o,placeholder:d,value:m,options:p,onChange:S,onFocus:x,onBlur:v,lang:k}):t.jsx(J,{size:a,disabled:r,active:l,focused:o,placeholder:d,value:m,options:p,onChange:S,onFocus:x,onBlur:v,lang:k}),q&&t.jsx(P,{status:R,leadingIcon:V,lang:k,children:q})]})},We=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  width: 100%;
`;oe.displayName="Dropdown";oe.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Ye=te`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Ge=te`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,se=({children:e,description:a,variant:r="default",placement:l="bottom-right",offset:o=40,onClose:d,showLeadingIcon:m=!0,showTrailingIcon:p=!0,showDivider:$=!1,className:f="",autoClose:q=!1,autoCloseDelay:V=3e3,index:R=0,disablePositioning:S=!1,lang:x,...v})=>{const[L,T]=c.useState(!1),[j,w]=c.useState(!1),k=typeof R=="number"?R:_;c.useEffect(()=>(_+=1,()=>{_=Math.max(0,_-1)}),[]),c.useEffect(()=>{if(T(!0),q){const y=setTimeout(()=>{w(!0)},V);return()=>clearTimeout(y)}},[q,V]);const I=()=>{w(!0),setTimeout(()=>{d==null||d()},500)},h=()=>{if(!m)return null;switch(r){case"positive":return t.jsx(X,{width:20,height:20,color:"currentColor"});case"negative":return t.jsx(U,{width:20,height:20,color:"currentColor"});case"cautionary":return t.jsx(ge,{width:20,height:20,color:"currentColor"});case"default":default:return t.jsx(fe,{width:20,height:20,color:"currentColor"})}},H=()=>p?t.jsx(ze,{onClick:I,children:t.jsx(he,{width:16,height:16,color:"currentColor"})}):null;return t.jsxs(Ke,{$variant:r,$placement:l,$offset:o,$isVisible:L,$isExiting:j,$index:k,$disablePositioning:S,className:f,...Object.fromEntries(Object.entries(v).filter(([y])=>!["variant","placement","offset"].includes(y))),children:[m&&t.jsx(Je,{$variant:r,children:t.jsx(ee,{children:h()})}),t.jsxs(Qe,{lang:x,children:[t.jsx("div",{children:e}),a&&t.jsx("div",{children:a})]}),$&&t.jsx(Ze,{$variant:r}),p&&t.jsx(ee,{children:H()})]})},Xe=16,Ue=80;let _=0;const Ke=s.div`
  display: flex;
  align-items: center;
  padding: ${n.gap["gap-3"]} ${n.gap["gap-2"]};
  background-color: ${u.gray[950]};
  border-radius: ${O["rounded-2"]};
  box-shadow: ${ne.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* ToastSystem에서 사용할 때는 position을 비활성화 */
  ${({$disablePositioning:e,$index:a=0,$placement:r,$offset:l})=>!e&&F`
      position: fixed;
      z-index: ${9999+a};

      /* placement에 따른 위치 설정 */
      ${()=>{const o=l+a*(Ue+Xe);switch(r){case"top-left":return F`
              top: ${o}px;
              left: ${l}px;
            `;case"top-center":return F`
              top: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"top-right":return F`
              top: ${o}px;
              right: ${l}px;
            `;case"bottom-left":return F`
              bottom: ${o}px;
              left: ${l}px;
            `;case"bottom-center":return F`
              bottom: ${o}px;
              left: 50%;
              transform: translateX(-50%);
            `;case"bottom-right":default:return F`
              bottom: ${o}px;
              right: ${l}px;
            `}}}
    `}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:a,$placement:r})=>a?F`
        animation: ${Ge} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:e?F`
        animation: ${Ye} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
          forwards;
      `:F`
        opacity: 0;
        transform: ${r==="top-center"||r==="bottom-center"?"translateX(-50%) translateY(40px)":"translateY(40px)"};
      `}
`,ee=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,Je=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${n.gap["gap-1"]};
  color: ${({$variant:e})=>{switch(e){case"positive":return u.green[500];case"negative":return u.red[500];case"cautionary":return u.yellow[500];case"default":default:return u.common[100]}}};
`,Qe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${n.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${u.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${E(void 0,"body2","medium")}
    color: ${u.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${E(void 0,"caption2","regular")}
    color: ${u.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ze=s.div`
  width: 1px;
  background-color: ${u.gray[925]};
  margin: 0 ${n.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,ze=s.button`
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
    color: ${u.common[100]};
  }
`;se.displayName="Toast";se.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"bottom-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}},index:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},disablePositioning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};export{W as C,P as D,K as I,B as L,A as M,J as S,ie as T,Q as a,oe as b,se as c};
