import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r}from"./iframe-Diu4OQ1h.js";import{c as W}from"./styled-components.browser.esm-DZloA45Z.js";import{L as J}from"./Label-CbpmhvAg.js";import{T as _}from"./TokenInput-CTrhPB8B.js";import{D as N}from"./Description-BngmAm2p.js";import{s as A}from"./spacing-tE1IiUFl.js";import"./preload-helper-eJNa_G2e.js";import"./textColor-mWadn7SX.js";import"./color-BUCiRq0z.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./Chip-Js6mrB2Q.js";import"./borderColor-Bua6bgaN.js";import"./radius-DaoU83SK.js";import"./icon_close_outline_16-Jo-UaxxG.js";import"./negativeColor-PFzGnuZM.js";import"./IconCircleCheck-BBUUqRs3.js";const n=({label:t,labelType:s="default",description:l,descriptionLeadingIcon:i=!1,size:d="medium",disabled:c=!1,placeholder:o,value:E=[],onChange:V,className:I="",lang:P,lineMode:B="multi",...O})=>{const f=P;return e.jsxs(H,{className:I,children:[t&&e.jsx(J,{type:s,lang:f,children:t}),e.jsx(_,{size:d,disabled:c,placeholder:o,value:E,onChange:V,lang:f,lineMode:B,...O}),l&&e.jsx(N,{status:"default",leadingIcon:i,lang:f,children:l})]})},H=W.div`
  display: flex;
  flex-direction: column;
  gap: ${A.gap["gap-1"]};
`;n.displayName="TokenField";n.__docgenInfo={description:"",methods:[],displayName:"TokenField",props:{label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},lineMode:{defaultValue:{value:"'multi'",computed:!1},required:!1}},composes:["Omit"]};const me={title:"Components/Inputs/TokenField",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"라벨과 설명을 포함한 토큰 입력 필드 컴포넌트입니다. 3가지 크기, 라벨 타입, single/multi 라인 모드를 지원합니다."}}}},a={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16}},p={parameters:{layout:"centered"},render:t=>{const[s,l]=r.useState([]);return e.jsx("div",{style:{width:400},children:e.jsx(n,{...t,value:s,onChange:l})})},args:{label:"태그",placeholder:"태그를 입력하고 Enter를 눌러주세요"},argTypes:{size:{control:"select",options:["small","medium","large"]},labelType:{control:"select",options:["default","required","optional"]},disabled:{control:"boolean"},lineMode:{control:"select",options:["single","multi"]}}},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:a.page,children:[e.jsxs("div",{style:a.header,children:[e.jsx("h1",{style:a.title,children:"TokenField"}),e.jsxs("p",{style:a.desc,children:["라벨과 설명을 포함한 토큰 입력 필드입니다.",e.jsx("br",{}),"3가지 크기, 라벨 타입(default/required/optional), single/multi 라인 모드를 지원합니다."]})]}),e.jsx("p",{style:a.sectionTitle,children:"Label Types"}),e.jsx("div",{style:a.card,children:e.jsx(R,{})}),e.jsx("p",{style:a.sectionTitle,children:"Sizes"}),e.jsx("div",{style:a.card,children:e.jsx(F,{})}),e.jsx("p",{style:a.sectionTitle,children:"States"}),e.jsx("div",{style:a.card,children:e.jsx($,{})})]})},R=()=>{const[t,s]=r.useState(["React"]),[l,i]=r.useState(["React"]),[d,c]=r.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"기본 라벨",labelType:"default",value:t,onChange:s,placeholder:"태그를 입력하세요"})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"필수 라벨",labelType:"required",description:"최소 1개 이상 입력해주세요.",value:l,onChange:i,placeholder:"태그를 입력하세요"})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"선택 라벨",labelType:"optional",description:"선택적으로 입력할 수 있습니다.",value:d,onChange:c,placeholder:"태그를 입력하세요"})})]})},F=()=>{const[t,s]=r.useState(["Tag1","Tag2"]),[l,i]=r.useState(["Tag1","Tag2"]),[d,c]=r.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{size:"small",label:"Small",value:t,onChange:s},{size:"medium",label:"Medium",value:l,onChange:i},{size:"large",label:"Large",value:d,onChange:c}].map(o=>e.jsx("div",{style:{width:400},children:e.jsx(n,{label:o.label,size:o.size,value:o.value,onChange:o.onChange,placeholder:"태그를 입력하세요"})},o.size))})},$=()=>{const[t,s]=r.useState(["React","TypeScript"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"기본",value:t,onChange:s,placeholder:"태그를 입력하세요"})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"비활성화",disabled:!0,value:["React","TypeScript","Disabled"],description:"비활성화된 상태입니다."})})]})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(R,{})},g={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx(F,{})},y={parameters:{layout:"centered",controls:{disable:!0}},render:()=>{const[t,s]=r.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier"]),[l,i]=r.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier","Webpack","Babel","Redux"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"단일 라인",lineMode:"single",description:"한 줄로 표시, 넘치면 가로 스크롤",value:t,onChange:s})}),e.jsx("div",{style:{width:400},children:e.jsx(n,{label:"멀티 라인",lineMode:"multi",description:"최대 3줄, 넘치면 세로 스크롤",value:l,onChange:i})})]})}};var v,h,x;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(h=p.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,S,T;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,k,q;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <LabelTypesDemo />
}`,...(q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var w,z,L;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <SizesDemo />
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var C,D,M;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(M=(D=y.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const ge=["Playground","Overview","LabelTypes","Sizes","LineModes"];export{m as LabelTypes,y as LineModes,u as Overview,p as Playground,g as Sizes,ge as __namedExportsOrder,me as default};
