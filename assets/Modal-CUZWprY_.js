import{j as t}from"./jsx-runtime-Bf2WKY8k.js";import{d as l}from"./styled-components.browser.esm-DhrH3U2p.js";import{c as s}from"./color-DqDZjiGS.js";import{t as f}from"./textColor-SSyLf7rE.js";import{f as I}from"./fontFamily-CsG1KcIF.js";import{t as T,a as ge}from"./typography-BccJP5aO.js";import{s as r}from"./spacing-tE1IiUFl.js";import{p as Z,n as ee}from"./negativeColor-MzvdT1cG.js";import{c as fe,b as ve,I as he,j as te,k as ae,i as ye}from"./IconSearch-DSOOu2Hv.js";import{r as d,R as re}from"./iframe-BQ-UQriX.js";import{r as ne}from"./index-D0ZGHUhs.js";import{s as oe}from"./shadow-DVq_1U2q.js";import{r as H}from"./radius-DaoU83SK.js";import{b as $}from"./borderColor-CQKT7y1f.js";import{l as le}from"./layerColor-D_HAcI5O.js";const z=({children:e,type:a="default",className:o="",lang:i,...c})=>{const p=i,m=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(xe,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(we,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(be,{$type:a,lang:p,className:o,...c,children:m()})},be=l.label`
  ${T(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${I.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${I.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${f.light["fg-neutral-strong"]};
`,xe=l.span`
  ${T(void 0,"caption2","regular")}
  color: ${s.red[500]};
  margin-left: ${r.gap["gap-0.5"]};
`,we=l.span`
  ${T(void 0,"body2","regular")}
  color: ${f.light["fg-neutral-alternative"]};
  margin-left: ${r.gap["gap-0.5"]};
`;z.displayName="Label";z.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Y=({children:e,status:a="default",leadingIcon:o=!1,className:i="",lang:c,...p})=>{const m=c,y=()=>{if(!o)return null;switch(a){case"negative":return t.jsx(Te,{children:t.jsx(ve,{})});case"positive":return t.jsx(ke,{children:t.jsx(fe,{})});default:return null}};return t.jsxs($e,{status:a,lang:m,className:i,...p,children:[y(),t.jsx("span",{children:e})]})},$e=l.div`
  ${T(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${I.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${I.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return ee.light["fg-negative-primary"];case"positive":return Z.light["fg-positive-primary"];default:return f.light["fg-neutral-assistive"]}}};
`,ie=l.div`
  width: 16px;
  height: 16px;
  margin-right: ${r.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Te=l(ie)`
  color: ${ee.light["fg-negative-primary"]};
`,ke=l(ie)`
  color: ${Z.light["fg-positive-primary"]};
`;Y.displayName="Description";Y.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const _=({children:e,className:a,...o})=>t.jsx(qe,{className:a,...o,children:e}),qe=l.div`
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  padding: ${r.gap["gap-1"]};
  box-shadow: ${oe.light["shadow-md"]};
  background-color: white;
  border-radius: 8px;
  box-sizing: border-box;
  width: 300px;

  &[lang="ko"] {
    font-family: ${I.ko};
  }

  &[lang="en"] {
    font-family: ${I.en};
  }

  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${s.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${s.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${s.gray[200]} transparent;
`;_.displayName="Menu";_.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const W=({disable:e=!1,active:a=!1,leadingIcon:o,text:i,description:c,trailingIcon:p,onClick:m,className:y,lang:b})=>{const h=()=>e?f.light["fg-neutral-disable"]:f.light["fg-neutral-primary"],E=()=>a&&!e;return t.jsxs(Ee,{disable:e,active:a,"data-disable":e,onClick:e?void 0:j=>m==null?void 0:m(j),className:y,lang:b,children:[o&&t.jsx(je,{children:t.jsx(o,{width:16,height:16,color:h()})}),t.jsxs(Re,{children:[i&&t.jsx(Ie,{children:i}),c&&t.jsx(Ce,{children:c})]}),E()&&t.jsx(Se,{children:p?t.jsx(p,{width:16,height:16,color:h()}):t.jsx(he,{width:16,height:16,color:h()})})]})},Ee=l.div`
  display: flex;
  align-items: center;
  gap: ${r.gap["gap-1"]};
  padding: ${r.gap["gap-1.5"]} ${r.gap["gap-2"]};
  border-radius: ${H["rounded-1"]};
  background-color: ${s.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${s.gray[50]};
  }
`,je=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Re=l.div`
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  flex: 1;
  min-width: 0;
`,Ie=l.div`
  ${T(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${I.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${I.ko};
  }
  color: inherit;
`,Ce=l.div`
  ${T(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${I.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${I.ko};
  }
  color: ${f.light["fg-neutral-alternative"]};
`,Se=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;W.displayName="Cell";W.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const G=({size:e="medium",disabled:a=!1,active:o=!1,focused:i=!1,placeholder:c="선택해주세요.",value:p,options:m=[],onChange:y,onFocus:b,onBlur:h,className:E="",style:j,lang:C="ko",...V})=>{const[v,x]=d.useState(!1),[S,g]=d.useState(o),[N,w]=d.useState(i),[R,L]=d.useState({top:0,left:0,width:0}),k=d.useRef(null),O=d.useRef(null);d.useEffect(()=>{const u=M=>{const D=M.target;O.current&&O.current.contains(D)||k.current&&!k.current.contains(D)&&(x(!1),w(!1))};return document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}},[]),d.useEffect(()=>{g(o)},[o]),d.useEffect(()=>{w(i)},[i]),d.useEffect(()=>{if(v&&k.current){const u=()=>{if(k.current){const M=k.current.getBoundingClientRect();L({top:M.bottom+window.scrollY,left:M.left+window.scrollX,width:M.width})}};return u(),window.addEventListener("scroll",u,!0),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",u)}}},[v]);const F=m.find(u=>u.value===p),A=()=>{a||(x(!v),v?(w(!1),g(!1),h==null||h({})):(w(!0),g(!0),b==null||b({})))},P=u=>{y==null||y(u.value),x(!1),w(!1),h==null||h({})},B=()=>a?f.light["fg-neutral-alternative"]:f.light["fg-neutral-primary"];return t.jsxs(Le,{ref:k,className:`selector-container ${E}`,style:j,...V,children:[t.jsxs(Ne,{$size:e,$disabled:a,$active:S,$focused:N,lang:C,onClick:A,type:"button","data-active":S?"true":"false",children:[t.jsx(Pe,{children:F?F.label:c}),t.jsx(He,{size:e,children:v?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),v&&ne.createPortal(t.jsx(Ve,{ref:O,onMouseDown:u=>u.stopPropagation(),onMouseDownCapture:u=>u.stopPropagation(),onClick:u=>u.stopPropagation(),"data-portal-menu":!0,$top:R.top,$left:R.left,$width:R.width,children:t.jsx(_,{children:m.map(u=>t.jsx(W,{text:u.label,active:u.value===p,onClick:M=>{M.stopPropagation(),P(u)}},u.value))})}),document.body)]})},Le=l.div`
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
`;const Me=l.div`
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
`,Ve=re.forwardRef((e,a)=>t.jsx(Me,{ref:a,...e})),Ne=l.button`
  width: 100%;
  border: 1px solid;
  border-radius: ${H["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:a="ko"})=>{const o=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(o)*2;switch(e){case"small":return`
          height: 32px;
          ${T(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `;case"large":return`
          height: 48px;
          ${T(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${c}px;
        `;default:return`
          height: 40px;
          ${T(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${s.gray[50]};
        color: ${f.light["fg-neutral-disable"]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${s.gray[50]};
        color: ${f.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${s.common[100]};
        color: ${f.light["fg-neutral-primary"]};
        border-color: ${$.light["color-border-primary"]};
      `:o?`
        background-color: ${s.gray[50]};
        color: ${f.light["fg-neutral-alternative"]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${s.common[100]};
      color: ${f.light["fg-neutral-alternative"]};
      border-color: ${$.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${s.gray[50]};
    border-color: ${s.gray[300]};
  }
`,Pe=l.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,He=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;G.displayName="Selector";G.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const X=({size:e="medium",disabled:a=!1,active:o=!1,focused:i=!1,placeholder:c="입력하거나 선택해주세요.",value:p,options:m=[],onChange:y,onFocus:b,onBlur:h,className:E="",style:j,lang:C="ko",...V})=>{const[v,x]=d.useState(!1),[S,g]=d.useState(i),[N,w]=d.useState(p||""),[R,L]=d.useState(!0),[k,O]=d.useState(p||""),[F,A]=d.useState({top:0,left:0,width:0}),P=d.useRef(null),B=d.useRef(null),u=d.useRef(null);d.useEffect(()=>{const n=q=>{const K=q.target;if(!(u.current&&u.current.contains(K))&&P.current&&!P.current.contains(K))if(x(!1),g(!1),L(!1),k){const Q=m.find(me=>me.value===k);w(Q?Q.label:"")}else w("")};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[k,m]),d.useEffect(()=>{g(i)},[i]),d.useEffect(()=>{if(v&&P.current){const n=()=>{if(P.current){const q=P.current.getBoundingClientRect();A({top:q.bottom+window.scrollY,left:q.left+window.scrollX,width:q.width})}};return n(),window.addEventListener("scroll",n,!0),window.addEventListener("resize",n),()=>{window.removeEventListener("scroll",n,!0),window.removeEventListener("resize",n)}}},[v]),d.useEffect(()=>{if(p){const n=m.find(q=>q.value===p);w(n?n.label:p),O(p)}else w(""),O("")},[p,m]);const M=()=>{var n;a||(x(!v),v?L(!1):(g(!0),L(!0),(n=B.current)==null||n.focus()))},D=n=>{const q=n.target.value;w(q),L(!1),v||x(!0)},de=n=>{g(!0),x(!0),L(!0),b==null||b(n)},ce=n=>{g(!1),h==null||h(n)},pe=n=>{w(n.label),O(n.value),y==null||y(n.value),x(!1),g(!1)},U=()=>a?f.light["fg-neutral-alternative"]:f.light["fg-neutral-primary"],J=R?m:m.filter(n=>n.label.toLowerCase().includes(N.toLowerCase()));return t.jsxs(Oe,{ref:P,className:`combobox-container ${E}`,style:j,...V,children:[t.jsxs(Fe,{$size:e,$disabled:a,$active:o,$focused:S,lang:C,children:[t.jsx(Be,{ref:B,$size:e,$disabled:a,$active:o,$focused:S,$hasValue:!!N,lang:C,value:N,placeholder:c,disabled:a,onChange:D,onFocus:de,onBlur:ce}),t.jsx(We,{size:e,onClick:M,children:v?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:U()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:U()})})]}),v&&J.length>0&&ne.createPortal(t.jsx(_e,{ref:u,onMouseDown:n=>n.stopPropagation(),onMouseDownCapture:n=>n.stopPropagation(),onClick:n=>n.stopPropagation(),"data-portal-menu":!0,$top:F.top,$left:F.left,$width:F.width,children:t.jsx(_,{children:J.map(n=>t.jsx(W,{text:n.label,active:n.value===k,onClick:q=>{q.stopPropagation(),pe(n)}},n.value))})}),document.body)]})},Oe=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Fe=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${H["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:o})=>e?`
        background-color: ${s.common[100]};
        border-color: ${$.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&o?`
        background-color: ${s.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:a?`
        background-color: ${s.common[100]};
        border-color: ${$.light["color-border-primary"]};
      `:o?`
        background-color: ${s.common[100]};
        border-color: ${$.light["color-border-focused"]};
      `:`
      background-color: ${s.common[100]};
      border-color: ${$.light["color-border-primary"]};
    `}
`,Be=l.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const o=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(o)*2;switch(e){case"small":return`
          height: 30px;
          ${T(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `;case"large":return`
          height: 46px;
          ${T(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${c}px;
        `;default:return`
          height: 38px;
          ${T(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:o,$hasValue:i})=>e?`
        color: ${f.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&o?`
        color: ${f.light["fg-neutral-primary"]};
      `:a||i?`
        color: ${f.light["fg-neutral-primary"]};
      `:o?`
        color: ${f.light["fg-neutral-alternative"]};
      `:`
      color: ${f.light["fg-neutral-alternative"]};
    `}

  &::placeholder {
    color: ${f.light["fg-neutral-alternative"]};
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
`;const De=l.div`
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
`,_e=re.forwardRef((e,a)=>t.jsx(De,{ref:a,...e})),We=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;X.displayName="ComboBox";X.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const se=({type:e="selector",size:a="medium",disabled:o=!1,active:i=!1,focused:c=!1,placeholder:p="선택해주세요.",value:m,options:y=[],label:b,labelType:h="default",description:E,descriptionLeadingIcon:j=!1,status:C="default",onChange:V,onFocus:v,onBlur:x,className:S="",style:g,lang:N,...w})=>{const R=N;return t.jsxs(Ae,{className:`dropdown-container ${S}`,style:g,...Object.fromEntries(Object.entries(w).filter(([L])=>!["active","focused","size","disabled"].includes(L))),children:[b&&t.jsx(z,{type:h,lang:R,children:b}),e==="combobox"?t.jsx(X,{size:a,disabled:o,active:i,focused:c,placeholder:p,value:m,options:y,onChange:V,onFocus:v,onBlur:x,lang:R}):t.jsx(G,{size:a,disabled:o,active:i,focused:c,placeholder:p,value:m,options:y,onChange:V,onFocus:v,onBlur:x,lang:R}),E&&t.jsx(Y,{status:C,leadingIcon:j,lang:R,children:E})]})},Ae=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  width: 100%;
`;se.displayName="Dropdown";se.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const ue=({size:e="medium",position:a="center",open:o=!1,onClose:i,title:c="제목",showCloseButton:p=!0,children:m,actions:y,className:b="",style:h,...E})=>{const[j,C]=d.useState(!1),[V,v]=d.useState(!1);if(d.useEffect(()=>{if(o){v(!0);const g=setTimeout(()=>{C(!0)},10);return()=>clearTimeout(g)}else{C(!1);const g=setTimeout(()=>{v(!1)},200);return()=>clearTimeout(g)}},[o]),!V)return null;const x=g=>{if(g.target.closest("[data-portal-menu]")){g.preventDefault(),g.stopPropagation();return}g.target===g.currentTarget&&(i==null||i())},S=()=>{i==null||i()};return t.jsx(ze,{$isVisible:j,$position:a,onClick:x,children:t.jsxs(Ye,{$size:e,$isVisible:j,className:b,style:h,...E,children:[t.jsxs(Ge,{children:[t.jsx(Xe,{children:c}),p&&t.jsx(Ue,{onClick:S,children:t.jsx(ye,{width:24,height:24,color:"currentColor"})})]}),t.jsx(Je,{children:m}),y&&t.jsx(Ke,{children:y})]})})},ze=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${le.light["bg-overlay"]};
  display: flex;
  z-index: 1000;
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
  padding: 40px;

  ${({$position:e})=>{const a=e.startsWith("top-")?"flex-start":e.startsWith("bottom-")?"flex-end":"center",o=e.endsWith("-left")?"flex-start":e.endsWith("-right")?"flex-end":"center";return`
      align-items: ${a};
      justify-content: ${o};
    `}}
`,Ye=l.div`
  background-color: ${le.light["bg-layer-floating"]};
  border: 1px solid ${$.light["color-border-primary"]};
  border-radius: ${H["rounded-3"]};
  box-shadow: ${oe.light["shadow-lg"]};
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
`,Ge=l.div`
  padding: ${r.gap["gap-6"]} ${r.gap["gap-6"]}
    ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  border-radius: ${H["rounded-3"]} ${H["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Xe=l.h2`
  ${ge.heading1}
  font-weight: 600;
  color: ${s.gray[950]};
  margin: 0;
`,Ue=l.button`
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
`,Je=l.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]};
  flex: 1;
  overflow: visible;
`,Ke=l.div`
  padding: ${r.gap["gap-3"]} ${r.gap["gap-6"]}
    ${r.gap["gap-6"]} ${r.gap["gap-6"]};
  display: flex;
  gap: ${r.gap["gap-2"]};
`;l.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${s.common[100]};
  border: 1px solid ${$.light["color-border-primary"]};
  border-radius: ${H["rounded-2"]};
  color: ${s.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${s.gray[50]};
  }
`;l.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${s.gray[950]};
  border: none;
  border-radius: ${H["rounded-2"]};
  color: ${s.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${s.gray[925]};
  }
`;ue.displayName="Modal";ue.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},position:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "center-left"
| "center"
| "center-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"center-left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"center-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{W as C,Y as D,z as L,_ as M,G as S,X as a,se as b,ue as c};
