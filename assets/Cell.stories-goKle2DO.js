import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./Cell-Dnv4eXea.js";import{S as f,a as C}from"./icon_search_outline_16-BU5dDT2s.js";import{A as i}from"./Avatar-DSo7I0GN.js";import"./styled-components.browser.esm-Cjeww7bt.js";import"./iframe-CLsoOqCU.js";import"./preload-helper-eJNa_G2e.js";import"./color-m2U5piog.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./textColor-G8dwupNW.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./borderColor-CzkI5wcR.js";const _={title:"Components/Data Display/Cell",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"리스트 항목을 구성하는 셀 컴포넌트입니다. 아이콘, 아바타, 설명 텍스트와 active/disabled 상태를 지원합니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16}},s={parameters:{layout:"centered"},render:D=>e.jsx("div",{style:{width:300},children:e.jsx(t,{...D})}),args:{text:"선택 항목",description:"",active:!1,disable:!1},argTypes:{text:{control:"text"},description:{control:"text"},active:{control:"boolean"},disable:{control:"boolean"}}},l={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Cell"}),e.jsxs("p",{style:n.desc,children:["리스트 항목을 구성하는 셀 컴포넌트입니다.",e.jsx("br",{}),"아이콘, 아바타, 설명 텍스트와 active/disabled 상태를 지원합니다."]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"States"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{text:"Default"}),e.jsx(t,{text:"Active",active:!0}),e.jsx(t,{text:"Disabled",disable:!0})]})})]}),e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"With Description"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),e.jsx(t,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),e.jsx(t,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})})]}),e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"With Icons"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{text:"홈",leadingContent:()=>e.jsx(f,{})}),e.jsx(t,{text:"검색",leadingContent:()=>e.jsx(C,{}),active:!0})]})})]}),e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"With Avatar"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{text:"John Doe",description:"john@example.com",leadingContent:()=>e.jsx(i,{type:"initial",size:"small",value:"JD"})}),e.jsx(t,{text:"Jane Smith",description:"Designer",leadingContent:()=>e.jsx(i,{type:"initial",size:"small",value:"JS"}),active:!0})]})})]})]})]})},a={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{width:300,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{text:"홈",description:"메인 페이지로 이동",leadingContent:()=>e.jsx(f,{})}),e.jsx(t,{text:"검색",description:"앱 검색",leadingContent:()=>e.jsx(C,{}),active:!0})]})},r={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{width:300,display:"flex",flexDirection:"column",gap:4},children:[e.jsx(t,{text:"John Doe",description:"john@example.com",leadingContent:()=>e.jsx(i,{type:"initial",size:"small",value:"JD"})}),e.jsx(t,{text:"Jane Smith",description:"Designer",leadingContent:()=>e.jsx(i,{type:"initial",size:"small",value:"JS"}),active:!0}),e.jsx(t,{text:"Bob Lee",description:"Developer",leadingContent:()=>e.jsx(i,{type:"initial",size:"small",value:"BL"}),disable:!0})]})};var o,d,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    width: 300
  }}>
      <Cell {...args} />
    </div>,
  args: {
    text: '선택 항목',
    description: '',
    active: false,
    disable: false
  },
  argTypes: {
    text: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    active: {
      control: 'boolean'
    },
    disable: {
      control: 'boolean'
    }
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,x,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Cell</h1>
        <p style={s.desc}>
          리스트 항목을 구성하는 셀 컴포넌트입니다.
          <br />
          아이콘, 아바타, 설명 텍스트와 active/disabled 상태를 지원합니다.
        </p>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }}>
        <div>
          <p style={s.sectionTitle}>States</p>
          <div style={s.card}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}>
              <Cell text='Default' />
              <Cell text='Active' active />
              <Cell text='Disabled' disable />
            </div>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Description</p>
          <div style={s.card}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}>
              <Cell text='기본 설정' description='일반적인 설정을 관리합니다' />
              <Cell text='고급 설정' description='고급 옵션을 관리합니다' active />
              <Cell text='시스템 설정' description='시스템 레벨 설정입니다' disable />
            </div>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Icons</p>
          <div style={s.card}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}>
              <Cell text='홈' leadingContent={() => <IconHomeOutline16 />} />
              <Cell text='검색' leadingContent={() => <IconSearchOutline16 />} active />
            </div>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Avatar</p>
          <div style={s.card}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4
          }}>
              <Cell text='John Doe' description='john@example.com' leadingContent={() => <Avatar type='initial' size='small' value='JD' />} />
              <Cell text='Jane Smith' description='Designer' leadingContent={() => <Avatar type='initial' size='small' value='JS' />} active />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(m=(x=l.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var v,y,u;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      <Cell text='홈' description='메인 페이지로 이동' leadingContent={() => <IconHomeOutline16 />} />
      <Cell text='검색' description='앱 검색' leadingContent={() => <IconSearchOutline16 />} active />
    </div>
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var g,h,j;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      <Cell text='John Doe' description='john@example.com' leadingContent={() => <Avatar type='initial' size='small' value='JD' />} />
      <Cell text='Jane Smith' description='Designer' leadingContent={() => <Avatar type='initial' size='small' value='JS' />} active />
      <Cell text='Bob Lee' description='Developer' leadingContent={() => <Avatar type='initial' size='small' value='BL' />} disable />
    </div>
}`,...(j=(h=r.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const k=["Playground","Overview","WithIcons","WithAvatar"];export{l as Overview,s as Playground,r as WithAvatar,a as WithIcons,k as __namedExportsOrder,_ as default};
