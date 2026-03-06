import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-CLsoOqCU.js";import{T as i}from"./TokenInput-68FJDCMH.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-Cjeww7bt.js";import"./Chip-ChO3Q8pF.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./fontWeight-CRwBdwgF.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";import"./icon_close_outline_16-C8PckDYI.js";import"./spacing-tE1IiUFl.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./lineHeight-aJXO3HIm.js";const N={title:"Components/Inputs/TokenInput",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"토큰(칩) 형태로 여러 값을 입력할 수 있는 컴포넌트입니다. 3가지 크기와 single/multi 라인 모드를 지원합니다."}}}},s={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:t=>{const[n,l]=r.useState(["React","TypeScript"]);return e.jsx("div",{style:{width:400},children:e.jsx(i,{...t,value:n,onChange:l})})},args:{placeholder:"태그를 입력하고 Enter를 눌러주세요"},argTypes:{size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},lineMode:{control:"select",options:["single","multi"]}}},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:s.page,children:[e.jsxs("div",{style:s.header,children:[e.jsx("h1",{style:s.title,children:"TokenInput"}),e.jsxs("p",{style:s.desc,children:["토큰(칩) 형태로 여러 값을 입력할 수 있는 컴포넌트입니다.",e.jsx("br",{}),"3가지 크기, disabled 상태, single/multi 라인 모드를 지원합니다."]})]}),e.jsx("p",{style:s.sectionTitle,children:"Sizes"}),e.jsx("div",{style:s.card,children:e.jsx(k,{})}),e.jsx("p",{style:s.sectionTitle,children:"States"}),e.jsx("div",{style:s.card,children:e.jsx(C,{})}),e.jsx("p",{style:s.sectionTitle,children:"Line Modes"}),e.jsx("div",{style:s.card,children:e.jsx(M,{})})]})},k=()=>{const[t,n]=r.useState(["Tag1","Tag2"]),[l,m]=r.useState(["Tag1","Tag2"]),[D,w]=r.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{size:"small",value:t,onChange:n},{size:"medium",value:l,onChange:m},{size:"large",value:D,onChange:w}].map(o=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...s.label,width:60},children:o.size}),e.jsx("div",{style:{width:400},children:e.jsx(i,{size:o.size,value:o.value,onChange:o.onChange})})]},o.size))})},C=()=>{const[t,n]=r.useState(["React","TypeScript"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...s.label,width:60},children:"default"}),e.jsx("div",{style:{width:400},children:e.jsx(i,{value:t,onChange:n})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...s.label,width:60},children:"disabled"}),e.jsx("div",{style:{width:400},children:e.jsx(i,{value:["React","TypeScript","Disabled"],disabled:!0})})]})]})},M=()=>{const[t,n]=r.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier"]),[l,m]=r.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier","Webpack","Babel","Redux"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:s.label,children:"single (한 줄, 가로 스크롤)"}),e.jsx("div",{style:{width:400},children:e.jsx(i,{lineMode:"single",value:t,onChange:n})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:s.label,children:"multi (최대 3줄, 세로 스크롤)"}),e.jsx("div",{style:{width:400},children:e.jsx(i,{lineMode:"multi",value:l,onChange:m})})]})]})},c={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(k,{})},p={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(M,{})};var u,y,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript']);
    return <div style={{
      width: 400
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  },
  args: {
    placeholder: '태그를 입력하고 Enter를 눌러주세요'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    },
    lineMode: {
      control: 'select',
      options: ['single', 'multi']
    }
  }
}`,...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,h,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TokenInput</h1>
        <p style={s.desc}>
          토큰(칩) 형태로 여러 값을 입력할 수 있는 컴포넌트입니다.
          <br />
          3가지 크기, disabled 상태, single/multi 라인 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <SizesDemo />
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <StatesDemo />
      </div>

      <p style={s.sectionTitle}>Line Modes</p>
      <div style={s.card}>
        <LineModesDemo />
      </div>
    </div>
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,j,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <SizesDemo />
}`,...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var f,b,z;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <LineModesDemo />
}`,...(z=(b=p.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const Q=["Playground","Overview","Sizes","LineModes"];export{p as LineModes,d as Overview,a as Playground,c as Sizes,Q as __namedExportsOrder,N as default};
