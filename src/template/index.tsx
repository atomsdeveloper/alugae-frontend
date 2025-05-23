import { Container } from "../styles/globals";

export interface ChildrenTemplates {
  children: React.ReactNode;
}

export default function Template({ children }: ChildrenTemplates) {
  return <Container>{children}</Container>;
}
