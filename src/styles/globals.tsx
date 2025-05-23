// Styled Components
import styled, { createGlobalStyle } from "styled-components";

// React Toastify
import "react-toastify/dist/ReactToastify.css";

// Config Colors
import * as Colors from "../config/colors";

export const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background-color: ${Colors.primaryColorDark};
    color: ${Colors.primaryColor};
    font-size: ${Colors.fontSizeBase};
  }

  button {
    cursor: ${Colors.buttonCursor};
    background: ${Colors.buttonBackground};
    color: ${Colors.buttonColor};
    border: ${Colors.buttonBorder};
    padding: ${Colors.buttonPadding};
    border-radius: ${Colors.borderRadiusSm};
    font-weight: ${Colors.fontWeightBold};
    transition: all 300ms;
    font-family: 'Roboto';
  }

  button:hover {
    background: ${Colors.buttonHoverBackground};
    color: ${Colors.buttonHoverColor};
  }

  button:disabled {
    background: ${Colors.buttonDisabledBackground};
    color: ${Colors.buttonDisabledColor};
    cursor: ${Colors.buttonDisabledCursor};
  }

  a {
    text-decoration: ${Colors.anchorTextDecoration};
    color: ${Colors.anchorColor};
    padding: ${Colors.anchorPadding};
  }

  a:hover {
    color: ${Colors.anchorHoverColor};
    text-decoration: ${Colors.anchorHoverTextDecoration};
  }

  ul {
    list-style: none;
  }

  h1 {
    color: ${Colors.h1Color};
    padding: ${Colors.h1Padding};
    font-size: ${Colors.h1FontSize};
    font-weight: ${Colors.fontWeightBold};
  }

  h2 {
    color: ${Colors.h2Color};
    padding: ${Colors.h2Padding};
    font-size: ${Colors.h2FontSize};
    font-weight: ${Colors.fontWeightSemiBold};
  }

  h3 {
    color: ${Colors.h3Color};
    padding: ${Colors.h3Padding};
    font-size: ${Colors.h3FontSize};
    font-weight: ${Colors.fontWeightMedium};
  }

  h4 {
    color: ${Colors.h4Color};
    padding: ${Colors.h4Padding};
    font-size: ${Colors.h4FontSize};
    font-weight: ${Colors.fontWeightMedium};
  }

  h5 {
    color: ${Colors.h5Color};
    padding: ${Colors.h5Padding};
    font-size: ${Colors.h5FontSize};
    font-weight: ${Colors.fontWeightNormal};
  }

  h6 {
    color: ${Colors.h6Color};
    padding: ${Colors.h6Padding};
    font-size: ${Colors.h6FontSize};
    font-weight: ${Colors.fontWeightLight};
  }

  p {
    margin: 0;
    color: ${Colors.paragraphColor};
    padding: ${Colors.paragraphPadding};
    font-size: ${Colors.paragraphFontSize};
  }

  span {
    color: ${Colors.spanColor};
    padding: ${Colors.spanPadding};
    font-size: ${Colors.spanFontSize};
  }

  // Toastify styles
  body .Toastify__toast-container .Toastify__toast-success {
    background: ${Colors.successColorDark};
  }

  body .Toastify__toast-container .Toastify__toast-error {
    background: ${Colors.errorColorDark};
  }
`;

// Container Global
export const Container = styled.section`
  max-width: 1000px;
  margin: 2rem auto;
  padding: ${Colors.paddingXl};
  display: flex;
  flex-direction: column;
  border-radius: ${Colors.borderRadiusSm};
  box-shadow: ${Colors.shadowMd};
  background: ${Colors.secondaryColorLight};
`;
