import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { ToastProps, ToastVariant, ToastPlacement } from "./types";
import { spacing } from "../../tokens/spacing";
import { shadow } from "../../tokens/shadow";
import { radius } from "../../tokens/radius";
import color from "../../tokens/color";
import textColor from "../../tokens/textColor";
import { typography } from "../../tokens";
import { IconCircleCheck, IconError, IconClose, IconInfo, IconWarning } from "../icons";

// 애니메이션 키프레임 정의
const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutSlideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(12px);
  }
`;

const Toast: React.FC<ToastProps> = ({
    children,
    description,
    variant = "default",
    placement = "top-right",
    offset = 40,
    onClose,
    showLeadingIcon = true,
    showTrailingIcon = true,
    showDivider = false,
    className = "",
    autoClose = false,
    autoCloseDelay = 3000,
    ...props
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // 진입 애니메이션
        setIsVisible(true);

        // 자동 닫기 설정
        if (autoClose) {
            const timer = setTimeout(() => {
                setIsExiting(true);
            }, autoCloseDelay);

            return () => clearTimeout(timer);
        }
    }, [autoClose, autoCloseDelay]);

    const handleClose = () => {
        setIsExiting(true);
        // 퇴장 애니메이션 완료 후 onClose 호출
        setTimeout(() => {
            onClose?.();
        }, 300);
    };

    const getLeadingIcon = () => {
        if (!showLeadingIcon) return null;

        switch (variant) {
            case "positive":
                return <IconCircleCheck width={20} height={20} color="currentColor" />;
            case "negative":
                return <IconError width={20} height={20} color="currentColor" />;
            case "cautionary":
                return <IconWarning width={20} height={20} color="currentColor" />;
            case "default":
            default:
                return <IconInfo width={20} height={20} color="currentColor" />;
        }
    };

    const getTrailingIcon = () => {
        if (!showTrailingIcon) return null;
        return (
            <CloseButton onClick={handleClose}>
                <IconClose width={16} height={16} color="currentColor" />
            </CloseButton>
        );
    };

    return (
        <StyledToast
            $variant={variant}
            $placement={placement}
            $offset={offset}
            $isVisible={isVisible}
            $isExiting={isExiting}
            className={className}
            {...(Object.fromEntries(
                Object.entries(props).filter(([key]) =>
                    !['variant', 'placement', 'offset'].includes(key)
                )
            ))}
        >
            {showLeadingIcon && (
                <LeadingIconWrapper $variant={variant}>
                    <IconContainer>
                        {getLeadingIcon()}
                    </IconContainer>
                </LeadingIconWrapper>
            )}

            <ContentWrapper>
                <div>{children}</div>
                {description && <div>{description}</div>}
            </ContentWrapper>

            {showDivider && <Divider $variant={variant} />}

            {showTrailingIcon && (
                <IconContainer>
                    {getTrailingIcon()}
                </IconContainer>
            )}
        </StyledToast>
    );
};

const StyledToast = styled.div<{
    $variant: ToastVariant;
    $placement: ToastPlacement;
    $offset: number;
    $isVisible: boolean;
    $isExiting: boolean;
}>`
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-2"]};
  background-color: ${color.gray["950"]};
  border-radius: ${radius["rounded-2"]};
  box-shadow: ${shadow.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;

  /* Placement positioning */
  ${({ $placement, $offset }) => {
        switch ($placement) {
            case "top-left":
                return `
          top: ${$offset}px;
          left: ${$offset}px;
        `;
            case "top-center":
                return `
          top: ${$offset}px;
          left: 50%;
          transform: translateX(-50%);
        `;
            case "top-right":
                return `
          top: ${$offset}px;
          right: ${$offset}px;
        `;
            case "bottom-left":
                return `
          bottom: ${$offset}px;
          left: ${$offset}px;
        `;
            case "bottom-center":
                return `
          bottom: ${$offset}px;
          left: 50%;
          transform: translateX(-50%);
        `;
            case "bottom-right":
                return `
          bottom: ${$offset}px;
          right: ${$offset}px;
        `;
            default:
                return `
          top: ${$offset}px;
          right: ${$offset}px;
        `;
        }
    }}

  /* 애니메이션 상태에 따른 스타일 */
  ${({ $isVisible, $isExiting }) => {
        if ($isExiting) {
            return css`
          animation: ${fadeOutSlideUp} 0.3s ease-in-out forwards;
        `;
        } else if ($isVisible) {
            return css`
          animation: ${fadeInSlideUp} 0.3s ease-in-out forwards;
        `;
        } else {
            return css`
          opacity: 0;
          transform: translateY(12px);
        `;
        }
    }}
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const LeadingIconWrapper = styled.div<{ $variant: ToastVariant }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-right: ${spacing.gap["gap-1"]};
    color: ${({ $variant }) => {
        switch ($variant) {
            case "positive":
                return color.green["500"];
            case "negative":
                return color.red["500"];
            case "cautionary":
                return color.yellow["500"];
            case "default":
            default:
                return color.common["100"];
        }
    }};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-1"]};
  flex: 1;
  min-width: 260px;
  color: ${color.common["100"]};

  /* Typography for children (main text - 2줄까지) */
  > *:first-child {
    ${typography("ko", "body2", "medium")}
    color: ${color.common["100"]};
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > *:nth-child(2) {
    ${typography("ko", "caption2", "regular")}
    color: ${color.gray["800"]};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Divider = styled.div<{ $variant: ToastVariant }>`
  width: 1px;
  background-color: ${color.gray["925"]};
  margin: 0 ${spacing.gap["gap-2"]};
  flex-shrink: 0;
  align-self: stretch;
  min-height: 24px;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${textColor.light["fg-neutral-alternative"]};
  transition: color 0.2s ease;
  flex-shrink: 0;

  &:hover {
    color: ${color.common["100"]};
  }
`;

Toast.displayName = "Toast";

export { Toast }; 