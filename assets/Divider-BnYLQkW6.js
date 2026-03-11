import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{s as t,c as o}from"./styled-components.browser.esm-BW4106oE.js";import{c as n}from"./color-m2U5piog.js";const s=({orientation:a="horizontal",thickness:e=1,className:r,style:i})=>l.jsx(m,{$orientation:a,$thickness:e,className:r,style:i}),m=o.div`
  background-color: ${n.gray[200]};

  ${({$orientation:a,$thickness:e})=>a==="horizontal"?t`
          width: 100%;
          height: ${e}px;
        `:t`
          width: ${e}px;
          height: 100%;
        `}
`;s.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},thickness:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};export{s as D};
