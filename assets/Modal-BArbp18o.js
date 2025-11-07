import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as v,d as l}from"./textColor-Dt7bNVQe.js";import{c as d}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import{p as K,n as Q}from"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as $}from"./borderColor-C_RHITEf.js";import{l as Z}from"./layerColor-7aOJUZki.js";import{f as D}from"./fontFamily-CsG1KcIF.js";import{t as j,a as me}from"./typography-BBThIZ7c.js";import{s as r}from"./spacing-tE1IiUFl.js";import{I as fe,a as ge,b as ee,c as te,d as ve}from"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{r as s,R as ae}from"./iframe-7NLoKurR.js";import{r as re}from"./index-SjQIEdkG.js";import{M as ne,C as oe}from"./Cell-D2pfdMqd.js";import{r as N}from"./radius-DaoU83SK.js";import{s as he}from"./shadow-DVq_1U2q.js";const A=({children:e,type:a="default",className:o="",lang:u,...p})=>{const f=u,g=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(be,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(xe,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ye,{$type:a,lang:f,className:o,...p,children:g()})},ye=l.label`
  ${j(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${D.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${D.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${v.light["fg-neutral-strong"]};
`,be=l.span`
  ${j(void 0,"caption2","regular")}
  color: ${d.red[500]};
  margin-left: ${r.gap["gap-0.5"]};
`,xe=l.span`
  ${j(void 0,"body2","regular")}
  color: ${v.light["fg-neutral-alternative"]};
  margin-left: ${r.gap["gap-0.5"]};
`;A.displayName="Label";A.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const W=({children:e,status:a="default",leadingIcon:o=!1,className:u="",lang:p,...f})=>{const g=p,h=()=>{if(!o)return null;switch(a){case"negative":return t.jsx($e,{children:t.jsx(ge,{})});case"positive":return t.jsx(Te,{children:t.jsx(fe,{})});default:return null}};return t.jsxs(we,{status:a,lang:g,className:u,...f,children:[h(),t.jsx("span",{children:e})]})},we=l.div`
  ${j(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${D.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${D.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return Q.light["fg-negative-primary"];case"positive":return K.light["fg-positive-primary"];default:return v.light["fg-neutral-assistive"]}}};
`,le=l.div`
  width: 16px;
  height: 16px;
  margin-right: ${r.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,$e=l(le)`
  color: ${Q.light["fg-negative-primary"]};
`,Te=l(le)`
  color: ${K.light["fg-positive-primary"]};
`;W.displayName="Description";W.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Y=({size:e="medium",disabled:a=!1,active:o=!1,focused:u=!1,placeholder:p="선택해주세요.",value:f,options:g=[],onChange:h,onFocus:w,onBlur:y,className:L="",style:S,lang:k="ko",...V})=>{const[m,b]=s.useState(!1),[R,c]=s.useState(o),[M,x]=s.useState(u),[q,I]=s.useState({top:0,left:0,width:0}),T=s.useRef(null),H=s.useRef(null);s.useEffect(()=>{const i=C=>{const F=C.target;H.current&&H.current.contains(F)||T.current&&!T.current.contains(F)&&(b(!1),x(!1))};return document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[]),s.useEffect(()=>{c(o)},[o]),s.useEffect(()=>{x(u)},[u]),s.useEffect(()=>{if(m&&T.current){const i=()=>{if(T.current){const C=T.current.getBoundingClientRect();I({top:C.bottom+window.scrollY,left:C.left+window.scrollX,width:C.width})}};return i(),window.addEventListener("scroll",i,!0),window.addEventListener("resize",i),()=>{window.removeEventListener("scroll",i,!0),window.removeEventListener("resize",i)}}},[m]);const O=g.find(i=>i.value===f),_=()=>{a||(b(!m),m?(x(!1),c(!1),y==null||y({})):(x(!0),c(!0),w==null||w({})))},P=i=>{h==null||h(i.value),b(!1),x(!1),y==null||y({})},B=()=>a?v.light["fg-neutral-alternative"]:v.light["fg-neutral-primary"];return t.jsxs(Ee,{ref:T,className:`selector-container ${L}`,style:S,...V,children:[t.jsxs(ke,{$size:e,$disabled:a,$active:R,$focused:M,lang:k,onClick:_,type:"button","data-active":R?"true":"false",children:[t.jsx(Re,{children:O?O.label:p}),t.jsx(Ie,{size:e,children:m?t.jsx(ee,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),m&&re.createPortal(t.jsx(je,{ref:H,onMouseDown:i=>i.stopPropagation(),onMouseDownCapture:i=>i.stopPropagation(),onClick:i=>i.stopPropagation(),"data-portal-menu":!0,$top:q.top,$left:q.left,$width:q.width,children:t.jsx(ne,{children:g.map(i=>t.jsx(oe,{text:i.label,active:i.value===f,onClick:C=>{C.stopPropagation(),P(i)}},i.value))})}),document.body)]})},Ee=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;l.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: ${r.gap["gap-1"]};

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const qe=l.div`
  position: absolute;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,je=ae.forwardRef((e,a)=>t.jsx(qe,{ref:a,...e})),ke=l.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${N["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:a="ko"})=>{const o=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],p=(e==="small"?16:e==="large"?24:20)+parseInt(o)*2;switch(e){case"small":return`
          height: 32px;
          ${j(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `;case"large":return`
          height: 48px;
          ${j(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${p}px;
        `;default:return`
          height: 40px;
          ${j(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${d.gray[50]};
        color: ${v.light["fg-neutral-disable"]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${d.gray[50]};
        color: ${v.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        color: ${v.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-primary"]};
      `:o?`
        background-color: ${d.gray[50]};
        color: ${v.light["fg-neutral-alternative"]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      color: ${v.light["fg-neutral-alternative"]};
      border-color: ${$.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${d.gray[50]};
    border-color: ${d.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${d.gray[50]};
    border-color: ${d.gray[300]};
  }
`,Re=l.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ie=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;Y.displayName="Selector";Y.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const z=({size:e="medium",disabled:a=!1,active:o=!1,focused:u=!1,placeholder:p="입력하거나 선택해주세요.",value:f,options:g=[],onChange:h,onFocus:w,onBlur:y,className:L="",style:S,lang:k="ko",...V})=>{const[m,b]=s.useState(!1),[R,c]=s.useState(u),[M,x]=s.useState(f||""),[q,I]=s.useState(!0),[T,H]=s.useState(f||""),[O,_]=s.useState({top:0,left:0,width:0}),P=s.useRef(null),B=s.useRef(null),i=s.useRef(null);s.useEffect(()=>{const n=E=>{const U=E.target;if(!(i.current&&i.current.contains(U))&&P.current&&!P.current.contains(U))if(b(!1),c(!1),I(!1),T){const J=g.find(pe=>pe.value===T);x(J?J.label:"")}else x("")};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[T,g]),s.useEffect(()=>{c(u)},[u]),s.useEffect(()=>{if(m&&P.current){const n=()=>{if(P.current){const E=P.current.getBoundingClientRect();_({top:E.bottom+window.scrollY,left:E.left+window.scrollX,width:E.width})}};return n(),window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n)}}},[m]),s.useEffect(()=>{if(f){const n=g.find(E=>E.value===f);x(n?n.label:f),H(f)}else x(""),H("")},[f,g]);const C=()=>{var n;a||(b(!m),m?I(!1):(c(!0),I(!0),(n=B.current)==null||n.focus()))},F=n=>{const E=n.target.value;x(E),I(!1),m||b(!0)},ue=n=>{c(!0),b(!0),I(!0),w==null||w(n)},de=n=>{c(!1),y==null||y(n)},ce=n=>{x(n.label),H(n.value),h==null||h(n.value),b(!1),c(!1)},G=()=>a?v.light["fg-neutral-alternative"]:v.light["fg-neutral-primary"],X=q?g:g.filter(n=>n.label.toLowerCase().includes(M.toLowerCase()));return t.jsxs(Ce,{ref:P,className:`combobox-container ${L}`,style:S,...V,children:[t.jsxs(Le,{$size:e,$disabled:a,$active:o,$focused:R,lang:k,children:[t.jsx(Se,{ref:B,$size:e,$disabled:a,$active:o,$focused:R,$hasValue:!!M,lang:k,value:M,placeholder:p,disabled:a,onChange:F,onFocus:ue,onBlur:de}),t.jsx(Pe,{size:e,onClick:C,children:m?t.jsx(ee,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:G()}):t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:G()})})]}),m&&X.length>0&&re.createPortal(t.jsx(Me,{ref:i,onMouseDown:n=>n.stopPropagation(),onMouseDownCapture:n=>n.stopPropagation(),onClick:n=>n.stopPropagation(),"data-portal-menu":!0,$top:O.top,$left:O.left,$width:O.width,children:t.jsx(ne,{children:X.map(n=>t.jsx(oe,{text:n.label,active:n.value===T,onClick:E=>{E.stopPropagation(),ce(n)}},n.value))})}),document.body)]})},Ce=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Le=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${N["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-primary"]};
      `:o?`
        background-color: ${d.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      border-color: ${$.light["color-border-primary"]};
    `}
`,Se=l.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const o=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],p=(e==="small"?16:e==="large"?24:20)+parseInt(o)*2;switch(e){case"small":return`
          height: 30px;
          ${j(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `;case"large":return`
          height: 46px;
          ${j(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${p}px;
        `;default:return`
          height: 38px;
          ${j(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:o,$hasValue:u})=>e?`
        color: ${v.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&o?`
        color: ${v.light["fg-neutral-primary"]};
      `:a||u?`
        color: ${v.light["fg-neutral-primary"]};
      `:o?`
        color: ${v.light["fg-neutral-alternative"]};
      `:`
      color: ${v.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${v.light["fg-neutral-alternative"]};
  }
`;l.div`
  position: absolute;
  top: calc(100% + ${r.gap["gap-1"]});
  left: 0;
  right: 0;
  z-index: 1000;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;const Ve=l.div`
  position: absolute;
  top: ${({$top:e})=>e}px;
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,Me=ae.forwardRef((e,a)=>t.jsx(Ve,{ref:a,...e})),Pe=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;z.displayName="ComboBox";z.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const ie=({type:e="selector",size:a="medium",disabled:o=!1,active:u=!1,focused:p=!1,placeholder:f="선택해주세요.",value:g,options:h=[],label:w,labelType:y="default",description:L,descriptionLeadingIcon:S=!1,status:k="default",onChange:V,onFocus:m,onBlur:b,className:R="",style:c,lang:M,...x})=>{const q=M;return t.jsxs(He,{className:`dropdown-container ${R}`,style:c,...Object.fromEntries(Object.entries(x).filter(([I])=>!["active","focused","size","disabled"].includes(I))),children:[w&&t.jsx(A,{type:y,lang:q,children:w}),e==="combobox"?t.jsx(z,{size:a,disabled:o,active:u,focused:p,placeholder:f,value:g,options:h,onChange:V,onFocus:m,onBlur:b,lang:q}):t.jsx(Y,{size:a,disabled:o,active:u,focused:p,placeholder:f,value:g,options:h,onChange:V,onFocus:m,onBlur:b,lang:q}),L&&t.jsx(W,{status:k,leadingIcon:S,lang:q,children:L})]})},He=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  width: 100%;
`;ie.displayName="Dropdown";ie.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const se=({size:e="medium",position:a="center",open:o=!1,onClose:u,title:p="제목",showCloseButton:f=!0,children:g,actions:h,className:w="",style:y,...L})=>{const[S,k]=s.useState(!1),[V,m]=s.useState(!1);if(s.useEffect(()=>{if(o){m(!0);const c=setTimeout(()=>{k(!0)},10);return()=>clearTimeout(c)}else{k(!1);const c=setTimeout(()=>{m(!1)},200);return()=>clearTimeout(c)}},[o]),!V)return null;const b=c=>{if(c.target.closest("[data-portal-menu]")){c.preventDefault(),c.stopPropagation();return}c.target===c.currentTarget&&(u==null||u())},R=()=>{u==null||u()};return t.jsx(Ne,{$isVisible:S,$position:a,onClick:b,children:t.jsxs(Oe,{$size:e,$isVisible:S,className:w,style:y,...L,children:[t.jsxs(Be,{children:[t.jsx(Fe,{children:p}),f&&t.jsx(De,{onClick:R,children:t.jsx(ve,{width:24,height:24,color:"currentColor"})})]}),t.jsx(_e,{children:g}),h&&t.jsx(Ae,{children:h})]})})},Ne=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Z.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({$position:e})=>{const a=e.startsWith("top-")?"flex-start":e.startsWith("bottom-")?"flex-end":"center",o=e.endsWith("-left")?"flex-start":e.endsWith("-right")?"flex-end":"center";return`
      align-items: ${a};
      justify-content: ${o};
    `}}
`,Oe=l.div`
  background-color: ${Z.light["bg-layer-floating"]};
  border: 1px solid ${$.light["color-border-primary"]};
  border-radius: ${N["rounded-3"]};
  box-shadow: ${he.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: visible;
  transform: ${({$isVisible:e})=>e?"scale(1)":"scale(0.95)"};
  transition: transform 0.2s ease-in-out;

  ${({$size:e})=>{switch(e){case"x-small":return`
          width: 320px;
        `;case"small":return`
          width: 480px;
        `;case"medium":return`
          width: 640px;
        `;case"large":return`
          width: 960px;
        `;default:return`
          width: 500px;
          min-height: 300px;
        `}}}
`,Be=l.div`
  padding: ${r.gap["gap-6"]} ${r.gap["gap-6"]}
    ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  border-radius: ${N["rounded-3"]} ${N["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Fe=l.h2`
  ${me.heading1}
  font-weight: 600;
  color: ${d.gray[950]};
  margin: 0;
`,De=l.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${d.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,_e=l.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  flex: 1;
  overflow: visible;
`,Ae=l.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]}
    ${r.gap["gap-6"]} ${r.gap["gap-6"]};
  display: flex;
  gap: ${r.gap["gap-2"]};
`;l.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${d.common[100]};
  border: 1px solid ${$.light["color-border-primary"]};
  border-radius: ${N["rounded-2"]};
  color: ${d.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${d.gray[50]};
  }
`;l.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${d.gray[950]};
  border: none;
  border-radius: ${N["rounded-2"]};
  color: ${d.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${d.gray[925]};
  }
`;se.displayName="Modal";se.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "center-left"
| "center"
| "center-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"center-left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"center-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{z as C,W as D,A as L,se as M,Y as S,ie as a};
