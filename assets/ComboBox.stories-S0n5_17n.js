import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as he}from"./iframe-D0DrdOha.js";import{C as s}from"./ComboBox-CXEBX0UP.js";import"./preload-helper-eJNa_G2e.js";import"./index-Dp0V1qaY.js";import"./index-BH_5fyv2.js";import"./styled-components.browser.esm-DPRVC5T4.js";import"./IconArrowUp-Cts_pkXJ.js";import"./Menu-CS1lHPMt.js";import"./borderColor-C_RHITEf.js";import"./color-CiwAFuFb.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./Cell-DEbVFmXq.js";import"./radius-DaoU83SK.js";import"./textColor-DLZeZODc.js";import"./IconCheck-Cgh-IEDk.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";const t=o=>{const[me,ce]=he.useState(o.value||"");return e.jsx("div",{style:{width:"300px"},children:e.jsx(s,{...o,value:me,onChange:xe=>ce(xe)})})},n=[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"},{value:"option4",label:"옵션 4"},{value:"option5",label:"옵션 5"},{value:"option6",label:"옵션 6"},{value:"option7",label:"옵션 7"},{value:"option8",label:"옵션 8"},{value:"option9",label:"옵션 9"},{value:"option10",label:"옵션 10"}],Le={title:"Components/ComboBox",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},disabled:{control:{type:"boolean"}},active:{control:{type:"boolean"}},focused:{control:{type:"boolean"}},placeholder:{control:{type:"text"}},value:{control:{type:"text"}},lang:{control:{type:"select"},options:["ko","en"]}},args:{size:"medium",disabled:!1,active:!1,focused:!1,placeholder:"입력하거나 선택해주세요.",options:n,lang:"ko"}},i={render:o=>e.jsx(t,{...o})},r={args:{size:"small"},render:o=>e.jsx(t,{...o})},a={args:{size:"medium"},render:o=>e.jsx(t,{...o})},l={args:{size:"large"},render:o=>e.jsx(t,{...o})},p={args:{disabled:!0,value:"비활성화된 상태"},render:o=>e.jsx(t,{...o})},d={args:{active:!0},render:o=>e.jsx(t,{...o})},m={args:{focused:!0},render:o=>e.jsx(t,{...o})},c={args:{value:"초기값이 있는 상태"},render:o=>e.jsx(t,{...o})},x={args:{lang:"ko",placeholder:"입력하거나 옵션을 선택해주세요."},render:o=>e.jsx(t,{...o})},h={args:{lang:"en",placeholder:"Type or select an option.",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"},{value:"option5",label:"Option 5"}]},render:o=>e.jsx(t,{...o})},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Small"}),e.jsx(t,{size:"small",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Medium"}),e.jsx(t,{size:"medium",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Large"}),e.jsx(t,{size:"large",options:n})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Default"}),e.jsx(t,{options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Active"}),e.jsx(s,{active:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Focused"}),e.jsx(s,{focused:!0,options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"Disabled"}),e.jsx(s,{disabled:!0,value:"비활성화 상태",options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"With Initial Value"}),e.jsx(s,{value:"초기값",options:n})]})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정"}),e.jsx(t,{style:{width:"150px"},options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"style prop으로 width 설정 (넓게)"}),e.jsx(t,{style:{width:"400px"},options:n})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"부모 컨테이너로 감싸기"}),e.jsx("div",{style:{width:"250px"},children:e.jsx(t,{options:n})})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"검색 기능"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:'입력하면 일치하는 옵션들만 필터링됩니다. "옵션 2"를 입력해보세요.'}),e.jsx(t,{placeholder:"검색어를 입력해보세요",options:n,style:{width:"300px"}})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"직접 입력하기"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"옵션에 없는 새로운 값도 입력할 수 있습니다."}),e.jsx(t,{placeholder:"새로운 값을 입력해보세요",options:n,style:{width:"300px"}})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"드롭다운에서 선택하기"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"화살표 아이콘을 클릭하면 옵션을 선택할 수 있습니다."}),e.jsx(t,{placeholder:"아이콘을 클릭해보세요",options:n,style:{width:"300px"}})]})]})},y={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:"600"},children:"과일 검색해보기"}),e.jsx("p",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:'"사과", "바나나", "딸기" 등을 입력해보세요.'}),e.jsx(t,{placeholder:"과일 이름을 검색해보세요",options:[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"grape",label:"포도"},{value:"strawberry",label:"딸기"},{value:"orange",label:"오렌지"},{value:"peach",label:"복숭아"},{value:"watermelon",label:"수박"},{value:"melon",label:"멜론"}],style:{width:"300px"}})]})})};var S,b,j;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <ComboBoxWithState {...args} />
}`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,W,z;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small'
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(z=(W=r.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var C,w,O;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(O=(w=a.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var D,A,E;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'large'
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var V,k,F;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: '비활성화된 상태'
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(F=(k=p.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var I,L,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    active: true
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var T,K,U;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    focused: true
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var _,R,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: '초기값이 있는 상태'
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(q=(R=c.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var G,H,J;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    lang: 'ko',
    placeholder: '입력하거나 옵션을 선택해주세요.'
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(J=(H=x.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var N,P,Q;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    lang: 'en',
    placeholder: 'Type or select an option.',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }, {
      value: 'option5',
      label: 'Option 5'
    }]
  },
  render: args => <ComboBoxWithState {...args} />
}`,...(Q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Small</h4>
        <ComboBoxWithState size='small' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Medium</h4>
        <ComboBoxWithState size='medium' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Large</h4>
        <ComboBoxWithState size='large' options={sampleOptions} />
      </div>
    </div>
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Default</h4>
        <ComboBoxWithState options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Active</h4>
        <ComboBox active options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Focused</h4>
        <ComboBox focused options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>Disabled</h4>
        <ComboBox disabled value='비활성화 상태' options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          With Initial Value
        </h4>
        <ComboBox value='초기값' options={sampleOptions} />
      </div>
    </div>
}`,...(oe=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var te,ne,se;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          style prop으로 width 설정
        </h4>
        <ComboBoxWithState style={{
        width: '150px'
      }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          style prop으로 width 설정 (넓게)
        </h4>
        <ComboBoxWithState style={{
        width: '400px'
      }} options={sampleOptions} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          부모 컨테이너로 감싸기
        </h4>
        <div style={{
        width: '250px'
      }}>
          <ComboBoxWithState options={sampleOptions} />
        </div>
      </div>
    </div>
}`,...(se=(ne=v.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ie,re,ae;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>검색 기능</h4>
        <p style={{
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          입력하면 일치하는 옵션들만 필터링됩니다. "옵션 2"를 입력해보세요.
        </p>
        <ComboBoxWithState placeholder='검색어를 입력해보세요' options={sampleOptions} style={{
        width: '300px'
      }} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>직접 입력하기</h4>
        <p style={{
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          옵션에 없는 새로운 값도 입력할 수 있습니다.
        </p>
        <ComboBoxWithState placeholder='새로운 값을 입력해보세요' options={sampleOptions} style={{
        width: '300px'
      }} />
      </div>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          드롭다운에서 선택하기
        </h4>
        <p style={{
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          화살표 아이콘을 클릭하면 옵션을 선택할 수 있습니다.
        </p>
        <ComboBoxWithState placeholder='아이콘을 클릭해보세요' options={sampleOptions} style={{
        width: '300px'
      }} />
      </div>
    </div>
}`,...(ae=(re=f.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var le,pe,de;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: '600'
      }}>
          과일 검색해보기
        </h4>
        <p style={{
        marginBottom: '8px',
        fontSize: '12px',
        color: '#666'
      }}>
          "사과", "바나나", "딸기" 등을 입력해보세요.
        </p>
        <ComboBoxWithState placeholder='과일 이름을 검색해보세요' options={[{
        value: 'apple',
        label: '사과'
      }, {
        value: 'banana',
        label: '바나나'
      }, {
        value: 'grape',
        label: '포도'
      }, {
        value: 'strawberry',
        label: '딸기'
      }, {
        value: 'orange',
        label: '오렌지'
      }, {
        value: 'peach',
        label: '복숭아'
      }, {
        value: 'watermelon',
        label: '수박'
      }, {
        value: 'melon',
        label: '멜론'
      }]} style={{
        width: '300px'
      }} />
      </div>
    </div>
}`,...(de=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};const Me=["Default","Small","Medium","Large","Disabled","Active","Focused","WithInitialValue","Korean","English","AllSizes","AllStates","CustomWidth","UsageDemo","SearchDemo"];export{d as Active,g as AllSizes,u as AllStates,v as CustomWidth,i as Default,p as Disabled,h as English,m as Focused,x as Korean,l as Large,a as Medium,y as SearchDemo,r as Small,f as UsageDemo,c as WithInitialValue,Me as __namedExportsOrder,Le as default};
