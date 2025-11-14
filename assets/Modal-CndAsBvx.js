import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as u,t as h}from"./textColor-D0IOlZFP.js";import{L as ie,D as se}from"./Description-DfwxwJER.js";import{r as i,R as U}from"./iframe-BHft69wN.js";import{r as J}from"./index-DkBUQ841.js";import{i as K,j as Q,h as ue}from"./IconSearch-CFCJ4kQt.js";import"./IconCheck-CKtc9n1_.js";import{M as Z,C as ee,a as de}from"./MultiSelect-B3ftpr1V.js";import{c as s}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as T}from"./borderColor-C_RHITEf.js";import{l as te}from"./layerColor-7aOJUZki.js";import{t as F,a as ce}from"./typography-BBThIZ7c.js";import{r as O}from"./radius-DaoU83SK.js";import{s as r}from"./spacing-tE1IiUFl.js";import{s as pe}from"./shadow-DVq_1U2q.js";const W=({size:e="medium",disabled:a=!1,active:o=!1,focused:d=!1,placeholder:f="선택해주세요.",value:g,options:p=[],onChange:y,onFocus:w,onBlur:b,className:V="",style:I,lang:M="ko",showCheckIcon:R=!0,...v})=>{const[m,k]=i.useState(!1),[c,S]=i.useState(o),[E,j]=i.useState(d),[q,x]=i.useState({top:0,left:0,width:0}),$=i.useRef(null),H=i.useRef(null);i.useEffect(()=>{const l=L=>{const A=L.target;H.current&&H.current.contains(A)||$.current&&!$.current.contains(A)&&(k(!1),j(!1))};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),i.useEffect(()=>{S(o)},[o]),i.useEffect(()=>{j(d)},[d]),i.useEffect(()=>{if(m&&$.current){const l=()=>{if($.current){const L=$.current.getBoundingClientRect();x({top:L.bottom+window.scrollY,left:L.left+window.scrollX,width:L.width})}};return l(),window.addEventListener("scroll",l,!0),window.addEventListener("resize",l),()=>{window.removeEventListener("scroll",l,!0),window.removeEventListener("resize",l)}}},[m]);const N=p.find(l=>l.value===g),P=()=>{a||(k(!m),m?(j(!1),S(!1),b==null||b({})):(j(!0),S(!0),w==null||w({})))},D=l=>{y==null||y(l.value),k(!1),j(!1),b==null||b({})},B=()=>a?h.light["fg-neutral-alternative"]:h.light["fg-neutral-primary"];return n.jsxs(me,{ref:$,className:`selector-container ${V}`,style:I,...v,children:[n.jsxs(ve,{$size:e,$disabled:a,$active:c,$focused:E,lang:M,onClick:P,type:"button","data-active":c?"true":"false",children:[n.jsx(he,{children:N?N.label:f}),n.jsx(ye,{size:e,children:m?n.jsx(K,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):n.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),m&&J.createPortal(n.jsx(ge,{ref:H,onMouseDown:l=>l.stopPropagation(),onMouseDownCapture:l=>l.stopPropagation(),onClick:l=>l.stopPropagation(),"data-portal-menu":!0,$top:q.top,$left:q.left,$width:q.width,children:n.jsx(Z,{showCheckIcon:R,children:p.map(l=>n.jsx(ee,{text:l.label,description:l.description,leadingContent:l.leadingContent,active:l.value===g,onClick:L=>{L.stopPropagation(),D(l)}},l.value))})}),document.body)]})},me=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;u.div`
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
`;const fe=u.div`
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
`,ge=U.forwardRef((e,a)=>n.jsx(fe,{ref:a,...e})),ve=u.button`
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
  ${({$size:e,lang:a="ko"})=>{const o=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],f=(e==="small"?16:e==="large"?24:20)+parseInt(o)*2;switch(e){case"small":return`
          height: 32px;
          ${F(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${f}px;
        `;case"large":return`
          height: 48px;
          ${F(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${f}px;
        `;default:return`
          height: 40px;
          ${F(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${f}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${s.gray[50]};
        color: ${h.light["fg-neutral-disable"]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${s.gray[50]};
        color: ${h.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${s.common[100]};
        color: ${h.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-primary"]};
      `:o?`
        background-color: ${s.gray[50]};
        color: ${h.light["fg-neutral-alternative"]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${s.common[100]};
      color: ${h.light["fg-neutral-alternative"]};
      border-color: ${T.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }
`,he=u.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,ye=u.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;W.displayName="Selector";W.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const _=({size:e="medium",disabled:a=!1,active:o=!1,focused:d=!1,placeholder:f="입력하거나 선택해주세요.",value:g,options:p=[],onChange:y,onFocus:w,onBlur:b,className:V="",style:I,lang:M="ko",...R})=>{const[v,m]=i.useState(!1),[k,c]=i.useState(d),[S,E]=i.useState(g||""),[j,q]=i.useState(!0),[x,$]=i.useState(g||""),[H,N]=i.useState({top:0,left:0,width:0}),P=i.useRef(null),D=i.useRef(null),B=i.useRef(null);i.useEffect(()=>{const t=C=>{const X=C.target;if(!(B.current&&B.current.contains(X))&&P.current&&!P.current.contains(X))if(m(!1),c(!1),q(!1),x){const z=p.find(le=>le.value===x);E(z?z.label:"")}else E("")};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[x,p]),i.useEffect(()=>{c(d)},[d]),i.useEffect(()=>{if(v&&P.current){const t=()=>{if(P.current){const C=P.current.getBoundingClientRect();N({top:C.bottom+window.scrollY,left:C.left+window.scrollX,width:C.width})}};return t(),window.addEventListener("scroll",t,!0),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}}},[v]),i.useEffect(()=>{if(g){const t=p.find(C=>C.value===g);E(t?t.label:g),$(g)}else E(""),$("")},[g,p]);const l=()=>{var t;a||(m(!v),v?q(!1):(c(!0),q(!0),(t=D.current)==null||t.focus()))},L=t=>{const C=t.target.value;E(C),q(!1),v||m(!0)},A=t=>{c(!0),m(!0),q(!0),w==null||w(t)},ne=t=>{c(!1),b==null||b(t)},oe=t=>{E(t.label),$(t.value),y==null||y(t.value),m(!1),c(!1)},Y=()=>a?h.light["fg-neutral-alternative"]:h.light["fg-neutral-primary"],G=j?p:p.filter(t=>t.label.toLowerCase().includes(S.toLowerCase()));return n.jsxs(be,{ref:P,className:`combobox-container ${V}`,style:I,...R,children:[n.jsxs(we,{$size:e,$disabled:a,$active:o,$focused:k,lang:M,children:[n.jsx(xe,{ref:D,$size:e,$disabled:a,$active:o,$focused:k,$hasValue:!!S,lang:M,value:S,placeholder:f,disabled:a,onChange:L,onFocus:A,onBlur:ne}),n.jsx(Ee,{size:e,onClick:l,children:v?n.jsx(K,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Y()}):n.jsx(Q,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:Y()})})]}),v&&G.length>0&&J.createPortal(n.jsx(Te,{ref:B,onMouseDown:t=>t.stopPropagation(),onMouseDownCapture:t=>t.stopPropagation(),onClick:t=>t.stopPropagation(),"data-portal-menu":!0,$top:H.top,$left:H.left,$width:H.width,children:n.jsx(Z,{children:G.map(t=>n.jsx(ee,{text:t.label,description:t.description,leadingContent:t.leadingContent,active:t.value===x,onClick:C=>{C.stopPropagation(),oe(t)}},t.value))})}),document.body)]})},be=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,we=u.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${O["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${s.common[100]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${s.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${s.common[100]};
        border-color: ${T.light["color-border-primary"]};
      `:o?`
        background-color: ${s.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${s.common[100]};
      border-color: ${T.light["color-border-primary"]};
    `}
`,xe=u.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const o=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],f=(e==="small"?16:e==="large"?24:20)+parseInt(o)*2;switch(e){case"small":return`
          height: 30px;
          ${F(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${f}px;
        `;case"large":return`
          height: 46px;
          ${F(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${f}px;
        `;default:return`
          height: 38px;
          ${F(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${f}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:o,$hasValue:d})=>e?`
        color: ${h.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&o?`
        color: ${h.light["fg-neutral-primary"]};
      `:a||d?`
        color: ${h.light["fg-neutral-primary"]};
      `:o?`
        color: ${h.light["fg-neutral-alternative"]};
      `:`
      color: ${h.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${h.light["fg-neutral-alternative"]};
  }
`;u.div`
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
`;const $e=u.div`
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
`,Te=U.forwardRef((e,a)=>n.jsx($e,{ref:a,...e})),Ee=u.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;_.displayName="ComboBox";_.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:""}}};const ae=({type:e="selector",size:a="medium",disabled:o=!1,active:d=!1,focused:f=!1,placeholder:g="선택해주세요.",value:p,options:y=[],label:w,labelType:b="default",description:V,descriptionLeadingIcon:I=!1,status:M="default",onChange:R,onFocus:v,onBlur:m,className:k="",style:c,lang:S,showCheckIcon:E=!0,lineMode:j,...q})=>{const x=S;return n.jsxs(qe,{className:`dropdown-container ${k}`,style:c,...Object.fromEntries(Object.entries(q).filter(([$])=>!["active","focused","size","disabled"].includes($))),children:[w&&n.jsx(ie,{type:b,lang:x,children:w}),e==="combobox"?n.jsx(_,{size:a,disabled:o,active:d,focused:f,placeholder:g,value:typeof p=="string"?p:void 0,options:y,onChange:R,onFocus:v,onBlur:m,lang:x,showCheckIcon:E}):e==="multiselect"?n.jsx(de,{size:a,disabled:o,placeholder:g,value:Array.isArray(p)?p:[],options:y,onChange:R,onFocus:v,onBlur:m,lang:x,lineMode:j}):n.jsx(W,{size:a,disabled:o,active:d,focused:f,placeholder:g,value:typeof p=="string"?p:void 0,options:y,onChange:R,onFocus:v,onBlur:m,lang:x,showCheckIcon:E}),V&&n.jsx(se,{status:M,leadingIcon:I,lang:x,children:V})]})},qe=u.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  width: 100%;
`;ae.displayName="Dropdown";ae.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox" | "multiselect"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'},{name:"literal",value:'"multiselect"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},lineMode:{required:!1,tsType:{name:"union",raw:'"single" | "multi"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multi"'}]},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const re=({size:e="medium",position:a="center",open:o=!1,onClose:d,title:f="제목",showCloseButton:g=!0,children:p,actions:y,className:w="",style:b,...V})=>{const[I,M]=i.useState(!1),[R,v]=i.useState(!1);if(i.useEffect(()=>{if(o){v(!0);const c=setTimeout(()=>{M(!0)},10);return()=>clearTimeout(c)}else{M(!1);const c=setTimeout(()=>{v(!1)},200);return()=>clearTimeout(c)}},[o]),!R)return null;const m=c=>{if(c.target.closest("[data-portal-menu]")){c.preventDefault(),c.stopPropagation();return}c.target===c.currentTarget&&(d==null||d())},k=()=>{d==null||d()};return n.jsx(Ce,{$isVisible:I,$position:a,onClick:m,children:n.jsxs(ke,{$size:e,$isVisible:I,className:w,style:b,...V,children:[n.jsxs(Se,{children:[n.jsx(Me,{children:f}),g&&n.jsx(Re,{onClick:k,children:n.jsx(ue,{width:24,height:24,color:"currentColor"})})]}),n.jsx(je,{children:p}),y&&n.jsx(Le,{children:y})]})})},Ce=u.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${te.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({$position:e})=>{const a=e.startsWith("top-")?"flex-start":e.startsWith("bottom-")?"flex-end":"center",o=e.endsWith("-left")?"flex-start":e.endsWith("-right")?"flex-end":"center";return`
      align-items: ${a};
      justify-content: ${o};
    `}}
`,ke=u.div`
  background-color: ${te.light["bg-layer-floating"]};
  border: 1px solid ${T.light["color-border-primary"]};
  border-radius: ${O["rounded-3"]};
  box-shadow: ${pe.light["shadow-lg"]};
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
`,Se=u.div`
  padding: ${r.gap["gap-6"]} ${r.gap["gap-6"]}
    ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  border-radius: ${O["rounded-3"]} ${O["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Me=u.h2`
  ${ce.heading1}
  font-weight: 600;
  color: ${s.gray[950]};
  margin: 0;
`,Re=u.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${s.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`,je=u.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  flex: 1;
  overflow: visible;
`,Le=u.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]}
    ${r.gap["gap-6"]} ${r.gap["gap-6"]};
  display: flex;
  gap: ${r.gap["gap-2"]};
`;u.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${s.common[100]};
  border: 1px solid ${T.light["color-border-primary"]};
  border-radius: ${O["rounded-2"]};
  color: ${s.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${s.gray[50]};
  }
`;u.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${s.gray[950]};
  border: none;
  border-radius: ${O["rounded-2"]};
  color: ${s.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${s.gray[925]};
  }
`;re.displayName="Modal";re.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "center-left"
| "center"
| "center-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"center-left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"center-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{_ as C,ae as D,re as M,W as S};
