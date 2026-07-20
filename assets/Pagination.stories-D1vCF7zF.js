import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as B,r as _}from"./iframe-Diu4OQ1h.js";import{c as f}from"./styled-components.browser.esm-DZloA45Z.js";import{s as P}from"./spacing-tE1IiUFl.js";import{t as $}from"./typography-CHdGJV44.js";import{I as y}from"./IconButton-CGqiIQIM.js";import{S,b as L,a as C}from"./icon_more_outline_16-CzI0YFOK.js";import{T as A}from"./TextButton-pF4mtMsO.js";import"./preload-helper-eJNa_G2e.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./borderColor-Bua6bgaN.js";import"./color-BUCiRq0z.js";import"./brandColor-C6bU0fYs.js";import"./negativeColor-PFzGnuZM.js";import"./radius-DaoU83SK.js";import"./textColor-mWadn7SX.js";import"./types-JZURDx2G.js";const v=B.forwardRef(({currentPage:n,totalPages:i,onPageChange:m,variant:d="compact",maxVisiblePages:s,className:k,...I},N)=>{const b=()=>{n>1&&m(n-1)},z=()=>{n<i&&m(n+1)},R=t=>{m(t)},q=()=>{if(!s||i<=s)return Array.from({length:i},(g,O)=>O+1);const t=[],r=s-2,l=Math.floor(r/2);let h=!1,j=!1,o=1,c=i;n<=l+2?(o=1,c=s-1,j=c<i-1):n>=i-l-1?(o=i-s+2,c=i,h=o>2):(o=n-l,c=n+l,h=o>2,j=c<i-1),h&&(t.push(1),t.push("..."));for(let g=o;g<=c;g++)t.push(g);return j&&(t.push("..."),t.push(i)),t},E=()=>{const t=q();return e.jsxs(e.Fragment,{children:[e.jsx(y,{type:"solid",variant:"secondary",size:"small",onClick:b,disabled:n===1,icon:S}),e.jsx(G,{children:t.map((r,l)=>r==="..."?e.jsx(K,{children:e.jsx(L,{})},`ellipsis-${l}`):e.jsx(A,{variant:"secondary",size:"small",onClick:()=>R(r),children:r},r))}),e.jsx(y,{type:"solid",variant:"secondary",size:"small",onClick:z,disabled:n===i,icon:C})]})},F=()=>e.jsxs(e.Fragment,{children:[e.jsx(y,{type:"solid",variant:"secondary",size:"small",onClick:b,disabled:n===1,icon:S}),e.jsxs(J,{children:[n,"/",i]}),e.jsx(y,{type:"solid",variant:"secondary",size:"small",onClick:z,disabled:n===i,icon:C})]});return e.jsx(H,{ref:N,className:k,$variant:d,...I,children:d==="compact"?E():F()})});v.displayName="Pagination";const H=f.div`
  display: inline-flex;
  align-items: center;
  gap: ${({$variant:n})=>n==="minimize"?P.gap["gap-3"]:P.gap["gap-5"]};
`,G=f.div`
  display: inline-flex;
  align-items: center;
  gap: ${P.gap["gap-0"]};
`,J=f.span`
  display: inline-flex;
  align-items: center;
  ${$(void 0,"body2","medium")}
`,K=f.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  width: 32px;
  height: 32px;
  svg {
    width: 16px;
    height: 16px;
  }
