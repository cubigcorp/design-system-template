import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Checkbox, CheckboxProps } from "../components/Checkbox";

// 상태 관리를 위한 래퍼 컴포넌트
const CheckboxWithState = ({
  variant = "secondary",
  state = "unchecked",
  disabled = false,
  active = false,
  onChange,
  ...props
}: CheckboxProps) => {
  const [currentState, setCurrentState] = useState(state);
  const [isActive, setIsActive] = useState(active);

  const handleChange = (checked: boolean) => {
    if (currentState === "indeterminate") {
      setCurrentState("checked");
    } else if (currentState === "checked") {
      setCurrentState("unchecked");
    } else {
      setCurrentState("checked");
    }
    onChange?.(checked);
  };

  return (
    <Checkbox
      variant={variant}
      state={currentState}
      disabled={disabled}
      active={isActive}
      onChange={handleChange}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      {...props}
    />
  );
};

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Checkbox는 사용자의 선택을 나타내는 컴포넌트입니다. Primary, Secondary 변형과 Checked, Unchecked, Indeterminate 상태를 지원합니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
      description: "체크박스의 변형을 선택합니다.",
    },
    state: {
      control: "select",
      options: ["checked", "unchecked", "indeterminate"],
      description: "체크박스의 상태를 선택합니다.",
    },
    disabled: {
      control: "boolean",
      description: "체크박스의 비활성화 여부를 설정합니다.",
    },
    active: {
      control: "boolean",
      description: "체크박스의 활성/포커스 상태를 설정합니다.",
    },
    onChange: {
      action: "changed",
      description: "체크박스 상태가 변경될 때 호출되는 콜백 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: "secondary",
    state: "unchecked",
    disabled: false,
    active: false,
  },
};

// 모든 상태 보여주기
export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Checked</span>
        <Checkbox state="checked" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Unchecked</span>
        <Checkbox state="unchecked" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Indeterminate</span>
        <Checkbox state="indeterminate" />
      </div>
    </div>
  ),
};

// 모든 변형 보여주기
export const AllVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Primary</span>
        <Checkbox variant="primary" state="checked" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Secondary</span>
        <Checkbox variant="secondary" state="checked" />
      </div>
    </div>
  ),
};

// 모든 상태와 변형 조합
export const AllCombinations: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "24px",
      }}
    >
      {/* Primary Variant */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "600" }}>Primary</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Checked</span>
          <Checkbox variant="primary" state="checked" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Unchecked</span>
          <Checkbox variant="primary" state="unchecked" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Indeterminate</span>
          <Checkbox variant="primary" state="indeterminate" />
        </div>
      </div>

      {/* Secondary Variant */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "600" }}>Secondary</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Checked</span>
          <Checkbox variant="secondary" state="checked" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Unchecked</span>
          <Checkbox variant="secondary" state="unchecked" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Indeterminate</span>
          <Checkbox variant="secondary" state="indeterminate" />
        </div>
      </div>

      {/* Active States */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "600" }}>Active</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Checked</span>
          <Checkbox variant="secondary" state="checked" active={true} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Unchecked</span>
          <Checkbox variant="secondary" state="unchecked" active={true} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Indeterminate</span>
          <Checkbox variant="secondary" state="indeterminate" active={true} />
        </div>
      </div>

      {/* Disabled States */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "600" }}>Disabled</span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Checked</span>
          <Checkbox variant="secondary" state="checked" disabled={true} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Unchecked</span>
          <Checkbox variant="secondary" state="unchecked" disabled={true} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "12px", color: "#666" }}>Indeterminate</span>
          <Checkbox variant="secondary" state="indeterminate" disabled={true} />
        </div>
      </div>
    </div>
  ),
};

// 인터랙티브 스토리
export const Interactive: Story = {
  render: (args) => <CheckboxWithState {...args} />,
  args: {
    variant: "secondary",
    state: "unchecked",
    disabled: false,
    active: false,
  },
};
