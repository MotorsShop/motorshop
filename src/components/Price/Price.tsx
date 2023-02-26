import { Container } from "./styles";

interface Iprops{
  price:number;
  fontColor: string;
 
}

export default function Price({price, fontColor}: Iprops){
  return (
    <Container fontColor={fontColor}>
     R${
      price
     }
    </Container>
  );
}
