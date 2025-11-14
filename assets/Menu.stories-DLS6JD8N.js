import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CfPRH8DN.js";import"./IconButton-D98FQVMo.js";import"./Badge-iklgXuo7.js";import"./Chip-DqJZ3sPW.js";import"./Switch-B8WuX9Eq.js";import"./Description-DfwxwJER.js";import"./Divider-BhBnXNh8.js";import"./TokenField-CCb14O1H.js";import"./Modal-CndAsBvx.js";import{M as o,C as e}from"./MultiSelect-B3ftpr1V.js";import"./TokenInput-DOQBCG3P.js";import"./RadioButton-CNmdk_II.js";import"./Checkbox-BiAxtm0Y.js";import"./SegmentItem-Cy8gk3wU.js";import"./Avatar-3LcKuBts.js";import"./TabItem-m7Fxoe23.js";import"./ChipTabs-CvL8UiJR.js";import"./Popover-XUEM66av.js";import"./StepIndicator-DsJtboWX.js";import"./Breadcrumbs-Bh7HOAxN.js";import"./BreadcrumbItem-rZactkzG.js";import"./Pagination-BDU9hHg1.js";import"./Callout-D-HaHMLJ.js";import"./iframe-BHft69wN.js";import{S as A}from"./icon_document_outline_16-CpmvPiOD.js";import{S as B}from"./icon_home_outline_16-XbuU_sEp.js";import{S as D}from"./icon_search_outline_16-BSLELwtv.js";import"./textColor-D0IOlZFP.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BvgEy7kx.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-CFCJ4kQt.js";import"./IconCheck-CKtc9n1_.js";import"./shadow-DVq_1U2q.js";import"./index-DkBUQ841.js";import"./index-ozoOrkhF.js";import"./icon_close_outline_16-k-AbNaCs.js";import"./icon_chevron-right_outline_20-imTU_PIC.js";import"./icon_more_outline_16-BinJb7E7.js";import"./icon_chevron-right_outline_16-CHY6qzl0.js";import"./icon_warning_fill_20-Y-OSlo9j.js";const Dt={title:"Components/Menu",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:{type:"text"},description:"Menu의 너비 (예: 300px, 100%, 20rem)"},showCheckIcon:{control:{type:"boolean"},description:"active 상태의 Cell에 체크 아이콘 표시 여부"}}},s={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"선택 항목 A"}),t.jsx(e,{text:"선택 항목 B",active:!0}),t.jsx(e,{text:"선택 항목 C",disable:!0})]})},n={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"홈",leadingContent:()=>t.jsx(B,{})}),t.jsx(e,{text:"검색",leadingContent:()=>t.jsx(D,{}),active:!0}),t.jsx(e,{text:"문서",leadingContent:()=>t.jsx(A,{})})]})},i={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),t.jsx(e,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),t.jsx(e,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})},a={render:r=>t.jsxs(o,{...r,style:{maxHeight:"200px",overflowY:"auto"},children:[t.jsx(e,{text:"항목 1"}),t.jsx(e,{text:"항목 2"}),t.jsx(e,{text:"항목 3"}),t.jsx(e,{text:"항목 4"}),t.jsx(e,{text:"항목 5"}),t.jsx(e,{text:"항목 6"}),t.jsx(e,{text:"항목 7"}),t.jsx(e,{text:"항목 8"}),t.jsx(e,{text:"항목 9"}),t.jsx(e,{text:"항목 10"}),t.jsx(e,{text:"항목 11"}),t.jsx(e,{text:"항목 12"}),t.jsx(e,{text:"항목 13"}),t.jsx(e,{text:"항목 14"}),t.jsx(e,{text:"항목 15"})]})},x={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"선택 항목 A"}),t.jsx(e,{text:"선택 항목 B",active:!0}),t.jsx(e,{text:"선택 항목 C"})]}),args:{width:"400px"}},l={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"선택 항목 A"}),t.jsx(e,{text:"선택 항목 B",active:!0}),t.jsx(e,{text:"선택 항목 C"})]}),args:{showCheckIcon:!1}};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text="선택 항목 A" />
      <Cell text="선택 항목 B" active />
      <Cell text="선택 항목 C" disable />
    </Menu>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text="홈" leadingContent={() => <IconHomeOutline16 />} />
      <Cell text="검색" leadingContent={() => <IconSearchOutline16 />} active />
      <Cell text="문서" leadingContent={() => <IconDocumentOutline16 />} />
    </Menu>
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var j,g,h;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text="기본 설정" description="일반적인 설정을 관리합니다" />
      <Cell text="고급 설정" description="고급 옵션을 관리합니다" active />
      <Cell text="시스템 설정" description="시스템 레벨 설정입니다" disable />
    </Menu>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,M,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Menu {...args} style={{
    maxHeight: "200px",
    overflowY: "auto"
  }}>
      <Cell text="항목 1" />
      <Cell text="항목 2" />
      <Cell text="항목 3" />
      <Cell text="항목 4" />
      <Cell text="항목 5" />
      <Cell text="항목 6" />
      <Cell text="항목 7" />
      <Cell text="항목 8" />
      <Cell text="항목 9" />
      <Cell text="항목 10" />
      <Cell text="항목 11" />
      <Cell text="항목 12" />
      <Cell text="항목 13" />
      <Cell text="항목 14" />
      <Cell text="항목 15" />
    </Menu>
}`,...(S=(M=a.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var I,f,W;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text="선택 항목 A" />
      <Cell text="선택 항목 B" active />
      <Cell text="선택 항목 C" />
    </Menu>,
  args: {
    width: "400px"
  }
}`,...(W=(f=x.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};var w,O,y;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text="선택 항목 A" />
      <Cell text="선택 항목 B" active />
      <Cell text="선택 항목 C" />
    </Menu>,
  args: {
    showCheckIcon: false
  }
}`,...(y=(O=l.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const bt=["Default","WithIcons","WithDescriptions","WithScroll","CustomWidth","WithoutCheckIcon"];export{x as CustomWidth,s as Default,i as WithDescriptions,n as WithIcons,a as WithScroll,l as WithoutCheckIcon,bt as __namedExportsOrder,Dt as default};
