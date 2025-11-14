import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{d as i}from"./textColor-D0IOlZFP.js";import"./brandColor-OQPP65_V.js";import"./negativeColor-DPOOrHeE.js";import"./cautioniaryColor-DrCmYiBi.js";import"./borderColor-C_RHITEf.js";import"./layerColor-7aOJUZki.js";import{b as tn}from"./typography-BBThIZ7c.js";import"./iframe-BHft69wN.js";import"./color-CiwAFuFb.js";import"./fontSize-BFAJJ5Eh.js";import"./fontWeight-CRwBdwgF.js";import"./fontFamily-CsG1KcIF.js";import"./lineHeight-aJXO3HIm.js";const rn=i.div`
  ${({$variant:v,$fontWeight:S="medium",$fontFamily:s="en"})=>{const o=tn[v],on=S;return`
      font-size: ${o.fontSize[0]};
      font-weight: ${o.weights[on]};
      font-family: ${s==="en"?o.families.en:s==="ko"?o.families.ko:s==="mono"?'"Geist Mono", monospace':o.families.sans};
      letter-spacing: ${o.letterSpacing};
      line-height: ${o.lineHeight};
    `}}
`,e=({variant:v,children:S,fontWeight:s="medium",fontFamily:o="en"})=>n.jsx(rn,{$variant:v,$fontWeight:s,$fontFamily:o,children:S}),Bn={title:"Foundation/Typography",component:e,parameters:{layout:"padded",docs:{description:{component:"디자인 시스템의 타이포그래피 토큰을 기반으로 한 스타일입니다. 폰트 웨이트(400~700)와 폰트 패밀리(영문/한글/혼합)를 선택할 수 있습니다."}}},argTypes:{variant:{control:"select",options:["display1","display2","display3","display4","display5","title1","title2","title3","title4","heading1","heading2","heading3","body1","body2","body3","caption1","caption2"],description:"타이포그래피 변형을 선택합니다."},fontWeight:{control:"select",options:["regular","medium","semibold","bold"],description:"폰트 웨이트를 선택합니다."},fontFamily:{control:"select",options:["en","ko","sans","mono"],description:"폰트 패밀리를 선택합니다."},children:{control:"text",description:"표시할 텍스트 내용"}}},d={args:{variant:"body2",children:"기본 텍스트 스타일입니다.",fontWeight:"regular",fontFamily:"sans"}},h={parameters:{controls:{disable:!0}},render:()=>n.jsxs(a,{children:[n.jsx(r,{children:"Display Styles (영문 폰트, 500 weight 기본)"}),n.jsx(e,{variant:"display1",fontFamily:"en",children:"Display 1 - The quick brown fox"}),n.jsx(e,{variant:"display2",fontFamily:"en",children:"Display 2 - The quick brown fox"}),n.jsx(e,{variant:"display3",fontFamily:"en",children:"Display 3 - The quick brown fox"}),n.jsx(e,{variant:"display4",fontFamily:"en",children:"Display 4 - The quick brown fox"}),n.jsx(e,{variant:"display5",fontFamily:"en",children:"Display 5 - The quick brown fox"})]})},c={parameters:{controls:{disable:!0}},render:()=>n.jsxs(a,{children:[n.jsx(r,{children:"Title Styles (영문 폰트, 500 weight 기본)"}),n.jsx(e,{variant:"title1",fontFamily:"en",children:"Title 1 - The quick brown fox"}),n.jsx(e,{variant:"title2",fontFamily:"en",children:"Title 2 - The quick brown fox"}),n.jsx(e,{variant:"title3",fontFamily:"en",children:"Title 3 - The quick brown fox"}),n.jsx(e,{variant:"title4",fontFamily:"en",children:"Title 4 - The quick brown fox"})]})},g={parameters:{controls:{disable:!0}},render:()=>n.jsxs(a,{children:[n.jsx(r,{children:"Heading Styles (영문 폰트, 500 weight 기본)"}),n.jsx(e,{variant:"heading1",fontFamily:"en",children:"Heading 1 - The quick brown fox"}),n.jsx(e,{variant:"heading2",fontFamily:"en",children:"Heading 2 - The quick brown fox"}),n.jsx(e,{variant:"heading3",fontFamily:"en",children:"Heading 3 - The quick brown fox"})]})},m={parameters:{controls:{disable:!0}},render:()=>n.jsxs(a,{children:[n.jsx(r,{children:"Body Styles (혼합 폰트, 400 weight 기본)"}),n.jsx(e,{variant:"body1",fontFamily:"sans",children:"Body 1 - 한글과 English가 혼합된 텍스트입니다."}),n.jsx(e,{variant:"body2",fontFamily:"sans",children:"Body 2 - 한글과 English가 혼합된 텍스트입니다."}),n.jsx(e,{variant:"body3",fontFamily:"sans",children:"Body 3 - 한글과 English가 혼합된 텍스트입니다."})]})},T={parameters:{controls:{disable:!0}},render:()=>n.jsxs(a,{children:[n.jsx(r,{children:"Caption Styles (혼합 폰트, 400 weight 기본)"}),n.jsx(e,{variant:"caption1",fontFamily:"sans",children:"Caption 1 - 작은 설명 텍스트입니다."}),n.jsx(e,{variant:"caption2",fontFamily:"sans",children:"Caption 2 - 작은 설명 텍스트입니다."})]})},x={parameters:{controls:{disable:!0}},render:()=>n.jsxs(F,{children:[n.jsx(r,{children:"Font Weight Variations"}),n.jsxs(a,{children:[n.jsx(l,{children:"Display 1 Weight Variations"}),n.jsx(e,{variant:"display1",fontWeight:"regular",fontFamily:"en",children:"Display 1 Regular (400) - The quick brown fox"}),n.jsx(e,{variant:"display1",fontWeight:"medium",fontFamily:"en",children:"Display 1 Medium (500) - The quick brown fox"}),n.jsx(e,{variant:"display1",fontWeight:"semibold",fontFamily:"en",children:"Display 1 Semibold (600) - The quick brown fox"}),n.jsx(e,{variant:"display1",fontWeight:"bold",fontFamily:"en",children:"Display 1 Bold (700) - The quick brown fox"})]}),n.jsxs(a,{children:[n.jsx(l,{children:"Body 2 Weight Variations"}),n.jsx(e,{variant:"body2",fontWeight:"regular",fontFamily:"sans",children:"Body 2 Regular (400) - 한글과 English가 혼합된 텍스트입니다."}),n.jsx(e,{variant:"body2",fontWeight:"medium",fontFamily:"sans",children:"Body 2 Medium (500) - 한글과 English가 혼합된 텍스트입니다."}),n.jsx(e,{variant:"body2",fontWeight:"semibold",fontFamily:"sans",children:"Body 2 Semibold (600) - 한글과 English가 혼합된 텍스트입니다."}),n.jsx(e,{variant:"body2",fontWeight:"bold",fontFamily:"sans",children:"Body 2 Bold (700) - 한글과 English가 혼합된 텍스트입니다."})]})]})},f={parameters:{controls:{disable:!0}},render:()=>n.jsxs(F,{children:[n.jsx(r,{children:"Font Family Comparison"}),n.jsxs(a,{children:[n.jsx(l,{children:"영문 폰트 (DM Sans)"}),n.jsx(e,{variant:"body2",fontFamily:"en",children:"This text is displayed in DM Sans font."}),n.jsx(e,{variant:"body2",fontWeight:"bold",fontFamily:"en",children:"This text is displayed in DM Sans Bold font."})]}),n.jsxs(a,{children:[n.jsx(l,{children:"한글 폰트 (Pretendard)"}),n.jsx(e,{variant:"body2",fontFamily:"ko",children:"프리텐다드 폰트로 표시되는 한글 텍스트입니다."}),n.jsx(e,{variant:"body2",fontWeight:"bold",fontFamily:"ko",children:"프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다."})]}),n.jsxs(a,{children:[n.jsx(l,{children:"혼합 폰트 (Sans)"}),n.jsx(e,{variant:"body2",fontFamily:"sans",children:"한글과 English가 혼합된 텍스트입니다."}),n.jsx(e,{variant:"body2",fontWeight:"bold",fontFamily:"sans",children:"한글과 English가 혼합된 Bold 텍스트입니다."})]}),n.jsxs(a,{children:[n.jsx(l,{children:"모노스페이스 폰트 (Geist Mono)"}),n.jsx(e,{variant:"body2",fontFamily:"mono",children:'const greeting = "Hello World";'}),n.jsxs(e,{variant:"body2",fontWeight:"bold",fontFamily:"mono",children:["function() ","{ return 'Geist Mono Bold'; }"]})]})]})},b={parameters:{controls:{disable:!0}},render:()=>n.jsxs(F,{children:[n.jsx(r,{children:"Typography Token System"}),n.jsxs(ln,{children:[n.jsxs(W,{children:[n.jsx(l,{children:"Display Styles"}),n.jsxs(k,{children:[n.jsxs(t,{children:[n.jsx(y,{children:"Display1"}),n.jsx(p,{children:"40px"}),n.jsx(e,{variant:"display1",fontFamily:"en",children:"Sample Text"})]}),n.jsxs(t,{children:[n.jsx(y,{children:"Display2"}),n.jsx(p,{children:"48px"}),n.jsx(e,{variant:"display2",fontFamily:"en",children:"Sample Text"})]}),n.jsxs(t,{children:[n.jsx(y,{children:"Display3"}),n.jsx(p,{children:"56px"}),n.jsx(e,{variant:"display3",fontFamily:"en",children:"Sample Text"})]}),n.jsxs(t,{children:[n.jsx(y,{children:"Display4"}),n.jsx(p,{children:"64px"}),n.jsx(e,{variant:"display4",fontFamily:"en",children:"Sample Text"})]}),n.jsxs(t,{children:[n.jsx(y,{children:"Display5"}),n.jsx(p,{children:"80px"}),n.jsx(e,{variant:"display5",fontFamily:"en",children:"Sample Text"})]})]})]}),n.jsxs(W,{children:[n.jsx(l,{children:"Font Weights"}),n.jsxs(k,{children:[n.jsxs(t,{children:[n.jsx(j,{children:"400"}),n.jsx(e,{variant:"body2",fontWeight:"regular",children:"Regular Weight"})]}),n.jsxs(t,{children:[n.jsx(j,{children:"500"}),n.jsx(e,{variant:"body2",fontWeight:"medium",children:"Medium Weight"})]}),n.jsxs(t,{children:[n.jsx(j,{children:"600"}),n.jsx(e,{variant:"body2",fontWeight:"semibold",children:"Semibold Weight"})]}),n.jsxs(t,{children:[n.jsx(j,{children:"700"}),n.jsx(e,{variant:"body2",fontWeight:"bold",children:"Bold Weight"})]})]})]})]})]})},u={parameters:{controls:{disable:!0}},render:()=>n.jsxs(sn,{children:[n.jsx(r,{children:"실제 사용 예시"}),n.jsxs(yn,{children:[n.jsx(e,{variant:"title2",fontFamily:"ko",fontWeight:"bold",children:"블로그 포스트 제목 예시"}),n.jsx(pn,{children:n.jsx(e,{variant:"body2",fontWeight:"regular",fontFamily:"sans",children:"2024년 3월 15일 • 5분 읽기"})}),n.jsx(dn,{children:n.jsx(e,{variant:"body2",fontWeight:"regular",fontFamily:"sans",children:"이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게 혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다."})}),n.jsx(hn,{children:n.jsx(e,{variant:"caption1",fontWeight:"regular",fontFamily:"sans",children:"태그: 디자인시스템, 타이포그래피, 웹개발"})})]}),n.jsxs(cn,{children:[n.jsx(e,{variant:"heading2",fontFamily:"en",fontWeight:"semibold",children:"Product Card"}),n.jsx(gn,{children:n.jsx(e,{variant:"body2",fontWeight:"regular",fontFamily:"sans",children:"제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을 사용합니다."})}),n.jsx(mn,{children:n.jsx(e,{variant:"title1",fontFamily:"en",fontWeight:"bold",children:"$29.99"})}),n.jsx(Tn,{children:n.jsx(e,{variant:"caption2",fontWeight:"regular",fontFamily:"sans",children:"무료 배송 • 재고 있음"})})]})]})},a=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,F=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,k=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,r=i.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
`,l=i.h3`
  font-size: 20px;
  font-weight: 600;
