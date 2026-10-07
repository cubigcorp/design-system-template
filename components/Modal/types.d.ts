import { HTMLAttributes, ReactNode } from '../../../../../node_modules/.pnpm/react@19.2.1/node_modules/react';
export type ModalSize = 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export type ModalPosition = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'title'> {
    size?: ModalSize;
    position?: ModalPosition;
    open?: boolean;
    onClose?: () => void;
    title?: ReactNode;
    description?: string;
    showCloseButton?: boolean;
    /**
     * Escape 키로 닫기 + 닫힐 때 직전 포커스 요소로 복귀 (opt-in, 기본 false).
     * 바깥 클릭으로 닫히는 일반 모달에 접근성 향상용으로 켠다. 반드시 버튼으로만
     * 닫아야 하는 확인/진행 모달은 켜지 않는다.
     */
    closeOnEsc?: boolean;
    /**
     * 바깥(오버레이) 클릭으로 닫기 (기본 true — 기존 동작).
     *
     * 사용자가 값을 많이 써 넣는 모달은 false 로 둔다. 실수로 바깥을 눌렀을 때 입력이
     * 통째로 사라지기 때문이다. 이때도 X 버튼과 취소 버튼으로는 닫을 수 있어야 한다.
     */
    closeOnOverlayClick?: boolean;
    /**
     * 엔터를 눌렀을 때 할 일 (opt-in, 기본 없음).
     *
     * 값을 채운 뒤 엔터로 확인까지 끝낼 수 있게 한다. 넘기지 않으면 엔터는 지금처럼
     * 아무 일도 하지 않으므로, 기존 모달의 동작은 바뀌지 않는다.
     *
     * 어느 버튼이 확인인지 화면 구조로 추측하지 않고 모달이 직접 알려 주는 방식이다.
     * 확인 버튼이 왼쪽에 있든 오른쪽에 있든 상관없다.
     *
     * 아래 세 경우에는 엔터를 흘려보낸다.
     * - 한글 입력 중 글자를 확정하는 엔터 (`isComposing`)
     * - 여러 줄 입력칸 안에서의 줄바꿈 (`textarea`)
     * - 이미 버튼에 포커스가 있을 때 (브라우저가 그 버튼을 누른다)
     *
     * 확인이 불가능한 상태(필수값 미입력 등)라면 이 함수 안에서 걸러야 한다. 모달은
     * 버튼의 disabled 를 알지 못한다.
     */
    onConfirm?: () => void;
    /**
     * 본문 영역의 안쪽 여백 (opt-in, 기본 'default').
     *
     * 표처럼 모달 좌우 끝까지 닿아야 하는 내용은 'none' 으로 둔다. 넘기지
     * 않으면 지금까지와 같은 여백이 유지되므로 기존 모달의 모양은 바뀜지 않는다.
     *
     * 'none' 을 쓰면 머리글·버튼 영역과의 간격도 함께 사라지므로, 필요하면
     * 내용 쪽에서 직접 준다.
     */
    contentPadding?: 'default' | 'none';
    actions?: ReactNode;
    children?: ReactNode;
    style?: React.CSSProperties;
}
//# sourceMappingURL=types.d.ts.map