import{j as a}from"./jsx-runtime-Spnba8qJ.js";import{d as J}from"./styled-components.browser.esm-Bo1ZEldf.js";import{a as K}from"./typography-5QY5Grkh.js";import"./iframe-DwQdGnDM.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";const L=J.div`
  ${({$variant:h,$fontWeight:g="medium",$fontFamily:t="en"})=>{const e=K[h],x=g;return`
      font-size: ${e.fontSize[0]};
      font-weight: ${e.weights[x]};
      font-family: ${t==="en"?e.families.en:t==="ko"?e.families.ko:e.families.sans};
      letter-spacing: ${e.letterSpacing};
      line-height: ${e.lineHeight};
    `}}
`,n=({variant:h,children:g,fontWeight:t="medium",fontFamily:e="en",className:x=""})=>a.jsx(L,{$variant:h,$fontWeight:t,$fontFamily:e,className:x,children:g}),ta={title:"Design System/Typography",component:n,parameters:{layout:"padded",docs:{description:{component:"디자인 시스템의 타이포그래피 토큰을 기반으로 한 스타일입니다. 폰트 웨이트(400~700)와 폰트 패밀리(영문/한글/혼합)를 선택할 수 있습니다."}}},argTypes:{variant:{control:"select",options:["display1","display2","display3","display4","display5","title1","title2","title3","title4","heading1","heading2","heading3","body1","body2","body3","caption1","caption2"],description:"타이포그래피 변형을 선택합니다."},fontWeight:{control:"select",options:["regular","medium","semibold","bold"],description:"폰트 웨이트를 선택합니다."},fontFamily:{control:"select",options:["en","ko","sans"],description:"폰트 패밀리를 선택합니다."},children:{control:"text",description:"표시할 텍스트 내용"}}},s={args:{variant:"body2",children:"기본 텍스트 스타일입니다.",fontWeight:"regular",fontFamily:"sans"}},i={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Display Styles (영문 폰트, 500 weight 기본)"}),a.jsx(n,{variant:"display1",fontFamily:"en",children:"Display 1 - The quick brown fox"}),a.jsx(n,{variant:"display2",fontFamily:"en",children:"Display 2 - The quick brown fox"}),a.jsx(n,{variant:"display3",fontFamily:"en",children:"Display 3 - The quick brown fox"}),a.jsx(n,{variant:"display4",fontFamily:"en",children:"Display 4 - The quick brown fox"}),a.jsx(n,{variant:"display5",fontFamily:"en",children:"Display 5 - The quick brown fox"})]})},r={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Title Styles (영문 폰트, 500 weight 기본)"}),a.jsx(n,{variant:"title1",fontFamily:"en",children:"Title 1 - The quick brown fox"}),a.jsx(n,{variant:"title2",fontFamily:"en",children:"Title 2 - The quick brown fox"}),a.jsx(n,{variant:"title3",fontFamily:"en",children:"Title 3 - The quick brown fox"}),a.jsx(n,{variant:"title4",fontFamily:"en",children:"Title 4 - The quick brown fox"})]})},o={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Heading Styles (영문 폰트, 500 weight 기본)"}),a.jsx(n,{variant:"heading1",fontFamily:"en",children:"Heading 1 - The quick brown fox"}),a.jsx(n,{variant:"heading2",fontFamily:"en",children:"Heading 2 - The quick brown fox"}),a.jsx(n,{variant:"heading3",fontFamily:"en",children:"Heading 3 - The quick brown fox"})]})},l={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Body Styles (혼합 폰트, 400 weight 기본)"}),a.jsx(n,{variant:"body1",fontFamily:"sans",children:"Body 1 - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontFamily:"sans",children:"Body 2 - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body3",fontFamily:"sans",children:"Body 3 - 한글과 English가 혼합된 텍스트입니다."})]})},y={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-4",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Caption Styles (혼합 폰트, 400 weight 기본)"}),a.jsx(n,{variant:"caption1",fontFamily:"sans",children:"Caption 1 - 작은 설명 텍스트입니다."}),a.jsx(n,{variant:"caption2",fontFamily:"sans",children:"Caption 2 - 작은 설명 텍스트입니다."})]})},p={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Font Weight Variations"}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Display 1 Weight Variations"}),a.jsx(n,{variant:"display1",fontWeight:"regular",fontFamily:"en",children:"Display 1 Regular (400) - The quick brown fox"}),a.jsx(n,{variant:"display1",fontWeight:"medium",fontFamily:"en",children:"Display 1 Medium (500) - The quick brown fox"}),a.jsx(n,{variant:"display1",fontWeight:"semibold",fontFamily:"en",children:"Display 1 Semibold (600) - The quick brown fox"}),a.jsx(n,{variant:"display1",fontWeight:"bold",fontFamily:"en",children:"Display 1 Bold (700) - The quick brown fox"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Body 2 Weight Variations"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",children:"Body 2 Regular (400) - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"medium",fontFamily:"sans",children:"Body 2 Medium (500) - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"semibold",fontFamily:"sans",children:"Body 2 Semibold (600) - 한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"sans",children:"Body 2 Bold (700) - 한글과 English가 혼합된 텍스트입니다."})]})]})},d={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Font Family Comparison"}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"영문 폰트 (DM Sans)"}),a.jsx(n,{variant:"body2",fontFamily:"en",children:"This text is displayed in DM Sans font."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"en",children:"This text is displayed in DM Sans Bold font."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"한글 폰트 (Pretendard)"}),a.jsx(n,{variant:"body2",fontFamily:"ko",children:"프리텐다드 폰트로 표시되는 한글 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"ko",children:"프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다."})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsx("h3",{className:"text-t6 font-600",children:"혼합 폰트 (Sans)"}),a.jsx(n,{variant:"body2",fontFamily:"sans",children:"한글과 English가 혼합된 텍스트입니다."}),a.jsx(n,{variant:"body2",fontWeight:"bold",fontFamily:"sans",children:"한글과 English가 혼합된 Bold 텍스트입니다."})]})]})},c={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-6",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"Typography Token System"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Display Styles"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display1"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"40px"}),a.jsx(n,{variant:"display1",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display2"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"48px"}),a.jsx(n,{variant:"display2",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display3"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"56px"}),a.jsx(n,{variant:"display3",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display4"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"64px"}),a.jsx(n,{variant:"display4",fontFamily:"en",children:"Sample Text"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-16",children:"Display5"}),a.jsx("span",{className:"text-t3 text-gray-400 w-12",children:"80px"}),a.jsx(n,{variant:"display5",fontFamily:"en",children:"Sample Text"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h3",{className:"text-t6 font-600",children:"Font Weights"}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"400"}),a.jsx(n,{variant:"body2",fontWeight:"regular",children:"Regular Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"500"}),a.jsx(n,{variant:"body2",fontWeight:"medium",children:"Medium Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"600"}),a.jsx(n,{variant:"body2",fontWeight:"semibold",children:"Semibold Weight"})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("span",{className:"text-t3 text-gray-500 w-12",children:"700"}),a.jsx(n,{variant:"body2",fontWeight:"bold",children:"Bold Weight"})]})]})]})]})]})},m={parameters:{controls:{disable:!0}},render:()=>a.jsxs("div",{className:"space-y-8",children:[a.jsx("h2",{className:"text-t8 font-700 mb-6",children:"실제 사용 예시"}),a.jsxs("div",{className:"p-6 border border-gray-200 rounded-lg",children:[a.jsx(n,{variant:"title2",fontFamily:"ko",fontWeight:"bold",children:"블로그 포스트 제목 예시"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",className:"text-gray-600 mt-2 mb-4",children:"2024년 3월 15일 • 5분 읽기"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",className:"mb-4",children:"이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게 혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다."}),a.jsx(n,{variant:"caption1",fontWeight:"regular",fontFamily:"sans",className:"text-gray-500",children:"태그: 디자인시스템, 타이포그래피, 웹개발"})]}),a.jsxs("div",{className:"p-6 border border-gray-200 rounded-lg bg-gray-50",children:[a.jsx(n,{variant:"heading2",fontFamily:"en",fontWeight:"semibold",children:"Product Card"}),a.jsx(n,{variant:"body2",fontWeight:"regular",fontFamily:"sans",className:"mt-2 mb-3",children:"제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을 사용합니다."}),a.jsx(n,{variant:"title1",fontFamily:"en",fontWeight:"bold",className:"text-blue-600 mb-2",children:"$29.99"}),a.jsx(n,{variant:"caption2",fontWeight:"regular",fontFamily:"sans",className:"text-gray-500",children:"무료 배송 • 재고 있음"})]})]})};var f,v,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "body2",
    children: "기본 텍스트 스타일입니다.",
    fontWeight: "regular",
    fontFamily: "sans"
  }
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var T,u,N;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Display Styles (영문 폰트, 500 weight 기본)
      </h2>
      <Typography variant="display1" fontFamily="en">
        Display 1 - The quick brown fox
      </Typography>
      <Typography variant="display2" fontFamily="en">
        Display 2 - The quick brown fox
      </Typography>
      <Typography variant="display3" fontFamily="en">
        Display 3 - The quick brown fox
      </Typography>
      <Typography variant="display4" fontFamily="en">
        Display 4 - The quick brown fox
      </Typography>
      <Typography variant="display5" fontFamily="en">
        Display 5 - The quick brown fox
      </Typography>
    </div>
}`,...(N=(u=i.parameters)==null?void 0:u.docs)==null?void 0:N.source}}};var j,F,w;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Title Styles (영문 폰트, 500 weight 기본)
      </h2>
      <Typography variant="title1" fontFamily="en">
        Title 1 - The quick brown fox
      </Typography>
      <Typography variant="title2" fontFamily="en">
        Title 2 - The quick brown fox
      </Typography>
      <Typography variant="title3" fontFamily="en">
        Title 3 - The quick brown fox
      </Typography>
      <Typography variant="title4" fontFamily="en">
        Title 4 - The quick brown fox
      </Typography>
    </div>
}`,...(w=(F=r.parameters)==null?void 0:F.docs)==null?void 0:w.source}}};var W,S,k;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Heading Styles (영문 폰트, 500 weight 기본)
      </h2>
      <Typography variant="heading1" fontFamily="en">
        Heading 1 - The quick brown fox
      </Typography>
      <Typography variant="heading2" fontFamily="en">
        Heading 2 - The quick brown fox
      </Typography>
      <Typography variant="heading3" fontFamily="en">
        Heading 3 - The quick brown fox
      </Typography>
    </div>
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var D,q,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Body Styles (혼합 폰트, 400 weight 기본)
      </h2>
      <Typography variant="body1" fontFamily="sans">
        Body 1 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant="body2" fontFamily="sans">
        Body 2 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant="body3" fontFamily="sans">
        Body 3 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
    </div>
}`,...(B=(q=l.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var E,C,M;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Caption Styles (혼합 폰트, 400 weight 기본)
      </h2>
      <Typography variant="caption1" fontFamily="sans">
        Caption 1 - 작은 설명 텍스트입니다.
      </Typography>
      <Typography variant="caption2" fontFamily="sans">
        Caption 2 - 작은 설명 텍스트입니다.
      </Typography>
    </div>
}`,...(M=(C=y.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var H,$,V;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">
      <h2 className="text-t8 font-700 mb-6">Font Weight Variations</h2>

      <div className="space-y-4">
        <h3 className="text-t6 font-600">Display 1 Weight Variations</h3>
        <Typography variant="display1" fontWeight="regular" fontFamily="en">
          Display 1 Regular (400) - The quick brown fox
        </Typography>
        <Typography variant="display1" fontWeight="medium" fontFamily="en">
          Display 1 Medium (500) - The quick brown fox
        </Typography>
        <Typography variant="display1" fontWeight="semibold" fontFamily="en">
          Display 1 Semibold (600) - The quick brown fox
        </Typography>
        <Typography variant="display1" fontWeight="bold" fontFamily="en">
          Display 1 Bold (700) - The quick brown fox
        </Typography>
      </div>

      <div className="space-y-4">
        <h3 className="text-t6 font-600">Body 2 Weight Variations</h3>
        <Typography variant="body2" fontWeight="regular" fontFamily="sans">
          Body 2 Regular (400) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="medium" fontFamily="sans">
          Body 2 Medium (500) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="semibold" fontFamily="sans">
          Body 2 Semibold (600) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="sans">
          Body 2 Bold (700) - 한글과 English가 혼합된 텍스트입니다.
        </Typography>
      </div>
    </div>
}`,...(V=($=p.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};var R,P,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">
      <h2 className="text-t8 font-700 mb-6">Font Family Comparison</h2>

      <div className="space-y-4">
        <h3 className="text-t6 font-600">영문 폰트 (DM Sans)</h3>
        <Typography variant="body2" fontFamily="en">
          This text is displayed in DM Sans font.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="en">
          This text is displayed in DM Sans Bold font.
        </Typography>
      </div>

      <div className="space-y-4">
        <h3 className="text-t6 font-600">한글 폰트 (Pretendard)</h3>
        <Typography variant="body2" fontFamily="ko">
          프리텐다드 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="ko">
          프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
      </div>

      <div className="space-y-4">
        <h3 className="text-t6 font-600">혼합 폰트 (Sans)</h3>
        <Typography variant="body2" fontFamily="sans">
          한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="sans">
          한글과 English가 혼합된 Bold 텍스트입니다.
        </Typography>
      </div>
    </div>
}`,...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var U,_,O;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-6">
      <h2 className="text-t8 font-700 mb-6">Typography Token System</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-t6 font-600">Display Styles</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-16">Display1</span>
              <span className="text-t3 text-gray-400 w-12">40px</span>
              <Typography variant="display1" fontFamily="en">
                Sample Text
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-16">Display2</span>
              <span className="text-t3 text-gray-400 w-12">48px</span>
              <Typography variant="display2" fontFamily="en">
                Sample Text
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-16">Display3</span>
              <span className="text-t3 text-gray-400 w-12">56px</span>
              <Typography variant="display3" fontFamily="en">
                Sample Text
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-16">Display4</span>
              <span className="text-t3 text-gray-400 w-12">64px</span>
              <Typography variant="display4" fontFamily="en">
                Sample Text
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-16">Display5</span>
              <span className="text-t3 text-gray-400 w-12">80px</span>
              <Typography variant="display5" fontFamily="en">
                Sample Text
              </Typography>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-t6 font-600">Font Weights</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">400</span>
              <Typography variant="body2" fontWeight="regular">
                Regular Weight
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">500</span>
              <Typography variant="body2" fontWeight="medium">
                Medium Weight
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">600</span>
              <Typography variant="body2" fontWeight="semibold">
                Semibold Weight
              </Typography>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">700</span>
              <Typography variant="body2" fontWeight="bold">
                Bold Weight
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var A,G,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <div className="space-y-8">
      <h2 className="text-t8 font-700 mb-6">실제 사용 예시</h2>

      <div className="p-6 border border-gray-200 rounded-lg">
        <Typography variant="title2" fontFamily="ko" fontWeight="bold">
          블로그 포스트 제목 예시
        </Typography>
        <Typography variant="body2" fontWeight="regular" fontFamily="sans" className="text-gray-600 mt-2 mb-4">
          2024년 3월 15일 • 5분 읽기
        </Typography>
        <Typography variant="body2" fontWeight="regular" fontFamily="sans" className="mb-4">
          이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게
          혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다.
        </Typography>
        <Typography variant="caption1" fontWeight="regular" fontFamily="sans" className="text-gray-500">
          태그: 디자인시스템, 타이포그래피, 웹개발
        </Typography>
      </div>

      <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
        <Typography variant="heading2" fontFamily="en" fontWeight="semibold">
          Product Card
        </Typography>
        <Typography variant="body2" fontWeight="regular" fontFamily="sans" className="mt-2 mb-3">
          제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을
          사용합니다.
        </Typography>
        <Typography variant="title1" fontFamily="en" fontWeight="bold" className="text-blue-600 mb-2">
          $29.99
        </Typography>
        <Typography variant="caption2" fontWeight="regular" fontFamily="sans" className="text-gray-500">
          무료 배송 • 재고 있음
        </Typography>
      </div>
    </div>
}`,...(I=(G=m.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const sa=["Default","DisplayStyles","TitleStyles","HeadingStyles","BodyStyles","CaptionStyles","FontWeightVariations","FontFamilyComparison","TokenSystem","UsageExamples"];export{l as BodyStyles,y as CaptionStyles,s as Default,i as DisplayStyles,d as FontFamilyComparison,p as FontWeightVariations,o as HeadingStyles,r as TitleStyles,c as TokenSystem,m as UsageExamples,sa as __namedExportsOrder,ta as default};