`,ln=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
`,W=i.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,t=i.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,y=i.span`
  font-size: 14px;
  color: #6b7280;
  width: 64px;
`,p=i.span`
  font-size: 14px;
  color: #9ca3af;
  width: 48px;
`,j=i.span`
  font-size: 14px;
  color: #6b7280;
  width: 48px;
`,sn=i.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,yn=i.div`
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
`,pn=i.div`
  margin-top: 8px;
  margin-bottom: 16px;
  color: #4b5563;
`,dn=i.div`
  margin-bottom: 16px;
`,hn=i.div`
  color: #6b7280;
`,cn=i.div`
  padding: 24px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
`,gn=i.div`
  margin-top: 8px;
  margin-bottom: 12px;
`,mn=i.div`
  margin-bottom: 8px;
  color: #2563eb;
`,Tn=i.div`
  color: #6b7280;
`;var w,C,D;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: "body2",
    children: "기본 텍스트 스타일입니다.",
    fontWeight: "regular",
    fontFamily: "sans"
  }
}`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var E,B,q;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Container>
      <SectionTitle>Display Styles (영문 폰트, 500 weight 기본)</SectionTitle>
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
    </Container>
}`,...(q=(B=h.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var L,R,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Container>
      <SectionTitle>Title Styles (영문 폰트, 500 weight 기본)</SectionTitle>
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
    </Container>
}`,...(M=(R=c.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var P,z,G;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Container>
      <SectionTitle>Heading Styles (영문 폰트, 500 weight 기본)</SectionTitle>
      <Typography variant="heading1" fontFamily="en">
        Heading 1 - The quick brown fox
      </Typography>
      <Typography variant="heading2" fontFamily="en">
        Heading 2 - The quick brown fox
      </Typography>
      <Typography variant="heading3" fontFamily="en">
        Heading 3 - The quick brown fox
      </Typography>
    </Container>
}`,...(G=(z=g.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var H,$,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Container>
      <SectionTitle>Body Styles (혼합 폰트, 400 weight 기본)</SectionTitle>
      <Typography variant="body1" fontFamily="sans">
        Body 1 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant="body2" fontFamily="sans">
        Body 2 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant="body3" fontFamily="sans">
        Body 3 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
    </Container>
}`,...(I=($=m.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var V,U,_;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <Container>
      <SectionTitle>Caption Styles (혼합 폰트, 400 weight 기본)</SectionTitle>
      <Typography variant="caption1" fontFamily="sans">
        Caption 1 - 작은 설명 텍스트입니다.
      </Typography>
      <Typography variant="caption2" fontFamily="sans">
        Caption 2 - 작은 설명 텍스트입니다.
      </Typography>
    </Container>
}`,...(_=(U=T.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var O,A,J;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <LargeContainer>
      <SectionTitle>Font Weight Variations</SectionTitle>

      <Container>
        <SubTitle>Display 1 Weight Variations</SubTitle>
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
      </Container>

      <Container>
        <SubTitle>Body 2 Weight Variations</SubTitle>
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
      </Container>
    </LargeContainer>
}`,...(J=(A=x.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var K,N,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <LargeContainer>
      <SectionTitle>Font Family Comparison</SectionTitle>

      <Container>
        <SubTitle>영문 폰트 (DM Sans)</SubTitle>
        <Typography variant="body2" fontFamily="en">
          This text is displayed in DM Sans font.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="en">
          This text is displayed in DM Sans Bold font.
        </Typography>
      </Container>

      <Container>
        <SubTitle>한글 폰트 (Pretendard)</SubTitle>
        <Typography variant="body2" fontFamily="ko">
          프리텐다드 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="ko">
          프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
      </Container>

      <Container>
        <SubTitle>혼합 폰트 (Sans)</SubTitle>
        <Typography variant="body2" fontFamily="sans">
          한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="sans">
          한글과 English가 혼합된 Bold 텍스트입니다.
        </Typography>
      </Container>

      <Container>
        <SubTitle>모노스페이스 폰트 (Geist Mono)</SubTitle>
        <Typography variant="body2" fontFamily="mono">
          const greeting = "Hello World";
        </Typography>
        <Typography variant="body2" fontWeight="bold" fontFamily="mono">
          function() {"{ return 'Geist Mono Bold'; }"}
        </Typography>
      </Container>
    </LargeContainer>
}`,...(Q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <LargeContainer>
      <SectionTitle>Typography Token System</SectionTitle>

      <GridContainer>
        <GridItem>
          <SubTitle>Display Styles</SubTitle>
          <SmallContainer>
            <TokenRow>
              <TokenLabel>Display1</TokenLabel>
              <TokenSize>40px</TokenSize>
              <Typography variant="display1" fontFamily="en">
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display2</TokenLabel>
              <TokenSize>48px</TokenSize>
              <Typography variant="display2" fontFamily="en">
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display3</TokenLabel>
              <TokenSize>56px</TokenSize>
              <Typography variant="display3" fontFamily="en">
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display4</TokenLabel>
              <TokenSize>64px</TokenSize>
              <Typography variant="display4" fontFamily="en">
                Sample Text
              </Typography>
            </TokenRow>
            <TokenRow>
              <TokenLabel>Display5</TokenLabel>
              <TokenSize>80px</TokenSize>
              <Typography variant="display5" fontFamily="en">
                Sample Text
              </Typography>
            </TokenRow>
          </SmallContainer>
        </GridItem>

        <GridItem>
          <SubTitle>Font Weights</SubTitle>
          <SmallContainer>
            <TokenRow>
              <WeightLabel>400</WeightLabel>
              <Typography variant="body2" fontWeight="regular">
                Regular Weight
              </Typography>
            </TokenRow>
            <TokenRow>
              <WeightLabel>500</WeightLabel>
              <Typography variant="body2" fontWeight="medium">
                Medium Weight
              </Typography>
            </TokenRow>
            <TokenRow>
              <WeightLabel>600</WeightLabel>
              <Typography variant="body2" fontWeight="semibold">
                Semibold Weight
              </Typography>
            </TokenRow>
            <TokenRow>
              <WeightLabel>700</WeightLabel>
              <Typography variant="body2" fontWeight="bold">
                Bold Weight
              </Typography>
            </TokenRow>
          </SmallContainer>
        </GridItem>
      </GridContainer>
    </LargeContainer>
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var nn,en,an;u.parameters={...u.parameters,docs:{...(nn=u.parameters)==null?void 0:nn.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <ExampleContainer>
      <SectionTitle>실제 사용 예시</SectionTitle>

      <ExampleCard>
        <Typography variant="title2" fontFamily="ko" fontWeight="bold">
          블로그 포스트 제목 예시
        </Typography>
        <ExampleMeta>
          <Typography variant="body2" fontWeight="regular" fontFamily="sans">
            2024년 3월 15일 • 5분 읽기
          </Typography>
        </ExampleMeta>
        <ExampleContent>
          <Typography variant="body2" fontWeight="regular" fontFamily="sans">
            이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게
            혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다.
          </Typography>
        </ExampleContent>
        <ExampleTags>
          <Typography variant="caption1" fontWeight="regular" fontFamily="sans">
            태그: 디자인시스템, 타이포그래피, 웹개발
          </Typography>
        </ExampleTags>
      </ExampleCard>

      <ProductCard>
        <Typography variant="heading2" fontFamily="en" fontWeight="semibold">
          Product Card
        </Typography>
        <ProductDescription>
          <Typography variant="body2" fontWeight="regular" fontFamily="sans">
            제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을
            사용합니다.
          </Typography>
        </ProductDescription>
        <ProductPrice>
          <Typography variant="title1" fontFamily="en" fontWeight="bold">
            $29.99
          </Typography>
        </ProductPrice>
        <ProductInfo>
          <Typography variant="caption2" fontWeight="regular" fontFamily="sans">
            무료 배송 • 재고 있음
          </Typography>
        </ProductInfo>
      </ProductCard>
    </ExampleContainer>
}`,...(an=(en=u.parameters)==null?void 0:en.docs)==null?void 0:an.source}}};const qn=["Default","DisplayStyles","TitleStyles","HeadingStyles","BodyStyles","CaptionStyles","FontWeightVariations","FontFamilyComparison","TokenSystem","UsageExamples"];export{m as BodyStyles,T as CaptionStyles,d as Default,h as DisplayStyles,f as FontFamilyComparison,x as FontWeightVariations,g as HeadingStyles,c as TitleStyles,b as TokenSystem,u as UsageExamples,qn as __namedExportsOrder,Bn as default};
