export type SegmentedControlSize = 'large' | 'medium';
export interface SegmentItemProps {
    children: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    size?: SegmentedControlSize;
}
export interface SegmentedControlProps {
    children: React.ReactNode;
    className?: string;
    defaultValue?: number;
    value?: number;
    onChange?: (index: number) => void;
    size?: SegmentedControlSize;
}
//# sourceMappingURL=types.d.ts.map