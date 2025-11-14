import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CfPRH8DN.js";import"./IconButton-D98FQVMo.js";import"./Badge-iklgXuo7.js";import"./Chip-DqJZ3sPW.js";import"./Switch-B8WuX9Eq.js";import"./Description-DfwxwJER.js";import{a as t}from"./Divider-BhBnXNh8.js";import"./TokenField-CCb14O1H.js";import"./Modal-CndAsBvx.js";import"./MultiSelect-B3ftpr1V.js";import"./TokenInput-DOQBCG3P.js";import"./RadioButton-CNmdk_II.js";import"./Checkbox-BiAxtm0Y.js";import"./SegmentItem-Cy8gk3wU.js";import"./Avatar-3LcKuBts.js";import"./TabItem-m7Fxoe23.js";import"./ChipTabs-CvL8UiJR.js";import"./Popover-XUEM66av.js";import"./StepIndicator-DsJtboWX.js";import"./Breadcrumbs-Bh7HOAxN.js";import"./BreadcrumbItem-rZactkzG.js";import"./Pagination-BDU9hHg1.js";import"./Callout-D-HaHMLJ.js";import"./iframe-BHft69wN.js";import{S as n}from"./icon_person_outline_20-BLL_i_2_.js";import"./textColor-D0IOlZFP.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BvgEy7kx.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-CFCJ4kQt.js";import"./IconCheck-CKtc9n1_.js";import"./shadow-DVq_1U2q.js";import"./index-DkBUQ841.js";import"./index-ozoOrkhF.js";import"./icon_close_outline_16-k-AbNaCs.js";import"./icon_chevron-right_outline_20-imTU_PIC.js";import"./icon_more_outline_16-BinJb7E7.js";import"./icon_chevron-right_outline_16-CHY6qzl0.js";import"./icon_warning_fill_20-Y-OSlo9j.js";const we={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},o={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n,disabled:!0})})]})};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const Oe=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{o as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,Oe as __namedExportsOrder,we as default};
