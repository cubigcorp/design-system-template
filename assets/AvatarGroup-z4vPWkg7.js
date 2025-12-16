import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as T,r as v}from"./iframe-CLq260Vv.js";import{l as a,d as l}from"./styled-components.browser.esm-NAFAd1pi.js";import{c as s}from"./color-CiwAFuFb.js";import{r as p}from"./radius-DaoU83SK.js";import{t as C}from"./textColor-DLZeZODc.js";import{b as V}from"./borderColor-C_RHITEf.js";import{t as q}from"./typography-hbgufnaT.js";import{M as S,C as k}from"./Cell-8MmQy4eh.js";import{s as g}from"./spacing-tE1IiUFl.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as G}from"./icon_chevron-down_outline_16-BCpvU5sq.js";const I=l.div.withConfig({shouldForwardProp:e=>!["$type","$size"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${V.light["color-border-primary"]};
  overflow: hidden;
  flex-shrink: 0;

  ${({$size:e})=>{switch(e){case"x-small":return a`
          width: 24px;
          height: 24px;
          border-radius: ${p["rounded-full"]};
        `;case"small":return a`
          width: 32px;
          height: 32px;
          border-radius: ${p["rounded-full"]};
        `;case"medium":return a`
          width: 40px;
          height: 40px;
          border-radius: ${p["rounded-full"]};
        `;case"large":return a`
          width: 48px;
          height: 48px;
          border-radius: ${p["rounded-full"]};
        `}}}

  ${({$type:e,$size:i})=>e==="initial"?a`
        background-color: ${s.gray[900]};
        color: ${s.common[100]};
        ${q(void 0,i==="x-small"?"caption2":i==="small"?"body3":i==="medium"?"heading1":"heading3","medium")}
      `:e==="custom"?a`
        background-color: transparent;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `:a`
      background-color: ${s.gray[100]};
      color: ${C.light["fg-neutral-assistive"]};
      svg {
        ${i==="x-small"&&a`
          width: 16px;
          height: 16px;
        `}
        ${i==="small"&&a`
          width: 20px;
          height: 20px;
        `}
        ${i==="medium"&&a`
          width: 24px;
          height: 24px;
        `}
        ${i==="large"&&a`
          width: 32px;
          height: 32px;
        `}
      }
    `}
`,E=e=>r.jsx("svg",{...e,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M16 15.5897C14.7129 15.5897 13.6133 15.1337 12.7013 14.2217C11.7893 13.3099 11.3333 12.2103 11.3333 10.923C11.3333 9.6359 11.7893 8.53635 12.7013 7.62435C13.6133 6.71235 14.7129 6.25635 16 6.25635C17.2871 6.25635 18.3867 6.71235 19.2987 7.62435C20.2107 8.53635 20.6667 9.6359 20.6667 10.923C20.6667 12.2103 20.2107 13.3099 19.2987 14.2217C18.3867 15.1337 17.2871 15.5897 16 15.5897ZM6 23.718V22.7793C6 22.1265 6.17733 21.5218 6.532 20.9653C6.88667 20.4089 7.36067 19.9811 7.954 19.682C9.27178 19.036 10.6012 18.5515 11.9423 18.2283C13.2834 17.9052 14.636 17.7437 16 17.7437C17.364 17.7437 18.7166 17.9052 20.0577 18.2283C21.3988 18.5515 22.7282 19.036 24.046 19.682C24.6393 19.9811 25.1133 20.4089 25.468 20.9653C25.8227 21.5218 26 22.1265 26 22.7793V23.718C26 24.2802 25.803 24.7585 25.409 25.1527C25.015 25.5467 24.5368 25.7437 23.9743 25.7437H8.02567C7.46322 25.7437 6.985 25.5467 6.591 25.1527C6.197 24.7585 6 24.2802 6 23.718Z",fill:"#CACCCF"})}),h=({type:e="default",size:i="medium",value:o,src:d,alt:m,icon:x,className:f})=>{const u=()=>{if(e==="custom"&&d)return r.jsx("img",{src:d,alt:m||"Avatar"});if(e==="initial"&&o)return o.charAt(0).toUpperCase();if(e==="default"){const c=x||E;return T.createElement(c)}return"?"};return r.jsx(I,{$type:e,$size:i,className:f,children:u()})};h.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:'"default" | "custom" | "initial"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"initial"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const D=({avatars:e,max:i=4,state:o="default",dropdownWidth:d,onItemClick:m,className:x})=>{const[f,u]=v.useState(!1),c=v.useRef(null),y=e.slice(0,i),$=y.length-1,b=()=>{switch(o){case"hovered":return s.gray[50];case"pressed":return s.gray[100];case"selected":return s.gray[50];default:return"transparent"}},j=()=>{u(!f)},A=(n,t)=>{m==null||m(n,t),u(!1)};return v.useEffect(()=>{const n=t=>{c.current&&!c.current.contains(t.target)&&u(!1)};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[]),r.jsxs(L,{ref:c,className:x,children:[r.jsx(R,{onClick:j,children:r.jsx(W,{children:y.map((n,t)=>t===$?r.jsx(N,{$index:t,children:r.jsxs(O,{$state:o,$bgColor:b(),children:[r.jsx(h,{...n,size:"x-small"}),r.jsx(_,{children:r.jsx(G,{color:C.light["fg-neutral-alternative"]})})]})},t):r.jsx(M,{$index:t,children:r.jsx(h,{...n,size:"x-small"})},t))})}),f&&r.jsx(z,{$width:d,children:r.jsx(S,{width:d||160,showCheckIcon:!1,children:e.map((n,t)=>{const w=()=>r.jsx(h,{...n,size:"x-small"});return r.jsx(k,{leadingContent:w,text:n.name||n.value||"Name",active:t===0,onClick:()=>A(n,t)},t)})})})]})},L=l.div`
  position: relative;
  display: inline-flex;
`,R=l.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`,W=l.div`
  display: flex;
  align-items: center;
`,M=l.div`
  ${({$index:e})=>e>0&&a`
      margin-left: -6px;
    `}

  > div {
    border: ${g.gap["gap-0.5"]} solid ${s.common[100]};
    box-sizing: content-box;
  }
`,N=l.div`
  ${({$index:e})=>e>0&&a`
      margin-left: -6px;
    `}
`,O=l.div`
  display: inline-flex;
  align-items: center;
  gap: ${g.gap["gap-0.5"]};
  padding-right: ${g.gap["gap-1"]};
  border-radius: ${p["rounded-full"]};
  background-color: ${({$bgColor:e})=>e};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${s.gray[50]};
  }

  &:active {
    background-color: ${s.gray[100]};
  }

  > div:first-child {
    border: ${g.gap["gap-0.5"]} solid ${s.common[100]};
    box-sizing: content-box;
  }
`,_=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${C.light["fg-neutral-alternative"]};
`,z=l.div`
  position: absolute;
  top: calc(100% + ${g.gap["gap-1"]});
  right: 0;
  transform: translateX(calc(50% - 8px));
  z-index: 1000;
`;D.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarItemData"}],raw:"AvatarItemData[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "selected"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"selected"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(avatar: AvatarItemData, index: number) => void",signature:{arguments:[{type:{name:"AvatarItemData"},name:"avatar"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{h as A,D as a};
