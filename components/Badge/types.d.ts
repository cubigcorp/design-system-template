export type BadgeVariant = 'primary' | 'secondary' | 'brand' | 'positive' | 'negative' | 'info' | 'cautionary';
export type BadgeType = 'outline' | 'solid' | 'strong';
export type BadgeSize = 'small' | 'medium' | 'large';
export type BadgeRadius = 'small' | 'large';
export interface BadgeProps {
    variant?: BadgeVariant;
    type?: BadgeType;
    size?: BadgeSize;
    radius?: BadgeRadius;
    text?: string;
    children?: React.ReactNode;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    className?: string;
}
export interface BadgeStyleProps {
    variant: BadgeVariant;
    type: BadgeType;
    size: BadgeSize;
    $radius: BadgeRadius;
}
//# sourceMappingURL=types.d.ts.map