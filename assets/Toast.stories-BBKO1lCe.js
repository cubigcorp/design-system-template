import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{a as i,T as j,t as s}from"./ToastSystem-SKH-1Zcp.js";import{S as o,O as I}from"./SolidButton-CiUOr0Na.js";import"./iframe-B_xlwamp.js";import"./preload-helper-eJNa_G2e.js";import"./styled-components.browser.esm-SETmF8Vw.js";import"./color-m2U5piog.js";import"./radius-DaoU83SK.js";import"./shadow-DVq_1U2q.js";import"./spacing-tE1IiUFl.js";import"./textColor-G8dwupNW.js";import"./IconCircleCheck-BBUUqRs3.js";import"./typography-CHdGJV44.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./lineHeight-aJXO3HIm.js";import"./borderColor-CzkI5wcR.js";import"./brandColor-Bb8P60S1.js";import"./negativeColor-fk0-w6JK.js";import"./types-riRgfiKe.js";const J={title:"Components/Feedback/Toast",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"사용자에게 알림을 표시하는 Toast 컴포넌트입니다. 4가지 variant와 6가지 placement를 지원합니다."}}},tags:["autodocs"]},t={page:{padding:"40px",maxWidth:960,margin:"0 auto",fontFamily:"'Inter', -apple-system, BlinkMacSystemFont, sans-serif"},header:{marginBottom:48},title:{fontSize:28,fontWeight:700,color:"#171719",margin:"0 0 8px",letterSpacing:-.5},desc:{fontSize:15,color:"#7b7e85",margin:0,lineHeight:1.5},sectionTitle:{fontSize:13,fontWeight:600,textTransform:"uppercase",letterSpacing:1,color:"#8f9298",margin:"0 0 16px"},card:{border:"1px solid #e6e7e9",borderRadius:12,padding:"24px",marginBottom:16},cardLabel:{fontSize:13,fontWeight:500,color:"#525459",marginBottom:16},row:{display:"flex",alignItems:"center",gap:12,flexWrap:"wrap"},label:{fontSize:11,color:"#8f9298",fontFamily:"'SF Mono', monospace"}},a={render:e=>n.jsx(i,{...e}),args:{children:"기본 토스트 메시지입니다.",variant:"default",placement:"bottom-right"},argTypes:{variant:{control:"select",options:["default","positive","negative","cautionary"]},placement:{control:"select",options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},showLeadingIcon:{control:"boolean"},showTrailingIcon:{control:"boolean"},showDivider:{control:"boolean"},offset:{control:"number"}}},r={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:t.page,children:[n.jsxs("div",{style:t.header,children:[n.jsx("h1",{style:t.title,children:"Toast"}),n.jsxs("p",{style:t.desc,children:["4가지 variant (default, positive, negative, cautionary)와 6가지 placement를 지원합니다.",n.jsx("br",{}),"Description, Divider, Leading/Trailing Icon 옵션을 조합하여 사용합니다."]})]}),n.jsx("p",{style:t.sectionTitle,children:"Variants"}),n.jsx("div",{style:t.card,children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{variant:"default",msg:"알림 메시지입니다.",desc:"추가 정보를 확인하세요."},{variant:"positive",msg:"저장이 완료되었습니다.",desc:"변경사항이 정상 반영되었습니다."},{variant:"negative",msg:"저장에 실패했습니다.",desc:"네트워크 연결을 확인해주세요."},{variant:"cautionary",msg:"주의가 필요합니다.",desc:"이 작업은 되돌릴 수 없습니다."}].map(({variant:e,msg:S,desc:w})=>n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[n.jsx("span",{style:{...t.label,width:80,paddingTop:12,flexShrink:0},children:e}),n.jsx(i,{variant:e,description:w,showDivider:!0,disablePositioning:!0,children:S})]},e))})}),n.jsx("p",{style:t.sectionTitle,children:"Without Icons"}),n.jsx("div",{style:t.card,children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[n.jsx(i,{variant:"default",showLeadingIcon:!1,showTrailingIcon:!1,disablePositioning:!0,children:"아이콘 없는 토스트 메시지입니다."}),n.jsx(i,{variant:"positive",showLeadingIcon:!1,disablePositioning:!0,children:"Leading 아이콘 없는 토스트입니다."})]})}),n.jsx("p",{style:t.sectionTitle,children:"Simple (no description)"}),n.jsx("div",{style:t.card,children:n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["default","positive","negative","cautionary"].map(e=>n.jsxs(i,{variant:e,disablePositioning:!0,children:[e," 토스트 메시지"]},e))})})]})},l={parameters:{controls:{disable:!0}},render:()=>n.jsx(j,{placement:"bottom-right",maxToasts:5,children:n.jsxs("div",{style:t.page,children:[n.jsxs("div",{style:t.header,children:[n.jsx("h1",{style:t.title,children:"Toast System"}),n.jsxs("p",{style:t.desc,children:["toast.success(), toast.error(), toast.warning(), toast.info() 함수로 토스트를 호출합니다.",n.jsx("br",{}),"버튼을 클릭하여 각 타입의 토스트를 확인하세요."]})]}),n.jsx("p",{style:t.sectionTitle,children:"Trigger Buttons"}),n.jsxs("div",{style:t.card,children:[n.jsx("div",{style:t.cardLabel,children:"버튼을 클릭하면 우측 하단에 Toast가 표시됩니다."}),n.jsxs("div",{style:t.row,children:[n.jsx(o,{variant:"primary",onClick:()=>s.info("알림","새로운 업데이트가 있습니다."),children:"Info"}),n.jsx(o,{variant:"positive",onClick:()=>s.success("저장 완료","변경사항이 저장되었습니다."),children:"Success"}),n.jsx(o,{variant:"negative",onClick:()=>s.error("오류 발생","다시 시도해주세요."),children:"Error"}),n.jsx(o,{variant:"brand",onClick:()=>s.warning("경고","이 작업은 되돌릴 수 없습니다."),children:"Warning"})]})]}),n.jsx("p",{style:t.sectionTitle,children:"Multiple Toasts"}),n.jsxs("div",{style:t.card,children:[n.jsx("div",{style:t.cardLabel,children:"4개의 토스트가 연속으로 표시됩니다. 스택킹 동작을 확인하세요."}),n.jsx(I,{variant:"secondary",onClick:()=>{s.success("첫 번째","토스트 1"),setTimeout(()=>s.info("두 번째","토스트 2"),300),setTimeout(()=>s.warning("세 번째","토스트 3"),600),setTimeout(()=>s.error("네 번째","토스트 4"),900)},children:"4개 연속 띄우기"})]})]})})},d={parameters:{controls:{disable:!0}},render:()=>n.jsxs("div",{style:t.page,children:[n.jsxs("div",{style:t.header,children:[n.jsx("h1",{style:t.title,children:"Placements"}),n.jsx("p",{style:t.desc,children:"6가지 위치에 Toast를 배치할 수 있습니다. 각 버튼을 클릭하여 확인하세요."})]}),n.jsx("div",{style:t.card,children:n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:8,maxWidth:480},children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(e=>n.jsx(j,{placement:e,maxToasts:2,children:n.jsx(o,{variant:"secondary",onClick:()=>s.info(e,`${e} 위치의 토스트입니다.`),children:e})},e))})})]})};var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: '기본 토스트 메시지입니다.',
    variant: 'default',
    placement: 'bottom-right'
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'positive', 'negative', 'cautionary']
    },
    placement: {
      control: 'select',
      options: ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']
    },
    showLeadingIcon: {
      control: 'boolean'
    },
    showTrailingIcon: {
      control: 'boolean'
    },
    showDivider: {
      control: 'boolean'
    },
    offset: {
      control: 'number'
    }
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var v,g,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Toast</h1>
        <p style={s.desc}>
          4가지 variant (default, positive, negative, cautionary)와 6가지 placement를 지원합니다.
          <br />
          Description, Divider, Leading/Trailing Icon 옵션을 조합하여 사용합니다.
        </p>
      </div>

      <p style={s.sectionTitle}>Variants</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {[{
          variant: 'default' as const,
          msg: '알림 메시지입니다.',
          desc: '추가 정보를 확인하세요.'
        }, {
          variant: 'positive' as const,
          msg: '저장이 완료되었습니다.',
          desc: '변경사항이 정상 반영되었습니다.'
        }, {
          variant: 'negative' as const,
          msg: '저장에 실패했습니다.',
          desc: '네트워크 연결을 확인해주세요.'
        }, {
          variant: 'cautionary' as const,
          msg: '주의가 필요합니다.',
          desc: '이 작업은 되돌릴 수 없습니다.'
        }].map(({
          variant,
          msg,
          desc
        }) => <div key={variant} style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12
        }}>
              <span style={{
            ...s.label,
            width: 80,
            paddingTop: 12,
            flexShrink: 0
          }}>
                {variant}
              </span>
              <Toast variant={variant} description={desc} showDivider disablePositioning>
                {msg}
              </Toast>
            </div>)}
        </div>
      </div>

      <p style={s.sectionTitle}>Without Icons</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          <Toast variant='default' showLeadingIcon={false} showTrailingIcon={false} disablePositioning>
            아이콘 없는 토스트 메시지입니다.
          </Toast>
          <Toast variant='positive' showLeadingIcon={false} disablePositioning>
            Leading 아이콘 없는 토스트입니다.
          </Toast>
        </div>
      </div>

      <p style={s.sectionTitle}>Simple (no description)</p>
      <div style={s.card}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
          {(['default', 'positive', 'negative', 'cautionary'] as const).map(variant => <Toast key={variant} variant={variant} disablePositioning>
              {variant} 토스트 메시지
            </Toast>)}
        </div>
      </div>
    </div>
}`,...(y=(g=r.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,u,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ToastSystem placement='bottom-right' maxToasts={5}>
      <div style={s.page}>
        <div style={s.header}>
          <h1 style={s.title}>Toast System</h1>
          <p style={s.desc}>
            toast.success(), toast.error(), toast.warning(), toast.info() 함수로 토스트를
            호출합니다.
            <br />
            버튼을 클릭하여 각 타입의 토스트를 확인하세요.
          </p>
        </div>

        <p style={s.sectionTitle}>Trigger Buttons</p>
        <div style={s.card}>
          <div style={s.cardLabel}>버튼을 클릭하면 우측 하단에 Toast가 표시됩니다.</div>
          <div style={s.row}>
            <SolidButton variant='primary' onClick={() => toast.info('알림', '새로운 업데이트가 있습니다.')}>
              Info
            </SolidButton>
            <SolidButton variant='positive' onClick={() => toast.success('저장 완료', '변경사항이 저장되었습니다.')}>
              Success
            </SolidButton>
            <SolidButton variant='negative' onClick={() => toast.error('오류 발생', '다시 시도해주세요.')}>
              Error
            </SolidButton>
            <SolidButton variant='brand' onClick={() => toast.warning('경고', '이 작업은 되돌릴 수 없습니다.')}>
              Warning
            </SolidButton>
          </div>
        </div>

        <p style={s.sectionTitle}>Multiple Toasts</p>
        <div style={s.card}>
          <div style={s.cardLabel}>
            4개의 토스트가 연속으로 표시됩니다. 스택킹 동작을 확인하세요.
          </div>
          <OutlineButton variant='secondary' onClick={() => {
          toast.success('첫 번째', '토스트 1');
          setTimeout(() => toast.info('두 번째', '토스트 2'), 300);
          setTimeout(() => toast.warning('세 번째', '토스트 3'), 600);
          setTimeout(() => toast.error('네 번째', '토스트 4'), 900);
        }}>
            4개 연속 띄우기
          </OutlineButton>
        </div>
      </div>
    </ToastSystem>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var f,T,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div style={s.page}>
      <div style={s.header}>
        <h1 style={s.title}>Placements</h1>
        <p style={s.desc}>
          6가지 위치에 Toast를 배치할 수 있습니다. 각 버튼을 클릭하여 확인하세요.
        </p>
      </div>

      <div style={s.card}>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
        maxWidth: 480
      }}>
          {(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'] as const).map(placement => <ToastSystem key={placement} placement={placement} maxToasts={2}>
              <SolidButton variant='secondary' onClick={() => toast.info(placement, \`\${placement} 위치의 토스트입니다.\`)}>
                {placement}
              </SolidButton>
            </ToastSystem>)}
        </div>
      </div>
    </div>
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const K=["Playground","Overview","Interactive","Placements"];export{l as Interactive,r as Overview,d as Placements,a as Playground,K as __namedExportsOrder,J as default};
