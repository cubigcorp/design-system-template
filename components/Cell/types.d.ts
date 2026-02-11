import { default as React } from '../../../../../node_modules/.pnpm/react@19.1.2/node_modules/react';
export interface CellProps {
    disable?: boolean;
    active?: boolean;
    leadingContent?: React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
    }>;
    text?: string;
    description?: string;
    trailingIcon?: React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
    }>;
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    showCheckIcon?: boolean;
}
//# sourceMappingURL=types.d.ts.map