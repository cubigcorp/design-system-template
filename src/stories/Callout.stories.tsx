import type { Meta, StoryObj } from "@storybook/react";
import { Callout } from "../components/Callout";

const meta: Meta<typeof Callout> = {
  title: "Components/Callout",
  component: Callout,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "콜아웃(Callout)은 사용자에게 특정 콘텐츠나 영역과 직접적으로 연결된 보조 메시지를 제공할 때 시각적으로 강조하여 제공하는 컴포넌트로, 사용자가 정보를 빠르게 인지하고 필요한 조치를 취할 수 있도록 돕습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "positive", "negative", "cautionary"],
      description: "Callout 변형",
      table: {
        type: { summary: "default | positive | negative | cautionary" },
        defaultValue: { summary: "default" },
      },
    },
    title: {
      control: { type: "text" },
      description: "제목 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: { type: "text" },
      description: "설명 텍스트",
      table: {
        type: { summary: "string" },
      },
    },
    leadingIcon: {
      control: { type: "boolean" },
      description: "Leading Icon 표시 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    trailingIcon: {
      control: { type: "boolean" },
      description: "Trailing Icon 표시 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onTrailingIconClick: {
      action: "trailing-icon-clicked",
      description: "Trailing Icon 클릭 이벤트",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const Positive: Story = {
  args: {
    variant: "positive",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const Negative: Story = {
  args: {
    variant: "negative",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const Cautionary: Story = {
  args: {
    variant: "cautionary",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: true,
  },
};

export const WithoutLeadingIcon: Story = {
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    description: "안내 텍스트를 입력해 주세요.",
    leadingIcon: false,
    trailingIcon: false,
  },
};

export const TitleOnly: Story = {
  args: {
    variant: "default",
    title: "텍스트를 입력해 주세요.",
    leadingIcon: true,
    trailingIcon: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
      <Callout
        variant="default"
        title="Notice"
        description="안내 텍스트를 입력해 주세요."
        leadingIcon={true}
      />
      <Callout
        variant="positive"
        title="Success"
        description="안내 텍스트를 입력해 주세요."
        leadingIcon={true}
      />
      <Callout
        variant="negative"
        title="Error"
        description="안내 텍스트를 입력해 주세요."
        leadingIcon={true}
      />
      <Callout
        variant="cautionary"
        title="Warning"
        description="안내 텍스트를 입력해 주세요."
        leadingIcon={true}
        trailingIcon={true}
      />
    </div>
  ),
};
