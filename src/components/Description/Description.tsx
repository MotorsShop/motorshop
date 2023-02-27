import React from "react";
import { ContainerDescription} from "./styles";

interface Iprops{
  title: string;
  description: string;
  size: "small"| "medium"| "big";
  fontColor: string;
  lines?: string;
}

export default function Description ({title, description, size, fontColor, lines}: Iprops) {
  return (
    <ContainerDescription fontColor={fontColor}size={size} lines={lines}>
    <h2>{title}</h2>
    <p className="limit-css">{description}</p>
    </ContainerDescription>
  );
}
