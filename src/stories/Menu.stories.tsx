import type { Meta, StoryObj } from "@storybook/nextjs";
import { Menu } from "../components";
import { Cell } from "../components";

const meta: Meta<typeof Menu> = {
    title: "Components/Menu",
    component: Menu,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Menu>
            <Cell text="선택 항목 A" />
            <Cell text="선택 항목 B" active />
            <Cell text="선택 항목 C" disable />
        </Menu>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Menu>
            <Cell text="홈" leadingIcon={() => <div>🏠</div>} />
            <Cell text="설정" leadingIcon={() => <div>⚙️</div>} active />
            <Cell text="도움말" leadingIcon={() => <div>❓</div>} />
        </Menu>
    ),
};

export const WithDescriptions: Story = {
    render: () => (
        <Menu>
            <Cell
                text="기본 설정"
                description="일반적인 설정을 관리합니다"
            />
            <Cell
                text="고급 설정"
                description="고급 옵션을 관리합니다"
                active
            />
            <Cell
                text="시스템 설정"
                description="시스템 레벨 설정입니다"
                disable
            />
        </Menu>
    ),
};

export const WithScroll: Story = {
    render: () => (
        <Menu style={{ maxHeight: "200px", overflowY: "auto" }}>
            <Cell text="항목 1" />
            <Cell text="항목 2" />
            <Cell text="항목 3" />
            <Cell text="항목 4" />
            <Cell text="항목 5" />
            <Cell text="항목 6" />
            <Cell text="항목 7" />
            <Cell text="항목 8" />
            <Cell text="항목 9" />
            <Cell text="항목 10" />
            <Cell text="항목 11" />
            <Cell text="항목 12" />
            <Cell text="항목 13" />
            <Cell text="항목 14" />
            <Cell text="항목 15" />
        </Menu>
    ),
}; 