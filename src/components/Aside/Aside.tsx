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
          <div className="whatsapp">
            <a href={`https:wa.me/55${"73981686666"}`} target="_blank" rel="noreferrer">
          < img className="what_img" src= "/assents/whatsapp.png"  />
            </a>
          </div>
          
        </div>
      </div>
    </Container>
  );
}
