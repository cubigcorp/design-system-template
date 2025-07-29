import{j as e}from"./jsx-runtime-CGmPDQQA.js";import{r as k}from"./iframe-BE39lfRy.js";import{d as E}from"./styled-components.browser.esm-BnnUhwQ2.js";import{c as r}from"./color-CMFzNX_O.js";import{b as g,t as v}from"./borderColor-C1c8KEhD.js";import"./typography-BtvHU1C6.js";import{r as M}from"./radius-DaoU83SK.js";import{s as N}from"./spacing-tE1IiUFl.js";import{I as O,a as R}from"./IconRemove-HQND5J0n.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";const n=({variant:t="secondary",state:a="unchecked",disabled:l=!1,active:c=!1,onChange:i,className:u="",...o})=>{const d=()=>{if(l)return;let s;a==="indeterminate"?s=!0:a==="checked"?s=!1:s=!0,i==null||i(s)},h=()=>a==="checked"?e.jsx(O,{width:16,height:16,color:"currentColor"}):a==="indeterminate"?e.jsx(R,{width:16,height:16,color:"currentColor"}):null;return e.jsx(L,{$variant:t,$state:a,$disabled:l,$active:c,onClick:d,className:u,...o,children:h()})},L=E.div`
  width: 16px;
  height: 16px;
  border-radius: ${M["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${N.gap["gap-0"]};

  /* 색상 스타일 */
  ${({$variant:t,$state:a,$disabled:l,$active:c})=>l?`
        background-color: ${r.gray[50]};
        border: 1px solid ${g.light["color-border-primary"]};
        color: ${v.light["fg-neutral-disable"]};
      `:t==="primary"&&a==="checked"?c?`
          background-color: ${r.gray[950]};
          border: 1px solid ${r.gray[925]};
          color: ${r.common[100]};
        `:`
          background-color: ${r.gray[950]};
          border: 1px solid ${r.gray[925]};
          color: ${r.common[100]};
        `:t==="secondary"?c?`
          background-color: ${r.gray[950]};
          border: 1px solid ${r.gray[925]};
          color: ${r.common[100]};
        `:`
          background-color: ${r.common[100]};
          border: 1px solid ${g.light["color-border-primary"]};
          color: ${v.light["fg-neutral-strong"]};
        `:`
      background-color: ${r.common[100]};
      border: 1px solid ${g.light["color-border-primary"]};
      color: ${v.light["fg-neutral-strong"]};
    `}

  &:hover {
    ${({$disabled:t})=>!t&&`
      opacity: 0.8;
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${r.blue[200]};
  }
