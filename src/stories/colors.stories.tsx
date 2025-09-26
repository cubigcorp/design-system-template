import type { Meta, StoryObj } from "@storybook/nextjs";
import "../app/globals.css";
import {
  textColor,
  brandColor,
  positiveColor,
  negativeColor,
  cautioniaryColor,
  infoColor,
  borderColor,
  layerColor,
} from "../tokens";

// 모든 컬러 값 매핑 (color.ts에서 가져온 전체 컬러 팔레트)
const colorValues: Record<string, string> = {
  // Common
  "common-0": "#000000",
  "common-100": "#ffffff",
  "common-dimmer": "#17171980",

  // Gray
  "gray-25": "#fbfbfb",
  "gray-50": "#f7f7f8",
  "gray-100": "#f0f0f2",
  "gray-200": "#e6e7e9",
  "gray-300": "#dcdddf",
  "gray-400": "#cacccf",
  "gray-500": "#b6b8bd",
  "gray-600": "#a2a4aa",
  "gray-700": "#8f9298",
  "gray-800": "#7b7e85",
  "gray-850": "#666970",
  "gray-900": "#525459",
  "gray-925": "#404145",
  "gray-950": "#303135",
  "gray-975": "#222325",
  "gray-990": "#171719",
  "gray-1000": "#0f0f10",

  // Neutral
  "neutral-50": "#fafafa",
  "neutral-100": "#f5f5f5",
  "neutral-200": "#e5e5e5",
  "neutral-300": "#d4d4d4",
  "neutral-400": "#a1a1a1",
  "neutral-500": "#737373",
  "neutral-600": "#525252",
  "neutral-700": "#404040",
  "neutral-800": "#262626",
  "neutral-900": "#171717",
  "neutral-950": "#0a0a0a",

  // Red
  "red-50": "#fef2f2",
  "red-100": "#ffe2e2",
  "red-200": "#ffc9c9",
  "red-300": "#ffa2a2",
  "red-400": "#ff6467",
  "red-500": "#fb2c36",
  "red-600": "#e7000b",
  "red-700": "#c10007",
  "red-800": "#9f0712",
  "red-900": "#82181a",
  "red-950": "#460809",

  // Orange
  "orange-50": "#fff7ed",
  "orange-100": "#ffedd4",
  "orange-200": "#ffd6a8",
  "orange-300": "#ffb86a",
  "orange-400": "#ff8904",
  "orange-500": "#ff6900",
  "orange-600": "#f54900",
  "orange-700": "#ca3500",
  "orange-800": "#9f2d00",
  "orange-900": "#7e2a0c",
  "orange-950": "#441306",

  // Yellow
  "yellow-50": "#fefce8",
  "yellow-100": "#fef9c2",
  "yellow-200": "#fff085",
  "yellow-300": "#ffdf20",
  "yellow-400": "#fdc700",
  "yellow-500": "#f0b100",
  "yellow-600": "#d08700",
  "yellow-700": "#a65f00",
  "yellow-800": "#894b00",
  "yellow-900": "#733e0a",
  "yellow-950": "#432004",

  // Lime
  "lime-50": "#fefce8",
  "lime-100": "#fef9c2",
  "lime-200": "#d8f999",
  "lime-300": "#bbf451",
  "lime-400": "#9ae600",
  "lime-500": "#7ccf00",
  "lime-600": "#5ea500",
  "lime-700": "#497d00",
  "lime-800": "#3c6300",
  "lime-900": "#35530e",
  "lime-950": "#192e03",

  // Green
  "green-50": "#f0fdf4",
  "green-100": "#dcfce7",
  "green-200": "#b9f8cf",
  "green-300": "#7bf1a8",
  "green-400": "#05df72",
  "green-500": "#00c950",
  "green-600": "#00a63e",
  "green-700": "#008236",
  "green-800": "#016630",
  "green-900": "#0d542b",
  "green-950": "#032e15",

  // Emerald
  "emerald-50": "#ecfdf5",
  "emerald-100": "#d0fae5",
  "emerald-200": "#a4f4cf",
  "emerald-300": "#5ee9b5",
  "emerald-400": "#00d492",
  "emerald-500": "#00bc7d",
  "emerald-600": "#009966",
  "emerald-700": "#007a55",
  "emerald-800": "#006045",
  "emerald-900": "#004f3b",
  "emerald-950": "#002c22",

  // Teal
  "teal-50": "#f0fdfa",
  "teal-100": "#cbfbf1",
  "teal-200": "#96f7e4",
  "teal-300": "#46ecd5",
  "teal-400": "#00d5be",
  "teal-500": "#00bba7",
  "teal-600": "#009689",
  "teal-700": "#00786f",
  "teal-800": "#005f5a",
  "teal-900": "#0b4f4a",
  "teal-950": "#022f2e",

  // Cyan
  "cyan-50": "#ecfeff",
  "cyan-100": "#cefafe",
  "cyan-200": "#a2f4fd",
  "cyan-300": "#53eafd",
  "cyan-400": "#00d3f3",
  "cyan-500": "#00b8db",
  "cyan-600": "#0092b8",
  "cyan-700": "#007595",
  "cyan-800": "#005f78",
  "cyan-900": "#104e64",
  "cyan-950": "#053345",

  // Blue
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bedbff",
  "blue-300": "#8ec5ff",
  "blue-400": "#51a2ff",
  "blue-500": "#2b7fff",
  "blue-600": "#155dfc",
  "blue-700": "#1447e6",
  "blue-800": "#193cb8",
  "blue-900": "#1c398e",
  "blue-950": "#162456",

  // Purple
  "purple-50": "#faf5ff",
  "purple-100": "#f3e8ff",
  "purple-200": "#e9d4ff",
  "purple-300": "#dab2ff",
  "purple-400": "#c27aff",
  "purple-500": "#ad46ff",
  "purple-600": "#9810fa",
  "purple-700": "#8200db",
  "purple-800": "#6e11b0",
  "purple-900": "#59168b",
  "purple-950": "#3c0366",

  // Deep Purple
  "deeppurple-50": "#f7f5ff",
  "deeppurple-100": "#efebff",
  "deeppurple-200": "#d5cffa",
  "deeppurple-300": "#b5abf2",
  "deeppurple-400": "#9f8deb",
  "deeppurple-500": "#8a77e0",
  "deeppurple-600": "#7a65d0",
  "deeppurple-700": "#6c58be",
  "deeppurple-800": "#684fac",
  "deeppurple-900": "#473477",
  "deeppurple-950": "#30244d",

  // Pink
  "pink-50": "#fdf2f8",
  "pink-100": "#fce7f3",
  "pink-200": "#fccee8",
  "pink-300": "#fda5d5",
  "pink-400": "#fb64b6",
  "pink-500": "#f6339a",
  "pink-600": "#e60076",
  "pink-700": "#c6005c",
  "pink-800": "#a3004c",
  "pink-900": "#861043",
  "pink-950": "#510424",
};

