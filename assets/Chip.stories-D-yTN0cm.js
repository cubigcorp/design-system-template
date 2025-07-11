import{j as e}from"./jsx-runtime-D6O8jfg_.js";import{R as f}from"./iframe-Bde89nZx.js";import{l as o,d as ue}from"./styled-components.browser.esm-CXN6KAl_.js";import{c as l}from"./color-CMFzNX_O.js";import{r as me}from"./radius-DaoU83SK.js";import{f as c}from"./fontWeight-DlyBHknl.js";import{b as d,t as i}from"./borderColor-C1c8KEhD.js";const fe=ue.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${({radius:r})=>me[r]};
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

  ${({type:r="outline",state:x="default",active:t=!1,disabled:s=!1})=>{const p=(()=>{if(s)return{background:r==="solid"?l.gray[50]:"transparent",text:i.light["fg-neutral-disable"],border:r==="outline"?d.light["color-border-primary"]:"transparent"};if(t)return r==="solid"?{background:l.gray[950],text:l.common[100],border:"transparent"}:{background:l.gray[950]+"1F",text:i.light["fg-neutral-alternative"],border:d.light["color-border-focused"]};if(r==="solid")switch(x){case"hovered":return{background:l.gray[200],text:i.light["fg-neutral-alternative"],border:"transparent"};case"pressed":return{background:l.gray[300],text:i.light["fg-neutral-alternative"],border:"transparent"};case"focused":return{background:l.gray[950],text:l.common[100],border:"transparent"};default:return{background:l.gray[100],text:i.light["fg-neutral-alternative"],border:"transparent"}}else switch(x){case"hovered":return{background:l.gray[950]+"0D",text:i.light["fg-neutral-alternative"],border:d.light["color-border-primary"]};case"pressed":return{background:l.gray[950]+"14",text:i.light["fg-neutral-alternative"],border:d.light["color-border-primary"]};case"focused":return{background:l.gray[950]+"1F",text:i.light["fg-neutral-alternative"],border:d.light["color-border-focused"]};default:return{background:"transparent",text:i.light["fg-neutral-alternative"],border:d.light["color-border-primary"]}}})();return o`
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
`,n=({type:r="outline",size:x="medium",state:t="default",disabled:s=!1,active:b=!1,text:p,leadingIcon:u,trailingIcon:m,onClick:re,className:le,radius:se="rounded-full"})=>{const[ie,a]=f.useState(t);f.useEffect(()=>{a(t)},[t]);const ae=()=>{!s&&t==="default"&&a("hovered")},oe=()=>{s||a(t)},de=()=>{!s&&t==="default"&&a("pressed")},pe=()=>{!s&&t==="default"&&a("hovered")},ce=()=>{!s&&t==="default"&&a("focused")},xe=()=>{s||a(t)};return e.jsxs(fe,{type:r,size:x,state:t!=="default"?t:ie,disabled:s,active:b,radius:se,className:le,onClick:re,onMouseEnter:ae,onMouseLeave:oe,onMouseDown:de,onMouseUp:pe,onFocus:ce,onBlur:xe,tabIndex:s?-1:0,children:[u&&e.jsx("span",{className:"icon",children:f.isValidElement(u)?u:String(u)}),e.jsx("span",{children:p}),m&&e.jsx("span",{className:"icon",children:f.isValidElement(m)?m:String(m)})]})};n.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},radius:{required:!1,tsType:{name:"union",raw:`| "rounded-1"\r
| "rounded-1.5"\r
| "rounded-2"\r
| "rounded-3"\r
| "rounded-4"\r
| "rounded-5"\r
| "rounded-full"`,elements:[{name:"literal",value:'"rounded-1"'},{name:"literal",value:'"rounded-1.5"'},{name:"literal",value:'"rounded-2"'},{name:"literal",value:'"rounded-3"'},{name:"literal",value:'"rounded-4"'},{name:"literal",value:'"rounded-5"'},{name:"literal",value:'"rounded-full"'}]},description:"",defaultValue:{value:'"rounded-full"',computed:!1}}}};const ze={title:"Components/Chip",component:n,parameters:{layout:"centered",docs:{description:{component:"Chip은 태그, 필터, 상태 표시 등에 사용되는 작은 UI 요소입니다. Outline, Solid 두 가지 타입을 지원합니다."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["outline","solid"]},size:{control:{type:"select"},options:["x-small","small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},text:{control:{type:"text"}},radius:{control:{type:"select"},options:["rounded-1","rounded-1.5","rounded-2","rounded-3","rounded-4","rounded-5","rounded-full"]}},args:{text:"텍스트"}},y={args:{text:"기본 칩"}},g={args:{type:"outline",text:"Outline Chip"},parameters:{docs:{description:{story:"테두리만 있는 Outline 타입의 Chip입니다."}}}},h={args:{type:"solid",text:"Solid Chip"},parameters:{docs:{description:{story:"배경이 채워진 Solid 타입의 Chip입니다."}}}},v={args:{type:"outline",text:"Outline with Icon",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Outline 타입의 Chip입니다."}}}},S={args:{type:"solid",text:"Solid with Icon",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Solid 타입의 Chip입니다."}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{type:"outline",text:"Remove",trailingIcon:"✕"}),e.jsx(n,{type:"solid",text:"Close",trailingIcon:"✕"})]}),parameters:{docs:{description:{story:"Trailing Icon이 포함된 Chip 예시입니다."}}}},I={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"X-Small"}),e.jsx(n,{size:"x-small",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Small"}),e.jsx(n,{size:"small",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Medium"}),e.jsx(n,{size:"medium",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Large"}),e.jsx(n,{size:"large",text:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"}}}},z={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Normal"}),e.jsx(n,{text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{active:!0,text:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 활성/비활성 상태 비교"}}}},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Outline Type"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),e.jsx(n,{type:"outline",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),e.jsx(n,{type:"outline",state:"hovered",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),e.jsx(n,{type:"outline",state:"pressed",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),e.jsx(n,{type:"outline",state:"focused",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),e.jsx(n,{type:"outline",disabled:!0,text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{type:"outline",active:!0,text:"텍스트"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Solid Type"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),e.jsx(n,{type:"solid",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),e.jsx(n,{type:"solid",state:"hovered",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),e.jsx(n,{type:"solid",state:"pressed",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),e.jsx(n,{type:"solid",state:"focused",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),e.jsx(n,{type:"solid",disabled:!0,text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{type:"solid",active:!0,text:"텍스트"})]})]})]})]}),parameters:{docs:{description:{story:"Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)"}}}},C={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-1 (4px)"}),e.jsx(n,{radius:"rounded-1",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-1.5 (6px)"}),e.jsx(n,{radius:"rounded-1.5",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-2 (8px)"}),e.jsx(n,{radius:"rounded-2",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-3 (12px)"}),e.jsx(n,{radius:"rounded-3",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-4 (16px)"}),e.jsx(n,{radius:"rounded-4",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-5 (20px)"}),e.jsx(n,{radius:"rounded-5",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-full (9999px)"}),e.jsx(n,{radius:"rounded-full",text:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다."}}}};var w,T,O;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: "기본 칩"
  }
}`,...(O=(T=y.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var R,W,k;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: "outline",
    text: "Outline Chip"
  },
  parameters: {
    docs: {
      description: {
        story: "테두리만 있는 Outline 타입의 Chip입니다."
      }
    }
  }
}`,...(k=(W=g.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var M,$,q;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: "solid",
    text: "Solid Chip"
  },
  parameters: {
    docs: {
      description: {
        story: "배경이 채워진 Solid 타입의 Chip입니다."
      }
    }
  }
}`,...(q=($=h.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var A,F,N;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: "outline",
    text: "Outline with Icon",
    leadingIcon: "🏷️"
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Outline 타입의 Chip입니다."
      }
    }
  }
}`,...(N=(F=v.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,E,B;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: "solid",
    text: "Solid with Icon",
    leadingIcon: "🏷️"
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Solid 타입의 Chip입니다."
      }
    }
  }
}`,...(B=(E=S.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var H,L,P;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>\r
      <Chip type="outline" text="Remove" trailingIcon="✕" />\r
      <Chip type="solid" text="Close" trailingIcon="✕" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Trailing Icon이 포함된 Chip 예시입니다."
      }
    }
  }
}`,...(P=(L=j.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var X,_,U;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        <Chip size="x-small" text="텍스트" />\r
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
        <Chip size="small" text="텍스트" />\r
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
        <Chip size="medium" text="텍스트" />\r
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
        <Chip size="large" text="텍스트" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"
      }
    }
  }
}`,...(U=(_=I.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var G,J,K;z.parameters={...z.parameters,docs:{...(G=z.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        <Chip text="텍스트" />\r
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
        <Chip active text="텍스트" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 활성/비활성 상태 비교"
      }
    }
  }
}`,...(K=(J=z.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
            <Chip type="outline" text="텍스트" />\r
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
            <Chip type="outline" state="hovered" text="텍스트" />\r
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
            <Chip type="outline" state="pressed" text="텍스트" />\r
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
            <Chip type="outline" state="focused" text="텍스트" />\r
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
            <Chip type="outline" disabled text="텍스트" />\r
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
            <Chip type="outline" active text="텍스트" />\r
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
            <Chip type="solid" text="텍스트" />\r
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
            <Chip type="solid" state="hovered" text="텍스트" />\r
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
            <Chip type="solid" state="pressed" text="텍스트" />\r
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
            <Chip type="solid" state="focused" text="텍스트" />\r
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
            <Chip type="solid" disabled text="텍스트" />\r
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
            <Chip type="solid" active text="텍스트" />\r
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
}`,...(Z=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,te;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
        <Chip radius="rounded-1" text="텍스트" />\r
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
        <Chip radius="rounded-1.5" text="텍스트" />\r
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
        <Chip radius="rounded-2" text="텍스트" />\r
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
        <Chip radius="rounded-3" text="텍스트" />\r
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
        <Chip radius="rounded-4" text="텍스트" />\r
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
        <Chip radius="rounded-5" text="텍스트" />\r
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
        <Chip radius="rounded-full" text="텍스트" />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다."
      }
    }
  }
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const De=["Default","Outline","Solid","OutlineWithIcon","SolidWithIcon","WithTrailingIcon","Sizes","ActiveState","AllStates","RadiusVariations"];export{z as ActiveState,D as AllStates,y as Default,g as Outline,v as OutlineWithIcon,C as RadiusVariations,I as Sizes,h as Solid,S as SolidWithIcon,j as WithTrailingIcon,De as __namedExportsOrder,ze as default};
