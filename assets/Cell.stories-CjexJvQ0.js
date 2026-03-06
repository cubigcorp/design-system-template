import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as t}from"./Cell-CGl_2yBH.js";import{A as x}from"./Avatar-BEnKGvzG.js";import{S as Y}from"./icon_home_outline_16-Ca9Gx1qI.js";import{S as Z}from"./icon_search_outline_16-D7I6rqFh.js";import"./styled-components.browser.esm-o0t8qbnT.js";import"./iframe-D0ynm1mK.js";import"./preload-helper-eJNa_G2e.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./textColor-DLZeZODc.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./borderColor-C_RHITEf.js";const ve={title:"Components/Cell",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disable:{control:{type:"boolean"}},active:{control:{type:"boolean"}},text:{control:{type:"text"}},description:{control:{type:"text"}}}},n={args:{text:"선택 항목"}},r={args:{text:"선택된 항목",active:!0}},a={args:{text:"비활성화된 항목",disable:!0}},o={args:{text:"설정 항목",description:"설정을 관리합니다"}},s={args:{text:"선택된 설정",description:"현재 선택된 설정입니다",active:!0}},i={args:{text:"홈",leadingContent:()=>e.jsx("div",{children:"🏠"})}},c={args:{text:"사용자 정의 아이콘",active:!0,trailingIcon:()=>e.jsx("div",{children:"⭐"})}},p={args:{text:"John Doe",description:"john.doe@example.com",leadingContent:()=>e.jsx(x,{type:"initial",size:"small",value:"JD"})}},l={args:{text:"Jane Smith",description:"Designer",leadingContent:()=>e.jsx(x,{type:"default",size:"small",src:"https://i.pravatar.cc/150?img=1",alt:"Jane Smith"})}},m={args:{text:"홈",description:"메인 페이지로 이동",leadingContent:()=>e.jsx(Y,{})}},d={args:{text:"설정",description:"앱 설정 관리",leadingContent:()=>e.jsx(Z,{}),active:!0}},g={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"300px"},children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px"},children:"Avatar (small)"}),e.jsx(t,{text:"John Doe",description:"john.doe@example.com",leadingContent:()=>e.jsx(x,{type:"initial",size:"small",value:"JD"})}),e.jsx(t,{text:"Jane Smith",description:"Designer",leadingContent:()=>e.jsx(x,{type:"default",size:"small",src:"https://i.pravatar.cc/150?img=1",alt:"Jane Smith"})}),e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",marginTop:"16px",marginBottom:"8px"},children:"Icon (16px)"}),e.jsx(t,{text:"홈",description:"메인 페이지로 이동",leadingContent:()=>e.jsx(Y,{})}),e.jsx(t,{text:"검색",description:"앱 검색",leadingContent:()=>e.jsx(Z,{}),active:!0})]})};var u,h,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: '선택 항목'
  }
}`,...(v=(h=n.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var S,C,f;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: '선택된 항목',
    active: true
  }
}`,...(f=(C=r.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var j,y,D;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: '비활성화된 항목',
    disable: true
  }
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var W,I,A;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    text: '설정 항목',
    description: '설정을 관리합니다'
  }
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var J,z,b;s.parameters={...s.parameters,docs:{...(J=s.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    text: '선택된 설정',
    description: '현재 선택된 설정입니다',
    active: true
  }
}`,...(b=(z=s.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var O,T,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: '홈',
    leadingContent: () => <div>🏠</div>
  }
}`,...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,H,w;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    text: '사용자 정의 아이콘',
    active: true,
    trailingIcon: () => <div>⭐</div>
  }
}`,...(w=(H=c.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var E,_,R;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'John Doe',
    description: 'john.doe@example.com',
    leadingContent: () => <Avatar type='initial' size='small' value='JD' />
  }
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var k,q,F;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Jane Smith',
    description: 'Designer',
    leadingContent: () => <Avatar type='default' size='small' src='https://i.pravatar.cc/150?img=1' alt='Jane Smith' />
  }
}`,...(F=(q=l.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var G,K,M;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: '홈',
    description: '메인 페이지로 이동',
    leadingContent: () => <IconHomeOutline16 />
  }
}`,...(M=(K=m.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var N,P,Q;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: '설정',
    description: '앱 설정 관리',
    leadingContent: () => <IconSearchOutline16 />,
    active: true
  }
}`,...(Q=(P=d.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,V,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    width: '300px'
  }}>
      <h4 style={{
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '8px'
    }}>Avatar (small)</h4>
      <Cell text='John Doe' description='john.doe@example.com' leadingContent={() => <Avatar type='initial' size='small' value='JD' />} />
      <Cell text='Jane Smith' description='Designer' leadingContent={() => <Avatar type='default' size='small' src='https://i.pravatar.cc/150?img=1' alt='Jane Smith' />} />

      <h4 style={{
      fontSize: '14px',
      fontWeight: '600',
      marginTop: '16px',
      marginBottom: '8px'
    }}>
        Icon (16px)
      </h4>
      <Cell text='홈' description='메인 페이지로 이동' leadingContent={() => <IconHomeOutline16 />} />
      <Cell text='검색' description='앱 검색' leadingContent={() => <IconSearchOutline16 />} active={true} />
    </div>
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const Se=["Default","Active","Disabled","WithDescription","ActiveWithDescription","WithLeadingContent","WithTrailingIcon","WithAvatar","WithAvatarImage","WithIcon16","WithIcon16Settings","LeadingContentComparison"];export{r as Active,s as ActiveWithDescription,n as Default,a as Disabled,g as LeadingContentComparison,p as WithAvatar,l as WithAvatarImage,o as WithDescription,m as WithIcon16,d as WithIcon16Settings,i as WithLeadingContent,c as WithTrailingIcon,Se as __namedExportsOrder,ve as default};