// Color 컴포넌트 정의
const ColorSwatch = ({
  colorName,
  colorValue,
  className,
  textColor = "text-white",
  autoGenerate = false,
}: {
  colorName: string;
  colorValue?: string;
  className?: string;
  textColor?: string;
  autoGenerate?: boolean;
}) => {
  // autoGenerate가 true면 colorName으로부터 className과 colorValue를 자동 생성
  const finalClassName = autoGenerate ? `bg-${colorName}` : className;
  const finalColorValue = autoGenerate
    ? colorValues[colorName] || colorValue || "#000000"
    : colorValue;

  return (
    <div className={`${finalClassName} ${textColor} p-4 rounded-lg shadow-sm`}>
      <div className="font-600 text-sm">{colorName}</div>
      <div className="text-xs opacity-90">{finalColorValue}</div>
    </div>
  );
};

const meta: Meta<typeof ColorSwatch> = {
  title: "Design System/Colors",
  component: ColorSwatch,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "디자인 시스템의 컬러 팔레트를 테스트합니다. 모든 컬러 토큰과 사용 예시를 확인할 수 있습니다.",
      },
    },
  },
  argTypes: {
    colorName: {
      control: "select",
      options: [
        // Common
        "common-0",
        "common-100",
        "common-dimmer",
        // Gray
        "gray-25",
        "gray-50",
        "gray-100",
        "gray-200",
        "gray-300",
        "gray-400",
        "gray-500",
        "gray-600",
        "gray-700",
        "gray-800",
        "gray-850",
        "gray-900",
        "gray-925",
        "gray-950",
        "gray-975",
        "gray-990",
        "gray-1000",
        // Neutral
        "neutral-50",
        "neutral-100",
        "neutral-200",
        "neutral-300",
        "neutral-400",
        "neutral-500",
        "neutral-600",
        "neutral-700",
        "neutral-800",
        "neutral-900",
        "neutral-950",
        // Red
        "red-50",
        "red-100",
        "red-200",
        "red-300",
        "red-400",
        "red-500",
        "red-600",
        "red-700",
        "red-800",
        "red-900",
        "red-950",
        // Orange
        "orange-50",
        "orange-100",
        "orange-200",
        "orange-300",
        "orange-400",
        "orange-500",
        "orange-600",
        "orange-700",
        "orange-800",
        "orange-900",
        "orange-950",
        // Yellow
        "yellow-50",
        "yellow-100",
        "yellow-200",
        "yellow-300",
        "yellow-400",
        "yellow-500",
        "yellow-600",
        "yellow-700",
        "yellow-800",
        "yellow-900",
        "yellow-950",
        // Lime
        "lime-50",
        "lime-100",
        "lime-200",
        "lime-300",
        "lime-400",
        "lime-500",
        "lime-600",
        "lime-700",
        "lime-800",
        "lime-900",
        "lime-950",
        // Green
        "green-50",
        "green-100",
        "green-200",
        "green-300",
        "green-400",
        "green-500",
        "green-600",
        "green-700",
        "green-800",
        "green-900",
        "green-950",
        // Emerald
        "emerald-50",
        "emerald-100",
        "emerald-200",
        "emerald-300",
        "emerald-400",
        "emerald-500",
        "emerald-600",
        "emerald-700",
        "emerald-800",
        "emerald-900",
        "emerald-950",
        // Teal
        "teal-50",
        "teal-100",
        "teal-200",
        "teal-300",
        "teal-400",
        "teal-500",
        "teal-600",
        "teal-700",
        "teal-800",
        "teal-900",
        "teal-950",
        // Cyan
        "cyan-50",
        "cyan-100",
        "cyan-200",
        "cyan-300",
        "cyan-400",
        "cyan-500",
        "cyan-600",
        "cyan-700",
        "cyan-800",
        "cyan-900",
        "cyan-950",
        // Blue
        "blue-50",
        "blue-100",
        "blue-200",
        "blue-300",
        "blue-400",
        "blue-500",
        "blue-600",
        "blue-700",
        "blue-800",
        "blue-900",
        "blue-950",
        // Purple
        "purple-50",
        "purple-100",
        "purple-200",
        "purple-300",
        "purple-400",
        "purple-500",
        "purple-600",
        "purple-700",
        "purple-800",
        "purple-900",
        "purple-950",
        // Deep Purple
        "deeppurple-50",
        "deeppurple-100",
        "deeppurple-200",
        "deeppurple-300",
        "deeppurple-400",
        "deeppurple-500",
        "deeppurple-600",
        "deeppurple-700",
        "deeppurple-800",
        "deeppurple-900",
        "deeppurple-950",
        // Pink
        "pink-50",
        "pink-100",
        "pink-200",
        "pink-300",
        "pink-400",
        "pink-500",
        "pink-600",
        "pink-700",
        "pink-800",
        "pink-900",
        "pink-950",
      ],
      description: "컬러 토큰 이름 (자동으로 bg- 클래스 생성)",
    },
    colorValue: {
      control: "text",
      description: "HEX 컬러 값 (참고용)",
    },
    autoGenerate: {
      control: "boolean",
      description: "colorName으로부터 자동으로 className 생성",
    },
    textColor: {
      control: "select",
      options: ["text-white", "text-black", "text-gray-900"],
      description: "텍스트 색상",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ColorSwatch>;

// 기본 스토리
export const Default: Story = {
  args: {
    colorName: "blue-500",
    autoGenerate: true,
    textColor: "text-white",
  },
};

// Common Colors
export const CommonColors: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Common Colors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ColorSwatch
          colorName="common-0"
          colorValue="#000000"
          className="bg-common-0"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="common-100"
          colorValue="#ffffff"
          className="bg-common-100 border"
          textColor="text-black"
        />
        <ColorSwatch
          colorName="common-dimmer"
          colorValue="#17171980"
          className="bg-common-dimmer"
          textColor="text-white"
        />
      </div>
    </div>
  ),
};

