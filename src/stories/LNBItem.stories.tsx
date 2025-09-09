import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { LNBItem } from "../components";
import { IconInfo } from "../components/icons";

const meta: Meta<typeof LNBItem> = {
  title: "Components/LNB/Item",
  component: LNBItem,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "text" } },
    selected: { control: { type: "boolean" } },
    disabled: { control: { type: "boolean" } },
    lang: { control: { type: "select" }, options: ["ko", "en"] },
  },
  args: { value: "내 정보", selected: false, disabled: false, lang: "ko" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconInfo} />
    </div>
  ),
};

export const Selected: Story = {
  args: { selected: true },
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconInfo} />
    </div>
  ),
};

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} leadingIcon={IconInfo} />
    </div>
  ),
};

export const WithoutIcon: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItem {...args} />
    </div>
  ),
};
