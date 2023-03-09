import React from "react";
import FormAnnouncement from "@/components/FormAnnouncement/FormAnnouncement";
import { useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import ContainerModal from "@/components/ContainerModal/ContainerModal";
import { ModalContext } from "@/contexts/ModalContext";
export default function ModalAnnounce() {

  const { post } = useContext(ApiContext);
  const { setModalCreate, modalCreate } = useContext(ModalContext);
 

  const closeHandler = () => {
    setModalCreate(false);
  };

  
  return (
    <div>
      <ContainerModal title="Criar anúncio" open={modalCreate} close={setModalCreate}>
      <FormAnnouncement type={"create"} functionRequest={post} closeHandler={closeHandler} />
      </ContainerModal>
    </div>
  );
}
