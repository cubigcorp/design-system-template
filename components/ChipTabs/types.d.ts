import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.1.2/node_modules/react';
export interface ChipTabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
    defaultValue?: number;
    value?: number;
    onChange?: (index: number) => void;
    children: ReactNode;
}
//# sourceMappingURL=types.d.ts.map