import { default as React } from '../../../node_modules/react';
export interface LNBProps {
    children?: React.ReactNode;
    className?: string;
    lang?: "ko" | "en";
    style?: React.CSSProperties;
    bottom?: React.ReactNode;
    title?: string;
}
export declare const LNB: React.FC<LNBProps>;
