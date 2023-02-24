import { ContainerButton } from "./styles";
import { IpropsBotton } from "@/@types/PropsComponents";

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
