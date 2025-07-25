import React from "react";
import styled from "styled-components";
import { textColor } from "../../tokens";
import { color } from "../../tokens";
import { typographyCSS } from "../../tokens";
import { spacing } from "../../tokens";
import { LabelProps } from "./types";

const Label: React.FC<LabelProps> = ({
  children,
  type = "default",
  className = "",
  ...props
}) => {
  const getLabelContent = () => {
    switch (type) {
      case "required":
        return (
          <>
            <span>{children}</span>
            <RequiredIndicator>*</RequiredIndicator>
          </>
        );
      case "optional":
        return (
          <>
            <span>{children}</span>
            <OptionalText>(선택)</OptionalText>
          </>
        );
      default:
        return <span>{children}</span>;
    }
  };

  return (
    <StyledLabel $type={type} className={className} {...props}>
      {getLabelContent()}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<{
  $type: "default" | "required" | "optional";
}>`
  ${typographyCSS.body2}
  height: 20px;
  display: flex;
  align-items: center;
  color: ${textColor.light["fg-neutral-strong"]};
`;

const RequiredIndicator = styled.span`
  ${typographyCSS.caption2}
  color: ${color.red[500]};
  margin-left: ${spacing.gap["gap-0.5"]};
`;

const OptionalText = styled.span`
  ${typographyCSS.body2}
  color: ${textColor.light["fg-neutral-alternative"]};
  margin-left: ${spacing.gap["gap-0.5"]};
`;

export default Label;
