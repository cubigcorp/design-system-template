import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as u,O as S}from"./SolidButton-DQY_Qkek.js";import{r as h}from"./iframe-BQlxtUxC.js";import{r as G}from"./index-C7tWk-mQ.js";import{c as m,p as J}from"./styled-components.browser.esm-BsJdvhJY.js";import{c as y}from"./color-CZjzAmeO.js";import{r as Q}from"./radius-DaoU83SK.js";import{s as g}from"./spacing-tE1IiUFl.js";import{t as q}from"./typography-CIxJpf_z.js";import"./borderColor-DnXd17KV.js";import"./brandColor-DIMtCTH6.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./negativeColor-BkNdSW00.js";import"./textColor-D-yqVS6r.js";import"./types-I2UowK_C.js";import"./preload-helper-eJNa_G2e.js";import"./index-fJVWb4je.js";import"./lineHeight-aJXO3HIm.js";const U=J`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,p=({children:n,text:x,description:f,content:T,contentWidth:M=224,contentHeight:E=126,placement:b="bottom-center",offset:l=4,className:F,defaultVisible:B=!1})=>{const[V,P]=h.useState(B),[$,A]=h.useState({top:0,left:0}),[N,D]=h.useState(!1),[_,a]=h.useState("top"),w=h.useRef(null),k=h.useRef(null),K=()=>{if(!w.current||!k.current)return;const e=w.current.getBoundingClientRect(),o=k.current.getBoundingClientRect(),c=8;let r=0,s=0;switch(b){case"top-left":r=e.top-o.height-l-c,s=e.left,a("bottom");break;case"top-center":r=e.top-o.height-l-c,s=e.left+(e.width-o.width)/2,a("bottom");break;case"top-right":r=e.top-o.height-l-c,s=e.right-o.width,a("bottom");break;case"bottom-left":r=e.bottom+l+c,s=e.left,a("top");break;case"bottom-center":r=e.bottom+l+c,s=e.left+(e.width-o.width)/2,a("top");break;case"bottom-right":r=e.bottom+l+c,s=e.right-o.width,a("top");break;case"left-top":r=e.top,s=e.left-o.width-l-c,a("right");break;case"left-center":r=e.top+(e.height-o.height)/2,s=e.left-o.width-l-c,a("right");break;case"left-bottom":r=e.bottom-o.height,s=e.left-o.width-l-c,a("right");break;case"right-top":r=e.top,s=e.right+l+c,a("left");break;case"right-center":r=e.top+(e.height-o.height)/2,s=e.right+l+c,a("left");break;case"right-bottom":r=e.bottom-o.height,s=e.right+l+c,a("left");break;default:r=e.bottom+l+c,s=e.left+(e.width-o.width)/2,a("top")}A({top:r,left:s}),D(!0)};h.useLayoutEffect(()=>{V&&K()},[V,b,l]);const z=()=>{P(!0)},C=()=>{B||(P(!1),D(!1))},X=e=>{e.key==="Escape"&&C()},Y=()=>{switch(b){case"top-left":case"bottom-left":return"24px";case"top-right":case"bottom-right":return"calc(100% - 24px)";default:return"50%"}},Z=()=>{switch(b){case"left-top":case"right-top":return"24px";case"left-bottom":case"right-bottom":return"calc(100% - 24px)";default:return"50%"}};return t.jsxs(tt,{ref:w,onMouseEnter:z,onMouseLeave:C,onFocusCapture:z,onBlurCapture:C,onKeyDown:X,className:F,children:[n,V&&G.createPortal(t.jsxs(et,{ref:k,style:{top:$.top,left:$.left,width:T?M:void 0,visibility:N?"visible":"hidden"},children:[t.jsx(rt,{$position:_,$left:Y(),$top:Z()}),T&&t.jsx(nt,{style:{height:E},children:T}),(x||f)&&t.jsxs(ot,{children:[x&&t.jsx(it,{children:x}),f&&t.jsx(lt,{children:f})]})]}),document.body)]})},tt=m.div`
  position: relative;
