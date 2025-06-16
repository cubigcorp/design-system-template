import{j as a}from"./jsx-runtime-CNaO5cxq.js";import"./iframe-C_V67n6a.js";const e=({variant:O,children:A,fontFamily:m="default",className:G=""})=>{const I=m!=="default"?`font-${m}`:"",J=`${O} ${I} ${G}`.trim();return a.jsx("div",{className:J,children:A})},V={title:"Design System/Typography",component:e,parameters:{layout:"padded",docs:{description:{component:"디자인 시스템의 타이포그래피 스타일을 테스트합니다. 반응형 폰트 크기와 다양한 폰트 패밀리를 지원합니다."}}},argTypes:{variant:{control:"select",options:["display1","display2","display3","display4","display5","title1","title2","title3","title4","heading1","heading2","heading3","body1","body2","body3","caption1","caption2"],description:"타이포그래피 변형을 선택합니다."},fontFamily:{control:"select",options:["default","ko","en","sans"],description:"폰트 패밀리를 선택합니다."},children:{control:"text",description:"표시할 텍스트 내용"}}},s={args:{variant:"body2",children:"기본 텍스트 스타일입니다.",fontFamily:"default"}},t={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Display Styles (영문 폰트, 600 weight)"}),a.jsx(e,{variant:"display1",fontFamily:"en",children:"Display 1 - The quick brown fox"}),a.jsx(e,{variant:"display2",fontFamily:"en",children:"Display 2 - The quick brown fox"}),a.jsx(e,{variant:"display3",fontFamily:"en",children:"Display 3 - The quick brown fox"}),a.jsx(e,{variant:"display4",fontFamily:"en",children:"Display 4 - The quick brown fox"}),a.jsx(e,{variant:"display5",fontFamily:"en",children:"Display 5 - The quick brown fox"})]})},n={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Title Styles (영문 폰트, 600 weight)"}),a.jsx(e,{variant:"title1",fontFamily:"en",children:"Title 1 - The quick brown fox"}),a.jsx(e,{variant:"title2",fontFamily:"en",children:"Title 2 - The quick brown fox"}),a.jsx(e,{variant:"title3",fontFamily:"en",children:"Title 3 - The quick brown fox"}),a.jsx(e,{variant:"title4",fontFamily:"en",children:"Title 4 - The quick brown fox"})]})},r={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Heading Styles (영문 폰트, 600 weight)"}),a.jsx(e,{variant:"heading1",fontFamily:"en",children:"Heading 1 - The quick brown fox"}),a.jsx(e,{variant:"heading2",fontFamily:"en",children:"Heading 2 - The quick brown fox"}),a.jsx(e,{variant:"heading3",fontFamily:"en",children:"Heading 3 - The quick brown fox"})]})},l={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Body Styles (혼합 폰트, 400 weight)"}),a.jsx(e,{variant:"body1",children:"Body 1 - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(e,{variant:"body2",children:"Body 2 - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(e,{variant:"body3",children:"Body 3 - 한글과 English가 혼합된 텍스트입니다."})]})},i={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Caption Styles (혼합 폰트, 400 weight)"}),a.jsx(e,{variant:"caption1",children:"Caption 1 - 작은 설명 텍스트입니다."}),a.jsx(e,{variant:"caption2",children:"Caption 2 - 작은 설명 텍스트입니다."})]})},c={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Font Family Comparison"}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"한글 폰트 (Pretendard)"}),a.jsx(e,{variant:"body2",fontFamily:"ko",children:"프리텐다드 폰트로 표시되는 한글 텍스트입니다."}),a.jsx(e,{variant:"body2",fontFamily:"ko",className:"font-700",children:"프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다."})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"영문 폰트 (DM Sans)"}),a.jsx(e,{variant:"body2",fontFamily:"en",children:"This text is displayed in DM Sans font."}),a.jsx(e,{variant:"body2",fontFamily:"en",className:"font-700",children:"This text is displayed in DM Sans Bold font."})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"혼합 폰트 (Sans)"}),a.jsx(e,{variant:"body2",fontFamily:"sans",children:"한글과 English가 혼합된 텍스트입니다."}),a.jsx(e,{variant:"body2",fontFamily:"sans",className:"font-700",children:"한글과 English가 혼합된 Bold 텍스트입니다."})]})]})},p={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"반응형 폰트 크기 테스트"}),a.jsx("p",{className:"text-t4 text-gray-600 mb-4",children:"브라우저 창 크기를 조절하여 폰트 크기 변화를 확인하세요."}),a.jsxs("div",{className:"space-y-4 p-4 border border-gray-200 rounded",children:[a.jsx(e,{variant:"display3",fontFamily:"en",children:"Display 3 - 반응형 크기 변화 확인"}),a.jsx(e,{variant:"title2",fontFamily:"en",children:"Title 2 - 반응형 크기 변화 확인"}),a.jsx(e,{variant:"heading2",fontFamily:"en",children:"Heading 2 - 반응형 크기 변화 확인"}),a.jsx(e,{variant:"body2",children:"Body 2 - 반응형 크기 변화를 확인할 수 있는 텍스트입니다."})]}),a.jsxs("div",{className:"text-t3 text-gray-500 mt-4",children:[a.jsx("p",{children:"• 데스크탑 (1920px 이상): 기본 크기"}),a.jsx("p",{children:"• 태블릿 (768px 이하): 중간 크기"}),a.jsx("p",{children:"• 모바일 (375px 이하): 작은 크기"})]})]})},x={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Typography Token System"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Font Sizes (t1-t17)"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t1"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"11px"}),a.jsx("span",{className:"text-t1",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t2"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"12px"}),a.jsx("span",{className:"text-t2",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t3"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"13px"}),a.jsx("span",{className:"text-t3",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t4"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"14px"}),a.jsx("span",{className:"text-t4",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t5"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"16px"}),a.jsx("span",{className:"text-t5",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t6"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"18px"}),a.jsx("span",{className:"text-t6",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t7"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"20px"}),a.jsx("span",{className:"text-t7",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t8"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"22px"}),a.jsx("span",{className:"text-t8",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t9"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"24px"}),a.jsx("span",{className:"text-t9",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t10"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"28px"}),a.jsx("span",{className:"text-t10",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t11"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"32px"}),a.jsx("span",{className:"text-t11",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t12"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"36px"}),a.jsx("span",{className:"text-t12",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t13"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"40px"}),a.jsx("span",{className:"text-t13",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t14"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"48px"}),a.jsx("span",{className:"text-t14",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t15"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"56px"}),a.jsx("span",{className:"text-t15",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t16"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"64px"}),a.jsx("span",{className:"text-t16",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-8",children:"t17"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"80px"}),a.jsx("span",{className:"text-t17",children:"Sample Text"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Font Weights"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"400"}),a.jsx("span",{className:"text-t5 font-400",children:"Regular Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"500"}),a.jsx("span",{className:"text-t5 font-500",children:"Medium Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"600"}),a.jsx("span",{className:"text-t5 font-600",children:"SemiBold Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"700"}),a.jsx("span",{className:"text-t5 font-700",children:"Bold Weight"})]})]}),a.jsx("h3",{className:"text-t6 font-600 mt-6",children:"Letter Spacing"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"md"}),a.jsx("span",{className:"text-t5 tracking-md",children:"Normal Spacing (0px)"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"lg"}),a.jsx("span",{className:"text-t5 tracking-lg",children:"Tight Spacing (-0.5px)"})]})]})]})]})]})},d={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-8",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"실제 사용 예시"}),a.jsxs("div",{className:"p-6 border border-gray-200 rounded-lg",children:[a.jsx(e,{variant:"title2",fontFamily:"ko",className:"mb-4",children:"블로그 포스트 제목 예시"}),a.jsx(e,{variant:"body1",className:"text-gray-600 mb-4",children:"2024년 3월 15일 • 5분 읽기"}),a.jsx(e,{variant:"body2",className:"mb-4",children:"이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게 혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다."}),a.jsx(e,{variant:"caption1",className:"text-gray-500",children:"태그: 디자인시스템, 타이포그래피, 웹개발"})]}),a.jsxs("div",{className:"p-6 border border-gray-200 rounded-lg bg-gray-50",children:[a.jsx(e,{variant:"heading2",fontFamily:"en",className:"mb-2",children:"Product Card"}),a.jsx(e,{variant:"body2",className:"mb-3",children:"제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을 사용합니다."}),a.jsx(e,{variant:"title1",fontFamily:"en",className:"text-blue-600 mb-2",children:"$29.99"}),a.jsx(e,{variant:"caption2",className:"text-gray-500",children:"무료 배송 • 재고 있음"})]})]})};var o,y,h;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: "body2",
    children: "기본 텍스트 스타일입니다.",
    fontFamily: "default"
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var g,N,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Display Styles (영문 폰트, 600 weight)\r
      </h2>\r
      <Typography variant="display1" fontFamily="en">\r
        Display 1 - The quick brown fox\r
      </Typography>\r
      <Typography variant="display2" fontFamily="en">\r
        Display 2 - The quick brown fox\r
      </Typography>\r
      <Typography variant="display3" fontFamily="en">\r
        Display 3 - The quick brown fox\r
      </Typography>\r
      <Typography variant="display4" fontFamily="en">\r
        Display 4 - The quick brown fox\r
      </Typography>\r
      <Typography variant="display5" fontFamily="en">\r
        Display 5 - The quick brown fox\r
      </Typography>\r
    </div>
}`,...(v=(N=t.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var f,j,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Title Styles (영문 폰트, 600 weight)\r
      </h2>\r
      <Typography variant="title1" fontFamily="en">\r
        Title 1 - The quick brown fox\r
      </Typography>\r
      <Typography variant="title2" fontFamily="en">\r
        Title 2 - The quick brown fox\r
      </Typography>\r
      <Typography variant="title3" fontFamily="en">\r
        Title 3 - The quick brown fox\r
      </Typography>\r
      <Typography variant="title4" fontFamily="en">\r
        Title 4 - The quick brown fox\r
      </Typography>\r
    </div>
}`,...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var b,w,u;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Heading Styles (영문 폰트, 600 weight)\r
      </h2>\r
      <Typography variant="heading1" fontFamily="en">\r
        Heading 1 - The quick brown fox\r
      </Typography>\r
      <Typography variant="heading2" fontFamily="en">\r
        Heading 2 - The quick brown fox\r
      </Typography>\r
      <Typography variant="heading3" fontFamily="en">\r
        Heading 3 - The quick brown fox\r
      </Typography>\r
    </div>
}`,...(u=(w=r.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var S,F,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Body Styles (혼합 폰트, 400 weight)\r
      </h2>\r
      <Typography variant="body1">\r
        Body 1 - 한글과 English가 혼합된 텍스트입니다.\r
      </Typography>\r
      <Typography variant="body2">\r
        Body 2 - 한글과 English가 혼합된 텍스트입니다.\r
      </Typography>\r
      <Typography variant="body3">\r
        Body 3 - 한글과 English가 혼합된 텍스트입니다.\r
      </Typography>\r
    </div>
}`,...(k=(F=l.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var D,q,B;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Caption Styles (혼합 폰트, 400 weight)\r
      </h2>\r
      <Typography variant="caption1">\r
        Caption 1 - 작은 설명 텍스트입니다.\r
      </Typography>\r
      <Typography variant="caption2">\r
        Caption 2 - 작은 설명 텍스트입니다.\r
      </Typography>\r
    </div>
}`,...(B=(q=i.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var C,E,H;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <h2 className="text-t8 font-700 mb-6">Font Family Comparison</h2>\r
\r
      <div className="space-y-3">\r
        <h3 className="text-t6 font-600">한글 폰트 (Pretendard)</h3>\r
        <Typography variant="body2" fontFamily="ko">\r
          프리텐다드 폰트로 표시되는 한글 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontFamily="ko" className="font-700">\r
          프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다.\r
        </Typography>\r
      </div>\r
\r
      <div className="space-y-3">\r
        <h3 className="text-t6 font-600">영문 폰트 (DM Sans)</h3>\r
        <Typography variant="body2" fontFamily="en">\r
          This text is displayed in DM Sans font.\r
        </Typography>\r
        <Typography variant="body2" fontFamily="en" className="font-700">\r
          This text is displayed in DM Sans Bold font.\r
        </Typography>\r
      </div>\r
\r
      <div className="space-y-3">\r
        <h3 className="text-t6 font-600">혼합 폰트 (Sans)</h3>\r
        <Typography variant="body2" fontFamily="sans">\r
          한글과 English가 혼합된 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontFamily="sans" className="font-700">\r
          한글과 English가 혼합된 Bold 텍스트입니다.\r
        </Typography>\r
      </div>\r
    </div>
}`,...(H=(E=c.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var W,M,$;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <h2 className="text-t8 font-700 mb-6">반응형 폰트 크기 테스트</h2>\r
      <p className="text-t4 text-gray-600 mb-4">\r
        브라우저 창 크기를 조절하여 폰트 크기 변화를 확인하세요.\r
      </p>\r
\r
      <div className="space-y-4 p-4 border border-gray-200 rounded">\r
        <Typography variant="display3" fontFamily="en">\r
          Display 3 - 반응형 크기 변화 확인\r
        </Typography>\r
        <Typography variant="title2" fontFamily="en">\r
          Title 2 - 반응형 크기 변화 확인\r
        </Typography>\r
        <Typography variant="heading2" fontFamily="en">\r
          Heading 2 - 반응형 크기 변화 확인\r
        </Typography>\r
        <Typography variant="body2">\r
          Body 2 - 반응형 크기 변화를 확인할 수 있는 텍스트입니다.\r
        </Typography>\r
      </div>\r
\r
      <div className="text-t3 text-gray-500 mt-4">\r
        <p>• 데스크탑 (1920px 이상): 기본 크기</p>\r
        <p>• 태블릿 (768px 이하): 중간 크기</p>\r
        <p>• 모바일 (375px 이하): 작은 크기</p>\r
      </div>\r
    </div>
}`,...($=(M=p.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var R,P,z;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    } // 이 스토리에서는 컨트롤 비활성화
  },
  render: () => <div className="space-y-6">\r
      <h2 className="text-t8 font-700 mb-6">Typography Token System</h2>\r
\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div className="space-y-3">\r
          <h3 className="text-t6 font-600">Font Sizes (t1-t17)</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t1</span>\r
              <span className="text-t3 text-gray-400 w-12">11px</span>\r
              <span className="text-t1">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t2</span>\r
              <span className="text-t3 text-gray-400 w-12">12px</span>\r
              <span className="text-t2">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t3</span>\r
              <span className="text-t3 text-gray-400 w-12">13px</span>\r
              <span className="text-t3">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t4</span>\r
              <span className="text-t3 text-gray-400 w-12">14px</span>\r
              <span className="text-t4">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t5</span>\r
              <span className="text-t3 text-gray-400 w-12">16px</span>\r
              <span className="text-t5">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t6</span>\r
              <span className="text-t3 text-gray-400 w-12">18px</span>\r
              <span className="text-t6">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t7</span>\r
              <span className="text-t3 text-gray-400 w-12">20px</span>\r
              <span className="text-t7">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t8</span>\r
              <span className="text-t3 text-gray-400 w-12">22px</span>\r
              <span className="text-t8">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t9</span>\r
              <span className="text-t3 text-gray-400 w-12">24px</span>\r
              <span className="text-t9">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t10</span>\r
              <span className="text-t3 text-gray-400 w-12">28px</span>\r
              <span className="text-t10">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t11</span>\r
              <span className="text-t3 text-gray-400 w-12">32px</span>\r
              <span className="text-t11">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t12</span>\r
              <span className="text-t3 text-gray-400 w-12">36px</span>\r
              <span className="text-t12">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t13</span>\r
              <span className="text-t3 text-gray-400 w-12">40px</span>\r
              <span className="text-t13">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t14</span>\r
              <span className="text-t3 text-gray-400 w-12">48px</span>\r
              <span className="text-t14">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t15</span>\r
              <span className="text-t3 text-gray-400 w-12">56px</span>\r
              <span className="text-t15">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t16</span>\r
              <span className="text-t3 text-gray-400 w-12">64px</span>\r
              <span className="text-t16">Sample Text</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-8">t17</span>\r
              <span className="text-t3 text-gray-400 w-12">80px</span>\r
              <span className="text-t17">Sample Text</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="space-y-3">\r
          <h3 className="text-t6 font-600">Font Weights</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">400</span>\r
              <span className="text-t5 font-400">Regular Weight</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">500</span>\r
              <span className="text-t5 font-500">Medium Weight</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">600</span>\r
              <span className="text-t5 font-600">SemiBold Weight</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">700</span>\r
              <span className="text-t5 font-700">Bold Weight</span>\r
            </div>\r
          </div>\r
\r
          <h3 className="text-t6 font-600 mt-6">Letter Spacing</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">md</span>\r
              <span className="text-t5 tracking-md">Normal Spacing (0px)</span>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">lg</span>\r
              <span className="text-t5 tracking-lg">\r
                Tight Spacing (-0.5px)\r
              </span>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(z=(P=x.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var L,U,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-8">\r
      <h2 className="text-t8 font-700 mb-6">실제 사용 예시</h2>\r
\r
      {/* 블로그 포스트 예시 */}\r
      <div className="p-6 border border-gray-200 rounded-lg">\r
        <Typography variant="title2" fontFamily="ko" className="mb-4">\r
          블로그 포스트 제목 예시\r
        </Typography>\r
        <Typography variant="body1" className="text-gray-600 mb-4">\r
          2024년 3월 15일 • 5분 읽기\r
        </Typography>\r
        <Typography variant="body2" className="mb-4">\r
          이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게\r
          혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다.\r
        </Typography>\r
        <Typography variant="caption1" className="text-gray-500">\r
          태그: 디자인시스템, 타이포그래피, 웹개발\r
        </Typography>\r
      </div>\r
\r
      {/* 카드 컴포넌트 예시 */}\r
      <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">\r
        <Typography variant="heading2" fontFamily="en" className="mb-2">\r
          Product Card\r
        </Typography>\r
        <Typography variant="body2" className="mb-3">\r
          제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을\r
          사용합니다.\r
        </Typography>\r
        <Typography variant="title1" fontFamily="en" className="text-blue-600 mb-2">\r
          $29.99\r
        </Typography>\r
        <Typography variant="caption2" className="text-gray-500">\r
          무료 배송 • 재고 있음\r
        </Typography>\r
      </div>\r
    </div>
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};const X=["Default","DisplayStyles","TitleStyles","HeadingStyles","BodyStyles","CaptionStyles","FontFamilyComparison","ResponsiveTest","TokenSystem","UsageExamples"];export{l as BodyStyles,i as CaptionStyles,s as Default,t as DisplayStyles,c as FontFamilyComparison,r as HeadingStyles,p as ResponsiveTest,n as TitleStyles,x as TokenSystem,d as UsageExamples,X as __namedExportsOrder,V as default};
