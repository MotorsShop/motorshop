import { Container} from "./styles";
import Button from "../Button/Button";
import Grade from "../Grade/Grade";
import User from "../User/User";
import { arrayImg } from "public/mockup";
import { Images } from "@/contexts/ApiContext";

export interface Iprops{
  images?: Images[];
}
export default function Aside({images}: Iprops){
  return (
    <Container>
    
      <Grade list={images}/>
   
      <div className="cotainer-fixed_profile">
        <User
          path="/profile"
          type="profile"
          fontColor="white"
          name="Usuário doidão"
          center={true}
        />

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
        <div className="container-btn">
          <Button
            color="black"
            fontColor="white"
            value="Ver todos os anuncios"
          />
        </div>
      </div>
    </Container>
  );
}
