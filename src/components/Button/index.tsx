import React from "react";

// Styles
import { Button } from "./styled";

// Types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bg?: boolean;
  text?: string;
  width?: string;
  height?: string;
}

export default function CustomButton({
  children,
  text,
  width,
  height,
  bg = false,
  ...props
}: ButtonProps) {
  return (
    <Button $bg={bg} $width={width} $height={height} {...props}>
      {children}
      {text}
    </Button>
  );
}
