import React, { useState, useCallback, ReactNode } from 'react';
import { Toast } from './Toast';
import { ToastVariant, ToastPlacement } from './types';

interface ToastItem {
    id: string;
    message: string;
    description?: string;
    variant: ToastVariant;
    placement?: ToastPlacement;
    autoClose?: boolean;
    autoCloseDelay?: number;
    showDivider?: boolean;
}

interface ToastSystemProps {
    children: ReactNode;
    maxToasts?: number;
    placement?: ToastPlacement;
    offset?: number;
}

// 전역 함수들을 저장할 변수들
let addToast: ((toast: Omit<ToastItem, 'id'>) => void) | null = null;
let removeToast: ((id: string) => void) | null = null;

export const ToastSystem: React.FC<ToastSystemProps> = ({
    children,
    maxToasts = 3,
    placement = 'bottom-right',
    offset = 40,
}) => {
    const [toasts, setToasts] = useState<ToastItem[]>([]);
    const [toastHeights, setToastHeights] = useState<{ [key: string]: number }>({});

    const addToastInternal = useCallback((toastProps: Omit<ToastItem, 'id'>) => {
        const id = `toast-${Date.now()}-${Math.random()}`;
        const newToast: ToastItem = {
            ...toastProps,
            id,
            placement: toastProps.placement || placement,
        };

        setToasts(prev => {
            const updatedToasts = [...prev, newToast];
            if (updatedToasts.length > maxToasts) {
                return updatedToasts.slice(-maxToasts);
            }
            return updatedToasts;
        });
    }, [maxToasts, placement]);

    const removeToastInternal = useCallback((id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);

    // 전역 함수들을 설정
    React.useEffect(() => {
        addToast = addToastInternal;
        removeToast = removeToastInternal;

        return () => {
            addToast = null;
            removeToast = null;
        };
    }, [addToastInternal, removeToastInternal]);

    return (
        <>
            {children}

            {/* Toast Container */}
            <div style={{
                position: 'fixed',
                right: offset,
                bottom: offset,
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                pointerEvents: 'none',
            }}>
                {toasts.slice(-maxToasts).reverse().map((toast, index) => {
                    const gap = 4;
                    const currentHeight = toastHeights[toast.id] || 80;

                    // 이전 토스트들의 높이를 모두 더해서 bottom 위치 계산
                    let bottomOffset = 0;
                    for (let i = 0; i < index; i++) {
                        const prevToastId = toasts.slice(-maxToasts).reverse()[i].id;
                        bottomOffset += (toastHeights[prevToastId] || 80) + gap;
                    }

                    return (
                        <div
                            key={toast.id}
                            ref={(el) => {
                                if (el) {
                                    const height = el.offsetHeight;
                                    if (height !== toastHeights[toast.id]) {
                                        setToastHeights(prev => ({
                                            ...prev,
                                            [toast.id]: height
                                        }));
                                    }
                                }
                            }}
                            style={{
                                pointerEvents: 'auto',
                                position: 'fixed',
                                bottom: `${offset + bottomOffset}px`,
                                right: `${offset}px`,
                                zIndex: 9999 + index,
                            }}
                        >
                            <Toast
                                variant={toast.variant}
                                placement={toast.placement || placement}
                                showDivider={toast.showDivider}
                                autoClose={toast.autoClose !== false}
                                autoCloseDelay={toast.autoCloseDelay || 3000}
                                onClose={() => removeToastInternal(toast.id)}
                                disablePositioning={true}
                                description={toast.description}
                            >
                                {toast.message}
                            </Toast>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

// 편의 함수들
export const toast = {
    show: (props: Omit<ToastItem, 'id'>) => {
        if (addToast) {
            addToast(props);
        } else {
            console.warn('ToastSystem이 초기화되지 않았습니다. 앱 루트에 ToastSystem을 추가해주세요.');
        }
    },

    success: (message: string, description?: string) => {
        toast.show({ message, description, variant: 'positive', showDivider: true });
    },

    error: (message: string, description?: string) => {
        toast.show({ message, description, variant: 'negative', showDivider: true });
    },

    warning: (message: string, description?: string) => {
        toast.show({ message, description, variant: 'cautionary', showDivider: true });
    },

    info: (message: string, description?: string) => {
        toast.show({ message, description, variant: 'default', showDivider: true });
    },
}; 