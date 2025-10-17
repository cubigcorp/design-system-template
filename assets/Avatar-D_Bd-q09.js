import{j as i}from"./jsx-runtime-Bm_hQ5rp.js";import{l as r,d as c}from"./styled-components.browser.esm-C_r3Obn0.js";import{c as l}from"./color-DqDZjiGS.js";import{r as a}from"./radius-DaoU83SK.js";import{t as f}from"./textColor-SSyLf7rE.js";import{b as h}from"./borderColor-CQKT7y1f.js";import{t as g}from"./typography-BBThIZ7c.js";import{R as x}from"./iframe-CWrHPpkc.js";const C=c.div.withConfig({shouldForwardProp:e=>!["$type","$size"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${h.light["color-border-primary"]};
  overflow: hidden;
  flex-shrink: 0;

  ${({$size:e})=>{switch(e){case"x-small":return r`
          width: 24px;
          height: 24px;
          border-radius: ${a["rounded-full"]};
        `;case"small":return r`
          width: 32px;
          height: 32px;
          border-radius: ${a["rounded-full"]};
        `;case"medium":return r`
          width: 40px;
          height: 40px;
          border-radius: ${a["rounded-full"]};
        `;case"large":return r`
          width: 48px;
          height: 48px;
          border-radius: ${a["rounded-full"]};
        `}}}

  ${({$type:e,$size:t})=>e==="initial"?r`
        background-color: ${l.gray[900]};
        color: ${l.common[100]};
        ${g(void 0,t==="x-small"?"caption2":t==="small"?"body3":t==="medium"?"heading1":"heading3","medium")}
      `:e==="custom"?r`
        background-color: transparent;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `:r`
      background-color: ${l.gray[100]};
      color: ${f.light["fg-neutral-assistive"]};
      svg {
        ${t==="x-small"&&r`
          width: 16px;
          height: 16px;
        `}
        ${t==="small"&&r`
          width: 20px;
          height: 20px;
        `}
        ${t==="medium"&&r`
          width: 24px;
          height: 24px;
        `}
        ${t==="large"&&r`
          width: 32px;
          height: 32px;
        `}
      }
    `}
`,v=e=>i.jsx("svg",{...e,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M16 15.5897C14.7129 15.5897 13.6133 15.1337 12.7013 14.2217C11.7893 13.3099 11.3333 12.2103 11.3333 10.923C11.3333 9.6359 11.7893 8.53635 12.7013 7.62435C13.6133 6.71235 14.7129 6.25635 16 6.25635C17.2871 6.25635 18.3867 6.71235 19.2987 7.62435C20.2107 8.53635 20.6667 9.6359 20.6667 10.923C20.6667 12.2103 20.2107 13.3099 19.2987 14.2217C18.3867 15.1337 17.2871 15.5897 16 15.5897ZM6 23.718V22.7793C6 22.1265 6.17733 21.5218 6.532 20.9653C6.88667 20.4089 7.36067 19.9811 7.954 19.682C9.27178 19.036 10.6012 18.5515 11.9423 18.2283C13.2834 17.9052 14.636 17.7437 16 17.7437C17.364 17.7437 18.7166 17.9052 20.0577 18.2283C21.3988 18.5515 22.7282 19.036 24.046 19.682C24.6393 19.9811 25.1133 20.4089 25.468 20.9653C25.8227 21.5218 26 22.1265 26 22.7793V23.718C26 24.2802 25.803 24.7585 25.409 25.1527C25.015 25.5467 24.5368 25.7437 23.9743 25.7437H8.02567C7.46322 25.7437 6.985 25.5467 6.591 25.1527C6.197 24.7585 6 24.2802 6 23.718Z",fill:"#CACCCF"})}),w=({type:e="default",size:t="medium",value:o,src:n,alt:s,icon:d,className:m})=>{const u=()=>{if(e==="custom"&&n)return i.jsx("img",{src:n,alt:s||"Avatar"});if(e==="initial"&&o)return o.charAt(0).toUpperCase();if(e==="default"){const p=d||v;return x.createElement(p)}return"?"};return i.jsx(C,{$type:e,$size:t,className:m,children:u()})};w.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{required:!1,tsType:{name:"union",raw:'"default" | "custom" | "initial"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"custom"'},{name:"literal",value:'"initial"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"x-small" | "small" | "medium" | "large"',elements:[{name:"literal",value:'"x-small"'},{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:""},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactComponentType",raw:"React.ComponentType<SVGProps<SVGSVGElement>>",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{w as A};
