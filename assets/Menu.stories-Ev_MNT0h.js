import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-D9vhgvCg.js";import"./IconButton-CFd66S_a.js";import"./Badge-NCuk_XD2.js";import"./Chip-wVMU096n.js";import"./Switch-BBQihkXN.js";import"./Modal-ByYLA3qx.js";import"./Divider-Ud07jQJb.js";import{M as n,C as t}from"./Cell-Dff2EPQ2.js";import"./RadioButton-DNR-VLfJ.js";import"./Checkbox-C7jOusG4.js";import"./SegmentItem-BCJhUXBO.js";import{A as m}from"./Avatar-CaLTBNVW.js";import"./TabItem-Bw8KzxLe.js";import"./ChipTabs-k-HdBLKe.js";import"./Popover-DqOSX8LZ.js";import"./StepIndicator-D2EsyQPc.js";import"./Breadcrumbs-C73QIOlL.js";import"./BreadcrumbItem-C4EsRO2j.js";import"./Pagination-Bhc6C4_Y.js";import"./Callout-Bn36_4aF.js";import"./textColor-DMnf996G.js";import"./iframe-BmWS9Sei.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-6DHp7H22.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-Q9uUbnOr.js";import"./index-c0fiXNkb.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-DK8uhy6v.js";import"./icon_more_outline_16-ehcG0kJM.js";import"./icon_chevron-right_outline_16-OEk3jo7Q.js";import"./icon_warning_fill_20-CYDmaotP.js";const Se={title:"Components/Menu",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:{type:"text"},description:"Menu의 너비 (예: 300px, 100%, 20rem)"},showCheckIcon:{control:{type:"boolean"},description:"active 상태의 Cell에 체크 아이콘 표시 여부"}}},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C",disable:!0})]})},o={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"홈",leadingContent:e.jsx("div",{children:"🏠"})}),e.jsx(t,{text:"설정",leadingContent:e.jsx("div",{children:"⚙️"}),active:!0}),e.jsx(t,{text:"도움말",leadingContent:e.jsx("div",{children:"❓"})})]})},a={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),e.jsx(t,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),e.jsx(t,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})},i={render:r=>e.jsxs(n,{...r,style:{maxHeight:"200px",overflowY:"auto"},children:[e.jsx(t,{text:"항목 1"}),e.jsx(t,{text:"항목 2"}),e.jsx(t,{text:"항목 3"}),e.jsx(t,{text:"항목 4"}),e.jsx(t,{text:"항목 5"}),e.jsx(t,{text:"항목 6"}),e.jsx(t,{text:"항목 7"}),e.jsx(t,{text:"항목 8"}),e.jsx(t,{text:"항목 9"}),e.jsx(t,{text:"항목 10"}),e.jsx(t,{text:"항목 11"}),e.jsx(t,{text:"항목 12"}),e.jsx(t,{text:"항목 13"}),e.jsx(t,{text:"항목 14"}),e.jsx(t,{text:"항목 15"})]})},l={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]}),args:{width:"400px"}},x={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]}),args:{showCheckIcon:!1}},c={render:r=>e.jsxs(n,{...r,children:[e.jsx(t,{text:"김철수",description:"ceo@company.com",leadingContent:e.jsx(m,{size:"small",name:"김철수"})}),e.jsx(t,{text:"박영희",description:"manager@company.com",leadingContent:e.jsx(m,{size:"small",name:"박영희"}),active:!0}),e.jsx(t,{text:"이민수",description:"dev@company.com",leadingContent:e.jsx(m,{size:"small",name:"이민수"})})]})};var p,d,C;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" disable />
        </Menu>
}`,...(C=(d=s.parameters)==null?void 0:d.docs)==null?void 0:C.source}}};var u,j,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="홈" leadingContent={<div>🏠</div>} />
            <Cell text="설정" leadingContent={<div>⚙️</div>} active />
            <Cell text="도움말" leadingContent={<div>❓</div>} />
        </Menu>
}`,...(g=(j=o.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var h,v,M;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="기본 설정" description="일반적인 설정을 관리합니다" />
            <Cell text="고급 설정" description="고급 옵션을 관리합니다" active />
            <Cell text="시스템 설정" description="시스템 레벨 설정입니다" disable />
        </Menu>
}`,...(M=(v=a.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var A,y,W;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(y=i.parameters)==null?void 0:y.docs)==null?void 0:W.source}}};var f,S,w;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" />
        </Menu>,
  args: {
    width: "400px"
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,z,B;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" />
        </Menu>,
  args: {
    showCheckIcon: false
  }
}`,...(B=(z=x.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var b,k,D;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="김철수" description="ceo@company.com" leadingContent={<Avatar size="small" name="김철수" />} />
            <Cell text="박영희" description="manager@company.com" leadingContent={<Avatar size="small" name="박영희" />} active />
            <Cell text="이민수" description="dev@company.com" leadingContent={<Avatar size="small" name="이민수" />} />
        </Menu>
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};const we=["Default","WithIcons","WithDescriptions","WithScroll","CustomWidth","WithoutCheckIcon","WithAvatar"];export{l as CustomWidth,s as Default,c as WithAvatar,a as WithDescriptions,o as WithIcons,i as WithScroll,x as WithoutCheckIcon,we as __namedExportsOrder,Se as default};
