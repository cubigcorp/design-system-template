import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./SolidButton-DLMDXEH0.js";import"./TextButton-CUYKb_j3.js";import"./IconButton-D3KaSVHJ.js";import"./Badge-DbInwIDy.js";import"./Chip-zmFavlvj.js";import"./Switch-DUTUtJbR.js";import"./Description-Cj0GsyMS.js";import"./Divider-BV2OAWTs.js";import"./TokenField-_Cks1448.js";import{a as e,T as o,t as n}from"./Modal-6OGFklf5.js";import"./MultiSelect-CaX0tu2D.js";import"./TokenInput-G7VQ3kaR.js";import"./RadioButton-DWvdJYvv.js";import"./Checkbox-57Yw2wUc.js";import"./SegmentItem-CR8GFZfD.js";import"./AvatarGroup-BcQmqXKI.js";import"./TabItem-Cb7qXt_A.js";import"./ChipTabs-DfaQr-Eg.js";import"./Popover-CkyYWx1w.js";import"./StepIndicator-Dy_ZGd4v.js";import"./Breadcrumbs-C4g3mzte.js";import"./BreadcrumbItem-BLtsITmT.js";import"./Pagination-C16rGpGj.js";import"./Callout-B6B9q4dt.js";import"./TopBannerList-CH4_cA95.js";import"./styled-components.browser.esm-5GbLlbaO.js";import"./iframe-BNYJyn6Q.js";import"./color-CiwAFuFb.js";import"./radius-DaoU83SK.js";import"./fontWeight-CRwBdwgF.js";import"./fontSize-BFAJJ5Eh.js";import"./borderColor-C_RHITEf.js";import"./textColor-DLZeZODc.js";import"./spacing-tE1IiUFl.js";import"./Spinner-uNhSIGhB.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./layerColor-7aOJUZki.js";import"./typography-hbgufnaT.js";import"./lineHeight-aJXO3HIm.js";import"./IconSearch-D4pbJy3T.js";import"./IconCheck-CKtc9n1_.js";import"./index-C0J-5MmS.js";import"./index-Dln8NCzm.js";import"./shadow-DVq_1U2q.js";import"./icon_close_outline_16-BWBdWELy.js";import"./icon_chevron-down_outline_16-c06AZntw.js";import"./icon_chevron-right_outline_20-BsnVMo6J.js";import"./icon_more_outline_16-BV8b68p7.js";import"./icon_chevron-right_outline_16-BSFMBMyL.js";import"./icon_warning_fill_20-DFw4JDOb.js";import"./icon_close_outline_24-CONN7zfH.js";const en={title:"Components/Toast",component:e,parameters:{layout:"fullscreen",docs:{description:{component:"Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다."}}},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","positive","negative","cautionary"]},placement:{control:{type:"select"},options:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"]},offset:{control:{type:"number"}},showLeadingIcon:{control:{type:"boolean"}},showTrailingIcon:{control:{type:"boolean"}},showDivider:{control:{type:"boolean"}}}},s={render:r=>t.jsx(e,{...r}),args:{children:"기본 토스트 메시지입니다.",variant:"default",placement:"bottom-right"}},a={render:r=>t.jsx(e,{...r}),args:{children:`저장이 완료되었습니다.
변경한 내용이 정상적으로 반영되었어요.`,description:"1 저장 완료, 0 실패",variant:"positive",placement:"bottom-right",showDivider:!0}},i={render:r=>t.jsx(e,{...r}),args:{children:`저장에 실패했습니다.
네트워크 연결을 확인해주세요.`,description:"오류 코드: NET_001",variant:"negative",placement:"bottom-right",showDivider:!0}},p={render:r=>t.jsx(e,{...r}),args:{children:`주의가 필요합니다.
이 작업은 되돌릴 수 없습니다.`,description:"계속하시겠습니까?",variant:"cautionary",placement:"bottom-right",showDivider:!0}},c={render:r=>t.jsx(e,{...r}),args:{children:"아이콘 없는 토스트 메시지입니다.",variant:"default",placement:"bottom-right",showLeadingIcon:!1,showTrailingIcon:!1}},d={render:r=>t.jsx(e,{...r}),args:{children:`정보가 업데이트되었습니다.
새로운 기능을 확인해보세요.`,description:"더 자세한 내용은 설정에서 확인하세요.",variant:"default",placement:"bottom-right",showDivider:!0}},l={render:r=>t.jsx(e,{...r}),args:{children:"왼쪽 상단에 위치한 토스트입니다.",variant:"default",placement:"top-left"}},m={render:r=>t.jsx(e,{...r}),args:{children:"하단 중앙에 위치한 토스트입니다.",variant:"positive",placement:"bottom-center"}},u={render:()=>t.jsx(o,{placement:"bottom-right",maxToasts:3,children:t.jsxs("div",{style:{padding:"40px"},children:[t.jsx("h2",{children:"ToastSystem - Bottom Right"}),t.jsx("p",{children:"아래 버튼을 클릭하여 우측 하단에 토스트를 띄워보세요."}),t.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[t.jsx("button",{onClick:()=>n.success("저장 완료!","변경사항이 저장되었습니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Success Toast"}),t.jsx("button",{onClick:()=>n.error("오류 발생","다시 시도해주세요."),style:{padding:"8px 16px",cursor:"pointer"},children:"Error Toast"}),t.jsx("button",{onClick:()=>n.warning("경고","주의가 필요합니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Warning Toast"}),t.jsx("button",{onClick:()=>n.info("알림","새로운 업데이트가 있습니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Info Toast"})]})]})})},x={render:()=>t.jsx(o,{placement:"top-center",maxToasts:3,children:t.jsxs("div",{style:{padding:"40px"},children:[t.jsx("h2",{children:"ToastSystem - Top Center"}),t.jsx("p",{children:"아래 버튼을 클릭하여 상단 중앙에 토스트를 띄워보세요."}),t.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[t.jsx("button",{onClick:()=>n.success("저장 완료!","변경사항이 저장되었습니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Success Toast"}),t.jsx("button",{onClick:()=>n.error("오류 발생","다시 시도해주세요."),style:{padding:"8px 16px",cursor:"pointer"},children:"Error Toast"}),t.jsx("button",{onClick:()=>n.warning("경고","주의가 필요합니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Warning Toast"}),t.jsx("button",{onClick:()=>n.info("알림","새로운 업데이트가 있습니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Info Toast"})]})]})})},g={render:()=>t.jsx(o,{placement:"top-left",maxToasts:3,children:t.jsxs("div",{style:{padding:"40px"},children:[t.jsx("h2",{children:"ToastSystem - Top Left"}),t.jsx("p",{children:"아래 버튼을 클릭하여 좌측 상단에 토스트를 띄워보세요."}),t.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[t.jsx("button",{onClick:()=>n.success("저장 완료!","변경사항이 저장되었습니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Success Toast"}),t.jsx("button",{onClick:()=>n.error("오류 발생","다시 시도해주세요."),style:{padding:"8px 16px",cursor:"pointer"},children:"Error Toast"})]})]})})},T={render:()=>t.jsx(o,{placement:"bottom-center",maxToasts:3,children:t.jsxs("div",{style:{padding:"40px"},children:[t.jsx("h2",{children:"ToastSystem - Bottom Center"}),t.jsx("p",{children:"아래 버튼을 클릭하여 하단 중앙에 토스트를 띄워보세요."}),t.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:[t.jsx("button",{onClick:()=>n.success("저장 완료!","변경사항이 저장되었습니다."),style:{padding:"8px 16px",cursor:"pointer"},children:"Success Toast"}),t.jsx("button",{onClick:()=>n.error("오류 발생","다시 시도해주세요."),style:{padding:"8px 16px",cursor:"pointer"},children:"Error Toast"})]})]})})},h={render:()=>t.jsx(o,{placement:"bottom-right",maxToasts:5,children:t.jsxs("div",{style:{padding:"40px"},children:[t.jsx("h2",{children:"ToastSystem - Multiple Toasts"}),t.jsx("p",{children:"여러 개의 토스트를 연속으로 띄워 스택킹 동작을 확인하세요."}),t.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"16px"},children:t.jsx("button",{onClick:()=>{n.success("첫 번째","토스트 1"),setTimeout(()=>n.info("두 번째","토스트 2"),300),setTimeout(()=>n.warning("세 번째","토스트 3"),600),setTimeout(()=>n.error("네 번째","토스트 4"),900)},style:{padding:"8px 16px",cursor:"pointer"},children:"4개 연속 띄우기"})})]})})};var y,v,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "기본 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-right"
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,S,j;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "저장이 완료되었습니다.\\n변경한 내용이 정상적으로 반영되었어요.",
    description: "1 저장 완료, 0 실패",
    variant: "positive",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,k,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "저장에 실패했습니다.\\n네트워크 연결을 확인해주세요.",
    description: "오류 코드: NET_001",
    variant: "negative",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,E,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "주의가 필요합니다.\\n이 작업은 되돌릴 수 없습니다.",
    description: "계속하시겠습니까?",
    variant: "cautionary",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(I=(E=p.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var B,L,W;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "아이콘 없는 토스트 메시지입니다.",
    variant: "default",
    placement: "bottom-right",
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(W=(L=c.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var R,M,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "정보가 업데이트되었습니다.\\n새로운 기능을 확인해보세요.",
    description: "더 자세한 내용은 설정에서 확인하세요.",
    variant: "default",
    placement: "bottom-right",
    showDivider: true
  }
}`,...(N=(M=d.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var _,P,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "왼쪽 상단에 위치한 토스트입니다.",
    variant: "default",
    placement: "top-left"
  }
}`,...(O=(P=l.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var q,z,A;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <Toast {...args} />,
  args: {
    children: "하단 중앙에 위치한 토스트입니다.",
    variant: "positive",
    placement: "bottom-center"
  }
}`,...(A=(z=m.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var F,G,H;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <ToastSystem placement="bottom-right" maxToasts={3}>
            <div style={{
      padding: "40px"
    }}>
                <h2>ToastSystem - Bottom Right</h2>
                <p>아래 버튼을 클릭하여 우측 하단에 토스트를 띄워보세요.</p>
                <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "16px"
      }}>
                    <button onClick={() => toast.success("저장 완료!", "변경사항이 저장되었습니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Success Toast
                    </button>
                    <button onClick={() => toast.error("오류 발생", "다시 시도해주세요.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Error Toast
                    </button>
                    <button onClick={() => toast.warning("경고", "주의가 필요합니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Warning Toast
                    </button>
                    <button onClick={() => toast.info("알림", "새로운 업데이트가 있습니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Info Toast
                    </button>
                </div>
            </div>
        </ToastSystem>
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ToastSystem placement="top-center" maxToasts={3}>
            <div style={{
      padding: "40px"
    }}>
                <h2>ToastSystem - Top Center</h2>
                <p>아래 버튼을 클릭하여 상단 중앙에 토스트를 띄워보세요.</p>
                <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "16px"
      }}>
                    <button onClick={() => toast.success("저장 완료!", "변경사항이 저장되었습니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Success Toast
                    </button>
                    <button onClick={() => toast.error("오류 발생", "다시 시도해주세요.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Error Toast
                    </button>
                    <button onClick={() => toast.warning("경고", "주의가 필요합니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Warning Toast
                    </button>
                    <button onClick={() => toast.info("알림", "새로운 업데이트가 있습니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Info Toast
                    </button>
                </div>
            </div>
        </ToastSystem>
}`,...(Q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <ToastSystem placement="top-left" maxToasts={3}>
            <div style={{
      padding: "40px"
    }}>
                <h2>ToastSystem - Top Left</h2>
                <p>아래 버튼을 클릭하여 좌측 상단에 토스트를 띄워보세요.</p>
                <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "16px"
      }}>
                    <button onClick={() => toast.success("저장 완료!", "변경사항이 저장되었습니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Success Toast
                    </button>
                    <button onClick={() => toast.error("오류 발생", "다시 시도해주세요.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Error Toast
                    </button>
                </div>
            </div>
        </ToastSystem>
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <ToastSystem placement="bottom-center" maxToasts={3}>
            <div style={{
      padding: "40px"
    }}>
                <h2>ToastSystem - Bottom Center</h2>
                <p>아래 버튼을 클릭하여 하단 중앙에 토스트를 띄워보세요.</p>
                <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "16px"
      }}>
                    <button onClick={() => toast.success("저장 완료!", "변경사항이 저장되었습니다.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Success Toast
                    </button>
                    <button onClick={() => toast.error("오류 발생", "다시 시도해주세요.")} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        Error Toast
                    </button>
                </div>
            </div>
        </ToastSystem>
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,nt,rt;h.parameters={...h.parameters,docs:{...(tt=h.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => <ToastSystem placement="bottom-right" maxToasts={5}>
            <div style={{
      padding: "40px"
    }}>
                <h2>ToastSystem - Multiple Toasts</h2>
                <p>여러 개의 토스트를 연속으로 띄워 스택킹 동작을 확인하세요.</p>
                <div style={{
        display: "flex",
        gap: "8px",
        marginTop: "16px"
      }}>
                    <button onClick={() => {
          toast.success("첫 번째", "토스트 1");
          setTimeout(() => toast.info("두 번째", "토스트 2"), 300);
          setTimeout(() => toast.warning("세 번째", "토스트 3"), 600);
          setTimeout(() => toast.error("네 번째", "토스트 4"), 900);
        }} style={{
          padding: "8px 16px",
          cursor: "pointer"
        }}>
                        4개 연속 띄우기
                    </button>
                </div>
            </div>
        </ToastSystem>
}`,...(rt=(nt=h.parameters)==null?void 0:nt.docs)==null?void 0:rt.source}}};const on=["Default","Positive","Negative","Cautionary","WithoutIcons","WithDivider","TopLeft","BottomCenter","ToastSystemBottomRight","ToastSystemTopCenter","ToastSystemTopLeft","ToastSystemBottomCenter","ToastSystemMultipleToasts"];export{m as BottomCenter,p as Cautionary,s as Default,i as Negative,a as Positive,T as ToastSystemBottomCenter,u as ToastSystemBottomRight,h as ToastSystemMultipleToasts,x as ToastSystemTopCenter,g as ToastSystemTopLeft,l as TopLeft,d as WithDivider,c as WithoutIcons,on as __namedExportsOrder,en as default};
