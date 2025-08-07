import type { Meta, StoryObj } from "@storybook/nextjs";
import { Toast } from "../components";

const meta: Meta<typeof Toast> = {
    title: "Components/Toast",
    component: Toast,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: "Toast 컴포넌트는 사용자에게 알림을 표시하는 데 사용됩니다.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "positive", "negative", "cautionary"],
        },
        placement: {
            control: { type: "select" },
            options: ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"],
        },
        offset: {
            control: { type: "number" },
        },
        showLeadingIcon: {
            control: { type: "boolean" },
        },
        showTrailingIcon: {
            control: { type: "boolean" },
        },
        showDivider: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <div style={{ position: "relative", height: "200px", padding: "20px" }}>
            <Toast {...args} />
        </div>
    ),
    args: {
        children: "기본 토스트 메시지입니다.",
        variant: "default",
        placement: "bottom-center",
    },
};

export const Positive: Story = {
    render: (args) => (
        <div style={{ position: "relative", height: "200px", padding: "20px" }}>
            <Toast {...args} />
        </div>
    ),
    args: {
        children: "저장이 완료되었습니다.\n변경한 내용이 정상적으로 반영되었어요.",
        description: "1 저장 완료, 0 실패",
        variant: "positive",
        placement: "bottom-center",
        showDivider: true,
    },
};

export const Negative: Story = {
    render: (args) => <Toast {...args} />,
    args: {
        children: "저장에 실패했습니다.\n네트워크 연결을 확인해주세요.",
        description: "오류 코드: NET_001",
        variant: "negative",
        placement: "bottom-center",
        showDivider: true,
    },
};

export const Cautionary: Story = {
    render: (args) => <Toast {...args} />,
    args: {
        children: "주의가 필요합니다.\n이 작업은 되돌릴 수 없습니다.",
        description: "계속하시겠습니까?",
        variant: "cautionary",
        placement: "bottom-center",
        showDivider: true,
    },
};

export const WithoutIcons: Story = {
    render: (args) => <Toast {...args} />,
    args: {
        children: "아이콘 없는 토스트 메시지입니다.",
        variant: "default",
        placement: "bottom-center",
        showLeadingIcon: false,
        showTrailingIcon: false,
    },
};

export const WithDivider: Story = {
    render: (args) => <Toast {...args} />,
    args: {
        children: "정보가 업데이트되었습니다.\n새로운 기능을 확인해보세요.",
        description: "더 자세한 내용은 설정에서 확인하세요.",
        variant: "default",
        placement: "bottom-center",
        showDivider: true,
    },
};

export const TopLeft: Story = {
    render: (args) => <Toast {...args} />,
    args: {
        children: "왼쪽 상단에 위치한 토스트입니다.",
        variant: "default",
        placement: "bottom-center",
    },
};

export const BottomCenter: Story = {
    render: (args) => <Toast {...args} />,
    args: {
        children: "하단 중앙에 위치한 토스트입니다.",
        variant: "positive",
        placement: "bottom-center",
    },
}; 