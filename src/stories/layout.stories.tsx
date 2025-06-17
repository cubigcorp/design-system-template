import type { Meta, StoryObj } from "@storybook/nextjs";
import "../app/globals.css";
import { radius } from "../tokens/radius";
import { spacing } from "../tokens/spacing";
import { shadow } from "../tokens/shadow";

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

export const Gap: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Spacing - Gap Tokens</h2>
        <p className="text-gray-600 mb-6">
          요소들 사이의 간격을 일관되게 유지하기 위한 gap 토큰입니다.
        </p>
      </div>

      <div className="space-y-12">
        {/* Small Gaps (0-2) */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">작은 간격</h3>
          <div className="space-y-8">
            {Object.entries(spacing.gap)
              .filter(([key]) => parseFloat(key.replace("gap-", "")) <= 2)
              .map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-20 font-medium">{key}</div>
                    <div className="text-sm text-gray-500">{value}</div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 border border-gray-200 rounded-lg">
                    <div className="flex" style={{ gap: value }}>
                      <div className="w-8 h-8 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        1
                      </div>
                      <div className="w-8 h-8 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        2
                      </div>
                      <div className="w-8 h-8 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Medium Gaps (2.5-5) */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">중간 간격</h3>
          <div className="space-y-8">
            {Object.entries(spacing.gap)
              .filter(([key]) => {
                const value = parseFloat(key.replace("gap-", ""));
                return value > 2 && value <= 5;
              })
              .map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-20 font-medium">{key}</div>
                    <div className="text-sm text-gray-500">{value}</div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 border border-gray-200 rounded-lg">
                    <div className="flex" style={{ gap: value }}>
                      <div className="w-10 h-10 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        1
                      </div>
                      <div className="w-10 h-10 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        2
                      </div>
                      <div className="w-10 h-10 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Large Gaps (6-16) */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">큰 간격</h3>
          <div className="space-y-8">
            {Object.entries(spacing.gap)
              .filter(([key]) => parseFloat(key.replace("gap-", "")) > 5)
              .map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="w-20 font-medium">{key}</div>
                    <div className="text-sm text-gray-500">{value}</div>
                  </div>
                  <div className="flex items-center bg-gray-50 p-4 border border-gray-200 rounded-lg">
                    <div className="flex" style={{ gap: value }}>
                      <div className="w-12 h-12 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        1
                      </div>
                      <div className="w-12 h-12 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        2
                      </div>
                      <div className="w-12 h-12 bg-deeppurple-100 border border-deeppurple-200 rounded-md flex items-center justify-center text-sm text-deeppurple-700">
                        3
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">사용 예시</h3>
          <div className="space-y-8">
            {/* Button Group Example */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-600">버튼 그룹</div>
              <div className="flex" style={{ gap: spacing.gap["gap-2"] }}>
                <button className="px-4 py-2 bg-deeppurple-600 text-white rounded-md">
                  저장
                </button>
                <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-md">
                  취소
                </button>
              </div>
            </div>

            {/* Form Fields Example */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-600">폼 필드</div>
              <div
                className="flex flex-col"
                style={{ gap: spacing.gap["gap-4"] }}
              >
                <input
                  type="text"
                  placeholder="이름"
                  className="px-4 py-2 border border-gray-200 rounded-md"
                />
                <input
                  type="email"
                  placeholder="이메일"
                  className="px-4 py-2 border border-gray-200 rounded-md"
                />
              </div>
            </div>

            {/* Card Grid Example */}
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-600">
                카드 그리드
              </div>
              <div
                className="grid grid-cols-3"
                style={{ gap: spacing.gap["gap-6"] }}
              >
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  카드 1
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  카드 2
                </div>
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  카드 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Shadow: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Shadow Tokens</h2>
        <p className="text-gray-600 mb-6">
          요소의 깊이감과 계층 구조를 표현하기 위한 그림자 토큰입니다.
        </p>
      </div>

      <div className="space-y-12">
        {/* Light Mode */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-white border-2 border-gray-300 rounded-full"></span>
            Light Mode
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(shadow.light).map(([key, value]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="font-medium">{key}</div>
                  <div className="text-sm text-gray-500">{value}</div>
                </div>
                <div
                  className="h-24 bg-white rounded-lg p-4 flex items-center justify-center border border-gray-200"
                  style={{ boxShadow: value }}
                >
                  <span className="text-gray-500">Sample Content</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Mode */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-gray-900 rounded-full"></span>
            Dark Mode
          </h3>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-xl"
            style={{ backgroundColor: "#171719" }}
          >
            {Object.entries(shadow.dark).map(([key, value]) => (
              <div key={key} className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="font-medium text-white">{key}</div>
                  <div className="text-sm text-gray-400">{value}</div>
                </div>
                <div
                  className="h-24 bg-gray-900 rounded-lg p-4 flex items-center justify-center border border-gray-700"
                  style={{ boxShadow: value }}
                >
                  <span className="text-gray-400">Sample Content</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Usage Examples */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">사용 예시</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Input Example */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-600">
                Input (shadow-xs)
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="이메일을 입력하세요"
                  className="w-full px-4 py-2 rounded-md border border-gray-200"
                  style={{ boxShadow: shadow.light["shadow-xs"] }}
                />
                <p className="text-sm text-gray-500">
                  입력 필드와 같이 미세한 깊이감이 필요한 요소에 사용
                </p>
              </div>
            </div>

            {/* Dropdown Example */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-600">
                Dropdown (shadow-sm)
              </div>
              <div className="relative">
                <button
                  className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-md flex justify-between items-center"
                  style={{ boxShadow: shadow.light["shadow-sm"] }}
                >
                  <span className="text-gray-900">드롭다운 메뉴</span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md py-1"
                  style={{ boxShadow: shadow.light["shadow-sm"] }}
                >
                  <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer">
                    옵션 1
                  </div>
                  <div className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer">
                    옵션 2
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  드롭다운, 툴팁과 같은 떠있는 요소에 사용
                </p>
              </div>
            </div>

            {/* Card Example */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-600">
                Card (shadow-md)
              </div>
              <div
                className="bg-white rounded-lg border border-gray-200"
                style={{ boxShadow: shadow.light["shadow-md"] }}
              >
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full"></div>
                    <div>
                      <div className="font-medium">사용자 이름</div>
                      <div className="text-sm text-gray-500">2시간 전</div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600">카드 컨텐츠가 들어갑니다.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm">
                      좋아요
                    </button>
                    <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-sm">
                      댓글
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  카드, 피드 아이템과 같이 독립된 컨텐츠를 담는 요소에 사용
                </p>
              </div>
            </div>

            {/* Modal Example */}
            <div className="space-y-3">
              <div className="text-sm font-medium text-gray-600">
                Modal (shadow-lg)
              </div>
              <div
                className="bg-white rounded-lg border border-gray-200"
                style={{ boxShadow: shadow.light["shadow-lg"] }}
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-medium">결제 확인</h4>
                    <button className="text-gray-400 hover:text-gray-500">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">상품 금액</span>
                      <span className="font-medium">50,000원</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">배송비</span>
                      <span className="font-medium">3,000원</span>
                    </div>
                    <div className="h-px bg-gray-100"></div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">총 결제금액</span>
                      <span className="text-lg font-bold text-deeppurple-600">
                        53,000원
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-lg">
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-gray-200 rounded-md">
                      취소
                    </button>
                    <button className="flex-1 px-4 py-2 bg-deeppurple-600 text-white rounded-md">
                      결제하기
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  모달, 다이얼로그와 같이 최상위에 떠있는 요소에 사용
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};
