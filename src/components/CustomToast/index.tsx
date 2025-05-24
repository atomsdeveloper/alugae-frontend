// Components
import CustomButton from "../Button"; // ajuste o caminho conforme seu projeto

// Styles
import { ToastWrapper, ContentRow, IconWrapper, Text } from "./styled";

export default function CustomToast() {
  return (
    <ToastWrapper>
      <ContentRow>
        <IconWrapper size={40} />
        <Text>Pegue seu cupom e aproveite o desconto.</Text>
      </ContentRow>
      <CustomButton bg width="100%" border="8px">
        <p>criar conta</p>
      </CustomButton>
    </ToastWrapper>
  );
}
