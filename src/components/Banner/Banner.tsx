import { ContainerBanner } from "./styles";
import Router from "next/router";
import Button from "../Button/Button";
import React from "react";
export default function Banner() {
  const redirect = (data: string) => {
    Router.push(data);
  };

  return (
    <ContainerBanner>
      <div>
        <h2>Velocidade e experiência em um lugar feito para você</h2>
        <p>Um ambiente feito para você explorar o seu melhor</p>
        <div>
          <Button
            value="Carros"
            borderColor="#DEE2E6"
            width="120px"
            fontColor="#DEE2E6"
            Propsfunction={() => redirect("/cars")}
          />
          <Button
            value="Motos"
            width="120px"
            fontColor="#DEE2E6"
            borderColor="#DEE2E6"
            Propsfunction={() => redirect("/motorcycles")}
          />
        </div>
      </div>
    </ContainerBanner>
  );
}
