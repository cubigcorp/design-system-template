import { SVGProps } from '../../../node_modules/react';
export type ButtonSize = "small" | "medium" | "large";
export type ButtonState = "default" | "hovered" | "pressed" | "focused";
export type ButtonVariant = "primary" | "secondary" | "tertiary" | "brand" | "positive" | "negative";
export interface ButtonStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    state?: ButtonState;
    disabled?: boolean;
    loading?: boolean;
    radiusKey?: keyof typeof import('../../tokens/radius').radius;
}
export interface ButtonProps extends ButtonStyleProps {
    leadingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
    trailingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    lang?: "ko" | "en";
}
