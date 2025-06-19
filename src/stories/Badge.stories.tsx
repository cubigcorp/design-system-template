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
  args: {
    variant: "primary",
    type: "outline",
    size: "medium",
    text: "텍스트",
  },
};

// Outline Type Stories
export const Outline: Story = {
  args: {
    variant: "primary",
    type: "outline",
    size: "medium",
    text: "텍스트",
  },
};

export const OutlineWithIcon: Story = {
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>,
  },
};

// Solid Type Stories
export const Solid: Story = {
  args: {
    variant: "primary",
    type: "solid",
    size: "medium",
    text: "텍스트",
  },
};

export const SolidWithIcon: Story = {
  args: {
    ...Solid.args,
    leadingIcon: <span>🚀</span>,
  },
};

// Strong Type Stories
export const Strong: Story = {
  args: {
    variant: "primary",
    type: "strong",
    size: "medium",
    text: "텍스트",
  },
};

export const StrongWithIcon: Story = {
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
          <Badge variant="primary" type="outline" text="Primary" />
          <Badge variant="secondary" type="outline" text="Secondary" />
          <Badge variant="brand" type="outline" text="Brand" />
          <Badge variant="positive" type="outline" text="Positive" />
          <Badge variant="negative" type="outline" text="Negative" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Solid Type</h3>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="primary" type="solid" text="Primary" />
          <Badge variant="secondary" type="solid" text="Secondary" />
          <Badge variant="brand" type="solid" text="Brand" />
          <Badge variant="positive" type="solid" text="Positive" />
          <Badge variant="negative" type="solid" text="Negative" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Strong Type</h3>
        <div className="flex gap-4 flex-wrap">
          <Badge variant="primary" type="strong" text="Primary" />
          <Badge variant="secondary" type="strong" text="Secondary" />
          <Badge variant="brand" type="strong" text="Brand" />
          <Badge variant="positive" type="strong" text="Positive" />
          <Badge variant="negative" type="strong" text="Negative" />
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
          <Badge variant="primary" type="outline" size="small" text="텍스트" />
          <Badge variant="primary" type="solid" size="small" text="텍스트" />
          <Badge variant="primary" type="strong" size="small" text="텍스트" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Medium (24px)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge variant="primary" type="outline" size="medium" text="텍스트" />
          <Badge variant="primary" type="solid" size="medium" text="텍스트" />
          <Badge variant="primary" type="strong" size="medium" text="텍스트" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Large (28px)</h3>
        <div className="flex gap-4 items-center flex-wrap">
          <Badge variant="primary" type="outline" size="large" text="텍스트" />
          <Badge variant="primary" type="solid" size="large" text="텍스트" />
          <Badge variant="primary" type="strong" size="large" text="텍스트" />
        </div>
      </div>
    </div>
  ),
};
