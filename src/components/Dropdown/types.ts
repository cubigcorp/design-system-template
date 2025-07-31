import React from "react";

export interface DropdownOption {
    value: string;
    label: string;
}

export interface DropdownProps {
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
    descriptionStatus?: "default" | "error" | "success";
    descriptionLeadingIcon?: boolean;
    onChange?: (value: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    className?: string;
} 