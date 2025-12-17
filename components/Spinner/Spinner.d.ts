type SpinnerSize = "small" | "medium" | "large" | "x-large";
export interface SpinnerProps {
    size?: SpinnerSize;
    color?: string;
    className?: string;
}
export declare const Spinner: {
    ({ size, color: spinnerColor, className, }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
