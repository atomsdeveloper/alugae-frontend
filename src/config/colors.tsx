import styled from "styled-components";

// ====== Colors ======

// Primary (azul suave)
export const primaryColorLight = "#64B5F6"; // azul claro
export const primaryColor = "#2196F3"; // azul médio (base)
export const primaryColorDark = "#1976D2"; // azul escuro
// Secondary (azul vibrante)
export const secondaryColorLight = "#0b3c7a"; // mais claro
export const secondaryColor = "#082d6a"; // padrão
export const secondaryColorDark = "#061e5a"; // mais escuro
export const secondaryColorDarker = "#030f49"; // ainda mais escuro
export const secondaryColorDeep = "#000039"; // o azul mais escuro

// Text colors
export const textPrimary = "#FFFFFF"; // para dark mode
export const textSecondary = "#9b9999";
export const backgroundColor = "#030f49"; // para dark mode
export const surfaceColor = "#061e5a"; // cards, containers
export const borderColor = "#082d6a"; // separadores

// ====== Toastify ======

// Success (verde)
export const successColorLight = "#81C784";
export const successColorDark = "#388E3C";

// Error (vermelho)
export const errorColorLight = "#E57373";
export const errorColorDark = "#C62828";

// Warning (laranja)
export const warningColorLight = "#FFD54F";
export const warningColorDark = "#FF6F00";

// Info (ciano)
export const infoColorLight = "#4DD0E1";
export const infoColorDark = "#007C91";

// ====== Spacing ======
export const paddingXs = "0.1rem";
export const paddingSm = "0.25rem";
export const paddingMd = "0.5rem";
export const paddingLg = "1rem";
export const paddingXl = "2rem";

// ====== Border Radius ======
export const borderRadiusSm = "4px";
export const borderRadiusMd = "8px";
export const borderRadiusLg = "16px";
export const borderRadiusXl = "50%";

// ====== Font Sizes ======
export const fontSizeXs = "0.875rem";
export const fontSizeSm = "1.275rem";
export const fontSizeBase = "1.6rem";
export const fontSizeMd = "2rem";
export const fontSizeLg = "2.4rem";
export const fontSizeXl = "2.8rem";
export const fontSize2xl = "3.2rem";
export const fontSize3xl = "3.6rem";
export const fontSize4xl = "4rem";

// ====== Font Weights ======
export const fontWeightThin = "100";
export const fontWeightExtraLight = "200";
export const fontWeightLight = "300";
export const fontWeightNormal = "400";
export const fontWeightMedium = "500";
export const fontWeightSemiBold = "600";
export const fontWeightBold = "700";
export const fontWeightExtraBold = "800";
export const fontWeightBlack = "900";

// ====== Shadows ======
export const shadowSm = "0 1px 2px rgba(0, 0, 0, 0.05)";
export const shadowMd = "0 2px 4px rgba(0, 0, 0, 0.1)";
export const shadowLg = "0 4px 8px rgba(0, 0, 0, 0.15)";

// ====== Input ======
export const inputBackground = secondaryColorLight;
export const inputColor = primaryColor;

export const inputBorder = `1px solid ${secondaryColorDark}`;
export const inputBorderRadius = borderRadiusSm;

export const inputPadding = paddingSm;

export const inputPlaceholderColor = "#999999";

export const inputFocusBorder = `1px solid ${primaryColor}`;
export const inputFocusOutline = "none";

// ====== Button ======
export const buttonBackground = primaryColor;
export const buttonColor = "#ffffff";

export const buttonBorder = `1px solid ${primaryColorLight}`;
export const buttonPadding = "0.5rem 1rem";

export const buttonCursor = "pointer";

export const buttonHoverBackground = primaryColorLight;
export const buttonHoverColor = "#ffffff";

export const buttonDisabledBackground = primaryColorDark;
export const buttonDisabledColor = "#aaaaaa";
export const buttonDisabledCursor = "not-allowed";

// ====== Anchor ======
export const anchorColor = textPrimary;

export const anchorTextDecoration = "none";

export const anchorPadding = "0.25rem";

export const anchorHoverColor = primaryColorDark;
export const anchorHoverTextDecoration = "none";

// ====== Titles ======
export const h1Color = primaryColor;
export const h1Padding = "0.5rem 0";
export const h1FontSize = fontSize4xl;

export const h2Color = secondaryColor;
export const h2Padding = "0.5rem 0";
export const h2FontSize = fontSize3xl;

export const h3Color = primaryColorLight;
export const h3Padding = "0.5rem 0";
export const h3FontSize = fontSize2xl;

export const h4Color = secondaryColorLight;
export const h4Padding = "0.5rem 0";
export const h4FontSize = fontSizeXl;

export const h5Color = primaryColorDark;
export const h5Padding = "0.5rem 0";
export const h5FontSize = fontSizeLg;

export const h6Color = secondaryColorDark;
export const h6Padding = "0.5rem 0";
export const h6FontSize = fontSizeMd;

// ====== Paragraph ======
export const paragraphColor = "#ffffff";
export const paragraphPadding = "0.25rem 0";
export const paragraphFontSize = fontSizeBase;

// ====== Span ======
export const spanColor = "#cccccc";
export const spanPadding = "0.1rem 0";
export const spanFontSize = fontSizeSm;

// ====== Styled Components ======

// // Input
// export const Input = styled.input`
//   background: ${secondaryColorLight};
//   color: ${primaryColor};
//   border: 1px solid ${secondaryColorDark};
//   padding: ${paddingSm};
//   border-radius: ${borderRadiusSm};

//   &::placeholder {
//     color: #999999;
//   }

//   &:focus {
//     border: 1px solid ${primaryColor};
//     outline: none;
//   }
// `;

// // Titles

// export const H2 = styled.h2`
//   color: ${secondaryColor};
//   padding: 0.5rem 0;
//   font-size: ${fontSize3xl};
// `;

// export const H3 = styled.h3`
//   color: ${primaryColorLight};
//   padding: 0.5rem 0;
//   font-size: ${fontSize2xl};
// `;

// export const H4 = styled.h4`
//   color: ${secondaryColorLight};
//   padding: 0.5rem 0;
//   font-size: ${fontSizeXl};
// `;

// export const H5 = styled.h5`
//   color: ${primaryColorDark};
//   padding: 0.5rem 0;
//   font-size: ${fontSizeLg};
// `;

// export const H6 = styled.h6`
//   color: ${secondaryColorDark};
//   padding: 0.5rem 0;
//   font-size: ${fontSizeMd};
// `;

// Paragraph
export const Paragraph = styled.p`
  color: ${primaryColor};
  padding: 0.25rem 0;
  font-size: ${fontSizeBase};
`;

// Span
export const Span = styled.span`
  color: #cccccc;
  padding: 0.1rem 0;
  font-size: ${fontSizeSm};
`;
