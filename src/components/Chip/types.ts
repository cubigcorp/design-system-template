export type ChipType = "outline" | "solid";
export type ChipSize = "x-small" | "small" | "medium" | "large";
export type ChipState = "default" | "hovered" | "pressed" | "focused";

export interface ChipProps {
  type?: ChipType;
  size?: ChipSize;
  state?: ChipState;
  disabled?: boolean;
  active?: boolean;
  text: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface ChipStyleProps {
  type: ChipType;
  size: ChipSize;
  state: ChipState;
  disabled: boolean;
  active: boolean;
}
