import { default as React } from '../../../node_modules/react';
export interface LNBItemGroupProps {
    title?: string;
    children?: React.ReactNode;
    lang?: "ko" | "en";
    className?: string;
    style?: React.CSSProperties;
}
export declare const LNBItemGroup: React.FC<LNBItemGroupProps>;
