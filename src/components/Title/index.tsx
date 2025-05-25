// Styles
import { TitleStyled } from "./styled";

export interface TitleProps {
  text: string;
  color: string;
  fontSize: string;
}

export default function Title({ text, color, fontSize }: TitleProps) {
  return (
    <TitleStyled $fontSize={fontSize} $color={color}>
      {text}
    </TitleStyled>
  );
}
