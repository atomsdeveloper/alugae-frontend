import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  borderRadiusMd,
  infoColorLight,
  paddingLg,
  paddingXl,
  primaryColorLight,
  textPrimary,
} from "../../config/colors";

interface AnchorProps {
  $bg?: boolean;
  $width?: string;
  $height?: string;
}

export const Anchor = styled(Link)<AnchorProps>`
  background-color: ${(props) => (props.$bg ? infoColorLight : "transparent")};
  border-radius: ${(props) => (props.$bg ? borderRadiusMd : "0")};
  padding: ${(props) => (props.$bg ? `${paddingLg} ${paddingXl}` : "0")};

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};

  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.$bg ? primaryColorLight : "transparent"};
  }
`;

interface ParagraphProps {
  $bg?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => (props.$bg ? textPrimary : primaryColorLight)};
`;
