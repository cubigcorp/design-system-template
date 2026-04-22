import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as U}from"./iframe-skmiukBS.js";import{c as s}from"./styled-components.browser.esm-1f8qeTbm.js";import{c as t}from"./color-m2U5piog.js";import{n as u,p as g}from"./negativeColor-fk0-w6JK.js";import{r as _}from"./radius-DaoU83SK.js";import{s as l}from"./spacing-tE1IiUFl.js";import{t as i}from"./textColor-G8dwupNW.js";import{t as q}from"./typography-CHdGJV44.js";import{S as B}from"./icon_chevron-right_outline_20-BKtW-N7b.js";import{S as x,a as E,b as L,c as M,d as P}from"./icon_warning_fill_16-B8PXijji.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const r=U.forwardRef(({variant:n="primary",size:y="medium",title:O,description:f,leadingIcon:v=!0,trailingIcon:V=!1,onTrailingIconClick:W,className:z,...R},A)=>{const N=()=>{if(!v)return null;switch(n){case"positive":return e.jsx(P,{});case"negative":return e.jsx(M,{});case"cautionary":return e.jsx(L,{});case"info":return e.jsx(x,{});case"brand":return e.jsx(E,{});default:return e.jsx(x,{})}};return e.jsxs(H,{ref:A,className:z,$variant:n,$size:y,...R,children:[v&&e.jsx(G,{$variant:n,$size:y,children:N()}),e.jsxs(J,{children:[e.jsx(K,{$variant:n,children:O}),f&&e.jsx(Q,{$variant:n,children:f})]}),V&&e.jsx(X,{onClick:W,$variant:n,children:e.jsx(B,{})})]})});r.displayName="Callout";const H=s.div`
  display: flex;
  align-items: flex-start;
  gap: ${l.gap["gap-2"]};
  padding: ${({$size:n})=>n==="small"?`${l.gap["gap-2.5"]} ${l.gap["gap-3"]}`:`${l.gap["gap-3.5"]} ${l.gap["gap-3"]}`};
  border-radius: ${_["rounded-2"]};
  min-width: 240px;
  width: 100%;
  background-color: ${({$variant:n})=>{switch(n){case"primary":return t.gray[50];case"secondary":return t.gray[50];case"positive":return t.green[50];case"negative":return t.red[50];case"cautionary":return t.orange[50];case"info":return t.blue[50];case"brand":return t.deeppurple[50];default:return t.gray[50]}}};
`,G=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding-top: ${l.gap["gap-0.5"]};
  color: ${({$variant:n})=>{switch(n){case"primary":return i.light["fg-neutral-strong"];case"secondary":return i.light["fg-neutral-alternative"];case"positive":return g.light["fg-positive-primary"];case"negative":return u.light["fg-negative-primary"];case"cautionary":return t.orange[500];case"info":return t.blue[500];case"brand":return t.deeppurple[500];default:return i.light["fg-neutral-strong"]}}};

  svg {
    width: 16px;
    height: 16px;
  }
`,J=s.div`
  display: flex;
  flex-direction: column;
  gap: ${l.gap["gap-1"]};
  flex: 1;
`,K=s.div`
  ${q(void 0,"body2","medium")}
  color: ${({$variant:n})=>{switch(n){case"primary":return i.light["fg-neutral-strong"];case"secondary":return i.light["fg-neutral-alternative"];case"positive":return g.light["fg-positive-primary"];case"negative":return u.light["fg-negative-primary"];case"cautionary":return t.orange[500];case"info":return t.blue[500];case"brand":return t.deeppurple[500];default:return i.light["fg-neutral-strong"]}}};
`,Q=s.div`
  ${q(void 0,"caption2","regular")}
  color: ${({$variant:n})=>{switch(n){case"primary":return i.light["fg-neutral-alternative"];case"secondary":return i.light["fg-neutral-alternative"];case"positive":return i.light["fg-neutral-alternative"];case"negative":return i.light["fg-neutral-alternative"];case"cautionary":return i.light["fg-neutral-alternative"];case"info":return i.light["fg-neutral-alternative"];case"brand":return i.light["fg-neutral-alternative"];default:return i.light["fg-neutral-alternative"]}}};
`,X=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  flex-shrink: 0;
  cursor: pointer;
  color: ${({$variant:n})=>{switch(n){case"primary":return i.light["fg-neutral-strong"];case"secondary":return i.light["fg-neutral-alternative"];case"positive":return g.light["fg-positive-primary"];case"negative":return u.light["fg-negative-primary"];case"cautionary":return t.orange[500];case"info":return t.blue[500];case"brand":return t.deeppurple[500];default:return i.light["fg-neutral-strong"]}}};

  svg {
    width: 20px;
    height: 20px;
  }
