import{j as i}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CfPRH8DN.js";import"./IconButton-D98FQVMo.js";import"./Badge-iklgXuo7.js";import"./Chip-DqJZ3sPW.js";import"./Switch-B8WuX9Eq.js";import"./Description-DfwxwJER.js";import{D as r}from"./Divider-BhBnXNh8.js";import"./TokenField-CCb14O1H.js";import"./Modal-CndAsBvx.js";import"./MultiSelect-B3ftpr1V.js";import"./TokenInput-DOQBCG3P.js";import"./RadioButton-CNmdk_II.js";import"./Checkbox-BiAxtm0Y.js";import"./SegmentItem-Cy8gk3wU.js";import"./Avatar-3LcKuBts.js";import"./TabItem-m7Fxoe23.js";import"./ChipTabs-CvL8UiJR.js";import"./Popover-XUEM66av.js";import"./StepIndicator-DsJtboWX.js";import"./Breadcrumbs-Bh7HOAxN.js";import"./BreadcrumbItem-rZactkzG.js";import"./Pagination-BDU9hHg1.js";import"./Callout-D-HaHMLJ.js";import"./textColor-D0IOlZFP.js";import"./iframe-BHft69wN.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BvgEy7kx.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-CFCJ4kQt.js";import"./IconCheck-CKtc9n1_.js";import"./shadow-DVq_1U2q.js";import"./index-DkBUQ841.js";import"./index-ozoOrkhF.js";import"./icon_close_outline_16-k-AbNaCs.js";import"./icon_chevron-right_outline_20-imTU_PIC.js";import"./icon_more_outline_16-BinJb7E7.js";import"./icon_chevron-right_outline_16-CHY6qzl0.js";import"./icon_warning_fill_20-Y-OSlo9j.js";const gi={title:"Components/Divider",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"]},thickness:{control:{type:"select"},options:[1,2,4,6,8,12]}},args:{orientation:"horizontal",thickness:2}},e={render:t=>{const o=t.orientation==="vertical",v=o?{height:160,padding:16,display:"flex",alignItems:"stretch"}:{width:360,padding:16};return i.jsx("div",{style:v,children:o?i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{style:{marginBottom:12},children:"상단 콘텐츠"}),i.jsx(r,{...t}),i.jsx("div",{style:{marginTop:12},children:"하단 콘텐츠"})]})})}},n={args:{orientation:"vertical",thickness:4},render:t=>i.jsxs("div",{style:{height:160,padding:16,display:"flex",alignItems:"stretch"},children:[i.jsx("div",{style:{flex:1,paddingRight:12},children:"왼쪽"}),i.jsx(r,{...t,style:{margin:"0 12px"}}),i.jsx("div",{style:{flex:1,paddingLeft:12},children:"오른쪽"})]})},s={render:()=>i.jsx("div",{style:{width:360,display:"flex",flexDirection:"column",gap:12},children:[1,2,4,6,8,12].map(t=>i.jsx(r,{thickness:t},t))})};var a,p,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const hi=["Horizontal","Vertical","ThicknessVariants"];export{e as Horizontal,s as ThicknessVariants,n as Vertical,hi as __namedExportsOrder,gi as default};
