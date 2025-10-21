import { default as React } from '../../../node_modules/react';
export type DividerOrientation = "horizontal" | "vertical";
export interface DividerProps {
    orientation?: DividerOrientation;
    thickness?: 1 | 2 | 4 | 6 | 8 | 12;
    className?: string;
    style?: React.CSSProperties;
}
export declare const Divider: React.FC<DividerProps>;
