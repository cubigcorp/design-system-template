import { HTMLAttributes } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export type CheckboxVariant = 'primary' | 'secondary';
export type CheckboxState = 'checked' | 'unchecked';
export interface CheckboxProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    variant?: CheckboxVariant;
    state?: CheckboxState;
    disabled?: boolean;
    onChange?: (checked: boolean) => void;
}
//# sourceMappingURL=types.d.ts.map