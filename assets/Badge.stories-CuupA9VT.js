import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as _}from"./iframe-6QM99Qn2.js";import{s as d,c as A}from"./styled-components.browser.esm-CRgZ7Zfy.js";import{b as o}from"./borderColor-CzkI5wcR.js";import{c as e}from"./color-m2U5piog.js";import{f as E}from"./fontWeight-CRwBdwgF.js";import{n as h,p as j}from"./negativeColor-fk0-w6JK.js";import{r as w}from"./radius-DaoU83SK.js";import{t as l}from"./textColor-G8dwupNW.js";import"./preload-helper-eJNa_G2e.js";const g={light:{"fg-cautionary-primary":e.yellow[400],"fg-cautionary-strong":e.yellow[900],"bg-cautionary-primary-default":e.yellow[400],"bg-cautionary-primary-pressed":e.yellow[500]},dark:{"fg-cautionary-primary":e.yellow[400],"fg-cautionary-strong":e.yellow[50],"bg-cautionary-primary-default":e.yellow[400],"bg-cautionary-primary-pressed":e.yellow[300]}},k={light:{"fg-info-primary":e.blue[500],"fg-info-strong":e.blue[900],"bg-info-primary-assistive":e.blue[50],"bg-info-primary-default":e.blue[500],"bg-info-primary-pressed":e.blue[600]},dark:{"fg-info-primary":e.blue[500],"fg-info-strong":e.blue[50],"bg-info-primary-assistive":e.blue[900],"bg-info-primary-default":e.blue[500],"bg-info-primary-pressed":e.blue[400]}},M=A.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${({$radius:a})=>a==="large"?w["rounded-full"]:w["rounded-2"]};
  font-weight: ${E[500]};
  white-space: nowrap;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;

      path {
        fill: currentColor;
      }
    }
  }

  // 크기 변형
  ${({size:a="medium"})=>{switch(a){case"small":return d`
          padding: 2px 6px;
          height: 20px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `;case"large":return d`
          padding: 4px 8px;
          height: 28px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
        `;default:return d`
          padding: 4px 6px;
          height: 24px;
          font-size: 12px; // Caption2-medium
          line-height: 16px;
        `}}}

  // 색상 변형
  ${({variant:a="primary",type:i="outline"})=>{const s=(()=>{switch(i){case"solid":switch(a){case"primary":return{background:e.gray[100],text:l.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:e.gray[100],text:l.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:e.deeppurple[100],text:e.deeppurple[700],border:"transparent"};case"positive":return{background:e.green[50],text:j.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:e.red[50],text:h.light["fg-negative-primary"],border:"transparent"};case"info":return{background:e.blue[50],text:k.light["fg-info-primary"],border:"transparent"};case"cautionary":return{background:e.yellow[50],text:g.light["fg-cautionary-primary"],border:"transparent"};default:return{background:e.gray[50],text:l.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(a){case"primary":return{background:e.gray[950],text:e.common[100],border:"transparent"};case"secondary":return{background:e.gray[800],text:e.common[100],border:"transparent"};case"brand":return{background:e.deeppurple[500],text:e.common[100],border:"transparent"};case"positive":return{background:e.green[600],text:e.common[100],border:"transparent"};case"negative":return{background:e.red[600],text:e.common[100],border:"transparent"};case"info":return{background:e.blue[600],text:e.common[100],border:"transparent"};case"cautionary":return{background:g.light["bg-cautionary-primary-default"],text:e.common[100],border:"transparent"};default:return{background:e.gray[950],text:e.common[100],border:"transparent"}}default:switch(a){case"primary":return{background:"transparent",text:l.light["fg-neutral-primary"],border:o.light["color-border-primary"]};case"secondary":return{background:"transparent",text:l.light["fg-neutral-alternative"],border:o.light["color-border-primary"]};case"brand":return{background:"transparent",text:e.deeppurple[600],border:e.deeppurple[300]};case"positive":return{background:"transparent",text:j.light["fg-positive-primary"],border:o.light["color-border-positive"]};case"negative":return{background:"transparent",text:h.light["fg-negative-primary"],border:o.light["color-border-negative"]};case"info":return{background:"transparent",text:k.light["fg-info-primary"],border:e.blue[500]};case"cautionary":return{background:"transparent",text:g.light["fg-cautionary-primary"],border:e.yellow[400]};default:return{background:"transparent",text:l.light["fg-neutral-primary"],border:o.light["color-border-primary"]}}}})();return d`
      background-color: ${s.background};
      color: ${s.text};
      border: 1px solid ${s.border};
    `}}
`,t=({variant:a="primary",type:i="outline",size:x="medium",radius:s="small",text:$,children:F,leadingIcon:v,trailingIcon:b,className:V})=>r.jsxs(M,{variant:a,type:i,size:x,$radius:s,className:V,children:[v&&r.jsx("span",{className:"icon",children:v}),r.jsx("span",{children:F||$}),b&&r.jsx("span",{className:"icon",children:b})]});t.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'brand'
| 'positive'
| 'negative'
| 'info'
| 'cautionary'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'info'"},{name:"literal",value:"'cautionary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'outline' | 'solid' | 'strong'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'strong'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Z={title:"Components/Data Display/Badge",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다. Outline, Solid, Strong 3가지 타입과 7가지 variant를 지원합니다."}}}},n={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},y=["primary","secondary","brand","positive","negative","info","cautionary"],f=["outline","solid","strong"],p={parameters:{layout:"centered"},render:a=>r.jsx(t,{...a,children:"텍스트"}),args:{variant:"primary",type:"outline",size:"medium"},argTypes:{variant:{control:"select",options:[...y]},type:{control:"select",options:[...f]},size:{control:"select",options:["small","medium","large"]},radius:{control:"select",options:["small","large"]}}},c={parameters:{controls:{disable:!0}},render:()=>r.jsxs("div",{style:n.page,children:[r.jsxs("div",{style:n.header,children:[r.jsx("h1",{style:n.title,children:"Badge"}),r.jsxs("p",{style:n.desc,children:["상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다.",r.jsx("br",{}),"Outline, Solid, Strong 3가지 타입과 7가지 variant, 3가지 크기를 지원합니다."]})]}),f.map(a=>r.jsxs(_.Fragment,{children:[r.jsx("p",{style:n.sectionTitle,children:a}),r.jsx("div",{style:n.card,children:r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:y.map(i=>r.jsx(t,{variant:i,type:a,children:i},i))})})]},a)),r.jsx("p",{style:n.sectionTitle,children:"Radius"}),r.jsx("div",{style:n.card,children:r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:["small","large"].map(a=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[r.jsx(t,{variant:"primary",type:"solid",radius:a,children:a}),r.jsx("span",{style:n.label,children:a==="small"?"rounded-2 (8px)":"rounded-full (9999px)"})]},a))})}),r.jsx("p",{style:n.sectionTitle,children:"Sizes"}),r.jsx("div",{style:n.card,children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["small","medium","large"].map(a=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx("span",{style:{...n.label,width:60},children:a}),r.jsx(t,{variant:"primary",type:"outline",size:a,children:"텍스트"}),r.jsx(t,{variant:"primary",type:"solid",size:a,children:"텍스트"}),r.jsx(t,{variant:"primary",type:"strong",size:a,children:"텍스트"})]},a))})})]})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(a=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx("span",{style:{...n.label,width:60},children:a}),r.jsx(t,{variant:"primary",type:"outline",size:a,children:"Outline"}),r.jsx(t,{variant:"primary",type:"solid",size:a,children:"Solid"}),r.jsx(t,{variant:"primary",type:"strong",size:a,children:"Strong"})]},a))})},u={parameters:{layout:"centered",controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:f.map(a=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx("span",{style:n.label,children:a}),r.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:y.map(i=>r.jsx(t,{variant:i,type:a,children:i},i))})]},a))})};var B,S,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: 'primary',
    type: 'outline',
    size: 'medium'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [...variants]
    },
    type: {
      control: 'select',
      options: [...types]
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    radius: {
      control: 'select',
      options: ['small', 'large']
    }
  }
}`,...(z=(S=p.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var R,T,C;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Badge</h1>
        <p style={s.desc}>
          상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다.
          <br />
          Outline, Solid, Strong 3가지 타입과 7가지 variant, 3가지 크기를 지원합니다.
        </p>
      </div>

      {types.map(type => <React.Fragment key={type}>
          <p style={s.sectionTitle}>{type}</p>
          <div style={s.card}>
            <div style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap'
        }}>
              {variants.map(variant => <Badge key={variant} variant={variant} type={type}>
                  {variant}
                </Badge>)}
            </div>
          </div>
        </React.Fragment>)}

      <p style={s.sectionTitle}>Radius</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
          {(['small', 'large'] as const).map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6
        }}>
              <Badge variant='primary' type='solid' radius={r}>
                {r}
              </Badge>
              <span style={s.label}>
                {r === 'small' ? 'rounded-2 (8px)' : 'rounded-full (9999px)'}
              </span>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{size}</span>
              <Badge variant='primary' type='outline' size={size}>
                텍스트
              </Badge>
              <Badge variant='primary' type='solid' size={size}>
                텍스트
              </Badge>
              <Badge variant='primary' type='strong' size={size}>
                텍스트
              </Badge>
            </div>)}
        </div>
      </div>
    </div>
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var D,I,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }}>
          <span style={{
        ...s.label,
        width: 60
      }}>{size}</span>
          <Badge variant='primary' type='outline' size={size}>
            Outline
          </Badge>
          <Badge variant='primary' type='solid' size={size}>
            Solid
          </Badge>
          <Badge variant='primary' type='strong' size={size}>
            Strong
          </Badge>
        </div>)}
    </div>
}`,...(N=(I=m.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var W,q,O;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {types.map(type => <div key={type} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }}>
          <span style={s.label}>{type}</span>
          <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
            {variants.map(variant => <Badge key={variant} variant={variant} type={type}>
                {variant}
              </Badge>)}
          </div>
        </div>)}
    </div>
}`,...(O=(q=u.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const ee=["Playground","Overview","Sizes","AllVariants"];export{u as AllVariants,c as Overview,p as Playground,m as Sizes,ee as __namedExportsOrder,Z as default};
