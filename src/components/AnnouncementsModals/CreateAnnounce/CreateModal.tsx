import React, { useEffect, useRef, useState } from "react";
import { Modal, Text, Input, Container } from "@nextui-org/react";
import Button from "@/components/Button/Button";
import FormAnnouncement from "@/components/FormAnnouncement/FormAnnouncement";
export default function ModalAnnounce() {
  const [visible, setVisible] = useState(false);

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button
        Propsfunction={handler}
        value={"Criar anuncio"}
        fontColor={" #4529E6;"}
        width="160px"
        borderColor={"#4529E6"}
      />

      <Modal
        css={{ maxHeight: "1000px" }}
        width="550px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        
        <Modal.Body>
         
          <FormAnnouncement closeHandler={closeHandler} />
          
        </Modal.Body>
      </Modal>
    </div>
  );
}
