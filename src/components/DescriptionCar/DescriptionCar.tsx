import { Container } from "./styles";
import Image from "next/image";
interface Iprops{
  description: string
}
export default function DescriptionCar({description}: Iprops) {
  return (
    <Container>
      <h2>Descrição</h2>
      <p>
        {
          description
        }
      </p>
    </Container>
  );
}
