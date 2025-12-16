import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CLq260Vv.js";import{d as p}from"./styled-components.browser.esm-NAFAd1pi.js";import{L as Q,D as U}from"./Description-Ds4hNMff.js";import{s as o}from"./spacing-tE1IiUFl.js";import{r as X}from"./radius-DaoU83SK.js";import{c}from"./color-CiwAFuFb.js";import{t as l}from"./textColor-DLZeZODc.js";import{b as T}from"./borderColor-C_RHITEf.js";import{t as q}from"./typography-hbgufnaT.js";const A=a.forwardRef(({label:e,labelType:C="default",description:x,descriptionLeadingIcon:L=!1,status:b="default",disabled:r=!1,active:k=!1,focused:V=!1,placeholder:H,value:f="",showCharacterCounter:R=!1,maxCount:s,maxHeight:m=232,onChange:g,onFocus:v,onBlur:h,className:M="",lang:j,...F},I)=>{const[$,w]=a.useState(V),[D,E]=a.useState(k),[N,S]=a.useState(f),y=a.useRef(null),i=j;a.useImperativeHandle(I,()=>y.current);const u=f!==void 0?f:N,_=u.length,z=()=>{const t=y.current;if(t){t.style.height="auto";const d=Math.min(t.scrollHeight,m);t.style.height=`${d}px`}};a.useEffect(()=>{z()},[u,m]);const B=t=>{w(!0),E(!0),v==null||v(t)},W=t=>{w(!1),E(!1),h==null||h(t)},G=t=>{const d=t.target.value;s&&d.length>s||(S(d),g==null||g(t))},J=()=>r?l.light["fg-neutral-disable"]:D||u?l.light["fg-neutral-primary"]:l.light["fg-neutral-assistive"],K=()=>r?l.light["fg-neutral-disable"]:l.light["fg-neutral-alternative"],O=()=>r?T.light["color-border-primary"]:$?T.light["color-border-focused"]:T.light["color-border-primary"],P=()=>r?c.gray[50]:c.common[100];return n.jsxs(Y,{className:M,children:[e&&n.jsx(Q,{type:C,lang:i,children:e}),n.jsxs(Z,{$disabled:r,$focused:$,$borderColor:O(),$backgroundColor:P(),children:[n.jsx(ee,{ref:y,placeholder:H,value:u,disabled:r,onChange:G,onFocus:B,onBlur:W,$textColor:J(),$maxHeight:m,lang:i,...F}),R&&s&&n.jsxs(te,{$color:K(),lang:i,children:[_,"/",s]})]}),x&&n.jsx(U,{status:b==="default"?void 0:b==="error"?"negative":"positive",leadingIcon:L,lang:i,children:x})]})}),Y=p.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
`,Z=p.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-3"]};
  min-height: 80px;
  padding: ${o.gap["gap-3"]} ${o.gap["gap-2.5"]};
  border: 1px solid ${({$borderColor:e})=>e};
  border-radius: ${X["rounded-2"]};
  background-color: ${({$backgroundColor:e})=>e};
  cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  transition: border-color 0.2s ease-in-out;
`,ee=p.textarea`
  min-height: 48px;
  max-height: ${({$maxHeight:e})=>e}px;
  padding: 0 ${o.gap["gap-1"]};
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  overflow-y: auto;
  ${({lang:e})=>q(e,"body3","regular")}
  color: ${({$textColor:e})=>e};
  font-family: inherit;

  &::placeholder {
    color: ${l.light["fg-neutral-assistive"]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${c.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${c.gray[400]};
  }
`,te=p.span`
  ${({lang:e})=>q(e,"body2","regular")}
  color: ${({$color:e})=>e};
  text-align: left;
  font-family: inherit;
`;A.displayName="TextArea";A.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Label 텍스트"},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"Label 타입",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description 텍스트"},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Description 앞 아이콘 표시 여부",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"상태",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"포커스 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder"},value:{required:!1,tsType:{name:"string"},description:"값",defaultValue:{value:'""',computed:!1}},showCharacterCounter:{required:!1,tsType:{name:"boolean"},description:"글자수 카운터 표시 여부",defaultValue:{value:"false",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"최대 글자수"},maxHeight:{required:!1,tsType:{name:"number"},description:"최대 높이 (px)",defaultValue:{value:"232",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"변경 이벤트"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"언어 설정"}}};export{A as T};
