type LoadingIndicatorType = 'spinner' | 'dots';
type LoadingIndicatorSize = 'small' | 'medium' | 'large' | 'x-large';
export interface LoadingIndicatorProps {
    type?: LoadingIndicatorType;
    size?: LoadingIndicatorSize;
    color?: string;
    className?: string;
}
export declare const LoadingIndicator: {
    ({ type, size, color: indicatorColor, className, }: LoadingIndicatorProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
//# sourceMappingURL=LoadingIndicator.d.ts.map