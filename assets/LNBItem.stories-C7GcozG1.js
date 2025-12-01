import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-BMI0LqLP.js";import"./TextButton-B8cZLpCV.js";import"./IconButton-BZZ7Nxif.js";import"./Badge-DfTBtlCo.js";import"./Chip-BjeTR3wB.js";import"./Switch-BDWOpgMw.js";import"./Description-DO1GCdwH.js";import{a as t}from"./Divider-CSrVyn5T.js";import"./TokenField-CViaGcij.js";import"./Modal-CcoVxuMq.js";import"./MultiSelect-Ci8tKadh.js";import"./TokenInput-7AGq97vK.js";import"./RadioButton-DVF7T91U.js";import"./Checkbox-ZHpKmE77.js";import"./SegmentItem-BLdvI_U7.js";import"./Avatar-DCoyq4yY.js";import"./TabItem-C1yHXy1I.js";import"./ChipTabs-NkiaKioG.js";import"./Popover-DwiT_qC0.js";import"./StepIndicator-BRQFcWgv.js";import"./Breadcrumbs-CAUKcN2v.js";import"./BreadcrumbItem-CtSs3zMR.js";import"./Pagination-KWi2fhJc.js";import"./Callout-DCAWk28E.js";import"./TopBannerList-dqNPKfDW.js";import"./iframe-BW59HvWr.js";import{S as o}from"./icon_person_outline_20-CUMgpYwd.js";import"./styled-components.browser.esm-LFH3Vo6z.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CLMa4i3o.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-RVdj8V17.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-n2NQl2Z2.js";import"./index-XOCDTUM8.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-D6z4KUf_.js";import"./icon_chevron-right_outline_20-Bqrd4CrV.js";import"./icon_more_outline_16-DGG-ak_5.js";import"./icon_chevron-right_outline_16-Dvyid-gW.js";import"./icon_warning_fill_20-BjTu5Lbv.js";import"./icon_close_outline_24-DGwHfkqA.js";const Be={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 280
  }}>
      <LNBItem {...args} leadingIcon={IconPersonOutline20} />
    </div>
}`,...(m=(l=n.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,u,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const Le=["Default","Selected","Disabled","WithoutIcon","IconOnly"];export{n as Default,s as Disabled,a as IconOnly,i as Selected,d as WithoutIcon,Le as __namedExportsOrder,Be as default};