// Gray Scale
export const GrayScale: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Gray Scale</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        <ColorSwatch
          colorName="gray-25"
          colorValue="#fbfbfb"
          className="bg-gray-25 border"
          textColor="text-gray-900"
        />
        <ColorSwatch
          colorName="gray-50"
          colorValue="#f7f7f8"
          className="bg-gray-50 border"
          textColor="text-gray-900"
        />
        <ColorSwatch
          colorName="gray-100"
          colorValue="#f0f0f2"
          className="bg-gray-100"
          textColor="text-gray-900"
        />
        <ColorSwatch
          colorName="gray-200"
          colorValue="#e6e7e9"
          className="bg-gray-200"
          textColor="text-gray-900"
        />
        <ColorSwatch
          colorName="gray-300"
          colorValue="#dcdddf"
          className="bg-gray-300"
          textColor="text-gray-900"
        />
        <ColorSwatch
          colorName="gray-400"
          colorValue="#cacccf"
          className="bg-gray-400"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-500"
          colorValue="#b6b8bd"
          className="bg-gray-500"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-600"
          colorValue="#a2a4aa"
          className="bg-gray-600"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-700"
          colorValue="#8f9298"
          className="bg-gray-700"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-800"
          colorValue="#7b7e85"
          className="bg-gray-800"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-900"
          colorValue="#525459"
          className="bg-gray-900"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-850"
          colorValue="#666970"
          className="bg-gray-850"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-925"
          colorValue="#404145"
          className="bg-gray-925"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-950"
          colorValue="#303135"
          className="bg-gray-950"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-975"
          colorValue="#222325"
          className="bg-gray-975"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-990"
          colorValue="#171719"
          className="bg-gray-990"
          textColor="text-white"
        />
        <ColorSwatch
          colorName="gray-1000"
          colorValue="#0f0f10"
          className="bg-gray-1000"
          textColor="text-white"
        />
      </div>
    </div>
  ),
};

