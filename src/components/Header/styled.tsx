import styled from "styled-components";

// Global Colors
import { textPrimary } from "../../config/colors";

export const Nav = styled.nav`
  background-color: ${textPrimary};

  height: 8rem;
  padding: 2rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BoxLogo = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;
