import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export interface LNBItemProfileProps {
    name: string;
    avatarSrc?: string;
    avatarType?: 'default' | 'custom' | 'initial';
    onClick?: () => void;
    className?: string;
    lang?: 'ko' | 'en';
    style?: React.CSSProperties;
    trailingIcon?: React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
    }>;
}
export declare const LNBItemProfile: React.FC<LNBItemProfileProps>;
//# sourceMappingURL=ItemProfile.d.ts.map