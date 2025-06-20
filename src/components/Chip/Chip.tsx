import React from "react";
import styled, { css } from "styled-components";
import { ChipProps, ChipStyleProps } from "./types";
import color from "../../tokens/color";
import { radius } from "../../tokens/radius";
import fontWeight from "../../tokens/fontWeight";
import textColor from "../../tokens/textColor";
import { borderColor } from "../../tokens/borderColor";

const StyledChip = styled.div<ChipStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: ${radius["rounded-2"]};
  font-weight: ${fontWeight["500"]};
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ size = "medium" }) => {
    switch (size) {
      case "x-small":
        return css`
          padding: 4px 6px;
          height: 24px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${fontWeight["500"]};
        `;
      case "small":
        return css`
          padding: 6px 8px;
          height: 32px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${fontWeight["500"]};
        `;
      case "large":
        return css`
          padding: 8px 12px;
          height: 40px;
          font-size: 16px; // Body3-medium
          line-height: 24px;
          font-weight: ${fontWeight["500"]};
        `;
      default: // medium
        return css`
          padding: 8px 12px;
          height: 36px;
          font-size: 14px; // Body2-medium
          line-height: 20px;
          font-weight: ${fontWeight["500"]};
        `;
    }
  }}

  ${({
    type = "outline",
    state = "default",
    active = false,
    disabled = false,
  }) => {
    const getColors = () => {
      if (disabled) {
        return {
          background: type === "solid" ? color.gray["50"] : "transparent",
          text: textColor.light["fg-neutral-disable"],
          border:
            type === "outline"
              ? borderColor.light["color-border-primary"]
              : "transparent",
        };
      }

      if (active) {
        if (type === "solid") {
          return {
            background: color.gray["950"],
            text: color.common["100"],
            border: "transparent",
          };
        } else {
          return {
            background: color.gray["950"] + "1F", // 12% opacity
            text: textColor.light["fg-neutral-alternative"],
            border: borderColor.light["color-border-focused"],
          };
        }
      }

      if (type === "solid") {
        switch (state) {
          case "hovered":
            return {
              background: color.gray["100"],
              text: textColor.light["fg-neutral-alternative"],
              border: "transparent",
            };
          case "pressed":
            return {
              background: color.gray["200"],
              text: textColor.light["fg-neutral-alternative"],
              border: "transparent",
            };
          case "focused":
            return {
              background: color.gray["950"],
              text: color.common["100"],
              border: "transparent",
            };
          default:
            return {
              background: color.gray["50"],
              text: textColor.light["fg-neutral-alternative"],
              border: "transparent",
            };
        }
      } else {
        // Outline type
        switch (state) {
          case "hovered":
            return {
              background: color.gray["950"] + "0D", // 5% opacity
              text: textColor.light["fg-neutral-alternative"],
              border: borderColor.light["color-border-primary"],
            };
          case "pressed":
            return {
              background: color.gray["950"] + "14", // 8% opacity
              text: textColor.light["fg-neutral-alternative"],
              border: borderColor.light["color-border-primary"],
            };
          case "focused":
            return {
              background: color.gray["950"] + "1F", // 12% opacity
              text: textColor.light["fg-neutral-alternative"],
              border: borderColor.light["color-border-focused"],
            };
          default:
            return {
              background: "transparent", // 0% opacity
              text: textColor.light["fg-neutral-alternative"],
              border: borderColor.light["color-border-primary"],
            };
        }
      }
    };

    const colors = getColors();
    return css`
      background-color: ${colors.background};
      color: ${colors.text};
      border: 1px solid ${colors.border};
    `;
  }}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Chip = ({
  type = "outline",
  size = "medium",
  state = "default",
  disabled = false,
  active = false,
  text,
  leadingIcon,
  trailingIcon,
  onClick,
  className,
}: ChipProps) => {
  const [interactionState, setInteractionState] = React.useState(state);

  React.useEffect(() => {
    setInteractionState(state);
  }, [state]);

  const handleMouseEnter = () => {
    if (!disabled && state === "default") {
      setInteractionState("hovered");
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setInteractionState(state);
    }
  };

  const handleMouseDown = () => {
    if (!disabled && state === "default") {
      setInteractionState("pressed");
    }
  };

  const handleMouseUp = () => {
    if (!disabled && state === "default") {
      setInteractionState("hovered");
    }
  };

  const handleFocus = () => {
    if (!disabled && state === "default") {
      setInteractionState("focused");
    }
  };

  const handleBlur = () => {
    if (!disabled) {
      setInteractionState(state);
    }
  };

  return (
    <StyledChip
      type={type}
      size={size}
      state={state !== "default" ? state : interactionState}
      disabled={disabled}
      active={active}
      className={className}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={disabled ? -1 : 0}
    >
      {leadingIcon && (
        <span className="icon">
          {React.isValidElement(leadingIcon)
            ? leadingIcon
            : String(leadingIcon)}
        </span>
      )}
      <span>{text}</span>
      {trailingIcon && (
        <span className="icon">
          {React.isValidElement(trailingIcon)
            ? trailingIcon
            : String(trailingIcon)}
        </span>
      )}
    </StyledChip>
  );
};
