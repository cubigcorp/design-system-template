import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{C as e}from"./Chip-CbbUn4FF.js";import"./iframe-BDzNDkdP.js";import"./styled-components.browser.esm-BfvoXbNe.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./textColor-DLZeZODc.js";import"./borderColor-C_RHITEf.js";const Z={title:"Components/Chip",component:e,parameters:{layout:"centered",docs:{description:{component:"Chip은 태그, 필터, 상태 표시 등에 사용되는 작은 UI 요소입니다. Outline, Solid 두 가지 타입을 지원합니다."}}},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["outline","solid"]},size:{control:{type:"select"},options:["x-small","small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},radius:{control:{type:"select"},options:["rounded-1","rounded-1.5","rounded-2","rounded-3","rounded-4","rounded-5","rounded-full"]}}},s={render:i=>n.jsx(e,{...i,children:"기본 칩"}),args:{}},l={render:i=>n.jsx(e,{...i,children:"Outline Chip"}),args:{type:"outline"},parameters:{docs:{description:{story:"테두리만 있는 Outline 타입의 Chip입니다."}}}},r={render:i=>n.jsx(e,{...i,children:"Solid Chip"}),args:{type:"solid"},parameters:{docs:{description:{story:"배경이 채워진 Solid 타입의 Chip입니다."}}}},t={render:i=>n.jsx(e,{...i,children:"Outline with Icon"}),args:{type:"outline",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Outline 타입의 Chip입니다."}}}},p={render:i=>n.jsx(e,{...i,children:"Solid with Icon"}),args:{type:"solid",leadingIcon:"🏷️"},parameters:{docs:{description:{story:"아이콘이 포함된 Solid 타입의 Chip입니다."}}}},o={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsx(e,{type:"outline",trailingIcon:"✕",children:"Remove"}),n.jsx(e,{type:"solid",trailingIcon:"✕",children:"Close"})]}),parameters:{docs:{description:{story:"Trailing Icon이 포함된 Chip 예시입니다."}}}},a={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"X-Small"}),n.jsx(e,{size:"x-small",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Small"}),n.jsx(e,{size:"small",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Medium"}),n.jsx(e,{size:"medium",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Large"}),n.jsx(e,{size:"large",children:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"}}}},d={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Normal"}),n.jsx(e,{children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),n.jsx(e,{active:!0,children:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 활성/비활성 상태 비교"}}}},c={render:()=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Outline Type"}),n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),n.jsx(e,{type:"outline",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),n.jsx(e,{type:"outline",state:"hovered",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),n.jsx(e,{type:"outline",state:"pressed",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),n.jsx(e,{type:"outline",state:"focused",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),n.jsx(e,{type:"outline",disabled:!0,children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),n.jsx(e,{type:"outline",active:!0,children:"텍스트"})]})]})]}),n.jsxs("div",{children:[n.jsx("h3",{style:{margin:"0 0 16px 0",fontSize:"16px"},children:"Solid Type"}),n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Default"}),n.jsx(e,{type:"solid",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Hovered"}),n.jsx(e,{type:"solid",state:"hovered",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Pressed"}),n.jsx(e,{type:"solid",state:"pressed",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Focused"}),n.jsx(e,{type:"solid",state:"focused",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Disabled"}),n.jsx(e,{type:"solid",disabled:!0,children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Active"}),n.jsx(e,{type:"solid",active:!0,children:"텍스트"})]})]})]})]}),parameters:{docs:{description:{story:"Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)"}}}},x={render:()=>n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-1 (4px)"}),n.jsx(e,{radius:"rounded-1",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-1.5 (6px)"}),n.jsx(e,{radius:"rounded-1.5",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-2 (8px)"}),n.jsx(e,{radius:"rounded-2",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-3 (12px)"}),n.jsx(e,{radius:"rounded-3",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-4 (16px)"}),n.jsx(e,{radius:"rounded-4",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-5 (20px)"}),n.jsx(e,{radius:"rounded-5",children:"텍스트"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"rounded-full (9999px)"}),n.jsx(e,{radius:"rounded-full",children:"텍스트"})]})]}),parameters:{docs:{description:{story:"Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다."}}}};var y,m,u;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Chip {...args}>기본 칩</Chip>,
  args: {}
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var h,f,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var v,j,C;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(j=r.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var S,I,D;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(I=t.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var z,O,W;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(O=p.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var b,w,A;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Chip type="outline" trailingIcon="✕">
        Remove
      </Chip>
      <Chip type="solid" trailingIcon="✕">
        Close
      </Chip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Trailing Icon이 포함된 Chip 예시입니다."
      }
    }
  }
}`,...(A=(w=o.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var T,F,H;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>X-Small</span>
        <Chip size="x-small">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Small</span>
        <Chip size="small">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Medium</span>
        <Chip size="medium">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Large</span>
        <Chip size="large">텍스트</Chip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)"
      }
    }
  }
}`,...(H=(F=a.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var P,R,L;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Normal</span>
        <Chip>텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>Active</span>
        <Chip active>텍스트</Chip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 활성/비활성 상태 비교"
      }
    }
  }
}`,...(L=(R=d.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var M,X,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div>
        <h3 style={{
        margin: "0 0 16px 0",
        fontSize: "16px"
      }}>Outline Type</h3>
        <div style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Default</span>
            <Chip type="outline">텍스트</Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Hovered</span>
            <Chip type="outline" state="hovered">
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Pressed</span>
            <Chip type="outline" state="pressed">
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Focused</span>
            <Chip type="outline" state="focused">
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Disabled</span>
            <Chip type="outline" disabled>
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Active</span>
            <Chip type="outline" active>
              텍스트
            </Chip>
          </div>
        </div>
      </div>
      <div>
        <h3 style={{
        margin: "0 0 16px 0",
        fontSize: "16px"
      }}>Solid Type</h3>
        <div style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Default</span>
            <Chip type="solid">텍스트</Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Hovered</span>
            <Chip type="solid" state="hovered">
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Pressed</span>
            <Chip type="solid" state="pressed">
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Focused</span>
            <Chip type="solid" state="focused">
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Disabled</span>
            <Chip type="solid" disabled>
              텍스트
            </Chip>
          </div>
          <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center"
        }}>
            <span style={{
            fontSize: "12px",
            color: "#666"
          }}>Active</span>
            <Chip type="solid" active>
              텍스트
            </Chip>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)"
      }
    }
  }
}`,...(E=(X=c.parameters)==null?void 0:X.docs)==null?void 0:E.source}}};var N,V,_;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center",
    flexWrap: "wrap"
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>rounded-1 (4px)</span>
        <Chip radius="rounded-1">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>
          rounded-1.5 (6px)
        </span>
        <Chip radius="rounded-1.5">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>rounded-2 (8px)</span>
        <Chip radius="rounded-2">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>
          rounded-3 (12px)
        </span>
        <Chip radius="rounded-3">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>
          rounded-4 (16px)
        </span>
        <Chip radius="rounded-4">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>
          rounded-5 (20px)
        </span>
        <Chip radius="rounded-5">텍스트</Chip>
      </div>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      alignItems: "center"
    }}>
        <span style={{
        fontSize: "12px",
        color: "#666"
      }}>
          rounded-full (9999px)
        </span>
        <Chip radius="rounded-full">텍스트</Chip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Chip의 다양한 radius 값들을 보여주는 예시입니다. 기본값은 rounded-full입니다."
      }
    }
  }
}`,...(_=(V=x.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const $=["Default","Outline","Solid","OutlineWithIcon","SolidWithIcon","WithTrailingIcon","Sizes","ActiveState","AllStates","RadiusVariations"];export{d as ActiveState,c as AllStates,s as Default,l as Outline,t as OutlineWithIcon,x as RadiusVariations,a as Sizes,r as Solid,p as SolidWithIcon,o as WithTrailingIcon,$ as __namedExportsOrder,Z as default};
