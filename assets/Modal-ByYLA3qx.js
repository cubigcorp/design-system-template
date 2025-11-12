import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as g,d as l}from"./textColor-DMnf996G.js";import{c as d}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import{p as Q,n as Z}from"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as $}from"./borderColor-C_RHITEf.js";import{l as ee}from"./layerColor-7aOJUZki.js";import{f as A}from"./fontFamily-CsG1KcIF.js";import{t as I,a as me}from"./typography-BBThIZ7c.js";import{s as r}from"./spacing-tE1IiUFl.js";import{I as fe,a as ge,b as te,c as ae,d as ve}from"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{r as i,R as re}from"./iframe-BmWS9Sei.js";import{r as ne}from"./index-Q9uUbnOr.js";import{M as oe,C as le}from"./Cell-Dff2EPQ2.js";import{r as O}from"./radius-DaoU83SK.js";import{s as he}from"./shadow-DVq_1U2q.js";const W=({children:e,type:a="default",className:o="",lang:s,...p})=>{const m=s,f=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(be,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(xe,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(ye,{$type:a,lang:m,className:o,...p,children:f()})},ye=l.label`
  ${I(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${A.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${A.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${g.light["fg-neutral-strong"]};
`,be=l.span`
  ${I(void 0,"caption2","regular")}
  color: ${d.red[500]};
  margin-left: ${r.gap["gap-0.5"]};
`,xe=l.span`
  ${I(void 0,"body2","regular")}
  color: ${g.light["fg-neutral-alternative"]};
  margin-left: ${r.gap["gap-0.5"]};
`;W.displayName="Label";W.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Y=({children:e,status:a="default",leadingIcon:o=!1,className:s="",lang:p,...m})=>{const f=p,h=()=>{if(!o)return null;switch(a){case"negative":return t.jsx($e,{children:t.jsx(ge,{})});case"positive":return t.jsx(Te,{children:t.jsx(fe,{})});default:return null}};return t.jsxs(we,{status:a,lang:f,className:s,...m,children:[h(),t.jsx("span",{children:e})]})},we=l.div`
  ${I(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${A.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${A.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return Z.light["fg-negative-primary"];case"positive":return Q.light["fg-positive-primary"];default:return g.light["fg-neutral-assistive"]}}};
`,ie=l.div`
  width: 16px;
  height: 16px;
  margin-right: ${r.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,$e=l(ie)`
  color: ${Z.light["fg-negative-primary"]};
`,Te=l(ie)`
  color: ${Q.light["fg-positive-primary"]};
`;Y.displayName="Description";Y.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const z=({size:e="medium",disabled:a=!1,active:o=!1,focused:s=!1,placeholder:p="선택해주세요.",value:m,options:f=[],onChange:h,onFocus:w,onBlur:b,className:S="",style:V,lang:R="ko",showCheckIcon:M=!0,...y})=>{const[v,E]=i.useState(!1),[c,k]=i.useState(o),[T,C]=i.useState(s),[x,P]=i.useState({top:0,left:0,width:0}),j=i.useRef(null),N=i.useRef(null);i.useEffect(()=>{const u=L=>{const _=L.target;N.current&&N.current.contains(_)||j.current&&!j.current.contains(_)&&(E(!1),C(!1))};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),i.useEffect(()=>{k(o)},[o]),i.useEffect(()=>{C(s)},[s]),i.useEffect(()=>{if(v&&j.current){const u=()=>{if(j.current){const L=j.current.getBoundingClientRect();P({top:L.bottom+window.scrollY,left:L.left+window.scrollX,width:L.width})}};return u(),window.addEventListener("scroll",u,!0),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",u)}}},[v]);const F=f.find(u=>u.value===m),H=()=>{a||(E(!v),v?(C(!1),k(!1),b==null||b({})):(C(!0),k(!0),w==null||w({})))},D=u=>{h==null||h(u.value),E(!1),C(!1),b==null||b({})},B=()=>a?g.light["fg-neutral-alternative"]:g.light["fg-neutral-primary"];return t.jsxs(qe,{ref:j,className:`selector-container ${S}`,style:V,...y,children:[t.jsxs(je,{$size:e,$disabled:a,$active:c,$focused:T,lang:R,onClick:H,type:"button","data-active":c?"true":"false",children:[t.jsx(Ie,{children:F?F.label:p}),t.jsx(Re,{size:e,children:v?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),v&&ne.createPortal(t.jsx(ke,{ref:N,onMouseDown:u=>u.stopPropagation(),onMouseDownCapture:u=>u.stopPropagation(),onClick:u=>u.stopPropagation(),"data-portal-menu":!0,$top:x.top,$left:x.left,$width:x.width,children:t.jsx(oe,{showCheckIcon:M,children:f.map(u=>t.jsx(le,{text:u.label,active:u.value===m,onClick:L=>{L.stopPropagation(),D(u)}},u.value))})}),document.body)]})},qe=l.div`
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
`;const Ee=l.div`
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
`,ke=re.forwardRef((e,a)=>t.jsx(Ee,{ref:a,...e})),je=l.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
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
          ${I(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `;case"large":return`
          height: 48px;
          ${I(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${p}px;
        `;default:return`
          height: 40px;
          ${I(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${d.gray[50]};
        color: ${g.light["fg-neutral-disable"]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${d.gray[50]};
        color: ${g.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        color: ${g.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-primary"]};
      `:o?`
        background-color: ${d.gray[50]};
        color: ${g.light["fg-neutral-alternative"]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      color: ${g.light["fg-neutral-alternative"]};
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
`,Ie=l.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Re=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;z.displayName="Selector";z.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const G=({size:e="medium",disabled:a=!1,active:o=!1,focused:s=!1,placeholder:p="입력하거나 선택해주세요.",value:m,options:f=[],onChange:h,onFocus:w,onBlur:b,className:S="",style:V,lang:R="ko",...M})=>{const[y,v]=i.useState(!1),[E,c]=i.useState(s),[k,T]=i.useState(m||""),[C,x]=i.useState(!0),[P,j]=i.useState(m||""),[N,F]=i.useState({top:0,left:0,width:0}),H=i.useRef(null),D=i.useRef(null),B=i.useRef(null);i.useEffect(()=>{const n=q=>{const J=q.target;if(!(B.current&&B.current.contains(J))&&H.current&&!H.current.contains(J))if(v(!1),c(!1),x(!1),P){const K=f.find(pe=>pe.value===P);T(K?K.label:"")}else T("")};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[P,f]),i.useEffect(()=>{c(s)},[s]),i.useEffect(()=>{if(y&&H.current){const n=()=>{if(H.current){const q=H.current.getBoundingClientRect();F({top:q.bottom+window.scrollY,left:q.left+window.scrollX,width:q.width})}};return n(),window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n)}}},[y]),i.useEffect(()=>{if(m){const n=f.find(q=>q.value===m);T(n?n.label:m),j(m)}else T(""),j("")},[m,f]);const u=()=>{var n;a||(v(!y),y?x(!1):(c(!0),x(!0),(n=D.current)==null||n.focus()))},L=n=>{const q=n.target.value;T(q),x(!1),y||v(!0)},_=n=>{c(!0),v(!0),x(!0),w==null||w(n)},de=n=>{c(!1),b==null||b(n)},ce=n=>{T(n.label),j(n.value),h==null||h(n.value),v(!1),c(!1)},X=()=>a?g.light["fg-neutral-alternative"]:g.light["fg-neutral-primary"],U=C?f:f.filter(n=>n.label.toLowerCase().includes(k.toLowerCase()));return t.jsxs(Ce,{ref:H,className:`combobox-container ${S}`,style:V,...M,children:[t.jsxs(Le,{$size:e,$disabled:a,$active:o,$focused:E,lang:R,children:[t.jsx(Se,{ref:D,$size:e,$disabled:a,$active:o,$focused:E,$hasValue:!!k,lang:R,value:k,placeholder:p,disabled:a,onChange:L,onFocus:_,onBlur:de}),t.jsx(Pe,{size:e,onClick:u,children:y?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:X()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:X()})})]}),y&&U.length>0&&ne.createPortal(t.jsx(Me,{ref:B,onMouseDown:n=>n.stopPropagation(),onMouseDownCapture:n=>n.stopPropagation(),onClick:n=>n.stopPropagation(),"data-portal-menu":!0,$top:N.top,$left:N.left,$width:N.width,children:t.jsx(oe,{children:U.map(n=>t.jsx(le,{text:n.label,active:n.value===P,onClick:q=>{q.stopPropagation(),ce(n)}},n.value))})}),document.body)]})},Ce=l.div`
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
  border-radius: ${O["rounded-2"]};
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
          ${I(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `;case"large":return`
          height: 46px;
          ${I(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${p}px;
        `;default:return`
          height: 38px;
          ${I(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${p}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:o,$hasValue:s})=>e?`
        color: ${g.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&o?`
        color: ${g.light["fg-neutral-primary"]};
      `:a||s?`
        color: ${g.light["fg-neutral-primary"]};
      `:o?`
        color: ${g.light["fg-neutral-alternative"]};
      `:`
      color: ${g.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${g.light["fg-neutral-alternative"]};
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
`,Me=re.forwardRef((e,a)=>t.jsx(Ve,{ref:a,...e})),Pe=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;G.displayName="ComboBox";G.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const se=({type:e="selector",size:a="medium",disabled:o=!1,active:s=!1,focused:p=!1,placeholder:m="선택해주세요.",value:f,options:h=[],label:w,labelType:b="default",description:S,descriptionLeadingIcon:V=!1,status:R="default",onChange:M,onFocus:y,onBlur:v,className:E="",style:c,lang:k,showCheckIcon:T=!0,...C})=>{const x=k;return t.jsxs(He,{className:`dropdown-container ${E}`,style:c,...Object.fromEntries(Object.entries(C).filter(([P])=>!["active","focused","size","disabled"].includes(P))),children:[w&&t.jsx(W,{type:b,lang:x,children:w}),e==="combobox"?t.jsx(G,{size:a,disabled:o,active:s,focused:p,placeholder:m,value:f,options:h,onChange:M,onFocus:y,onBlur:v,lang:x,showCheckIcon:T}):t.jsx(z,{size:a,disabled:o,active:s,focused:p,placeholder:m,value:f,options:h,onChange:M,onFocus:y,onBlur:v,lang:x,showCheckIcon:T}),S&&t.jsx(Y,{status:R,leadingIcon:V,lang:x,children:S})]})},He=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  width: 100%;
`;se.displayName="Dropdown";se.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const ue=({size:e="medium",position:a="center",open:o=!1,onClose:s,title:p="제목",showCloseButton:m=!0,children:f,actions:h,className:w="",style:b,...S})=>{const[V,R]=i.useState(!1),[M,y]=i.useState(!1);if(i.useEffect(()=>{if(o){y(!0);const c=setTimeout(()=>{R(!0)},10);return()=>clearTimeout(c)}else{R(!1);const c=setTimeout(()=>{y(!1)},200);return()=>clearTimeout(c)}},[o]),!M)return null;const v=c=>{if(c.target.closest("[data-portal-menu]")){c.preventDefault(),c.stopPropagation();return}c.target===c.currentTarget&&(s==null||s())},E=()=>{s==null||s()};return t.jsx(Ne,{$isVisible:V,$position:a,onClick:v,children:t.jsxs(Oe,{$size:e,$isVisible:V,className:w,style:b,...S,children:[t.jsxs(Be,{children:[t.jsx(Fe,{children:p}),m&&t.jsx(De,{onClick:E,children:t.jsx(ve,{width:24,height:24,color:"currentColor"})})]}),t.jsx(_e,{children:f}),h&&t.jsx(Ae,{children:h})]})})},Ne=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${ee.light["bg-overlay"]};
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
  background-color: ${ee.light["bg-layer-floating"]};
  border: 1px solid ${$.light["color-border-primary"]};
  border-radius: ${O["rounded-3"]};
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
  border-radius: ${O["rounded-3"]} ${O["rounded-3"]} 0 0;
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
  border-radius: ${O["rounded-2"]};
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
  border-radius: ${O["rounded-2"]};
  color: ${d.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${d.gray[925]};
  }
`;ue.displayName="Modal";ue.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "center-left"
| "center"
| "center-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"center-left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"center-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{G as C,Y as D,W as L,ue as M,z as S,se as a};
