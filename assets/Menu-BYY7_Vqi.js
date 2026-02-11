import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{R as o}from"./iframe-D4fn7yV1.js";import{d as m}from"./styled-components.browser.esm-kr1dGAPk.js";import{b as u}from"./borderColor-C_RHITEf.js";import{c as t}from"./color-CiwAFuFb.js";import{s as b}from"./shadow-DVq_1U2q.js";import{s as a}from"./spacing-tE1IiUFl.js";const i=({children:r,className:n,width:s,showCheckIcon:d=!0,...p})=>{const l=o.Children.map(r,e=>o.isValidElement(e)&&e.props.showCheckIcon===void 0?o.cloneElement(e,{showCheckIcon:d}):e);return c.jsx(h,{className:n,$width:s,...p,children:l})},h=m.div`
  display: flex;
  flex-direction: column;
  gap: ${a.gap["gap-1"]};
  padding: ${a.gap["gap-1"]};
  box-shadow: ${b.light["shadow-md"]};
  background-color: white;
  border: 1px solid ${u.light["color-border-primary"]};
  border-radius: 8px;
  box-sizing: border-box;
  width: ${({$width:r})=>typeof r=="number"?`${r}px`:r||"300px"};

  font-family: inherit;

  .dropdown-container & {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 1000;
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${t.gray[200]};
    border-radius: 3px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${t.gray[200]};
  }

  /* Firefox 스크롤바 스타일링 */
  scrollbar-width: thin;
  scrollbar-color: ${t.gray[200]} transparent;
`;i.displayName="Menu";i.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},showCheckIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};export{i as M};
