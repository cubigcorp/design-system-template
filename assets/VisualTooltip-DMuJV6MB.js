import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-Be3fNCx8.js";import{r as L}from"./index-DIzVsw-M.js";import{d as s,m as S}from"./styled-components.browser.esm-Bi-oSbV3.js";import{c as m}from"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as T}from"./typography-hbgufnaT.js";import{r as k}from"./radius-DaoU83SK.js";import{s as c}from"./spacing-tE1IiUFl.js";const A=S`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,B=({children:g,text:u,description:d,content:y,contentWidth:j=224,contentHeight:P=126,placement:h="bottom-center",offset:o=4,className:R,defaultVisible:v=!1})=>{const[f,$]=p.useState(v),[w,q]=p.useState({top:0,left:0}),[V,a]=p.useState("top"),b=p.useRef(null),x=p.useRef(null),E=()=>{if(!b.current||!x.current)return;const t=b.current.getBoundingClientRect(),e=x.current.getBoundingClientRect(),n=8;let r=0,i=0;switch(h){case"top-left":r=t.top-e.height-o-n,i=t.left,a("bottom");break;case"top-center":r=t.top-e.height-o-n,i=t.left+(t.width-e.width)/2,a("bottom");break;case"top-right":r=t.top-e.height-o-n,i=t.right-e.width,a("bottom");break;case"bottom-left":r=t.bottom+o+n,i=t.left,a("top");break;case"bottom-center":r=t.bottom+o+n,i=t.left+(t.width-e.width)/2,a("top");break;case"bottom-right":r=t.bottom+o+n,i=t.right-e.width,a("top");break;case"left-top":r=t.top,i=t.left-e.width-o-n,a("right");break;case"left-center":r=t.top+(t.height-e.height)/2,i=t.left-e.width-o-n,a("right");break;case"left-bottom":r=t.bottom-e.height,i=t.left-e.width-o-n,a("right");break;case"right-top":r=t.top,i=t.right+o+n,a("left");break;case"right-center":r=t.top+(t.height-e.height)/2,i=t.right+o+n,a("left");break;case"right-bottom":r=t.bottom-e.height,i=t.right+o+n,a("left");break}q({top:r,left:i})};p.useEffect(()=>{f&&E()},[f,h,o]);const C=()=>{$(!0)},M=()=>{v||$(!1)},N=()=>{switch(h){case"top-left":case"bottom-left":return"24px";case"top-right":case"bottom-right":return"calc(100% - 24px)";default:return"50%"}},I=()=>{switch(h){case"left-top":case"right-top":return"24px";case"left-bottom":case"right-bottom":return"calc(100% - 24px)";default:return"50%"}};return l.jsxs(D,{ref:b,onMouseEnter:C,onMouseLeave:M,className:R,children:[g,f&&L.createPortal(l.jsxs(H,{ref:x,style:{top:w.top,left:w.left},children:[l.jsx(W,{$position:V,$left:N(),$top:I()}),y&&l.jsx(X,{style:{width:j,height:P},children:y}),l.jsxs(Y,{children:[l.jsx(_,{children:u}),d&&l.jsx(z,{children:d})]})]}),document.body)]})},D=s.div`
  position: relative;
  display: inline-flex;
`,H=s.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${c.gap["gap-2"]};
  padding: ${c.gap["gap-2"]} ${c.gap["gap-2"]}
    ${c.gap["gap-2.5"]} ${c.gap["gap-2"]};
  border-radius: ${k["rounded-2"]};
  background-color: ${m.gray[990]};
  z-index: 9999;
  animation: ${A} 0.25s ease-in-out;
  pointer-events: none;
`,X=s.div`
  border-radius: ${k["rounded-1"]};
  overflow: hidden;
  background-color: ${m.gray[200]};
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Y=s.div`
  display: flex;
  flex-direction: column;
  gap: ${c.gap["gap-1"]};
`,_=s.span`
  ${T(void 0,"body2","medium")}
  color: ${m.common[100]};
`,z=s.span`
  ${T(void 0,"caption2","regular")}
  color: ${m.gray[800]};
`,W=s.div`
  position: absolute;
  background-color: ${m.gray[990]};

  ${({$position:g,$left:u,$top:d})=>{switch(g){case"top":return`
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
          top: ${d};
          transform: translateY(-50%);
          clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
        `;case"right":return`
          width: 8px;
          height: 16px;
          right: -7px;
          top: ${d};
          transform: translateY(-50%);
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        `}}}
`;B.__docgenInfo={description:"",methods:[],displayName:"VisualTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},contentWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"224",computed:!1}},contentHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"126",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"
| "left-top"
| "left-center"
| "left-bottom"
| "right-top"
| "right-center"
| "right-bottom"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left-top"'},{name:"literal",value:'"left-center"'},{name:"literal",value:'"left-bottom"'},{name:"literal",value:'"right-top"'},{name:"literal",value:'"right-center"'},{name:"literal",value:'"right-bottom"'}]},description:"",defaultValue:{value:'"bottom-center"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{B as V};
