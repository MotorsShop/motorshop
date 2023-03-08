import Link from "next/link"
import { Container, ContainerTotal } from "./style"
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Router from "next/router";

export default function Login() {

  const redirect = (data: string) => {
    Router.push(data);
  };

  return (
    <>
      <ContainerTotal>
        <Container>
          <h1>Login</h1>
          <label>Usuário</label>
          <Input placeholder="Digitar usuário" required type="text" name="name" />
          <label>Senha</label>
          <Input placeholder="Digitar senha" required type="password" name="password" />
          <button className="buttonForgotPassword">Esqueci minha senha</button>
          <Button
            value="Entrar"
            borderColor="#4529E6"
            color="#4529E6"
            width="100%"
            fontColor="#DEE2E6"
            Propsfunction={() => redirect("/profile")}
          />
          <div>
            <p>Ainda não possui conta?</p>
          </div>
          <Button
            value="Cadastre-se"
            borderColor="#4529E6"
            color="#4529E6"
            width="100%"
            fontColor="#DEE2E6"
            Propsfunction={() => redirect("/register")}
          />
        </Container>
      </ContainerTotal>
    </>

  )
}
