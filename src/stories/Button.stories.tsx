import type { Meta, StoryObj } from "@storybook/nextjs";
import { SolidButton } from "../components/Button/SolidButton";
import { OutlineButton } from "../components/Button/OutlineButton";
import { TextButton } from "../components/Button/TextButton";
import type { ButtonProps } from "../components/Button/types";

// 메타데이터 정의
const meta = {
  title: "Components/Button",
  component: SolidButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "state가 'default'일 때 마우스를 올리면(hover) 'hovered', 클릭하면(press) 'pressed', 포커스하면(focus) 'focused' 상태로 변경됩니다. state prop으로 특정 상태를 직접 지정할 수도 있습니다.",
      },
    },
  },
} satisfies Meta<typeof SolidButton>;

export default meta;
type Story = StoryObj<ButtonProps>;

// Solid Button Stories
export const Solid: Story = {
  render: (args) => <SolidButton {...args} />,
  args: {
    variant: "primary",
    size: "medium",
    state: "default",
    label: "Button",
  },
};

export const SolidWithIcon: Story = {
  render: (args) => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    leadingIcon: <span>🚀</span>,
  },
};

export const SolidDisabled: Story = {
  render: (args) => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    disabled: true,
  },
};

export const SolidLoading: Story = {
  render: (args) => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    loading: true,
  },
};

// Outline Button Stories
export const Outline: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default",
    label: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["secondary", "brand", "positive", "negative"],
    },
  },
};

export const OutlineWithIcon: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>,
  },
  argTypes: {
    ...Outline.argTypes,
  },
};

export const OutlineDisabled: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    disabled: true,
  },
  argTypes: {
    ...Outline.argTypes,
  },
};

export const OutlineLoading: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    loading: true,
  },
  argTypes: {
    ...Outline.argTypes,
  },
};

// Text Button Stories
export const Text: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default",
    label: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["secondary", "brand", "positive", "negative"],
    },
  },
};

export const TextWithIcon: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    ...Text.args,
    leadingIcon: <span>🚀</span>,
  },
  argTypes: {
    ...Text.argTypes,
  },
};

export const TextDisabled: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    ...Text.args,
    disabled: true,
  },
  argTypes: {
    ...Text.argTypes,
  },
};

export const TextLoading: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    ...Text.args,
    loading: true,
  },
  argTypes: {
    ...Text.argTypes,
  },
};
