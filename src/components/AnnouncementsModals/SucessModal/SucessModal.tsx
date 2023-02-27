import React, { useState } from "react";
import { Modal, Text } from "@nextui-org/react";
import Button from "@/components/Button/Button";
import { ContainerButton, ContainerForm, InputForm } from "./styles";

export default function SucessModal() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        Propsfunction={handler}
        value={"Sucesso"}
        fontColor={"#FFFFFF"}
        width="160px"
        color={"#4529E6"}
      />

      <Modal
        css={{ height: "229px" }}
        width="520px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Sucesso!
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ContainerForm>
            <p>Seu anúncio foi criado com sucesso!</p>
            <p>
              Agora você poderá ver seus negócios crescendo em grande escala
            </p>
          </ContainerForm>
        </Modal.Body>
      </Modal>
    </div>
  );
}
