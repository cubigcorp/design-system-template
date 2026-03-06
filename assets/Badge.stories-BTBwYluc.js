import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./iframe-CLsoOqCU.js";import{s as d,c as E}from"./styled-components.browser.esm-Cjeww7bt.js";import{b as o}from"./borderColor-CzkI5wcR.js";import{b as h}from"./brandColor-Bb8P60S1.js";import{c as e}from"./color-m2U5piog.js";import{f as M}from"./fontWeight-CRwBdwgF.js";import{n as j,p as k}from"./negativeColor-fk0-w6JK.js";import{r as w}from"./radius-DaoU83SK.js";import{t as s}from"./textColor-G8dwupNW.js";import"./preload-helper-eJNa_G2e.js";const g={light:{"fg-cautionary-primary":e.yellow[400],"fg-cautionary-strong":e.yellow[900],"bg-cautionary-primary-default":e.yellow[400],"bg-cautionary-primary-pressed":e.yellow[500]},dark:{"fg-cautionary-primary":e.yellow[400],"fg-cautionary-strong":e.yellow[50],"bg-cautionary-primary-default":e.yellow[400],"bg-cautionary-primary-pressed":e.yellow[300]}},B={light:{"fg-info-primary":e.blue[500],"fg-info-strong":e.blue[900],"bg-info-primary-assistive":e.blue[50],"bg-info-primary-default":e.blue[500],"bg-info-primary-pressed":e.blue[600]},dark:{"fg-info-primary":e.blue[500],"fg-info-strong":e.blue[50],"bg-info-primary-assistive":e.blue[900],"bg-info-primary-default":e.blue[500],"bg-info-primary-pressed":e.blue[400]}},P=E.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border-radius: ${({$radius:a})=>a==="large"?w["rounded-full"]:w["rounded-2"]};
  font-weight: ${M[500]};
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
  ${({variant:a="primary",type:n="outline"})=>{const l=(()=>{switch(n){case"solid":switch(a){case"primary":return{background:e.gray[100],text:s.light["fg-neutral-primary"],border:"transparent"};case"secondary":return{background:e.gray[100],text:s.light["fg-neutral-alternative"],border:"transparent"};case"brand":return{background:e.deeppurple[100],text:h.light["fg-brand-strong"],border:"transparent"};case"positive":return{background:e.green[50],text:k.light["fg-positive-primary"],border:"transparent"};case"negative":return{background:e.red[50],text:j.light["fg-negative-primary"],border:"transparent"};case"info":return{background:e.blue[50],text:B.light["fg-info-primary"],border:"transparent"};case"cautionary":return{background:e.yellow[50],text:g.light["fg-cautionary-primary"],border:"transparent"};default:return{background:e.gray[50],text:s.light["fg-neutral-primary"],border:"transparent"}}case"strong":switch(a){case"primary":return{background:e.gray[950],text:e.common[100],border:"transparent"};case"secondary":return{background:e.gray[800],text:e.common[100],border:"transparent"};case"brand":return{background:e.deeppurple[800],text:e.common[100],border:"transparent"};case"positive":return{background:e.green[600],text:e.common[100],border:"transparent"};case"negative":return{background:e.red[600],text:e.common[100],border:"transparent"};case"info":return{background:e.blue[600],text:e.common[100],border:"transparent"};case"cautionary":return{background:g.light["bg-cautionary-primary-default"],text:e.common[100],border:"transparent"};default:return{background:e.gray[950],text:e.common[100],border:"transparent"}}default:switch(a){case"primary":return{background:"transparent",text:s.light["fg-neutral-primary"],border:o.light["color-border-primary"]};case"secondary":return{background:"transparent",text:s.light["fg-neutral-alternative"],border:o.light["color-border-primary"]};case"brand":return{background:"transparent",text:h.light["fg-brand-strong"],border:o.light["color-border-brand"]};case"positive":return{background:"transparent",text:k.light["fg-positive-primary"],border:o.light["color-border-positive"]};case"negative":return{background:"transparent",text:j.light["fg-negative-primary"],border:e.red[500]};case"info":return{background:"transparent",text:B.light["fg-info-primary"],border:e.blue[500]};case"cautionary":return{background:"transparent",text:g.light["fg-cautionary-primary"],border:e.yellow[400]};default:return{background:"transparent",text:s.light["fg-neutral-primary"],border:o.light["color-border-primary"]}}}})();return d`
      background-color: ${l.background};
      color: ${l.text};
      border: 1px solid ${l.border};
    `}}
