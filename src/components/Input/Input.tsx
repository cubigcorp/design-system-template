import React, { forwardRef, useState, useEffect } from "react";
import styled from "styled-components";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { typography } from "../../tokens";
import { color } from "../../tokens";
import { negativeColor } from "../../tokens";
import { positiveColor } from "../../tokens";
import fontFamily from "../../tokens/fontFamily";
import {
  IconError,
  IconCircleCheck,
  IconVisibilityOff,
  IconVisibilityOn,
} from "../icons";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = "medium",
      status = "default",
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
      lang = "ko",
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [internalFocused, setInternalFocused] = useState(focused);

    // focused prop이 변경되면 내부 상태 업데이트
    useEffect(() => {
      setInternalFocused(focused);
    }, [focused]);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setInternalFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setInternalFocused(false);
      onBlur?.(event);
    };
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
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={className}
          $size={size}
          $status={status}
          $disabled={disabled}
          $active={active}
          $focused={internalFocused}
          lang={lang}
          {...Object.fromEntries(
            Object.entries(props).filter(
              ([key]) =>
                !["active", "focused", "status", "size", "lang"].includes(key)
            )
          )}
        />
        {trailingIcon && (
          <TrailingIcon
            $size={size}
            $color={trailingIcon.color}
            onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault();
              if (
                trailingIcon.icon === "visibility-on" ||
                trailingIcon.icon === "visibility-off"
              ) {
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
  $status: "default" | "negative" | "positive";
  $disabled: boolean;
  $active: boolean;
  $focused: boolean;
  $lang?: "ko" | "en";
}>`
  width: 100%;
  border: 1px solid
    ${({ $status, $focused }) => {
      if ($focused) return borderColor.light["color-border-focused"];
      if ($status === "negative")
        return borderColor.light["color-border-negative"];
      if ($status === "positive")
        return borderColor.light["color-border-positive"];
      return borderColor.light["color-border-primary"];
    }};
  border-radius: ${radius["rounded-2"]};
  background-color: ${({ $disabled }) =>
    $disabled ? color.gray["50"] : color.common["100"]};
  color: ${({ $disabled }) =>
    $disabled
      ? textColor.light["fg-neutral-disable"]
      : textColor.light["fg-neutral-strong"]};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${fontFamily.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${fontFamily.en};
  }

  ${({ $size, $lang = "ko" }) => {
    const iconGap =
      $size === "large" ? spacing.gap["gap-2.5"] : spacing.gap["gap-2"];
    const iconSize = $size === "small" ? 16 : $size === "large" ? 24 : 20;
    const rightPadding = iconSize + parseInt(iconGap) * 2;

    switch ($size) {
      case "small":
        return `
          height: 32px;
          ${typography($lang, "body2", "regular")}
          padding: ${spacing.gap["gap-1"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
      case "large":
        return `
          height: 48px;
          ${typography($lang, "body3", "regular")}
          padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-2.5"]};
          padding-right: ${rightPadding}px;
        `;
      default:
        return `
          height: 40px;
          ${typography($lang, "body3", "regular")}
          padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
    }
  }}

  &:focus {
    outline: none;
    border-color: ${borderColor.light["color-border-focused"]};
    box-shadow: 0 0 0 2px ${color.blue["100"]};
  }

  &:hover:not(:disabled) {
    border-color: ${borderColor.light["color-border-alternative"]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${textColor.light["fg-neutral-assistive"]};
  }
`;

const TrailingIcon = styled.button<{
  $size: "small" | "medium" | "large";
  $color: string;
}>`
  position: absolute;
  right: ${({ $size }) =>
    $size === "large" ? spacing.gap["gap-2.5"] : spacing.gap["gap-2"]};
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
