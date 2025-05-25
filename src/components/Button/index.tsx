import React from "react";

// Styles
import { Button } from "./styled";

// Components
import Paragraph from "../Paragraph";

// Types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bg?: boolean;
  text?: string;
  width?: string;
  border?: string;
  height?: string;
}

export default function CustomButton({
  children,
  text,
  width,
  height,
  border,
  bg = false,
  ...props
}: ButtonProps) {
  return (
    <Button
      $bg={bg}
      $width={width}
      $height={height}
      $border={border}
      {...props}
    >
      {children}
      <Paragraph>{text}</Paragraph>
    </Button>
  );
}
