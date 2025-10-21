import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { LNB, LNBItem, LNBItemGroup, Divider } from "../components";
import { IconInfo } from "../components/icons";

const meta: Meta<typeof LNB> = {
  title: "Components/LNB",
  component: LNB,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    // LNB 컨테이너
    lang: { control: { type: "select" }, options: ["ko", "en"] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 데모용 하위 아이템 템플릿
const ItemsDemo = ({ selected, setSelected }: any) => (
  <>
    <LNBItemGroup title="설정">
      <LNBItem
        value="내 정보"
        leadingIcon={IconInfo}
        selected={selected === "profile"}
        onClick={() => setSelected("profile")}
      />
      <LNBItem
        value="플랜 관리"
        leadingIcon={IconInfo}
        selected={selected === "plan"}
        onClick={() => setSelected("plan")}
      />
      <LNBItem
        value="요금 계산기"
        leadingIcon={IconInfo}
        selected={selected === "billing"}
        onClick={() => setSelected("billing")}
      />
    </LNBItemGroup>

    <LNBItemGroup title="리소스">
      <LNBItem
        value="앱 다운로드"
        leadingIcon={IconInfo}
        selected={selected === "app"}
        onClick={() => setSelected("app")}
      />
    </LNBItemGroup>
  </>
);

export const Overview: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("profile");
    return (
      <div style={{ width: 280 }}>
        <LNB
          {...args}
          title="설정"
          bottom={
            <>
              <LNBItem value="문의하기" leadingIcon={IconInfo} />
              <LNBItem value="로그아웃" leadingIcon={IconInfo} />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

export const Item_Variants: Story = {
  render: () => {
    return (
      <div style={{ width: 320 }}>
        <LNB>
          <LNBItemGroup title="Item Variants">
            <LNBItem value="Default" leadingIcon={IconInfo} />
            <LNBItem value="Selected" leadingIcon={IconInfo} selected />
            <LNBItem value="Disabled" leadingIcon={IconInfo} disabled />
          </LNBItemGroup>
        </LNB>
      </div>
    );
  },
};

export const WithCustomLang: Story = {
  args: { lang: "en" },
  render: (args) => {
    const [selected, setSelected] = useState("profile");
    return (
      <div style={{ width: 280 }}>
        <LNB {...args} title="Settings">
          <LNBItemGroup title="Settings">
            <LNBItem
              value="Profile"
              leadingIcon={IconInfo}
              selected={selected === "profile"}
              onClick={() => setSelected("profile")}
            />
            <LNBItem
              value="Plan"
              leadingIcon={IconInfo}
              selected={selected === "plan"}
              onClick={() => setSelected("plan")}
            />
            <LNBItem
              value="Billing"
              leadingIcon={IconInfo}
              selected={selected === "billing"}
              onClick={() => setSelected("billing")}
            />
          </LNBItemGroup>
          <LNBItemGroup title="Resources">
            <LNBItem
              value="App Download"
              leadingIcon={IconInfo}
              selected={selected === "app"}
              onClick={() => setSelected("app")}
            />
          </LNBItemGroup>
        </LNB>
      </div>
    );
  },
};

export const WithBottomPinned: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("profile");
    return (
      <div style={{ width: 280, height: 640 }}>
        <LNB
          {...args}
          style={{ height: "100%" }}
          title="설정"
          bottom={
            <>
              <LNBItem value="문의하기" leadingIcon={IconInfo} />
              <Divider thickness={1} />
              <LNBItem value="로그아웃" leadingIcon={IconInfo} />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};
