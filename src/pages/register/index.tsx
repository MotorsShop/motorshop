import Link from "next/link";
import Router from "next/router";
import { Container, ContainerTotal } from "./style";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

export default function Register() {

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
          <Input placeholder="Ex: Samuel leao" required type="text" name="name" />
          <label>Email</label>
          <Input placeholder="Ex: samuel@kenzie.com.br" required type="email" name="email" />
          <label>CPF</label>
          <Input placeholder="000.000.000-00" required type="text" name="cpf" />
          <label>Celular</label>
          <Input placeholder="(DDD) 90000-0000" required type="tel" name="phone" />
          <label>Data de Nascimento</label>
          <Input placeholder="00/00/00" required type="date" name="birthDate" />
          <label>Descrição</label>
          <Input placeholder="Digitar descrição" required type="text" name="description" />
          <p>Informações de Endereço</p>
          <label>CEP</label>
          <Input placeholder="CEP" required type="text" name="cep" />
          <div>
            <span>
              <label>Estado</label>
              <Input placeholder="Digitar estado" required type="text" width="95%" name="state" pattern="^(?:Acre|Alagoas|Amapá|Amazonas|Bahia|Ceará|Distrito\sFederal|Espírito\sSanto|Goiás|Maranhão|Mato\sGrosso|Mato\sGrosso\sdo\sSul|Minas\sGerais|Pará|Paraíba|Paraná|Pernambuco|Piauí|Rio\sde\sJaneiro|Rio\Grande\ndo\sNorte|Rio\Grande\ndo\sSul|Rondônia|Roraima|Santa\sCatarina|São\sPaulo|Sergipe|Tocantins)$" title="Insira um Estado Válido" />
            </span>
            <span>
              <label>Cidade</label>
              <Input placeholder="Digitar cidade" required type="text" width="95%" name="city" />
            </span>
          </div>
          <label>Rua</label>
          <Input placeholder="Digitar cidade" required type="text" name="street" />
          <div>
            <span>
              <label>Número</label>
              <Input placeholder="Digitar número" required type="number" width="95%" name="number" />
            </span>
            <span>
              <label>Complemento</label>
              <Input placeholder="Ex: apart 307" type="text" width="95%" name="complement" />
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
          <Input placeholder="Digitar senha" required type="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" title="A senha deve ter no mínimo 8 caracteres, sendo pelo menos um maiúsculo, um minúsculo e um número" />
          <label>Confirmar senha</label>
          <Input placeholder="Confirmar senha" required type="password" name="confirmPassword" pattern="^.*(?:(?<=\n)|(?<=\r))(\k<password>).*$" title="As senhas devem ser iguais" />
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
