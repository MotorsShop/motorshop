import { ContainerNav } from "./styles";
import Image from "next/image";
import Link from "next/link";
import User from "../User/User";
import IconMenu from "../IconMenu/IconMenu";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Button from "../Button/Button";
export default function Navbar() {
  const { isLogged } = useContext(AuthContext);
  return (
    <ContainerNav>
      <figure>
        <Image src="/Logo.svg" width={153.02} height={26.34} alt="logo" />
      </figure>
      <div>
        <ul>
          <li>Carros</li>
          <li>Motos</li>
          <li>Leilão</li>
        </ul>

        {isLogged ? (
          <User />
        ) : (
          <ul className="container_btns">
            <li>
              <Button value="Fazer Login"  padding="0" fontColor={"#4529E6"} />
            </li>
            <li>
              <Button value="Cadastrar" width="120px" borderColor="#DEE2E6" />
            </li>
          </ul>
        )}
        <IconMenu />
      </div>
    </ContainerNav>
  );
}
