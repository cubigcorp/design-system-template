import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./iframe-D4fn7yV1.js";import{d as W}from"./styled-components.browser.esm-kr1dGAPk.js";import{r as q}from"./radius-DaoU83SK.js";import{s as N}from"./spacing-tE1IiUFl.js";import{c as r}from"./color-CiwAFuFb.js";import{b as g}from"./borderColor-C_RHITEf.js";import{t as c}from"./textColor-DLZeZODc.js";import{I as _}from"./IconCheck-Cgh-IEDk.js";import"./preload-helper-eJNa_G2e.js";const n=({variant:a="secondary",state:s="unchecked",disabled:t=!1,onChange:l,className:m="",...u})=>{const f=()=>{if(t)return;const i=s!=="checked";l==null||l(i)},h=()=>s==="checked"?e.jsx(_,{width:16,height:16,color:"currentColor"}):null;return e.jsx(E,{$variant:a,$state:s,$disabled:t,onClick:f,className:m,...u,children:h()})},E=W.div`
  width: 16px;
  height: 16px;
  border-radius: ${q["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  padding: ${N.gap["gap-0"]};

  ${({$variant:a,$state:s,$disabled:t})=>a==="primary"?s==="checked"?t?`
            background-color: ${r.gray[700]};
            border: 1px solid ${r.gray[600]};
            color: ${r.gray[500]};
          `:`
          background-color: ${r.gray[950]};
          border: 1px solid ${r.gray[925]};
          color: ${r.common[100]};
        `:t?`
            background-color: ${r.gray[50]};
            border: 1px solid ${g.light["color-border-alternative"]};
            color: ${c.light["fg-neutral-disable"]};
          `:`
          background-color: ${r.common[100]};
          border: 1px solid ${r.gray[400]};
          color: ${c.light["fg-neutral-strong"]};
        `:s==="checked"?t?`
          background-color: ${r.gray[50]};
          border: 1px solid ${g.light["color-border-primary"]};
          color: ${c.light["fg-neutral-disable"]};
        `:`
        background-color: ${r.common[100]};
        border: 1px solid ${r.gray[400]};
        color: ${c.light["fg-neutral-strong"]};
      `:t?`
          background-color: ${r.gray[50]};
          border: 1px solid ${g.light["color-border-alternative"]};
          color: ${c.light["fg-neutral-disable"]};
        `:`
        background-color: ${r.common[100]};
        border: 1px solid ${r.gray[400]};
        color: ${c.light["fg-neutral-strong"]};
      `}

  &:disabled {
    cursor: not-allowed;
  }
`;n.displayName="Checkbox";n.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'checked' | 'unchecked'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'unchecked'"}]},description:"",defaultValue:{value:"'unchecked'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const O=({variant:a="secondary",state:s="unchecked",disabled:t=!1,onChange:l,...m})=>{const[u,f]=V.useState(s),h=i=>{f(i?"checked":"unchecked"),l==null||l(i)};return e.jsx(n,{variant:a,state:u,disabled:t,onChange:h,...m})},X={title:"Components/Checkbox",component:n,parameters:{layout:"centered",docs:{description:{component:"Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary와 Secondary 변형을 지원하며, checked와 unchecked 상태를 가집니다."}}},argTypes:{variant:{control:"select",options:["primary","secondary"],description:"체크박스의 변형을 선택합니다."},state:{control:"select",options:["checked","unchecked"],description:"체크박스의 상태를 선택합니다."},disabled:{control:"boolean",description:"체크박스의 비활성화 여부를 설정합니다."},onChange:{action:"changed",description:"체크박스 상태가 변경될 때 호출되는 콜백 함수입니다."}}},o={args:{variant:"secondary",state:"unchecked",disabled:!1}},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Checked"}),e.jsx(n,{variant:"secondary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked"})]})]})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary"}),e.jsx(n,{variant:"primary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary"}),e.jsx(n,{variant:"secondary",state:"checked"})]})]})},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Normal States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Checked"}),e.jsx(n,{variant:"primary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Unchecked"}),e.jsx(n,{variant:"primary",state:"unchecked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Checked"}),e.jsx(n,{variant:"secondary",state:"checked"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"16px",fontWeight:"600"},children:"Disabled States"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Checked"}),e.jsx(n,{variant:"primary",state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Primary - Unchecked"}),e.jsx(n,{variant:"primary",state:"unchecked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Checked"}),e.jsx(n,{variant:"secondary",state:"checked",disabled:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Secondary - Unchecked"}),e.jsx(n,{variant:"secondary",state:"unchecked",disabled:!0})]})]})]})},y={render:a=>e.jsx(O,{...a}),args:{variant:"secondary",state:"unchecked",disabled:!1},argTypes:{state:{control:!1}}};var k,v,b;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    state: 'unchecked',
    disabled: false
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var S,j,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        <Checkbox variant='secondary' state='checked' />
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
        <Checkbox variant='secondary' state='unchecked' />
      </div>
    </div>
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var I,D,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      }}>Primary</span>
        <Checkbox variant='primary' state='checked' />
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
      }}>Secondary</span>
        <Checkbox variant='secondary' state='checked' />
      </div>
    </div>
}`,...(z=(D=p.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var $,P,U;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        }}>Primary - Checked</span>
          <Checkbox variant='primary' state='checked' />
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
        }}>Primary - Unchecked</span>
          <Checkbox variant='primary' state='unchecked' />
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
        }}>Secondary - Checked</span>
          <Checkbox variant='secondary' state='checked' />
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
        }}>Secondary - Unchecked</span>
          <Checkbox variant='secondary' state='unchecked' />
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
        }}>Primary - Checked</span>
          <Checkbox variant='primary' state='checked' disabled={true} />
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
        }}>Primary - Unchecked</span>
          <Checkbox variant='primary' state='unchecked' disabled={true} />
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
        }}>Secondary - Checked</span>
          <Checkbox variant='secondary' state='checked' disabled={true} />
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
        }}>Secondary - Unchecked</span>
          <Checkbox variant='secondary' state='unchecked' disabled={true} />
        </div>
      </div>
    </div>
}`,...(U=(P=x.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var T,w,A;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <CheckboxWithState {...args} />,
  args: {
    variant: 'secondary',
    state: 'unchecked',
    disabled: false
  },
  argTypes: {
    state: {
      control: false
    }
  }
}`,...(A=(w=y.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const Y=["Default","AllStates","AllVariants","AllCombinations","Interactive"];export{x as AllCombinations,d as AllStates,p as AllVariants,o as Default,y as Interactive,Y as __namedExportsOrder,X as default};
