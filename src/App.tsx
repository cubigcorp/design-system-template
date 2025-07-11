import React from "react";
import "./App.css";
import {
  SolidButton,
  OutlineButton,
  TextButton,
  Badge,
  Chip,
  color,
  spacing,
  fontSize,
} from "@cubig/design-system";

function App() {
  return (
    <div className="App" style={{ padding: spacing.lg }}>
      <header style={{ marginBottom: spacing.xl }}>
        <h1
          style={{
            fontSize: fontSize.heading.large,
            color: color.primary?.[900] || "#1a1a1a",
            marginBottom: spacing.md,
          }}
        >
          🎨 Cubig Design System 테스트
        </h1>
        <p
          style={{
            fontSize: fontSize.body.medium,
            color: color.gray?.[600] || "#666666",
          }}
        >
          npm 패키지로 설치된 디자인 시스템 컴포넌트들을 테스트해보세요!
        </p>
      </header>

      <main>
        {/* Button 섹션 */}
        <section style={{ marginBottom: spacing.xl }}>
          <h2
            style={{
              fontSize: fontSize.heading.medium,
              marginBottom: spacing.md,
              color: color.gray?.[800] || "#333333",
            }}
          >
            Button 컴포넌트
          </h2>
          <div
            style={{
              display: "flex",
              gap: spacing.md,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <SolidButton variant="primary" size="small">
              Small Primary
            </SolidButton>
            <SolidButton variant="primary" size="medium">
              Medium Primary
            </SolidButton>
            <SolidButton variant="primary" size="large">
              Large Primary
            </SolidButton>
            <OutlineButton variant="secondary" size="medium">
              Outline Button
            </OutlineButton>
            <TextButton size="medium">Text Button</TextButton>
          </div>
        </section>

        {/* Badge 섹션 */}
        <section style={{ marginBottom: spacing.xl }}>
          <h2
            style={{
              fontSize: fontSize.heading.medium,
              marginBottom: spacing.md,
              color: color.gray?.[800] || "#333333",
            }}
          >
            Badge 컴포넌트
          </h2>
          <div
            style={{
              display: "flex",
              gap: spacing.md,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Badge type="positive" size="small">
              성공
            </Badge>
            <Badge type="negative" size="medium">
              오류
            </Badge>
            <Badge type="cautionary" size="large">
              경고
            </Badge>
            <Badge type="info" size="medium">
              정보
            </Badge>
          </div>
        </section>

        {/* Chip 섹션 */}
        <section style={{ marginBottom: spacing.xl }}>
          <h2
            style={{
              fontSize: fontSize.heading.medium,
              marginBottom: spacing.md,
              color: color.gray?.[800] || "#333333",
            }}
          >
            Chip 컴포넌트
          </h2>
          <div
            style={{
              display: "flex",
              gap: spacing.md,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <Chip type="default" size="small" state="default">
              기본 칩
            </Chip>
            <Chip type="selected" size="medium" state="active">
              선택된 칩
            </Chip>
            <Chip type="default" size="large" state="disabled">
              비활성 칩
            </Chip>
          </div>
        </section>

        {/* 디자인 토큰 테스트 */}
        <section style={{ marginBottom: spacing.xl }}>
          <h2
            style={{
              fontSize: fontSize.heading.medium,
              marginBottom: spacing.md,
              color: color.gray?.[800] || "#333333",
            }}
          >
            디자인 토큰 테스트
          </h2>
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: color.primary?.[50] || "#f8f9fa",
              borderRadius: "8px",
              border: `1px solid ${color.primary?.[200] || "#e9ecef"}`,
            }}
          >
            <p
              style={{
                fontSize: fontSize.body.medium,
                color: color.primary?.[900] || "#1a1a1a",
                marginBottom: spacing.sm,
              }}
            >
              ✅ 색상 토큰 적용됨
            </p>
            <p
              style={{
                fontSize: fontSize.body.small,
                color: color.gray?.[600] || "#666666",
              }}
            >
              ✅ 간격 토큰 적용됨 (padding: {spacing.lg})
            </p>
          </div>
        </section>

        {/* 조합 예제 */}
        <section>
          <h2
            style={{
              fontSize: fontSize.heading.medium,
              marginBottom: spacing.md,
              color: color.gray?.[800] || "#333333",
            }}
          >
            컴포넌트 조합 예제
          </h2>
          <div
            style={{
              padding: spacing.lg,
              backgroundColor: color.gray?.[50] || "#f8f9fa",
              borderRadius: "12px",
              border: `1px solid ${color.gray?.[200] || "#e9ecef"}`,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: spacing.md,
              }}
            >
              <h3
                style={{
                  fontSize: fontSize.heading.small,
                  color: color.gray?.[800] || "#333333",
                  margin: 0,
                }}
              >
                상품 카드 예제
              </h3>
              <Badge type="positive" size="small">
                재고 있음
              </Badge>
            </div>

            <div style={{ marginBottom: spacing.md }}>
              <Chip type="default" size="small" state="default">
                카테고리
              </Chip>
              <span style={{ marginLeft: spacing.sm }}>
                <Chip type="selected" size="small" state="active">
                  선택됨
                </Chip>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                gap: spacing.sm,
                justifyContent: "flex-end",
              }}
            >
              <OutlineButton variant="secondary" size="medium">
                위시리스트
              </OutlineButton>
              <SolidButton variant="primary" size="medium">
                구매하기
              </SolidButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
