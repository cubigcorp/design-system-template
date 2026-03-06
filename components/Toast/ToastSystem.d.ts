import { default as React, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
import { ToastPlacement, ToastVariant } from './types';
interface ToastItem {
    id: string;
    message: string;
    description?: string;
    variant: ToastVariant;
    placement?: ToastPlacement;
    autoClose?: boolean;
    autoCloseDelay?: number;
    showDivider?: boolean;
}
interface ToastSystemProps {
    children: ReactNode;
    maxToasts?: number;
    placement?: ToastPlacement;
    offset?: number;
}
export declare const ToastSystem: React.FC<ToastSystemProps>;
export declare const toast: {
    show: (props: Omit<ToastItem, "id">) => void;
    success: (message: string, description?: string) => void;
    error: (message: string, description?: string) => void;
    warning: (message: string, description?: string) => void;
    info: (message: string, description?: string) => void;
};
export {};
//# sourceMappingURL=ToastSystem.d.ts.map