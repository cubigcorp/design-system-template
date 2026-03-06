import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-CLsoOqCU.js";import{c as v}from"./styled-components.browser.esm-Cjeww7bt.js";import{b as D}from"./borderColor-CzkI5wcR.js";import{c as y}from"./color-m2U5piog.js";import{r as xe}from"./radius-DaoU83SK.js";import{s as d}from"./spacing-tE1IiUFl.js";import{t as o}from"./textColor-G8dwupNW.js";import{t as _}from"./typography-CHdGJV44.js";import{L as me}from"./Label-BvEcxJOR.js";import{D as he}from"./Description-BthjVKT1.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./negativeColor-fk0-w6JK.js";import"./IconCircleCheck-BBUUqRs3.js";const l=s.forwardRef(({label:t,labelType:P="default",description:A,descriptionLeadingIcon:G=!1,status:L="default",disabled:i=!1,active:J=!1,focused:K=!1,placeholder:Q,value:g,showCharacterCounter:U=!1,maxCount:r,maxHeight:b=232,onChange:C,onFocus:w,onBlur:j,className:X="",lang:Y,...Z},ee)=>{const[$,q]=s.useState(K),[ne,E]=s.useState(J),[te,le]=s.useState(g),T=s.useRef(null),c=Y;s.useImperativeHandle(ee,()=>T.current);const S=g!==void 0?g:te,p=r?(S||"").slice(0,r):S||"",ae=p.length,re=()=>{const a=T.current;if(a){a.style.height="auto";const u=Math.min(a.scrollHeight,b);a.style.height=`${u}px`}};s.useEffect(()=>{re()},[p,b]);const se=a=>{q(!0),E(!0),w==null||w(a)},ie=a=>{q(!1),E(!1),j==null||j(a)},oe=a=>{const u=a.target.value;r&&u.length>r||(le(u),C==null||C(a))},de=()=>i?o.light["fg-neutral-disable"]:ne||p?o.light["fg-neutral-primary"]:o.light["fg-neutral-assistive"],ce=()=>i?o.light["fg-neutral-disable"]:o.light["fg-neutral-alternative"],pe=()=>i?D.light["color-border-primary"]:$?D.light["color-border-focused"]:D.light["color-border-primary"],ue=()=>i?y.gray[50]:y.common[100];return e.jsxs(fe,{className:X,children:[t&&e.jsx(me,{type:P,lang:c,children:t}),e.jsxs(ye,{$disabled:i,$focused:$,$borderColor:pe(),$backgroundColor:ue(),children:[e.jsx(ve,{ref:T,placeholder:Q,value:p,disabled:i,maxLength:r,onChange:oe,onFocus:se,onBlur:ie,$textColor:de(),$maxHeight:b,lang:c,...Z}),U&&r&&e.jsxs(ge,{$color:ce(),lang:c,children:[ae,"/",r]})]}),A&&e.jsx(he,{status:L==="default"?void 0:L==="error"?"negative":"positive",leadingIcon:G,lang:c,children:A})]})}),fe=v.div`
  display: flex;
  flex-direction: column;
  gap: ${d.gap["gap-1"]};
`,ye=v.div`
  display: flex;
  flex-direction: column;
  gap: ${d.gap["gap-3"]};
  min-height: 80px;
  padding: ${d.gap["gap-3"]} ${d.gap["gap-2.5"]};
  border: 1px solid ${({$borderColor:t})=>t};
  border-radius: ${xe["rounded-2"]};
  background-color: ${({$backgroundColor:t})=>t};
  cursor: ${({$disabled:t})=>t?"not-allowed":"text"};
  transition: border-color 0.2s ease-in-out;
