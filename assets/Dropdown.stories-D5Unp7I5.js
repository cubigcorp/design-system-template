import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as L}from"./iframe-CvA0Eg-6.js";import{D as c}from"./Dropdown-Co8qy1Y_.js";import{A as m}from"./Avatar-CJpZr53q.js";import{S as q,a as B}from"./icon_search_outline_16-BjOhf5CO.js";import{S as F}from"./icon_document_outline_16-DLeQ4a9r.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-CjbLCBIw.js";import"./Label-CmpYqhX3.js";import"./textColor-G8dwupNW.js";import"./color-m2U5piog.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./spacing-tE1IiUFl.js";import"./ComboBox-Bj9aYZXL.js";import"./index-CLKNED9_.js";import"./index-BHEQGJof.js";import"./IconArrowUp-Cts_pkXJ.js";import"./Menu-BCjXGndd.js";import"./borderColor-CzkI5wcR.js";import"./shadow-DVq_1U2q.js";import"./Cell-CqQtYxfJ.js";import"./radius-DaoU83SK.js";import"./IconCheck-Cgh-IEDk.js";import"./MultiSelect-Ds90yW3a.js";import"./Chip-DdBZy_ci.js";import"./icon_close_outline_16-CoAenOwX.js";import"./Selector-1DG_Huim.js";import"./Description-DJ3KiBjR.js";import"./negativeColor-fk0-w6JK.js";import"./IconCircleCheck-BBUUqRs3.js";const i=t=>{const[n,z]=L.useState(t.type==="multiselect"?Array.isArray(t.value)?t.value:[]:t.value||"");return e.jsx(c,{...t,value:n,onChange:C=>z(C)})},s=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"}],y=Array.from({length:20},(t,n)=>({value:`option${n+1}`,label:`옵션 ${n+1}`})),v=[{value:"1",label:"John Doe",description:"john@example.com",leadingContent:()=>e.jsx(m,{type:"initial",size:"small",value:"JD"})},{value:"2",label:"Jane Smith",description:"jane@example.com",leadingContent:()=>e.jsx(m,{type:"initial",size:"small",value:"JS"})},{value:"3",label:"Bob Johnson",description:"bob@example.com",leadingContent:()=>e.jsx(m,{type:"initial",size:"small",value:"BJ"})}],A=[{value:"home",label:"홈",description:"메인 페이지로 이동",leadingContent:()=>e.jsx(q,{})},{value:"search",label:"검색",description:"검색 기능",leadingContent:()=>e.jsx(B,{})},{value:"docs",label:"문서",description:"문서 관리",leadingContent:()=>e.jsx(F,{})}],be={title:"Components/Inputs/Dropdown",component:c,parameters:{layout:"fullscreen",docs:{description:{component:"Selector, ComboBox, MultiSelect 3가지 타입을 지원하는 드롭다운 컴포넌트입니다."}}},tags:["autodocs"]},l={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},grid:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},gridItem:{display:"flex",flexDirection:"column",gap:8},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},o={parameters:{layout:"padded"},render:t=>e.jsx("div",{style:{width:300},children:e.jsx(i,{...t,description:t.description??(t.status==="negative"?"안내 텍스트를 입력해 주세요.":void 0)})}),args:{type:"selector",size:"medium",placeholder:"선택해주세요.",options:s,label:"라벨",description:"설명 텍스트입니다."},argTypes:{type:{control:"select",options:["selector","combobox","multiselect"]},size:{control:"select",options:["small","medium","large"]},status:{control:"select",options:["default","negative","positive"]},labelType:{control:"select",options:["default","required","optional"]},disabled:{control:"boolean"},descriptionLeadingIcon:{control:"boolean"}}},a={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Dropdown"}),e.jsxs("p",{style:l.desc,children:["Selector (선택만), ComboBox (검색+선택), MultiSelect (다중 선택) 3가지 타입을 지원합니다.",e.jsx("br",{}),"Label, Description, 상태(default, negative, positive)를 조합하여 사용합니다."]})]}),e.jsx("p",{style:l.sectionTitle,children:"Types"}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:l.grid,children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"selector"}),e.jsx(i,{type:"selector",label:"카테고리",placeholder:"선택해주세요.",options:s,description:"옵션을 선택할 수 있습니다."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"combobox"}),e.jsx(i,{type:"combobox",label:"검색",placeholder:"입력하거나 선택해주세요.",options:s,description:"텍스트를 입력하거나 선택할 수 있습니다."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"multiselect"}),e.jsx(i,{type:"multiselect",label:"태그",placeholder:"여러 항목을 선택해주세요.",options:s,value:[],description:"여러 옵션을 선택할 수 있습니다."})]})]})}),e.jsx("p",{style:l.sectionTitle,children:"Sizes"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:l.grid,children:["small","medium","large"].map(t=>e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:t}),e.jsx(i,{size:t,label:"라벨",placeholder:"선택해주세요.",options:s})]},t))})}),e.jsx("p",{style:l.sectionTitle,children:"Status"}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:l.grid,children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"default"}),e.jsx(i,{label:"라벨",placeholder:"선택해주세요.",options:s,description:"안내 텍스트입니다."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"negative"}),e.jsx(i,{label:"라벨",labelType:"required",placeholder:"선택해주세요.",options:s,status:"negative",description:"선택이 필요합니다.",descriptionLeadingIcon:!0})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"positive"}),e.jsx(i,{label:"라벨",value:"option2",options:s,status:"positive",description:"선택이 완료되었습니다.",descriptionLeadingIcon:!0})]})]})}),e.jsx("p",{style:l.sectionTitle,children:"Disabled"}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:{...l.grid,gridTemplateColumns:"repeat(2, 1fr)"},children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"empty"}),e.jsx(c,{label:"라벨",placeholder:"선택해주세요.",options:s,disabled:!0,description:"비활성화된 상태입니다."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"with value"}),e.jsx(c,{label:"라벨",value:"option2",options:s,disabled:!0,description:"비활성화된 상태입니다."})]})]})})]})},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Rich Options"}),e.jsx("p",{style:l.desc,children:"옵션에 Avatar, Icon, Description을 포함하여 풍부한 정보를 표현할 수 있습니다."})]}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:l.grid,children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"avatar + description"}),e.jsx(i,{type:"selector",label:"멤버 선택",placeholder:"멤버를 선택하세요",options:v})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"icon + description"}),e.jsx(i,{type:"combobox",label:"메뉴 검색",placeholder:"검색하거나 선택하세요",options:A})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:"multiselect + avatar"}),e.jsx(i,{type:"multiselect",label:"멤버 다중 선택",placeholder:"멤버를 선택하세요",options:v,value:[],lineMode:"multi"})]})]})})]})},d={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"MultiSelect Line Modes"}),e.jsx("p",{style:l.desc,children:"single 모드는 한 줄 고정 + 가로 스크롤, multi 모드는 최대 3줄 + 세로 스크롤입니다."})]}),e.jsx("div",{style:l.card,children:e.jsxs("div",{style:{...l.grid,gridTemplateColumns:"repeat(2, 1fr)"},children:[e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:'lineMode="single"'}),e.jsx(i,{type:"multiselect",label:"Single Line",placeholder:"옵션 선택",options:y,value:["option1","option2","option3","option4","option5","option6"],lineMode:"single",description:"한 줄로만 표시되고, 가로 스크롤이 생깁니다."})]}),e.jsxs("div",{style:l.gridItem,children:[e.jsx("span",{style:l.label,children:'lineMode="multi"'}),e.jsx(i,{type:"multiselect",label:"Multi Line",placeholder:"옵션 선택",options:y,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10"],lineMode:"multi",description:"최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다."})]})]})}),e.jsx("p",{style:l.sectionTitle,children:"Chip Sizes by Dropdown Size"}),e.jsx("div",{style:l.card,children:e.jsx("div",{style:l.grid,children:["small","medium","large"].map(t=>e.jsxs("div",{style:l.gridItem,children:[e.jsxs("span",{style:l.label,children:[t," (",t==="large"?"small chip":"x-small chip",")"]}),e.jsx(i,{type:"multiselect",size:t,label:`${t} 사이즈`,placeholder:"옵션 선택",options:s,value:["option1","option2"]})]},t))})})]})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:l.page,children:[e.jsxs("div",{style:l.header,children:[e.jsx("h1",{style:l.title,children:"Form Example"}),e.jsx("p",{style:l.desc,children:"실제 폼에서 사용되는 Dropdown 조합 예시입니다."})]}),e.jsx("div",{style:{...l.card,maxWidth:480},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsx(i,{type:"selector",label:"카테고리",labelType:"required",placeholder:"카테고리를 선택해주세요.",options:[{value:"design",label:"디자인"},{value:"dev",label:"개발"},{value:"marketing",label:"마케팅"},{value:"hr",label:"인사"}]}),e.jsx(i,{type:"combobox",label:"담당자",labelType:"required",placeholder:"이름을 검색하세요",options:v}),e.jsx(i,{type:"multiselect",label:"태그",labelType:"optional",placeholder:"태그를 선택해주세요.",options:[{value:"urgent",label:"긴급"},{value:"important",label:"중요"},{value:"review",label:"리뷰 필요"},{value:"bug",label:"버그"},{value:"feature",label:"기능"}],value:[]}),e.jsx(i,{type:"selector",label:"우선순위",placeholder:"우선순위를 선택해주세요.",options:s,status:"negative",description:"우선순위를 선택해 주세요.",descriptionLeadingIcon:!0})]})})]})};var u,b,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: args => <div style={{
    width: 300
  }}>
      <DropdownWithState {...args} description={args.description ?? (args.status === 'negative' ? '안내 텍스트를 입력해 주세요.' : undefined)} />
    </div>,
  args: {
    type: 'selector',
    size: 'medium',
    placeholder: '선택해주세요.',
    options: basicOptions,
    label: '라벨',
    description: '설명 텍스트입니다.'
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['selector', 'combobox', 'multiselect']
    },
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
    }
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,x,j;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Dropdown</h1>
        <p style={s.desc}>
          Selector (선택만), ComboBox (검색+선택), MultiSelect (다중 선택) 3가지 타입을 지원합니다.
          <br />
          Label, Description, 상태(default, negative, positive)를 조합하여 사용합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Types</p>
      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>selector</span>
            <DropdownWithState type='selector' label='카테고리' placeholder='선택해주세요.' options={basicOptions} description='옵션을 선택할 수 있습니다.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>combobox</span>
            <DropdownWithState type='combobox' label='검색' placeholder='입력하거나 선택해주세요.' options={basicOptions} description='텍스트를 입력하거나 선택할 수 있습니다.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>multiselect</span>
            <DropdownWithState type='multiselect' label='태그' placeholder='여러 항목을 선택해주세요.' options={basicOptions} value={[]} description='여러 옵션을 선택할 수 있습니다.' />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={s.grid}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={s.gridItem}>
              <span style={s.label}>{size}</span>
              <DropdownWithState size={size} label='라벨' placeholder='선택해주세요.' options={basicOptions} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Status</p>
      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>default</span>
            <DropdownWithState label='라벨' placeholder='선택해주세요.' options={basicOptions} description='안내 텍스트입니다.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>negative</span>
            <DropdownWithState label='라벨' labelType='required' placeholder='선택해주세요.' options={basicOptions} status='negative' description='선택이 필요합니다.' descriptionLeadingIcon />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>positive</span>
            <DropdownWithState label='라벨' value='option2' options={basicOptions} status='positive' description='선택이 완료되었습니다.' descriptionLeadingIcon />
          </div>
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
            <Dropdown label='라벨' placeholder='선택해주세요.' options={basicOptions} disabled description='비활성화된 상태입니다.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>with value</span>
            <Dropdown label='라벨' value='option2' options={basicOptions} disabled description='비활성화된 상태입니다.' />
          </div>
        </div>
      </div>
    </div>
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var S,I,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Rich Options</h1>
        <p style={s.desc}>
          옵션에 Avatar, Icon, Description을 포함하여 풍부한 정보를 표현할 수 있습니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.grid}>
          <div style={s.gridItem}>
            <span style={s.label}>avatar + description</span>
            <DropdownWithState type='selector' label='멤버 선택' placeholder='멤버를 선택하세요' options={memberOptions} />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>icon + description</span>
            <DropdownWithState type='combobox' label='메뉴 검색' placeholder='검색하거나 선택하세요' options={iconOptions} />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>multiselect + avatar</span>
            <DropdownWithState type='multiselect' label='멤버 다중 선택' placeholder='멤버를 선택하세요' options={memberOptions} value={[]} lineMode='multi' />
          </div>
        </div>
      </div>
    </div>
}`,...(f=(I=r.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var D,w,O;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>MultiSelect Line Modes</h1>
        <p style={s.desc}>
          single 모드는 한 줄 고정 + 가로 스크롤, multi 모드는 최대 3줄 + 세로 스크롤입니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={{
        ...s.grid,
        gridTemplateColumns: 'repeat(2, 1fr)'
      }}>
          <div style={s.gridItem}>
            <span style={s.label}>lineMode="single"</span>
            <DropdownWithState type='multiselect' label='Single Line' placeholder='옵션 선택' options={manyOptions} value={['option1', 'option2', 'option3', 'option4', 'option5', 'option6']} lineMode='single' description='한 줄로만 표시되고, 가로 스크롤이 생깁니다.' />
          </div>
          <div style={s.gridItem}>
            <span style={s.label}>lineMode="multi"</span>
            <DropdownWithState type='multiselect' label='Multi Line' placeholder='옵션 선택' options={manyOptions} value={['option1', 'option2', 'option3', 'option4', 'option5', 'option6', 'option7', 'option8', 'option9', 'option10']} lineMode='multi' description='최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다.' />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Chip Sizes by Dropdown Size</p>
      <div style={s.card}>
        <div style={s.grid}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={s.gridItem}>
              <span style={s.label}>
                {size} ({size === 'large' ? 'small chip' : 'x-small chip'})
              </span>
              <DropdownWithState type='multiselect' size={size} label={\`\${size} 사이즈\`} placeholder='옵션 선택' options={basicOptions} value={['option1', 'option2']} />
            </div>)}
        </div>
      </div>
    </div>
}`,...(O=(w=d.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var T,M,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Form Example</h1>
        <p style={s.desc}>실제 폼에서 사용되는 Dropdown 조합 예시입니다.</p>
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
          <DropdownWithState type='selector' label='카테고리' labelType='required' placeholder='카테고리를 선택해주세요.' options={[{
          value: 'design',
          label: '디자인'
        }, {
          value: 'dev',
          label: '개발'
        }, {
          value: 'marketing',
          label: '마케팅'
        }, {
          value: 'hr',
          label: '인사'
        }]} />
          <DropdownWithState type='combobox' label='담당자' labelType='required' placeholder='이름을 검색하세요' options={memberOptions} />
          <DropdownWithState type='multiselect' label='태그' labelType='optional' placeholder='태그를 선택해주세요.' options={[{
          value: 'urgent',
          label: '긴급'
        }, {
          value: 'important',
          label: '중요'
        }, {
          value: 'review',
          label: '리뷰 필요'
        }, {
          value: 'bug',
          label: '버그'
        }, {
          value: 'feature',
          label: '기능'
        }]} value={[]} />
          <DropdownWithState type='selector' label='우선순위' placeholder='우선순위를 선택해주세요.' options={basicOptions} status='negative' description='우선순위를 선택해 주세요.' descriptionLeadingIcon />
        </div>
      </div>
    </div>
}`,...(W=(M=p.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const he=["Playground","Overview","RichOptions","MultiSelectModes","FormExample"];export{p as FormExample,d as MultiSelectModes,a as Overview,o as Playground,r as RichOptions,he as __namedExportsOrder,be as default};
