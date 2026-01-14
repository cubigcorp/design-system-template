import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DsZmfmOb.js";import{r as I}from"./index-DZY6qEX2.js";import{d as l,m as L}from"./styled-components.browser.esm-DACqo_di.js";import{c as d}from"./color-CiwAFuFb.js";import"./textColor-DLZeZODc.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{t as T}from"./typography-hbgufnaT.js";import{r as j}from"./radius-DaoU83SK.js";import{s as c}from"./spacing-tE1IiUFl.js";const S=L`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,A=({children:m,text:u,description:x,content:y,contentWidth:k=224,contentHeight:R=126,placement:h="bottom-center",offset:o=4,className:q,defaultVisible:v=!1})=>{const[g,$]=p.useState(v),[w,V]=p.useState({top:0,left:0}),[P,a]=p.useState("top"),f=p.useRef(null),b=p.useRef(null),E=()=>{if(!f.current||!b.current)return;const t=f.current.getBoundingClientRect(),e=b.current.getBoundingClientRect(),n=8;let r=0,i=0;switch(h){case"top-left":r=t.top-e.height-o-n,i=t.left,a("bottom");break;case"top-center":r=t.top-e.height-o-n,i=t.left+(t.width-e.width)/2,a("bottom");break;case"top-right":r=t.top-e.height-o-n,i=t.right-e.width,a("bottom");break;case"bottom-left":r=t.bottom+o+n,i=t.left,a("top");break;case"bottom-center":r=t.bottom+o+n,i=t.left+(t.width-e.width)/2,a("top");break;case"bottom-right":r=t.bottom+o+n,i=t.right-e.width,a("top");break;case"left":r=t.top+(t.height-e.height)/2,i=t.left-e.width-o-n,a("right");break;case"right":r=t.top+(t.height-e.height)/2,i=t.right+o+n,a("left");break}V({top:r,left:i})};p.useEffect(()=>{g&&E()},[g,h,o]);const C=()=>{$(!0)},M=()=>{v||$(!1)},N=()=>{switch(h){case"top-left":case"bottom-left":return"24px";case"top-right":case"bottom-right":return"calc(100% - 24px)";default:return"50%"}};return s.jsxs(B,{ref:f,onMouseEnter:C,onMouseLeave:M,className:q,children:[m,g&&I.createPortal(s.jsxs(D,{ref:b,style:{top:w.top,left:w.left},children:[s.jsx(z,{$position:P,$left:N()}),y&&s.jsx(H,{style:{width:k,height:R},children:y}),s.jsxs(X,{children:[s.jsx(Y,{children:u}),x&&s.jsx(_,{children:x})]})]}),document.body)]})},B=l.div`
  position: relative;
  display: inline-flex;
`,D=l.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: ${c.gap["gap-2"]};
  padding: ${c.gap["gap-2"]} ${c.gap["gap-2"]} ${c.gap["gap-2.5"]} ${c.gap["gap-2"]};
  border-radius: ${j["rounded-2"]};
  background-color: ${d.gray[990]};
  z-index: 9999;
  animation: ${S} 0.15s ease-in-out;
  pointer-events: none;
`,H=l.div`
  border-radius: ${j["rounded-1"]};
  overflow: hidden;
  background-color: ${d.gray[200]};
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,X=l.div`
  display: flex;
  flex-direction: column;
  gap: ${c.gap["gap-1"]};
`,Y=l.span`
  ${T(void 0,"body2","medium")}
  color: ${d.common[100]};
`,_=l.span`
  ${T(void 0,"caption2","regular")}
  color: ${d.gray[800]};
`,z=l.div`
  position: absolute;
  background-color: ${d.gray[990]};

  ${({$position:m,$left:u})=>{switch(m){case"top":return`
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
          top: 50%;
          transform: translateY(-50%);
          clip-path: polygon(0% 50%, 100% 0%, 100% 100%);
        `;case"right":return`
          width: 8px;
          height: 16px;
          right: -7px;
          top: 50%;
          transform: translateY(-50%);
          clip-path: polygon(100% 50%, 0% 0%, 0% 100%);
        `}}}
`;A.__docgenInfo={description:"",methods:[],displayName:"VisualTooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},text:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},content:{required:!1,tsType:{name:"ReactNode"},description:""},contentWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"224",computed:!1}},contentHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"126",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:`| "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right"
| "left"
| "right"`,elements:[{name:"literal",value:'"top-left"'},{name:"literal",value:'"top-center"'},{name:"literal",value:'"top-right"'},{name:"literal",value:'"bottom-left"'},{name:"literal",value:'"bottom-center"'},{name:"literal",value:'"bottom-right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"bottom-center"',computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},defaultVisible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{A as V};
