import { SVGProps } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { radius } from '../../tokens/radius';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRadius = 'small' | 'medium' | 'large';
export declare const radiusMap: Record<ButtonRadius, keyof typeof radius>;
export type ButtonState = 'default' | 'hovered' | 'pressed' | 'focused';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'brand' | 'positive' | 'negative';
export interface ButtonStyleProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    radius?: ButtonRadius;
    state?: ButtonState;
    disabled?: boolean;
    loading?: boolean;
}
export interface ButtonProps extends ButtonStyleProps {
    leadingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
    trailingIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
    label?: string;
    children?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    lang?: 'ko' | 'en';
}
//# sourceMappingURL=types.d.ts.map