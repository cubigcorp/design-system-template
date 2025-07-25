import type { Meta, StoryObj } from "@storybook/nextjs";
import styled from "styled-components";
import { typographyStyles } from "../tokens";

const StyledTypography = styled.div<{
  $variant: keyof typeof typographyStyles;
  $fontWeight?: "regular" | "medium" | "semibold" | "bold";
  $fontFamily?: "en" | "ko" | "sans";
}>`
  ${({ $variant, $fontWeight = "medium", $fontFamily = "en" }) => {
    const style = typographyStyles[$variant];
    const weight = $fontWeight; // 규칙 제거: 사용자가 지정한 weight 그대로 사용

    return `
      font-size: ${style.fontSize[0]};
      font-weight: ${style.weights[weight]};
      font-family: ${
        $fontFamily === "en"
          ? style.families.en
          : $fontFamily === "ko"
          ? style.families.ko
          : style.families.sans
      };
      letter-spacing: ${style.letterSpacing};
      line-height: ${style.lineHeight};
    `;
  }}
`;

const Typography = ({
  variant,
  children,
  fontWeight = "medium",
  fontFamily = "en",
  className = "",
}: {
  variant: keyof typeof typographyStyles;
  children: React.ReactNode;
  fontWeight?: "regular" | "medium" | "semibold" | "bold";
  fontFamily?: "en" | "ko" | "sans";
  className?: string;
}) => {
  return (
    <StyledTypography
      $variant={variant}
      $fontWeight={fontWeight}
      $fontFamily={fontFamily}
      className={className}
    >
      {children}
    </StyledTypography>
  );
};

const meta: Meta<typeof Typography> = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "디자인 시스템의 타이포그래피 토큰을 기반으로 한 스타일입니다. 폰트 웨이트(400~700)와 폰트 패밀리(영문/한글/혼합)를 선택할 수 있습니다.",
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
    fontWeight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
      description: "폰트 웨이트를 선택합니다.",
    },
    fontFamily: {
      control: "select",
      options: ["en", "ko", "sans"],
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

export const Default: Story = {
  args: {
    variant: "body2",
    children: "기본 텍스트 스타일입니다.",
    fontWeight: "regular",
    fontFamily: "sans",
  },
};

export const DisplayStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
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
  ),
};

export const TitleStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
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
  ),
};

export const HeadingStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
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
  ),
};

export const BodyStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
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
  ),
};

export const CaptionStyles: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-4">
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
  ),
};

export const FontWeightVariations: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
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
  ),
};

export const FontFamilyComparison: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
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
  ),
};

export const TokenSystem: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
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
  ),
};

export const UsageExamples: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-t8 font-700 mb-6">실제 사용 예시</h2>

      <div className="p-6 border border-gray-200 rounded-lg">
        <Typography variant="title2" fontFamily="ko" fontWeight="bold">
          블로그 포스트 제목 예시
        </Typography>
        <Typography
          variant="body2"
          fontWeight="regular"
          fontFamily="sans"
          className="text-gray-600 mt-2 mb-4"
        >
          2024년 3월 15일 • 5분 읽기
        </Typography>
        <Typography
          variant="body2"
          fontWeight="regular"
          fontFamily="sans"
          className="mb-4"
        >
          이것은 블로그 포스트의 본문 내용입니다. 한글과 English가 자연스럽게
          혼합되어 있으며, 적절한 줄간격과 폰트 크기로 가독성을 높였습니다.
        </Typography>
        <Typography
          variant="caption1"
          fontWeight="regular"
          fontFamily="sans"
          className="text-gray-500"
        >
          태그: 디자인시스템, 타이포그래피, 웹개발
        </Typography>
      </div>

      <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
        <Typography variant="heading2" fontFamily="en" fontWeight="semibold">
          Product Card
        </Typography>
        <Typography
          variant="body2"
          fontWeight="regular"
          fontFamily="sans"
          className="mt-2 mb-3"
        >
          제품에 대한 간단한 설명이 들어갑니다. 이 텍스트는 body2 스타일을
          사용합니다.
        </Typography>
        <Typography
          variant="title1"
          fontFamily="en"
          fontWeight="bold"
          className="text-blue-600 mb-2"
        >
          $29.99
        </Typography>
        <Typography
          variant="caption2"
          fontWeight="regular"
          fontFamily="sans"
          className="text-gray-500"
        >
          무료 배송 • 재고 있음
        </Typography>
      </div>
    </div>
  ),
};
