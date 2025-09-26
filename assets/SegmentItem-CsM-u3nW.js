import{j as c}from"./jsx-runtime-DTznObQx.js";import{d as m,l as p}from"./styled-components.browser.esm-CbqwAcww.js";import{r as g}from"./radius-DaoU83SK.js";import{s as d}from"./spacing-tE1IiUFl.js";import{c as s}from"./color-BKBaEAUu.js";import{R as i}from"./iframe-CjirL-zO.js";import{t as u}from"./textColor-C1-D1tBN.js";import{s as v}from"./shadow-DVq_1U2q.js";import{t as R}from"./typography-BoZiIk0D.js";const w=m.div`
  display: inline-flex;
  background-color: ${s.gray[50]};
  border-radius: ${g["rounded-2"]};
  padding: ${d.gap["gap-1"]}; // gap-1 (Top/Bottom) gap-1 (Left/Right)
  gap: ${d.gap["gap-0.5"]};
`,T=({children:e,className:t,defaultValue:n=0,value:a,onChange:o})=>{const[f,y]=i.useState(n),$=a!==void 0?a:f,b=r=>{a===void 0&&y(r),o==null||o(r)},h=i.Children.toArray(e);return c.jsx(w,{className:t,children:h.map((r,l)=>i.isValidElement(r)?i.cloneElement(r,{key:l,active:$===l,onClick:()=>b(l)}):r)})};T.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const q=m.button.withConfig({shouldForwardProp:e=>!["$active","$disabled"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${g["rounded-1"]};
  ${R(void 0,"body3","medium")}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${d.gap["gap-1"]} ${d.gap["gap-6"]}; // gap-1 (Top/Bottom) gap-6 (Left/Right)
  white-space: nowrap;

  ${({$active:e,$disabled:t})=>t?p`
        background-color: ${s.gray[50]};
        color: ${u.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:e?p`
        background-color: ${s.common[100]};
        color: ${u.light["fg-neutral-primary"]};
        box-shadow: ${v.light["shadow-xs"]};
      `:p`
      background-color: ${s.gray[50]};
      color: ${u.light["fg-neutral-alternative"]};
    `}

  &:focus {
    outline: none;
  }
`,S=({children:e,active:t=!1,disabled:n=!1,onClick:a,className:o})=>c.jsx(q,{$active:t,$disabled:n,onClick:a,className:o,disabled:n,children:e});S.__docgenInfo={description:"",methods:[],displayName:"SegmentItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{T as S,S as a};
