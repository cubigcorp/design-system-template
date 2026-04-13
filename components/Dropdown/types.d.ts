import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export interface DropdownOption {
    value: string;
    label: string;
    description?: string;
    leadingContent?: React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
    }>;
}
export interface DropdownProps {
    type?: 'selector' | 'combobox' | 'multiselect';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    active?: boolean;
    focused?: boolean;
    placeholder?: string;
    value?: string | string[];
    options?: DropdownOption[];
    label?: string;
    labelType?: 'default' | 'required' | 'optional';
    optionalText?: string;
    description?: string;
    descriptionLeadingIcon?: boolean;
    status?: 'default' | 'negative' | 'positive';
    onChange?: (value: string | string[]) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    showCheckIcon?: boolean;
    lineMode?: 'single' | 'multi';
}
//# sourceMappingURL=types.d.ts.map