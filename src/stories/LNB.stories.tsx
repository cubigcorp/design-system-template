import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import {
  LNB,
  LNBItem,
  LNBItemGroup,
  LNBItemProfile,
  Divider,
} from "../components";
import {
  IconPersonOutline20,
  IconWalletOutline20,
  IconMoneyOutline20,
  IconDownloadOutline20,
  IconSettingOutline20,
  IconLogoutOutline20,
  IconChevronRightOutline20,
} from "../components/icons/generated";

const meta: Meta<typeof LNB> = {
  title: "Components/LNB",
  component: LNB,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    // LNB 컨테이너
    lang: { control: { type: "select" }, options: ["ko", "en"] },
    iconOnly: { control: { type: "boolean" } },
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
        leadingIcon={IconPersonOutline20}
        selected={selected === "profile"}
        onClick={() => setSelected("profile")}
      />
      <LNBItem
        value="플랜 관리"
        leadingIcon={IconWalletOutline20}
        selected={selected === "plan"}
        onClick={() => setSelected("plan")}
      />
      <LNBItem
        value="요금 계산기"
        leadingIcon={IconMoneyOutline20}
        selected={selected === "billing"}
        onClick={() => setSelected("billing")}
      />
    </LNBItemGroup>

    <LNBItemGroup title="리소스">
      <LNBItem
        value="앱 다운로드"
        leadingIcon={IconDownloadOutline20}
        selected={selected === "app"}
        onClick={() => setSelected("app")}
      />
    </LNBItemGroup>
  </>
);

export const Overview: Story = {
  render: (args) => {
    const [selected, setSelected] = useState("profile");
    const containerWidth = args.iconOnly ? "100%" : "280px";
    return (
      <div style={{ width: containerWidth, height: 640 }}>
        <LNB
          {...args}
          style={{ height: "100%" }}
          title="설정"
          bottom={
            <>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile
                name="김규빅"
                avatarType="initial"
                trailingIcon={IconChevronRightOutline20}
              />
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
            <LNBItem value="Default" leadingIcon={IconPersonOutline20} />
            <LNBItem
              value="Selected"
              leadingIcon={IconPersonOutline20}
              selected
            />
            <LNBItem
              value="Disabled"
              leadingIcon={IconPersonOutline20}
              disabled
            />
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
              leadingIcon={IconPersonOutline20}
              selected={selected === "profile"}
              onClick={() => setSelected("profile")}
            />
            <LNBItem
              value="Plan"
              leadingIcon={IconWalletOutline20}
              selected={selected === "plan"}
              onClick={() => setSelected("plan")}
            />
            <LNBItem
              value="Billing"
              leadingIcon={IconMoneyOutline20}
              selected={selected === "billing"}
              onClick={() => setSelected("billing")}
            />
          </LNBItemGroup>
          <LNBItemGroup title="Resources">
            <LNBItem
              value="App Download"
              leadingIcon={IconDownloadOutline20}
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
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItem value="로그아웃" leadingIcon={IconLogoutOutline20} />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

export const IconOnly: Story = {
  render: () => {
    const [selected, setSelected] = useState("profile");
    return (
      <div style={{ height: 640 }}>
        <LNB
          iconOnly={true}
          style={{ height: "100%" }}
          bottom={
            <>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <LNBItem value="로그아웃" leadingIcon={IconLogoutOutline20} />
            </>
          }
        >
          <LNBItemGroup title="설정">
            <LNBItem
              value="내 정보"
              leadingIcon={IconPersonOutline20}
              selected={selected === "profile"}
              onClick={() => setSelected("profile")}
            />
            <LNBItem
              value="플랜 관리"
              leadingIcon={IconWalletOutline20}
              selected={selected === "plan"}
              onClick={() => setSelected("plan")}
            />
            <LNBItem
              value="요금 계산기"
              leadingIcon={IconMoneyOutline20}
              selected={selected === "billing"}
              onClick={() => setSelected("billing")}
            />
          </LNBItemGroup>
          <LNBItemGroup title="리소스">
            <LNBItem
              value="앱 다운로드"
              leadingIcon={IconDownloadOutline20}
              selected={selected === "app"}
              onClick={() => setSelected("app")}
            />
          </LNBItemGroup>
        </LNB>
      </div>
    );
  },
};

export const WithProfile: Story = {
  render: () => {
    const [selected, setSelected] = useState("profile");
    return (
      <div style={{ height: 640, display: "flex", gap: "16px" }}>
        <LNB
          iconOnly={true}
          style={{ height: "100%" }}
          bottom={
            <>
              <LNBItemProfile name="김규빅" avatarType="initial" />
            </>
          }
        >
          <LNBItemGroup title="설정">
            <LNBItem
              value="내 정보"
              leadingIcon={IconPersonOutline20}
              selected={selected === "profile"}
              onClick={() => setSelected("profile")}
            />
            <LNBItem
              value="플랜 관리"
              leadingIcon={IconWalletOutline20}
              selected={selected === "plan"}
              onClick={() => setSelected("plan")}
            />
          </LNBItemGroup>
        </LNB>

        <LNB
          style={{ height: "100%" }}
          title="설정"
          bottom={
            <>
              <LNBItemProfile
                name="김규빅"
                avatarType="initial"
                trailingIcon={IconChevronRightOutline20}
              />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};

export const WithProfileAndItems: Story = {
  render: () => {
    const [selected, setSelected] = useState("profile");
    return (
      <div style={{ height: 640, display: "flex", gap: "16px" }}>
        <LNB
          iconOnly={true}
          style={{ height: "100%" }}
          bottom={
            <>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile name="김규빅" avatarType="initial" />
            </>
          }
        >
          <LNBItemGroup title="설정">
            <LNBItem
              value="내 정보"
              leadingIcon={IconPersonOutline20}
              selected={selected === "profile"}
              onClick={() => setSelected("profile")}
            />
            <LNBItem
              value="플랜 관리"
              leadingIcon={IconWalletOutline20}
              selected={selected === "plan"}
              onClick={() => setSelected("plan")}
            />
            <LNBItem
              value="요금 계산기"
              leadingIcon={IconMoneyOutline20}
              selected={selected === "billing"}
              onClick={() => setSelected("billing")}
            />
          </LNBItemGroup>
          <LNBItemGroup title="리소스">
            <LNBItem
              value="앱 다운로드"
              leadingIcon={IconDownloadOutline20}
              selected={selected === "app"}
              onClick={() => setSelected("app")}
            />
          </LNBItemGroup>
        </LNB>

        <LNB
          style={{ height: "100%" }}
          title="설정"
          bottom={
            <>
              <LNBItem value="문의하기" leadingIcon={IconSettingOutline20} />
              <Divider thickness={1} />
              <LNBItemProfile
                name="김규빅"
                avatarType="initial"
                trailingIcon={IconChevronRightOutline20}
              />
            </>
          }
        >
          <ItemsDemo selected={selected} setSelected={setSelected} />
        </LNB>
      </div>
    );
  },
};
