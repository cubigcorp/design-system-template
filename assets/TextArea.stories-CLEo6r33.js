import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-BQlxtUxC.js";import{c as b}from"./styled-components.browser.esm-BsJdvhJY.js";import{b as h}from"./borderColor-DnXd17KV.js";import{c as g}from"./color-CZjzAmeO.js";import{r as ve}from"./radius-DaoU83SK.js";import{s as d}from"./spacing-tE1IiUFl.js";import{t as o}from"./textColor-D-yqVS6r.js";import{t as G}from"./typography-CIxJpf_z.js";import{L as ge}from"./Label-D5xTlOE_.js";import{D as be}from"./Description-CEQ-2_hJ.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./negativeColor-BkNdSW00.js";import"./IconCircleCheck-BBUUqRs3.js";const l=s.forwardRef(({label:t,labelType:J="default",optionalText:K,description:$,descriptionLeadingIcon:Q=!1,status:c="default",disabled:i=!1,active:U=!1,focused:X=!1,placeholder:Y,value:C,showCharacterCounter:Z=!1,maxCount:r,maxHeight:w=232,minHeight:ee,onChange:j,onFocus:T,onBlur:D,className:ne="",lang:te,...q},le)=>{const[A,E]=s.useState(X),[ae,S]=s.useState(U),[se,re]=s.useState(C),L=s.useRef(null),p=te,ie=s.useId(),H=q.id??ie;s.useImperativeHandle(le,()=>L.current);const k=C!==void 0?C:se,u=r?(k||"").slice(0,r):k||"",oe=u.length,de=()=>{const a=L.current;if(a){a.style.height="auto";const x=Math.min(a.scrollHeight,w);a.style.height=`${x}px`}};s.useEffect(()=>{de()},[u,w]);const ce=a=>{E(!0),S(!0),T==null||T(a)},pe=a=>{E(!1),S(!1),D==null||D(a)},ue=a=>{const x=a.target.value;r&&x.length>r||(re(x),j==null||j(a))},xe=()=>i?o.light["fg-neutral-disable"]:ae||u?o.light["fg-neutral-primary"]:o.light["fg-neutral-assistive"],he=()=>i?o.light["fg-neutral-disable"]:o.light["fg-neutral-alternative"],me=()=>c==="negative"?h.light["color-border-negative"]:i?h.light["color-border-primary"]:A?h.light["color-border-focused"]:h.light["color-border-primary"],ye=()=>c==="negative"||A?"1.8px":"1px",fe=()=>i?g.gray[50]:g.common[100];return e.jsxs(Ce,{className:ne,children:[t&&e.jsx(ge,{htmlFor:H,type:J,optionalText:K,lang:p,children:t}),e.jsxs(we,{$disabled:i,$focused:A,$borderColor:me(),$borderWidth:ye(),$backgroundColor:fe(),children:[e.jsx(je,{id:H,ref:L,placeholder:Y,value:u,disabled:i,maxLength:r,onChange:ue,onFocus:ce,onBlur:pe,$textColor:xe(),$maxHeight:w,$minHeight:ee,lang:p,...q}),Z&&r&&e.jsxs(Te,{$color:he(),lang:p,children:[oe,"/",r]})]}),$&&e.jsx(be,{status:c==="negative"?"negative":void 0,leadingIcon:c==="negative"?!0:Q,lang:p,children:$})]})}),Ce=b.div`
  display: flex;
  flex-direction: column;
  gap: ${d.gap["gap-1"]};
`,we=b.div`
  display: flex;
  flex-direction: column;
  gap: ${d.gap["gap-3"]};
  min-height: 80px;
  padding: ${d.gap["gap-3"]} ${d.gap["gap-2.5"]};
  border: ${({$borderWidth:t})=>t} solid ${({$borderColor:t})=>t};
  border-radius: ${ve["rounded-2"]};
  background-color: ${({$backgroundColor:t})=>t};
  cursor: ${({$disabled:t})=>t?"not-allowed":"text"};
  transition: border-color 0.2s ease-in-out;
`,je=b.textarea`
  min-height: ${({$minHeight:t})=>t??48}px;
  max-height: ${({$maxHeight:t})=>t}px;
  padding: 0 ${d.gap["gap-1"]};
  border: none;
  outline: none;
  background: transparent;
  resize: none;
  overflow-y: auto;
  ${({lang:t})=>G(t,"body3","regular")}
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
    background: ${g.gray[300]};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${g.gray[400]};
  }
`,Te=b.span`
  ${({lang:t})=>G(t,"body2","regular")}
  color: ${({$color:t})=>t};
  text-align: left;
  font-family: inherit;
