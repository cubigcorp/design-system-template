import{j as r}from"./jsx-runtime-CkxAiKt7.js";import{r as h}from"./iframe-DLnsz365.js";import{d as s}from"./styled-components.browser.esm-FqZODMTr.js";import{c as b}from"./color-CMFzNX_O.js";import{t as a,b as u}from"./borderColor-C1c8KEhD.js";import{t as T,a as R}from"./typography-he8MZv4l.js";import{s as i}from"./spacing-tE1IiUFl.js";import{p as x,n as L}from"./negativeColor-vAhOVlFC.js";import{r as A}from"./radius-DaoU83SK.js";import{a as H,b as N,c as B,d as G}from"./IconVisibilityOn-uDDbXZc_.js";const k=({children:e,type:n="default",className:l="",...t})=>{const c=()=>{switch(n){case"required":return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:e}),r.jsx(J,{children:"*"})]});case"optional":return r.jsxs(r.Fragment,{children:[r.jsx("span",{children:e}),r.jsx(K,{children:"(선택)"})]});default:return r.jsx("span",{children:e})}};return r.jsx(Y,{$type:n,className:l,...t,children:c()})},Y=s.label`
  ${T.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${a.light["fg-neutral-strong"]};
`,J=s.span`
  ${T.caption2}
  color: ${b.red[500]};
  margin-left: ${i.gap["gap-0.5"]};
`,K=s.span`
  ${T.body2}
  color: ${a.light["fg-neutral-alternative"]};
  margin-left: ${i.gap["gap-0.5"]};
`;k.displayName="Label";k.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const V=({children:e,status:n="default",leadingIcon:l=!1,className:t="",...c})=>{const p=()=>{if(!l)return null;switch(n){case"error":return r.jsx(U,{children:r.jsx(N,{})});case"success":return r.jsx(W,{children:r.jsx(H,{})});default:return null}};return r.jsxs(Q,{status:n,className:t,...c,children:[p(),r.jsx("span",{children:e})]})},Q=s.div`
  ${T.caption2}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${i.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"error":return L.light["fg-negative-primary"];case"success":return x.light["fg-positive-primary"];default:return a.light["fg-neutral-assistive"]}}};
`,S=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${i.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,U=s(S)`
  color: ${L.light["fg-negative-primary"]};
`,W=s(S)`
  color: ${x.light["fg-positive-primary"]};
`;V.displayName="Description";V.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F=h.forwardRef(({size:e="medium",status:n="normal",disabled:l=!1,active:t=!1,focused:c=!1,placeholder:p,value:d,type:m="text",onChange:$,onFocus:w,onBlur:I,className:q="",...g},f)=>{const[v,E]=h.useState(!1),o=m==="password"&&d&&d.trim()!==""?{icon:v?"visibility-on":"visibility-off",color:a.light["fg-neutral-primary"]}:l?n==="positive"?{icon:"circlecheck",color:x.light["fg-positive-primary"]}:null:n==="negative"?t?null:{icon:"error",color:L.light["fg-negative-primary"]}:n==="positive"?t?null:{icon:"circlecheck",color:x.light["fg-positive-primary"]}:null;return r.jsxs(X,{children:[r.jsx(Z,{ref:f,type:m==="password"?v?"text":"password":m,value:d,onChange:$,onFocus:w,onBlur:I,placeholder:p,disabled:l,className:q,$size:e,$status:n,$disabled:l,$active:t,$focused:c,...g}),o&&r.jsxs(z,{$size:e,$color:o.color,onMouseDown:y=>{y.preventDefault(),(o.icon==="visibility-on"||o.icon==="visibility-off")&&E(!v)},type:"button",children:[o.icon==="error"&&r.jsx(N,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color}),o.icon==="circlecheck"&&r.jsx(H,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color}),o.icon==="visibility-on"&&r.jsx(B,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color}),o.icon==="visibility-off"&&r.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color})]})]})}),X=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Z=s.input`
  width: 100%;
  border: 1px solid;
  border-radius: ${A["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;

  /* Size styles */
  ${({$size:e})=>{const n=i.gap["gap-1"],t=(e==="small"?16:e==="large"?24:20)+parseInt(n)*2;switch(e){case"small":return`
          height: 32px;
          ${R("ko","body2","regular")}
          padding: ${i.gap["gap-1"]} ${i.gap["gap-2"]};
          padding-right: ${t}px;
        `;case"large":return`
          height: 48px;
          ${R("ko","body3","regular")}
          padding: ${i.gap["gap-3"]} ${i.gap["gap-2.5"]};
          padding-right: ${t}px;
        `;default:return`
          height: 40px;
          ${R("ko","body3","regular")}
          padding: ${i.gap["gap-2"]} ${i.gap["gap-2"]};
          padding-right: ${t}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:n,$active:l,$focused:t})=>n?`
        background-color: ${b.gray[50]};
        color: ${a.light["fg-neutral-disable"]};
        border-color: ${u.light["color-border-primary"]};
      `:e==="normal"?l&&t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:l&&!t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:!l&&t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:e==="negative"?l&&t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:!l&&t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-negative"]};
        `:e==="positive"?l&&t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:l&&!t?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${a.light["fg-neutral-primary"]};
      border-color: ${u.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
  }

  &::-webkit-input-placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
  }

  &::-moz-placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
  }

  &:focus::-webkit-input-placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
  }

  &:focus::-moz-placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
  }

  &:focus:-ms-input-placeholder {
    color: ${a.light["fg-neutral-assistive"]} !important;
  }
`,z=s.button`
  position: absolute;
  right: ${i.gap["gap-1"]};
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
`;F.displayName="Input";F.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const _=h.forwardRef(({label:e,labelType:n="default",description:l,descriptionStatus:t="default",descriptionLeadingIcon:c=!1,size:p="medium",status:d="normal",disabled:m=!1,placeholder:$,value:w,type:I="text",onChange:q,onFocus:g,onBlur:f,className:v="",...E},C)=>{const[o,y]=h.useState(!1),[D,M]=h.useState(!1),O=j=>{y(!0),M(!0),g==null||g(j)},P=j=>{y(!1),M(!1),f==null||f(j)};return r.jsxs(ee,{className:v,children:[e&&r.jsx(k,{type:n,children:e}),r.jsx(F,{ref:C,size:p,status:d,disabled:m,active:D,focused:o,placeholder:$,value:w,type:I,onChange:q,onFocus:O,onBlur:P,...E}),l&&r.jsx(V,{status:t,leadingIcon:c,children:l})]})}),ee=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;_.displayName="TextField";_.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{V as D,F as I,k as L,_ as T};
