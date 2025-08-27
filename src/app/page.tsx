// src/app/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Toast, ToastSystem, toast } from "../components";
import { LanguageProvider } from "../i18n/LanguageContext";
import { typography } from "../tokens";

export default function Page() {
  const [lang, setLang] = useState<"ko" | "en">("ko");
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const [toasts, setToasts] = useState<
    Array<{
      id: string;
      variant: "default" | "positive" | "negative" | "cautionary";
      children: string;
      description: string;
    }>
  >([]);

  const handleShowToast = (
    variant: "default" | "positive" | "negative" | "cautionary"
  ) => {
    const newToast = {
      id: `${Date.now()}-${Math.random()}`,
      variant,
      children:
        variant === "positive"
          ? "저장이 완료되었습니다.\n변경한 내용이 정상적으로 반영되었어요."
          : variant === "negative"
          ? "저장에 실패했습니다.\n네트워크 연결을 확인해주세요."
          : variant === "cautionary"
          ? "주의가 필요합니다.\n이 작업은 되돌릴 수 없습니다."
          : "정보가 업데이트되었습니다.\n새로운 기능을 확인해보세요.",
      description:
        variant === "positive"
          ? "1 저장 완료, 0 실패"
          : variant === "negative"
          ? "오류 코드: NET_001"
          : variant === "cautionary"
          ? "계속하시겠습니까?"
          : "더 자세한 내용은 설정에서 확인하세요.",
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const handleCloseToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <LanguageProvider value={lang}>
      <ToastSystem maxToasts={3} placement="bottom-right">
        <main className="min-h-screen p-8 bg-gray-50 space-y-12">
          {/* Lang Toggle */}
          <section className="space-y-2">
            <div className="flex gap-2">
              <button
                onClick={() => setLang("ko")}
                className="px-3 py-1 border rounded"
              >
                lang = ko
              </button>
              <button
                onClick={() => setLang("en")}
                className="px-3 py-1 border rounded"
              >
                lang = en
              </button>
            </div>
            <div className="flex gap-2">
              <TypoBody $lang={lang}>Current: {lang}</TypoBody>
              <TypoBody $lang="ko">Override ko</TypoBody>
              <TypoBody $lang="en">Override en</TypoBody>
            </div>
          </section>
          {/* Toast Test Section */}
          <section className="space-y-4">
            <TypoTitle2 $lang={lang} className="mb-6">
              Toast Component Test
            </TypoTitle2>

            {/* 전역 Toast 시스템 테스트 */}
            <div className="mb-8">
              <TypoHeading2 $lang={lang} className="mb-4">
                🌐 전역 Toast 시스템 (새로운 방식)
              </TypoHeading2>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() =>
                    toast.success(
                      "요청하신 인증번호를 재발송하였습니다. \n 1 저장 완료, 0 실패"
                    )
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Success Toast
                </button>
                <button
                  onClick={() =>
                    toast.error(
                      "저장에 실패했습니다.",
                      "네트워크 연결을 확인해주세요."
                    )
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Error Toast
                </button>
                <button
                  onClick={() =>
                    toast.warning(
                      "주의가 필요합니다.",
                      "이 작업은 되돌릴 수 없습니다."
                    )
                  }
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Warning Toast
                </button>
                <button
                  onClick={() => toast.info("정보가 업데이트되었습니다.")}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Info Toast
                </button>
                <button
                  onClick={() => {
                    toast.success("첫 번째 토스트");
                    setTimeout(() => toast.error("두 번째 토스트"), 500);
                    setTimeout(() => toast.warning("세 번째 토스트"), 1000);
                  }}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
                >
                  연속 토스트 (3개 쌓임)
                </button>
              </div>
            </div>

            {/* 기존 방식 테스트 */}
            <div>
              <TypoHeading2 $lang={lang} className="mb-4">
                🔧 기존 방식 (단일 토스트)
              </TypoHeading2>
              <div className="flex gap-4 flex-wrap">
                <button
                  onClick={() => handleShowToast("positive")}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Positive Toast
                </button>
                <button
                  onClick={() => handleShowToast("negative")}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Negative Toast
                </button>
                <button
                  onClick={() => handleShowToast("cautionary")}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Cautionary Toast
                </button>
                <button
                  onClick={() => handleShowToast("default")}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                  Default Toast
                </button>
              </div>
            </div>
          </section>

          {/* Display Tokens (언어 폰트 확인용) */}
          <section>
            <TypoDisplay $lang={lang} className="mb-2">
              Display1 - Ultimate Data Security
            </TypoDisplay>
            <TypoDisplay $lang={lang} className="mb-2">
              Display2 - No Access, No Risk
            </TypoDisplay>
            <TypoDisplay $lang={lang} className="mb-2">
              Display3 - Secure by Design
            </TypoDisplay>
            <TypoDisplay $lang={lang} className="mb-2">
              Display4 - Trust and Verify
            </TypoDisplay>
            <TypoDisplay $lang={lang} className="mb-2">
              Display5 - Built for Scale
            </TypoDisplay>
          </section>

          {/* Title Tokens (언어 폰트 확인용) */}
          <section>
            <TypoTitle1 $lang={lang} className="mb-2">
              Title1 - Section Header
            </TypoTitle1>
            <TypoTitle2 $lang={lang} className="mb-2">
              Title2 - Subsection Header
            </TypoTitle2>
            <TypoTitle3 $lang={lang} className="mb-2">
              Title3 - Minor Header
            </TypoTitle3>
            <TypoTitle4 $lang={lang} className="mb-2">
              Title4 - Caption Header
            </TypoTitle4>
          </section>

          {/* Heading Tokens (언어 폰트 확인용) */}
          <section>
            <TypoHeading1 $lang={lang} className="mb-2">
              Heading1 - Feature Title
            </TypoHeading1>
            <TypoHeading2 $lang={lang} className="mb-2">
              Heading2 - Feature Subtitle
            </TypoHeading2>
            <TypoHeading3 $lang={lang} className="mb-2">
              Heading3 - Small Title
            </TypoHeading3>
          </section>

          {/* Body Tokens (언어 폰트 확인용) */}
          <section className="space-y-4">
            <TypoBody1 $lang={lang}>
              Body1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer nec odio.
            </TypoBody1>
            <TypoBody2 $lang={lang}>
              Body2: Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            </TypoBody2>
            <TypoBody3 $lang={lang}>
              Body3: Nulla quis sem at nibh elementum imperdiet. Duis sagittis
              ipsum.
            </TypoBody3>
          </section>

          {/* Caption Tokens (언어 폰트 확인용) */}
          <section className="space-y-2">
            <TypoCaption1 $lang={lang} className="block">
              Caption1: Footnote text or annotation.
            </TypoCaption1>
            <TypoCaption2 $lang={lang} className="block">
              Caption2: Secondary footnote or metadata.
            </TypoCaption2>
          </section>

          {/* Color Tokens Test */}
          <section className="space-y-8">
            <h2 className="title2 mb-6">Color System Test</h2>

            {/* Primary Colors */}
            <div className="space-y-4">
              <h3 className="heading2">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded">
                  <div className="caption1">blue-500</div>
                  <div className="body2">#2b7fff</div>
                </div>
                <div className="bg-green-500 text-white p-4 rounded">
                  <div className="caption1">green-500</div>
                  <div className="body2">#00c950</div>
                </div>
                <div className="bg-red-500 text-white p-4 rounded">
                  <div className="caption1">red-500</div>
                  <div className="body2">#fb2c36</div>
                </div>
                <div className="bg-orange-500 text-white p-4 rounded">
                  <div className="caption1">orange-500</div>
                  <div className="body2">#ff6900</div>
                </div>
              </div>
            </div>

            {/* Gray Scale */}
            <div className="space-y-4">
              <h3 className="heading2">Gray Scale</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                <div className="bg-gray-50 border p-2 rounded text-center">
                  <div className="caption2 text-gray-900">50</div>
                </div>
                <div className="bg-gray-100 p-2 rounded text-center">
                  <div className="caption2 text-gray-900">100</div>
                </div>
                <div className="bg-gray-200 p-2 rounded text-center">
                  <div className="caption2 text-gray-900">200</div>
                </div>
                <div className="bg-gray-300 p-2 rounded text-center">
                  <div className="caption2 text-gray-900">300</div>
                </div>
                <div className="bg-gray-400 p-2 rounded text-center">
                  <div className="caption2 text-white">400</div>
                </div>
                <div className="bg-gray-500 p-2 rounded text-center">
                  <div className="caption2 text-white">500</div>
                </div>
                <div className="bg-gray-600 p-2 rounded text-center">
                  <div className="caption2 text-white">600</div>
                </div>
                <div className="bg-gray-700 p-2 rounded text-center">
                  <div className="caption2 text-white">700</div>
                </div>
                <div className="bg-gray-800 p-2 rounded text-center">
                  <div className="caption2 text-white">800</div>
                </div>
                <div className="bg-gray-900 p-2 rounded text-center">
                  <div className="caption2 text-white">900</div>
                </div>
              </div>
            </div>

            {/* Text Colors */}
            <div className="space-y-4">
              <h3 className="heading2">Text Colors</h3>
              <div className="space-y-2">
                <p className="body2 text-blue-600">
                  파란색 텍스트 (text-blue-600)
                </p>
                <p className="body2 text-green-600">
                  초록색 텍스트 (text-green-600)
                </p>
                <p className="body2 text-red-600">
                  빨간색 텍스트 (text-red-600)
                </p>
                <p className="body2 text-gray-600">
                  회색 텍스트 (text-gray-600)
                </p>
                <p className="body2 text-common-0">
                  검은색 텍스트 (text-common-0)
                </p>
              </div>
            </div>

            {/* Background + Text Combinations */}
            <div className="space-y-4">
              <h3 className="heading2">Background + Text Combinations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 text-blue-900 p-4 rounded border border-blue-200">
                  <div className="body2 font-600">Success Message</div>
                  <div className="caption1">bg-blue-50 + text-blue-900</div>
                </div>
                <div className="bg-green-50 text-green-900 p-4 rounded border border-green-200">
                  <div className="body2 font-600">Success Message</div>
                  <div className="caption1">bg-green-50 + text-green-900</div>
                </div>
                <div className="bg-red-50 text-red-900 p-4 rounded border border-red-200">
                  <div className="body2 font-600">Error Message</div>
                  <div className="caption1">bg-red-50 + text-red-900</div>
                </div>
                <div className="bg-yellow-50 text-yellow-900 p-4 rounded border border-yellow-200">
                  <div className="body2 font-600">Warning Message</div>
                  <div className="caption1">bg-yellow-50 + text-yellow-900</div>
                </div>
              </div>
            </div>

            {/* Common Colors */}
            <div className="space-y-4">
              <h3 className="heading2">Common Colors</h3>
              <div className="flex gap-4">
                <div className="bg-common-0 text-common-100 p-4 rounded">
                  <div className="caption1">common-0</div>
                  <div className="body2">#000000</div>
                </div>
                <div className="bg-common-100 text-common-0 p-4 rounded border">
                  <div className="caption1">common-100</div>
                  <div className="body2">#ffffff</div>
                </div>
                <div className="bg-common-dimmer text-common-100 p-4 rounded">
                  <div className="caption1">common-dimmer</div>
                  <div className="body2">#17171980</div>
                </div>
              </div>
            </div>
          </section>

          {/* Toast Component */}
          <div
            style={{
              position: "fixed",
              bottom: "40px",
              right: "40px",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            {toasts
              .slice(-3)
              .reverse()
              .map((toast, index) => (
                <Toast
                  key={toast.id}
                  index={index}
                  variant={toast.variant}
                  showDivider={true}
                  autoClose={true}
                  autoCloseDelay={3000}
                  onClose={() => handleCloseToast(toast.id)}
                  description={toast.description}
                >
                  {toast.children}
                </Toast>
              ))}
          </div>
        </main>
      </ToastSystem>
    </LanguageProvider>
  );
}

const TypoDisplay = styled.h1<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "display2", "bold")}
`;

const TypoBody = styled.p<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "body2", "regular")}
`;

const TypoTitle1 = styled.h2<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "title1", "semibold")}
`;
const TypoTitle2 = styled.h2<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "title2", "semibold")}
`;
const TypoTitle3 = styled.h2<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "title3", "semibold")}
`;
const TypoTitle4 = styled.h2<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "title4", "semibold")}
`;

const TypoHeading1 = styled.h3<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "heading1", "medium")}
`;
const TypoHeading2 = styled.h3<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "heading2", "medium")}
`;
const TypoHeading3 = styled.h3<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "heading3", "medium")}
`;

const TypoBody1 = styled.p<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "body1", "regular")}
`;
const TypoBody2 = styled.p<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "body2", "regular")}
`;
const TypoBody3 = styled.p<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "body3", "regular")}
`;

const TypoCaption1 = styled.span<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "caption1", "regular")}
`;
const TypoCaption2 = styled.span<{ $lang: "ko" | "en" }>`
  ${({ $lang }) => typography($lang, "caption2", "regular")}
`;
