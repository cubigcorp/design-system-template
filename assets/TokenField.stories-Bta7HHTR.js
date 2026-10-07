import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-BQlxtUxC.js";import{c as _}from"./styled-components.browser.esm-BsJdvhJY.js";import{L as N}from"./Label-D5xTlOE_.js";import{T as A}from"./TokenInput-BZgMHR5_.js";import{D as H}from"./Description-CEQ-2_hJ.js";import{s as $}from"./spacing-tE1IiUFl.js";import"./preload-helper-eJNa_G2e.js";import"./textColor-D-yqVS6r.js";import"./color-CZjzAmeO.js";import"./typography-CIxJpf_z.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./Chip-pd_KpZD3.js";import"./borderColor-DnXd17KV.js";import"./radius-DaoU83SK.js";import"./icon_close_outline_16-CLFktyWH.js";import"./negativeColor-BkNdSW00.js";import"./IconCircleCheck-BBUUqRs3.js";const n=({label:t,labelType:s="default",description:a,descriptionLeadingIcon:i=!1,size:d="medium",disabled:c=!1,placeholder:o,value:V=[],onChange:P,className:B="",lang:O,lineMode:W="multi",...v})=>{const f=O,J=l.useId(),h=v.id??J;return e.jsxs(G,{className:B,children:[t&&e.jsx(N,{htmlFor:h,type:s,lang:f,children:t}),e.jsx(A,{inputId:h,size:d,disabled:c,placeholder:o,value:V,onChange:P,lang:f,lineMode:W,...v}),a&&e.jsx(H,{status:"default",leadingIcon:i,lang:f,children:a})]})},G=_.div`
  display: flex;
  flex-direction: column;
  gap: ${$.gap["gap-1"]};
`;n.displayName="TokenField";n.__docgenInfo={description:"",methods:[],displayName:"TokenField",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},lineMode:{defaultValue:{value:"'multi'",computed:!1},required:!1}},composes:["Omit"]};const ye={title:"Components/Inputs/TokenField",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"라벨과 설명을 포함한 토큰 입력 필드 컴포넌트입니다. 3가지 크기, 라벨 타입, single/multi 라인 모드를 지원합니다."}}}},r={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16}},p={parameters:{layout:"centered"},render:t=>{const[s,a]=l.useState([]);return e.jsx("div",{style:{width:400},children:e.jsx(n,{...t,value:s,onChange:a})})},args:{label:"태그",placeholder:"태그를 입력하고 Enter를 눌러주세요"},argTypes:{size:{control:"select",options:["small","medium","large"]},labelType:{control:"select",options:["default","required","optional"]},disabled:{control:"boolean"},lineMode:{control:"select",options:["single","multi"]}}},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:r.page,children:[e.jsxs("div",{style:r.header,children:[e.jsx("h1",{style:r.title,children:"TokenField"}),e.jsxs("p",{style:r.desc,children:["라벨과 설명을 포함한 토큰 입력 필드입니다.",e.jsx("br",{}),"3가지 크기, 라벨 타입(default/required/optional), single/multi 라인 모드를 지원합니다."]})]}),e.jsx("p",{style:r.sectionTitle,children:"Label Types"}),e.jsx("div",{style:r.card,children:e.jsx(E,{})}),e.jsx("p",{style:r.sectionTitle,children:"Sizes"}),e.jsx("div",{style:r.card,children:e.jsx(I,{})}),e.jsx("p",{style:r.sectionTitle,children:"States"}),e.jsx("div",{style:r.card,children:e.jsx(K,{})})]})},E=()=>{const[t,s]=l.useState(["React"]),[a,i]=l.useState(["React"]),[d,c]=l.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"기본 라벨",labelType:"default",value:t,onChange:s,placeholder:"태그를 입력하세요"})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"필수 라벨",labelType:"required",description:"최소 1개 이상 입력해주세요.",value:a,onChange:i,placeholder:"태그를 입력하세요"})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"선택 라벨",labelType:"optional",description:"선택적으로 입력할 수 있습니다.",value:d,onChange:c,placeholder:"태그를 입력하세요"})})]})},I=()=>{const[t,s]=l.useState(["Tag1","Tag2"]),[a,i]=l.useState(["Tag1","Tag2"]),[d,c]=l.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{size:"small",label:"Small",value:t,onChange:s},{size:"medium",label:"Medium",value:a,onChange:i},{size:"large",label:"Large",value:d,onChange:c}].map(o=>e.jsx("div",{style:{width:400},children:e.jsx(n,{label:o.label,size:o.size,value:o.value,onChange:o.onChange,placeholder:"태그를 입력하세요"})},o.size))})},K=()=>{const[t,s]=l.useState(["React","TypeScript"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"기본",value:t,onChange:s,placeholder:"태그를 입력하세요"})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"비활성화",disabled:!0,value:["React","TypeScript","Disabled"],description:"비활성화된 상태입니다."})})]})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(E,{})},g={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(I,{})},y={parameters:{layout:"centered",controls:{disable:!0}},render:()=>{const[t,s]=l.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier"]),[a,i]=l.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier","Webpack","Babel","Redux"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"단일 라인",lineMode:"single",description:"한 줄로 표시, 넘치면 가로 스크롤",value:t,onChange:s})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"멀티 라인",lineMode:"multi",description:"최대 3줄, 넘치면 세로 스크롤",value:a,onChange:i})})]})}};var x,b,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>([]);
    return <div style={{
      width: 400
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  },
  args: {
    label: '태그',
    placeholder: '태그를 입력하고 Enter를 눌러주세요'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    labelType: {
      control: 'select',
      options: ['default', 'required', 'optional']
    },
    disabled: {
      control: 'boolean'
    },
    lineMode: {
      control: 'select',
      options: ['single', 'multi']
    }
  }
}`,...(T=(b=p.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var S,j,k;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TokenField</h1>
        <p style={s.desc}>
          라벨과 설명을 포함한 토큰 입력 필드입니다.
          <br />
          3가지 크기, 라벨 타입(default/required/optional), single/multi 라인 모드를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Label Types</p>
      <div style={s.card}>
        <LabelTypesDemo />
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <SizesDemo />
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <StatesDemo />
      </div>
    </div>
}`,...(k=(j=u.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var q,w,z;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <LabelTypesDemo />
}`,...(z=(w=m.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var L,C,D;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <SizesDemo />
}`,...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var M,R,F;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => {
    const [single, setSingle] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier']);
    const [multi, setMulti] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier', 'Webpack', 'Babel', 'Redux']);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <div style={{
        width: 400
      }}>
          <TokenField label='단일 라인' lineMode='single' description='한 줄로 표시, 넘치면 가로 스크롤' value={single} onChange={setSingle} />
        </div>
        <div style={{
        width: 400
      }}>
          <TokenField label='멀티 라인' lineMode='multi' description='최대 3줄, 넘치면 세로 스크롤' value={multi} onChange={setMulti} />
        </div>
      </div>;
  }
}`,...(F=(R=y.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const fe=["Playground","Overview","LabelTypes","Sizes","LineModes"];export{m as LabelTypes,y as LineModes,u as Overview,p as Playground,g as Sizes,fe as __namedExportsOrder,ye as default};
