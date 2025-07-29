import { HTMLAttributes } from "react";

export type CheckboxVariant = "primary" | "secondary";
export type CheckboxState = "checked" | "unchecked" | "indeterminate";

export interface CheckboxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** 체크박스의 변형 (primary/secondary) */
  variant?: CheckboxVariant;
  /** 체크박스의 상태 (checked/unchecked/indeterminate) */
  state?: CheckboxState;
  /** 비활성화 여부 */
  disabled?: boolean;
  /** 활성/포커스 상태 */
  active?: boolean;
  /** 체크박스 클릭 핸들러 */
  onChange?: (checked: boolean) => void;
}
