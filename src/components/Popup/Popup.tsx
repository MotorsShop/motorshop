import React from "react";
import { Container } from "./styles";
import { useState } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useContext } from "react";
export default function Popup() {
  const { listToast, setListToast} = useContext(ApiContext);
  
  
  const closeHandler = () => {
    setListToast([])
  };
  return (
    listToast && (
    
      <div>
        {listToast.map((ele, index) => (
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
            </div>
          </Container>
        ))}
      </div>
    )
  );
}
