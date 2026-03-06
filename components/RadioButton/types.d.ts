import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export type RadioButtonState = 'checked' | 'unchecked';
export interface RadioButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    state?: RadioButtonState;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
    style?: React.CSSProperties;
}
//# sourceMappingURL=types.d.ts.map