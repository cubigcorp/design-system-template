import type { Meta, StoryObj } from "@storybook/nextjs";
import { SolidButton } from "../components/Button/SolidButton";
import { OutlineButton } from "../components/Button/OutlineButton";
import { TextButton } from "../components/Button/TextButton";
import { ButtonProps } from "../components/Button/types";

// 메타데이터 정의
const meta = {
  title: "Components/Button",
  component: SolidButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
    variant: "primary",
    size: "medium",
    state: "default",
    label: "Button",
  },
};

export const OutlineWithIcon: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>,
  },
};

export const OutlineDisabled: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    disabled: true,
  },
};

export const OutlineLoading: Story = {
  render: (args) => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    loading: true,
  },
};

// Text Button Stories
export const Text: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    variant: "primary",
    size: "medium",
    state: "default",
    label: "Button",
  },
};

export const TextWithIcon: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    ...Text.args,
    leadingIcon: <span>🚀</span>,
  },
};

export const TextDisabled: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    ...Text.args,
    disabled: true,
  },
};

export const TextLoading: Story = {
  render: (args) => <TextButton {...args} />,
  args: {
    ...Text.args,
    loading: true,
  },
};
