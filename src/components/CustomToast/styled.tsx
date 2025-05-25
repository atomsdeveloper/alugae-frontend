import styled from "styled-components";

// Icons
import { HiOutlineTicket } from "react-icons/hi2";

// Colors
import * as Colors from "../../config/colors";

export const ToastWrapper = styled.div`
  color: ${Colors.primaryColorLight};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContentRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  color: ${Colors.primaryColorLight};
`;

export const ContainerTitle = styled.div`
  display: flex;

  justify-content: start;
  align-items: center;
  gap: 0.8rem;
`;

export const IconWrapper = styled(HiOutlineTicket)``;

export const Text = styled.p`
  color: ${Colors.textSecondary};
`;
