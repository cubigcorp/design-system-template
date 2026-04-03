import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as i}from"./Menu-Dq77ntXa.js";import{C as t}from"./Cell-CEWcqocF.js";import{S as h,a as v}from"./icon_search_outline_16-0z724YR7.js";import{S as u}from"./icon_document_outline_16-Dj45hVKU.js";import"./iframe-pNyzd6po.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-CdWSEUdl.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./textColor-G8dwupNW.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const z={title:"Components/Navigation/Menu",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"Cell 컴포넌트로 구성된 메뉴 리스트입니다. active, disabled 상태와 아이콘, 설명을 지원합니다."}}},tags:["autodocs"]},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16}},s={parameters:{layout:"centered"},render:o=>e.jsxs(i,{...o,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C",disable:!0})]}),argTypes:{width:{control:"text"},showCheckIcon:{control:"boolean"}}},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Menu"}),e.jsxs("p",{style:n.desc,children:["Cell 컴포넌트로 구성된 메뉴 리스트입니다.",e.jsx("br",{}),"아이콘, 설명, active/disabled 상태, 체크 아이콘 표시를 지원합니다."]})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"Basic"}),e.jsx("div",{style:n.card,children:e.jsxs(i,{children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C",disable:!0})]})})]}),e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"With Icons"}),e.jsx("div",{style:n.card,children:e.jsxs(i,{children:[e.jsx(t,{text:"홈",leadingContent:()=>e.jsx(h,{})}),e.jsx(t,{text:"검색",leadingContent:()=>e.jsx(v,{}),active:!0}),e.jsx(t,{text:"문서",leadingContent:()=>e.jsx(u,{})})]})})]}),e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"With Descriptions"}),e.jsx("div",{style:n.card,children:e.jsxs(i,{children:[e.jsx(t,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),e.jsx(t,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),e.jsx(t,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})})]}),e.jsxs("div",{children:[e.jsx("p",{style:n.sectionTitle,children:"Without Check Icon"}),e.jsx("div",{style:n.card,children:e.jsxs(i,{showCheckIcon:!1,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]})})]})]}),e.jsx("p",{style:n.sectionTitle,children:"Scrollable (max-height: 200px)"}),e.jsx("div",{style:{...n.card,maxWidth:360},children:e.jsx(i,{style:{maxHeight:200,overflowY:"auto"},children:Array.from({length:15},(o,l)=>e.jsx(t,{text:`항목 ${l+1}`,active:l===2},l))})})]})};var a,d,c;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' disable />
    </Menu>,
  argTypes: {
    width: {
      control: 'text'
    },
    showCheckIcon: {
      control: 'boolean'
    }
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var x,p,m;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Menu</h1>
        <p style={s.desc}>
          Cell 컴포넌트로 구성된 메뉴 리스트입니다.
          <br />
          아이콘, 설명, active/disabled 상태, 체크 아이콘 표시를 지원합니다.
        </p>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 16
    }}>
        <div>
          <p style={s.sectionTitle}>Basic</p>
          <div style={s.card}>
            <Menu>
              <Cell text='선택 항목 A' />
              <Cell text='선택 항목 B' active />
              <Cell text='선택 항목 C' disable />
            </Menu>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Icons</p>
          <div style={s.card}>
            <Menu>
              <Cell text='홈' leadingContent={() => <IconHomeOutline16 />} />
              <Cell text='검색' leadingContent={() => <IconSearchOutline16 />} active />
              <Cell text='문서' leadingContent={() => <IconDocumentOutline16 />} />
            </Menu>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>With Descriptions</p>
          <div style={s.card}>
            <Menu>
              <Cell text='기본 설정' description='일반적인 설정을 관리합니다' />
              <Cell text='고급 설정' description='고급 옵션을 관리합니다' active />
              <Cell text='시스템 설정' description='시스템 레벨 설정입니다' disable />
            </Menu>
          </div>
        </div>

        <div>
          <p style={s.sectionTitle}>Without Check Icon</p>
          <div style={s.card}>
            <Menu showCheckIcon={false}>
              <Cell text='선택 항목 A' />
              <Cell text='선택 항목 B' active />
              <Cell text='선택 항목 C' />
            </Menu>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Scrollable (max-height: 200px)</p>
      <div style={{
      ...s.card,
      maxWidth: 360
    }}>
        <Menu style={{
        maxHeight: 200,
        overflowY: 'auto'
      }}>
          {Array.from({
          length: 15
        }, (_, i) => <Cell key={i} text={\`항목 \${i + 1}\`} active={i === 2} />)}
        </Menu>
      </div>
    </div>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const E=["Playground","Overview"];export{r as Overview,s as Playground,E as __namedExportsOrder,z as default};
