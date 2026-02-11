import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.1.2/node_modules/react';
export interface TabItemProps extends HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    disabled?: boolean;
    children: ReactNode;
}
export interface TabProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    defaultValue?: number;
    value?: number;
    onChange?: (index: number) => void;
    children: ReactNode;
    showDivider?: boolean;
}
//# sourceMappingURL=types.d.ts.map