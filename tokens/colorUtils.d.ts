/**
 * hex 색상 값에 opacity를 적용하여 rgba 또는 8자리 hex로 변환합니다.
 * @param hexColor - hex 색상 값 (예: "#ffffff" 또는 "#fff")
 * @param opacity - 0~1 사이의 opacity 값
 * @returns 8자리 hex 색상 값
 */
export declare function withOpacity(hexColor: string, opacity: number): string;
