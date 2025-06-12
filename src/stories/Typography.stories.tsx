import type { Meta, StoryObj } from "@storybook/react";
import "../app/globals.css";
import "../styles/fonts.css";
import "../styles/display.css";
import "../styles/title.css";
import "../styles/heading.css";
import "../styles/body.css";
import "../styles/caption.css";

// Typography 컴포넌트 정의
const Typography = ({
  variant,
  children,
  fontFamily = "default",
  className = "",
}: {
  variant: string;
  children: React.ReactNode;
  fontFamily?: "ko" | "en" | "sans" | "default";
  className?: string;
}) => {
  const fontClass = fontFamily !== "default" ? `font-${fontFamily}` : "";
  const combinedClassName = `${variant} ${fontClass} ${className}`.trim();

  return <div className={combinedClassName}>{children}</div>;
};

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "디자인 시스템의 타이포그래피 스타일을 테스트합니다. 반응형 폰트 크기와 다양한 폰트 패밀리를 지원합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "display1",
        "display2",
        "display3",
        "display4",
        "display5",
        "title1",
        "title2",
        "title3",
        "title4",
        "heading1",
        "heading2",
        "heading3",
        "body1",
        "body2",
        "body3",
        "caption1",
        "caption2",
      ],
      description: "타이포그래피 변형을 선택합니다.",
    },
    fontFamily: {
      control: "select",
      options: ["default", "ko", "en", "sans"],
      description: "폰트 패밀리를 선택합니다.",
    },
    children: {
      control: "text",
      description: "표시할 텍스트 내용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: "body2",
    children: "기본 텍스트 스타일입니다.",
    fontFamily: "default",
  },
};

// Display 스타일들
export const DisplayStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Display Styles (영문 폰트, 600 weight)
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
  ),
};

// Title 스타일들
export const TitleStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Title Styles (영문 폰트, 600 weight)
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
  ),
};

// Heading 스타일들
export const HeadingStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Heading Styles (영문 폰트, 600 weight)
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
  ),
};

// Body 스타일들
export const BodyStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Body Styles (혼합 폰트, 400 weight)
      </h2>
      <Typography variant="body1">
        Body 1 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant="body2">
        Body 2 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
      <Typography variant="body3">
        Body 3 - 한글과 English가 혼합된 텍스트입니다.
      </Typography>
    </div>
  ),
};

// Caption 스타일들
export const CaptionStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
      <h2 className="text-t8 font-700 mb-6">
        Caption Styles (혼합 폰트, 400 weight)
      </h2>
      <Typography variant="caption1">
        Caption 1 - 작은 설명 텍스트입니다.
      </Typography>
      <Typography variant="caption2">
        Caption 2 - 작은 설명 텍스트입니다.
      </Typography>
    </div>
  ),
};

// 폰트 패밀리 비교
export const FontFamilyComparison: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <h2 className="text-t8 font-700 mb-6">Font Family Comparison</h2>

      <div className="space-y-3">
        <h3 className="text-t6 font-600">한글 폰트 (Pretendard)</h3>
        <Typography variant="body2" fontFamily="ko">
          프리텐다드 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontFamily="ko" className="font-700">
          프리텐다드 Bold 폰트로 표시되는 한글 텍스트입니다.
        </Typography>
      </div>

      <div className="space-y-3">
        <h3 className="text-t6 font-600">영문 폰트 (DM Sans)</h3>
        <Typography variant="body2" fontFamily="en">
          This text is displayed in DM Sans font.
        </Typography>
        <Typography variant="body2" fontFamily="en" className="font-700">
          This text is displayed in DM Sans Bold font.
        </Typography>
      </div>

      <div className="space-y-3">
        <h3 className="text-t6 font-600">혼합 폰트 (Sans)</h3>
        <Typography variant="body2" fontFamily="sans">
          한글과 English가 혼합된 텍스트입니다.
        </Typography>
        <Typography variant="body2" fontFamily="sans" className="font-700">
          한글과 English가 혼합된 Bold 텍스트입니다.
        </Typography>
      </div>
    </div>
  ),
};

// 반응형 테스트
export const ResponsiveTest: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <h2 className="text-t8 font-700 mb-6">반응형 폰트 크기 테스트</h2>
      <p className="text-t4 text-gray-600 mb-4">
        브라우저 창 크기를 조절하여 폰트 크기 변화를 확인하세요.
      </p>

      <div className="space-y-4 p-4 border border-gray-200 rounded">
        <Typography variant="display3" fontFamily="en">
          Display 3 - 반응형 크기 변화 확인
        </Typography>
        <Typography variant="title2" fontFamily="en">
          Title 2 - 반응형 크기 변화 확인
        </Typography>
        <Typography variant="heading2" fontFamily="en">
          Heading 2 - 반응형 크기 변화 확인
        </Typography>
        <Typography variant="body2">
          Body 2 - 반응형 크기 변화를 확인할 수 있는 텍스트입니다.
        </Typography>
      </div>

      <div className="text-t3 text-gray-500 mt-4">
        <p>• 데스크탑 (1920px 이상): 기본 크기</p>
        <p>• 태블릿 (768px 이하): 중간 크기</p>
        <p>• 모바일 (375px 이하): 작은 크기</p>
      </div>
    </div>
  ),
};

