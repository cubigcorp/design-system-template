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
  $left: number;
  $width: number;
}>`
  position: absolute;
  bottom: 0;
  height: 2px;
  background-color: ${textColor.light["fg-neutral-strong"]};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({ $left }) => $left}px;
  width: ${({ $width }) => $width}px;
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
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = React.useState({
    left: 0,
    width: 0,
  });

  const handleItemClick = (index: number) => {
    if (value === undefined) {
      setInternalValue(index);
    }
    onChange?.(index);
  };

  const childrenArray = React.Children.toArray(children);

  const limitedChildren = childrenArray.slice(0, 8);

  if (childrenArray.length > 8) {
    console.warn(
      `Tab: 최대 8개 이하의 탭만 허용됩니다. ${childrenArray.length}개 중 8개만 표시됩니다. 8개 이상 항목이 필요한 경우 드롭다운(Select) 컴포넌트 사용을 고려하세요.`
    );
  }

  React.useEffect(() => {
    const activeTab = tabRefs.current[currentValue];
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }
  }, [currentValue, limitedChildren.length]);

  return (
    <StyledTab className={className} {...props}>
      <SelectionIndicator $left={indicatorStyle.left} $width={indicatorStyle.width} />
      {limitedChildren.map((child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: index,
            active: currentValue === index,
            onClick: () => handleItemClick(index),
            ref: (el: HTMLButtonElement | null) => {
              tabRefs.current[index] = el;
            },
          } as unknown as React.ReactElement);
        }
        return child;
      })}
    </StyledTab>
  );
};
