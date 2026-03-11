import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-CCQJzrSR.js";import{c as I}from"./styled-components.browser.esm-f0aNwSj6.js";import{r as $}from"./radius-DaoU83SK.js";import{c as l}from"./color-m2U5piog.js";import{b as h}from"./borderColor-CzkI5wcR.js";import"./preload-helper-eJNa_G2e.js";const d=({state:t="unchecked",disabled:s=!1,onChange:n,className:u="",style:p,...m})=>{const b=()=>{if(s)return;const r=t!=="checked";n==null||n(r)};return e.jsx(w,{$state:t,$disabled:s,onClick:b,className:u,style:p,...m,children:t==="checked"&&e.jsx(W,{})})},w=I.div`
  width: 16px;
  height: 16px;
  border-radius: ${$["rounded-full"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  position: relative;

  ${({$state:t,$disabled:s})=>s?t==="checked"?`
          background-color: ${l.gray[200]};
          border: 1px solid ${h.light["color-border-alternative"]};
        `:`
          background-color: ${l.gray[50]};
          border: 1px solid ${h.light["color-border-alternative"]};
        `:t==="checked"?`
        background-color: ${l.gray[950]};
        border: none;
      `:`
        background-color: ${l.common[100]};
        border: 1px solid ${h.light["color-border-primary"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`,W=I.div`
  width: 8px;
  height: 8px;
  border-radius: ${$["rounded-full"]};
  background-color: ${l.common[100]};
  position: absolute;
`;d.displayName="RadioButton";d.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{state:{required:!1,tsType:{name:"union",raw:"'checked' | 'unchecked'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'unchecked'"}]},description:"",defaultValue:{value:"'unchecked'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const y=({state:t="unchecked",disabled:s=!1,onChange:n,...u})=>{const[p,m]=T.useState(t),b=r=>{m(r?"checked":"unchecked"),n==null||n(r)};return e.jsx(d,{state:p,disabled:s,onChange:b,...u})},E={title:"Components/Inputs/RadioButton",component:d,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Radio Button은 사용자가 여러 선택지 중 하나만 선택할 수 있도록 제한하는 기본 UI 컴포넌트입니다."}}}},a={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},c={parameters:{layout:"centered"},render:t=>e.jsx(y,{...t}),args:{state:"unchecked",disabled:!1},argTypes:{state:{control:"select",options:["checked","unchecked"]},disabled:{control:"boolean"}}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:a.page,children:[e.jsxs("div",{style:a.header,children:[e.jsx("h1",{style:a.title,children:"Radio Button"}),e.jsxs("p",{style:a.desc,children:["여러 선택지 중 하나만 선택할 수 있는 라디오 버튼입니다.",e.jsx("br",{}),"checked/unchecked 상태와 disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:a.sectionTitle,children:"States"}),e.jsx("div",{style:a.card,children:e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[{state:"checked",disabled:!1,label:"checked"},{state:"unchecked",disabled:!1,label:"unchecked"},{state:"checked",disabled:!0,label:"disabled checked"},{state:"unchecked",disabled:!0,label:"disabled unchecked"}].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(d,{state:t.state,disabled:t.disabled}),e.jsx("span",{style:a.label,children:t.label})]},t.label))})}),e.jsx("p",{style:a.sectionTitle,children:"Interactive"}),e.jsx("div",{style:a.card,children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(y,{state:"unchecked"}),e.jsx(y,{state:"checked"})]})})]})},o={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[{state:"checked",disabled:!1,label:"checked"},{state:"unchecked",disabled:!1,label:"unchecked"},{state:"checked",disabled:!0,label:"disabled checked"},{state:"unchecked",disabled:!0,label:"disabled unchecked"}].map(t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(d,{state:t.state,disabled:t.disabled}),e.jsx("span",{style:a.label,children:t.label})]},t.label))})};var k,f,g;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <RadioButtonWithState {...args} />,
  args: {
    state: 'unchecked',
    disabled: false
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['checked', 'unchecked']
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var x,v,S;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Radio Button</h1>
        <p style={s.desc}>
          여러 선택지 중 하나만 선택할 수 있는 라디오 버튼입니다.
          <br />
          checked/unchecked 상태와 disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          {[{
          state: 'checked' as const,
          disabled: false,
          label: 'checked'
        }, {
          state: 'unchecked' as const,
          disabled: false,
          label: 'unchecked'
        }, {
          state: 'checked' as const,
          disabled: true,
          label: 'disabled checked'
        }, {
          state: 'unchecked' as const,
          disabled: true,
          label: 'disabled unchecked'
        }].map(item => <div key={item.label} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <RadioButton state={item.state} disabled={item.disabled} />
              <span style={s.label}>{item.label}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Interactive</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
          <RadioButtonWithState state='unchecked' />
          <RadioButtonWithState state='checked' />
        </div>
      </div>
    </div>
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var j,R,B;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {[{
      state: 'checked' as const,
      disabled: false,
      label: 'checked'
    }, {
      state: 'unchecked' as const,
      disabled: false,
      label: 'unchecked'
    }, {
      state: 'checked' as const,
      disabled: true,
      label: 'disabled checked'
    }, {
      state: 'unchecked' as const,
      disabled: true,
      label: 'disabled unchecked'
    }].map(item => <div key={item.label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <RadioButton state={item.state} disabled={item.disabled} />
          <span style={s.label}>{item.label}</span>
        </div>)}
    </div>
}`,...(B=(R=o.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};const N=["Playground","Overview","States"];export{i as Overview,c as Playground,o as States,N as __namedExportsOrder,E as default};
