import{j as t}from"./jsx-runtime-B1KhKolS.js";import{r as c}from"./iframe-lPxbl11V.js";import{d as s,l as H,m as J}from"./styled-components.browser.esm-BCmShAaO.js";import{c as o}from"./color-DlZ4f652.js";import{t as i,b as u}from"./borderColor-7dRAAa5F.js";import{p as M,n as O}from"./negativeColor-DFTQtxpe.js";import{t as D,a as T}from"./typography-BLDI0FEN.js";import{r as C}from"./radius-DaoU83SK.js";import{s as a}from"./spacing-tE1IiUFl.js";import{a as _,b as A,c as le,d as oe,e as K,f as Q,I as se,g as de,h as ce,i as ue}from"./IconClose-ChNP3VSq.js";import{s as Z}from"./shadow-DVq_1U2q.js";const N=({children:e,type:r="default",className:n="",...l})=>{const f=()=>{switch(r){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(ge,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(me,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(pe,{$type:r,className:n,...l,children:f()})},pe=s.label`
  ${D.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${i.light["fg-neutral-strong"]};
`,ge=s.span`
  ${D.caption2}
  color: ${o.red[500]};
  margin-left: ${a.gap["gap-0.5"]};
`,me=s.span`
  ${D.body2}
  color: ${i.light["fg-neutral-alternative"]};
  margin-left: ${a.gap["gap-0.5"]};
`;N.displayName="Label";N.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F=({children:e,status:r="default",leadingIcon:n=!1,className:l="",...f})=>{const p=()=>{if(!n)return null;switch(r){case"negative":return t.jsx(he,{children:t.jsx(A,{})});case"positive":return t.jsx(ve,{children:t.jsx(_,{})});default:return null}};return t.jsxs(fe,{status:r,className:l,...f,children:[p(),t.jsx("span",{children:e})]})},fe=s.div`
  ${T("ko","caption2","regular")}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${a.gap["gap-1"]};
  color: ${({status:e})=>{switch(e){case"negative":return O.light["fg-negative-primary"];case"positive":return M.light["fg-positive-primary"];default:return i.light["fg-neutral-assistive"]}}};
`,B=s.div`
  width: 16px;
  height: 16px;
  margin-right: ${a.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,he=s(B)`
  color: ${O.light["fg-negative-primary"]};
`,ve=s(B)`
  color: ${M.light["fg-positive-primary"]};
`;F.displayName="Description";F.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Y=c.forwardRef(({size:e="medium",status:r="default",disabled:n=!1,active:l=!1,focused:f=!1,placeholder:p,value:b,type:y="text",onChange:x,onFocus:g,onBlur:j,className:$="",...w},I)=>{const[h,S]=c.useState(!1),[q,v]=c.useState(f);c.useEffect(()=>{v(f)},[f]);const E=d=>{v(!0),g==null||g(d)},V=d=>{v(!1),j==null||j(d)},m=y==="password"&&b&&b.trim()!==""?{icon:h?"visibility-on":"visibility-off",color:i.light["fg-neutral-primary"]}:n?r==="positive"?{icon:"circlecheck",color:M.light["fg-positive-primary"]}:null:r==="negative"?l?null:{icon:"error",color:O.light["fg-negative-primary"]}:r==="positive"?l?null:{icon:"circlecheck",color:M.light["fg-positive-primary"]}:null;return t.jsxs(ye,{children:[t.jsx(be,{ref:I,type:y==="password"?h?"text":"password":y,value:b,onChange:x,onFocus:E,onBlur:V,placeholder:p,disabled:n,className:$,$size:e,$status:r,$disabled:n,$active:l,$focused:q,...Object.fromEntries(Object.entries(w).filter(([d])=>!["active","focused","status","size"].includes(d)))}),m&&t.jsxs(xe,{$size:e,$color:m.color,onMouseDown:d=>{d.preventDefault(),(m.icon==="visibility-on"||m.icon==="visibility-off")&&S(!h)},type:"button",children:[m.icon==="error"&&t.jsx(A,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:m.color}),m.icon==="circlecheck"&&t.jsx(_,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:m.color}),m.icon==="visibility-on"&&t.jsx(le,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:m.color}),m.icon==="visibility-off"&&t.jsx(oe,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:m.color})]})]})}),ye=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,be=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${C["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e})=>{const r=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],l=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${l}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${l}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${l}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:r,$active:n,$focused:l})=>r?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${u.light["color-border-primary"]};
      `:e==="default"?n&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:n&&!l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:!n&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:e==="negative"?n&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${o.red[500]};
        `:!n&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${o.red[500]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-negative"]};
        `:e==="positive"?n&&l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-focused"]};
        `:n&&!l?`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${i.light["fg-neutral-primary"]};
          border-color: ${u.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${i.light["fg-neutral-primary"]};
      border-color: ${u.light["color-border-primary"]};
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
`,xe=s.button`
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
`;Y.displayName="Input";Y.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}},composes:["Omit"]};const z=c.forwardRef(({label:e,labelType:r="default",description:n,descriptionLeadingIcon:l=!1,size:f="medium",status:p="default",disabled:b=!1,placeholder:y,value:x,type:g="text",onChange:j,onFocus:$,onBlur:w,className:I="",...h},S)=>{const[q,v]=c.useState(!1),[E,V]=c.useState(!1),R=d=>{v(!0),V(!0),$==null||$(d)},m=d=>{v(!1),V(!1),w==null||w(d)};return t.jsxs($e,{className:I,children:[e&&t.jsx(N,{type:r,children:e}),t.jsx(Y,{ref:S,size:f,status:p,disabled:b,active:E,focused:q,placeholder:y,value:x,type:g,onChange:j,onFocus:R,onBlur:m,...h}),n&&t.jsx(F,{status:p,leadingIcon:l,children:n})]})}),$e=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
`;z.displayName="TextField";z.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const ee=({size:e="medium",disabled:r=!1,active:n=!1,focused:l=!1,placeholder:f="선택해주세요.",value:p,options:b=[],onChange:y,onFocus:x,onBlur:g,className:j=""})=>{const[$,w]=c.useState(!1),[I,h]=c.useState(n),[S,q]=c.useState(l),v=c.useRef(null);c.useEffect(()=>{const d=L=>{v.current&&!v.current.contains(L.target)&&(w(!1),q(!1))};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[]),c.useEffect(()=>{h(n)},[n]),c.useEffect(()=>{q(l)},[l]);const E=b.find(d=>d.value===p),V=()=>{r||(w(!$),$?(q(!1),h(!1),g==null||g({})):(q(!0),h(!0),x==null||x({})))},R=d=>{y==null||y(d.value),w(!1),q(!1),g==null||g({})},m=()=>r?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"];return t.jsxs(we,{ref:v,className:j,children:[t.jsxs(Te,{size:e,disabled:r,active:I,focused:S,onClick:V,type:"button","data-active":I?"true":"false",children:[t.jsx(qe,{children:E?E.label:f}),t.jsx(ke,{size:e,children:$?t.jsx(K,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:m()}):t.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:m()})})]}),$&&t.jsx(je,{size:e,children:b.map(d=>t.jsx(Ie,{onClick:()=>R(d),$isSelected:d.value===p,children:d.label},d.value))})]})},we=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Te=s.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${C["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({size:e})=>{const r=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],l=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${l}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${l}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${l}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({disabled:e,active:r,focused:n})=>e?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${u.light["color-border-primary"]};
        cursor: not-allowed;
      `:r&&n?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${u.light["color-border-focused"]};
      `:r?`
        background-color: ${o.common[100]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${u.light["color-border-primary"]};
      `:n?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-alternative"]};
        border-color: ${u.light["color-border-focused"]};
      `:`
      background-color: ${o.common[100]};
      color: ${i.light["fg-neutral-alternative"]};
      border-color: ${u.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }
`,qe=s.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ke=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`,je=s.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${o.common[100]};
  border: 1px solid ${u.light["color-border-primary"]};
  border-radius: ${C["rounded-2"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`,Ie=s.div`
  padding: ${a.gap["gap-2"]};
  cursor: pointer;
  ${T("ko","body3","regular")}
    color: ${({$isSelected:e})=>e?i.light["fg-neutral-primary"]:i.light["fg-neutral-alternative"]};
  background-color: ${({$isSelected:e})=>e?o.gray[50]:"transparent"};

  &:hover {
    background-color: ${o.gray[50]};
  }

  &:first-child {
    border-radius: ${C["rounded-2"]} ${C["rounded-2"]} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${C["rounded-2"]} ${C["rounded-2"]};
  }
`;ee.displayName="Select";ee.__docgenInfo={description:"",methods:[],displayName:"Select",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const P=({children:e,className:r,...n})=>t.jsx(Ee,{className:r,...n,children:e}),Ee=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1"]};
  box-shadow: ${Z.light["shadow-md"]};
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
`;P.displayName="Menu";P.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W=({disable:e=!1,active:r=!1,leadingIcon:n,text:l,description:f,trailingIcon:p,onClick:b,className:y})=>{const x=()=>e?i.light["fg-neutral-disable"]:i.light["fg-neutral-primary"],g=()=>r&&!e;return t.jsxs(Re,{disable:e,active:r,"data-disable":e,onClick:e?void 0:b,className:y,children:[n&&t.jsx(Ve,{children:t.jsx(n,{width:16,height:16,color:x()})}),t.jsxs(Ce,{children:[l&&t.jsx(Se,{children:l}),f&&t.jsx(Le,{children:f})]}),g()&&t.jsx(Me,{children:p?t.jsx(p,{width:16,height:16,color:x()}):t.jsx(se,{width:16,height:16,color:x()})})]})},Re=s.div`
  display: flex;
  align-items: center;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1.5"]} ${a.gap["gap-2"]};
  border-radius: ${C["rounded-1"]};
  background-color: ${o.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${o.gray[50]};
  }
`,Ve=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ce=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,Se=s.div`
  ${T("ko","body2","regular")}
  color: inherit;
`,Le=s.div`
  ${T("ko","caption2","regular")}
  color: ${i.light["fg-neutral-alternative"]};
`,Me=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;W.displayName="Cell";W.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const te=({size:e="medium",disabled:r=!1,active:n=!1,focused:l=!1,placeholder:f="선택해주세요.",value:p,options:b=[],label:y,labelType:x="default",description:g,descriptionLeadingIcon:j=!1,status:$="default",onChange:w,onFocus:I,onBlur:h,className:S="",...q})=>{const[v,E]=c.useState(!1),[V,R]=c.useState(n),[m,d]=c.useState(l),L=c.useRef(null);c.useEffect(()=>{const k=ie=>{L.current&&!L.current.contains(ie.target)&&(E(!1),d(!1))};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),c.useEffect(()=>{R(n)},[n]),c.useEffect(()=>{d(l)},[l]);const G=b.find(k=>k.value===p),ae=()=>{r||(E(!v),v?(d(!1),R(!1),h==null||h({})):(d(!0),R(!0),I==null||I({})))},ne=k=>{w==null||w(k.value),E(!1),d(!1),h==null||h({})},U=()=>r?i.light["fg-neutral-alternative"]:i.light["fg-neutral-primary"];return t.jsxs(Ne,{ref:L,className:`dropdown-container ${S}`,...Object.fromEntries(Object.entries(q).filter(([k])=>!["active","focused","size","disabled"].includes(k))),children:[y&&t.jsx(N,{type:x,children:y}),t.jsxs(Fe,{$size:e,$disabled:r,$active:V,$focused:m,onClick:ae,type:"button","data-active":V?"true":"false",children:[t.jsx(He,{children:G?G.label:f}),t.jsx(Oe,{size:e,children:v?t.jsx(K,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:U()}):t.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:U()})})]}),g&&!v&&t.jsx(F,{status:$,leadingIcon:j,children:g}),v&&t.jsx(P,{children:b.map(k=>t.jsx(W,{text:k.label,active:k.value===p,onClick:()=>ne(k)},k.value))})]})},Ne=s.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  width: 100%;
`,Fe=s.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${C["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e})=>{const r=e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"],l=(e==="small"?16:e==="large"?24:20)+parseInt(r)*2;switch(e){case"small":return`
          height: 32px;
          ${T("ko","body2","regular")}
          padding: ${a.gap["gap-1"]} ${a.gap["gap-2"]};
          padding-right: ${l}px;
        `;case"large":return`
          height: 48px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-3"]} ${a.gap["gap-2.5"]};
          padding-right: ${l}px;
        `;default:return`
          height: 40px;
          ${T("ko","body3","regular")}
          padding: ${a.gap["gap-2"]} ${a.gap["gap-2"]};
          padding-right: ${l}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:r,$focused:n})=>e?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-disable"]};
        border-color: ${u.light["color-border-primary"]};
        cursor: not-allowed;
      `:r&&n?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${u.light["color-border-focused"]};
      `:r?`
        background-color: ${o.common[100]};
        color: ${i.light["fg-neutral-primary"]};
        border-color: ${u.light["color-border-primary"]};
      `:n?`
        background-color: ${o.gray[50]};
        color: ${i.light["fg-neutral-alternative"]};
        border-color: ${u.light["color-border-focused"]};
      `:`
      background-color: ${o.common[100]};
      color: ${i.light["fg-neutral-alternative"]};
      border-color: ${u.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${o.gray[50]};
    border-color: ${o.gray[300]};
  }
`,He=s.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Oe=s.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?a.gap["gap-2.5"]:a.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;te.displayName="Dropdown";te.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const De=J`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,_e=J`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(40px);
  }
`,re=({children:e,description:r,variant:n="default",placement:l="top-right",offset:f=40,onClose:p,showLeadingIcon:b=!0,showTrailingIcon:y=!0,showDivider:x=!1,className:g="",autoClose:j=!1,autoCloseDelay:$=3e3,...w})=>{const[I,h]=c.useState(!1),[S,q]=c.useState(!1);c.useEffect(()=>{if(h(!0),j){const R=setTimeout(()=>{q(!0)},$);return()=>clearTimeout(R)}},[j,$]);const v=()=>{q(!0),setTimeout(()=>{p==null||p()},500)},E=()=>{if(!b)return null;switch(n){case"positive":return t.jsx(_,{width:20,height:20,color:"currentColor"});case"negative":return t.jsx(A,{width:20,height:20,color:"currentColor"});case"cautionary":return t.jsx(ce,{width:20,height:20,color:"currentColor"});case"default":default:return t.jsx(de,{width:20,height:20,color:"currentColor"})}},V=()=>y?t.jsx(Ge,{onClick:v,children:t.jsx(ue,{width:16,height:16,color:"currentColor"})}):null;return t.jsxs(Ae,{$variant:n,$placement:l,$offset:f,$isVisible:I,$isExiting:S,className:g,...Object.fromEntries(Object.entries(w).filter(([R])=>!["variant","placement","offset"].includes(R))),children:[b&&t.jsx(Ye,{$variant:n,children:t.jsx(X,{children:E()})}),t.jsxs(Pe,{children:[t.jsx("div",{children:e}),r&&t.jsx("div",{children:r})]}),x&&t.jsx(We,{$variant:n}),y&&t.jsx(X,{children:V()})]})},Ae=s.div`
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: ${a.gap["gap-3"]} ${a.gap["gap-2"]};
  background-color: ${o.gray[950]};
  border-radius: ${C["rounded-2"]};
  box-shadow: ${Z.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* Placement positioning */
  ${({$placement:e,$offset:r})=>{switch(e){case"top-left":return`
          top: ${r}px;
          left: ${r}px;
        `;case"top-center":return`
          top: ${r}px;
          left: 50%;
          transform: translateX(-50%);
        `;case"top-right":return`
          top: ${r}px;
          right: ${r}px;
        `;case"bottom-left":return`
          bottom: ${r}px;
          left: ${r}px;
        `;case"bottom-center":return`
          bottom: ${r}px;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom-right":return`
          bottom: ${r}px;
          right: ${r}px;
        `;default:return`
          top: ${r}px;
          right: ${r}px;
        `}}}

  /* 애니메이션 상태에 따른 스타일 */
  ${({$isVisible:e,$isExiting:r})=>r?H`
          animation: ${_e} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `:e?H`
          animation: ${De} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `:H`
          opacity: 0;
          transform: translateY(40px);
        `}
`,X=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`,Ye=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${a.gap["gap-1"]};
    color: ${({$variant:e})=>{switch(e){case"positive":return o.green[500];case"negative":return o.red[500];case"cautionary":return o.yellow[500];case"default":default:return o.common[100]}}};
`,Pe=s.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${o.common[100]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${T("ko","body2","medium")}
    color: ${o.common[100]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${T("ko","caption2","regular")}
    color: ${o.gray[800]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,We=s.div`
  width: 1px;
  background-color: ${o.gray[925]};
  margin: 0 ${a.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`,Ge=s.button`
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
    color: ${o.common[100]};
  }
`;re.displayName="Toast";re.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "positive" | "negative" | "cautionary"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"cautionary"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},placement:{required:!1,tsType:{name:"union",raw:'"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"top-right"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},autoClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoCloseDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"3000",computed:!1}}},composes:["Omit"]};export{W as C,F as D,Y as I,N as L,P as M,ee as S,z as T,te as a,re as b};
