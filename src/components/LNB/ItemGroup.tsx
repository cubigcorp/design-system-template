import React from "react";
import styled from "styled-components";
import { spacing } from "../../tokens/spacing";
import { typography } from "../../tokens";
import textColor from "../../tokens/textColor";
import fontFamily from "../../tokens/fontFamily";

export interface LNBItemGroupProps {
  title?: string;
  children?: React.ReactNode;
  lang?: "ko" | "en";
  className?: string;
  style?: React.CSSProperties;
}

export const LNBItemGroup: React.FC<LNBItemGroupProps> = ({
  title,
  children,
  lang,
  className,
  style,
}) => {
  return (
    <Wrapper className={className} style={style}>
      {title && <Title lang={lang}>{title}</Title>}
      <Items>{children}</Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-1.5"]};
`;

const Title = styled.div`
  ${typography(undefined, "body2", "regular")}
  color: ${textColor.light["fg-neutral-alternative"]};
  &:lang(en),
  &[lang="en"] {
    font-family: ${fontFamily.en};
  }
  &:lang(ko),
  &[lang="ko"] {
    font-family: ${fontFamily.ko};
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-1.5"]};
`;
