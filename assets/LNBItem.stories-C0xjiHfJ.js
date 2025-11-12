import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-DKzKKgJe.js";import"./IconButton-DUWI3L8U.js";import"./Badge-BA77Uaia.js";import"./Chip-DtOnXOlk.js";import"./Switch-CHtD0Zg9.js";import"./Modal-mui9Nalf.js";import{a as t}from"./Divider-amPfPX3C.js";import"./MultiSelect-BSVJc2TI.js";import"./RadioButton-3XarPk4D.js";import"./Checkbox-DJi0Ao7V.js";import"./SegmentItem-BtD0HnOO.js";import"./Avatar-DYtUty3x.js";import"./TabItem-D6RUblIa.js";import"./ChipTabs-BxdPrMgi.js";import"./Popover-EpW5ar2L.js";import"./StepIndicator-CL_Rzg5k.js";import"./Breadcrumbs-BckW0Rh_.js";import"./BreadcrumbItem-CjmC1udJ.js";import"./Pagination-D6ipj0fL.js";import"./Callout-CTtFryld.js";import"./iframe-DZAM4DrV.js";import{S as n}from"./icon_person_outline_20-yKnyuVJa.js";import"./textColor-mVK3GUDS.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-vH51abfD.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-ChusoG7V.js";import"./index-B-UmYoEE.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-CZSVxaXM.js";import"./icon_chevron-right_outline_20-y6lJCMBl.js";import"./icon_more_outline_16-sQH_6JiS.js";import"./icon_chevron-right_outline_16-r4KP0Fs1.js";import"./icon_warning_fill_20-BU11HBOE.js";const he={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},o={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:n})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:n,disabled:!0})})]})};var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const xe=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{o as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,xe as __namedExportsOrder,he as default};
