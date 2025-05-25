// Styles
import { Anchor } from "./styled";

// Components
import Paragraph from "../Paragraph";

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
      <Paragraph>{children}</Paragraph>
    </Anchor>
  );
}
