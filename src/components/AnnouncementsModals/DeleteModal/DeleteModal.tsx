import React, { useState } from "react";
import { Modal, Text } from "@nextui-org/react";
import Button from "@/components/Button/Button";
import { ContainerButton, ContainerForm, InputForm } from "./styles";

export default function DeleteModal() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        Propsfunction={handler}
        value={"Excluir anúncio"}
        fontColor={"#495057"}
        width="262px"
        color={"#DEE2E6"}
      />

      <Modal
        css={{ height: "300px" }}
        width="528px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Excluir anúncio
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <p>Tem certeza que deseja remover este anúncio?</p>
            <p>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </p>
          </ContainerForm>
          <ContainerButton>
            <Button
              Propsfunction={handler}
              value={"Cancelar"}
              fontColor={"#495057"}
              width="126px"
              color={"#DEE2E6"}
            />{" "}
            <Button
              Propsfunction={handler}
              value={"Sim, excluir anúncio"}
              fontColor={"#CD2B31"}
              width="211px"
              color={"#FDD8D8"}
            />
          </ContainerButton>
        </Modal.Body>
      </Modal>
    </div>
  );
}
