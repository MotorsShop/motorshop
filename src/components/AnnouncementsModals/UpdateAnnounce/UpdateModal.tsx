import React, { useContext, useState } from "react";
import { Modal } from "@nextui-org/react";
import Button from "@/components/Button/Button";
import { ApiContext } from "@/contexts/ApiContext";
import FormAnnouncement from "@/components/FormAnnouncement/FormAnnouncement";

export interface IAnnouncement {
  id: string;
  title: string;
  description: string;
  year: number;
  km: number;
  advertiser: string;
  price: number;
  imageUrl: string;
  profile?: boolean;
  images: string[];
}

export default function ModalUpdateAnnounce({
  id,
  description,
  title,
  price,
  year,
  imageUrl,
  images,
  km,
}: IAnnouncement) {
  const [visible, setVisible] = useState(false);
  const { update } = useContext(ApiContext);
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
        css={{ maxHeight: "900px" }}
        width="550px"
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <FormAnnouncement
            id={id}
            description={description}
            title={title}
            price={price}
            year={year}
            imageUrl={imageUrl}
            images={images}
            km={km}
            functionRequest={update}
            type={"update"}
            closeHandler={closeHandler}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
