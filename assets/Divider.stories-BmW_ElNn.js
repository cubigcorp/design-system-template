import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DwvN_TXb.js";import"./TextButton-CRptdRaB.js";import"./IconButton-BCNlrvL2.js";import"./Badge-nmeP92-9.js";import"./Chip-B5N5G07W.js";import"./Switch-CSotuUYW.js";import"./Description-Ds4hNMff.js";import{D as r}from"./Divider-2r6jQjOb.js";import"./TextArea-CLXbY6ZZ.js";import"./TokenField-C5RsBID8.js";import"./Modal-Dr8o01SI.js";import"./MultiSelect-BVzNU6cI.js";import"./TokenInput-BAsF9xth.js";import"./Cell-8MmQy4eh.js";import"./RadioButton-Ce_aQAYu.js";import"./Checkbox-a1ovuTmi.js";import"./SegmentItem-AjRoN-5b.js";import"./AvatarGroup-z4vPWkg7.js";import"./TabItem-CTvDpp8x.js";import"./ChipTabs-DiU8IepT.js";import"./Popover-DyNkxlAH.js";import"./StepIndicator-B_R-wluK.js";import"./Breadcrumbs-Bj7gAOLl.js";import"./BreadcrumbItem-BXoSglyz.js";import"./Pagination-CSu2ZYOB.js";import"./Callout-TPL6Unxx.js";import"./TopBannerList-DSbxA4q_.js";import"./styled-components.browser.esm-NAFAd1pi.js";import"./iframe-CLq260Vv.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CQk7typa.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-B3AN0JjZ.js";import"./index-B10INhRO.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-DCKO5HpX.js";import"./icon_chevron-down_outline_16-BCpvU5sq.js";import"./icon_chevron-right_outline_20-DbATkBuU.js";import"./icon_more_outline_16-Ci-oZiXB.js";import"./icon_chevron-right_outline_16-Bl_-1HYQ.js";import"./icon_warning_fill_16-_f__sB9b.js";import"./icon_close_outline_24-Qmrgn_fd.js";const ji={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const s=t.orientation==="vertical",v=s?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:s?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},o={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var p,a,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ui=["Horizontal","Vertical","ThicknessVariants"];export{e as Horizontal,o as ThicknessVariants,n as Vertical,ui as __namedExportsOrder,ji as default};
