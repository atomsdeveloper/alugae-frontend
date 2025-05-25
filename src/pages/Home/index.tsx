import React from "react";

// Styles
import { BoxSearch, BoxDesc, BoxInput } from "./styled";

// Colors
import * as Colors from "../../config/colors";

// Global Styles
import { ContainerPages } from "../../styles/globals";

// Toastify
import { toast } from "react-toastify";

// Component
import CustomToast from "../../components/CustomToast";
import CustomButton from "../../components/Button";
import Paragraph from "../../components/Paragraph";
import Title from "../../components/Title";

export default function Home() {
  React.useEffect(() => {
    toast.warn(<CustomToast />);
  }, []);

  return (
    <ContainerPages>
      <BoxSearch>
        <BoxDesc>
          <Title text="Tudo pra facilitar a sua hospedagem." />
          <Paragraph colors={Colors.textSecondary} textCenter>
            O que você precisa está aqui. Reserve de onde estiver.
          </Paragraph>
        </BoxDesc>
        <BoxInput>
          <input type="text" />
          <CustomButton bg width="100px" border="8px">
            <Paragraph>Buscar</Paragraph>
          </CustomButton>
        </BoxInput>
      </BoxSearch>
    </ContainerPages>
  );
}
