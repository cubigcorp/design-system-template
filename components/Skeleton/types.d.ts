export type SkeletonVariant = 'rect' | 'image' | 'text';
export type SkeletonSize = 'medium' | 'large';
export interface SkeletonProps {
    /** 스켈레톤 형태 */
    variant?: SkeletonVariant;
    /** 라운드 크기 (image, text만 해당) */
    size?: SkeletonSize;
    /** 너비 (기본값: variant별 기본 크기) */
    width?: number | string;
    /** 높이 (기본값: variant별 기본 크기) */
    height?: number | string;
    /** 애니메이션 진행률 (0: 시작, 33: 1/3, 66: 2/3) — 기본 자동 애니메이션 */
    className?: string;
}
//# sourceMappingURL=types.d.ts.map