`;l.displayName="TextArea";l.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"Label 텍스트"},labelType:{required:!1,tsType:{name:"union",raw:"'default' | 'required' | 'optional'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'required'"},{name:"literal",value:"'optional'"}]},description:"Label 타입",defaultValue:{value:"'default'",computed:!1}},optionalText:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:"Description 텍스트"},descriptionLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Description 앞 아이콘 표시 여부",defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'default' | 'negative'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'negative'"}]},description:"상태",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"활성화 상태",defaultValue:{value:"false",computed:!1}},focused:{required:!1,tsType:{name:"boolean"},description:"포커스 상태",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"placeholder"},value:{required:!1,tsType:{name:"string"},description:"값"},showCharacterCounter:{required:!1,tsType:{name:"boolean"},description:"글자수 카운터 표시 여부",defaultValue:{value:"false",computed:!1}},maxCount:{required:!1,tsType:{name:"number"},description:"최대 글자수"},maxHeight:{required:!1,tsType:{name:"number"},description:"최대 높이 (px)",defaultValue:{value:"232",computed:!1}},minHeight:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"변경 이벤트"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"포커스 이벤트"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"블러 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className",defaultValue:{value:"''",computed:!1}},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:"언어 설정"}}};const ze={title:"Components/Inputs/TextArea",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"여러 줄의 텍스트를 입력할 수 있는 텍스트 영역 컴포넌트입니다. 라벨, 설명, 글자 수 카운터를 지원합니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},m={parameters:{layout:"centered"},render:t=>e.jsx("div",{style:{width:400},children:e.jsx(l,{...t,description:t.description??(t.status==="negative"?"안내 텍스트를 입력해 주세요.":void 0)})}),args:{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500},argTypes:{labelType:{control:"select",options:["default","required","optional"]},status:{control:"select",options:["default","negative"]},disabled:{control:"boolean"},showCharacterCounter:{control:"boolean"}}},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"TextArea"}),e.jsxs("p",{style:n.desc,children:["여러 줄의 텍스트를 입력할 수 있는 컴포넌트입니다.",e.jsx("br",{}),"라벨, 설명, 글자 수 카운터, disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"States"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with value"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled (empty)"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled (with value)"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{value:"텍스트 입력",disabled:!0,showCharacterCounter:!0,maxCount:500})})]})]})}),e.jsx("p",{style:n.sectionTitle,children:"Negative"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"negative (empty)"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",status:"negative",showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"negative (with value)"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{value:"텍스트 입력",status:"negative",showCharacterCounter:!0,maxCount:500})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"negative + description"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",description:"오류 메시지를 입력해 주세요.",descriptionLeadingIcon:!0,status:"negative",placeholder:"텍스트를 입력해 주세요."})})]})]})}),e.jsx("p",{style:n.sectionTitle,children:"Content Options"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with label"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",placeholder:"텍스트를 입력해 주세요."})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with label + description"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."})})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with character counter"}),e.jsx("div",{style:{width:400},children:e.jsx(l,{label:"Label",placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})})]})]})})]})},f={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",showCharacterCounter:!0,maxCount:500})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with value"}),e.jsx(l,{value:"텍스트 입력",showCharacterCounter:!0,maxCount:500})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled"}),e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",disabled:!0,showCharacterCounter:!0,maxCount:500})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"negative"}),e.jsx(l,{placeholder:"텍스트를 입력해 주세요.",status:"negative",showCharacterCounter:!0,maxCount:500})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"negative (with value)"}),e.jsx(l,{value:"텍스트 입력",status:"negative",showCharacterCounter:!0,maxCount:500})]})]})},v={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,width:400},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"label only"}),e.jsx(l,{label:"Label",placeholder:"텍스트를 입력해 주세요."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"label + description"}),e.jsx(l,{label:"Label",description:"Description text",placeholder:"텍스트를 입력해 주세요."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with counter"}),e.jsx(l,{label:"Label",showCharacterCounter:!0,maxCount:500,placeholder:"텍스트를 입력해 주세요."})]})]})};var I,R,V;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    width: 400
  }}>
      <TextArea {...args} description={args.description ?? (args.status === 'negative' ? '안내 텍스트를 입력해 주세요.' : undefined)} />
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
      options: ['default', 'negative']
    },
    disabled: {
      control: 'boolean'
    },
    showCharacterCounter: {
      control: 'boolean'
    }
  }
}`,...(V=(R=m.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var F,M,O;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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

      <p style={s.sectionTitle}>Negative</p>
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
            <span style={s.label}>negative (empty)</span>
            <div style={{
            width: 400
          }}>
              <TextArea placeholder='텍스트를 입력해 주세요.' status='negative' showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>negative (with value)</span>
            <div style={{
            width: 400
          }}>
              <TextArea value='텍스트 입력' status='negative' showCharacterCounter maxCount={500} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>negative + description</span>
            <div style={{
            width: 400
          }}>
              <TextArea label='Label' description='오류 메시지를 입력해 주세요.' descriptionLeadingIcon status='negative' placeholder='텍스트를 입력해 주세요.' />
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
}`,...(O=(M=y.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var N,W,z;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>negative</span>
        <TextArea placeholder='텍스트를 입력해 주세요.' status='negative' showCharacterCounter maxCount={500} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>negative (with value)</span>
        <TextArea value='텍스트 입력' status='negative' showCharacterCounter maxCount={500} />
      </div>
    </div>
}`,...(z=(W=f.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,_,P;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(_=v.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};const Be=["Playground","Overview","AllStates","ContentOptions"];export{f as AllStates,v as ContentOptions,y as Overview,m as Playground,Be as __namedExportsOrder,ze as default};
