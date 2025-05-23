// Styles
import { TitleStyled } from "./styled";

export interface TitleProps {
  text: string;
}

export default function Title({ text }: TitleProps) {
  return <TitleStyled>{text}</TitleStyled>;
}
