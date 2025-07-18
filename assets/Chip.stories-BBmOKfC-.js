import{j as e}from"./jsx-runtime-DI6caXpZ.js";import{R as b}from"./iframe-C3u_M5gA.js";import{l as o,d as me}from"./styled-components.browser.esm-B5gIxz1z.js";import{c as l}from"./color-CMFzNX_O.js";import{r as fe}from"./radius-DaoU83SK.js";import{f as c}from"./fontWeight-DlyBHknl.js";import{b as d,t}from"./borderColor-C1c8KEhD.js";const ye=me.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${({radius:r})=>fe[r]};
  font-weight: ${c[500]};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:r="medium"})=>{switch(r){case"x-small":return o`
          padding: 4px 6px;
          height: 24px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${c[500]};
        `;case"small":return o`
          padding: 6px 8px;
          height: 32px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${c[500]};
        `;case"large":return o`
          padding: 8px 12px;
          height: 40px;
          font-size: 16px; // Body3-medium
          line-height: 24px;
          font-weight: ${c[500]};
        `;default:return o`
          padding: 8px 12px;
          height: 36px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${c[500]};
        `}}}

  ${({type:r="outline",state:x="default",active:i=!1,disabled:s=!1})=>{const p=(()=>{if(s)return{background:r==="solid"?l.gray[50]:"transparent",text:t.light["fg-neutral-disable"],border:r==="outline"?d.light["color-border-primary"]:"transparent"};if(i)return r==="solid"?{background:l.gray[950],text:l.common[100],border:"transparent"}:{background:l.gray[950]+"1F",text:t.light["fg-neutral-alternative"],border:d.light["color-border-focused"]};if(r==="solid")switch(x){case"hovered":return{background:l.gray[200],text:t.light["fg-neutral-alternative"],border:"transparent"};case"pressed":return{background:l.gray[300],text:t.light["fg-neutral-alternative"],border:"transparent"};case"focused":return{background:l.gray[950],text:l.common[100],border:"transparent"};default:return{background:l.gray[100],text:t.light["fg-neutral-alternative"],border:"transparent"}}else switch(x){case"hovered":return{background:l.gray[950]+"0D",text:t.light["fg-neutral-alternative"],border:d.light["color-border-primary"]};case"pressed":return{background:l.gray[950]+"14",text:t.light["fg-neutral-alternative"],border:d.light["color-border-primary"]};case"focused":return{background:l.gray[950]+"1F",text:t.light["fg-neutral-alternative"],border:d.light["color-border-focused"]};default:return{background:"transparent",text:t.light["fg-neutral-alternative"],border:d.light["color-border-primary"]}}})();return o`
      background-color: ${p.background};
      color: ${p.text};
      border: 1px solid ${p.border};
    `}}

  ${({disabled:r})=>r&&o`
      cursor: not-allowed;
      pointer-events: none;
    `}

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`,n=({type:r="outline",size:x="medium",state:i="default",disabled:s=!1,active:I=!1,text:p,children:ie,leadingIcon:z,trailingIcon:D,onClick:le,className:se,radius:te="rounded-full"})=>{const[ae,a]=b.useState(i);b.useEffect(()=>{a(i)},[i]);const oe=()=>{!s&&i==="default"&&a("hovered")},de=()=>{s||a(i)},pe=()=>{!s&&i==="default"&&a("pressed")},ce=()=>{!s&&i==="default"&&a("hovered")},xe=()=>{!s&&i==="default"&&a("focused")},ue=()=>{s||a(i)};return e.jsxs(ye,{type:r,size:x,state:i!=="default"?i:ae,disabled:s,active:I,radius:te,className:se,onClick:le,onMouseEnter:oe,onMouseLeave:de,onMouseDown:pe,onMouseUp:ce,onFocus:xe,onBlur:ue,tabIndex:s?-1:0,children:[z&&e.jsx("span",{className:"icon",children:z}),e.jsx("span",{children:ie||p}),D&&e.jsx("span",{className:"icon",children:D})]})};n.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"union",raw:`| "rounded-1"\r
| "rounded-1.5"\r
| "rounded-2"\r
| "rounded-3"\r
| "rounded-4"\r
| "rounded-5"\r
| "rounded-full"`,elements:[{name:"literal",value:'"rounded-1"'},{name:"literal",value:'"rounded-1.5"'},{name:"literal",value:'"rounded-2"'},{name:"literal",value:'"rounded-3"'},{name:"literal",value:'"rounded-4"'},{name:"literal",value:'"rounded-5"'},{name:"literal",value:'"rounded-full"'}]},description:"",defaultValue:{value:'"rounded-full"',computed:!1}}}};const ze={title:"Components/Chip",component:n,parameters:{layout:"centered",docs:{description:{component:"Chip은 태그, 필터, 상태 표시 등에 사용되는 작은 UI 요소입니다. Outline, Solid 두 가지 타입을 지원합니다."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["outline","solid"]},size:{control:{type:"select"},options:["x-small","small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},radius:{control:{type:"select"},options:["rounded-1","rounded-1.5","rounded-2","rounded-3","rounded-4","rounded-5","rounded-full"]}}},u={render:r=>e.jsx(n,{...r,children:"기본 칩"}),args:{}},m={render:r=>e.jsx(n,{...r,children:"Outline Chip"}),args:{type:"outline"},parameters:{docs:{description:{story:"테두리만 있는 Outline 타입의 Chip입니다."}}}},f={render:r=>e.jsx(n,{...r,children:"Solid Chip"}),args:{type:"solid"},parameters:{docs:{description:{story:"배경이 채워진 Solid 타입의 Chip입니다."}}}},y={render:r=>e.jsx(n,{...r,children:"Outline with Icon"}),args:{type:"outline",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Outline 타입의 Chip입니다."}}}},h={render:r=>e.jsx(n,{...r,children:"Solid with Icon"}),args:{type:"solid",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Solid 타입의 Chip입니다."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{type:"outline",trailingIcon:"✕",children:"Remove"}),e.jsx(n,{type:"solid",trailingIcon:"✕",children:"Close"})]}),parameters:{docs:{description:{story:"Trailing Icon이 포함된 Chip 예시입니다."}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"X-Small"}),e.jsx(n,{size:"x-small",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Small"}),e.jsx(n,{size:"small",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Medium"}),e.jsx(n,{size:"medium",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Large"}),e.jsx(n,{size:"large",children:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Normal"}),e.jsx(n,{children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{active:!0,children:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 활성/비활성 상태 비교"}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Outline Type"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),e.jsx(n,{type:"outline",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),e.jsx(n,{type:"outline",state:"hovered",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),e.jsx(n,{type:"outline",state:"pressed",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),e.jsx(n,{type:"outline",state:"focused",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),e.jsx(n,{type:"outline",disabled:!0,children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{type:"outline",active:!0,children:"텍스트"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Solid Type"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),e.jsx(n,{type:"solid",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),e.jsx(n,{type:"solid",state:"hovered",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),e.jsx(n,{type:"solid",state:"pressed",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),e.jsx(n,{type:"solid",state:"focused",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),e.jsx(n,{type:"solid",disabled:!0,children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{type:"solid",active:!0,children:"텍스트"})]})]})]})]}),parameters:{docs:{description:{story:"Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)"}}}},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-1 (4px)"}),e.jsx(n,{radius:"rounded-1",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-1.5 (6px)"}),e.jsx(n,{radius:"rounded-1.5",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-2 (8px)"}),e.jsx(n,{radius:"rounded-2",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-3 (12px)"}),e.jsx(n,{radius:"rounded-3",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-4 (16px)"}),e.jsx(n,{radius:"rounded-4",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-5 (20px)"}),e.jsx(n,{radius:"rounded-5",children:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-full (9999px)"}),e.jsx(n,{radius:"rounded-full",children:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다."}}}};var w,T,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Chip {...args}>기본 칩</Chip>,
  args: {}
}`,...(R=(T=u.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var O,W,k;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Chip {...args}>Outline Chip</Chip>,
  args: {
    type: "outline"
  },
  parameters: {
    docs: {
      description: {
        story: "테두리만 있는 Outline 타입의 Chip입니다."
      }
    }
  }
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var q,M,N;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Chip {...args}>Solid Chip</Chip>,
  args: {
    type: "solid"
  },
  parameters: {
    docs: {
      description: {
        story: "배경이 채워진 Solid 타입의 Chip입니다."
      }
    }
  }
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var $,A,F;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <Chip {...args}>Outline with Icon</Chip>,
  args: {
    type: "outline",
    leadingIcon: "🏷️"
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Outline 타입의 Chip입니다."
      }
    }
  }
}`,...(F=(A=y.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var V,B,H;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <Chip {...args}>Solid with Icon</Chip>,
  args: {
    type: "solid",
    leadingIcon: "🏷️"
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Solid 타입의 Chip입니다."
      }
    }
  }
}`,...(H=(B=h.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var L,P,E;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Chip type="outline" trailingIcon="✕">\r
        Remove\r
      </Chip>\r
      <Chip type="solid" trailingIcon="✕">\r
        Close\r
      </Chip>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Trailing Icon이 포함된 Chip 예시입니다."
      }
    }
  }
}`,...(E=(P=g.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var X,_,U;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>X-Small</span>\r
        <Chip size="x-small">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Small</span>\r
        <Chip size="small">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Medium</span>\r
        <Chip size="medium">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Large</span>\r
        <Chip size="large">텍스트</Chip>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"
      }
    }
  }
}`,...(U=(_=v.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var G,J,K;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Normal</span>\r
        <Chip>텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Active</span>\r
        <Chip active>텍스트</Chip>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 활성/비활성 상태 비교"
      }
    }
  }
}`,...(K=(J=j.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
      <div>\r
        <h3 style={{
        margin: "0 0 16px 0",
        fontSize: "16px"
      }}>Outline Type</h3>\r
        <div style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Default</span>\r
            <Chip type="outline">텍스트</Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Hovered</span>\r
            <Chip type="outline" state="hovered">\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Pressed</span>\r
            <Chip type="outline" state="pressed">\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Focused</span>\r
            <Chip type="outline" state="focused">\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Disabled</span>\r
            <Chip type="outline" disabled>\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Active</span>\r
            <Chip type="outline" active>\r
              텍스트\r
            </Chip>\r
          </div>\r
        </div>\r
      </div>\r
      <div>\r
        <h3 style={{
        margin: "0 0 16px 0",
        fontSize: "16px"
      }}>Solid Type</h3>\r
        <div style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Default</span>\r
            <Chip type="solid">텍스트</Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Hovered</span>\r
            <Chip type="solid" state="hovered">\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Pressed</span>\r
            <Chip type="solid" state="pressed">\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Focused</span>\r
            <Chip type="solid" state="focused">\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Disabled</span>\r
            <Chip type="solid" disabled>\r
              텍스트\r
            </Chip>\r
          </div>\r
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>\r
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Active</span>\r
            <Chip type="solid" active>\r
              텍스트\r
            </Chip>\r
          </div>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)"
      }
    }
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap"
  }}>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>rounded-1 (4px)</span>\r
        <Chip radius="rounded-1">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>\r
          rounded-1.5 (6px)\r
        </span>\r
        <Chip radius="rounded-1.5">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>rounded-2 (8px)</span>\r
        <Chip radius="rounded-2">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>\r
          rounded-3 (12px)\r
        </span>\r
        <Chip radius="rounded-3">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>\r
          rounded-4 (16px)\r
        </span>\r
        <Chip radius="rounded-4">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>\r
          rounded-5 (20px)\r
        </span>\r
        <Chip radius="rounded-5">텍스트</Chip>\r
      </div>\r
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>\r
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>\r
          rounded-full (9999px)\r
        </span>\r
        <Chip radius="rounded-full">텍스트</Chip>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다."
      }
    }
  }
}`,...(re=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const De=["Default","Outline","Solid","OutlineWithIcon","SolidWithIcon","WithTrailingIcon","Sizes","ActiveState","AllStates","RadiusVariations"];export{j as ActiveState,C as AllStates,u as Default,m as Outline,y as OutlineWithIcon,S as RadiusVariations,v as Sizes,f as Solid,h as SolidWithIcon,g as WithTrailingIcon,De as __namedExportsOrder,ze as default};
