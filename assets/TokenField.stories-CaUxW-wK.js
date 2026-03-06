import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-D0ynm1mK.js";import{c as le}from"./styled-components.browser.esm-o0t8qbnT.js";import{L as ie}from"./Label-DLXz1w7W.js";import{T as de}from"./TokenInput-DxANGHf8.js";import{D as ce}from"./Description-RyeBF6Jl.js";import{s as pe}from"./spacing-tE1IiUFl.js";import"./preload-helper-eJNa_G2e.js";import"./textColor-DLZeZODc.js";import"./color-CiwAFuFb.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./Chip-DFvqueQm.js";import"./borderColor-C_RHITEf.js";import"./radius-DaoU83SK.js";import"./icon_close_outline_16-Badxvc54.js";import"./negativeColor-DPOOrHeE.js";import"./IconCircleCheck-BBUUqRs3.js";const a=({label:n,labelType:s="default",description:r,descriptionLeadingIcon:X=!1,size:Y="medium",disabled:Z=!1,placeholder:ee,value:ne=[],onChange:se,className:re="",lang:ae,lineMode:te="multi",...oe})=>{const y=ae;return e.jsxs(ue,{className:re,children:[n&&e.jsx(ie,{type:s,lang:y,children:n}),e.jsx(de,{size:Y,disabled:Z,placeholder:ee,value:ne,onChange:se,lang:y,lineMode:te,...oe}),r&&e.jsx(ce,{status:"default",leadingIcon:X,lang:y,children:r})]})},ue=le.div`
  display: flex;
  flex-direction: column;
  gap: ${pe.gap["gap-1"]};
