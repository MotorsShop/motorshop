
import React from "react";
import { Container } from "./styles";

interface Iprops {
  year: number;
  km: number;
}

export default function CarData({ year, km }: Iprops) {
  return (
    <Container>
      <span>{km} KM</span>
      <span>{year}</span> 
    </Container>
  );
}
