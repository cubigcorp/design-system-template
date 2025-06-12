import plugin from "tailwindcss/plugin";
import fontSize from "./src/tokens/fontSize";
import lineHeight from "./src/tokens/lineHeight";
import fontWeight from "./src/tokens/fontWeight";
import letterSpacing from "./src/tokens/letterSpacing";
import fontFamily from "./src/tokens/fontFamily";

type FontSizeToken = typeof fontSize;
type LineHeightToken = typeof lineHeight;

type TokenGroups = {
  fontSize: FontSizeToken;
  lineHeight: LineHeightToken;
  fontWeight: typeof fontWeight;
  letterSpacing: typeof letterSpacing;
  fontFamily: typeof fontFamily;
};

const tokens: TokenGroups = {
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  fontFamily,
};

const tailwindConfig = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // 모든 토큰 그룹에 대해 var(--groupName-key) 형식으로 매핑
      ...Object.fromEntries(
        Object.entries(tokens).map(([groupName, groupTokens]) => [
          groupName,
          Object.fromEntries(
            Object.entries(groupTokens as Record<string, unknown>).map(
              ([key, raw]) => [
                key,
                typeof raw === "string"
                  ? raw // static token
                  : `var(--${groupName}-${key})`, // responsive token
              ]
            )
          ),
        ])
      ),
      // 반응형 브레이크포인트 정의
      screens: {
        sm: "375px", // mobile 이하
        md: "768px", // tablet 이하
        lg: "1920px", // desktop 이하
      },
    },
  },
  plugins: [
    // 토큰 기반 CSS 변수를 :root와 미디어쿼리에 추가하는 플러그인
    plugin(({ addBase }) => {
      const desktopVars: Record<string, string> = {};
      const tabletVars: Record<string, string> = {};
      const mobileVars: Record<string, string> = {};

      const groupNames = Object.keys(tokens) as Array<keyof TokenGroups>;
      for (const groupName of groupNames) {
        const groupTokens = tokens[groupName];
        for (const key in groupTokens) {
          const raw = (groupTokens as Record<string, unknown>)[key];
          const varName = `--${groupName}-${key}`;

          if (typeof raw === "string") {
            desktopVars[varName] = raw;
          } else {
            const [desktopValue, opts] = raw as [
              string,
              Record<string, string[]>
            ];
            desktopVars[varName] = desktopValue;

            const tabletVal = opts["@media (max-width: 768px)"]?.[0];
            if (tabletVal) tabletVars[varName] = tabletVal;

            const mobileVal = opts["@media (max-width: 375px)"]?.[0];
            if (mobileVal) mobileVars[varName] = mobileVal;
          }
        }
      }

      addBase({
        ":root": desktopVars,
        "@media (max-width: 768px)": { ":root": tabletVars },
        "@media (max-width: 375px)": { ":root": mobileVars },
      });
    }),
  ],
};

export default tailwindConfig;
