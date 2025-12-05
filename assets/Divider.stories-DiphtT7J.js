import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-HpTwvWQk.js";import"./TextButton-XrPx0pw7.js";import"./IconButton-CyxIHy06.js";import"./Badge-DRHGqa4Z.js";import"./Chip-CEXq_-E5.js";import"./Switch-B4fCNq5p.js";import"./Description-Dyel34PL.js";import{D as r}from"./Divider-Dq8ytqWZ.js";import"./TokenField-B7_vGxJQ.js";import"./Modal-DYwizTEV.js";import"./MultiSelect-BkO7T0KA.js";import"./TokenInput-B8ht-Tl1.js";import"./RadioButton-DWta9Zm8.js";import"./Checkbox-DSOZFEdq.js";import"./SegmentItem-Cr76Bm5C.js";import"./AvatarGroup-BR7IYKRC.js";import"./TabItem-PsGXRM65.js";import"./ChipTabs-tpFIE3jL.js";import"./Popover-DV7lHTpu.js";import"./StepIndicator-_iH-KyOf.js";import"./Breadcrumbs-Ca8laPeu.js";import"./BreadcrumbItem-CCtw_3uf.js";import"./Pagination-DOD1MY71.js";import"./Callout-BmGHdrc5.js";import"./TopBannerList-CO4SjdHc.js";import"./styled-components.browser.esm-D8ZmqkE2.js";import"./iframe-a1GnT4YX.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CP_HZA18.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-D0zUuoUb.js";import"./index-DD2r5x0Y.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-C1Rgh5Su.js";import"./icon_chevron-down_outline_16-BKYl0qe1.js";import"./icon_chevron-right_outline_20-yYlfPX17.js";import"./icon_more_outline_16-DRcevk2L.js";import"./icon_chevron-right_outline_16-BcwzNf6T.js";import"./icon_warning_fill_20-3rKIbhBD.js";import"./icon_close_outline_24-BjbV28Vx.js";const yi={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const o=t.orientation==="vertical",v=o?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:o?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var a,p,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 360,
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      {[1, 2, 4, 6, 8, 12].map(t => <Divider key={t} thickness={t as any} />)}
    </div>
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const fi=["Horizontal","Vertical","ThicknessVariants"];export{e as Horizontal,s as ThicknessVariants,n as Vertical,fi as __namedExportsOrder,yi as default};
