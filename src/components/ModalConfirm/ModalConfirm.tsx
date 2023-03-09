import React from "react";
import { Container } from "./styles";
import { ApiContext } from "@/contexts/ApiContext";
import { useContext } from "react";
import Button from "../Button/Button";
export default function ModalConfirme() {
  const { confirmeModal, setConfirmeModal} = useContext(ApiContext);
  const closeHandler = () => {
    setConfirmeModal([])
  };
  return (
    confirmeModal && (
    
      <div>
        {confirmeModal.map((ele, index) => (
          <Container onClick={closeHandler} key={index}>
            <div>
              <div className="header">
                <h3>{ele.header}</h3>
                <button onClick={closeHandler}>X</button>
              </div>
              <div className="body">
                <h3>{ele.title}</h3>
                <p>{ele.text}</p>
              </div>
              <div className="container-btns">
              <Button Propsfunction={ele.functionAction} fontColor="##495057" color={"#DEE2E6"}value="Cancelar"/>
              <Button Propsfunction={ele.functionAction} fontColor="#CD2B31" color={"#FDD8D8"}value="Sim, excluir anúncio"/>
              </div>
              
              
            </div>
            
          </Container>
        ))}
      </div>
    )
  );
}
