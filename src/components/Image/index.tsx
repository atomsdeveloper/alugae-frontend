import React from "react";

// Styles
import { Image } from "./styled";

export default function CustomImage(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  return <Image {...props} />;
}
