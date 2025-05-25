// Styled
import styled from "styled-components";

// Colors
import * as Colors from "../../config/colors";

// Type
interface InputProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
  $border?: string;
}

interface StyledProps {
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}

export const InputStyled = styled.input<InputProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "40px"};

  border-radius: ${(props) => props.$borderRadius || "none"};
  border: ${(props) => (props.$border ? props.$border : "1px solid #ccc")};

  display: flex;
  align-items: center;
  justify-content: center;

  /* padding: 0.5rem 1rem; */

  &:hover {
    cursor: pointer;
    color: ${Colors.textSecondary};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const InputWrapper = styled.div<StyledProps>`
  width: ${(p) => p.$width || "100%"};
  height: ${(p) => p.$height || "40px"};
  border-radius: ${(p) => p.$borderRadius || "4px"};
  border: 1px solid ${Colors.textSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
