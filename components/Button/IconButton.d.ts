import { SVGProps, default as React } from '../../../node_modules/react';
export type IconButtonSize = "small" | "medium" | "large";
export type IconButtonState = "default" | "hovered" | "pressed" | "focused";
export type IconButtonType = "solid" | "outline";
export type IconButtonVariant = "primary" | "secondary" | "brand" | "positive" | "negative";
export interface IconButtonStyleProps {
    type?: IconButtonType;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    state?: IconButtonState;
    disabled?: boolean;
    loading?: boolean;
    /** radius token key such as "rounded-2", "rounded-3", "rounded-full" */
    radiusKey?: keyof typeof import('../../tokens/radius').radius;
}
export interface IconButtonProps extends IconButtonStyleProps {
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    className?: string;
    lang?: "ko" | "en";
}
export declare const IconButton: ({ type, variant, size, state, disabled, loading, icon, onClick, className, radiusKey, lang, }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
