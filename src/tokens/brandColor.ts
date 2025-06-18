import color from "./color";

const brandColor = {
  light: {
    "fg-brand-primary": color.deeppurple["500"],
    "fg-brand-strong": color.deeppurple["800"],
    "bg-brand-primary-default": color.deeppurple["800"],
    "bg-brand-primary-pressed": color.deeppurple["900"],
  },
  dark: {
    "fg-brand-primary": color.deeppurple["500"],
    "fg-brand-strong": color.deeppurple["50"],
    "bg-brand-primary-default": color.deeppurple["800"],
    "bg-brand-primary-pressed": color.deeppurple["700"],
  },
} as const;

export default brandColor;
