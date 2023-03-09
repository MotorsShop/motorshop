import Link from "next/link";
import Router from "next/router";
import { Container, ContainerTotal } from "./styles";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function ContainerRegister() {
  const redirect = (data: string) => {
    Router.push(data);
  };

  return (
    <>
      <ContainerTotal>
        <Container>
          <h1>Cadastro</h1>
          <p>Informações Pessoais</p>
          <label>Nome</label>
          <Input placeholder="Ex: Samuel leao" required type="text" />
          <label>Email</label>
          <Input placeholder="Ex: samuel@kenzie.com.br" required type="email" />
          <label>CPF</label>
          <Input placeholder="000.000.000-00" required type="text" />
          <label>Celular</label>
          <Input placeholder="(DDD) 90000-0000" required type="tel" />
          <label>Data de Nascimento</label>
          <Input placeholder="00/00/00" required type="date" />
          <label>Descrição</label>
          <Input placeholder="Digitar descrição" required type="text" />
          <p>Informações de Endereço</p>
          <label>CEP</label>
          <Input placeholder="CEP" required type="text" />
          <div>
            <span>
              <label>Estado</label>
              <Input
                placeholder="Digitar estado"
                required
                type="text"
                width="95%"
              />
            </span>
            <span>
              <label>Cidade</label>
              <Input placeholder="00000.000" required type="text" width="95%" />
            </span>
          </div>
          <label>Rua</label>
          <Input placeholder="Digitar cidade" required type="text" />
          <div>
            <span>
              <label>Número</label>
              <Input
                placeholder="Digitar número"
                required
                type="number"
                width="95%"
              />
            </span>
            <span>
              <label>Complemento</label>
              <Input placeholder="Ex: apart 307" type="text" width="95%" />
            </span>
          </div>
          <p>Tipo de Conta</p>
          <div>
            <Button
              value="Comprador"
              borderColor="#4529E6"
              color="#4529E6"
              width="45%"
              fontColor="#DEE2E6"
            />
            <Button
              value="Anunciante"
              borderColor="#4529E6"
              color="#4529E6"
              width="45%"
              fontColor="#DEE2E6"
            />
          </div>
          <label>Senha</label>
          <Input placeholder="Digitar senha" required type="text" />
          <label>Confirmar senha</label>
          <Input placeholder="Confirmar senha" required type="text" />
          <Button
            value="Finalizar cadastro"
            borderColor="#4529E6"
            color="#4529E6"
            width="100%"
            fontColor="#DEE2E6"
            Propsfunction={() => redirect("/login")}
          />
        </Container>
      </ContainerTotal>
    </>
  );
}
