import styled from "styled-components";

// Colors
import { textSecondary } from "../../config/colors";

// interface BoxSearchProps {
//   $bg?: boolean;
// }

export const BoxSearch = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const BoxDesc = styled.div`
  padding: 2rem;

  margin-top: 1rem;
`;

export const BoxInput = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-color: ${textSecondary};
`;
