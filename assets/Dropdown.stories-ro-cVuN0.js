import{j as e}from"./jsx-runtime-DTznObQx.js";import{r as re}from"./iframe-CjirL-zO.js";import"./TextButton-D5Adrbv1.js";import"./IconButton-BdsP7Vsa.js";import"./Badge-Ctow1l-W.js";import"./Chip-Bj0HymeE.js";import"./Switch-Cria1NZb.js";import{b as Z}from"./Modal-C0K_zPG7.js";import"./Divider-DPsXWRY6.js";import"./RadioButton-DSGlJG0x.js";import"./SegmentItem-CsM-u3nW.js";import"./styled-components.browser.esm-CbqwAcww.js";import"./color-BKBaEAUu.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C94_pvKu.js";import"./textColor-C1-D1tBN.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Csj-7xh3.js";import"./brandColor-B7_BrDA7.js";import"./negativeColor-CUiOZlpg.js";import"./cautioniaryColor-C8_Dgx5E.js";import"./typography-BoZiIk0D.js";import"./IconSearch-B_QqHMsf.js";import"./index-ClmC-Btd.js";import"./shadow-DVq_1U2q.js";import"./layerColor-B93vltC5.js";const r=o=>{const[$,ee]=re.useState(o.value||"");return e.jsx("div",{style:{width:"300px"},children:e.jsx(Z,{...o,value:$,onChange:oe=>ee(oe)})})},t=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],Ie={title:"Components/Dropdown",component:Z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["selector","combobox"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},label:{control:{type:"text"}},labelType:{control:{type:"select"},options:["default","required","optional"]},description:{control:{type:"text"}},descriptionLeadingIcon:{control:{type:"boolean"}},status:{control:{type:"select"},options:["default","negative","positive"]},lang:{control:{type:"select"},options:["ko","en"]}},args:{type:"selector",size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"선택해주세요.",options:t,label:"라벨",labelType:"default",description:"설명 텍스트입니다.",descriptionLeadingIcon:!1,status:"default",lang:"ko"}},n={render:o=>e.jsx(r,{...o})},s={args:{type:"selector",placeholder:"선택해주세요.",label:"선택 전용 드롭다운",description:"옵션을 선택할 수 있습니다."},render:o=>e.jsx(r,{...o})},a={args:{type:"combobox",placeholder:"입력하거나 선택해주세요.",label:"검색 가능한 드롭다운",description:"텍스트를 입력하거나 옵션을 선택할 수 있습니다."},render:o=>e.jsx(r,{...o})},i={args:{size:"small"},render:o=>e.jsx(r,{...o})},p={args:{size:"medium"},render:o=>e.jsx(r,{...o})},l={args:{size:"large"},render:o=>e.jsx(r,{...o})},d={args:{disabled:!0,description:"비활성화된 상태입니다."},render:o=>e.jsx(r,{...o})},c={args:{labelType:"required",label:"필수 선택 항목"},render:o=>e.jsx(r,{...o})},m={args:{status:"negative",description:"선택이 필요합니다.",descriptionLeadingIcon:!0},render:o=>e.jsx(r,{...o})},u={args:{status:"positive",value:"option2",description:"선택이 완료되었습니다.",descriptionLeadingIcon:!0},render:o=>e.jsx(r,{...o})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Selector Type (선택만 가능)"}),e.jsx(r,{type:"selector",label:"과일 선택",placeholder:"과일을 선택하세요",options:t,description:"드롭다운에서 옵션을 선택합니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"ComboBox Type (입력 + 선택 가능)"}),e.jsx(r,{type:"combobox",label:"과일 검색",placeholder:"과일을 검색하거나 선택하세요",options:t,description:"직접 입력하거나 옵션을 선택할 수 있습니다."})]})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(r,{size:"small",label:"작은 크기",options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(r,{size:"medium",label:"보통 크기",options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(r,{size:"large",label:"큰 크기",options:t})]})]})};var h,y,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,v,f;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: "selector",
    placeholder: "선택해주세요.",
    label: "선택 전용 드롭다운",
    description: "옵션을 선택할 수 있습니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(f=(v=s.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,W,z;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: "combobox",
    placeholder: "입력하거나 선택해주세요.",
    label: "검색 가능한 드롭다운",
    description: "텍스트를 입력하거나 옵션을 선택할 수 있습니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(z=(W=a.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var D,w,T;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <DropdownWithState {...args} />
}`,...(T=(w=i.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var B,L,C;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <DropdownWithState {...args} />
}`,...(C=(L=p.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var O,I,q;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <DropdownWithState {...args} />
}`,...(q=(I=l.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var E,M,R;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "비활성화된 상태입니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var k,A,_;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    labelType: "required",
    label: "필수 선택 항목"
  },
  render: args => <DropdownWithState {...args} />
}`,...(_=(A=c.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var V,F,G;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    status: "negative",
    description: "선택이 필요합니다.",
    descriptionLeadingIcon: true
  },
  render: args => <DropdownWithState {...args} />
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    status: "positive",
    value: "option2",
    description: "선택이 완료되었습니다.",
    descriptionLeadingIcon: true
  },
  render: args => <DropdownWithState {...args} />
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,P,Q;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    width: "400px"
  }}>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Selector Type (선택만 가능)
        </h4>
        <DropdownWithState type="selector" label="과일 선택" placeholder="과일을 선택하세요" options={sampleOptions} description="드롭다운에서 옵션을 선택합니다." />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          ComboBox Type (입력 + 선택 가능)
        </h4>
        <DropdownWithState type="combobox" label="과일 검색" placeholder="과일을 검색하거나 선택하세요" options={sampleOptions} description="직접 입력하거나 옵션을 선택할 수 있습니다." />
      </div>
    </div>
}`,...(Q=(P=g.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <DropdownWithState size="small" label="작은 크기" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Medium
        </h4>
        <DropdownWithState size="medium" label="보통 크기" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Large
        </h4>
        <DropdownWithState size="large" label="큰 크기" options={sampleOptions} />
      </div>
    </div>
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const qe=["Default","SelectorType","ComboBoxType","Small","Medium","Large","Disabled","Required","WithError","WithSuccess","TypeComparison","AllSizes"];export{x as AllSizes,a as ComboBoxType,n as Default,d as Disabled,l as Large,p as Medium,c as Required,s as SelectorType,i as Small,g as TypeComparison,m as WithError,u as WithSuccess,qe as __namedExportsOrder,Ie as default};
