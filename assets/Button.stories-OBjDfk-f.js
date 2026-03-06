import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{S as i,O as s}from"./SolidButton-Dkd1ZORW.js";import{T as r}from"./TextButton-BV2SLp9A.js";import"./iframe-CLsoOqCU.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-Cjeww7bt.js";import"./borderColor-CzkI5wcR.js";import"./color-m2U5piog.js";import"./brandColor-Bb8P60S1.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./negativeColor-fk0-w6JK.js";import"./radius-DaoU83SK.js";import"./spacing-tE1IiUFl.js";import"./textColor-G8dwupNW.js";import"./types-CbdWBR_P.js";const l=n=>e.jsx("svg",{...n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M12 5v14M5 12h14"})}),o=n=>e.jsx("svg",{...n,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),te={title:"Components/Inputs/Button",component:i,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"Solid, Outline, Text 3가지 스타일과 6가지 variant, 3가지 size를 조합하여 사용할 수 있는 버튼 컴포넌트입니다."}}}},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},cardLabel:{fontSize:13,fontWeight:500,color:"#525459",marginBottom:16},row:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"}},c={args:{variant:"primary",size:"medium",state:"default",disabled:!1,loading:!1},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","brand","positive","negative"]},size:{control:"radio",options:["small","medium","large"]},state:{control:"select",options:["default","hovered","pressed","focused"]}},render:n=>e.jsx(i,{...n,children:"Button"})},p={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Button"}),e.jsxs("p",{style:t.desc,children:["3가지 스타일 (Solid, Outline, Text)과 다양한 variant를 조합하여 사용합니다.",e.jsx("br",{}),"마우스 hover, press, focus 인터랙션이 자동으로 적용됩니다."]})]}),e.jsx("p",{style:t.sectionTitle,children:"Solid"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"Variants"}),e.jsxs("div",{style:t.row,children:[e.jsx(i,{variant:"primary",children:"Primary"}),e.jsx(i,{variant:"secondary",children:"Secondary"}),e.jsx(i,{variant:"tertiary",children:"Tertiary"}),e.jsx(i,{variant:"brand",children:"Brand"}),e.jsx(i,{variant:"positive",children:"Positive"}),e.jsx(i,{variant:"negative",children:"Negative"})]})]}),e.jsx("p",{style:t.sectionTitle,children:"Outline"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"Variants"}),e.jsxs("div",{style:t.row,children:[e.jsx(s,{variant:"secondary",children:"Secondary"}),e.jsx(s,{variant:"brand",children:"Brand"}),e.jsx(s,{variant:"positive",children:"Positive"}),e.jsx(s,{variant:"negative",children:"Negative"})]})]}),e.jsx("p",{style:t.sectionTitle,children:"Text"}),e.jsxs("div",{style:t.card,children:[e.jsx("div",{style:t.cardLabel,children:"Variants"}),e.jsxs("div",{style:t.row,children:[e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"brand",children:"Brand"}),e.jsx(r,{variant:"positive",children:"Positive"}),e.jsx(r,{variant:"negative",children:"Negative"})]})]})]})},y={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Sizes"}),e.jsx("p",{style:t.desc,children:"Small (32px), Medium (40px), Large (48px) 3가지 높이를 지원합니다."})]}),["solid","outline","text"].map(n=>{const d=n==="solid"?i:n==="outline"?s:r;return e.jsxs("div",{children:[e.jsx("p",{style:t.sectionTitle,children:n}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{...t.row,alignItems:"flex-end"},children:["small","medium","large"].map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(d,{size:a,variant:n==="solid"?"primary":"secondary",children:"Button"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:a==="small"?"32px":a==="medium"?"40px":"48px"})]},a))})})]},n)})]})},v={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"States"}),e.jsxs("p",{style:t.desc,children:["Default, Hovered, Pressed, Focused, Disabled, Loading 상태를 지원합니다.",e.jsx("br",{}),"state prop으로 직접 지정하거나, 마우스/키보드 인터랙션으로 자동 전환됩니다."]})]}),[{label:"Solid Primary",variant:"primary",Comp:i},{label:"Outline Secondary",variant:"secondary",Comp:s},{label:"Text Secondary",variant:"secondary",Comp:r}].map(({label:n,variant:d,Comp:a})=>e.jsxs("div",{children:[e.jsx("p",{style:t.sectionTitle,children:n}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[["default","hovered","pressed","focused"].map(h=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(a,{variant:d,state:h,children:"Button"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:h})]},h)),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(a,{variant:d,disabled:!0,children:"Button"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:"disabled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(a,{variant:d,loading:!0,children:"Button"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:"loading"})]})]})})]},n))]})},u={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"With Icons"}),e.jsx("p",{style:t.desc,children:"leadingIcon, trailingIcon prop으로 아이콘을 추가할 수 있습니다."})]}),e.jsx("p",{style:t.sectionTitle,children:"Leading Icon"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[e.jsx(i,{variant:"primary",leadingIcon:l,children:"Create"}),e.jsx(s,{variant:"secondary",leadingIcon:l,children:"Create"}),e.jsx(r,{variant:"secondary",leadingIcon:l,children:"Create"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Trailing Icon"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[e.jsx(i,{variant:"primary",trailingIcon:o,children:"Next"}),e.jsx(s,{variant:"secondary",trailingIcon:o,children:"Next"}),e.jsx(r,{variant:"secondary",trailingIcon:o,children:"Next"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Both Icons"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:t.row,children:[e.jsx(i,{variant:"primary",leadingIcon:l,trailingIcon:o,children:"Create & Continue"}),e.jsx(s,{variant:"secondary",leadingIcon:l,trailingIcon:o,children:"Create & Continue"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Sizes with Icons"}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:{...t.row,alignItems:"flex-end"},children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(i,{variant:"primary",size:n,leadingIcon:l,children:"Create"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:n})]},n))})})]})},m={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Radius"}),e.jsx("p",{style:t.desc,children:"Small (rounded-2), Medium (rounded-3), Large (rounded-full) 3가지 border-radius를 지원합니다."})]}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:t.row,children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(i,{variant:"primary",radius:n,children:"Button"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:n})]},n))})}),e.jsx("div",{style:t.card,children:e.jsx("div",{style:t.row,children:["small","medium","large"].map(n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(s,{variant:"secondary",radius:n,children:"Button"}),e.jsx("span",{style:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"},children:n})]},n))})})]})},x={parameters:{controls:{disable:!0}},render:()=>e.jsxs("div",{style:t.page,children:[e.jsxs("div",{style:t.header,children:[e.jsx("h1",{style:t.title,children:"Composition Examples"}),e.jsx("p",{style:t.desc,children:"실제 사용 사례를 기반으로 한 버튼 조합 예시입니다."})]}),e.jsx("p",{style:t.sectionTitle,children:"Dialog Actions"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(r,{variant:"secondary",children:"취소"}),e.jsx(i,{variant:"primary",children:"확인"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Destructive Action"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8},children:[e.jsx(s,{variant:"secondary",children:"취소"}),e.jsx(i,{variant:"negative",children:"삭제"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Form Actions"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{variant:"secondary",children:"이전"}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{variant:"secondary",children:"임시저장"}),e.jsx(i,{variant:"brand",leadingIcon:o,children:"다음 단계"})]})]})}),e.jsx("p",{style:t.sectionTitle,children:"Button Group"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{variant:"primary",size:"large",leadingIcon:l,children:"새 프로젝트"}),e.jsx(s,{variant:"secondary",size:"large",children:"불러오기"})]})}),e.jsx("p",{style:t.sectionTitle,children:"Full Width"}),e.jsx("div",{style:t.card,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,maxWidth:360},children:[e.jsx(i,{variant:"brand",size:"large",children:"시작하기"}),e.jsx(s,{variant:"secondary",size:"large",children:"둘러보기"})]})})]})};var g,j,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    state: 'default',
    disabled: false,
    loading: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'brand', 'positive', 'negative']
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large']
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'pressed', 'focused']
    }
  },
  render: args => <SolidButton {...args}>Button</SolidButton>
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var B,S,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Button</h1>
        <p style={s.desc}>
          3가지 스타일 (Solid, Outline, Text)과 다양한 variant를 조합하여 사용합니다.
          <br />
          마우스 hover, press, focus 인터랙션이 자동으로 적용됩니다.
        </p>
      </div>

      {/* Solid Buttons */}
      <p style={s.sectionTitle}>Solid</p>
      <div style={s.card}>
        <div style={s.cardLabel}>Variants</div>
        <div style={s.row}>
          <SolidButton variant='primary'>Primary</SolidButton>
          <SolidButton variant='secondary'>Secondary</SolidButton>
          <SolidButton variant='tertiary'>Tertiary</SolidButton>
          <SolidButton variant='brand'>Brand</SolidButton>
          <SolidButton variant='positive'>Positive</SolidButton>
          <SolidButton variant='negative'>Negative</SolidButton>
        </div>
      </div>

      {/* Outline Buttons */}
      <p style={s.sectionTitle}>Outline</p>
      <div style={s.card}>
        <div style={s.cardLabel}>Variants</div>
        <div style={s.row}>
          <OutlineButton variant='secondary'>Secondary</OutlineButton>
          <OutlineButton variant='brand'>Brand</OutlineButton>
          <OutlineButton variant='positive'>Positive</OutlineButton>
          <OutlineButton variant='negative'>Negative</OutlineButton>
        </div>
      </div>

      {/* Text Buttons */}
      <p style={s.sectionTitle}>Text</p>
      <div style={s.card}>
        <div style={s.cardLabel}>Variants</div>
        <div style={s.row}>
          <TextButton variant='secondary'>Secondary</TextButton>
          <TextButton variant='brand'>Brand</TextButton>
          <TextButton variant='positive'>Positive</TextButton>
          <TextButton variant='negative'>Negative</TextButton>
        </div>
      </div>
    </div>
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,b,z;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Sizes</h1>
        <p style={s.desc}>Small (32px), Medium (40px), Large (48px) 3가지 높이를 지원합니다.</p>
      </div>

      {(['solid', 'outline', 'text'] as const).map(type => {
      const Comp = type === 'solid' ? SolidButton : type === 'outline' ? OutlineButton : TextButton;
      return <div key={type}>
            <p style={s.sectionTitle}>{type}</p>
            <div style={s.card}>
              <div style={{
            ...s.row,
            alignItems: 'flex-end'
          }}>
                {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8
            }}>
                    <Comp size={size} variant={type === 'solid' ? 'primary' : 'secondary'}>
                      Button
                    </Comp>
                    <span style={{
                fontSize: 11,
                color: '#8f9298',
                fontFamily: "'SF Mono', monospace"
              }}>
                      {size === 'small' ? '32px' : size === 'medium' ? '40px' : '48px'}
                    </span>
                  </div>)}
              </div>
            </div>
          </div>;
    })}
    </div>
}`,...(z=(b=y.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var C,w,O;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>States</h1>
        <p style={s.desc}>
          Default, Hovered, Pressed, Focused, Disabled, Loading 상태를 지원합니다.
          <br />
          state prop으로 직접 지정하거나, 마우스/키보드 인터랙션으로 자동 전환됩니다.
        </p>
      </div>

      {[{
      label: 'Solid Primary',
      variant: 'primary' as const,
      Comp: SolidButton
    }, {
      label: 'Outline Secondary',
      variant: 'secondary' as const,
      Comp: OutlineButton
    }, {
      label: 'Text Secondary',
      variant: 'secondary' as const,
      Comp: TextButton
    }].map(({
      label,
      variant,
      Comp
    }) => <div key={label}>
          <p style={s.sectionTitle}>{label}</p>
          <div style={s.card}>
            <div style={s.row}>
              {(['default', 'hovered', 'pressed', 'focused'] as const).map(state => <div key={state} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
          }}>
                  <Comp variant={variant} state={state}>
                    Button
                  </Comp>
                  <span style={{
              fontSize: 11,
              color: '#8f9298',
              fontFamily: "'SF Mono', monospace"
            }}>
                    {state}
                  </span>
                </div>)}
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
          }}>
                <Comp variant={variant} disabled>
                  Button
                </Comp>
                <span style={{
              fontSize: 11,
              color: '#8f9298',
              fontFamily: "'SF Mono', monospace"
            }}>
                  disabled
                </span>
              </div>
              <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8
          }}>
                <Comp variant={variant} loading>
                  Button
                </Comp>
                <span style={{
              fontSize: 11,
              color: '#8f9298',
              fontFamily: "'SF Mono', monospace"
            }}>
                  loading
                </span>
              </div>
            </div>
          </div>
        </div>)}
    </div>
}`,...(O=(w=v.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var F,D,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>With Icons</h1>
        <p style={s.desc}>leadingIcon, trailingIcon prop으로 아이콘을 추가할 수 있습니다.</p>
      </div>

      <p style={s.sectionTitle}>Leading Icon</p>
      <div style={s.card}>
        <div style={s.row}>
          <SolidButton variant='primary' leadingIcon={PlusIcon}>
            Create
          </SolidButton>
          <OutlineButton variant='secondary' leadingIcon={PlusIcon}>
            Create
          </OutlineButton>
          <TextButton variant='secondary' leadingIcon={PlusIcon}>
            Create
          </TextButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Trailing Icon</p>
      <div style={s.card}>
        <div style={s.row}>
          <SolidButton variant='primary' trailingIcon={ArrowRightIcon}>
            Next
          </SolidButton>
          <OutlineButton variant='secondary' trailingIcon={ArrowRightIcon}>
            Next
          </OutlineButton>
          <TextButton variant='secondary' trailingIcon={ArrowRightIcon}>
            Next
          </TextButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Both Icons</p>
      <div style={s.card}>
        <div style={s.row}>
          <SolidButton variant='primary' leadingIcon={PlusIcon} trailingIcon={ArrowRightIcon}>
            Create & Continue
          </SolidButton>
          <OutlineButton variant='secondary' leadingIcon={PlusIcon} trailingIcon={ArrowRightIcon}>
            Create & Continue
          </OutlineButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Sizes with Icons</p>
      <div style={s.card}>
        <div style={{
        ...s.row,
        alignItems: 'flex-end'
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <SolidButton variant='primary' size={size} leadingIcon={PlusIcon}>
                Create
              </SolidButton>
              <span style={{
            fontSize: 11,
            color: '#8f9298',
            fontFamily: "'SF Mono', monospace"
          }}>
                {size}
              </span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var P,L,k;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Radius</h1>
        <p style={s.desc}>
          Small (rounded-2), Medium (rounded-3), Large (rounded-full) 3가지 border-radius를
          지원합니다.
        </p>
      </div>

      <div style={s.card}>
        <div style={s.row}>
          {(['small', 'medium', 'large'] as const).map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <SolidButton variant='primary' radius={r}>
                Button
              </SolidButton>
              <span style={{
            fontSize: 11,
            color: '#8f9298',
            fontFamily: "'SF Mono', monospace"
          }}>
                {r}
              </span>
            </div>)}
        </div>
      </div>

      <div style={s.card}>
        <div style={s.row}>
          {(['small', 'medium', 'large'] as const).map(r => <div key={r} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8
        }}>
              <OutlineButton variant='secondary' radius={r}>
                Button
              </OutlineButton>
              <span style={{
            fontSize: 11,
            color: '#8f9298',
            fontFamily: "'SF Mono', monospace"
          }}>
                {r}
              </span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,A,R;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Composition Examples</h1>
        <p style={s.desc}>실제 사용 사례를 기반으로 한 버튼 조합 예시입니다.</p>
      </div>

      <p style={s.sectionTitle}>Dialog Actions</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8
      }}>
          <TextButton variant='secondary'>취소</TextButton>
          <SolidButton variant='primary'>확인</SolidButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Destructive Action</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: 8
      }}>
          <OutlineButton variant='secondary'>취소</OutlineButton>
          <SolidButton variant='negative'>삭제</SolidButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Form Actions</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
          <TextButton variant='secondary'>이전</TextButton>
          <div style={{
          display: 'flex',
          gap: 8
        }}>
            <OutlineButton variant='secondary'>임시저장</OutlineButton>
            <SolidButton variant='brand' leadingIcon={ArrowRightIcon}>
              다음 단계
            </SolidButton>
          </div>
        </div>
      </div>

      <p style={s.sectionTitle}>Button Group</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <SolidButton variant='primary' size='large' leadingIcon={PlusIcon}>
            새 프로젝트
          </SolidButton>
          <OutlineButton variant='secondary' size='large'>
            불러오기
          </OutlineButton>
        </div>
      </div>

      <p style={s.sectionTitle}>Full Width</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        maxWidth: 360
      }}>
          <SolidButton variant='brand' size='large'>
            시작하기
          </SolidButton>
          <OutlineButton variant='secondary' size='large'>
            둘러보기
          </OutlineButton>
        </div>
      </div>
    </div>
}`,...(R=(A=x.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const ne=["Playground","Overview","Sizes","States","WithIcons","Radius","Examples"];export{x as Examples,p as Overview,c as Playground,m as Radius,y as Sizes,v as States,u as WithIcons,ne as __namedExportsOrder,te as default};
