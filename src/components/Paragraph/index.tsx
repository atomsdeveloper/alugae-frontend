export interface ParagraphProps {
  children: React.ReactNode;
  bg?: boolean;
}

// Styles
import { StyledParagraph } from "./styled";

export default function Paragraph({ children, bg = false }: ParagraphProps) {
  return <StyledParagraph $bg={bg}>{children}</StyledParagraph>;
}
