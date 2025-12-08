import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-Bb6Fyw9n.js";import{T as t}from"./TokenField-BfjHs3G5.js";import"./styled-components.browser.esm-C7FfZWH0.js";import"./Description-DfY6EdOt.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./TokenInput-BSnrASvY.js";import"./icon_close_outline_16-DuTyF_6k.js";import"./Chip-CmkyWET1.js";import"./radius-DaoU83SK.js";const ve={title:"Components/TokenField",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"토큰 필드의 크기"},disabled:{control:"boolean",description:"비활성화 상태"},labelType:{control:"select",options:["default","required","optional"],description:"라벨 타입"},lineMode:{control:"select",options:["single","multi"],description:"칩 표시 모드 (single: 가로 스크롤, multi: 세로 스크롤)"},lang:{control:"select",options:["ko","en"],description:"언어 설정"},descriptionLeadingIcon:{control:"boolean",description:"설명 앞 아이콘 표시 여부"}}},o={args:{label:"태그",placeholder:"태그를 입력하고 Enter를 눌러주세요"},render:n=>{const[r,s]=a.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},l={args:{label:"이메일 주소",description:"여러 개의 이메일 주소를 입력할 수 있습니다.",placeholder:"이메일 주소를 입력하고 Enter를 눌러주세요"},render:n=>{const[r,s]=a.useState(["john@example.com","jane@example.com"]);return e.jsx("div",{style:{width:"500px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},i={args:{label:"필수 태그",labelType:"required",description:"최소 1개 이상의 태그를 입력해주세요.",placeholder:"태그를 입력하세요"},render:n=>{const[r,s]=a.useState(["React"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},d={args:{label:"선택 태그",labelType:"optional",description:"선택적으로 태그를 입력할 수 있습니다.",placeholder:"태그를 입력하세요"},render:n=>{const[r,s]=a.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},c={args:{label:"작은 크기",size:"small",placeholder:"태그를 입력하세요"},render:n=>{const[r,s]=a.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},p={args:{label:"큰 크기",size:"large",placeholder:"태그를 입력하세요"},render:n=>{const[r,s]=a.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},g={args:{label:"비활성화",disabled:!0,description:"비활성화된 상태입니다."},render:n=>{const r=["React","TypeScript","Disabled"];return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r})})}},m={args:{label:"단일 라인 모드",lineMode:"single",description:"한 줄로 표시되며, 넘치면 가로 스크롤됩니다.",placeholder:"태그를 입력하세요"},render:n=>{const[r,s]=a.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},u={args:{label:"멀티 라인 모드",lineMode:"multi",description:"최대 3줄까지 표시되며, 넘치면 세로 스크롤됩니다.",placeholder:"태그를 입력하세요"},render:n=>{const[r,s]=a.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier","Webpack","Babel","Redux"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},h={args:{label:"초대할 사람",labelType:"required",description:"이메일 주소를 입력하고 Enter를 눌러주세요.",placeholder:"이메일 주소 입력"},render:n=>{const[r,s]=a.useState(["john@example.com","jane@example.com"]);return e.jsx("div",{style:{width:"500px"},children:e.jsx(t,{...n,value:r,onChange:s})})}},x={args:{label:"검색 키워드",labelType:"optional",description:"여러 개의 키워드로 검색할 수 있습니다.",placeholder:"키워드를 입력하세요"},render:n=>{const[r,s]=a.useState(["디자인 시스템","React","TypeScript"]);return e.jsx("div",{style:{width:"450px"},children:e.jsx(t,{...n,value:r,onChange:s})})}};var T,y,v;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "태그",
    placeholder: "태그를 입력하고 Enter를 눌러주세요"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>([]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(v=(y=o.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var S,b,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: "이메일 주소",
    description: "여러 개의 이메일 주소를 입력할 수 있습니다.",
    placeholder: "이메일 주소를 입력하고 Enter를 눌러주세요"
  },
  render: args => {
    const [emails, setEmails] = useState<string[]>(["john@example.com", "jane@example.com"]);
    return <div style={{
      width: "500px"
    }}>
        <TokenField {...args} value={emails} onChange={setEmails} />
      </div>;
  }
}`,...(k=(b=l.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var j,w,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "필수 태그",
    labelType: "required",
    description: "최소 1개 이상의 태그를 입력해주세요.",
    placeholder: "태그를 입력하세요"
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(["React"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var C,R,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "선택 태그",
    labelType: "optional",
    description: "선택적으로 태그를 입력할 수 있습니다.",
    placeholder: "태그를 입력하세요"
  },
  render: args => {
    const [tags, setTags] = useState<string[]>([]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(F=(R=d.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var L,M,D;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: "작은 크기",
    size: "small",
    placeholder: "태그를 입력하세요"
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(["Tag1", "Tag2"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(D=(M=c.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var f,q,z;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "큰 크기",
    size: "large",
    placeholder: "태그를 입력하세요"
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(["Tag1", "Tag2"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var K,J,P;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    label: "비활성화",
    disabled: true,
    description: "비활성화된 상태입니다."
  },
  render: args => {
    const tokens = ["React", "TypeScript", "Disabled"];
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tokens} />
      </div>;
  }
}`,...(P=(J=g.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var W,O,B;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: "단일 라인 모드",
    lineMode: "single",
    description: "한 줄로 표시되며, 넘치면 가로 스크롤됩니다.",
    placeholder: "태그를 입력하세요"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["React", "TypeScript", "Styled-components", "Storybook", "Jest", "ESLint", "Prettier"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(B=(O=m.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var _,I,A;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: "멀티 라인 모드",
    lineMode: "multi",
    description: "최대 3줄까지 표시되며, 넘치면 세로 스크롤됩니다.",
    placeholder: "태그를 입력하세요"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["React", "TypeScript", "Styled-components", "Storybook", "Jest", "ESLint", "Prettier", "Webpack", "Babel", "Redux"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenField {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(A=(I=u.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var G,H,N;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: "초대할 사람",
    labelType: "required",
    description: "이메일 주소를 입력하고 Enter를 눌러주세요.",
    placeholder: "이메일 주소 입력"
  },
  render: args => {
    const [emails, setEmails] = useState<string[]>(["john@example.com", "jane@example.com"]);
    return <div style={{
      width: "500px"
    }}>
        <TokenField {...args} value={emails} onChange={setEmails} />
      </div>;
  }
}`,...(N=(H=h.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var Q,U,V;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "검색 키워드",
    labelType: "optional",
    description: "여러 개의 키워드로 검색할 수 있습니다.",
    placeholder: "키워드를 입력하세요"
  },
  render: args => {
    const [keywords, setKeywords] = useState<string[]>(["디자인 시스템", "React", "TypeScript"]);
    return <div style={{
      width: "450px"
    }}>
        <TokenField {...args} value={keywords} onChange={setKeywords} />
      </div>;
  }
}`,...(V=(U=x.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Se=["Default","WithDescription","Required","Optional","Small","Large","Disabled","SingleLineMode","MultiLineMode","EmailExample","KeywordsExample"];export{o as Default,g as Disabled,h as EmailExample,x as KeywordsExample,p as Large,u as MultiLineMode,d as Optional,i as Required,m as SingleLineMode,c as Small,l as WithDescription,Se as __namedExportsOrder,ve as default};
