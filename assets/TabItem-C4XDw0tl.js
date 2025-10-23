import{j as u}from"./jsx-runtime-D_zvdyIk.js";import{d as f,t as l,l as n}from"./textColor-DE9DXhy8.js";import{s as m}from"./spacing-tE1IiUFl.js";import{c as v}from"./color-CiwAFuFb.js";import{R as s}from"./iframe-BbQ1-6Wh.js";import{t as T}from"./typography-BBThIZ7c.js";const x=f.div`
  display: flex;
  border-bottom: 1px solid ${v.gray[200]};
  gap: ${m.gap["gap-6"]};
  position: relative;
`,I=f.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${l.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({$activeIndex:e,$totalItems:t})=>`
      left: ${e*144}px;
      width: 120px;
    `}
`,w=({children:e,className:t,defaultValue:a=0,value:o,onChange:i,...d})=>{const[h,y]=s.useState(a),g=o!==void 0?o:h,$=r=>{o===void 0&&y(r),i==null||i(r)},c=s.Children.toArray(e),b=c.slice(0,8);return c.length>8&&console.warn(`Tab: 최대 8개 이하의 탭만 허용됩니다. ${c.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`),u.jsxs(x,{className:t,...d,children:[u.jsx(I,{$activeIndex:g,$totalItems:b.length}),b.map((r,p)=>s.isValidElement(r)?s.cloneElement(r,{key:p,active:g===p,onClick:()=>$(p)}):r)]})};w.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const V=f.button.withConfig({shouldForwardProp:e=>!["$active","$disabled"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${m.gap["gap-2"]} ${m.gap["gap-2"]}; // gap-2 (Top/Bottom, Left/Right for flexible width)
  min-width: 120px;
  height: 40px;
  white-space: nowrap;
  position: relative;

  ${T(void 0,"body3","medium")}

  ${({$active:e,$disabled:t})=>t?n`
        color: ${l.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:e?n`
        color: ${l.light["fg-neutral-strong"]};
      `:n`
      color: ${l.light["fg-neutral-alternative"]};
    `}

  &:focus {
    outline: none;
  }

  &:active {
    ${({$disabled:e,$active:t})=>!e&&!t&&n`
        transform: scale(0.98);
      `}
  }
`,q=({children:e,active:t=!1,disabled:a=!1,onClick:o,className:i,...d})=>u.jsx(V,{$active:t,$disabled:a,onClick:o,className:i,disabled:a,...d,children:e});q.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};export{w as T,q as a};
