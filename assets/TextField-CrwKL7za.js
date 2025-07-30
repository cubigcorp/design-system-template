import{j as t}from"./jsx-runtime-DLKmAz1l.js";import{r as v}from"./iframe-C8zNINXH.js";import{d as s}from"./styled-components.browser.esm-k0vBXCpN.js";import{c as b}from"./color-CMFzNX_O.js";import{t as r,b as u}from"./borderColor-C1c8KEhD.js";import{t as R,a as x}from"./typography-he8MZv4l.js";import{s as l}from"./spacing-tE1IiUFl.js";import{p as T,n as k}from"./negativeColor-vAhOVlFC.js";import{r as A}from"./radius-DaoU83SK.js";import{a as H,b as N,c as B,d as G}from"./IconVisibilityOn-BVyDzeDX.js";const L=({children:e,type:n="default",className:i="",...a})=>{const c=()=>{switch(n){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(J,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(K,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(Y,{$type:n,className:i,...a,children:c()})},Y=s.label`
  ${R.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${r.light["fg-neutral-strong"]};
`,J=s.span`
  ${R.caption2}
  color: ${b.red[500]};
  margin-left: ${l.gap["gap-0.5"]};
`,K=s.span`
  ${R.body2}
  color: ${r.light["fg-neutral-alternative"]};
  margin-left: ${l.gap["gap-0.5"]};
`;L.displayName="Label";L.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const V=({children:e,status:n="default",leadingIcon:i=!1,className:a="",...c})=>{const p=()=>{if(!i)return null;switch(n){case"error":return t.jsx(U,{children:t.jsx(N,{})});case"success":return t.jsx(W,{children:t.jsx(H,{})});default:return null}};return t.jsxs(Q,{status:n,className:a,...c,children:[p(),t.jsx("span",{children:e})]})},Q=s.div`
  ${x("ko","caption2","regular")}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${l.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"error":return k.light["fg-negative-primary"];case"success":return T.light["fg-positive-primary"];default:return r.light["fg-neutral-assistive"]}}};
`,S=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${l.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,U=s(S)`
  color: ${k.light["fg-negative-primary"]};
`,W=s(S)`
  color: ${T.light["fg-positive-primary"]};
`;V.displayName="Description";V.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F=v.forwardRef(({size:e="medium",status:n="normal",disabled:i=!1,active:a=!1,focused:c=!1,placeholder:p,value:d,type:m="text",onChange:w,onFocus:$,onBlur:I,className:q="",...g},f)=>{const[h,E]=v.useState(!1),o=m==="password"&&d&&d.trim()!==""?{icon:h?"visibility-on":"visibility-off",color:r.light["fg-neutral-primary"]}:i?n==="positive"?{icon:"circlecheck",color:T.light["fg-positive-primary"]}:null:n==="negative"?a?null:{icon:"error",color:k.light["fg-negative-primary"]}:n==="positive"?a?null:{icon:"circlecheck",color:T.light["fg-positive-primary"]}:null;return t.jsxs(X,{children:[t.jsx(Z,{ref:f,type:m==="password"?h?"text":"password":m,value:d,onChange:w,onFocus:$,onBlur:I,placeholder:p,disabled:i,className:q,$size:e,$status:n,$disabled:i,$active:a,$focused:c,...g}),o&&t.jsxs(z,{$size:e,$color:o.color,onMouseDown:y=>{y.preventDefault(),(o.icon==="visibility-on"||o.icon==="visibility-off")&&E(!h)},type:"button",children:[o.icon==="error"&&t.jsx(N,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color}),o.icon==="circlecheck"&&t.jsx(H,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color}),o.icon==="visibility-on"&&t.jsx(B,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color}),o.icon==="visibility-off"&&t.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:o.color})]})]})}),X=s.div`
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
  ${({$size:e})=>{const n=e==="large"?l.gap["gap-2.5"]:l.gap["gap-2"],a=(e==="small"?16:e==="large"?24:20)+parseInt(n)*2;switch(e){case"small":return`
          height: 32px;
          ${x("ko","body2","regular")}
          padding: ${l.gap["gap-1"]} ${l.gap["gap-2"]};
          padding-right: ${a}px;
        `;case"large":return`
          height: 48px;
          ${x("ko","body3","regular")}
          padding: ${l.gap["gap-3"]} ${l.gap["gap-2.5"]};
          padding-right: ${a}px;
        `;default:return`
          height: 40px;
          ${x("ko","body3","regular")}
          padding: ${l.gap["gap-2"]} ${l.gap["gap-2"]};
          padding-right: ${a}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:n,$active:i,$focused:a})=>n?`
        background-color: ${b.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${u.light["color-border-primary"]};
      `:e==="normal"?i&&a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:i&&!a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:!i&&a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:e==="negative"?i&&a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:!i&&a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-negative"]};
        `:e==="positive"?i&&a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:i&&!a?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${r.light["fg-neutral-primary"]};
      border-color: ${u.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-webkit-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &::-moz-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    opacity: 1;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:-ms-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-webkit-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus::-moz-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }

  &:focus:-ms-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    font-weight: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
`,z=s.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?l.gap["gap-2.5"]:l.gap["gap-2"]};
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
`;F.displayName="Input";F.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const _=v.forwardRef(({label:e,labelType:n="default",description:i,descriptionStatus:a="default",descriptionLeadingIcon:c=!1,size:p="medium",status:d="normal",disabled:m=!1,placeholder:w,value:$,type:I="text",onChange:q,onFocus:g,onBlur:f,className:h="",...E},C)=>{const[o,y]=v.useState(!1),[D,M]=v.useState(!1),O=j=>{y(!0),M(!0),g==null||g(j)},P=j=>{y(!1),M(!1),f==null||f(j)};return t.jsxs(ee,{className:h,children:[e&&t.jsx(L,{type:n,children:e}),t.jsx(F,{ref:C,size:p,status:d,disabled:m,active:D,focused:o,placeholder:w,value:$,type:I,onChange:q,onFocus:O,onBlur:P,...E}),i&&t.jsx(V,{status:a,leadingIcon:c,children:i})]})}),ee=s.div`
  display: flex;
  flex-direction: column;
  gap: ${l.gap["gap-1"]};
`;_.displayName="TextField";_.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{V as D,F as I,L,_ as T};
