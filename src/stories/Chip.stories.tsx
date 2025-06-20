import { Chip } from "../components/Chip";
import type { ChipProps } from "../components/Chip/types";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta = {
  title: "Components/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Chip은 태그, 필터, 상태 표시 등에 사용되는 작은 UI 요소입니다. Outline, Solid 두 가지 타입을 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["outline", "solid"],
    },
    size: {
      control: { type: "select" },
      options: ["x-small", "small", "medium", "large"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    active: {
      control: { type: "boolean" },
    },
    text: {
      control: { type: "text" },
    },
  },
  args: {
    text: "텍스트",
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<ChipProps>;

// 기본 Chip
export const Default: Story = {
  args: {
    text: "기본 칩",
  },
};

// Outline 타입
export const Outline: Story = {
  args: {
    type: "outline",
    text: "Outline Chip",
  },
  parameters: {
    docs: {
      description: {
        story: "테두리만 있는 Outline 타입의 Chip입니다.",
      },
    },
  },
};

// Solid 타입
export const Solid: Story = {
  args: {
    type: "solid",
    text: "Solid Chip",
  },
  parameters: {
    docs: {
      description: {
        story: "배경이 채워진 Solid 타입의 Chip입니다.",
      },
    },
  },
};

// Outline with Icon
export const OutlineWithIcon: Story = {
  args: {
    type: "outline",
    text: "Outline with Icon",
    leadingIcon: "🏷️",
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Outline 타입의 Chip입니다.",
      },
    },
  },
};

// Solid with Icon
export const SolidWithIcon: Story = {
  args: {
    type: "solid",
    text: "Solid with Icon",
    leadingIcon: "🏷️",
  },
  parameters: {
    docs: {
      description: {
        story: "아이콘이 포함된 Solid 타입의 Chip입니다.",
      },
    },
  },
};

// With Trailing Icon
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Chip type="outline" text="Remove" trailingIcon="✕" />
      <Chip type="solid" text="Close" trailingIcon="✕" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Trailing Icon이 포함된 Chip 예시입니다.",
      },
    },
  },
};

// 크기별 예시
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>X-Small</span>
        <Chip size="x-small" text="텍스트" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Small</span>
        <Chip size="small" text="텍스트" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Medium</span>
        <Chip size="medium" text="텍스트" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Large</span>
        <Chip size="large" text="텍스트" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chip의 네 가지 크기: X-Small (24px), Small (32px), Medium (36px), Large (40px)",
      },
    },
  },
};

// Active 상태 예시
export const ActiveState: Story = {
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
        <span style={{ fontSize: "12px", color: "#666" }}>Normal</span>
        <Chip text="텍스트" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "12px", color: "#666" }}>Active</span>
        <Chip active text="텍스트" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Chip의 활성/비활성 상태 비교",
      },
    },
  },
};

// 모든 상태 예시
export const AllStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Outline Type</h3>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Default</span>
            <Chip type="outline" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Hovered</span>
            <Chip type="outline" state="hovered" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Pressed</span>
            <Chip type="outline" state="pressed" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Focused</span>
            <Chip type="outline" state="focused" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Disabled</span>
            <Chip type="outline" disabled text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Active</span>
            <Chip type="outline" active text="텍스트" />
          </div>
        </div>
      </div>
      <div>
        <h3 style={{ margin: "0 0 16px 0", fontSize: "16px" }}>Solid Type</h3>
        <div
          style={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Default</span>
            <Chip type="solid" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Hovered</span>
            <Chip type="solid" state="hovered" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Pressed</span>
            <Chip type="solid" state="pressed" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Focused</span>
            <Chip type="solid" state="focused" text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Disabled</span>
            <Chip type="solid" disabled text="텍스트" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#666" }}>Active</span>
            <Chip type="solid" active text="텍스트" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chip의 모든 상태를 보여주는 예시 (Default, Hovered, Pressed, Focused, Disabled)",
      },
    },
  },
};
