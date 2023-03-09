import React, { useContext} from "react";
import { ApiContext } from "@/contexts/ApiContext";
import FormAnnouncement from "@/components/FormAnnouncement/FormAnnouncement";
import ContainerModal from "@/components/ContainerModal/ContainerModal";

import { ModalContext } from "@/contexts/ModalContext";

export default function ModalUpdateAnnounce() {
  const { update } = useContext(ApiContext);
  const { modalEditeData, setModalEdite, modalEdite } = useContext(ModalContext);
  const closeHandler = () => {
    setModalEdite(false);
  };
  return (
    <>
      <ContainerModal title="Editar anúncio" open={modalEdite} close={setModalEdite}>
        <FormAnnouncement
          id={modalEditeData?.id}
          description={modalEditeData?.description}
          title={modalEditeData?.title}
          price={modalEditeData?.price}
          year={modalEditeData?.year}
          imageUrl={modalEditeData?.cover_img}
          images={modalEditeData?.images}
          km={modalEditeData?.km}
          functionRequest={update}
          type={"update"}
          closeHandler={closeHandler}
        />
      </ContainerModal>
    </>
  );
}
