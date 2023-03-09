import { ContainerNav } from "./styles";
import Image from "next/image";
import Link from "next/link";
import User from "../User/User";
import IconMenu from "../IconMenu/IconMenu";
import { useContext } from "react";
import Router from "next/router";
import Button from "../Button/Button";
import ModalNavbar from "../ModalNavbar/ContainerMain";
import { ApiContext } from "@/contexts/ApiContext";

export default function Navbar() {
  const { currentUser, isOpenMenu, setOpenMenu } = useContext(ApiContext);
 
  return (
    <>
    <ContainerNav>
      <figure onClick={()=> Router.push("/")}>
        <Image src="/Logo.svg" width={153.02} height={26.34} alt="logo" />
      </figure>
      <div>
        <ul>
          <li><Link href={"/"}>Carros</Link></li>
          <li><Link href={"/"}>Motos</Link></li>
          <li><Link href={"/"}>Leilão</Link></li>
        </ul>

        {currentUser ? (
          
          <div className="user" onClick={()=> isOpenMenu? setOpenMenu(false): setOpenMenu(true)}>
             <User fontColor="black"  name={currentUser.name}/>
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
