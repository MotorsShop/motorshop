import { Container } from "./styles";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Menu from "../Menu/Menu";

export default function ModalNavbar() {
  const { isOpenMenu } = useContext(ApiContext);

  return (
    isOpenMenu ? (
      <Container>
        <Menu />
      </Container>
    ):
    <></>
  );
}
