import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{c as a,p as l}from"./styled-components.browser.esm-f0aNwSj6.js";const o=l`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,n=a.div`
  width: ${({size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  height: ${({size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${o} 0.8s linear infinite;
  display: block;
`,t=({size:e="medium"})=>r.jsx(n,{size:e});t.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}}}};const m={small:"rounded-2",medium:"rounded-3",large:"rounded-full"};export{t as S,m as r};
