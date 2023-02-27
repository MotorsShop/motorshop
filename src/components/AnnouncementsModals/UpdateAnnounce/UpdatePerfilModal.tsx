import React, { useState } from "react";
import { Modal, Text } from "@nextui-org/react";
import Button from "@/components/Button/Button";
import { ContainerButton, ContainerForm, InputForm } from "./styles";

export default function ModalUpdatePerfilAnnounce() {
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
        fontColor={"#FFFFFF"}
        width="160px"
        color={"#4529E6"}
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
            Editar Anuncio
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <p>Informações pessoais</p>
            <label>Nome</label>
            <InputForm type="text" placeholder="Samuel Leão Silva" />
            <label>Email</label>
            <InputForm type="text" placeholder="samuel@kenzie.com.br" />
            <label>CPF</label>
            <InputForm type="text" placeholder="900.880.090-00" />
            <label>Celular</label>
            <InputForm type="text" placeholder="(084) 90909-9092" />
            <label>Data de nascimento</label>
            <InputForm type="text" placeholder="09/12/99" />
            <label>Descrição</label>
            <textarea name="" id="" cols={parseInt("30")} rows={parseInt("5")}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quisquam, accusantium recusandae, totam explicabo fuga non quo
              quasi natus maxime dignissimos quia facilis fugiat. Blanditiis
              facere tempore officia totam? Suscipit, consectetur.
            </textarea>
            <ContainerButton>
              <Button
                Propsfunction={handler}
                value={"Cancelar"}
                fontColor={"#495057"}
                width="126px"
                color={"#DEE2E6"}
              />
              <Button
                Propsfunction={handler}
                value={"Salvar alterações"}
                fontColor={"#FFFFFF"}
                width="193px"
                color={"#4529E6"}
              />
            </ContainerButton>
          </ContainerForm>
        </Modal.Body>
      </Modal>
    </div>
  );
}
