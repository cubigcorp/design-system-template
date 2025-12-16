import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as se}from"./iframe-CLq260Vv.js";import"./SolidButton-DwvN_TXb.js";import"./TextButton-CRptdRaB.js";import"./IconButton-BCNlrvL2.js";import"./Badge-nmeP92-9.js";import"./Chip-B5N5G07W.js";import"./Switch-CSotuUYW.js";import"./Description-Ds4hNMff.js";import"./Divider-2r6jQjOb.js";import"./TextArea-CLXbY6ZZ.js";import"./TokenField-C5RsBID8.js";import{S as r}from"./Modal-Dr8o01SI.js";import"./MultiSelect-BVzNU6cI.js";import"./TokenInput-BAsF9xth.js";import"./Cell-8MmQy4eh.js";import"./RadioButton-Ce_aQAYu.js";import"./Checkbox-a1ovuTmi.js";import"./SegmentItem-AjRoN-5b.js";import"./AvatarGroup-z4vPWkg7.js";import"./TabItem-CTvDpp8x.js";import"./ChipTabs-DiU8IepT.js";import"./Popover-DyNkxlAH.js";import"./StepIndicator-B_R-wluK.js";import"./Breadcrumbs-Bj7gAOLl.js";import"./BreadcrumbItem-BXoSglyz.js";import"./Pagination-CSu2ZYOB.js";import"./Callout-TPL6Unxx.js";import"./TopBannerList-DSbxA4q_.js";import"./styled-components.browser.esm-NAFAd1pi.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-CQk7typa.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-B3AN0JjZ.js";import"./index-B10INhRO.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-DCKO5HpX.js";import"./icon_chevron-down_outline_16-BCpvU5sq.js";import"./icon_chevron-right_outline_20-DbATkBuU.js";import"./icon_more_outline_16-Ci-oZiXB.js";import"./icon_chevron-right_outline_16-Bl_-1HYQ.js";import"./icon_warning_fill_16-_f__sB9b.js";import"./icon_close_outline_24-Qmrgn_fd.js";const o=t=>{const[ne,re]=se.useState(t.value||"");return e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...t,value:ne,onChange:ie=>re(ie)})})},n=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],pt={title:"Components/Selector",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"선택해주세요.",options:n,lang:"ko"}},i={render:t=>e.jsx(o,{...t})},s={args:{size:"small"},render:t=>e.jsx(o,{...t})},a={args:{size:"medium"},render:t=>e.jsx(o,{...t})},l={args:{size:"large"},render:t=>e.jsx(o,{...t})},p={args:{disabled:!0},render:t=>e.jsx(o,{...t})},d={args:{active:!0},render:t=>e.jsx(o,{...t})},m={args:{focused:!0},render:t=>e.jsx(o,{...t})},c={args:{value:"option2"},render:t=>e.jsx(o,{...t})},h={args:{lang:"ko",placeholder:"옵션을 선택해주세요."},render:t=>e.jsx(o,{...t})},x={args:{lang:"en",placeholder:"Please select an option.",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]},render:t=>e.jsx(o,{...t})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(o,{size:"small",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(o,{size:"medium",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(o,{size:"large",options:n})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default"}),e.jsx(o,{options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active"}),e.jsx(r,{active:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Focused"}),e.jsx(r,{focused:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled"}),e.jsx(r,{disabled:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"With Selected Value"}),e.jsx(r,{value:"option3",options:n})]})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정"}),e.jsx(o,{style:{width:"150px"},options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정 (넓게)"}),e.jsx(o,{style:{width:"400px"},options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"부모 컨테이너로 감싸기"}),e.jsx("div",{style:{width:"250px"},children:e.jsx(o,{options:n})})]})]})};var v,f,y;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const dt=["Default","Small","Medium","Large","Disabled","Active","Focused","WithSelectedValue","Korean","English","AllSizes","AllStates","CustomWidth"];export{d as Active,g as AllSizes,u as AllStates,S as CustomWidth,i as Default,p as Disabled,x as English,m as Focused,h as Korean,l as Large,a as Medium,s as Small,c as WithSelectedValue,dt as __namedExportsOrder,pt as default};
