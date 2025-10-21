import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LNBItemGroup, LNBItem } from "../components";
import { IconInfo } from "../components/icons";

const meta: Meta<typeof LNBItemGroup> = {
  title: "Components/LNB/ItemGroup",
  component: LNBItemGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    lang: { control: { type: "select" }, options: ["ko", "en"] },
  },
  args: { title: "설정", lang: "ko" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 280 }}>
      <LNBItemGroup {...args}>
        <LNBItem value="내 정보" leadingIcon={IconInfo} />
        <LNBItem value="플랜 관리" leadingIcon={IconInfo} />
        <LNBItem value="요금 계산기" leadingIcon={IconInfo} />
      </LNBItemGroup>
    </div>
  ),
};
