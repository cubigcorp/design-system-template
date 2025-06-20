import{j as e}from"./jsx-runtime-DePt9igI.js";import{R as f}from"./iframe-BG01145R.js";import{f as c,l as o,d as oe}from"./fontWeight-nRzVP82e.js";import{c as r}from"./color-CMFzNX_O.js";import{r as pe}from"./radius-DaoU83SK.js";import{b as p,t as l}from"./borderColor-C1c8KEhD.js";const de=oe.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${pe["rounded-2"]};
  font-weight: ${c[500]};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:s="medium"})=>{switch(s){case"x-small":return o`
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

  ${({type:s="outline",state:x="default",active:t=!1,disabled:i=!1})=>{const d=(()=>{if(i)return{background:s==="solid"?r.gray[50]:"transparent",text:l.light["fg-neutral-disable"],border:s==="outline"?p.light["color-border-primary"]:"transparent"};if(t)return s==="solid"?{background:r.gray[950],text:r.common[100],border:"transparent"}:{background:r.gray[950]+"1F",text:l.light["fg-neutral-alternative"],border:p.light["color-border-focused"]};if(s==="solid")switch(x){case"hovered":return{background:r.gray[100],text:l.light["fg-neutral-alternative"],border:"transparent"};case"pressed":return{background:r.gray[200],text:l.light["fg-neutral-alternative"],border:"transparent"};case"focused":return{background:r.gray[950],text:r.common[100],border:"transparent"};default:return{background:r.gray[50],text:l.light["fg-neutral-alternative"],border:"transparent"}}else switch(x){case"hovered":return{background:r.gray[950]+"0D",text:l.light["fg-neutral-alternative"],border:p.light["color-border-primary"]};case"pressed":return{background:r.gray[950]+"14",text:l.light["fg-neutral-alternative"],border:p.light["color-border-primary"]};case"focused":return{background:r.gray[950]+"1F",text:l.light["fg-neutral-alternative"],border:p.light["color-border-focused"]};default:return{background:"transparent",text:l.light["fg-neutral-alternative"],border:p.light["color-border-primary"]}}})();return o`
      background-color: ${d.background};
      color: ${d.text};
      border: 1px solid ${d.border};
    `}}

  ${({disabled:s})=>s&&o`
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
`,n=({type:s="outline",size:x="medium",state:t="default",disabled:i=!1,active:C=!1,text:d,leadingIcon:u,trailingIcon:m,onClick:Z,className:ee})=>{const[ne,a]=f.useState(t);f.useEffect(()=>{a(t)},[t]);const te=()=>{!i&&t==="default"&&a("hovered")},re=()=>{i||a(t)},se=()=>{!i&&t==="default"&&a("pressed")},ie=()=>{!i&&t==="default"&&a("hovered")},le=()=>{!i&&t==="default"&&a("focused")},ae=()=>{i||a(t)};return e.jsxs(de,{type:s,size:x,state:t!=="default"?t:ne,disabled:i,active:C,className:ee,onClick:Z,onMouseEnter:te,onMouseLeave:re,onMouseDown:se,onMouseUp:ie,onFocus:le,onBlur:ae,tabIndex:i?-1:0,children:[u&&e.jsx("span",{className:"icon",children:f.isValidElement(u)?u:String(u)}),e.jsx("span",{children:d}),m&&e.jsx("span",{className:"icon",children:f.isValidElement(m)?m:String(m)})]})};n.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{type:{required:!1,tsType:{name:"union",raw:'"outline" | "solid"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"solid"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!0,tsType:{name:"string"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ge={title:"Components/Chip",component:n,parameters:{layout:"centered",docs:{description:{component:"Chip은 태그, 필터, 상태 표시 등에 사용되는 작은 UI 요소입니다. Outline, Solid 두 가지 타입을 지원합니다."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["outline","solid"]},size:{control:{type:"select"},options:["x-small","small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},text:{control:{type:"text"}}},args:{text:"텍스트"}},y={args:{text:"기본 칩"}},g={args:{type:"outline",text:"Outline Chip"},parameters:{docs:{description:{story:"테두리만 있는 Outline 타입의 Chip입니다."}}}},h={args:{type:"solid",text:"Solid Chip"},parameters:{docs:{description:{story:"배경이 채워진 Solid 타입의 Chip입니다."}}}},v={args:{type:"outline",text:"Outline with Icon",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Outline 타입의 Chip입니다."}}}},S={args:{type:"solid",text:"Solid with Icon",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Solid 타입의 Chip입니다."}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{type:"outline",text:"Remove",trailingIcon:"✕"}),e.jsx(n,{type:"solid",text:"Close",trailingIcon:"✕"})]}),parameters:{docs:{description:{story:"Trailing Icon이 포함된 Chip 예시입니다."}}}},I={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"X-Small"}),e.jsx(n,{size:"x-small",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Small"}),e.jsx(n,{size:"small",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Medium"}),e.jsx(n,{size:"medium",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Large"}),e.jsx(n,{size:"large",text:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"}}}},z={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Normal"}),e.jsx(n,{text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{active:!0,text:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 활성/비활성 상태 비교"}}}},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Outline Type"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),e.jsx(n,{type:"outline",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),e.jsx(n,{type:"outline",state:"hovered",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),e.jsx(n,{type:"outline",state:"pressed",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),e.jsx(n,{type:"outline",state:"focused",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),e.jsx(n,{type:"outline",disabled:!0,text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{type:"outline",active:!0,text:"텍스트"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Solid Type"}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),e.jsx(n,{type:"solid",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),e.jsx(n,{type:"solid",state:"hovered",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),e.jsx(n,{type:"solid",state:"pressed",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),e.jsx(n,{type:"solid",state:"focused",text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),e.jsx(n,{type:"solid",disabled:!0,text:"텍스트"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),e.jsx(n,{type:"solid",active:!0,text:"텍스트"})]})]})]})]}),parameters:{docs:{description:{story:"Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)"}}}};var b,w,T;y.parameters={...y.parameters,docs:{...(b=y.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    text: "기본 칩"
  }
}`,...(T=(w=y.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var O,k,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(k=g.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var W,M,$;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(M=h.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var q,A,F;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(F=(A=v.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var N,E,V;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(E=S.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var B,H,L;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(L=(H=j.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var P,X,_;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(_=(X=I.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var U,G,J;z.parameters={...z.parameters,docs:{...(U=z.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(G=z.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Y=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const he=["Default","Outline","Solid","OutlineWithIcon","SolidWithIcon","WithTrailingIcon","Sizes","ActiveState","AllStates"];export{z as ActiveState,D as AllStates,y as Default,g as Outline,v as OutlineWithIcon,I as Sizes,h as Solid,S as SolidWithIcon,j as WithTrailingIcon,he as __namedExportsOrder,ge as default};
