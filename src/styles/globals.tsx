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
    font-family: 'Poppins', sans-serif;
  }

  html {
    font-size: 62.5%;
  } 
  
  body, #root {
    height: 100%;
  }

  body {
    color: ${Colors.primaryColor};
    font-size: ${Colors.fontSizeBase};
  }

  button {
    padding: ${Colors.buttonPadding};
    border-radius: ${Colors.borderRadiusXl};
    font-weight: ${Colors.fontWeightBold};
    transition: all 300ms;
    font-family: 'Poppins';
    border: none;
    background-color: transparent;
  }

  button:hover {
    cursor: ${Colors.buttonCursor};
  }

  button:disabled {
    cursor: ${Colors.buttonDisabledCursor};
  }

  a {
    text-decoration: ${Colors.anchorTextDecoration};
    padding: ${Colors.anchorPadding};
    font-weight: ${Colors.fontWeightMedium};
  }

  a:hover {
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

  // Toastify
  .Toastify__toast-container--top-right {
    top: 100px !important;
    right: 2rem;
  }

  @media only screen and (max-width: 480px) {
    .Toastify__toast-container {
      width: calc(100% - 4rem);
      left: 2rem !important;
      right: 2rem !important;

    }
    
    .Toastify__toast {
      border-radius: ${Colors.borderRadiusSm};
    }
}
`;

// Container Global Template
export const Container = styled.section`
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

export const ContainerPages = styled.section`
  width: 100%;
  height: calc(100vh - 8rem);
`;

export const ContainerHome = styled.section`
  width: 90vw;
  height: 100%;
  margin: 0 auto;
`;