`;n.displayName="Checkbox";n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"체크박스의 변형 (primary/secondary)",defaultValue:{value:'"secondary"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"checked" | "unchecked" | "indeterminate"',elements:[{name:"literal",value:'"checked"'},{name:"literal",value:'"unchecked"'},{name:"literal",value:'"indeterminate"'}]},description:"체크박스의 상태 (checked/unchecked/indeterminate)",defaultValue:{value:'"unchecked"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"비활성화 여부",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"활성/포커스 상태",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"체크박스 클릭 핸들러"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["Omit"]};const B=({variant:t="secondary",state:a="unchecked",disabled:l=!1,active:c=!1,onChange:i,...u})=>{const[o,d]=k.useState(a),[h,s]=k.useState(c),P=_=>{d(o==="indeterminate"?"checked":o==="checked"?"unchecked":"checked"),i==null||i(_)};return e.jsx(n,{variant:t,state:o,disabled:l,active:h,onChange:P,onMouseDown:()=>s(!0),onMouseUp:()=>s(!1),onMouseLeave:()=>s(!1),...u})},re={title:"Components/Checkbox",component:n,parameters:{layout:"centered",docs:{description:{component:"Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary, Secondary 변형과 Checked, Unchecked, Indeterminate 상태를 지원합니다."}}},argTypes:{variant:{control:"select",options:["primary","secondary"],description:"체크박스의 변형을 선택합니다."},state:{control:"select",options:["checked","unchecked","indeterminate"],description:"체크박스의 상태를 선택합니다."},disabled:{control:"boolean",description:"체크박스의 비활성화 여부를 설정합니다."},active:{control:"boolean",description:"체크박스의 활성/포커스 상태를 설정합니다."},onChange:{action:"changed",description:"체크박스 상태가 변경될 때 호출되는 콜백 함수입니다."}}},p={args:{variant:"secondary",state:"unchecked",disabled:!1,active:!1}},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{state:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Indeterminate"}),e.jsx(n,{state:"indeterminate"})]})]})},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary"}),e.jsx(n,{variant:"primary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary"}),e.jsx(n,{variant:"secondary",state:"checked"})]})]})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"24px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Primary"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{variant:"primary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{variant:"primary",state:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Indeterminate"}),e.jsx(n,{variant:"primary",state:"indeterminate"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Secondary"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{variant:"secondary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Indeterminate"}),e.jsx(n,{variant:"secondary",state:"indeterminate"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Active"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{variant:"secondary",state:"checked",active:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked",active:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Indeterminate"}),e.jsx(n,{variant:"secondary",state:"indeterminate",active:!0})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"14px",fontWeight:"600"},children:"Disabled"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{variant:"secondary",state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Indeterminate"}),e.jsx(n,{variant:"secondary",state:"indeterminate",disabled:!0})]})]})]})},f={render:t=>e.jsx(B,{...t}),args:{variant:"secondary",state:"unchecked",disabled:!1,active:!1}};var b,j,I;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    state: "unchecked",
    disabled: false,
    active: false
  }
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,D,C;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Checked</span>\r
        <Checkbox state="checked" />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Unchecked</span>\r
        <Checkbox state="unchecked" />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Indeterminate</span>\r
        <Checkbox state="indeterminate" />\r
      </div>\r
    </div>
}`,...(C=(D=x.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var z,$,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Primary</span>\r
        <Checkbox variant="primary" state="checked" />\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Secondary</span>\r
        <Checkbox variant="secondary" state="checked" />\r
      </div>\r
    </div>
}`,...(U=($=m.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var A,W,w;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px"
  }}>\r
      {/* Primary Variant */}\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "14px",
        fontWeight: "600"
      }}>Primary</span>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Checked</span>\r
          <Checkbox variant="primary" state="checked" />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Unchecked</span>\r
          <Checkbox variant="primary" state="unchecked" />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Indeterminate</span>\r
          <Checkbox variant="primary" state="indeterminate" />\r
        </div>\r
      </div>\r
\r
      {/* Secondary Variant */}\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "14px",
        fontWeight: "600"
      }}>Secondary</span>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Checked</span>\r
          <Checkbox variant="secondary" state="checked" />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Unchecked</span>\r
          <Checkbox variant="secondary" state="unchecked" />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Indeterminate</span>\r
          <Checkbox variant="secondary" state="indeterminate" />\r
        </div>\r
      </div>\r
\r
      {/* Active States */}\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "14px",
        fontWeight: "600"
      }}>Active</span>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Checked</span>\r
          <Checkbox variant="secondary" state="checked" active={true} />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Unchecked</span>\r
          <Checkbox variant="secondary" state="unchecked" active={true} />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Indeterminate</span>\r
          <Checkbox variant="secondary" state="indeterminate" active={true} />\r
        </div>\r
      </div>\r
\r
      {/* Disabled States */}\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "14px",
        fontWeight: "600"
      }}>Disabled</span>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Checked</span>\r
          <Checkbox variant="secondary" state="checked" disabled={true} />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Unchecked</span>\r
          <Checkbox variant="secondary" state="unchecked" disabled={true} />\r
        </div>\r
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center"
      }}>\r
          <span style={{
          fontSize: "12px",
          color: "#666"
        }}>Indeterminate</span>\r
          <Checkbox variant="secondary" state="indeterminate" disabled={true} />\r
        </div>\r
      </div>\r
    </div>
}`,...(w=(W=y.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var V,T,q;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <CheckboxWithState {...args} />,
  args: {
    variant: "secondary",
    state: "unchecked",
    disabled: false,
    active: false
  }
}`,...(q=(T=f.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const te=["Default","AllStates","AllVariants","AllCombinations","Interactive"];export{y as AllCombinations,x as AllStates,m as AllVariants,p as Default,f as Interactive,te as __namedExportsOrder,re as default};
