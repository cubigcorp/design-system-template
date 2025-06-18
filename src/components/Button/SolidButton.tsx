import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps } from "./types";
import color from "../../tokens/color";
import { radius } from "../../tokens/radius";
import fontWeight from "../../tokens/fontWeight";
import fontSize from "../../tokens/fontSize";
import { borderColor } from "../../tokens/borderColor";
import textColor from "../../tokens/textColor";
import { Spinner } from "./Spinner";
import React from "react";

const StyledButton = styled.button<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: ${radius["rounded-2"]};
  font-weight: ${fontWeight["500"]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ size = "medium", iconOnly = false }) => {
    if (iconOnly) {
      switch (size) {
        case "small":
          return css`
            padding: 12px;
            width: 32px;
            height: 32px;
            svg {
              width: 16px;
              height: 16px;
            }
          `;
        case "large":
          return css`
            padding: 8px;
            width: 48px;
            height: 48px;
            svg {
              width: 24px;
              height: 24px;
            }
          `;
        default:
          return css`
            padding: 10px;
            width: 40px;
            height: 40px;
            svg {
              width: 20px;
              height: 20px;
            }
          `;
      }
    }

    switch (size) {
      case "small":
        return css`
          padding: 6px 12px;
          height: 32px;
          font-size: ${fontSize.t4[0]};
          font-weight: ${fontWeight["500"]};
        `;
      case "large":
        return css`
          padding: 12px 16px;
          height: 48px;
          font-size: ${fontSize.t5[0]};
          font-weight: ${fontWeight["500"]};
        `;
      default:
        return css`
          padding: 8px 16px;
          height: 40px;
          font-size: ${fontSize.t5[0]};
          font-weight: ${fontWeight["500"]};
        `;
    }
  }}

  // 색상 변형
  ${({ variant = "primary", state = "default" }) => {
    const getBackgroundColor = () => {
      switch (variant) {
        case "primary":
          switch (state) {
            case "hovered":
              return color.gray["925"];
            case "pressed":
              return color.gray["900"];
            case "focused":
              return color.gray["850"];
            default:
              return color.gray["950"];
          }
        case "secondary":
          switch (state) {
            case "hovered":
              return color.gray["50"];
            case "pressed":
              return color.gray["100"];
            case "focused":
              return color.gray["200"];
            default:
              return color.gray["25"];
          }
        case "brand":
          switch (state) {
            case "hovered":
            case "focused":
              return color.deeppurple["600"];
            case "pressed":
              return color.deeppurple["400"];
            default:
              return color.deeppurple["800"];
          }
        case "negative":
          switch (state) {
            case "hovered":
            case "focused":
              return color.red["500"];
            case "pressed":
              return color.red["400"];
            default:
              return color.red["600"];
          }
        case "positive":
          switch (state) {
            case "hovered":
            case "focused":
              return color.green["500"];
            case "pressed":
              return color.green["400"];
            default:
              return color.green["600"];
          }
        default:
          return color.gray["950"];
      }
    };

    const getBorderColor = () => {
      switch (variant) {
        case "primary":
          return color.gray["800"];
        case "secondary":
          return state === "focused"
            ? borderColor.light["color-border-focused"]
            : borderColor.light["color-border-primary"];
        case "brand":
          switch (state) {
            case "hovered":
            case "focused":
              return color.deeppurple["400"];
            case "pressed":
              return color.deeppurple["300"];
            default:
              return borderColor.light["color-border-brand"];
          }
        case "negative":
          switch (state) {
            case "hovered":
            case "focused":
              return color.red["400"];
            case "pressed":
              return color.red["300"];
            default:
              return color.red["400"];
          }
        case "positive":
          switch (state) {
            case "hovered":
            case "focused":
              return color.green["400"];
            case "pressed":
              return color.green["300"];
            default:
              return color.green["500"];
          }
        default:
          return color.gray["800"];
      }
    };

    const getTextColor = () => {
      switch (variant) {
        case "primary":
          return color.common["100"]; // common-white
        case "secondary":
          return textColor.light["fg-neutral-strong"];
        case "brand":
        case "negative":
        case "positive":
          return color.common["100"]; // common-white
        default:
          return color.common["100"];
      }
    };

    return css`
      background-color: ${getBackgroundColor()};
      color: ${getTextColor()};
      border: 1px solid ${getBorderColor()};

      &:focus {
        outline: none;
        border-color: ${variant === "secondary"
          ? borderColor.light["color-border-focused"]
          : getBorderColor()};
      }
    `;
  }}

  // 비활성화 상태
  ${({ disabled, variant = "primary" }) =>
    disabled &&
    css`
      background-color: ${variant === "primary"
        ? color.gray["900"]
        : color.gray["50"]} !important;
      border-color: ${variant === "primary"
        ? color.gray["800"]
        : borderColor.light["color-border-primary"]} !important;
      color: ${variant === "primary"
        ? textColor.light["fg-neutral-alternative"]
        : textColor.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({ loading }) =>
    loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}

  // 아이콘 전용 버튼
  ${({ iconOnly, size = "medium" }) =>
    iconOnly &&
    css`
      padding: ${size === "small" ? "8px" : size === "large" ? "12px" : "10px"};
      width: ${size === "small" ? "32px" : size === "large" ? "48px" : "40px"};
    `}
`;

export const SolidButton = ({
  variant = "primary",
  size = "medium",
  state = "default",
  disabled = false,
  loading = false,
  iconOnly = false,
  leadingIcon,
  trailingIcon,
  label,
  onClick,
  className,
}: ButtonProps) => {
  const [interactionState, setInteractionState] = React.useState(state);

  // state prop이 변경되면 interactionState도 업데이트
  React.useEffect(() => {
    setInteractionState(state);
  }, [state]);

  const handleMouseEnter = () => {
    if (!disabled && !loading && state === "default") {
      setInteractionState("hovered");
    }
  };

  const handleMouseLeave = () => {
    if (!disabled && !loading) {
      setInteractionState(state);
    }
  };

  const handleMouseDown = () => {
    if (!disabled && !loading && state === "default") {
      setInteractionState("pressed");
    }
  };

  const handleMouseUp = () => {
    if (!disabled && !loading && state === "default") {
      setInteractionState("hovered");
    }
  };

  const handleFocus = () => {
    if (!disabled && !loading && state === "default") {
      setInteractionState("focused");
    }
  };

  const handleBlur = () => {
    if (!disabled && !loading) {
      setInteractionState(state);
    }
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      state={state !== "default" ? state : interactionState}
      disabled={disabled}
      loading={loading}
      iconOnly={iconOnly}
      onClick={onClick}
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {leadingIcon}
          {!iconOnly && label}
          {trailingIcon}
        </>
      )}
    </StyledButton>
  );
};
