import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Dropdown } from "../components";
import type { DropdownProps, DropdownOption } from "../components/Dropdown/types";

const DropdownWithState = (props: DropdownProps) => {
    const [value, setValue] = useState(props.value || "");
    return (
        <Dropdown
            {...props}
            value={value}
            onChange={(newValue) => setValue(newValue)}
        />
    );
};

const sampleOptions: DropdownOption[] = [
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" },
    { value: "option4", label: "옵션 4" },
    { value: "option5", label: "옵션 5" },
];

const meta: Meta<typeof Dropdown> = {
    title: "Components/Dropdown",
    component: Dropdown,
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
        label: {
            control: { type: "text" },
        },
        labelType: {
            control: { type: "select" },
            options: ["default", "required", "optional"],
        },
        description: {
            control: { type: "text" },
        },

        descriptionLeadingIcon: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        options: sampleOptions,
    },
};

export const WithoutLabel: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        options: sampleOptions,
    },
};

export const WithoutDescription: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        options: sampleOptions,
    },
};

export const WithValue: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        value: "option2",
        options: sampleOptions,
    },
};

export const Small: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        size: "small",
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        options: sampleOptions,
    },
};

export const Large: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        size: "large",
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        options: sampleOptions,
    },
};

export const Disabled: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        options: sampleOptions,
        disabled: true,
    },
};

export const DisabledWithValue: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "원하는 옵션을 선택해주세요.",
        value: "option3",
        options: sampleOptions,
        disabled: true,
    },
};

export const RequiredLabel: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "필수 선택 항목",
        labelType: "required",
        placeholder: "선택해주세요.",
        description: "반드시 선택해야 하는 항목입니다.",
        options: sampleOptions,
    },
};

export const OptionalLabel: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        labelType: "optional",
        placeholder: "선택해주세요.",
        description: "선택사항입니다.",
        options: sampleOptions,
    },
};

export const ErrorDescription: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        description: "옵션을 선택해주세요.",
        status: "negative",
        options: sampleOptions,
    },
};

export const SuccessDescription: Story = {
    render: (args) => <DropdownWithState {...args} />,
    args: {
        label: "선택 항목",
        placeholder: "선택해주세요.",
        value: "option2",
        description: "옵션이 성공적으로 선택되었습니다.",
        status: "positive",
        options: sampleOptions,
    },
}; 