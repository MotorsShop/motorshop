import { ContainerProfile } from "./styles";
import Carousels from "../Carousels/Carousels";
import User from "@/components/User/User";
import Button from "@/components/Button/Button";
import Carousel from "@/components/Carousel/Carousel";
import Auction from "@/components/Auction/Auction";
import ModalAnnounce from "@/components/AnnouncementsModals/CreateAnnounce/CreateModal";
interface Iprops {
  profile?: boolean;
  auction?: any[];
}
export function ProfileMain({ profile, auction }: Iprops) {
  return (
    <ContainerProfile>
      <div className="container">
        <div className="container-user">
          <User
            fontColor="white"
            typeUser="advertiser"
            name="Usuário Doidão"
            type="profile"
            path="/profile"
          />
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s
          </div>
          {
            profile &&  <ModalAnnounce/>
          }
          
        </div>
        <div className="container-back" />
      </div>
      {profile && (
        <Carousel title={"Leilão"}>
          {auction &&
            auction.map((ele, index) => (
              <Auction
                profile
                price={ele.price}
                advertiser="Pedro Silva"
                year={ele.year}
                km={ele.km}
                title={ele.title}
                description={ele.description}
                key={index}
                imageUrl={ele.cover_img}
              />
            ))}
        </Carousel>
      )}
      <Carousels profile={profile} />
    </ContainerProfile>
  );
}
