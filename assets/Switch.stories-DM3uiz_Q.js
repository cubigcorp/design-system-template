import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as f,R as N}from"./iframe-B_xlwamp.js";import{c as R}from"./styled-components.browser.esm-SETmF8Vw.js";import{r as q}from"./radius-DaoU83SK.js";import{s as i}from"./spacing-tE1IiUFl.js";import{c as o}from"./color-m2U5piog.js";import{t as P}from"./textColor-G8dwupNW.js";import"./preload-helper-eJNa_G2e.js";const c=({size:e="medium",disabled:a=!1,active:l=!1,activeColor:r,onChange:s,onClick:d,onFocus:F,onBlur:H,className:W="",style:D,lang:K,...L})=>{const[v,b]=f.useState(l);N.useEffect(()=>{b(l)},[l]);const C=A=>{if(!a){const x=!v;b(x),s==null||s(x),d==null||d(A)}};return t.jsx(V,{$size:e,$disabled:a,$active:v,$activeColor:r,disabled:a,onClick:C,onFocus:F,onBlur:H,className:`switch ${W}`,style:D,...L,children:t.jsx(_,{$size:e,$disabled:a,$active:v})})},V=R.button`
  position: relative;
  border: none;
  outline: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  border-radius: ${q["rounded-full"]};

  ${({$size:e})=>{switch(e){case"small":return`
          width: ${32+parseInt(i.gap["gap-0.5"])*2}px;
          height: ${16+parseInt(i.gap["gap-0.5"])*2}px;
        `;case"large":return`
          width: ${48+parseInt(i.gap["gap-1"])*2}px;
          height: ${24+parseInt(i.gap["gap-1"])*2}px;
        `;default:return`
          width: ${40+parseInt(i.gap["gap-0.5"])*2}px;
          height: ${20+parseInt(i.gap["gap-0.5"])*2}px;
        `}}}

  ${({$active:e,$disabled:a,$activeColor:l})=>a&&e?`
        background-color: ${o.gray[900]};
      `:a&&!e?`
        background-color: ${o.gray[300]};
      `:e&&!a?`
        background-color: ${l||o.gray[950]};
      `:`
      background-color: ${o.gray[100]};
    `}

  &:focus-visible {
    box-shadow: 0 0 0 2px ${o.gray[300]};
  }
`,_=R.div`
  position: absolute;
  border-radius: ${q["rounded-full"]};
  transition: all 0.2s ease-in-out;

  ${({$size:e})=>{const a=parseInt(e==="large"?i.gap["gap-1"]:i.gap["gap-0.5"]);switch(e){case"small":return`
          width: 16px;
          height: 16px;
          top: ${a}px;
          left: ${a}px;
        `;case"large":return`
          width: 24px;
          height: 24px;
          top: ${a}px;
          left: ${a}px;
        `;default:return`
          width: 20px;
          height: 20px;
          top: ${a}px;
          left: ${a}px;
        `}}}

  ${({$active:e,$disabled:a})=>a&&e?`
        background-color: ${P.light["fg-neutral-alternative"]};
      `:a&&!e?`
        background-color: ${o.gray[50]};
      `:`
      background-color: ${o.common[100]};
    `}

  ${({$active:e,$size:a})=>{const l=a==="small"?16:a==="large"?24:20,r=parseInt(a==="large"?i.gap["gap-1"]:i.gap["gap-0.5"]),d=l*2+r*2-l-r*2;return`
      transform: translateX(${e?d:0}px);
    `}}
`;c.displayName="Switch";c.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},activeColor:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(active: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};const y=e=>{const[a,l]=f.useState(e.active||!1);return t.jsx(c,{...e,active:a,onChange:r=>l(r)})},te={title:"Components/Inputs/Switch",component:c,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"토글 스위치 컴포넌트입니다. 3가지 크기와 active/disabled 상태를 지원합니다."}}},args:{size:"medium",disabled:!1,active:!1}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},p={parameters:{layout:"centered"},render:e=>t.jsx(y,{...e}),argTypes:{size:{control:"select",options:["small","medium","large"]},active:{control:"boolean"},disabled:{control:"boolean"}}},u={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:n.page,children:[t.jsxs("div",{style:n.header,children:[t.jsx("h1",{style:n.title,children:"Switch"}),t.jsxs("p",{style:n.desc,children:["토글 스위치 컴포넌트입니다.",t.jsx("br",{}),"3가지 크기와 active/disabled 상태를 지원합니다."]})]}),t.jsx("p",{style:n.sectionTitle,children:"Sizes"}),t.jsx("div",{style:n.card,children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(e=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[t.jsx("span",{style:{...n.label,width:60},children:e}),t.jsx(y,{size:e})]},e))})}),t.jsx("p",{style:n.sectionTitle,children:"States"}),t.jsx("div",{style:n.card,children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[{active:!1,disabled:!1,label:"default"},{active:!0,disabled:!1,label:"active"},{active:!1,disabled:!0,label:"disabled"},{active:!0,disabled:!0,label:"active + disabled"}].map(e=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[t.jsx("span",{style:{...n.label,width:120},children:e.label}),t.jsx(c,{size:"medium",active:e.active,disabled:e.disabled})]},e.label))})}),t.jsx("p",{style:n.sectionTitle,children:"Example"}),t.jsx("div",{style:n.card,children:t.jsx(O,{})})]})},O=()=>{const[e,a]=f.useState({notifications:!0,darkMode:!1,autoSave:!0}),l=s=>a(d=>({...d,[s]:!d[s]})),r=[{key:"notifications",title:"알림",desc:"새로운 메시지와 업데이트를 받아보세요"},{key:"darkMode",title:"다크 모드",desc:"어두운 테마를 사용합니다"},{key:"autoSave",title:"자동 저장",desc:"변경사항을 자동으로 저장합니다"}];return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4},children:r.map(s=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[t.jsxs("div",{children:[t.jsx("div",{style:{fontSize:14,fontWeight:500,marginBottom:4},children:s.title}),t.jsx("div",{style:{fontSize:12,color:"#7b7e85"},children:s.desc})]}),t.jsx(c,{size:"medium",active:e[s.key],onChange:()=>l(s.key)})]},s.key))})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:["small","medium","large"].map(e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(y,{size:e}),t.jsx("span",{style:n.label,children:e})]},e))})},g={parameters:{layout:"centered",controls:{disable:!0}},render:()=>t.jsx("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[{active:!1,disabled:!1,label:"default"},{active:!0,disabled:!1,label:"active"},{active:!1,disabled:!0,label:"disabled"},{active:!0,disabled:!0,label:"active+disabled"}].map(e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(c,{size:"medium",active:e.active,disabled:e.disabled}),t.jsx("span",{style:n.label,children:e.label})]},e.label))})};var h,S,w;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <SwitchWithState {...args} />,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    active: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
}`,...(w=(S=p.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,T,$;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Switch</h1>
        <p style={s.desc}>
          토글 스위치 컴포넌트입니다.
          <br />
          3가지 크기와 active/disabled 상태를 지원합니다.
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
              <SwitchWithState size={size} />
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
          {[{
          active: false,
          disabled: false,
          label: 'default'
        }, {
          active: true,
          disabled: false,
          label: 'active'
        }, {
          active: false,
          disabled: true,
          label: 'disabled'
        }, {
          active: true,
          disabled: true,
          label: 'active + disabled'
        }].map(item => <div key={item.label} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={{
            ...s.label,
            width: 120
          }}>{item.label}</span>
              <Switch size='medium' active={item.active} disabled={item.disabled} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Example</p>
      <div style={s.card}>
        <SettingsExample />
      </div>
    </div>
}`,...($=(T=u.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var I,E,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <SwitchWithState size={size} />
          <span style={s.label}>{size}</span>
        </div>)}
    </div>
}`,...(z=(E=m.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var k,M,B;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      {[{
      active: false,
      disabled: false,
      label: 'default'
    }, {
      active: true,
      disabled: false,
      label: 'active'
    }, {
      active: false,
      disabled: true,
      label: 'disabled'
    }, {
      active: true,
      disabled: true,
      label: 'active+disabled'
    }].map(item => <div key={item.label} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <Switch size='medium' active={item.active} disabled={item.disabled} />
          <span style={s.label}>{item.label}</span>
        </div>)}
    </div>
}`,...(B=(M=g.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};const ae=["Playground","Overview","Sizes","States"];export{u as Overview,p as Playground,m as Sizes,g as States,ae as __namedExportsOrder,te as default};
