import { ReactNode } from "react";

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
  iconOnly?: boolean;
}

export interface ButtonProps extends ButtonStyleProps {
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}
