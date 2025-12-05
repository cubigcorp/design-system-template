import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as T,r as y}from"./iframe-a1GnT4YX.js";import{l as a,d as s}from"./styled-components.browser.esm-D8ZmqkE2.js";import{c as t}from"./color-CiwAFuFb.js";import{r as d}from"./radius-DaoU83SK.js";import{t as x}from"./textColor-DLZeZODc.js";import{b as k}from"./borderColor-C_RHITEf.js";import{t as b}from"./typography-hbgufnaT.js";import{s as l}from"./spacing-tE1IiUFl.js";import{s as V}from"./shadow-DVq_1U2q.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import{S as q}from"./icon_chevron-down_outline_16-BKYl0qe1.js";const S=s.div.withConfig({shouldForwardProp:e=>!["$type","$size"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${k.light["color-border-primary"]};
  overflow: hidden;
  flex-shrink: 0;

  ${({$size:e})=>{switch(e){case"x-small":return a`
          width: 24px;
          height: 24px;
          border-radius: ${d["rounded-full"]};
        `;case"small":return a`
          width: 32px;
          height: 32px;
          border-radius: ${d["rounded-full"]};
        `;case"medium":return a`
          width: 40px;
          height: 40px;
          border-radius: ${d["rounded-full"]};
        `;case"large":return a`
          width: 48px;
          height: 48px;
          border-radius: ${d["rounded-full"]};
        `}}}

  ${({$type:e,$size:o})=>e==="initial"?a`
        background-color: ${t.gray[900]};
        color: ${t.common[100]};
        ${b(void 0,o==="x-small"?"caption2":o==="small"?"body3":o==="medium"?"heading1":"heading3","medium")}
      `:e==="custom"?a`
        background-color: transparent;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `:a`
      background-color: ${t.gray[100]};
      color: ${x.light["fg-neutral-assistive"]};
      svg {
        ${o==="x-small"&&a`
          width: 16px;
          height: 16px;
        `}
        ${o==="small"&&a`
          width: 20px;
          height: 20px;
        `}
        ${o==="medium"&&a`
          width: 24px;
          height: 24px;
        `}
        ${o==="large"&&a`
          width: 32px;
          height: 32px;
        `}
      }
    `}
`,I=e=>r.jsx("svg",{...e,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M16 15.5897C14.7129 15.5897 13.6133 15.1337 12.7013 14.2217C11.7893 13.3099 11.3333 12.2103 11.3333 10.923C11.3333 9.6359 11.7893 8.53635 12.7013 7.62435C13.6133 6.71235 14.7129 6.25635 16 6.25635C17.2871 6.25635 18.3867 6.71235 19.2987 7.62435C20.2107 8.53635 20.6667 9.6359 20.6667 10.923C20.6667 12.2103 20.2107 13.3099 19.2987 14.2217C18.3867 15.1337 17.2871 15.5897 16 15.5897ZM6 23.718V22.7793C6 22.1265 6.17733 21.5218 6.532 20.9653C6.88667 20.4089 7.36067 19.9811 7.954 19.682C9.27178 19.036 10.6012 18.5515 11.9423 18.2283C13.2834 17.9052 14.636 17.7437 16 17.7437C17.364 17.7437 18.7166 17.9052 20.0577 18.2283C21.3988 18.5515 22.7282 19.036 24.046 19.682C24.6393 19.9811 25.1133 20.4089 25.468 20.9653C25.8227 21.5218 26 22.1265 26 22.7793V23.718C26 24.2802 25.803 24.7585 25.409 25.1527C25.015 25.5467 24.5368 25.7437 23.9743 25.7437H8.02567C7.46322 25.7437 6.985 25.5467 6.591 25.1527C6.197 24.7585 6 24.2802 6 23.718Z",fill:"#CACCCF"})}),h=({type:e="default",size:o="medium",value:c,src:g,alt:p,icon:v,className:f})=>{const u=()=>{if(e==="custom"&&g)return r.jsx("img",{src:g,alt:p||"Avatar"});if(e==="initial"&&c)return c.charAt(0).toUpperCase();if(e==="default"){const m=v||I;return T.createElement(m)}return"?"};return r.jsx(S,{$type:e,$size:o,className:f,children:u()})};h.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:'"default" | "custom" | "initial"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"initial"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const G=({avatars:e,max:o=4,state:c="default",dropdownWidth:g,onItemClick:p,className:v})=>{const[f,u]=y.useState(!1),m=y.useRef(null),$=e.slice(0,o),w=$.length-1,C=()=>{switch(c){case"hovered":return t.gray[50];case"pressed":return t.gray[100];case"selected":return t.gray[50];default:return"transparent"}},j=()=>{u(!f)},A=(i,n)=>{p==null||p(i,n),u(!1)};return y.useEffect(()=>{const i=n=>{m.current&&!m.current.contains(n.target)&&u(!1)};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[]),r.jsxs(E,{ref:m,className:v,children:[r.jsx(D,{onClick:j,children:r.jsx(R,{children:$.map((i,n)=>n===w?r.jsx(N,{$index:n,children:r.jsxs(W,{$state:c,$bgColor:C(),children:[r.jsx(h,{...i,size:"x-small"}),r.jsx(O,{children:r.jsx(q,{color:x.light["fg-neutral-alternative"]})})]})},n):r.jsx(L,{$index:n,children:r.jsx(h,{...i,size:"x-small"})},n))})}),f&&r.jsx(_,{$width:g,children:e.map((i,n)=>r.jsxs(z,{onClick:()=>A(i,n),$isFirst:n===0,children:[r.jsx(h,{...i,size:"x-small"}),r.jsx(F,{children:i.name||i.value||"Name"})]},n))})]})},E=s.div`
  position: relative;
  display: inline-flex;
