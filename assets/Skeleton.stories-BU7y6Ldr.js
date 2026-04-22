import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{s as q,c as E,p as M}from"./styled-components.browser.esm-1f8qeTbm.js";import"./iframe-skmiukBS.js";import"./preload-helper-eJNa_G2e.js";const h="rgba(230, 231, 233, 1)",W="rgba(230, 231, 233, 0.4)",F=M`
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
`,L=i=>{switch(i){case"rect":return{width:130,height:80};case"image":return{width:40,height:40};case"text":return{width:180,height:16}}},_=(i,s)=>{switch(i){case"rect":return"8px";case"image":return s==="large"?"9999px":"8px";case"text":return s==="large"?"9999px":"4px"}},n=({variant:i="rect",size:s="medium",width:a,height:l,className:m})=>{const r=L(i);return e.jsx(O,{$variant:i,$size:s,$width:a??r.width,$height:l??r.height,className:m})},O=E.div`
  ${({$variant:i,$size:s,$width:a,$height:l})=>{const m=typeof a=="number"?`${a}px`:a,r=typeof l=="number"?`${l}px`:l,V=_(i,s);return q`
      width: ${m};
      height: ${r};
      border-radius: ${V};
      background: linear-gradient(90deg, ${h} 25%, ${W} 50%, ${h} 75%);
      background-size: 200% 100%;
      animation: ${F} 0.9s linear infinite;
    `}}
`;n.__docgenInfo={description:"",methods:[],displayName:"Skeleton",props:{variant:{required:!1,tsType:{name:"union",raw:"'rect' | 'image' | 'text'",elements:[{name:"literal",value:"'rect'"},{name:"literal",value:"'image'"},{name:"literal",value:"'text'"}]},description:"스켈레톤 형태",defaultValue:{value:"'rect'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'medium' | 'large'",elements:[{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"라운드 크기 (image, text만 해당)",defaultValue:{value:"'medium'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"너비 (기본값: variant별 기본 크기)"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"높이 (기본값: variant별 기본 크기)"},className:{required:!1,tsType:{name:"string"},description:"애니메이션 진행률 (0: 시작, 33: 1/3, 66: 2/3) — 기본 자동 애니메이션"}}};const J={title:"Components/Feedback/Skeleton",component:n,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"데이터 로딩 중 콘텐츠 영역을 대체하는 스켈레톤 컴포넌트입니다. rect, image, text 3가지 variant와 medium, large 2가지 size를 지원합니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:16,padding:24,marginBottom:32,background:"#fff"},row:{display:"flex",gap:24,alignItems:"center",flexWrap:"wrap"},col:{display:"flex",flexDirection:"column",gap:8,alignItems:"center"},label:{fontSize:12,color:"#8f9298",fontWeight:500}},d={render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Skeleton"}),e.jsx("p",{style:t.desc,children:"데이터 로딩 중 콘텐츠 영역을 대체하는 스켈레톤 UI입니다. shimmer 애니메이션이 적용됩니다."})]}),e.jsx("h3",{style:t.sectionTitle,children:"Variants"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"rect (기본)"}),e.jsx(n,{variant:"rect"})]}),e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"image (medium)"}),e.jsx(n,{variant:"image",size:"medium"})]}),e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"image (large)"}),e.jsx(n,{variant:"image",size:"large"})]}),e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"text (medium)"}),e.jsx(n,{variant:"text",size:"medium"})]}),e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"text (large)"}),e.jsx(n,{variant:"text",size:"large"})]})]})}),e.jsx("h3",{style:t.sectionTitle,children:"Custom Sizes"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"rect 200x120"}),e.jsx(n,{variant:"rect",width:200,height:120})]}),e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"image 60x60 large (circle)"}),e.jsx(n,{variant:"image",size:"large",width:60,height:60})]}),e.jsxs("div",{style:t.col,children:[e.jsx("span",{style:t.label,children:"text 100% width"}),e.jsx(n,{variant:"text",width:"100%",height:16})]})]})}),e.jsx("h3",{style:t.sectionTitle,children:"Example: Card Skeleton"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"flex-start"},children:[e.jsx(n,{variant:"image",size:"large",width:48,height:48}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:12},children:[e.jsx(n,{variant:"text",width:"60%",height:20}),e.jsx(n,{variant:"text",width:"100%",height:14}),e.jsx(n,{variant:"text",width:"80%",height:14}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:8},children:[e.jsx(n,{variant:"rect",width:80,height:32}),e.jsx(n,{variant:"rect",width:80,height:32})]})]})]})}),e.jsx("h3",{style:t.sectionTitle,children:"Spec"}),e.jsx("div",{style:t.card,children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:14},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid #e6e7e9"},children:[e.jsx("th",{style:{textAlign:"left",padding:"8px 12px",color:"#8f9298"},children:"Variant"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px",color:"#8f9298"},children:"Default Size"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px",color:"#8f9298"},children:"Radius (medium)"}),e.jsx("th",{style:{textAlign:"left",padding:"8px 12px",color:"#8f9298"},children:"Radius (large)"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{style:{borderBottom:"1px solid #e6e7e9"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"rect"}),e.jsx("td",{style:{padding:"8px 12px"},children:"130 x 80"}),e.jsx("td",{style:{padding:"8px 12px"},children:"8px"}),e.jsx("td",{style:{padding:"8px 12px"},children:"8px"})]}),e.jsxs("tr",{style:{borderBottom:"1px solid #e6e7e9"},children:[e.jsx("td",{style:{padding:"8px 12px"},children:"image"}),e.jsx("td",{style:{padding:"8px 12px"},children:"40 x 40"}),e.jsx("td",{style:{padding:"8px 12px"},children:"8px"}),e.jsx("td",{style:{padding:"8px 12px"},children:"9999px (circle)"})]}),e.jsxs("tr",{children:[e.jsx("td",{style:{padding:"8px 12px"},children:"text"}),e.jsx("td",{style:{padding:"8px 12px"},children:"180 x 16"}),e.jsx("td",{style:{padding:"8px 12px"},children:"4px"}),e.jsx("td",{style:{padding:"8px 12px"},children:"9999px (pill)"})]})]})]})})]})},p={args:{variant:"rect",width:130,height:80}},o={args:{variant:"image",size:"medium"}},c={args:{variant:"image",size:"large"}},x={args:{variant:"text",size:"medium"}},g={args:{variant:"text",size:"large"}};var y,v,u;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Skeleton</h1>
        <p style={s.desc}>
          데이터 로딩 중 콘텐츠 영역을 대체하는 스켈레톤 UI입니다. shimmer 애니메이션이 적용됩니다.
        </p>
      </div>

      {/* Variants */}
      <h3 style={s.sectionTitle}>Variants</h3>
      <div style={s.card}>
        <div style={s.row}>
          <div style={s.col}>
            <span style={s.label}>rect (기본)</span>
            <Skeleton variant='rect' />
          </div>
          <div style={s.col}>
            <span style={s.label}>image (medium)</span>
            <Skeleton variant='image' size='medium' />
          </div>
          <div style={s.col}>
            <span style={s.label}>image (large)</span>
            <Skeleton variant='image' size='large' />
          </div>
          <div style={s.col}>
            <span style={s.label}>text (medium)</span>
            <Skeleton variant='text' size='medium' />
          </div>
          <div style={s.col}>
            <span style={s.label}>text (large)</span>
            <Skeleton variant='text' size='large' />
          </div>
        </div>
      </div>

      {/* Custom Sizes */}
      <h3 style={s.sectionTitle}>Custom Sizes</h3>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <div style={s.col}>
            <span style={s.label}>rect 200x120</span>
            <Skeleton variant='rect' width={200} height={120} />
          </div>
          <div style={s.col}>
            <span style={s.label}>image 60x60 large (circle)</span>
            <Skeleton variant='image' size='large' width={60} height={60} />
          </div>
          <div style={s.col}>
            <span style={s.label}>text 100% width</span>
            <Skeleton variant='text' width='100%' height={16} />
          </div>
        </div>
      </div>

      {/* Example: Card Skeleton */}
      <h3 style={s.sectionTitle}>Example: Card Skeleton</h3>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 16,
        alignItems: 'flex-start'
      }}>
          <Skeleton variant='image' size='large' width={48} height={48} />
          <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }}>
            <Skeleton variant='text' width='60%' height={20} />
            <Skeleton variant='text' width='100%' height={14} />
            <Skeleton variant='text' width='80%' height={14} />
            <div style={{
            display: 'flex',
            gap: 8,
            marginTop: 8
          }}>
              <Skeleton variant='rect' width={80} height={32} />
              <Skeleton variant='rect' width={80} height={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Spec Table */}
      <h3 style={s.sectionTitle}>Spec</h3>
      <div style={s.card}>
        <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: 14
      }}>
          <thead>
            <tr style={{
            borderBottom: '1px solid #e6e7e9'
          }}>
              <th style={{
              textAlign: 'left',
              padding: '8px 12px',
              color: '#8f9298'
            }}>Variant</th>
              <th style={{
              textAlign: 'left',
              padding: '8px 12px',
              color: '#8f9298'
            }}>
                Default Size
              </th>
              <th style={{
              textAlign: 'left',
              padding: '8px 12px',
              color: '#8f9298'
            }}>
                Radius (medium)
              </th>
              <th style={{
              textAlign: 'left',
              padding: '8px 12px',
              color: '#8f9298'
            }}>
                Radius (large)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr style={{
            borderBottom: '1px solid #e6e7e9'
          }}>
              <td style={{
              padding: '8px 12px'
            }}>rect</td>
              <td style={{
              padding: '8px 12px'
            }}>130 x 80</td>
              <td style={{
              padding: '8px 12px'
            }}>8px</td>
              <td style={{
              padding: '8px 12px'
            }}>8px</td>
            </tr>
            <tr style={{
            borderBottom: '1px solid #e6e7e9'
          }}>
              <td style={{
              padding: '8px 12px'
            }}>image</td>
              <td style={{
              padding: '8px 12px'
            }}>40 x 40</td>
              <td style={{
              padding: '8px 12px'
            }}>8px</td>
              <td style={{
              padding: '8px 12px'
            }}>9999px (circle)</td>
            </tr>
            <tr>
              <td style={{
              padding: '8px 12px'
            }}>text</td>
              <td style={{
              padding: '8px 12px'
            }}>180 x 16</td>
              <td style={{
              padding: '8px 12px'
            }}>4px</td>
              <td style={{
              padding: '8px 12px'
            }}>9999px (pill)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
}`,...(u=(v=d.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var f,j,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'rect',
    width: 130,
    height: 80
  }
}`,...(b=(j=p.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var S,w,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'image',
    size: 'medium'
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var k,T,I;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'image',
    size: 'large'
  }
}`,...(I=(T=c.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var C,$,B;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    size: 'medium'
  }
}`,...(B=($=x.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var R,A,D;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    size: 'large'
  }
}`,...(D=(A=g.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const K=["Overview","Rect","ImageMedium","ImageLarge","TextMedium","TextLarge"];export{c as ImageLarge,o as ImageMedium,d as Overview,p as Rect,g as TextLarge,x as TextMedium,K as __namedExportsOrder,J as default};
