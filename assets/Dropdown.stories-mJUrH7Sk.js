import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Se}from"./iframe-CFH4n1Bp.js";import"./SolidButton-BcUMzX_A.js";import"./TextButton-NDJ5oWzE.js";import"./IconButton-Cb91DsQD.js";import"./Badge-vM4GooXy.js";import"./Chip-HIssDOCO.js";import"./Switch-C1TRoKRf.js";import"./Description-BhBHcy_n.js";import"./Divider-BSL2sHoA.js";import"./TokenField-CRd9oYzu.js";import{D as l}from"./Modal-BzfX_Nge.js";import"./MultiSelect-BZ6_1V1S.js";import"./TokenInput-BoEy11KB.js";import"./RadioButton-CLLF1cfK.js";import"./Checkbox-BRz07VQT.js";import"./SegmentItem-cfVFyr6f.js";import{A as W}from"./Avatar-B2XXRFZR.js";import"./TabItem-GDFiVMWh.js";import"./ChipTabs-mwXHxNJv.js";import"./Popover-h0ZdYXXn.js";import"./StepIndicator-DOFhlqMJ.js";import"./Breadcrumbs-DERSzfp0.js";import"./BreadcrumbItem-XrAPfeCN.js";import"./Pagination-CMmHaBnB.js";import"./Callout-b3fcYtRL.js";import"./TopBannerList-DcxFWTlk.js";import{S as be}from"./icon_document_outline_16-CXRfjUDl.js";import{S as fe}from"./icon_home_outline_16-DRL9dOsc.js";import{S as ze}from"./icon_search_outline_16-CzJeaOBa.js";import"./styled-components.browser.esm-3frt-ZcS.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./fontFamily-CsG1KcIF.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner--PI8--bU.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-RVdj8V17.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-Ct1INyvY.js";import"./index-B2X5vA45.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-C1PFpe7I.js";import"./icon_chevron-right_outline_20-MXuI3Edx.js";import"./icon_more_outline_16-DZ4M33YM.js";import"./icon_chevron-right_outline_16-Bo2Uc8Le.js";import"./icon_warning_fill_20-Cwzo1r-E.js";import"./icon_close_outline_24-O86MQuS9.js";const t=o=>{const[z,i]=Se.useState(o.type==="multiselect"?Array.isArray(o.value)?o.value:[]:o.value||"");return e.jsx("div",{style:{width:"300px"},children:e.jsx(l,{...o,value:z,onChange:j=>i(j)})})},n=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"},{value:"option11",label:"옵션 11"},{value:"option12",label:"옵션 12"},{value:"option13",label:"옵션 13"},{value:"option14",label:"옵션 14"},{value:"option15",label:"옵션 15"},{value:"option16",label:"옵션 16"},{value:"option17",label:"옵션 17"},{value:"option18",label:"옵션 18"},{value:"option19",label:"옵션 19"},{value:"option20",label:"옵션 20"}],Bo={title:"Components/Dropdown",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["selector","combobox","multiselect"]},size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},label:{control:{type:"text"}},labelType:{control:{type:"select"},options:["default","required","optional"]},description:{control:{type:"text"}},descriptionLeadingIcon:{control:{type:"boolean"}},status:{control:{type:"select"},options:["default","negative","positive"]},lang:{control:{type:"select"},options:["ko","en"]}},args:{type:"selector",size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"선택해주세요.",options:n,label:"라벨",labelType:"default",description:"설명 텍스트입니다.",descriptionLeadingIcon:!1,status:"default",lang:"ko"}},r={render:o=>e.jsx(t,{...o})},s={args:{type:"selector",placeholder:"선택해주세요.",label:"선택 전용 드롭다운",description:"옵션을 선택할 수 있습니다."},render:o=>e.jsx(t,{...o})},a={args:{type:"combobox",placeholder:"입력하거나 선택해주세요.",label:"검색 가능한 드롭다운",description:"텍스트를 입력하거나 옵션을 선택할 수 있습니다."},render:o=>e.jsx(t,{...o})},p={args:{type:"multiselect",placeholder:"여러 항목을 선택해주세요.",label:"다중 선택 드롭다운",description:"여러 옵션을 선택할 수 있습니다.",value:[]},render:o=>e.jsx(t,{...o})},d={args:{size:"small"},render:o=>e.jsx(t,{...o})},c={args:{size:"medium"},render:o=>e.jsx(t,{...o})},m={args:{size:"large"},render:o=>e.jsx(t,{...o})},u={args:{disabled:!0,description:"비활성화된 상태입니다."},render:o=>e.jsx(t,{...o})},h={args:{labelType:"required",label:"필수 선택 항목"},render:o=>e.jsx(t,{...o})},x={args:{status:"negative",description:"선택이 필요합니다.",descriptionLeadingIcon:!0},render:o=>e.jsx(t,{...o})},g={args:{status:"positive",value:"option2",description:"선택이 완료되었습니다.",descriptionLeadingIcon:!0},render:o=>e.jsx(t,{...o})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Selector Type (선택만 가능)"}),e.jsx(t,{type:"selector",label:"과일 선택",placeholder:"과일을 선택하세요",options:n,description:"드롭다운에서 옵션을 선택합니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"ComboBox Type (입력 + 선택 가능)"}),e.jsx(t,{type:"combobox",label:"과일 검색",placeholder:"과일을 검색하거나 선택하세요",options:n,description:"직접 입력하거나 옵션을 선택할 수 있습니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"MultiSelect Type (다중 선택 가능)"}),e.jsx(t,{type:"multiselect",label:"과일 다중 선택",placeholder:"여러 과일을 선택하세요",options:n,description:"여러 옵션을 선택할 수 있습니다.",value:[]})]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(t,{size:"small",label:"작은 크기",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(t,{size:"medium",label:"보통 크기",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(t,{size:"large",label:"큰 크기",options:n})]})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small (Chip: x-small)"}),e.jsx(t,{type:"multiselect",size:"small",label:"작은 크기",placeholder:"옵션 선택",options:n,value:["option1","option2"],description:"Small size에는 x-small Chip이 사용됩니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium (Chip: x-small)"}),e.jsx(t,{type:"multiselect",size:"medium",label:"보통 크기",placeholder:"옵션 선택",options:n,value:["option1","option2","option3"],description:"Medium size에는 x-small Chip이 사용됩니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large (Chip: small)"}),e.jsx(t,{type:"multiselect",size:"large",label:"큰 크기",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4"],description:"Large size에는 small Chip이 사용됩니다."})]})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:'lineMode = "single" (한 줄 고정, 가로 스크롤)'}),e.jsx(t,{type:"multiselect",size:"medium",label:"Single Line",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4","option5","option6","option7","option8"],lineMode:"single",description:"한 줄로만 표시되고, 가로 스크롤이 생깁니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:'lineMode = "multi" (최대 3줄, 이후 세로 스크롤)'}),e.jsx(t,{type:"multiselect",size:"medium",label:"Multi Line",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4","option5","option6","option7","option8","option9","option10","option11","option12","option13","option14","option15"],lineMode:"multi",description:"최대 3줄까지 늘어나고, 이후 세로 스크롤이 생깁니다."})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:'Large size with lineMode = "single"'}),e.jsx(t,{type:"multiselect",size:"large",label:"Large Single Line",placeholder:"옵션 선택",options:n,value:["option1","option2","option3","option4","option5","option6","option7"],lineMode:"single",description:"Large size에서도 한 줄로만 표시됩니다."})]})]})},f={render:()=>{const[o,z]=Se.useState([]),i=[{value:"1",label:"John Doe",description:"john@example.com",leadingContent:()=>e.jsx(W,{type:"initial",size:"small",value:"JD"})},{value:"2",label:"Jane Smith",description:"jane@example.com",leadingContent:()=>e.jsx(W,{type:"initial",size:"small",value:"JS"})},{value:"3",label:"Bob Johnson",description:"bob@example.com",leadingContent:()=>e.jsx(W,{type:"initial",size:"small",value:"BJ"})},{value:"4",label:"홈",description:"메인 페이지로 이동",leadingContent:()=>e.jsx(fe,{})},{value:"5",label:"검색",description:"검색 기능",leadingContent:()=>e.jsx(ze,{})},{value:"6",label:"문서",description:"문서 관리",leadingContent:()=>e.jsx(be,{})}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"30px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px"},children:"Selector with Avatar & Description"}),e.jsx(l,{type:"selector",label:"멤버 선택",placeholder:"멤버를 선택하세요",options:i,description:"Avatar와 설명이 포함된 옵션입니다"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px"},children:"ComboBox with Icon & Description"}),e.jsx(l,{type:"combobox",label:"메뉴 검색",placeholder:"검색하거나 선택하세요",options:i,description:"아이콘과 설명이 포함된 옵션입니다"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",fontWeight:"600",marginBottom:"8px"},children:"MultiSelect with Avatar & Icon"}),e.jsx(l,{type:"multiselect",label:"다중 선택",placeholder:"여러 항목을 선택하세요",options:i,value:o,onChange:j=>z(j),lineMode:"multi",description:"Avatar, 아이콘, 설명이 모두 포함된 옵션입니다"})]})]})}};var D,w,B;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <DropdownWithState {...args} />
}`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,M,L;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: "selector",
    placeholder: "선택해주세요.",
    label: "선택 전용 드롭다운",
    description: "옵션을 선택할 수 있습니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(L=(M=s.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var O,T,A;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: "combobox",
    placeholder: "입력하거나 선택해주세요.",
    label: "검색 가능한 드롭다운",
    description: "텍스트를 입력하거나 옵션을 선택할 수 있습니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,J,q;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: "multiselect",
    placeholder: "여러 항목을 선택해주세요.",
    label: "다중 선택 드롭다운",
    description: "여러 옵션을 선택할 수 있습니다.",
    value: []
  },
  render: args => <DropdownWithState {...args} />
}`,...(q=(J=p.parameters)==null?void 0:J.docs)==null?void 0:q.source}}};var E,R,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <DropdownWithState {...args} />
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var H,_,V;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <DropdownWithState {...args} />
}`,...(V=(_=c.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var F,G,K;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <DropdownWithState {...args} />
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var N,P,Q;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true,
    description: "비활성화된 상태입니다."
  },
  render: args => <DropdownWithState {...args} />
}`,...(Q=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    labelType: "required",
    label: "필수 선택 항목"
  },
  render: args => <DropdownWithState {...args} />
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    status: "negative",
    description: "선택이 필요합니다.",
    descriptionLeadingIcon: true
  },
  render: args => <DropdownWithState {...args} />
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,te,ne;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    status: "positive",
    value: "option2",
    description: "선택이 완료되었습니다.",
    descriptionLeadingIcon: true
  },
  render: args => <DropdownWithState {...args} />
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,le,re;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(le=v.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,ae,pe;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(pe=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:pe.source}}};var de,ce,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,he,xe;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(xe=(he=b.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var ge,ve,ye;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    const memberOptions: DropdownOption[] = [{
      value: "1",
      label: "John Doe",
      description: "john@example.com",
      leadingContent: () => <Avatar type="initial" size="small" value="JD" />
    }, {
      value: "2",
      label: "Jane Smith",
      description: "jane@example.com",
      leadingContent: () => <Avatar type="initial" size="small" value="JS" />
    }, {
      value: "3",
      label: "Bob Johnson",
      description: "bob@example.com",
      leadingContent: () => <Avatar type="initial" size="small" value="BJ" />
    }, {
      value: "4",
      label: "홈",
      description: "메인 페이지로 이동",
      leadingContent: () => <IconHomeOutline16 />
    }, {
      value: "5",
      label: "검색",
      description: "검색 기능",
      leadingContent: () => <IconSearchOutline16 />
    }, {
      value: "6",
      label: "문서",
      description: "문서 관리",
      leadingContent: () => <IconDocumentOutline16 />
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "30px",
      width: "400px"
    }}>
        <div>
          <h4 style={{
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "8px"
        }}>
            Selector with Avatar & Description
          </h4>
          <Dropdown type="selector" label="멤버 선택" placeholder="멤버를 선택하세요" options={memberOptions} description="Avatar와 설명이 포함된 옵션입니다" />
        </div>

        <div>
          <h4 style={{
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "8px"
        }}>
            ComboBox with Icon & Description
          </h4>
          <Dropdown type="combobox" label="메뉴 검색" placeholder="검색하거나 선택하세요" options={memberOptions} description="아이콘과 설명이 포함된 옵션입니다" />
        </div>

        <div>
          <h4 style={{
          fontSize: "14px",
          fontWeight: "600",
          marginBottom: "8px"
        }}>
            MultiSelect with Avatar & Icon
          </h4>
          <Dropdown type="multiselect" label="다중 선택" placeholder="여러 항목을 선택하세요" options={memberOptions} value={selected} onChange={value => setSelected(value as string[])} lineMode="multi" description="Avatar, 아이콘, 설명이 모두 포함된 옵션입니다" />
        </div>
      </div>;
  }
}`,...(ye=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};const Co=["Default","SelectorType","ComboBoxType","MultiSelectType","Small","Medium","Large","Disabled","Required","WithError","WithSuccess","TypeComparison","AllSizes","MultiSelectSizes","MultiSelectLineMode","WithLeadingContent"];export{y as AllSizes,a as ComboBoxType,r as Default,u as Disabled,m as Large,c as Medium,b as MultiSelectLineMode,S as MultiSelectSizes,p as MultiSelectType,h as Required,s as SelectorType,d as Small,v as TypeComparison,x as WithError,f as WithLeadingContent,g as WithSuccess,Co as __namedExportsOrder,Bo as default};
