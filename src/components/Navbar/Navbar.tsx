import { ContainerNav } from "./styles";
import Image from "next/image";
import Link from "next/link";
import User from "../User/User";
import IconMenu from "../IconMenu/IconMenu";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Router from "next/router";
import Button from "../Button/Button";
import ModalNavbar from "../ModalNavbar/ContainerMain";

export default function Navbar() {
  const { isLogged, isOpenMenu, setOpenMenu } = useContext(AuthContext);
  
  return (
    <>
    <ContainerNav>
      <figure>
        <Image src="/Logo.svg" width={153.02} height={26.34} alt="logo" />
      </figure>
      <div>
        <ul>
          <li><Link href={"/"}>Carros</Link></li>
          <li><Link href={"/"}>Motos</Link></li>
          <li><Link href={"/"}>Leilão</Link></li>
        </ul>

        {isLogged ? (
          
          <div className="user" onClick={()=> isOpenMenu? setOpenMenu(false): setOpenMenu(true)}>
             <User fontColor="black"  name="Usuário Doidão"/>
          </div>
        
        ) : (
          <ul className="container_btns">
            <li>
              <Button value="Fazer Login"  padding="0" fontColor={"#4529E6"} Propsfunction = {()=>Router.push("/login") } />
            </li>
            <li>
              <Button value="Cadastrar" width="120px" borderColor="#DEE2E6" Propsfunction = {()=>Router.push("/register") } />
            </li>
          </ul>
        )}
        <IconMenu />
      </div>
    </ContainerNav>
    <ModalNavbar/>
    </>
    
  );
}
