import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as h,O as C}from"./SolidButton-CV4rMjoO.js";import{r as x}from"./iframe-6QM99Qn2.js";import{r as Z}from"./index-Dky0HZs1.js";import{c as m,p as G}from"./styled-components.browser.esm-CRgZ7Zfy.js";import{c as y}from"./color-m2U5piog.js";import{r as O}from"./radius-DaoU83SK.js";import{s as f}from"./spacing-tE1IiUFl.js";import{t as W}from"./typography-CHdGJV44.js";import"./borderColor-CzkI5wcR.js";import"./brandColor-Bb8P60S1.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./negativeColor-fk0-w6JK.js";import"./textColor-G8dwupNW.js";import"./types-BtG8iaxF.js";import"./preload-helper-eJNa_G2e.js";import"./index-BHK-Us_l.js";import"./lineHeight-aJXO3HIm.js";const J=G`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,p=({children:n,text:u,description:g,content:T,contentWidth:H=224,contentHeight:q=126,placement:b="bottom-center",offset:l=4,className:M,defaultVisible:S=!1})=>{const[V,B]=x.useState(S),[P,E]=x.useState({top:0,left:0}),[F,a]=x.useState("top"),k=x.useRef(null),w=x.useRef(null),A=()=>{if(!k.current||!w.current)return;const e=k.current.getBoundingClientRect(),i=w.current.getBoundingClientRect(),c=8;let r=0,s=0;switch(b){case"top-left":r=e.top-i.height-l-c,s=e.left,a("bottom");break;case"top-center":r=e.top-i.height-l-c,s=e.left+(e.width-i.width)/2,a("bottom");break;case"top-right":r=e.top-i.height-l-c,s=e.right-i.width,a("bottom");break;case"bottom-left":r=e.bottom+l+c,s=e.left,a("top");break;case"bottom-center":r=e.bottom+l+c,s=e.left+(e.width-i.width)/2,a("top");break;case"bottom-right":r=e.bottom+l+c,s=e.right-i.width,a("top");break;case"left-top":r=e.top,s=e.left-i.width-l-c,a("right");break;case"left-center":r=e.top+(e.height-i.height)/2,s=e.left-i.width-l-c,a("right");break;case"left-bottom":r=e.bottom-i.height,s=e.left-i.width-l-c,a("right");break;case"right-top":r=e.top,s=e.right+l+c,a("left");break;case"right-center":r=e.top+(e.height-i.height)/2,s=e.right+l+c,a("left");break;case"right-bottom":r=e.bottom-i.height,s=e.right+l+c,a("left");break}E({top:r,left:s})};x.useEffect(()=>{V&&A()},[V,b,l]);const N=()=>{B(!0)},_=()=>{S||B(!1)},X=()=>{switch(b){case"top-left":case"bottom-left":return"24px";case"top-right":case"bottom-right":return"calc(100% - 24px)";default:return"50%"}},Y=()=>{switch(b){case"left-top":case"right-top":return"24px";case"left-bottom":case"right-bottom":return"calc(100% - 24px)";default:return"50%"}};return t.jsxs(K,{ref:k,onMouseEnter:N,onMouseLeave:_,className:M,children:[n,V&&Z.createPortal(t.jsxs(Q,{ref:w,style:{top:P.top,left:P.left,width:T?H:void 0},children:[t.jsx(ot,{$position:F,$left:X(),$top:Y()}),T&&t.jsx(U,{style:{height:q},children:T}),(u||g)&&t.jsxs(tt,{children:[u&&t.jsx(et,{children:u}),g&&t.jsx(nt,{children:g})]})]}),document.body)]})},K=m.div`
  position: relative;
