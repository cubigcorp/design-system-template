import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-L1CEGzuW.js";import{d as s,l as M}from"./styled-components.browser.esm-CPJhxV7n.js";import{L as B,D}from"./Description-CgJdkAhF.js";import{c as f}from"./color-CiwAFuFb.js";import{t as r}from"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import{p as P,n as G}from"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import{b as g}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as y}from"./typography-hbgufnaT.js";import{r as L}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{a as A,I as W,b as Y,c as J,d as K,e as Q}from"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{A as U}from"./AvatarGroup-CX5JjXbm.js";const V=m.forwardRef(({size:e="medium",status:t="default",disabled:n=!1,active:l=!1,focused:o=!1,placeholder:c,value:d,type:u="text",onChange:v,onFocus:x,onBlur:b,className:$="",lang:I,...R},k)=>{const[T,j]=m.useState(!1),[C,q]=m.useState(o);m.useEffect(()=>{q(o)},[o]);const w=h=>{q(!0),x==null||x(h)},E=h=>{q(!1),b==null||b(h)},p=u==="password"&&d&&d.trim()!==""?{icon:T?"visibility-on":"visibility-off",color:r.light["fg-neutral-primary"]}:n?t==="positive"?{icon:"circlecheck",color:P.light["fg-positive-primary"]}:null:t==="negative"?l?null:{icon:"error",color:G.light["fg-negative-primary"]}:t==="positive"?l?null:{icon:"circlecheck",color:P.light["fg-positive-primary"]}:null,N=I;return a.jsxs(X,{children:[a.jsx(Z,{ref:k,type:u==="password"?T?"text":"password":u,value:d,onChange:v,onFocus:w,onBlur:E,placeholder:c,disabled:n,className:$,$size:e,$status:t,$disabled:n,$active:l,$focused:C,lang:N,...Object.fromEntries(Object.entries(R).filter(([h])=>!["active","focused","status","size"].includes(h)))}),p&&a.jsxs(z,{$size:e,$color:p.color,onMouseDown:h=>{h.preventDefault(),(p.icon==="visibility-on"||p.icon==="visibility-off")&&j(!T)},type:"button",children:[p.icon==="error"&&a.jsx(A,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:p.color}),p.icon==="circlecheck"&&a.jsx(W,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:p.color}),p.icon==="visibility-on"&&a.jsx(Y,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:p.color}),p.icon==="visibility-off"&&a.jsx(J,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:p.color})]})]})}),X=s.div`
  position: relative;
  display: inline-block;
  width: 100%;
`,Z=s.input`
  width: 100%;
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-radius: ${L["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  transition: all 0.2s ease-in-out;

  font-family: inherit;

  /* Size styles */
  ${({$size:e,lang:t="ko"})=>{const n=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],o=(e==="small"?16:e==="large"?24:20)+parseInt(n)*2;switch(e){case"small":return`
          height: 32px;
          ${y(t,"body2","regular")}
          padding: ${i.gap["gap-1"]} ${i.gap["gap-2"]};
          padding-right: ${o}px;
        `;case"large":return`
          height: 48px;
          ${y(t,"body3","regular")}
          padding: ${i.gap["gap-3"]} ${i.gap["gap-2.5"]};
          padding-right: ${o}px;
        `;default:return`
          height: 40px;
          ${y(t,"body3","regular")}
          padding: ${i.gap["gap-2"]} ${i.gap["gap-2"]};
          padding-right: ${o}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$status:e,$disabled:t,$active:n,$focused:l})=>t?`
        background-color: ${f.gray[50]};
        color: ${r.light["fg-neutral-disable"]};
        border-color: ${g.light["color-border-primary"]};
      `:e==="default"?n&&l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-focused"]};
        `:n&&!l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-primary"]};
        `:!n&&l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-focused"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-primary"]};
        `:e==="negative"?n&&l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${f.red[500]};
        `:!n&&l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${f.red[500]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-negative"]};
        `:e==="positive"?n&&l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-focused"]};
        `:n&&!l?`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-primary"]};
        `:`
          background-color: transparent;
          color: ${r.light["fg-neutral-primary"]};
          border-color: ${g.light["color-border-primary"]};
        `:`
      background-color: transparent;
      color: ${r.light["fg-neutral-primary"]};
      border-color: ${g.light["color-border-primary"]};
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
  right: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
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
`;V.displayName="Input";V.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}},composes:["Omit"]};const H=m.forwardRef(({label:e,labelType:t="default",description:n,descriptionLeadingIcon:l=!1,size:o="medium",status:c="default",disabled:d=!1,placeholder:u,value:v,type:x="text",onChange:b,onFocus:$,onBlur:I,className:R="",lang:k,...T},j)=>{const[C,q]=m.useState(!1),[w,E]=m.useState(!1),S=k,p=h=>{q(!0),E(!0),$==null||$(h)},N=h=>{q(!1),E(!1),I==null||I(h)};return a.jsxs(ee,{className:R,children:[e&&a.jsx(B,{type:t,lang:S,children:e}),a.jsx(V,{ref:j,size:o,status:c,disabled:d,active:w,focused:C,placeholder:u,value:v,type:x,onChange:b,onFocus:p,onBlur:N,lang:S,...T}),n&&a.jsx(D,{status:c,leadingIcon:l,lang:S,children:n})]})}),ee=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`;H.displayName="TextField";H.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:'"text" | "password"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"password"'}]},description:"",defaultValue:{value:'"text"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const O=m.forwardRef(({size:e="medium",disabled:t=!1,focused:n=!1,placeholder:l,value:o,onChange:c,onFocus:d,onBlur:u,className:v="",style:x,lang:b,...$},I)=>{const[R,k]=m.useState(n);m.useEffect(()=>{k(n)},[n]);const T=m.useMemo(()=>typeof o=="string"?o.trim().length>0:!1,[o]),j=b,C=w=>{k(!0),d==null||d(w)},q=w=>{k(!1),u==null||u(w)};return a.jsx(te,{className:v,style:x,children:a.jsxs(ae,{$size:e,$disabled:t,$focused:R,lang:j,children:[a.jsx(ne,{$size:e,$disabled:t,children:a.jsx(K,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:t?r.light["fg-neutral-disable"]:r.light["fg-neutral-alternative"]})}),a.jsx(re,{ref:I,disabled:t,placeholder:l,value:o,onChange:c,onFocus:C,onBlur:q,$size:e,$disabled:t,$filled:T,$focused:R,lang:j,...$}),!t&&T&&a.jsx(ie,{$size:e,$color:r.light["fg-neutral-assistive"],type:"button",onMouseDown:w=>{w.preventDefault()},onClick:()=>{c==null||c({target:{value:""}})},children:a.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:r.light["fg-neutral-assistive"]})})]})})}),te=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1"]};
`,ae=s.div`
  position: relative;
  width: 100%;
  background-color: ${f.gray[50]};
  border-radius: ${L["rounded-2"]};
  border: ${({$focused:e})=>e?"1.8px solid":"1px solid"};
  border-color: ${({$focused:e})=>e?g.light["color-border-focused"]:g.light["color-border-primary"]};
  transition: all 0.2s ease-in-out;

  font-family: inherit;

  ${({$size:e,lang:t="ko"})=>{switch(e){case"small":return`
          height: 32px;
          ${y(t,"body2","regular")}
        `;case"large":return`
          height: 48px;
          ${y(t,"body3","regular")}
        `;default:return`
          height: 40px;
          ${y(t,"body3","regular")}
        `}}}
`,re=s.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: ${({$disabled:e,$filled:t})=>e?r.light["fg-neutral-disable"]:t?r.light["fg-neutral-primary"]:r.light["fg-neutral-assistive"]};

  &::placeholder {
    color: ${r.light["fg-neutral-assistive"]};
    opacity: 1;
  }

  ${({$size:e})=>{const t=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],n=e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"],l=e==="small"?i.gap["gap-1.5"]:e==="large"?i.gap["gap-3"]:i.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(t)*2;return`
      padding: ${l} ${n};
      padding-left: ${c}px;
    `}}
`,ne=s.div`
  position: absolute;
  left: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  height: ${({$size:e})=>e==="small"?16:e==="large"?24:20}px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ie=s.button`
  position: absolute;
  right: ${({$size:e})=>e==="large"?i.gap["gap-2.5"]:i.gap["gap-2"]};
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
`;O.displayName="Searchfield";O.__docgenInfo={description:"",methods:[],displayName:"Searchfield",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const _=m.createContext({iconOnly:!1}),F=()=>m.useContext(_),le=({children:e,className:t,lang:n,style:l,bottom:o,title:c,iconOnly:d=!1})=>a.jsx(_.Provider,{value:{iconOnly:d},children:a.jsxs(oe,{className:t,lang:n,style:l,$iconOnly:d,children:[c&&(typeof c=="string"?!d&&a.jsx(ce,{lang:n,children:c}):a.jsx(de,{children:c})),a.jsx(ue,{children:e}),o&&a.jsx(se,{$iconOnly:d,children:o})]})}),oe=s.nav`
  ${y(void 0,"body3","medium")}

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${({$iconOnly:e})=>e?i.gap["gap-2"]:i.gap["gap-4"]};
  width: 100%;
  height: 100%;
`,se=s.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`,ce=s.div`
  ${y(void 0,"body3","medium")}
  color: ${r.light["fg-neutral-strong"]};
  margin-bottom: ${i.gap["gap-5"]};
`,de=s.div`
  margin-bottom: ${i.gap["gap-5"]};
`,ue=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-2"]};
`;le.__docgenInfo={description:"",methods:[],displayName:"LNB",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},bottom:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const pe=({value:e,selected:t=!1,disabled:n=!1,leadingIcon:l,iconOnly:o,onClick:c,className:d,lang:u="ko",style:v})=>{const{iconOnly:x}=F(),b=o??x,$=n?r.light["fg-neutral-disable"]:r.light["fg-neutral-primary"];return a.jsxs(me,{type:"button",onClick:n?void 0:c,$selected:t,$disabled:n,$iconOnly:b,className:d,lang:u,style:v,children:[l&&a.jsx(ge,{children:a.jsx(l,{width:20,height:20,color:$})}),!b&&a.jsx(fe,{lang:u,children:e})]})},me=s.button`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${L["rounded-2"]};
  background-color: ${({$selected:e})=>e?f.gray[50]:f.common[100]};
  color: ${({$disabled:e})=>e?r.light["fg-neutral-disable"]:r.light["fg-neutral-primary"]};
  text-align: left;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${f.gray[50]};
  }

  &:active {
    background-color: ${f.gray[100]};
  }
