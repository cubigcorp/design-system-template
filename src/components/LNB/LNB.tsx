import React, { createContext, useContext } from "react";
import styled from "styled-components";
import { spacing } from "../../tokens/spacing";
import { typography } from "../../tokens";
import fontFamily from "../../tokens/fontFamily";
import textColor from "../../tokens/textColor";

interface LNBContextValue {
  iconOnly: boolean;
}

const LNBContext = createContext<LNBContextValue>({ iconOnly: false });

export const useLNBContext = () => useContext(LNBContext);

export interface LNBProps {
  children?: React.ReactNode;
  className?: string;
  lang?: "ko" | "en";
  style?: React.CSSProperties;
  bottom?: React.ReactNode;
  title?: string;
  iconOnly?: boolean;
}

export const LNB: React.FC<LNBProps> = ({
  children,
  className,
  lang,
  style,
  bottom,
  title,
  iconOnly = false,
}) => {
  return (
    <LNBContext.Provider value={{ iconOnly }}>
      <Container
        className={className}
        lang={lang}
        style={style}
        $iconOnly={iconOnly}
      >
        {!iconOnly && title && <Title lang={lang}>{title}</Title>}
        <Groups>{children}</Groups>
        {bottom && <Bottom $iconOnly={iconOnly}>{bottom}</Bottom>}
      </Container>
    </LNBContext.Provider>
  );
};

const Container = styled.nav<{ $iconOnly: boolean }>`
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
  padding: ${({ $iconOnly }) =>
    $iconOnly ? spacing.gap["gap-2"] : spacing.gap["gap-4"]};
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div<{ $iconOnly: boolean }>`
  margin-top: auto;
  min-height: ${({ $iconOnly }) => ($iconOnly ? "auto" : "89px")};
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
