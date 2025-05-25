// Styled
import styled from "styled-components";

// Colors
import * as Colors from "../../config/colors";

// Type
interface ButtonProps {
  $bg?: boolean;
  $width?: string;
  $height?: string;
  $border?: string;
}

export const Button = styled.button<ButtonProps>`
  ${(props) =>
    props.$bg &&
    `
      background-color: ${Colors.infoColorLight};
      color: ${Colors.textPrimary};

      &:hover {
        background-color: ${Colors.primaryColorLight};
      }
    `}

  width: ${(props) => props.$width || "40px"};
  height: ${(props) => props.$height || "40px"};

  border-radius: ${(props) => props.$border || "none"};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  &:hover {
    cursor: pointer;
    color: ${Colors.primaryColorLight};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
