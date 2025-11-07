import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-D1W7C0GC.js";import"./IconButton-tPVuUMwW.js";import"./Badge-XH_b2dlL.js";import"./Chip-CYvyTBzz.js";import"./Switch-C9UUxSxc.js";import"./Modal-BArbp18o.js";import{a as t}from"./Divider-BJa8Ry4L.js";import"./Cell-D2pfdMqd.js";import"./iframe-7NLoKurR.js";import"./RadioButton-DrG67hvi.js";import"./Checkbox-CvmOXReI.js";import"./SegmentItem-Bk3c17RY.js";import"./Avatar-BVDzaWdL.js";import"./TabItem-Knn_etMb.js";import"./ChipTabs-Db8lp65g.js";import"./Popover-C3WWpJbg.js";import"./StepIndicator-Bv8RNF5w.js";import"./Breadcrumbs-BLlQJJGk.js";import"./BreadcrumbItem-C1JYnNr7.js";import"./Pagination-neq7-wI6.js";import"./Callout-MiwBNLex.js";import{S as n}from"./icon_person_outline_20-BlQzyYh0.js";import"./textColor-Dt7bNVQe.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-FiL6u5Da.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-SjQIEdkG.js";import"./index-6VrKTyFP.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-BkN0NIyV.js";import"./icon_more_outline_16-CX8XbVFc.js";import"./icon_chevron-right_outline_16-CQ6TtxX-.js";import"./icon_warning_fill_20-CgzT1W8w.js";const ve={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},o={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n,disabled:!0})})]})};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    selected: true
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var I,y,v;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var h,x,j;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} />
    </div>
}`,...(j=(x=d.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var w,O,f;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    iconOnly: true
  },
  render: args => <div style={{
    display: "flex",
    gap: "8px",
    width: "fit-content"
  }}>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} />
      </div>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} selected={true} />
      </div>
      <div style={{
      width: 60
    }}>
        <LNBItem {...args} leadingIcon={IconPersonOutline20} disabled={true} />
      </div>
    </div>
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const he=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{o as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,he as __namedExportsOrder,ve as default};
