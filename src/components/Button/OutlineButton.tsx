import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps } from "./types";
import color from "../../tokens/color";
import { radius } from "../../tokens/radius";
import fontWeight from "../../tokens/fontWeight";
import fontSize from "../../tokens/fontSize";

const StyledButton = styled.button<ButtonStyleProps>`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border-radius: ${radius["rounded-2"]};
  font-weight: ${fontWeight["600"]};
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
            font-size: ${fontSize.t4[0]};
          `;
        case "large":
          return css`
            padding: 8px;
            width: 48px;
            height: 48px;
            font-size: ${fontSize.t5[0]};
          `;
        default:
          return css`
            padding: 10px;
            width: 40px;
            height: 40px;
            font-size: ${fontSize.t4[0]};
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
    const getBorderColor = () => {
      switch (variant) {
        case "primary":
          return state === "hovered"
            ? color.blue["600"]
            : state === "pressed"
            ? color.blue["700"]
            : color.blue["500"];
        case "secondary":
          return state === "hovered"
            ? color.gray["800"]
            : state === "pressed"
            ? color.gray["900"]
            : color.gray["700"];
        case "brand":
          return state === "hovered"
            ? color.deeppurple["600"]
            : state === "pressed"
            ? color.deeppurple["700"]
            : color.deeppurple["500"];
        case "positive":
          return state === "hovered"
            ? color.green["600"]
            : state === "pressed"
            ? color.green["700"]
            : color.green["500"];
        case "negative":
          return state === "hovered"
            ? color.red["600"]
            : state === "pressed"
            ? color.red["700"]
            : color.red["500"];
        default:
          return color.blue["500"];
      }
    };

    const getTextColor = () => {
      switch (variant) {
        case "primary":
          return state === "hovered"
            ? color.blue["600"]
            : state === "pressed"
            ? color.blue["700"]
            : color.blue["500"];
        case "secondary":
          return state === "hovered"
            ? color.gray["800"]
            : state === "pressed"
            ? color.gray["900"]
            : color.gray["700"];
        case "brand":
          return state === "hovered"
            ? color.deeppurple["600"]
            : state === "pressed"
            ? color.deeppurple["700"]
            : color.deeppurple["500"];
        case "positive":
          return state === "hovered"
            ? color.green["600"]
            : state === "pressed"
            ? color.green["700"]
            : color.green["500"];
        case "negative":
          return state === "hovered"
            ? color.red["600"]
            : state === "pressed"
            ? color.red["700"]
            : color.red["500"];
        default:
          return color.blue["500"];
      }
    };

    const getBackgroundColor = () => {
      if (state === "hovered") {
        switch (variant) {
          case "primary":
            return `${color.blue["500"]}0A`;
          case "secondary":
            return `${color.gray["700"]}0A`;
          case "brand":
            return `${color.deeppurple["500"]}0A`;
          case "positive":
            return `${color.green["500"]}0A`;
          case "negative":
            return `${color.red["500"]}0A`;
          default:
            return `${color.blue["500"]}0A`;
        }
      }
      return "transparent";
    };

    return css`
      border: 1px solid ${getBorderColor()};
      color: ${getTextColor()};
      background-color: ${getBackgroundColor()};

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
      border-color: ${color.gray["300"]} !important;
      color: ${color.gray["500"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
    `}

  // 로딩 상태
  ${({ loading }) =>
    loading &&
    css`
      cursor: wait;
      opacity: 0.7;
    `}

  // 아이콘 전용 버튼
  ${({ iconOnly, size = "medium" }) =>
    iconOnly &&
    css`
      padding: ${size === "small" ? "8px" : size === "large" ? "12px" : "10px"};
      width: ${size === "small" ? "32px" : size === "large" ? "48px" : "40px"};
    `}
`;

export const OutlineButton = ({
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
  return (
    <StyledButton
      variant={variant}
      size={size}
      state={state}
      disabled={disabled}
      loading={loading}
      iconOnly={iconOnly}
      onClick={onClick}
      className={className}
    >
      {leadingIcon}
      {!iconOnly && label}
      {trailingIcon}
    </StyledButton>
  );
};
