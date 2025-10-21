import { default as React } from '../../../node_modules/react';
export interface DropdownOption {
    value: string;
    label: string;
}
export interface DropdownProps {
    type?: "selector" | "combobox";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    active?: boolean;
    focused?: boolean;
    placeholder?: string;
    value?: string;
    options?: DropdownOption[];
    label?: string;
    labelType?: "default" | "required" | "optional";
    description?: string;
    descriptionLeadingIcon?: boolean;
    status?: "default" | "negative" | "positive";
    onChange?: (value: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement | HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}
