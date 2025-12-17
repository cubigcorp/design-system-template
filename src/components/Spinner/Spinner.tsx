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
  const strokeWidth = Math.max(2, pixelSize / 8);
  const radius = (pixelSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <SpinnerWrapper className={className} $size={pixelSize}>
      <SpinnerSvg viewBox={`0 0 ${pixelSize} ${pixelSize}`}>
        <circle
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          r={radius}
          fill="none"
          stroke={color.gray["200"]}
          strokeWidth={strokeWidth}
        />
        <SpinnerCircle
          cx={pixelSize / 2}
          cy={pixelSize / 2}
          r={radius}
          fill="none"
          stroke={defaultColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.25} ${circumference * 0.75}`}
        />
      </SpinnerSvg>
    </SpinnerWrapper>
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

const SpinnerWrapper = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

const SpinnerSvg = styled.svg`
  width: 100%;
  height: 100%;
  animation: ${rotate} 0.8s linear infinite;
`;

const SpinnerCircle = styled.circle``;

Spinner.displayName = "Spinner";
