import styled from "styled-components";
import { SegmentedControlProps } from "./types";
import { radius } from "../../tokens/radius";
import { spacing } from "../../tokens/spacing";
import color from "../../tokens/color";
import React from "react";

const StyledSegmentedControl = styled.div`
  display: inline-flex;
  background-color: ${color.gray["50"]};
  border-radius: ${radius["rounded-2"]};
  padding: ${spacing.gap["gap-1"]}; // gap-1 (Top/Bottom) gap-1 (Left/Right)
  gap: ${spacing.gap["gap-0.5"]};
`;

export const SegmentedControl = ({
  children,
  className,
  defaultValue = 0,
  value,
  onChange,
}: SegmentedControlProps) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value !== undefined ? value : internalValue;

  const handleItemClick = (index: number) => {
    if (value === undefined) {
      setInternalValue(index);
    }
    onChange?.(index);
  };

  const childrenArray = React.Children.toArray(children);

  return (
    <StyledSegmentedControl className={className}>
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: index,
            active: currentValue === index,
            onClick: () => handleItemClick(index),
          });
        }
        return child;
      })}
    </StyledSegmentedControl>
  );
};
