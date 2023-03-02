/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";
interface Iprops{
  img: string;
}

export default function PhotoCar({img}: Iprops) {
  return (
    <Container>
      <figure>
        <img draggable="false" src={img} alt="car"></img>
      </figure>
    </Container>
  );
}
