import React from "react";

// Styles
import { IconContainer, InputStyled, InputWrapper } from "./styled";

// Types
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  type: string;
  text?: string;
  width?: string;
  borderRadius?: string;
  border?: string;
  height?: string;
}

export default function Input({
  icon,
  type,
  placeholder,
  width,
  height,
  borderRadius,
  border,
  ...props
}: InputProps) {
  return (
    <InputWrapper $width={width} $height={height} $borderRadius={borderRadius}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <InputStyled
        {...props}
        type={type}
        placeholder={placeholder}
        $border={border}
      />
    </InputWrapper>
  );
}
