import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as se}from"./iframe-Be3fNCx8.js";import"./SolidButton-CzJM5nVM.js";import"./TextButton-DRvSZvGD.js";import"./IconButton-DFPdq5N0.js";import"./Badge-DdzEY2hb.js";import"./Chip-ucWShcng.js";import"./Switch-CtVqeiEU.js";import"./Description-B56RMClo.js";import"./Divider-BpLIalLV.js";import"./TextArea-BljBlgx4.js";import"./TokenField-BWzuLUkV.js";import{S as r}from"./Modal-CBx9w7Je.js";import"./MultiSelect-Be_gT19w.js";import"./TokenInput-DWkQ1v10.js";import"./Cell-D6VgZh7M.js";import"./RadioButton-DOC6iVUY.js";import"./Checkbox-CrEAfHDi.js";import"./SegmentItem-Dgvnx1rg.js";import"./AvatarGroup-B5gRIbbA.js";import"./TabItem-RktXs_wK.js";import"./ChipTabs-BJ1cOtxH.js";import"./Popover-B40EFjVD.js";import"./StepIndicator-7ifx_Xux.js";import"./Breadcrumbs-B60ob1AB.js";import"./BreadcrumbItem-BVpsK8wa.js";import"./Pagination-BL1OTTtz.js";import"./Callout-CxKhVuaQ.js";import"./TopBannerList-b_uq7end.js";import"./Tooltip-CfF3yy9V.js";import"./VisualTooltip-DMuJV6MB.js";import"./LoadingIndicator-BZBfj5dd.js";import"./styled-components.browser.esm-Bi-oSbV3.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-BgKwhzy0.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-DIzVsw-M.js";import"./index-BdTsljNY.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BG5Obkqt.js";import"./icon_chevron-down_outline_16-CISygCd4.js";import"./icon_chevron-right_outline_20-HuiV8UKM.js";import"./icon_more_outline_16-C1R-_W_j.js";import"./icon_chevron-right_outline_16-DZz1a8UZ.js";import"./icon_warning_fill_16-B3IwdrL6.js";import"./icon_close_outline_24-CJogBg-5.js";const o=t=>{const[ne,re]=se.useState(t.value||"");return e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...t,value:ne,onChange:ie=>re(ie)})})},n=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],ct={title:"Components/Selector",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"선택해주세요.",options:n,lang:"ko"}},i={render:t=>e.jsx(o,{...t})},s={args:{size:"small"},render:t=>e.jsx(o,{...t})},a={args:{size:"medium"},render:t=>e.jsx(o,{...t})},l={args:{size:"large"},render:t=>e.jsx(o,{...t})},p={args:{disabled:!0},render:t=>e.jsx(o,{...t})},d={args:{active:!0},render:t=>e.jsx(o,{...t})},m={args:{focused:!0},render:t=>e.jsx(o,{...t})},c={args:{value:"option2"},render:t=>e.jsx(o,{...t})},h={args:{lang:"ko",placeholder:"옵션을 선택해주세요."},render:t=>e.jsx(o,{...t})},x={args:{lang:"en",placeholder:"Please select an option.",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]},render:t=>e.jsx(o,{...t})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(o,{size:"small",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(o,{size:"medium",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(o,{size:"large",options:n})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default"}),e.jsx(o,{options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active"}),e.jsx(r,{active:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Focused"}),e.jsx(r,{focused:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled"}),e.jsx(r,{disabled:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"With Selected Value"}),e.jsx(r,{value:"option3",options:n})]})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정"}),e.jsx(o,{style:{width:"150px"},options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정 (넓게)"}),e.jsx(o,{style:{width:"400px"},options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"부모 컨테이너로 감싸기"}),e.jsx("div",{style:{width:"250px"},children:e.jsx(o,{options:n})})]})]})};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SelectorWithState {...args} />
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,W,z;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <SelectorWithState {...args} />
}`,...(z=(W=s.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var b,O,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <SelectorWithState {...args} />
}`,...(B=(O=a.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var w,D,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <SelectorWithState {...args} />
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var E,V,k;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: args => <SelectorWithState {...args} />
}`,...(k=(V=p.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var C,F,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    active: true
  },
  render: args => <SelectorWithState {...args} />
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,K,P;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    focused: true
  },
  render: args => <SelectorWithState {...args} />
}`,...(P=(K=m.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var _,R,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: "option2"
  },
  render: args => <SelectorWithState {...args} />
}`,...(T=(R=c.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,G,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    lang: "ko",
    placeholder: "옵션을 선택해주세요."
  },
  render: args => <SelectorWithState {...args} />
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,N;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    lang: "en",
    placeholder: "Please select an option.",
    options: [{
      value: "option1",
      label: "Option 1"
    }, {
      value: "option2",
      label: "Option 2"
    }, {
      value: "option3",
      label: "Option 3"
    }, {
      value: "option4",
      label: "Option 4"
    }, {
      value: "option5",
      label: "Option 5"
    }]
  },
  render: args => <SelectorWithState {...args} />
}`,...(N=(J=x.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "300px"
  }}>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Small
        </h4>
        <SelectorWithState size="small" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Medium
        </h4>
        <SelectorWithState size="medium" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Large
        </h4>
        <SelectorWithState size="large" options={sampleOptions} />
      </div>
    </div>
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "300px"
  }}>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Default
        </h4>
        <SelectorWithState options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Active
        </h4>
        <Selector active options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Focused
        </h4>
        <Selector focused options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Disabled
        </h4>
        <Selector disabled options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          With Selected Value
        </h4>
        <Selector value="option3" options={sampleOptions} />
      </div>
    </div>
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,oe;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          style prop으로 width 설정
        </h4>
        <SelectorWithState style={{
        width: "150px"
      }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          style prop으로 width 설정 (넓게)
        </h4>
        <SelectorWithState style={{
        width: "400px"
      }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          부모 컨테이너로 감싸기
        </h4>
        <div style={{
        width: "250px"
      }}>
          <SelectorWithState options={sampleOptions} />
        </div>
      </div>
    </div>
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const ht=["Default","Small","Medium","Large","Disabled","Active","Focused","WithSelectedValue","Korean","English","AllSizes","AllStates","CustomWidth"];export{d as Active,g as AllSizes,u as AllStates,S as CustomWidth,i as Default,p as Disabled,x as English,m as Focused,h as Korean,l as Large,a as Medium,s as Small,c as WithSelectedValue,ht as __namedExportsOrder,ct as default};
