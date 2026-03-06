import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as y}from"./iframe-D0ynm1mK.js";import{c as i,s as F}from"./styled-components.browser.esm-o0t8qbnT.js";import{c as l}from"./color-CiwAFuFb.js";import{r as U}from"./radius-DaoU83SK.js";import{s as p}from"./spacing-tE1IiUFl.js";import{t as H}from"./textColor-DLZeZODc.js";import{A as h}from"./Avatar-BEnKGvzG.js";import{S as Y}from"./icon_chevron-down_outline_16-BDm859aR.js";import{M as Z}from"./Menu-C2cyYB0M.js";import{C as ee}from"./Cell-CGl_2yBH.js";import"./preload-helper-eJNa_G2e.js";import"./borderColor-C_RHITEf.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./shadow-DVq_1U2q.js";import"./IconCheck-Cgh-IEDk.js";const t=({avatars:a,max:V=4,state:j="default",dropdownWidth:A,onItemClick:u,className:P})=>{const[b,g]=y.useState(!1),f=y.useRef(null),w=a.slice(0,V),X=w.length-1,J=()=>{switch(j){case"hovered":return l.gray[50];case"pressed":return l.gray[100];case"selected":return l.gray[50];default:return"transparent"}},K=()=>{g(!b)},Q=(s,n)=>{u==null||u(s,n),g(!1)};return y.useEffect(()=>{const s=n=>{f.current&&!f.current.contains(n.target)&&g(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),e.jsxs(ae,{ref:f,className:P,children:[e.jsx(te,{onClick:K,children:e.jsx(ne,{children:w.map((s,n)=>n===X?e.jsx(re,{$index:n,children:e.jsxs(ie,{$state:j,$bgColor:J(),children:[e.jsx(h,{...s,size:"x-small"}),e.jsx(le,{children:e.jsx(Y,{color:H.light["fg-neutral-alternative"]})})]})},n):e.jsx(se,{$index:n,children:e.jsx(h,{...s,size:"x-small"})},n))})}),b&&e.jsx(pe,{$width:A,children:e.jsx(Z,{width:A||160,showCheckIcon:!1,children:a.map((s,n)=>{const S=()=>e.jsx(h,{...s,size:"x-small"});return e.jsx(ee,{leadingContent:S,text:s.name||s.value||"Name",active:n===0,onClick:()=>Q(s,n)},n)})})})]})},ae=i.div`
  position: relative;
  display: inline-flex;
`,te=i.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`,ne=i.div`
  display: flex;
  align-items: center;
`,se=i.div`
  ${({$index:a})=>a>0&&F`
      margin-left: -6px;
    `}

  > div {
    border: ${p.gap["gap-0.5"]} solid ${l.common[100]};
    box-sizing: content-box;
  }
`,re=i.div`
  ${({$index:a})=>a>0&&F`
      margin-left: -6px;
    `}
`,ie=i.div`
  display: inline-flex;
  align-items: center;
  gap: ${p.gap["gap-0.5"]};
  padding-right: ${p.gap["gap-1"]};
  border-radius: ${U["rounded-full"]};
  background-color: ${({$bgColor:a})=>a};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${l.gray[50]};
  }

  &:active {
    background-color: ${l.gray[100]};
  }

  > div:first-child {
    border: ${p.gap["gap-0.5"]} solid ${l.common[100]};
    box-sizing: content-box;
  }
`,le=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${H.light["fg-neutral-alternative"]};
`,pe=i.div`
  position: absolute;
  top: calc(100% + ${p.gap["gap-1"]});
  right: 0;
  transform: translateX(calc(50% - 8px));
  z-index: 1000;
`;t.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarItemData"}],raw:"AvatarItemData[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'default' | 'hovered' | 'pressed' | 'selected'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'hovered'"},{name:"literal",value:"'pressed'"},{name:"literal",value:"'selected'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(avatar: AvatarItemData, index: number) => void",signature:{arguments:[{type:{name:"AvatarItemData"},name:"avatar"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Ge={title:"Components/AvatarGroup",component:t,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"AvatarGroup은 그룹화된 다수의 아바타를 표시할 때 사용합니다. 최대 4개까지 표시하며, 드롭다운 아이콘이 함께 표시됩니다."}}}},r=[{type:"default"},{type:"default"},{type:"default"},{type:"default"}],oe=[{type:"custom",src:"https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg"},{type:"custom",src:"https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg"},{type:"custom",src:"https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg"},{type:"custom",src:"https://ecimg.cafe24img.com/pg299b34409484036/baekih1001/web/product/big/20240412/ecbb950ad71a5628d66fceef9809d028.jpg"}],de=[{type:"initial",value:"A"},{type:"initial",value:"B"},{type:"initial",value:"C"},{type:"initial",value:"D"}],o={render:a=>e.jsx(t,{...a}),args:{avatars:r,max:4,state:"default"}},d={render:a=>e.jsx(t,{...a}),args:{avatars:oe,max:4,state:"default"}},c={render:a=>e.jsx(t,{...a}),args:{avatars:de,max:4,state:"default"}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"Default"}),e.jsx(t,{avatars:r,state:"default"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"Hovered"}),e.jsx(t,{avatars:r,state:"hovered"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"Pressed"}),e.jsx(t,{avatars:r,state:"pressed"})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"Selected"}),e.jsx(t,{avatars:r,state:"selected"})]})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"1개"}),e.jsx(t,{avatars:r.slice(0,1),max:4})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"2개"}),e.jsx(t,{avatars:r.slice(0,2),max:4})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"3개"}),e.jsx(t,{avatars:r.slice(0,3),max:4})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"80px",fontSize:"14px"},children:"4개"}),e.jsx(t,{avatars:r,max:4})]})]})},v={render:()=>{const a=[{type:"initial",value:"A"},{type:"initial",value:"B"},{type:"initial",value:"C"},{type:"initial",value:"D"},{type:"initial",value:"E"},{type:"initial",value:"F"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"120px",fontSize:"14px"},children:"max=2"}),e.jsx(t,{avatars:a,max:2})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"120px",fontSize:"14px"},children:"max=3"}),e.jsx(t,{avatars:a,max:3})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx("span",{style:{width:"120px",fontSize:"14px"},children:"max=4 (기본)"}),e.jsx(t,{avatars:a,max:4})]})]})}};var I,z,D;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args} />,
  args: {
    avatars: sampleAvatars,
    max: 4,
    state: 'default'
  }
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var C,$,G;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args} />,
  args: {
    avatars: customAvatars,
    max: 4,
    state: 'default'
  }
}`,...(G=($=d.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var k,W,L;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <AvatarGroup {...args} />,
  args: {
    avatars: initialAvatars,
    max: 4,
    state: 'default'
  }
}`,...(L=(W=c.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var E,T,q;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>Default</span>
        <AvatarGroup avatars={sampleAvatars} state='default' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>Hovered</span>
        <AvatarGroup avatars={sampleAvatars} state='hovered' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>Pressed</span>
        <AvatarGroup avatars={sampleAvatars} state='pressed' />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>Selected</span>
        <AvatarGroup avatars={sampleAvatars} state='selected' />
      </div>
    </div>
}`,...(q=(T=x.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var M,O,B;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>1개</span>
        <AvatarGroup avatars={sampleAvatars.slice(0, 1)} max={4} />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>2개</span>
        <AvatarGroup avatars={sampleAvatars.slice(0, 2)} max={4} />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>3개</span>
        <AvatarGroup avatars={sampleAvatars.slice(0, 3)} max={4} />
      </div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
        <span style={{
        width: '80px',
        fontSize: '14px'
      }}>4개</span>
        <AvatarGroup avatars={sampleAvatars} max={4} />
      </div>
    </div>
}`,...(B=(O=m.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var _,N,R;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const manyAvatars = [{
      type: 'initial' as const,
      value: 'A'
    }, {
      type: 'initial' as const,
      value: 'B'
    }, {
      type: 'initial' as const,
      value: 'C'
    }, {
      type: 'initial' as const,
      value: 'D'
    }, {
      type: 'initial' as const,
      value: 'E'
    }, {
      type: 'initial' as const,
      value: 'F'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
          <span style={{
          width: '120px',
          fontSize: '14px'
        }}>max=2</span>
          <AvatarGroup avatars={manyAvatars} max={2} />
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
          <span style={{
          width: '120px',
          fontSize: '14px'
        }}>max=3</span>
          <AvatarGroup avatars={manyAvatars} max={3} />
        </div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
          <span style={{
          width: '120px',
          fontSize: '14px'
        }}>max=4 (기본)</span>
          <AvatarGroup avatars={manyAvatars} max={4} />
        </div>
      </div>;
  }
}`,...(R=(N=v.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const ke=["Default","WithCustomAvatars","WithInitialAvatars","States","DifferentCounts","MaxLimit"];export{o as Default,m as DifferentCounts,v as MaxLimit,x as States,d as WithCustomAvatars,c as WithInitialAvatars,ke as __namedExportsOrder,Ge as default};
