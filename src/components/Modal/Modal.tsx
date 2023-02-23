import { ContainerModal, Overlay } from "./styles";
import { IpropsModal } from "@/@types/PropsComponents";

export default function Modal({types, children, functionClose}: IpropsModal){

  return (
    <>
    <ContainerModal types={types}>
     {children}
    </ContainerModal>
    <Overlay onClick={()=>functionClose(false)} />
    </>
    
  );
}
