import type { Meta, StoryObj } from "@storybook/react";
import "../app/globals.css";

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
  "yellow-50": "#f7fee7",
  "yellow-100": "#ecfcca",
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
