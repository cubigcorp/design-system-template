import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{S as n}from"./SolidButton-D1SVUeYo.js";import{r as m}from"./iframe-D4fn7yV1.js";import{r as ct}from"./index-CBWCOHxf.js";import{d,m as at}from"./styled-components.browser.esm-kr1dGAPk.js";import{c as x}from"./color-CiwAFuFb.js";import{r as J}from"./radius-DaoU83SK.js";import{s as h}from"./spacing-tE1IiUFl.js";import{t as K}from"./typography-CHdGJV44.js";import"./borderColor-C_RHITEf.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./textColor-DLZeZODc.js";import"./Spinner-DQZNpWi0.js";import"./preload-helper-eJNa_G2e.js";import"./index-BNvNhXiF.js";import"./lineHeight-aJXO3HIm.js";const pt=at`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,o=({children:u,text:f,description:g,content:k,contentWidth:Q=224,contentHeight:U=126,placement:b="bottom-center",offset:l=4,className:tt,defaultVisible:L=!1})=>{const[C,R]=m.useState(L),[P,et]=m.useState({top:0,left:0}),[ot,a]=m.useState("top"),S=m.useRef(null),w=m.useRef(null),nt=()=>{if(!S.current||!w.current)return;const e=S.current.getBoundingClientRect(),r=w.current.getBoundingClientRect(),p=8;let s=0,c=0;switch(b){case"top-left":s=e.top-r.height-l-p,c=e.left,a("bottom");break;case"top-center":s=e.top-r.height-l-p,c=e.left+(e.width-r.width)/2,a("bottom");break;case"top-right":s=e.top-r.height-l-p,c=e.right-r.width,a("bottom");break;case"bottom-left":s=e.bottom+l+p,c=e.left,a("top");break;case"bottom-center":s=e.bottom+l+p,c=e.left+(e.width-r.width)/2,a("top");break;case"bottom-right":s=e.bottom+l+p,c=e.right-r.width,a("top");break;case"left-top":s=e.top,c=e.left-r.width-l-p,a("right");break;case"left-center":s=e.top+(e.height-r.height)/2,c=e.left-r.width-l-p,a("right");break;case"left-bottom":s=e.bottom-r.height,c=e.left-r.width-l-p,a("right");break;case"right-top":s=e.top,c=e.right+l+p,a("left");break;case"right-center":s=e.top+(e.height-r.height)/2,c=e.right+l+p,a("left");break;case"right-bottom":s=e.bottom-r.height,c=e.right+l+p,a("left");break}et({top:s,left:c})};m.useEffect(()=>{C&&nt()},[C,b,l]);const it=()=>{R(!0)},rt=()=>{L||R(!1)},lt=()=>{switch(b){case"top-left":case"bottom-left":return"24px";case"top-right":case"bottom-right":return"calc(100% - 24px)";default:return"50%"}},st=()=>{switch(b){case"left-top":case"right-top":return"24px";case"left-bottom":case"right-bottom":return"calc(100% - 24px)";default:return"50%"}};return t.jsxs(dt,{ref:S,onMouseEnter:it,onMouseLeave:rt,className:tt,children:[u,C&&ct.createPortal(t.jsxs(mt,{ref:w,style:{top:P.top,left:P.left},children:[t.jsx(ft,{$position:ot,$left:lt(),$top:st()}),k&&t.jsx(ht,{style:{width:Q,height:U},children:k}),t.jsxs(ut,{children:[t.jsx(gt,{children:f}),g&&t.jsx(xt,{children:g})]})]}),document.body)]})},dt=d.div`
  position: relative;
  display: inline-flex;
