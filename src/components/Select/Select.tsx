import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { SelectProps, SelectOption } from "./types";
import { IconArrowDown, IconArrowUp } from "../icons";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { typography } from "../../tokens";
import { color } from "../../tokens";
import { useEffectiveLang } from "../../i18n/LanguageContext";

const Select: React.FC<SelectProps & { lang?: "ko" | "en" }> = ({
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
  lang,
}) => {
  const effectiveLang = useEffectiveLang(lang);
  const [isOpen, setIsOpen] = useState(false);
  const [internalActive, setInternalActive] = useState(active);
  const [internalFocused, setInternalFocused] = useState(focused);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
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

  const handleOptionClick = (option: SelectOption) => {
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
    <SelectContainer ref={selectRef} className={className}>
      <SelectTrigger
        size={size}
        disabled={disabled}
        active={internalActive}
        focused={internalFocused}
        lang={effectiveLang}
        onClick={handleToggle}
        type="button"
        data-active={internalActive ? "true" : "false"}
      >
        <SelectValue>
          {selectedOption ? selectedOption.label : placeholder}
        </SelectValue>
        <SelectIcon size={size}>
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
        </SelectIcon>
      </SelectTrigger>

      {isOpen && (
        <SelectDropdown size={size}>
          {options.map((option) => (
            <SelectOptionItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
              $isSelected={option.value === value}
              $lang={effectiveLang}
            >
              {option.label}
            </SelectOptionItem>
          ))}
        </SelectDropdown>
      )}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const SelectTrigger = styled.button<{
  size: "small" | "medium" | "large";
  disabled: boolean;
  active: boolean;
  focused: boolean;
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

  &[lang="ko"] {
    font-family: var(--font-family-ko);
  }

  &[lang="en"] {
    font-family: var(--font-family-en);
  }

  ${({ size, lang = "ko" }) => {
    const iconGap =
      size === "large" ? spacing.gap["gap-2.5"] : spacing.gap["gap-2"];
    const iconSize = size === "small" ? 16 : size === "large" ? 24 : 20;
    const rightPadding = iconSize + parseInt(iconGap) * 2;

    switch (size) {
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
      default:
        return `
                    height: 40px;
                    ${typography(lang, "body3", "regular")}
                    padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-2"]};
                    padding-right: ${rightPadding}px;
                `;
    }
  }}

  ${({ disabled, active, focused }) => {
    if (disabled) {
      return `
                background-color: ${color.gray["50"]};
                color: ${textColor.light["fg-neutral-disable"]};
                border-color: ${borderColor.light["color-border-primary"]};
                cursor: not-allowed;
            `;
    }

    if (active && focused) {
      return `
                background-color: ${color.gray["50"]};
                color: ${textColor.light["fg-neutral-primary"]};
                border-color: ${borderColor.light["color-border-focused"]};
            `;
    }

    if (active) {
      return `
                background-color: ${color.common["100"]};
                color: ${textColor.light["fg-neutral-primary"]};
                border-color: ${borderColor.light["color-border-primary"]};
            `;
    }

    if (focused) {
      return `
                background-color: ${color.gray["50"]};
                color: ${textColor.light["fg-neutral-alternative"]};
                border-color: ${borderColor.light["color-border-focused"]};
            `;
    }

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

const SelectValue = styled.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SelectIcon = styled.div<{ size: "small" | "medium" | "large" }>`
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

const SelectDropdown = styled.div<{ size: "small" | "medium" | "large" }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${color.common["100"]};
  border: 1px solid ${borderColor.light["color-border-primary"]};
  border-radius: ${radius["rounded-2"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`;

const SelectOptionItem = styled.div<{
  $isSelected: boolean;
  $lang?: "ko" | "en";
}>`
  padding: ${spacing.gap["gap-2"]};
  cursor: pointer;
  ${({ $lang = "ko" }) => typography($lang, "body3", "regular")}
  color: ${({ $isSelected }) =>
    $isSelected
      ? textColor.light["fg-neutral-primary"]
      : textColor.light["fg-neutral-alternative"]};
  background-color: ${({ $isSelected }) =>
    $isSelected ? color.gray["50"] : "transparent"};

  &:hover {
    background-color: ${color.gray["50"]};
  }

  &:first-child {
    border-radius: ${radius["rounded-2"]} ${radius["rounded-2"]} 0 0;
  }

  &:last-child {
    border-radius: 0 0 ${radius["rounded-2"]} ${radius["rounded-2"]};
  }
`;

Select.displayName = "Select";

export { Select };
