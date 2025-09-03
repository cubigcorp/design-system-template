import React from "react";
import styled from "styled-components";
import { DropdownProps } from "./types";
import { Label } from "../Label";
import { Description } from "../Description";
import { Selector } from "../Selector";
import { spacing } from "../../tokens";

const Dropdown: React.FC<DropdownProps & { lang?: "ko" | "en" }> = ({
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
  style,
  lang,
  ...props
}) => {
  const effectiveLang = lang;

  return (
    <DropdownContainer
      className={`dropdown-container ${className}`}
      style={style}
      {...Object.fromEntries(
        Object.entries(props).filter(
          ([key]) => !["active", "focused", "size", "disabled"].includes(key)
        )
      )}
    >
      {label && (
        <Label type={labelType} lang={effectiveLang}>
          {label}
        </Label>
      )}

      <Selector
        size={size}
        disabled={disabled}
        active={active}
        focused={focused}
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        lang={effectiveLang}
      />

      {description && (
        <Description
          status={status}
          leadingIcon={descriptionLeadingIcon}
          lang={effectiveLang}
        >
          {description}
        </Description>
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

Dropdown.displayName = "Dropdown";

export { Dropdown };
