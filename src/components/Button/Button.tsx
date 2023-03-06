import React from "react";
import { ContainerButton } from "./styles";

interface IpropsBotton{   
  color?: string;
  width?: string;
  value?: string;
  fontColor?: string
  borderColor?: string;
  Propsfunction?: any;
  padding?:string;
}
export default function Button({color, value, width, borderColor, fontColor, Propsfunction, padding}: IpropsBotton){
  
  const handleClick = () => {
   
    if(Propsfunction){
       Propsfunction()
    }
  }
  return (
    <ContainerButton color={color} width={width} borderColor={borderColor} fontColor={fontColor} padding={padding} onClick={handleClick}>
     {value}
    </ContainerButton>
  );
}
