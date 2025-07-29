import{j as a}from"./jsx-runtime-DU5MMG0J.js";import{r as y}from"./iframe-Bjjk8v-o.js";import{d as c}from"./styled-components.browser.esm-PYfggJBI.js";import{c as b}from"./color-CMFzNX_O.js";import{t as r,b as u}from"./borderColor-C1c8KEhD.js";import{t as p}from"./typography-BtvHU1C6.js";import{s as o}from"./spacing-tE1IiUFl.js";import{p as v,n as T}from"./negativeColor-vAhOVlFC.js";import{r as O}from"./radius-DaoU83SK.js";import{a as H,b as V,c as A}from"./IconCheck-BbzgY9Zj.js";const R=({children:e,type:l="default",className:n="",...t})=>{const i=()=>{switch(l){case"required":return a.jsxs(a.Fragment,{children:[a.jsx("span",{children:e}),a.jsx(G,{children:"*"})]});case"optional":return a.jsxs(a.Fragment,{children:[a.jsx("span",{children:e}),a.jsx(P,{children:"(선택)"})]});default:return a.jsx("span",{children:e})}};return a.jsx(B,{$type:l,className:n,...t,children:i()})},B=c.label`
  ${p.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${r.light["fg-neutral-strong"]};
`,G=c.span`
  ${p.caption2}
  color: ${b.red[500]};
  margin-left: ${o.gap["gap-0.5"]};
`,P=c.span`
  ${p.body2}
  color: ${r.light["fg-neutral-alternative"]};
  margin-left: ${o.gap["gap-0.5"]};
`;R.displayName="Label";R.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const j=({children:e,status:l="default",leadingIcon:n=!1,className:t="",...i})=>{const m=()=>{if(!n)return null;switch(l){case"error":return a.jsx(J,{children:a.jsx(V,{})});case"success":return a.jsx(K,{children:a.jsx(H,{})});default:return null}};return a.jsxs(Y,{status:l,className:t,...i,children:[m(),a.jsx("span",{children:e})]})},Y=c.div`
  ${p.caption2}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${o.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"error":return T.light["fg-negative-primary"];case"success":return v.light["fg-positive-primary"];default:return r.light["fg-neutral-assistive"]}}};
`,N=c.div`
  width: 16px;
  height: 16px;
  margin-right: ${o.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,J=c(N)`
  color: ${T.light["fg-negative-primary"]};
`,K=c(N)`
  color: ${v.light["fg-positive-primary"]};
`;j.displayName="Description";j.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const L=y.forwardRef(({size:e="medium",status:l="normal",disabled:n=!1,active:t=!1,focused:i=!1,placeholder:m,value:g,onChange:d,onFocus:x,onBlur:$,className:I="",...f},h)=>{const s=(()=>{if(n)return l==="positive"?{icon:"circlecheck",color:v.light["fg-positive-primary"]}:null;if(l==="normal")return t&&i?{icon:"cancel",color:r.light["fg-neutral-primary"]}:null;if(l==="negative")return t&&i?{icon:"cancel",color:r.light["fg-neutral-primary"]}:t?null:{icon:"error",color:T.light["fg-negative-primary"]};if(l==="positive")return t&&i?{icon:"cancel",color:r.light["fg-neutral-primary"]}:t?null:{icon:"circlecheck",color:v.light["fg-positive-primary"]};if(g&&g.trim()!==""){if(l==="normal")return{icon:"cancel",color:r.light["fg-neutral-primary"]};if(l==="negative"){if(t&&i)return{icon:"cancel",color:r.light["fg-neutral-primary"]};if(!t)return{icon:"error",color:T.light["fg-negative-primary"]}}if(l==="positive"){if(t&&i)return{icon:"cancel",color:r.light["fg-neutral-primary"]};if(t)return{icon:"circlecheck",color:v.light["fg-positive-primary"]}}}return null})();return a.jsxs(Q,{children:[a.jsx(U,{ref:h,type:"text",value:g,onChange:d,onFocus:x,onBlur:$,placeholder:m,disabled:n,className:I,$size:e,$status:l,$disabled:n,$active:t,$focused:i,...f}),s&&a.jsxs(W,{$size:e,$color:s.color,onMouseDown:E=>{if(E.preventDefault(),s.icon==="cancel"){const q={target:{value:""}};d==null||d(q)}},type:"button",children:[s.icon==="cancel"&&a.jsx(A,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color}),s.icon==="error"&&a.jsx(V,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color}),s.icon==="circlecheck"&&a.jsx(H,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color})]})]})}),Q=c.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,U=c.input`
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;

  /* Size styles */
  ${({$size:e})=>{const l=o.gap["gap-1"],t=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 32px;
          ${p.body2}
          padding: ${o.gap["gap-1"]} ${o.gap["gap-2"]};
          padding-right: ${t}px;
        `;case"large":return`
          height: 48px;
          ${p.body3}
          padding: ${o.gap["gap-3"]} ${o.gap["gap-2.5"]};
          padding-right: ${t}px;
        `;default:return`
          height: 40px;
          ${p.body3}
          padding: ${o.gap["gap-2"]} ${o.gap["gap-2"]};
          padding-right: ${t}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:l,$active:n,$focused:t})=>l?`
        background-color: ${b.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${u.light["color-border-primary"]};
      `:e==="normal"?n&&t?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:n&&!t?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:!n&&t?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:e==="negative"?n&&t?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:!n&&t?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-negative"]};
        `:e==="positive"?n&&t?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:n&&!t?`
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
  }

  &::-webkit-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
  }

  &::-moz-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
  }

  &:focus::-webkit-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
  }

  &:focus::-moz-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
  }

  &:focus:-ms-input-placeholder {
    color: ${r.light["fg-neutral-assistive"]} !important;
  }
`,W=c.button`
  position: absolute;
  right: ${o.gap["gap-1"]};
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
`;L.displayName="Input";L.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const C=y.forwardRef(({label:e,labelType:l="default",description:n,descriptionStatus:t="default",descriptionLeadingIcon:i=!1,size:m="medium",status:g="normal",disabled:d=!1,placeholder:x,value:$,onChange:I,onFocus:f,onBlur:h,className:k="",...s},E)=>{const[q,F]=y.useState(!1),[S,M]=y.useState(!1),_=w=>{F(!0),M(!0),f==null||f(w)},D=w=>{F(!1),M(!1),h==null||h(w)};return a.jsxs(X,{className:k,children:[e&&a.jsx(R,{type:l,children:e}),a.jsx(L,{ref:E,size:m,status:g,disabled:d,active:S,focused:q,placeholder:x,value:$,onChange:I,onFocus:_,onBlur:D,...s}),n&&a.jsx(j,{status:t,leadingIcon:i,children:n})]})}),X=c.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
`;C.displayName="TextField";C.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{j as D,L as I,R as L,C as T};
