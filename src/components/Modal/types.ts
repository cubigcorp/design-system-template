import { HTMLAttributes, ReactNode } from "react";

export type ModalSize = "x-small" | "small" | "medium" | "large";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  size?: ModalSize;
  open?: boolean;
  onClose?: () => void;
  title?: string;
  showCloseButton?: boolean;
  actions?: ReactNode;
  children?: ReactNode;
  style?: React.CSSProperties;
}