`;v.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"현재 페이지 (1부터 시작)"},totalPages:{required:!0,tsType:{name:"number"},description:"전체 페이지 수"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"페이지 변경 시 호출되는 함수"},variant:{required:!1,tsType:{name:"union",raw:"'compact' | 'minimize'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'minimize'"}]},description:`Pagination 변형
- compact: 전체 페이지 번호를 표시
- minimize: 현재 페이지/전체 페이지 형태로 표시`,defaultValue:{value:"'compact'",computed:!1}},maxVisiblePages:{required:!1,tsType:{name:"number"},description:`한 번에 표시할 최대 페이지 수 (compact variant에서만 사용)
예: maxVisiblePages={5}이고 현재 페이지가 50이면 "1 ... 48 49 50 51 52 ... 100"`},className:{required:!1,tsType:{name:"string"},description:"추가 className"}}};const p=n=>{const[i,m]=_.useState(n.currentPage||1);return e.jsx(v,{...n,currentPage:i,onPageChange:d=>{var s;m(d),(s=n.onPageChange)==null||s.call(n,d)}})},ye={title:"Components/Navigation/Pagination",component:v,parameters:{layout:"fullscreen",docs:{description:{component:"콘텐츠를 여러 페이지로 분할하여 이동할 수 있는 네비게이션 컴포넌트입니다. compact와 minimize 2가지 variant를 지원합니다."}}},tags:["autodocs"]},a={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},x={parameters:{layout:"centered"},render:n=>e.jsx(p,{...n}),args:{currentPage:1,totalPages:7,variant:"compact"},argTypes:{variant:{control:"select",options:["compact","minimize"]},totalPages:{control:{type:"number",min:1}},maxVisiblePages:{control:{type:"number",min:3}}}},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:a.page,children:[e.jsxs("div",{style:a.header,children:[e.jsx("h1",{style:a.title,children:"Pagination"}),e.jsxs("p",{style:a.desc,children:["Compact (페이지 번호 표시)와 Minimize (현재/전체만 표시) 2가지 variant를 지원합니다.",e.jsx("br",{}),"페이지를 클릭하여 인터랙션을 확인하세요."]})]}),e.jsx("p",{style:a.sectionTitle,children:"Variants"}),e.jsx("div",{style:a.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"compact"}),e.jsx(p,{currentPage:1,totalPages:7,variant:"compact"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"minimize"}),e.jsx(p,{currentPage:1,totalPages:10,variant:"minimize"})]})]})}),e.jsx("p",{style:a.sectionTitle,children:"Many Pages (with maxVisiblePages)"}),e.jsx("div",{style:a.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"start (page 1 / 100)"}),e.jsx(p,{currentPage:1,totalPages:100,variant:"compact",maxVisiblePages:5})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"middle (page 50 / 100)"}),e.jsx(p,{currentPage:50,totalPages:100,variant:"compact",maxVisiblePages:5})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("span",{style:a.label,children:"end (page 98 / 100)"}),e.jsx(p,{currentPage:98,totalPages:100,variant:"compact",maxVisiblePages:5})]})]})})]})};var T,D,V;x.parameters={...x.parameters,docs:{...(T=x.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 7,
    variant: 'compact'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['compact', 'minimize']
    },
    totalPages: {
      control: {
        type: 'number',
        min: 1
      }
    },
    maxVisiblePages: {
      control: {
        type: 'number',
        min: 3
      }
    }
  }
}`,...(V=(D=x.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var w,W,M;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Pagination</h1>
        <p style={s.desc}>
          Compact (페이지 번호 표시)와 Minimize (현재/전체만 표시) 2가지 variant를 지원합니다.
          <br />
          페이지를 클릭하여 인터랙션을 확인하세요.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>compact</span>
            <PaginationWithState currentPage={1} totalPages={7} variant='compact' />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>minimize</span>
            <PaginationWithState currentPage={1} totalPages={10} variant='minimize' />
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Many Pages (with maxVisiblePages)</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>start (page 1 / 100)</span>
            <PaginationWithState currentPage={1} totalPages={100} variant='compact' maxVisiblePages={5} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>middle (page 50 / 100)</span>
            <PaginationWithState currentPage={50} totalPages={100} variant='compact' maxVisiblePages={5} />
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <span style={s.label}>end (page 98 / 100)</span>
            <PaginationWithState currentPage={98} totalPages={100} variant='compact' maxVisiblePages={5} />
          </div>
        </div>
      </div>
    </div>
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const xe=["Playground","Overview"];export{u as Overview,x as Playground,xe as __namedExportsOrder,ye as default};
