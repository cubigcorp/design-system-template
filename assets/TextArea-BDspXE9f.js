import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CWj9sbMl.js";import{d as p}from"./styled-components.browser.esm-I1_av-H2.js";import{L as U,D as X}from"./Description-DRonXOGg.js";import{s as o}from"./spacing-tE1IiUFl.js";import{r as Y}from"./radius-DaoU83SK.js";import{c as d}from"./color-CiwAFuFb.js";import{t as s}from"./textColor-DLZeZODc.js";import{b as T}from"./borderColor-C_RHITEf.js";import{t as A}from"./typography-hbgufnaT.js";const L=r.forwardRef(({label:e,labelType:k="default",description:x,descriptionLeadingIcon:V=!1,status:b="default",disabled:n=!1,active:C=!1,focused:H=!1,placeholder:R,value:f,showCharacterCounter:M=!1,maxCount:a,maxHeight:m=232,onChange:g,onFocus:v,onBlur:h,className:j="",lang:F,...I},D)=>{const[$,w]=r.useState(H),[N,E]=r.useState(C),[S,_]=r.useState(f),y=r.useRef(null),i=F;r.useImperativeHandle(D,()=>y.current);const q=f!==void 0?f:S,u=a?(q||"").slice(0,a):q||"",z=u.length,B=()=>{const t=y.current;if(t){t.style.height="auto";const c=Math.min(t.scrollHeight,m);t.style.height=`${c}px`}};r.useEffect(()=>{B()},[u,m]);const W=t=>{w(!0),E(!0),v==null||v(t)},G=t=>{w(!1),E(!1),h==null||h(t)},J=t=>{const c=t.target.value;a&&c.length>a||(_(c),g==null||g(t))},K=()=>n?s.light["fg-neutral-disable"]:N||u?s.light["fg-neutral-primary"]:s.light["fg-neutral-assistive"],O=()=>n?s.light["fg-neutral-disable"]:s.light["fg-neutral-alternative"],P=()=>n?T.light["color-border-primary"]:$?T.light["color-border-focused"]:T.light["color-border-primary"],Q=()=>n?d.gray[50]:d.common[100];return l.jsxs(Z,{className:j,children:[e&&l.jsx(U,{type:k,lang:i,children:e}),l.jsxs(ee,{$disabled:n,$focused:$,$borderColor:P(),$backgroundColor:Q(),children:[l.jsx(te,{ref:y,placeholder:R,value:u,disabled:n,maxLength:a,onChange:J,onFocus:W,onBlur:G,$textColor:K(),$maxHeight:m,lang:i,...I}),M&&a&&l.jsxs(ae,{$color:O(),lang:i,children:[z,"/",a]})]}),x&&l.jsx(X,{status:b==="default"?void 0:b==="error"?"negative":"positive",leadingIcon:V,lang:i,children:x})]})}),Z=p.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-1"]};
`,ee=p.div`
  display: flex;
  flex-direction: column;
  gap: ${o.gap["gap-3"]};
  min-height: 80px;
  padding: ${o.gap["gap-3"]} ${o.gap["gap-2.5"]};
  border: 1px solid ${({$borderColor:e})=>e};
  border-radius: ${Y["rounded-2"]};
  background-color: ${({$backgroundColor:e})=>e};
  cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  transition: border-color 0.2s ease-in-out;
`,te=p.textarea`
  min-height: 48px;
  max-height: ${({$maxHeight:e})=>e}px;
  padding: 0 ${o.gap["gap-1"]};
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  overflow-y: auto;
  ${({lang:e})=>A(e,"body3","regular")}
  color: ${({$textColor:e})=>e};
  font-family: inherit;

  &::placeholder {
    color: ${s.light["fg-neutral-assistive"]};
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
    background: ${d.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${d.gray[400]};
  }
`,ae=p.span`
  ${({lang:e})=>A(e,"body2","regular")}
  color: ${({$color:e})=>e};
  text-align: left;
  font-family: inherit;
`;L.displayName="TextArea";L.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Label 텍스트"},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"Label 타입",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description 텍스트"},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Description 앞 아이콘 표시 여부",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "error" | "success"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"error"'},{name:"literal",value:'"success"'}]},description:"상태",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"포커스 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder"},value:{required:!1,tsType:{name:"string"},description:"값"},showCharacterCounter:{required:!1,tsType:{name:"boolean"},description:"글자수 카운터 표시 여부",defaultValue:{value:"false",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"최대 글자수"},maxHeight:{required:!1,tsType:{name:"number"},description:"최대 높이 (px)",defaultValue:{value:"232",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"변경 이벤트"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"언어 설정"}}};export{L as T};
