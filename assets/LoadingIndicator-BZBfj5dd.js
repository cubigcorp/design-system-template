import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as i,m as u}from"./styled-components.browser.esm-Bi-oSbV3.js";import{c as p}from"./color-CiwAFuFb.js";const $={small:16,medium:20,large:24,"x-large":32},y={small:4,medium:6,large:8,"x-large":10},g=({type:e="spinner",size:c="medium",color:x,className:d})=>{const t=x||p.gray[950];if(e==="dots"){const s=y[c],f=Math.max(4,s/2);return r.jsxs(k,{className:d,$gap:f,children:[r.jsx(l,{$size:s,$color:t,$delay:"0s"}),r.jsx(l,{$size:s,$color:t,$delay:"0.15s"}),r.jsx(l,{$size:s,$color:t,$delay:"0.3s"})]})}const a=$[c],n=Math.max(2,a/8),o=(a-n)/2,m=2*Math.PI*o;return r.jsx(j,{className:d,$size:a,children:r.jsxs(z,{viewBox:`0 0 ${a} ${a}`,children:[r.jsx("circle",{cx:a/2,cy:a/2,r:o,fill:"none",stroke:p.gray[200],strokeWidth:n}),r.jsx(S,{cx:a/2,cy:a/2,r:o,fill:"none",stroke:t,strokeWidth:n,strokeLinecap:"round",strokeDasharray:`${m*.25} ${m*.75}`})]})})},h=u`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,v=u`
  0%, 80%, 100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`,j=i.div`
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
`,z=i.svg`
  width: 100%;
  height: 100%;
  animation: ${h} 0.8s linear infinite;
`,S=i.circle``,k=i.div`
  display: flex;
  align-items: center;
  gap: ${({$gap:e})=>e}px;
`,l=i.div`
  width: ${({$size:e})=>e}px;
  height: ${({$size:e})=>e}px;
  border-radius: 50%;
  background-color: ${({$color:e})=>e};
  animation: ${v} 1s ease-in-out infinite;
  animation-delay: ${({$delay:e})=>e};
`;g.displayName="LoadingIndicator";g.__docgenInfo={description:"",methods:[],displayName:"LoadingIndicator",props:{type:{required:!1,tsType:{name:"union",raw:'"spinner" | "dots"',elements:[{name:"literal",value:'"spinner"'},{name:"literal",value:'"dots"'}]},description:"",defaultValue:{value:'"spinner"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large" | "x-large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'},{name:"literal",value:'"x-large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{g as L};
