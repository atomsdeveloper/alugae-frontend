// Styles
import { Anchor } from "./styled";

// React Router Dom
import type { LinkProps } from "react-router-dom";

export interface CustomLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function CustomLink({ children, ...rest }: CustomLinkProps) {
  return <Anchor {...rest}>{children}</Anchor>;
}
