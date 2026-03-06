import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export type LNBItemVariant = 'default' | 'hovered' | 'pressed' | 'selected';
export interface LNBItemProps {
    value: string;
    selected?: boolean;
    disabled?: boolean;
    leadingIcon?: React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
    }>;
    iconOnly?: boolean;
    onClick?: () => void;
    className?: string;
    lang?: 'ko' | 'en';
    style?: React.CSSProperties;
}
export declare const LNBItem: React.FC<LNBItemProps>;
//# sourceMappingURL=Item.d.ts.map