`,ge=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,fe=s.span`
  ${y(void 0,"body2","medium")}
  font-family: inherit;
`;pe.__docgenInfo={description:"",methods:[],displayName:"LNBItem",props:{value:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},iconOnly:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const he=({title:e,children:t,lang:n,className:l,style:o})=>{const{iconOnly:c}=F();return a.jsxs(ye,{className:l,style:o,children:[!c&&e&&a.jsx(ve,{lang:n,children:e}),a.jsx(be,{children:t})]})},ye=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`,ve=s.div`
  ${y(void 0,"body2","regular")}
  color: ${r.light["fg-neutral-alternative"]};
  font-family: inherit;
`,be=s.div`
  display: flex;
  flex-direction: column;
  gap: ${i.gap["gap-1.5"]};
`;he.__docgenInfo={description:"",methods:[],displayName:"LNBItemGroup",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const xe=({name:e,avatarSrc:t,avatarType:n="custom",onClick:l,className:o,lang:c="ko",style:d,trailingIcon:u})=>{const{iconOnly:v}=F();return a.jsxs($e,{type:"button",onClick:l,className:o,lang:c,style:d,$iconOnly:v,children:[a.jsx(U,{type:n,size:"x-small",src:t,value:e}),!v&&a.jsxs(a.Fragment,{children:[a.jsx(we,{lang:c,children:e}),u&&a.jsx(Te,{children:a.jsx(u,{width:20,height:20,color:r.light["fg-neutral-primary"]})})]})]})},$e=s.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: ${({$iconOnly:e})=>e?"center":"flex-start"};
  gap: ${i.gap["gap-1.5"]};
  padding: ${i.gap["gap-2"]};
  border: 0;
  border-radius: ${L["rounded-2"]};
  background-color: ${f.common[100]};
  color: ${r.light["fg-neutral-primary"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${f.gray[50]};
  }

  &:active {
    background-color: ${f.gray[100]};
  }
`,we=s.span`
  ${y(void 0,"body2","medium")}
  flex: 1;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: inherit;
`,Te=s.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;xe.__docgenInfo={description:"",methods:[],displayName:"LNBItemProfile",props:{name:{required:!0,tsType:{name:"string"},description:""},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarType:{required:!1,tsType:{name:"union",raw:'"default" | "custom" | "initial"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"initial"'}]},description:"",defaultValue:{value:'"custom"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:`React.ComponentType<{
  width?: number;
  height?: number;
  color?: string;
}>`,elements:[{name:"signature",type:"object",raw:`{
  width?: number;
  height?: number;
  color?: string;
}`,signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""}}};const qe=({orientation:e="horizontal",thickness:t=1,className:n,style:l})=>a.jsx(Ie,{$orientation:e,$thickness:t,className:n,style:l}),Ie=s.div`
  background-color: ${f.gray[200]};

  ${({$orientation:e,$thickness:t})=>e==="horizontal"?M`
          width: 100%;
          height: ${t}px;
        `:M`
          width: ${t}px;
          height: 100%;
        `}
`;qe.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{qe as D,V as I,le as L,O as S,H as T,pe as a,xe as b,he as c};