`;r.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'positive'
| 'negative'
| 'cautionary'
| 'info'
| 'brand'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'cautionary'"},{name:"literal",value:"'info'"},{name:"literal",value:"'brand'"}]},description:"Callout 변형",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Callout 크기",defaultValue:{value:"'medium'",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"제목 텍스트"},description:{required:!1,tsType:{name:"string"},description:"설명 텍스트"},leadingIcon:{required:!1,tsType:{name:"boolean"},description:"Leading Icon 표시 여부",defaultValue:{value:"true",computed:!1}},trailingIcon:{required:!1,tsType:{name:"boolean"},description:"Trailing Icon 표시 여부",defaultValue:{value:"false",computed:!1}},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Trailing Icon 클릭 이벤트"},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};const ge={title:"Components/Data Display/Callout",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"사용자에게 보조 메시지를 시각적으로 강조하여 제공하는 콜아웃 컴포넌트입니다. 7가지 variant를 지원합니다."}}}},a={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},m=["primary","secondary","positive","negative","cautionary","info","brand"],o={parameters:{layout:"centered"},args:{variant:"primary",title:"안내 제목",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0,trailingIcon:!1},argTypes:{variant:{control:"select",options:[...m]},title:{control:"text"},description:{control:"text"},leadingIcon:{control:"boolean"},trailingIcon:{control:"boolean"}}},c={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:a.page,children:[e.jsxs("div",{style:a.header,children:[e.jsx("h1",{style:a.title,children:"Callout"}),e.jsxs("p",{style:a.desc,children:["사용자에게 보조 메시지를 시각적으로 강조하여 제공합니다.",e.jsx("br",{}),"7가지 variant와 아이콘 옵션을 지원합니다."]})]}),e.jsx("p",{style:a.sectionTitle,children:"Variants"}),e.jsx("div",{style:a.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:m.map(n=>e.jsx(r,{variant:n,title:n.charAt(0).toUpperCase()+n.slice(1),description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0},n))})}),e.jsx("p",{style:a.sectionTitle,children:"Content Options"}),e.jsx("div",{style:a.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"title + description + icon"}),e.jsx(r,{variant:"primary",title:"안내 제목",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"title only"}),e.jsx(r,{variant:"primary",title:"안내 제목만 표시합니다.",leadingIcon:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"without icon"}),e.jsx(r,{variant:"primary",title:"안내 제목",description:"아이콘 없이 텍스트만 표시합니다.",leadingIcon:!1})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"with trailing icon"}),e.jsx(r,{variant:"primary",title:"안내 제목",description:"닫기 아이콘을 포함합니다.",leadingIcon:!0,trailingIcon:!0})]})]})})]})},d={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:480},children:m.map(n=>e.jsx(r,{variant:n,title:n.charAt(0).toUpperCase()+n.slice(1),description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0},n))})},p={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,width:480},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:a.label,children:"title + description + icon"}),e.jsx(r,{variant:"info",title:"안내 제목",description:"안내 텍스트를 입력해 주세요.",leadingIcon:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:a.label,children:"title only"}),e.jsx(r,{variant:"info",title:"안내 제목만 표시합니다.",leadingIcon:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:a.label,children:"without icon"}),e.jsx(r,{variant:"info",title:"안내 제목",description:"아이콘 없이 표시합니다.",leadingIcon:!1})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx("span",{style:a.label,children:"with trailing icon (닫기)"}),e.jsx(r,{variant:"info",title:"안내 제목",description:"닫기 아이콘을 포함합니다.",leadingIcon:!0,trailingIcon:!0})]})]})};var h,j,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    variant: 'primary',
    title: '안내 제목',
    description: '안내 텍스트를 입력해 주세요.',
    leadingIcon: true,
    trailingIcon: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...variants]
    },
    title: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    leadingIcon: {
      control: 'boolean'
    },
    trailingIcon: {
      control: 'boolean'
    }
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var I,C,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Callout</h1>
        <p style={s.desc}>
          사용자에게 보조 메시지를 시각적으로 강조하여 제공합니다.
          <br />
          7가지 variant와 아이콘 옵션을 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {variants.map(variant => <Callout key={variant} variant={variant} title={variant.charAt(0).toUpperCase() + variant.slice(1)} description='안내 텍스트를 입력해 주세요.' leadingIcon />)}
        </div>
      </div>

      <p style={s.sectionTitle}>Content Options</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>title + description + icon</span>
            <Callout variant='primary' title='안내 제목' description='안내 텍스트를 입력해 주세요.' leadingIcon />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>title only</span>
            <Callout variant='primary' title='안내 제목만 표시합니다.' leadingIcon />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>without icon</span>
            <Callout variant='primary' title='안내 제목' description='아이콘 없이 텍스트만 표시합니다.' leadingIcon={false} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>with trailing icon</span>
            <Callout variant='primary' title='안내 제목' description='닫기 아이콘을 포함합니다.' leadingIcon trailingIcon />
          </div>
        </div>
      </div>
    </div>
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var D,$,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 480
  }}>
      {variants.map(variant => <Callout key={variant} variant={variant} title={variant.charAt(0).toUpperCase() + variant.slice(1)} description='안내 텍스트를 입력해 주세요.' leadingIcon />)}
    </div>
}`,...(S=($=d.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var T,k,F;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    width: 480
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <span style={s.label}>title + description + icon</span>
        <Callout variant='info' title='안내 제목' description='안내 텍스트를 입력해 주세요.' leadingIcon />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <span style={s.label}>title only</span>
        <Callout variant='info' title='안내 제목만 표시합니다.' leadingIcon />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <span style={s.label}>without icon</span>
        <Callout variant='info' title='안내 제목' description='아이콘 없이 표시합니다.' leadingIcon={false} />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
        <span style={s.label}>with trailing icon (닫기)</span>
        <Callout variant='info' title='안내 제목' description='닫기 아이콘을 포함합니다.' leadingIcon trailingIcon />
      </div>
    </div>
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};const me=["Playground","Overview","Variants","ContentOptions"];export{p as ContentOptions,c as Overview,o as Playground,d as Variants,me as __namedExportsOrder,ge as default};
