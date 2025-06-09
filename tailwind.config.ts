import {
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  fontFamily,
} from "./src/tokens";

const config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize,
      lineHeight,
      fontWeight,
      letterSpacing,
      fontFamily,
    },
  },
  plugins: [],
};

export default config;