`,i=({variant:a="primary",type:n="outline",size:x="medium",radius:l="small",text:I,children:V,leadingIcon:b,trailingIcon:v,className:_})=>r.jsxs(P,{variant:a,type:n,size:x,$radius:l,className:_,children:[b&&r.jsx("span",{className:"icon",children:b}),r.jsx("span",{children:V||I}),v&&r.jsx("span",{className:"icon",children:v})]});i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'brand'
| 'positive'
| 'negative'
| 'info'
| 'cautionary'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'brand'"},{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'info'"},{name:"literal",value:"'cautionary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'outline' | 'solid' | 'strong'",elements:[{name:"literal",value:"'outline'"},{name:"literal",value:"'solid'"},{name:"literal",value:"'strong'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Components/Data Display/Badge",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다. Outline, Solid, Strong 3가지 타입과 7가지 variant를 지원합니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},y=["primary","secondary","brand","positive","negative","info","cautionary"],f=["outline","solid","strong"],p={parameters:{layout:"centered"},render:a=>r.jsx(i,{...a,children:"텍스트"}),args:{variant:"primary",type:"outline",size:"medium"},argTypes:{variant:{control:"select",options:[...y]},type:{control:"select",options:[...f]},size:{control:"select",options:["small","medium","large"]}}},c={parameters:{controls:{disable:!0}},render:()=>r.jsxs("div",{style:t.page,children:[r.jsxs("div",{style:t.header,children:[r.jsx("h1",{style:t.title,children:"Badge"}),r.jsxs("p",{style:t.desc,children:["상태, 카테고리, 라벨 등을 표시하는 뱃지 컴포넌트입니다.",r.jsx("br",{}),"Outline, Solid, Strong 3가지 타입과 7가지 variant, 3가지 크기를 지원합니다."]})]}),f.map(a=>r.jsxs(A.Fragment,{children:[r.jsx("p",{style:t.sectionTitle,children:a}),r.jsx("div",{style:t.card,children:r.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:y.map(n=>r.jsx(i,{variant:n,type:a,children:n},n))})})]},a)),r.jsx("p",{style:t.sectionTitle,children:"Sizes"}),r.jsx("div",{style:t.card,children:r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["small","medium","large"].map(a=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx("span",{style:{...t.label,width:60},children:a}),r.jsx(i,{variant:"primary",type:"outline",size:a,children:"텍스트"}),r.jsx(i,{variant:"primary",type:"solid",size:a,children:"텍스트"}),r.jsx(i,{variant:"primary",type:"strong",size:a,children:"텍스트"})]},a))})})]})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["small","medium","large"].map(a=>r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[r.jsx("span",{style:{...t.label,width:60},children:a}),r.jsx(i,{variant:"primary",type:"outline",size:a,children:"Outline"}),r.jsx(i,{variant:"primary",type:"solid",size:a,children:"Solid"}),r.jsx(i,{variant:"primary",type:"strong",size:a,children:"Strong"})]},a))})},u={parameters:{layout:"centered",controls:{disable:!0}},render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:f.map(a=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[r.jsx("span",{style:t.label,children:a}),r.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:y.map(n=>r.jsx(i,{variant:n,type:a,children:n},n))})]},a))})};var S,z,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    }
  }
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var T,C,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(D=(C=c.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var N,q,O;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(q=m.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var W,$,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=($=u.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};const ae=["Playground","Overview","Sizes","AllVariants"];export{u as AllVariants,c as Overview,p as Playground,m as Sizes,ae as __namedExportsOrder,re as default};
