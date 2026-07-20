import { ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export type TooltipVariant = 'primary' | 'secondary';
export type TooltipPlacement = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left' | 'left-top' | 'left-center' | 'left-bottom' | 'right' | 'right-top' | 'right-center' | 'right-bottom';
export interface TooltipProps {
    children: ReactNode;
    text: string;
    hotkey?: string;
    variant?: TooltipVariant;
    placement?: TooltipPlacement;
    offset?: number;
    className?: string;
    /**
     * 다중행 텍스트 지원. 지정 시 white-space 가 `pre-line` 으로 바뀌어 텍스트 내 `\n`
     * 으로 줄바꿈, max-width 로 자동 wrap 됨. 미지정 시 기존 동작(nowrap) 유지.
     */
    maxWidth?: number;
}
export interface VisualTooltipProps {
    children: ReactNode;
    text?: string;
    description?: string;
    content?: ReactNode;
    contentWidth?: number;
    contentHeight?: number;
    placement?: TooltipPlacement;
    offset?: number;
    className?: string;
    defaultVisible?: boolean;
}
//# sourceMappingURL=types.d.ts.map