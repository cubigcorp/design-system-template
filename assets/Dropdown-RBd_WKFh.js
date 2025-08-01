import{j as t}from"./jsx-runtime-BTbXV3wk.js";import{r as p}from"./iframe-D5_AN2oD.js";import{d as u}from"./styled-components.browser.esm-DOMakniN.js";import{c as o}from"./color-DlZ4f652.js";import{t as r,b as c}from"./borderColor-7dRAAa5F.js";import{p as F,n as N}from"./negativeColor-DFTQtxpe.js";import{t as O,a as T}from"./typography-he8MZv4l.js";import{r as b}from"./radius-DaoU83SK.js";import{s as a}from"./spacing-tE1IiUFl.js";import{a as A,b as P,c as B,d as z,e as G,f as Y}from"./IconArrowUp-BVxd77xX.js";const H=({children:e,type:i="default",className:l="",...n})=>{const v=()=>{switch(i){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(te,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(re,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ee,{$type:i,className:l,...n,children:v()})},ee=u.label`
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
`;H.displayName="Label";H.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const C=({children:e,status:i="default",leadingIcon:l=!1,className:n="",...v})=>{const $=()=>{if(!l)return null;switch(i){case"negative":return t.jsx(ne,{children:t.jsx(P,{})});case"positive":return t.jsx(le,{children:t.jsx(A,{})});default:return null}};return t.jsxs(ae,{status:i,className:n,...v,children:[$(),t.jsx("span",{children:e})]})},ae=u.div`
  ${T("ko","caption2","regular")}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${a.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"negative":return N.light["fg-negative-primary"];case"positive":return F.light["fg-positive-primary"];default:return r.light["fg-neutral-assistive"]}}};
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
`;C.displayName="Description";C.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const D=p.forwardRef(({size:e="medium",status:i="default",disabled:l=!1,active:n=!1,focused:v=!1,placeholder:$,value:E,type:x="text",onChange:j,onFocus:m,onBlur:R,className:w="",...y},I)=>{const[g,S]=p.useState(!1),[f,h]=p.useState(v);p.useEffect(()=>{h(v)},[v]);const L=s=>{h(!0),m==null||m(s)},k=s=>{h(!1),R==null||R(s)},d=x==="password"&&E&&E.trim()!==""?{icon:g?"visibility-on":"visibility-off",color:r.light["fg-neutral-primary"]}:l?i==="positive"?{icon:"circlecheck",color:F.light["fg-positive-primary"]}:null:i==="negative"?n?null:{icon:"error",color:N.light["fg-negative-primary"]}:i==="positive"?n?null:{icon:"circlecheck",color:F.light["fg-positive-primary"]}:null;return t.jsxs(ie,{children:[t.jsx(oe,{ref:I,type:x==="password"?g?"text":"password":x,value:E,onChange:j,onFocus:L,onBlur:k,placeholder:$,disabled:l,className:w,$size:e,$status:i,$disabled:l,$active:n,$focused:f,...y}),d&&t.jsxs(se,{$size:e,$color:d.color,onMouseDown:s=>{s.preventDefault(),(d.icon==="visibility-on"||d.icon==="visibility-off")&&S(!g)},type:"button",children:[d.icon==="error"&&t.jsx(P,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:d.color}),d.icon==="circlecheck"&&t.jsx(A,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:d.color}),d.icon==="visibility-on"&&t.jsx(B,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:d.color}),d.icon==="visibility-off"&&t.jsx(z,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:d.color})]})]})}),ie=u.div`
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
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${n}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:i,$active:l,$focused:n})=>i?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
      `:e==="default"?l&&n?`
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
`;D.displayName="Input";D.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const J=p.forwardRef(({label:e,labelType:i="default",description:l,descriptionLeadingIcon:n=!1,size:v="medium",status:$="default",disabled:E=!1,placeholder:x,value:j,type:m="text",onChange:R,onFocus:w,onBlur:y,className:I="",...g},S)=>{const[f,h]=p.useState(!1),[L,k]=p.useState(!1),V=s=>{h(!0),k(!0),w==null||w(s)},d=s=>{h(!1),k(!1),y==null||y(s)};return t.jsxs(de,{className:I,children:[e&&t.jsx(H,{type:i,children:e}),t.jsx(D,{ref:S,size:v,status:$,disabled:E,active:L,focused:f,placeholder:x,value:j,type:m,onChange:R,onFocus:V,onBlur:d,...g}),l&&t.jsx(C,{status:$,leadingIcon:n,children:l})]})}),de=u.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
`;J.displayName="TextField";J.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const K=({size:e="medium",disabled:i=!1,active:l=!1,focused:n=!1,placeholder:v="선택해주세요.",value:$,options:E=[],onChange:x,onFocus:j,onBlur:m,className:R=""})=>{const[w,y]=p.useState(!1),[I,g]=p.useState(l),[S,f]=p.useState(n),h=p.useRef(null);p.useEffect(()=>{const s=M=>{h.current&&!h.current.contains(M.target)&&(y(!1),f(!1))};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),p.useEffect(()=>{g(l)},[l]),p.useEffect(()=>{f(n)},[n]);const L=E.find(s=>s.value===$),k=()=>{i||(y(!w),w?(f(!1),g(!1),m==null||m({})):(f(!0),g(!0),j==null||j({})))},V=s=>{x==null||x(s.value),y(!1),f(!1),m==null||m({})},d=()=>i?r.light["fg-neutral-alternative"]:r.light["fg-neutral-primary"];return t.jsxs(ue,{ref:h,className:R,children:[t.jsxs(ce,{size:e,disabled:i,active:I,focused:S,onClick:k,type:"button","data-active":I?"true":"false",children:[t.jsx(pe,{children:L?L.label:v}),t.jsx(ge,{size:e,children:w?t.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:d()}):t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:d()})})]}),w&&t.jsx(me,{size:e,children:E.map(s=>t.jsx(fe,{onClick:()=>V(s),isSelected:s.value===$,children:s.label},s.value))})]})},ue=u.div`
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
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${n}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
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
  ${T("ko","body3","regular")}
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
`;K.displayName="Select";K.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Q=({size:e="medium",disabled:i=!1,active:l=!1,focused:n=!1,placeholder:v="선택해주세요.",value:$,options:E=[],label:x,labelType:j="default",description:m,descriptionLeadingIcon:R=!1,status:w="default",onChange:y,onFocus:I,onBlur:g,className:S=""})=>{const[f,h]=p.useState(!1),[L,k]=p.useState(l),[V,d]=p.useState(n),s=p.useRef(null);p.useEffect(()=>{const q=Z=>{s.current&&!s.current.contains(Z.target)&&(h(!1),d(!1))};return document.addEventListener("mousedown",q),()=>{document.removeEventListener("mousedown",q)}},[]),p.useEffect(()=>{k(l)},[l]),p.useEffect(()=>{d(n)},[n]);const M=E.find(q=>q.value===$),W=()=>{i||(h(!f),f?(d(!1),k(!1),g==null||g({})):(d(!0),k(!0),I==null||I({})))},X=q=>{y==null||y(q.value),h(!1),d(!1),g==null||g({})},_=()=>i?r.light["fg-neutral-alternative"]:r.light["fg-neutral-primary"];return t.jsxs(he,{ref:s,className:S,children:[x&&t.jsx(H,{type:j,children:x}),t.jsxs(ve,{size:e,disabled:i,active:L,focused:V,onClick:W,type:"button","data-active":L?"true":"false",children:[t.jsx(ye,{children:M?M.label:v}),t.jsx(be,{size:e,children:f?t.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:_()}):t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:_()})})]}),m&&!f&&t.jsx(C,{status:w,leadingIcon:R,children:m}),f&&t.jsx($e,{size:e,children:E.map(q=>t.jsx(xe,{onClick:()=>X(q),isSelected:q.value===$,children:q.label},q.value))})]})},he=u.div`
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
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${n}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${n}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
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
  ${T("ko","body3","regular")}
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
`;Q.displayName="Dropdown";Q.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{C as D,D as I,H as L,K as S,J as T,Q as a};
