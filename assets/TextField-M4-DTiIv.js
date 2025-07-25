import{j as t}from"./jsx-runtime-LjKrbKdp.js";import{r as y}from"./iframe-Bu_LMxoV.js";import{d as s}from"./styled-components.browser.esm-DqF4sWHm.js";import{c as b}from"./color-CMFzNX_O.js";import{t as a,b as c}from"./borderColor-C1c8KEhD.js";import{t as p}from"./typography-D2BGv-2q.js";import{s as i}from"./spacing-tE1IiUFl.js";import{p as h,n as T}from"./negativeColor-vAhOVlFC.js";import{r as C}from"./radius-DaoU83SK.js";const k=({children:e,type:n="default",className:l="",...r})=>{const o=()=>{switch(n){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(O,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(A,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(D,{$type:n,className:l,...r,children:o()})},D=s.label`
  ${p.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${a.light["fg-neutral-strong"]};
`,O=s.span`
  ${p.caption2}
  color: ${b.red[500]};
  margin-left: ${i.gap["gap-0.5"]};
`,A=s.span`
  ${p.body2}
  color: ${a.light["fg-neutral-alternative"]};
  margin-left: ${i.gap["gap-0.5"]};
`;k.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F=({children:e,status:n="default",leadingIcon:l=!1,className:r="",...o})=>{const m=()=>{if(!l)return null;switch(n){case"error":return t.jsx(G,{children:t.jsx("img",{src:"/icons/Icon_error.svg",alt:"Error",width:"16",height:"16"})});case"success":return t.jsx(P,{children:t.jsx("img",{src:"/icons/Icon_circlecheck.svg",alt:"Success",width:"16",height:"16"})});default:return null}};return t.jsxs(B,{status:n,className:r,...o,children:[m(),t.jsx("span",{children:e})]})},B=s.div`
  ${p.caption2}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${i.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"error":return T.light["fg-negative-primary"];case"success":return h.light["fg-positive-primary"];default:return a.light["fg-neutral-assistive"]}}};
`,M=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${i.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,G=s(M)`
  color: ${T.light["fg-negative-primary"]};
`,P=s(M)`
  color: ${h.light["fg-positive-primary"]};
`;F.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const R=y.forwardRef(({size:e="medium",status:n="normal",disabled:l=!1,active:r=!1,focused:o=!1,placeholder:m,value:g,onChange:d,onFocus:I,onBlur:x,className:$="",...f},v)=>{const u=(()=>{if(l)return n==="positive"?{icon:"./icons/Icon_circlecheck.svg",color:h.light["fg-positive-primary"]}:null;if(n==="normal")return r&&o?{icon:"./icons/Icon_cancel.svg",color:a.light["fg-neutral-primary"]}:null;if(n==="negative")return r&&o?{icon:"./icons/Icon_cancel.svg",color:a.light["fg-neutral-primary"]}:r?null:{icon:"./icons/Icon_error.svg",color:T.light["fg-negative-primary"]};if(n==="positive")return r&&o?{icon:"./icons/Icon_cancel.svg",color:a.light["fg-neutral-primary"]}:r?null:{icon:"./icons/Icon_circlecheck.svg",color:h.light["fg-positive-primary"]};if(g&&g.trim()!==""){if(n==="normal")return{icon:"./icons/Icon_cancel.svg",color:a.light["fg-neutral-primary"]};if(n==="negative"){if(r&&o)return{icon:"./icons/Icon_cancel.svg",color:a.light["fg-neutral-primary"]};if(!r)return{icon:"./icons/Icon_error.svg",color:T.light["fg-negative-primary"]}}if(n==="positive"){if(r&&o)return{icon:"./icons/Icon_cancel.svg",color:a.light["fg-neutral-primary"]};if(r)return{icon:"./icons/Icon_circlecheck.svg",color:h.light["fg-positive-primary"]}}}return null})();return t.jsxs(Y,{children:[t.jsx(J,{ref:v,type:"text",value:g,onChange:d,onFocus:I,onBlur:x,placeholder:m,disabled:l,className:$,$size:e,$status:n,$disabled:l,$active:r,$focused:o,...f}),u&&t.jsx(K,{$size:e,$color:u.color,onMouseDown:E=>{if(E.preventDefault(),u.icon.includes("cancel")){const q={target:{value:""}};d==null||d(q)}},type:"button",children:t.jsx("img",{src:u.icon,alt:u.icon.includes("cancel")?"Clear":u.icon.includes("error")?"Error":"Success",width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20})})]})}),Y=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,J=s.input`
  width: 100%;
  border: 1px solid;
  border-radius: ${C["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;

  /* Size styles */
  ${({$size:e})=>{const n=i.gap["gap-1"],r=(e==="small"?16:e==="large"?24:20)+parseInt(n)*2;switch(e){case"small":return`
          height: 32px;
          ${p.body2}
          padding: ${i.gap["gap-1"]} ${i.gap["gap-2"]};
          padding-right: ${r}px;
        `;case"large":return`
          height: 48px;
          ${p.body3}
          padding: ${i.gap["gap-3"]} ${i.gap["gap-2.5"]};
          padding-right: ${r}px;
        `;default:return`
          height: 40px;
          ${p.body3}
          padding: ${i.gap["gap-2"]} ${i.gap["gap-2"]};
          padding-right: ${r}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:n,$active:l,$focused:r})=>n?`
        background-color: ${b.gray[50]};
        color: ${a.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
      `:e==="normal"?l&&r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:l&&!r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:!l&&r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:e==="negative"?l&&r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:!l&&r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${b.red[500]};
        `:`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-negative"]};
        `:e==="positive"?l&&r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:l&&!r?`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${a.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${a.light["fg-neutral-primary"]};
      border-color: ${c.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }
`,K=s.button`
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
`;R.displayName="Input";R.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const H=y.forwardRef(({label:e,labelType:n="default",description:l,descriptionStatus:r="default",descriptionLeadingIcon:o=!1,size:m="medium",status:g="normal",disabled:d=!1,placeholder:I,value:x,onChange:$,onFocus:f,onBlur:v,className:j="",...u},E)=>{const[q,L]=y.useState(!1),[V,_]=y.useState(!1),N=w=>{L(!0),_(!0),f==null||f(w)},S=w=>{L(!1),_(!1),v==null||v(w)};return t.jsxs(Q,{className:j,children:[e&&t.jsx(k,{type:n,children:e}),t.jsx(R,{ref:E,size:m,status:g,disabled:d,active:V,focused:q,placeholder:I,value:x,onChange:$,onFocus:N,onBlur:S,...u}),l&&t.jsx(F,{status:r,leadingIcon:o,children:l})]})}),Q=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;H.displayName="TextField";H.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{F as D,R as I,k as L,H as T};
