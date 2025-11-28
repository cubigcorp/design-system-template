import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { TooltipProps, TooltipPlacement } from "./types";
import { typography } from "../../tokens";
import { spacing } from "../../tokens/spacing";
import { radius } from "../../tokens/radius";
import color from "../../tokens/color";
import textColor from "../../tokens/textColor";
import { borderColor } from "../../tokens/borderColor";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  hotkey,
  variant = "primary",
  placement = "bottom-left",
  offset = 4,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
      {isVisible && (
        <TooltipContent $variant={variant} $placement={placement} $offset={offset}>
          <Text $variant={variant}>{text}</Text>
          {hotkey && <Hotkey $variant={variant}>{hotkey}</Hotkey>}
        </TooltipContent>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-flex;
`;

const getPlacementStyles = (placement: TooltipPlacement, offset: number) => {
  switch (placement) {
    case "top-left":
      return css`
        bottom: 100%;
        left: 0;
        margin-bottom: ${offset}px;
      `;
    case "top-center":
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: ${offset}px;
      `;
    case "top-right":
      return css`
        bottom: 100%;
        right: 0;
        margin-bottom: ${offset}px;
      `;
    case "bottom-left":
      return css`
        top: 100%;
        left: 0;
        margin-top: ${offset}px;
      `;
    case "bottom-center":
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin-top: ${offset}px;
      `;
    case "bottom-right":
      return css`
        top: 100%;
        right: 0;
        margin-top: ${offset}px;
      `;
    case "left":
      return css`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-right: ${offset}px;
      `;
    case "right":
      return css`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        margin-left: ${offset}px;
      `;
  }
};

const TooltipContent = styled.div<{
  $variant: "primary" | "secondary";
  $placement: TooltipPlacement;
  $offset: number;
}>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: ${spacing.gap["gap-1.5"]};
  padding: ${spacing.gap["gap-1"]} ${spacing.gap["gap-2"]};
  border-radius: ${radius["rounded-1.5"]};
  white-space: nowrap;
  z-index: 1000;
  animation: ${fadeIn} 0.15s ease-in-out;

  ${({ $placement, $offset }) => getPlacementStyles($placement, $offset)}

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background-color: ${color.gray["990"]};
          border: none;
        `
      : css`
          background-color: ${color.common["100"]};
          border: 1px solid ${borderColor.light["color-border-primary"]};
        `}
`;

const Text = styled.span<{ $variant: "primary" | "secondary" }>`
  ${typography(undefined, "body2", "medium")}
  color: ${({ $variant }) =>
    $variant === "primary"
      ? color.common["100"]
      : textColor.light["fg-neutral-primary"]};
`;

const Hotkey = styled.span<{ $variant: "primary" | "secondary" }>`
  ${typography(undefined, "body2", "medium")}
  color: ${({ $variant }) =>
    $variant === "primary"
      ? textColor.light["fg-neutral-assistive"]
      : textColor.light["fg-neutral-assistive"]};
`;

export default Tooltip;
