import { default as React } from '../../../node_modules/react';
interface LNBContextValue {
    iconOnly: boolean;
}
export declare const useLNBContext: () => LNBContextValue;
export interface LNBProps {
    children?: React.ReactNode;
    className?: string;
    lang?: "ko" | "en";
    style?: React.CSSProperties;
    bottom?: React.ReactNode;
    title?: string;
    iconOnly?: boolean;
}
export declare const LNB: React.FC<LNBProps>;
export {};
