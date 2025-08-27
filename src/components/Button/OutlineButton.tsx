import styled, { css } from "styled-components";
import { ButtonProps, ButtonStyleProps } from "./types";
import color from "../../tokens/color";
import { radius } from "../../tokens/radius";
import fontWeight from "../../tokens/fontWeight";
import fontSize from "../../tokens/fontSize";
import { Spinner } from "./Spinner";
import React from "react";
import { borderColor } from "../../tokens/borderColor";
import { spacing } from "../../tokens/spacing";
import textColor from "../../tokens/textColor";
import brandColor from "../../tokens/brandColor";
import positiveColor from "../../tokens/positiveColor";
import negativeColor from "../../tokens/negativeColor";
import { useEffectiveLang } from "../../i18n/LanguageContext";
import fontFamily from "../../tokens/fontFamily";

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !["loading", "state", "radiusKey"].includes(prop),
})<ButtonStyleProps>`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.gap["gap-1"]};
  background: transparent;
  border-radius: ${({ radiusKey = "rounded-2" }) => radius[radiusKey]};
  font-weight: ${fontWeight["500"]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;

  &[lang="ko"] {
    font-family: ${fontFamily.ko};
  }

  &[lang="en"] {
    font-family: ${fontFamily.en};
  }

  // 크기 변형
  ${({ size = "medium" }) => {
    switch (size) {
      case "small":
        return css`
          padding: 6px 12px;
          height: 32px;
          font-size: ${fontSize.t4[0]};
          font-weight: ${fontWeight["500"]};

          svg {
            width: 16px;
            height: 16px;
          }
        `;
      case "large":
        return css`
          padding: 12px 16px;
          height: 48px;
          font-size: ${fontSize.t5[0]};
          font-weight: ${fontWeight["500"]};

          svg {
            width: 24px;
            height: 24px;
          }
        `;
      default:
        return css`
          padding: 8px 16px;
          height: 40px;
          font-size: ${fontSize.t5[0]};
          font-weight: ${fontWeight["500"]};

          svg {
            width: 20px;
            height: 20px;
          }
        `;
    }
  }}

  // 색상 변형
  ${({ variant = "primary", state = "default" }) => {
    const getBorderColor = () => {
      switch (variant) {
        case "secondary":
          switch (state) {
            case "focused":
              return borderColor.light["color-border-focused"];
            default:
              return borderColor.light["color-border-primary"];
          }
        case "brand":
          switch (state) {
            case "focused":
              return borderColor.light["color-border-brand"];
            default:
              return color.deeppurple["200"];
          }
        case "positive":
          switch (state) {
            case "hovered":
              return color.green["400"];
            case "pressed":
              return color.green["300"];
            case "focused":
              return color.green["400"];
            default:
              return color.green["500"];
          }
        case "negative":
          switch (state) {
            case "focused":
              return borderColor.light["color-border-negative"];
            default:
              return color.red["200"];
          }
        default:
          return color.blue["500"];
      }
    };

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
          return color.blue["500"];
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
              return `${color.deeppurple["800"]}0D`; // 5% opacity (bg-accent-deeppurple)
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
              return `${positiveColor.light["bg-positive-primary-default"]}0D`; // 5% opacity (bg-accent-green)
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
              return `${negativeColor.light["bg-negative-primary-default"]}0D`; // 5% opacity (bg-accent-red)
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
      border-color: ${borderColor.light["color-border-primary"]} !important;
      color: ${textColor.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${color.gray["50"]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({ loading }) =>
    loading &&
    css`
      cursor: wait;
      pointer-events: none;
    `}
`;

const TextWrapper = styled.span`
  padding: 0 ${spacing.gap["gap-0.5"]};
  font-family: inherit;
`;

export const OutlineButton = ({
  variant = "primary",
  size = "medium",
  state = "default",
  disabled = false,
  loading = false,
  leadingIcon,
  trailingIcon,
  label,
  children,
  onClick,
  className,
  radiusKey,
  lang,
}: ButtonProps) => {
  const [interactionState, setInteractionState] = React.useState(state);
  const effectiveLang = useEffectiveLang(lang);

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
      radiusKey={radiusKey}
      onClick={onClick}
      className={className}
      lang={effectiveLang}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          opacity: loading ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      >
        {leadingIcon && React.createElement(leadingIcon)}
        <TextWrapper>{children || label}</TextWrapper>
        {trailingIcon && React.createElement(trailingIcon)}
      </div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: loading ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <Spinner />
      </div>
    </StyledButton>
  );
};
