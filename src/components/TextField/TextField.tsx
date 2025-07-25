import React, { useState, forwardRef } from "react";
import styled from "styled-components";
import Label from "../Label";
import Input from "../Input";
import Description from "../Description";
import { TextFieldProps } from "./types";
import { spacing } from "../../tokens";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      labelType = "default",
      description,
      descriptionStatus = "default",
      descriptionLeadingIcon = false,
      size = "medium",
      status = "normal",
      disabled = false,
      placeholder,
      value,
      onChange,
      onFocus,
      onBlur,
      className = "",
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      setIsActive(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setIsActive(false);
      onBlur?.(event);
    };

    return (
      <Container className={className}>
        {label && <Label type={labelType}>{label}</Label>}

        <Input
          ref={ref}
          size={size}
          status={status}
          disabled={disabled}
          active={isActive}
          focused={isFocused}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />

        {description && (
          <Description
            status={descriptionStatus}
            leadingIcon={descriptionLeadingIcon}
          >
            {description}
          </Description>
        )}
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.gap["gap-1"]};
`;

TextField.displayName = "TextField";

export default TextField;
