import { ContainerProfile } from "./styles";
import Carousels from "../Carousels/Carousels";
import User from "@/components/User/User";

export default function ProfileMain() {
  return (
    <ContainerProfile>
      <div className="container">
        <div className="container-user">
          <User
            fontColor="white"
            typeUser="advertiser"
            name="Usuário Doidão"
            profile={true}
            path="/profile"
          />
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </div>
        </div>
        <div className="container-back" />
      </div>
      <Carousels />
    </ContainerProfile>
  );
}
