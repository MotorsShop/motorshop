import React, { useContext, useState } from "react";
import { Modal, Text, Input } from "@nextui-org/react";
import Button from "@/components/Button/Button";
import { ContainerButton, ContainerForm, InputForm } from "./styles";

export default function ModalUpdateAnnounce() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        Propsfunction={handler}
        value={"Editar"}
        fontColor={"#000000"}
        width="100px"
        borderColor={"#000000"}
      />

      <Modal
        css={{ height: "720px" }}
        width="550px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Criar Anuncio
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <p>Tipo de anuncio</p>
            <ContainerButton>
              <Button
                Propsfunction={handler}
                value={"Venda"}
                fontColor={"#FFFFFF"}
                width="228px"
                color={"#4529E6"}
              />
              <Button
                Propsfunction={handler}
                value={"Leilão"}
                width="228px"
                borderColor={"#ADB5BD"}
              />
            </ContainerButton>
            <p>Informações do veículo</p>
            <label>Título</label>
            <InputForm
              type="text"
              placeholder="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
            />
            <label>Ano</label>
            <InputForm type="text" placeholder="2018" />
            <label>Quilometragem</label>
            <InputForm type="text" placeholder="0" />
            <label>Preço</label>
            <InputForm type="text" placeholder="50.000,00" />
            <label>Descrição</label>
            <textarea name="" id="" cols={parseInt("30")} rows={parseInt("4")}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, accusantium recusandae, totam explicabo fuga non quo
              quasi natus maxime dignissimos quia facilis fugiat. Blanditiis
              facere tempore officia totam? Suscipit, consectetur.
            </textarea>
            <p>Tipo de veículo</p>
            <ContainerButton>
              <Button
                Propsfunction={handler}
                value={"Carro"}
                fontColor={"#FFFFFF"}
                width="228px"
                color={"#4529E6"}
              />
              <Button
                Propsfunction={handler}
                value={"Moto"}
                width="228px"
                borderColor={"#ADB5BD"}
              />
            </ContainerButton>
            <p>Publicados</p>
            <ContainerButton>
              <Button
                Propsfunction={handler}
                value={"Sim"}
                width="228px"
                borderColor={"#ADB5BD"}
              />
              <Button
                Propsfunction={handler}
                value={"Não"}
                fontColor={"#FFFFFF"}
                width="228px"
                color={"#4529E6"}
              />
            </ContainerButton>
            <label>Imagem da capa</label>
            <InputForm type="text" placeholder="https://image.com" />
            <label>1º imagem da galeria</label>
            <InputForm type="text" placeholder="https://image.com" />
            <label>2º imagem da galeria</label>
            <InputForm type="text" placeholder="https://image.com" />
            <Button
              Propsfunction={handler}
              value={"Adicionar campo para imagem da galeria"}
              fontColor={"#4529e6"}
              width="370px"
              color={"#EDEAFD"}
            />
            <ContainerButton>
              <Button
                Propsfunction={handler}
                value={"Excluir anúncio"}
                fontColor={"#495057"}
                width="262px"
                color={"#DEE2E6"}
              />
              <Button
                Propsfunction={handler}
                value={"Salvar alterações"}
                width="193px"
                color={"#B0A6F0"}
                fontColor={"#EDEAFD"}
              />
            </ContainerButton>
          </ContainerForm>
        </Modal.Body>
      </Modal>
    </div>
  );
}
