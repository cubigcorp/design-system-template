import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dropdown } from "../components";
import type {
  DropdownProps,
  DropdownOption,
} from "../components/Dropdown/types";

const DropdownWithState = (props: DropdownProps) => {
  const [value, setValue] = useState(props.value || "");
  return (
    <div style={{ width: "300px" }}>
      <Dropdown
        {...props}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};

const sampleOptions: DropdownOption[] = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
  { value: "option4", label: "옵션 4" },
  { value: "option5", label: "옵션 5" },
  { value: "option6", label: "옵션 6" },
  { value: "option7", label: "옵션 7" },
  { value: "option8", label: "옵션 8" },
  { value: "option9", label: "옵션 9" },
  { value: "option10", label: "옵션 10" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["selector", "combobox"],
    },
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
    placeholder: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
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
    status: {
      control: { type: "select" },
      options: ["default", "negative", "positive"],
    },
    lang: {
      control: { type: "select" },
      options: ["ko", "en"],
    },
  },
  args: {
    type: "selector",
    size: "medium",
    disabled: false,
    active: false,
    focused: false,
    placeholder: "선택해주세요.",
    options: sampleOptions,
    label: "라벨",
    labelType: "default",
    description: "설명 텍스트입니다.",
    descriptionLeadingIcon: false,
    status: "default",
    lang: "ko",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <DropdownWithState {...args} />,
};

// 타입별 스토리
export const SelectorType: Story = {
  args: {
    type: "selector",
    placeholder: "선택해주세요.",
    label: "선택 전용 드롭다운",
    description: "옵션을 선택할 수 있습니다.",
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const ComboBoxType: Story = {
  args: {
    type: "combobox",
    placeholder: "입력하거나 선택해주세요.",
    label: "검색 가능한 드롭다운",
    description: "텍스트를 입력하거나 옵션을 선택할 수 있습니다.",
  },
  render: (args) => <DropdownWithState {...args} />,
};

// 크기별 스토리
export const Small: Story = {
  args: {
    size: "small",
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const Large: Story = {
  args: {
    size: "large",
  },
  render: (args) => <DropdownWithState {...args} />,
};

// 상태별 스토리
export const Disabled: Story = {
  args: {
    disabled: true,
    description: "비활성화된 상태입니다.",
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const Required: Story = {
  args: {
    labelType: "required",
    label: "필수 선택 항목",
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const WithError: Story = {
  args: {
    status: "negative",
    description: "선택이 필요합니다.",
    descriptionLeadingIcon: true,
  },
  render: (args) => <DropdownWithState {...args} />,
};

export const WithSuccess: Story = {
  args: {
    status: "positive",
    value: "option2",
    description: "선택이 완료되었습니다.",
    descriptionLeadingIcon: true,
  },
  render: (args) => <DropdownWithState {...args} />,
};

// 타입 비교 스토리
export const TypeComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "400px",
      }}
    >
      <div>
        <h4
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
        >
          Selector Type (선택만 가능)
        </h4>
        <DropdownWithState
          type="selector"
          label="과일 선택"
          placeholder="과일을 선택하세요"
          options={sampleOptions}
          description="드롭다운에서 옵션을 선택합니다."
        />
      </div>
      <div>
        <h4
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
        >
          ComboBox Type (입력 + 선택 가능)
        </h4>
        <DropdownWithState
          type="combobox"
          label="과일 검색"
          placeholder="과일을 검색하거나 선택하세요"
          options={sampleOptions}
          description="직접 입력하거나 옵션을 선택할 수 있습니다."
        />
      </div>
    </div>
  ),
};

// 모든 크기 비교
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "300px",
      }}
    >
      <div>
        <h4
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
        >
          Small
        </h4>
        <DropdownWithState
          size="small"
          label="작은 크기"
          options={sampleOptions}
        />
      </div>
      <div>
        <h4
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
        >
          Medium
        </h4>
        <DropdownWithState
          size="medium"
          label="보통 크기"
          options={sampleOptions}
        />
      </div>
      <div>
        <h4
          style={{ marginBottom: "8px", fontSize: "14px", fontWeight: "600" }}
        >
          Large
        </h4>
        <DropdownWithState
          size="large"
          label="큰 크기"
          options={sampleOptions}
        />
      </div>
    </div>
  ),
};
