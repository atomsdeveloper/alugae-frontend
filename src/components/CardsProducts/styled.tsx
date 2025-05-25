import styled from "styled-components";

// Colors
import * as Colors from "../../config/colors";

// React Router Dom
import { Link } from "react-router-dom";

// Types
export interface CardLinkProps {
  $bgCard: string;
}

export interface CardButtonProps {
  $bgButton: string;
}

export interface CardTextProps {
  $textColor: string;
}

export const ContainerCards = styled.section`
  width: 100%;
  height: auto;

  margin-top: 4.875rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BoxCards = styled.div`
  width: 100%;
  max-width: 95%;
`;

export const CardsItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 184px;
  width: 100%;
`;

export const Card = styled.div`
  width: 48%;
  transition: opacity 1.5s ease;
  height: 100%;
  cursor: pointer;
`;

export const CardLink = styled(Link)<CardLinkProps>`
  width: 100%;
  border-radius: 20px;
  text-align: center;

  color: ${(props) =>
    props.$bgCard === Colors.textPrimary
      ? Colors.primaryColorLight
      : Colors.textPrimary};

  border: ${(props) =>
    props.$bgCard === Colors.textPrimary ? Colors.buttonBorder : "none"};

  display: flex;
  box-shadow: ${Colors.shadowSm};
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  text-decoration: none;

  background-color: ${(props) => (props.$bgCard ? props.$bgCard : "")};
`;

export const CardContent = styled.div`
  width: 90%;
  cursor: pointer;

  @media only screen and (mix-width: 768px) {
    position: relative;
    display: flex;
    height: 100%;
    width: 90%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }
`;

export const CardImage = styled.div`
  height: 80px;
  width: 90%;
  overflow: hidden;
  margin: 0 auto;

  @media only screen and (mix-width: 768px) {
    overflow: visible;
    position: absolute;
    right: -14px;
    width: 62%;
    height: auto;
    bottom: 8px;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  resize: auto;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    transform: translateY(16px);
    object-fit: contain;
  }
`;

export const CardParagraph = styled.p<CardTextProps>`
  font-size: ${Colors.fontSizeMd};
  font-weight: 500;
  margin: 0 0 10px;

  color: ${(props) => props.$textColor};

  @media only screen and (max-width: 550px) {
    font-size: ${Colors.fontSizeBase};
  }
`;

export const CardButton = styled.button<CardButtonProps>`
  display: flex;
  width: 100%;
  height: 36px;
  border-radius: 12px;
  font-size: 0.875rem;
  justify-content: space-around;
  font-weight: 500;
  align-items: center;
  padding: 0 5px;

  color: ${(props) =>
    props.$bgButton === Colors.textPrimary
      ? Colors.primaryColorLight
      : Colors.textPrimary};

  background-color: ${(props) =>
    props.$bgButton === Colors.textPrimary
      ? Colors.textPrimary
      : Colors.primaryColorLight};
`;
