// Components
import CustomButton from "../Button"; // ajuste o caminho conforme seu projeto

// Styles
import {
  ToastWrapper,
  ContentRow,
  Text,
  IconWrapper,
  ContainerTitle,
} from "./styled";

// Colors
import * as Colors from "../../config/colors";

// Components
import Title from "../Title";

export default function CustomToast() {
  return (
    <ToastWrapper>
      <ContentRow>
        <ContainerTitle>
          <Title
            fontSize={Colors.fontSizeMd}
            text="Ganhe cupons!"
            color={Colors.textSecondary}
          />
          <IconWrapper size={28} color={Colors.primaryColorLight} />
        </ContainerTitle>

        <Text>Pegue seu cupom e aproveite o desconto.</Text>
      </ContentRow>
      <CustomButton bg width="100%" border="8px">
        <p>criar conta</p>
      </CustomButton>
    </ToastWrapper>
  );
}
