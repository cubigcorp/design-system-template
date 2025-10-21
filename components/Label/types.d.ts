import { default as React } from '../../../node_modules/react';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    type?: "default" | "required" | "optional";
    className?: string;
    lang?: "ko" | "en";
}
