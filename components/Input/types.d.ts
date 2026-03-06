import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'negative' | 'positive';
    disabled?: boolean;
    active?: boolean;
    focused?: boolean;
    placeholder?: string;
    value?: string;
    type?: 'text' | 'password';
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    className?: string;
    lang?: 'ko' | 'en';
}
//# sourceMappingURL=types.d.ts.map