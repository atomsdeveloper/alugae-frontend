import styled from "styled-components";

// Router Dom
import { Link } from "react-router-dom";

// Colors
import {
  borderRadiusMd,
  infoColorLight,
  paddingLg,
  paddingXl,
  primaryColorLight,
  textPrimary,
} from "../../config/colors";

interface AnchorProps {
  $bg?: boolean;
}

// Anchor / Link
export const Anchor = styled(Link)<AnchorProps>`
  ${(props) =>
    props.$bg &&
    `
      color: ${textPrimary};
      background-color: ${infoColorLight};
      border-radius: ${borderRadiusMd};
      padding: ${paddingLg} ${paddingXl};

      &:hover {
        background-color: ${primaryColorLight};
        color: ${textPrimary};
      }
    `}
`;
