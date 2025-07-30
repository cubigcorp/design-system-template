import { InputProps } from "../Input/types";

export interface TextFieldProps extends InputProps {
  label?: string;
  labelType?: "default" | "required" | "optional";
  description?: string;
  descriptionStatus?: "default" | "error" | "success";
  descriptionLeadingIcon?: boolean;
  type?: "text" | "password";
  className?: string;
}
