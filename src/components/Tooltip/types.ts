import { ReactNode } from "react";

export type TooltipVariant = "primary" | "secondary";
export type TooltipPlacement =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right"
  | "left"
  | "right";

export interface TooltipProps {
  children: ReactNode;
  text: string;
  hotkey?: string;
  variant?: TooltipVariant;
  placement?: TooltipPlacement;
  offset?: number;
  className?: string;
}
