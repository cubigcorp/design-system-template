import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps } from "./types";
import color from "../../tokens/color";
import { radius } from "../../tokens/radius";
import fontWeight from "../../tokens/fontWeight";
import fontSize from "../../tokens/fontSize";
import { Spinner } from "./Spinner";
import React from "react";
import textColor from "../../tokens/textColor";
import brandColor from "../../tokens/brandColor";
import positiveColor from "../../tokens/positiveColor";
import negativeColor from "../../tokens/negativeColor";
import { borderColor } from "../../tokens/borderColor";

const StyledButton = styled.button<ButtonStyleProps>`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: none;
  border-radius: ${radius["rounded-2"]};
  font-weight: ${fontWeight["500"]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
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
    const getTextColor = () => {
      switch (variant) {
        case "secondary":
          return textColor.light["fg-neutral-strong"];
        case "brand":
          return brandColor.light["fg-brand-strong"];
        case "positive":
          return positiveColor.light["fg-positive-strong"];
        case "negative":
          return negativeColor.light["fg-negative-strong"];
        default:
          return textColor.light["fg-neutral-strong"];
      }
    };

    const getBackgroundColor = () => {
      switch (variant) {
        case "secondary":
          switch (state) {
            case "hovered":
              return `${color.gray["950"]}0D`; // 5% opacity
            case "pressed":
              return `${color.gray["950"]}14`; // 8% opacity
            case "focused":
              return `${color.gray["950"]}1F`; // 12% opacity
            default:
              return "transparent"; // 0% opacity
          }
        case "brand":
          switch (state) {
            case "hovered":
              return `${color.deeppurple["800"]}0D`; // 5% opacity
            case "pressed":
              return `${color.deeppurple["800"]}14`; // 8% opacity
            case "focused":
              return `${color.deeppurple["800"]}1F`; // 12% opacity
            default:
              return "transparent"; // 0% opacity
          }
        case "positive":
          switch (state) {
            case "hovered":
              return `${positiveColor.light["bg-positive-primary-default"]}0D`; // 5% opacity
            case "pressed":
              return `${positiveColor.light["bg-positive-primary-default"]}14`; // 8% opacity
            case "focused":
              return `${positiveColor.light["bg-positive-primary-default"]}1F`; // 12% opacity
            default:
              return "transparent"; // 0% opacity
          }
        case "negative":
          switch (state) {
            case "hovered":
              return `${negativeColor.light["bg-negative-primary-default"]}0D`; // 5% opacity
            case "pressed":
              return `${negativeColor.light["bg-negative-primary-default"]}14`; // 8% opacity
            case "focused":
              return `${negativeColor.light["bg-negative-primary-default"]}1F`; // 12% opacity
            default:
              return "transparent"; // 0% opacity
          }
        default:
          return "transparent";
      }
    };

    const getBorderColor = () => {
      if (state === "focused") {
        switch (variant) {
          case "secondary":
            return borderColor.light["color-border-focused"];
          case "brand":
            return borderColor.light["color-border-brand"];
          case "positive":
            return borderColor.light["color-border-positive"];
          case "negative":
            return borderColor.light["color-border-negative"];
          default:
            return "transparent";
        }
      }
      return "transparent";
    };

    return css`
      color: ${getTextColor()};
      background-color: ${getBackgroundColor()};
      border: 1px solid ${getBorderColor()};

      &:focus {
        outline: 2px solid ${color.blue["300"]};
        outline-offset: 2px;
      }
    `;
  }}

  // 비활성화 상태
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${textColor.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
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

export const TextButton = ({
  variant = "secondary",
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
