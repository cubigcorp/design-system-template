import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { DropdownProps, DropdownOption } from "./types";
import { IconArrowDown, IconArrowUp } from "../icons";
import { Label } from "../Label";
import { Description } from "../Description";
import { textColor } from "../../tokens";
import { borderColor } from "../../tokens";
import { radius } from "../../tokens";
import { spacing } from "../../tokens";
import { typography } from "../../tokens";
import { color } from "../../tokens";

const Dropdown: React.FC<DropdownProps> = ({
    size = "medium",
    disabled = false,
    active = false,
    focused = false,
    placeholder = "선택해주세요.",
    value,
    options = [],
    label,
    labelType = "default",
    description,
    descriptionLeadingIcon = false,
    status = "default",
    onChange,
    onFocus,
    onBlur,
    className = "",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalActive, setInternalActive] = useState(active);
    const [internalFocused, setInternalFocused] = useState(focused);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

    const selectedOption = options.find(option => option.value === value);

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

    const handleOptionClick = (option: DropdownOption) => {
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
        <DropdownContainer ref={dropdownRef} className={className}>
            {label && <Label type={labelType}>{label}</Label>}
            <DropdownTrigger
                size={size}
                disabled={disabled}
                active={internalActive}
                focused={internalFocused}
                onClick={handleToggle}
                type="button"
                data-active={internalActive ? "true" : "false"}
            >
                <DropdownValue>
                    {selectedOption ? selectedOption.label : placeholder}
                </DropdownValue>
                <DropdownIcon size={size}>
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
                </DropdownIcon>
            </DropdownTrigger>
            {description && !isOpen && (
                <Description
                    status={status}
                    leadingIcon={descriptionLeadingIcon}
                >
                    {description}
                </Description>
            )}

            {isOpen && (
                <DropdownList size={size}>
                    {options.map((option) => (
                        <DropdownOptionItem
                            key={option.value}
                            onClick={() => handleOptionClick(option)}
                            isSelected={option.value === value}
                        >
                            {option.label}
                        </DropdownOptionItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-1"]};
  width: 100%;
`;

const DropdownTrigger = styled.button<{
    size: "small" | "medium" | "large";
    disabled: boolean;
    active: boolean;
    focused: boolean;
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
  ${({ size }) => {
        const iconGap = size === "large" ? spacing.gap["gap-2.5"] : spacing.gap["gap-2"];
        const iconSize = size === "small" ? 16 : size === "large" ? 24 : 20;
        const rightPadding = iconSize + parseInt(iconGap) * 2;

        switch (size) {
            case "small":
                return `
          height: 32px;
          ${typography("ko", "body2", "regular")}
          padding: ${spacing.gap["gap-1"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
            case "large":
                return `
          height: 48px;
          ${typography("ko", "body3", "regular")}
          padding: ${spacing.gap["gap-3"]} ${spacing.gap["gap-2.5"]};
          padding-right: ${rightPadding}px;
        `;
            default: // medium
                return `
          height: 40px;
          ${typography("ko", "body3", "regular")}
          padding: ${spacing.gap["gap-2"]} ${spacing.gap["gap-2"]};
          padding-right: ${rightPadding}px;
        `;
        }
    }}

  /* Color styles based on status, disabled, active, focused */
  ${({ disabled, active, focused }) => {
        // Disabled 상태
        if (disabled) {
            return `
        background-color: ${color.gray["50"]};
        color: ${textColor.light["fg-neutral-disable"]};
        border-color: ${borderColor.light["color-border-primary"]};
        cursor: not-allowed;
      `;
        }

        // Active & Focused 상태
        if (active && focused) {
            return `
        background-color: ${color.gray["50"]};
        color: ${textColor.light["fg-neutral-primary"]};
        border-color: ${borderColor.light["color-border-focused"]};
      `;
        }

        // Active 상태
        if (active) {
            return `
        background-color: ${color.common["100"]};
        color: ${textColor.light["fg-neutral-primary"]};
        border-color: ${borderColor.light["color-border-primary"]};
      `;
        }

        // Focused 상태
        if (focused) {
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

const DropdownValue = styled.span`
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const DropdownIcon = styled.div<{ size: "small" | "medium" | "large" }>`
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

const DropdownList = styled.div<{ size: "small" | "medium" | "large" }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${color.common["100"]};
  border: 1px solid ${borderColor.light["color-border-primary"]};
  border-radius: ${radius["rounded-2"]};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  margin-top: 4px;
`;

const DropdownOptionItem = styled.div<{ isSelected: boolean }>`
  padding: ${spacing.gap["gap-2"]};
  cursor: pointer;
  ${typography("ko", "body3", "regular")}
  color: ${({ isSelected }) =>
        isSelected ? textColor.light["fg-neutral-primary"] : textColor.light["fg-neutral-alternative"]};
  background-color: ${({ isSelected }) =>
        isSelected ? color.gray["50"] : "transparent"};

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

Dropdown.displayName = "Dropdown";

export { Dropdown }; 