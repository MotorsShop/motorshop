import { ContainerFooter } from "./styles";
import Image from "next/image";
export default function Footer() {
  return (
    <ContainerFooter>
      <Image
        src={"/LogoWhite.svg"}
        width={153}
        height={26}
        alt={"logo"}
      ></Image>
      <p>© 2022 - Todos os direitos reservados.</p>
      <button>
        <Image src={"/AngleUp.svg"} width={16} height={16} alt={"logo"}></Image>
      </button>
    </ContainerFooter>
  );
}
