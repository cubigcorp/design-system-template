import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as he}from"./iframe-L1CEGzuW.js";import"./SolidButton-DiUg7Oe2.js";import"./TextButton-Bhy_pj9h.js";import"./IconButton-Ckd5Kzg7.js";import"./Badge-DqfpFiiJ.js";import"./Chip-BEbScxvp.js";import"./Switch-DMuFMUx3.js";import"./Description-CgJdkAhF.js";import"./Divider-uGoGs9iF.js";import"./TextArea-CqMn28y0.js";import"./TokenField-CHJLyzMo.js";import{C as i}from"./Modal-CZnLwamM.js";import"./MultiSelect-DRDRFDCv.js";import"./TokenInput-QnJLx-9q.js";import"./Cell-bkDkwhmH.js";import"./RadioButton-BphB9Xf9.js";import"./Checkbox-DD8aZVQT.js";import"./SegmentItem-DXX5fZiH.js";import"./AvatarGroup-CX5JjXbm.js";import"./TabItem-CY416s89.js";import"./ChipTabs-5LfA4djK.js";import"./Popover-BDGQaLdQ.js";import"./StepIndicator-D_4EX1l3.js";import"./Breadcrumbs-D_wxAlwr.js";import"./BreadcrumbItem-Dv3U5xk5.js";import"./Pagination-MKr8N35P.js";import"./Callout-CrzalG_1.js";import"./TopBannerList-B3kvZrWF.js";import"./Tooltip-8N6yqZki.js";import"./styled-components.browser.esm-CPJhxV7n.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-IPgNsnGg.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./infoColor-DKdsGjD4.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-jhqWgfOc.js";import"./index-DmyLRZ_Y.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-1ahVzeUX.js";import"./icon_chevron-down_outline_16-B3vMYtLH.js";import"./icon_chevron-right_outline_20-CAThzgjg.js";import"./icon_more_outline_16-BhWNgq1Z.js";import"./icon_chevron-right_outline_16-e7vq1GRS.js";import"./icon_warning_fill_16-CeuyuPad.js";import"./icon_close_outline_24-4CpKikC8.js";const o=n=>{const[de,ce]=he.useState(n.value||"");return e.jsx("div",{style:{width:"300px"},children:e.jsx(i,{...n,value:de,onChange:xe=>ce(xe)})})},t=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],yn={title:"Components/ComboBox",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"입력하거나 선택해주세요.",options:t,lang:"ko"}},r={render:n=>e.jsx(o,{...n})},s={args:{size:"small"},render:n=>e.jsx(o,{...n})},a={args:{size:"medium"},render:n=>e.jsx(o,{...n})},l={args:{size:"large"},render:n=>e.jsx(o,{...n})},p={args:{disabled:!0,value:"비활성화된 상태"},render:n=>e.jsx(o,{...n})},m={args:{active:!0},render:n=>e.jsx(o,{...n})},d={args:{focused:!0},render:n=>e.jsx(o,{...n})},c={args:{value:"초기값이 있는 상태"},render:n=>e.jsx(o,{...n})},x={args:{lang:"ko",placeholder:"입력하거나 옵션을 선택해주세요."},render:n=>e.jsx(o,{...n})},h={args:{lang:"en",placeholder:"Type or select an option.",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]},render:n=>e.jsx(o,{...n})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(o,{size:"small",options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(o,{size:"medium",options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(o,{size:"large",options:t})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default"}),e.jsx(o,{options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active"}),e.jsx(i,{active:!0,options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Focused"}),e.jsx(i,{focused:!0,options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled"}),e.jsx(i,{disabled:!0,value:"비활성화 상태",options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"With Initial Value"}),e.jsx(i,{value:"초기값",options:t})]})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정"}),e.jsx(o,{style:{width:"150px"},options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정 (넓게)"}),e.jsx(o,{style:{width:"400px"},options:t})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"부모 컨테이너로 감싸기"}),e.jsx("div",{style:{width:"250px"},children:e.jsx(o,{options:t})})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"검색 기능"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:'입력하면 일치하는 옵션들만 필터링됩니다. "옵션 2"를 입력해보세요.'}),e.jsx(o,{placeholder:"검색어를 입력해보세요",options:t,style:{width:"300px"}})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"직접 입력하기"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"옵션에 없는 새로운 값도 입력할 수 있습니다."}),e.jsx(o,{placeholder:"새로운 값을 입력해보세요",options:t,style:{width:"300px"}})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"드롭다운에서 선택하기"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"화살표 아이콘을 클릭하면 옵션을 선택할 수 있습니다."}),e.jsx(o,{placeholder:"아이콘을 클릭해보세요",options:t,style:{width:"300px"}})]})]})},y={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"과일 검색해보기"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:'"사과", "바나나", "딸기" 등을 입력해보세요.'}),e.jsx(o,{placeholder:"과일 이름을 검색해보세요",options:[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"grape",label:"포도"},{value:"strawberry",label:"딸기"},{value:"orange",label:"오렌지"},{value:"peach",label:"복숭아"},{value:"watermelon",label:"수박"},{value:"melon",label:"멜론"}],style:{width:"300px"}})]})})};var S,b,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ComboBoxWithState {...args} />
}`,...(j=(b=r.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,W,z;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: "small"
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(z=(W=s.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var C,w,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: "medium"
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(O=(w=a.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var D,A,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: "large"
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var V,k,F;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: "비활성화된 상태"
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,L,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    active: true
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,K,U;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    focused: true
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(U=(K=d.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var _,R,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: "초기값이 있는 상태"
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    lang: "ko",
    placeholder: "입력하거나 옵션을 선택해주세요."
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var N,P,Q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    lang: "en",
    placeholder: "Type or select an option.",
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
  render: args => <ComboBoxWithState {...args} />
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
        <ComboBoxWithState size="small" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Medium
        </h4>
        <ComboBoxWithState size="medium" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Large
        </h4>
        <ComboBoxWithState size="large" options={sampleOptions} />
      </div>
    </div>
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
        <ComboBoxWithState options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Active
        </h4>
        <ComboBox active options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Focused
        </h4>
        <ComboBox focused options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          Disabled
        </h4>
        <ComboBox disabled value="비활성화 상태" options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          With Initial Value
        </h4>
        <ComboBox value="초기값" options={sampleOptions} />
      </div>
    </div>
}`,...(ne=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,te,ie;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        <ComboBoxWithState style={{
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
        <ComboBoxWithState style={{
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
          <ComboBoxWithState options={sampleOptions} />
        </div>
      </div>
    </div>
}`,...(ie=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,se,ae;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
          검색 기능
        </h4>
        <p style={{
        marginBottom: "8px",
        fontSize: "12px",
        color: "#666"
      }}>
          입력하면 일치하는 옵션들만 필터링됩니다. "옵션 2"를 입력해보세요.
        </p>
        <ComboBoxWithState placeholder="검색어를 입력해보세요" options={sampleOptions} style={{
        width: "300px"
      }} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          직접 입력하기
        </h4>
        <p style={{
        marginBottom: "8px",
        fontSize: "12px",
        color: "#666"
      }}>
          옵션에 없는 새로운 값도 입력할 수 있습니다.
        </p>
        <ComboBoxWithState placeholder="새로운 값을 입력해보세요" options={sampleOptions} style={{
        width: "300px"
      }} />
      </div>
      <div>
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: "600"
      }}>
          드롭다운에서 선택하기
        </h4>
        <p style={{
        marginBottom: "8px",
        fontSize: "12px",
        color: "#666"
      }}>
          화살표 아이콘을 클릭하면 옵션을 선택할 수 있습니다.
        </p>
        <ComboBoxWithState placeholder="아이콘을 클릭해보세요" options={sampleOptions} style={{
        width: "300px"
      }} />
      </div>
    </div>
}`,...(ae=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var le,pe,me;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
          과일 검색해보기
        </h4>
        <p style={{
        marginBottom: "8px",
        fontSize: "12px",
        color: "#666"
      }}>
          "사과", "바나나", "딸기" 등을 입력해보세요.
        </p>
        <ComboBoxWithState placeholder="과일 이름을 검색해보세요" options={[{
        value: "apple",
        label: "사과"
      }, {
        value: "banana",
        label: "바나나"
      }, {
        value: "grape",
        label: "포도"
      }, {
        value: "strawberry",
        label: "딸기"
      }, {
        value: "orange",
        label: "오렌지"
      }, {
        value: "peach",
        label: "복숭아"
      }, {
        value: "watermelon",
        label: "수박"
      }, {
        value: "melon",
        label: "멜론"
      }]} style={{
        width: "300px"
      }} />
      </div>
    </div>
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Sn=["Default","Small","Medium","Large","Disabled","Active","Focused","WithInitialValue","Korean","English","AllSizes","AllStates","CustomWidth","UsageDemo","SearchDemo"];export{m as Active,g as AllSizes,u as AllStates,v as CustomWidth,r as Default,p as Disabled,h as English,d as Focused,x as Korean,l as Large,a as Medium,y as SearchDemo,s as Small,f as UsageDemo,c as WithInitialValue,Sn as __namedExportsOrder,yn as default};
