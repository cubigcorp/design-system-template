import { default as React } from '../../../node_modules/react';
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    width?: string | number;
    showCheckIcon?: boolean;
}
