import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s,R as Ve}from"./iframe-7NLoKurR.js";import{r as je}from"./index-SjQIEdkG.js";import{d as m,t as L}from"./textColor-Dt7bNVQe.js";import{S as Ce}from"./icon_close_outline_16-T8JS2EbQ.js";import{M as Me,C as $e}from"./Cell-D2pfdMqd.js";import{C as ze}from"./Chip-CYvyTBzz.js";import{c as O}from"./color-CiwAFuFb.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import{b as T}from"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as P}from"./typography-BBThIZ7c.js";import{r as ke}from"./radius-DaoU83SK.js";import{s as W}from"./spacing-tE1IiUFl.js";import"./index-6VrKTyFP.js";import"./shadow-DVq_1U2q.js";import"./fontFamily-CsG1KcIF.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./lineHeight-aJXO3HIm.js";const i=({size:t="medium",disabled:a=!1,placeholder:l="입력하거나 선택해주세요.",value:g=[],options:h=[],onChange:d,onFocus:C,onBlur:M,className:pe="",style:me,lang:q="ko",...ge})=>{const[v,$]=s.useState(!1),[A,z]=s.useState(!1),[k,E]=s.useState(""),[c,R]=s.useState(g),[f,he]=s.useState({top:0,left:0,width:0,openUpward:!1}),p=s.useRef(null),D=s.useRef(null),I=s.useRef(null);s.useEffect(()=>{const e=r=>{const o=r.target;I.current&&I.current.contains(o)||p.current&&!p.current.contains(o)&&($(!1),z(!1),E(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),s.useEffect(()=>{if(v&&p.current){const e=()=>{if(p.current){const r=p.current.getBoundingClientRect(),o=400,B=4,N=window.innerHeight-r.bottom,be=r.top,F=N<o&&be>N;he({top:F?r.top+window.scrollY-B:r.bottom+window.scrollY+B,left:r.left+window.scrollX,width:r.width,openUpward:F})}};return e(),window.addEventListener("scroll",e,!0),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e,!0),window.removeEventListener("resize",e)}}},[v]),s.useEffect(()=>{R(g)},[g]);const ve=e=>{const r=e.target.value;E(r),v||$(!0)},fe=e=>{z(!0),$(!0),C==null||C(e)},xe=e=>{z(!1),M==null||M(e)},Se=e=>{var r;if(!c.includes(e.value)){const o=[...c,e.value];R(o),d==null||d(o)}E(""),(r=D.current)==null||r.focus()},we=e=>{const r=c.filter(o=>o!==e);R(r),d==null||d(r)},H=h.filter(e=>{const r=k?e.label.toLowerCase().includes(k.toLowerCase()):!0,o=!c.includes(e.value);return r&&o}),ye=e=>h.find(r=>r.value===e);return n.jsxs(Ee,{ref:p,className:`multiselect-container ${pe}`,style:me,...ge,children:[n.jsx(Re,{$size:t,$disabled:a,$focused:A,$hasChips:c.length>0,lang:q,children:n.jsxs(Ie,{children:[c.map(e=>{const r=ye(e);return r?n.jsx(Le,{onClick:o=>{a||(o.stopPropagation(),we(e))},children:n.jsx(ze,{type:"outline",size:"x-small",disabled:a,trailingIcon:a?void 0:n.jsx(Ce,{color:"currentColor"}),children:r.label})},e):null}),n.jsx(Oe,{ref:D,$size:t,$disabled:a,$focused:A,$hasChips:c.length>0,lang:q,value:k,placeholder:c.length===0?l:"",disabled:a,onChange:ve,onFocus:fe,onBlur:xe})]})}),v&&H.length>0&&je.createPortal(n.jsx(Pe,{ref:I,onMouseDown:e=>e.stopPropagation(),onMouseDownCapture:e=>e.stopPropagation(),onClick:e=>e.stopPropagation(),"data-portal-menu":!0,$top:f.top,$left:f.left,$width:f.width,$openUpward:f.openUpward,children:n.jsx(Me,{children:H.map(e=>n.jsx($e,{text:e.label,onClick:r=>{r.stopPropagation(),Se(e)}},e.value))})}),document.body)]})},Ee=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Re=m.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid;
  border-radius: ${ke["rounded-2"]};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  min-height: ${({$size:t})=>{switch(t){case"small":return"30px";case"large":return"46px";default:return"38px"}}};

  ${({$disabled:t,$focused:a})=>t?`
        background-color: ${O.common[100]};
        border-color: ${T.light["color-border-primary"]};
        cursor: not-allowed;
      `:a?`
        background-color: ${O.common[100]};
        border-color: ${T.light["color-border-focused"]};
      `:`
      background-color: ${O.common[100]};
      border-color: ${T.light["color-border-primary"]};
    `}
`,Ie=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${W.gap["gap-1"]};
  align-items: center;
  flex: 1;
  padding: ${W.gap["gap-1"]} ${W.gap["gap-2"]};
  min-height: inherit;
`,Le=m.div`
  display: inline-flex;
  cursor: pointer;
`,Oe=m.input`
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  box-sizing: border-box;
  padding: 0;

  ${({$size:t,lang:a="ko"})=>{switch(t){case"small":return`
          height: 22px;
          ${P(a,"body2","regular")}
        `;case"large":return`
          height: 30px;
          ${P(a,"body3","regular")}
        `;default:return`
          height: 26px;
          ${P(a,"body3","regular")}
        `}}}

  ${({$disabled:t})=>t?`
        color: ${L.light["fg-neutral-disable"]};
        cursor: not-allowed;
      `:`
      color: ${L.light["fg-neutral-primary"]};
    `}

  &::placeholder {
    color: ${L.light["fg-neutral-alternative"]};
  }
`,Te=m.div`
  position: absolute;
  ${({$top:t,$openUpward:a})=>a?`bottom: calc(100vh - ${t}px);`:`top: ${t}px;`}
  left: ${({$left:t})=>t}px;
  width: ${({$width:t})=>t}px;
  z-index: 9999;

  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`,Pe=Ve.forwardRef((t,a)=>n.jsx(Te,{ref:a,...t}));i.displayName="MultiSelect";i.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:`컴포넌트 크기
@default "medium"`,defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`비활성화 상태
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`플레이스홀더 텍스트
@default "입력하거나 선택해주세요."`,defaultValue:{value:'"입력하거나 선택해주세요."',computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"선택된 값들",defaultValue:{value:"[]",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:"선택 가능한 옵션 목록",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"값 변경 시 호출되는 콜백"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 시 호출되는 콜백"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 시 호출되는 콜백"},className:{required:!1,tsType:{name:"string"},description:"추가 CSS 클래스명",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"인라인 스타일"},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:`언어 설정
@default "ko"`,defaultValue:{value:'"ko"',computed:!1}}}};const ot={title:"Components/MultiSelect",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"MultiSelect는 드롭다운에서 여러 옵션을 선택하고 Chip 형태로 표시하는 컴포넌트입니다. 입력을 통해 옵션을 검색할 수 있으며, 선택된 항목은 Chip으로 표시되고 X 버튼으로 제거할 수 있습니다."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"컴포넌트 크기"},disabled:{control:{type:"boolean"},description:"비활성화 상태"},placeholder:{control:{type:"text"},description:"플레이스홀더 텍스트"},lang:{control:{type:"select"},options:["ko","en"],description:"언어 설정"}}},u=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"nextjs",label:"Next.js"},{value:"nuxt",label:"Nuxt"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"}],x={render:t=>{const[a,l]=s.useState([]);return n.jsx("div",{style:{width:"400px"},children:n.jsx(i,{...t,value:a,onChange:l,options:u})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},S={render:t=>{const[a,l]=s.useState(["react","nextjs"]);return n.jsx("div",{style:{width:"400px"},children:n.jsx(i,{...t,value:a,onChange:l,options:u})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},w={render:t=>{const[a,l]=s.useState(["vue","angular"]);return n.jsx("div",{style:{width:"400px"},children:n.jsx(i,{...t,value:a,onChange:l,options:u})})},args:{size:"small",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},y={render:t=>{const[a,l]=s.useState(["react","vue","angular"]);return n.jsx("div",{style:{width:"400px"},children:n.jsx(i,{...t,value:a,onChange:l,options:u})})},args:{size:"large",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},b={render:t=>{const[a,l]=s.useState(["react","nextjs"]);return n.jsx("div",{style:{width:"400px"},children:n.jsx(i,{...t,value:a,onChange:l,options:u})})},args:{size:"medium",disabled:!0,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},V={parameters:{controls:{disable:!0}},render:()=>{const[t,a]=s.useState(["react"]),[l,g]=s.useState(["react","vue"]),[h,d]=s.useState(["react","vue","angular"]);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px",width:"500px"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:"Small"}),n.jsx(i,{size:"small",value:t,onChange:a,options:u,placeholder:"선택해주세요"})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:"Medium"}),n.jsx(i,{size:"medium",value:l,onChange:g,options:u,placeholder:"선택해주세요"})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:"Large"}),n.jsx(i,{size:"large",value:h,onChange:d,options:u,placeholder:"선택해주세요"})]})]})}},j={render:t=>{const[a,l]=s.useState(["react","vue","angular","svelte","nextjs"]);return n.jsx("div",{style:{width:"500px"},children:n.jsx(i,{...t,value:a,onChange:l,options:u})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}};var U,_,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: "400px"
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: "medium",
    disabled: false,
    placeholder: "프레임워크를 선택해주세요",
    lang: "ko"
  }
}`,...(G=(_=x.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var X,Y,J;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(["react", "nextjs"]);
    return <div style={{
      width: "400px"
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: "medium",
    disabled: false,
    placeholder: "프레임워크를 선택해주세요",
    lang: "ko"
  }
}`,...(J=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,Z;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(["vue", "angular"]);
    return <div style={{
      width: "400px"
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: "small",
    disabled: false,
    placeholder: "프레임워크를 선택해주세요",
    lang: "ko"
  }
}`,...(Z=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(["react", "vue", "angular"]);
    return <div style={{
      width: "400px"
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: "large",
    disabled: false,
    placeholder: "프레임워크를 선택해주세요",
    lang: "ko"
  }
}`,...(ne=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,re,se;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(["react", "nextjs"]);
    return <div style={{
      width: "400px"
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: "medium",
    disabled: true,
    placeholder: "프레임워크를 선택해주세요",
    lang: "ko"
  }
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,oe,ie;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [smallValue, setSmallValue] = useState<string[]>(["react"]);
    const [mediumValue, setMediumValue] = useState<string[]>(["react", "vue"]);
    const [largeValue, setLargeValue] = useState<string[]>(["react", "vue", "angular"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      width: "500px"
    }}>
        <div>
          <h3 style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "12px"
        }}>
            Small
          </h3>
          <MultiSelect size="small" value={smallValue} onChange={setSmallValue} options={sampleOptions} placeholder="선택해주세요" />
        </div>

        <div>
          <h3 style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "12px"
        }}>
            Medium
          </h3>
          <MultiSelect size="medium" value={mediumValue} onChange={setMediumValue} options={sampleOptions} placeholder="선택해주세요" />
        </div>

        <div>
          <h3 style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "12px"
        }}>
            Large
          </h3>
          <MultiSelect size="large" value={largeValue} onChange={setLargeValue} options={sampleOptions} placeholder="선택해주세요" />
        </div>
      </div>;
  }
}`,...(ie=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,de,ce;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(["react", "vue", "angular", "svelte", "nextjs"]);
    return <div style={{
      width: "500px"
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: "medium",
    disabled: false,
    placeholder: "프레임워크를 선택해주세요",
    lang: "ko"
  }
}`,...(ce=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const it=["Default","WithInitialValues","Small","Large","Disabled","AllSizes","ManySelections"];export{V as AllSizes,x as Default,b as Disabled,y as Large,j as ManySelections,w as Small,S as WithInitialValues,it as __namedExportsOrder,ot as default};
