import React from "react";

// Styles
import { BoxSearch, BoxDesc, BoxInput } from "./styled";

// Colors
import * as Colors from "../../config/colors";

// Global Styles
import { ContainerHome, ContainerPages } from "../../styles/globals";

// Toastify
import { toast } from "react-toastify";

// Component
import CustomToast from "../../components/CustomToast";
import CustomButton from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";
import Input from "../../components/Input";
import CardsProducts from "../../components/CardsProducts";

// Icons
import { CiLocationOn } from "react-icons/ci";

export default function Home() {
  React.useEffect(() => {
    toast.warn(<CustomToast />);
  }, []);

  return (
    <ContainerPages>
      <ContainerHome>
        <BoxSearch>
          <BoxDesc>
            <Title text="Tudo pra facilitar a sua hospedagem." />
            <Paragraph colors={Colors.textSecondary} textCenter>
              O que você precisa está aqui. Reserve de onde estiver.
            </Paragraph>
          </BoxDesc>
          <BoxInput>
            <Input
              type="text"
              placeholder="Local que deseja encontrar..."
              width="100%"
              height="100%"
              borderRadius={Colors.borderRadiusSm}
              border={"none"}
              icon={<CiLocationOn size={24} color={Colors.primaryColorLight} />}
            />
            <CustomButton
              bg
              width="100px"
              height="100%"
              border={Colors.borderRadiusSm}
            >
              <Paragraph>Buscar</Paragraph>
            </CustomButton>
          </BoxInput>
        </BoxSearch>

        <CardsProducts></CardsProducts>
      </ContainerHome>
    </ContainerPages>
  );
}
