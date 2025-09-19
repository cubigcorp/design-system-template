import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Modal, ModalProps } from "../components/Modal";

const ModalWithState = ({
  size = "medium",
  onClose,
  title = "제목",
  showCloseButton = true,
  showActionArea = true,
  children,
  ...props
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        모달 열기
      </button>

      <Modal
        size={size}
        open={isOpen}
        onClose={handleClose}
        title={title}
        showCloseButton={showCloseButton}
        showActionArea={showActionArea}
        {...props}
      >
        {children}
      </Modal>
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "모달(Modal)은 사용자의 작업 흐름을 잠시 중단하고, 중요한 정보 전달이나 추가 행동을 요구할 때 화면 위에 나타나는 레이어형 컴포넌트로, 사용자가 명확한 결정을 내리거나 메시지를 확인할 수 있도록 안내합니다.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["x-small", "small", "medium", "large"],
      description: "모달의 크기를 선택합니다.",
    },
    open: {
      control: "boolean",
      description: "모달의 열림/닫힘 상태를 설정합니다.",
    },
    title: {
      control: "text",
      description: "모달의 제목을 설정합니다.",
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부를 설정합니다.",
    },
    showActionArea: {
      control: "boolean",
      description: "액션 영역(취소/확인 버튼) 표시 여부를 설정합니다.",
    },
    onClose: {
      action: "closed",
      description: "모달이 닫힐 때 호출되는 콜백 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "제목",
    showCloseButton: true,
    showActionArea: true,
    children: (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
          textAlign: "center",
          color: "#666",
        }}
      >
        모달 콘텐츠 영역입니다.
        <br />
        여기에 원하는 내용을 넣을 수 있습니다.
      </div>
    ),
  },
};

export const AllSizes: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <ModalWithState size="x-small" title="X-Small Modal">
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f8ff",
            borderRadius: "8px",
            textAlign: "center",
            color: "#666",
          }}
        >
          X-Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size="small" title="Small Modal">
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f8ff",
            borderRadius: "8px",
            textAlign: "center",
            color: "#666",
          }}
        >
          Small 크기
        </div>
      </ModalWithState>
      <ModalWithState size="medium" title="Medium Modal">
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f8ff",
            borderRadius: "8px",
            textAlign: "center",
            color: "#666",
          }}
        >
          Medium 크기
        </div>
      </ModalWithState>
      <ModalWithState size="large" title="Large Modal">
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f8ff",
            borderRadius: "8px",
            textAlign: "center",
            color: "#666",
          }}
        >
          Large 크기
        </div>
      </ModalWithState>
    </div>
  ),
};

export const WithoutActionArea: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "액션 영역 없는 모달",
    showCloseButton: true,
    showActionArea: false,
    children: (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
          textAlign: "center",
          color: "#666",
        }}
      >
        액션 영역이 없는 모달입니다.
        <br />
        닫기 버튼으로만 닫을 수 있습니다.
      </div>
    ),
  },
};

export const WithoutCloseButton: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: "medium",
    open: false,
    title: "닫기 버튼 없는 모달",
    showCloseButton: false,
    showActionArea: true,
    children: (
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f0f8ff",
          borderRadius: "8px",
          textAlign: "center",
          color: "#666",
        }}
      >
        닫기 버튼이 없는 모달입니다.
        <br />
        취소 버튼이나 배경 클릭으로 닫을 수 있습니다.
      </div>
    ),
  },
};

export const CustomContent: Story = {
  render: (args) => <ModalWithState {...args} />,
  args: {
    size: "large",
    open: false,
    title: "커스텀 콘텐츠",
    showCloseButton: true,
    showActionArea: true,
    children: (
      <div>
        <h3 style={{ margin: "0 0 16px 0", color: "#333" }}>상세 정보</h3>
        <p style={{ margin: "0 0 12px 0", color: "#666" }}>
          이 모달은 다양한 콘텐츠를 포함할 수 있습니다.
        </p>
        <ul
          style={{ margin: "0 0 16px 0", paddingLeft: "20px", color: "#666" }}
        >
          <li>텍스트</li>
          <li>이미지</li>
          <li>폼 요소</li>
          <li>기타 컴포넌트</li>
        </ul>
        <div
          style={{
            padding: "16px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            border: "1px solid #e9ecef",
          }}
        >
          <strong>주의사항:</strong> 모달은 중요한 정보를 전달할 때 사용하세요.
        </div>
      </div>
    ),
  },
};
