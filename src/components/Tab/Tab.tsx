import styled from "styled-components";
import { TabProps } from "./types";
import { spacing } from "../../tokens/spacing";
import color from "../../tokens/color";
import textColor from "../../tokens/textColor";
import React from "react";

const StyledTab = styled.div`
  display: flex;
  border-bottom: 1px solid ${color.gray["200"]};
  gap: ${spacing.gap["gap-6"]};
  position: relative;
`;

const SelectionIndicator = styled.div<{
  $activeIndex: number;
  $totalItems: number;
}>`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${textColor.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $activeIndex, $totalItems }) => {
    const gapSize = 24; // gap-6 = 24px
    const itemWidth = 120; // 고정 너비 120px
    const leftPosition = $activeIndex * (itemWidth + gapSize);

    return `
      left: ${leftPosition}px;
      width: ${itemWidth}px;
    `;
  }}
`;

export const Tab = ({
  children,
  className,
  defaultValue = 0,
  value,
  onChange,
  ...props
}: TabProps) => {
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
    <StyledTab className={className} {...props}>
      <SelectionIndicator
        $activeIndex={currentValue}
        $totalItems={childrenArray.length}
      />
      {childrenArray.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: index,
            active: currentValue === index,
            onClick: () => handleItemClick(index),
          } as unknown as React.ReactElement);
        }
        return child;
      })}
    </StyledTab>
  );
};
