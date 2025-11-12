import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./TextButton-CpbRADpV.js";import"./IconButton-DPwmrlkw.js";import"./Badge-BYa12gh4.js";import"./Chip-DMtgpq-1.js";import"./Switch-BpzoXOE3.js";import"./Modal-EGUhGtk-.js";import"./Divider-BvtqPxml.js";import{M as s,C as t}from"./MultiSelect-BUB7_A9z.js";import"./RadioButton-CeocnUgI.js";import"./Checkbox-6ZL5Y69K.js";import"./SegmentItem-D_-L965A.js";import"./Avatar-57MeHwR3.js";import"./TabItem-DdI3rYbx.js";import"./ChipTabs-BQusOK2b.js";import"./Popover-CjDfy0OH.js";import"./StepIndicator-oogB6Erw.js";import"./Breadcrumbs-81e4onWP.js";import"./BreadcrumbItem-Bvp9bF9b.js";import"./Pagination-BGOTvj5y.js";import"./Callout-DgCnwa0b.js";import"./textColor-DfwQzZyK.js";import"./iframe-0zuFSAZt.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-B2BIrreU.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-Dj6QPiUi.js";import"./index-CgNDZSnM.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-WP7xOrib.js";import"./icon_chevron-right_outline_20-Bo539BZv.js";import"./icon_more_outline_16-2_XAPqVg.js";import"./icon_chevron-right_outline_16-DvrJ-HcK.js";import"./icon_warning_fill_20-D37yJvtZ.js";const Ie={title:"Components/Menu",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:{type:"text"},description:"Menu의 너비 (예: 300px, 100%, 20rem)"},showCheckIcon:{control:{type:"boolean"},description:"active 상태의 Cell에 체크 아이콘 표시 여부"}}},o={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C",disable:!0})]})},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"홈",leadingIcon:()=>e.jsx("div",{children:"🏠"})}),e.jsx(t,{text:"설정",leadingIcon:()=>e.jsx("div",{children:"⚙️"}),active:!0}),e.jsx(t,{text:"도움말",leadingIcon:()=>e.jsx("div",{children:"❓"})})]})},i={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),e.jsx(t,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),e.jsx(t,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})},a={render:r=>e.jsxs(s,{...r,style:{maxHeight:"200px",overflowY:"auto"},children:[e.jsx(t,{text:"항목 1"}),e.jsx(t,{text:"항목 2"}),e.jsx(t,{text:"항목 3"}),e.jsx(t,{text:"항목 4"}),e.jsx(t,{text:"항목 5"}),e.jsx(t,{text:"항목 6"}),e.jsx(t,{text:"항목 7"}),e.jsx(t,{text:"항목 8"}),e.jsx(t,{text:"항목 9"}),e.jsx(t,{text:"항목 10"}),e.jsx(t,{text:"항목 11"}),e.jsx(t,{text:"항목 12"}),e.jsx(t,{text:"항목 13"}),e.jsx(t,{text:"항목 14"}),e.jsx(t,{text:"항목 15"})]})},x={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]}),args:{width:"400px"}},l={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]}),args:{showCheckIcon:!1}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" disable />
        </Menu>
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,C;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="홈" leadingIcon={() => <div>🏠</div>} />
            <Cell text="설정" leadingIcon={() => <div>⚙️</div>} active />
            <Cell text="도움말" leadingIcon={() => <div>❓</div>} />
        </Menu>
}`,...(C=(u=n.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var j,g,h;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="기본 설정" description="일반적인 설정을 관리합니다" />
            <Cell text="고급 설정" description="고급 옵션을 관리합니다" active />
            <Cell text="시스템 설정" description="시스템 레벨 설정입니다" disable />
        </Menu>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,M,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(M=a.parameters)==null?void 0:M.docs)==null?void 0:I.source}}};var W,f,w;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" />
        </Menu>,
  args: {
    width: "400px"
  }
}`,...(w=(f=x.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var S,y,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" />
        </Menu>,
  args: {
    showCheckIcon: false
  }
}`,...(A=(y=l.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const We=["Default","WithIcons","WithDescriptions","WithScroll","CustomWidth","WithoutCheckIcon"];export{x as CustomWidth,o as Default,i as WithDescriptions,n as WithIcons,a as WithScroll,l as WithoutCheckIcon,We as __namedExportsOrder,Ie as default};
