export interface ParagraphProps {
  children: React.ReactNode;
  bg?: boolean;
  colors?: string;
  textCenter?: boolean;
}

// Styles
import { StyledParagraph } from "./styled";

export default function Paragraph({
  children,
  bg = false,
  textCenter = false,
  colors,
}: ParagraphProps) {
  return (
    <StyledParagraph $color={colors} $bg={bg} $textCenter={textCenter}>
      {children}
    </StyledParagraph>
  );
}
