import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
/**
 * `blue` 는 목록에서 여러 항목을 고르는 자리(예: 리포트 허브 상태 필터)에 쓴다.
 * 고른 것이 한눈에 드러나야 해서 강조색으로 채운다.
 */
export type CheckboxVariant = 'primary' | 'secondary' | 'blue';
export type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';
export interface CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    variant?: CheckboxVariant;
    state?: CheckboxState;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}
//# sourceMappingURL=types.d.ts.map