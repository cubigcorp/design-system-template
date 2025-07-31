import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Select } from "../components";
import type { SelectProps, SelectOption } from "../components/Select/types";

// 상태를 관리하는 래퍼 컴포넌트
const SelectWithState = (props: SelectProps) => {
    const [value, setValue] = useState(props.value || "");

    return (
        <Select
            {...props}
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
    );
};

const sampleOptions: SelectOption[] = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
    { value: "option4", label: "옵션 4" },
    { value: "option5", label: "옵션 5" },
];

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "medium", "large"],
        },
        disabled: {
            control: { type: "boolean" },
        },
        active: {
            control: { type: "boolean" },
        },
        focused: {
            control: { type: "boolean" },
        },

    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        options: sampleOptions,
    },
};

export const WithValue: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        value: "option2",
        options: sampleOptions,
    },
};

export const Small: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        size: "small",
        placeholder: "선택해주세요.",
        options: sampleOptions,
    },
};

export const Large: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        size: "large",
        placeholder: "선택해주세요.",
        options: sampleOptions,
    },
};

export const Disabled: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        options: sampleOptions,
        disabled: true,
    },
};

export const Active: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        options: sampleOptions,
        active: true,
    },
};

export const Focused: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        options: sampleOptions,
        focused: true,
    },
};

export const ActiveAndFocused: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        options: sampleOptions,
        active: true,
        focused: true,
    },
};

export const DisabledWithValue: Story = {
    render: (args) => <SelectWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        value: "option3",
        options: sampleOptions,
        disabled: true,
    },
};

