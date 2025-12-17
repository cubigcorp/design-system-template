import React from "react";
import styled, { keyframes } from "styled-components";
import color from "../../tokens/color";

type SpinnerSize = "small" | "medium" | "large" | "x-large";

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: string;
  className?: string;
}

const sizeMap = {
  small: 16,
  medium: 20,
  large: 24,
  "x-large": 32,
};

export const Spinner = ({
  size = "medium",
  color: spinnerColor,
  className,
}: SpinnerProps) => {
  const pixelSize = sizeMap[size];
  const defaultColor = spinnerColor || color.gray["950"];

  return (
    <CircularSpinner
      className={className}
      $size={pixelSize}
      $color={defaultColor}
    />
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CircularSpinner = styled.div<{ $size: number; $color: string }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: ${({ $size }) => Math.max(2, $size / 8)}px solid ${color.gray["200"]};
  border-top-color: ${({ $color }) => $color};
  border-radius: 50%;
  animation: ${rotate} 0.8s linear infinite;
`;

Spinner.displayName = "Spinner";
