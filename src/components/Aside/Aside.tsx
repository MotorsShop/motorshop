import { Container} from "./styles";
import Button from "../Button/Button";
import Grade from "../Grade/Grade";
import User from "../User/User";
import { Images } from "@/contexts/ApiContext";
import { IUser } from "@/@types/PropsComponents";
import { useRouter } from "next/router";
export interface Iprops{
  images?: Images[];
  author?: IUser;
}
export default function Aside({images, author}: Iprops){

  const router = useRouter()
  return (
    author ?
    <Container>
    
      <Grade list={images}/>
   
      <div className="cotainer-fixed_profile">
        <User
          type="profile"
          fontColor="white"
          name={author?.name}
          center={true}
        />

        <p>
          {author?.description}
        </p>
        <div className="container-btn">
          <Button
            Propsfunction={() => router.push(`/profiles/${author?.id}`)}
            color="black"
            fontColor="white"
            value="Ver todos os anuncios"
          />
        </div>
      </div>
    </Container>
    : <></>
  );
}
