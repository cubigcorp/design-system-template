import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import fontFamily from "./fontFamily";
import letterSpacing from "./letterSpacing";
import lineHeight from "./lineHeight";

const fontWeights = {
  regular: fontWeight[400],
  medium: fontWeight[500],
  semibold: fontWeight[600],
  bold: fontWeight[700],
} as const;

const fontFamilies = {
  en: fontFamily.en,
  ko: fontFamily.ko,
  sans: fontFamily.sans,
} as const;

const typographyStyles = {
  display1: {
    fontSize: fontSize.t13[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t13,
    weights: fontWeights,
    families: fontFamilies,
  },
  display2: {
    fontSize: fontSize.t14[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t14,
    weights: fontWeights,
    families: fontFamilies,
  },
  display3: {
    fontSize: fontSize.t15[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t15,
    weights: fontWeights,
    families: fontFamilies,
  },
  display4: {
    fontSize: fontSize.t16[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t16,
    weights: fontWeights,
    families: fontFamilies,
  },
  display5: {
    fontSize: fontSize.t17[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t17,
    weights: fontWeights,
    families: fontFamilies,
  },

  title1: {
    fontSize: fontSize.t9[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t9,
    weights: fontWeights,
    families: fontFamilies,
  },
  title2: {
    fontSize: fontSize.t10[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t10,
    weights: fontWeights,
    families: fontFamilies,
  },
  title3: {
    fontSize: fontSize.t11[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t11,
    weights: fontWeights,
    families: fontFamilies,
  },
  title4: {
    fontSize: fontSize.t12[0],
    letterSpacing: letterSpacing.lg,
    lineHeight: lineHeight.t12,
    weights: fontWeights,
    families: fontFamilies,
  },

  heading1: {
    fontSize: fontSize.t6[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t6,
    weights: fontWeights,
    families: fontFamilies,
  },
  heading2: {
    fontSize: fontSize.t7[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t7,
    weights: fontWeights,
    families: fontFamilies,
  },
  heading3: {
    fontSize: fontSize.t8[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t8,
    weights: fontWeights,
    families: fontFamilies,
  },

  body1: {
    fontSize: fontSize.t3[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t3,
    weights: fontWeights,
    families: fontFamilies,
  },
  body2: {
    fontSize: fontSize.t4[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t4,
    weights: fontWeights,
    families: fontFamilies,
  },
  body3: {
    fontSize: fontSize.t5[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t5,
    weights: fontWeights,
    families: fontFamilies,
  },

  caption1: {
    fontSize: fontSize.t1[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t1,
    weights: fontWeights,
    families: fontFamilies,
  },
  caption2: {
    fontSize: fontSize.t2[0],
    letterSpacing: letterSpacing.md,
    lineHeight: lineHeight.t2,
    weights: fontWeights,
    families: fontFamilies,
  },
} as const;

// 간단한 사용을 위한 CSS 문자열 생성 함수들
const typography = (
  family: "en" | "ko" | "sans" = "ko",
  variant: keyof typeof typographyStyles,
  weight: "regular" | "medium" | "semibold" | "bold" = "medium"
) => {
  const style = typographyStyles[variant];
  const fontWeight =
    weight === "medium" &&
    (variant.includes("body") || variant.includes("caption"))
      ? "regular"
      : weight;

  const fontFamily =
    family === "en"
      ? style.families.en
      : family === "ko"
      ? style.families.ko
      : style.families.sans;

  return `
    font-size: ${style.fontSize};
    font-weight: ${style.weights[fontWeight]};
    font-family: ${fontFamily};
    letter-spacing: ${style.letterSpacing};
    line-height: ${style.lineHeight};
  `;
};

// 각 스타일별로 간단한 CSS 문자열 제공 (기본값: ko, medium)
const typographyCSS = {
  display1: typography("ko", "display1"),
  display2: typography("ko", "display2"),
  display3: typography("ko", "display3"),
  display4: typography("ko", "display4"),
  display5: typography("ko", "display5"),
  title1: typography("ko", "title1"),
  title2: typography("ko", "title2"),
  title3: typography("ko", "title3"),
  title4: typography("ko", "title4"),
  heading1: typography("ko", "heading1"),
  heading2: typography("ko", "heading2"),
  heading3: typography("ko", "heading3"),
  body1: typography("ko", "body1"),
  body2: typography("ko", "body2"),
  body3: typography("ko", "body3"),
  caption1: typography("ko", "caption1"),
  caption2: typography("ko", "caption2"),
} as const;

export default typographyStyles;
export { typographyCSS, typography };
