import{j as a}from"./jsx-runtime-CGmPDQQA.js";import{d as J}from"./styled-components.browser.esm-BnnUhwQ2.js";import{a as K}from"./typography-BtvHU1C6.js";import"./iframe-BE39lfRy.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";const L=J.div`
  ${({$variant:h,$fontWeight:g="medium",$fontFamily:r="en"})=>{const e=K[h],x=g;return`
      font-size: ${e.fontSize[0]};
      font-weight: ${e.weights[x]};
      font-family: ${r==="en"?e.families.en:r==="ko"?e.families.ko:e.families.sans};
      letter-spacing: ${e.letterSpacing};
      line-height: ${e.lineHeight};
    `}}
`,n=({variant:h,children:g,fontWeight:r="medium",fontFamily:e="en",className:x=""})=>a.jsx(L,{$variant:h,$fontWeight:r,$fontFamily:e,className:x,children:g}),ea={title:"Design System/Typography",component:n,parameters:{layout:"padded",docs:{description:{component:"디자인 시스템의 타이포그래피 토큰을 기반으로 한 스타일입니다. 폰트 웨이트(400~700)와 폰트 패밀리(영문/한글/혼합)를 선택할 수 있습니다."}}},argTypes:{variant:{control:"select",options:["display1","display2","display3","display4","display5","title1","title2","title3","title4","heading1","heading2","heading3","body1","body2","body3","caption1","caption2"],description:"타이포그래피 변형을 선택합니다."},fontWeight:{control:"select",options:["regular","medium","semibold","bold"],description:"폰트 웨이트를 선택합니다."},fontFamily:{control:"select",options:["en","ko","sans"],description:"폰트 패밀리를 선택합니다."},children:{control:"text",description:"표시할 텍스트 내용"}}},t={args:{variant:"body2",children:"기본 텍스트 스타일입니다.",fontWeight:"regular",fontFamily:"sans"}},s={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Display Styles (영문 폰트, 500 weight 기본)"}),a.jsx(n,{variant:"display1",fontFamily:"en",children:"Display 1 - The quick brown fox"}),a.jsx(n,{variant:"display2",fontFamily:"en",children:"Display 2 - The quick brown fox"}),a.jsx(n,{variant:"display3",fontFamily:"en",children:"Display 3 - The quick brown fox"}),a.jsx(n,{variant:"display4",fontFamily:"en",children:"Display 4 - The quick brown fox"}),a.jsx(n,{variant:"display5",fontFamily:"en",children:"Display 5 - The quick brown fox"})]})},i={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Title Styles (영문 폰트, 500 weight 기본)"}),a.jsx(n,{variant:"title1",fontFamily:"en",children:"Title 1 - The quick brown fox"}),a.jsx(n,{variant:"title2",fontFamily:"en",children:"Title 2 - The quick brown fox"}),a.jsx(n,{variant:"title3",fontFamily:"en",children:"Title 3 - The quick brown fox"}),a.jsx(n,{variant:"title4",fontFamily:"en",children:"Title 4 - The quick brown fox"})]})},o={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Heading Styles (영문 폰트, 500 weight 기본)"}),a.jsx(n,{variant:"heading1",fontFamily:"en",children:"Heading 1 - The quick brown fox"}),a.jsx(n,{variant:"heading2",fontFamily:"en",children:"Heading 2 - The quick brown fox"}),a.jsx(n,{variant:"heading3",fontFamily:"en",children:"Heading 3 - The quick brown fox"})]})},l={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Body Styles (혼합 폰트, 400 weight 기본)"}),a.jsx(n,{variant:"body1",fontFamily:"sans",children:"Body 1 - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontFamily:"sans",children:"Body 2 - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body3",fontFamily:"sans",children:"Body 3 - 한글과 English가 혼합된 텍스트입니다."})]})},y={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Caption Styles (혼합 폰트, 400 weight 기본)"}),a.jsx(n,{variant:"caption1",fontFamily:"sans",children:"Caption 1 - 작은 설명 텍스트입니다."}),a.jsx(n,{variant:"caption2",fontFamily:"sans",children:"Caption 2 - 작은 설명 텍스트입니다."})]})},p={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Font Weight Variations"}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Display 1 Weight Variations"}),a.jsx(n,{variant:"display1",fontWeight:"regular",fontFamily:"en",children:"Display 1 Regular (400) - The quick brown fox"}),a.jsx(n,{variant:"display1",fontWeight:"medium",fontFamily:"en",children:"Display 1 Medium (500) - The quick brown fox"}),a.jsx(n,{variant:"display1",fontWeight:"semibold",fontFamily:"en",children:"Display 1 Semibold (600) - The quick brown fox"}),a.jsx(n,{variant:"display1",fontWeight:"bold",fontFamily:"en",children:"Display 1 Bold (700) - The quick brown fox"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Body 2 Weight Variations"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",children:"Body 2 Regular (400) - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"medium",fontFamily:"sans",children:"Body 2 Medium (500) - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"semibold",fontFamily:"sans",children:"Body 2 Semibold (600) - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"sans",children:"Body 2 Bold (700) - 한글과 English가 혼합된 텍스트입니다."})]})]})},d={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Font Family Comparison"}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"영문 폰트 (DM Sans)"}),a.jsx(n,{variant:"body2",fontFamily:"en",children:"This text is displayed in DM Sans font."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"en",children:"This text is displayed in DM Sans Bold font."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"한글 폰트 (Pretendard)"}),a.jsx(n,{variant:"body2",fontFamily:"ko",children:"프리텐다드 폰트로 표시되는 한글 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"ko",children:"프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"혼합 폰트 (Sans)"}),a.jsx(n,{variant:"body2",fontFamily:"sans",children:"한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"sans",children:"한글과 English가 혼합된 Bold 텍스트입니다."})]})]})},c={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Typography Token System"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Display Styles"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display1"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"40px"}),a.jsx(n,{variant:"display1",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display2"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"48px"}),a.jsx(n,{variant:"display2",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display3"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"56px"}),a.jsx(n,{variant:"display3",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display4"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"64px"}),a.jsx(n,{variant:"display4",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display5"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"80px"}),a.jsx(n,{variant:"display5",fontFamily:"en",children:"Sample Text"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Font Weights"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"400"}),a.jsx(n,{variant:"body2",fontWeight:"regular",children:"Regular Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"500"}),a.jsx(n,{variant:"body2",fontWeight:"medium",children:"Medium Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"600"}),a.jsx(n,{variant:"body2",fontWeight:"semibold",children:"Semibold Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"700"}),a.jsx(n,{variant:"body2",fontWeight:"bold",children:"Bold Weight"})]})]})]})]})]})},m={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-8",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"실제 사용 예시"}),a.jsxs("div",{className:"p-6 border border-gray-200 rounded-lg",children:[a.jsx(n,{variant:"title2",fontFamily:"ko",fontWeight:"bold",children:"블로그 포스트 제목 예시"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",className:"text-gray-600 mt-2 mb-4",children:"2024년 3월 15일 • 5분 읽기"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",className:"mb-4",children:"이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게 혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다."}),a.jsx(n,{variant:"caption1",fontWeight:"regular",fontFamily:"sans",className:"text-gray-500",children:"태그: 디자인시스템, 타이포그래피, 웹개발"})]}),a.jsxs("div",{className:"p-6 border border-gray-200 rounded-lg bg-gray-50",children:[a.jsx(n,{variant:"heading2",fontFamily:"en",fontWeight:"semibold",children:"Product Card"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",className:"mt-2 mb-3",children:"제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을 사용합니다."}),a.jsx(n,{variant:"title1",fontFamily:"en",fontWeight:"bold",className:"text-blue-600 mb-2",children:"$29.99"}),a.jsx(n,{variant:"caption2",fontWeight:"regular",fontFamily:"sans",className:"text-gray-500",children:"무료 배송 • 재고 있음"})]})]})};var f,v,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "body2",
    children: "기본 텍스트 스타일입니다.",
    fontWeight: "regular",
    fontFamily: "sans"
  }
}`,...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,u,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Display Styles (영문 폰트, 500 weight 기본)\r
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
}`,...(N=(u=s.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var j,F,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Title Styles (영문 폰트, 500 weight 기본)\r
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
}`,...(w=(F=i.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var W,S,k;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Heading Styles (영문 폰트, 500 weight 기본)\r
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
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,q,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Body Styles (혼합 폰트, 400 weight 기본)\r
      </h2>\r
      <Typography variant="body1" fontFamily="sans">\r
        Body 1 - 한글과 English가 혼합된 텍스트입니다.\r
      </Typography>\r
      <Typography variant="body2" fontFamily="sans">\r
        Body 2 - 한글과 English가 혼합된 텍스트입니다.\r
      </Typography>\r
      <Typography variant="body3" fontFamily="sans">\r
        Body 3 - 한글과 English가 혼합된 텍스트입니다.\r
      </Typography>\r
    </div>
}`,...(B=(q=l.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var E,C,M;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">\r
      <h2 className="text-t8 font-700 mb-6">\r
        Caption Styles (혼합 폰트, 400 weight 기본)\r
      </h2>\r
      <Typography variant="caption1" fontFamily="sans">\r
        Caption 1 - 작은 설명 텍스트입니다.\r
      </Typography>\r
      <Typography variant="caption2" fontFamily="sans">\r
        Caption 2 - 작은 설명 텍스트입니다.\r
      </Typography>\r
    </div>
}`,...(M=(C=y.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var H,$,V;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <h2 className="text-t8 font-700 mb-6">Font Weight Variations</h2>\r
\r
      <div className="space-y-4">\r
        <h3 className="text-t6 font-600">Display 1 Weight Variations</h3>\r
        <Typography variant="display1" fontWeight="regular" fontFamily="en">\r
          Display 1 Regular (400) - The quick brown fox\r
        </Typography>\r
        <Typography variant="display1" fontWeight="medium" fontFamily="en">\r
          Display 1 Medium (500) - The quick brown fox\r
        </Typography>\r
        <Typography variant="display1" fontWeight="semibold" fontFamily="en">\r
          Display 1 Semibold (600) - The quick brown fox\r
        </Typography>\r
        <Typography variant="display1" fontWeight="bold" fontFamily="en">\r
          Display 1 Bold (700) - The quick brown fox\r
        </Typography>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="text-t6 font-600">Body 2 Weight Variations</h3>\r
        <Typography variant="body2" fontWeight="regular" fontFamily="sans">\r
          Body 2 Regular (400) - 한글과 English가 혼합된 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontWeight="medium" fontFamily="sans">\r
          Body 2 Medium (500) - 한글과 English가 혼합된 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontWeight="semibold" fontFamily="sans">\r
          Body 2 Semibold (600) - 한글과 English가 혼합된 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontWeight="bold" fontFamily="sans">\r
          Body 2 Bold (700) - 한글과 English가 혼합된 텍스트입니다.\r
        </Typography>\r
      </div>\r
    </div>
}`,...(V=($=p.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var R,P,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <h2 className="text-t8 font-700 mb-6">Font Family Comparison</h2>\r
\r
      <div className="space-y-4">\r
        <h3 className="text-t6 font-600">영문 폰트 (DM Sans)</h3>\r
        <Typography variant="body2" fontFamily="en">\r
          This text is displayed in DM Sans font.\r
        </Typography>\r
        <Typography variant="body2" fontWeight="bold" fontFamily="en">\r
          This text is displayed in DM Sans Bold font.\r
        </Typography>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="text-t6 font-600">한글 폰트 (Pretendard)</h3>\r
        <Typography variant="body2" fontFamily="ko">\r
          프리텐다드 폰트로 표시되는 한글 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontWeight="bold" fontFamily="ko">\r
          프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다.\r
        </Typography>\r
      </div>\r
\r
      <div className="space-y-4">\r
        <h3 className="text-t6 font-600">혼합 폰트 (Sans)</h3>\r
        <Typography variant="body2" fontFamily="sans">\r
          한글과 English가 혼합된 텍스트입니다.\r
        </Typography>\r
        <Typography variant="body2" fontWeight="bold" fontFamily="sans">\r
          한글과 English가 혼합된 Bold 텍스트입니다.\r
        </Typography>\r
      </div>\r
    </div>
}`,...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var U,_,O;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">\r
      <h2 className="text-t8 font-700 mb-6">Typography Token System</h2>\r
\r
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">\r
        <div className="space-y-3">\r
          <h3 className="text-t6 font-600">Display Styles</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-16">Display1</span>\r
              <span className="text-t3 text-gray-400 w-12">40px</span>\r
              <Typography variant="display1" fontFamily="en">\r
                Sample Text\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-16">Display2</span>\r
              <span className="text-t3 text-gray-400 w-12">48px</span>\r
              <Typography variant="display2" fontFamily="en">\r
                Sample Text\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-16">Display3</span>\r
              <span className="text-t3 text-gray-400 w-12">56px</span>\r
              <Typography variant="display3" fontFamily="en">\r
                Sample Text\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-16">Display4</span>\r
              <span className="text-t3 text-gray-400 w-12">64px</span>\r
              <Typography variant="display4" fontFamily="en">\r
                Sample Text\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-16">Display5</span>\r
              <span className="text-t3 text-gray-400 w-12">80px</span>\r
              <Typography variant="display5" fontFamily="en">\r
                Sample Text\r
              </Typography>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <div className="space-y-3">\r
          <h3 className="text-t6 font-600">Font Weights</h3>\r
          <div className="space-y-2">\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">400</span>\r
              <Typography variant="body2" fontWeight="regular">\r
                Regular Weight\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">500</span>\r
              <Typography variant="body2" fontWeight="medium">\r
                Medium Weight\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">600</span>\r
              <Typography variant="body2" fontWeight="semibold">\r
                Semibold Weight\r
              </Typography>\r
            </div>\r
            <div className="flex items-center gap-4">\r
              <span className="text-t3 text-gray-500 w-12">700</span>\r
              <Typography variant="body2" fontWeight="bold">\r
                Bold Weight\r
              </Typography>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var A,G,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-8">\r
      <h2 className="text-t8 font-700 mb-6">실제 사용 예시</h2>\r
\r
      <div className="p-6 border border-gray-200 rounded-lg">\r
        <Typography variant="title2" fontFamily="ko" fontWeight="bold">\r
          블로그 포스트 제목 예시\r
        </Typography>\r
        <Typography variant="body2" fontWeight="regular" fontFamily="sans" className="text-gray-600 mt-2 mb-4">\r
          2024년 3월 15일 • 5분 읽기\r
        </Typography>\r
        <Typography variant="body2" fontWeight="regular" fontFamily="sans" className="mb-4">\r
          이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게\r
          혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다.\r
        </Typography>\r
        <Typography variant="caption1" fontWeight="regular" fontFamily="sans" className="text-gray-500">\r
          태그: 디자인시스템, 타이포그래피, 웹개발\r
        </Typography>\r
      </div>\r
\r
      <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">\r
        <Typography variant="heading2" fontFamily="en" fontWeight="semibold">\r
          Product Card\r
        </Typography>\r
        <Typography variant="body2" fontWeight="regular" fontFamily="sans" className="mt-2 mb-3">\r
          제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을\r
          사용합니다.\r
        </Typography>\r
        <Typography variant="title1" fontFamily="en" fontWeight="bold" className="text-blue-600 mb-2">\r
          $29.99\r
        </Typography>\r
        <Typography variant="caption2" fontWeight="regular" fontFamily="sans" className="text-gray-500">\r
          무료 배송 • 재고 있음\r
        </Typography>\r
      </div>\r
    </div>
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const ra=["Default","DisplayStyles","TitleStyles","HeadingStyles","BodyStyles","CaptionStyles","FontWeightVariations","FontFamilyComparison","TokenSystem","UsageExamples"];export{l as BodyStyles,y as CaptionStyles,t as Default,s as DisplayStyles,d as FontFamilyComparison,p as FontWeightVariations,o as HeadingStyles,i as TitleStyles,c as TokenSystem,m as UsageExamples,ra as __namedExportsOrder,ea as default};
