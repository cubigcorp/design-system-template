import { default as React } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    type?: 'default' | 'required' | 'optional';
    optionalText?: string;
    className?: string;
    lang?: 'ko' | 'en';
}
//# sourceMappingURL=types.d.ts.map