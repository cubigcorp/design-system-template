import React from "react";

export interface DescriptionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  status?: "default" | "error" | "success";
  leadingIcon?: boolean;
  className?: string;
}
