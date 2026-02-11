import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-D4fn7yV1.js";import{d as B}from"./styled-components.browser.esm-kr1dGAPk.js";import{r as C}from"./radius-DaoU83SK.js";import{c as r}from"./color-CiwAFuFb.js";import{b as f}from"./borderColor-C_RHITEf.js";import"./preload-helper-eJNa_G2e.js";const t=({state:n="unchecked",disabled:a=!1,onChange:s,className:p="",style:u,...x})=>{const m=()=>{if(a)return;const o=n!=="checked";s==null||s(o)};return e.jsx(w,{$state:n,$disabled:a,onClick:m,className:p,style:u,...x,children:n==="checked"&&e.jsx(U,{})})},w=B.div`
  width: 16px;
  height: 16px;
  border-radius: ${C["rounded-full"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:n})=>n?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  position: relative;

  ${({$state:n,$disabled:a})=>a?n==="checked"?`
          background-color: ${r.gray[200]};
          border: 1px solid ${f.light["color-border-alternative"]};
        `:`
          background-color: ${r.gray[50]};
          border: 1px solid ${f.light["color-border-alternative"]};
        `:n==="checked"?`
        background-color: ${r.gray[950]};
        border: none;
      `:`
        background-color: ${r.common[100]};
        border: 1px solid ${f.light["color-border-primary"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`,U=B.div`
  width: 8px;
  height: 8px;
  border-radius: ${C["rounded-full"]};
  background-color: ${r.common[100]};
  position: absolute;
`;t.displayName="RadioButton";t.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{state:{required:!1,tsType:{name:"union",raw:"'checked' | 'unchecked'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'unchecked'"}]},description:"",defaultValue:{value:"'unchecked'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const $=({state:n="unchecked",disabled:a=!1,onChange:s,...p})=>{const[u,x]=T.useState(n),m=o=>{x(o?"checked":"unchecked"),s==null||s(o)};return e.jsx(t,{state:u,disabled:a,onChange:m,...p})},O={title:"Components/RadioButton",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Radio Button은 사용자가 여러 선택지 중 하나만 선택할 수 있도록 제한하는 기본 UI 컴포넌트로, 단일 선택이 필요한 상황에서 주로 사용됩니다."}}},argTypes:{state:{control:"select",options:["checked","unchecked"],description:"라디오 버튼의 상태를 선택합니다."},disabled:{control:"boolean",description:"라디오 버튼의 비활성화 여부를 설정합니다."},onChange:{action:"changed",description:"라디오 버튼 상태가 변경될 때 호출되는 콜백 함수입니다."}}},l={render:n=>e.jsx($,{...n}),args:{state:"unchecked",disabled:!1}},i={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(t,{state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(t,{state:"unchecked"})]})]})},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Normal States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(t,{state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(t,{state:"unchecked"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Disabled States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(t,{state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(t,{state:"unchecked",disabled:!0})]})]})]})},d={render:n=>e.jsx($,{...n}),args:{state:"unchecked",disabled:!1},argTypes:{state:{control:!1}}};var h,g,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <RadioButtonWithState {...args} />,
  args: {
    state: 'unchecked',
    disabled: false
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var k,v,b;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Checked</span>
        <RadioButton state='checked' />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Unchecked</span>
        <RadioButton state='unchecked' />
      </div>
    </div>
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,j,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: '16px',
        fontWeight: '600'
      }}>Normal States</span>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}>
          <span style={{
          fontSize: '12px',
          color: '#666'
        }}>Checked</span>
          <RadioButton state='checked' />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}>
          <span style={{
          fontSize: '12px',
          color: '#666'
        }}>Unchecked</span>
          <RadioButton state='unchecked' />
        </div>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      alignItems: 'center'
    }}>
        <span style={{
        fontSize: '16px',
        fontWeight: '600'
      }}>Disabled States</span>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}>
          <span style={{
          fontSize: '12px',
          color: '#666'
        }}>Checked</span>
          <RadioButton state='checked' disabled={true} />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center'
      }}>
          <span style={{
          fontSize: '12px',
          color: '#666'
        }}>Unchecked</span>
          <RadioButton state='unchecked' disabled={true} />
        </div>
      </div>
    </div>
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var D,R,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <RadioButtonWithState {...args} />,
  args: {
    state: 'unchecked',
    disabled: false
  },
  argTypes: {
    state: {
      control: false
    }
  }
}`,...(z=(R=d.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const P=["Default","AllStates","AllCombinations","Interactive"];export{c as AllCombinations,i as AllStates,l as Default,d as Interactive,P as __namedExportsOrder,O as default};
