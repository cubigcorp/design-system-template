import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as T}from"./iframe-BQlxtUxC.js";import{S as i}from"./Selector-nRmM_yRL.js";import{c as k,a as F,b as R,d as B,S as E}from"./icon_table_outline_20-Cwsj7H5p.js";import"./preload-helper-eJNa_G2e.js";import"./index-C7tWk-mQ.js";import"./index-fJVWb4je.js";import"./styled-components.browser.esm-BsJdvhJY.js";import"./useMenuPlacement-BmjG0vEf.js";import"./Menu-CipjtV9l.js";import"./borderColor-DnXd17KV.js";import"./color-CZjzAmeO.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./Cell-BId1KcO9.js";import"./radius-DaoU83SK.js";import"./textColor-D-yqVS6r.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CIxJpf_z.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const t=l=>{const[z,W]=T.useState(l.value||"");return e.jsx("div",{style:{width:240},children:e.jsx(i,{...l,value:z,onChange:C=>W(C)})})},s=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"}],c=[{value:"choice",label:"객관식",leadingContent:k},{value:"ranking",label:"순위",leadingContent:F},{value:"rating",label:"점수 선택형",leadingContent:R},{value:"matrix",label:"표형",leadingContent:B},{value:"open",label:"주관식",leadingContent:E}],te={title:"Components/Inputs/Selector",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"드롭다운 셀렉터 컴포넌트입니다. 3가지 크기와 다양한 상태를 지원합니다."}}},args:{size:"medium",disabled:!1,placeholder:"선택해주세요.",options:s}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:l=>e.jsx(t,{...l}),argTypes:{size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},showSelectedIcon:{control:"boolean"}}},o={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:n.page,children:[e.jsxs("div",{style:n.header,children:[e.jsx("h1",{style:n.title,children:"Selector"}),e.jsxs("p",{style:n.desc,children:["드롭다운 셀렉터 컴포넌트입니다.",e.jsx("br",{}),"3가지 크기와 다양한 상태를 지원합니다."]})]}),e.jsx("p",{style:n.sectionTitle,children:"Sizes"}),e.jsx("div",{style:n.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:l}),e.jsx(t,{size:l,options:s})]},l))})}),e.jsx("p",{style:n.sectionTitle,children:"States"}),e.jsx("div",{style:n.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:80},children:"default"}),e.jsx(t,{options:s})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:80},children:"with value"}),e.jsx("div",{style:{width:240},children:e.jsx(i,{value:"option2",options:s})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:80},children:"disabled"}),e.jsx("div",{style:{width:240},children:e.jsx(i,{disabled:!0,options:s})})]})]})})]})},r={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["small","medium","large"].map(l=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...n.label,width:60},children:l}),e.jsx(t,{size:l,options:s})]},l))})},d={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:240},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"default"}),e.jsx(t,{options:s})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"with value"}),e.jsx(i,{value:"option3",options:s})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"disabled"}),e.jsx(i,{disabled:!0,options:s})]})]})},p={parameters:{layout:"centered",controls:{disable:!0},docs:{description:{story:"옵션에 `leadingContent`(아이콘)가 있을 때 `showSelectedIcon`을 켜면 선택된 값 표기에도 아이콘이 함께 나옵니다. 기본값은 false라 기존 사용에는 영향이 없습니다."}}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:240},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"off (기본)"}),e.jsx(t,{value:"rating",options:c})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:n.label,children:"on"}),e.jsx(t,{value:"rating",options:c,showSelectedIcon:!0})]}),["small","medium","large"].map(l=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsxs("span",{style:n.label,children:["on · ",l]}),e.jsx(t,{size:l,value:"choice",options:c,showSelectedIcon:!0})]},l))]})};var m,y,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SelectorWithState {...args} />,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    },
    showSelectedIcon: {
      control: 'boolean'
    }
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var u,v,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Selector</h1>
        <p style={s.desc}>
          드롭다운 셀렉터 컴포넌트입니다.
          <br />
          3가지 크기와 다양한 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{size}</span>
              <SelectorWithState size={size} options={sampleOptions} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 80
          }}>default</span>
            <SelectorWithState options={sampleOptions} />
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 80
          }}>with value</span>
            <div style={{
            width: 240
          }}>
              <Selector value='option2' options={sampleOptions} />
            </div>
          </div>
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
            <span style={{
            ...s.label,
            width: 80
          }}>disabled</span>
            <div style={{
            width: 240
          }}>
              <Selector disabled options={sampleOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var h,f,S;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        ...s.label,
        width: 60
      }}>{size}</span>
          <SelectorWithState size={size} options={sampleOptions} />
        </div>)}
    </div>
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var b,j,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 240
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>default</span>
        <SelectorWithState options={sampleOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>with value</span>
        <Selector value='option3' options={sampleOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>disabled</span>
        <Selector disabled options={sampleOptions} />
      </div>
    </div>
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var I,D,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: '옵션에 \`leadingContent\`(아이콘)가 있을 때 \`showSelectedIcon\`을 켜면 선택된 값 표기에도 아이콘이 함께 나옵니다. 기본값은 false라 기존 사용에는 영향이 없습니다.'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 240
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>off (기본)</span>
        <SelectorWithState value='rating' options={iconOptions} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
        <span style={s.label}>on</span>
        <SelectorWithState value='rating' options={iconOptions} showSelectedIcon />
      </div>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={s.label}>on · {size}</span>
          <SelectorWithState size={size} value='choice' options={iconOptions} showSelectedIcon />
        </div>)}
    </div>
}`,...(O=(D=p.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};const ie=["Playground","Overview","Sizes","States","WithSelectedIcon"];export{o as Overview,a as Playground,r as Sizes,d as States,p as WithSelectedIcon,ie as __namedExportsOrder,te as default};
