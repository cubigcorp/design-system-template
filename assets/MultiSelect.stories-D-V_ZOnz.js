import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-C8Me4DqF.js";import{a as l}from"./MultiSelect-MlvCqOer.js";import"./index-D3w0nx1t.js";import"./index-AWqxrulN.js";import"./styled-components.browser.esm-DPhkORiP.js";import"./icon_close_outline_16-Dr5VV8ry.js";import"./spacing-tE1IiUFl.js";import"./shadow-DVq_1U2q.js";import"./color-CiwAFuFb.js";import"./fontFamily-CsG1KcIF.js";import"./radius-DaoU83SK.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./Chip-ZuZWVfmh.js";const me={title:"Components/MultiSelect",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"MultiSelect는 드롭다운에서 여러 옵션을 선택하고 Chip 형태로 표시하는 컴포넌트입니다. 입력을 통해 옵션을 검색할 수 있으며, 선택된 항목은 Chip으로 표시되고 X 버튼으로 제거할 수 있습니다."}}},argTypes:{size:{control:{type:"select"},options:["small","medium","large"],description:"컴포넌트 크기"},disabled:{control:{type:"boolean"},description:"비활성화 상태"},placeholder:{control:{type:"text"},description:"플레이스홀더 텍스트"},lang:{control:{type:"select"},options:["ko","en"],description:"언어 설정"}}},r=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"nextjs",label:"Next.js"},{value:"nuxt",label:"Nuxt"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"solid",label:"Solid"},{value:"qwik",label:"Qwik"},{value:"astro",label:"Astro"},{value:"preact",label:"Preact"},{value:"lit",label:"Lit"},{value:"alpine",label:"Alpine.js"},{value:"ember",label:"Ember"},{value:"backbone",label:"Backbone"},{value:"meteor",label:"Meteor"},{value:"aurelia",label:"Aurelia"},{value:"mithril",label:"Mithril"},{value:"riot",label:"Riot"}],i={render:n=>{const[t,a]=s.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{...n,value:t,onChange:a,options:r})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},o={render:n=>{const[t,a]=s.useState(["react","nextjs"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{...n,value:t,onChange:a,options:r})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},u={render:n=>{const[t,a]=s.useState(["vue","angular"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{...n,value:t,onChange:a,options:r})})},args:{size:"small",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},p={render:n=>{const[t,a]=s.useState(["react","vue","angular"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{...n,value:t,onChange:a,options:r})})},args:{size:"large",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},d={render:n=>{const[t,a]=s.useState(["react","nextjs"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(l,{...n,value:t,onChange:a,options:r})})},args:{size:"medium",disabled:!0,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},c={parameters:{controls:{disable:!0}},render:()=>{const[n,t]=s.useState(["react"]),[a,x]=s.useState(["react","vue"]),[N,_]=s.useState(["react","vue","angular"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:"Small"}),e.jsx(l,{size:"small",value:n,onChange:t,options:r,placeholder:"선택해주세요"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:"Medium"}),e.jsx(l,{size:"medium",value:a,onChange:x,options:r,placeholder:"선택해주세요"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:"Large"}),e.jsx(l,{size:"large",value:N,onChange:_,options:r,placeholder:"선택해주세요"})]})]})}},m={render:n=>{const[t,a]=s.useState(["react","vue","angular","svelte","nextjs","nuxt","gatsby","remix","solid","qwik"]);return e.jsx("div",{style:{width:"500px"},children:e.jsx(l,{...n,value:t,onChange:a,options:r})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요",lang:"ko"}},g={parameters:{controls:{disable:!0}},render:()=>{const[n,t]=s.useState(["react","vue","angular","svelte","nextjs","nuxt","gatsby","remix"]),[a,x]=s.useState(["react","vue","angular","svelte","nextjs","nuxt","gatsby","remix","solid","qwik","astro","preact","lit","alpine","ember"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"40px",width:"500px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:'lineMode = "single" (한 줄 고정, 가로 스크롤)'}),e.jsx(l,{size:"medium",value:n,onChange:t,options:r,placeholder:"선택해주세요",lineMode:"single"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:"한 줄로만 표시되고 가로 스크롤이 생깁니다"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"12px"},children:'lineMode = "multi" (최대 3줄까지, 이후 세로 스크롤)'}),e.jsx(l,{size:"medium",value:a,onChange:x,options:r,placeholder:"선택해주세요",lineMode:"multi"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:"최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다"})]})]})}};var v,h,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(h=i.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var b,y,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var j,z,V;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var M,C,w;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var L,k,O;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};var W,B,D;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var A,q,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(["react", "vue", "angular", "svelte", "nextjs", "nuxt", "gatsby", "remix", "solid", "qwik"]);
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
}`,...(T=(q=m.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var E,R,I;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => {
    const [singleLine, setSingleLine] = useState<string[]>(["react", "vue", "angular", "svelte", "nextjs", "nuxt", "gatsby", "remix"]);
    const [multiLine, setMultiLine] = useState<string[]>(["react", "vue", "angular", "svelte", "nextjs", "nuxt", "gatsby", "remix", "solid", "qwik", "astro", "preact", "lit", "alpine", "ember"]);
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
            lineMode = "single" (한 줄 고정, 가로 스크롤)
          </h3>
          <MultiSelect size="medium" value={singleLine} onChange={setSingleLine} options={sampleOptions} placeholder="선택해주세요" lineMode="single" />
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginTop: "8px"
        }}>
            한 줄로만 표시되고 가로 스크롤이 생깁니다
          </p>
        </div>

        <div>
          <h3 style={{
          fontSize: "16px",
          fontWeight: "600",
          marginBottom: "12px"
        }}>
            lineMode = "multi" (최대 3줄까지, 이후 세로 스크롤)
          </h3>
          <MultiSelect size="medium" value={multiLine} onChange={setMultiLine} options={sampleOptions} placeholder="선택해주세요" lineMode="multi" />
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginTop: "8px"
        }}>
            최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다
          </p>
        </div>
      </div>;
  }
}`,...(I=(R=g.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const ge=["Default","WithInitialValues","Small","Large","Disabled","AllSizes","ManySelections","LineModeComparison"];export{c as AllSizes,i as Default,d as Disabled,p as Large,g as LineModeComparison,m as ManySelections,u as Small,o as WithInitialValues,ge as __namedExportsOrder,me as default};
