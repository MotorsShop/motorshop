import { Container } from "./styles";
import Button from "../Button/Button";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Menu from "../Menu/Menu";

export default function ModalNavbar() {
  const { setIsLogged, isOpenMenu } = useContext(AuthContext);
  return (
    <Container>
      {isOpenMenu && <Menu />}
      {/* <Button
        value="Autenticar"
        borderColor="#DEE2E6"
        Propsfunction={() => setIsLogged(true)}
      />
      <Button
        value="Desautenticação"
        borderColor="#DEE2E6"
        Propsfunction={() => setIsLogged(false)}
      /> */}
    </Container>
  );
}
