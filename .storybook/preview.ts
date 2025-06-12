import "../src/app/globals.css";

// 2) 토큰별 @apply 유틸 CSS
import "../src/styles/display.css";
import "../src/styles/title.css";
import "../src/styles/heading.css";
import "../src/styles/body.css";
import "../src/styles/caption.css";

// Storybook UI 설정
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};
