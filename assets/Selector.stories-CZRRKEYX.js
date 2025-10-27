import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as ie}from"./iframe-BzjFrS7f.js";import"./TextButton-CAd2sxX4.js";import"./IconButton-BE_G9b4W.js";import"./Badge-DfgXqUfJ.js";import"./Chip-DzBmF_5h.js";import"./Switch-t5GE3qTK.js";import{S as r}from"./Modal-BM_FYd5I.js";import"./Divider-Cx9XZ3Mz.js";import"./RadioButton-BGrXjNft.js";import"./Checkbox-CGTnvghj.js";import"./SegmentItem-Ux0hyNui.js";import"./Avatar-h89cGKPl.js";import"./TabItem-DjVLBqsA.js";import"./ChipTabs-CqbXXvKW.js";import"./Popover-DIEsijRc.js";import"./StepIndicator-BRzWF2Hu.js";import"./Breadcrumbs-DO9168kg.js";import"./BreadcrumbItem-By8v6BDS.js";import"./textColor-VG1q_E22.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-D27fzZze.js";import"./negativeColor-C6enJIYV.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BQBSiVi4.js";import"./IconCheck-CKtc9n1_.js";import"./index-CfmQkq6j.js";import"./index-BNKHZTDG.js";import"./shadow-DVq_1U2q.js";import"./icon_chevron-right_outline_20-BER81jGv.js";const n=t=>{const[oe,re]=ie.useState(t.value||"");return e.jsx("div",{style:{width:"200px"},children:e.jsx(r,{...t,value:oe,onChange:se=>re(se)})})},o=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],Je={title:"Components/Selector",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"선택해주세요.",options:o,lang:"ko"}},s={render:t=>e.jsx(n,{...t})},i={args:{size:"small"},render:t=>e.jsx(n,{...t})},a={args:{size:"medium"},render:t=>e.jsx(n,{...t})},l={args:{size:"large"},render:t=>e.jsx(n,{...t})},p={args:{disabled:!0},render:t=>e.jsx(n,{...t})},d={args:{active:!0},render:t=>e.jsx(n,{...t})},c={args:{focused:!0},render:t=>e.jsx(n,{...t})},m={args:{value:"option2"},render:t=>e.jsx(n,{...t})},h={args:{lang:"ko",placeholder:"옵션을 선택해주세요."},render:t=>e.jsx(n,{...t})},x={args:{lang:"en",placeholder:"Please select an option.",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]},render:t=>e.jsx(n,{...t})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(n,{size:"small",options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(n,{size:"medium",options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(n,{size:"large",options:o})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default"}),e.jsx(n,{options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active"}),e.jsx(r,{active:!0,options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Focused"}),e.jsx(r,{focused:!0,options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled"}),e.jsx(r,{disabled:!0,options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"With Selected Value"}),e.jsx(r,{value:"option3",options:o})]})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정"}),e.jsx(n,{style:{width:"150px"},options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정 (넓게)"}),e.jsx(n,{style:{width:"400px"},options:o})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"부모 컨테이너로 감싸기"}),e.jsx("div",{style:{width:"250px"},children:e.jsx(n,{options:o})})]})]})};var v,f,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <SelectorWithState {...args} />
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var j,W,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <SelectorWithState {...args} />
}`,...(z=(W=i.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var b,O,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(L=(F=d.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var M,K,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    focused: true
  },
  render: args => <SelectorWithState {...args} />
}`,...(P=(K=c.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var _,R,T;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: "option2"
  },
  render: args => <SelectorWithState {...args} />
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,G,H;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Ne=["Default","Small","Medium","Large","Disabled","Active","Focused","WithSelectedValue","Korean","English","AllSizes","AllStates","CustomWidth"];export{d as Active,g as AllSizes,u as AllStates,S as CustomWidth,s as Default,p as Disabled,x as English,c as Focused,h as Korean,l as Large,a as Medium,i as Small,m as WithSelectedValue,Ne as __namedExportsOrder,Je as default};
