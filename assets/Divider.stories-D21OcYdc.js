import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DiUg7Oe2.js";import"./TextButton-Bhy_pj9h.js";import"./IconButton-Ckd5Kzg7.js";import"./Badge-DqfpFiiJ.js";import"./Chip-BEbScxvp.js";import"./Switch-DMuFMUx3.js";import"./Description-CgJdkAhF.js";import{D as r}from"./Divider-uGoGs9iF.js";import"./TextArea-CqMn28y0.js";import"./TokenField-CHJLyzMo.js";import"./Modal-CZnLwamM.js";import"./MultiSelect-DRDRFDCv.js";import"./TokenInput-QnJLx-9q.js";import"./Cell-bkDkwhmH.js";import"./RadioButton-BphB9Xf9.js";import"./Checkbox-DD8aZVQT.js";import"./SegmentItem-DXX5fZiH.js";import"./AvatarGroup-CX5JjXbm.js";import"./TabItem-CY416s89.js";import"./ChipTabs-5LfA4djK.js";import"./Popover-BDGQaLdQ.js";import"./StepIndicator-D_4EX1l3.js";import"./Breadcrumbs-D_wxAlwr.js";import"./BreadcrumbItem-Dv3U5xk5.js";import"./Pagination-MKr8N35P.js";import"./Callout-CrzalG_1.js";import"./TopBannerList-B3kvZrWF.js";import"./Tooltip-8N6yqZki.js";import"./styled-components.browser.esm-CPJhxV7n.js";import"./iframe-L1CEGzuW.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-IPgNsnGg.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-jhqWgfOc.js";import"./index-DmyLRZ_Y.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-1ahVzeUX.js";import"./icon_chevron-down_outline_16-B3vMYtLH.js";import"./icon_chevron-right_outline_20-CAThzgjg.js";import"./icon_more_outline_16-BhWNgq1Z.js";import"./icon_chevron-right_outline_16-e7vq1GRS.js";import"./icon_warning_fill_16-CeuyuPad.js";import"./icon_close_outline_24-4CpKikC8.js";const ui={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const s=t.orientation==="vertical",v=s?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:s?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},o={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var p,a,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
