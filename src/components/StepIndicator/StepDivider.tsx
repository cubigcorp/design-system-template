"use client";

import React from "react";
import styled, { css } from "styled-components";
import { DividerProps } from "./types";
import color from "../../tokens/color";
import { borderColor } from "../../tokens/borderColor";

export const StepDivider = ({ status }: DividerProps) => {
  return <StyledDivider $status={status} />;
};

const StyledDivider = styled.div<{ $status: string }>`
  flex: 1 1 auto; // 남은 공간 균등 분배
  height: 1px;
  margin: 12px 0 0 0; // 좌우 여백은 wrapper/컨테이너가 담당
  transition: all 0.2s ease-in-out;

  ${({ $status }) => {
    switch ($status) {
      case "Complete":
        return css`
          background-color: ${color.gray["975"]};
        `;
      case "Active":
      case "Inactive":
      default:
        return css`
          background-color: ${borderColor.light["color-border-primary"]};
        `;
    }
  }}
`;
