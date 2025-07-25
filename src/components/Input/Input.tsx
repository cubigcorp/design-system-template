import React, { forwardRef } from "react";
import styled from "styled-components";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { typographyCSS } from "../../tokens";
import { color } from "../../tokens";
import { negativeColor } from "../../tokens";
import { positiveColor } from "../../tokens";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "medium",
      status = "normal",
      disabled = false,
      active = false,
      focused = false,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      className = "",
      ...props
    },
    ref
  ) => {
    const getTrailingIcon = () => {
      if (disabled) {
        // Disabled 상태에서는 Positive일 때만 아이콘 표시
        if (status === "positive") {
          return {
            icon: "./icons/Icon_circlecheck.svg",
            color: positiveColor.light["fg-positive-primary"],
          };
        }
        return null;
      }

      // Normal 상태
      if (status === "normal") {
        // Normal: Disable=False, Active=True, Focus=True일 때만 cancel 아이콘
        if (active && focused) {
          return {
            icon: "./icons/Icon_cancel.svg",
            color: textColor.light["fg-neutral-primary"],
          };
        }
        return null;
      }

      // Negative 상태
      if (status === "negative") {
        // Negative: Disable=False, Active=True, Focus=True일 때 cancel 아이콘
        if (active && focused) {
          return {
            icon: "./icons/Icon_cancel.svg",
            color: textColor.light["fg-neutral-primary"],
          };
        }
        // Negative: Disable=False, Active=False, Focus=False 또는 Disable=False, Active=False, Focus=True일 때 error 아이콘
        else if (!active) {
          return {
            icon: "./icons/Icon_error.svg",
            color: negativeColor.light["fg-negative-primary"],
          };
        }
        return null;
      }

      // Positive 상태
      if (status === "positive") {
        // Positive: Disable=False, Active=True, Focus=True일 때 cancel 아이콘
        if (active && focused) {
          return {
            icon: "./icons/Icon_cancel.svg",
            color: textColor.light["fg-neutral-primary"],
          };
        }
        // Positive: Disable=False, Active=False일 때 circlecheck 아이콘
        else if (!active) {
          return {
            icon: "./icons/Icon_circlecheck.svg",
            color: positiveColor.light["fg-positive-primary"],
          };
        }
        return null;
      }

      // 값이 있을 때 Cancel 아이콘 표시 (사용자 경험 개선) - 가장 마지막에 체크
      if (value && value.trim() !== "") {
        if (status === "normal") {
          return {
            icon: "./icons/Icon_cancel.svg",
            color: textColor.light["fg-neutral-primary"],
          };
        }

        if (status === "negative") {
          if (active && focused) {
            // Negative: Active + Focus일 때 cancel 아이콘
            return {
              icon: "./icons/Icon_cancel.svg",
              color: textColor.light["fg-neutral-primary"],
            };
          } else if (!active) {
            // Negative: !Active일 때 error 아이콘
            return {
              icon: "./icons/Icon_error.svg",
              color: negativeColor.light["fg-negative-primary"],
            };
          }
        }

        if (status === "positive") {
          if (active && focused) {
            // Positive: Active + Focus일 때 cancel 아이콘
            return {
              icon: "./icons/Icon_cancel.svg",
              color: textColor.light["fg-neutral-primary"],
            };
          } else if (active) {
            // Positive: Active일 때 circlecheck 아이콘
            return {
              icon: "./icons/Icon_circlecheck.svg",
              color: positiveColor.light["fg-positive-primary"],
            };
          }
        }
      }

      return null;
    };

    const trailingIcon = getTrailingIcon();

    return (
      <InputContainer>
        <StyledInput
          ref={ref}
          type="text"
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
          $size={size}
          $status={status}
          $disabled={disabled}
          $active={active}
          $focused={focused}
          {...props}
        />
        {trailingIcon && (
          <TrailingIcon
            $size={size}
            $color={trailingIcon.color}
            onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              if (trailingIcon.icon.includes("cancel")) {
                // Cancel 아이콘 클릭 시 값 지우기
                const clearEvent = {
                  target: { value: "" },
                } as React.ChangeEvent<HTMLInputElement>;
                onChange?.(clearEvent);
              }
            }}
            type="button"
          >
            <img
              src={trailingIcon.icon}
              alt={
                trailingIcon.icon.includes("cancel")
                  ? "Clear"
                  : trailingIcon.icon.includes("error")
                  ? "Error"
                  : "Success"
              }
              width={size === "small" ? 16 : size === "large" ? 24 : 20}
              height={size === "small" ? 16 : size === "large" ? 24 : 20}
            />
          </TrailingIcon>
        )}
      </InputContainer>
    );
  }
);

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const StyledInput = styled.input<{
  $size: "small" | "medium" | "large";
  $status: "normal" | "negative" | "positive";
  $disabled: boolean;
  $active: boolean;
  $focused: boolean;
}>`
  width: 100%;
  border: 1px solid;
  border-radius: ${radius["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;

  /* Size styles */
  ${({ $size }) => {
    const iconGap = spacing.gap["gap-1"];
    const iconSize = $size === "small" ? 16 : $size === "large" ? 24 : 20;
    const rightPadding = iconSize + parseInt(iconGap) * 2; // 항상 아이콘 공간 확보

    switch ($size) {
      case "small":
        return `
          height: 32px;
          ${typographyCSS.body2}
          padding: ${spacing.gap["gap-1"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
      case "large":
        return `
          height: 48px;
          ${typographyCSS.body3}
          padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-2.5"]};
          padding-right: ${rightPadding}px;
        `;
      default: // medium
        return `
          height: 40px;
          ${typographyCSS.body3}
          padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
    }
  }}

  /* Color styles based on status, disabled, active, focused */
  ${({ $status, $disabled, $active, $focused }) => {
    // Disabled 상태들
    if ($disabled) {
      return `
        background-color: ${color.gray["50"]};
        color: ${textColor.light["fg-neutral-disable"]};
        border-color: ${borderColor.light["color-border-primary"]};
      `;
    }

    // Normal 상태
    if ($status === "normal") {
      if ($active && $focused) {
        // Normal: Disable=False, Active=True, Focus=True
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-focused"]};
        `;
      } else if ($active && !$focused) {
        // Normal: Disable=False, Active=True, Focus=False
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-primary"]};
        `;
      } else if (!$active && $focused) {
        // Normal: Disable=False, Active=False, Focus=True
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-focused"]};
        `;
      } else {
        // Normal: Disable=False, Active=False, Focus=False
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-primary"]};
        `;
      }
    }

    // Negative 상태
    if ($status === "negative") {
      if ($active && $focused) {
        // Negative: Disable=False, Active=True, Focus=True
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${color.red[500]};
        `;
      } else if (!$active && $focused) {
        // Negative: Disable=False, Active=False, Focus=True
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${color.red[500]};
        `;
      } else {
        // Negative: Disable=False, Active=False, Focus=False
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-negative"]};
        `;
      }
    }

    // Positive 상태
    if ($status === "positive") {
      if ($active && $focused) {
        // Positive: Disable=False, Active=True, Focus=True
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-focused"]};
        `;
      } else if ($active && !$focused) {
        // Positive: Disable=False, Active=True, Focus=False
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-primary"]};
        `;
      } else {
        // Positive: Disable=False, Active=False, Focus=False (스펙에 없지만 기본값)
        return `
          background-color: transparent;
          color: ${textColor.light["fg-neutral-primary"]};
          border-color: ${borderColor.light["color-border-primary"]};
        `;
      }
    }

    // 기본값
    return `
      background-color: transparent;
      color: ${textColor.light["fg-neutral-primary"]};
      border-color: ${borderColor.light["color-border-primary"]};
    `;
  }}

  &:disabled {
    cursor: not-allowed;
  }
`;

const TrailingIcon = styled.button<{
  $size: "small" | "medium" | "large";
  $color: string;
}>`
  position: absolute;
  right: ${spacing.gap["gap-1"]};
  top: 50%;
  transform: translateY(-50%);
  width: ${({ $size }) =>
    $size === "small" ? 16 : $size === "large" ? 24 : 20}px;
  height: ${({ $size }) =>
    $size === "small" ? 16 : $size === "large" ? 24 : 20}px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color};
  padding: 0;

  &:hover {
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

Input.displayName = "Input";

export default Input;
