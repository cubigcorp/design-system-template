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
    transform: translateY(40px);
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
    transform: translateY(40px);
  }
`;

const Toast: React.FC<ToastProps> = ({
  children,
  description,
  variant = "default",
  placement = "bottom-right",
  offset = 40,
  onClose,
  showLeadingIcon = true,
  showTrailingIcon = true,
  showDivider = false,
  className = "",
  autoClose = false,
  autoCloseDelay = 3000,
  index = 0,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // index가 전달되지 않으면 모듈 전역 카운터로 자동 스택
  const computedIndex = typeof index === 'number' ? index : __activeToastCount;

  useEffect(() => {
    __activeToastCount += 1;
    return () => {
      __activeToastCount = Math.max(0, __activeToastCount - 1);
    };
  }, []);

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
    }, 500);
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
      $index={computedIndex}
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

const STACK_GAP_PX = 16; // 토스트 간 간격
const ESTIMATED_TOAST_HEIGHT_PX = 80; // 토스트 대략적 높이
let __activeToastCount = 0; // 모듈 전역: 현재 화면에 있는 토스트 수

const StyledToast = styled.div<{
  $variant: ToastVariant;
  $placement: ToastPlacement;
  $offset: number;
  $isVisible: boolean;
  $isExiting: boolean;
  $index?: number;
}>`
  display: flex;
  align-items: center;
  padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-2"]};
  background-color: ${color.gray["950"]};
  border-radius: ${radius["rounded-2"]};
  box-shadow: ${shadow.light["shadow-lg"]};
  max-width: 400px;
  min-width: 300px;
  box-sizing: border-box;
  margin-bottom: 16px; /* Toast들 사이의 간격 */
  position: fixed;
  z-index: ${({ $index = 0 }) => 9999 + $index};

  /* placement에 따른 위치 설정 */
  ${({ $placement, $offset, $index = 0 }) => {
    const stackedOffset = $offset + ($index * (ESTIMATED_TOAST_HEIGHT_PX + STACK_GAP_PX));
    switch ($placement) {
      case "top-left":
        return css`
          top: ${stackedOffset}px;
          left: ${$offset}px;
        `;
      case "top-center":
        return css`
          top: ${stackedOffset}px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "top-right":
        return css`
          top: ${stackedOffset}px;
          right: ${$offset}px;
        `;
      case "bottom-left":
        return css`
          bottom: ${stackedOffset}px;
          left: ${$offset}px;
        `;
      case "bottom-center":
        return css`
          bottom: ${stackedOffset}px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom-right":
      default:
        return css`
          bottom: ${stackedOffset}px;
          right: ${$offset}px;
        `;
    }
  }}

  /* 애니메이션 상태에 따른 스타일 */
  ${({ $isVisible, $isExiting, $placement }) => {
    if ($isExiting) {
      return css`
          animation: ${fadeOutSlideUp} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `;
    } else if ($isVisible) {
      return css`
          animation: ${fadeInSlideUp} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        `;
    } else {
      return css`
          opacity: 0;
          transform: ${$placement === "top-center" || $placement === "bottom-center"
          ? "translateX(-50%) translateY(40px)"
          : "translateY(40px)"};
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