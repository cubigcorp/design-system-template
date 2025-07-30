import React, { forwardRef, useState } from "react";
import styled from "styled-components";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { typographyCSS } from "../../tokens";
import { color } from "../../tokens";
import { negativeColor } from "../../tokens";
import { positiveColor } from "../../tokens";
import { IconError, IconCircleCheck, IconVisibilityOff, IconVisibilityOn } from "../icons";
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
      type = "text",
      onChange,
      onFocus,
      onBlur,
      className = "",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const getTrailingIcon = () => {
      // Password 타입일 때는 값이 있을 때만 visibility 아이콘 표시
      if (type === "password" && value && value.trim() !== "") {
        return {
          icon: showPassword ? "visibility-on" : "visibility-off",
          color: textColor.light["fg-neutral-primary"],
        };
      }

      if (disabled) {
        // Disabled 상태에서는 Positive일 때만 아이콘 표시
        if (status === "positive") {
          return {
            icon: "circlecheck",
            color: positiveColor.light["fg-positive-primary"],
          };
        }
        return null;
      }

      // Negative 상태
      if (status === "negative") {
        // Negative: Disable=False, Active=False, Focus=False 또는 Disable=False, Active=False, Focus=True일 때 error 아이콘
        if (!active) {
          return {
            icon: "error",
            color: negativeColor.light["fg-negative-primary"],
          };
        }
        return null;
      }

      // Positive 상태
      if (status === "positive") {
        // Positive: Disable=False, Active=False일 때 circlecheck 아이콘
        if (!active) {
          return {
            icon: "circlecheck",
            color: positiveColor.light["fg-positive-primary"],
          };
        }
        return null;
      }

      return null;
    };

    const trailingIcon = getTrailingIcon();

    return (
      <InputContainer>
        <StyledInput
          ref={ref}
          type={type === "password" ? (showPassword ? "text" : "password") : type}
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
              if (trailingIcon.icon === "visibility-on" || trailingIcon.icon === "visibility-off") {
                // Password visibility 토글
                setShowPassword(!showPassword);
              }
            }}
            type="button"
          >

            {trailingIcon.icon === "error" && (
              <IconError
                width={size === "small" ? 16 : size === "large" ? 24 : 20}
                height={size === "small" ? 16 : size === "large" ? 24 : 20}
                color={trailingIcon.color}
              />
            )}
            {trailingIcon.icon === "circlecheck" && (
              <IconCircleCheck
                width={size === "small" ? 16 : size === "large" ? 24 : 20}
                height={size === "small" ? 16 : size === "large" ? 24 : 20}
                color={trailingIcon.color}
              />
            )}
            {trailingIcon.icon === "visibility-on" && (
              <IconVisibilityOn
                width={size === "small" ? 16 : size === "large" ? 24 : 20}
                height={size === "small" ? 16 : size === "large" ? 24 : 20}
                color={trailingIcon.color}
              />
            )}
            {trailingIcon.icon === "visibility-off" && (
              <IconVisibilityOff
                width={size === "small" ? 16 : size === "large" ? 24 : 20}
                height={size === "small" ? 16 : size === "large" ? 24 : 20}
                color={trailingIcon.color}
              />
            )}
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

  &::placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
    opacity: 1; /* Firefox에서 opacity 조정 */
  }

  &::-webkit-input-placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
  }

  &::-moz-placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
  }

  /* 포커스 상태에서도 placeholder 색상 유지 */
  &:focus::placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
  }

  &:focus::-webkit-input-placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
  }

  &:focus::-moz-placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
  }

  &:focus:-ms-input-placeholder {
    color: ${textColor.light["fg-neutral-assistive"]} !important;
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

export { Input };
