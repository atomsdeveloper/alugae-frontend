import styled from "styled-components";

// Global Styles
import * as Colors from "../../config/colors";

export const TitleStyled = styled.h4`
  color: ${Colors.primaryColor};
  padding: 0.5rem 0;
  font-size: ${Colors.fontSize4xl};

  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: ${Colors.fontSize2xl};
  }

  @media only screen and (max-width: 665px) {
    font-size: ${Colors.fontSizeLg};
  }
`;