// 토큰 시스템 시각화
export const TokenSystem: Story = {
  parameters: {
    controls: { disable: true }, // 이 스토리에서는 컨트롤 비활성화
  },
  render: () => (
    <div className="space-y-6">
      <h2 className="text-t8 font-700 mb-6">Typography Token System</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-t6 font-600">Font Sizes (t1-t17)</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t1</span>
              <span className="text-t3 text-gray-400 w-12">11px</span>
              <span className="text-t1">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t2</span>
              <span className="text-t3 text-gray-400 w-12">12px</span>
              <span className="text-t2">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t3</span>
              <span className="text-t3 text-gray-400 w-12">13px</span>
              <span className="text-t3">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t4</span>
              <span className="text-t3 text-gray-400 w-12">14px</span>
              <span className="text-t4">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t5</span>
              <span className="text-t3 text-gray-400 w-12">16px</span>
              <span className="text-t5">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t6</span>
              <span className="text-t3 text-gray-400 w-12">18px</span>
              <span className="text-t6">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t7</span>
              <span className="text-t3 text-gray-400 w-12">20px</span>
              <span className="text-t7">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t8</span>
              <span className="text-t3 text-gray-400 w-12">22px</span>
              <span className="text-t8">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t9</span>
              <span className="text-t3 text-gray-400 w-12">24px</span>
              <span className="text-t9">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t10</span>
              <span className="text-t3 text-gray-400 w-12">28px</span>
              <span className="text-t10">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t11</span>
              <span className="text-t3 text-gray-400 w-12">32px</span>
              <span className="text-t11">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t12</span>
              <span className="text-t3 text-gray-400 w-12">36px</span>
              <span className="text-t12">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t13</span>
              <span className="text-t3 text-gray-400 w-12">40px</span>
              <span className="text-t13">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t14</span>
              <span className="text-t3 text-gray-400 w-12">48px</span>
              <span className="text-t14">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t15</span>
              <span className="text-t3 text-gray-400 w-12">56px</span>
              <span className="text-t15">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t16</span>
              <span className="text-t3 text-gray-400 w-12">64px</span>
              <span className="text-t16">Sample Text</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-8">t17</span>
              <span className="text-t3 text-gray-400 w-12">80px</span>
              <span className="text-t17">Sample Text</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-t6 font-600">Font Weights</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">400</span>
              <span className="text-t5 font-400">Regular Weight</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">500</span>
              <span className="text-t5 font-500">Medium Weight</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">600</span>
              <span className="text-t5 font-600">SemiBold Weight</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">700</span>
              <span className="text-t5 font-700">Bold Weight</span>
            </div>
          </div>

          <h3 className="text-t6 font-600 mt-6">Letter Spacing</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">md</span>
              <span className="text-t5 tracking-md">Normal Spacing (0px)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-t3 text-gray-500 w-12">lg</span>
              <span className="text-t5 tracking-lg">
                Tight Spacing (-0.5px)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// 실제 사용 예시
export const UsageExamples: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-t8 font-700 mb-6">실제 사용 예시</h2>

      {/* 블로그 포스트 예시 */}
      <div className="p-6 border border-gray-200 rounded-lg">
        <Typography variant="title2" fontFamily="ko" className="mb-4">
          블로그 포스트 제목 예시
        </Typography>
        <Typography variant="body1" className="text-gray-600 mb-4">
          2024년 3월 15일 • 5분 읽기
        </Typography>
        <Typography variant="body2" className="mb-4">
          이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게
          혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다.
        </Typography>
        <Typography variant="caption1" className="text-gray-500">
          태그: 디자인시스템, 타이포그래피, 웹개발
        </Typography>
      </div>

      {/* 카드 컴포넌트 예시 */}
      <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
        <Typography variant="heading2" fontFamily="en" className="mb-2">
          Product Card
        </Typography>
        <Typography variant="body2" className="mb-3">
          제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을
          사용합니다.
        </Typography>
        <Typography
          variant="title1"
          fontFamily="en"
          className="text-blue-600 mb-2"
        >
          $29.99
        </Typography>
        <Typography variant="caption2" className="text-gray-500">
          무료 배송 • 재고 있음
        </Typography>
      </div>
    </div>
  ),
};
