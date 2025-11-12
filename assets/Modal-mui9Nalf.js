import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{t as v,d as o}from"./textColor-mVK3GUDS.js";import{c as d}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import{p as Q,n as Z}from"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as T}from"./borderColor-C_RHITEf.js";import{l as ee}from"./layerColor-7aOJUZki.js";import{f as _}from"./fontFamily-CsG1KcIF.js";import{t as R,a as me}from"./typography-BBThIZ7c.js";import{s as r}from"./spacing-tE1IiUFl.js";import{I as fe,a as ge,b as te,c as ae,d as ve}from"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import{r as i,R as re}from"./iframe-DZAM4DrV.js";import{r as ne}from"./index-ChusoG7V.js";import{M as le,C as oe,a as he}from"./MultiSelect-BSVJc2TI.js";import{r as O}from"./radius-DaoU83SK.js";import{s as ye}from"./shadow-DVq_1U2q.js";const W=({children:e,type:a="default",className:l="",lang:s,...m})=>{const f=s,c=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(we,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(xe,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(be,{$type:a,lang:f,className:l,...m,children:c()})},be=o.label`
  ${R(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${_.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${_.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${v.light["fg-neutral-strong"]};
`,we=o.span`
  ${R(void 0,"caption2","regular")}
  color: ${d.red[500]};
  margin-left: ${r.gap["gap-0.5"]};
`,xe=o.span`
  ${R(void 0,"body2","regular")}
  color: ${v.light["fg-neutral-alternative"]};
  margin-left: ${r.gap["gap-0.5"]};
`;W.displayName="Label";W.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Y=({children:e,status:a="default",leadingIcon:l=!1,className:s="",lang:m,...f})=>{const c=m,h=()=>{if(!l)return null;switch(a){case"negative":return t.jsx(Te,{children:t.jsx(ge,{})});case"positive":return t.jsx(qe,{children:t.jsx(fe,{})});default:return null}};return t.jsxs($e,{status:a,lang:c,className:s,...f,children:[h(),t.jsx("span",{children:e})]})},$e=o.div`
  ${R(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${_.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${_.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return Z.light["fg-negative-primary"];case"positive":return Q.light["fg-positive-primary"];default:return v.light["fg-neutral-assistive"]}}};
`,ie=o.div`
  width: 16px;
  height: 16px;
  margin-right: ${r.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Te=o(ie)`
  color: ${Z.light["fg-negative-primary"]};
`,qe=o(ie)`
  color: ${Q.light["fg-positive-primary"]};
`;Y.displayName="Description";Y.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const G=({size:e="medium",disabled:a=!1,active:l=!1,focused:s=!1,placeholder:m="선택해주세요.",value:f,options:c=[],onChange:h,onFocus:w,onBlur:b,className:M="",style:P,lang:C="ko",showCheckIcon:L=!0,...y})=>{const[g,j]=i.useState(!1),[p,I]=i.useState(l),[q,S]=i.useState(s),[E,x]=i.useState({top:0,left:0,width:0}),$=i.useRef(null),N=i.useRef(null);i.useEffect(()=>{const u=V=>{const A=V.target;N.current&&N.current.contains(A)||$.current&&!$.current.contains(A)&&(j(!1),S(!1))};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),i.useEffect(()=>{I(l)},[l]),i.useEffect(()=>{S(s)},[s]),i.useEffect(()=>{if(g&&$.current){const u=()=>{if($.current){const V=$.current.getBoundingClientRect();x({top:V.bottom+window.scrollY,left:V.left+window.scrollX,width:V.width})}};return u(),window.addEventListener("scroll",u,!0),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",u)}}},[g]);const F=c.find(u=>u.value===f),H=()=>{a||(j(!g),g?(S(!1),I(!1),b==null||b({})):(S(!0),I(!0),w==null||w({})))},D=u=>{h==null||h(u.value),j(!1),S(!1),b==null||b({})},B=()=>a?v.light["fg-neutral-alternative"]:v.light["fg-neutral-primary"];return t.jsxs(Ee,{ref:$,className:`selector-container ${M}`,style:P,...y,children:[t.jsxs(Ie,{$size:e,$disabled:a,$active:p,$focused:q,lang:C,onClick:H,type:"button","data-active":p?"true":"false",children:[t.jsx(Re,{children:F?F.label:m}),t.jsx(Ce,{size:e,children:g?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),g&&ne.createPortal(t.jsx(je,{ref:N,onMouseDown:u=>u.stopPropagation(),onMouseDownCapture:u=>u.stopPropagation(),onClick:u=>u.stopPropagation(),"data-portal-menu":!0,$top:E.top,$left:E.left,$width:E.width,children:t.jsx(le,{showCheckIcon:L,children:c.map(u=>t.jsx(oe,{text:u.label,active:u.value===f,onClick:V=>{V.stopPropagation(),D(u)}},u.value))})}),document.body)]})},Ee=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;o.div`
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
`;const ke=o.div`
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
`,je=re.forwardRef((e,a)=>t.jsx(ke,{ref:a,...e})),Ie=o.button`
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
  ${({$size:e,lang:a="ko"})=>{const l=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],m=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 32px;
          ${R(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${m}px;
        `;case"large":return`
          height: 48px;
          ${R(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${m}px;
        `;default:return`
          height: 40px;
          ${R(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${m}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:l})=>e?`
        background-color: ${d.gray[50]};
        color: ${v.light["fg-neutral-disable"]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&l?`
        background-color: ${d.gray[50]};
        color: ${v.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        color: ${v.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-primary"]};
      `:l?`
        background-color: ${d.gray[50]};
        color: ${v.light["fg-neutral-alternative"]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      color: ${v.light["fg-neutral-alternative"]};
      border-color: ${T.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${d.gray[50]};
    border-color: ${d.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${d.gray[50]};
    border-color: ${d.gray[300]};
  }
`,Re=o.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Ce=o.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;G.displayName="Selector";G.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const X=({size:e="medium",disabled:a=!1,active:l=!1,focused:s=!1,placeholder:m="입력하거나 선택해주세요.",value:f,options:c=[],onChange:h,onFocus:w,onBlur:b,className:M="",style:P,lang:C="ko",...L})=>{const[y,g]=i.useState(!1),[j,p]=i.useState(s),[I,q]=i.useState(f||""),[S,E]=i.useState(!0),[x,$]=i.useState(f||""),[N,F]=i.useState({top:0,left:0,width:0}),H=i.useRef(null),D=i.useRef(null),B=i.useRef(null);i.useEffect(()=>{const n=k=>{const J=k.target;if(!(B.current&&B.current.contains(J))&&H.current&&!H.current.contains(J))if(g(!1),p(!1),E(!1),x){const K=c.find(pe=>pe.value===x);q(K?K.label:"")}else q("")};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[x,c]),i.useEffect(()=>{p(s)},[s]),i.useEffect(()=>{if(y&&H.current){const n=()=>{if(H.current){const k=H.current.getBoundingClientRect();F({top:k.bottom+window.scrollY,left:k.left+window.scrollX,width:k.width})}};return n(),window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n)}}},[y]),i.useEffect(()=>{if(f){const n=c.find(k=>k.value===f);q(n?n.label:f),$(f)}else q(""),$("")},[f,c]);const u=()=>{var n;a||(g(!y),y?E(!1):(p(!0),E(!0),(n=D.current)==null||n.focus()))},V=n=>{const k=n.target.value;q(k),E(!1),y||g(!0)},A=n=>{p(!0),g(!0),E(!0),w==null||w(n)},de=n=>{p(!1),b==null||b(n)},ce=n=>{q(n.label),$(n.value),h==null||h(n.value),g(!1),p(!1)},z=()=>a?v.light["fg-neutral-alternative"]:v.light["fg-neutral-primary"],U=S?c:c.filter(n=>n.label.toLowerCase().includes(I.toLowerCase()));return t.jsxs(Le,{ref:H,className:`combobox-container ${M}`,style:P,...L,children:[t.jsxs(Se,{$size:e,$disabled:a,$active:l,$focused:j,lang:C,children:[t.jsx(Ve,{ref:D,$size:e,$disabled:a,$active:l,$focused:j,$hasValue:!!I,lang:C,value:I,placeholder:m,disabled:a,onChange:V,onFocus:A,onBlur:de}),t.jsx(He,{size:e,onClick:u,children:y?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:z()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:z()})})]}),y&&U.length>0&&ne.createPortal(t.jsx(Pe,{ref:B,onMouseDown:n=>n.stopPropagation(),onMouseDownCapture:n=>n.stopPropagation(),onClick:n=>n.stopPropagation(),"data-portal-menu":!0,$top:N.top,$left:N.left,$width:N.width,children:t.jsx(le,{children:U.map(n=>t.jsx(oe,{text:n.label,active:n.value===x,onClick:k=>{k.stopPropagation(),ce(n)}},n.value))})}),document.body)]})},Le=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Se=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:l})=>e?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&l?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-primary"]};
      `:l?`
        background-color: ${d.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${d.common[100]};
      border-color: ${T.light["color-border-primary"]};
    `}
`,Ve=o.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const l=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],m=(e==="small"?16:e==="large"?24:20)+parseInt(l)*2;switch(e){case"small":return`
          height: 30px;
          ${R(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${m}px;
        `;case"large":return`
          height: 46px;
          ${R(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${m}px;
        `;default:return`
          height: 38px;
          ${R(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${m}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:l,$hasValue:s})=>e?`
        color: ${v.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&l?`
        color: ${v.light["fg-neutral-primary"]};
      `:a||s?`
        color: ${v.light["fg-neutral-primary"]};
      `:l?`
        color: ${v.light["fg-neutral-alternative"]};
      `:`
      color: ${v.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${v.light["fg-neutral-alternative"]};
  }
`;o.div`
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
`;const Me=o.div`
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
`,Pe=re.forwardRef((e,a)=>t.jsx(Me,{ref:a,...e})),He=o.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;X.displayName="ComboBox";X.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const se=({type:e="selector",size:a="medium",disabled:l=!1,active:s=!1,focused:m=!1,placeholder:f="선택해주세요.",value:c,options:h=[],label:w,labelType:b="default",description:M,descriptionLeadingIcon:P=!1,status:C="default",onChange:L,onFocus:y,onBlur:g,className:j="",style:p,lang:I,showCheckIcon:q=!0,lineMode:S,...E})=>{const x=I;return t.jsxs(Ne,{className:`dropdown-container ${j}`,style:p,...Object.fromEntries(Object.entries(E).filter(([$])=>!["active","focused","size","disabled"].includes($))),children:[w&&t.jsx(W,{type:b,lang:x,children:w}),e==="combobox"?t.jsx(X,{size:a,disabled:l,active:s,focused:m,placeholder:f,value:typeof c=="string"?c:void 0,options:h,onChange:L,onFocus:y,onBlur:g,lang:x,showCheckIcon:q}):e==="multiselect"?t.jsx(he,{size:a,disabled:l,placeholder:f,value:Array.isArray(c)?c:[],options:h,onChange:L,onFocus:y,onBlur:g,lang:x,lineMode:S}):t.jsx(G,{size:a,disabled:l,active:s,focused:m,placeholder:f,value:typeof c=="string"?c:void 0,options:h,onChange:L,onFocus:y,onBlur:g,lang:x,showCheckIcon:q}),M&&t.jsx(Y,{status:C,leadingIcon:P,lang:x,children:M})]})},Ne=o.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  width: 100%;
`;se.displayName="Dropdown";se.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox" | "multiselect"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'},{name:"literal",value:'"multiselect"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const ue=({size:e="medium",position:a="center",open:l=!1,onClose:s,title:m="제목",showCloseButton:f=!0,children:c,actions:h,className:w="",style:b,...M})=>{const[P,C]=i.useState(!1),[L,y]=i.useState(!1);if(i.useEffect(()=>{if(l){y(!0);const p=setTimeout(()=>{C(!0)},10);return()=>clearTimeout(p)}else{C(!1);const p=setTimeout(()=>{y(!1)},200);return()=>clearTimeout(p)}},[l]),!L)return null;const g=p=>{if(p.target.closest("[data-portal-menu]")){p.preventDefault(),p.stopPropagation();return}p.target===p.currentTarget&&(s==null||s())},j=()=>{s==null||s()};return t.jsx(Oe,{$isVisible:P,$position:a,onClick:g,children:t.jsxs(Be,{$size:e,$isVisible:P,className:w,style:b,...M,children:[t.jsxs(Fe,{children:[t.jsx(De,{children:m}),f&&t.jsx(Ae,{onClick:j,children:t.jsx(ve,{width:24,height:24,color:"currentColor"})})]}),t.jsx(_e,{children:c}),h&&t.jsx(We,{children:h})]})})},Oe=o.div`
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

  ${({$position:e})=>{const a=e.startsWith("top-")?"flex-start":e.startsWith("bottom-")?"flex-end":"center",l=e.endsWith("-left")?"flex-start":e.endsWith("-right")?"flex-end":"center";return`
      align-items: ${a};
      justify-content: ${l};
    `}}
`,Be=o.div`
  background-color: ${ee.light["bg-layer-floating"]};
  border: 1px solid ${T.light["color-border-primary"]};
  border-radius: ${O["rounded-3"]};
  box-shadow: ${ye.light["shadow-lg"]};
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
`,Fe=o.div`
  padding: ${r.gap["gap-6"]} ${r.gap["gap-6"]}
    ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  border-radius: ${O["rounded-3"]} ${O["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,De=o.h2`
  ${me.heading1}
  font-weight: 600;
  color: ${d.gray[950]};
  margin: 0;
`,Ae=o.button`
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
`,_e=o.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  flex: 1;
  overflow: visible;
`,We=o.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]}
    ${r.gap["gap-6"]} ${r.gap["gap-6"]};
  display: flex;
  gap: ${r.gap["gap-2"]};
`;o.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${d.common[100]};
  border: 1px solid ${T.light["color-border-primary"]};
  border-radius: ${O["rounded-2"]};
  color: ${d.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${d.gray[50]};
  }
`;o.button`
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
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"center-left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"center-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{X as C,Y as D,W as L,ue as M,G as S,se as a};
