import{j as t}from"./jsx-runtime-B7vz3Cs4.js";import{r as p}from"./iframe-DY2v0FBy.js";import{d as u}from"./styled-components.browser.esm-DpOTBizC.js";import{c as o}from"./color-CMFzNX_O.js";import{t as r,b as c}from"./borderColor-C1c8KEhD.js";import{p as F,n as N}from"./negativeColor-vAhOVlFC.js";import{t as O,a as w}from"./typography-he8MZv4l.js";import{r as b}from"./radius-DaoU83SK.js";import{s as a}from"./spacing-tE1IiUFl.js";import{a as A,b as P,c as B,d as z,e as G,f as Y}from"./IconArrowUp-CADLAFBN.js";const H=({children:e,type:i="default",className:l="",...n})=>{const h=()=>{switch(i){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(te,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(re,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ee,{$type:i,className:l,...n,children:h()})},ee=u.label`
  ${O.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${r.light["fg-neutral-strong"]};
`,te=u.span`
  ${O.caption2}
  color: ${o.red[500]};
  margin-left: ${a.gap["gap-0.5"]};
`,re=u.span`
  ${O.body2}
  color: ${r.light["fg-neutral-alternative"]};
  margin-left: ${a.gap["gap-0.5"]};
`;H.displayName="Label";H.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const C=({children:e,status:i="default",leadingIcon:l=!1,className:n="",...h})=>{const T=()=>{if(!l)return null;switch(i){case"error":return t.jsx(ne,{children:t.jsx(P,{})});case"success":return t.jsx(le,{children:t.jsx(A,{})});default:return null}};return t.jsxs(ae,{status:i,className:n,...h,children:[T(),t.jsx("span",{children:e})]})},ae=u.div`
  ${w("ko","caption2","regular")}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${a.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"error":return N.light["fg-negative-primary"];case"success":return F.light["fg-positive-primary"];default:return r.light["fg-neutral-assistive"]}}};
`,U=u.div`
  width: 16px;
  height: 16px;
  margin-right: ${a.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,ne=u(U)`
  color: ${N.light["fg-negative-primary"]};
`,le=u(U)`
  color: ${F.light["fg-positive-primary"]};
`;C.displayName="Description";C.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const D=p.forwardRef(({size:e="medium",status:i="normal",disabled:l=!1,active:n=!1,focused:h=!1,placeholder:T,value:E,type:$="text",onChange:j,onFocus:m,onBlur:R,className:I="",...v},x)=>{const[g,V]=p.useState(!1),[f,y]=p.useState(h);p.useEffect(()=>{y(h)},[h]);const k=d=>{y(!0),m==null||m(d)},L=d=>{y(!1),R==null||R(d)},s=$==="password"&&E&&E.trim()!==""?{icon:g?"visibility-on":"visibility-off",color:r.light["fg-neutral-primary"]}:l?i==="positive"?{icon:"circlecheck",color:F.light["fg-positive-primary"]}:null:i==="negative"?n?null:{icon:"error",color:N.light["fg-negative-primary"]}:i==="positive"?n?null:{icon:"circlecheck",color:F.light["fg-positive-primary"]}:null;return t.jsxs(ie,{children:[t.jsx(oe,{ref:x,type:$==="password"?g?"text":"password":$,value:E,onChange:j,onFocus:k,onBlur:L,placeholder:T,disabled:l,className:I,$size:e,$status:i,$disabled:l,$active:n,$focused:f,...v}),s&&t.jsxs(se,{$size:e,$color:s.color,onMouseDown:d=>{d.preventDefault(),(s.icon==="visibility-on"||s.icon==="visibility-off")&&V(!g)},type:"button",children:[s.icon==="error"&&t.jsx(P,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color}),s.icon==="circlecheck"&&t.jsx(A,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color}),s.icon==="visibility-on"&&t.jsx(B,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color}),s.icon==="visibility-off"&&t.jsx(z,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s.color})]})]})}),ie=u.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,oe=u.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${b["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;

  /* Size styles */
  ${({$size:e})=>{const i=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],n=(e==="small"?16:e==="large"?24:20)+parseInt(i)*2;switch(e){case"small":return`
          height: 32px;
          ${w("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `;case"large":return`
          height: 48px;
          ${w("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${n}px;
        `;default:return`
          height: 40px;
          ${w("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:i,$active:l,$focused:n})=>i?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
      `:e==="normal"?l&&n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:l&&!n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:!l&&n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:e==="negative"?l&&n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${o.red[500]};
        `:!l&&n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${o.red[500]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-negative"]};
        `:e==="positive"?l&&n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:l&&!n?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${r.light["fg-neutral-primary"]};
      border-color: ${c.light["color-border-primary"]};
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
`,se=u.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
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
`;D.displayName="Input";D.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const J=p.forwardRef(({label:e,labelType:i="default",description:l,descriptionStatus:n="default",descriptionLeadingIcon:h=!1,size:T="medium",status:E="normal",disabled:$=!1,placeholder:j,value:m,type:R="text",onChange:I,onFocus:v,onBlur:x,className:g="",...V},f)=>{const[y,k]=p.useState(!1),[L,M]=p.useState(!1),s=S=>{k(!0),M(!0),v==null||v(S)},d=S=>{k(!1),M(!1),x==null||x(S)};return t.jsxs(de,{className:g,children:[e&&t.jsx(H,{type:i,children:e}),t.jsx(D,{ref:f,size:T,status:E,disabled:$,active:L,focused:y,placeholder:j,value:m,type:R,onChange:I,onFocus:s,onBlur:d,...V}),l&&t.jsx(C,{status:n,leadingIcon:h,children:l})]})}),de=u.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
`;J.displayName="TextField";J.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"normal" | "negative" | "positive"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"normal"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const K=({size:e="medium",disabled:i=!1,active:l=!1,focused:n=!1,placeholder:h="선택해주세요.",value:T,options:E=[],onChange:$,onFocus:j,onBlur:m,className:R=""})=>{const[I,v]=p.useState(!1),[x,g]=p.useState(l),[V,f]=p.useState(n),y=p.useRef(null);p.useEffect(()=>{const d=S=>{y.current&&!y.current.contains(S.target)&&(v(!1),f(!1))};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),p.useEffect(()=>{g(l)},[l]),p.useEffect(()=>{f(n)},[n]);const k=E.find(d=>d.value===T),L=()=>{i||(v(!I),I?(f(!1),g(!1),m==null||m({})):(f(!0),g(!0),j==null||j({})))},M=d=>{$==null||$(d.value),v(!1),f(!1),m==null||m({})},s=()=>i?r.light["fg-neutral-alternative"]:r.light["fg-neutral-primary"];return t.jsxs(ue,{ref:y,className:R,children:[t.jsxs(ce,{size:e,disabled:i,active:x,focused:V,onClick:L,type:"button","data-active":x?"true":"false",children:[t.jsx(pe,{children:k?k.label:h}),t.jsx(ge,{size:e,children:I?t.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s()}):t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:s()})})]}),I&&t.jsx(me,{size:e,children:E.map(d=>t.jsx(fe,{onClick:()=>M(d),isSelected:d.value===T,children:d.label},d.value))})]})},ue=u.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ce=u.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${b["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({size:e})=>{const i=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],n=(e==="small"?16:e==="large"?24:20)+parseInt(i)*2;switch(e){case"small":return`
          height: 32px;
          ${w("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `;case"large":return`
          height: 48px;
          ${w("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${n}px;
        `;default:return`
          height: 40px;
          ${w("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({disabled:e,active:i,focused:l})=>e?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
        cursor: not-allowed;
      `:i&&l?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-focused"]};
      `:i?`
        background-color: ${o.common[100]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-primary"]};
      `:l?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-alternative"]};
        border-color: ${c.light["color-border-focused"]};
      `:`
      background-color: ${o.common[100]};
      color: ${r.light["fg-neutral-alternative"]};
      border-color: ${c.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }
`,pe=u.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ge=u.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,me=u.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${o.common[100]};
  border: 1px solid ${c.light["color-border-primary"]};
  border-radius: ${b["rounded-2"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`,fe=u.div`
  padding: ${a.gap["gap-2"]};
  cursor: pointer;
  ${w("ko","body3","regular")}
  color: ${({isSelected:e})=>e?r.light["fg-neutral-primary"]:r.light["fg-neutral-alternative"]};
  background-color: ${({isSelected:e})=>e?o.gray[50]:"transparent"};

  &:hover {
    background-color: ${o.gray[50]};
  }

  &:first-child {
    border-radius: ${b["rounded-2"]} ${b["rounded-2"]} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${b["rounded-2"]} ${b["rounded-2"]};
  }
`;K.displayName="Select";K.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Q=({size:e="medium",disabled:i=!1,active:l=!1,focused:n=!1,placeholder:h="선택해주세요.",value:T,options:E=[],label:$,labelType:j="default",description:m,descriptionStatus:R="default",descriptionLeadingIcon:I=!1,onChange:v,onFocus:x,onBlur:g,className:V=""})=>{const[f,y]=p.useState(!1),[k,L]=p.useState(l),[M,s]=p.useState(n),d=p.useRef(null);p.useEffect(()=>{const q=Z=>{d.current&&!d.current.contains(Z.target)&&(y(!1),s(!1))};return document.addEventListener("mousedown",q),()=>{document.removeEventListener("mousedown",q)}},[]),p.useEffect(()=>{L(l)},[l]),p.useEffect(()=>{s(n)},[n]);const S=E.find(q=>q.value===T),W=()=>{i||(y(!f),f?(s(!1),L(!1),g==null||g({})):(s(!0),L(!0),x==null||x({})))},X=q=>{v==null||v(q.value),y(!1),s(!1),g==null||g({})},_=()=>i?r.light["fg-neutral-alternative"]:r.light["fg-neutral-primary"];return t.jsxs(he,{ref:d,className:V,children:[$&&t.jsx(H,{type:j,children:$}),t.jsxs(ve,{size:e,disabled:i,active:k,focused:M,onClick:W,type:"button","data-active":k?"true":"false",children:[t.jsx(ye,{children:S?S.label:h}),t.jsx(be,{size:e,children:f?t.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:_()}):t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:_()})})]}),m&&!f&&t.jsx(C,{status:R,leadingIcon:I,children:m}),f&&t.jsx($e,{size:e,children:E.map(q=>t.jsx(xe,{onClick:()=>X(q),isSelected:q.value===T,children:q.label},q.value))})]})},he=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  width: 100%;
`,ve=u.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${b["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({size:e})=>{const i=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],n=(e==="small"?16:e==="large"?24:20)+parseInt(i)*2;switch(e){case"small":return`
          height: 32px;
          ${w("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `;case"large":return`
          height: 48px;
          ${w("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${n}px;
        `;default:return`
          height: 40px;
          ${w("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({disabled:e,active:i,focused:l})=>e?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
        cursor: not-allowed;
      `:i&&l?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-focused"]};
      `:i?`
        background-color: ${o.common[100]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-primary"]};
      `:l?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-alternative"]};
        border-color: ${c.light["color-border-focused"]};
      `:`
      background-color: ${o.common[100]};
      color: ${r.light["fg-neutral-alternative"]};
      border-color: ${c.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }
`,ye=u.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,be=u.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,$e=u.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${o.common[100]};
  border: 1px solid ${c.light["color-border-primary"]};
  border-radius: ${b["rounded-2"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`,xe=u.div`
  padding: ${a.gap["gap-2"]};
  cursor: pointer;
  ${w("ko","body3","regular")}
  color: ${({isSelected:e})=>e?r.light["fg-neutral-primary"]:r.light["fg-neutral-alternative"]};
  background-color: ${({isSelected:e})=>e?o.gray[50]:"transparent"};

  &:hover {
    background-color: ${o.gray[50]};
  }

  &:first-child {
    border-radius: ${b["rounded-2"]} ${b["rounded-2"]} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${b["rounded-2"]} ${b["rounded-2"]};
  }
`;Q.displayName="Dropdown";Q.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionStatus:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{C as D,D as I,H as L,K as S,J as T,Q as a};
