import{j as e}from"./jsx-runtime-Bm_hQ5rp.js";import{r as W}from"./iframe-CWrHPpkc.js";import{C as n}from"./Checkbox-_-tdzPNq.js";import"./styled-components.browser.esm-C_r3Obn0.js";import"./color-DqDZjiGS.js";import"./textColor-SSyLf7rE.js";import"./borderColor-CQKT7y1f.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./IconSearch-B3Tx8K8U.js";import"./IconCheck-BL7gbP7r.js";const T=({variant:c="secondary",state:C="unchecked",disabled:D=!1,onChange:l,...z})=>{const[P,U]=W.useState(C),A=o=>{U(o?"checked":"unchecked"),l==null||l(o)};return e.jsx(n,{variant:c,state:P,disabled:D,onChange:A,...z})},H={title:"Components/Checkbox",component:n,parameters:{layout:"centered",docs:{description:{component:"Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary와 Secondary 변형을 지원하며, checked와 unchecked 상태를 가집니다."}}},argTypes:{variant:{control:"select",options:["primary","secondary"],description:"체크박스의 변형을 선택합니다."},state:{control:"select",options:["checked","unchecked"],description:"체크박스의 상태를 선택합니다."},disabled:{control:"boolean",description:"체크박스의 비활성화 여부를 설정합니다."},onChange:{action:"changed",description:"체크박스 상태가 변경될 때 호출되는 콜백 함수입니다."}}},t={args:{variant:"secondary",state:"unchecked",disabled:!1}},s={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{variant:"secondary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked"})]})]})},a={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary"}),e.jsx(n,{variant:"primary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary"}),e.jsx(n,{variant:"secondary",state:"checked"})]})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Normal States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Checked"}),e.jsx(n,{variant:"primary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Unchecked"}),e.jsx(n,{variant:"primary",state:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Checked"}),e.jsx(n,{variant:"secondary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Disabled States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Checked"}),e.jsx(n,{variant:"primary",state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Unchecked"}),e.jsx(n,{variant:"primary",state:"unchecked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Checked"}),e.jsx(n,{variant:"secondary",state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked",disabled:!0})]})]})]})},i={render:c=>e.jsx(T,{...c}),args:{variant:"secondary",state:"unchecked",disabled:!1},argTypes:{state:{control:!1}}};var d,p,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    state: "unchecked",
    disabled: false
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var y,m,h;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
        <Checkbox variant="secondary" state="checked" />
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
        <Checkbox variant="secondary" state="unchecked" />
      </div>
    </div>
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,g,u;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
      }}>Primary</span>
        <Checkbox variant="primary" state="checked" />
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
      }}>Secondary</span>
        <Checkbox variant="secondary" state="checked" />
      </div>
    </div>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var v,k,S;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        }}>
            Primary - Checked
          </span>
          <Checkbox variant="primary" state="checked" />
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
        }}>
            Primary - Unchecked
          </span>
          <Checkbox variant="primary" state="unchecked" />
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
        }}>
            Secondary - Checked
          </span>
          <Checkbox variant="secondary" state="checked" />
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
        }}>
            Secondary - Unchecked
          </span>
          <Checkbox variant="secondary" state="unchecked" />
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
        }}>
            Primary - Checked
          </span>
          <Checkbox variant="primary" state="checked" disabled={true} />
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
        }}>
            Primary - Unchecked
          </span>
          <Checkbox variant="primary" state="unchecked" disabled={true} />
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
        }}>
            Secondary - Checked
          </span>
          <Checkbox variant="secondary" state="checked" disabled={true} />
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
        }}>
            Secondary - Unchecked
          </span>
          <Checkbox variant="secondary" state="unchecked" disabled={true} />
        </div>
      </div>
    </div>
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,b,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <CheckboxWithState {...args} />,
  args: {
    variant: "secondary",
    state: "unchecked",
    disabled: false
  },
  argTypes: {
    state: {
      control: false
    }
  }
}`,...(I=(b=i.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const J=["Default","AllStates","AllVariants","AllCombinations","Interactive"];export{r as AllCombinations,s as AllStates,a as AllVariants,t as Default,i as Interactive,J as __namedExportsOrder,H as default};
