import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-Bb6Fyw9n.js";import{T as r}from"./TokenInput-BSnrASvY.js";import"./styled-components.browser.esm-C7FfZWH0.js";import"./icon_close_outline_16-DuTyF_6k.js";import"./Chip-CmkyWET1.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./textColor-DLZeZODc.js";import"./borderColor-C_RHITEf.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./fontSize-BFAJJ5Eh.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";const ie={title:"Components/TokenInput",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"토큰 인풋의 크기"},disabled:{control:"boolean",description:"비활성화 상태"},placeholder:{control:"text",description:"placeholder 텍스트"},lineMode:{control:"select",options:["single","multi"],description:"칩 표시 모드 (single: 가로 스크롤, multi: 세로 스크롤)"},lang:{control:"select",options:["ko","en"],description:"언어 설정"}}},a={render:n=>{const[t,s]=o.useState([]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},i={render:n=>{const[t,s]=o.useState(["React","TypeScript","Styled-components"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},l={args:{size:"small"},render:n=>{const[t,s]=o.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},c={args:{size:"large"},render:n=>{const[t,s]=o.useState(["Tag1","Tag2"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},d={args:{disabled:!0},render:n=>{const t=["React","TypeScript","Disabled"];return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t})})}},p={args:{lineMode:"single",placeholder:"단일 라인 모드 (가로 스크롤)"},render:n=>{const[t,s]=o.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},u={args:{lineMode:"multi",placeholder:"멀티 라인 모드 (최대 3줄, 세로 스크롤)"},render:n=>{const[t,s]=o.useState(["React","TypeScript","Styled-components","Storybook","Jest","ESLint","Prettier","Webpack","Babel","Redux"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},m={args:{placeholder:"이메일 주소를 입력하고 Enter를 눌러주세요"},render:n=>{const[t,s]=o.useState(["john@example.com","jane@example.com"]);return e.jsx("div",{style:{width:"500px"},children:e.jsx(r,{...n,value:t,onChange:s})})}},g={args:{placeholder:"태그를 입력하고 Enter를 눌러주세요"},render:n=>{const[t,s]=o.useState(["디자인","개발","UI/UX"]);return e.jsx("div",{style:{width:"400px"},children:e.jsx(r,{...n,value:t,onChange:s})})}};var k,h,T;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState<string[]>([]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(T=(h=a.parameters)==null?void 0:h.docs)==null?void 0:T.source}}};var S,x,v;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["React", "TypeScript", "Styled-components"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,j,w;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["Tag1", "Tag2"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(w=(j=l.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,I,b;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["Tag1", "Tag2"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(b=(I=c.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var E,M,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => {
    const tokens = ["React", "TypeScript", "Disabled"];
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} />
      </div>;
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var L,f,D;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    lineMode: "single",
    placeholder: "단일 라인 모드 (가로 스크롤)"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["React", "TypeScript", "Styled-components", "Storybook", "Jest", "ESLint", "Prettier"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(D=(f=p.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var z,J,P;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    lineMode: "multi",
    placeholder: "멀티 라인 모드 (최대 3줄, 세로 스크롤)"
  },
  render: args => {
    const [tokens, setTokens] = useState<string[]>(["React", "TypeScript", "Styled-components", "Storybook", "Jest", "ESLint", "Prettier", "Webpack", "Babel", "Redux"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tokens} onChange={setTokens} />
      </div>;
  }
}`,...(P=(J=u.parameters)==null?void 0:J.docs)==null?void 0:P.source}}};var U,W,B;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    placeholder: "이메일 주소를 입력하고 Enter를 눌러주세요"
  },
  render: args => {
    const [emails, setEmails] = useState<string[]>(["john@example.com", "jane@example.com"]);
    return <div style={{
      width: "500px"
    }}>
        <TokenInput {...args} value={emails} onChange={setEmails} />
      </div>;
  }
}`,...(B=(W=m.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var V,X,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    placeholder: "태그를 입력하고 Enter를 눌러주세요"
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(["디자인", "개발", "UI/UX"]);
    return <div style={{
      width: "400px"
    }}>
        <TokenInput {...args} value={tags} onChange={setTags} />
      </div>;
  }
}`,...(_=(X=g.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};const le=["Default","WithInitialValue","Small","Large","Disabled","SingleLineMode","MultiLineMode","EmailTokens","TagInput"];export{a as Default,d as Disabled,m as EmailTokens,c as Large,u as MultiLineMode,p as SingleLineMode,l as Small,g as TagInput,i as WithInitialValue,le as __namedExportsOrder,ie as default};