`,et=m.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${g.gap["gap-2"]};
  padding: ${g.gap["gap-1"]} ${g.gap["gap-1"]} ${g.gap["gap-2.5"]}
    ${g.gap["gap-1"]};
  border-radius: 10px;
  background-color: ${y.gray[990]};
  z-index: 9999;
  animation: ${U} 0.25s ease-in-out;
  pointer-events: none;
`,nt=m.div`
  width: 100%;
  border-radius: ${Q["rounded-2"]};
  overflow: hidden;
  background-color: ${y.gray[200]};
  display: flex;
  align-items: center;
  justify-content: center;
`;m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const ot=m.div`
  display: flex;
  flex-direction: column;
  gap: ${g.gap["gap-1"]};
  padding: 0 ${g.gap["gap-1"]};
`,it=m.span`
  ${q(void 0,"body2","medium")}
  color: ${y.common[100]};
  word-break: break-word;
`,lt=m.span`
  ${q(void 0,"body1","regular")}
  color: ${y.gray[600]};
  word-break: break-word;
`,rt=m.div`
  position: absolute;
  background-color: ${y.gray[990]};

  ${({$position:n,$left:x,$top:f})=>{switch(n){case"top":return`
          width: 16px;
          height: 8px;
          top: -7px;
          left: ${x};
          transform: translateX(-50%);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        `;case"bottom":return`
          width: 16px;
          height: 8px;
          bottom: -7px;
          left: ${x};
          transform: translateX(-50%);
          clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
        `;case"left":return`
          width: 8px;
          height: 16px;
          left: -7px;
          top: ${f};
          transform: translateY(-50%);
          clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
        `;case"right":return`
          width: 8px;
          height: 16px;
          right: -7px;
          top: ${f};
          transform: translateY(-50%);
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        `}}}
`;p.__docgenInfo={description:"",methods:[],displayName:"VisualTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},contentWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"224",computed:!1}},contentHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"126",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-left'
| 'top-center'
| 'top-right'
| 'bottom-left'
| 'bottom-center'
| 'bottom-right'
| 'left'
| 'left-top'
| 'left-center'
| 'left-bottom'
| 'right'
| 'right-top'
| 'right-center'
| 'right-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"}]},description:"",defaultValue:{value:"'bottom-center'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const d=()=>t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f2",borderRadius:4},children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",stroke:"#8f9298",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z",stroke:"#8f9298",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M21 15L16 10L5 21",stroke:"#8f9298",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Ct={title:"Components/Feedback/VisualTooltip",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"텍스트와 이미지를 함께 제공하여 복잡한 정보를 직관적으로 이해할 수 있도록 돕는 Visual Tooltip 컴포넌트입니다."}}}},i={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},v={parameters:{layout:"centered"},render:n=>t.jsx("div",{style:{padding:200},children:t.jsx(p,{...n,children:t.jsx(u,{children:"Hover me"})})}),args:{text:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",content:t.jsx(d,{}),placement:"bottom-center"},argTypes:{placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"]},text:{control:"text"},description:{control:"text"},contentWidth:{control:"number"},contentHeight:{control:"number"},offset:{control:"number"}}},j={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:i.page,children:[t.jsxs("div",{style:i.header,children:[t.jsx("h1",{style:i.title,children:"Visual Tooltip"}),t.jsxs("p",{style:i.desc,children:["텍스트와 이미지/콘텐츠를 함께 표시하는 확장형 툴팁입니다.",t.jsx("br",{}),"12가지 placement를 지원하며, 콘텐츠 영역의 크기를 커스텀할 수 있습니다.",t.jsx("br",{}),"버튼에 마우스를 올려 확인하세요."]})]}),t.jsx("p",{style:i.sectionTitle,children:"Content Types"}),t.jsx("div",{style:i.card,children:t.jsxs("div",{style:{display:"flex",gap:24,padding:"80px 0"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(p,{text:"이미지 포함",description:"이미지와 텍스트가 함께 표시됩니다.",content:t.jsx(d,{}),placement:"bottom-center",children:t.jsx(u,{children:"With Content"})}),t.jsx("span",{style:i.label,children:"with content"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(p,{text:"텍스트만",description:"콘텐츠 영역 없이 텍스트만 표시됩니다.",placement:"bottom-center",children:t.jsx(S,{variant:"secondary",children:"Text Only"})}),t.jsx("span",{style:i.label,children:"text only"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(p,{text:"항상 보임",description:"defaultVisible로 항상 표시됩니다.",content:t.jsx(d,{}),placement:"bottom-center",defaultVisible:!0,children:t.jsx(u,{variant:"brand",children:"Always Visible"})}),t.jsx("span",{style:i.label,children:"defaultVisible"})]})]})}),t.jsx("p",{style:i.sectionTitle,children:"Placements — Top / Bottom"}),t.jsx("div",{style:i.card,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:80,padding:"100px 0"},children:[t.jsx("div",{style:{display:"flex",gap:24},children:["top-left","top-center","top-right"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(u,{variant:"secondary",size:"small",children:n})},n))}),t.jsx("div",{style:{display:"flex",gap:24},children:["bottom-left","bottom-center","bottom-right"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(u,{variant:"secondary",size:"small",children:n})},n))})]})}),t.jsx("p",{style:i.sectionTitle,children:"Placements — Left / Right"}),t.jsx("div",{style:i.card,children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:200,padding:"80px 0"},children:[t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["left-top","left-center","left-bottom"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(u,{variant:"secondary",size:"small",children:n})},n))}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["right-top","right-center","right-bottom"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(u,{variant:"secondary",size:"small",children:n})},n))})]})}),t.jsx("p",{style:i.sectionTitle,children:"Custom Size"}),t.jsx("div",{style:i.card,children:t.jsxs("div",{style:{display:"flex",gap:24,padding:"80px 0"},children:[t.jsx(p,{text:"기본 사이즈",description:"240 x 126",content:t.jsx(d,{}),placement:"bottom-center",children:t.jsx(S,{variant:"secondary",children:"Default"})}),t.jsx(p,{text:"커스텀 사이즈",description:"284 x 180",content:t.jsx(d,{}),contentWidth:284,contentHeight:180,placement:"bottom-center",children:t.jsx(S,{variant:"secondary",children:"284 x 180"})})]})})]})};var R,I,L;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: args => <div style={{
    padding: 200
  }}>
      <VisualTooltip {...args}>
        <SolidButton>Hover me</SolidButton>
      </VisualTooltip>
    </div>,
  args: {
    text: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    content: <PlaceholderContent />,
    placement: 'bottom-center'
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'left-top', 'left-center', 'left-bottom', 'right-top', 'right-center', 'right-bottom']
    },
    text: {
      control: 'text'
    },
    description: {
      control: 'text'
    },
    contentWidth: {
      control: 'number'
    },
    contentHeight: {
      control: 'number'
    },
    offset: {
      control: 'number'
    }
  }
}`,...(L=(I=v.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,W,H;j.parameters={...j.parameters,docs:{...(O=j.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Visual Tooltip</h1>
        <p style={s.desc}>
          텍스트와 이미지/콘텐츠를 함께 표시하는 확장형 툴팁입니다.
          <br />
          12가지 placement를 지원하며, 콘텐츠 영역의 크기를 커스텀할 수 있습니다.
          <br />
          버튼에 마우스를 올려 확인하세요.
        </p>
      </div>

      <p style={s.sectionTitle}>Content Types</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        padding: '80px 0'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <VisualTooltip text='이미지 포함' description='이미지와 텍스트가 함께 표시됩니다.' content={<PlaceholderContent />} placement='bottom-center'>
              <SolidButton>With Content</SolidButton>
            </VisualTooltip>
            <span style={s.label}>with content</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <VisualTooltip text='텍스트만' description='콘텐츠 영역 없이 텍스트만 표시됩니다.' placement='bottom-center'>
              <OutlineButton variant='secondary'>Text Only</OutlineButton>
            </VisualTooltip>
            <span style={s.label}>text only</span>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
            <VisualTooltip text='항상 보임' description='defaultVisible로 항상 표시됩니다.' content={<PlaceholderContent />} placement='bottom-center' defaultVisible>
              <SolidButton variant='brand'>Always Visible</SolidButton>
            </VisualTooltip>
            <span style={s.label}>defaultVisible</span>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Placements — Top / Bottom</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 80,
        padding: '100px 0'
      }}>
          <div style={{
          display: 'flex',
          gap: 24
        }}>
            {(['top-left', 'top-center', 'top-right'] as const).map(p => <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>
                  {p}
                </SolidButton>
              </VisualTooltip>)}
          </div>
          <div style={{
          display: 'flex',
          gap: 24
        }}>
            {(['bottom-left', 'bottom-center', 'bottom-right'] as const).map(p => <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>
                  {p}
                </SolidButton>
              </VisualTooltip>)}
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Placements — Left / Right</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 200,
        padding: '80px 0'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            {(['left-top', 'left-center', 'left-bottom'] as const).map(p => <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>
                  {p}
                </SolidButton>
              </VisualTooltip>)}
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            {(['right-top', 'right-center', 'right-bottom'] as const).map(p => <VisualTooltip key={p} text={p} description='placement 확인' content={<PlaceholderContent />} placement={p}>
                <SolidButton variant='secondary' size='small'>
                  {p}
                </SolidButton>
              </VisualTooltip>)}
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Custom Size</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 24,
        padding: '80px 0'
      }}>
          <VisualTooltip text='기본 사이즈' description='240 x 126' content={<PlaceholderContent />} placement='bottom-center'>
            <OutlineButton variant='secondary'>Default</OutlineButton>
          </VisualTooltip>
          <VisualTooltip text='커스텀 사이즈' description='284 x 180' content={<PlaceholderContent />} contentWidth={284} contentHeight={180} placement='bottom-center'>
            <OutlineButton variant='secondary'>284 x 180</OutlineButton>
          </VisualTooltip>
        </div>
      </div>
    </div>
}`,...(H=(W=j.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const St=["Playground","Overview"];export{j as Overview,v as Playground,St as __namedExportsOrder,Ct as default};
