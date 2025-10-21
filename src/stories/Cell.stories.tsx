import type { Meta, StoryObj } from "@storybook/react";
import { Cell } from "../components";

const meta: Meta<typeof Cell> = {
    title: "Components/Cell",
    component: Cell,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        disable: {
            control: { type: "boolean" },
        },
        active: {
            control: { type: "boolean" },
        },
        text: {
            control: { type: "text" },
        },
        description: {
            control: { type: "text" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: "선택 항목",
    },
};

export const Active: Story = {
    args: {
        text: "선택된 항목",
        active: true,
    },
};

export const Disabled: Story = {
    args: {
        text: "비활성화된 항목",
        disable: true,
    },
};

export const WithDescription: Story = {
    args: {
        text: "설정 항목",
        description: "설정을 관리합니다",
    },
};

export const ActiveWithDescription: Story = {
    args: {
        text: "선택된 설정",
        description: "현재 선택된 설정입니다",
        active: true,
    },
};

export const WithLeadingIcon: Story = {
    args: {
        text: "홈",
        leadingIcon: () => <div>🏠</div>,
    },
};

export const WithTrailingIcon: Story = {
    args: {
        text: "사용자 정의 아이콘",
        active: true,
        trailingIcon: () => <div>⭐</div>,
    },
}; 