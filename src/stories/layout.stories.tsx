import type { Meta, StoryObj } from "@storybook/react";
import "../app/globals.css";
import { radius } from "../tokens/radius";

const RadiusDemo = () => {
  return null;
};

const meta: Meta<typeof RadiusDemo> = {
  title: "Design System/Layout",
  component: RadiusDemo,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "디자인 시스템의 레이아웃 관련 토큰들을 보여줍니다.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadiusDemo>;

export const Radius: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Radius Tokens</h2>
        <p className="text-gray-600 mb-6">
          일반적으로 사용되는 Radius 토큰 예시입니다.
        </p>
      </div>

      <div className="space-y-8">
        {/* rounded-1: 라벨, 태그, 아이콘 버튼 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="font-medium">rounded-1</div>
            <div className="text-sm text-gray-500">4px</div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="px-2 py-1 bg-gray-200 border border-gray-300 text-xs"
              style={{ borderRadius: radius["rounded-1"] }}
            >
              라벨
            </div>
            <div
              className="px-2 py-1 bg-deeppurple-50 border border-deeppurple-100 text-deeppurple-700 text-xs"
              style={{ borderRadius: radius["rounded-1"] }}
            >
              태그
            </div>
            <button
              className="w-8 h-8 bg-gray-50 border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
              style={{ borderRadius: radius["rounded-1"] }}
            >
              <span className="text-lg text-gray-600">+</span>
            </button>
          </div>
        </div>

        {/* rounded-2: 버튼, 중첩된 컴포넌트 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="font-medium">rounded-2</div>
            <div className="text-sm text-gray-500">8px</div>
          </div>
          <div className="flex gap-4 items-center">
            <button
              className="px-4 py-2 bg-deeppurple-600 text-white hover:bg-deeppurple-700 transition-colors"
              style={{ borderRadius: radius["rounded-2"] }}
            >
              기본 버튼
            </button>
            <button
              className="px-4 py-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
              style={{ borderRadius: radius["rounded-2"] }}
            >
              보조 버튼
            </button>
          </div>
        </div>

        {/* rounded-3: 카드, 스낵바, 배너 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="font-medium">rounded-3</div>
            <div className="text-sm text-gray-500">12px (Default)</div>
          </div>
          <div className="flex gap-4 items-start">
            <div
              className="p-4 bg-white border-2 border-gray-200 w-64 shadow-sm"
              style={{ borderRadius: radius["rounded-3"] }}
            >
              <h3 className="font-medium mb-2">카드 제목</h3>
              <p className="text-sm text-gray-600">카드 내용이 들어갑니다.</p>
            </div>
            <div
              className="p-4 bg-gray-900 text-white shadow-lg"
              style={{ borderRadius: radius["rounded-3"] }}
            >
              스낵바 메시지
            </div>
          </div>
        </div>

        {/* rounded-4: 시트, 다이얼로그 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="font-medium">rounded-4</div>
            <div className="text-sm text-gray-500">16px</div>
          </div>
          <div className="flex gap-4 items-start">
            <div
              className="p-6 bg-white border-2 border-gray-200 w-80 shadow-lg"
              style={{ borderRadius: radius["rounded-4"] }}
            >
              <h3 className="font-medium mb-4">다이얼로그 제목</h3>
              <p className="text-sm text-gray-600 mb-4">
                다이얼로그 내용이 들어갑니다.
              </p>
              <div className="flex gap-2">
                <button
                  className="px-4 py-2 bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors"
                  style={{ borderRadius: radius["rounded-2"] }}
                >
                  취소
                </button>
                <button
                  className="px-4 py-2 bg-deeppurple-600 text-white hover:bg-deeppurple-700 transition-colors"
                  style={{ borderRadius: radius["rounded-2"] }}
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* rounded-5: 콘 카드, 빈 상태 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="font-medium">rounded-5</div>
            <div className="text-sm text-gray-500">20px</div>
          </div>
          <div className="flex gap-4 items-start">
            <div
              className="p-8 bg-gray-50 border-2 border-dashed border-gray-200 w-80 flex flex-col items-center justify-center text-center"
              style={{ borderRadius: radius["rounded-5"] }}
            >
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-400 text-xl">+</span>
              </div>
              <h3 className="font-medium mb-2">빈 상태</h3>
              <p className="text-sm text-gray-600">데이터가 없습니다.</p>
            </div>
          </div>
        </div>

        {/* rounded-full: 원형 */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="font-medium">rounded-full</div>
            <div className="text-sm text-gray-500">9999px</div>
          </div>
          <div className="flex gap-4 items-center">
            <div
              className="w-12 h-12 bg-deeppurple-100 border-2 border-deeppurple-200 flex items-center justify-center text-deeppurple-700 font-medium shadow-sm"
              style={{ borderRadius: radius["rounded-full"] }}
            >
              IN
            </div>
            <div
              className="h-8 px-4 bg-gray-50 border border-gray-200 flex items-center shadow-sm hover:bg-gray-100 transition-colors cursor-pointer"
              style={{ borderRadius: radius["rounded-full"] }}
            >
              완전한 원형 버튼
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
