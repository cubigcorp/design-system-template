export type BadgeVariant =
  | "primary"
  | "secondary"
  | "brand"
  | "positive"
  | "negative";
export type BadgeType = "outline" | "solid" | "strong";
export type BadgeSize = "small" | "medium" | "large";

export interface BadgeProps {
  variant?: BadgeVariant;
  type?: BadgeType;
  size?: BadgeSize;
  text: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  className?: string;
}

export interface BadgeStyleProps {
  variant: BadgeVariant;
  type: BadgeType;
  size: BadgeSize;
}
