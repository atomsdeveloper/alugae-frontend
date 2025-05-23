// Styled
import styled from "styled-components";

// Colors
import * as Colors from "../../config/colors";

// Type
interface ButtonProps {
  $bg?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${(props) =>
    props.$bg &&
    `
      background-color: ${Colors.infoColorLight};
      color: ${Colors.textPrimary};

      &:hover {
        background-color: ${Colors.primaryColorLight};
        color: ${Colors.textPrimary};
      }
    `}
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    color: ${Colors.primaryColorLight};
  }

  &:disabled {
    /* color: #aaaaaa; */
    cursor: not-allowed;
  }
`;
