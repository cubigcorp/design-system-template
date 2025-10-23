import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{d as u,t as l,l as p}from"./textColor-BcwcM5V4.js";import{r as m}from"./radius-DaoU83SK.js";import{s as n}from"./spacing-tE1IiUFl.js";import{c as g}from"./color-CiwAFuFb.js";import{s as h}from"./shadow-DVq_1U2q.js";import{R as s}from"./iframe-B8YmHH7w.js";import{t as x}from"./typography-BBThIZ7c.js";const S=u.div`
  display: inline-flex;
  background-color: ${g.gray[50]};
  border-radius: ${m["rounded-2"]};
  padding: ${n.gap["gap-1"]}; // gap-1 (Top/Bottom) gap-1 (Left/Right)
  gap: ${n.gap["gap-0.5"]};
  position: relative;
`,w=u.div`
  position: absolute;
  top: ${n.gap["gap-1"]};
  bottom: ${n.gap["gap-1"]};
  background-color: ${g.common[100]};
  border-radius: ${m["rounded-1"]};
  box-shadow: ${h.light["shadow-xs"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({$activeIndex:e,$totalItems:t})=>{const r=`calc((100% - ${(t-1)*2}px - 8px) / ${t})`;return`
      left: ${`calc(4px + ${e} * (${r} + 2px))`};
      width: ${r};
    `}}
`,R=({children:e,className:t,defaultValue:i=0,value:a,onChange:r})=>{const[f,b]=s.useState(i),$=a!==void 0?a:f,v=o=>{a===void 0&&b(o),r==null||r(o)},y=s.Children.toArray(e);return c.jsxs(S,{className:t,children:[c.jsx(w,{$activeIndex:$,$totalItems:y.length}),y.map((o,d)=>s.isValidElement(o)?s.cloneElement(o,{key:d,active:$===d,onClick:()=>v(d)}):o)]})};R.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const T=u.button.withConfig({shouldForwardProp:e=>!["$active","$disabled"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${m["rounded-1"]};
  ${x(void 0,"body3","medium")}
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${n.gap["gap-1"]} ${n.gap["gap-6"]}; // gap-1 (Top/Bottom) gap-6 (Left/Right)
  white-space: nowrap;

  ${({$active:e,$disabled:t})=>t?p`
        background-color: ${g.gray[50]};
        color: ${l.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:e?p`
        background-color: transparent;
        color: ${l.light["fg-neutral-primary"]};
        position: relative;
        z-index: 1;
      `:p`
      background-color: transparent;
      color: ${l.light["fg-neutral-alternative"]};
      position: relative;
      z-index: 1;
    `}

  &:focus {
    outline: none;
  }
`,q=({children:e,active:t=!1,disabled:i=!1,onClick:a,className:r})=>c.jsx(T,{$active:t,$disabled:i,onClick:a,className:r,disabled:i,children:e});q.__docgenInfo={description:"",methods:[],displayName:"SegmentItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{R as S,q as a};