`,mt=d.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${h.gap["gap-2"]};
  padding: ${h.gap["gap-2"]} ${h.gap["gap-2"]} ${h.gap["gap-2.5"]}
    ${h.gap["gap-2"]};
  border-radius: ${J["rounded-2"]};
  background-color: ${x.gray[990]};
  z-index: 9999;
  animation: ${pt} 0.25s ease-in-out;
  pointer-events: none;
`,ht=d.div`
  border-radius: ${J["rounded-1"]};
  overflow: hidden;
  background-color: ${x.gray[200]};
  display: flex;
  align-items: center;
  justify-content: center;
`;d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;d.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;const ut=d.div`
  display: flex;
  flex-direction: column;
  gap: ${h.gap["gap-1"]};
`,gt=d.span`
  ${K(void 0,"body2","medium")}
  color: ${x.common[100]};
  word-break: break-word;
`,xt=d.span`
  ${K(void 0,"caption2","regular")}
  color: ${x.gray[800]};
  word-break: break-word;
`,ft=d.div`
  position: absolute;
  background-color: ${x.gray[990]};

  ${({$position:u,$left:f,$top:g})=>{switch(u){case"top":return`
          width: 16px;
          height: 8px;
          top: -7px;
          left: ${f};
          transform: translateX(-50%);
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        `;case"bottom":return`
          width: 16px;
          height: 8px;
          bottom: -7px;
          left: ${f};
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
`;o.__docgenInfo={description:"",methods:[],displayName:"VisualTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},contentWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"224",computed:!1}},contentHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"126",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| 'top-left'
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
| 'right-bottom'`,elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-center'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'left'"},{name:"literal",value:"'left-top'"},{name:"literal",value:"'left-center'"},{name:"literal",value:"'left-bottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'right-top'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'right-bottom'"}]},description:"",defaultValue:{value:"'bottom-center'",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Ht={title:"Components/VisualTooltip",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Visual Tooltip은 아이콘, 버튼, 텍스트 등 인터페이스 요소에 마우스를 오버하거나 포커스했을 때 텍스트와 이미지를 함께 제공하여, 복잡하거나 추상적인 정보를 보다 직관적으로 이해할 수 있도록 돕는 컴포넌트입니다."}}},argTypes:{placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right","left-top","left-center","left-bottom","right-top","right-center","right-bottom"],description:"툴팁이 표시되는 위치를 설정합니다."},text:{control:"text",description:"툴팁에 표시될 메인 텍스트입니다."},description:{control:"text",description:"툴팁에 표시될 설명 텍스트입니다."},contentWidth:{control:"number",description:"콘텐츠 영역의 너비(px)입니다."},contentHeight:{control:"number",description:"콘텐츠 영역의 높이(px)입니다."},offset:{control:"number",description:"트리거 요소와 툴팁 사이의 간격(px)입니다."}}},i=()=>t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#E5E5E5"},children:t.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",stroke:"#9E9E9E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z",stroke:"#9E9E9E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M21 15L16 10L5 21",stroke:"#9E9E9E",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),j={render:u=>t.jsx(o,{...u,children:t.jsx(n,{children:"Hover me"})}),args:{text:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",content:t.jsx(i,{}),placement:"bottom-center"}},y={render:()=>t.jsx(o,{text:"이미지 툴팁",description:"이미지가 포함된 툴팁입니다.",content:t.jsx("img",{src:"https://via.placeholder.com/240x126",alt:"placeholder",style:{width:"100%",height:"100%",objectFit:"cover"}}),placement:"bottom-center",children:t.jsx(n,{children:"이미지 툴팁"})}),parameters:{docs:{description:{story:"이미지 콘텐츠가 포함된 Visual Tooltip입니다."}}}},T={render:()=>t.jsx(o,{text:"텍스트만 있는 툴팁",description:"콘텐츠 영역 없이 텍스트만 표시됩니다.",placement:"bottom-center",children:t.jsx(n,{children:"텍스트만"})}),parameters:{docs:{description:{story:"콘텐츠 영역 없이 텍스트와 설명만 표시되는 Visual Tooltip입니다."}}}},v={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"120px",padding:"200px"},children:[t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(o,{text:"Top Left",description:"상단 왼쪽 정렬",content:t.jsx(i,{}),placement:"top-left",children:t.jsx(n,{children:"Top Left"})}),t.jsx(o,{text:"Top Center",description:"상단 중앙 정렬",content:t.jsx(i,{}),placement:"top-center",children:t.jsx(n,{children:"Top Center"})}),t.jsx(o,{text:"Top Right",description:"상단 오른쪽 정렬",content:t.jsx(i,{}),placement:"top-right",children:t.jsx(n,{children:"Top Right"})})]}),t.jsxs("div",{style:{display:"flex",gap:"300px"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsx(o,{text:"Left Top",description:"왼쪽 상단 정렬",content:t.jsx(i,{}),placement:"left-top",children:t.jsx(n,{children:"Left Top"})}),t.jsx(o,{text:"Left Center",description:"왼쪽 중앙 정렬",content:t.jsx(i,{}),placement:"left-center",children:t.jsx(n,{children:"Left Center"})}),t.jsx(o,{text:"Left Bottom",description:"왼쪽 하단 정렬",content:t.jsx(i,{}),placement:"left-bottom",children:t.jsx(n,{children:"Left Bottom"})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsx(o,{text:"Right Top",description:"오른쪽 상단 정렬",content:t.jsx(i,{}),placement:"right-top",children:t.jsx(n,{children:"Right Top"})}),t.jsx(o,{text:"Right Center",description:"오른쪽 중앙 정렬",content:t.jsx(i,{}),placement:"right-center",children:t.jsx(n,{children:"Right Center"})}),t.jsx(o,{text:"Right Bottom",description:"오른쪽 하단 정렬",content:t.jsx(i,{}),placement:"right-bottom",children:t.jsx(n,{children:"Right Bottom"})})]})]}),t.jsxs("div",{style:{display:"flex",gap:"40px"},children:[t.jsx(o,{text:"Bottom Left",description:"하단 왼쪽 정렬",content:t.jsx(i,{}),placement:"bottom-left",children:t.jsx(n,{children:"Bottom Left"})}),t.jsx(o,{text:"Bottom Center",description:"하단 중앙 정렬",content:t.jsx(i,{}),placement:"bottom-center",children:t.jsx(n,{children:"Bottom Center"})}),t.jsx(o,{text:"Bottom Right",description:"하단 오른쪽 정렬",content:t.jsx(i,{}),placement:"bottom-right",children:t.jsx(n,{children:"Bottom Right"})})]})]}),parameters:{docs:{description:{story:"툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left-top, left-center, left-bottom, right-top, right-center, right-bottom으로 설정할 수 있습니다."}}}},B={render:()=>t.jsx(o,{text:"커스텀 사이즈",description:"콘텐츠 영역 크기를 조절할 수 있습니다.",content:t.jsx(i,{}),contentWidth:284,contentHeight:180,placement:"bottom-center",children:t.jsx(n,{children:"커스텀 사이즈"})}),parameters:{docs:{description:{story:"contentWidth와 contentHeight props를 통해 콘텐츠 영역의 크기를 조절할 수 있습니다. (전체 툴팁 너비는 contentWidth + 16px padding)"}}}},V={render:()=>t.jsx("div",{style:{padding:"200px"},children:t.jsx(o,{text:"텍스트를 입력해 주세요.",description:"안내 텍스트를 입력해 주세요.",content:t.jsx(i,{}),placement:"bottom-center",defaultVisible:!0,children:t.jsx(n,{children:"항상 보임"})})}),parameters:{docs:{description:{story:"defaultVisible prop을 사용하면 호버 없이도 툴팁이 항상 표시됩니다."}}}};var $,E,W;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <VisualTooltip {...args}>
      <SolidButton>Hover me</SolidButton>
    </VisualTooltip>,
  args: {
    text: '텍스트를 입력해 주세요.',
    description: '안내 텍스트를 입력해 주세요.',
    content: <PlaceholderContent />,
    placement: 'bottom-center'
  }
}`,...(W=(E=j.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var H,q,D;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <VisualTooltip text='이미지 툴팁' description='이미지가 포함된 툴팁입니다.' content={<img src='https://via.placeholder.com/240x126' alt='placeholder' style={{
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }} />} placement='bottom-center'>
      <SolidButton>이미지 툴팁</SolidButton>
    </VisualTooltip>,
  parameters: {
    docs: {
      description: {
        story: '이미지 콘텐츠가 포함된 Visual Tooltip입니다.'
      }
    }
  }
}`,...(D=(q=y.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var I,M,A;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <VisualTooltip text='텍스트만 있는 툴팁' description='콘텐츠 영역 없이 텍스트만 표시됩니다.' placement='bottom-center'>
      <SolidButton>텍스트만</SolidButton>
    </VisualTooltip>,
  parameters: {
    docs: {
      description: {
        story: '콘텐츠 영역 없이 텍스트와 설명만 표시되는 Visual Tooltip입니다.'
      }
    }
  }
}`,...(A=(M=T.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var N,_,z;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '120px',
    padding: '200px'
  }}>
      <div style={{
      display: 'flex',
      gap: '40px'
    }}>
        <VisualTooltip text='Top Left' description='상단 왼쪽 정렬' content={<PlaceholderContent />} placement='top-left'>
          <SolidButton>Top Left</SolidButton>
        </VisualTooltip>
        <VisualTooltip text='Top Center' description='상단 중앙 정렬' content={<PlaceholderContent />} placement='top-center'>
          <SolidButton>Top Center</SolidButton>
        </VisualTooltip>
        <VisualTooltip text='Top Right' description='상단 오른쪽 정렬' content={<PlaceholderContent />} placement='top-right'>
          <SolidButton>Top Right</SolidButton>
        </VisualTooltip>
      </div>
      <div style={{
      display: 'flex',
      gap: '300px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
          <VisualTooltip text='Left Top' description='왼쪽 상단 정렬' content={<PlaceholderContent />} placement='left-top'>
            <SolidButton>Left Top</SolidButton>
          </VisualTooltip>
          <VisualTooltip text='Left Center' description='왼쪽 중앙 정렬' content={<PlaceholderContent />} placement='left-center'>
            <SolidButton>Left Center</SolidButton>
          </VisualTooltip>
          <VisualTooltip text='Left Bottom' description='왼쪽 하단 정렬' content={<PlaceholderContent />} placement='left-bottom'>
            <SolidButton>Left Bottom</SolidButton>
          </VisualTooltip>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
          <VisualTooltip text='Right Top' description='오른쪽 상단 정렬' content={<PlaceholderContent />} placement='right-top'>
            <SolidButton>Right Top</SolidButton>
          </VisualTooltip>
          <VisualTooltip text='Right Center' description='오른쪽 중앙 정렬' content={<PlaceholderContent />} placement='right-center'>
            <SolidButton>Right Center</SolidButton>
          </VisualTooltip>
          <VisualTooltip text='Right Bottom' description='오른쪽 하단 정렬' content={<PlaceholderContent />} placement='right-bottom'>
            <SolidButton>Right Bottom</SolidButton>
          </VisualTooltip>
        </div>
      </div>
      <div style={{
      display: 'flex',
      gap: '40px'
    }}>
        <VisualTooltip text='Bottom Left' description='하단 왼쪽 정렬' content={<PlaceholderContent />} placement='bottom-left'>
          <SolidButton>Bottom Left</SolidButton>
        </VisualTooltip>
        <VisualTooltip text='Bottom Center' description='하단 중앙 정렬' content={<PlaceholderContent />} placement='bottom-center'>
          <SolidButton>Bottom Center</SolidButton>
        </VisualTooltip>
        <VisualTooltip text='Bottom Right' description='하단 오른쪽 정렬' content={<PlaceholderContent />} placement='bottom-right'>
          <SolidButton>Bottom Right</SolidButton>
        </VisualTooltip>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: '툴팁의 위치를 top-left, top-center, top-right, bottom-left, bottom-center, bottom-right, left-top, left-center, left-bottom, right-top, right-center, right-bottom으로 설정할 수 있습니다.'
      }
    }
  }
}`,...(z=(_=v.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var O,F,X;B.parameters={...B.parameters,docs:{...(O=B.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <VisualTooltip text='커스텀 사이즈' description='콘텐츠 영역 크기를 조절할 수 있습니다.' content={<PlaceholderContent />} contentWidth={284} contentHeight={180} placement='bottom-center'>
      <SolidButton>커스텀 사이즈</SolidButton>
    </VisualTooltip>,
  parameters: {
    docs: {
      description: {
        story: 'contentWidth와 contentHeight props를 통해 콘텐츠 영역의 크기를 조절할 수 있습니다. (전체 툴팁 너비는 contentWidth + 16px padding)'
      }
    }
  }
}`,...(X=(F=B.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var Y,Z,G;V.parameters={...V.parameters,docs:{...(Y=V.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '200px'
  }}>
      <VisualTooltip text='텍스트를 입력해 주세요.' description='안내 텍스트를 입력해 주세요.' content={<PlaceholderContent />} placement='bottom-center' defaultVisible>
        <SolidButton>항상 보임</SolidButton>
      </VisualTooltip>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'defaultVisible prop을 사용하면 호버 없이도 툴팁이 항상 표시됩니다.'
      }
    }
  }
}`,...(G=(Z=V.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};const qt=["Default","WithImage","TextOnly","Placements","CustomSize","AlwaysVisible"];export{V as AlwaysVisible,B as CustomSize,j as Default,v as Placements,T as TextOnly,y as WithImage,qt as __namedExportsOrder,Ht as default};
