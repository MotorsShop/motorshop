import { ContainerTime} from "./styles";
import Image from "next/image";
export default function Timer() {
  return (
    <ContainerTime>
      <figure>
      <Image alt="icon" src={"/Timer.svg"} fill/>
      </figure>
     
      <p>01:58:00</p>
    </ContainerTime>
  );
}
