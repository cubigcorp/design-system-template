import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge } from "../components/Badge";
import type { BadgeProps } from "../components/Badge/types";

// 메타데이터 정의
const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Badge는 상태, 카테고리, 라벨 등을 표시하는 작은 컴포넌트입니다. Outline, Solid, Strong 세 가지 타입을 지원합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "brand", "positive", "negative"],
    },
    type: {
      control: { type: "radio" },
      options: ["outline", "solid", "strong"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<BadgeProps>;

// 기본 Badge
export const Default: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "outline",
    size: "medium",
  },
};

// Outline Type Stories
export const Outline: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "outline",
    size: "medium",
  },
};

export const OutlineWithIcon: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>,
  },
};

// Solid Type Stories
export const Solid: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "solid",
    size: "medium",
  },
};

export const SolidWithIcon: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Solid.args,
    leadingIcon: <span>🚀</span>,
  },
};

// Strong Type Stories
export const Strong: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    variant: "primary",
    type: "strong",
    size: "medium",
  },
};

export const StrongWithIcon: Story = {
  render: (args) => <Badge {...args}>텍스트</Badge>,
  args: {
    ...Strong.args,
    leadingIcon: <span>🚀</span>,
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Outline Type</h3>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="primary" type="outline">
            Primary
          </Badge>
          <Badge variant="secondary" type="outline">
            Secondary
          </Badge>
          <Badge variant="brand" type="outline">
            Brand
          </Badge>
          <Badge variant="positive" type="outline">
            Positive
          </Badge>
          <Badge variant="negative" type="outline">
            Negative
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Solid Type</h3>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="primary" type="solid">
            Primary
          </Badge>
          <Badge variant="secondary" type="solid">
            Secondary
          </Badge>
          <Badge variant="brand" type="solid">
            Brand
          </Badge>
          <Badge variant="positive" type="solid">
            Positive
          </Badge>
          <Badge variant="negative" type="solid">
            Negative
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Strong Type</h3>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="primary" type="strong">
            Primary
          </Badge>
          <Badge variant="secondary" type="strong">
            Secondary
          </Badge>
          <Badge variant="brand" type="strong">
            Brand
          </Badge>
          <Badge variant="positive" type="strong">
            Positive
          </Badge>
          <Badge variant="negative" type="strong">
            Negative
          </Badge>
        </div>
      </div>
    </div>
  ),
};

// All Sizes Showcase
export const AllSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small (20px)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge variant="primary" type="outline" size="small">
            텍스트
          </Badge>
          <Badge variant="primary" type="solid" size="small">
            텍스트
          </Badge>
          <Badge variant="primary" type="strong" size="small">
            텍스트
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (24px)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge variant="primary" type="outline" size="medium">
            텍스트
          </Badge>
          <Badge variant="primary" type="solid" size="medium">
            텍스트
          </Badge>
          <Badge variant="primary" type="strong" size="medium">
            텍스트
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large (28px)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge variant="primary" type="outline" size="large">
            텍스트
          </Badge>
          <Badge variant="primary" type="solid" size="large">
            텍스트
          </Badge>
          <Badge variant="primary" type="strong" size="large">
            텍스트
          </Badge>
        </div>
      </div>
    </div>
  ),
};
