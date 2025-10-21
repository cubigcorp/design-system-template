import { default as React } from '../../../node_modules/react';
export declare const Searchfield: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    focused?: boolean;
    style?: React.CSSProperties;
    lang?: "ko" | "en";
} & React.RefAttributes<HTMLInputElement>>;
