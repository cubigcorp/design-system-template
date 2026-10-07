import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-BQlxtUxC.js";import{c as z}from"./styled-components.browser.esm-BsJdvhJY.js";import{r as F}from"./radius-DaoU83SK.js";import{s as O}from"./spacing-tE1IiUFl.js";import{c as a}from"./color-CZjzAmeO.js";import{b as o}from"./borderColor-DnXd17KV.js";import{t as i}from"./textColor-D-yqVS6r.js";import{I as P}from"./IconCheck-Cgh-IEDk.js";import{S as _}from"./icon_minimize_outline_16-LyLTa5wV.js";import"./preload-helper-eJNa_G2e.js";const B="#2b7fff",l=({variant:n="secondary",state:t="unchecked",disabled:s=!1,onChange:c,className:u="",...x})=>{const g=()=>{s||c==null||c(t!=="checked")},h=()=>t==="checked"?e.jsx(P,{width:16,height:16,color:"currentColor"}):t==="indeterminate"?e.jsx(_,{}):null;return e.jsx(E,{$variant:n,$state:t,$disabled:s,onClick:g,className:u,...x,children:h()})},E=z.div`
  width: 16px;
  height: 16px;
  border-radius: ${F["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:n})=>n?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${O.gap["gap-0"]};

  ${({$variant:n,$state:t,$disabled:s})=>n==="blue"?t!=="unchecked"?s?`
            background-color: ${a.gray[700]};
            border: none;
            color: ${a.common[100]};
          `:`
          background-color: ${B};
          border: none;
          color: ${a.common[100]};
        `:s?`
          background-color: ${a.gray[50]};
          border: 1px solid ${o.light["color-border-alternative"]};
          color: ${i.light["fg-neutral-disable"]};
        `:`
        background-color: ${a.common[100]};
        border: 1px solid ${a.gray[400]};
        color: ${i.light["fg-neutral-strong"]};
      `:n==="primary"?t!=="unchecked"?s?`
            background-color: ${a.gray[700]};
            border: 1px solid ${a.gray[600]};
            color: ${a.gray[500]};
          `:`
          background-color: ${a.gray[950]};
          border: 1px solid ${a.gray[925]};
          color: ${a.common[100]};
        `:s?`
            background-color: ${a.gray[50]};
            border: 1px solid ${o.light["color-border-alternative"]};
            color: ${i.light["fg-neutral-disable"]};
          `:`
          background-color: ${a.common[100]};
          border: 1px solid ${a.gray[400]};
          color: ${i.light["fg-neutral-strong"]};
        `:t!=="unchecked"?s?`
          background-color: ${a.gray[50]};
          border: 1px solid ${o.light["color-border-primary"]};
          color: ${i.light["fg-neutral-disable"]};
        `:`
        background-color: ${a.common[100]};
        border: 1px solid ${a.gray[400]};
        color: ${i.light["fg-neutral-strong"]};
      `:s?`
          background-color: ${a.gray[50]};
          border: 1px solid ${o.light["color-border-alternative"]};
          color: ${i.light["fg-neutral-disable"]};
        `:`
        background-color: ${a.common[100]};
        border: 1px solid ${a.gray[400]};
        color: ${i.light["fg-neutral-strong"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`;l.displayName="Checkbox";l.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'blue'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'blue'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'checked' | 'unchecked' | 'indeterminate'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'unchecked'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'unchecked'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const f=({variant:n="secondary",state:t="unchecked",disabled:s=!1,onChange:c,...u})=>{const[x,g]=q.useState(t),h=b=>{g(b?"checked":"unchecked"),c==null||c(b)};return e.jsx(l,{variant:n,state:x,disabled:s,onChange:h,...u})},X={title:"Components/Inputs/Checkbox",component:l,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary와 Secondary 변형을 지원하며, checked와 unchecked 상태를 가집니다."}}}},r={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},d={parameters:{layout:"centered"},render:n=>e.jsx(f,{...n}),args:{variant:"secondary",state:"unchecked",disabled:!1},argTypes:{variant:{control:"select",options:["primary","secondary","blue"]},state:{control:"select",options:["checked","unchecked"]},disabled:{control:"boolean"}}},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:r.page,children:[e.jsxs("div",{style:r.header,children:[e.jsx("h1",{style:r.title,children:"Checkbox"}),e.jsxs("p",{style:r.desc,children:["사용자의 선택을 나타내는 체크박스 컴포넌트입니다.",e.jsx("br",{}),"Primary/Secondary 변형과 checked/unchecked/disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:r.sectionTitle,children:"Variants × States"}),e.jsx("div",{style:r.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["primary","secondary","blue"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:n}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"checked"}),e.jsx("span",{style:r.label,children:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"unchecked"}),e.jsx("span",{style:r.label,children:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"checked",disabled:!0}),e.jsx("span",{style:r.label,children:"disabled checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"unchecked",disabled:!0}),e.jsx("span",{style:r.label,children:"disabled unchecked"})]})]})]},n))})}),e.jsx("p",{style:r.sectionTitle,children:"Interactive"}),e.jsx("div",{style:r.card,children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(f,{variant:"primary",state:"unchecked"}),e.jsx("span",{style:r.label,children:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(f,{variant:"secondary",state:"unchecked"}),e.jsx("span",{style:r.label,children:"secondary"})]})]})})]})},y={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:["primary","secondary","blue"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"checked"}),e.jsx("span",{style:r.label,children:n})]},n))})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["primary","secondary","blue"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:r.label,children:n}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"checked"}),e.jsx("span",{style:r.label,children:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"unchecked"}),e.jsx("span",{style:r.label,children:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(l,{variant:n,state:"checked",disabled:!0}),e.jsx("span",{style:r.label,children:"disabled"})]})]})]},n))})};var v,k,j;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <CheckboxWithState {...args} />,
  args: {
    variant: 'secondary',
    state: 'unchecked',
    disabled: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'blue']
    },
    state: {
      control: 'select',
      options: ['checked', 'unchecked']
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(j=(k=d.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,$,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Checkbox</h1>
        <p style={s.desc}>
          사용자의 선택을 나타내는 체크박스 컴포넌트입니다.
          <br />
          Primary/Secondary 변형과 checked/unchecked/disabled 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants × States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {(['primary', 'secondary', 'blue'] as const).map(variant => <div key={variant} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
              <span style={s.label}>{variant}</span>
              <div style={{
            display: 'flex',
            gap: 24,
            alignItems: 'center'
          }}>
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8
            }}>
                  <Checkbox variant={variant} state='checked' />
                  <span style={s.label}>checked</span>
                </div>
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8
            }}>
                  <Checkbox variant={variant} state='unchecked' />
                  <span style={s.label}>unchecked</span>
                </div>
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8
            }}>
                  <Checkbox variant={variant} state='checked' disabled />
                  <span style={s.label}>disabled checked</span>
                </div>
                <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8
            }}>
                  <Checkbox variant={variant} state='unchecked' disabled />
                  <span style={s.label}>disabled unchecked</span>
                </div>
              </div>
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
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <CheckboxWithState variant='primary' state='unchecked' />
            <span style={s.label}>primary</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <CheckboxWithState variant='secondary' state='unchecked' />
            <span style={s.label}>secondary</span>
          </div>
        </div>
      </div>
    </div>
}`,...(S=($=p.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var D,C,T;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      {(['primary', 'secondary', 'blue'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Checkbox variant={variant} state='checked' />
          <span style={s.label}>{variant}</span>
        </div>)}
    </div>
}`,...(T=(C=y.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var w,V,W;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      {(['primary', 'secondary', 'blue'] as const).map(variant => <div key={variant} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={s.label}>{variant}</span>
          <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center'
      }}>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <Checkbox variant={variant} state='checked' />
              <span style={s.label}>checked</span>
            </div>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <Checkbox variant={variant} state='unchecked' />
              <span style={s.label}>unchecked</span>
            </div>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <Checkbox variant={variant} state='checked' disabled />
              <span style={s.label}>disabled</span>
            </div>
          </div>
        </div>)}
    </div>
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Y=["Playground","Overview","Variants","States"];export{p as Overview,d as Playground,m as States,y as Variants,Y as __namedExportsOrder,X as default};
