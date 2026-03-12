import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./iframe-CvA0Eg-6.js";import{c as l,s as E}from"./styled-components.browser.esm-CjbLCBIw.js";import{c as i}from"./color-m2U5piog.js";import{r as H}from"./radius-DaoU83SK.js";import{s as o}from"./spacing-tE1IiUFl.js";import{t as O}from"./textColor-G8dwupNW.js";import{A as f}from"./Avatar-CJpZr53q.js";import{S as P}from"./icon_chevron-down_outline_16-pmHkusoK.js";import{M as X}from"./Menu-BCjXGndd.js";import{C as J}from"./Cell-CqQtYxfJ.js";import"./preload-helper-eJNa_G2e.js";import"./borderColor-CzkI5wcR.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./shadow-DVq_1U2q.js";import"./IconCheck-Cgh-IEDk.js";const r=({avatars:a,max:B=4,state:h="default",dropdownWidth:j,onItemClick:v,className:F})=>{const[b,x]=g.useState(!1),y=g.useRef(null),A=a.slice(0,B),R=A.length-1,_=()=>{switch(h){case"hovered":return i.gray[50];case"pressed":return i.gray[100];case"selected":return i.gray[50];default:return"transparent"}},N=()=>{x(!b)},V=(s,n)=>{v==null||v(s,n),x(!1)};return g.useEffect(()=>{const s=n=>{y.current&&!y.current.contains(n.target)&&x(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),e.jsxs(K,{ref:y,className:F,children:[e.jsx(Q,{onClick:N,children:e.jsx(U,{children:A.map((s,n)=>n===R?e.jsx(Z,{$index:n,children:e.jsxs(ee,{$state:h,$bgColor:_(),children:[e.jsx(f,{...s,size:"x-small"}),e.jsx(ae,{children:e.jsx(P,{color:O.light["fg-neutral-alternative"]})})]})},n):e.jsx(Y,{$index:n,children:e.jsx(f,{...s,size:"x-small"})},n))})}),b&&e.jsx(te,{$width:j,children:e.jsx(X,{width:j||160,showCheckIcon:!1,children:a.map((s,n)=>{const w=()=>e.jsx(f,{...s,size:"x-small"});return e.jsx(J,{leadingContent:w,text:s.name||s.value||"Name",active:n===0,onClick:()=>V(s,n)},n)})})})]})},K=l.div`
  position: relative;
  display: inline-flex;
`,Q=l.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`,U=l.div`
  display: flex;
  align-items: center;
`,Y=l.div`
  ${({$index:a})=>a>0&&E`
      margin-left: -6px;
    `}

  > div {
    border: ${o.gap["gap-0.5"]} solid ${i.common[100]};
    box-sizing: content-box;
  }
`,Z=l.div`
  ${({$index:a})=>a>0&&E`
      margin-left: -6px;
    `}
`,ee=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${o.gap["gap-0.5"]};
  padding-right: ${o.gap["gap-1"]};
  border-radius: ${H["rounded-full"]};
  background-color: ${({$bgColor:a})=>a};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${i.gray[50]};
  }

  &:active {
    background-color: ${i.gray[100]};
  }

  > div:first-child {
    border: ${o.gap["gap-0.5"]} solid ${i.common[100]};
    box-sizing: content-box;
  }
