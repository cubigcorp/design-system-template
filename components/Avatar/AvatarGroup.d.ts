import { AvatarProps } from './types';
type AvatarGroupState = 'default' | 'hovered' | 'pressed' | 'selected';
interface AvatarItemData extends AvatarProps {
    name?: string;
}
export interface AvatarGroupProps {
    avatars: AvatarItemData[];
    max?: number;
    state?: AvatarGroupState;
    dropdownWidth?: number;
    onItemClick?: (avatar: AvatarItemData, index: number) => void;
    className?: string;
}
export declare const AvatarGroup: ({ avatars, max, state, dropdownWidth, onItemClick, className, }: AvatarGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=AvatarGroup.d.ts.map