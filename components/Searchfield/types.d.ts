import { default as React } from '../../../../../node_modules/.pnpm/react@19.1.2/node_modules/react';
export type SearchfieldSize = 'small' | 'medium' | 'large';
export interface SearchfieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    size?: SearchfieldSize;
    disabled?: boolean;
    active?: boolean;
    focused?: boolean;
    placeholder?: string;
    style?: React.CSSProperties;
    lang?: 'ko' | 'en';
}
//# sourceMappingURL=types.d.ts.map