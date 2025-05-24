import styled from "styled-components";

// Colors
import { textPrimary, primaryColorLight } from "../../config/colors";

interface StyledParagraphProps {
  $bg?: boolean;
}

export const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${({ $bg }) => ($bg ? textPrimary : primaryColorLight)};
`;
