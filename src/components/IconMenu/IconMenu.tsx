import { ContainerIconMenu } from "./styles";
import Image from "next/image";
import { useContext } from "react";


import React from "react";
import { ApiContext } from "@/contexts/ApiContext";

export default function IconMenu() {

  const {isOpenMenu, setOpenMenu} = useContext(ApiContext)
  return (
    <ContainerIconMenu onClick={()=>isOpenMenu? setOpenMenu(false): setOpenMenu(true)}>
      <Image width={30} height={30} src={isOpenMenu? "/Close.svg" : "/Menu.svg"} alt={"Icon_menu"}/>
    </ContainerIconMenu>
  );
}
