import{j as t}from"./jsx-runtime-fZq2-uhx.js";import{r as p}from"./iframe-BW0glh9U.js";import{d as s}from"./styled-components.browser.esm-Bc0YbZHY.js";import{c as o}from"./color-DlZ4f652.js";import{t as r,b as c}from"./borderColor-7dRAAa5F.js";import{p as M,n as H}from"./negativeColor-DFTQtxpe.js";import{t as O,a as T}from"./typography-he8MZv4l.js";import{r as L}from"./radius-DaoU83SK.js";import{s as a}from"./spacing-tE1IiUFl.js";import{a as G,b as W,c as ee,d as te,e as Y,f as U,I as re}from"./IconArrowUp-CUAnX4EX.js";import{s as ae}from"./shadow-DVq_1U2q.js";const F=({children:e,type:l="default",className:n="",...i})=>{const m=()=>{switch(l){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(ie,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(le,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ne,{$type:l,className:n,...i,children:m()})},ne=s.label`
  ${O.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${r.light["fg-neutral-strong"]};
`,ie=s.span`
  ${O.caption2}
  color: ${o.red[500]};
  margin-left: ${a.gap["gap-0.5"]};
`,le=s.span`
  ${O.body2}
  color: ${r.light["fg-neutral-alternative"]};
  margin-left: ${a.gap["gap-0.5"]};
`;F.displayName="Label";F.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const N=({children:e,status:l="default",leadingIcon:n=!1,className:i="",...m})=>{const h=()=>{if(!n)return null;switch(l){case"negative":return t.jsx(se,{children:t.jsx(W,{})});case"positive":return t.jsx(de,{children:t.jsx(G,{})});default:return null}};return t.jsxs(oe,{status:l,className:i,...m,children:[h(),t.jsx("span",{children:e})]})},oe=s.div`
  ${T("ko","caption2","regular")}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${a.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"negative":return H.light["fg-negative-primary"];case"positive":return M.light["fg-positive-primary"];default:return r.light["fg-neutral-assistive"]}}};
`,J=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${a.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,se=s(J)`
  color: ${H.light["fg-negative-primary"]};
`,de=s(J)`
  color: ${M.light["fg-positive-primary"]};
`;N.displayName="Description";N.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const D=p.forwardRef(({size:e="medium",status:l="default",disabled:n=!1,active:i=!1,focused:m=!1,placeholder:h,value:x,type:y="text",onChange:$,onFocus:g,onBlur:j,className:q="",...w},E)=>{const[f,S]=p.useState(!1),[v,b]=p.useState(m);p.useEffect(()=>{b(m)},[m]);const R=d=>{b(!0),g==null||g(d)},I=d=>{b(!1),j==null||j(d)},u=y==="password"&&x&&x.trim()!==""?{icon:f?"visibility-on":"visibility-off",color:r.light["fg-neutral-primary"]}:n?l==="positive"?{icon:"circlecheck",color:M.light["fg-positive-primary"]}:null:l==="negative"?i?null:{icon:"error",color:H.light["fg-negative-primary"]}:l==="positive"?i?null:{icon:"circlecheck",color:M.light["fg-positive-primary"]}:null;return t.jsxs(ue,{children:[t.jsx(ce,{ref:E,type:y==="password"?f?"text":"password":y,value:x,onChange:$,onFocus:R,onBlur:I,placeholder:h,disabled:n,className:q,$size:e,$status:l,$disabled:n,$active:i,$focused:v,...Object.fromEntries(Object.entries(w).filter(([d])=>!["active","focused","status","size"].includes(d)))}),u&&t.jsxs(pe,{$size:e,$color:u.color,onMouseDown:d=>{d.preventDefault(),(u.icon==="visibility-on"||u.icon==="visibility-off")&&S(!f)},type:"button",children:[u.icon==="error"&&t.jsx(W,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color}),u.icon==="circlecheck"&&t.jsx(G,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color}),u.icon==="visibility-on"&&t.jsx(ee,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color}),u.icon==="visibility-off"&&t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u.color})]})]})}),ue=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,ce=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${L["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e})=>{const l=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],i=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 32px;
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${i}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${i}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${i}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:l,$active:n,$focused:i})=>l?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
      `:e==="default"?n&&i?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:n&&!i?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:!n&&i?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-primary"]};
        `:e==="negative"?n&&i?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${o.red[500]};
        `:!n&&i?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${o.red[500]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-negative"]};
        `:e==="positive"?n&&i?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${c.light["color-border-focused"]};
        `:n&&!i?`
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
`,pe=s.button`
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
`;D.displayName="Input";D.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const K=p.forwardRef(({label:e,labelType:l="default",description:n,descriptionLeadingIcon:i=!1,size:m="medium",status:h="default",disabled:x=!1,placeholder:y,value:$,type:g="text",onChange:j,onFocus:q,onBlur:w,className:E="",...f},S)=>{const[v,b]=p.useState(!1),[R,I]=p.useState(!1),V=d=>{b(!0),I(!0),q==null||q(d)},u=d=>{b(!1),I(!1),w==null||w(d)};return t.jsxs(ge,{className:E,children:[e&&t.jsx(F,{type:l,children:e}),t.jsx(D,{ref:S,size:m,status:h,disabled:x,active:R,focused:v,placeholder:y,value:$,type:g,onChange:j,onFocus:V,onBlur:u,...f}),n&&t.jsx(N,{status:h,leadingIcon:i,children:n})]})}),ge=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
`;K.displayName="TextField";K.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Q=({size:e="medium",disabled:l=!1,active:n=!1,focused:i=!1,placeholder:m="선택해주세요.",value:h,options:x=[],onChange:y,onFocus:$,onBlur:g,className:j=""})=>{const[q,w]=p.useState(!1),[E,f]=p.useState(n),[S,v]=p.useState(i),b=p.useRef(null);p.useEffect(()=>{const d=C=>{b.current&&!b.current.contains(C.target)&&(w(!1),v(!1))};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),p.useEffect(()=>{f(n)},[n]),p.useEffect(()=>{v(i)},[i]);const R=x.find(d=>d.value===h),I=()=>{l||(w(!q),q?(v(!1),f(!1),g==null||g({})):(v(!0),f(!0),$==null||$({})))},V=d=>{y==null||y(d.value),w(!1),v(!1),g==null||g({})},u=()=>l?r.light["fg-neutral-alternative"]:r.light["fg-neutral-primary"];return t.jsxs(me,{ref:b,className:j,children:[t.jsxs(fe,{size:e,disabled:l,active:E,focused:S,onClick:I,type:"button","data-active":E?"true":"false",children:[t.jsx(he,{children:R?R.label:m}),t.jsx(ve,{size:e,children:q?t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u()}):t.jsx(U,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:u()})})]}),q&&t.jsx(ye,{size:e,children:x.map(d=>t.jsx(be,{onClick:()=>V(d),$isSelected:d.value===h,children:d.label},d.value))})]})},me=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,fe=s.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${L["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({size:e})=>{const l=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],i=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 32px;
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${i}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${i}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${i}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({disabled:e,active:l,focused:n})=>e?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
        cursor: not-allowed;
      `:l&&n?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-focused"]};
      `:l?`
        background-color: ${o.common[100]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-primary"]};
      `:n?`
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
`,he=s.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ve=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,ye=s.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${o.common[100]};
  border: 1px solid ${c.light["color-border-primary"]};
  border-radius: ${L["rounded-2"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`,be=s.div`
  padding: ${a.gap["gap-2"]};
  cursor: pointer;
  ${T("ko","body3","regular")}
    color: ${({$isSelected:e})=>e?r.light["fg-neutral-primary"]:r.light["fg-neutral-alternative"]};
  background-color: ${({$isSelected:e})=>e?o.gray[50]:"transparent"};

  &:hover {
    background-color: ${o.gray[50]};
  }

  &:first-child {
    border-radius: ${L["rounded-2"]} ${L["rounded-2"]} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${L["rounded-2"]} ${L["rounded-2"]};
  }
`;Q.displayName="Select";Q.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const _=({children:e,className:l,...n})=>t.jsx(xe,{className:l,...n,children:e}),xe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1"]};
  box-shadow: ${ae.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: 300px;

  /* Dropdown 스타일 - Dropdown 컴포넌트 내부에서 사용될 때 */
  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    margin-top: 4px;
    width: 100% !important;
    max-height: 200px;
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
    background: ${o.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${o.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${o.gray[200]} transparent;
`;_.displayName="Menu";_.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A=({disable:e=!1,active:l=!1,leadingIcon:n,text:i,description:m,trailingIcon:h,onClick:x,className:y})=>{const $=()=>e?r.light["fg-neutral-disable"]:r.light["fg-neutral-primary"],g=()=>l&&!e;return t.jsxs($e,{disable:e,active:l,"data-disable":e,onClick:e?void 0:x,className:y,children:[n&&t.jsx(we,{children:t.jsx(n,{width:16,height:16,color:$()})}),t.jsxs(Te,{children:[i&&t.jsx(qe,{children:i}),m&&t.jsx(ke,{children:m})]}),g()&&t.jsx(Ee,{children:h?t.jsx(h,{width:16,height:16,color:$()}):t.jsx(re,{width:16,height:16,color:$()})})]})},$e=s.div`
  display: flex;
  align-items: center;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1.5"]} ${a.gap["gap-2"]};
  border-radius: ${L["rounded-1"]};
  background-color: ${o.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${o.gray[50]};
  }
`,we=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Te=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,qe=s.div`
  ${T("ko","body2","regular")}
  color: inherit;
`,ke=s.div`
  ${T("ko","caption2","regular")}
  color: ${r.light["fg-neutral-alternative"]};
`,Ee=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;A.displayName="Cell";A.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const X=({size:e="medium",disabled:l=!1,active:n=!1,focused:i=!1,placeholder:m="선택해주세요.",value:h,options:x=[],label:y,labelType:$="default",description:g,descriptionLeadingIcon:j=!1,status:q="default",onChange:w,onFocus:E,onBlur:f,className:S=""})=>{const[v,b]=p.useState(!1),[R,I]=p.useState(n),[V,u]=p.useState(i),d=p.useRef(null);p.useEffect(()=>{const k=z=>{d.current&&!d.current.contains(z.target)&&(b(!1),u(!1))};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),p.useEffect(()=>{I(n)},[n]),p.useEffect(()=>{u(i)},[i]);const C=x.find(k=>k.value===h),Z=()=>{l||(b(!v),v?(u(!1),I(!1),f==null||f({})):(u(!0),I(!0),E==null||E({})))},B=k=>{w==null||w(k.value),b(!1),u(!1),f==null||f({})},P=()=>l?r.light["fg-neutral-alternative"]:r.light["fg-neutral-primary"];return t.jsxs(Ie,{ref:d,className:`dropdown-container ${S}`,children:[y&&t.jsx(F,{type:$,children:y}),t.jsxs(je,{size:e,disabled:l,active:R,focused:V,onClick:Z,type:"button","data-active":R?"true":"false",children:[t.jsx(Re,{children:C?C.label:m}),t.jsx(Le,{size:e,children:v?t.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:P()}):t.jsx(U,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:P()})})]}),g&&!v&&t.jsx(N,{status:q,leadingIcon:j,children:g}),v&&t.jsx(_,{children:x.map(k=>t.jsx(A,{text:k.label,active:k.value===h,onClick:()=>B(k)},k.value))})]})},Ie=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  width: 100%;
`,je=s.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${L["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({size:e})=>{const l=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],i=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 32px;
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${i}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${i}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${i}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({disabled:e,active:l,focused:n})=>e?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${c.light["color-border-primary"]};
        cursor: not-allowed;
      `:l&&n?`
        background-color: ${o.gray[50]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-focused"]};
      `:l?`
        background-color: ${o.common[100]};
        color: ${r.light["fg-neutral-primary"]};
        border-color: ${c.light["color-border-primary"]};
      `:n?`
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
`,Re=s.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Le=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;X.displayName="Dropdown";X.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};export{A as C,N as D,D as I,F as L,_ as M,Q as S,K as T,X as a};
