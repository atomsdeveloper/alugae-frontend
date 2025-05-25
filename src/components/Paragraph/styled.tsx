import styled from "styled-components";

// Colors
import { fontSizeSm, textPrimary } from "../../config/colors";

interface StyledParagraphProps {
  $bg?: boolean;
  $color?: string;
  $textCenter?: boolean;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${({ $color }) => ($color ? $color : textPrimary)};
  text-align: ${({ $textCenter }) => ($textCenter ? "center" : "")};

  @media only screen and (max-width: 665px) {
    font-size: ${fontSizeSm};
  }
`;
