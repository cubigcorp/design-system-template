export interface SelectorOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
    leadingContent?: React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
    }>;
}
export interface SelectorProps {
    size?: 'small' | 'medium' | 'large';
    status?: 'default' | 'negative' | 'positive';
    disabled?: boolean;
    active?: boolean;
    focused?: boolean;
    placeholder?: string;
    value?: string;
    options?: SelectorOption[];
    onChange?: (value: string) => void;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    lang?: 'ko' | 'en';
    showCheckIcon?: boolean;
    menuMaxHeight?: number;
    /** 선택된 값 표기에 옵션의 leadingContent 아이콘을 함께 표시 (기본 false, 미지정 시 기존 동작과 동일) */
    showSelectedIcon?: boolean;
}
//# sourceMappingURL=types.d.ts.map