import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as q}from"./iframe-pNyzd6po.js";import{T as o}from"./TextField-BhO6-QZC.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-CdWSEUdl.js";import"./Label-DwCHqzlR.js";import"./textColor-G8dwupNW.js";import"./color-m2U5piog.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./Input-DUD8rG31.js";import"./IconCircleCheck-BBUUqRs3.js";import"./negativeColor-fk0-w6JK.js";import"./radius-DaoU83SK.js";import"./borderColor-CzkI5wcR.js";import"./Description-D9hxfD4n.js";const s=t=>{const[i,w]=q.useState(t.value||"");return e.jsx(o,{...t,value:i,onChange:W=>w(W.target.value)})},Q={title:"Components/Inputs/TextField",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"Label, Description을 포함한 완성형 텍스트 입력 컴포넌트입니다. Input 컴포넌트를 기반으로 합니다."}}},tags:["autodocs"]},l={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},grid:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:24},gridItem:{display:"flex",flexDirection:"column",gap:8},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:t=>e.jsx(s,{...t}),args:{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",size:"medium",status:"default",labelType:"default"},argTypes:{size:{control:"select",options:["small","medium","large"]},status:{control:"select",options:["default","negative","positive"]},labelType:{control:"select",options:["default","required","optional"]},disabled:{control:"boolean"},descriptionLeadingIcon:{control:"boolean"},type:{control:"select",options:["text","password"]}}},n={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"TextField"}),e.jsxs("p",{style:l.desc,children:["Label과 Description을 포함한 완성형 텍스트 필드입니다.",e.jsx("br",{}),"Label 타입(default, required, optional), 상태(default, negative, positive), 사이즈를 조합하여 사용합니다."]})]}),e.jsx("p",{style:l.sectionTitle,children:"Label Types"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:[{labelType:"default",label:"default"},{labelType:"required",label:"required"},{labelType:"optional",label:"optional"}].map(({labelType:t,label:i})=>e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:i}),e.jsx(s,{label:"주제",labelType:t,placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."})]},i))})}),e.jsx("p",{style:l.sectionTitle,children:"Status"}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"default"}),e.jsx(s,{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"negative"}),e.jsx(s,{label:"주제",labelType:"required",value:"올바르지 않은 입력",description:"올바르지 않은 입력입니다.",descriptionLeadingIcon:!0,status:"negative"})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"positive"}),e.jsx(s,{label:"주제",labelType:"required",value:"올바른 입력",description:"입력이 완료되었습니다.",descriptionLeadingIcon:!0,status:"positive"})]})]})}),e.jsx("p",{style:l.sectionTitle,children:"Sizes"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:["small","medium","large"].map(t=>e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:t}),e.jsx(s,{label:"주제",size:t,placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."})]},t))})})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Anatomy"}),e.jsxs("p",{style:l.desc,children:["TextField는 Label, Input, Description 3개 영역으로 구성됩니다.",e.jsx("br",{}),"각 영역은 선택적으로 사용할 수 있습니다."]})]}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:l.grid,children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"full (label + input + description)"}),e.jsx(s,{label:"주제",labelType:"required",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"without label"}),e.jsx(s,{placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"without description"}),e.jsx(s,{label:"주제",placeholder:"텍스트를 입력해 주세요."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"input only"}),e.jsx(s,{placeholder:"텍스트를 입력해 주세요."})]})]})}),e.jsx("p",{style:l.sectionTitle,children:"Disabled"}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:l.grid,children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"disabled (empty)"}),e.jsx(o,{label:"주제",placeholder:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해주세요.",disabled:!0})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"disabled (with value)"}),e.jsx(o,{label:"주제",value:"비활성화된 입력",description:"안내 텍스트를 입력해주세요.",disabled:!0})]})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Password Field"}),e.jsxs("p",{style:l.desc,children:['type="password"로 설정하면 비밀번호 입력 모드가 됩니다.',e.jsx("br",{}),"값이 입력되면 visibility 토글 아이콘이 나타납니다."]})]}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:l.grid,children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"empty"}),e.jsx(s,{label:"비밀번호",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"8자 이상 영문, 숫자, 특수문자를 포함해 주세요."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"with value"}),e.jsx(s,{label:"비밀번호",type:"password",value:"mypassword123",placeholder:"비밀번호를 입력해 주세요.",description:"비밀번호가 입력되었습니다."})]})]})})]})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Form Example"}),e.jsx("p",{style:l.desc,children:"실제 폼에서 사용되는 TextField 조합 예시입니다."})]}),e.jsx("div",{style:{...l.card,maxWidth:480},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(s,{label:"이름",labelType:"required",placeholder:"이름을 입력해 주세요."}),e.jsx(s,{label:"이메일",labelType:"required",placeholder:"example@email.com",value:"invalid-email",status:"negative",description:"올바른 이메일 형식을 입력해 주세요.",descriptionLeadingIcon:!0}),e.jsx(s,{label:"닉네임",labelType:"required",value:"designsystem",status:"positive",description:"사용 가능한 닉네임입니다.",descriptionLeadingIcon:!0}),e.jsx(s,{label:"비밀번호",labelType:"required",type:"password",placeholder:"비밀번호를 입력해 주세요.",description:"8자 이상 영문, 숫자, 특수문자를 포함해 주세요."}),e.jsx(s,{label:"메모",labelType:"optional",placeholder:"추가 메모를 입력해 주세요."})]})})]})};var c,y,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <TextFieldWithState {...args} />,
  args: {
    label: '주제',
    placeholder: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해주세요.',
    size: 'medium',
    status: 'default',
    labelType: 'default'
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
    labelType: {
      control: 'select',
      options: ['default', 'required', 'optional']
    },
    disabled: {
      control: 'boolean'
    },
    descriptionLeadingIcon: {
      control: 'boolean'
    },
    type: {
      control: 'select',
      options: ['text', 'password']
    }
  }
}`,...(m=(y=a.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var v,u,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>TextField</h1>
        <p style={s.desc}>
          Label과 Description을 포함한 완성형 텍스트 필드입니다.
          <br />
          Label 타입(default, required, optional), 상태(default, negative, positive), 사이즈를
          조합하여 사용합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Label Types</p>
      <div style={s.card}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }}>
          {[{
          labelType: 'default' as const,
          label: 'default'
        }, {
          labelType: 'required' as const,
          label: 'required'
        }, {
          labelType: 'optional' as const,
          label: 'optional'
        }].map(({
          labelType,
          label
        }) => <div key={label} style={s.gridItem}>
              <span style={s.label}>{label}</span>
              <TextFieldWithState label='주제' labelType={labelType} placeholder='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해주세요.' />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }}>
          <div style={s.gridItem}>
            <span style={s.label}>default</span>
            <TextFieldWithState label='주제' placeholder='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>negative</span>
            <TextFieldWithState label='주제' labelType='required' value='올바르지 않은 입력' description='올바르지 않은 입력입니다.' descriptionLeadingIcon status='negative' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>positive</span>
            <TextFieldWithState label='주제' labelType='required' value='올바른 입력' description='입력이 완료되었습니다.' descriptionLeadingIcon status='positive' />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={s.gridItem}>
              <span style={s.label}>{size}</span>
              <TextFieldWithState label='주제' size={size} placeholder='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해주세요.' />
            </div>)}
        </div>
      </div>
    </div>
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,g;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Anatomy</h1>
        <p style={s.desc}>
          TextField는 Label, Input, Description 3개 영역으로 구성됩니다.
          <br />각 영역은 선택적으로 사용할 수 있습니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>full (label + input + description)</span>
            <TextFieldWithState label='주제' labelType='required' placeholder='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>without label</span>
            <TextFieldWithState placeholder='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>without description</span>
            <TextFieldWithState label='주제' placeholder='텍스트를 입력해 주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>input only</span>
            <TextFieldWithState placeholder='텍스트를 입력해 주세요.' />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Disabled</p>
      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>disabled (empty)</span>
            <TextField label='주제' placeholder='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해주세요.' disabled />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>disabled (with value)</span>
            <TextField label='주제' value='비활성화된 입력' description='안내 텍스트를 입력해주세요.' disabled />
          </div>
        </div>
      </div>
    </div>
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,T,f;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Password Field</h1>
        <p style={s.desc}>
          type="password"로 설정하면 비밀번호 입력 모드가 됩니다.
          <br />
          값이 입력되면 visibility 토글 아이콘이 나타납니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>empty</span>
            <TextFieldWithState label='비밀번호' type='password' placeholder='비밀번호를 입력해 주세요.' description='8자 이상 영문, 숫자, 특수문자를 포함해 주세요.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <TextFieldWithState label='비밀번호' type='password' value='mypassword123' placeholder='비밀번호를 입력해 주세요.' description='비밀번호가 입력되었습니다.' />
          </div>
        </div>
      </div>
    </div>
}`,...(f=(T=r.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var I,F,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Form Example</h1>
        <p style={s.desc}>실제 폼에서 사용되는 TextField 조합 예시입니다.</p>
      </div>

      <div style={{
      ...s.card,
      maxWidth: 480
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <TextFieldWithState label='이름' labelType='required' placeholder='이름을 입력해 주세요.' />
          <TextFieldWithState label='이메일' labelType='required' placeholder='example@email.com' value='invalid-email' status='negative' description='올바른 이메일 형식을 입력해 주세요.' descriptionLeadingIcon />
          <TextFieldWithState label='닉네임' labelType='required' value='designsystem' status='positive' description='사용 가능한 닉네임입니다.' descriptionLeadingIcon />
          <TextFieldWithState label='비밀번호' labelType='required' type='password' placeholder='비밀번호를 입력해 주세요.' description='8자 이상 영문, 숫자, 특수문자를 포함해 주세요.' />
          <TextFieldWithState label='메모' labelType='optional' placeholder='추가 메모를 입력해 주세요.' />
        </div>
      </div>
    </div>
}`,...(S=(F=p.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const U=["Playground","Overview","Anatomy","PasswordField","FormExample"];export{d as Anatomy,p as FormExample,n as Overview,r as PasswordField,a as Playground,U as __namedExportsOrder,Q as default};
