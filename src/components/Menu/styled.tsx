import styled, { keyframes, css } from "styled-components";

// Colors
import * as Colors from "../../config/colors";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5); // Cor opaca
  z-index: 999; // acima de tudo
`;

// Animações
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(100%);
  }
`;

// Props
interface SectionProps {
  $isClosing?: boolean;
}

export const Section = styled.section<SectionProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 80%;
  height: 100vh;
  z-index: 1000;
  background-color: ${Colors.textPrimary};

  padding: 1.2rem;

  animation: ${({ $isClosing }) =>
    $isClosing
      ? css`
          ${slideOut} 0.5s ease forwards
        `
      : css`
          ${slideIn} 0.5s ease forwards
        `};
`;

export const HeaderMenu = styled.div`
  height: 7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxLogo = styled.div`
  width: 100px;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const ListLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  height: 100%;

  margin-top: 1rem;
  padding: 1rem;
`;
