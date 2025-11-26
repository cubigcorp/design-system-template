import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./iframe-C8Me4DqF.js";import{R as n}from"./RadioButton-BWMmEzuS.js";import"./styled-components.browser.esm-DPhkORiP.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import"./radius-DaoU83SK.js";const S=({state:t="unchecked",disabled:j=!1,onChange:l,...I})=>{const[D,b]=R.useState(t),z=o=>{b(o?"checked":"unchecked"),l==null||l(o)};return e.jsx(n,{state:D,disabled:j,onChange:z,...I})},F={title:"Components/RadioButton",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Radio Button은 사용자가 여러 선택지 중 하나만 선택할 수 있도록 제한하는 기본 UI 컴포넌트로, 단일 선택이 필요한 상황에서 주로 사용됩니다."}}},argTypes:{state:{control:"select",options:["checked","unchecked"],description:"라디오 버튼의 상태를 선택합니다."},disabled:{control:"boolean",description:"라디오 버튼의 비활성화 여부를 설정합니다."},onChange:{action:"changed",description:"라디오 버튼 상태가 변경될 때 호출되는 콜백 함수입니다."}}},s={render:t=>e.jsx(S,{...t}),args:{state:"unchecked",disabled:!1}},a={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{state:"unchecked"})]})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Normal States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{state:"unchecked"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Disabled States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{state:"unchecked",disabled:!0})]})]})]})},i={render:t=>e.jsx(S,{...t}),args:{state:"unchecked",disabled:!1},argTypes:{state:{control:!1}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <RadioButtonWithState {...args} />,
  args: {
    state: "unchecked",
    disabled: false
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var x,m,u;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Checked</span>
        <RadioButton state="checked" />
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Unchecked</span>
        <RadioButton state="unchecked" />
      </div>
    </div>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "32px"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "16px",
        fontWeight: "600"
      }}>
          Normal States
        </span>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center"
      }}>
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Checked</span>
          <RadioButton state="checked" />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center"
      }}>
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Unchecked</span>
          <RadioButton state="unchecked" />
        </div>
      </div>

      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "16px",
        fontWeight: "600"
      }}>
          Disabled States
        </span>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center"
      }}>
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Checked</span>
          <RadioButton state="checked" disabled={true} />
        </div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        alignItems: "center"
      }}>
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Unchecked</span>
          <RadioButton state="unchecked" disabled={true} />
        </div>
      </div>
    </div>
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,k,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <RadioButtonWithState {...args} />,
  args: {
    state: "unchecked",
    disabled: false
  },
  argTypes: {
    state: {
      control: false
    }
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const G=["Default","AllStates","AllCombinations","Interactive"];export{r as AllCombinations,a as AllStates,s as Default,i as Interactive,G as __namedExportsOrder,F as default};
