import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SelectorProps, SelectorOption } from "./types";
import { IconArrowDown, IconArrowUp } from "../icons";
import { Menu } from "../Menu";
import { Cell } from "../Cell";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { typography } from "../../tokens";
import { color } from "../../tokens";

const Selector: React.FC<SelectorProps> = ({
  size = "medium",
  disabled = false,
  active = false,
  focused = false,
  placeholder = "선택해주세요.",
  value,
  options = [],
  onChange,
  onFocus,
  onBlur,
  className = "",
  style,
  lang = "ko",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalActive, setInternalActive] = useState(active);
  const [internalFocused, setInternalFocused] = useState(focused);
  const selectorRef = useRef<HTMLDivElement>(null);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setInternalFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // props 변경 시 내부 상태 업데이트
  useEffect(() => {
    setInternalActive(active);
  }, [active]);

  useEffect(() => {
    setInternalFocused(focused);
  }, [focused]);

  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
      if (!isOpen) {
        setInternalFocused(true);
        setInternalActive(true);
        onFocus?.({} as React.FocusEvent<HTMLButtonElement>);
      } else {
        setInternalFocused(false);
        setInternalActive(false);
        onBlur?.({} as React.FocusEvent<HTMLButtonElement>);
      }
    }
  };

  const handleOptionClick = (option: SelectorOption) => {
    onChange?.(option.value);
    setIsOpen(false);
    setInternalFocused(false);
    onBlur?.({} as React.FocusEvent<HTMLButtonElement>);
  };

  const getIconColor = () => {
    if (disabled) {
      return textColor.light["fg-neutral-alternative"];
    }
    return textColor.light["fg-neutral-primary"];
  };

  return (
    <SelectorContainer
      ref={selectorRef}
      className={`selector-container ${className}`}
      style={style}
      {...props}
    >
      <SelectorTrigger
        $size={size}
        $disabled={disabled}
        $active={internalActive}
        $focused={internalFocused}
        lang={lang}
        onClick={handleToggle}
        type="button"
        data-active={internalActive ? "true" : "false"}
      >
        <SelectorValue>
          {selectedOption ? selectedOption.label : placeholder}
        </SelectorValue>
        <SelectorIcon size={size}>
          {isOpen ? (
            <IconArrowUp
              width={size === "small" ? 16 : size === "large" ? 24 : 20}
              height={size === "small" ? 16 : size === "large" ? 24 : 20}
              color={getIconColor()}
            />
          ) : (
            <IconArrowDown
              width={size === "small" ? 16 : size === "large" ? 24 : 20}
              height={size === "small" ? 16 : size === "large" ? 24 : 20}
              color={getIconColor()}
            />
          )}
        </SelectorIcon>
      </SelectorTrigger>

      {isOpen && (
        <SelectorMenuWrapper>
          <Menu>
            {options.map((option) => (
              <Cell
                key={option.value}
                text={option.label}
                active={option.value === value}
                onClick={() => handleOptionClick(option)}
              />
            ))}
          </Menu>
        </SelectorMenuWrapper>
      )}
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SelectorMenuWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 1000;
  margin-top: 4px;

  /* Menu 컴포넌트의 width를 부모에 맞추기 */
  & > div {
    width: 100% !important;
    max-height: 400px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

const SelectorTrigger = styled.button<{
  $size: "small" | "medium" | "large";
  $disabled: boolean;
  $active: boolean;
  $focused: boolean;
  lang?: "ko" | "en";
}>`
  width: 100%;
  border: 1px solid;
  border-radius: ${radius["rounded-2"]};
  outline: none;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  /* Size styles */
  ${({ $size, lang = "ko" }) => {
    const iconGap =
      $size === "large" ? spacing.gap["gap-2.5"] : spacing.gap["gap-2"];
    const iconSize = $size === "small" ? 16 : $size === "large" ? 24 : 20;
    const rightPadding = iconSize + parseInt(iconGap) * 2;

    switch ($size) {
      case "small":
        return `
          height: 32px;
          ${typography(lang, "body2", "regular")}
          padding: ${spacing.gap["gap-1"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
      case "large":
        return `
          height: 48px;
          ${typography(lang, "body3", "regular")}
          padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-2.5"]};
          padding-right: ${rightPadding}px;
        `;
      default: // medium
        return `
          height: 40px;
          ${typography(lang, "body3", "regular")}
          padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
    }
  }}

  /* Color styles based on status, disabled, active, focused */
  ${({ $disabled, $active, $focused }) => {
    // Disabled 상태
    if ($disabled) {
      return `
        background-color: ${color.gray["50"]};
        color: ${textColor.light["fg-neutral-disable"]};
        border-color: ${borderColor.light["color-border-primary"]};
        cursor: not-allowed;
      `;
    }

    // Active & Focused 상태
    if ($active && $focused) {
      return `
        background-color: ${color.gray["50"]};
        color: ${textColor.light["fg-neutral-primary"]};
        border-color: ${borderColor.light["color-border-focused"]};
      `;
    }

    // Active 상태
    if ($active) {
      return `
        background-color: ${color.common["100"]};
        color: ${textColor.light["fg-neutral-primary"]};
        border-color: ${borderColor.light["color-border-primary"]};
      `;
    }

    // Focused 상태
    if ($focused) {
      return `
        background-color: ${color.gray["50"]};
        color: ${textColor.light["fg-neutral-alternative"]};
        border-color: ${borderColor.light["color-border-focused"]};
      `;
    }

    // Default 상태
    return `
      background-color: ${color.common["100"]};
      color: ${textColor.light["fg-neutral-alternative"]};
      border-color: ${borderColor.light["color-border-primary"]};
    `;
  }}

  &:hover:not(:disabled):not([data-active="true"]) {
    background-color: ${color.gray["50"]};
    border-color: ${color.gray["300"]};
  }

  &:active:not(:disabled):not([data-active="true"]) {
    background-color: ${color.gray["50"]};
    border-color: ${color.gray["300"]};
  }
`;

const SelectorValue = styled.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SelectorIcon = styled.div<{ size: "small" | "medium" | "large" }>`
  position: absolute;
  right: ${({ size }) =>
    size === "large" ? spacing.gap["gap-2.5"] : spacing.gap["gap-2"]};
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

Selector.displayName = "Selector";

export { Selector };