`,ae=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${O.light["fg-neutral-alternative"]};
`,te=l.div`
  position: absolute;
  top: calc(100% + ${o.gap["gap-1"]});
  right: 0;
  transform: translateX(calc(50% - 8px));
  z-index: 1000;
`;r.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarItemData"}],raw:"AvatarItemData[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'selected'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'selected'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(avatar: AvatarItemData, index: number) => void",signature:{arguments:[{type:{name:"AvatarItemData"},name:"avatar"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ae={title:"Components/Data Display/AvatarGroup",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"그룹화된 다수의 아바타를 표시하는 컴포넌트입니다. 최대 표시 개수를 제한할 수 있습니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},u=[{type:"default"},{type:"default"},{type:"default"},{type:"default"}],q=[{type:"initial",value:"A"},{type:"initial",value:"B"},{type:"initial",value:"C"},{type:"initial",value:"D"},{type:"initial",value:"E"},{type:"initial",value:"F"}],d={parameters:{layout:"centered"},render:a=>e.jsx(r,{...a}),args:{avatars:u,max:4,state:"default"},argTypes:{max:{control:{type:"number",min:1,max:6}},state:{control:"select",options:["default","hovered","pressed","selected"]}}},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Avatar Group"}),e.jsxs("p",{style:t.desc,children:["그룹화된 다수의 아바타를 표시합니다.",e.jsx("br",{}),"max로 최대 표시 개수를 제한하고, 다양한 상태를 지원합니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Avatar Count"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[1,2,3,4].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsxs("span",{style:{...t.label,width:60},children:[a,"개"]}),e.jsx(r,{avatars:u.slice(0,a),max:4})]},a))})}),e.jsx("p",{style:t.sectionTitle,children:"Max Limit"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[2,3,4].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsxs("span",{style:{...t.label,width:100},children:["max=",a," (6개)"]}),e.jsx(r,{avatars:q,max:a})]},a))})}),e.jsx("p",{style:t.sectionTitle,children:"States"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:["default","hovered","pressed","selected"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...t.label,width:60},children:a}),e.jsx(r,{avatars:u,state:a})]},a))})})]})},c={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["default","hovered","pressed","selected"].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{...t.label,width:60},children:a}),e.jsx(r,{avatars:u,state:a})]},a))})},m={parameters:{layout:"centered",controls:{disable:!0}},render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[2,3,4].map(a=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsxs("span",{style:{...t.label,width:100},children:["max=",a," (6개)"]}),e.jsx(r,{avatars:q,max:a})]},a))})};var D,I,S;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <AvatarGroup {...args} />,
  args: {
    avatars: defaultAvatars,
    max: 4,
    state: 'default'
  },
  argTypes: {
    max: {
      control: {
        type: 'number',
        min: 1,
        max: 6
      }
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'pressed', 'selected']
    }
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var $,T,C;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Avatar Group</h1>
        <p style={s.desc}>
          그룹화된 다수의 아바타를 표시합니다.
          <br />
          max로 최대 표시 개수를 제한하고, 다양한 상태를 지원합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Avatar Count</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {[1, 2, 3, 4].map(count => <div key={count} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{count}개</span>
              <AvatarGroup avatars={defaultAvatars.slice(0, count)} max={4} />
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Max Limit</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
          {[2, 3, 4].map(max => <div key={max} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={{
            ...s.label,
            width: 100
          }}>max={max} (6개)</span>
              <AvatarGroup avatars={initialAvatars} max={max} />
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
          {(['default', 'hovered', 'pressed', 'selected'] as const).map(state => <div key={state} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}>
              <span style={{
            ...s.label,
            width: 60
          }}>{state}</span>
              <AvatarGroup avatars={defaultAvatars} state={state} />
            </div>)}
        </div>
      </div>
    </div>
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var k,G,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      {(['default', 'hovered', 'pressed', 'selected'] as const).map(state => <div key={state} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        ...s.label,
        width: 60
      }}>{state}</span>
          <AvatarGroup avatars={defaultAvatars} state={state} />
        </div>)}
    </div>
}`,...(L=(G=c.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var z,M,W;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      {[2, 3, 4].map(max => <div key={max} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }}>
          <span style={{
        ...s.label,
        width: 100
      }}>max={max} (6개)</span>
          <AvatarGroup avatars={initialAvatars} max={max} />
        </div>)}
    </div>
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const we=["Playground","Overview","States","MaxLimit"];export{m as MaxLimit,p as Overview,d as Playground,c as States,we as __namedExportsOrder,Ae as default};
