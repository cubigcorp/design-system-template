import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Y}from"./iframe-a1GnT4YX.js";import{S as a}from"./Switch-B4fCNq5p.js";import"./styled-components.browser.esm-D8ZmqkE2.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";const n=t=>{const[f,s]=Y.useState(t.active||!1);return e.jsx("div",{style:{padding:"20px"},children:e.jsx(a,{...t,active:f,onChange:i=>s(i)})})},xe={title:"Components/Switch",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,lang:"ko"}},r={render:t=>e.jsx(n,{...t})},o={args:{size:"small"},render:t=>e.jsx(n,{...t})},d={args:{size:"medium"},render:t=>e.jsx(n,{...t})},l={args:{size:"large"},render:t=>e.jsx(n,{...t})},c={args:{disabled:!0},render:t=>e.jsx(n,{...t})},p={args:{active:!0},render:t=>e.jsx(n,{...t})},m={args:{active:!0,disabled:!0},render:t=>e.jsx(n,{...t})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(n,{size:"small"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(n,{size:"medium"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(n,{size:"large"})]})]})},h={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default (Active=False, Disable=False)"}),e.jsx(n,{active:!1,disabled:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active (Active=True, Disable=False)"}),e.jsx(n,{active:!0,disabled:!1})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled (Active=False, Disable=True)"}),e.jsx(n,{active:!1,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active + Disabled (Active=True, Disable=True)"}),e.jsx(n,{active:!0,disabled:!0})]})]})})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"기본 크기"}),e.jsx(n,{})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"커스텀 스타일 (margin 추가)"}),e.jsx(n,{style:{margin:"10px"}})]})]})},v={render:()=>{const[t,f]=Y.useState({notifications:!0,darkMode:!1,autoSave:!0}),s=(i,Z)=>{f($=>({...$,[i]:Z}))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"20px"},children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:"600"},children:"설정 예제"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"4px"},children:"알림"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"새로운 메시지와 업데이트를 받아보세요"})]}),e.jsx(a,{size:"medium",active:t.notifications,onChange:i=>s("notifications",i)})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"4px"},children:"다크 모드"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"어두운 테마를 사용합니다"})]}),e.jsx(a,{size:"medium",active:t.darkMode,onChange:i=>s("darkMode",i)})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 0"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:"500",marginBottom:"4px"},children:"자동 저장"}),e.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"변경사항을 자동으로 저장합니다"})]}),e.jsx(a,{size:"medium",active:t.autoSave,onChange:i=>s("autoSave",i)})]})]})}};var u,S,y;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <SwitchWithState {...args} />
}`,...(y=(S=r.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var j,z,W;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <SwitchWithState {...args} />
}`,...(W=(z=o.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var w,b,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <SwitchWithState {...args} />
}`,...(D=(b=d.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var B,C,A;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <SwitchWithState {...args} />
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var T,k,I;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SwitchWithState {...args} />
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var M,F,L;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    active: true
  },
  render: args => <SwitchWithState {...args} />
}`,...(L=(F=p.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var E,U,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    active: true,
    disabled: true
  },
  render: args => <SwitchWithState {...args} />
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,R,q;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "flex-start"
  }}>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Small
        </h4>
        <SwitchWithState size="small" />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Medium
        </h4>
        <SwitchWithState size="medium" />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Large
        </h4>
        <SwitchWithState size="large" />
      </div>
    </div>
}`,...(q=(R=x.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px",
      alignItems: "center"
    }}>
        <div>
          <h4 style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "600"
        }}>
            Default (Active=False, Disable=False)
          </h4>
          <SwitchWithState active={false} disabled={false} />
        </div>
        <div>
          <h4 style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "600"
        }}>
            Active (Active=True, Disable=False)
          </h4>
          <SwitchWithState active={true} disabled={false} />
        </div>
        <div>
          <h4 style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "600"
        }}>
            Disabled (Active=False, Disable=True)
          </h4>
          <SwitchWithState active={false} disabled={true} />
        </div>
        <div>
          <h4 style={{
          marginBottom: "8px",
          fontSize: "14px",
          fontWeight: "600"
        }}>
            Active + Disabled (Active=True, Disable=True)
          </h4>
          <SwitchWithState active={true} disabled={true} />
        </div>
      </div>
    </div>
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,N,P;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          기본 크기
        </h4>
        <SwitchWithState />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          커스텀 스타일 (margin 추가)
        </h4>
        <SwitchWithState style={{
        margin: "10px"
      }} />
      </div>
    </div>
}`,...(P=(N=g.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var Q,V,X;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      padding: "20px"
    }}>
        <h3 style={{
        marginBottom: "16px",
        fontSize: "16px",
        fontWeight: "600"
      }}>
          설정 예제
        </h3>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 0"
      }}>
          <div>
            <div style={{
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "4px"
          }}>
              알림
            </div>
            <div style={{
            fontSize: "12px",
            color: "#666"
          }}>
              새로운 메시지와 업데이트를 받아보세요
            </div>
          </div>
          <Switch size="medium" active={switchStates.notifications} onChange={active => handleSwitchChange("notifications", active)} />
        </div>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 0"
      }}>
          <div>
            <div style={{
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "4px"
          }}>
              다크 모드
            </div>
            <div style={{
            fontSize: "12px",
            color: "#666"
          }}>
              어두운 테마를 사용합니다
            </div>
          </div>
          <Switch size="medium" active={switchStates.darkMode} onChange={active => handleSwitchChange("darkMode", active)} />
        </div>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 0"
      }}>
          <div>
            <div style={{
            fontSize: "14px",
            fontWeight: "500",
            marginBottom: "4px"
          }}>
              자동 저장
            </div>
            <div style={{
            fontSize: "12px",
            color: "#666"
          }}>
              변경사항을 자동으로 저장합니다
            </div>
          </div>
          <Switch size="medium" active={switchStates.autoSave} onChange={active => handleSwitchChange("autoSave", active)} />
        </div>
      </div>;
  }
}`,...(X=(V=v.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const he=["Default","Small","Medium","Large","Disabled","Active","ActiveDisabled","AllSizes","AllStates","CustomWidth","UsageDemo"];export{p as Active,m as ActiveDisabled,x as AllSizes,h as AllStates,g as CustomWidth,r as Default,c as Disabled,l as Large,d as Medium,o as Small,v as UsageDemo,he as __namedExportsOrder,xe as default};
