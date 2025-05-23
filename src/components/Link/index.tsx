// Styles
import { Anchor, Paragraph } from "./styled";

// React Router Dom
import type { LinkProps } from "react-router-dom";

export interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
  bg?: boolean;
  width?: string;
  height?: string;
}

export default function CustomLink({
  children,
  bg = false,
  width,
  height,
  ...rest
}: CustomLinkProps) {
  return (
    <Anchor $bg={bg} $width={width} $height={height} {...rest}>
      <Paragraph $bg={bg}>{children}</Paragraph>
    </Anchor>
  );
}
