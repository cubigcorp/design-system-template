import{j as t}from"./jsx-runtime-LGVg57uG.js";import{d as l}from"./styled-components.browser.esm-BW_iKIoh.js";import{c as i}from"./color-DqDZjiGS.js";import{t as g}from"./textColor-SSyLf7rE.js";import{f as C}from"./fontFamily-CsG1KcIF.js";import{t as k,a as ge}from"./typography-BccJP5aO.js";import{s as r}from"./spacing-tE1IiUFl.js";import{p as Z,n as ee}from"./negativeColor-MzvdT1cG.js";import{c as fe,b as ve,I as he,j as te,k as ae,i as ye}from"./IconSearch-CNHXTmOn.js";import{r as u,R as re}from"./iframe-yLG4zRh-.js";import{r as ne}from"./index-mrIK72pP.js";import{s as oe}from"./shadow-DVq_1U2q.js";import{r as P}from"./radius-DaoU83SK.js";import{b as T}from"./borderColor-CQKT7y1f.js";import{l as le}from"./layerColor-D_HAcI5O.js";const z=({children:e,type:a="default",className:n="",lang:d,...c})=>{const m=d,p=()=>{switch(a){case"required":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(xe,{children:"*"})]});case"optional":return t.jsxs(t.Fragment,{children:[t.jsx("span",{children:e}),t.jsx(we,{children:"(선택)"})]});default:return t.jsx("span",{children:e})}};return t.jsx(be,{$type:a,lang:m,className:n,...c,children:p()})},be=l.label`
  ${k(void 0,"body2","medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${C.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${C.ko};
  }
  height: 20px;
  display: flex;
  align-items: center;
  color: ${g.light["fg-neutral-strong"]};
`,xe=l.span`
  ${k(void 0,"caption2","regular")}
  color: ${i.red[500]};
  margin-left: ${r.gap["gap-0.5"]};
`,we=l.span`
  ${k(void 0,"body2","regular")}
  color: ${g.light["fg-neutral-alternative"]};
  margin-left: ${r.gap["gap-0.5"]};
`;z.displayName="Label";z.__docgenInfo={description:"",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const Y=({children:e,status:a="default",leadingIcon:n=!1,className:d="",lang:c,...m})=>{const p=c,y=()=>{if(!n)return null;switch(a){case"negative":return t.jsx(Te,{children:t.jsx(ve,{})});case"positive":return t.jsx(ke,{children:t.jsx(fe,{})});default:return null}};return t.jsxs($e,{status:a,lang:p,className:d,...m,children:[y(),t.jsx("span",{children:e})]})},$e=l.div`
  ${k(void 0,"caption2","regular")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${C.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${C.ko};
  }
  height: 16px;
  display: flex;
  align-items: center;

  color: ${({status:e})=>{switch(e){case"negative":return ee.light["fg-negative-primary"];case"positive":return Z.light["fg-positive-primary"];default:return g.light["fg-neutral-assistive"]}}};
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
`;Y.displayName="Description";Y.__docgenInfo={description:"",methods:[],displayName:"Description",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const _=({children:e,className:a,...n})=>t.jsx(qe,{className:a,...n,children:e}),qe=l.div`
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
    font-family: ${C.ko};
  }

  &[lang="en"] {
    font-family: ${C.en};
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
    background: ${i.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${i.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${i.gray[200]} transparent;
`;_.displayName="Menu";_.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const A=({disable:e=!1,active:a=!1,leadingIcon:n,text:d,description:c,trailingIcon:m,onClick:p,className:y,lang:b})=>{const v=()=>e?g.light["fg-neutral-disable"]:g.light["fg-neutral-primary"],q=()=>a&&!e;return t.jsxs(Ee,{disable:e,active:a,"data-disable":e,onClick:e?void 0:R=>p==null?void 0:p(R),className:y,lang:b,children:[n&&t.jsx(je,{children:t.jsx(n,{width:16,height:16,color:v()})}),t.jsxs(Re,{children:[d&&t.jsx(Ie,{children:d}),c&&t.jsx(Ce,{children:c})]}),q()&&t.jsx(Se,{children:m?t.jsx(m,{width:16,height:16,color:v()}):t.jsx(he,{width:16,height:16,color:v()})})]})},Ee=l.div`
  display: flex;
  align-items: center;
  gap: ${r.gap["gap-1"]};
  padding: ${r.gap["gap-1.5"]} ${r.gap["gap-2"]};
  border-radius: ${P["rounded-1"]};
  background-color: ${i.common[100]};
  cursor: ${({disable:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;

  &:hover:not([data-disable="true"]) {
    background-color: ${i.gray[50]};
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
  ${k(void 0,"body2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${C.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${C.ko};
  }
  color: inherit;
`,Ce=l.div`
  ${k(void 0,"caption2","regular")}
  font-family: inherit;
  &:lang(en),
  &[lang="en"] {
    font-family: ${C.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${C.ko};
  }
  color: ${g.light["fg-neutral-alternative"]};
`,Se=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;A.displayName="Cell";A.__docgenInfo={description:"",methods:[],displayName:"Cell",props:{disable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<{ width?: number; height?: number; color?: string }>",elements:[{name:"signature",type:"object",raw:"{ width?: number; height?: number; color?: string }",signature:{properties:[{key:"width",value:{name:"number",required:!1}},{key:"height",value:{name:"number",required:!1}},{key:"color",value:{name:"string",required:!1}}]}}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const G=({size:e="medium",disabled:a=!1,active:n=!1,focused:d=!1,placeholder:c="선택해주세요.",value:m,options:p=[],onChange:y,onFocus:b,onBlur:v,className:q="",style:R,lang:V="ko",...S})=>{const[f,x]=u.useState(!1),[h,$]=u.useState(n),[H,w]=u.useState(d),[I,L]=u.useState({top:0,left:0,width:0}),E=u.useRef(null),O=u.useRef(null);u.useEffect(()=>{const s=M=>{const D=M.target;O.current&&O.current.contains(D)||E.current&&!E.current.contains(D)&&(x(!1),w(!1))};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[]),u.useEffect(()=>{$(n)},[n]),u.useEffect(()=>{w(d)},[d]),u.useEffect(()=>{if(f&&E.current){const s=()=>{if(E.current){const M=E.current.getBoundingClientRect();L({top:M.bottom+window.scrollY,left:M.left+window.scrollX,width:M.width})}};return s(),window.addEventListener("scroll",s,!0),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s)}}},[f]);const F=p.find(s=>s.value===m),W=()=>{a||(x(!f),f?(w(!1),$(!1),v==null||v({})):(w(!0),$(!0),b==null||b({})))},N=s=>{y==null||y(s.value),x(!1),w(!1),v==null||v({})},B=()=>a?g.light["fg-neutral-alternative"]:g.light["fg-neutral-primary"];return t.jsxs(Le,{ref:E,className:`selector-container ${q}`,style:R,...S,children:[t.jsxs(Ne,{$size:e,$disabled:a,$active:h,$focused:H,lang:V,onClick:W,type:"button","data-active":h?"true":"false",children:[t.jsx(Pe,{children:F?F.label:c}),t.jsx(He,{size:e,children:f?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:B()})})]}),f&&ne.createPortal(t.jsx(Ve,{ref:O,onMouseDown:s=>s.stopPropagation(),onMouseDownCapture:s=>s.stopPropagation(),onClick:s=>s.stopPropagation(),"data-portal-menu":!0,$top:I.top,$left:I.left,$width:I.width,children:t.jsx(_,{children:p.map(s=>t.jsx(A,{text:s.label,active:s.value===m,onClick:M=>{M.stopPropagation(),N(s)}},s.value))})}),document.body)]})},Le=l.div`
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
  border-radius: ${P["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({$size:e,lang:a="ko"})=>{const n=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(n)*2;switch(e){case"small":return`
          height: 32px;
          ${k(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `;case"large":return`
          height: 48px;
          ${k(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${c}px;
        `;default:return`
          height: 40px;
          ${k(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `}}}

  /* Color styles based on status, disabled, active, focused */
  ${({$disabled:e,$active:a,$focused:n})=>e?`
        background-color: ${i.gray[50]};
        color: ${g.light["fg-neutral-disable"]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&n?`
        background-color: ${i.gray[50]};
        color: ${g.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${i.common[100]};
        color: ${g.light["fg-neutral-primary"]};
        border-color: ${T.light["color-border-primary"]};
      `:n?`
        background-color: ${i.gray[50]};
        color: ${g.light["fg-neutral-alternative"]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${i.common[100]};
      color: ${g.light["fg-neutral-alternative"]};
      border-color: ${T.light["color-border-primary"]};
    `}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${i.gray[50]};
    border-color: ${i.gray[300]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${i.gray[50]};
    border-color: ${i.gray[300]};
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
`;G.displayName="Selector";G.__docgenInfo={description:"",methods:[],displayName:"Selector",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectorOption"}],raw:"SelectorOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const X=({size:e="medium",disabled:a=!1,active:n=!1,focused:d=!1,placeholder:c="입력하거나 선택해주세요.",value:m,options:p=[],onChange:y,onFocus:b,onBlur:v,className:q="",style:R,lang:V="ko",...S})=>{const[f,x]=u.useState(!1),[h,$]=u.useState(d),[H,w]=u.useState(m||""),[I,L]=u.useState(!0),[E,O]=u.useState(m||""),[F,W]=u.useState({top:0,left:0,width:0}),N=u.useRef(null),B=u.useRef(null),s=u.useRef(null);u.useEffect(()=>{const o=j=>{const K=j.target;if(!(s.current&&s.current.contains(K))&&N.current&&!N.current.contains(K))if(x(!1),$(!1),L(!1),E){const Q=p.find(me=>me.value===E);w(Q?Q.label:"")}else w("")};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[E,p]),u.useEffect(()=>{$(d)},[d]),u.useEffect(()=>{if(f&&N.current){const o=()=>{if(N.current){const j=N.current.getBoundingClientRect();W({top:j.bottom+window.scrollY,left:j.left+window.scrollX,width:j.width})}};return o(),window.addEventListener("scroll",o,!0),window.addEventListener("resize",o),()=>{window.removeEventListener("scroll",o,!0),window.removeEventListener("resize",o)}}},[f]),u.useEffect(()=>{if(m){const o=p.find(j=>j.value===m);w(o?o.label:m),O(m)}else w(""),O("")},[m,p]);const M=()=>{var o;a||(x(!f),f?L(!1):($(!0),L(!0),(o=B.current)==null||o.focus()))},D=o=>{const j=o.target.value;w(j),L(!1),f||x(!0)},de=o=>{$(!0),x(!0),L(!0),b==null||b(o)},ce=o=>{$(!1),v==null||v(o)},pe=o=>{w(o.label),O(o.value),y==null||y(o.value),x(!1),$(!1)},U=()=>a?g.light["fg-neutral-alternative"]:g.light["fg-neutral-primary"],J=I?p:p.filter(o=>o.label.toLowerCase().includes(H.toLowerCase()));return t.jsxs(Oe,{ref:N,className:`combobox-container ${q}`,style:R,...S,children:[t.jsxs(Fe,{$size:e,$disabled:a,$active:n,$focused:h,lang:V,children:[t.jsx(Be,{ref:B,$size:e,$disabled:a,$active:n,$focused:h,$hasValue:!!H,lang:V,value:H,placeholder:c,disabled:a,onChange:D,onFocus:de,onBlur:ce}),t.jsx(Ae,{size:e,onClick:M,children:f?t.jsx(te,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:U()}):t.jsx(ae,{width:e==="small"?16:e==="large"?24:20,height:e==="small"?16:e==="large"?24:20,color:U()})})]}),f&&J.length>0&&ne.createPortal(t.jsx(_e,{ref:s,onMouseDown:o=>o.stopPropagation(),onMouseDownCapture:o=>o.stopPropagation(),onClick:o=>o.stopPropagation(),"data-portal-menu":!0,$top:F.top,$left:F.left,$width:F.width,children:t.jsx(_,{children:J.map(o=>t.jsx(A,{text:o.label,active:o.value===E,onClick:j=>{j.stopPropagation(),pe(o)}},o.value))})}),document.body)]})},Oe=l.div`
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
  border-radius: ${P["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  ${({$disabled:e,$active:a,$focused:n})=>e?`
        background-color: ${i.common[100]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a&&n?`
        background-color: ${i.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:a?`
        background-color: ${i.common[100]};
        border-color: ${T.light["color-border-primary"]};
      `:n?`
        background-color: ${i.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${i.common[100]};
      border-color: ${T.light["color-border-primary"]};
    `}
`,Be=l.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;

  ${({$size:e,lang:a="ko"})=>{const n=e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"],c=(e==="small"?16:e==="large"?24:20)+parseInt(n)*2;switch(e){case"small":return`
          height: 30px;
          ${k(a,"body2","regular")}
          padding: ${r.gap["gap-1"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `;case"large":return`
          height: 46px;
          ${k(a,"body3","regular")}
          padding: ${r.gap["gap-3"]} ${r.gap["gap-2.5"]};
          padding-right: ${c}px;
        `;default:return`
          height: 38px;
          ${k(a,"body3","regular")}
          padding: ${r.gap["gap-2"]} ${r.gap["gap-2"]};
          padding-right: ${c}px;
        `}}}

  ${({$disabled:e,$active:a,$focused:n,$hasValue:d})=>e?`
        color: ${g.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:a&&n?`
        color: ${g.light["fg-neutral-primary"]};
      `:a||d?`
        color: ${g.light["fg-neutral-primary"]};
      `:n?`
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
`,_e=re.forwardRef((e,a)=>t.jsx(De,{ref:a,...e})),Ae=l.div`
  position: absolute;
  right: ${({size:e})=>e==="large"?r.gap["gap-2.5"]:r.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
`;X.displayName="ComboBox";X.__docgenInfo={description:"",methods:[],displayName:"ComboBox",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"ComboBoxOption"}],raw:"ComboBoxOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:"",defaultValue:{value:'"ko"',computed:!1}}}};const se=({type:e="selector",size:a="medium",disabled:n=!1,active:d=!1,focused:c=!1,placeholder:m="선택해주세요.",value:p,options:y=[],label:b,labelType:v="default",description:q,descriptionLeadingIcon:R=!1,status:V="default",onChange:S,onFocus:f,onBlur:x,className:h="",style:$,lang:H,...w})=>{const I=H;return t.jsxs(We,{className:`dropdown-container ${h}`,style:$,...Object.fromEntries(Object.entries(w).filter(([L])=>!["active","focused","size","disabled"].includes(L))),children:[b&&t.jsx(z,{type:v,lang:I,children:b}),e==="combobox"?t.jsx(X,{size:a,disabled:n,active:d,focused:c,placeholder:m,value:p,options:y,onChange:S,onFocus:f,onBlur:x,lang:I}):t.jsx(G,{size:a,disabled:n,active:d,focused:c,placeholder:m,value:p,options:y,onChange:S,onFocus:f,onBlur:x,lang:I}),q&&t.jsx(Y,{status:V,leadingIcon:R,lang:I,children:q})]})},We=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.gap["gap-1"]};
  width: 100%;
`;se.displayName="Dropdown";se.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{type:{required:!1,tsType:{name:"union",raw:'"selector" | "combobox"',elements:[{name:"literal",value:'"selector"'},{name:"literal",value:'"combobox"'}]},description:"",defaultValue:{value:'"selector"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"",defaultValue:{value:"[]",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:'"default" | "required" | "optional"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"required"'},{name:"literal",value:'"optional"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"default" | "negative" | "positive"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"positive"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>
) => void`,signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement | HTMLInputElement>",elements:[{name:"union",raw:"HTMLButtonElement | HTMLInputElement",elements:[{name:"HTMLButtonElement"},{name:"HTMLInputElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};const ue=({size:e="medium",open:a=!1,onClose:n,title:d="제목",showCloseButton:c=!0,children:m,actions:p,className:y="",style:b,...v})=>{const[q,R]=u.useState(!1),[V,S]=u.useState(!1);if(u.useEffect(()=>{if(a){S(!0);const h=setTimeout(()=>{R(!0)},10);return()=>clearTimeout(h)}else{R(!1);const h=setTimeout(()=>{S(!1)},200);return()=>clearTimeout(h)}},[a]),!V)return null;const f=h=>{if(h.target.closest("[data-portal-menu]")){h.preventDefault(),h.stopPropagation();return}h.target===h.currentTarget&&(n==null||n())},x=()=>{n==null||n()};return t.jsx(ze,{$isVisible:q,onClick:f,children:t.jsxs(Ye,{$size:e,$isVisible:q,className:y,style:b,...v,children:[t.jsxs(Ge,{children:[t.jsx(Xe,{children:d}),c&&t.jsx(Ue,{onClick:x,children:t.jsx(ye,{width:24,height:24,color:"currentColor"})})]}),t.jsx(Je,{children:m}),p&&t.jsx(Ke,{children:p})]})})},ze=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${le.light["bg-overlay"]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({$isVisible:e})=>e?1:0};
  transition: opacity 0.2s ease-in-out;
`,Ye=l.div`
  background-color: ${le.light["bg-layer-floating"]};
  border: 1px solid ${T.light["color-border-primary"]};
  border-radius: ${P["rounded-3"]};
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
  border-radius: ${P["rounded-3"]} ${P["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Xe=l.h2`
  ${ge.heading1}
  font-weight: 600;
  color: ${i.gray[950]};
  margin: 0;
`,Ue=l.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${i.gray[950]};
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
  background-color: ${i.common[100]};
  border: 1px solid ${T.light["color-border-primary"]};
  border-radius: ${P["rounded-2"]};
  color: ${i.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${i.gray[50]};
  }
`;l.button`
  padding: ${r.gap["gap-2"]} ${r.gap["gap-4"]};
  background-color: ${i.gray[950]};
  border: none;
  border-radius: ${P["rounded-2"]};
  color: ${i.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${i.gray[925]};
  }
`;ue.displayName="Modal";ue.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"제목"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},actions:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};export{A as C,Y as D,z as L,_ as M,G as S,X as a,se as b,ue as c};
