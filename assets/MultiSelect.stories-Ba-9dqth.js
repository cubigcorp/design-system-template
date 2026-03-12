import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-CvA0Eg-6.js";import{M as i}from"./MultiSelect-Ds90yW3a.js";import"./preload-helper-eJNa_G2e.js";import"./index-CLKNED9_.js";import"./index-BHEQGJof.js";import"./styled-components.browser.esm-CjbLCBIw.js";import"./Chip-DdBZy_ci.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./fontWeight-CRwBdwgF.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";import"./icon_close_outline_16-CoAenOwX.js";import"./Menu-BCjXGndd.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./Cell-CqQtYxfJ.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./lineHeight-aJXO3HIm.js";const Z={title:"Components/Inputs/MultiSelect",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"MultiSelect는 드롭다운에서 여러 옵션을 선택하고 Chip 형태로 표시하는 컴포넌트입니다. 검색 필터링과 single/multi 라인 모드를 지원합니다."}}}},u=[{value:"react",label:"React"},{value:"vue",label:"Vue"},{value:"angular",label:"Angular"},{value:"svelte",label:"Svelte"},{value:"nextjs",label:"Next.js"},{value:"nuxt",label:"Nuxt"},{value:"gatsby",label:"Gatsby"},{value:"remix",label:"Remix"},{value:"solid",label:"Solid"},{value:"qwik",label:"Qwik"},{value:"astro",label:"Astro"},{value:"preact",label:"Preact"},{value:"lit",label:"Lit"},{value:"alpine",label:"Alpine.js"},{value:"ember",label:"Ember"}],s={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},o={parameters:{layout:"centered"},render:l=>{const[n,a]=t.useState([]);return e.jsx("div",{style:{width:400},children:e.jsx(i,{...l,value:n,onChange:a,options:u})})},args:{size:"medium",disabled:!1,placeholder:"프레임워크를 선택해주세요"},argTypes:{size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"}}},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:s.page,children:[e.jsxs("div",{style:s.header,children:[e.jsx("h1",{style:s.title,children:"MultiSelect"}),e.jsxs("p",{style:s.desc,children:["드롭다운에서 여러 옵션을 선택하고 Chip으로 표시합니다.",e.jsx("br",{}),"3가지 크기, 검색 필터링, single/multi 라인 모드를 지원합니다."]})]}),e.jsx("p",{style:s.sectionTitle,children:"Sizes"}),e.jsx("div",{style:s.card,children:e.jsx(L,{})}),e.jsx("p",{style:s.sectionTitle,children:"Line Modes"}),e.jsx("div",{style:s.card,children:e.jsx(w,{})})]})},L=()=>{const[l,n]=t.useState(["react"]),[a,m]=t.useState(["react","vue"]),[D,T]=t.useState(["react","vue","angular"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{size:"small",value:l,onChange:n},{size:"medium",value:a,onChange:m},{size:"large",value:D,onChange:T}].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...s.label,width:60},children:r.size}),e.jsx("div",{style:{width:400},children:e.jsx(i,{size:r.size,value:r.value,onChange:r.onChange,options:u,placeholder:"선택해주세요"})})]},r.size))})},w=()=>{const[l,n]=t.useState(["react","vue","angular","svelte","nextjs","nuxt","gatsby","remix"]),[a,m]=t.useState(["react","vue","angular","svelte","nextjs","nuxt","gatsby","remix","solid","qwik"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:s.label,children:"single (한 줄, 가로 스크롤)"}),e.jsx("div",{style:{width:400},children:e.jsx(i,{size:"medium",value:l,onChange:n,options:u,lineMode:"single"})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:s.label,children:"multi (최대 3줄, 세로 스크롤)"}),e.jsx("div",{style:{width:400},children:e.jsx(i,{size:"medium",value:a,onChange:m,options:u,lineMode:"multi"})})]})]})},c={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(L,{})},p={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(w,{})};var g,v,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: 400
    }}>
        <MultiSelect {...args} value={value} onChange={setValue} options={sampleOptions} />
      </div>;
  },
  args: {
    size: 'medium',
    disabled: false,
    placeholder: '프레임워크를 선택해주세요'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var y,h,b;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>MultiSelect</h1>
        <p style={s.desc}>
          드롭다운에서 여러 옵션을 선택하고 Chip으로 표시합니다.
          <br />
          3가지 크기, 검색 필터링, single/multi 라인 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <SizesDemo />
      </div>

      <p style={s.sectionTitle}>Line Modes</p>
      <div style={s.card}>
        <LineModesDemo />
      </div>
    </div>
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var j,S,f;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <SizesDemo />
}`,...(f=(S=c.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var z,M,C;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <LineModesDemo />
}`,...(C=(M=p.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};const $=["Playground","Overview","Sizes","LineModes"];export{p as LineModes,d as Overview,o as Playground,c as Sizes,$ as __namedExportsOrder,Z as default};
