import styled from "styled-components";

// Global Styles
import * as Colors from "../../config/colors";

export interface TitleProps {
  $color: string;
  $fontSize: string;
}

export const TitleStyled = styled.h1<TitleProps>`
  color: ${(props) => (props.$color ? props.$color : Colors.primaryColor)};

  font-size: ${(props) =>
    props.$fontSize ? props.$fontSize : Colors.fontSize4xl};

  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: ${(props) =>
      props.$fontSize ? props.$fontSize : Colors.fontSize4xl};
  }

  @media only screen and (max-width: 665px) {
    font-size: ${(props) =>
      props.$fontSize ? props.$fontSize : Colors.fontSize4xl};
  }
`;