`;a.displayName="TokenField";a.__docgenInfo={description:"",methods:[],displayName:"TokenField",props:{label:{required:!1,tsType:{name:"string"},description:""},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""},size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},lineMode:{defaultValue:{value:"'multi'",computed:!1},required:!1}},composes:["Omit"]};const De={title:"Components/TokenField",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"토큰 필드의 크기"},disabled:{control:"boolean",description:"비활성화 상태"},labelType:{control:"select",options:["default","required","optional"],description:"라벨 타입"},lineMode:{control:"select",options:["single","multi"],description:"칩 표시 모드 (single: 가로 스크롤, multi: 세로 스크롤)"},lang:{control:"select",options:["ko","en"],description:"언어 설정"},descriptionLeadingIcon:{control:"boolean",description:"설명 앞 아이콘 표시 여부"}}},o={args:{label:"태그",placeholder:"태그를 입력하고 Enter를 눌러주세요"},render:n=>{const[s,r]=t.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},l={args:{label:"이메일 주소",description:"여러 개의 이메일 주소를 입력할 수 있습니다.",placeholder:"이메일 주소를 입력하고 Enter를 눌러주세요"},render:n=>{const[s,r]=t.useState(["john@example.com","jane@example.com"]);return e.jsx("div",{style:{width:"500px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},i={args:{label:"필수 태그",labelType:"required",description:"최소 1개 이상의 태그를 입력해주세요.",placeholder:"태그를 입력하세요"},render:n=>{const[s,r]=t.useState(["React"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},d={args:{label:"선택 태그",labelType:"optional",description:"선택적으로 태그를 입력할 수 있습니다.",placeholder:"태그를 입력하세요"},render:n=>{const[s,r]=t.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},c={args:{label:"작은 크기",size:"small",placeholder:"태그를 입력하세요"},render:n=>{const[s,r]=t.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},p={args:{label:"큰 크기",size:"large",placeholder:"태그를 입력하세요"},render:n=>{const[s,r]=t.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},u={args:{label:"비활성화",disabled:!0,description:"비활성화된 상태입니다."},render:n=>{const s=["React","TypeScript","Disabled"];return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s})})}},m={args:{label:"단일 라인 모드",lineMode:"single",description:"한 줄로 표시되며, 넘치면 가로 스크롤됩니다.",placeholder:"태그를 입력하세요"},render:n=>{const[s,r]=t.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},g={args:{label:"멀티 라인 모드",lineMode:"multi",description:"최대 3줄까지 표시되며, 넘치면 세로 스크롤됩니다.",placeholder:"태그를 입력하세요"},render:n=>{const[s,r]=t.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier","Webpack","Babel","Redux"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},h={args:{label:"초대할 사람",labelType:"required",description:"이메일 주소를 입력하고 Enter를 눌러주세요.",placeholder:"이메일 주소 입력"},render:n=>{const[s,r]=t.useState(["john@example.com","jane@example.com"]);return e.jsx("div",{style:{width:"500px"},children:e.jsx(a,{...n,value:s,onChange:r})})}},v={args:{label:"검색 키워드",labelType:"optional",description:"여러 개의 키워드로 검색할 수 있습니다.",placeholder:"키워드를 입력하세요"},render:n=>{const[s,r]=t.useState(["디자인 시스템","React","TypeScript"]);return e.jsx("div",{style:{width:"450px"},children:e.jsx(a,{...n,value:s,onChange:r})})}};var T,x,S;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: '태그',
    placeholder: '태그를 입력하고 Enter를 눌러주세요'
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>([]);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,f,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: '이메일 주소',
    description: '여러 개의 이메일 주소를 입력할 수 있습니다.',
    placeholder: '이메일 주소를 입력하고 Enter를 눌러주세요'
  },
  render: args => {
    const [emails, setEmails] = useState<string[]>(['john@example.com', 'jane@example.com']);
    return <div style={{
      width: '500px'
    }}>
        <TokenField {...args} value={emails} onChange={setEmails} />
      </div>;
  }
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var j,w,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: '필수 태그',
    labelType: 'required',
    description: '최소 1개 이상의 태그를 입력해주세요.',
    placeholder: '태그를 입력하세요'
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(['React']);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var C,q,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: '선택 태그',
    labelType: 'optional',
    description: '선택적으로 태그를 입력할 수 있습니다.',
    placeholder: '태그를 입력하세요'
  },
  render: args => {
    const [tags, setTags] = useState<string[]>([]);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(F=(q=d.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var L,R,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: '작은 크기',
    size: 'small',
    placeholder: '태그를 입력하세요'
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(['Tag1', 'Tag2']);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var D,V,z;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: '큰 크기',
    size: 'large',
    placeholder: '태그를 입력하세요'
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(['Tag1', 'Tag2']);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(z=(V=p.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var I,K,J;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: '비활성화',
    disabled: true,
    description: '비활성화된 상태입니다.'
  },
  render: args => {
    const tokens = ['React', 'TypeScript', 'Disabled'];
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tokens} />
      </div>;
  }
}`,...(J=(K=u.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var O,P,W;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: '단일 라인 모드',
    lineMode: 'single',
    description: '한 줄로 표시되며, 넘치면 가로 스크롤됩니다.',
    placeholder: '태그를 입력하세요'
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier']);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(W=(P=m.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var _,N,A;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: '멀티 라인 모드',
    lineMode: 'multi',
    description: '최대 3줄까지 표시되며, 넘치면 세로 스크롤됩니다.',
    placeholder: '태그를 입력하세요'
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(['React', 'TypeScript', 'Styled-components', 'Storybook', 'Jest', 'ESLint', 'Prettier', 'Webpack', 'Babel', 'Redux']);
    return <div style={{
      width: '400px'
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(A=(N=g.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var B,$,G;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: '초대할 사람',
    labelType: 'required',
    description: '이메일 주소를 입력하고 Enter를 눌러주세요.',
    placeholder: '이메일 주소 입력'
  },
  render: args => {
    const [emails, setEmails] = useState<string[]>(['john@example.com', 'jane@example.com']);
    return <div style={{
      width: '500px'
    }}>
        <TokenField {...args} value={emails} onChange={setEmails} />
      </div>;
  }
}`,...(G=($=h.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var H,Q,U;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: '검색 키워드',
    labelType: 'optional',
    description: '여러 개의 키워드로 검색할 수 있습니다.',
    placeholder: '키워드를 입력하세요'
  },
  render: args => {
    const [keywords, setKeywords] = useState<string[]>(['디자인 시스템', 'React', 'TypeScript']);
    return <div style={{
      width: '450px'
    }}>
        <TokenField {...args} value={keywords} onChange={setKeywords} />
      </div>;
  }
}`,...(U=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ve=["Default","WithDescription","Required","Optional","Small","Large","Disabled","SingleLineMode","MultiLineMode","EmailExample","KeywordsExample"];export{o as Default,u as Disabled,h as EmailExample,v as KeywordsExample,p as Large,g as MultiLineMode,d as Optional,i as Required,m as SingleLineMode,c as Small,l as WithDescription,Ve as __namedExportsOrder,De as default};
