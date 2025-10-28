export type PaginationVariant = "compact" | "minimize";
export interface PaginationProps {
    /**
     * 현재 페이지 (1부터 시작)
     */
    currentPage: number;
    /**
     * 전체 페이지 수
     */
    totalPages: number;
    /**
     * 페이지 변경 시 호출되는 함수
     */
    onPageChange: (page: number) => void;
    /**
     * Pagination 변형
     * - compact: 전체 페이지 번호를 표시
     * - minimize: 현재 페이지/전체 페이지 형태로 표시
     */
    variant?: PaginationVariant;
    /**
     * 추가 className
     */
    className?: string;
}
