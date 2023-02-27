import { ContainerIconMenu } from "./styles";
import Image from "next/image";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import React from "react";

export default function IconMenu() {

  const {isOpenMenu, setOpenMenu} = useContext(AuthContext)
  return (
    <ContainerIconMenu onClick={()=>isOpenMenu? setOpenMenu(false): setOpenMenu(true)}>
      <Image width={30} height={30} src={isOpenMenu? "/Close.svg" : "/Menu.svg"} alt={"Icon_menu"}/>
    </ContainerIconMenu>
  );
}
