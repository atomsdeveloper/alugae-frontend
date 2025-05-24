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
  font-size: 12px;
`;

export const ContentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${Colors.primaryColorLight};
`;

export const IconWrapper = styled(HiOutlineTicket)`
  flex: 0.3;
`;

export const Text = styled.p`
  flex: 0.7;
  margin: 0;
  color: ${Colors.primaryColorLight};
`;
