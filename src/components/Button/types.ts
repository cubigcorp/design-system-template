import { SVGProps } from "react";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonState = "default" | "hovered" | "pressed" | "focused";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "brand"
  | "positive"
  | "negative";

export interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  disabled?: boolean;
  loading?: boolean;
}

export interface ButtonProps extends ButtonStyleProps {
  leadingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  trailingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
  className?: string;
}
