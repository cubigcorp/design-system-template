import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-BWm9zfBB.js";import"./TextButton-Cvo0_Zr2.js";import"./IconButton-BxZYZRAk.js";import"./Badge-C5CxWWD7.js";import"./Chip-Dx01glpx.js";import"./Switch-BXlEV2rj.js";import"./Description-D4YxYopu.js";import{D as r}from"./Divider-B0zBtno6.js";import"./TextArea-CDFE6ZNQ.js";import"./TokenField-DTX1I5tR.js";import"./Modal-CRJDywJd.js";import"./MultiSelect-CgVzvalu.js";import"./TokenInput-n1-UAOBK.js";import"./Cell-uPEC0LHr.js";import"./RadioButton-Bg6RGF6E.js";import"./Checkbox-CyW6S2aj.js";import"./SegmentItem-DifZQV4b.js";import"./AvatarGroup-DOasWrc-.js";import"./TabItem-B1Axl3FC.js";import"./ChipTabs-DatwC7IU.js";import"./Popover-BG0t7Lgj.js";import"./StepIndicator-Dl7ErwsQ.js";import"./Breadcrumbs-DY1hXHOb.js";import"./BreadcrumbItem-B4OrNilU.js";import"./Pagination-OzWcjtg_.js";import"./Callout-B3GHQxSt.js";import"./TopBannerList-BR_yAR86.js";import"./Tooltip-sfY783B9.js";import"./VisualTooltip-C_fU4rMG.js";import"./LoadingIndicator-EODCaYwk.js";import"./styled-components.browser.esm-DACqo_di.js";import"./iframe-DsZmfmOb.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-wPoFq3SY.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-DZY6qEX2.js";import"./index-D5vsYfoV.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BZGIwxbY.js";import"./icon_chevron-down_outline_16-tRVij8Rm.js";import"./icon_chevron-right_outline_20-BIhyK1Br.js";import"./icon_more_outline_16-DXoQCE1u.js";import"./icon_chevron-right_outline_16-CiMheT-i.js";import"./icon_warning_fill_16-fQJKWKPC.js";import"./icon_close_outline_24-D3FUB-mi.js";const Di={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const s=t.orientation==="vertical",v=s?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:s?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},o={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var p,a,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Si=["Horizontal","Vertical","ThicknessVariants"];export{e as Horizontal,o as ThicknessVariants,n as Vertical,Si as __namedExportsOrder,Di as default};
