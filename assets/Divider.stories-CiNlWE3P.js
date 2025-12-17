import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-CTctQxeZ.js";import"./TextButton-CXpGOKX3.js";import"./IconButton-Bv68sEx8.js";import"./Badge-BCTf-qPg.js";import"./Chip-lhXuK-3B.js";import"./Switch-DQZ7MDUp.js";import"./Description-DRonXOGg.js";import{D as r}from"./Divider-Dei8BPPg.js";import"./TextArea-BDspXE9f.js";import"./TokenField-nLnBHRqF.js";import"./Modal-CxSatUok.js";import"./MultiSelect-DCEsc4ij.js";import"./TokenInput-CoomSBFn.js";import"./Cell-BklELOiT.js";import"./RadioButton-U8FJAElS.js";import"./Checkbox-BIYlN_io.js";import"./SegmentItem-l2OC_lAf.js";import"./AvatarGroup-Cmgmp10x.js";import"./TabItem-qtp7hG4A.js";import"./ChipTabs-B3pW6-bj.js";import"./Popover-BrhbPqGz.js";import"./StepIndicator-CA1YJTJK.js";import"./Breadcrumbs-Cnr1Xn5l.js";import"./BreadcrumbItem-Dp8OEHeH.js";import"./Pagination-TPAc-bI5.js";import"./Callout-BdijNj9n.js";import"./TopBannerList-A01-KLaE.js";import"./Tooltip-BE4ppvDj.js";import"./styled-components.browser.esm-I1_av-H2.js";import"./iframe-CWj9sbMl.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Co8_vjPW.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-C-O7jx-P.js";import"./index-6wKIx6lK.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BW0UzvCs.js";import"./icon_chevron-down_outline_16-Bci0QZD-.js";import"./icon_chevron-right_outline_20-DQNUsyeG.js";import"./icon_more_outline_16-Dz5Z7OYk.js";import"./icon_chevron-right_outline_16-DsS2hsY-.js";import"./icon_warning_fill_16-DAfyTFQ1.js";import"./icon_close_outline_24-C4RG46mS.js";const ui={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const s=t.orientation==="vertical",v=s?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:s?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},o={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var p,a,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const isVertical = args.orientation === "vertical";
    const wrapperStyle: React.CSSProperties = isVertical ? {
      height: 160,
      padding: 16,
      display: "flex",
      alignItems: "stretch"
    } : {
      width: 360,
      padding: 16
    };
    return <div style={wrapperStyle}>
        {isVertical ? <>
            <div style={{
          flex: 1,
          paddingRight: 12
        }}>왼쪽</div>
            <Divider {...args} style={{
          margin: "0 12px"
        }} />
            <div style={{
          flex: 1,
          paddingLeft: 12
        }}>오른쪽</div>
          </> : <>
            <div style={{
          marginBottom: 12
        }}>상단 콘텐츠</div>
            <Divider {...args} />
            <div style={{
          marginTop: 12
        }}>하단 콘텐츠</div>
          </>}
      </div>;
  }
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: "vertical",
    thickness: 4
  },
  render: args => <div style={{
    height: 160,
    padding: 16,
    display: "flex",
    alignItems: "stretch"
  }}>
      <div style={{
      flex: 1,
      paddingRight: 12
    }}>왼쪽</div>
      <Divider {...args} style={{
      margin: "0 12px"
    }} />
      <div style={{
      flex: 1,
      paddingLeft: 12
    }}>오른쪽</div>
    </div>
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,h,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      {[1, 2, 4, 6, 8, 12].map(t => <Divider key={t} thickness={t as any} />)}
    </div>
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ki=["Horizontal","Vertical","ThicknessVariants"];export{e as Horizontal,o as ThicknessVariants,n as Vertical,ki as __namedExportsOrder,ui as default};
