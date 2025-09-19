import React from "react";
import styled from "styled-components";
import {
  color,
  layerColor,
  borderColor,
  radius,
  spacing,
  shadow,
  typographyCSS,
} from "../../tokens";
import { IconClose } from "../icons";
import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({
  size = "medium",
  open = false,
  onClose,
  title = "제목",
  showCloseButton = true,
  showActionArea = true,
  children,
  className = "",
  style,
  ...props
}) => {
  if (!open) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const handleCloseClick = () => {
    onClose?.();
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer
        $size={size}
        className={className}
        style={style}
        {...props}
      >
        <Header>
          <Title>{title}</Title>
          {showCloseButton && (
            <CloseButton onClick={handleCloseClick}>
              <IconClose width={24} height={24} color="currentColor" />
            </CloseButton>
          )}
        </Header>

        <Content>{children}</Content>

        {showActionArea && (
          <ActionArea>
            <CancelButton onClick={handleCloseClick}>취소</CancelButton>
            <ConfirmButton>확인</ConfirmButton>
          </ActionArea>
        )}
      </ModalContainer>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${layerColor.light["bg-overlay"]};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div<{
  $size: "x-small" | "small" | "medium" | "large";
}>`
  background-color: ${layerColor.light["bg-layer-floating"]};
  border: 1px solid ${borderColor.light["color-border-primary"]};
  border-radius: ${radius["rounded-3"]};
  box-shadow: ${shadow.light["shadow-lg"]};
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;

  ${({ $size }) => {
    switch ($size) {
      case "x-small":
        return `
          width: 320px;
        `;
      case "small":
        return `
          width: 480px;
        `;
      case "medium":
        return `
          width: 640px;
        `;
      case "large":
        return `
          width: 960px;
        `;
      default:
        return `
          width: 500px;
          min-height: 300px;
        `;
    }
  }}
`;

const Header = styled.div`
  padding: ${spacing.gap["gap-6"]} ${spacing.gap["gap-6"]}
    ${spacing.gap["gap-3"]} ${spacing.gap["gap-6"]};
  border-radius: ${radius["rounded-3"]} ${radius["rounded-3"]} 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  ${typographyCSS.heading1}
  font-weight: 600;
  color: ${color.gray[950]};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${color.gray[950]};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

const Content = styled.div`
  padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-6"]};
  flex: 1;
  overflow-y: auto;
`;

const ActionArea = styled.div`
  padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-6"]}
    ${spacing.gap["gap-6"]} ${spacing.gap["gap-6"]};
  display: flex;
  justify-content: flex-end;
  gap: ${spacing.gap["gap-2"]};
`;

const CancelButton = styled.button`
  padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-4"]};
  background-color: ${color.common[100]};
  border: 1px solid ${borderColor.light["color-border-primary"]};
  border-radius: ${radius["rounded-2"]};
  color: ${color.gray[950]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${color.gray[50]};
  }
`;

const ConfirmButton = styled.button`
  padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-4"]};
  background-color: ${color.gray[950]};
  border: none;
  border-radius: ${radius["rounded-2"]};
  color: ${color.common[100]};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${color.gray[925]};
  }
`;

Modal.displayName = "Modal";

export { Modal };
