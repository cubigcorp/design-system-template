import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-BcUMzX_A.js";import"./TextButton-NDJ5oWzE.js";import"./IconButton-Cb91DsQD.js";import"./Badge-vM4GooXy.js";import"./Chip-HIssDOCO.js";import"./Switch-C1TRoKRf.js";import"./Description-BhBHcy_n.js";import{a as t}from"./Divider-BSL2sHoA.js";import"./TokenField-CRd9oYzu.js";import"./Modal-BzfX_Nge.js";import"./MultiSelect-BZ6_1V1S.js";import"./TokenInput-BoEy11KB.js";import"./RadioButton-CLLF1cfK.js";import"./Checkbox-BRz07VQT.js";import"./SegmentItem-cfVFyr6f.js";import"./Avatar-B2XXRFZR.js";import"./TabItem-GDFiVMWh.js";import"./ChipTabs-mwXHxNJv.js";import"./Popover-h0ZdYXXn.js";import"./StepIndicator-DOFhlqMJ.js";import"./Breadcrumbs-DERSzfp0.js";import"./BreadcrumbItem-XrAPfeCN.js";import"./Pagination-CMmHaBnB.js";import"./Callout-b3fcYtRL.js";import"./TopBannerList-DcxFWTlk.js";import"./iframe-CFH4n1Bp.js";import{S as o}from"./icon_person_outline_20-CXAj4Lf0.js";import"./styled-components.browser.esm-3frt-ZcS.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner--PI8--bU.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-RVdj8V17.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Ct1INyvY.js";import"./index-B2X5vA45.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-C1PFpe7I.js";import"./icon_chevron-right_outline_20-MXuI3Edx.js";import"./icon_more_outline_16-DZ4M33YM.js";import"./icon_chevron-right_outline_16-Bo2Uc8Le.js";import"./icon_warning_fill_20-Cwzo1r-E.js";import"./icon_close_outline_24-O86MQuS9.js";const Be={title:"Components/LNB/Item",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"text"}},selected:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},iconOnly:{control:{type:"boolean"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{value:"내 정보",selected:!1,disabled:!1,lang:"ko"}},n={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},i={args:{selected:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},s={args:{disabled:!0},render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r,leadingIcon:o})})},d={render:r=>e.jsx("div",{style:{width:280},children:e.jsx(t,{...r})})},a={args:{iconOnly:!0},render:r=>e.jsxs("div",{style:{display:"flex",gap:"8px",width:"fit-content"},children:[e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,selected:!0})}),e.jsx("div",{style:{width:60},children:e.jsx(t,{...r,leadingIcon:o,disabled:!0})})]})};var p,l,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
