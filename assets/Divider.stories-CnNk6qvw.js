import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-CzJM5nVM.js";import"./TextButton-DRvSZvGD.js";import"./IconButton-DFPdq5N0.js";import"./Badge-DdzEY2hb.js";import"./Chip-ucWShcng.js";import"./Switch-CtVqeiEU.js";import"./Description-B56RMClo.js";import{D as r}from"./Divider-BpLIalLV.js";import"./TextArea-BljBlgx4.js";import"./TokenField-BWzuLUkV.js";import"./Modal-CBx9w7Je.js";import"./MultiSelect-Be_gT19w.js";import"./TokenInput-DWkQ1v10.js";import"./Cell-D6VgZh7M.js";import"./RadioButton-DOC6iVUY.js";import"./Checkbox-CrEAfHDi.js";import"./SegmentItem-Dgvnx1rg.js";import"./AvatarGroup-B5gRIbbA.js";import"./TabItem-RktXs_wK.js";import"./ChipTabs-BJ1cOtxH.js";import"./Popover-B40EFjVD.js";import"./StepIndicator-7ifx_Xux.js";import"./Breadcrumbs-B60ob1AB.js";import"./BreadcrumbItem-BVpsK8wa.js";import"./Pagination-BL1OTTtz.js";import"./Callout-CxKhVuaQ.js";import"./TopBannerList-b_uq7end.js";import"./Tooltip-CfF3yy9V.js";import"./VisualTooltip-DMuJV6MB.js";import"./LoadingIndicator-BZBfj5dd.js";import"./styled-components.browser.esm-Bi-oSbV3.js";import"./iframe-Be3fNCx8.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BgKwhzy0.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-DIzVsw-M.js";import"./index-BdTsljNY.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BG5Obkqt.js";import"./icon_chevron-down_outline_16-CISygCd4.js";import"./icon_chevron-right_outline_20-HuiV8UKM.js";import"./icon_more_outline_16-C1R-_W_j.js";import"./icon_chevron-right_outline_16-DZz1a8UZ.js";import"./icon_warning_fill_16-B3IwdrL6.js";import"./icon_close_outline_24-CJogBg-5.js";const Di={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const s=t.orientation==="vertical",v=s?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:s?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},o={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var p,a,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
