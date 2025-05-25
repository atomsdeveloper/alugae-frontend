import styled from "styled-components";

// Colors
import * as Colors from "../../config/colors";

// React Router Dom
import { Link } from "react-router-dom";

export const ContainerCards = styled.section`
  width: 100%;
  height: auto;

  margin-top: 4.875rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const BoxCards = styled.div`
  width: 90%;
  max-width: 842px;
`;

export const CardsItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 180px;
  width: 100%;
`;

export const Card = styled.div`
  width: 48%;
  transition: opacity 1.5s ease;
  height: 100%;
  cursor: pointer;
`;

export const CardLink = styled(Link)`
  width: 100%;
  border-radius: 20px;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  text-decoration: none;

  background-color: #ccc; // Remover
`;

export const CardContent = styled.div`
  width: 80%;
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
  height: 75px;
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
  object-fit: contain;
  resize: auto;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    transform: translateY(16px);
  }
`;

export const CardParagraph = styled.p`
  font-size: ${Colors.fontSizeMd};
  font-weight: 500;
  margin: 0 0 10px;

  @media only screen and (max-width: 550px) {
    font-size: ${Colors.fontSizeBase};
  }
`;

export const CardButton = styled.button`
  display: flex;
  width: 100%;
  height: 36px;
  border-radius: 12px;
  font-size: 0.875rem;
  justify-content: space-around;
  font-weight: 500;
  align-items: center;
  padding: 0 5px;
`;
