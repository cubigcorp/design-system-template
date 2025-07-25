import React from "react";
import styled from "styled-components";
import { textColor } from "../../tokens";
import { negativeColor } from "../../tokens";
import { positiveColor } from "../../tokens";
import { typographyCSS } from "../../tokens";
import { spacing } from "../../tokens";
import type { DescriptionProps } from "./types";

const Description: React.FC<DescriptionProps> = ({
  children,
  status = "default",
  leadingIcon = false,
  className = "",
  ...props
}) => {
  const getIcon = () => {
    if (!leadingIcon) return null;

    switch (status) {
      case "error":
        return (
          <ErrorIcon>
            <img
              src="./icons/Icon_error.svg"
              alt="Error"
              width="16"
              height="16"
            />
          </ErrorIcon>
        );
      case "success":
        return (
          <SuccessIcon>
            <img
              src="./icons/Icon_circlecheck.svg"
              alt="Success"
              width="16"
              height="16"
            />
          </SuccessIcon>
        );
      default:
        return null;
    }
  };

  return (
    <StyledDescription status={status} className={className} {...props}>
      {getIcon()}
      <span>{children}</span>
    </StyledDescription>
  );
};

const StyledDescription = styled.div<{
  status: "default" | "error" | "success";
}>`
  ${typographyCSS.caption2}
  height: 16px;
  display: flex;
  align-items: center;
  margin-top: ${spacing.gap["gap-1"]};
  color: ${({ status }) => {
    switch (status) {
      case "error":
        return negativeColor.light["fg-negative-primary"];
      case "success":
        return positiveColor.light["fg-positive-primary"];
      default:
        return textColor.light["fg-neutral-assistive"];
    }
  }};
`;

const IconBase = styled.div`
  width: 16px;
  height: 16px;
  margin-right: ${spacing.gap["gap-1"]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const ErrorIcon = styled(IconBase)`
  color: ${negativeColor.light["fg-negative-primary"]};
`;

const SuccessIcon = styled(IconBase)`
  color: ${positiveColor.light["fg-positive-primary"]};
`;

export default Description;
