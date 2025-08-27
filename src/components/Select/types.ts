import React from "react";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  active?: boolean;
  focused?: boolean;
  placeholder?: string;
  value?: string;
  options?: SelectOption[];
  onChange?: (value: string) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  className?: string;
  lang?: "ko" | "en";
}
