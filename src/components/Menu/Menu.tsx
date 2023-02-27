import { ContainerMenu } from "./styles";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Link from "next/link";
import Router from "next/router";
import React from "react";

export default function Menu() {
  const { setOpenMenu, isLogged } = useContext(AuthContext);

  const redirect = (url: string) =>{
    Router.push(url)
    setOpenMenu(false)
  }
  return (
    <Modal types="navbar" functionClose={setOpenMenu}>
      <ContainerMenu>
        {isLogged ? (
          <ul>
            <li>Editar Perfil</li>
            <li>Editar endereço</li>
            <li>Meus anúncios</li>
            <li>Sair</li>
          </ul>
        ) : (
          <>
            <ul>
              <li><Link onClick={()=> setOpenMenu(false)} href={"/cars"}>Carros</Link></li>
              <li><Link onClick={()=> setOpenMenu(false)} href={"/motorcycles"}>Motos</Link></li>
              <li><Link onClick={()=> setOpenMenu(false)} href={"/auction"}>Leilão</Link></li>
            </ul>
            <ul>
              <li>
                <Button value="Fazer Login" padding="0" Propsfunction = {()=>redirect("/login")} />
              </li>
              <li>
                <Button value="Cadastrar" width="100%" borderColor="#DEE2E6" Propsfunction = {()=>redirect("/register")}/>
              </li>
            </ul>
          </>
        )}
      </ContainerMenu>
    </Modal>
  );
}
