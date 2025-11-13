import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-D1cIZjhV.js";import"./IconButton-BNottR1o.js";import"./Badge-CNaGLjMH.js";import"./Chip-CS8t43y8.js";import"./Switch-BKUog0cr.js";import"./Modal-C2F0Gmo0.js";import"./Divider-sGsS4GJq.js";import{M as o,C as e}from"./MultiSelect-m799H96c.js";import"./RadioButton-BGFuyrnY.js";import"./Checkbox-CmpFekSw.js";import"./SegmentItem-XlaNryx-.js";import"./Avatar-k52IQh9m.js";import"./TabItem-lEJeREj1.js";import"./ChipTabs-BLeEPQgx.js";import"./Popover-cKxTpZuv.js";import"./StepIndicator-QVT_5RNU.js";import"./Breadcrumbs-RVD0fIZk.js";import"./BreadcrumbItem-B_bR3PR_.js";import"./Pagination-D1HpbYT4.js";import"./Callout-Cu8q00y4.js";import"./iframe-JToMoQwA.js";import{S as A}from"./icon_document_outline_16-DrIeJro-.js";import{S as B}from"./icon_home_outline_16-BNu8G8VX.js";import{S as D}from"./icon_search_outline_16-DnPPnc1j.js";import"./textColor-VSYzZJ7c.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-nzIo1LJY.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-C75CzVkA.js";import"./index-Bb6pKqtJ.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-CglF3kTa.js";import"./icon_chevron-right_outline_20-U-q8TaHN.js";import"./icon_more_outline_16-DHsLabO8.js";import"./icon_chevron-right_outline_16-qj2KdLCS.js";import"./icon_warning_fill_20-MgqB3LX0.js";const yt={title:"Components/Menu",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:{type:"text"},description:"Menu의 너비 (예: 300px, 100%, 20rem)"},showCheckIcon:{control:{type:"boolean"},description:"active 상태의 Cell에 체크 아이콘 표시 여부"}}},s={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"선택 항목 A"}),t.jsx(e,{text:"선택 항목 B",active:!0}),t.jsx(e,{text:"선택 항목 C",disable:!0})]})},n={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"홈",leadingContent:()=>t.jsx(B,{})}),t.jsx(e,{text:"검색",leadingContent:()=>t.jsx(D,{}),active:!0}),t.jsx(e,{text:"문서",leadingContent:()=>t.jsx(A,{})})]})},i={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),t.jsx(e,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),t.jsx(e,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})},a={render:r=>t.jsxs(o,{...r,style:{maxHeight:"200px",overflowY:"auto"},children:[t.jsx(e,{text:"항목 1"}),t.jsx(e,{text:"항목 2"}),t.jsx(e,{text:"항목 3"}),t.jsx(e,{text:"항목 4"}),t.jsx(e,{text:"항목 5"}),t.jsx(e,{text:"항목 6"}),t.jsx(e,{text:"항목 7"}),t.jsx(e,{text:"항목 8"}),t.jsx(e,{text:"항목 9"}),t.jsx(e,{text:"항목 10"}),t.jsx(e,{text:"항목 11"}),t.jsx(e,{text:"항목 12"}),t.jsx(e,{text:"항목 13"}),t.jsx(e,{text:"항목 14"}),t.jsx(e,{text:"항목 15"})]})},x={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"선택 항목 A"}),t.jsx(e,{text:"선택 항목 B",active:!0}),t.jsx(e,{text:"선택 항목 C"})]}),args:{width:"400px"}},l={render:r=>t.jsxs(o,{...r,children:[t.jsx(e,{text:"선택 항목 A"}),t.jsx(e,{text:"선택 항목 B",active:!0}),t.jsx(e,{text:"선택 항목 C"})]}),args:{showCheckIcon:!1}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text="선택 항목 A" />
      <Cell text="선택 항목 B" active />
      <Cell text="선택 항목 C" disable />
    </Menu>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(O=l.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const At=["Default","WithIcons","WithDescriptions","WithScroll","CustomWidth","WithoutCheckIcon"];export{x as CustomWidth,s as Default,i as WithDescriptions,n as WithIcons,a as WithScroll,l as WithoutCheckIcon,At as __namedExportsOrder,yt as default};
