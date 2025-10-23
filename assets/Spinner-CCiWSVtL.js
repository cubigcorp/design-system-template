import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as a,m as t}from"./textColor-DE9DXhy8.js";const l=t`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,o=a.div`
  width: ${({size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  height: ${({size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${l} 0.8s linear infinite;
  display: block;
`,n=({size:e="medium"})=>r.jsx(o,{size:e});n.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}}};export{n as S};
