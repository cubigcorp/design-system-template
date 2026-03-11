import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as z}from"./iframe-6QM99Qn2.js";import{I as t}from"./IconButton-vbguOqMQ.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-CRgZ7Zfy.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./brandColor-Bb8P60S1.js";import"./negativeColor-fk0-w6JK.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./textColor-G8dwupNW.js";import"./types-BtG8iaxF.js";const l=n=>e.jsx("svg",{...n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("polyline",{points:"20,6 9,17 4,12"})}),S=n=>e.jsxs("svg",{...n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"3,6 5,6 21,6"}),e.jsx("path",{d:"m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"}),e.jsx("line",{x1:"10",y1:"11",x2:"10",y2:"17"}),e.jsx("line",{x1:"14",y1:"11",x2:"14",y2:"17"})]}),B=n=>e.jsx("svg",{...n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"})}),D=n=>e.jsxs("svg",{...n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),c=["primary","secondary","brand","positive","negative"],k={primary:l,secondary:D,brand:B,positive:l,negative:S},E={title:"Components/Inputs/IconButton",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"아이콘 전용 버튼 컴포넌트입니다. Solid와 Outline 두 가지 타입, 5가지 variant, 3가지 크기를 지원합니다."}}}},s={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={parameters:{layout:"centered"},render:n=>e.jsx(t,{...n}),args:{type:"solid",variant:"primary",size:"medium",icon:l},argTypes:{type:{control:"select",options:["solid","outline"]},variant:{control:"select",options:[...c]},size:{control:"select",options:["small","medium","large"]},disabled:{control:"boolean"},loading:{control:"boolean"}}},r={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:s.page,children:[e.jsxs("div",{style:s.header,children:[e.jsx("h1",{style:s.title,children:"Icon Button"}),e.jsxs("p",{style:s.desc,children:["아이콘 전용 버튼 컴포넌트입니다.",e.jsx("br",{}),"Solid/Outline 타입, 5가지 variant, 3가지 크기를 지원합니다."]})]}),["solid","outline"].map(n=>e.jsxs(z.Fragment,{children:[e.jsx("p",{style:s.sectionTitle,children:n}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:c.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{type:n,variant:i,size:"medium",icon:k[i]}),e.jsx("span",{style:s.label,children:i})]},i))})})]},n)),e.jsx("p",{style:s.sectionTitle,children:"Sizes"}),e.jsx("div",{style:s.card,children:e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{type:"solid",variant:"primary",size:n,icon:l}),e.jsx("span",{style:s.label,children:n})]},n))})}),e.jsx("p",{style:s.sectionTitle,children:"Special States"}),e.jsx("div",{style:s.card,children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{type:"solid",variant:"primary",size:"medium",icon:l,disabled:!0}),e.jsx("span",{style:s.label,children:"disabled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{type:"solid",variant:"primary",size:"medium",icon:l,loading:!0}),e.jsx("span",{style:s.label,children:"loading"})]})]})})]})},o={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(t,{type:"solid",variant:"primary",size:n,icon:l}),e.jsx("span",{style:s.label,children:n})]},n))})},d={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["solid","outline"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:s.label,children:n}),e.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:c.map(i=>e.jsx(t,{type:n,variant:i,size:"medium",icon:k[i]},i))})]},n))})};var p,m,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <IconButton {...args} />,
  args: {
    type: 'solid',
    variant: 'primary',
    size: 'medium',
    icon: CheckIcon
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['solid', 'outline']
    },
    variant: {
      control: 'select',
      options: [...variants]
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    disabled: {
      control: 'boolean'
    },
    loading: {
      control: 'boolean'
    }
  }
}`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var x,u,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Icon Button</h1>
        <p style={s.desc}>
          아이콘 전용 버튼 컴포넌트입니다.
          <br />
          Solid/Outline 타입, 5가지 variant, 3가지 크기를 지원합니다.
        </p>
      </div>

      {(['solid', 'outline'] as const).map(type => <React.Fragment key={type}>
          <p style={s.sectionTitle}>{type}</p>
          <div style={s.card}>
            <div style={{
          display: 'flex',
          gap: 12,
          alignItems: 'center'
        }}>
              {variants.map(variant => <div key={variant} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
          }}>
                  <IconButton type={type} variant={variant} size='medium' icon={iconMap[variant]} />
                  <span style={s.label}>{variant}</span>
                </div>)}
            </div>
          </div>
        </React.Fragment>)}

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <IconButton type='solid' variant='primary' size={size} icon={CheckIcon} />
              <span style={s.label}>{size}</span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Special States</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'center'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <IconButton type='solid' variant='primary' size='medium' icon={CheckIcon} disabled />
            <span style={s.label}>disabled</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <IconButton type='solid' variant='primary' size='medium' icon={CheckIcon} loading />
            <span style={s.label}>loading</span>
          </div>
        </div>
      </div>
    </div>
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var v,f,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }}>
          <IconButton type='solid' variant='primary' size={size} icon={CheckIcon} />
          <span style={s.label}>{size}</span>
        </div>)}
    </div>
}`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var j,I,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      {(['solid', 'outline'] as const).map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={s.label}>{type}</span>
          <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }}>
            {variants.map(variant => <IconButton key={variant} type={type} variant={variant} size='medium' icon={iconMap[variant]} />)}
          </div>
        </div>)}
    </div>
}`,...(b=(I=d.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};const _=["Playground","Overview","Sizes","AllVariants"];export{d as AllVariants,r as Overview,a as Playground,o as Sizes,_ as __namedExportsOrder,E as default};
