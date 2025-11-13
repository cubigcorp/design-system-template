import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as he}from"./iframe-DXO2Jl0a.js";import"./TextButton-C5umyN-e.js";import"./IconButton-cgcdzzmh.js";import"./Badge-DrYD_RYI.js";import"./Chip-C7kqNOxO.js";import"./Switch-DPBr4-jY.js";import{a as de}from"./Modal-BdY8pxHU.js";import"./Divider-BUXNmmMR.js";import"./MultiSelect-BGsyggx5.js";import"./RadioButton-s-rSgsyI.js";import"./Checkbox-CJPGUeFb.js";import"./SegmentItem-DQmVyDdO.js";import"./Avatar-CuJ5U1_-.js";import"./TabItem-Cmt9LhSx.js";import"./ChipTabs-DPDLxggO.js";import"./Popover-CHHDxdex.js";import"./StepIndicator-K6_HjI-c.js";import"./Breadcrumbs-bUFPOcVf.js";import"./BreadcrumbItem-TlH3huuH.js";import"./Pagination-PJtHikfp.js";import"./Callout-C04NfASz.js";import"./textColor-CNZCqqg5.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./spacing-tE1IiUFl.js";import"./Spinner-Chd3iI2V.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-BBThIZ7c.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-BmX69--2.js";import"./IconCheck-CKtc9n1_.js";import"./index-7rRmEYki.js";import"./index-DYapGieK.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-CIR56TAn.js";import"./icon_chevron-right_outline_20-B7oOcCnW.js";import"./icon_more_outline_16-Cmb3Llzw.js";import"./icon_chevron-right_outline_16-crCqhhJA.js";import"./icon_warning_fill_20-GwW38p1r.js";const t=o=>{const[ce,me]=he.useState(o.type==="multiselect"?Array.isArray(o.value)?o.value:[]:o.value||"");return e.jsx("div",{style:{width:"300px"},children:e.jsx(de,{...o,value:ce,onChange:ue=>me(ue)})})},n=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"},{value:"option11",label:"옵션 11"},{value:"option12",label:"옵션 12"},{value:"option13",label:"옵션 13"},{value:"option14",label:"옵션 14"},{value:"option15",label:"옵션 15"},{value:"option16",label:"옵션 16"},{value:"option17",label:"옵션 17"},{value:"option18",label:"옵션 18"},{value:"option19",label:"옵션 19"},{value:"option20",label:"옵션 20"}],po={title:"Components/Dropdown",component:de,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["selector","combobox","multiselect"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},label:{control:{type:"text"}},labelType:{control:{type:"select"},options:["default","required","optional"]},description:{control:{type:"text"}},descriptionLeadingIcon:{control:{type:"boolean"}},status:{control:{type:"select"},options:["default","negative","positive"]},lang:{control:{type:"select"},options:["ko","en"]}},args:{type:"selector",size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"선택해주세요.",options:n,label:"라벨",labelType:"default",description:"설명 텍스트입니다.",descriptionLeadingIcon:!1,status:"default",lang:"ko"}},i={render:o=>e.jsx(t,{...o})},r={args:{type:"selector",placeholder:"선택해주세요.",label:"선택 전용 드롭다운",description:"옵션을 선택할 수 있습니다."},render:o=>e.jsx(t,{...o})},s={args:{type:"combobox",placeholder:"입력하거나 선택해주세요.",label:"검색 가능한 드롭다운",description:"텍스트를 입력하거나 옵션을 선택할 수 있습니다."},render:o=>e.jsx(t,{...o})},l={args:{type:"multiselect",placeholder:"여러 항목을 선택해주세요.",label:"다중 선택 드롭다운",description:"여러 옵션을 선택할 수 있습니다.",value:[]},render:o=>e.jsx(t,{...o})},p={args:{size:"small"},render:o=>e.jsx(t,{...o})},a={args:{size:"medium"},render:o=>e.jsx(t,{...o})},d={args:{size:"large"},render:o=>e.jsx(t,{...o})},c={args:{disabled:!0,description:"비활성화된 상태입니다."},render:o=>e.jsx(t,{...o})},m={args:{labelType:"required",label:"필수 선택 항목"},render:o=>e.jsx(t,{...o})},u={args:{status:"negative",description:"선택이 필요합니다.",descriptionLeadingIcon:!0},render:o=>e.jsx(t,{...o})},h={args:{status:"positive",value:"option2",description:"선택이 완료되었습니다.",descriptionLeadingIcon:!0},render:o=>e.jsx(t,{...o})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Selector Type (선택만 가능)"}),e.jsx(t,{type:"selector",label:"과일 선택",placeholder:"과일을 선택하세요",options:n,description:"드롭다운에서 옵션을 선택합니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"ComboBox Type (입력 + 선택 가능)"}),e.jsx(t,{type:"combobox",label:"과일 검색",placeholder:"과일을 검색하거나 선택하세요",options:n,description:"직접 입력하거나 옵션을 선택할 수 있습니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"MultiSelect Type (다중 선택 가능)"}),e.jsx(t,{type:"multiselect",label:"과일 다중 선택",placeholder:"여러 과일을 선택하세요",options:n,description:"여러 옵션을 선택할 수 있습니다.",value:[]})]})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(t,{size:"small",label:"작은 크기",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(t,{size:"medium",label:"보통 크기",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(t,{size:"large",label:"큰 크기",options:n})]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small (Chip: x-small)"}),e.jsx(t,{type:"multiselect",size:"small",label:"작은 크기",placeholder:"옵션 선택",options:n,value:["option1","option2"],description:"Small size에는 x-small Chip이 사용됩니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium (Chip: x-small)"}),e.jsx(t,{type:"multiselect",size:"medium",label:"보통 크기",placeholder:"옵션 선택",options:n,value:["option1","option2","option3"],description:"Medium size에는 x-small Chip이 사용됩니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large (Chip: small)"}),e.jsx(t,{type:"multiselect",size:"large",label:"큰 크기",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4"],description:"Large size에는 small Chip이 사용됩니다."})]})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:'lineMode = "single" (한 줄 고정, 가로 스크롤)'}),e.jsx(t,{type:"multiselect",size:"medium",label:"Single Line",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4","option5","option6","option7","option8"],lineMode:"single",description:"한 줄로만 표시되고, 가로 스크롤이 생깁니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:'lineMode = "multi" (최대 3줄, 이후 세로 스크롤)'}),e.jsx(t,{type:"multiselect",size:"medium",label:"Multi Line",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12","option13","option14","option15"],lineMode:"multi",description:"최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:'Large size with lineMode = "single"'}),e.jsx(t,{type:"multiselect",size:"large",label:"Large Single Line",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4","option5","option6","option7"],lineMode:"single",description:"Large size에서도 한 줄로만 표시됩니다."})]})]})};var S,b,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var z,j,W;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: "selector",
    placeholder: "선택해주세요.",
    label: "선택 전용 드롭다운",
    description: "옵션을 선택할 수 있습니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(W=(j=r.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var D,w,M;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: "combobox",
    placeholder: "입력하거나 선택해주세요.",
    label: "검색 가능한 드롭다운",
    description: "텍스트를 입력하거나 옵션을 선택할 수 있습니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(M=(w=s.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var B,L,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: "multiselect",
    placeholder: "여러 항목을 선택해주세요.",
    label: "다중 선택 드롭다운",
    description: "여러 옵션을 선택할 수 있습니다.",
    value: []
  },
  render: args => <DropdownWithState {...args} />
}`,...(C=(L=l.parameters)==null?void 0:L.docs)==null?void 0:C.source}}};var T,O,I;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <DropdownWithState {...args} />
}`,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var q,E,A;a.parameters={...a.parameters,docs:{...(q=a.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <DropdownWithState {...args} />
}`,...(A=(E=a.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var R,k,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <DropdownWithState {...args} />
}`,...(_=(k=d.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var V,F,G;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "비활성화된 상태입니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    labelType: "required",
    label: "필수 선택 항목"
  },
  render: args => <DropdownWithState {...args} />
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,P,Q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: "negative",
    description: "선택이 필요합니다.",
    descriptionLeadingIcon: true
  },
  render: args => <DropdownWithState {...args} />
}`,...(Q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    status: "positive",
    value: "option2",
    description: "선택이 완료되었습니다.",
    descriptionLeadingIcon: true
  },
  render: args => <DropdownWithState {...args} />
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          MultiSelect Type (다중 선택 가능)
        </h4>
        <DropdownWithState type="multiselect" label="과일 다중 선택" placeholder="여러 과일을 선택하세요" options={sampleOptions} description="여러 옵션을 선택할 수 있습니다." value={[]} />
      </div>
    </div>
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,te,ne;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,re,se;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
          Small (Chip: x-small)
        </h4>
        <DropdownWithState type="multiselect" size="small" label="작은 크기" placeholder="옵션 선택" options={sampleOptions} value={["option1", "option2"]} description="Small size에는 x-small Chip이 사용됩니다." />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Medium (Chip: x-small)
        </h4>
        <DropdownWithState type="multiselect" size="medium" label="보통 크기" placeholder="옵션 선택" options={sampleOptions} value={["option1", "option2", "option3"]} description="Medium size에는 x-small Chip이 사용됩니다." />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Large (Chip: small)
        </h4>
        <DropdownWithState type="multiselect" size="large" label="큰 크기" placeholder="옵션 선택" options={sampleOptions} value={["option1", "option2", "option3", "option4"]} description="Large size에는 small Chip이 사용됩니다." />
      </div>
    </div>
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var le,pe,ae;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
          lineMode = "single" (한 줄 고정, 가로 스크롤)
        </h4>
        <DropdownWithState type="multiselect" size="medium" label="Single Line" placeholder="옵션 선택" options={sampleOptions} value={["option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8"]} lineMode="single" description="한 줄로만 표시되고, 가로 스크롤이 생깁니다." />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          lineMode = "multi" (최대 3줄, 이후 세로 스크롤)
        </h4>
        <DropdownWithState type="multiselect" size="medium" label="Multi Line" placeholder="옵션 선택" options={sampleOptions} value={["option1", "option2", "option3", "option4", "option5", "option6", "option7", "option8", "option9", "option10", "option11", "option12", "option13", "option14", "option15"]} lineMode="multi" description="최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다." />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Large size with lineMode = "single"
        </h4>
        <DropdownWithState type="multiselect" size="large" label="Large Single Line" placeholder="옵션 선택" options={sampleOptions} value={["option1", "option2", "option3", "option4", "option5", "option6", "option7"]} lineMode="single" description="Large size에서도 한 줄로만 표시됩니다." />
      </div>
    </div>
}`,...(ae=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ae.source}}};const ao=["Default","SelectorType","ComboBoxType","MultiSelectType","Small","Medium","Large","Disabled","Required","WithError","WithSuccess","TypeComparison","AllSizes","MultiSelectSizes","MultiSelectLineMode"];export{x as AllSizes,s as ComboBoxType,i as Default,c as Disabled,d as Large,a as Medium,v as MultiSelectLineMode,y as MultiSelectSizes,l as MultiSelectType,m as Required,r as SelectorType,p as Small,g as TypeComparison,u as WithError,h as WithSuccess,ao as __namedExportsOrder,po as default};
