import React from "react";
import styled from "styled-components";
import { spacing } from "../../tokens/spacing";
import { typography } from "../../tokens";
import fontFamily from "../../tokens/fontFamily";
import textColor from "../../tokens/textColor";

export interface LNBProps {
  children?: React.ReactNode;
  className?: string;
  lang?: "ko" | "en";
  style?: React.CSSProperties;
  bottom?: React.ReactNode;
  title?: string;
}

export const LNB: React.FC<LNBProps> = ({
  children,
  className,
  lang,
  style,
  bottom,
  title,
}) => {
  return (
    <Container className={className} lang={lang} style={style}>
      {title && <Title lang={lang}>{title}</Title>}
      <Groups>{children}</Groups>
      {bottom && <Bottom>{bottom}</Bottom>}
    </Container>
  );
};

const Container = styled.nav`
  ${typography(undefined, "body3", "medium")}
  &:lang(en),
  &[lang="en"] {
    font-family: ${fontFamily.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${fontFamily.ko};
  }

  display: flex;
  flex-direction: column;
  gap: 0;
  padding: ${spacing.gap["gap-4"]};
`;

const Bottom = styled.div`
  margin-top: auto;
  min-height: 89px;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-2"]};
`;

const Title = styled.div`
  ${typography(undefined, "body3", "medium")}
  color: ${textColor.light["fg-neutral-strong"]};
  margin-bottom: ${spacing.gap["gap-5"]};
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-2"]};
`;
