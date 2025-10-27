import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as $,R as E}from"./iframe-IAoFGwwu.js";import{d as c,t as T}from"./textColor-BD3_vIL_.js";import{s as a}from"./spacing-tE1IiUFl.js";import{r as d}from"./radius-DaoU83SK.js";import{c as n}from"./color-CiwAFuFb.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";const g=({size:t="medium",disabled:e=!1,active:r=!1,onChange:o,onClick:s,onFocus:i,onBlur:f,className:v="",style:h,lang:I,...x})=>{const[l,u]=$.useState(r);E.useEffect(()=>{u(r)},[r]);const w=y=>{if(!e){const p=!l;u(p),o==null||o(p),s==null||s(y)}};return m.jsx(b,{$size:t,$disabled:e,$active:l,disabled:e,onClick:w,onFocus:i,onBlur:f,className:`switch ${v}`,style:h,...x,children:m.jsx(R,{$size:t,$disabled:e,$active:l})})},b=c.button`
  position: relative;
  border: none;
  outline: none;
  cursor: ${({$disabled:t})=>t?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  border-radius: ${d["rounded-full"]};

  ${({$size:t})=>{switch(t){case"small":return`
          width: ${16*2+parseInt(a.gap["gap-0.5"])*2}px;
          height: ${16+parseInt(a.gap["gap-0.5"])*2}px;
        `;case"large":return`
          width: ${24*2+parseInt(a.gap["gap-1"])*2}px;
          height: ${24+parseInt(a.gap["gap-1"])*2}px;
        `;default:return`
          width: ${20*2+parseInt(a.gap["gap-0.5"])*2}px;
          height: ${20+parseInt(a.gap["gap-0.5"])*2}px;
        `}}}

  ${({$active:t,$disabled:e})=>e&&t?`
        background-color: ${n.gray[900]};
      `:e&&!t?`
        background-color: ${n.gray[300]};
      `:t&&!e?`
        background-color: ${n.gray[950]};
      `:`
      background-color: ${n.gray[100]};
    `}

  &:focus-visible {
    box-shadow: 0 0 0 2px ${n.gray[300]};
  }
`,R=c.div`
  position: absolute;
  border-radius: ${d["rounded-full"]};
  transition: all 0.2s ease-in-out;

  ${({$size:t})=>{const e=parseInt(t==="large"?a.gap["gap-1"]:a.gap["gap-0.5"]);switch(t){case"small":return`
          width: 16px;
          height: 16px;
          top: ${e}px;
          left: ${e}px;
        `;case"large":return`
          width: 24px;
          height: 24px;
          top: ${e}px;
          left: ${e}px;
        `;default:return`
          width: 20px;
          height: 20px;
          top: ${e}px;
          left: ${e}px;
        `}}}

  ${({$active:t,$disabled:e})=>e&&t?`
        background-color: ${T.light["fg-neutral-alternative"]};
      `:e&&!t?`
        background-color: ${n.gray[50]};
      `:`
      background-color: ${n.common[100]};
    `}

  ${({$active:t,$size:e})=>{const r=e==="small"?16:e==="large"?24:20,o=parseInt(e==="large"?a.gap["gap-1"]:a.gap["gap-0.5"]),i=r*2+o*2-r-o*2;return`
      transform: translateX(${t?i:0}px);
    `}}
`;g.displayName="Switch";g.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(active: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"active"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},lang:{required:!1,tsType:{name:"union",raw:'"ko" | "en"',elements:[{name:"literal",value:'"ko"'},{name:"literal",value:'"en"'}]},description:""}}};export{g as S};
