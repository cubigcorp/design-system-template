import { SVGProps, default as React } from '../../../../../node_modules/.pnpm/react@19.1.2/node_modules/react';
export type IconButtonSize = 'small' | 'medium' | 'large';
export type IconButtonRadius = 'small' | 'medium' | 'large';
export type IconButtonState = 'default' | 'hovered' | 'pressed' | 'focused';
export type IconButtonType = 'solid' | 'outline';
export type IconButtonVariant = 'primary' | 'secondary' | 'brand' | 'positive' | 'negative';
export interface IconButtonProps {
    type?: IconButtonType;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
    radius?: IconButtonRadius;
    state?: IconButtonState;
    disabled?: boolean;
    loading?: boolean;
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
    onClick?: () => void;
    className?: string;
    lang?: 'ko' | 'en';
}
export declare const IconButton: ({ type, variant, size, radius, state, disabled, loading, icon, onClick, className, lang, }: IconButtonProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=IconButton.d.ts.map