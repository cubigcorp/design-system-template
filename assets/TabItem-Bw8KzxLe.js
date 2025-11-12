import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{d as g,t as d,l}from"./textColor-DMnf996G.js";import{s as m}from"./spacing-tE1IiUFl.js";import{c as I}from"./color-CiwAFuFb.js";import{R as o}from"./iframe-BmWS9Sei.js";import{t as R}from"./typography-BBThIZ7c.js";const S=g.div`
  display: flex;
  border-bottom: 1px solid ${I.gray[200]};
  gap: ${m.gap["gap-6"]};
  position: relative;
`,V=g.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${d.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({$left:e})=>e}px;
  width: ${({$width:e})=>e}px;
`,q=({children:e,className:r,defaultValue:n=0,value:a,onChange:i,...c})=>{const[$,v]=o.useState(n),p=a!==void 0?a:$,b=o.useRef([]),[h,T]=o.useState({left:0,width:0}),w=t=>{a===void 0&&v(t),i==null||i(t)},u=o.Children.toArray(e),y=u.slice(0,8);return u.length>8&&console.warn(`Tab: 최대 8개 이하의 탭만 허용됩니다. ${u.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`),o.useEffect(()=>{const t=b.current[p];t&&T({left:t.offsetLeft,width:t.offsetWidth})},[p,y.length]),f.jsxs(S,{className:r,...c,children:[f.jsx(V,{$left:h.left,$width:h.width}),y.map((t,s)=>o.isValidElement(t)?o.cloneElement(t,{key:s,active:p===s,onClick:()=>w(s),ref:x=>{b.current[s]=x}}):t)]})};q.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{defaultValue:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},value:{required:!1,tsType:{name:"number"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const j=g.button.withConfig({shouldForwardProp:e=>!["$active","$disabled"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${m.gap["gap-2"]} ${m.gap["gap-1"]}; // gap-2 (Top/Bottom), gap-1 (Left/Right)
  min-width: 120px;
  height: 40px;
  white-space: nowrap;
  position: relative;

  ${R(void 0,"body3","medium")}

  ${({$active:e,$disabled:r})=>r?l`
        color: ${d.light["fg-neutral-disable"]};
        pointer-events: none;
        cursor: not-allowed;
      `:e?l`
        color: ${d.light["fg-neutral-strong"]};
      `:l`
      color: ${d.light["fg-neutral-alternative"]};
    `}

  &:focus {
    outline: none;
  }

  &:active {
    ${({$disabled:e,$active:r})=>!e&&!r&&l`
        transform: scale(0.98);
      `}
  }
`,k=({children:e,active:r=!1,disabled:n=!1,onClick:a,className:i,...c})=>f.jsx(j,{$active:r,$disabled:n,onClick:a,className:i,disabled:n,...c,children:e});k.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};export{q as T,k as a};