`,D=s.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`,R=s.div`
  display: flex;
  align-items: center;
`,L=s.div`
  ${({$index:e})=>e>0&&a`
      margin-left: -6px;
    `}

  > div {
    border: ${l.gap["gap-0.5"]} solid ${t.common[100]};
    box-sizing: content-box;
  }
`,N=s.div`
  ${({$index:e})=>e>0&&a`
      margin-left: -6px;
    `}
`,W=s.div`
  display: inline-flex;
  align-items: center;
  gap: ${l.gap["gap-0.5"]};
  padding-right: ${l.gap["gap-1"]};
  border-radius: ${d["rounded-full"]};
  background-color: ${({$bgColor:e})=>e};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${t.gray[50]};
  }

  &:active {
    background-color: ${t.gray[100]};
  }

  > div:first-child {
    border: ${l.gap["gap-0.5"]} solid ${t.common[100]};
    box-sizing: content-box;
  }
`,O=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${x.light["fg-neutral-alternative"]};
`,_=s.div`
  position: absolute;
  top: calc(100% + ${l.gap["gap-1"]});
  right: 0;
  transform: translateX(calc(50% - 8px));
  ${({$width:e})=>e&&`width: ${e}px;`}
  white-space: nowrap;
  background-color: ${t.common[100]};
  border-radius: ${d["rounded-2"]};
  box-shadow: ${V.light["shadow-md"]};
  padding: ${l.gap["gap-1"]};
  z-index: 1000;
`,z=s.div`
  display: flex;
  align-items: center;
  gap: ${l.gap["gap-4"]};
  padding: ${l.gap["gap-2"]};
  border-radius: ${d["rounded-1"]};
  cursor: pointer;
  transition: background-color 0.15s ease;

  ${({$isFirst:e})=>e&&a`
      background-color: ${t.gray[50]};
    `}

  &:hover {
    background-color: ${t.gray[50]};
  }

  &:active {
    background-color: ${t.gray[100]};
  }
`,F=s.span`
  ${b(void 0,"body2","regular")}
  color: ${x.light["fg-neutral-primary"]};
`;G.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarItemData"}],raw:"AvatarItemData[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "selected"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"selected"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},dropdownWidth:{required:!1,tsType:{name:"number"},description:""},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(avatar: AvatarItemData, index: number) => void",signature:{arguments:[{type:{name:"AvatarItemData"},name:"avatar"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{h as A,G as a};
