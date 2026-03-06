import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{M as s}from"./Menu-C2cyYB0M.js";import{C as t}from"./Cell-CGl_2yBH.js";import{S as A}from"./icon_home_outline_16-Ca9Gx1qI.js";import{S as B}from"./icon_search_outline_16-D7I6rqFh.js";import{S as D}from"./icon_document_outline_16-BJOU3ivG.js";import"./iframe-D0ynm1mK.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-o0t8qbnT.js";import"./borderColor-C_RHITEf.js";import"./color-CiwAFuFb.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./radius-DaoU83SK.js";import"./textColor-DLZeZODc.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const X={title:"Components/Menu",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:{type:"text"},description:"Menu의 너비 (예: 300px, 100%, 20rem)"},showCheckIcon:{control:{type:"boolean"},description:"active 상태의 Cell에 체크 아이콘 표시 여부"}}},n={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C",disable:!0})]})},o={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"홈",leadingContent:()=>e.jsx(A,{})}),e.jsx(t,{text:"검색",leadingContent:()=>e.jsx(B,{}),active:!0}),e.jsx(t,{text:"문서",leadingContent:()=>e.jsx(D,{})})]})},a={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"기본 설정",description:"일반적인 설정을 관리합니다"}),e.jsx(t,{text:"고급 설정",description:"고급 옵션을 관리합니다",active:!0}),e.jsx(t,{text:"시스템 설정",description:"시스템 레벨 설정입니다",disable:!0})]})},x={render:r=>e.jsxs(s,{...r,style:{maxHeight:"200px",overflowY:"auto"},children:[e.jsx(t,{text:"항목 1"}),e.jsx(t,{text:"항목 2"}),e.jsx(t,{text:"항목 3"}),e.jsx(t,{text:"항목 4"}),e.jsx(t,{text:"항목 5"}),e.jsx(t,{text:"항목 6"}),e.jsx(t,{text:"항목 7"}),e.jsx(t,{text:"항목 8"}),e.jsx(t,{text:"항목 9"}),e.jsx(t,{text:"항목 10"}),e.jsx(t,{text:"항목 11"}),e.jsx(t,{text:"항목 12"}),e.jsx(t,{text:"항목 13"}),e.jsx(t,{text:"항목 14"}),e.jsx(t,{text:"항목 15"})]})},l={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]}),args:{width:"400px"}},i={render:r=>e.jsxs(s,{...r,children:[e.jsx(t,{text:"선택 항목 A"}),e.jsx(t,{text:"선택 항목 B",active:!0}),e.jsx(t,{text:"선택 항목 C"})]}),args:{showCheckIcon:!1}};var c,p,m;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' disable />
    </Menu>
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,u,C;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text='홈' leadingContent={() => <IconHomeOutline16 />} />
      <Cell text='검색' leadingContent={() => <IconSearchOutline16 />} active />
      <Cell text='문서' leadingContent={() => <IconDocumentOutline16 />} />
    </Menu>
}`,...(C=(u=o.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var j,g,h;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text='기본 설정' description='일반적인 설정을 관리합니다' />
      <Cell text='고급 설정' description='고급 옵션을 관리합니다' active />
      <Cell text='시스템 설정' description='시스템 레벨 설정입니다' disable />
    </Menu>
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var v,M,S;x.parameters={...x.parameters,docs:{...(v=x.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Menu {...args} style={{
    maxHeight: '200px',
    overflowY: 'auto'
  }}>
      <Cell text='항목 1' />
      <Cell text='항목 2' />
      <Cell text='항목 3' />
      <Cell text='항목 4' />
      <Cell text='항목 5' />
      <Cell text='항목 6' />
      <Cell text='항목 7' />
      <Cell text='항목 8' />
      <Cell text='항목 9' />
      <Cell text='항목 10' />
      <Cell text='항목 11' />
      <Cell text='항목 12' />
      <Cell text='항목 13' />
      <Cell text='항목 14' />
      <Cell text='항목 15' />
    </Menu>
}`,...(S=(M=x.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var f,I,W;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' />
    </Menu>,
  args: {
    width: '400px'
  }
}`,...(W=(I=l.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var w,O,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Menu {...args}>
      <Cell text='선택 항목 A' />
      <Cell text='선택 항목 B' active />
      <Cell text='선택 항목 C' />
    </Menu>,
  args: {
    showCheckIcon: false
  }
}`,...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const Z=["Default","WithIcons","WithDescriptions","WithScroll","CustomWidth","WithoutCheckIcon"];export{l as CustomWidth,n as Default,a as WithDescriptions,o as WithIcons,x as WithScroll,i as WithoutCheckIcon,Z as __namedExportsOrder,X as default};
