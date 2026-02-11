import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{d as n}from"./styled-components.browser.esm-DPRVC5T4.js";import{r as o}from"./iframe-D0DrdOha.js";import{b as q}from"./borderColor-C_RHITEf.js";import{c as j}from"./color-CiwAFuFb.js";import{r as Re}from"./radius-DaoU83SK.js";import{s as u}from"./spacing-tE1IiUFl.js";import{t as c}from"./textColor-DLZeZODc.js";import{t as ce}from"./typography-CHdGJV44.js";import{L as qe}from"./Label-DmXrKTH7.js";import{D as De}from"./Description-DaKssIDv.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./negativeColor-DPOOrHeE.js";import"./IconCircleCheck-BBUUqRs3.js";const a=o.forwardRef(({label:r,labelType:D="default",description:d,descriptionLeadingIcon:ue=!1,status:V="default",disabled:i=!1,active:de=!1,focused:pe=!1,placeholder:me,value:S,showCharacterCounter:he=!1,maxCount:s,maxHeight:A=232,onChange:W,onFocus:$,onBlur:E,className:ge="",lang:fe,...xe},be)=>{const[k,H]=o.useState(pe),[Ce,M]=o.useState(de),[ve,Te]=o.useState(S),R=o.useRef(null),p=fe;o.useImperativeHandle(be,()=>R.current);const F=S!==void 0?S:ve,m=s?(F||"").slice(0,s):F||"",ye=m.length,we=()=>{const t=R.current;if(t){t.style.height="auto";const h=Math.min(t.scrollHeight,A);t.style.height=`${h}px`}};o.useEffect(()=>{we()},[m,A]);const Le=t=>{H(!0),M(!0),$==null||$(t)},je=t=>{H(!1),M(!1),E==null||E(t)},Se=t=>{const h=t.target.value;s&&h.length>s||(Te(h),W==null||W(t))},Ae=()=>i?c.light["fg-neutral-disable"]:Ce||m?c.light["fg-neutral-primary"]:c.light["fg-neutral-assistive"],We=()=>i?c.light["fg-neutral-disable"]:c.light["fg-neutral-alternative"],$e=()=>i?q.light["color-border-primary"]:k?q.light["color-border-focused"]:q.light["color-border-primary"],Ee=()=>i?j.gray[50]:j.common[100];return e.jsxs(Ve,{className:ge,children:[r&&e.jsx(qe,{type:D,lang:p,children:r}),e.jsxs(ke,{$disabled:i,$focused:k,$borderColor:$e(),$backgroundColor:Ee(),children:[e.jsx(He,{ref:R,placeholder:me,value:m,disabled:i,maxLength:s,onChange:Se,onFocus:Le,onBlur:je,$textColor:Ae(),$maxHeight:A,lang:p,...xe}),he&&s&&e.jsxs(Me,{$color:We(),lang:p,children:[ye,"/",s]})]}),d&&e.jsx(De,{status:V==="default"?void 0:V==="error"?"negative":"positive",leadingIcon:ue,lang:p,children:d})]})}),Ve=n.div`
  display: flex;
  flex-direction: column;
  gap: ${u.gap["gap-1"]};
`,ke=n.div`
  display: flex;
  flex-direction: column;
  gap: ${u.gap["gap-3"]};
  min-height: 80px;
  padding: ${u.gap["gap-3"]} ${u.gap["gap-2.5"]};
  border: 1px solid ${({$borderColor:r})=>r};
  border-radius: ${Re["rounded-2"]};
  background-color: ${({$backgroundColor:r})=>r};
  cursor: ${({$disabled:r})=>r?"not-allowed":"text"};
  transition: border-color 0.2s ease-in-out;
`,He=n.textarea`
  min-height: 48px;
  max-height: ${({$maxHeight:r})=>r}px;
  padding: 0 ${u.gap["gap-1"]};
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  overflow-y: auto;
  ${({lang:r})=>ce(r,"body3","regular")}
  color: ${({$textColor:r})=>r};
  font-family: inherit;

  &::placeholder {
    color: ${c.light["fg-neutral-assistive"]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${j.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${j.gray[400]};
  }
`,Me=n.span`
  ${({lang:r})=>ce(r,"body2","regular")}
  color: ${({$color:r})=>r};
  text-align: left;
  font-family: inherit;
`;a.displayName="TextArea";a.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Label 텍스트"},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"Label 타입",defaultValue:{value:"'default'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description 텍스트"},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Description 앞 아이콘 표시 여부",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"상태",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"포커스 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder"},value:{required:!1,tsType:{name:"string"},description:"값"},showCharacterCounter:{required:!1,tsType:{name:"boolean"},description:"글자수 카운터 표시 여부",defaultValue:{value:"false",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"최대 글자수"},maxHeight:{required:!1,tsType:{name:"number"},description:"최대 높이 (px)",defaultValue:{value:"232",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"변경 이벤트"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"언어 설정"}}};const ar={title:"Components/TextArea",component:a,parameters:{layout:"centered"},argTypes:{labelType:{control:"select",options:["default","required","optional"]},status:{control:"select",options:["default","error","success"]},disabled:{control:"boolean"},showCharacterCounter:{control:"boolean"}}},g={args:{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},render:r=>{const{value:D,...d}=r;return e.jsx(l,{children:e.jsx(a,{...d})})}},f={args:{label:"Label",placeholder:"텍스트를 입력해 주세요."},render:r=>e.jsx(l,{children:e.jsx(a,{...r})})},x={args:{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."},render:r=>e.jsx(l,{children:e.jsx(a,{...r})})},b={args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(l,{children:e.jsx(a,{...r})})},C={args:{label:"Label",value:"텍스트 입력",showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(l,{children:e.jsx(a,{...r})})},v={args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(l,{children:e.jsx(a,{...r})})},T={args:{label:"Label",value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500},render:r=>e.jsx(l,{children:e.jsx(a,{...r})})},y={render:()=>e.jsxs(Fe,{children:[e.jsxs(w,{children:[e.jsx(L,{children:"Default"}),e.jsx(a,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})]}),e.jsxs(w,{children:[e.jsx(L,{children:"Active"}),e.jsx(a,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})]}),e.jsxs(w,{children:[e.jsx(L,{children:"Disabled (Empty)"}),e.jsx(a,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})]}),e.jsxs(w,{children:[e.jsx(L,{children:"Disabled (With Value)"}),e.jsx(a,{value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500})]})]})},l=n.div`
  width: 400px;
`,Fe=n.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 400px;
`,w=n.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L=n.span`
  font-size: 12px;
  color: #666;
`;var I,N,_;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => {
    const {
      value,
      ...rest
    } = args;
    return <Wrapper>
        <TextArea {...rest} />
      </Wrapper>;
  }
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var z,B,O;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.'
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(O=(B=f.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var G,J,K;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description text',
    placeholder: '텍스트를 입력해 주세요.'
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,U;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    value: '텍스트 입력',
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
    disabled: true,
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(ae=(re=v.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,ne,se;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    value: '텍스트 입력',
    disabled: true,
    showCharacterCounter: true,
    maxCount: 500
  },
  render: args => <Wrapper>
      <TextArea {...args} />
    </Wrapper>
}`,...(se=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,ie;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <StatesWrapper>
      <StateRow>
        <StateLabel>Default</StateLabel>
        <TextArea placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Active</StateLabel>
        <TextArea value='텍스트 입력' showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Disabled (Empty)</StateLabel>
        <TextArea placeholder='텍스트를 입력해 주세요.' disabled showCharacterCounter maxCount={500} />
      </StateRow>
      <StateRow>
        <StateLabel>Disabled (With Value)</StateLabel>
        <TextArea value='텍스트 입력' disabled showCharacterCounter maxCount={500} />
      </StateRow>
    </StatesWrapper>
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const tr=["Default","WithLabel","WithDescription","WithCharacterCounter","WithValue","Disabled","DisabledWithValue","AllStates"];export{y as AllStates,g as Default,v as Disabled,T as DisabledWithValue,b as WithCharacterCounter,x as WithDescription,f as WithLabel,C as WithValue,tr as __namedExportsOrder,ar as default};
