import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-B8ii7VF0.js";import"./TextButton-C2j2pduc.js";import"./IconButton-BZ52vZnD.js";import"./Badge-byPUrVAb.js";import"./Chip-Dixwg7pl.js";import"./Switch-BoCdc09X.js";import"./Description-DGhVcbIc.js";import{D as r}from"./Divider-9dLS3L-o.js";import"./TokenField-BFYVKFco.js";import"./Modal-7HolkznZ.js";import"./MultiSelect-CfAYXC2V.js";import"./TokenInput-iWPhX6ne.js";import"./Cell-D-SI0M8V.js";import"./RadioButton-SFRrqgDM.js";import"./Checkbox-BD9rGHG8.js";import"./SegmentItem-KXlXbmYI.js";import"./AvatarGroup-BPpMwOCM.js";import"./TabItem-DlPfV_2p.js";import"./ChipTabs-CMwRXU92.js";import"./Popover-DZ_qKFR_.js";import"./StepIndicator-D6Z_MCRR.js";import"./Breadcrumbs-C15ccovY.js";import"./BreadcrumbItem-jSAyKDDM.js";import"./Pagination-BVM6UNKF.js";import"./Callout-Dri5iXUz.js";import"./TopBannerList-DguNlKqv.js";import"./styled-components.browser.esm-C8ZrTVSh.js";import"./iframe-BWSb8WuG.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-C89vGHlB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Bka6C5bA.js";import"./index-BiH-g9Om.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-hoculNBG.js";import"./icon_chevron-down_outline_16-pwDvTksF.js";import"./icon_chevron-right_outline_20-CYeqvIYJ.js";import"./icon_more_outline_16-BgLl2r6c.js";import"./icon_chevron-right_outline_16-lKp3V03I.js";import"./icon_warning_fill_16-DrgncXxs.js";import"./icon_close_outline_24-BomUiEK8.js";const fi={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const s=t.orientation==="vertical",v=s?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:s?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},o={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var a,p,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,l,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ji=["Horizontal","Vertical","ThicknessVariants"];export{e as Horizontal,o as ThicknessVariants,n as Vertical,ji as __namedExportsOrder,fi as default};
