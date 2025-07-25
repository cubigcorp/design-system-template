import{j as t}from"./jsx-runtime-7lGhGRbk.js";import{r as v}from"./iframe-2sBC8B_u.js";import{d as u}from"./styled-components.browser.esm-DBUfwey-.js";import{c as y}from"./color-CMFzNX_O.js";import{t as n,b as s}from"./borderColor-C1c8KEhD.js";import{t as p}from"./typography-D2BGv-2q.js";import{s as i}from"./spacing-tE1IiUFl.js";import{p as h,n as w}from"./negativeColor-vAhOVlFC.js";import{r as S}from"./radius-DaoU83SK.js";const F=({children:e,type:a="default",className:l="",...r})=>{const o=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(D,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(O,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(C,{$type:a,className:l,...r,children:o()})},C=u.label`
  ${p.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${n.light["fg-neutral-strong"]};
`,D=u.span`
  ${p.caption2}
  color: ${y.red[500]};
  margin-left: ${i.gap["gap-0.5"]};
`,O=u.span`
  ${p.body2}
  color: ${n.light["fg-neutral-alternative"]};
  margin-left: ${i.gap["gap-0.5"]};
`;F.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const A=u.div`
  display: flex;
  align-items: center;
  gap: ${i.gap["gap-1"]};
  ${p.caption2}
  color: ${({status:e})=>{switch(e){case"negative":return w.light["fg-negative-primary"];case"positive":return h.light["fg-positive-primary"];default:return n.light["fg-neutral-assistive"]}}};

  img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`,R=({children:e,status:a="default",className:l="",...r})=>t.jsxs(A,{status:a,className:l,...r,children:[a==="negative"&&t.jsx("img",{src:"./icons/Icon_error.svg",alt:"Error",style:{flexShrink:0}}),a==="positive"&&t.jsx("img",{src:"./icons/Icon_circlecheck.svg",alt:"Success",style:{flexShrink:0}}),t.jsx("span",{children:e})]});R.displayName="Description";R.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const j=v.forwardRef(({size:e="medium",status:a="normal",disabled:l=!1,active:r=!1,focused:o=!1,placeholder:b,value:m,onChange:d,onFocus:T,onBlur:x,className:I="",...g},f)=>{const c=(()=>{if(l)return a==="positive"?{icon:"./icons/Icon_circlecheck.svg",color:h.light["fg-positive-primary"]}:null;if(a==="normal")return r&&o?{icon:"./icons/Icon_cancel.svg",color:n.light["fg-neutral-primary"]}:null;if(a==="negative")return r&&o?{icon:"./icons/Icon_cancel.svg",color:n.light["fg-neutral-primary"]}:r?null:{icon:"./icons/Icon_error.svg",color:w.light["fg-negative-primary"]};if(a==="positive")return r&&o?{icon:"./icons/Icon_cancel.svg",color:n.light["fg-neutral-primary"]}:r?null:{icon:"./icons/Icon_circlecheck.svg",color:h.light["fg-positive-primary"]};if(m&&m.trim()!==""){if(a==="normal")return{icon:"./icons/Icon_cancel.svg",color:n.light["fg-neutral-primary"]};if(a==="negative"){if(r&&o)return{icon:"./icons/Icon_cancel.svg",color:n.light["fg-neutral-primary"]};if(!r)return{icon:"./icons/Icon_error.svg",color:w.light["fg-negative-primary"]}}if(a==="positive"){if(r&&o)return{icon:"./icons/Icon_cancel.svg",color:n.light["fg-neutral-primary"]};if(r)return{icon:"./icons/Icon_circlecheck.svg",color:h.light["fg-positive-primary"]}}}return null})();return t.jsxs(G,{children:[t.jsx(P,{ref:f,type:"text",value:m,onChange:d,onFocus:T,onBlur:x,placeholder:b,disabled:l,className:I,$size:e,$status:a,$disabled:l,$active:r,$focused:o,...g}),c&&t.jsx(Y,{$size:e,$color:c.color,onMouseDown:$=>{if($.preventDefault(),c.icon.includes("cancel")){const E={target:{value:""}};d==null||d(E)}},type:"button",children:t.jsx("img",{src:c.icon,alt:c.icon.includes("cancel")?"Clear":c.icon.includes("error")?"Error":"Success",width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20})})]})}),G=u.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,P=u.input`
  width: 100%;
  border: 1px solid;
  border-radius: ${S["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;

  /* Size styles */
  ${({$size:e})=>{const a=i.gap["gap-1"],r=(e==="small"?16:e==="large"?24:20)+parseInt(a)*2;switch(e){case"small":return`
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
  ${({$status:e,$disabled:a,$active:l,$focused:r})=>a?`
        background-color: ${y.gray[50]};
        color: ${n.light["fg-neutral-disable"]};
        border-color: ${s.light["color-border-primary"]};
      `:e==="normal"?l&&r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${s.light["color-border-focused"]};
        `:l&&!r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${s.light["color-border-primary"]};
        `:!l&&r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-assistive"]};
          border-color: ${s.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${n.light["fg-neutral-assistive"]};
          border-color: ${s.light["color-border-primary"]};
        `:e==="negative"?l&&r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${y.red[500]};
        `:!l&&r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-assistive"]};
          border-color: ${y.red[500]};
        `:`
          background-color: transparent;
          color: ${n.light["fg-neutral-assistive"]};
          border-color: ${s.light["color-border-negative"]};
        `:e==="positive"?l&&r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${s.light["color-border-focused"]};
        `:l&&!r?`
          background-color: transparent;
          color: ${n.light["fg-neutral-primary"]};
          border-color: ${s.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${n.light["fg-neutral-assistive"]};
          border-color: ${s.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${n.light["fg-neutral-assistive"]};
      border-color: ${s.light["color-border-primary"]};
    `}

  &:disabled {
    cursor: not-allowed;
  }
`,Y=u.button`
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
`;j.displayName="Input";j.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const M=v.forwardRef(({label:e,labelType:a="default",description:l,descriptionStatus:r="default",descriptionLeadingIcon:o=!1,size:b="medium",status:m="normal",disabled:d=!1,placeholder:T,value:x,onChange:I,onFocus:g,onBlur:f,className:L="",...c},$)=>{const[E,k]=v.useState(!1),[H,_]=v.useState(!1),V=q=>{k(!0),_(!0),g==null||g(q)},N=q=>{k(!1),_(!1),f==null||f(q)};return t.jsxs(B,{className:L,children:[e&&t.jsx(F,{type:a,children:e}),t.jsx(j,{ref:$,size:b,status:m,disabled:d,active:H,focused:E,placeholder:T,value:x,onChange:I,onFocus:V,onBlur:N,...c}),l&&t.jsx(R,{status:r,leadingIcon:o,children:l})]})}),B=u.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;M.displayName="TextField";M.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{R as D,j as I,F as L,M as T};
