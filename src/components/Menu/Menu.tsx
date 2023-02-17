import { ContainerMenu } from "./styles";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
export default function Menu() {
  const {setOpenMenu} = useContext(AuthContext)
  return (
    <Modal types="navbar" functionClose={setOpenMenu}>
      <ContainerMenu>
        <ul>
          <li>Carros</li>
          <li>Motos</li>
          <li>Leilão</li>
        </ul>
        <ul>
          <li>
            <Button value="Fazer Login" padding="0" />
          </li>
          <li>
            <Button value="Cadastrar" width="100%" borderColor="#DEE2E6" />
          </li>
        </ul>
      </ContainerMenu>
    </Modal>
  );
}