`,Q=m.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${f.gap["gap-2"]};
  padding: ${f.gap["gap-2"]} ${f.gap["gap-2"]} ${f.gap["gap-2.5"]}
    ${f.gap["gap-2"]};
  border-radius: ${O["rounded-2"]};
  background-color: ${y.gray[990]};
  z-index: 9999;
  animation: ${J} 0.25s ease-in-out;
  pointer-events: none;
`,U=m.div`
  width: 100%;
  border-radius: ${O["rounded-1"]};
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
`;const tt=m.div`
  display: flex;
  flex-direction: column;
  gap: ${f.gap["gap-1"]};
`,et=m.span`
  ${W(void 0,"body2","medium")}
  color: ${y.common[100]};
  word-break: break-word;
`,nt=m.span`
  ${W(void 0,"caption2","regular")}
  color: ${y.gray[700]};
  word-break: break-word;
`,ot=m.div`
  position: absolute;
  background-color: ${y.gray[990]};

  ${({$position:n,$left:u,$top:g})=>{switch(n){case"top":return`
          width: 16px;
          height: 8px;
          top: -7px;
          left: ${u};
          transform: translateX(-50%);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        `;case"bottom":return`
          width: 16px;
          height: 8px;
          bottom: -7px;
          left: ${u};
          transform: translateX(-50%);
          clip-path: polygon(50% 100%, 0% 0%, 100% 0%);
        `;case"left":return`
          width: 8px;
          height: 16px;
          left: -7px;
          top: ${g};
          transform: translateY(-50%);
          clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
        `;case"right":return`
          width: 8px;
          height: 16px;
          right: -7px;
          top: ${g};
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
| 'right-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"}]},description:"",defaultValue:{value:"'bottom-center'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const d=()=>t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f0f0f2",borderRadius:4},children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[t.jsx("path",{d:"M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",stroke:"#8f9298",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z",stroke:"#8f9298",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M21 15L16 10L5 21",stroke:"#8f9298",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),Vt={title:"Components/Feedback/VisualTooltip",component:p,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"텍스트와 이미지를 함께 제공하여 복잡한 정보를 직관적으로 이해할 수 있도록 돕는 Visual Tooltip 컴포넌트입니다."}}}},o={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},v={parameters:{layout:"centered"},render:n=>t.jsx("div",{style:{padding:200},children:t.jsx(p,{...n,children:t.jsx(h,{children:"Hover me"})})}),args:{text:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",content:t.jsx(d,{}),placement:"bottom-center"},argTypes:{placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"]},text:{control:"text"},description:{control:"text"},contentWidth:{control:"number"},contentHeight:{control:"number"},offset:{control:"number"}}},j={parameters:{controls:{disable:!0}},render:()=>t.jsxs("div",{style:o.page,children:[t.jsxs("div",{style:o.header,children:[t.jsx("h1",{style:o.title,children:"Visual Tooltip"}),t.jsxs("p",{style:o.desc,children:["텍스트와 이미지/콘텐츠를 함께 표시하는 확장형 툴팁입니다.",t.jsx("br",{}),"12가지 placement를 지원하며, 콘텐츠 영역의 크기를 커스텀할 수 있습니다.",t.jsx("br",{}),"버튼에 마우스를 올려 확인하세요."]})]}),t.jsx("p",{style:o.sectionTitle,children:"Content Types"}),t.jsx("div",{style:o.card,children:t.jsxs("div",{style:{display:"flex",gap:24,padding:"80px 0"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(p,{text:"이미지 포함",description:"이미지와 텍스트가 함께 표시됩니다.",content:t.jsx(d,{}),placement:"bottom-center",children:t.jsx(h,{children:"With Content"})}),t.jsx("span",{style:o.label,children:"with content"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(p,{text:"텍스트만",description:"콘텐츠 영역 없이 텍스트만 표시됩니다.",placement:"bottom-center",children:t.jsx(C,{variant:"secondary",children:"Text Only"})}),t.jsx("span",{style:o.label,children:"text only"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[t.jsx(p,{text:"항상 보임",description:"defaultVisible로 항상 표시됩니다.",content:t.jsx(d,{}),placement:"bottom-center",defaultVisible:!0,children:t.jsx(h,{variant:"brand",children:"Always Visible"})}),t.jsx("span",{style:o.label,children:"defaultVisible"})]})]})}),t.jsx("p",{style:o.sectionTitle,children:"Placements — Top / Bottom"}),t.jsx("div",{style:o.card,children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:80,padding:"100px 0"},children:[t.jsx("div",{style:{display:"flex",gap:24},children:["top-left","top-center","top-right"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(h,{variant:"secondary",size:"small",children:n})},n))}),t.jsx("div",{style:{display:"flex",gap:24},children:["bottom-left","bottom-center","bottom-right"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(h,{variant:"secondary",size:"small",children:n})},n))})]})}),t.jsx("p",{style:o.sectionTitle,children:"Placements — Left / Right"}),t.jsx("div",{style:o.card,children:t.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:200,padding:"80px 0"},children:[t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["left-top","left-center","left-bottom"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(h,{variant:"secondary",size:"small",children:n})},n))}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:["right-top","right-center","right-bottom"].map(n=>t.jsx(p,{text:n,description:"placement 확인",content:t.jsx(d,{}),placement:n,children:t.jsx(h,{variant:"secondary",size:"small",children:n})},n))})]})}),t.jsx("p",{style:o.sectionTitle,children:"Custom Size"}),t.jsx("div",{style:o.card,children:t.jsxs("div",{style:{display:"flex",gap:24,padding:"80px 0"},children:[t.jsx(p,{text:"기본 사이즈",description:"240 x 126",content:t.jsx(d,{}),placement:"bottom-center",children:t.jsx(C,{variant:"secondary",children:"Default"})}),t.jsx(p,{text:"커스텀 사이즈",description:"284 x 180",content:t.jsx(d,{}),contentWidth:284,contentHeight:180,placement:"bottom-center",children:t.jsx(C,{variant:"secondary",children:"284 x 180"})})]})})]})};var $,D,z;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(D=v.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var R,I,L;j.parameters={...j.parameters,docs:{...(R=j.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(I=j.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const kt=["Playground","Overview"];export{j as Overview,v as Playground,kt as __namedExportsOrder,Vt as default};
