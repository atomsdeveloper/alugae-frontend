import styled from "styled-components";

// Router Dom
import { Link } from "react-router-dom";

// Global Colors
import { infoColorLight, primaryColor } from "../../config/colors";

// Anchor / Link
export const Anchor = styled(Link)`
  color: ${infoColorLight};
  text-decoration: none;
  padding: 0.25rem;

  &:hover {
    color: ${primaryColor};
    text-decoration: underline;
  }
`;
