import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-CvA0Eg-6.js";import{I as r}from"./Input-Bsalt0Mt.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-CjbLCBIw.js";import"./IconCircleCheck-BBUUqRs3.js";import"./textColor-G8dwupNW.js";import"./color-m2U5piog.js";import"./negativeColor-fk0-w6JK.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./borderColor-CzkI5wcR.js";const d=s=>{const[l,n]=m.useState(s.value||""),[v,y]=m.useState(!1),[P,g]=m.useState(!1),C=i=>{var a;y(!0),g(!0),(a=s.onFocus)==null||a.call(s,i)},k=i=>{var a;y(!1),g(!1),(a=s.onBlur)==null||a.call(s,i)},W=i=>{var a;n(i.target.value),(a=s.onChange)==null||a.call(s,i)};return e.jsx(r,{...s,value:l,onChange:W,onFocus:C,onBlur:k,active:P,focused:v})},Q={title:"Components/Inputs/Input",component:r,parameters:{layout:"fullscreen",docs:{description:{component:"텍스트 입력을 위한 기본 Input 컴포넌트입니다. 3가지 size, 3가지 status, active/focused 상태를 지원합니다."}}},tags:["autodocs"]},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},grid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16},gridItem:{display:"flex",flexDirection:"column",gap:8},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},o={parameters:{layout:"centered"},render:s=>e.jsx(d,{...s}),args:{placeholder:"텍스트를 입력해 주세요.",size:"medium",status:"default"},argTypes:{size:{control:"select",options:["small","medium","large"]},status:{control:"select",options:["default","negative","positive"]},disabled:{control:"boolean"},active:{control:"boolean"},focused:{control:"boolean"},value:{control:"text"},placeholder:{control:"text"}}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Input"}),e.jsxs("p",{style:t.desc,children:["3가지 사이즈와 상태(default, negative, positive)를 지원하는 텍스트 입력 컴포넌트입니다.",e.jsx("br",{}),"클릭하면 active/focused 상태가 자동 적용되며, cancel/check/error 아이콘이 상태에 따라 표시됩니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Sizes"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:t.grid,children:["small","medium","large"].map(s=>e.jsxs("div",{style:t.gridItem,children:[e.jsxs("span",{style:t.label,children:[s," (",s==="small"?"32px":s==="medium"?"40px":"48px",")"]}),e.jsx(d,{placeholder:"텍스트를 입력해 주세요.",size:s})]},s))})}),e.jsx("p",{style:t.sectionTitle,children:"Status"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:t.grid,children:[{status:"default",label:"default",value:""},{status:"negative",label:"negative",value:"올바르지 않은 입력"},{status:"positive",label:"positive",value:"올바른 입력"}].map(({status:s,label:l,value:n})=>e.jsxs("div",{style:t.gridItem,children:[e.jsx("span",{style:t.label,children:l}),e.jsx(d,{value:n,placeholder:"텍스트를 입력해 주세요.",status:s})]},l))})}),e.jsx("p",{style:t.sectionTitle,children:"Disabled"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{...t.grid,gridTemplateColumns:"repeat(2, 1fr)"},children:[e.jsxs("div",{style:t.gridItem,children:[e.jsx("span",{style:t.label,children:"empty"}),e.jsx(r,{placeholder:"텍스트를 입력해 주세요.",disabled:!0})]}),e.jsxs("div",{style:t.gridItem,children:[e.jsx("span",{style:t.label,children:"with value"}),e.jsx(r,{value:"비활성화된 입력",disabled:!0})]})]})})]})},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"States"}),e.jsxs("p",{style:t.desc,children:["status와 active/focused 조합에 따른 Input의 시각적 변화를 확인할 수 있습니다.",e.jsx("br",{}),"상태에 따라 border 색상, 아이콘(cancel, error, check)이 변경됩니다."]})]}),[{title:"Default",items:[{label:"idle",props:{status:"default",value:"Default idle"}},{label:"active",props:{status:"default",value:"Default active",active:!0}},{label:"focused",props:{status:"default",value:"Default focused",focused:!0}},{label:"active + focused",props:{status:"default",value:"Active + Focused",active:!0,focused:!0}},{label:"disabled",props:{status:"default",value:"Disabled",disabled:!0}}]},{title:"Negative",items:[{label:"idle",props:{status:"negative",value:"Negative idle"}},{label:"focused",props:{status:"negative",value:"Negative focused",focused:!0}},{label:"active + focused",props:{status:"negative",value:"Active + Focused",active:!0,focused:!0}}]},{title:"Positive",items:[{label:"active",props:{status:"positive",value:"Positive active",active:!0}},{label:"active + focused",props:{status:"positive",value:"Active + Focused",active:!0,focused:!0}},{label:"disabled",props:{status:"positive",value:"Positive disabled",disabled:!0}}]}].map(({title:s,items:l})=>e.jsxs("div",{children:[e.jsx("p",{style:t.sectionTitle,children:s}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(l.length,3)}, 1fr)`,gap:16},children:l.map(({label:n,props:v})=>e.jsxs("div",{style:t.gridItem,children:[e.jsx("span",{style:t.label,children:n}),e.jsx(r,{...v})]},n))})})]},s))]})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Password Input"}),e.jsxs("p",{style:t.desc,children:['type="password"로 설정하면 비밀번호 입력 모드가 됩니다.',e.jsx("br",{}),"값이 입력되면 visibility 토글 아이콘이 나타납니다."]})]}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{...t.grid,gridTemplateColumns:"repeat(2, 1fr)"},children:[e.jsxs("div",{style:t.gridItem,children:[e.jsx("span",{style:t.label,children:"empty"}),e.jsx(d,{type:"password",placeholder:"비밀번호를 입력해 주세요."})]}),e.jsxs("div",{style:t.gridItem,children:[e.jsx("span",{style:t.label,children:"with value"}),e.jsx(d,{type:"password",value:"mypassword123",placeholder:"비밀번호를 입력해 주세요."})]})]})})]})};var h,b,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <InputWithState {...args} />,
  args: {
    placeholder: '텍스트를 입력해 주세요.',
    size: 'medium',
    status: 'default'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    status: {
      control: 'select',
      options: ['default', 'negative', 'positive']
    },
    disabled: {
      control: 'boolean'
    },
    active: {
      control: 'boolean'
    },
    focused: {
      control: 'boolean'
    },
    value: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    }
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,j,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Input</h1>
        <p style={s.desc}>
          3가지 사이즈와 상태(default, negative, positive)를 지원하는 텍스트 입력 컴포넌트입니다.
          <br />
          클릭하면 active/focused 상태가 자동 적용되며, cancel/check/error 아이콘이 상태에 따라
          표시됩니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={s.grid}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={s.gridItem}>
              <span style={s.label}>
                {size} ({size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'})
              </span>
              <InputWithState placeholder='텍스트를 입력해 주세요.' size={size} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={s.grid}>
          {[{
          status: 'default' as const,
          label: 'default',
          value: ''
        }, {
          status: 'negative' as const,
          label: 'negative',
          value: '올바르지 않은 입력'
        }, {
          status: 'positive' as const,
          label: 'positive',
          value: '올바른 입력'
        }].map(({
          status,
          label,
          value
        }) => <div key={label} style={s.gridItem}>
              <span style={s.label}>{label}</span>
              <InputWithState value={value} placeholder='텍스트를 입력해 주세요.' status={status} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Disabled</p>
      <div style={s.card}>
        <div style={{
        ...s.grid,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <Input placeholder='텍스트를 입력해 주세요.' disabled />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <Input value='비활성화된 입력' disabled />
          </div>
        </div>
      </div>
    </div>
}`,...(I=(j=c.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var S,T,w;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>States</h1>
        <p style={s.desc}>
          status와 active/focused 조합에 따른 Input의 시각적 변화를 확인할 수 있습니다.
          <br />
          상태에 따라 border 색상, 아이콘(cancel, error, check)이 변경됩니다.
        </p>
      </div>

      {[{
      title: 'Default',
      items: [{
        label: 'idle',
        props: {
          status: 'default' as const,
          value: 'Default idle'
        }
      }, {
        label: 'active',
        props: {
          status: 'default' as const,
          value: 'Default active',
          active: true
        }
      }, {
        label: 'focused',
        props: {
          status: 'default' as const,
          value: 'Default focused',
          focused: true
        }
      }, {
        label: 'active + focused',
        props: {
          status: 'default' as const,
          value: 'Active + Focused',
          active: true,
          focused: true
        }
      }, {
        label: 'disabled',
        props: {
          status: 'default' as const,
          value: 'Disabled',
          disabled: true
        }
      }]
    }, {
      title: 'Negative',
      items: [{
        label: 'idle',
        props: {
          status: 'negative' as const,
          value: 'Negative idle'
        }
      }, {
        label: 'focused',
        props: {
          status: 'negative' as const,
          value: 'Negative focused',
          focused: true
        }
      }, {
        label: 'active + focused',
        props: {
          status: 'negative' as const,
          value: 'Active + Focused',
          active: true,
          focused: true
        }
      }]
    }, {
      title: 'Positive',
      items: [{
        label: 'active',
        props: {
          status: 'positive' as const,
          value: 'Positive active',
          active: true
        }
      }, {
        label: 'active + focused',
        props: {
          status: 'positive' as const,
          value: 'Active + Focused',
          active: true,
          focused: true
        }
      }, {
        label: 'disabled',
        props: {
          status: 'positive' as const,
          value: 'Positive disabled',
          disabled: true
        }
      }]
    }].map(({
      title,
      items
    }) => <div key={title}>
          <p style={s.sectionTitle}>{title}</p>
          <div style={s.card}>
            <div style={{
          display: 'grid',
          gridTemplateColumns: \`repeat(\${Math.min(items.length, 3)}, 1fr)\`,
          gap: 16
        }}>
              {items.map(({
            label,
            props
          }) => <div key={label} style={s.gridItem}>
                  <span style={s.label}>{label}</span>
                  <Input {...props} />
                </div>)}
            </div>
          </div>
        </div>)}
    </div>
}`,...(w=(T=u.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,z,D;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Password Input</h1>
        <p style={s.desc}>
          type="password"로 설정하면 비밀번호 입력 모드가 됩니다.
          <br />
          값이 입력되면 visibility 토글 아이콘이 나타납니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={{
        ...s.grid,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <InputWithState type='password' placeholder='비밀번호를 입력해 주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <InputWithState type='password' value='mypassword123' placeholder='비밀번호를 입력해 주세요.' />
          </div>
        </div>
      </div>
    </div>
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const U=["Playground","Overview","StatesMatrix","Password"];export{c as Overview,p as Password,o as Playground,u as StatesMatrix,U as __namedExportsOrder,Q as default};
