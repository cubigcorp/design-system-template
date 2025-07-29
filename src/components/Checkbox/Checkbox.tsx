import React from "react";
import styled from "styled-components";
import { color } from "../../tokens";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { IconCheck, IconRemove } from "../icons";
import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({
  variant = "secondary",
  state = "unchecked",
  disabled = false,
  active = false,
  onChange,
  className = "",
  ...props
}) => {
  const handleClick = () => {
    if (disabled) return;

    // state에 따라 다음 상태로 변경
    let nextState: boolean;
    if (state === "indeterminate") {
      nextState = true; // indeterminate → checked
    } else if (state === "checked") {
      nextState = false; // checked → unchecked
    } else {
      nextState = true; // unchecked → checked
    }

    onChange?.(nextState);
  };

  const getIcon = () => {
    if (state === "checked") {
      return <IconCheck width={16} height={16} color="currentColor" />;
    }
    if (state === "indeterminate") {
      return <IconRemove width={16} height={16} color="currentColor" />;
    }
    return null;
  };

  return (
    <StyledCheckbox
      $variant={variant}
      $state={state}
      $disabled={disabled}
      $active={active}
      onClick={handleClick}
      className={className}
      {...props}
    >
      {getIcon()}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div<{
  $variant: "primary" | "secondary";
  $state: "checked" | "unchecked" | "indeterminate";
  $disabled: boolean;
  $active: boolean;
}>`
  width: 16px;
  height: 16px;
  border-radius: ${radius["rounded-1"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease;
  padding: ${spacing.gap["gap-0"]};

  /* 색상 스타일 */
  ${({ $variant, $state, $disabled, $active }) => {
    // Disabled 상태
    if ($disabled) {
      return `
        background-color: ${color.gray[50]};
        border: 1px solid ${borderColor.light["color-border-primary"]};
        color: ${textColor.light["fg-neutral-disable"]};
      `;
    }

    // Primary 상태 (checked일 때만)
    if ($variant === "primary" && $state === "checked") {
      if ($active) {
        return `
          background-color: ${color.gray[950]};
          border: 1px solid ${color.gray[925]};
          color: ${color.common[100]};
        `;
      } else {
        return `
          background-color: ${color.gray[950]};
          border: 1px solid ${color.gray[925]};
          color: ${color.common[100]};
        `;
      }
    }

    // Secondary 상태
    if ($variant === "secondary") {
      if ($active) {
        return `
          background-color: ${color.gray[950]};
          border: 1px solid ${color.gray[925]};
          color: ${color.common[100]};
        `;
      } else {
        return `
          background-color: ${color.common[100]};
          border: 1px solid ${borderColor.light["color-border-primary"]};
          color: ${textColor.light["fg-neutral-strong"]};
        `;
      }
    }

    // 기본값
    return `
      background-color: ${color.common[100]};
      border: 1px solid ${borderColor.light["color-border-primary"]};
      color: ${textColor.light["fg-neutral-strong"]};
    `;
  }}

  &:hover {
    ${({ $disabled }) =>
      !$disabled &&
      `
      opacity: 0.8;
    `}
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${color.blue[200]};
  }
`;

Checkbox.displayName = "Checkbox";

export { Checkbox };