// Foreground Colors
export const Foreground: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Foreground</h2>
      <div className="text-sm text-gray-600 mb-6">
        텍스트의 계층 구조와 가독성을 고려해 정의된 색상입니다. 본문, 제목,
        비활성 텍스트 등 다양한 정보 밀도에 따라 사용됩니다.
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.light["fg-neutral-strong"],
                }}
              />
              <span className="font-medium">color-fg-neutral-strong</span>
            </div>
            <span className="text-sm text-gray-500">gray-1000</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.light["fg-neutral-primary"],
                }}
              />
              <span className="font-medium">color-fg-neutral-primary</span>
            </div>
            <span className="text-sm text-gray-500">gray-990</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.light["fg-neutral-alternative"],
                }}
              />
              <span className="font-medium">color-fg-neutral-alternative</span>
            </div>
            <span className="text-sm text-gray-500">gray-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.light["fg-neutral-assistive"],
                }}
              />
              <span className="font-medium">color-fg-neutral-assistive</span>
            </div>
            <span className="text-sm text-gray-500">gray-400</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.light["fg-neutral-disable"],
                }}
              />
              <span className="font-medium">color-fg-neutral-disable</span>
            </div>
            <span className="text-sm text-gray-500">gray-300</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.dark["fg-neutral-strong"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-neutral-strong
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-25</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.dark["fg-neutral-primary"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-neutral-primary
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-300</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.dark["fg-neutral-alternative"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-neutral-alternative
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-600</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.dark["fg-neutral-assistive"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-neutral-assistive
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: textColor.dark["fg-neutral-disable"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-neutral-disable
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-900</span>
          </div>
        </div>
      </div>

      {/* Text Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            {/* 회원가입 */}
            <div className="flex items-center justify-between">
              <span
                className="text-sm"
                style={{ color: textColor.light["fg-neutral-alternative"] }}
              >
                회원가입
              </span>
              <div className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">
                fg-neutral-alternative
              </div>
            </div>

            {/* 메인 제목 */}
            <div className="flex items-center justify-between">
              <h1
                className="text-xl font-bold"
                style={{ color: textColor.light["fg-neutral-strong"] }}
              >
                사용하실 닉네임을 입력해주세요.
              </h1>
              <div className="px-2 py-1 bg-gray-800 text-white rounded text-xs font-mono">
                fg-neutral-strong
              </div>
            </div>

            {/* 설명 텍스트 */}
            <div className="flex items-center justify-between">
              <p
                className="text-sm"
                style={{ color: textColor.light["fg-neutral-primary"] }}
              >
                입력하신 정보는 안전하게 보호되며, 서비스 제공에만 사용됩니다.
              </p>
              <div className="px-2 py-1 bg-gray-700 text-white rounded text-xs font-mono">
                fg-neutral-primary
              </div>
            </div>

            {/* 닉네임 라벨 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium"
                  style={{ color: textColor.light["fg-neutral-primary"] }}
                >
                  닉네임
                </label>
                <div className="px-2 py-1 bg-gray-700 text-white rounded text-xs font-mono">
                  fg-neutral-primary
                </div>
              </div>

              {/* 입력 필드와 중복확인 버튼 */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-gray-400 text-white rounded text-xs font-mono">
                    fg-neutral-assistive
                  </div>
                  <input
                    type="text"
                    placeholder="이름을 입력해 주세요"
                    className="px-3 py-2 border border-gray-300 rounded-md"
                    style={{ color: textColor.light["fg-neutral-primary"] }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm"
                    style={{ color: textColor.light["fg-neutral-disable"] }}
                  >
                    중복확인
                  </button>
                  <div className="px-2 py-1 bg-gray-400 text-white rounded text-xs font-mono">
                    fg-neutral-disable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            {/* 회원가입 */}
            <div className="flex items-center justify-between">
              <span
                className="text-sm"
                style={{ color: textColor.dark["fg-neutral-alternative"] }}
              >
                회원가입
              </span>
              <div className="px-2 py-1 bg-gray-600 text-white rounded text-xs font-mono">
                fg-neutral-alternative
              </div>
            </div>

            {/* 메인 제목 */}
            <div className="flex items-center justify-between">
              <h1
                className="text-xl font-bold"
                style={{ color: textColor.dark["fg-neutral-strong"] }}
              >
                사용하실 닉네임을 입력해주세요.
              </h1>
              <div className="px-2 py-1 bg-gray-100 text-black rounded text-xs font-mono">
                fg-neutral-strong
              </div>
            </div>

            {/* 설명 텍스트 */}
            <div className="flex items-center justify-between">
              <p
                className="text-sm"
                style={{ color: textColor.dark["fg-neutral-primary"] }}
              >
                입력하신 정보는 안전하게 보호되며, 서비스 제공에만 사용됩니다.
              </p>
              <div className="px-2 py-1 bg-gray-300 text-black rounded text-xs font-mono">
                fg-neutral-primary
              </div>
            </div>

            {/* 닉네임 라벨 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  className="text-sm font-medium"
                  style={{ color: textColor.dark["fg-neutral-primary"] }}
                >
                  닉네임
                </label>
                <div className="px-2 py-1 bg-gray-300 text-black rounded text-xs font-mono">
                  fg-neutral-primary
                </div>
              </div>

              {/* 입력 필드와 중복확인 버튼 */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-gray-500 text-white rounded text-xs font-mono">
                    fg-neutral-assistive
                  </div>
                  <input
                    type="text"
                    placeholder="이름을 입력해 주세요"
                    className="px-3 py-2 border border-gray-600 rounded-md"
                    style={{
                      color: textColor.dark["fg-neutral-primary"],
                      backgroundColor: "#222325",
                    }}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-3 py-2 border border-gray-600 rounded-md text-sm"
                    style={{ color: textColor.dark["fg-neutral-disable"] }}
                  >
                    중복확인
                  </button>
                  <div className="px-2 py-1 bg-gray-500 text-white rounded text-xs font-mono">
                    fg-neutral-disable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Primary Colors
export const PrimaryColors: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Primary Colors</h2>

      {/* Blue */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Blue</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <ColorSwatch
            colorName="blue-50"
            colorValue="#eff6ff"
            className="bg-blue-50 border"
            textColor="text-blue-900"
          />
          <ColorSwatch
            colorName="blue-100"
            colorValue="#dbeafe"
            className="bg-blue-100"
            textColor="text-blue-900"
          />
          <ColorSwatch
            colorName="blue-300"
            colorValue="#8ec5ff"
            className="bg-blue-300"
            textColor="text-blue-900"
          />
          <ColorSwatch
            colorName="blue-500"
            colorValue="#2b7fff"
            className="bg-blue-500"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="blue-700"
            colorValue="#1447e6"
            className="bg-blue-700"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Green */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Green</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <ColorSwatch
            colorName="green-50"
            colorValue="#f0fdf4"
            className="bg-green-50 border"
            textColor="text-green-900"
          />
          <ColorSwatch
            colorName="green-100"
            colorValue="#dcfce7"
            className="bg-green-100"
            textColor="text-green-900"
          />
          <ColorSwatch
            colorName="green-300"
            colorValue="#7bf1a8"
            className="bg-green-300"
            textColor="text-green-900"
          />
          <ColorSwatch
            colorName="green-500"
            colorValue="#00c950"
            className="bg-green-500"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="green-700"
            colorValue="#008236"
            className="bg-green-700"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Red */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Red</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <ColorSwatch
            colorName="red-50"
            colorValue="#fef2f2"
            className="bg-red-50 border"
            textColor="text-red-900"
          />
          <ColorSwatch
            colorName="red-100"
            colorValue="#ffe2e2"
            className="bg-red-100"
            textColor="text-red-900"
          />
          <ColorSwatch
            colorName="red-300"
            colorValue="#ffa2a2"
            className="bg-red-300"
            textColor="text-red-900"
          />
          <ColorSwatch
            colorName="red-500"
            colorValue="#fb2c36"
            className="bg-red-500"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="red-700"
            colorValue="#c10007"
            className="bg-red-700"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  ),
};

// Secondary Colors
export const SecondaryColors: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Secondary Colors</h2>

      {/* Orange */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Orange</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <ColorSwatch
            colorName="orange-50"
            colorValue="#fff7ed"
            className="bg-orange-50 border"
            textColor="text-orange-900"
          />
          <ColorSwatch
            colorName="orange-200"
            colorValue="#ffd6a8"
            className="bg-orange-200"
            textColor="text-orange-900"
          />
          <ColorSwatch
            colorName="orange-400"
            colorValue="#ff8904"
            className="bg-orange-400"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="orange-600"
            colorValue="#f54900"
            className="bg-orange-600"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="orange-800"
            colorValue="#9f2d00"
            className="bg-orange-800"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Purple */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Purple</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <ColorSwatch
            colorName="purple-50"
            colorValue="#faf5ff"
            className="bg-purple-50 border"
            textColor="text-purple-900"
          />
          <ColorSwatch
            colorName="purple-200"
            colorValue="#e9d4ff"
            className="bg-purple-200"
            textColor="text-purple-900"
          />
          <ColorSwatch
            colorName="purple-400"
            colorValue="#c27aff"
            className="bg-purple-400"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="purple-600"
            colorValue="#9810fa"
            className="bg-purple-600"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="purple-800"
            colorValue="#6e11b0"
            className="bg-purple-800"
            textColor="text-white"
          />
        </div>
      </div>

      {/* Teal */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Teal</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <ColorSwatch
            colorName="teal-50"
            colorValue="#f0fdfa"
            className="bg-teal-50 border"
            textColor="text-teal-900"
          />
          <ColorSwatch
            colorName="teal-200"
            colorValue="#96f7e4"
            className="bg-teal-200"
            textColor="text-teal-900"
          />
          <ColorSwatch
            colorName="teal-400"
            colorValue="#00d5be"
            className="bg-teal-400"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="teal-600"
            colorValue="#009689"
            className="bg-teal-600"
            textColor="text-white"
          />
          <ColorSwatch
            colorName="teal-800"
            colorValue="#005f5a"
            className="bg-teal-800"
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  ),
};

// Usage Examples
export const UsageExamples: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Usage Examples</h2>

      {/* Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Buttons</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
            Primary Button
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            Success Button
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors">
            Danger Button
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 rounded-lg transition-colors">
            Secondary Button
          </button>
        </div>
      </div>

      {/* Alert Messages */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Alert Messages</h3>
        <div className="space-y-3">
          <div className="bg-blue-50 border border-blue-200 text-blue-900 p-4 rounded-lg">
            <div className="font-semibold">Information</div>
            <div className="text-sm">This is an informational message.</div>
          </div>
          <div className="bg-green-50 border border-green-200 text-green-900 p-4 rounded-lg">
            <div className="font-semibold">Success</div>
            <div className="text-sm">Operation completed successfully!</div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 p-4 rounded-lg">
            <div className="font-semibold">Warning</div>
            <div className="text-sm">Please check your input.</div>
          </div>
          <div className="bg-red-50 border border-red-200 text-red-900 p-4 rounded-lg">
            <div className="font-semibold">Error</div>
            <div className="text-sm">Something went wrong.</div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
            <h4 className="text-gray-900 font-semibold mb-2">Default Card</h4>
            <p className="text-gray-600 text-sm">
              This is a default card with gray borders and white background.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h4 className="text-blue-900 font-semibold mb-2">
              Highlighted Card
            </h4>
            <p className="text-blue-700 text-sm">
              This card uses blue tones for emphasis.
            </p>
          </div>
        </div>
      </div>

      {/* Text Colors */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Text Colors</h3>
        <div className="space-y-2">
          <p className="text-gray-900">Primary text (text-gray-900)</p>
          <p className="text-gray-600">Secondary text (text-gray-600)</p>
          <p className="text-gray-400">Muted text (text-gray-400)</p>
          <p className="text-blue-600">Link text (text-blue-600)</p>
          <p className="text-green-600">Success text (text-green-600)</p>
          <p className="text-red-600">Error text (text-red-600)</p>
        </div>
      </div>
    </div>
  ),
};

// Color Accessibility
export const ColorAccessibility: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Color Accessibility</h2>

      <div className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">High Contrast Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-common-0 text-common-100 p-4 rounded-lg">
              <div className="font-semibold">Black on White</div>
              <div className="text-sm">Perfect contrast ratio</div>
            </div>
            <div className="bg-blue-700 text-white p-4 rounded-lg">
              <div className="font-semibold">Blue 700 on White</div>
              <div className="text-sm">WCAG AA compliant</div>
            </div>
            <div className="bg-green-700 text-white p-4 rounded-lg">
              <div className="font-semibold">Green 700 on White</div>
              <div className="text-sm">WCAG AA compliant</div>
            </div>
            <div className="bg-red-700 text-white p-4 rounded-lg">
              <div className="font-semibold">Red 700 on White</div>
              <div className="text-sm">WCAG AA compliant</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Avoid These Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-200 text-yellow-400 p-4 rounded-lg border">
              <div className="font-semibold">Low Contrast</div>
              <div className="text-sm">Hard to read</div>
            </div>
            <div className="bg-gray-100 text-gray-200 p-4 rounded-lg border">
              <div className="font-semibold">Very Low Contrast</div>
              <div className="text-sm">Accessibility issue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Brand Colors
export const Brand: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Brand</h2>
      <div className="text-sm text-gray-600 mb-6">
        브랜드 정체성을 드러내는 핵심 색상입니다. 로고, 주요 버튼, 강조 영역 등
        브랜드를 대표하는 요소에 사용됩니다.
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: brandColor.light["fg-brand-primary"],
                }}
              />
              <span className="font-medium">color-fg-brand-primary</span>
            </div>
            <span className="text-sm text-gray-500">purple-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: brandColor.light["fg-brand-strong"],
                }}
              />
              <span className="font-medium">color-fg-brand-strong</span>
            </div>
            <span className="text-sm text-gray-500">purple-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: brandColor.light["bg-brand-primary-default"],
                }}
              />
              <span className="font-medium">
                color-bg-brand-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-500">purple-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: brandColor.light["bg-brand-primary-pressed"],
                }}
              />
              <span className="font-medium">
                color-bg-brand-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-500">purple-900</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: brandColor.dark["fg-brand-primary"] }}
              />
              <span className="font-medium text-white">
                color-fg-brand-primary
              </span>
            </div>
            <span className="text-sm text-gray-400">purple-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: brandColor.dark["fg-brand-strong"] }}
              />
              <span className="font-medium text-white">
                color-fg-brand-strong
              </span>
            </div>
            <span className="text-sm text-gray-400">purple-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: brandColor.dark["bg-brand-primary-default"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-brand-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-400">purple-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: brandColor.dark["bg-brand-primary-pressed"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-brand-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-400">purple-700</span>
          </div>
        </div>
      </div>

      {/* Brand Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            {/* fg-brand */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded"
                  style={{
                    backgroundColor: brandColor.light["fg-brand-primary"],
                  }}
                />
                <span className="font-medium">fg-brand</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div
                className="flex items-center justify-center gap-1"
                style={{ color: brandColor.light["fg-brand-primary"] }}
              >
                <span>👥</span>
                <span>한국 284명이 함께 보고 있어요</span>
              </div>

              <button
                className="w-full py-3 px-6 rounded-lg text-white font-medium transition-colors"
                style={{
                  backgroundColor: brandColor.light["bg-brand-primary-default"],
                }}
              >
                시작하기
              </button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <div
                  className="w-4 h-4 rounded"
                  style={{
                    backgroundColor:
                      brandColor.light["bg-brand-primary-default"],
                  }}
                />
                <span className="text-sm font-medium">
                  bg-brand-primary-default
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            {/* fg-brand */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 rounded"
                  style={{
                    backgroundColor: brandColor.dark["fg-brand-primary"],
                  }}
                />
                <span className="font-medium text-white">fg-brand</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div
                className="flex items-center justify-center gap-1"
                style={{ color: brandColor.dark["fg-brand-primary"] }}
              >
                <span>👥</span>
                <span>한국 284명이 함께 보고 있어요</span>
              </div>

              <button
                className="w-full py-3 px-6 rounded-lg text-white font-medium transition-colors"
                style={{
                  backgroundColor: brandColor.dark["bg-brand-primary-default"],
                }}
              >
                시작하기
              </button>

              <div className="flex items-center justify-center gap-2 mt-4">
                <div
                  className="w-4 h-4 rounded"
                  style={{
                    backgroundColor:
                      brandColor.dark["bg-brand-primary-default"],
                  }}
                />
                <span className="text-sm font-medium text-white">
                  bg-brand-primary-default
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Positive Colors
export const Positive: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Positive</h2>
      <div className="text-sm text-gray-600 mb-6">
        성공, 완료, 승인 등 긍정적인 상태를 전달할 때 사용되는 색상입니다. 알림
        배지나 확인 메시지 등에 활용됩니다.
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: positiveColor.light["fg-positive-primary"],
                }}
              />
              <span className="font-medium">color-fg-positive-primary</span>
            </div>
            <span className="text-sm text-gray-500">green-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: positiveColor.light["fg-positive-strong"],
                }}
              />
              <span className="font-medium">color-fg-positive-strong</span>
            </div>
            <span className="text-sm text-gray-500">green-900</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    positiveColor.light["bg-positive-primary-default"],
                }}
              />
              <span className="font-medium">
                color-bg-positive-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-500">green-600</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    positiveColor.light["bg-positive-primary-pressed"],
                }}
              />
              <span className="font-medium">
                color-bg-positive-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-500">green-400</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: positiveColor.dark["fg-positive-primary"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-positive-primary
              </span>
            </div>
            <span className="text-sm text-gray-400">green-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: positiveColor.dark["fg-positive-strong"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-positive-strong
              </span>
            </div>
            <span className="text-sm text-gray-400">green-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    positiveColor.dark["bg-positive-primary-default"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-positive-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-400">green-600</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    positiveColor.dark["bg-positive-primary-pressed"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-positive-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-400">green-400</span>
          </div>
        </div>
      </div>

      {/* Positive Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            <div className="flex items-center gap-4">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: positiveColor.light["fg-positive-primary"],
                }}
              >
                fg-positive
              </div>

              <div className="flex items-center justify-between flex-1 p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span className="text-white">완료되었어요</span>
                </div>
                <span
                  className="text-sm"
                  style={{ color: positiveColor.light["fg-positive-primary"] }}
                >
                  관심목록 보기 →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: positiveColor.dark["fg-positive-primary"],
                }}
              >
                fg-positive
              </div>

              <div className="flex items-center justify-between flex-1 p-3 bg-gray-900 rounded-lg">
                <div className="flex items-center gap-2">
                  <span className="text-white">✓</span>
                  <span className="text-white">완료되었어요</span>
                </div>
                <span
                  className="text-sm"
                  style={{ color: positiveColor.dark["fg-positive-primary"] }}
                >
                  관심목록 보기 →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Negative: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Negative</h2>
        <p className="text-gray-600 mb-6">
          오류, 실패, 경고 등 부정적인 상태를 강조하기 위한 색상입니다. 경고
          메시지나 입력 오류 등의 피드백에 사용됩니다. 사용자에게 부정적인
          상태나 문제를 명확히 전달하여 즉각적인 주의를 끌 수 있습니다.
        </p>
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: negativeColor.light["fg-negative-primary"],
                }}
              />
              <span className="font-medium">color-fg-negative</span>
            </div>
            <span className="text-sm text-gray-500">red-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: negativeColor.light["fg-negative-strong"],
                }}
              />
              <span className="font-medium">color-fg-negative-strong</span>
            </div>
            <span className="text-sm text-gray-500">red-900</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    negativeColor.light["bg-negative-primary-default"],
                }}
              />
              <span className="font-medium">
                color-bg-negative-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-500">red-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    negativeColor.light["bg-negative-primary-pressed"],
                }}
              />
              <span className="font-medium">
                color-bg-negative-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-500">red-600</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: negativeColor.dark["fg-negative-primary"],
                }}
              />
              <span className="font-medium text-white">color-fg-negative</span>
            </div>
            <span className="text-sm text-gray-400">red-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: negativeColor.dark["fg-negative-strong"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-negative-strong
              </span>
            </div>
            <span className="text-sm text-gray-400">red-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    negativeColor.dark["bg-negative-primary-default"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-negative-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-400">red-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    negativeColor.dark["bg-negative-primary-pressed"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-negative-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-400">red-400</span>
          </div>
        </div>
      </div>

      {/* Negative Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            <div className="flex flex-col items-center gap-4 p-6">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor:
                    negativeColor.light["bg-negative-primary-default"],
                }}
              >
                bg-negative-primary-default
              </div>

              <div className="bg-white rounded-2xl p-8 max-w-sm w-full">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 text-left">
                    글을 삭제할까요?
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed text-left">
                    모든 데이터가 삭제되고 다시 볼 수 없어요.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button className="flex-1 px-6 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition-colors bg-gray-50">
                      취소
                    </button>
                    <button
                      className="flex-1 px-6 py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                      style={{
                        backgroundColor:
                          negativeColor.light["bg-negative-primary-default"],
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            <div className="flex flex-col items-center gap-4 p-6">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor:
                    negativeColor.dark["bg-negative-primary-default"],
                }}
              >
                bg-negative-primary-default
              </div>

              <div
                className="rounded-2xl p-8 max-w-sm w-full"
                style={{ backgroundColor: "#303135" }}
              >
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white text-left">
                    글을 삭제할까요?
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed text-left">
                    모든 데이터가 삭제되고 다시 볼 수 없어요.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <button
                      className="flex-1 px-6 py-3 rounded-xl text-gray-300 font-medium hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: "#404145" }}
                    >
                      취소
                    </button>
                    <button
                      className="flex-1 px-6 py-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                      style={{
                        backgroundColor:
                          negativeColor.dark["bg-negative-primary-default"],
                      }}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Cautionary: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Cautionary</h2>
        <p className="text-gray-600 mb-6">
          주의를 요하는 상태나 행동을 예고할 때 사용됩니다. 예: 유효하지만 위험
          가능성이 있는 입력 또는 조건 경고 등.
        </p>
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.light["fg-cautionary-primary"],
                }}
              />
              <span className="font-medium">color-fg-cautionary-primary</span>
            </div>
            <span className="text-sm text-gray-500">yellow-400</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.light["fg-cautionary-strong"],
                }}
              />
              <span className="font-medium">color-fg-cautionary-strong</span>
            </div>
            <span className="text-sm text-gray-500">yellow-900</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.light["bg-cautionary-primary-default"],
                }}
              />
              <span className="font-medium">
                color-bg-cautionary-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-500">yellow-400</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.light["bg-cautionary-primary-pressed"],
                }}
              />
              <span className="font-medium">
                color-bg-cautionary-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-500">yellow-500</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.dark["fg-cautionary-primary"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-cautionary-primary
              </span>
            </div>
            <span className="text-sm text-gray-400">yellow-400</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.dark["fg-cautionary-strong"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-cautionary-strong
              </span>
            </div>
            <span className="text-sm text-gray-400">yellow-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.dark["bg-cautionary-primary-default"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-cautionary-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-400">yellow-400</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    cautioniaryColor.dark["bg-cautionary-primary-pressed"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-cautionary-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-400">yellow-300</span>
          </div>
        </div>
      </div>

      {/* Cautionary Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            <div className="flex items-center gap-4">
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono"
                style={{
                  backgroundColor:
                    cautioniaryColor.light["bg-cautionary-primary-default"],
                }}
              >
                bg-cautionary-primary-default
              </div>

              <div
                className="flex items-center justify-between p-4 rounded-lg"
                style={{
                  backgroundColor:
                    cautioniaryColor.light["bg-cautionary-primary-default"],
                  width: "375px",
                }}
              >
                <span className="font-medium text-black">
                  서비스 점검시간 안내
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-black">
                    자세히 보기
                  </span>
                  <span className="text-black">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono"
                style={{
                  backgroundColor:
                    cautioniaryColor.dark["bg-cautionary-primary-default"],
                }}
              >
                bg-cautionary-primary-default
              </div>

              <div
                className="flex items-center justify-between p-4 rounded-lg"
                style={{
                  backgroundColor:
                    cautioniaryColor.dark["bg-cautionary-primary-default"],
                  width: "375px",
                }}
              >
                <span className="font-medium text-black">
                  서비스 점검시간 안내
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium text-black">
                    자세히 보기
                  </span>
                  <span className="text-black">›</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Info: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Info</h2>
        <p className="text-gray-600 mb-6">
          중립적이고 보완적인 정보 전달을 위한 색상입니다. 도구 설명, 시스템
          메시지, 참고사항 등에 활용됩니다.
        </p>
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.light["fg-info-primary"],
                }}
              />
              <span className="font-medium">color-fg-info-primary</span>
            </div>
            <span className="text-sm text-gray-500">blue-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.light["fg-info-strong"],
                }}
              />
              <span className="font-medium">color-fg-info-strong</span>
            </div>
            <span className="text-sm text-gray-500">blue-900</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.light["bg-info-primary-assistive"],
                }}
              />
              <span className="font-medium">
                color-bg-info-primary-assistive
              </span>
            </div>
            <span className="text-sm text-gray-500">blue-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.light["bg-info-primary-default"],
                }}
              />
              <span className="font-medium">color-bg-info-primary-default</span>
            </div>
            <span className="text-sm text-gray-500">blue-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.light["bg-info-primary-pressed"],
                }}
              />
              <span className="font-medium">color-bg-info-primary-pressed</span>
            </div>
            <span className="text-sm text-gray-500">blue-600</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.dark["fg-info-primary"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-info-primary
              </span>
            </div>
            <span className="text-sm text-gray-400">blue-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.dark["fg-info-strong"],
                }}
              />
              <span className="font-medium text-white">
                color-fg-info-strong
              </span>
            </div>
            <span className="text-sm text-gray-400">blue-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.dark["bg-info-primary-assistive"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-info-primary-assistive
              </span>
            </div>
            <span className="text-sm text-gray-400">blue-900</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.dark["bg-info-primary-default"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-info-primary-default
              </span>
            </div>
            <span className="text-sm text-gray-400">blue-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: infoColor.dark["bg-info-primary-pressed"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-info-primary-pressed
              </span>
            </div>
            <span className="text-sm text-gray-400">blue-400</span>
          </div>
        </div>
      </div>

      {/* Info Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            <div className="flex items-center gap-4">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{ backgroundColor: infoColor.light["fg-info-strong"] }}
              >
                fg-info-strong
              </div>

              <div
                className="flex items-center justify-between p-4 rounded-lg"
                style={{
                  backgroundColor: infoColor.light["bg-info-primary-assistive"],
                  width: "375px",
                }}
              >
                <span
                  className="font-medium"
                  style={{ color: infoColor.light["fg-info-strong"] }}
                >
                  Tip 실명을 입력하면 연락 올 확률이 30% 높아요
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            <div className="flex items-center gap-4">
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono"
                style={{ backgroundColor: infoColor.dark["fg-info-strong"] }}
              >
                fg-info-strong
              </div>

              <div
                className="flex items-center justify-between p-4 rounded-lg"
                style={{
                  backgroundColor: infoColor.dark["bg-info-primary-assistive"],
                  width: "375px",
                }}
              >
                <span
                  className="font-medium"
                  style={{ color: infoColor.dark["fg-info-strong"] }}
                >
                  Tip 실명을 입력하면 연락 올 확률이 30% 높아요
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Border: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8 p-8">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Border</h2>
        <p className="text-gray-600">
          요소 간 구분과 구조를 명확히 하기 위한 테두리 색상입니다. 컴포넌트
          경계, 입력 필드 등 다양한 레이아웃 요소에 사용됩니다.
        </p>
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-primary"],
                }}
              />
              <span className="font-medium">color-border-primary</span>
            </div>
            <span className="text-sm text-gray-500">gray-200</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor:
                    borderColor.light["color-border-alternative"],
                }}
              />
              <span className="font-medium">color-border-alternative</span>
            </div>
            <span className="text-sm text-gray-500">gray-100</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-focused"],
                }}
              />
              <span className="font-medium">color-border-focused</span>
            </div>
            <span className="text-sm text-gray-500">gray-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-brand"],
                }}
              />
              <span className="font-medium">color-border-brand</span>
            </div>
            <span className="text-sm text-gray-500">deeppurple-600</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-positive"],
                }}
              />
              <span className="font-medium">color-border-positive</span>
            </div>
            <span className="text-sm text-gray-500">green-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-cautionary"],
                }}
              />
              <span className="font-medium">color-border-cautionary</span>
            </div>
            <span className="text-sm text-gray-500">yellow-200</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-info"],
                }}
              />
              <span className="font-medium">color-border-info</span>
            </div>
            <span className="text-sm text-gray-500">blue-200</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.light["color-border-negative"],
                }}
              />
              <span className="font-medium">color-border-negative</span>
            </div>
            <span className="text-sm text-gray-500">red-300</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-primary"],
                }}
              />
              <span className="font-medium text-white">
                color-border-primary
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-925</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-alternative"],
                }}
              />
              <span className="font-medium text-white">
                color-border-alternative
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-950</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-focused"],
                }}
              />
              <span className="font-medium text-white">
                color-border-focused
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-800</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-brand"],
                }}
              />
              <span className="font-medium text-white">color-border-brand</span>
            </div>
            <span className="text-sm text-gray-400">deeppurple-600</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-positive"],
                }}
              />
              <span className="font-medium text-white">
                color-border-positive
              </span>
            </div>
            <span className="text-sm text-gray-400">green-500</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-cautionary"],
                }}
              />
              <span className="font-medium text-white">
                color-border-cautionary
              </span>
            </div>
            <span className="text-sm text-gray-400">yellow-200</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-info"],
                }}
              />
              <span className="font-medium text-white">color-border-info</span>
            </div>
            <span className="text-sm text-gray-400">blue-200</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: borderColor.dark["color-border-negative"],
                }}
              />
              <span className="font-medium text-white">
                color-border-negative
              </span>
            </div>
            <span className="text-sm text-gray-400">red-300</span>
          </div>
        </div>
      </div>

      {/* Border Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: borderColor.light["color-border-primary"],
                }}
              >
                color-border-primary
              </div>
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: borderColor.light["color-border-focused"],
                }}
              >
                color-border-focused
              </div>
            </div>

            <div className="space-y-4 w-full max-w-sm">
              <div
                className="p-4 rounded-lg bg-white"
                style={{
                  border: `1px solid ${borderColor.light["color-border-primary"]}`,
                }}
              >
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">회원가입</h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="이름을 입력해주세요"
                      className="w-full p-3 rounded-lg bg-gray-50"
                      style={{
                        border: `1px solid ${borderColor.light["color-border-primary"]}`,
                      }}
                    />
                    <input
                      type="email"
                      placeholder="이메일을 입력해주세요"
                      className="w-full p-3 rounded-lg bg-gray-50"
                      style={{
                        border: `1px solid ${borderColor.light["color-border-focused"]}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono"
                style={{
                  backgroundColor: borderColor.dark["color-border-primary"],
                }}
              >
                color-border-primary
              </div>
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: borderColor.dark["color-border-focused"],
                }}
              >
                color-border-focused
              </div>
            </div>

            <div className="space-y-4 w-full max-w-sm">
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: "#1a1a1c",
                  border: `1px solid ${borderColor.dark["color-border-primary"]}`,
                }}
              >
                <div className="space-y-3">
                  <h4 className="font-medium text-white">회원가입</h4>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="이름을 입력해주세요"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                      style={{
                        border: `1px solid ${borderColor.dark["color-border-primary"]}`,
                      }}
                    />
                    <input
                      type="email"
                      placeholder="이메일을 입력해주세요"
                      className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400"
                      style={{
                        border: `1px solid ${borderColor.dark["color-border-focused"]}`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {},
};

export const Layer: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold mb-4">Layer</h2>
      <div className="text-sm text-gray-600 mb-6">
        UI 내 다양한 깊이와 구조를 시각적으로 구분하기 위한 배경 색상입니다.
        모달, 시트, 카드 등의 계층 구조 표현에 사용됩니다.
      </div>

      {/* Light Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
          Light Mode
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.light["bg-layer-basement"],
                }}
              />
              <span className="font-medium">color-bg-layer-basement</span>
            </div>
            <span className="text-sm text-gray-500">gray-50</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{
                  backgroundColor: layerColor.light["bg-layer-default"],
                }}
              />
              <span className="font-medium">color-bg-layer-default</span>
            </div>
            <span className="text-sm text-gray-500">common-white</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.light["bg-layer-fill"],
                }}
              />
              <span className="font-medium">color-bg-layer-fill</span>
            </div>
            <span className="text-sm text-gray-500">gray-25</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{
                  backgroundColor: layerColor.light["bg-layer-floating"],
                }}
              />
              <span className="font-medium">color-bg-layer-floating</span>
            </div>
            <span className="text-sm text-gray-500">common-white</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.light["bg-overlay"],
                }}
              />
              <span className="font-medium">color-bg-overlay</span>
            </div>
            <span className="text-sm text-gray-500">common-dimmer</span>
          </div>
        </div>
      </div>

      {/* Dark Mode Tokens */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
          Dark Mode
        </h3>
        <div
          className="p-6 rounded-lg space-y-3"
          style={{ backgroundColor: "#171719" }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-basement"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-layer-basement
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-990</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-default"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-layer-default
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-975</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-fill"],
                }}
              />
              <span className="font-medium text-white">color--fill</span>
            </div>
            <span className="text-sm text-gray-400">gray-950</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-floating"],
                }}
              />
              <span className="font-medium text-white">
                color-bg-layer-floating
              </span>
            </div>
            <span className="text-sm text-gray-400">gray-975</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{
                  backgroundColor: layerColor.dark["bg-overlay"],
                }}
              />
              <span className="font-medium text-white">color-bg-overlay</span>
            </div>
            <span className="text-sm text-gray-400">common-dimmer</span>
          </div>
        </div>
      </div>

      {/* Layer Usage Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="bg-white border rounded-lg p-6 space-y-4 relative">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono"
                style={{
                  backgroundColor: layerColor.light["bg-layer-basement"],
                }}
              >
                bg-layer-basement
              </div>
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono border border-gray-300"
                style={{
                  backgroundColor: layerColor.light["bg-layer-default"],
                }}
              >
                bg-layer-default
              </div>
              <div
                className="px-2 py-1 text-black rounded text-xs font-mono"
                style={{
                  backgroundColor: layerColor.light["bg-layer-fill"],
                }}
              >
                bg-layer-fill
              </div>
            </div>

            {/* 레이어 구조 예시 */}
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: layerColor.light["bg-layer-basement"],
              }}
            >
              <div className="text-sm text-gray-600 mb-3">
                앱 배경 (basement)
              </div>
              <div
                className="p-4 rounded-lg shadow-sm"
                style={{
                  backgroundColor: layerColor.light["bg-layer-default"],
                }}
              >
                <div className="text-sm text-gray-600 mb-3">
                  메인 컨텐츠 (default)
                </div>
                <div
                  className="p-3 rounded"
                  style={{
                    backgroundColor: layerColor.light["bg-layer-fill"],
                  }}
                >
                  <div className="text-sm text-gray-600 mb-2">
                    카드 영역 (fill)
                  </div>
                  <div
                    className="p-3 rounded shadow-md"
                    style={{
                      backgroundColor: layerColor.light["bg-layer-floating"],
                    }}
                  >
                    <div className="text-sm text-gray-600">
                      플로팅 요소 (floating)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dark Mode Example */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="rounded-lg p-6 space-y-4 relative"
            style={{ backgroundColor: "#171719" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-basement"],
                }}
              >
                bg-layer-basement
              </div>
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-default"],
                }}
              >
                bg-layer-default
              </div>
              <div
                className="px-2 py-1 text-white rounded text-xs font-mono"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-fill"],
                }}
              >
                bg-layer-fill
              </div>
            </div>

            {/* 레이어 구조 예시 */}
            <div
              className="p-4 rounded-lg"
              style={{
                backgroundColor: layerColor.dark["bg-layer-basement"],
              }}
            >
              <div className="text-sm text-gray-400 mb-3">
                앱 배경 (basement)
              </div>
              <div
                className="p-4 rounded-lg shadow-sm"
                style={{
                  backgroundColor: layerColor.dark["bg-layer-default"],
                }}
              >
                <div className="text-sm text-gray-400 mb-3">
                  메인 컨텐츠 (default)
                </div>
                <div
                  className="p-3 rounded"
                  style={{
                    backgroundColor: layerColor.dark["bg-layer-fill"],
                  }}
                >
                  <div className="text-sm text-gray-400 mb-2">
                    카드 영역 (fill)
                  </div>
                  <div
                    className="p-3 rounded shadow-md"
                    style={{
                      backgroundColor: layerColor.dark["bg-layer-floating"],
                    }}
                  >
                    <div className="text-sm text-gray-400">
                      플로팅 요소 (floating)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  args: {},
};
