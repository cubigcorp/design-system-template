import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-skmiukBS.js";import{c as P}from"./styled-components.browser.esm-1f8qeTbm.js";import{r as z}from"./radius-DaoU83SK.js";import{s as F}from"./spacing-tE1IiUFl.js";import{c as s}from"./color-m2U5piog.js";import{b as f}from"./borderColor-CzkI5wcR.js";import{t as c}from"./textColor-G8dwupNW.js";import{I as O}from"./IconCheck-Cgh-IEDk.js";import"./preload-helper-eJNa_G2e.js";const r=({variant:n="secondary",state:l="unchecked",disabled:t=!1,onChange:i,className:u="",...x})=>{const h=()=>{if(t)return;const d=l!=="checked";i==null||i(d)},g=()=>l==="checked"?e.jsx(O,{width:16,height:16,color:"currentColor"}):null;return e.jsx(_,{$variant:n,$state:l,$disabled:t,onClick:h,className:u,...x,children:g()})},_=P.div`
  width: 16px;
  height: 16px;
  border-radius: ${z["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:n})=>n?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${F.gap["gap-0"]};

  ${({$variant:n,$state:l,$disabled:t})=>n==="primary"?l==="checked"?t?`
            background-color: ${s.gray[700]};
            border: 1px solid ${s.gray[600]};
            color: ${s.gray[500]};
          `:`
          background-color: ${s.gray[950]};
          border: 1px solid ${s.gray[925]};
          color: ${s.common[100]};
        `:t?`
            background-color: ${s.gray[50]};
            border: 1px solid ${f.light["color-border-alternative"]};
            color: ${c.light["fg-neutral-disable"]};
          `:`
          background-color: ${s.common[100]};
          border: 1px solid ${s.gray[400]};
          color: ${c.light["fg-neutral-strong"]};
        `:l==="checked"?t?`
          background-color: ${s.gray[50]};
          border: 1px solid ${f.light["color-border-primary"]};
          color: ${c.light["fg-neutral-disable"]};
        `:`
        background-color: ${s.common[100]};
        border: 1px solid ${s.gray[400]};
        color: ${c.light["fg-neutral-strong"]};
      `:t?`
          background-color: ${s.gray[50]};
          border: 1px solid ${f.light["color-border-alternative"]};
          color: ${c.light["fg-neutral-disable"]};
        `:`
        background-color: ${s.common[100]};
        border: 1px solid ${s.gray[400]};
        color: ${c.light["fg-neutral-strong"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`;r.displayName="Checkbox";r.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'checked' | 'unchecked'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'unchecked'"}]},description:"",defaultValue:{value:"'unchecked'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const v=({variant:n="secondary",state:l="unchecked",disabled:t=!1,onChange:i,...u})=>{const[x,h]=q.useState(l),g=d=>{h(d?"checked":"unchecked"),i==null||i(d)};return e.jsx(r,{variant:n,state:x,disabled:t,onChange:g,...u})},L={title:"Components/Inputs/Checkbox",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary와 Secondary 변형을 지원하며, checked와 unchecked 상태를 가집니다."}}}},a={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},o={parameters:{layout:"centered"},render:n=>e.jsx(v,{...n}),args:{variant:"secondary",state:"unchecked",disabled:!1},argTypes:{variant:{control:"select",options:["primary","secondary"]},state:{control:"select",options:["checked","unchecked"]},disabled:{control:"boolean"}}},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:a.page,children:[e.jsxs("div",{style:a.header,children:[e.jsx("h1",{style:a.title,children:"Checkbox"}),e.jsxs("p",{style:a.desc,children:["사용자의 선택을 나타내는 체크박스 컴포넌트입니다.",e.jsx("br",{}),"Primary/Secondary 변형과 checked/unchecked/disabled 상태를 지원합니다."]})]}),e.jsx("p",{style:a.sectionTitle,children:"Variants × States"}),e.jsx("div",{style:a.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["primary","secondary"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:n}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"checked"}),e.jsx("span",{style:a.label,children:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"unchecked"}),e.jsx("span",{style:a.label,children:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"checked",disabled:!0}),e.jsx("span",{style:a.label,children:"disabled checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"unchecked",disabled:!0}),e.jsx("span",{style:a.label,children:"disabled unchecked"})]})]})]},n))})}),e.jsx("p",{style:a.sectionTitle,children:"Interactive"}),e.jsx("div",{style:a.card,children:e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(v,{variant:"primary",state:"unchecked"}),e.jsx("span",{style:a.label,children:"primary"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(v,{variant:"secondary",state:"unchecked"}),e.jsx("span",{style:a.label,children:"secondary"})]})]})})]})},y={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:["primary","secondary"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"checked"}),e.jsx("span",{style:a.label,children:n})]},n))})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["primary","secondary"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:n}),e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"checked"}),e.jsx("span",{style:a.label,children:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"unchecked"}),e.jsx("span",{style:a.label,children:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:n,state:"checked",disabled:!0}),e.jsx("span",{style:a.label,children:"disabled"})]})]})]},n))})};var b,k,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
      options: ['primary', 'secondary']
    },
    state: {
      control: 'select',
      options: ['checked', 'unchecked']
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(j=(k=o.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,D,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
          {(['primary', 'secondary'] as const).map(variant => <div key={variant} style={{
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
}`,...(S=(D=p.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var $,C,T;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
      {(['primary', 'secondary'] as const).map(variant => <div key={variant} style={{
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
      {(['primary', 'secondary'] as const).map(variant => <div key={variant} style={{
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
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const Q=["Playground","Overview","Variants","States"];export{p as Overview,o as Playground,m as States,y as Variants,Q as __namedExportsOrder,L as default};
