import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b,R as ue}from"./iframe-D0ynm1mK.js";import{c as se}from"./styled-components.browser.esm-o0t8qbnT.js";import{r as re}from"./radius-DaoU83SK.js";import{s as r}from"./spacing-tE1IiUFl.js";import{c as o}from"./color-CiwAFuFb.js";import{t as ge}from"./textColor-DLZeZODc.js";import"./preload-helper-eJNa_G2e.js";const l=({size:t="medium",disabled:n=!1,active:s=!1,onChange:a,onClick:d,onFocus:c,onBlur:oe,className:le="",style:de,lang:ve,...ce})=>{const[w,z]=b.useState(s);ue.useEffect(()=>{z(s)},[s]);const pe=me=>{if(!n){const W=!w;z(W),a==null||a(W),d==null||d(me)}};return e.jsx(he,{$size:t,$disabled:n,$active:w,disabled:n,onClick:pe,onFocus:c,onBlur:oe,className:`switch ${le}`,style:de,...ce,children:e.jsx(xe,{$size:t,$disabled:n,$active:w})})},he=se.button`
  position: relative;
  border: none;
  outline: none;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  border-radius: ${re["rounded-full"]};

  ${({$size:t})=>{switch(t){case"small":return`
          width: ${32+parseInt(r.gap["gap-0.5"])*2}px;
          height: ${16+parseInt(r.gap["gap-0.5"])*2}px;
        `;case"large":return`
          width: ${48+parseInt(r.gap["gap-1"])*2}px;
          height: ${24+parseInt(r.gap["gap-1"])*2}px;
        `;default:return`
          width: ${40+parseInt(r.gap["gap-0.5"])*2}px;
          height: ${20+parseInt(r.gap["gap-0.5"])*2}px;
        `}}}

  ${({$active:t,$disabled:n})=>n&&t?`
        background-color: ${o.gray[900]};
      `:n&&!t?`
        background-color: ${o.gray[300]};
      `:t&&!n?`
        background-color: ${o.gray[950]};
      `:`
      background-color: ${o.gray[100]};
    `}

  &:focus-visible {
    box-shadow: 0 0 0 2px ${o.gray[300]};
  }
`,xe=se.div`
  position: absolute;
  border-radius: ${re["rounded-full"]};
  transition: all 0.2s ease-in-out;

  ${({$size:t})=>{const n=parseInt(t==="large"?r.gap["gap-1"]:r.gap["gap-0.5"]);switch(t){case"small":return`
          width: 16px;
          height: 16px;
          top: ${n}px;
          left: ${n}px;
        `;case"large":return`
          width: 24px;
          height: 24px;
          top: ${n}px;
          left: ${n}px;
        `;default:return`
          width: 20px;
          height: 20px;
          top: ${n}px;
          left: ${n}px;
        `}}}

  ${({$active:t,$disabled:n})=>n&&t?`
        background-color: ${ge.light["fg-neutral-alternative"]};
      `:n&&!t?`
        background-color: ${o.gray[50]};
      `:`
      background-color: ${o.common[100]};
    `}

  ${({$active:t,$size:n})=>{const s=n==="small"?16:n==="large"?24:20,a=parseInt(n==="large"?r.gap["gap-1"]:r.gap["gap-0.5"]),c=s*2+a*2-s-a*2;return`
      transform: translateX(${t?c:0}px);
    `}}
`;l.displayName="Switch";l.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(active: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:"'ko' | 'en'",elements:[{name:"literal",value:"'ko'"},{name:"literal",value:"'en'"}]},description:""}}};const i=t=>{const[n,s]=b.useState(t.active||!1);return e.jsx("div",{style:{padding:"20px"},children:e.jsx(l,{...t,active:n,onChange:a=>s(a)})})},Be={title:"Components/Switch",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,lang:"ko"}},p={render:t=>e.jsx(i,{...t})},m={args:{size:"small"},render:t=>e.jsx(i,{...t})},u={args:{size:"medium"},render:t=>e.jsx(i,{...t})},g={args:{size:"large"},render:t=>e.jsx(i,{...t})},h={args:{disabled:!0},render:t=>e.jsx(i,{...t})},x={args:{active:!0},render:t=>e.jsx(i,{...t})},v={args:{active:!0,disabled:!0},render:t=>e.jsx(i,{...t})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(i,{size:"small"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(i,{size:"medium"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(i,{size:"large"})]})]})},S={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default (Active=False, Disable=False)"}),e.jsx(i,{active:!1,disabled:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active (Active=True, Disable=False)"}),e.jsx(i,{active:!0,disabled:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled (Active=False, Disable=True)"}),e.jsx(i,{active:!1,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active + Disabled (Active=True, Disable=True)"}),e.jsx(i,{active:!0,disabled:!0})]})]})})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"기본 크기"}),e.jsx(i,{})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"커스텀 스타일 (margin 추가)"}),e.jsx(i,{style:{margin:"10px"}})]})]})},j={render:()=>{const[t,n]=b.useState({notifications:!0,darkMode:!1,autoSave:!0}),s=(a,d)=>{n(c=>({...c,[a]:d}))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"설정 예제"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"4px"},children:"알림"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"새로운 메시지와 업데이트를 받아보세요"})]}),e.jsx(l,{size:"medium",active:t.notifications,onChange:a=>s("notifications",a)})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"4px"},children:"다크 모드"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"어두운 테마를 사용합니다"})]}),e.jsx(l,{size:"medium",active:t.darkMode,onChange:a=>s("darkMode",a)})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"4px"},children:"자동 저장"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"변경사항을 자동으로 저장합니다"})]}),e.jsx(l,{size:"medium",active:t.autoSave,onChange:a=>s("autoSave",a)})]})]})}};var B,T,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />
}`,...(D=(T=p.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var $,A,C;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <SwitchWithState {...args} />
}`,...(C=(A=m.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var E,I,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <SwitchWithState {...args} />
}`,...(M=(I=u.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var k,F,R;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <SwitchWithState {...args} />
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var L,q,H;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SwitchWithState {...args} />
}`,...(H=(q=h.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var N,V,_;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    active: true
  },
  render: args => <SwitchWithState {...args} />
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var P,U,K;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    active: true,
    disabled: true
  },
  render: args => <SwitchWithState {...args} />
}`,...(K=(U=v.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var O,X,G;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'flex-start'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Small</h4>
        <SwitchWithState size='small' />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Medium</h4>
        <SwitchWithState size='medium' />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Large</h4>
        <SwitchWithState size='large' />
      </div>
    </div>
}`,...(G=(X=f.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var J,Q,Y;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      alignItems: 'center'
    }}>
        <div>
          <h4 style={{
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
            Default (Active=False, Disable=False)
          </h4>
          <SwitchWithState active={false} disabled={false} />
        </div>
        <div>
          <h4 style={{
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
            Active (Active=True, Disable=False)
          </h4>
          <SwitchWithState active={true} disabled={false} />
        </div>
        <div>
          <h4 style={{
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
            Disabled (Active=False, Disable=True)
          </h4>
          <SwitchWithState active={false} disabled={true} />
        </div>
        <div>
          <h4 style={{
          marginBottom: '8px',
          fontSize: '14px',
          fontWeight: '600'
        }}>
            Active + Disabled (Active=True, Disable=True)
          </h4>
          <SwitchWithState active={true} disabled={true} />
        </div>
      </div>
    </div>
}`,...(Y=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>기본 크기</h4>
        <SwitchWithState />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          커스텀 스타일 (margin 추가)
        </h4>
        <SwitchWithState style={{
        margin: '10px'
      }} />
      </div>
    </div>
}`,...(te=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,ie;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [switchStates, setSwitchStates] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true
    });
    const handleSwitchChange = (key: string, value: boolean) => {
      setSwitchStates(prev => ({
        ...prev,
        [key]: value
      }));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px'
    }}>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '16px',
        fontWeight: '600'
      }}>설정 예제</h3>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0'
      }}>
          <div>
            <div style={{
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '4px'
          }}>
              알림
            </div>
            <div style={{
            fontSize: '12px',
            color: '#666'
          }}>
              새로운 메시지와 업데이트를 받아보세요
            </div>
          </div>
          <Switch size='medium' active={switchStates.notifications} onChange={active => handleSwitchChange('notifications', active)} />
        </div>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0'
      }}>
          <div>
            <div style={{
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '4px'
          }}>
              다크 모드
            </div>
            <div style={{
            fontSize: '12px',
            color: '#666'
          }}>어두운 테마를 사용합니다</div>
          </div>
          <Switch size='medium' active={switchStates.darkMode} onChange={active => handleSwitchChange('darkMode', active)} />
        </div>

        <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 0'
      }}>
          <div>
            <div style={{
            fontSize: '14px',
            fontWeight: '500',
            marginBottom: '4px'
          }}>
              자동 저장
            </div>
            <div style={{
            fontSize: '12px',
            color: '#666'
          }}>변경사항을 자동으로 저장합니다</div>
          </div>
          <Switch size='medium' active={switchStates.autoSave} onChange={active => handleSwitchChange('autoSave', active)} />
        </div>
      </div>;
  }
}`,...(ie=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};const Te=["Default","Small","Medium","Large","Disabled","Active","ActiveDisabled","AllSizes","AllStates","CustomWidth","UsageDemo"];export{x as Active,v as ActiveDisabled,f as AllSizes,S as AllStates,y as CustomWidth,p as Default,h as Disabled,g as Large,u as Medium,m as Small,j as UsageDemo,Te as __namedExportsOrder,Be as default};
