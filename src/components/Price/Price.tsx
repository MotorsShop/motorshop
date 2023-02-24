import { Container } from "./styles";

interface Iprops{
  price:string;
  fontColor: string;
 
}

export default function Price({price, fontColor}: Iprops){
  return (
    <Container fontColor={fontColor}>
     {
      price
     }
    </Container>
  );
}
