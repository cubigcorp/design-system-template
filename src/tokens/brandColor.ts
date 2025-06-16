import color from "./color";

const brandColor = {
  light: {
    "fg-brand-primary": color.deeppurple["800"],
    "bg-brand-primary-default": color.deeppurple["800"],
    "bg-brand-primary-pressed": color.deeppurple["900"],
  },
  dark: {
    "fg-brand-primary": color.deeppurple["800"],
    "bg-brand-primary-default": color.deeppurple["800"],
    "bg-brand-primary-pressed": color.deeppurple["700"],
  },
} as const;

export default brandColor;