`,ve=v.textarea`
  min-height: 48px;
  max-height: ${({$maxHeight:t})=>t}px;
  padding: 0 ${d.gap["gap-1"]};
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  overflow-y: auto;
  ${({lang:t})=>_(t,"body3","regular")}
  color: ${({$textColor:t})=>t};
  font-family: inherit;

  &::placeholder {
    color: ${o.light["fg-neutral-assistive"]};
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
    background: ${y.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${y.gray[400]};
  }
`,ge=v.span`
  ${({lang:t})=>_(t,"body2","regular")}
  color: ${({$color:t})=>t};
  text-align: left;
  font-family: inherit;
`;l.displayName="TextArea";l.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{required:!1,tsType:{name:"string"},description:"Label 텍스트"},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"Label 타입",defaultValue:{value:"'default'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description 텍스트"},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Description 앞 아이콘 표시 여부",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'error' | 'success'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'error'"},{name:"literal",value:"'success'"}]},description:"상태",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"포커스 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder"},value:{required:!1,tsType:{name:"string"},description:"값"},showCharacterCounter:{required:!1,tsType:{name:"boolean"},description:"글자수 카운터 표시 여부",defaultValue:{value:"false",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"최대 글자수"},maxHeight:{required:!1,tsType:{name:"number"},description:"최대 높이 (px)",defaultValue:{value:"232",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"변경 이벤트"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"언어 설정"}}};const Fe={title:"Components/Inputs/TextArea",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"여러 줄의 텍스트를 입력할 수 있는 텍스트 영역 컴포넌트입니다. 라벨, 설명, 글자 수 카운터를 지원합니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},x={parameters:{layout:"centered"},render:t=>e.jsx("div",{style:{width:400},children:e.jsx(l,{...t})}),args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},argTypes:{labelType:{control:"select",options:["default","required","optional"]},status:{control:"select",options:["default","error","success"]},disabled:{control:"boolean"},showCharacterCounter:{control:"boolean"}}},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"TextArea"}),e.jsxs("p",{style:n.desc,children:["여러 줄의 텍스트를 입력할 수 있는 컴포넌트입니다.",e.jsx("br",{}),"라벨, 설명, 글자 수 카운터, disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"States"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with value"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled (empty)"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled (with value)"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500})})]})]})}),e.jsx("p",{style:n.sectionTitle,children:"Content Options"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with label"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",placeholder:"텍스트를 입력해 주세요."})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with label + description"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with character counter"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})})]})]})})]})},h={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with value"}),e.jsx(l,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled"}),e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})]})]})},f={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"label only"}),e.jsx(l,{label:"Label",placeholder:"텍스트를 입력해 주세요."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"label + description"}),e.jsx(l,{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with counter"}),e.jsx(l,{label:"Label",showCharacterCounter:!0,maxCount:500,placeholder:"텍스트를 입력해 주세요."})]})]})};var k,H,R;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    width: 400
  }}>
      <TextArea {...args} />
    </div>,
  args: {
    label: 'Label',
    placeholder: '텍스트를 입력해 주세요.',
    showCharacterCounter: true,
    maxCount: 500
  },
  argTypes: {
    labelType: {
      control: 'select',
      options: ['default', 'required', 'optional']
    },
    status: {
      control: 'select',
      options: ['default', 'error', 'success']
    },
    disabled: {
      control: 'boolean'
    },
    showCharacterCounter: {
      control: 'boolean'
    }
  }
}`,...(R=(H=x.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var V,M,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TextArea</h1>
        <p style={s.desc}>
          여러 줄의 텍스트를 입력할 수 있는 컴포넌트입니다.
          <br />
          라벨, 설명, 글자 수 카운터, disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>default</span>
            <div style={{
            width: 400
          }}>
              <TextArea placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>with value</span>
            <div style={{
            width: 400
          }}>
              <TextArea value='텍스트 입력' showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>disabled (empty)</span>
            <div style={{
            width: 400
          }}>
              <TextArea placeholder='텍스트를 입력해 주세요.' disabled showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>disabled (with value)</span>
            <div style={{
            width: 400
          }}>
              <TextArea value='텍스트 입력' disabled showCharacterCounter maxCount={500} />
            </div>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Content Options</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>with label</span>
            <div style={{
            width: 400
          }}>
              <TextArea label='Label' placeholder='텍스트를 입력해 주세요.' />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>with label + description</span>
            <div style={{
            width: 400
          }}>
              <TextArea label='Label' description='Description text' placeholder='텍스트를 입력해 주세요.' />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>with character counter</span>
            <div style={{
            width: 400
          }}>
              <TextArea label='Label' placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(F=(M=m.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var I,O,z;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 400
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>default</span>
        <TextArea placeholder='텍스트를 입력해 주세요.' showCharacterCounter maxCount={500} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>with value</span>
        <TextArea value='텍스트 입력' showCharacterCounter maxCount={500} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>disabled</span>
        <TextArea placeholder='텍스트를 입력해 주세요.' disabled showCharacterCounter maxCount={500} />
      </div>
    </div>
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var B,N,W;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    width: 400
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>label only</span>
        <TextArea label='Label' placeholder='텍스트를 입력해 주세요.' />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>label + description</span>
        <TextArea label='Label' description='Description text' placeholder='텍스트를 입력해 주세요.' />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>with counter</span>
        <TextArea label='Label' showCharacterCounter maxCount={500} placeholder='텍스트를 입력해 주세요.' />
      </div>
    </div>
}`,...(W=(N=f.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};const Ie=["Playground","Overview","AllStates","ContentOptions"];export{h as AllStates,f as ContentOptions,m as Overview,x as Playground,Ie as __namedExportsOrder,Fe as default};
