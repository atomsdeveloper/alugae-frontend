import React from "react";

// Styles
import { Button } from "./styled";

// Types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bg?: boolean;
  text?: string;
}

export default function CustomButton({
  children,
  text,
  bg = false,
  ...props
}: ButtonProps) {
  return (
    <Button $bg={bg} {...props}>
      {children}
      {text}
    </Button>
  );
}
